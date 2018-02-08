
// For vertical rhythm and stuff.
export const beat = n => `${n * 27}px`

// MIDI Notes for implementing a typography scale based on a musical scale!
export const C4 = 60
export const E4 = 64
export const G4 = 67
export const B4 = 71

export const fontSize = n => `${Math.pow(2, (n - 60) / 12).toFixed(3)}rem`
