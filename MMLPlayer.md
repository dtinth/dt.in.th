---
public: true
title: MML Player
giscus: true
---

# MML Player

:::lead
Use this [tool](Tools) to share quick [musical](Music) ideas.
:::

<script setup>
  const libs = Vue.ref(null)
  const mmlInput = Vue.ref('t170l12 crde-rfgra-grf+gra-grfe-rdcr<ga-rrr2 >c6<b-24a-24g')
  const isPlaying = Vue.ref(false)

  const loadMMLFromHash = () => {
    const hash = location.hash.slice(1)
    const params = new URLSearchParams(hash)
    const savedMML = params.get('mml')
    if (savedMML) {
      mmlInput.value = decodeURIComponent(savedMML)
    }
  }

  Vue.onMounted(async () => {
    libs.value = {
      mml: await import('https://cdn.jsdelivr.net/npm/mml-iterator@1.1.0/+esm'),
      tone: await import('https://cdn.jsdelivr.net/npm/tone@15.1.22/+esm')
    }
    Object.assign(window, { libs })

    // Load MML from URL hash on mount
    loadMMLFromHash()

    // Listen for hash changes to allow pasting new MML
    window.addEventListener('hashchange', loadMMLFromHash)

    // Cleanup on unmount
    Vue.onUnmounted(() => {
      window.removeEventListener('hashchange', loadMMLFromHash)
    })
  })

  const playMML = async () => {
    if (!libs.value || isPlaying.value) return

    // Save MML to URL hash
    location.hash = `mml=${encodeURIComponent(mmlInput.value)}`

    isPlaying.value = true
    try {
      const { default: MMLIterator } = libs.value.mml
      const Tone = libs.value.tone

      // Create polyphonic synth for multiple simultaneous notes
      const synth = new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: 'triangle' },
        envelope: { attack: 0.005, decay: 0.1, sustain: 0.3, release: 1 }
      }).toDestination()

      // Split MML by --- separator and parse each one
      const mmlStrings = mmlInput.value.split(/\n\s*---\s*\n/)
      const allNotes = []
      let maxDuration = 0

      for (const mmlString of mmlStrings) {
        // Remove comments (lines starting with // or text after //)
        const cleanedMML = mmlString
          .split('\n')
          .map(line => line.split('//')[0])
          .join(' ')
          .trim()

        if (!cleanedMML) continue

        const iterator = new MMLIterator(cleanedMML)
        const notes = Array.from(iterator)
        allNotes.push(...notes)

        const duration = notes[notes.length - 1]?.time || 0
        maxDuration = Math.max(maxDuration, duration)
      }

      // Start transport
      const startTime = Tone.now()

      for (const event of allNotes) {
        if (event.type === 'note') {
          // Convert note number to frequency
          const frequency = Tone.Frequency(event.noteNumber, 'midi').toFrequency()
          const noteStartTime = startTime + event.time
          const noteDuration = event.duration
          // Normalize velocity from 0-127 to 0-1
          const velocityGain = event.velocity / 127

          synth.triggerAttackRelease(frequency, noteDuration, noteStartTime, velocityGain)
        }
      }

      // Calculate total duration and wait
      await new Promise(resolve => setTimeout(resolve, (maxDuration + 1) * 1000))
    } catch (error) {
      console.error('MML playback error:', error)
      alert('Error playing MML: ' + error.message)
    } finally {
      isPlaying.value = false
    }
  }
</script>

<div class="flex flex-col gap-4">
  <div>
    <label id="mml" class="block text-sm text-[#8b8685]">MML Code:</label>
    <textarea
      id="mml"
      v-model="mmlInput"
      :disabled="isPlaying"
      class="w-full form-control font-mono"
      rows="5"
      placeholder="t200 o6 l8 e g > e c d g"
    ></textarea>
  </div>
  <button
    @click="playMML"
    :disabled="!libs || isPlaying"
    class="btn"
  >
    {{ isPlaying ? 'Playing...' : 'Play' }}
  </button>
</div>

## MML syntax

**MML** (Music Macro Language) is a compact text format for describing melodies.

<div class="n-ref">

<!-- prettier-ignore -->
| Topic | Tutorial | Examples |
| --- | --- | --- |
| **Notes** | Use `a` to `g` for notes A to G. | `cegc` |
| **Rest** | Use `r` for rest. | `ccggaagrffeeddc` |
| **Whitespace** | Use whitespaces to make the MML more readable. | `c e g c` |
| **Accidentals** | Use `+` for sharps, and `-` for flats. | `df+ad`<br>`e-gb-e-` |
| **Octave** | Use `o` followed by a number to set the octave of subsequent notes. <small>※ default octave is 4</small> | `cego5c` |
| **Octave shift** | Use `>` to go up one octave, and `<` to go down one octave. | `c>c<c` |
| **Tempo** | Use `t` followed by a number to set the tempo of subsequent notes. <small>※ default tempo is 120 beats per minute</small> | `t200cegc` |
| **Length** | Use `l` followed by a number to set the length of subsequent notes. <small>※ default length is 4 (quarter notes)</small> | `l8cegc` |
| **Length override** | Follow the note name with a number to set the length of that specific note. | `ccggaag2ffeeddc2` |
| **Dotted notes** | Follow the note or rest with a `.` to make it 1.5 times longer. | `t136l8 b.b.b b.b.>e e.e.d d.d.<a` |
| **Chords** | Put multiple notes in square brackets `[]` to play them simultaneously. | `l2 [dfa>ce] [<g>b>d+] [cega>d]` |
| **Velocity** | Use `v` followed by a number (0-100) to set the velocity (volume) of subsequent notes. <small>※ default velocity is 100</small> | `v100 c v50 e v25 g v12 >c` |
| **Repeat** | Use `/:` and `:/`, optionally followed by number to repeat a section <small>※ default repeat is 2</small> | `t80l16/:b->cdf<:/>/:cdeg:/` |

</div>

For full syntax description, see [mml-iterator docs](https://github.com/mohayonao/mml-iterator#mml-syntax).

<style scoped>
  .n-ref small {
    color: #8b8685;
    display: block;
  }
</style>

### Extensions

- Put `---` (on its own line) to separate multiple MML sequences to be played simultaneously.
- Use `//` to add comments.

```
// This is a comment
t160v50 l32/:er:/16 l16efed+era>cerar>c8r8
l16 dc<b>dc<ba>c<bag+baec<a>fedc<bag+ba
---
t160v32o2l8 /:a>[ce]32r16.< e>[ce]32r16.<:/4
>d[fb]32r16. c[e>c]32r16. <b>[dg+]32r16. <a>[ea]32r16.
l16<[e>e]r[f+>f+]r[g+>g+]r[e>e]r[a>a]
```

## About this tool

Powered by [mml-iterator](https://github.com/mohayonao/mml-iterator) and [Tone.js](https://tonejs.github.io/).
