---
public: true
title: ChucK The Fourth Time
created: 2009-05-02
updated: 2025-09-08
---

Just playing around with [ChucK](https://chuck.stanford.edu/), a “strongly-timed music programming language,” in 2009. This [piece](ProgrammaticMusic) contains:

- An arp using a StifKarp.
- A random melody.
- A kick drum made with a sweeping sine wave.
- A bassline track made with a sine wave.
- Some feedback delay lines.

::cta[Try on Patchies]{href="https://patchies.app/?id=6wjvo38hcycyou6"}

```
// Master BPM
float bpm;
(140) => bpm;

// Each step
int step;

dur each;
((60 / bpm) / 48)::second => each;

// Master Track
Gain master;
master => dac;
(0.5) => master.gain;

// Synth Track
Gain synth;
Delay synth_d;
Gain synth_g;
synth => master;
synth => synth_d;
synth_d => synth_g;
synth_g => synth_d;
synth_g => master;
(each * 36) => synth_d.max;
(each * 36) => synth_d.delay;
(0.5) => synth_g.gain;

// Bass Track
Gain bass;
bass => master;
(0.6) => bass.gain;

// Random Melody
Gain melody;
Delay melody_d;
Gain melody_g;
melody => master;
melody => melody_d;
melody_d => melody_g;
melody_g => melody_d;
melody_g => master;
(0.5) => melody_g.gain;
(each * 60) => melody_d.max;
(each * 60) => melody_d.delay;

// Percussion
Gain percussion;
percussion => master;

// Instrument Class
class Trig {
    (1)    => int freq;
    (0)    => int left;
    (0)    => int num;
    fun void next() {
        (left - 1) => left;
        if (left <= 0) {
            (freq) => left;
            () => trigger;
            (num + 1) => num;
        }
    }
    fun void setFreq(int newFreq) {
        int del;
        (newFreq - freq) => del;
        (freq + del) => freq;
        (left + del) => left;
    }
    fun void trigger() {
    }
}

// Channel Arp
StifKarp arp;
arp => synth;
class Pattern1 extends Trig {
    [
        9,  4, 4, 9,  4, 4, 9,  4,
        9,  4, 4, 9,  4, 4, 9,  4,
        11, 4, 4, 11, 4, 4, 11, 4,
        12, 4, 4, 12, 4, 4, 14, 16,

        9,  4, 4, 9,  4, 4, 9,  4,
        9,  4, 4, 9,  4, 4, 9,  4,
        11, 4, 4, 11, 4, 4, 11, 4,
        12, 4, 4, 12, 4, 4, 14, 16,

        9,  5, 5, 9,  5, 5, 9,  5,
        9,  5, 5, 9,  5, 5, 9,  5,
        11, 5, 5, 11, 5, 5, 11, 5,
        12, 5, 5, 12, 5, 5, 14, 16,

        9,  2, 2, 9,  2, 2, 9,  2,
        11, 2, 2, 11, 2, 2, 11, 2,
        12, 2, 2, 12, 2, 2, 12, 2,
        14, 2, 2, 14, 2, 2, 16, 17
    ] @=> int noteNum[];
    fun void trigger() {
        (noteNum[num % 128] + 60) $ float => Std.mtof => arp.freq;
        (1) => arp.noteOn;
    }
}
Pattern1 arp_t;
(12) => arp_t.freq;

// Channel Bass
SinOsc basssynth => bass;
class Pattern2 extends Trig {
    [9, 9, 6, 6, 2, 2, 7, 8] @=> int noteNum[];
    fun void trigger() {
        (noteNum[num % 8] + 36) $ float => Std.mtof => basssynth.freq;
    }
}
Pattern2 basssynth_t;
(192) => basssynth_t.freq;

// Channel Melody
Mandolin mel => melody;
class Pattern3 extends Trig {
    [
        [0, 4, 9, 11, 12],
        [4, 9, 11, 12, 16],
        [0, 4, 6, 9, 12, 16],
        [4, 6, 9, 12, 16, 18],
        [2, 4, 5, 9, 11, 12],
        [4, 5, 9, 11, 12, 17],
        [2, 7, 11, 14, 17, 19],
        [2, 4, 8, 11, 14, 16, 19]
    ] @=> int notes[][];
    int last;
    fun void trigger() {
        int cur;
        int l[];
        if (step % 768 >= 720) {
            setFreq (12);
        } else {
            setFreq (24 - 12 * (num % 2));
        }
        (notes[(step / 192) % notes.cap()]) @=> l;
        do {
            (Std.rand2(0, l.cap() - 1)) => cur;
        } while (last == cur);
        cur => last;
        (l[cur] + 48) => Std.mtof => mel.freq;
        (1) => mel.noteOn;
    }
}
Pattern3 mel_t;
(24) => mel_t.freq;

// Bass Drum
SinOsc bd => ADSR bd_c => percussion;
(1::ms, 0::ms, 1, 20::ms) => bd_c.set;
800 => bd.freq;
fun void bd_s() {
    (step % 48) => int cst;
    400 * Math.pow(1 - ((cst $ float) / 48), 20) => bd.freq;
    if (cst == 0) {
        bd_c.keyOn ();
    }
    if (cst == 20) {
        bd_c.keyOff ();
    }
}
(0.5) => synth.gain;

// Main Loop
(0) => step;
() => arp_t.next;
() => basssynth_t.next;
while (1) {

    () => arp_t.next;
    () => basssynth_t.next;
    () => mel_t.next;
    () => bd_s;
    (1 + step) => step;
    (each) => now;
}
```
