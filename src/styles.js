// For vertical rhythm and stuff.
export const beat = n => `${n * 29}px`

// MIDI Notes for implementing a typography scale based on a musical scale!
export const F4 = 65
export const Eb4 = 63
export const C4 = 60
export const Bb3 = 58
export const Ab3 = 56
export const F3 = 53
export const Db3 = 49

export const fontSize = n => `${(1 / Math.pow(2, (n - 60) / 12)).toFixed(3)}rem`
export const relativeFontSize = n => `${(1 / Math.pow(2, n / 12)).toFixed(3)}em`
