---
title: Random mnemonic code generator based on SLIP39 wordlist
public: true
---

:::lead
Random mnemonic code generator using the [SLIP39 wordlist](https://github.com/satoshilabs/slips/blob/master/slip-0039.md#wordlist).
:::

<div style="border-radius: 1em; border: 2px solid #656463; padding: 1em; background: #252423; text-align: center; margin: 2em 0;" :style="style">
  <div style="font-size: 2em; margin: 1rem 0;">
    {{result}}
    <div style="font-size: 1rem; color: #8b8685">seed: <button @click="setSeed" title="Click to set a manual seed">{{ seed }}</button></div>
  </div>
  <div style="display: flex; justify-content: center; gap: 0.5em">
    <button
      class="btn"
      v-on:click="randomize"
      v-on:pointerdown="down"
      v-on:pointerup="up"
    >Generate</button>
    <select class="form-control" style="flex: 0 0 8em" v-model="resultLength" @change="randomize">
      <option value="1">1 word</option>
      <option value="2">2 words</option>
      <option value="3">3 words</option>
      <option value="4">4 words</option>
    </select>
  </div>
  <p style="color: #8b8685">
    {{10 * (+resultLength)}} bits of entropy<br />
    {{1024 ** (+resultLength)}} possible {{resultLength == 1 ? 'words' : 'combinations'}}
  </p>
</div>

The SLIP39 wordlist, originally designed for [sharing ‘master secrets’](https://github.com/satoshilabs/slips/blob/master/slip-0039.md#abstract) in a human-friendly way, consists of 1024 common words. Each word is 4–8 letters long, with unique 4-letter prefixes to prevent ambiguity, designed to be easily distinguished from each other, both in spelling and pronunciation. Each randomly selected word contributes 10 bits of entropy to the generated phrase.

<p style="font-size: 0.8em; color: #8b8685">
  <strong style="color: inherit">The words in the word list are:</strong> {{wordlist.join(' ')}}
</p>

<script setup>
  const wordlist = `
  academic acid acne acquire acrobat activity actress adapt adequate adjust admit
  adorn adult advance advocate afraid again agency agree aide aircraft airline
  airport ajar alarm album alcohol alien alive alpha already alto aluminum always
  amazing ambition amount amuse analysis anatomy ancestor ancient angel angry
  animal answer antenna anxiety apart aquatic arcade arena argue armed artist
  artwork aspect auction august aunt average aviation avoid award away axis axle
  beam beard beaver become bedroom behavior being believe belong benefit best
  beyond bike biology birthday bishop black blanket blessing blimp blind blue
  body bolt boring born both boundary bracelet branch brave breathe briefing
  broken brother browser bucket budget building bulb bulge bumpy bundle burden
  burning busy buyer cage calcium camera campus canyon capacity capital capture
  carbon cards careful cargo carpet carve category cause ceiling center ceramic
  champion change charity check chemical chest chew chubby cinema civil class
  clay cleanup client climate clinic clock clogs closet clothes club cluster coal
  coastal coding column company corner costume counter course cover cowboy cradle
  craft crazy credit cricket criminal crisis critical crowd crucial crunch crush
  crystal cubic cultural curious curly custody cylinder daisy damage dance
  darkness database daughter deadline deal debris debut decent decision declare
  decorate decrease deliver demand density deny depart depend depict deploy
  describe desert desire desktop destroy detailed detect device devote diagnose
  dictate diet dilemma diminish dining diploma disaster discuss disease dish
  dismiss display distance dive divorce document domain domestic dominant dough
  downtown dragon dramatic dream dress drift drink drove drug dryer duckling duke
  duration dwarf dynamic early earth easel easy echo eclipse ecology edge editor
  educate either elbow elder election elegant element elephant elevator elite
  else email emerald emission emperor emphasis employer empty ending endless
  endorse enemy energy enforce engage enjoy enlarge entrance envelope envy
  epidemic episode equation equip eraser erode escape estate estimate evaluate
  evening evidence evil evoke exact example exceed exchange exclude excuse
  execute exercise exhaust exotic expand expect explain express extend extra
  eyebrow facility fact failure faint fake false family famous fancy fangs
  fantasy fatal fatigue favorite fawn fiber fiction filter finance findings
  finger firefly firm fiscal fishing fitness flame flash flavor flea flexible
  flip float floral fluff focus forbid force forecast forget formal fortune
  forward founder fraction fragment frequent freshman friar fridge friendly frost
  froth frozen fumes funding furl fused galaxy game garbage garden garlic
  gasoline gather general genius genre genuine geology gesture glad glance
  glasses glen glimpse goat golden graduate grant grasp gravity gray greatest
  grief grill grin grocery gross group grownup grumpy guard guest guilt guitar
  gums hairy hamster hand hanger harvest have havoc hawk hazard headset health
  hearing heat helpful herald herd hesitate hobo holiday holy home hormone
  hospital hour huge human humidity hunting husband hush husky hybrid idea
  identify idle image impact imply improve impulse include income increase index
  indicate industry infant inform inherit injury inmate insect inside install
  intend intimate invasion involve iris island isolate item ivory jacket jerky
  jewelry join judicial juice jump junction junior junk jury justice kernel
  keyboard kidney kind kitchen knife knit laden ladle ladybug lair lamp language
  large laser laundry lawsuit leader leaf learn leaves lecture legal legend legs
  lend length level liberty library license lift likely lilac lily lips liquid
  listen literary living lizard loan lobe location losing loud loyalty luck lunar
  lunch lungs luxury lying lyrics machine magazine maiden mailman main makeup
  making mama manager mandate mansion manual marathon march market marvel mason
  material math maximum mayor meaning medal medical member memory mental merchant
  merit method metric midst mild military mineral minister miracle mixed mixture
  mobile modern modify moisture moment morning mortgage mother mountain mouse
  move much mule multiple muscle museum music mustang nail national necklace
  negative nervous network news nuclear numb numerous nylon oasis obesity object
  observe obtain ocean often olympic omit oral orange orbit order ordinary
  organize ounce oven overall owner paces pacific package paid painting pajamas
  pancake pants papa paper parcel parking party patent patrol payment payroll
  peaceful peanut peasant pecan penalty pencil percent perfect permit petition
  phantom pharmacy photo phrase physics pickup picture piece pile pink pipeline
  pistol pitch plains plan plastic platform playoff pleasure plot plunge practice
  prayer preach predator pregnant premium prepare presence prevent priest primary
  priority prisoner privacy prize problem process profile program promise
  prospect provide prune public pulse pumps punish puny pupal purchase purple
  python quantity quarter quick quiet race racism radar railroad rainbow raisin
  random ranked rapids raspy reaction realize rebound rebuild recall receiver
  recover regret regular reject relate remember remind remove render repair
  repeat replace require rescue research resident response result retailer
  retreat reunion revenue review reward rhyme rhythm rich rival river robin rocky
  romantic romp roster round royal ruin ruler rumor sack safari salary salon salt
  satisfy satoshi saver says scandal scared scatter scene scholar science scout
  scramble screw script scroll seafood season secret security segment senior
  shadow shaft shame shaped sharp shelter sheriff short should shrimp sidewalk
  silent silver similar simple single sister skin skunk slap slavery sled slice
  slim slow slush smart smear smell smirk smith smoking smug snake snapshot sniff
  society software soldier solution soul source space spark speak species
  spelling spend spew spider spill spine spirit spit spray sprinkle square
  squeeze stadium staff standard starting station stay steady step stick stilt
  story strategy strike style subject submit sugar suitable sunlight superior
  surface surprise survive sweater swimming swing switch symbolic sympathy
  syndrome system tackle tactics tadpole talent task taste taught taxi teacher
  teammate teaspoon temple tenant tendency tension terminal testify texture thank
  that theater theory therapy thorn threaten thumb thunder ticket tidy timber
  timely ting tofu together tolerate total toxic tracks traffic training transfer
  trash traveler treat trend trial tricycle trip triumph trouble true trust twice
  twin type typical ugly ultimate umbrella uncover undergo unfair unfold unhappy
  union universe unkind unknown unusual unwrap upgrade upstairs username usher
  usual valid valuable vampire vanish various vegan velvet venture verdict verify
  very veteran vexed victim video view vintage violence viral visitor visual
  vitamins vocal voice volume voter voting walnut warmth warn watch wavy wealthy
  weapon webcam welcome welfare western width wildlife window wine wireless
  wisdom withdraw wits wolf woman work worthy wrap wrist writing wrote year yelp
  yield yoga zero
  `.trim().split(/\s+/)

  const result = Vue.ref('…')
  const seed = Vue.ref('…')
  const style = Vue.ref({})
  const resultLength = Vue.ref(2)
  const generateIndices = (n) => {
    return Array.from({ length: n }, () => {
      return crypto.getRandomValues(new Uint32Array(1))[0] % wordlist.length
    })
  }
  const handleIndexList = (indices) => {
    const words = indices.map((index) => wordlist[index])
    let seed = 0
    let seedBits = 0
    for (const index of indices) {
      seed *= wordlist.length
      seed += index
      seedBits += Math.ceil(Math.log2(wordlist.length))
    }
    display({ words: words.join(' '), seedBits, seed })
  }
  const display = (generated) => {
    const seedDigits = Math.ceil(generated.seedBits / 4)
    result.value = generated.words
    seed.value = generated.seed.toString(16).padStart(seedDigits, '0')
  }
  const randomize = () => {
    const generated = generateIndices(+resultLength.value)
    handleIndexList(generated)
  }
  const setSeed = () => {
    const seedInput = prompt('Enter seed (hexadecimal):', seed.value)
    let seedValue = parseInt(seedInput, 16)
    if (seedValue < 0 || isNaN(seedValue)) {
      alert('Seed must be a non-negative integer.')
      return
    }
    const indices = []
    while (seedValue != 0) {
      indices.unshift(seedValue % wordlist.length)
      seedValue = Math.floor(seedValue / wordlist.length)
    }
    handleIndexList(indices.slice(0, +resultLength.value))
  }
  const randomizeFrame = () => {
    randomize()
    const r = () => Math.round(Math.random() * 4 - 2)
    style.value = { transform: `translate(${r()}px, ${r()}px)`, }
  }
  let clear = null
  const down = (e) => {
    if (clear) clear()
    const interval = setInterval(() => randomizeFrame(), 33)
    clear = () => clearInterval(interval)
  }
  const up = (e) => {
    if (clear) clear()
    clear = null
    style.value = { transform: `translate(0, 0)`, }
  }
  Vue.onMounted(() => {
    randomize()
  })
</script>
