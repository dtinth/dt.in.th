---
title: ข้อความภาษาไทยใน Discord ยาวเท่าไหร่ วรรณยุกต์ถึงไม่หาย
public: true
---

# ข้อความภาษาไทยใน [Discord](Discord) ยาวเท่าไหร่ วรรณยุกต์ถึงไม่หาย

**Update (2023-06-16):** \
Discord ได้ทำการแก้ไขปัญหานี้แล้ว โดยทุกๆ 47 ตัวอักษร จะมีสระบน/ล่างหรือวรรณยุกต์ได้สูงสุด 20 ตัว

<details><summary>เวอร์ชั่นก่อนหน้า</summary>

:::lead
แอปพลิเคชัน [Discord](Discord) มีการจำกัดจำนวนวรรณยุกต์ และสระที่ตำแหน่งบน–ล่างของพยัญชนะที่สามารถใส่ในข้อความข้อความเดียวไว้อยู่ที่ **149 ตัว**
:::

[^mn]: จัดอยู่ในหมวดหมู่ที่เรียกว่า Nonspacing mark

ลองใส่ข้อความในช่องข้างล่างเพื่อคำนวณว่าวรรณยุกต์จะหายไหม:

<textarea :style="`border:2px solid ${color}`" v-model="text"></textarea>

<span :style="'font-size:2em;color:'+color">{{count}} / 149</span>

---

อ่านรายละเอียดเพิ่มเติม: [“Disappearing combining marks in Discord (ปัญหาสระกับวรรณยุกต์หาย)”](DiscordThaiCombiningMarks)

</details>

<script>
export default {
  setup() {
    const text = Vue.ref('สวัสดี')
    const count = Vue.computed(() => text.value.replace(/[^\p{Mn}]/gu, '').length)
    const color = Vue.computed(() => count.value <= 149 ? '#4ade80' : '#f87171')
    return { text, count, color }
  }
}
</script>
