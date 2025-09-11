---
public: true
aliases:
  - 20220618T113952Z9151
title: ตัดคำภาษาไทยใน Node.js (หรือใน Browser) โดยใช้ API Intl ของ JavaScript
---

ตัดคำภาษาไทยใน [Node.js](Nodejs) (หรือใน Browser) โดยใช้ API Intl ของ [JavaScript](JavaScript)

```js
const result = Array.from(
  new Intl.Segmenter('th', { granularity: 'word' }).segment('สวััสดีครับ ทดสอบ')
)

console.log(result)
/* => [
  {
    segment: 'สวััส',
    index: 0,
    input: 'สวััสดีครับ ทดสอบ',
    isWordLike: true
  },
  {
    segment: 'ดี',
    index: 5,
    input: 'สวััสดีครับ ทดสอบ',
    isWordLike: true
  },
  {
    segment: 'ครับ',
    index: 7,
    input: 'สวััสดีครับ ทดสอบ',
    isWordLike: true
  },
  {
    segment: ' ',
    index: 11,
    input: 'สวััสดีครับ ทดสอบ',
    isWordLike: false
  },
  {
    segment: 'ทดสอบ',
    index: 12,
    input: 'สวััสดีครับ ทดสอบ',
    isWordLike: true
  }
] */
```

<div class="flex gap-4">
  <textarea class="w-1/2 h-48 form-control" v-model="input"></textarea>
  <textarea class="w-1/2 h-48 form-control" readonly :value="output"></textarea>
</div>

<script setup>
  const input = Vue.ref('สวัสดีครับ ทดสอบ')
  const output = Vue.computed(() => {
    try {
      return Array.from(
        new Intl.Segmenter('th', { granularity: 'word' })
          .segment(input.value)
      )
        .filter(({ isWordLike }) => isWordLike)
        .map(({ segment }) => segment)
        .join('\n')
        .replace(/(\S)(ๆ)/g,'$1\n$2')
    } catch (error) {
      return error.message
    }
  })
</script>
