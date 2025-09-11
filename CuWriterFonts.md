---
public: true
title: All the fonts from CU Writer
---

# All the fonts from CU Writer

[CU Writer](https://th.wikipedia.org/wiki/%E0%B8%8B%E0%B8%B5%E0%B8%A2%E0%B8%B9%E0%B9%84%E0%B8%A3%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C), a public domain word processor from 1989–1993, contains 55 bitmap fonts, which has now been extracted. They can be useful when displaying Thai text on a low-resolution screen or a low-DPI printer.

<div style="filter: drop-shadow(2px 2px 0 #00000040)" class="rounded border bg-#252423 border-#656463 px-8">

![](https://im.dt.in.th/ipfs/bafybeietvxywchbzih3wdnrnbxiupxlsrmrguk5s7o63aq2p4emgsfqznm/image.webp)

</div>

The source code and all the files can be found on GitHub.

::cta[GitHub Repository]{href="https://github.com/dtinth/cu-writer-fonts"}

## How it started

It was a weird rabbit hole. I stumbled upon [a PDF file of a book printed in 1994](https://www.nstda.or.th/asean-india-dl/sites/default/files/20120713-thai-thud2.0.pdf). It seems to feature a monospaced Thai typeface that I couldn’t find anywhere in modern times, yet it looks much better than all the modern monospaced Thai fonts I see nowadays.

<figure class="framed">

![](https://im.dt.in.th/ipfs/bafybeie7pmivetz3twqxvwgkftxlhnkubhe6zenr4w4s26k2y4h2uxove4/image.webp)

</figure>

However, the <span style="display:inline-block;font-size:2em;line-height:0.5em;transform:scaleY(0.5) translateY(0.333em)">stretched text</span> reminds me of an old word processor called CU Writer, a freeware developed by Chulalongkorn University.

I have never used it; only saw its screenshot. Nevertheless, its stretched text kinda made an impression.

![](https://archive.org/download/cu-writer/cw16.png)

…but its on-screen font doesn’t look like the one in the book at all. But whatever. I like obscure fonts, so I thought I would forget about the book for now, and try to extract all the fonts from CU Writer, and see what’s inside.

I’m also interested in bitmap fonts because [I use a low-DPI label printer](FreeTypeJSBlackWhiteText), and bitmap fonts looks much better on it.

## Inside CU Writer 1.6

The [software package](https://software.thaiware.com/download.php?id=1742) contains many font files in various file formats. 39 files, to be exact.

| .FON        | .PRN         | .P24         | .FNT         |
| ----------- | ------------ | ------------ | ------------ |
| NORMAL.FON  | NORMAL.PRN   | NORMAL.P24   | CU_HP_10.FNT |
| NORMAL2.FON | NORMAL2.PRN  | NORMAL2.P24  | CU_HP_12.FNT |
| NORMAL3.FON | NORMAL3.PRN  | NORMAL3.P24  |              |
| NORMAL4.FON | NORMAL4.PRN  | NORMAL4.P24  |              |
|             | NORMALS.PRN  | NORMALS.P24  |              |
|             | NORMALS2.PRN | NORMALS2.P24 |              |
|             | NORMALS3.PRN | NORMALS3.P24 |              |
|             | NORMALS4.PRN | NORMALS4.P24 |              |
| ITALIC.FON  | ITALIC.PRN   | ITALIC.P24   |              |
| ITALIC2.FON | ITALIC2.PRN  | ITALIC2.P24  |              |
| ITALIC3.FON | ITALIC3.PRN  | ITALIC3.P24  |              |
| ITALIC4.FON | ITALIC4.PRN  | ITALIC4.P24  |              |
|             | ITALICS.PRN  | ITALICS.P24  |              |
|             |              | ITALICS2.P24 |              |
|             |              | ITALICS3.P24 |              |
|             |              | ITALICS4.P24 |              |

I could not find any information about these files. But thankfully, [the source code for CU Writer v1.41 is publicly available](https://github.com/kytulendu/CW141). Unfortunately though, it contains less font and does not contain the `.FNT` files or the code to load them at all. So let’s start with what we have.

## The FON, PRN, and P24 files

I asked Claude to help me with understanding the format.

I used [Continue.dev](https://continue.dev/) and fed the model with the source code.

:::me
what are the characteristics of the font files in this software? \
there seem to be .fon, .prn, and .p24 files. \
what do they mean?
:::

:::bubble[Claude 3.5 Sonnet]

Based on the code in [CONVERT.C](https://github.com/kytulendu/CW141/blob/9172fb3860f7280cbd855cd66d691bc847d2f703/SRC/SCUF/CONVERT.C), we can infer the following about the different font file types:

1. .fon files:

   - Used for screen fonts
   - Loaded by the [load_scr()](https://github.com/kytulendu/CW141/blob/9172fb3860f7280cbd855cd66d691bc847d2f703/SRC/SCUF/CONVERT.C#L471) function
   - Have dimensions of 8x20 pixels (X=8, Y=20)

2. .prn files:

   - Used for printer fonts
   - Loaded by the [load_prn()](https://github.com/kytulendu/CW141/blob/9172fb3860f7280cbd855cd66d691bc847d2f703/SRC/SCUF/CONVERT.C#L416) function
   - Have dimensions of 22x16 pixels (X=22, Y=16)

3. .p24 files:

   - Used for 24-pin printer fonts
   - Loaded by the [load_24()](https://github.com/kytulendu/CW141/blob/9172fb3860f7280cbd855cd66d691bc847d2f703/SRC/SCUF/CONVERT.C#L218) function
   - Have dimensions of 18x24 pixels (X=18, Y=24)

4. .FED files:
   - Seem to be a generic font format used by this software
   - Loaded by the [load_fed()](https://github.com/kytulendu/CW141/blob/9172fb3860f7280cbd855cd66d691bc847d2f703/SRC/SCUF/CONVERT.C#L175) function
   - Can have variable dimensions (X and Y are read from the file)

The file extensions likely indicate their intended use:

- .fon for screen display
- .prn for standard printers
- .p24 for 24-pin printers (which could produce higher quality output)

The code includes functions to convert between these different formats, allowing the software to use fonts interchangeably across different output devices. Each format seems to store the font data in a slightly different way, optimized for its particular use case.

:::

Since I’m interested in the higher-quality printer fonts, I decided to focus on the `.p24` files. So I dive in:

:::me
what's the structure of p24 files?
:::

:::bubble[Claude 3.5 Sonnet]

Based on the code in the [`load_24()` function in CONVERT.C](https://github.com/kytulendu/CW141/blob/9172fb3860f7280cbd855cd66d691bc847d2f703/SRC/SCUF/CONVERT.C#L218), we can determine the following about the format of a .p24 file:

1. File size: The file length should be exactly 3 × 18 × (256 - 32) bytes.

2. Character set: It contains data for 224 characters (256 - 32), likely representing the printable ASCII characters.

3. Character dimensions: Each character is 18 pixels wide and 24 pixels high.

4. Data structure:

   - Each character uses 3 \* 18 = 54 bytes of data.
   - The data is stored as a bitmap, where each bit represents a pixel.
   - The 18 pixels of width are stored in 3 bytes (24 bits, with 6 unused bits per row).

5. Data conversion: The [`con_24_to_fed()`](https://github.com/kytulendu/CW141/blob/9172fb3860f7280cbd855cd66d691bc847d2f703/SRC/SCUF/CONVERT.C#L257) function shows how the data is interpreted:

   - Each group of 3 bytes represents one row of the character.
   - The bits are read from most significant to least significant within each byte.
   - 24 such rows make up one character.

6. File order: Characters are stored sequentially, likely in ASCII order starting from character 32 (space).

Here's a visual representation of how one character might be stored:

```
Byte 1   Byte 2   Byte 3   (Row 1)
XXXXXXXX XXXXXXXX XXXXXX00
Byte 4   Byte 5   Byte 6   (Row 2)
XXXXXXXX XXXXXXXX XXXXXX00
...
Byte 52  Byte 53  Byte 54  (Row 24)
XXXXXXXX XXXXXXXX XXXXXX00
```

Where X represents a bit used for the character data, and 0 represents unused bits.

This format allows for efficient storage and retrieval of high-resolution character data suitable for 24-pin dot matrix printers, which were capable of producing higher quality output than standard 9-pin printers.

:::

The information wasn’t entirely accurate. For example, all the bits are actually used. The 3 bytes represent 24 pixels from top to bottom, i.e. every 3 bytes represents a vertical slice of the bitmap. It took a bit of tinkering in [Ruby](Ruby) to figure this out:

<figure class="framed">

![](https://im.dt.in.th/ipfs/bafybeihwqg2lpyhx6vw5xmrdd3y35a6c5ntfceytjfzqexvehxqg2fazuu/image.webp)

</figure>

From the source code, each of these file types has its own loading function. Thankfully, they are all similar. The `.fon`, `.prn`, and `.p24` files contains just the bitmap data, and characters data is arranged sequentially. This makes it pretty easy to parse.

<table class="n-table-bordered">
  <thead>
  <tr>
    <th width="25%">File type</th>
    <th width="25%">FON</th>
    <th width="25%">PRN</th>
    <th width="25%">P24</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>Number of glyphs</td>
    <td colspan="2">256</td>
    <td>224</td>
  </tr>
  <tr>
    <td>Orientation</td>
    <td>Left-to-right,<br>top-to-bottom</td>
    <td colspan="2">Top-to-bottom,<br>left-to-right</td>
  </tr>
  </tbody>
</table>

## The FNT files

Now, the `.fnt` files are different. These files are much larger than all the other files, and there are only two of them: `CU_HP_10.FNT` and `CU_HP_12.FNT`. Unfortunately, the source code does not contain any information about these files, so I had to make some (correct) guesses:

- These files are likely used for high-quality printing due to the “HP” in their names. This matches with [this description from Wikipedia](https://th.wikipedia.org/wiki/%E0%B8%8B%E0%B8%B5%E0%B8%A2%E0%B8%B9%E0%B9%84%E0%B8%A3%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C), which describes that it works with 10 and 12 characters per inch printers by HP LaserJet.

  > CUPRINT รุ่น 1.41 เดือนกรกฎาคม พ.ศ. 2534 ซึ่งสามารถพิมพ์ข้อความขนาด 10 และ 12 ตัวอักษรต่อนิ้ว และใช้กับเครื่องพิมพ์เอชพี เลเซอร์เจ็ท …

- They probably contain multiple fonts, as they are much larger than the other files and there are only two of them.

With these assumption, let’s ask Claude for help with pattern recognition:

:::me

I have this binary file. It is a font file from a free word processor from 90's era. Can you help determine its structure?

```````````````
00000000: 1b2a 6330 441b 2973 3634 5700 4000 0200  .*c0D.)s64W.@...
00000010: 0000 2300 1e00 3200 0001 1500 7800 c800  ..#...2.....x...
00000020: 5400 0000 0700 0000 0002 0300 c800 6800  T.............h.
00000030: 0000 0000 0000 0000 0000 0053 616d 706c  ...........Sampl
00000040: 6520 466f 6e74 2030 3033 001b 2a63 3333  e Font 003..*c33
00000050: 451b 2873 3436 5704 000e 0100 0000 0b00  E.(s46W.........
00000060: 1d00 0800 1e00 783c 3c3c 3c3c 3c3c 3c3c  ......x<<<<<<<<<
00000070: 3c3c 3c18 1818 1818 1818 1818 1818 0000  <<<.............
00000080: 183c 7eff 7e1b 2a63 3334 451b 2873 3436  .<~.~.*c34E.(s46
00000090: 5704 000e 0100 0000 0900 2200 0c00 0f00  W.........".....
000000a0: 78f0 f0f0 f0f0 f0f0 f0f0 f0f0 f0f0 f0f0  x...............
000000b0: f060 6060 6060 6060 6060 6060 6060 601b  .``````````````.
000000c0: 2a63 3335 451b 2873 3134 3057 0400 0e01  *c35E.(s140W....
000000d0: 0000 0002 001e 0019 001f 0078 0000 6000  ...........x..`.
000000e0: 00c0 e000 01c0 e000 01c0 e000 01c0 e000  ................
000000f0: 01c0 e000 01c0 e000 01c0 e000 01c0 ef80  ................
```````````````

:::

:::bubble[Cluade 3.5 Sonnet]

Based on the binary data you've provided, this appears to be a proprietary font file format from a 1990s word processor. While I can't provide a complete breakdown of the format without more information, I can offer some observations and potential structure elements:

1. File Header:
   The file starts with "1b2a6330441b2973363457", which could be a signature or identifier for this font format.

2. Font Metadata:

   - There's a string "Sample Font 003" at offset 0x34, which is likely the font name.
   - Various numeric values in the first few bytes could represent metadata like version, character count, or other font properties.

3. Character Data:

   - The file seems to contain multiple sections, each potentially representing different characters or glyphs.
   - Each section appears to start with a header like "1b2a63XXXX1b28sYYYYW", where XXXX and YYYY are varying numbers.
   - Following these headers are blocks of data that likely represent the bitmap or vector data for each character.

4. Encoding:

   - The data uses a mix of ASCII-readable text and binary data.
   - Some sections contain repeating patterns (like the '<' characters or 'x' characters), which might represent simple bitmap data for certain glyphs.

5. Possible Structure:

   - File Header
   - Font Metadata
   - Character Count or Glyph Index
   - For each character:
     - Character Header
     - Character Data (bitmap or vector)

6. Compression:
   - Some sections show patterns that might indicate simple run-length encoding or other basic compression techniques.

To fully understand this format, you would need:

1. Documentation from the original word processor.
2. Multiple font files of this type to compare.
3. Potentially, the source code or a working version of the word processor that can read these fonts.

If you have access to the original software or more files of this type, that could help in further analysis. Reverse engineering proprietary formats without documentation can be challenging and time-consuming.

:::

<style scoped>
.n-table-bordered {
  border-collapse: collapse;
}
.n-table-bordered th, .n-table-bordered td {
  border: 1px solid #555453;
  padding: 0.5em;
}
</style>

The information wasn’t entirely accurate[^e1], but was enough for me to continue my exploration. I used [ImHex](https://imhex.werwolv.net/) to view the binary data and, after some time, was able to decode it. I won’t go into the details (you can check out [hp.ts](https://github.com/dtinth/cu-writer-fonts/blob/main/src/hp.ts) for that), but it contains a repeating patterns throughout the file.

[^e1]: For example, there is no file header (but font headers exist), and there is no run-length encoding used.

:::details[Pattern description]

**Convention:**

- Hexadecimal numbers represent raw bytes.
- N represents a number encoded in ASCII. For example, the number 24 is encoded as hex **`32 34`**.
- Quoted strings represent ASCII-encoded text.

**Pattern:**

- **`1B "*c" N "D"`**
  - This seems to denote the start of the Nth font. For example `1B "*c0D"` means font number 0.
- **`1B ")s" N "W"`** followed by N bytes of payload
  - The payload seems to contains information about the font, including the font name. I haven’t looked into it.
- **`1B "*c" N "E"`**
  - This seems to denote the character number N. For example `1B "*c33E"` means character number 33.
- **`1B "(s" N "W"`** followed by N bytes of payload
  - This is the character data.
  - The payload contains:
    - 16 bytes of header in binary. I haven’t looked into it yet, but the `payload[13]` contains the width of the bitmap data.
    - The rest of the data is the bitmap data of the character, 1 bit per pixel.

:::

With that, I converted all the fonts into JSON files. Then I created an HTML page that loads these JSON file and turns them into a bitmap font. All the code is in the GitHub repo, so you can check it out:

::cta[GitHub Repository]{href="https://github.com/dtinth/cu-writer-fonts"}

By the way, if you are interested in old-school PC fonts, while researching I also stumbled upon [The Oldschool PC Font Resource](https://int10h.org/oldschool-pc-fonts/) which has tons of old fonts.

## Found it

Indeed, the book mentioned at the beginning seems to use one of the fonts from CU Writer.

<img src="https://im.dt.in.th/ipfs/bafybeihuypsfebcuvwrq2ejavdhicwrru7xg5qndouvdiovdkbzwpe4x34/image.webp" style="filter:invert(1);mix-blend-mode:screen">
