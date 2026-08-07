---
public: true
title: Qwen3.5-Omni-Flash Text-to-Speech Thai Voice Previews
created: 2026-08-07
giscus: true
---

# Qwen3.5-Omni-Flash TTS Thai Voice Previews

<script setup>
  const voices = [
    { name: 'Tina', filename: 'tina.mp3' },
    { name: 'Cindy', filename: 'cindy.mp3' },
    { name: 'Liora Mira', filename: 'liora-mira.mp3' },
    { name: 'Sunnybobi', filename: 'sunnybobi.mp3' },
    { name: 'Raymond', filename: 'raymond.mp3' },
    { name: 'Ethan', filename: 'ethan.mp3' },
    { name: 'Theo Calm', filename: 'theo-calm.mp3' },
    { name: 'Serena', filename: 'serena.mp3' },
    { name: 'Harvey', filename: 'harvey.mp3' },
    { name: 'Maia', filename: 'maia.mp3' },
    { name: 'Evan', filename: 'evan.mp3' },
    { name: 'Qiao', filename: 'qiao.mp3' },
    { name: 'Momo', filename: 'momo.mp3' },
    { name: 'Wil', filename: 'wil.mp3' },
    { name: 'Angel', filename: 'angel.mp3' },
    { name: 'Li Cassian', filename: 'li-cassian.mp3' },
    { name: 'Mia', filename: 'mia.mp3' },
    { name: 'Joyner', filename: 'joyner.mp3' },
    { name: 'Gold', filename: 'gold.mp3' },
    { name: 'Katerina', filename: 'katerina.mp3' },
    { name: 'Ryan', filename: 'ryan.mp3' },
    { name: 'Jennifer', filename: 'jennifer.mp3' },
    { name: 'Aiden', filename: 'aiden.mp3' },
    { name: 'Mione', filename: 'mione.mp3' },
    { name: 'Sunny', filename: 'sunny.mp3' },
    { name: 'Dylan', filename: 'dylan.mp3' },
    { name: 'Eric', filename: 'eric.mp3' },
    { name: 'Peter', filename: 'peter.mp3' },
    { name: 'Joseph Chen', filename: 'joseph-chen.mp3' },
    { name: 'Marcus', filename: 'marcus.mp3' },
    { name: 'Li', filename: 'li.mp3' },
    { name: 'Rocky', filename: 'rocky.mp3' },
    { name: 'Sohee', filename: 'sohee.mp3' },
    { name: 'Lenn', filename: 'lenn.mp3' },
    { name: 'Ono Anna', filename: 'ono-anna.mp3' },
    { name: 'Sonrisa', filename: 'sonrisa.mp3' },
    { name: 'Bodega', filename: 'bodega.mp3' },
    { name: 'Emilien', filename: 'emilien.mp3' },
    { name: 'Andre', filename: 'andre.mp3' },
    { name: 'Radio Gol', filename: 'radio-gol.mp3' },
    { name: 'Alek', filename: 'alek.mp3' },
    { name: 'Rizky', filename: 'rizky.mp3' },
    { name: 'Roya', filename: 'roya.mp3' },
    { name: 'Arda', filename: 'arda.mp3' },
    { name: 'Hana', filename: 'hana.mp3' },
    { name: 'Dolce', filename: 'dolce.mp3' },
    { name: 'Jakub', filename: 'jakub.mp3' },
    { name: 'Griet', filename: 'griet.mp3' },
    { name: 'Eliška', filename: 'eliska.mp3' },
    { name: 'Marina', filename: 'marina.mp3' },
    { name: 'Siiri', filename: 'siiri.mp3' },
    { name: 'Ingrid', filename: 'ingrid.mp3' },
    { name: 'Sigga', filename: 'sigga.mp3' },
    { name: 'Bea', filename: 'bea.mp3' },
    { name: 'Chloe', filename: 'chloe.mp3' },
  ]
  
  const files = [
    'https://im.dt.in.th/ipfs/bafybeifvahnasr5r67rloizulmarminejxzmxaor3cxx42lx2wfnapc5ei/aiden.mp3',
    'https://im.dt.in.th/ipfs/bafybeiean2ftyuzmoielsfzqzo2eppz7ngtbmckide5hznuvrv4muhucne/alek.mp3',
    'https://im.dt.in.th/ipfs/bafybeig4fcpdmocwgrhcdbtmjp5hfv3femsjzeyjbv7kdawumfhtaovmnq/andre.mp3',
    'https://im.dt.in.th/ipfs/bafybeifmbva6fzo2xevly2apvl4bhvjsj5qn5efzbgmqphv2qxvtzpwqzi/angel.mp3',
    'https://im.dt.in.th/ipfs/bafybeigwkue6qrznk4smjlc7tyunjceeuqxunodcuvk3dfimxcm5xewq2u/arda.mp3',
    'https://im.dt.in.th/ipfs/bafybeic5rfttxdt5unplsfkb2o3752ihjn3wpzrfpb56rp3jnvldhtghya/dolce.mp3',
    'https://im.dt.in.th/ipfs/bafybeignudgqi4iizgpphh3qirgep4hadbe6rokv4lttdbmnitm2xpo4vm/bodega.mp3',
    'https://im.dt.in.th/ipfs/bafybeib4afdxaacmesjadhvnascwqdwdeoxyxajpgegk2vdfbbyxms643m/cindy.mp3',
    'https://im.dt.in.th/ipfs/bafybeiao2e7uix5uxqjkkb42psw2llxizvwgubog4e4vnnvx3emytj3smu/bea.mp3',
    'https://im.dt.in.th/ipfs/bafybeibx7pbxajryoljduluytj5ybtbcvmbo42gkih2ioegcjzaoemh32y/chloe.mp3',
    'https://im.dt.in.th/ipfs/bafybeie7wjc4z6vrbhmjzqlfejahti6fjf6staawj63txjzscaw6opkowq/emilien.mp3',
    'https://im.dt.in.th/ipfs/bafybeicibp3x765uvpraxiule6avdilx3v22xvp47txejucizbcv66kkre/eliska.mp3',
    'https://im.dt.in.th/ipfs/bafybeicwuym3vsji24vba4ooxdki25yxu62j4vah3gx5e4ilkosf7doh5q/eric.mp3',
    'https://im.dt.in.th/ipfs/bafybeicz2wbytaylittttf43aiys5jjlnjua7icdiug5gsyn36o56jjx54/dylan.mp3',
    'https://im.dt.in.th/ipfs/bafybeiewwtqsusrqf2emoffa75duo7e657jwa4t5gaswtvzo4flm7qhu6a/gold.mp3',
    'https://im.dt.in.th/ipfs/bafybeigazp4bxlehppj6aul664ozrm64b3efsjdz6oddq53i4qj7hgnrom/ethan.mp3',
    'https://im.dt.in.th/ipfs/bafybeig7obsxgdc6w4rgci4u5f2lrapbws5bw3weymoqiani2e3kp45rca/griet.mp3',
    'https://im.dt.in.th/ipfs/bafybeihqcswpvs7qbq4flugfjnspntnc2x3n77ctdw6p2ey3eagr6fvheu/evan.mp3',
    'https://im.dt.in.th/ipfs/bafybeihvnrnj5lgtaikp2hsu744q6isvaftaryhgcnyqripzgdh4s7dani/hana.mp3',
    'https://im.dt.in.th/ipfs/bafybeigejym2w66eczqbskddw4dlf5femxpxxwp6vb2aedinp74xopkkky/ingrid.mp3',
    'https://im.dt.in.th/ipfs/bafybeiaegssjxex2zzgzyerj4gomtwxnxdgo7744ehr5hwclvv37tk77ma/harvey.mp3',
    'https://im.dt.in.th/ipfs/bafybeielo3wqjdll7khmobncc3z3tlbbjxhvyui77wij5w2gr7jmn4pdpe/katerina.mp3',
    'https://im.dt.in.th/ipfs/bafybeih3c3kptqljkyftghxwf6jwejtpq65pwq74zry7ztbg2lhovdsrmu/jakub.mp3',
    'https://im.dt.in.th/ipfs/bafybeibblxx2vsgngjpeuqeujy7nyjezseytnmkwfydsbfehiw4xatxrzm/joseph-chen.mp3',
    'https://im.dt.in.th/ipfs/bafybeiafdqnby54qxtlcwctcxsc5hmxlkl4436erhlv4ipdcg3jwht4jeq/joyner.mp3',
    'https://im.dt.in.th/ipfs/bafybeihxsosfi2v3rszn3ndcvqttcd3gun36c7x2e352gh3oh4mhqf3rzq/jennifer.mp3',
    'https://im.dt.in.th/ipfs/bafybeiaohb2u2pxmzifjcjtrttpdrgj24ohig4u6iph3uxgbjuz4wi6pbe/lenn.mp3',
    'https://im.dt.in.th/ipfs/bafybeigrdk4qaikl4relbmaiz2dbt3q66d76wdrikumvptgcliannfsrpa/li.mp3',
    'https://im.dt.in.th/ipfs/bafybeidyf6v4vot6tffjpurynwsomq2tq5algapc55o5qwpadjd5llf2ha/li-cassian.mp3',
    'https://im.dt.in.th/ipfs/bafybeievpbuu2wzaa3gdztqulgdaxj7idlvjyb3uyrtwsbd2zdrjd65yzy/liora-mira.mp3',
    'https://im.dt.in.th/ipfs/bafybeifzl7nnvwddhyozunp766b45lzcbg3jaayffkhev27i3rnfb572ue/maia.mp3',
    'https://im.dt.in.th/ipfs/bafybeig25wgxb5gtt4u2ioiplxhig455zckiyo44i2hno2qemgmvbzplea/marcus.mp3',
    'https://im.dt.in.th/ipfs/bafybeidmy6rmlml7jd3tcpzwcsfi3jk76to3w4ihdllfslwcg3c6rf5osy/momo.mp3',
    'https://im.dt.in.th/ipfs/bafybeihux4dmolhlmtcefz3mgfhhjhcvelbljr4pebrrrwp4oobtmnbj6a/marina.mp3',
    'https://im.dt.in.th/ipfs/bafybeiga3sdkbpouzpnicbyg7jcirtodi5oojadkrymyyj5fzyrik5uvn4/mia.mp3',
    'https://im.dt.in.th/ipfs/bafybeihna5bkzw55oyyxqqbeyl4s2hsslelf6bzcyp7piedh32apv5gdo4/mione.mp3',
    'https://im.dt.in.th/ipfs/bafybeialcbrr2alm3bumvti3v2agqgpmjfmzjlelja6w44dk3roxeiac4u/ono-anna.mp3',
    'https://im.dt.in.th/ipfs/bafybeife2xvar4tzof5r5h3zpqvf4t6x2l23qhaw5lotn3llv7nbb7orru/qiao.mp3',
    'https://im.dt.in.th/ipfs/bafybeihd5v2x6lgegmjx3yehn4nq7cwt6elgveal6dxo57wf4xm554e2pi/peter.mp3',
    'https://im.dt.in.th/ipfs/bafybeife3dquf5wpjkiuqspsu7utbuoo5b6pmlc3covv43u62i2qlk572e/radio-gol.mp3',
    'https://im.dt.in.th/ipfs/bafybeign7fwjz6vjd6ylhuc7kxp4kvkpma3jvhxvamyyuvriulzrxp37k4/raymond.mp3',
    'https://im.dt.in.th/ipfs/bafybeiejudezli3imydjbrnbux4ls6y3eue343mcjfoudgvyi6vxs4wzyu/roya.mp3',
    'https://im.dt.in.th/ipfs/bafybeig5r4mclj4x7tq4jizewi7unk2xq73afutfzzjxnfeafairjyv334/rizky.mp3',
    'https://im.dt.in.th/ipfs/bafybeiali4tkoyo53s4b2yjhvo2kkc7d5qr4js6wi5hcu4inpa4guynqyi/rocky.mp3',
    'https://im.dt.in.th/ipfs/bafybeiaklzndsn76no5lri3fiwcwywej6yjcjs2dtoxs4ofvxosefzmpja/sigga.mp3',
    'https://im.dt.in.th/ipfs/bafybeiaesqufdsz6dwcm2eu72ewuf3ojhhqyqd3vvdaa6tpkiusagdcmle/ryan.mp3',
    'https://im.dt.in.th/ipfs/bafybeidv6r7tgrbqkeyzqkvmb55sul33isqofv6rxyuj3duuoev63mcwb4/serena.mp3',
    'https://im.dt.in.th/ipfs/bafybeiekulymiagrecfcn3ipv6qkzrjcyopgetoway2ypollc6eoakplfm/siiri.mp3',
    'https://im.dt.in.th/ipfs/bafybeich6ucvh6psuu62jsw7jkbnp5vyyhb3v5fwpv5c67yjvybxsnjdf4/sunny.mp3',
    'https://im.dt.in.th/ipfs/bafybeihpm4v7rnjgwbnfgzbpnitxl6yqxvcwgb75pkk4mfe3agbnasmavq/sohee.mp3',
    'https://im.dt.in.th/ipfs/bafybeih5bch73jemfmzzcw45zcjsm3x2ihisrhouiy6mutm4kiqgqt54mi/sonrisa.mp3',
    'https://im.dt.in.th/ipfs/bafybeiedtzxfcvpj7g54tnjti7sp5a2k44lyn465vpzswbogrkl5qx25wa/theo-calm.mp3',
    'https://im.dt.in.th/ipfs/bafybeicajmhi47d3ukuuggghysl652xdfpmn47jytymojww6olivhtaphy/tina.mp3',
    'https://im.dt.in.th/ipfs/bafybeigackeruyedhmfo3bkfflnfvdbz6umrc6hjdlw6d6d7scuip5q7py/sunnybobi.mp3',
    'https://im.dt.in.th/ipfs/bafybeigc63vefgbt4qyukpl5zlwhvjk3pmzgztvwrboz6c7lnmtcsby3gi/wil.mp3',
  ]

  for (const voice of voices) {
    const preview = files.find(file => file.includes(voice.filename))
    if (preview) {
      voice.preview = preview
    }
  }

  voices.sort((a, b) => {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0
  })
</script>

:::lead
In **March 30, 2026**, [Qwen3.5-Omni is released](https://qwen.ai/blog?id=qwen3.5-omni) with [the ability to generate spoken audio](https://www.alibabacloud.com/help/en/model-studio/qwen-omni).
:::

It comes with [56 different voices](https://www.alibabacloud.com/help/en/model-studio/omni-voice-list#ebbf7296b7xqy). It also supports Thai language, so I wanted to know how they sound like. One of the voices failed to generate, so this page has 1 voice missing.

<table>
  <thead>
    <tr>
      <th>Voice</th>
      <th>Preview</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="voice in voices" :key="voice.name">
      <td class="align-middle"><strong class="text-[#bef]">{{ voice.name }}</strong></td>
      <td class="align-middle">
        <audio controls :src="voice.preview" preload="auto" v-if="voice.preview">
          <p>Your browser does not support the audio element.</p>
        </audio>
      </td>
    </tr>
  </tbody>
</table>
