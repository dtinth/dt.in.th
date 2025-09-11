---
public: true
facebook: https://www.facebook.com/dtinth/posts/10214487960946978
title: การเลือกใช้ระหว่าง React กับ Vue (May 2020)
aliases:
  - 20200502T090200Z0000
created: 2020-05-02
---

ช่วงหลังๆ Project หลายๆ ตัวที่ผ่านมา ขึ้นด้วย [Vue.js](Vue) เกือบหมดเลย

…จนมีคนเริ่มมาถามว่า เดี๋ยวนี้ใช้ Vue แทนแล้วหรอ? ไม่ใช้ [React](React) แล้วหรอ? คิดว่า Vue ดีกว่า React ละหรอ?
…คือที่เลือกใช้ Vue ส่วนมาก เพราะพบว่าสำหรับโปรเจคเล็กๆ มันสามารถขึ้นของได้เร็วกว่า React มาก บางทีก็อยากขึ้นโปรเจคแบบด่วนๆ โดยไม่ต้องใช้ build tool ไม่อยากเสียเวลาและพื้นที่ดิสก์มา yarn install (แบบ create-react-app) ซึ่งถ้าใช้ Vue ก็ `<script src>` เอาจาก CDN ได้เลย ก็คือ .html ไฟล์เดียวจบ

…แต่สำหรับโปรเจคใหญ่ๆ ที่ต้องดูแลระยะยาว ก็ยังมีฟีเจอร์นึง ที่เวลาใช้ React ทำได้ แต่เวลาใช้ Vue ทำไม่ได้

…ซึ่งนั่นก็คือการ Rename ชื่อ prop ใน VS Code (หรือ editor อื่นๆ ที่ใช้ Language Server Protocol ซึ่งเป็นมาตรฐานเปิด) แล้วให้มันไปตามแก้ไฟล์อื่นๆ ที่เรียกใช้ component นั้นทั้งหมดด้วย (ดูตัวอย่าง React ได้ในวีดีโอ)

…สำหรับผมถือว่าเป็นอะไรที่สำคัญมาก โดยเฉพาะกับโค้ดเบสขนาดใหญ่ๆ บางทีถ้าเป็นชื่อ prop ที่ common มากๆ เช่น name หรือ id หรือ title เนี่ย find-and-replace ก็ไม่ได้ จะแก้ด้วยมือก็คงเหนื่อยและตาลาย

…[ผ่านมาสองปีกว่าๆ แล้ว ก็ยังทำไม่ได้ถ้าใช้ Vue กับ Vetur extension](https://github.com/vuejs/vetur/issues/610) (แต่ถ้าต้องทำ Large scale refactoring จริงๆ มันก็มีทางออกอยู่ คือสลับไปใช้ WebStorm)

…ฉะนั้นสำหรับผมแล้ว ก็เลยไม่ได้คิดว่าตัวไหนดีกว่าตัวไหน สุดท้ายแต่ละโปรเจคก็ต้องเลือกเครื่องมือให้ตอบโจทย์

…เดี๋ยวนี้ใครมาถามว่า “ใช้ React เป็น หรือใช้ Vue เป็นดีกว่ากัน” ก็จะตอบไปว่า “ใช้ให้เป็นหลายอย่าง ดีกว่าใช้เป็นแค่อย่างเดียว” ครับบ

<iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fdtinth%2Fvideos%2F10214487849424190%2F&show_text=false&width=560" width="560" height="314" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>

---

[Supakorn Thongtra's comment](https://www.facebook.com/dtinth/posts/10214487960946978?comment_id=10214488713325787):

> ใน react สามารถทำ `<script src>` เอาจาก CDN แล้วก็ใช้ก็ babel `<script type="text/babel">` ให้ browser อ่าน JSX ได้เหมือนกันกับ vue \
> คิดว่าเรื่องที่ใช้แค่ index.html น่าจะทำได้เหมือนๆกัน \
> นอกจากเรื่องนี้ มีเรื่องอื่นๆ ที่ vue ขึ้นของได้ง่ายกว่า react อีกมั้ยครับ

เรื่อง babel-standalone นี่เคยลองเหมือนกัน แต่พบว่าจะไม่เวิร์คในกรณีที่เอา script ไว้อีกไฟล์ แล้วรันโดยไม่ใช้เซิฟเวอร์น่ะครับ (`file:///`) เพราะมันต้องใช้ `XMLHttpRequest`

ส่วนอีกเรื่องที่ Vue ขึ้นของได้ง่ายกว่า React แบบสุดๆ คือ มี reactivity system มาให้เลยน่ะครับ

ที่ประหยัดเวลาแบบสุดๆ จริง คือ `v-model` เลยครับ

นอกจากนี้ เวลาใช้พวก Tailwind ท่า `:class` ของ Vue จะช่วยเอาชื่อคลาสมาต่อให้น่ะครับ เช่น `:class="[ running ? 'bg-green-400' : 'bg-red-400', { 'opacity-50': disabled }]"` ถ้าใช้ React ต้องต่อ string เอง ไม่ก็ใช้ไลบรารี่เช่น `classnames`

เวลาทำ List Item Animation ถ้าใช้ Vue จะมี `transition-group` ที่ implement ท่า FLIP move ให้ด้วยครับ ไม่ต้องหาไลบรารี่มาลงเพิ่มเลย
