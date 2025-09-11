---
title: How I play music by ear
public: true
---

# How I play music by ear

:::lead
People often ask me how I can play a song _by ear_, without referring to a chord-over-lyrics chart or a sheet music[^sightread]. I will try to explain it in this note.
:::

My guess is that people kinda assume that when I hear a song, I hear the exact notes and chords, and can play back what I hear. Let’s say I listen to _Fly Me to the Moon,_ you might think this is what I hear:

![](https://im.dt.in.th/ipfs/bafybeidmopjwhctawplmlqk37v74gjiyirngs2xkawgknboef45pjxyffa/fly1.svg)

**However, that is not what happens.**

- First, knowing exactly which notes make up the chord requires _perfect pitch_, which I don’t have. [And it’s impossible to develop perfect pitch after 6 years old.](https://www.youtube.com/watch?v=816VLQNdPMM)

- Even if one has perfect pitch, there are so many chords one needs to recognize. There is a set of chords, called the “major scale diatonic chords.” These are the most basic chords commonly used in pop music. That set alone has 40 distinct chords: C, Cm, C#, C#m, C#dim, Db, D, Dm, Ddim, D#m, D#dim, Eb, E, Em, Edim, E#m, E#dim, F, Fm, F#, F#m, F#dim, G, Gm, Gdim, G#, G#m, G#dim, Ab, A, Am, Adim, A#m, A#dim, Bb, Bbm, B, Bm, Bdim, B#dim.

When I listen to music, **this is what I hear:**[^melody]

![](https://im.dt.in.th/ipfs/bafybeigysj3uzkqksuejempkwn624n4g4xkzyc6izmpudkqwcix3twr7ra/fly2.svg)

[^melody]: I hear both the melodies and the chords in a similar fashion, but in this note, I will just focus on the chords.

:::warning[Disclaimer]
I am not a formally trained musician, and I don’t play professionally. I just enjoy playing music and I’m writing this note based on my own perspective because many people asked me how I do it.
:::

## Same song, many versions

If you search for the chords of _Fly Me to the Moon,_ you will find that there are many versions, and some versions has different chords than the others.

![](https://im.dt.in.th/ipfs/bafybeif6zv43uclnizows5tw3xrlga5h4pyj3oerqw6wpmusyqltazo7ye/vers.svg)

Even though the chords are wildly different, when you play them on the instrument, they all feel the same, just that some sound higher-pitched and some sound lower-pitched.

It seems like there’s some **underlying _simpler_ system** that produced these set of chords.

![](https://im.dt.in.th/ipfs/bafybeig7tt6nl3et6hyg6eeehujn7kagxtc6iwro23ptfr7itgnyr5fhyi/vers2.svg)

…and that’s one problem of chord-over-lyrics charts: _It shows what chords to play on an instrument, but it doesn’t show the underlying simpler system that produced that chord._

## Abstract chords

**Abstract chords** represent the underlying harmonic structure of a song. These chords are _abstract_ because you can’t directly play them on an instrument, until you put them in a _key_. (In other words, they are _key-independent_.)

Putting these abstract chords in different keys indeed produces the different versions you see on the chord-over-lyrics charts.

![](https://im.dt.in.th/ipfs/bafybeigkzsckqlu4pci5x5a36c7rw3qtf2qst5523zgov5uo6khuhohqfe/nash.svg)

These green notations you see (<span class="n-ac">6m</span>, <span class="n-ac">2m</span>, <span class="n-ac">5</span>, and <span class="n-ac">1</span>) are one way to represent these abstract chords. They are called the [**Nashville Number System**](https://en.wikipedia.org/wiki/Nashville_number_system), which is designed to be easy to learn for untrained musicians like me.

(There are other, more popular ways, to represent these abstract chords, such as the notation used in [Roman numeral analysis](https://en.wikipedia.org/wiki/Roman_numeral_analysis), which is more popular with formally trained musicians. In Roman numeral analysis, <span class="n-ac">6m–2m–5–1</span> is known as the [**vi–ii–V–I**](https://en.wikipedia.org/wiki/Vi%E2%80%93ii%E2%80%93V%E2%80%93I) progression.)

<details><summary>Some extra pedantic notes</summary>

The Nashville Number System and Roman numeral analysis not only differ in the notation; they also seem to differ in how they think about keys.

In Nashville Number System, we tend to only think in the major scale. A song in the key of E minor is thought of as a song in the key of G major — and we just say it’s in “key G.”

</details>

This system is simpler — remember the 40 major scale diatonic chords? When you make them key-independent, you are left with just **7 abstract chords**: <span class="n-ac">1</span>, <span class="n-ac">2m</span>, <span class="n-ac">3m</span>, <span class="n-ac">4</span>, <span class="n-ac">5</span>, <span class="n-ac">6m</span>, and <span class="n-ac">7dim</span>.

![](https://im.dt.in.th/ipfs/bafybeib4hxuunekcj6inre24pcqz22wk4426wxternmxowkecn6v35ycw4/combination.svg)

<details class="n-chordtable"><summary>Table of major scale diatonic chords in all 12 keys</summary>

|  Key   |  1  | 2m  | 3m  |  4  |  5  | 6m  | 7dim  |
| :----: | :-: | :-: | :-: | :-: | :-: | :-: | :---: |
| **C**  |  C  | Dm  | Em  |  F  |  G  | Am  | Bdim  |
| **G**  |  G  | Am  | Bm  |  C  |  D  | Em  | F#dim |
| **D**  |  D  | Em  | F#m |  G  |  A  | Bm  | C#dim |
| **A**  |  A  | Bm  | C#m |  D  |  E  | F#m | G#dim |
| **E**  |  E  | F#m | G#m |  A  |  B  | C#m | D#dim |
| **B**  |  B  | C#m | D#m |  E  | F#  | G#m | A#dim |
| **F#** | F#  | G#m | A#m |  B  | C#  | D#m | E#dim |
| **C#** | C#  | D#m | E#m | F#  | G#  | A#m | B#dim |
| **Ab** | Ab  | Bbm | Cm  | Db  | Eb  | Fm  | Gdim  |
| **Eb** | Eb  | Fm  | Gm  | Ab  | Bb  | Cm  | Ddim  |
| **Bb** | Bb  | Cm  | Dm  | Eb  |  F  | Gm  | Adim  |
| **F**  |  F  | Gm  | Am  | Bb  |  C  | Dm  | Edim  |

</details>

**Each abstract chord has a unique personality.**
I really recommend watching [Louie Zong’s chord personalities video](https://youtu.be/4CAMOVeqoyE). It also exposes you to common chords other than the major scale diatonic chords, such as <span class="n-ac">3</span>, <span class="n-ac">2</span>, <span class="n-ac">4m</span>, <span class="n-ac">b6</span> and <span class="n-ac">b7</span>. Note that the video uses the Roman numeral analysis notation.

As these abstract chords are key dependent, _you don’t need perfect pitch_ to “feel” the personality of these chords. That is, once you train yourself to recognize the <span class="n-ac">6m</span> abstract chord, you will hear it in a song in any key. This is a [**“relative pitch”**](https://en.wikipedia.org/wiki/Relative_pitch) skill, and there are many apps that can help you train this skill.

Also note that there are a lot of duplicate chords in the table above. **Chords don’t mean much without the context (the key it is in).** For example, the <span class="n-cc">C</span> chord in the key of C sounds ‘resolved’ or ‘at home’, while the same <span class="n-cc">C</span> chord in the key of F sounds ‘tense’ or ‘unresolved’. Meanwhile, the <span class="n-ac">1</span> chord will sound at home regardless of the key it is in.

## Scale degrees for melodies

The same goes for melodies:

![](https://im.dt.in.th/ipfs/bafybeifnyucf2r5ny25ql5an7upcdjsdi3ts4z25i6kpc5rezie3oosksa/tsf.svg)

The notation you see is based on the [**tonic sol-fa**](https://en.wikipedia.org/wiki/Tonic_sol-fa) system, which is a system to represent melodies in a key-independent way.

There are seven basic **[scale degrees](<https://en.wikipedia.org/wiki/Degree_(music)>)** to recognize — <span class="n-ac">d</span>, <span class="n-ac">r</span>, <span class="n-ac">m</span>, <span class="n-ac">f</span>, <span class="n-ac">s</span>, <span class="n-ac">l</span>, <span class="n-ac">t</span> — and they are pronounced or sung as “do, re, mi, fa, sol, la, ti.” The <span class="n-ac">d</span> (the first scale degree, also called the [tonic](<https://en.wikipedia.org/wiki/Tonic_(music)>)) corresponds to the song’s key. That is, if the song is in the key of Ab, then <span class="n-ac">d</span> corresponds to <span class="n-cc">Ab</span>.

<details class="n-chordtable"><summary>Table of scale degrees and their corresponding pitch classes in all 12 keys</summary>

|  Key   |  d  |  r  |  m  |  f  |  s  |  l  |  t  |
| :----: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| **C**  |  C  |  D  |  E  |  F  |  G  |  A  |  B  |
| **G**  |  G  |  A  |  B  |  C  |  D  |  E  | F#  |
| **D**  |  D  |  E  | F#  |  G  |  A  |  B  | C#  |
| **A**  |  A  |  B  | C#  |  D  |  E  | F#  | G#  |
| **E**  |  E  | F#  | G#  |  A  |  B  | C#  | D#  |
| **B**  |  B  | C#  | D#  |  E  | F#  | G#  | A#  |
| **F#** | F#  | G#  | A#  |  B  | C#  | D#  | E#  |
| **C#** | C#  | D#  | E#  | F#  | G#  | A#  | B#  |
| **Ab** | Ab  | Bb  |  C  | Db  | Eb  |  F  |  G  |
| **Eb** | Eb  |  F  |  G  | Ab  | Bb  |  C  |  D  |
| **Bb** | Bb  |  C  |  D  | Eb  |  F  |  G  |  A  |
| **F**  |  F  |  G  |  A  | Bb  |  C  |  D  |  E  |

</details>

If you are a Thai person, this may be familiar, because traditional Thai music uses a variation of the tonic sol-fa system to notate melodies ([example](http://www.sookjai.com/index.php?topic=62376.0)), in which notes are named <span class="n-ac">ด</span>, <span class="n-ac">ร</span>, <span class="n-ac">ม</span>, <span class="n-ac">ฟ</span>, <span class="n-ac">ซ</span>, <span class="n-ac">ล</span>, <span class="n-ac">ท</span>. I learned traditional Thai music in elementary school (it is part of the curriculum), and we are taught to learn to sing the notes first, before playing it on the instrument (it helps with remembering the song and also contributed to my relative pitch skills).

[![](https://im.dt.in.th/ipfs/bafybeibatysfg4lm673kd4qa4xjk2zaqt6wpki2deyf7sjq2xiufmelzqi/image.webp)](http://www.sookjai.com/index.php?topic=62376.0)

The scale degrees can also be written as numbers, sometimes with a caret (^) on top: <span class="n-ac">1&#x302;</span>, <span class="n-ac">2&#x302;</span>, <span class="n-ac">3&#x302;</span>, <span class="n-ac">4&#x302;</span>, <span class="n-ac">5&#x302;</span>, <span class="n-ac">6&#x302;</span>, <span class="n-ac">7&#x302;</span>.

(In addition, these scale degrees can be raised (_sharpened_) or lowered (_flattened_) by a [semitone](https://en.wikipedia.org/wiki/Semitone) to make the melody fit the chords better, or to produce spicier or more exotic sounds, but that’s some more advanced stuff that we’ll not get into in this note.)

### Movable-Do

If you studied some music, you may be taught that <span class="n-cc">Do–Re–Mi–Fa–Sol–La–Ti</span> corresponds to the notes <span class="n-cc">C–D–E–F–G–A–B</span> respectively. This is true in the [fixed-do](https://en.wikipedia.org/wiki/Solf%C3%A8ge#Fixed_do_solf%C3%A8ge) system. Piano lessons usually teach this system as it helps with sight-reading sheet music.

The tonic sol-fa system is instead based on the [**movable-do**](https://en.wikipedia.org/wiki/Solf%C3%A8ge#Movable_do_solf%C3%A8ge) system, where <span class="n-ac">Do–Re–Mi–Fa–Sol–La–Ti</span> corresponds to the scale degrees.

[The _“Do-Re-Mi”_ Song from _The Sound of Music_](https://youtu.be/drnBMAEA3AM) is a great song to learn movable-do. In this song, the words <span class="n-ac">Doe–Ray–Me–Far–Saw–La–Tea</span> corresponds to <span class="n-cc">Bb–C–D–Eb–F–G–A</span> respectively. The song is in the key of Bb. [The longer version of this song](https://youtu.be/1RW3nDRmu6k) has more complex exercises. As the song puts it: _“When you know the notes to sing, you can sing most anything.”_

<!-- - In Thai traditional music, the notes <span class="n-ac">โด–เร–มี–ฟา–ซอล–ลา–ที</span> often roughly correspond to <span class="n-cc">Bb–C–D–Eb–F–G–A</span> as the instruments are usually tuned to Bb, they can also be tuned differently sometimes. -->

## Figuring out the key

With relative pitch, you will be able to recognize the abstract chords and scale degrees in a song. But to actually play the song on an instrument, you need to decide which key to play it in. If you play with other people, you need to agree on the same key.

I don’t have a way to explain this in a concise and easy-to-understand way, but it comes naturally with practice and this is what I usually do:

- Ask a bandmate what key the song is in.
- Sing the <span class="n-ac">d</span> into a [tuner app](https://chrome.google.com/webstore/detail/tuner/aljjbggdbpfcefnliggdhejickokofej) and let it tell me the key.
- Play a random note on the instrument until I find the <span class="n-ac">d</span>. (With enough practice, one can do this in a way that people don’t notice.)

## Playing the song in that key

Once the key is known, the abstract chords and scale degrees can be converted to chords and notes, and then played on an instrument. There are 2 ways to do this:

- **Learn to play in one key (e.g. key C)** and use the instrument’s [transpose](<https://en.wikipedia.org/wiki/Transposition_(music)>) function to automatically transpose the performance to the desired key. This is what I do most of the time, but there are a few major drawbacks:

  - If the there’s a mid-song key change, I have to change the transpose setting on the fly. This can disrupt the flow of the performance.
  - This is only possible if the instrument you’re playing has a transpose function. Not all instruments have this function.

- **Learn to play in all 12 keys.** This is arguably much harder, but it gives you a lot of flexibility.

- **Use an [isomorphic keyboard](https://en.wikipedia.org/wiki/Isomorphic_keyboard),** where the same chord shape are played the same way in all keys. I played around with it a bit but I don’t think it’s for me.

[^sightread]:
    Although I can read a chord chart or sheet music a little bit, I am very bad at sight-reading.
    If you give me one and ask me to play it, I probably can't. But if you have me listen to a song a few times, I probably can play it back.

<style>
    .n-ac { color: #78b66b; font-weight: 600; }
    .n-cc { color: #ff86ae; font-weight: 600; }
    .n-chordtable thead th ~ th { color: #78b66b }
    .n-chordtable tbody td ~ td { color: #ff86ae }
</style>
