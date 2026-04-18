---
title: bizdocgen, a business document generator widget for Grist
public: true
created: 2026-04-18
---

# bizdocgen

ช่วงปีสองปีที่ผ่านมา เวลาจัดอีเวนต์แล้วรับเงินจากสปอนเซอร์ ก็ต้องทําเอกสารพวก Quotation, Invoice, Receipt ส่งให้สปอนเซอร์ต่างๆ… ช่วงนั้นเริ่มฝึกใช้โปรแกรม [Grist](Grist) ในการจัดการข้อมูลต่างๆ พอดีด้วย เลยลองเขียน [Custom Widget](https://support.getgrist.com/widget-custom/) เพื่อให้สามารถ Print เอกสารจาก Grist ได้ตรงๆ ดู

:::figure[คลิกที่ภาพเพื่อเริ่มใช้งานเทมเพลตนี้ใน Grist (ไม่จำเป็นต้องล็อกอิน)]{.framed}

[![A screenshot shows an online document management system built with Grist. The main area displays a table of documents with columns for "Document Type," "Number," "Credit Term," "Provider," "Client," and "Tax." A document is selected, and its details are shown on the right. The right panel presents a detailed view of a document with fields like "Invoice Number," "Date Issued," "Client," "Total Amount," and a QR code.](https://im.dt.in.th/ipfs/bafybeiflwiwetv4a4344yi577ei4iegozd7stfjwibotwxjlujb7zfqd3a/image.webp)](https://bizdocgen.getgrist.com/cq6sb6WHRMre/bizdocgen-template)

:::

ปีที่แล้วก็เริ่มส่งให้แฟนกับเพื่อนๆ ที่รับฟรีแลนซ์ ลองใช้ระบบนี้ออกเอกสารต่างๆ ดูบ้าง (ก็คือส่งไฟล์เทมเพลตให้ แล้วก็ใช้ได้เลย) ตอนนี้ตัวเทมเพลตค่อนข้างนิ่งแล้ว เลยเอามาแชร์ให้ลองเล่นกันดูครับบ

::cta[เปิด Template ใน Grist]{href="https://bizdocgen.getgrist.com/cq6sb6WHRMre/bizdocgen-template"}

ตัวเทมเพลตสามารถเอาไปปรับแต่งต่อเพื่อเพิ่มเติมความสามารถต่างๆ ได้ตามต้องการได้เลย (ตัวอย่าง: ในไฟล์ Grist ของ [Papatsiri](https://www.facebook.com/papatsiri.apipaiboon) ได้เพิ่มอีกคอลัมน์นึง สำหรับอัปโหลดไฟล์ 50 ทวิไว้ด้วย พอลูกค้าจ่ายเงินแล้วส่งใบ 50 ทวิมา ก็อัปโหลดเก็บไว้ ปีถัดไปเวลายื่นภาษีแล้วเขาขอหลักฐาน เอกสารทุกอย่างจะได้รวมไว้ที่เดียวเลย)

ส่วนโค้ดของตัว Custom Widget อัปไว้บน GitHub [dtinth/bizdocgen](https://github.com/dtinth/bizdocgen) สามารถ fork และนำไป deploy เองได้เลยครับบ

---

_เนื้อหาต่อไปนี้จะเป็นคู่มือการใช้งานเบื้องต้นครับ~_

---

## ความสามารถหลัก

<div class="n-features">

- <iconify-icon inline icon="mdi:file-document"></iconify-icon> **สร้างเอกสาร 3 ประเภท** คือ ใบเสนอราคา, ใบแจ้งหนี้, ใบเสร็จรับเงิน
- <iconify-icon inline icon="mdi:calculator"></iconify-icon> **คำนวณภาษีอัตโนมัติ** โดยเวลารับเงินจากบริษัทสามารถระบุให้หักภาษี ณ ที่จ่าย ได้เลย
- <iconify-icon inline icon="mdi:qrcode"></iconify-icon> **สร้าง QR Code พร้อมเพย์ พร้อมฝังจำนวนเงิน​** เพื่อความสะดวกในการรับชำระเงิน
- <iconify-icon inline icon="mdi:printer"></iconify-icon> **พิมพ์เอกสารขนาด A4** จัดหน้าพร้อมพิมพ์ทันที
- <iconify-icon inline icon="mdi:palette"></iconify-icon> **เปลี่ยนฟอนต์ สี และรูปแบบตามต้องการ** โดยการปรับแต่ง CSS
- <iconify-icon inline icon="mdi:language-markdown"></iconify-icon> **รองรับ Markdown** ในรายละเอียดสินค้าและหมายเหตุ

</div>

## Grist คืออะไร?

[**Grist**](https://www.getgrist.com/) เป็นโปรแกรมจัดการข้อมูล ที่มีหน้าตาและวิธีใช้งานที่คุ้นเคยคล้ายกับ Spreadsheet (คล้าย Excel หรือ Google Sheets) แต่มีความสามารถที่เหนือกว่า เช่น:

- [การเชื่อมโยงข้อมูลระหว่างตาราง](https://support.getgrist.com/col-refs/)
- [การเขียนสูตรคำนวณด้วยภาษา Python](https://support.getgrist.com/formulas/)
- [การนำ Custom Widgets เข้ามาเชื่อมต่อ](https://support.getgrist.com/widget-custom/) เพื่อแสดงผลข้อมูลในรูปแบบต่างๆ ได้อย่างอิสระ

ซึ่ง bizdocgen ใช้ความสามารถเหล่านี้ เพื่อสร้างเอกสารจากข้อมูลในโปรแกรม Grist ได้ทันที

:::details[Grist มีค่าใช้จ่ายไหม? (รายละเอียดแพ็กเกจฟรี)]

[**คุณสามารถใช้งาน Grist ได้ฟรี**](https://www.getgrist.com/pricing/) บนคลาวด์ของ Grist โดยในแพ็กเกจฟรี แต่ละเอกสารจะสามารถเก็บข้อมูลได้สูงสุด 5,000 แถว ซึ่งถือว่าเพียงพออย่างมาก แต่มีข้อควรพิจารณา คือข้อมูลจะถูกเก็บอยู่บนเซิร์ฟเวอร์ที่สหรัฐอเมริกา ทำให้การใช้งานหน้าเว็บจากไทยอาจมีอาการหน่วงบ้างเล็กน้อย แต่โดยรวมยังทำงานได้เสถียรและราบรื่นมาก จึงเป็นรูปแบบที่ผมแนะนำที่สุดสำหรับคนที่เพิ่งเริ่มใช้

นอกจากนี้ [คุณสามารถนำ Grist ไปติดตั้งบนเซิร์ฟเวอร์ของคุณเองได้ด้วย](https://support.getgrist.com/self-managed/) โดยไม่มีค่าใช้จ่ายเพิ่มเติมนอกจากค่าเช่าเซิร์ฟเวอร์ การใช้งาน Grist บนเซิร์ฟเวอร์ของคุณเอง จะทำให้ข้อมูลทั้งหมดอยู่บนเซิร์ฟเวอร์ของคุณ 100% ไม่มีการจำกัดจำนวนแถว แต่จะต้องอาศัยความรู้เชิงเทคนิคในการติดตั้ง ดูแลระบบ และสำรองข้อมูลด้วยตัวเอง

คุณสามารถเริ่มใช้งาน Grist บนคลาวด์ไปก่อนได้ และหากต้องการย้ายไปใช้บนเซิร์ฟเวอร์ของคุณเองในภายหลัง ก็สามารถทำได้โดยการดาวน์โหลดข้อมูลจากคลาวด์ แล้วนำไปอัปโหลดในระบบของคุณเองได้เลย

:::

## เริ่มต้นใช้งาน

### เปิดเทมเพลต

1. [**คลิกที่นี่เพื่อเปิด Template**](https://bizdocgen.getgrist.com/cq6sb6WHRMre/bizdocgen-template) (ไม่จำเป็นต้องล็อกอิน)
2. คุณสามารถลองแก้ไขข้อมูลในเอกสารได้เลย (ระบบจะ[สร้างสำเนาชั่วคราว](https://support.getgrist.com/glossary/#fiddle-mode) ให้คุณทดลองใช้งาน)
3. หากต้องการบันทึกเก็บไว้ใน Workspace ของคุณเอง ให้คลิกที่ **Use This Template** หรือ **Save Copy** (ในขั้นตอนนี้คุณจะต้องสมัครสมาชิกหรือเข้าสู่ระบบ Grist)

::cta[เปิด Template ใน Grist]{href="https://bizdocgen.getgrist.com/cq6sb6WHRMre/bizdocgen-template"}

:::details[สำหรับผู้ใช้งาน Self-Hosted Grist]

หากคุณได้ติดตั้ง Grist ไว้บนเซิร์ฟเวอร์ของคุณเอง คุณสามารถดาวน์โหลดไฟล์เทมเพลต [`template.grist`](https://raw.githubusercontent.com/dtinth/bizdocgen/main/template.grist) แล้วนำไป Import เข้าไปในระบบของคุณได้เลย

::cta[ดาวน์โหลดไฟล์เทมเพลต]{href="https://raw.githubusercontent.com/dtinth/bizdocgen/main/template.grist"}

:::

### ส่วนประกอบของเทมเพลต

เมื่อคุณเปิดไฟล์เทมเพลตขึ้นมา จะเห็นแถบเมนูด้านซ้ายมือที่ประกอบไปด้วย Pages ต่างๆ ดังนี้

:::figure{.framed}

![](https://im.dt.in.th/ipfs/bafybeig2b27ezga5sflhfyrz3a6yagormz4tkzegffv5kedtsttpjuoqx4/image.webp)

:::

1. **📝 Documents** – หน้าแรกและหน้าหลักที่ใช้สำหรับสร้างเอกสารต่างๆ
2. **💼 Providers** – หน้าสำหรับใส่ชื่อผู้ให้บริการ (ชื่อของคุณ/หน่วยงานของคุณ)
3. **👥 Clients** – หน้าสำหรับเก็บข้อมูลลูกค้า/สปอนเซอร์
4. **💳 Payment Methods** – หน้าสำหรับเก็บข้อมูลวิธีการรับเงิน

ในตัว Template เราได้เตรียมข้อมูลตัวอย่างในแต่ละหน้าไว้ให้เรียบร้อยแล้ว (ทั้ง Documents, Providers, Clients, และ Payment Methods) เดี๋ยวเราจะมาลองออกเอกสารกันดู

### โครงสร้างของหน้า Documents

ในหน้า **Documents** (หน้าแรก) หน้าจอจะถูกแบ่งออกเป็น 3 ส่วนหลักๆ

![](https://im.dt.in.th/ipfs/bafybeiemcrzuqg36xb6t64aritxw3s3n7aeis35upeuwnbjjvdpwb5n3gu/image.webp)

1. **Documents (ซ้ายบน):** แสดงตารางรายการเอกสารต่างๆ
2. **Items (ซ้ายล่าง):** แสดงรายการสินค้าหรือบริการต่างๆ ภายในเอกสารนั้น เมื่อคุณเลือกคลิกเอกสารใดๆ ในส่วน Documents ด้านบนแล้ว ตารางส่วน Items ด้านล่างก็จะเปลี่ยนตาม เพื่อแสดงเฉพาะรายการภายในเอกสารที่คุณกำลังเลือกอยู่
3. **Preview & Print (ขวา):** แสดงตัวอย่างหน้าตาเอกสารแบบเรียลไทม์ และมีปุ่มสำหรับสั่งพิมพ์เอกสารออกมา

### ขั้นตอนการลองสร้างเอกสาร

1. **สร้างเอกสารใบใหม่:**

   - เข้าไปที่ตารางในส่วน **Documents** ด้านซ้ายบน
   - ไปที่แถวล่างสุด ซึ่งเป็นพื้นที่ว่างสำหรับเพิ่มแถวใหม่

2. **กำหนดประเภทเอกสาร (Document Type):**

   - ในแถวใหม่ คอลัมน์แรกสุดจะชื่อ **Document Type** สำหรับเลือกประเภทเอกสาร
   - ให้ดับเบิลคลิกแล้วเลือกประเภทเอกสารตามที่ต้องการ
   - ในตัวอย่างนี้เราจะเลือกเป็น _Quotation_

   :::figure{.framed}
   ![A dropdown menu labeled "q" is open, displaying options for "Quotation," "Invoice," and "Receipt."](https://im.dt.in.th/ipfs/bafybeid3px24h2jxm72ftc2a4kx3yfcbrd3zzrmehse5yjsdfxo5b2nstq/image.webp)
   :::

   - เมื่อเลือกเสร็จ คอลัมน์ **Date** (วันที่) และ **Number** (เลขที่เอกสาร) จะถูกเติมให้โดยอัตโนมัติ

   :::figure{.framed}
   ![Date and Number are auto-filled upon creation, but can be manually changed afterwards.](https://im.dt.in.th/ipfs/bafybeiachoepzhivmjgeadjpsk2pvltwwjp5jueuj4xaqn2fgaj6visk4i/image.webp)
   :::

3. **กรอกข้อมูลที่เกี่ยวข้อง:**

   - **Credit Term:** กำหนดระยะเวลาการชำระเงิน (เช่น 7 วัน, 15 วัน, 30 วัน)
   - **Provider** และ **Client:** ดับเบิลคลิกเซลล์ว่างๆ แล้วเลือกชื่อผู้ให้บริการและลูกค้า จากข้อมูลที่ได้กรอกไว้ในหน้า Providers และ Clients
   - **Tax:** ค่าเริ่มต้นจะอยู่ที่ `0%` สามารถปรับเปลี่ยนเป็น `-3%` หากต้องการหักภาษี ณ ที่จ่าย
   - **Payment Method:** เลือกช่องทางการรับเงิน ข้อมูลส่วนนี้จะถูกแทรกเข้าไปในส่วนท้ายใบแจ้งหนี้ พร้อมๆ กับการแนบ PromptPay QR Code มาให้ด้วย ถ้ากำหนดไว้

4. **เพิ่มรายการสินค้าและบริการ:**

   - คลิกเลือกแถวเอกสารที่คุณเพิ่งสร้างอยู่
   - มองไปที่ตาราง **Items** ฝั่งซ้ายล่าง
   - กรอกข้อมูลลงในคอลัมน์ **Description** (รายละเอียด), **Quantity** (จำนวน), และ **Unit Price** (ราคาต่อหน่วย)
   - เมื่อกรอกเสร็จ ยอด **Total** จะถูกคำนวณโดยอัตโนมัติ และผลลัพธ์ทั้งหมดจะแสดงที่ส่วนด้านขวาทันที

5. **สั่งพิมพ์เอกสาร / บันทึก PDF:**

   - ไปที่กล่อง **Preview & Print** ด้านขวา
   - คลิกที่ปุ่ม **"🖨️ พิมพ์เอกสาร"**
   - เลือกว่าจะพิมพ์ออกมาเลย หรือบันทึกเป็นไฟล์ PDF
   - ในไฟล์เอกสารจะมีพื้นที่ว่างสำหรับใส่ลายเซ็น ให้ใช้โปรแกรมแก้ไข PDF ใส่ลายเซ็นเข้าไปในเอกสารด้วยตัวเองอีกที

### คำแนะนำการใช้ Keyboard Shortcut ใน Grist

คุณสามารถศึกษา [Keyboard Shortcut ของ Grist](https://support.getgrist.com/keyboard-shortcuts/) เพื่อให้เพิ่มข้อมูลได้อย่างรวดเร็ว

ตัวอย่างการใช้งานคีย์บอร์ด:

1. คลิกที่กล่อง **Documents** ตรงไหนก็ได้ เพื่อให้โฟกัสอยู่ในตารางเอกสาร
2. กด <kbd>⌘</kbd>+<kbd>↓</kbd> (Mac) หรือ <kbd>Ctrl</kbd>+<kbd>↓</kbd> (Windows) เพื่อเลื่อนเคอร์เซอร์ไปที่แถวล่างสุด (แถวว่างสำหรับเพิ่มเอกสารใหม่)
3. กด <kbd>Home</kbd> เพื่อเลื่อนเคอร์เซอร์ไปที่คอลัมน์แรกสุด (Document Type)
4. กด <kbd>Enter</kbd> เพื่อเริ่มแก้ไขเซลล์ (Grist จะแสดงเมนูให้เลือกประเภทเอกสาร)
5. กด <kbd>q</kbd> เพื่อเลือกประเภทเอกสาร Quotation (หรือกด <kbd>i</kbd> สำหรับ Invoice, <kbd>r</kbd> สำหรับ Receipt)
6. กด <kbd>Tab</kbd> เพื่อยืนยันการเลือกประเภทเอกสาร และเลื่อนไปยังคอลัมน์ถัดไป (Date) โดยอัตโนมัติ

หลังจากกรอกข้อมูลในแต่ละเซล แนะนำให้กดปุ่ม <kbd>Tab</kbd> เพื่อไปยังคอลัมน์ถัดไป (หากกดปุ่ม <kbd>Enter</kbd> โปรแกรมจะเลื่อนไปยังแถวถัดไปแทน)

## การปรับแต่งและการนำไปโฮสต์เอง

หากคุณต้องการปรับแต่งหน้าตาเอกสาร แก้ไขโค้ด หรือต้องการความเสถียรสูงสุดในการใช้งาน คุณสามารถนำ Custom Widget นี้ไปโฮสต์เองได้ โดยทำตามขั้นตอนดังนี้:

1. **Fork โค้ดต้นฉบับ:** เข้าไปที่ Repository [dtinth/bizdocgen](https://github.com/dtinth/bizdocgen) แล้วทำการ Fork ไปยังบัญชี GitHub ของคุณ
2. **Deploy:** นำโค้ดที่ Fork ไว้ไป Deploy บนบริการ Static Site Hosting ที่คุณถนัด (เช่น [Cloudflare Pages](https://pages.cloudflare.com/), [Vercel](https://vercel.com/) หรือ [Netlify](https://www.netlify.com/) เป็นต้น)
3. **อัปเดต URL ใน Grist:** เมื่อ Deploy สำเร็จและได้ URL ใหม่มาแล้ว ให้กลับมาที่ Grist Document ของคุณเพื่ออัปเดต URL ของ Custom Widget

วิธีการอัปเดต URL ของ Custom Widget ใน Grist:

1. ไปที่หน้า Documents
2. คลิกเลือกกล่อง Preview & Print
3. กดเปิดแผงควบคุม Creator Panel ที่อยู่บริเวณมุมขวาบนของหน้าจอ เลือกแท็บ **Custom** แล้วไปที่แท็บย่อย **Widget**
4. ตรง **Custom URL** นำ URL ใหม่ของคุณไปวางแทนที่ URL เดิม ระบบก็จะเปลี่ยนไปใช้ Widget เวอร์ชันของคุณทันที

:::figure{.framed}
![](https://im.dt.in.th/ipfs/bafybeiavryy5fc6ok4pl6ng25og4bbheqeqftfcom44scgdapguybqfq2a/image.webp)
:::

## ข้อตกลงการใช้งานและข้อจำกัดความรับผิดชอบ (License & Disclaimer)

โปรเจกต์นี้เผยแพร่เป็นโอเพนซอร์สภายใต้ MIT License ซึ่งเปิดให้ทุกคนสามารถนำไปใช้งานหรือดัดแปลงได้อย่างอิสระ แต่มีข้อควรทราบดังนี้:

- **ให้บริการแบบ "ตามสภาพ" (As-is):** ระบบนี้ไม่มีการรับประกันใดๆ ทั้งสิ้น ไม่รับประกันว่าจะปราศจากบั๊ก หรือรับประกันว่าตัว Widget จะสามารถเข้าถึงได้ตลอดเวลา
- **การอัปเดตและ Breaking Changes:** ปัจจุบัน Custom Widget นี้ถูกโฮสต์ไว้บน Cloudflare Pages แม้ระบบนี้จะค่อนข้างเสถียร แต่ในอนาคตอาจมีการอัปเดตเพื่อปรับปรุงหรือเพิ่มฟีเจอร์ใหม่ๆ ซึ่งอาจ[ทำให้เกิด Breaking Changes ที่ส่งผลกระทบต่อรูปแบบการใช้งานเดิมของคุณได้](https://xkcd.com/1172/) (แม้ผมจะพยายามหลีกเลี่ยงให้มากที่สุดก็ตาม) หากคุณนำไปใช้งานจริงจังและกังวลเรื่องผลกระทบจากการอัปเดต หรือต้องการความแน่นอน ขอแนะนำอย่างยิ่งให้ทำการโคลนโค้ดไปโฮสต์และจัดการ URL ด้วยตัวคุณเอง (ตามวิธีในหัวข้อด้านบน) เพื่อให้คุณสามารถควบคุมระบบทั้งหมดอย่างสมบูรณ์
- **การสนับสนุน (Support):** หากคุณพบปัญหาในการใช้งาน สามารถเข้าไปเปิด [Issue](https://github.com/dtinth/bizdocgen/issues) แจ้งไว้ได้ที่ GitHub Issues อย่างไรก็ตาม ผู้พัฒนาอาจไม่ได้มีทรัพยากรพอที่จะดูแลหรือแก้ปัญหาให้ได้ทั้งหมด แต่เนื่องจากโปรเจคนี้เป็นโอเพนซอร์ส คุณสามารถ Fork โปรเจกต์ไปแก้ไขเองได้เลย

<style scoped>
.n-features iconify-icon, .n-features strong {
  color: #bef;
}
kbd {
  padding: 0.1em 0.3em;
  color: inherit;
  background: linear-gradient(to bottom, #25242380, #35343380);
  border: 2px solid #656463;
  border-color: #656463 #555453 #454443;
  border-radius: 4px;
  box-shadow: 2px 2px #00000040;
  font: inherit;
}
</style>
