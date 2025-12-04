---
public: true
title: A survey of name generators in open source tools
giscus: true
---

Many tools need to generate human-friendly names for transient resources—containers, sessions, builds, temporary instances. Rather than forcing users to come up with names (or generating cryptic IDs), some tools take the fun approach of generating random, memorable names. This note documents several such name generators used in popular open source tools.

<p class="flex gap-3 items-center">
  <label for="seed-input">Seed:</label>
  <input id="seed-input" v-model="seed" placeholder="Enter a seed string" size="40" class="form-control" :disabled="!sha256Ref" />
</p>

<table>
  <thead>
    <tr>
      <th>Tool</th>
      <th>Example</th>
      <th>Remarks</th>
    </tr>
  </thead>
  <tbody>
    <template v-for="(gen, key) in generators" :key="key">
      <tr>
        <td style="min-width: 8em"><strong>{{ gen.name }}</strong></td>
        <td style="min-width: 16em"><code>{{ gen.generate(createRandomizer(seed)) }}</code></td>
        <td>
          <em>{{ gen.description || '' }}</em>
          <div class="flex flex-wrap gap-2 items-baseline">
            <strong class="text-[#8b8685] text-xs uppercase">Source:</strong>
            <a :href="gen.source" target="_blank">{{ gen.sourceName }}</a>
          </div>
          <div class="flex flex-wrap gap-2 items-baseline">
            <strong class="text-[#8b8685] text-xs uppercase">Wordlists:</strong>
            <span v-for="(words, listName) in gen.wordlists" :key="listName" class="mb-2" :title="words.join(', ')">
              {{ listName }} <span class="text-[#8b8685]">({{ words.length }} words)</span>
            </span>
          </div>
        </td>
      </tr>
    </template>
  </tbody>
</table>

<script setup>
const seed = Vue.ref('')
const sha256Ref = Vue.ref(null)
Vue.onMounted(async () => {
  const { sha256 } = await import('https://cdn.jsdelivr.net/npm/ohash@1.1.6/+esm')
  sha256Ref.value = sha256
})

const fallbackSha256 = (s) => {
  if (s === '') {
    return 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
  }
  if (s === 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855') {
    return 'cd372fb85148700fa88095e3492d3f9f5beb43e555e5ff26d95f5a6adc36f8e6'
  }
  throw new Error('Ran out of fallback hashes')
}

function wordlist(...a) {
  return a.join(' ').split(' ')
}

function createRandomizer(seed) {
  let queue = ''
  function rng() {
    const sha256 = sha256Ref.value || fallbackSha256
    if (queue === '') {
      queue = sha256(seed)
      seed = queue
    }
    const hex = queue.slice(0, 8)
    queue = queue.slice(8)
    return parseInt(hex, 16)
  }
  function random(a) {
    return a[rng() % a.length]
  }
  return random
}

const generators = {
  docker: {
    name: 'Docker',
    sourceName: 'names-generator.go',
    source: 'https://github.com/moby/moby/blob/a03d6bd0717dc00a04878923f9fda85036eab358/internal/namesgenerator/names-generator.go',
    description: 'Random adjective + surname of notable scientists and hackers.',
    wordlists: {
      left: wordlist(
        "admiring adoring affectionate agitated amazing angry awesome beautiful blissful",
        "bold boring brave busy charming clever compassionate competent condescending",
        "confident cool cranky crazy dazzling determined distracted dreamy eager",
        "ecstatic elastic elated elegant eloquent epic exciting fervent festive",
        "flamboyant focused friendly frosty funny gallant gifted goofy gracious great",
        "happy hardcore heuristic hopeful hungry infallible inspiring intelligent",
        "interesting jolly jovial keen kind laughing loving lucid magical modest musing",
        "mystifying naughty nervous nice nifty nostalgic objective optimistic peaceful",
        "pedantic pensive practical priceless quirky quizzical recursing relaxed",
        "reverent romantic sad serene sharp silly sleepy stoic strange stupefied",
        "suspicious sweet tender thirsty trusting unruffled upbeat vibrant vigilant",
        "vigorous wizardly wonderful xenodochial youthful zealous zen"
      ),
      right: wordlist(
        "agnesi albattani allen almeida antonelli archimedes ardinghelli aryabhata",
        "austin babbage banach banzai bardeen bartik bassi beaver bell benz bhabha",
        "bhaskara black blackburn blackwell bohr booth borg bose bouman boyd brahmagupta",
        "brattain brown buck burnell cannon carson cartwright carver cerf chandrasekhar",
        "chaplygin chatelet chatterjee chaum chebyshev clarke cohen colden cori cray",
        "curie curran darwin davinci dewdney dhawan diffie dijkstra dirac driscoll",
        "dubinsky easley edison einstein elbakyan elgamal elion ellis engelbart euclid",
        "euler faraday feistel fermat fermi feynman franklin gagarin galileo galois",
        "ganguly gates gauss germain goldberg goldstine goldwasser golick goodall gould",
        "greider grothendieck haibt hamilton haslett hawking heisenberg hellman hermann",
        "herschel hertz heyrovsky hodgkin hofstadter hoover hopper hugle hypatia",
        "ishizaka jackson jang jemison jennings jepsen johnson joliot jones kalam",
        "kapitsa kare keldysh keller kepler khayyam khorana kilby kirch knuth kowalevski",
        "lalande lamarr lamport leakey leavitt lederberg lehmann lewin lichterman liskov",
        "lovelace lumiere mahavira margulis matsumoto maxwell mayer mccarthy mcclintock",
        "mclaren mclean mcnulty meitner mendel mendeleev meninsky merkle mestorf",
        "mirzakhani montalcini moore morse moser murdock napier nash neumann newton",
        "nightingale nobel noether northcutt noyce panini pare pascal pasteur payne",
        "perlman pike poincare poitras proskuriakova ptolemy raman ramanujan rhodes ride",
        "ritchie robinson roentgen rosalind rubin saha sammet sanderson satoshi shamir",
        "shannon shaw shirley shockley shtern sinoussi snyder solomon spence stonebraker",
        "sutherland swanson swartz swirles taussig tesla tharp thompson torvalds tu",
        "turing varahamihira vaughan villani visvesvaraya volhard wescoff wilbur wiles",
        "williams williamson wilson wing wozniak wright wu yalow yonath zhukovsky"
      )
    },
    generate(random) {
      const { left, right } = this.wordlists 
      let name
      let acceptable = false
      while (!acceptable) {
        name = `${random(left)}_${random(right)}`
        acceptable = name !== 'boring_wozniak'
      }
      return name
    }
  },
  localsend: {
    name: 'LocalSend',
    source: 'https://github.com/localsend/localsend/blob/03fbd7060739516d25c238c7d4116a678e7d1531/app/lib/gen/strings_en.g.dart',
    sourceName: 'strings_en.g.dart',
    description: 'Random adjective + fruit name.',
    wordlists: {
      adjectives: wordlist(
        "Adorable Beautiful Big Bright Clean Clever Cool Cute Cunning Determined",
        "Energetic Efficient Fantastic Fast Fine Fresh Good Gorgeous Great Handsome Hot",
        "Kind Lovely Mystic Neat Nice Patient Pretty Powerful Rich Secret Smart Solid",
        "Special Strategic Strong Tidy Wise"
      ),
      fruits: wordlist(
        "Apple Avocado Banana Blackberry Blueberry Broccoli Carrot Cherry Coconut Grape",
        "Lemon Lettuce Mango Melon Mushroom Onion Orange Papaya Peach Pear Pineapple",
        "Potato Pumpkin Raspberry Strawberry Tomato",
      )
    },
    generate(random) {
      const { adjectives, fruits } = this.wordlists
      return `${random(adjectives)} ${random(fruits)}`
    }
  },
  names: {
    name: 'names crate',
    source: 'https://github.com/fnichol/names/tree/b5023b03e2339bf6e860bdcef20557ab81f3ec55/data',
    sourceName: 'data',
    description: 'Random adjective + noun. This large wordlist can generate over 1 million combinations.',
    wordlists: {
      adjectives: wordlist(
        "aback abaft abandoned abashed aberrant abhorrent abiding abject ablaze able",
        "abnormal aboard aboriginal abortive abounding abrasive abrupt absent absorbed",
        "absorbing abstracted absurd abundant abusive acceptable accessible accidental",
        "accurate acid acidic acoustic acrid actually ad adamant adaptable addicted",
        "adhesive adjoining adorable adventurous afraid aggressive agonizing agreeable",
        "ahead ajar alcoholic alert alike alive alleged alluring aloof amazing ambiguous",
        "ambitious amuck amused amusing ancient angry animated annoyed annoying anxious",
        "apathetic aquatic aromatic arrogant ashamed aspiring assorted astonishing",
        "attractive auspicious automatic available average awake aware awesome awful",
        "axiomatic bad barbarous bashful bawdy beautiful befitting belligerent",
        "beneficial bent berserk best better bewildered big billowy bite-sized bitter",
        "bizarre black black-and-white bloody blue blue-eyed blushing boiling boorish",
        "bored boring bouncy boundless brainy brash brave brawny breakable breezy brief",
        "bright broad broken brown bumpy burly bustling busy cagey calculating callous",
        "calm capable capricious careful careless caring cautious ceaseless certain",
        "changeable charming cheap cheerful chemical chief childlike chilly chivalrous",
        "chubby chunky clammy classy clean clear clever cloistered closed cloudy clumsy",
        "cluttered coherent cold colorful colossal combative comfortable common complete",
        "complex concerned condemned confused conscious cooing cool cooperative",
        "coordinated courageous cowardly crabby craven crazy creepy crooked crowded",
        "cruel cuddly cultured cumbersome curious curly curved curvy cut cute cynical",
        "daffy daily damaged damaging damp dangerous dapper dark dashing dazzling dead",
        "deadpan deafening dear debonair decisive decorous deep deeply defeated",
        "defective defiant delicate delicious delightful delirious demonic dependent",
        "depressed deranged descriptive deserted detailed determined devilish didactic",
        "different difficult diligent direful dirty disagreeable disastrous discreet",
        "disgusted disgusting disillusioned dispensable distinct disturbed divergent",
        "dizzy domineering doubtful drab draconian dramatic dreary drunk dry dull dusty",
        "dynamic dysfunctional eager early earsplitting earthy easy eatable economic",
        "educated efficacious efficient eight elastic elated elderly electric elegant",
        "elfin elite embarrassed eminent empty enchanted enchanting encouraging",
        "endurable energetic enormous entertaining enthusiastic envious equable equal",
        "erect erratic ethereal evanescent evasive even excellent excited exciting",
        "exclusive exotic expensive extra-large extra-small exuberant exultant fabulous",
        "faded faint fair faithful fallacious false familiar famous fanatical fancy",
        "fantastic far far-flung fascinated fast fat faulty fearful fearless feeble",
        "feigned female fertile festive few fierce filthy fine finicky first five fixed",
        "flagrant flaky flashy flat flawless flimsy flippant flowery fluffy fluttering",
        "foamy foolish foregoing forgetful fortunate four fragile frail frantic free",
        "freezing frequent fresh fretful friendly frightened frightening full fumbling",
        "functional funny furry furtive future futuristic fuzzy gabby gainful gamy",
        "gaping garrulous gaudy general gentle giant giddy gifted gigantic glamorous",
        "gleaming glib glistening glorious glossy godly good goofy gorgeous graceful",
        "grandiose grateful gratis gray greasy great greedy green grey grieving groovy",
        "grotesque grouchy grubby gruesome grumpy guarded guiltless gullible gusty",
        "guttural habitual half hallowed halting handsome handsomely handy hanging",
        "hapless happy hard hard-to-find harmonious harsh hateful heady healthy",
        "heartbreaking heavenly heavy hellish helpful helpless hesitant hideous high",
        "high-pitched highfalutin hilarious hissing historical holistic hollow homeless",
        "homely honorable horrible hospitable hot huge hulking humdrum humorous hungry",
        "hurried hurt hushed husky hypnotic hysterical icky icy idiotic ignorant ill",
        "ill-fated ill-informed illegal illustrious imaginary immense imminent impartial",
        "imperfect impolite important imported impossible incandescent incompetent",
        "inconclusive incredible industrious inexpensive infamous innate innocent",
        "inquisitive insidious instinctive intelligent interesting internal invincible",
        "irate irritating itchy jaded jagged jazzy jealous jittery jobless jolly joyous",
        "judicious juicy jumbled jumpy juvenile kaput keen kind kindhearted kindly",
        "knotty knowing knowledgeable known labored lackadaisical lacking lame",
        "lamentable languid large last late laughable lavish lazy lean learned left",
        "legal lethal level lewd light like likeable limping literate little lively",
        "living lonely long long-term longing loose lopsided loud loutish lovely loving",
        "low lowly lucky ludicrous lumpy lush luxuriant lying lyrical macabre macho",
        "maddening madly magenta magical magnificent majestic makeshift male malicious",
        "mammoth maniacal many marked married marvelous massive material materialistic",
        "mature mean measly meaty medical meek mellow melodic melted merciful mere messy",
        "mighty military milky mindless miniature minor miscreant misty mixed moaning",
        "modern moldy momentous motionless mountainous muddled mundane murky mushy mute",
        "mysterious naive nappy narrow nasty natural naughty nauseating near neat",
        "nebulous necessary needless needy neighborly nervous new next nice nifty nimble",
        "nine nippy noiseless noisy nonchalant nondescript nonstop normal nostalgic nosy",
        "noxious null numberless numerous nutritious nutty oafish obedient obeisant",
        "obese obnoxious obscene obsequious observant obsolete obtainable oceanic odd",
        "offbeat old old-fashioned omniscient one onerous open opposite optimal orange",
        "ordinary organic ossified outgoing outrageous outstanding oval overconfident",
        "overjoyed overrated overt overwrought painful painstaking pale paltry panicky",
        "panoramic parallel parched parsimonious past pastoral pathetic peaceful",
        "penitent perfect periodic permissible perpetual petite phobic physical picayune",
        "pink piquant placid plain plant plastic plausible pleasant plucky pointless",
        "poised polite political poor possessive possible powerful precious premium",
        "present pretty previous pricey prickly private probable productive profuse",
        "protective proud psychedelic psychotic public puffy pumped puny purple purring",
        "pushy puzzled puzzling quack quaint quarrelsome questionable quick quickest",
        "quiet quirky quixotic quizzical rabid racial ragged rainy rambunctious rampant",
        "rapid rare raspy ratty ready real rebel receptive recondite red redundant",
        "reflective regular relieved remarkable reminiscent repulsive resolute resonant",
        "responsible rhetorical rich right righteous rightful rigid ripe ritzy roasted",
        "robust romantic roomy rotten rough round royal ruddy rude rural rustic ruthless",
        "sable sad safe salty same sassy satisfying savory scandalous scarce scared",
        "scary scattered scientific scintillating scrawny screeching second second-hand",
        "secret secretive sedate seemly selective selfish separate serious shaggy shaky",
        "shallow sharp shiny shivering shocking short shrill shut shy sick silent silky",
        "silly simple simplistic sincere six skillful skinny sleepy slim slimy slippery",
        "sloppy slow small smart smelly smiling smoggy smooth sneaky snobbish snotty",
        "soft soggy solid somber sophisticated sordid sore sour sparkling special",
        "spectacular spicy spiffy spiky spiritual spiteful splendid spooky spotless",
        "spotted spotty spurious squalid square squealing squeamish staking stale",
        "standing statuesque steadfast steady steep stereotyped sticky stiff stimulating",
        "stingy stormy straight strange striped strong stupendous stupid sturdy subdued",
        "subsequent substantial successful succinct sudden sulky super superb",
        "superficial supreme swanky sweet sweltering swift symptomatic synonymous taboo",
        "tacit tacky talented tall tame tan tangible tangy tart tasteful tasteless tasty",
        "tawdry tearful tedious teeny teeny-tiny telling temporary ten tender tense",
        "tenuous terrible terrific tested testy thankful therapeutic thick thin",
        "thinkable third thirsty thoughtful thoughtless threatening three thundering",
        "tidy tight tightfisted tiny tired tiresome toothsome torpid tough towering",
        "tranquil trashy tremendous tricky trite troubled truculent true truthful two",
        "typical ubiquitous ugliest ugly ultra unable unaccountable unadvised unarmed",
        "unbecoming unbiased uncovered understood undesirable unequal unequaled uneven",
        "unhealthy uninterested unique unkempt unknown unnatural unruly unsightly",
        "unsuitable untidy unused unusual unwieldy unwritten upbeat uppity upset uptight",
        "used useful useless utopian utter uttermost vacuous vagabond vague valuable",
        "various vast vengeful venomous verdant versed victorious vigorous violent",
        "violet vivacious voiceless volatile voracious vulgar wacky waggish waiting",
        "wakeful wandering wanting warlike warm wary wasteful watery weak wealthy weary",
        "well-groomed well-made well-off well-to-do wet whimsical whispering white whole",
        "wholesale wicked wide wide-eyed wiggly wild willing windy wiry wise wistful",
        "witty woebegone womanly wonderful wooden woozy workable worried worthless",
        "wrathful wretched wrong wry yellow yielding young youthful yummy zany zealous",
        "zesty zippy zonked"
      ),
      nouns: wordlist(
        "able account achieve achiever acoustics act action activity actor addition",
        "adjustment advertisement advice aftermath afternoon afterthought agreement air",
        "airplane airport alarm alley amount amusement anger angle animal answer ant",
        "ants apparatus apparel apple apples appliance approval arch argument arithmetic",
        "arm army art attack attempt attention attraction aunt authority babies baby",
        "back badge bag bait balance ball balloon balls banana band base baseball basin",
        "basket basketball bat bath battle bead beam bean bear bears beast bed bedroom",
        "beds bee beef beetle beggar beginner behavior belief believe bell bells berry",
        "bike bikes bird birds birth birthday bit bite blade blood blow board boat boats",
        "body bomb bone book books boot border bottle boundary box boy boys brain brake",
        "branch brass bread breakfast breath brick bridge brother brothers brush bubble",
        "bucket building bulb bun burn burst bushes business butter button cabbage cable",
        "cactus cake cakes calculator calendar camera camp can cannon canvas cap caption",
        "car card care carpenter carriage cars cart cast cat cats cattle cause cave",
        "celery cellar cemetery cent chain chair chairs chalk chance change channel",
        "cheese cherries cherry chess chicken chickens children chin church circle clam",
        "class clock clocks cloth cloud clouds clover club coach coal coast coat cobweb",
        "coil collar color comb comfort committee company comparison competition",
        "condition connection control cook copper copy cord cork corn cough country",
        "cover cow cows crack cracker crate crayon cream creator creature credit crib",
        "crime crook crow crowd crown crush cry cub cup current curtain curve cushion",
        "dad daughter day death debt decision deer degree design desire desk destruction",
        "detail development digestion dime dinner dinosaurs direction dirt discovery",
        "discussion disease disgust distance distribution division dock doctor dog dogs",
        "doll dolls donkey door downtown drain drawer dress drink driving drop drug drum",
        "duck ducks dust ear earth earthquake edge education effect egg eggnog eggs",
        "elbow end engine error event example exchange existence expansion experience",
        "expert eye eyes face fact fairies fall family fan fang farm farmer father",
        "faucet fear feast feather feeling feet fiction field fifth fight finger fire",
        "fireman fish flag flame flavor flesh flight flock floor flower flowers fly fog",
        "fold food foot force fork form fowl frame friction friend friends frog frogs",
        "front fruit fuel furniture galley game garden gate geese ghost giants giraffe",
        "girl girls glass glove glue goat gold goldfish good-bye goose government",
        "governor grade grain grandfather grandmother grape grass grip ground group",
        "growth guide guitar gun hair haircut hall hammer hand hands harbor harmony hat",
        "hate head health hearing heart heat help hen hill history hobbies hole holiday",
        "home honey hook hope horn horse horses hose hospital hot hour house houses",
        "humor hydrant ice icicle idea impulse income increase industry ink insect",
        "instrument insurance interest invention iron island jail jam jar jeans jelly",
        "jellyfish jewel join joke journey judge juice jump kettle key kick kiss kite",
        "kitten kittens kitty knee knife knot knowledge laborer lace ladybug lake lamp",
        "land language laugh lawyer lead leaf learning leather leg legs letter letters",
        "lettuce level library lift light limit line linen lip liquid list lizards loaf",
        "lock locket look loss love low lumber lunch lunchroom machine magic maid",
        "mailbox man manager map marble mark market mask mass match meal measure meat",
        "meeting memory men metal mice middle milk mind mine minister mint minute mist",
        "mitten mom money monkey month moon morning mother motion mountain mouth move",
        "muscle music nail name nation neck need needle nerve nest net news night noise",
        "north nose note notebook number nut oatmeal observation ocean offer office oil",
        "operation opinion orange oranges order organization ornament oven owl owner",
        "page pail pain paint pan pancake paper parcel parent park part partner party",
        "passenger paste patch payment peace pear pen pencil person pest pet pets pickle",
        "picture pie pies pig pigs pin pipe pizzas place plane planes plant plantation",
        "plants plastic plate play playground pleasure plot plough pocket point poison",
        "police polish pollution popcorn porter position pot potato powder power price",
        "print prison process produce profit property prose protest pull pump punishment",
        "purpose push quarter quartz queen question quicksand quiet quill quilt quince",
        "quiver rabbit rabbits rail railway rain rainstorm rake range rat rate ray",
        "reaction reading reason receipt recess record regret relation religion",
        "representative request respect rest reward rhythm rice riddle rifle ring rings",
        "river road robin rock rod roll roof room root rose route rub rule run sack sail",
        "salt sand scale scarecrow scarf scene scent school science scissors screw sea",
        "seashore seat secretary seed selection self sense servant shade shake shame",
        "shape sheep sheet shelf ship shirt shock shoe shoes shop show side sidewalk",
        "sign silk silver sink sister sisters size skate skin skirt sky slave sleep",
        "sleet slip slope smash smell smile smoke snail snails snake snakes sneeze snow",
        "soap society sock soda sofa son song songs sort sound soup space spade spark",
        "spiders sponge spoon spot spring spy square squirrel stage stamp star start",
        "statement station steam steel stem step stew stick sticks stitch stocking",
        "stomach stone stop store story stove stranger straw stream street stretch",
        "string structure substance sugar suggestion suit summer sun support surprise",
        "sweater swim swing system table tail talk tank taste tax teaching team teeth",
        "temper tendency tent territory test texture theory thing things thought thread",
        "thrill throat throne thumb thunder ticket tiger time tin title toad toe toes",
        "tomatoes tongue tooth toothbrush toothpaste top touch town toy toys trade trail",
        "train trains tramp transport tray treatment tree trees trick trip trouble",
        "trousers truck trucks tub turkey turn twig twist umbrella uncle underwear unit",
        "use vacation value van vase vegetable veil vein verse vessel vest view visitor",
        "voice volcano volleyball voyage walk wall war wash waste watch water wave waves",
        "wax way wealth weather week weight wheel whip whistle wilderness wind window",
        "wine wing winter wire wish woman women wood wool word work worm wound wren",
        "wrench wrist writer writing yak yam yard yarn year yoke zebra zephyr zinc",
        "zipper zoo"
      )
    },
    generate(random) {
      const { adjectives, nouns } = this.wordlists
      return `${random(adjectives)}-${random(nouns)}`
    }
  },
  zellij: {
    name: 'Zellij',
    source: 'https://github.com/zellij-org/zellij/blob/82f30e2cde5207e5b51301633686b2c7feac54f3/zellij-utils/src/sessions.rs#L492',
    sourceName: 'sessions.rs',
    description: 'Random adjective + noun. Same algorithm as the names crate, with a smaller wordlist, avoiding unfortunate and offensive combinations.',
    wordlists: {
      adjectives: wordlist(
        "adamant adept adventurous arcadian auspicious awesome blossoming brave charming",
        "chatty circular considerate cubic curious delighted didactic diligent effulgent",
        "erudite excellent exquisite fabulous fascinating friendly glowing gracious",
        "gregarious hopeful implacable inventive joyous judicious jumping kind likable",
        "loyal lucky marvellous mellifluous nautical oblong outstanding polished polite",
        "profound quadratic quiet rectangular remarkable rusty sensible sincere",
        "sparkling splendid stellar tenacious tremendous triangular undulating",
        "unflappable unique verdant vitreous wise zippy"
      ),
      nouns: wordlist(
        "aardvark accordion apple apricot bee brachiosaur cactus capsicum clarinet",
        "cowbell crab cuckoo cymbal diplodocus donkey drum duck echidna elephant",
        "foxglove galaxy glockenspiel goose hill horse iguanadon jellyfish kangaroo lake",
        "lemon lemur magpie megalodon mountain mouse muskrat newt oboe ocelot orange",
        "panda peach pepper petunia pheasant piano pigeon platypus quasar rhinoceros",
        "river rustacean salamander sitar stegosaurus tambourine tiger tomato",
        "triceratops ukulele viola weasel xylophone yak zebra"
      )
    },
    generate(random) {
      const { adjectives, nouns } = this.wordlists
      return `${random(adjectives)}-${random(nouns)}`
    }
  },
}
</script>
