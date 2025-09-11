---
title: Major scale practice trainer
public: true
---

# Major scale practice trainer

I built this tool to help me practice major scales on the piano.

:::details[How to use]

1. Connect your MIDI keyboard to your computer.
2. Ensure your browser supports Web MIDI API [(check browser support)](https://caniuse.com/midi).
3. Allow the browser to access your MIDI device when prompted.
4. For general practice directions, follow the [How to Practice Major Scales](https://www.youtube.com/watch?v=VI9ZOzRSpRc) video by Aimee Nolte. i.e. go 2 octaves up and down.
5. Start playing a major scale on your MIDI keyboard. The tool will automatically detect which scale you're playing based on the first note. The attempt is successful once you've played the scale successfully.

Rules:

- Play the scale ascending (2 octaves) and descending (2 octaves), ending on the root note.
- In addition to the notes above, you may play any other notes in the scale using the other hand. This is to support playing the scale with contrary motion.
- Only notes within the current scale are allowed.
- You have 1 second between each note before a timeout occurs.
- The scale is considered complete when you've played all 29 notes in the correct sequence (14 ascending, 14 descending, plus the final root note).
- If you make a mistake or timeout, the attempt will be marked as failed, and you can start over.
- A sound will play to indicate success (ascending tone) or failure (descending tone) if audio feedback is enabled.
- Your progress and statistics are logged and can be viewed or copied from the text area.

:::

Status: {{status}}

<textarea class="form-control" rows="8" readonly :value="log"></textarea>

<p class="flex gap-3 flex-wrap items-center">
  <button class="btn" @click="log = defaultLog">Clear log</button>
  <button class="btn" @click="copyLog()">Copy</button>
  <button class="btn" @click="toggleSound()">{{sound ? 'Disable' : 'Enable'}} feedback sound</button>
  <span>
    ✅ {{log.split('✅').length - 1}} &nbsp; ❌ {{log.split('❌').length - 1}}
  </span>
</p>

<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue';

let midiAccess;
let midiInputs;
let unmounted = false
let sound = ref(false)
let audioContext

function toggleSound () {
  sound.value = !sound.value
  if (sound.value && !audioContext) {
    audioContext = new AudioContext()
  }
}

const defaultLog = 'Log messages\n';
const log = ref(defaultLog);
const status = ref('Loading…');

function writeLog(message) {
  log.value += message + '\n';
}

let loaded = false
const localStorageKey = 'PianoMajorScaleTrainer:log'

onMounted(async () => {
  try {
    midiAccess = await navigator.requestMIDIAccess();
    midiInputs = Array.from(midiAccess.inputs.values());
    midiInputs.forEach(input => {
      input.onmidimessage = handleMIDIMessage;
    });
    midiAccess.onstatechange = handleStateChange;
    status.value = 'Ready.';
    if (localStorage[localStorageKey]) {
      log.value = localStorage[localStorageKey]
    }
    loaded = true
    watch(log, (newValue) => {
      if (loaded) {
        localStorage.setItem(localStorageKey, newValue);
      }
    });
  } catch (error) {
    console.error('Failed to get MIDI access:', error);
  }
});
onUnmounted(async () => {
  unmounted = true
})

let active

function createRecognizer() {
  let notes = []
  setTimeout(() => {
    active = undefined
    commitNotes(notes)
  }, 100)
  return {
    handleNote(note) {
      console.log(note)
      note %= 12
      notes = [...new Set([...notes, note])].sort((a, b) => a - b)
      status.value = `Notes: ${notes.join(' ')}`
    }
  }
}

let currentScale
function commitNotes(notes) {
  if (!currentScale && notes.length === 1) {
    currentScale = createScaleRecognizer(notes[0])
  }
  if (currentScale) {
    currentScale.handleNotes(notes)
  }
}

const scales = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']

function createScaleRecognizer(root) {
  const start = Date.now()
  let timeout
  let progress = 0
  const transpose = (v) => (v + root) % 12
  let expected = [
    0, 2, 4, 5, 7, 9, 11, 0, 2, 4, 5, 7, 9, 11,
    0, 11, 9, 7, 5, 4, 2, 0, 11, 9, 7, 5, 4, 2, 0
  ].map(transpose)
  const allowed = new Set(expected)
  let done = false
  let completed = false
  let played = 0
  let failReason = ''
  function update () {
    status.value = `Key: ${scales[root]}, progress: ${progress}/${expected.length}` +
      (failReason ? ` (Failed: ${failReason})` : '') +
      (completed ? ' (Completed)' : '')
  }
  function fail (reason) {
    done = true
    failReason = reason
    currentScale = undefined
    update()
    logCompletion()
    playSound(root, [0, -6])
  }
  function logCompletion() {
    const totalTime = Date.now() - start
    const notesPerMinute = Math.max(played - 1, 1) / (totalTime / 60000)
    const newLine = [
      completed ? '✅' : '❌',
      new Date(start).toISOString(),
      scales[root],
      `${progress}/${expected.length}`,
      Math.round(notesPerMinute)
    ].join('\t')
    log.value += newLine + '\n'
  }
  return {
    handleNotes(notes) {
      if (done) return
      played++
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        if (done) return
        fail('Timeout')
      }, 1000)
      if (!notes.every(note => allowed.has(note))) {
        fail('Played an out-of-scale note.')
        return
      }
      if (!notes.includes(expected[progress])) {
        fail('Played the wrong note on the scale.')
        return
      }
      progress++
      update()
      if (progress === expected.length) {
        completed = true
        done = true
        update()
        currentScale = undefined
        logCompletion()
        playSound(root, [0, 12])
      }
    }
  }
}

function playSound(root, notes) {
  if (!audioContext) return
  if (!sound.value) return
  for (const [i, note] of notes.entries()) {
    const oscillator = audioContext.createOscillator()
    oscillator.type = 'sine'
    oscillator.frequency.setValueAtTime(440 * Math.pow(2, (3 + root + note) / 12), audioContext.currentTime)
    const gain = audioContext.createGain()
    const start = audioContext.currentTime + i * 0.1
    gain.gain.setValueAtTime(0.5, start)
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.2)
    oscillator.connect(gain)
    gain.connect(audioContext.destination)
    oscillator.start(start)
    oscillator.stop(start + 0.2)
  }
}

function handleMIDIMessage(event) {
  if (unmounted) return
  if (((event.data[0] & 0xf0) === 0x90) && event.data[2] > 0) {
    if (!active) {
      active = createRecognizer()
    }
    active.handleNote(event.data[1])
  }
}

function handleStateChange(event) {
  if (unmounted) return
  if (event.port.state === 'connected') {
    console.log('MIDI device connected:', event.port.name);
    if (event.port.type === 'input') {
      event.port.onmidimessage = handleMIDIMessage;
    }
  } else if (event.port.state === 'disconnected') {
    console.log('MIDI device disconnected:', event.port.name);
  }
}
</script>
