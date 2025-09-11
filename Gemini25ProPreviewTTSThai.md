---
public: true
title: Gemini 2.5 Pro Text-to-Speech Thai Voice Previews
---

# Gemini 2.5 Pro TTS Thai Voice Previews

<script setup>
  const voices = [ { name: 'Zephyr', description: 'Bright', type: 'F' },
     { name: 'Puck', description: 'Upbeat', type: 'M' },
     { name: 'Charon', description: 'Informative', type: 'M' },
     { name: 'Kore', description: 'Firm', type: 'F' },
     { name: 'Fenrir', description: 'Excitable', type: 'M' },
     { name: 'Leda', description: 'Youthful', type: 'F' },
     { name: 'Orus', description: 'Firm', type: 'M' },
     { name: 'Aoede', description: 'Breezy', type: 'F' },
     { name: 'Callirrhoe', description: 'Easy-going', type: 'F' },
     { name: 'Autonoe', description: 'Bright', type: 'F' },
     { name: 'Enceladus', description: 'Breathy', type: 'M' },
     { name: 'Iapetus', description: 'Clear', type: 'M' },
     { name: 'Umbriel', description: 'Easy-going', type: 'M' },
     { name: 'Algieba', description: 'Smooth', type: 'M' },
     { name: 'Despina', description: 'Smooth', type: 'F' },
     { name: 'Erinome', description: 'Clear', type: 'F' },
     { name: 'Algenib', description: 'Gravelly', type: 'M' },
     { name: 'Rasalgethi', description: 'Informative', type: 'M' },
     { name: 'Laomedeia', description: 'Upbeat', type: 'F' },
     { name: 'Achernar', description: 'Soft', type: 'F' },
     { name: 'Alnilam', description: 'Firm', type: 'M' },
     { name: 'Schedar', description: 'Even', type: 'M' },
     { name: 'Gacrux', description: 'Mature', type: 'F' },
     { name: 'Pulcherrima', description: 'Forward', type: 'F' },
     { name: 'Achird', description: 'Friendly', type: 'M' },
     { name: 'Zubenelgenubi', description: 'Casual', type: 'M' },
     { name: 'Vindemiatrix', description: 'Gentle', type: 'F' },
     { name: 'Sadachbia', description: 'Lively', type: 'M' },
     { name: 'Sadaltager', description: 'Knowledgeable', type: 'M' },
     { name: 'Sulafat', description: 'Warm', type: 'F' } ]
  
  const files = [
    "https://im.dt.in.th/ipfs/bafybeihzaludmt2i6y4knalhpe65zx6qlex4gv5ey5d4jb2m7kkkautste/Achernar-Pro.mp3",
    "https://im.dt.in.th/ipfs/bafybeihic3stahuvjodyh54ischnyddt6cslhtjbwz57yvgffchu5qok4q/Alnilam-Pro.mp3",
    "https://im.dt.in.th/ipfs/bafybeidny2pe2pvus4evqdh6lnygww7juruav3sdt26psyo7hzgyuzutwi/Algieba-Pro.mp3",
    "https://im.dt.in.th/ipfs/bafybeiawyjbyzm3o3mr4msoqxibs6r5gyimogrcihysagb2zod7fjkzdy4/Algenib-Pro.mp3",
    "https://im.dt.in.th/ipfs/bafybeid6qbyuqh5pw4mu5cv6mzuodgpzry7ilewkas4p7bdkp56c4gvg2m/Achird-Pro.mp3",
    "https://im.dt.in.th/ipfs/bafybeihuu3ea4z3i55lc2h3rpkqik3ejh742itqr36bsfujgngroz3rnge/Autonoe-Pro.mp3",
    "https://im.dt.in.th/ipfs/bafybeifzbnmagg4qeg2usbgtcg5rxpd4c2gd4lztsufganovpspllaiuha/Aoede-Pro.mp3",
    "https://im.dt.in.th/ipfs/bafybeig33ketn3c742vw6ljofptq2epecxzxky7wh33xjpyrs5a3ek5q4q/Callirrhoe-Pro.mp3",
    "https://im.dt.in.th/ipfs/bafybeifkmrh4yckxom5j7awkzbhglgzkooa67g37s3fctnjfeuh6xb5rgu/Despina-Pro.mp3",
    "https://im.dt.in.th/ipfs/bafybeicndvcnqlxqxw5bhygpt4mq6hw7tyoyplnowzjvrqpcyv2o43krc4/Charon-Pro.mp3",
    "https://im.dt.in.th/ipfs/bafybeicpsz6uk33afqawbzynpnk6v3exylnwglh3xmxmlmd4x2eglcytq4/Enceladus-Pro.mp3",
    "https://im.dt.in.th/ipfs/bafybeif75yi7dm6coyome5pe24h2pkw7zmmdlkc7eaciz4fjehhmq753dy/Erinome-Pro.mp3",
    "https://im.dt.in.th/ipfs/bafybeibmwmiahcippsureis4t3rhiaxmt7efdfrpluqko7saqxg5if7wem/Gacrux-Pro.mp3",
    "https://im.dt.in.th/ipfs/bafybeiaqvrbpixf66hnlzqgecsyjxldg6mpuledtcjp3dacrmvm4koja2a/Fenrir-Pro.mp3",
    "https://im.dt.in.th/ipfs/bafybeielt4rcwomcqppjvhdgm5tzzf6ft6nqp6ok7olqzfocgdilvuhxpm/Iapetus-Pro.mp3",
    "https://im.dt.in.th/ipfs/bafybeihcre67s2zbbprcf2kb5caydnzy3fatvu5pvzjneaxnrpsqpbm6hq/Kore-Pro.mp3",
    "https://im.dt.in.th/ipfs/bafybeianikaf7zmijti5rtsjyjz624evol37erv46irol6q5tqeg2kjbsi/Leda-Pro.mp3",
    "https://im.dt.in.th/ipfs/bafybeihkddhmwlh5uzs7rnh76ervbqz4ahwaq24y6xrc7p2r3mvyxcqcpq/Laomedeia-Pro.mp3",
    "https://im.dt.in.th/ipfs/bafybeicfbcr2k6to67u2sn4i3iveo47n2ltwc7xu4yphvvrc7jlyi65onq/Puck-Pro.mp3",
    "https://im.dt.in.th/ipfs/bafybeici2hbitu4emcan4wnfy6y6urxqmc3gnvgg74vj3iuejuuwgn62iu/Orus-Pro.mp3",
    "https://im.dt.in.th/ipfs/bafybeigwnmyxk6k76h3fcylnjv6hid5uq7ytk4kq3ithgm3dabq3nibj3a/Pulcherrima-Pro.mp3",
    "https://im.dt.in.th/ipfs/bafybeihq7axmmpqkkoec2e2e4y4yg3byxtsdiy6wv3td3nlpnuppf7jas4/Rasalgethi-Pro.mp3",
    "https://im.dt.in.th/ipfs/bafybeiews3kopwchpurzt6zpzsxxe4cslpjwn5f2ohgbexqnuo465cqjgm/Sadachbia-Pro.mp3",
    'https://im.dt.in.th/ipfs/bafybeibld3vq2myf6hlj6xy7zk3lfxpls2yvdfaaw5mcylyudibdrejvx4/Sadaltager-Pro.mp3',
    "https://im.dt.in.th/ipfs/bafybeielvtiqa74zh6frcw6fbxj4psi6wrx355pezlyejth4jasbbf2wlm/Sulafat-Pro.mp3",
    "https://im.dt.in.th/ipfs/bafybeibywcvg6lxvl5gql343l4nksny7hsbsts4kbkdd7oyestetnqetkm/Schedar-Pro.mp3",
    "https://im.dt.in.th/ipfs/bafybeihdjtqybast2p6isdhvi2dod54ec5m643llq7klctysehemxw3pna/Umbriel-Pro.mp3",
    "https://im.dt.in.th/ipfs/bafybeid3zdlttcg7luo3sqob2ceom6z46rznokt72ndcollqjwkkbtdr4e/Vindemiatrix-Pro.mp3",
    "https://im.dt.in.th/ipfs/bafybeicyqcil2itkkorvxjsi324vxjerulobipzefinl3syvra722cvmfq/Zubenelgenubi-Pro.mp3",
    "https://im.dt.in.th/ipfs/bafybeiebsipqwmvbpmrb5irr7tmerq3deo3nvvij5e4yesgdlynelksfp4/Zephyr-Pro.mp3"
  ]

  for (const voice of voices) {
    const preview = files.find(file => file.includes(voice.name))
    if (preview) {
      voice.preview = preview
    }
  }

  voices.sort((a, b) => {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0
  })

  const singingVoices = [
    {
      name: 'Achernar',
      description: 'Soft',
      type: 'F',
      preview: 'https://im.dt.in.th/ipfs/bafybeigaslyfpi6uzgi6zptmpwxrmbupergs5rqwkle7rb46ov5r45p2e4/Achernar-Flash-Singing.mp3',
    },
    {
      name: 'Charon',
      description: 'Informative',
      type: 'M',
      preview: 'https://im.dt.in.th/ipfs/bafybeigg6ycubrd6jr453sfuhn5bpxa5bsifzz2zbbevboqk76m6cjrxie/Charon-Flash-Singing.mp3',
    }
  ]
</script>

:::lead
In **May 20, 2025**, [Google announced native audio output capabilities](https://blog.google/technology/google-deepmind/google-gemini-updates-io-2025/#new-capabilities) and [text-to-speech API](https://ai.google.dev/gemini-api/docs/speech-generation) for Gemini 2.5 models.
:::

It can generate high-quality audio in Thai language, and comes with {{ voices.length }} different voices. [The Gemini 2.5 Flash model also has the variant also has the ability to sing.](#singing)

<table>
  <thead>
    <tr>
      <th>Voice</th>
      <th>Description</th>
      <th>Preview</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="voice in voices" :key="voice.name">
      <td class="align-middle"><strong :class="voice.type === 'M' ? 'text-blue-300' : 'text-pink-300'">{{ voice.name }}</strong></td>
      <td class="align-middle">{{ voice.description }}</td>
      <td class="align-middle">
        <audio controls :src="voice.preview" preload="auto" v-if="voice.preview">
          <p>Your browser does not support the audio element.</p>
        </audio>
      </td>
    </tr>
  </tbody>
</table>

<!-- text-blue-300 text-pink-300 -->

## Prompt

This is the prompt sent to the model:

```
เป็นมนุษย์สุดประเสริฐเลิศคุณค่า		กว่าบรรดาฝูงสัตว์เดรัจฉาน
จงฝ่าฟันพัฒนาวิชาการ		อย่าล้างผลาญฤๅเข่นฆ่าบีฑาใคร
ไม่ถือโทษโกรธแช่งซัดฮึดฮัดด่า		หัดอภัยเหมือนกีฬาอัชฌาสัย
ปฏิบัติประพฤติกฎกำหนดใจ		พูดจาให้จ๊ะ ๆ จ๋า น่าฟังเอยฯ
```

It is a Thai pangram ([source](https://th.wikipedia.org/wiki/%E0%B9%81%E0%B8%9E%E0%B8%99%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1#%E0%B8%A0%E0%B8%B2%E0%B8%A9%E0%B8%B2%E0%B9%84%E0%B8%97%E0%B8%A2))

## My observations

- Generated audio is mono with 24kHz sample rate.
- Due to it being a language model, there is still a risk of hallucination.
  - The examples above are generated with **Temperature** set to 1 (default). With this setting, some words are read incorrectly. For example, in Pulcherrima’s output, "จงฝ่าฟันพัฒนาวิชาการ" is sometimes read as "<em>อย่า</em>ฝ่าฟันพัฒนาวิชาการ" which reversed the meaning.
  - I tried setting the **Temperature** to 0, and sometimes this threw the model into an infinite loop, never finishing the generation.

## Singing

I tried this prompt:

```
sing the following lyrics expressively as if in an opera

<lyrics>
เป็นมนุษย์สุดประเสริฐเลิศคุณค่า		กว่าบรรดาฝูงสัตว์เดรัจฉาน
จงฝ่าฟันพัฒนาวิชาการ		อย่าล้างผลาญฤๅเข่นฆ่าบีฑาใคร
ไม่ถือโทษโกรธแช่งซัดฮึดฮัดด่า		หัดอภัยเหมือนกีฬาอัชฌาสัย
ปฏิบัติประพฤติกฎกำหนดใจ		พูดจาให้จ๊ะ ๆ จ๋า น่าฟังเอยฯ
</lyrics>
```

Gemini 2.5 Pro refuses to sing and just reads the poem normally, but Gemini 2.5 Flash can sing (albeit not very well)…

<table>
  <thead>
    <tr>
      <th>Voice</th>
      <th>Preview</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="voice in singingVoices" :key="voice.name">
      <td class="align-middle"><strong :class="voice.type === 'M' ? 'text-blue-300' : 'text-pink-300'">{{ voice.name }}</strong></td>
      <td class="align-middle">{{ voice.description }}</td>
      <td class="align-middle">
        <audio controls :src="voice.preview" preload="auto" v-if="voice.preview">
          <p>Your browser does not support the audio element.</p>
        </audio>
      </td>
    </tr> 
  </tbody>
