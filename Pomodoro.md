---
title: Pomodoro Timer
public: true
---

# Pomodoro Timer

<div id="pomodoro" :class="stateClass" style="text-align:center; margin:4rem 0 6rem;">
  <div
    class="time"
    :class="colourClass"
    :style="blinkStyle"
    v-on:dblclick="togglePip"
    title="Double click for PiP"
  >{{ mm }}<span class="colon">:</span>{{ ss }}</div>
  <div style="margin:1rem 0; display:flex; gap:0.5rem; justify-content:center; flex-wrap:wrap;">
    <button class="btn" v-on:click="start" :disabled="running">Start</button>
    <button class="btn" v-on:click="pause" :disabled="!running">Pause</button>
    <button class="btn" v-on:click="reset">Reset</button>
    <button class="btn" v-on:click="toggleLength">{{ lengthLabel }}</button>
  </div>
</div>

<script>
export default {
  setup() {
    // Configuration lengths (ms)
    const lengths = [25 * 60 * 1000, 5 * 60 * 1000]; // focus, short break
    const lengthIndex = Vue.ref(0);
    const currentLength = Vue.computed(() => lengths[lengthIndex.value]);

    // Reactive state
    const targetTime = Vue.ref(null); // epoch ms when timer ends
    const remainingMs = Vue.ref(currentLength.value);
    const running = Vue.ref(false);
    const wakeLock = Vue.ref(null);
    let rafId = null;

    const fiveMinutes = 5 * 60 * 1000;
    const oneMinute = 60 * 1000;
    const tenSeconds = 10 * 1000;

    function computeRemaining() {
      if (!running.value || !targetTime.value) return remainingMs.value;
      const now = Date.now();
      const remain = targetTime.value - now;
      remainingMs.value = remain > 0 ? remain : 0;
      if (remain <= 0) {
        stopInternal();
      }
      return remainingMs.value;
    }

    function tick() {
      computeRemaining();
      if (running.value) {
        rafId = requestAnimationFrame(tick); // smooth + low overhead
      }
    }

    function requestWakeLock() {
      if ('wakeLock' in navigator) {
        navigator.wakeLock.request('screen').then(lock => {
          wakeLock.value = lock;
          lock.addEventListener('release', () => {
            wakeLock.value = null;
          });
        }).catch(() => {});
      }
    }
    function releaseWakeLock() {
      if (wakeLock.value) {
        wakeLock.value.release().catch(() => {});
        wakeLock.value = null;
      }
    }

    function start() {
      if (running.value) return;
      const base = remainingMs.value; // remaining from pause or full length
      targetTime.value = Date.now() + base;
      running.value = true;
      requestWakeLock();
      tick();
    }
    function stopInternal() {
      running.value = false;
      releaseWakeLock();
      if (rafId) cancelAnimationFrame(rafId);
      rafId = null;
    }
    function pause() {
      if (!running.value) return;
      computeRemaining();
      stopInternal();
    }
    function reset() {
      stopInternal();
      remainingMs.value = currentLength.value;
      targetTime.value = null;
      closePip();
    }
    function toggleLength() {
      const wasRunning = running.value;
      pause();
      lengthIndex.value = (lengthIndex.value + 1) % lengths.length;
      remainingMs.value = currentLength.value;
      if (wasRunning) start();
      updatePip();
    }

    // Formatters
    const mm = Vue.computed(() => {
      const m = Math.floor(remainingMs.value / 60000);
      return String(m).padStart(2, '0');
    });
    const ss = Vue.computed(() => {
      const s = Math.floor((remainingMs.value % 60000) / 1000);
      return String(s).padStart(2, '0');
    });

    // Colour / style logic
    const colourClass = Vue.computed(() => {
      if (remainingMs.value <= tenSeconds) return 'urgent';
      if (remainingMs.value <= oneMinute) return 'red';
      if (remainingMs.value <= fiveMinutes) return 'yellow';
      return 'normal';
    });

    const blinkStyle = Vue.computed(() => {
      // Final 10s continuous blink
      if (remainingMs.value <= tenSeconds && remainingMs.value > 0) {
        const visible = Math.floor(remainingMs.value / 500) % 2 === 0;
        return { visibility: visible ? 'visible' : 'hidden' };
      }
      // Every minute's :59 and :58 seconds below 5 minutes
      if (remainingMs.value < fiveMinutes && remainingMs.value > tenSeconds) {
        const sec = parseInt(ss.value, 10);
        if (sec === 59) {
          const visible = (remainingMs.value % 500) > 250; // hide first half each 500ms
          return { visibility: visible ? 'visible' : 'hidden' };
        }
      }
      return {};
    });

    const lengthLabel = Vue.computed(() => lengthIndex.value === 0 ? '25/5 ↺' : 'Break 5m');

    // Picture-in-Picture (Document PiP) support
    const pipWin = Vue.ref(null);
    async function openPip() {
      if (pipWin.value) return;
      if (window.documentPictureInPicture && documentPictureInPicture.requestWindow) {
        try {
          const w = await documentPictureInPicture.requestWindow({ width: 260, height: 128 });
          pipWin.value = w;
          w.document.title = 'Pomodoro';
          const style = w.document.createElement('style');
          style.textContent = `
            html, body {
              margin: 0;
              background: #000;
              color: #ddd;
              display: flex;
              height: 90vh;
              align-items: center;
              justify-content: center;
              font: 600 30vw system-ui;
              font-variant-numeric: tabular-nums;
            }
            .yellow { color: #d4c34f; }
            .red { color: #e05d48; }
            .urgent { color: #ff3b30; }
          `;
          w.document.head.appendChild(style);
          const div = w.document.createElement('div');
          div.id = 'pipTime';
          w.document.body.appendChild(div);
          w.addEventListener('pagehide', closePip);
          w.addEventListener('unload', closePip);
          updatePip();
        } catch (e) {
          console.warn('PiP failed', e);
        }
      } else {
        alert('Document Picture-in-Picture not supported in this browser yet.');
      }
    }
    function closePip() {
      if (pipWin.value && !pipWin.value.closed) {
        try { pipWin.value.close(); } catch(_) {}
      }
      pipWin.value = null;
    }
    function togglePip() {
      if (pipWin.value) closePip(); else openPip();
    }
    function pipColourClass() {
      if (remainingMs.value <= tenSeconds) return 'urgent';
      if (remainingMs.value <= oneMinute) return 'red';
      if (remainingMs.value <= fiveMinutes) return 'yellow';
      return '';
    }
    function updatePip() {
      if (!pipWin.value) return;
      const el = pipWin.value.document.getElementById('pipTime');
      if (!el) return;
      el.className = pipColourClass();
      el.textContent = `${mm.value}:${ss.value}`;
    }

    // Update document title once per second
    let titleInterval = null;
    const updateTitle = () => {
      if (remainingMs.value === 0) {
        document.title = `Done · Pomodoro`;
        return;
      }
      const label = `${mm.value}:${ss.value}`;
      document.title = running.value ? `${label} · Pomodoro` : `⏸ ${label} · Pomodoro`;
    };
    function startTitleUpdates() {
      if (titleInterval) return;
      updateTitle();
      titleInterval = setInterval(() => { updateTitle(); updatePip(); }, 1000);
    }
    function stopTitleUpdates() {
      if (titleInterval) { clearInterval(titleInterval); titleInterval = null; }
      updateTitle();
      updatePip();
    }

    // Handle visibility (reacquire wake lock if needed)
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible' && running.value && !wakeLock.value) {
        requestWakeLock();
      }
    });

    // Watches
    Vue.watch(running, (val) => {
      if (val) startTitleUpdates(); else stopTitleUpdates();
    }, { immediate: true });
    Vue.watch(remainingMs, () => { updateTitle(); updatePip(); });

    // Initialize
    reset();

    return { mm, ss, start, pause, reset, toggleLength, running, colourClass, blinkStyle, lengthLabel, togglePip };
  }
}
</script>

<style scoped>
#pomodoro .time {
  font-size: 8rem;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  line-height: 1;
  color: #888;
  transition: color 0.2s ease;
}
#pomodoro button.btn {
  padding: 0.3rem 0.5rem;
}
#pomodoro .time.yellow { color: #d4c34f; }
#pomodoro .time.red { color: #e05d48; }
#pomodoro .time.urgent { color: #ff3b30; }
#pomodoro button.btn:disabled { opacity: 0.4; cursor: default; }
#pomodoro .colon { opacity: 0.7; }
</style>

:::details[About this tool]

- A super minimal Pomodoro timer I can pop open in a tab.
- Keeps the screen awake while running.
- Double-click the time for a PiP window (if browser supports Document PiP).

:::
