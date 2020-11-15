---
title: Frontend knowledge quiz
created: 2019-02-15T00:00:00.000Z
updated: 2019-02-15T00:00:00.000Z
description: 'How much do you know frontend? Try out this quiz!'
---

How much do you know frontend? Find out by trying out this quiz!

## About this quiz

We used this quiz at the [Code in the Dark Thailand: CNX 2019](/auden.html#code-in-the-dark-3-cnx-2019) event
to select the contestants to participate in each qualification round.
The difficulty of the questions here ranges from easy to ridiculous[^why].

<!-- prettier-ignore-start -->

[^why]:

    In the first two events we noticed that some great developers chose to register as an observer and not a contestant because they are not confident enough in their skills.

    We changed that in the third event and ran 3 rounds of live quizzes with the whole audience, choosing top scorers in each round to become a contestant. As a side effect this also lets _everyone_ participate.

<!-- prettier-ignore-end -->

## Take the quiz

<template>
  <details v-for="(data, index) of citd3quiz" :key="index">
    <summary>Round {{index + 1}}</summary>
    <ol>
      <li v-for="(question, qn) of data.questions" :key="qn" class="quiz-question">
        <p><strong v-html="escape(question.text)"></strong></p>
        <ul class="quiz-options">
          <li v-for="(answer, an) of question.answers" :key="an">
            <a class="quiz-option" href="javascript://" @click="clickOption(answer, index, qn, an)" :data-result="answer.result || ''">
              <span class="quiz-option-icon"></span>
              <span class="quiz-option-text" v-html="escape(answer.text)"></span>
            </a>
          </li>
        </ul>
      </li>
    </ol>
    <h3>Your score</h3>
    <p>You got <strong>{{correct(index + '-')}}</strong> out of {{data.questions.length}} correct!</p>
  </details>
</template>

## Total score

<template>
  <p>You got <strong>{{correct('')}}</strong> out of {{citd3quiz.reduce((a, b) => a + b.questions.length, 0)}} correct!</p>
</template>

<style scoped lang="styl">
.quiz-options
  padding 0
  list-style none
  & > li
    margin 0.5em 0
    & > a:hover
      text-decoration none

.quiz-option
  display flex
  padding 0.5rem
  background #353433
  border 1px solid #454443
  &:hover
    background #454443
    .quiz-option-icon
      border-color #656463

.quiz-option-icon
  align-self center
  width 1.5rem
  height 1.5rem
  margin-right 0.5rem
  border 1px solid #454443
  background #252423 center no-repeat
  text-align center
  display block

.quiz-option[data-result="correct"]
  background #254423
  border 1px solid #355433

.quiz-option[data-result="incorrect"]
  background #452423
  border 1px solid #553433

.quiz-option[data-result="correct"] .quiz-option-icon
  background-image: url("data:image/svg+xml,%3Csvg width='16' height='14' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.227 1.433c0 .715-.324 1.41-.971 2.089l-.1.1-5.662 5.964C7.29 10.85 6.266 11.827 5.42 12.517c-.846.69-1.443 1.036-1.791 1.036-.367 0-.822-.173-1.365-.518-.544-.345-.895-.7-1.054-1.067-.134-.306-.26-.953-.38-1.942C.712 9.036.652 7.965.652 6.81c0-.629.263-1.21.788-1.745.525-.534 1.106-.801 1.74-.801.605 0 .966.552 1.082 1.658l.027.284c.098.849.21 1.441.34 1.777.127.336.301.504.521.504.092 0 .263-.1.513-.298.25-.198.55-.469.898-.81l5.817-5.763c.489-.488.925-.858 1.31-1.108.385-.25.711-.376.98-.376.202 0 .345.077.43.23.086.152.129.408.129.769v.302z' fill='%23D7FC70' fill-rule='evenodd'/%3E%3C/svg%3E");

.quiz-option[data-result="incorrect"] .quiz-option-icon
  background-image: url("data:image/svg+xml,%3Csvg width='13' height='15' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.366 2.47a1.747 1.747 0 01-.275.448l-.027.12a47.54 47.54 0 00-2.162 2.29c-.69.781-1.35 1.581-1.979 2.4.44.586.889 1.17 1.347 1.754.458.583.928 1.162 1.41 1.736-.11.348-.225.602-.348.76a.67.67 0 01-.448.275.76.76 0 00-.22.522v.037l-.23.192a9.4 9.4 0 00-.256.22 1.801 1.801 0 01-.577-.375 1.68 1.68 0 01-.27.325c-.107.1-.225.19-.353.27l-.247-.037c-.367-.427-.722-.88-1.067-1.36-.345-.48-.683-.982-1.013-1.507-.58.727-1.12 1.417-1.621 2.07-.5.654-.974 1.289-1.42 1.906l-.284.018-.348-.412.073-.302-.119-.092c-.055.012-.113.03-.174.055-.061.024-.146.07-.256.137a2.755 2.755 0 01-.422-.444 2.432 2.432 0 01-.302-.527c.037-.097.085-.206.146-.325a.971.971 0 00.092-.206c0-.055-.038-.165-.114-.33a4.914 4.914 0 01-.18-.43 93.96 93.96 0 011.55-1.864A139.34 139.34 0 014.001 7.8 25.576 25.576 0 012.79 5.337a26.803 26.803 0 01-.948-2.583c.091-.14.19-.27.297-.39.107-.119.222-.227.344-.325.11.08.19.14.243.183.051.043.102.089.15.138.056-.025.106-.052.152-.083.046-.03.09-.064.133-.1 0-.104.01-.194.032-.27a.51.51 0 01.114-.207l.357-.091c.233.158.703.787 1.411 1.887.477.739.87 1.334 1.182 1.786a50.51 50.51 0 012.185-2.35A46.87 46.87 0 0110.717.784a1.495 1.495 0 01.733.66l-.11.22a.756.756 0 00.293.302h.357l.376.504z' fill='%23FAA' fill-rule='evenodd'/%3E%3C/svg%3E");

.quiz-option-text
  flex 1
  display block
</style>

<script>
import { citd3quiz } from './.vuepress/data/citd3quiz'
import { trackEvent } from './.vuepress/lib/telemetry'
import Vue from 'vue'

export default {
  data() {
    return {
      citd3quiz: JSON.parse(JSON.stringify(citd3quiz)),
      results: {}
    }
  },
  methods: {
    escape(x) {
      return x.replace(/`([^`]+)`/g, (a, x) => {
        return `<code>${x.replace(/</g, '&lt;')}</code>`
      })
    },
    correct(prefix) {
      return Object.keys(this.results).filter(k => k.startsWith(prefix) && this.results[k] === 'correct').length
    },
    clickOption(answer, rn, qn, an) {
      const result = answer.correct ? 'correct' : 'incorrect'
      Vue.set(answer, 'result', result)
      const key = `${rn}-${qn}`
      if (!this.results[key]) {
        Vue.set(this.results, key, result)
        trackEvent('citd3quiz', { questionKey: key, result, selectedChoice: an })
      }
    }
  }
}
</script>
