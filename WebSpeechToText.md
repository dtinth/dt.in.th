---
title: Web speech-to-text
public: true
---

# Web speech-to-text

:::lead
Use this tool to transcribe speech to text. All processing happens locally on your device.
:::

<div style="border-radius: 1em; border: 2px solid var(--n-listen-border); padding: 1em; background: #252423; margin: 2em 0;" :style="{ '--n-listen-border': isListening ? '#d7fc70' : '#656463' }">
  <div class="flex gap-2 mb-2 flex-wrap items-start">
    <button
      @click="toggleListening"
      :disabled="isLoading"
      class="btn"
      style="min-width: 120px;"
    >
      {{ isLoading ? 'Loading...' : (isListening ? 'Stop' : 'Start') }}
    </button>
    <button
      @click="toggleHUD"
      class="btn"
      style="min-width: 120px;"
    >
      {{ showHUD ? 'Close HUD' : 'Show HUD' }}
    </button>
    <div class="ml-auto">
      <input
        v-model="languageCode"
        :disabled="isListening"
        type="text"
        class="form-control w-[140px]"
        placeholder="e.g. en-US"
        list="language-codes"
      />
      <label class="text-[#8b8685] text-sm font-bold">Language Code</label>
      <datalist id="language-codes">
        <option
          v-for="lang in supportedLanguages"
          :key="lang.code"
          :value="lang.code"
        >
          {{ lang.description }}
        </option>
      </datalist>
    </div>
  </div>
  <textarea readonly class="form-control" :value="diagnostic || '[Diagnostic output]'" rows="2"></textarea>
  <div style="margin-top: 1em; height: 250px; overflow-y: auto;">
    <strong class="text-[#8b8685]">Recognition log:</strong>
    <ul class="flex flex-col gap-1 list-none p-0 m-0 not-prose">
      <li v-for="(result, index) in results.slice(-50)" :key="result.id" class="bg-[#353433] px-3 py-2 rounded">
        {{ result.transcript }}
      </li>
      <li v-if="results.length === 0" class="bg-[#353433] px-3 py-2 rounded text-[#8b8685]">[No results yet]</li>
    </ul>
  </div>
  <div class="flex gap-2 mb-2 flex-wrap items-start">
    <button
      @click="copyAllTranscript"
      :disabled="results.length === 0"
      class="btn"
      style="min-width: 120px;"
    >
      Copy All Transcript
    </button>
  </div>
  <div style="color: #8b8685; font-size: 0.85em; margin-top: 1em;">
    <strong style="color: inherit">Tip:</strong> Open browser console (F12) to see detailed event logs
  </div>
</div><Teleport v-if="showHUD && hudVideoElement" :to="hudVideoElement.document.getElementById('hud-container')">
  <div class="hud-section">
    <div class="hud-title">Transcript</div>
    <div v-if="results.length === 0 && !isListening" style="color: #8b8685;">(No results yet)</div>
    <div
      v-for="(result, index) in results.slice(-50)"
      :key="result.id"
      class="hud-item"
    >
      <button
        class="hud-button"
        style="position: relative;"
        @click="copyTextFromHud(result.transcript, result.id)"
        draggable="true"
        @dragstart="dragText(result.transcript, $event)"
      >
        <span :style="{ opacity: lastCopiedId === result.id ? 0 : 1 }">
          <img width="16" height="16" :src="copyIcon" alt="Copy" />
        </span>
        <span
          v-if="lastCopiedId === result.id"
          style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; display: flex; justify-content: center; align-items: center;"
        >✔︎</span>
      </button>
      <div class="hud-text">{{ result.transcript }}</div>
    </div>
    <div
      v-if="isListening"
      class="hud-item"
    >
      <div class="hud-mic">
        <img width="16" height="16" :src="micIcon" alt="Mic" />
      </div>
      <div class="hud-text interim">{{ interimTranscript || '(listening)' }}</div>
    </div>
  </div>
</Teleport>

:::warning
This tool uses [a feature that is currently only available in Google Chrome 142+](https://caniuse.com/mdn-api_speechrecognition_processlocally), and requires downloading language models. It may not be available in all regions.
:::

<script setup>
  const isListening = Vue.ref(false)
  const isLoading = Vue.ref(false)
  const diagnostic = Vue.ref('')
  const results = Vue.ref([])
  const showHUD = Vue.ref(false)
  const interimTranscript = Vue.ref('')
  const lastCopiedId = Vue.ref(null)
  const languageCode = Vue.ref('en-US')
  const copyIcon = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBmaWxsPSJub25lIiBzdHJva2U9IiM4Yjg2ODUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIj48cmVjdCB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHg9IjgiIHk9IjgiIHJ4PSIyIiByeT0iMiIvPjxwYXRoIGQ9Ik00IDE2Yy0xLjEgMC0yLS45LTItMlY0YzAtMS4xLjktMiAyLTJoMTBjMS4xIDAgMiAuOSAyIDIiLz48L2c+PC9zdmc+'
  const micIcon = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBmaWxsPSJub25lIiBzdHJva2U9IiM4Yjg2ODUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIj48cGF0aCBkPSJNMTIgMTl2M203LTEydjJhNyA3IDAgMCAxLTE0IDB2LTIiLz48cmVjdCB3aWR0aD0iNiIgaGVpZ2h0PSIxMyIgeD0iOSIgeT0iMiIgcng9IjMiLz48L2c+PC9zdmc+'
  let recognition = null
  let hudVideoElement = null
  const supportedLanguages = [
    { code: 'de-DE', description: 'German, Germany' },
    { code: 'en-US', description: 'English, United States' },
    { code: 'es-ES', description: 'Spanish, Spain' },
    { code: 'fr-FR', description: 'French, France' },
    { code: 'hi-IN', description: 'Hindi, India' },
    { code: 'id-ID', description: 'Indonesian, Indonesia' },
    { code: 'it-IT', description: 'Italian, Italy' },
    { code: 'ja-JP', description: 'Japanese, Japan' },
    { code: 'ko-KR', description: 'Korean, South Korea' },
    { code: 'pl-PL', description: 'Polish, Poland' },
    { code: 'pt-BR', description: 'Portuguese, Brazil' },
    { code: 'ru-RU', description: 'Russian, Russia' },
    { code: 'th-TH', description: 'Thai, Thailand' },
    { code: 'tr-TR', description: 'Turkish, Turkey' },
    { code: 'vi-VN', description: 'Vietnamese, Vietnam' },
    { code: 'zh-CN', description: 'Chinese, Mandarin, Simplified' },
    { code: 'zh-TW', description: 'Chinese, Mandarin, Traditional' },
  ]

  const dragText = (text, event) => {
    event.dataTransfer.clearData()
    event.dataTransfer.setData('text/plain', text)
  }

  const dispatchSpeechEvent = (type, payload) => {
    window.dispatchEvent(new CustomEvent('speechevent', {
      detail: { type, payload }
    }))
  }
  const onSpeechEvent = (event) => {
    console.log('[speechevent] type:', event.detail?.type, '|', 'payload:', event.detail?.payload)
    if (event.detail?.type === 'replace') {
      const id = event.detail?.payload?.id
      const newText = event.detail?.payload?.transcript
      const index = results.value.findIndex(r => r.id === id)
      if (index !== -1) {
        results.value[index].transcript = newText
      }
    }
  }
  Vue.onMounted(() => {
    window.addEventListener('speechevent', onSpeechEvent)
  })
  Vue.onUnmounted(() => {
    window.removeEventListener('speechevent', onSpeechEvent)
  })

  const initRecognition = async () => {
    if (!('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
      diagnostic.value = 'Speech Recognition not supported in this browser'
      console.error('Speech Recognition not supported')
      return false
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    recognition = new SpeechRecognition()
    recognition.continuous = true
    recognition.interimResults = true
    recognition.lang = languageCode.value

    // Try to use on-device processing if available
    if ('processLocally' in recognition) {
      recognition.processLocally = true
      dispatchSpeechEvent('ondevice', { enabled: true })
    }

    recognition.addEventListener('start', () => {
      diagnostic.value = 'Listening...'
      dispatchSpeechEvent('start', {})
    })

    recognition.addEventListener('result', (event) => {
      const timestamp = new Date().toISOString()
      let interim = ''
      let final = ''
      let lastConfidence = 0

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript
        const confidence = event.results[i][0].confidence
        const isFinal = event.results[i].isFinal

        if (isFinal) {
          final += transcript + ' '
          lastConfidence = confidence
        } else {
          interim += transcript
          dispatchSpeechEvent('interim', { transcript, confidence, isFinal: false })
        }
      }

      // Update interim transcript for HUD
      interimTranscript.value = interim

      if (final) {
        const finalText = final.trim()
        diagnostic.value = `Recognized: "${finalText}"`
        results.value.push({
          transcript: finalText,
          confidence: lastConfidence,
          id: timestamp,
        })
        dispatchSpeechEvent('transcript', {
          transcript: finalText,
          confidence: lastConfidence,
          id: timestamp
        })
        scrollHUDToBottom()
      } else if (interim) {
        diagnostic.value = `Interim: "${interim}"`
      }
    })

    recognition.addEventListener('error', (event) => {
      diagnostic.value = `Error: ${event.error}`
      dispatchSpeechEvent('error', { error: event.error })
    })

    recognition.addEventListener('end', () => {
      if (isListening.value) {
        diagnostic.value = 'Restarting...'
        dispatchSpeechEvent('restart', {})
        setTimeout(() => {
          if (isListening.value && recognition) {
            recognition.start()
          }
        }, 100)
      } else {
        diagnostic.value = 'Stopped listening'
        dispatchSpeechEvent('end', {})
      }
    })

    return true
  }

  const checkLanguageAvailability = async () => {
    if (!('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
      return false
    }
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!('available' in SpeechRecognition)) {
      dispatchSpeechEvent('langcheck-unavailable', { reason: 'API not available' })
      return false
    }
    try {
      isLoading.value = true
      diagnostic.value = 'Checking language availability...'

      const result = await SpeechRecognition.available({
        langs: [languageCode.value],
        processLocally: true
      })

      if (result === 'available') {
        diagnostic.value = 'Language pack ready'
        dispatchSpeechEvent('langcheck', { status: 'available' })
        return true
      } else if (result === 'unavailable') {
        diagnostic.value = 'Language pack not available for download'
        dispatchSpeechEvent('langcheck', { status: 'unavailable' })
        return false
      } else {
        // result === 'downloading'
        diagnostic.value = 'Downloading language pack...'
        dispatchSpeechEvent('langinstall', { status: 'downloading' })
        const installResult = await SpeechRecognition.install({
          langs: [languageCode.value],
          processLocally: true
        })
        if (installResult) {
          diagnostic.value = 'Language pack downloaded'
          dispatchSpeechEvent('langinstall', { status: 'success' })
          return true
        } else {
          diagnostic.value = 'Failed to download language pack'
          dispatchSpeechEvent('langinstall', { status: 'failed' })
          return false
        }
      }
    } catch (error) {
      dispatchSpeechEvent('langcheck-error', { error: String(error) })
      diagnostic.value = `Error checking language pack: ${error}`
      return false
    } finally {
      isLoading.value = false
    }
  }

  const toggleListening = async () => {
    if (isListening.value) {
      if (recognition) {
        recognition.stop()
        isListening.value = false
      }
    } else {
      if (!recognition || recognition.lang !== languageCode.value) {
        recognition = null
        const initialized = await initRecognition()
        if (!initialized) return
      }

      isLoading.value = true
      const available = await checkLanguageAvailability()
      isLoading.value = false

      if (available) {
        recognition.start()
        isListening.value = true
      }
    }
  }

  const copyTextFromHud = (text, id) => {
    // Use the document where the button is (PiP window or main window)
    const targetDoc = document

    const textarea = targetDoc.createElement('textarea')
    textarea.value = text
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    targetDoc.body.appendChild(textarea)

    textarea.select()
    try {
      targetDoc.execCommand('copy')
      lastCopiedId.value = id
      setTimeout(() => {
        if (lastCopiedId.value === id) {
          lastCopiedId.value = null
        }
      }, 2000)
    } catch (err) {
      console.error('Copy failed:', err)
    }
    targetDoc.body.removeChild(textarea)
  }

  const toggleHUD = async () => {
    if (showHUD.value) {
      showHUD.value = false
      if (hudVideoElement) {
        hudVideoElement.close()
        hudVideoElement = null
      }
    } else {
      try {
        const pipWindow = await documentPictureInPicture.requestWindow({
          width: 480,
          height: 640
        })

        // Create container in PiP window
        const container = pipWindow.document.createElement('div')
        container.id = 'hud-container'
        pipWindow.document.body.appendChild(container)

        // Add styles to PiP window
        const style = pipWindow.document.createElement('style')
        style.textContent = `
          body {
            margin: 0;
            padding: 10px;
            background: #252423;
            color: #ffffff;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
            font-size: 13px;
            line-height: 1.4;
            overflow-y: auto;
          }
          #hud-container {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          .hud-title {
            color: #d7fc70;
            font-weight: bold;
            margin-bottom: 8px;
          }
          .hud-item {
            background: #353433;
            border-radius: 2px;
            margin-bottom: 4px;
            overflow: hidden;
            display: flex;
          }
          .hud-mic, .hud-button {
            flex: none;
            display: flex;
            align-items: center;
            padding: 6px;
            border: none;
            color: #8b8685;
            user-select: none;
            background: transparent;
          }
          .hud-button {
            cursor: pointer;
          }
          .hud-button:hover {
            background: #454443;
          }
          .hud-text {
            word-break: break-word;
            flex: 1;
            padding: 6px;
          }
          .interim {
            color: #bef;
          }
        `
        pipWindow.document.head.appendChild(style)

        hudVideoElement = pipWindow
        showHUD.value = true

        // Handle window close
        pipWindow.addEventListener('unload', () => {
          showHUD.value = false
          hudVideoElement = null
        })
      } catch (error) {
        console.error('Failed to open Picture-in-Picture window:', error)
        alert('Picture-in-Picture is not supported')
      }
    }
  }

  // Auto-scroll HUD to bottom when content updates
  const scrollHUDToBottom = (v) => {
    Vue.nextTick(() => {
      if (hudVideoElement) {
        const body = hudVideoElement.document
        const items = body.querySelectorAll('.hud-item')
        const lastItem = items[items.length - 1]
        if (lastItem) {
          lastItem.scrollIntoView({ behavior: 'smooth', block: 'end' })
        }
      }
    })
  }

  const copyAllTranscript = () => {
    const allText = results.value.map(r => r.transcript).join('\n')
    navigator.clipboard.writeText(allText).then(() => {
      diagnostic.value = 'All transcript copied to clipboard'
    }).catch((err) => {
      console.error('Failed to copy all transcript:', err)
      diagnostic.value = 'Failed to copy all transcript'
    })
  }
</script>

:::tip[How to use]

- Click **Start** to begin speech recognition. The browser may ask for microphone permission.
- Speak clearly into your microphone. The recognized text will appear in the log.
- Click **Show HUD** to open a Picture-in-Picture window displaying the transcript. This window will stay on top of other windows, allowing you to see the transcript while using other applications.
  - In the HUD, click the copy icon next to any transcript to copy it to your clipboard.
  - You can also drag copy buttons to other applications to drop the text there.

:::
