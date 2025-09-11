---
facebook: https://www.facebook.com/dtinth/posts/10210634880222368
public: true
title: Gitthereum
created: 2018-08-28
aliases:
  - 20180828T153800Z0775
---

[🔖 Gitthereum: เปลี่ยน git ให้เป็น blockchain](https://medium.com/@peawyoyoyin/gitthereum-transforming-git-into-a-working-blockchain-538df6617ac6)

ลอง Implement ระบบ Blockchain บน Git ดู~ โปรเจกต์นี้ปั่นกันที่งาน [Pizza Hackathon 2018](https://www.facebook.com/groups/246574362665570/) (งานสนุกมากๆ ขอบคุณพี่ๆ ที่จัดงานนี้ขึ้นมาครับ)

โปรเจกต์นี้ น้องเปียว [Piriyapong Laopongsit](https://www.facebook.com/piriyapong.lao) เป็นเจ้าของไอเดียเลย เห็นว่า Git มันมีคุณสมบัติต่างๆ ที่คล้ายๆ Blockchain มาก เอามาต่อยอดนิดหน่อยน่าจะทำเป็น Blockchain ได้ละ… ถ้าไม่ได้น้องเปียวคิดหัวข้อนี่ผมก็ไม่รู้เหมือนกันว่ามางานนี้จะ Hack อะไรดี เพราะผมแทบจะไม่มีไอเดียอะไรเกี่ยวกับพวก DApp ในหัวอยู่เลย 555 น้องเปียวเขียนโค้ดระบบที่ไว้ใช้เช็คมูลค่าในบัญชี ระบบสร้าง Transaction ระบบ Sync เพื่อดึงข้อมูลล่าสุด หน้า Web UI ไว้ Interface กับ Blockchain นี้ และรวมถึง [Writeup ที่แชร์ด้วย](https://medium.com/@peawyoyoyin/gitthereum-transforming-git-into-a-working-blockchain-538df6617ac6)

น้องจูน [Chonnipa Kittisiriprasert](https://www.facebook.com/pnagi.chk) เป็นอีกกำลังหลักของโปรเจกต์นี้เลย น้องจูนช่วยเขียนส่วนนึงที่สำคัญที่สุดของโปรเจกต์นี้ คือระบบการ Process transaction ต่างๆ เพื่อคำนวน State ของ Blockchain และนำมา Mine เป็น block… และใน 3 ชั่วโมงสุดท้าย เขียนระบบที่ทำให้สามารถรัน Smart contract ได้ด้วย… ผม Impress มากๆ ไม่คิดว่ามา Hackathon ครั้งแรกและไม่เคยเล่น Blockchain มาก่อนจะเขียนได้ขนาดนี้

นอกจากนี้ขอบคุณพี่ [Banyat Boonkaew](https://www.facebook.com/banyatb) และพี่ [Praphon Tantisajjatham](https://www.facebook.com/tum.tan.9) ที่ช่วยซัพพอร์ต ให้ความช่วยเหลือ และอำนวยความสะดวกในหลายๆ เรื่อง ช่วยทำให้ทีมเรา Hack กันได้อย่างราบลื่นขึ้น

ส่วนผมเคยเล่นกับระบบ Git มาเยอะ และมีความรู้ลึกๆ ในบางส่วนของ Git อยู่พอสมควร เลยช่วยเอา Concept ของ Git มา Map เข้ากับคอนเซปต์ของ Blockchain ให้ Simple ที่สุด ช่วยหาวิธีทำให้ทีมไปในทิศทางเดียวกัน และช่วยเขียน Script เพื่อตรวจสอบความถูกต้องของ Chain แต่เทียบกับงานอื่นๆ แล้ว งานนี้ผมโค้ดค่อนข้างน้อย

- 14:30 — เริ่มโปรเจกต์ จากการคุยกันก่อนว่าหน้าตาของตัว Blockchain ที่เป็น Git Repository จะหน้าตายังไง โปรยๆ ไอเดียกัน + Brainstorming… เพื่อให้ทุกคนเห็นภาพตรงกัน ตอนแรกผมเลยชวนให้มาลองสร้าง Blockchain แบบ Manual ไปก่อน (คือรันคำสั่ง Git ทีละคำสั่งจนได้ Repository หน้าตาที่ต้องการ) จากภาพลอยๆ ว่า “Blockchain บน Git” จะได้ชัดเจนเลย
- 15:30 — Genesis block
- 16:50 — Block 1
- 17:10 — First transaction
- 17:30 — Block 2

พอได้หน้าตา Block ที่ต้องการ ก็เอาหน้าตาของ Git repo มาวาดเป็น Diagram โดยละเอียด จะได้เป็น Reference ว่าในแต่ละ Commit ที่เกี่ยวข้อง มีหน้าตายังไง เปลี่ยนไฟล์อะไรบ้าง ต้องเช็คความถูกต้องตรงไหนบ้าง… เริ่มโค้ดกันจริงๆ ก็ประมาณ 1 ทุ่ม (ก็คือ คุย + Clarify + PoC ประมาณ 5 ชั่วโมง)

![](https://d33wubrfki0l68.cloudfront.net/cba1e3e38eca554801597c83de26835e443bcf40/9c70d/assets/img/untitled-86e86e4a-9b83-4089-b9c2-9f3cebab610e.5609a74f.jpg)

รู้สึกฟินมากๆ กับทีมนี้ เพราะปกติเวลาผมไป Hackathon ผมก็มักจะโค้ดคนเดียว เพราะไม่ต้องเจอเรื่อง Communication overhead แต่ดูจากความ Ambitious ของโปรเจกต์นี้แล้ว คือโค้ดคนเดียวนี่ไม่ทันแน่นอน ดีใจมากที่ Teamwork กันจนสามารถเอาของมา Demo ได้จริงๆ\* ขอบคุณมากๆ ครับบ~

(\*) ที่ Demo ได้นี่คือ Demo ว่าสามารถส่ง Transaction + Mine block + Run smart contract ได้จริง แต่มีหลายส่วนมากที่ยังไม่มี เช่น การเช็คความถูกต้องของ Chain โดยละเอียด, การแลกเปลี่ยน Public key, หรือการเชื่อมต่อระหว่าง Node แต่เตรียมคำตอบไว้แล้วว่าถ้าจะทำต้องไปท่าไหน
