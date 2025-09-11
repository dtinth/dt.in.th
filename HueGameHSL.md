---
public: true
title: Hue Game (HSL)
---

# Hue Game (HSL)

:::lead
It can be useful to have a mental mapping of **what hue values correspond to what [colors](Colors).** This game is designed to help you learn that mapping.
:::

<details id="huegame-cheat-sheet" open><summary>How to play &amp; cheat sheet</summary>

- Once you start the game, you will see a color. Guess the hue value of that color.

- The hue values are in degrees, from 0 to 360. In this game, they are always multiples of 30. Therefore, there are 12 possible values:

  <div style="display: flex; flex-wrap: wrap; gap: 0.5em">
    <span class="n-huegame-cheatsheet-item" v-for="hue of hues" :style="{ '--hue': hue }">{{ hue }}</span>
  </div>

</details>

<template v-if="question">
  <div class="n-huegame-question is-loaded" :style="{'--hue': question.hue}">
    <span style="position: absolute; top: 4px; left: 8px; font-size: 75%;">Question no.{{ question.num }}</span>
  </div>
</template>

<template v-if="!question">
  <div class="n-huegame-question">
    <span>
      <template v-if="loaded">
        <button @click="start"><strong>Start game</strong></button>
      </template>
      <template v-if="!loaded">
        Loading...
      </template>
    </span>
  </div>
</template>

<p>
  <label><strong>Answer in the box below:</strong> <input id="huegame-answer-box" v-model="answer" class="form-control"></label>
</p>

<p>
  …or use these buttons:
  <span class="flex gap-2 flex-wrap">
    <button class="btn" style="padding: 10px 16px;" v-for="hue of hues" @click="answer = String(hue)">{{ hue }}</button>
  </span>
</p>

<p>
  <progress max="24" :value="progress" style="box-sizing: border-box; width: 100%"></progress>
</p>

## Play history

Your play history is shown below.

<pre><code>{{ history }}</code></pre>

<p class="flex gap-2 flex-wrap">
  <button class="btn" @click="clearHistory">Clear history</button>
  <button class="btn" @click="copyHistory">Copy history to clipboard</button>
</p>

<style scoped>
  .n-huegame-cheatsheet-item {
    color: hsl(var(--hue),64%,64%);
    border: 1px solid hsl(var(--hue),64%,64%);
    padding: 0.25em 0.5em;
    font-weight: bold;
  }
  .n-huegame-question {
    height: 128px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #252423;
    border: 2px solid #656463;
    position: relative;
  }
  .n-huegame-question.is-loaded {
    background: hsl(var(--hue),100%,32%);
    border: 2px solid hsl(var(--hue),64%,64%);
  }
</style>

<script>
  export default {
    setup() {
      let nextQuestionNumber = 1
      const question = Vue.ref(null);
      const answer = Vue.ref('');
      const loaded = Vue.ref(false);
      const progress = Vue.ref(0);
      const history = Vue.ref('Play history')
      const hues = Array.from({ length: 12 }, (_, i) => i * 30)
      let playHistory
      let bag = []
      let lastTime
      const randomHue = () => {
        if (bag.length === 0) {
          bag = Array.from({ length: 24 }, (_, i) => ({ hue: i * 30 % 360, score: Math.random() }))
            .sort((a, b) => a.score - b.score)
            .map((x) => x.hue)
        }
        return bag.shift()
      };
      const normalize = (value) => {
        let n = +`${value}`.trim()
        if (n < 0) n += 360
        if (n >= 360) n -= 360
        return n
      }
      const nextQuestion = () => {
        if (lastTime) {
          playHistory.log(question.value.num, lastTime, question.value.hue, Date.now())
        }
        question.value = { hue: randomHue(), num: nextQuestionNumber++ }
        answer.value = ''
        lastTime = Date.now()
        progress.value = question.value.num === 1 ? 0 : ((question.value.num - 1) % 24) || 24
      }
      const createPlayHistory = () => {
        let data = (localStorage.getItem('HueGameHSL:playHistory') || '').trim()
        history.value = data || 'No history yet'
        return {
          log: (num, startTime, hue, endTime) => {
            const time = endTime - startTime
            const line = `num=${num} start=${startTime}, hue=${hue}, time=${time}`
            data = `${line}\n${data}`.trim()
            history.value = data
            localStorage.setItem('HueGameHSL:playHistory', data)
          }
        }
      }
      const clearHistory = () => {
        if (confirm('Your play history will be deleted. Are you sure?')) {
          localStorage.removeItem('HueGameHSL:playHistory')
          playHistory = createPlayHistory()
        }
      }
      const copyHistory = async () => {
        await navigator.clipboard.writeText(history.value)
        alert('Copied to clipboard')
      }
      Vue.onMounted(() => {
        loaded.value = true
        playHistory = createPlayHistory()
      });
      Vue.watch(answer, (value) => {
        if (value !== '' && normalize(value) === question.value.hue) {
          nextQuestion()
        }
      });
      const start = () => {
        nextQuestion()
        document.getElementById('huegame-answer-box').focus()
        document.getElementById('huegame-cheat-sheet').open = false
      }
      return { question, answer, start, loaded, history, hues, clearHistory, copyHistory, progress }
    }
  }
</script>
