---
public: true
facebook: https://www.facebook.com/dtinth/posts/10216823547575184
title: ปริภูมิสี LCH (color space)
created: 2021-05-30
aliases:
  - 20210530T165138Z0657
---

![](https://static.dt.in.th/uploads/2021/05/30/gamut.png)

อ่านบทความนี้แล้วเปิดโลกเกี่ยวกับเรื่อง [“สี”](Colors) ไม่น้อยเลยทีเดียว

- [🔖 LCH colors in CSS: what, why, and how? – Lea Verou](https://lea.verou.me/2020/04/lch-colors-in-css-what-why-and-how/)

คือการเป็นนักพัฒนาเว็บเรามักจะคุ้นชินกับพวกสี RGB ที่มีค่าของแต่ละแชนแนลอยู่ในช่วง 0–255 (00–ff)

แต่ปัจจุบัน หน้าจอยุคใหม่ๆ สามารถแสดงสีต่างๆ ได้เยอะขึ้น ทำให้ได้สีสันที่สดขึ้น… แต่ถ้าเกิดหน้าจอต่างๆ ปรับช่วงสีให้กว้างขึ้นโดยคงช่วงเลขไว้แบบเดิม จะส่งผลทำให้การแสดงสีต่างๆ เพี้ยน กลายเป็นปัญหาว่าหน้าจอต่างๆ แสดงภาพด้วยสีสันไม่เท่ากัน จึงเกิดเป็น Color space ต่างๆ ที่กว้างกว่า sRGB ขึ้นมา

ก็หมายความว่าในโลกของเว็บที่ยังใช้สีในช่วง sRGB ธรรมดากันอยู่ จะสามารถใช้สีได้แค่ประมาณ 2/3 ของสีทั้งหมดที่หน้าจอสามารถแสดงผลได้เท่านั้น… ซึ่งถ้าเป็นแบบนี้ต่อไป ยิ่งเทคโนโลยีหน้าจอสามารถแสดงสีได้สดมากขึ้นเท่าไหร่ สีบนโลกของเว็บก็จะยิ่งหม่นลงเท่านั้น

ปัจจุบันในโลกของ CSS มีการเสนอ syntax สีที่สามารถระบุค่าสีนอกช่วงของ sRGB ได้ (ตัวอย่างในรูป, ปัจจุบันใช้ได้เฉพาะใน Safari เท่านั้น) — รวมถึงมีการเสนอ Color space แบบใหม่ที่ชื่อว่า LCH ซึ่งได้ออกแบบไว้เผื่อสำหรับอนาคตไว้แล้ว (ยังไม่มีเบราเซอร์ซัพพอร์ต)

- [🔖 Improving Color on the Web | WebKit](https://webkit.org/blog/6682/improving-color-on-the-web/)
- [🔖 The Expanding Gamut of Color on the Web | CSS-Tricks](https://css-tricks.com/the-expanding-gamut-of-color-on-the-web/)

สำหรับตอนนี้ ถ้าอยากให้เว็บของตัวเองมีสีที่สดกว่าเว็บชาวบ้าน (บนจอที่สามารถแสดงสีสดๆ ได้) วิธีนึงคือสร้างไฟล์ PNG ที่มี Color profile ที่กว้างกว่า sRGB แล้วเอามาใช้เป็น background-image

- [🔖 Panic on Twitter: ❇️ A short story about the color green. (thread)](https://twitter.com/panic/status/1106633444157607936)
