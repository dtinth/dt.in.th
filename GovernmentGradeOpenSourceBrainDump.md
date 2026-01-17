---
public: true
title: Braindump เรื่อง open source ที่มีการใช้งานจริงในภาครัฐ
facebook: https://www.facebook.com/dtinth/posts/pfbid0PwfMoNf3UQ2LSzRNUzHCe5Wi4WQ4hMdzbmT3sn9gctEvQUub4sQdpAxRAPbLujVdl
created: 2026-01-13
---

ช่วงหลังๆ เริ่มเบื่อเครื่องมือ open-source ที่พยายามหาเงินจนออกมาเป็นท่าแปลกๆ[^oss] หรือที่ทำไปได้สักพักก็กลายเป็น abandonware (ยิ่งยุคเอไอยิ่งเกลื่อน)… เลยเริ่มมาสนใจพวก open-source ที่เป็น government-grade — คือมีการใช้งานจริงในภาครัฐ (ไม่ว่าจะพัฒนาเองโดยภาครัฐแล้วเปิดเป็น open-source, หรือเป็นเครื่องมือที่มีอยู่แล้ว โดยมีภาครัฐมาร่วมพัฒนาด้วย)

ตัวอย่างนึงคือ [“Grist”](Grist) ที่เป็นลูกผสมระหว่าง database กับ spreadsheet (ฟีลคล้ายๆ [Airtable](https://www.airtable.com/) หรือ [NocoDB](https://nocodb.com/)) — ช่วงหลังๆ ถ้าใครเคยคุยกับผมหรือ[ตามดูใน YouTube](https://www.youtube.com/watch?v=6jlH0t67IFs) จะเห็นว่าผมเชียร์เจ้า Grist นี่มาก… เพราะรู้สึกว่าเป็นเครื่องมือ open-source ที่รู้สึกว่าทำมาเนี้ยบมากๆ

- ที่เห็นได้ชัดคือพวก [keyboard shortcut](https://support.getgrist.com/keyboard-shortcuts/) ครบมาก ใช้คล่องมือสุดๆ เมื่อเทียบกับแอปอื่นๆ
- โดย [Grist Core](https://github.com/gristlabs/grist-core) ตัวฟรีที่เอามา [self-host](https://support.getgrist.com/self-managed/) เองได้ แทบไม่กั๊กฟีเจอร์เลย: [custom widget](https://support.getgrist.com/widget-custom/), [granular permissions](https://support.getgrist.com/access-rules/) ใช้ได้หมด
- ส่วนบริการที่เป็น [hosted SaaS](https://www.getgrist.com/pricing/) แพลนฟรีก็ให้เยอะมาก

…จนงงว่า business model ของ [Grist Labs](https://www.getgrist.com/about/) (สตาร์ทอัพจากสหรัฐฯ ที่เป็นผู้พัฒนาหลัก) มันอยู่รอดได้ยังไง

## Grist Labs กับหน่วยงานรัฐฝรั่งเศส

…เลยทำให้มารู้จักกับ [LaSuite Numérique](https://lasuite.numerique.gouv.fr/en) ซึ่งเป็น “ชุดเครื่องมือดิจิทัลสำหรับเจ้าหน้าที่ภาครัฐ” ก็คือเป็น collaboration suite ที่พัฒนาโดย DINUM (หน่วยงานรัฐของฝรั่งเศส เหมือนเป็นสำนักงานดิจิทัลระหว่างกระทรวง) รองรับการจัดการเอกสาร ข้อมูล การแชท วีดีโอคอล ส่งไฟล์ ฯลฯ โดยออกแบบให้เจ้าหน้าที่ภาครัฐใช้โดยเฉพาะ ทุกระบบอินทิเกรดกับระบบ Single Sign-On [ProConnect](https://partenaires.proconnect.gouv.fr/) ของรัฐบาล ไม่ต้องเก็บ user/pass แยกระบบ

(ที่รู้จักก็เพราะ Grist เคยจัดงาน [Grist Summit 2024](https://lasuite.numerique.gouv.fr/grist-paris-summit-2024) ซึ่งทีแรกก็ดูเหมือนเป็นงาน conference ทั่วไป… แต่เว็บไซต์ของงานนี้ อยู่บนโดเมน .gouv.fr — คืออยู่บนเว็บไซต์ของรัฐบาลฝรั่งเศส — โดยหน่วยงาน [DINUM](https://www.numerique.gouv.fr/dinum/) และ [ANCT](https://agence-cohesion-territoires.gouv.fr/) ของฝรั่งเศสเป็นเจ้าภาพจัด 😮)

![A collection of nine distinct logos arranged in a honeycomb pattern. Each logo is contained within a hexagonal frame and utilizes a combination of red, blue, and white shapes, including stylized letters, arrows, and human figures.](https://im.dt.in.th/ipfs/bafybeignobqzzvy6cdfo7xvjy754teq4no6zrkdmavajh55mfe2clddlje/image.webp)

ค่อนข้างว้าวมากกับ partnership นี้ระหว่างหน่วยงานรัฐกับบริษัทที่พัฒนา open source เลยลองหาข้อมูลเพิ่มเติมดู… พบว่า DINUM และ ANCT ไม่ได้แค่เอา Grist มาใช้ แต่ร่วมพัฒนาด้วย โดยรัฐบาลฝรั่งเศสจ้าง dev 4 คน กับ designer เพื่อมาร่วมพัฒนา grist-core และมีการ “Roadmap sponsor” บางฟีเจอร์ เพื่อให้ Grist อยู่ในจุดที่หน่วยงานรัฐเอาไปใช้ได้ด้วย

ฟีเจอร์ที่รัฐบาลฝรั่งเศส contribute ไปก็เช่น:

- [ทำระบบ localization](https://www.getgrist.com/blog/how-anct-and-the-open-source-community-helped-translate-grist-into-20-languages/) ให้แอปสามารถแปลภาษาอื่นได้ (เพื่อให้ UI เป็นภาษาฝรั่งเศสได้)
- [ทำให้แอปซัพพอร์ต auth แบบ OpenID Connect](https://github.com/gristlabs/grist-core/issues/707) (เพื่อให้เจ้าหน้าที่รัฐ SSO ผ่าน [ProConnect](https://partenaires.proconnect.gouv.fr/) ได้)
- ทำพวก [keyboard](https://github.com/gristlabs/grist-core/pull/1440) [shortcut](https://github.com/gristlabs/grist-core/pull/1667) และปรับปรุงเรื่อง [accessibility](https://github.com/gristlabs/grist-core/pull/1734) (หน่วยงานรัฐมี requirement เรื่อง accessibility ที่ strict กว่า)
- แก้ปัญหาไฟล์ข้อมูลบวม โดยทำระบบให้[เก็บพวกไฟล์ attachment เช่นรูปภาพ แยกไปไว้ที่ object storage](https://community.getgrist.com/t/february-2025-newsletter-external-attachments-spreadsheet-makeovers-and-new-community-widgets/8682) (เช่น S3) แทนที่จะเก็บไว้ในไฟล์หลัก ทำให้ระบบ scalable มากขึ้น

คือพัฒนาให้ตัวเองใช้ แต่ได้ประโยชน์กันถ้วนหน้า

โดยใน webinar [“Integrating an open-source solution into a national digital strategy”](https://www.youtube.com/watch?v=FdA0b-EnQUE) ทีม DINUM มาเล่าว่าใช้ Grist ทำอะไรบ้าง:

- ใช้จัดการข้อมูลโครงการปรับปรุงเมืองกว่า 300 แห่ง (Action Cœur de Ville) โดย 500 คนมารุมในไฟล์เดียวที่มีข้อมูลกว่า 12,000 แถว แต่ไม่เละ เพราะ Grist มีระบบ granular permissions เขาบอกว่า Grist ช่วยแก้ปัญหาการส่งไฟล์ Excel ต่อกันเป็นทอดๆ ที่เขาเรียกว่า “Pyramid of Despair”
- ใช้เป็น backend สำหรับเว็บไซต์ โดยเก็บตัวชี้วัดต่างๆ ใน Grist แล้วนำไปแสดงผลบนหน้าเว็บไซต์สาธารณะ
- ใช้ทำระบบจัดการข้อมูลภายในหน่วยงานท้องถิ่น (เช่น กุญแจอาคารโรงเรียน, วันหยุดของเจ้าหน้าที่รัฐ, ฯลฯ) พอเครื่องมือยืดหยุ่นพอก็ไม่ต้องลงทุนพัฒนาระบบเฉพาะสำหรับแต่ละอย่าง
- ใช้สร้างเทมเพลต เพื่อให้หน่วยงานท้องถิ่น โดยเฉพาะเมืองขนาดเล็ก สามารถกรอกข้อมูลและเผยแพร่ข้อมูลเปิดได้ถูกต้องตามมาตรฐานระดับชาติ

![A flowchart illustrating the data collection and processing workflow within a government organization. The diagram starts with "Cabinet, Prefect, Director of program, Journalist" and branches into "requests of data" flowing through "Agents of devolved services" and "Agents of territorial collectives."  These branches further lead to various data sources and processing stages like "data analysts," "catalog of datasets," and "visualization."  The diagram visually represents the flow of data from initial requests to final output.](https://im.dt.in.th/ipfs/bafybeic6ar5q4u3t76kibrgsyu6ymrn6x25u4yojz7ld44ij7puagteqle/image.webp)

## เครื่องมืออื่นๆ ใน LaSuite Numérique

นอกจากนี้ LaSuite Numérique มีเครื่องมือต่างๆ ที่เขาเรียกว่าเป็น Digital commons ด้วย:

- [Tchap](https://github.com/tchapgouv): ระบบแชท (ต่อยอดจาก Matrix+Element ทดแทนไลน์มั้ง)
- [Docs](https://github.com/suitenumerique/docs): แพลตฟอร์มสำหรับจดโน้ต (ทดแทน Notion, พัฒนาร่วมกับรัฐบาลเยอรมันด้วย)
- [Visio](https://github.com/suitenumerique/meet): ประชุมออนไลน์ (ต่อยอดจาก LiveKit ทดแทน Teams, Zoom, Meet)
- [Grist](https://lasuite.numerique.gouv.fr/en/produits/grist): แพลตฟอร์มจัดการข้อมูลที่เล่าไปก่อนหน้า
- [Fichiers](https://github.com/suitenumerique/drive): สำหรับเก็บไฟล์ (ทดแทน Drive)
- [France Transfert](https://github.com/numerique-gouv/francetransfert): สำหรับส่งไฟล์ขนาดใหญ่ผ่านอีเมล

:::figure[LaSuite Numérique's website]{.framed}
![](https://im.dt.in.th/ipfs/bafybeiflnnv2gufh6kv2srd2tbzxgfcmi67c5atoeuvwmjrsfbaehl4gai/image.webp)
:::

มีตัวอื่นๆ อีก ทั้งหมดมีโค้ดอยู่บน GitHub และหลายๆ ตัว คนทั่วไปรวมถึงหน่วยงานอื่นๆ สามารถเอาไป self-host ได้ด้วย (เช่น Docs ซึ่งผมก็เอามาลอง self-host อยู่เหมือนกัน)

## Open Government Products ของสิงคโปร์

รัฐบาลอีกประเทศนึงที่ผมติดตามโปรเจค open-source คือสิงคโปร์ ที่ทำ [Open Government Products](https://www.open.gov.sg/) (OGP)

(ที่รู้จักเพราะไปงาน CityJS Singapore แล้วมีคนจาก OGP มาแชร์ในงาน ว่า[พัฒนาระบบ FormSG ให้ปลอดภัย สามารถปกป้องข้อมูลของประชาชนด้วย end-to-end encryption แล้วเจอความท้าทายอะไรบ้าง](https://www.youtube.com/watch?v=lux2TKrX-HA) — ที่ประทับใจเพราะเวลาไปงาน dev meetup หรือ conference ต่างๆ ส่วนมากมีแต่หน่วยงานเอกชนมาแชร์ แต่งานนี้มีหน่วยงานรัฐมาแชร์ในระดับ technical ลึกจัดๆ ด้วย)

ระบบ [FormSG](https://form.gov.sg/) นี่น่าสนใจมาก เพราะทำให้เจ้าหน้าที่รัฐสามารถสร้างแบบฟอร์มให้ประชาชนกรอกได้ด้วยตัวเอง ไม่ต้องไปจ้างใครทำระบบเพิ่ม โดยมีการ integrate กับระบบ Digital ID เพื่อยืนยันตัวตนคนกรอกฟอร์ม และ pre-fill ข้อมูลในฟอร์มได้ด้วย (ยืนยันได้ทั้งบุคคลธรรมดาและนิติบุคคล)

มี [Isomer](https://www.isomer.gov.sg/) ที่เป็น static site generator ที่ช่วยให้หน่วยงานรัฐขึ้นเว็บไซต์ได้ง่ายๆ (เคลมว่าใช้เวลาแค่ 1.5–2 วัน) โดยเว็บที่ได้จะรองรับคนเป็นล้านเข้าพร้อมๆ กันได้ และ comply กับมาตรฐานต่างๆ ที่เว็บไซต์หน่วยงานควรจะมีตั้งแต่แรกเลย

ที่เช็คล่าสุด ตอนนี้ OGP มีเว็บ [Report Cards](https://reports.open.gov.sg/products) ด้วย ที่คอยอัปเดตข้อมูล Key Metrics ต่างๆ ในแต่ละไตรมาส แต่ละบริการ ทีมพัฒนามีกี่คน ใช้งบประมาณเท่าไหร่ (มี breakdown ให้ดูด้วยว่าใช้ไปกับเรื่องอะไรบ้าง) จำนวนผู้ใช้ ปริมาณการใช้งานรูปแบบต่างๆ รวมถึงความพึงพอใจของผู้ใช้ เปิดให้ดูแบบ public เลย

:::figure[[Report card](https://reports.open.gov.sg/isomer/metrics) for the [Isomer](https://www.isomer.gov.sg/) project]{.framed}
![A profile page displays information about Isomer, a government website builder. The profile shows key metrics including team members, cost per quarter ($893,942), and a breakdown of expenses by infrastructure ($483,363), salary ($116,453), corporate overhead ($232,631), equipment/software & office ($54,965), and others ($6,530). The page also indicates that Isomer was built for public officials, citizens, and is active since 2018.](https://im.dt.in.th/ipfs/bafybeigwlw2xdgeb3lageeuu2npdg5g25mlrnpqrxva2pji7hng2oklham/image.webp)
:::

รอดูว่าปีนี้จะมีงาน STACK อีกไหม เป็น Tech conference ที่จัดโดย GovTech ถ้ามีโอกาสก็อยากลองไปชมดู

## Link shortener

บางทีระบบเล็กๆ ไม่ต้องอลังการ แต่ก็มีประโยชน์มหาศาล…

อย่างเช่น บางคนอาจจะเคยเห็นเอกสารกระดาษที่มี URL ยาวสองบรรทัดอยู่ในนั้น ไม่แน่ใจว่าเขียนไว้ให้ใครพิมพ์ตาม

แต่รัฐบาลสิงคโปร์มีระบบ [GoGovSG](https://go.gov.sg/#/) ที่เป็น link shortener ที่ public officer สามารถสร้างลิงค์สั้นๆ ได้ โดยมีการสื่อสารให้ประชาชนระวังลิงค์ปลอมเสมอว่าให้ตรวจสอบว่า URL ต้องขึ้นต้นด้วย go.gov.sg

จริงๆ เหมือนในไทยจะมี Link shortener สำหรับหน่วยงานภาครัฐอยู่แล้วด้วย คือเว็บ [dg.th](https://dg.th/) พัฒนาโดย DGA ระบบมีมาตั้งแต่ปี 2023 …แต่ถ้าไม่มองหาก็ไม่รู้เลยว่ามีอยู่ เพราะสองปีที่ผ่านมาไม่เคยเห็นลิงค์จากโดเมนนี้ผ่านตาเลย รอเชียร์ต่อไปว่า Digital commons ในไทยจะพัฒนาไปในทิศทางไหนต่อฮะ~

[^oss]: re. ท่าแปลกๆ ในโลก open-source ที่เคยเจอก็มี…

    - “open source low-code platform” เจ้านึง ตัว core เป็น open source แต่ตัวมันเองแทบทำอะไรที่เป็นประโยชน์ไม่ได้เลยถ้าไม่ลง commercial plugin (แบบแค่จะให้ยิง HTTP request ก็ต้องซื้อปลั๊กอินมาลง กั๊กฟีเจอร์เกิน ผมเห็นแล้ว docker compose down ทันทีเพราะรู้สึกเสียดายเวลามาก และลืมชื่อไปแล้ว)
    - ไม่แน่ใจใครเคยตามดราม่า Cypress ไหม คือเหมือน test framework มันใช้ฟรี แต่ถ้าอยากรันหลายๆ เทสพร้อมๆ กันแบบ dynamic queue ต้องจ่ายตังใช้ระบบ dashboard แต่ชาว open source ก็มองว่าแค่ dashboard ทำเองไม่เห็นยากเลย ซึ่ง Cypress ก็ตอบโต้โดยการ encrypt test result ให้ dashboard ของตัวเองอ่านได้อยู่เจ้าเดียว รวมถึงไม่ยอม run test ด้วย ถ้าเกิดตรวจเจอ dependency ของคู่แข่งอยู่ในโปรเจค
    - Minio ตัดสินใจเลิก publish Docker image สำหรับ community edition (จะใช้ต้องเอามา compile เอง) หลังจากนั้นไม่นานก็มี CVE-2025-62506 (คะแนน 8.1 High) ออกมา แต่ก็ทิ้ง Docker image ไว้อย่างงั้น
    - Elasticsearch SDK มีการเช็คเซิร์ฟเวอร์ปลายทางด้วย ถ้าใช้ fork แบบ Opensearch มันบล็อกเลย ทั้งๆ ที่ API มันก็ compatible กัน
    - พวก Web App หลายๆ ระบบ ทำได้แค่ username/password auth แล้วถ้าจะเชื่อม OAuth ต้องซื้อ enterprise plan (ทั้งๆ ที่ในทางเทคนิค implement OAuth อย่างเดียวไปเลยง่ายกว่า จะได้ไม่ต้องเก็บ user credentials ไว้ในฐานข้อมูล ปล่อยให้เป็นหน้าที่ของระบบ IdP ภายนอกแทน)
    - ตอนนี้มีเป็นคำที่เรียกซอฟต์แวร์ open-source ที่พยายามหาเงินด้วย business model ต่างๆ ว่า “Commercial Open Source Applications” ซึ่งความเห็นส่วนตัวคือผมค่อนข้าง prefer ที่จะใช้ซอฟต์แวร์ที่เป็น GPL/AGPL มากกว่าซอฟต์แวร์ที่เป็น MIT แต่กั๊กฟีเจอร์จนเกินไป
