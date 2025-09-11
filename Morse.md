---
public: true
title: How I memorize the morse code (without deliberate practice)
---

# How I memorize the morse code

I [set up my phone to vibrate in morse code](https://github.com/dtinth/dtinth.tools-android) so I can tell apart different kinds of notifications without having to pick up my phone. Inside my pocket, I can feel the vibration. Outside the pocket, I can hear the sound of vibration.

Because of that, I need a way to learn the morse code. I could use an app to practice deliberately, but I’m too lazy for that. On YouTube there are many memorization techniques ([[1]](https://www.youtube.com/watch?v=D8tPkb98Fkk), [[2]](https://www.youtube.com/watch?v=HY_OIwideLg&)) and the [morse code binary tree](https://commons.wikimedia.org/wiki/File:Morse-code-tree.svg) chart is also very helpful, but there’s one more trick that I did not see it in any of these videos, but helped me a lot. I’ll share it here.

I still can’t decode morse code fast yet[^fast], but I’ll share it anyways as it really helps me with accuracy. For me, the trick is to memorize this set of 2-to-3-character sequences:

[^fast]: I still cannot decode a sequence of morse code in real-time. I hear a sequence and have to think about it for a few seconds before I can decode it.

<p style="font-size: 2.5em; text-align: center;">
EIA ISU SHV UF ARW RL WPJ TNM NDK DBX KCY MGO GZQ
</p>

No need to remember them in order — just memorize enough to be able to recall the sequence given the 1st character. For example, if I think of `U`, then I should be able to recall `UF`. Use any mnemonic you like. For example, for `UF` I just think about the sound “oof!”

![](https://static.dt.in.th/uploads/2023/01/16/morse-lookup.excalidraw.svg)

In each sequence…

- The 1st character is the parent node of the binary tree.
- The 2nd character is the left child and represents a dit `.`.
- The 3rd character (if present) is the right child and represents a dah `-`.

…and together, they form the morse code binary tree. Remembering these 3-character sequences enables efficient access to the relevants part of the tree.

![](https://static.dt.in.th/uploads/2023/01/16/morse.excalidraw.svg)

Also remember:

- The first dit `.` is E.
- The first dah `-` is T.

## Decoding

Let’s look at an example:

1. I hear a morse code, `.--.`.
2. I remember that the first `.` is ‘E’.
3. I recall `EIA`, so `.-` is ‘A’.
4. I recall `ARW`, so `.--` is ‘W’.
5. I recall `WPJ`, so `.--.` is ‘P’.

This looks like a lot of steps. However, as I decode more morse codes, shortcuts begin to form in my brain. For example, when I hear `.-`, I immediately think of ‘A’.

Here’s one more example of decoding with shortcuts:

1. I hear a morse code: `.-.`.
2. I remember that `.-` is ‘A’.
3. I recall `ARW`, so `.-.` is ‘R’.

I’m not there yet, but I hope that at some point, these shortcuts would turn into a complete mental lookup table, so I can decode each character in a single mental step.

## Encoding

Now here’s one weird thing. Once I had the lookup table memorized, it seems that not only can I recall the sequence from the 1st character, but also from the 2nd and 3rd character — it’s as if my brain automatically built an index for the 2nd and 3rd characters as well. Not sure if this happens to everyone though.

Let’s say I want to encode ‘W’.

- First, `WPJ` comes up to my mind, but it’s irrelevant.
- Next, `ARW` came up. ‘W’ is in the 3rd position, so I know it ends with `-` and its parent is ‘A’.
- Next, `EIA` came up. ‘A’ is in the 3rd position, so before that `-` there’s another `-`.
- I remembered `E` is `.`.
- Putting them together, the morse code for ‘W’ is `.--`.
