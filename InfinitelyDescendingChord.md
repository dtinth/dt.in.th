---
public: true
title: Infinitely Descending Chord
created: 2014-04-30
updated: 2025-09-08
---

# Infinitely Descending Chord

This [piece](ProgrammaticMusic), made in 2014, features a chord progression that keeps descending.

::cta[Try on Patchies]{href="https://patchies.app/?id=3u3s5jkpebf7vzl"}

It goes like this: C/E, Cm/Eb, A#/D, A#m/Db, G#/C, G#m/B, ….

However, the chord progression seems to keep descending without ending. This is possible by an auditory illusion known as [Shepard tone](https://en.wikipedia.org/wiki/Shepard_tone).

<!-- prettier-ignore-start -->
```js
function factory() {
  /**
   * INFINITELY DESCENDING CHORD PROGRESSION (v1.2)
   *
   * Enjoy this chord progression that loops forever....
   * By Thai Pangsakulyanont (https://github.com/dtinth)
   *
   * https://dt.in.th/InfinitelyDescendingChord
   */
  var ss = 0.1
  var sequence = [0, 3, 8, 3]
  var sequence2 = [12, 12, 12, 7, 7, 7, 7, 7, 12, 12, 12, 10, 10, 10, 9, 9] 

  return function (t) {
    return melody(t) * 0.7 + melody(t - 0.5) * 0.2 + melody2(t) * 0.4 + kick(t) * 0.8 + hat(t) * 0.5
  }

  function kick(t) {
    var ts = t % (4 * ss)
    return Math.sin(60 * (1 - Math.exp(-ts * 30))) * Math.exp(-ts * 20)
  }

  function hat(t) {
    var step = (t / ss)
    var i = (step % 4) | 0
    var p = step % 1
    return noise() * Math.exp(-p * (i % 4 === 2 ? 1 : 10))
  }

  function melody(t) {
    var step = (t / ss)
    var i = (step % 4) | 0
    var dec = (step / 16) | 0
    return synth(ssaw, t, 64, sequence[i] - dec + (dec % 2 != 0 && i > 0 ? 1 : 0)) * 0.7 +
      synth(sin, t, 40, -dec) * 0.7 * (i > 1 ? 1 : 0)
  }

  function melody2(t) {
    var step = (t / ss / 2)
    var i = (step % 16) | 0
    var dec = ((step / 16) | 0) * 2
    return synth(triangle, t, 48, sequence2[i] - dec)
  }
  function sin(t, f) {
    return Math.sin(t * Math.PI * 2 * f)
  }
  function saw(t, f) {
    return (t * f) % 1 * 2 - 1
  }
  function ssaw(t, f) {
    return saw(t, f) * 0.4 + saw(t, f * 0.99) * 0.3 + saw(t, f / 0.99) * 0.3
  }
  function triangle(t, f) {
    return Math.abs(1 - (2 * t * f) % 2) * 2 - 1
  }
  function noise() {
    return Math.random() * 2 - 1
  }
  function synth(f, t, b, c) {
    var tone = ((c % 12) + 12) % 12
    var q = (tone / 12)
    var freq = mtof(b + tone)
    return f(t, freq) * q + f(t, freq * 2) * (1 - q)
  }

  function mtof(c) {
    return  440 * Math.pow(2, (c - 69) / 12)
  }
}
```
<!-- prettier-ignore-end -->
