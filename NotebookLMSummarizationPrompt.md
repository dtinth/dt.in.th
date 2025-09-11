---
title: My NotebookLM Summarization Prompt
public: true
facebook: https://www.facebook.com/dtinth/posts/pfbid0mQD6vY8K92xFt1VZr2MZT3vLiRRK8TkFULTTKUZkuqHACSHw5GoSVudfc7De5QpKl
---

# My NotebookLM Summarization Prompt

:::lead
Lately, I’ve been using this prompt in NotebookLM a lot, so I’m sharing it in case anyone wants to copy and use it:
:::

<div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="pr-6">

:::tip[English]
Please summarize the key points in a numbered list. I'd like around 50-100 points. Make it easy to read so that someone without prior knowledge of this subject can understand. For some of the abstract concepts, please provide examples to help the reader visualize them more clearly. Please make it fun to read and also divide it into sections. Respond in English.
:::

</div><div class="pl-6">

:::tip[Thai]
ช่วยสรุปประเด็นสำคัญต่างๆ เป็นข้อๆ ให้หน่อย ขอสัก 50-100 ข้อ (เขียนตัวเลขกำกับแต่ละข้อด้วย) ขอแบบอ่านง่ายๆ ให้คนที่ไม่ได้มีความรู้เรื่องพวกนี้มาก่อนสามารถเข้าใจได้ ช่วยยกตัวอย่างสำหรับบางประเด็นที่เป็นนามธรรม เพื่อให้คนอ่านสามารถเห็นภาพได้ชัดเจนมากขึ้นด้วย ขอแบบอ่านสนุกๆ และช่วยแบ่งเป็น section ให้ด้วย
:::

</div></div>

Originally, I would use NotebookLM’s default summariation buttons, but I wasn’t very happy with the results. So, I gradually refined the prompt until I got something that I’m happy with. This prompt has been through a lot of prompt engineering:

<!-- prettier-ignore -->
| Text | Description |
| --- | --- |
| <q>in a … list</q> | Without it, sometimes the summaries are a wall of long paragraphs. |
| <q>around 50-100 points</q> | Without it, nuance may be lost if the summary is too short. |
| <q>numbered</q> | Without it, you might get bullet points instead. Having numbers is helpful when you have a question about a specific point, as it can be easily referenced when asking follow-up questions. |
| <q>without prior knowledge</q> | Helpful for reading articles on topics I'm not familiar with. |
| <q>examples…visualize</q> | Some concepts are just difficult to understand without examples. Without it, NotebookLM sometimes cut out examples when summarizing, making it hard to get a clear picture. |
| <q>make it fun to read</q> | Without it, summaries can be dull. |
| <q>divide it into sections</q> | Without it, it might just list points 1-100 without any divisions, making it difficult to read. |
