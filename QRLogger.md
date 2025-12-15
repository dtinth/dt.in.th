---
title: QR Code Logger
public: true
---

# QR Code Logger

:::lead
Scan QR codes and log them to a list. All data is saved to your device and can be exported as TSV for easy import into spreadsheets.
:::

<div style="border-radius: 1em; border: 2px solid #656463; padding: 1em; background: #252423; margin: 2em 0;">
  <div class="flex gap-2 mb-2 flex-wrap items-center">
    <button class="btn" @click="toggleScanning" style="min-width: 120px;">
      {{ isScanning ? 'Stop Scanning' : 'Start Scanning' }}
    </button>
    <span class="text-sm text-[#8b8685]">{{ status }}</span>
  </div>

  <div v-if="isScanning" style="margin-bottom: 1em; border: 2px solid #656463; border-radius: 0.5em; overflow: hidden;">
    <iframe
      ref="scannerIframe"
      :src="`https://qr.spacet.me/?action=scan&fit=cover&delay=100&post=parent`"
      style="width: 100%; height: 320px; border: none;"
      allow="camera"
    ></iframe>
  </div>

  <div style="margin-bottom: 1em;">
    <textarea
      class="form-control"
      rows="8"
      readonly
      :value="log"
      style="font-family: monospace; font-size: 0.9em;"
    ></textarea>
  </div>

  <div class="flex gap-2 flex-wrap items-center">
    <button
      class="btn py-0.5 px-1.5"
      @click="copyLog"
      :disabled="log === defaultLog"
      title="Copy log to clipboard"
    >
      <iconify-icon icon="octicon:copy-16" inline></iconify-icon>
      Copy
    </button>
    <button
      class="btn py-0.5 px-1.5"
      @click="clearLog"
      :disabled="log === defaultLog"
    >
      Clear
    </button>
    <button
      v-if="canShare"
      class="btn py-0.5 px-1.5"
      @click="shareLog"
      :disabled="log === defaultLog"
      title="Share as text file"
    >
      <iconify-icon icon="octicon:share-16" inline></iconify-icon>
      Share
    </button>
    <button
      class="btn py-0.5 px-1.5"
      @click="saveLog"
      :disabled="log === defaultLog"
      title="Download as .tsv file"
    >
      <iconify-icon icon="octicon:download-16" inline></iconify-icon>
      Save
    </button>
    <label class="flex items-center gap-1 ml-auto text-sm">
      <input type="checkbox" v-model="audioEnabled" />
      Audio feedback
    </label>
  </div>
</div>

<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue';

const isScanning = ref(false);
const log = ref('Timestamp\tQR Code Data\n');
const defaultLog = 'Timestamp\tQR Code Data\n';
const status = ref('Ready');
const canShare = ref(false);
const audioEnabled = ref(true);
const scannerIframe = ref(null);

const DEDUP_THRESHOLD = 2000; // 2 seconds
let seenCodesMap = new Map(); // Map<code, lastSeenTimestamp>
let audioContext = null;
const localStorageKey = 'QRLogger:log';

// Audio feedback
function playSound(code) {
  if (!audioEnabled.value) return;
  if (!audioContext) {
    audioContext = new AudioContext();
  }

  const baseFreq = 523; // C5

  // Count how many times this code already appears in the log
  const lines = log.value.split('\n').slice(1); // Skip header
  const count = lines.filter(line => {
    const parts = line.split('\t');
    return parts[1] === code;
  }).length;

  // Adjust base frequency by just intonation (perfect fifth intervals)
  // Each occurrence multiplies by 1.5 * 1.5 / 2 = 1.125
  // This gives us major second intervals
  let freq = baseFreq;
  for (let i = 0; i < count; i++) {
    freq = freq * 1.5 * 1.5 / 2;
  }

  // Play two notes: base and base × 1.5 (perfect fifth)
  const notes = [freq, freq * 1.5];

  for (const [i, note] of notes.entries()) {
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(note, audioContext.currentTime);

    const gain = audioContext.createGain();
    const start = audioContext.currentTime + i * 0.075;
    gain.gain.setValueAtTime(0.3, start);
    gain.gain.exponentialRampToValueAtTime(0.01, start + 0.1);

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator.start(start);
    oscillator.stop(start + 0.1);
  }
}

// Message handler from iframe
function handleMessage(event) {
  // Only accept messages from the scanner iframe
  if (!scannerIframe.value || event.source !== scannerIframe.value.contentWindow) {
    return;
  }

  if (event.data && event.data.text) {
    const now = Date.now();
    const code = event.data.text;

    // Clean up old entries from the map (codes older than threshold)
    for (const [key, timestamp] of seenCodesMap.entries()) {
      if (now - timestamp > DEDUP_THRESHOLD) {
        seenCodesMap.delete(key);
      }
    }

    // Check if code is in the "recently seen" map (anything here is within threshold)
    if (seenCodesMap.has(code)) {
      seenCodesMap.set(code, now); // Update timestamp
      return; // Skip logging
    }

    // Add to log and update map
    const timestamp = new Date().toISOString();
    log.value += `${timestamp}\t${code}\n`;
    seenCodesMap.set(code, now);
    status.value = `Scanned: ${code}`;

    // Play audio feedback
    playSound(code);
  }
}

// Copy to clipboard
async function copyLog() {
  try {
    await navigator.clipboard.writeText(log.value);
    const originalStatus = status.value;
    status.value = 'Copied to clipboard!';
    setTimeout(() => {
      status.value = originalStatus;
    }, 2000);
  } catch (err) {
    console.error('Failed to copy:', err);
    status.value = 'Failed to copy';
  }
}

// Clear log
function clearLog() {
  if (confirm('Clear all scanned codes? This cannot be undone.')) {
    log.value = defaultLog;
    seenCodesMap.clear();
    status.value = 'Log cleared';
  }
}

// Share via Web Share API
async function shareLog() {
  try {
    const file = new File([log.value], 'qr-codes.tsv', { type: 'text/tab-separated-values' });
    await navigator.share({
      files: [file],
      title: 'QR Codes Log',
      text: 'Scanned QR codes'
    });
  } catch (err) {
    if (err.name !== 'AbortError') {
      console.error('Share failed:', err);
      status.value = 'Share failed';
    }
  }
}

// Save as file
function saveLog() {
  try {
    const blob = new Blob([log.value], { type: 'text/tab-separated-values' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `qr-codes-${new Date().toISOString().split('T')[0]}.tsv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    status.value = 'File downloaded';
  } catch (err) {
    console.error('Failed to save:', err);
    status.value = 'Failed to save';
  }
}

// Toggle scanning
function toggleScanning() {
  isScanning.value = !isScanning.value;
  if (isScanning.value) {
    status.value = 'Scanning... position QR code in camera';
  } else {
    status.value = 'Stopped';
  }
}

// Persist log to localStorage
watch(log, (newValue) => {
  localStorage.setItem(localStorageKey, newValue);
});

onMounted(() => {
  // Load from localStorage
  const saved = localStorage.getItem(localStorageKey);
  if (saved) {
    log.value = saved;
  }

  // Check for Web Share API
  canShare.value = !!navigator.share;

  // Listen for messages from iframe
  window.addEventListener('message', handleMessage);
});

onUnmounted(() => {
  window.removeEventListener('message', handleMessage);
  isScanning.value = false;
  seenCodesMap.clear();
});
</script>

:::tip[How to use]

1. Click **Start Scanning** to begin
2. The scanner window will open. Point your camera at QR codes
3. Each scan is automatically logged with a timestamp
4. Use **Copy** to copy the log, **Clear** to reset, **Save** to download as TSV, or **Share** to send to other apps
5. The log is automatically saved to your device and persists between sessions

**Pro tip**: TSV format can be pasted directly into Google Sheets or Excel!

:::
