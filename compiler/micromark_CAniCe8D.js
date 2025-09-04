const He = [
  "AElig",
  "AMP",
  "Aacute",
  "Acirc",
  "Agrave",
  "Aring",
  "Atilde",
  "Auml",
  "COPY",
  "Ccedil",
  "ETH",
  "Eacute",
  "Ecirc",
  "Egrave",
  "Euml",
  "GT",
  "Iacute",
  "Icirc",
  "Igrave",
  "Iuml",
  "LT",
  "Ntilde",
  "Oacute",
  "Ocirc",
  "Ograve",
  "Oslash",
  "Otilde",
  "Ouml",
  "QUOT",
  "REG",
  "THORN",
  "Uacute",
  "Ucirc",
  "Ugrave",
  "Uuml",
  "Yacute",
  "aacute",
  "acirc",
  "acute",
  "aelig",
  "agrave",
  "amp",
  "aring",
  "atilde",
  "auml",
  "brvbar",
  "ccedil",
  "cedil",
  "cent",
  "copy",
  "curren",
  "deg",
  "divide",
  "eacute",
  "ecirc",
  "egrave",
  "eth",
  "euml",
  "frac12",
  "frac14",
  "frac34",
  "gt",
  "iacute",
  "icirc",
  "iexcl",
  "igrave",
  "iquest",
  "iuml",
  "laquo",
  "lt",
  "macr",
  "micro",
  "middot",
  "nbsp",
  "not",
  "ntilde",
  "oacute",
  "ocirc",
  "ograve",
  "ordf",
  "ordm",
  "oslash",
  "otilde",
  "ouml",
  "para",
  "plusmn",
  "pound",
  "quot",
  "raquo",
  "reg",
  "sect",
  "shy",
  "sup1",
  "sup2",
  "sup3",
  "szlig",
  "thorn",
  "times",
  "uacute",
  "ucirc",
  "ugrave",
  "uml",
  "uuml",
  "yacute",
  "yen",
  "yuml"
], jt = {
  AElig: "Æ",
  AMP: "&",
  Aacute: "Á",
  Abreve: "Ă",
  Acirc: "Â",
  Acy: "А",
  Afr: "𝔄",
  Agrave: "À",
  Alpha: "Α",
  Amacr: "Ā",
  And: "⩓",
  Aogon: "Ą",
  Aopf: "𝔸",
  ApplyFunction: "⁡",
  Aring: "Å",
  Ascr: "𝒜",
  Assign: "≔",
  Atilde: "Ã",
  Auml: "Ä",
  Backslash: "∖",
  Barv: "⫧",
  Barwed: "⌆",
  Bcy: "Б",
  Because: "∵",
  Bernoullis: "ℬ",
  Beta: "Β",
  Bfr: "𝔅",
  Bopf: "𝔹",
  Breve: "˘",
  Bscr: "ℬ",
  Bumpeq: "≎",
  CHcy: "Ч",
  COPY: "©",
  Cacute: "Ć",
  Cap: "⋒",
  CapitalDifferentialD: "ⅅ",
  Cayleys: "ℭ",
  Ccaron: "Č",
  Ccedil: "Ç",
  Ccirc: "Ĉ",
  Cconint: "∰",
  Cdot: "Ċ",
  Cedilla: "¸",
  CenterDot: "·",
  Cfr: "ℭ",
  Chi: "Χ",
  CircleDot: "⊙",
  CircleMinus: "⊖",
  CirclePlus: "⊕",
  CircleTimes: "⊗",
  ClockwiseContourIntegral: "∲",
  CloseCurlyDoubleQuote: "”",
  CloseCurlyQuote: "’",
  Colon: "∷",
  Colone: "⩴",
  Congruent: "≡",
  Conint: "∯",
  ContourIntegral: "∮",
  Copf: "ℂ",
  Coproduct: "∐",
  CounterClockwiseContourIntegral: "∳",
  Cross: "⨯",
  Cscr: "𝒞",
  Cup: "⋓",
  CupCap: "≍",
  DD: "ⅅ",
  DDotrahd: "⤑",
  DJcy: "Ђ",
  DScy: "Ѕ",
  DZcy: "Џ",
  Dagger: "‡",
  Darr: "↡",
  Dashv: "⫤",
  Dcaron: "Ď",
  Dcy: "Д",
  Del: "∇",
  Delta: "Δ",
  Dfr: "𝔇",
  DiacriticalAcute: "´",
  DiacriticalDot: "˙",
  DiacriticalDoubleAcute: "˝",
  DiacriticalGrave: "`",
  DiacriticalTilde: "˜",
  Diamond: "⋄",
  DifferentialD: "ⅆ",
  Dopf: "𝔻",
  Dot: "¨",
  DotDot: "⃜",
  DotEqual: "≐",
  DoubleContourIntegral: "∯",
  DoubleDot: "¨",
  DoubleDownArrow: "⇓",
  DoubleLeftArrow: "⇐",
  DoubleLeftRightArrow: "⇔",
  DoubleLeftTee: "⫤",
  DoubleLongLeftArrow: "⟸",
  DoubleLongLeftRightArrow: "⟺",
  DoubleLongRightArrow: "⟹",
  DoubleRightArrow: "⇒",
  DoubleRightTee: "⊨",
  DoubleUpArrow: "⇑",
  DoubleUpDownArrow: "⇕",
  DoubleVerticalBar: "∥",
  DownArrow: "↓",
  DownArrowBar: "⤓",
  DownArrowUpArrow: "⇵",
  DownBreve: "̑",
  DownLeftRightVector: "⥐",
  DownLeftTeeVector: "⥞",
  DownLeftVector: "↽",
  DownLeftVectorBar: "⥖",
  DownRightTeeVector: "⥟",
  DownRightVector: "⇁",
  DownRightVectorBar: "⥗",
  DownTee: "⊤",
  DownTeeArrow: "↧",
  Downarrow: "⇓",
  Dscr: "𝒟",
  Dstrok: "Đ",
  ENG: "Ŋ",
  ETH: "Ð",
  Eacute: "É",
  Ecaron: "Ě",
  Ecirc: "Ê",
  Ecy: "Э",
  Edot: "Ė",
  Efr: "𝔈",
  Egrave: "È",
  Element: "∈",
  Emacr: "Ē",
  EmptySmallSquare: "◻",
  EmptyVerySmallSquare: "▫",
  Eogon: "Ę",
  Eopf: "𝔼",
  Epsilon: "Ε",
  Equal: "⩵",
  EqualTilde: "≂",
  Equilibrium: "⇌",
  Escr: "ℰ",
  Esim: "⩳",
  Eta: "Η",
  Euml: "Ë",
  Exists: "∃",
  ExponentialE: "ⅇ",
  Fcy: "Ф",
  Ffr: "𝔉",
  FilledSmallSquare: "◼",
  FilledVerySmallSquare: "▪",
  Fopf: "𝔽",
  ForAll: "∀",
  Fouriertrf: "ℱ",
  Fscr: "ℱ",
  GJcy: "Ѓ",
  GT: ">",
  Gamma: "Γ",
  Gammad: "Ϝ",
  Gbreve: "Ğ",
  Gcedil: "Ģ",
  Gcirc: "Ĝ",
  Gcy: "Г",
  Gdot: "Ġ",
  Gfr: "𝔊",
  Gg: "⋙",
  Gopf: "𝔾",
  GreaterEqual: "≥",
  GreaterEqualLess: "⋛",
  GreaterFullEqual: "≧",
  GreaterGreater: "⪢",
  GreaterLess: "≷",
  GreaterSlantEqual: "⩾",
  GreaterTilde: "≳",
  Gscr: "𝒢",
  Gt: "≫",
  HARDcy: "Ъ",
  Hacek: "ˇ",
  Hat: "^",
  Hcirc: "Ĥ",
  Hfr: "ℌ",
  HilbertSpace: "ℋ",
  Hopf: "ℍ",
  HorizontalLine: "─",
  Hscr: "ℋ",
  Hstrok: "Ħ",
  HumpDownHump: "≎",
  HumpEqual: "≏",
  IEcy: "Е",
  IJlig: "Ĳ",
  IOcy: "Ё",
  Iacute: "Í",
  Icirc: "Î",
  Icy: "И",
  Idot: "İ",
  Ifr: "ℑ",
  Igrave: "Ì",
  Im: "ℑ",
  Imacr: "Ī",
  ImaginaryI: "ⅈ",
  Implies: "⇒",
  Int: "∬",
  Integral: "∫",
  Intersection: "⋂",
  InvisibleComma: "⁣",
  InvisibleTimes: "⁢",
  Iogon: "Į",
  Iopf: "𝕀",
  Iota: "Ι",
  Iscr: "ℐ",
  Itilde: "Ĩ",
  Iukcy: "І",
  Iuml: "Ï",
  Jcirc: "Ĵ",
  Jcy: "Й",
  Jfr: "𝔍",
  Jopf: "𝕁",
  Jscr: "𝒥",
  Jsercy: "Ј",
  Jukcy: "Є",
  KHcy: "Х",
  KJcy: "Ќ",
  Kappa: "Κ",
  Kcedil: "Ķ",
  Kcy: "К",
  Kfr: "𝔎",
  Kopf: "𝕂",
  Kscr: "𝒦",
  LJcy: "Љ",
  LT: "<",
  Lacute: "Ĺ",
  Lambda: "Λ",
  Lang: "⟪",
  Laplacetrf: "ℒ",
  Larr: "↞",
  Lcaron: "Ľ",
  Lcedil: "Ļ",
  Lcy: "Л",
  LeftAngleBracket: "⟨",
  LeftArrow: "←",
  LeftArrowBar: "⇤",
  LeftArrowRightArrow: "⇆",
  LeftCeiling: "⌈",
  LeftDoubleBracket: "⟦",
  LeftDownTeeVector: "⥡",
  LeftDownVector: "⇃",
  LeftDownVectorBar: "⥙",
  LeftFloor: "⌊",
  LeftRightArrow: "↔",
  LeftRightVector: "⥎",
  LeftTee: "⊣",
  LeftTeeArrow: "↤",
  LeftTeeVector: "⥚",
  LeftTriangle: "⊲",
  LeftTriangleBar: "⧏",
  LeftTriangleEqual: "⊴",
  LeftUpDownVector: "⥑",
  LeftUpTeeVector: "⥠",
  LeftUpVector: "↿",
  LeftUpVectorBar: "⥘",
  LeftVector: "↼",
  LeftVectorBar: "⥒",
  Leftarrow: "⇐",
  Leftrightarrow: "⇔",
  LessEqualGreater: "⋚",
  LessFullEqual: "≦",
  LessGreater: "≶",
  LessLess: "⪡",
  LessSlantEqual: "⩽",
  LessTilde: "≲",
  Lfr: "𝔏",
  Ll: "⋘",
  Lleftarrow: "⇚",
  Lmidot: "Ŀ",
  LongLeftArrow: "⟵",
  LongLeftRightArrow: "⟷",
  LongRightArrow: "⟶",
  Longleftarrow: "⟸",
  Longleftrightarrow: "⟺",
  Longrightarrow: "⟹",
  Lopf: "𝕃",
  LowerLeftArrow: "↙",
  LowerRightArrow: "↘",
  Lscr: "ℒ",
  Lsh: "↰",
  Lstrok: "Ł",
  Lt: "≪",
  Map: "⤅",
  Mcy: "М",
  MediumSpace: " ",
  Mellintrf: "ℳ",
  Mfr: "𝔐",
  MinusPlus: "∓",
  Mopf: "𝕄",
  Mscr: "ℳ",
  Mu: "Μ",
  NJcy: "Њ",
  Nacute: "Ń",
  Ncaron: "Ň",
  Ncedil: "Ņ",
  Ncy: "Н",
  NegativeMediumSpace: "​",
  NegativeThickSpace: "​",
  NegativeThinSpace: "​",
  NegativeVeryThinSpace: "​",
  NestedGreaterGreater: "≫",
  NestedLessLess: "≪",
  NewLine: `
`,
  Nfr: "𝔑",
  NoBreak: "⁠",
  NonBreakingSpace: " ",
  Nopf: "ℕ",
  Not: "⫬",
  NotCongruent: "≢",
  NotCupCap: "≭",
  NotDoubleVerticalBar: "∦",
  NotElement: "∉",
  NotEqual: "≠",
  NotEqualTilde: "≂̸",
  NotExists: "∄",
  NotGreater: "≯",
  NotGreaterEqual: "≱",
  NotGreaterFullEqual: "≧̸",
  NotGreaterGreater: "≫̸",
  NotGreaterLess: "≹",
  NotGreaterSlantEqual: "⩾̸",
  NotGreaterTilde: "≵",
  NotHumpDownHump: "≎̸",
  NotHumpEqual: "≏̸",
  NotLeftTriangle: "⋪",
  NotLeftTriangleBar: "⧏̸",
  NotLeftTriangleEqual: "⋬",
  NotLess: "≮",
  NotLessEqual: "≰",
  NotLessGreater: "≸",
  NotLessLess: "≪̸",
  NotLessSlantEqual: "⩽̸",
  NotLessTilde: "≴",
  NotNestedGreaterGreater: "⪢̸",
  NotNestedLessLess: "⪡̸",
  NotPrecedes: "⊀",
  NotPrecedesEqual: "⪯̸",
  NotPrecedesSlantEqual: "⋠",
  NotReverseElement: "∌",
  NotRightTriangle: "⋫",
  NotRightTriangleBar: "⧐̸",
  NotRightTriangleEqual: "⋭",
  NotSquareSubset: "⊏̸",
  NotSquareSubsetEqual: "⋢",
  NotSquareSuperset: "⊐̸",
  NotSquareSupersetEqual: "⋣",
  NotSubset: "⊂⃒",
  NotSubsetEqual: "⊈",
  NotSucceeds: "⊁",
  NotSucceedsEqual: "⪰̸",
  NotSucceedsSlantEqual: "⋡",
  NotSucceedsTilde: "≿̸",
  NotSuperset: "⊃⃒",
  NotSupersetEqual: "⊉",
  NotTilde: "≁",
  NotTildeEqual: "≄",
  NotTildeFullEqual: "≇",
  NotTildeTilde: "≉",
  NotVerticalBar: "∤",
  Nscr: "𝒩",
  Ntilde: "Ñ",
  Nu: "Ν",
  OElig: "Œ",
  Oacute: "Ó",
  Ocirc: "Ô",
  Ocy: "О",
  Odblac: "Ő",
  Ofr: "𝔒",
  Ograve: "Ò",
  Omacr: "Ō",
  Omega: "Ω",
  Omicron: "Ο",
  Oopf: "𝕆",
  OpenCurlyDoubleQuote: "“",
  OpenCurlyQuote: "‘",
  Or: "⩔",
  Oscr: "𝒪",
  Oslash: "Ø",
  Otilde: "Õ",
  Otimes: "⨷",
  Ouml: "Ö",
  OverBar: "‾",
  OverBrace: "⏞",
  OverBracket: "⎴",
  OverParenthesis: "⏜",
  PartialD: "∂",
  Pcy: "П",
  Pfr: "𝔓",
  Phi: "Φ",
  Pi: "Π",
  PlusMinus: "±",
  Poincareplane: "ℌ",
  Popf: "ℙ",
  Pr: "⪻",
  Precedes: "≺",
  PrecedesEqual: "⪯",
  PrecedesSlantEqual: "≼",
  PrecedesTilde: "≾",
  Prime: "″",
  Product: "∏",
  Proportion: "∷",
  Proportional: "∝",
  Pscr: "𝒫",
  Psi: "Ψ",
  QUOT: '"',
  Qfr: "𝔔",
  Qopf: "ℚ",
  Qscr: "𝒬",
  RBarr: "⤐",
  REG: "®",
  Racute: "Ŕ",
  Rang: "⟫",
  Rarr: "↠",
  Rarrtl: "⤖",
  Rcaron: "Ř",
  Rcedil: "Ŗ",
  Rcy: "Р",
  Re: "ℜ",
  ReverseElement: "∋",
  ReverseEquilibrium: "⇋",
  ReverseUpEquilibrium: "⥯",
  Rfr: "ℜ",
  Rho: "Ρ",
  RightAngleBracket: "⟩",
  RightArrow: "→",
  RightArrowBar: "⇥",
  RightArrowLeftArrow: "⇄",
  RightCeiling: "⌉",
  RightDoubleBracket: "⟧",
  RightDownTeeVector: "⥝",
  RightDownVector: "⇂",
  RightDownVectorBar: "⥕",
  RightFloor: "⌋",
  RightTee: "⊢",
  RightTeeArrow: "↦",
  RightTeeVector: "⥛",
  RightTriangle: "⊳",
  RightTriangleBar: "⧐",
  RightTriangleEqual: "⊵",
  RightUpDownVector: "⥏",
  RightUpTeeVector: "⥜",
  RightUpVector: "↾",
  RightUpVectorBar: "⥔",
  RightVector: "⇀",
  RightVectorBar: "⥓",
  Rightarrow: "⇒",
  Ropf: "ℝ",
  RoundImplies: "⥰",
  Rrightarrow: "⇛",
  Rscr: "ℛ",
  Rsh: "↱",
  RuleDelayed: "⧴",
  SHCHcy: "Щ",
  SHcy: "Ш",
  SOFTcy: "Ь",
  Sacute: "Ś",
  Sc: "⪼",
  Scaron: "Š",
  Scedil: "Ş",
  Scirc: "Ŝ",
  Scy: "С",
  Sfr: "𝔖",
  ShortDownArrow: "↓",
  ShortLeftArrow: "←",
  ShortRightArrow: "→",
  ShortUpArrow: "↑",
  Sigma: "Σ",
  SmallCircle: "∘",
  Sopf: "𝕊",
  Sqrt: "√",
  Square: "□",
  SquareIntersection: "⊓",
  SquareSubset: "⊏",
  SquareSubsetEqual: "⊑",
  SquareSuperset: "⊐",
  SquareSupersetEqual: "⊒",
  SquareUnion: "⊔",
  Sscr: "𝒮",
  Star: "⋆",
  Sub: "⋐",
  Subset: "⋐",
  SubsetEqual: "⊆",
  Succeeds: "≻",
  SucceedsEqual: "⪰",
  SucceedsSlantEqual: "≽",
  SucceedsTilde: "≿",
  SuchThat: "∋",
  Sum: "∑",
  Sup: "⋑",
  Superset: "⊃",
  SupersetEqual: "⊇",
  Supset: "⋑",
  THORN: "Þ",
  TRADE: "™",
  TSHcy: "Ћ",
  TScy: "Ц",
  Tab: "	",
  Tau: "Τ",
  Tcaron: "Ť",
  Tcedil: "Ţ",
  Tcy: "Т",
  Tfr: "𝔗",
  Therefore: "∴",
  Theta: "Θ",
  ThickSpace: "  ",
  ThinSpace: " ",
  Tilde: "∼",
  TildeEqual: "≃",
  TildeFullEqual: "≅",
  TildeTilde: "≈",
  Topf: "𝕋",
  TripleDot: "⃛",
  Tscr: "𝒯",
  Tstrok: "Ŧ",
  Uacute: "Ú",
  Uarr: "↟",
  Uarrocir: "⥉",
  Ubrcy: "Ў",
  Ubreve: "Ŭ",
  Ucirc: "Û",
  Ucy: "У",
  Udblac: "Ű",
  Ufr: "𝔘",
  Ugrave: "Ù",
  Umacr: "Ū",
  UnderBar: "_",
  UnderBrace: "⏟",
  UnderBracket: "⎵",
  UnderParenthesis: "⏝",
  Union: "⋃",
  UnionPlus: "⊎",
  Uogon: "Ų",
  Uopf: "𝕌",
  UpArrow: "↑",
  UpArrowBar: "⤒",
  UpArrowDownArrow: "⇅",
  UpDownArrow: "↕",
  UpEquilibrium: "⥮",
  UpTee: "⊥",
  UpTeeArrow: "↥",
  Uparrow: "⇑",
  Updownarrow: "⇕",
  UpperLeftArrow: "↖",
  UpperRightArrow: "↗",
  Upsi: "ϒ",
  Upsilon: "Υ",
  Uring: "Ů",
  Uscr: "𝒰",
  Utilde: "Ũ",
  Uuml: "Ü",
  VDash: "⊫",
  Vbar: "⫫",
  Vcy: "В",
  Vdash: "⊩",
  Vdashl: "⫦",
  Vee: "⋁",
  Verbar: "‖",
  Vert: "‖",
  VerticalBar: "∣",
  VerticalLine: "|",
  VerticalSeparator: "❘",
  VerticalTilde: "≀",
  VeryThinSpace: " ",
  Vfr: "𝔙",
  Vopf: "𝕍",
  Vscr: "𝒱",
  Vvdash: "⊪",
  Wcirc: "Ŵ",
  Wedge: "⋀",
  Wfr: "𝔚",
  Wopf: "𝕎",
  Wscr: "𝒲",
  Xfr: "𝔛",
  Xi: "Ξ",
  Xopf: "𝕏",
  Xscr: "𝒳",
  YAcy: "Я",
  YIcy: "Ї",
  YUcy: "Ю",
  Yacute: "Ý",
  Ycirc: "Ŷ",
  Ycy: "Ы",
  Yfr: "𝔜",
  Yopf: "𝕐",
  Yscr: "𝒴",
  Yuml: "Ÿ",
  ZHcy: "Ж",
  Zacute: "Ź",
  Zcaron: "Ž",
  Zcy: "З",
  Zdot: "Ż",
  ZeroWidthSpace: "​",
  Zeta: "Ζ",
  Zfr: "ℨ",
  Zopf: "ℤ",
  Zscr: "𝒵",
  aacute: "á",
  abreve: "ă",
  ac: "∾",
  acE: "∾̳",
  acd: "∿",
  acirc: "â",
  acute: "´",
  acy: "а",
  aelig: "æ",
  af: "⁡",
  afr: "𝔞",
  agrave: "à",
  alefsym: "ℵ",
  aleph: "ℵ",
  alpha: "α",
  amacr: "ā",
  amalg: "⨿",
  amp: "&",
  and: "∧",
  andand: "⩕",
  andd: "⩜",
  andslope: "⩘",
  andv: "⩚",
  ang: "∠",
  ange: "⦤",
  angle: "∠",
  angmsd: "∡",
  angmsdaa: "⦨",
  angmsdab: "⦩",
  angmsdac: "⦪",
  angmsdad: "⦫",
  angmsdae: "⦬",
  angmsdaf: "⦭",
  angmsdag: "⦮",
  angmsdah: "⦯",
  angrt: "∟",
  angrtvb: "⊾",
  angrtvbd: "⦝",
  angsph: "∢",
  angst: "Å",
  angzarr: "⍼",
  aogon: "ą",
  aopf: "𝕒",
  ap: "≈",
  apE: "⩰",
  apacir: "⩯",
  ape: "≊",
  apid: "≋",
  apos: "'",
  approx: "≈",
  approxeq: "≊",
  aring: "å",
  ascr: "𝒶",
  ast: "*",
  asymp: "≈",
  asympeq: "≍",
  atilde: "ã",
  auml: "ä",
  awconint: "∳",
  awint: "⨑",
  bNot: "⫭",
  backcong: "≌",
  backepsilon: "϶",
  backprime: "‵",
  backsim: "∽",
  backsimeq: "⋍",
  barvee: "⊽",
  barwed: "⌅",
  barwedge: "⌅",
  bbrk: "⎵",
  bbrktbrk: "⎶",
  bcong: "≌",
  bcy: "б",
  bdquo: "„",
  becaus: "∵",
  because: "∵",
  bemptyv: "⦰",
  bepsi: "϶",
  bernou: "ℬ",
  beta: "β",
  beth: "ℶ",
  between: "≬",
  bfr: "𝔟",
  bigcap: "⋂",
  bigcirc: "◯",
  bigcup: "⋃",
  bigodot: "⨀",
  bigoplus: "⨁",
  bigotimes: "⨂",
  bigsqcup: "⨆",
  bigstar: "★",
  bigtriangledown: "▽",
  bigtriangleup: "△",
  biguplus: "⨄",
  bigvee: "⋁",
  bigwedge: "⋀",
  bkarow: "⤍",
  blacklozenge: "⧫",
  blacksquare: "▪",
  blacktriangle: "▴",
  blacktriangledown: "▾",
  blacktriangleleft: "◂",
  blacktriangleright: "▸",
  blank: "␣",
  blk12: "▒",
  blk14: "░",
  blk34: "▓",
  block: "█",
  bne: "=⃥",
  bnequiv: "≡⃥",
  bnot: "⌐",
  bopf: "𝕓",
  bot: "⊥",
  bottom: "⊥",
  bowtie: "⋈",
  boxDL: "╗",
  boxDR: "╔",
  boxDl: "╖",
  boxDr: "╓",
  boxH: "═",
  boxHD: "╦",
  boxHU: "╩",
  boxHd: "╤",
  boxHu: "╧",
  boxUL: "╝",
  boxUR: "╚",
  boxUl: "╜",
  boxUr: "╙",
  boxV: "║",
  boxVH: "╬",
  boxVL: "╣",
  boxVR: "╠",
  boxVh: "╫",
  boxVl: "╢",
  boxVr: "╟",
  boxbox: "⧉",
  boxdL: "╕",
  boxdR: "╒",
  boxdl: "┐",
  boxdr: "┌",
  boxh: "─",
  boxhD: "╥",
  boxhU: "╨",
  boxhd: "┬",
  boxhu: "┴",
  boxminus: "⊟",
  boxplus: "⊞",
  boxtimes: "⊠",
  boxuL: "╛",
  boxuR: "╘",
  boxul: "┘",
  boxur: "└",
  boxv: "│",
  boxvH: "╪",
  boxvL: "╡",
  boxvR: "╞",
  boxvh: "┼",
  boxvl: "┤",
  boxvr: "├",
  bprime: "‵",
  breve: "˘",
  brvbar: "¦",
  bscr: "𝒷",
  bsemi: "⁏",
  bsim: "∽",
  bsime: "⋍",
  bsol: "\\",
  bsolb: "⧅",
  bsolhsub: "⟈",
  bull: "•",
  bullet: "•",
  bump: "≎",
  bumpE: "⪮",
  bumpe: "≏",
  bumpeq: "≏",
  cacute: "ć",
  cap: "∩",
  capand: "⩄",
  capbrcup: "⩉",
  capcap: "⩋",
  capcup: "⩇",
  capdot: "⩀",
  caps: "∩︀",
  caret: "⁁",
  caron: "ˇ",
  ccaps: "⩍",
  ccaron: "č",
  ccedil: "ç",
  ccirc: "ĉ",
  ccups: "⩌",
  ccupssm: "⩐",
  cdot: "ċ",
  cedil: "¸",
  cemptyv: "⦲",
  cent: "¢",
  centerdot: "·",
  cfr: "𝔠",
  chcy: "ч",
  check: "✓",
  checkmark: "✓",
  chi: "χ",
  cir: "○",
  cirE: "⧃",
  circ: "ˆ",
  circeq: "≗",
  circlearrowleft: "↺",
  circlearrowright: "↻",
  circledR: "®",
  circledS: "Ⓢ",
  circledast: "⊛",
  circledcirc: "⊚",
  circleddash: "⊝",
  cire: "≗",
  cirfnint: "⨐",
  cirmid: "⫯",
  cirscir: "⧂",
  clubs: "♣",
  clubsuit: "♣",
  colon: ":",
  colone: "≔",
  coloneq: "≔",
  comma: ",",
  commat: "@",
  comp: "∁",
  compfn: "∘",
  complement: "∁",
  complexes: "ℂ",
  cong: "≅",
  congdot: "⩭",
  conint: "∮",
  copf: "𝕔",
  coprod: "∐",
  copy: "©",
  copysr: "℗",
  crarr: "↵",
  cross: "✗",
  cscr: "𝒸",
  csub: "⫏",
  csube: "⫑",
  csup: "⫐",
  csupe: "⫒",
  ctdot: "⋯",
  cudarrl: "⤸",
  cudarrr: "⤵",
  cuepr: "⋞",
  cuesc: "⋟",
  cularr: "↶",
  cularrp: "⤽",
  cup: "∪",
  cupbrcap: "⩈",
  cupcap: "⩆",
  cupcup: "⩊",
  cupdot: "⊍",
  cupor: "⩅",
  cups: "∪︀",
  curarr: "↷",
  curarrm: "⤼",
  curlyeqprec: "⋞",
  curlyeqsucc: "⋟",
  curlyvee: "⋎",
  curlywedge: "⋏",
  curren: "¤",
  curvearrowleft: "↶",
  curvearrowright: "↷",
  cuvee: "⋎",
  cuwed: "⋏",
  cwconint: "∲",
  cwint: "∱",
  cylcty: "⌭",
  dArr: "⇓",
  dHar: "⥥",
  dagger: "†",
  daleth: "ℸ",
  darr: "↓",
  dash: "‐",
  dashv: "⊣",
  dbkarow: "⤏",
  dblac: "˝",
  dcaron: "ď",
  dcy: "д",
  dd: "ⅆ",
  ddagger: "‡",
  ddarr: "⇊",
  ddotseq: "⩷",
  deg: "°",
  delta: "δ",
  demptyv: "⦱",
  dfisht: "⥿",
  dfr: "𝔡",
  dharl: "⇃",
  dharr: "⇂",
  diam: "⋄",
  diamond: "⋄",
  diamondsuit: "♦",
  diams: "♦",
  die: "¨",
  digamma: "ϝ",
  disin: "⋲",
  div: "÷",
  divide: "÷",
  divideontimes: "⋇",
  divonx: "⋇",
  djcy: "ђ",
  dlcorn: "⌞",
  dlcrop: "⌍",
  dollar: "$",
  dopf: "𝕕",
  dot: "˙",
  doteq: "≐",
  doteqdot: "≑",
  dotminus: "∸",
  dotplus: "∔",
  dotsquare: "⊡",
  doublebarwedge: "⌆",
  downarrow: "↓",
  downdownarrows: "⇊",
  downharpoonleft: "⇃",
  downharpoonright: "⇂",
  drbkarow: "⤐",
  drcorn: "⌟",
  drcrop: "⌌",
  dscr: "𝒹",
  dscy: "ѕ",
  dsol: "⧶",
  dstrok: "đ",
  dtdot: "⋱",
  dtri: "▿",
  dtrif: "▾",
  duarr: "⇵",
  duhar: "⥯",
  dwangle: "⦦",
  dzcy: "џ",
  dzigrarr: "⟿",
  eDDot: "⩷",
  eDot: "≑",
  eacute: "é",
  easter: "⩮",
  ecaron: "ě",
  ecir: "≖",
  ecirc: "ê",
  ecolon: "≕",
  ecy: "э",
  edot: "ė",
  ee: "ⅇ",
  efDot: "≒",
  efr: "𝔢",
  eg: "⪚",
  egrave: "è",
  egs: "⪖",
  egsdot: "⪘",
  el: "⪙",
  elinters: "⏧",
  ell: "ℓ",
  els: "⪕",
  elsdot: "⪗",
  emacr: "ē",
  empty: "∅",
  emptyset: "∅",
  emptyv: "∅",
  emsp13: " ",
  emsp14: " ",
  emsp: " ",
  eng: "ŋ",
  ensp: " ",
  eogon: "ę",
  eopf: "𝕖",
  epar: "⋕",
  eparsl: "⧣",
  eplus: "⩱",
  epsi: "ε",
  epsilon: "ε",
  epsiv: "ϵ",
  eqcirc: "≖",
  eqcolon: "≕",
  eqsim: "≂",
  eqslantgtr: "⪖",
  eqslantless: "⪕",
  equals: "=",
  equest: "≟",
  equiv: "≡",
  equivDD: "⩸",
  eqvparsl: "⧥",
  erDot: "≓",
  erarr: "⥱",
  escr: "ℯ",
  esdot: "≐",
  esim: "≂",
  eta: "η",
  eth: "ð",
  euml: "ë",
  euro: "€",
  excl: "!",
  exist: "∃",
  expectation: "ℰ",
  exponentiale: "ⅇ",
  fallingdotseq: "≒",
  fcy: "ф",
  female: "♀",
  ffilig: "ﬃ",
  fflig: "ﬀ",
  ffllig: "ﬄ",
  ffr: "𝔣",
  filig: "ﬁ",
  fjlig: "fj",
  flat: "♭",
  fllig: "ﬂ",
  fltns: "▱",
  fnof: "ƒ",
  fopf: "𝕗",
  forall: "∀",
  fork: "⋔",
  forkv: "⫙",
  fpartint: "⨍",
  frac12: "½",
  frac13: "⅓",
  frac14: "¼",
  frac15: "⅕",
  frac16: "⅙",
  frac18: "⅛",
  frac23: "⅔",
  frac25: "⅖",
  frac34: "¾",
  frac35: "⅗",
  frac38: "⅜",
  frac45: "⅘",
  frac56: "⅚",
  frac58: "⅝",
  frac78: "⅞",
  frasl: "⁄",
  frown: "⌢",
  fscr: "𝒻",
  gE: "≧",
  gEl: "⪌",
  gacute: "ǵ",
  gamma: "γ",
  gammad: "ϝ",
  gap: "⪆",
  gbreve: "ğ",
  gcirc: "ĝ",
  gcy: "г",
  gdot: "ġ",
  ge: "≥",
  gel: "⋛",
  geq: "≥",
  geqq: "≧",
  geqslant: "⩾",
  ges: "⩾",
  gescc: "⪩",
  gesdot: "⪀",
  gesdoto: "⪂",
  gesdotol: "⪄",
  gesl: "⋛︀",
  gesles: "⪔",
  gfr: "𝔤",
  gg: "≫",
  ggg: "⋙",
  gimel: "ℷ",
  gjcy: "ѓ",
  gl: "≷",
  glE: "⪒",
  gla: "⪥",
  glj: "⪤",
  gnE: "≩",
  gnap: "⪊",
  gnapprox: "⪊",
  gne: "⪈",
  gneq: "⪈",
  gneqq: "≩",
  gnsim: "⋧",
  gopf: "𝕘",
  grave: "`",
  gscr: "ℊ",
  gsim: "≳",
  gsime: "⪎",
  gsiml: "⪐",
  gt: ">",
  gtcc: "⪧",
  gtcir: "⩺",
  gtdot: "⋗",
  gtlPar: "⦕",
  gtquest: "⩼",
  gtrapprox: "⪆",
  gtrarr: "⥸",
  gtrdot: "⋗",
  gtreqless: "⋛",
  gtreqqless: "⪌",
  gtrless: "≷",
  gtrsim: "≳",
  gvertneqq: "≩︀",
  gvnE: "≩︀",
  hArr: "⇔",
  hairsp: " ",
  half: "½",
  hamilt: "ℋ",
  hardcy: "ъ",
  harr: "↔",
  harrcir: "⥈",
  harrw: "↭",
  hbar: "ℏ",
  hcirc: "ĥ",
  hearts: "♥",
  heartsuit: "♥",
  hellip: "…",
  hercon: "⊹",
  hfr: "𝔥",
  hksearow: "⤥",
  hkswarow: "⤦",
  hoarr: "⇿",
  homtht: "∻",
  hookleftarrow: "↩",
  hookrightarrow: "↪",
  hopf: "𝕙",
  horbar: "―",
  hscr: "𝒽",
  hslash: "ℏ",
  hstrok: "ħ",
  hybull: "⁃",
  hyphen: "‐",
  iacute: "í",
  ic: "⁣",
  icirc: "î",
  icy: "и",
  iecy: "е",
  iexcl: "¡",
  iff: "⇔",
  ifr: "𝔦",
  igrave: "ì",
  ii: "ⅈ",
  iiiint: "⨌",
  iiint: "∭",
  iinfin: "⧜",
  iiota: "℩",
  ijlig: "ĳ",
  imacr: "ī",
  image: "ℑ",
  imagline: "ℐ",
  imagpart: "ℑ",
  imath: "ı",
  imof: "⊷",
  imped: "Ƶ",
  in: "∈",
  incare: "℅",
  infin: "∞",
  infintie: "⧝",
  inodot: "ı",
  int: "∫",
  intcal: "⊺",
  integers: "ℤ",
  intercal: "⊺",
  intlarhk: "⨗",
  intprod: "⨼",
  iocy: "ё",
  iogon: "į",
  iopf: "𝕚",
  iota: "ι",
  iprod: "⨼",
  iquest: "¿",
  iscr: "𝒾",
  isin: "∈",
  isinE: "⋹",
  isindot: "⋵",
  isins: "⋴",
  isinsv: "⋳",
  isinv: "∈",
  it: "⁢",
  itilde: "ĩ",
  iukcy: "і",
  iuml: "ï",
  jcirc: "ĵ",
  jcy: "й",
  jfr: "𝔧",
  jmath: "ȷ",
  jopf: "𝕛",
  jscr: "𝒿",
  jsercy: "ј",
  jukcy: "є",
  kappa: "κ",
  kappav: "ϰ",
  kcedil: "ķ",
  kcy: "к",
  kfr: "𝔨",
  kgreen: "ĸ",
  khcy: "х",
  kjcy: "ќ",
  kopf: "𝕜",
  kscr: "𝓀",
  lAarr: "⇚",
  lArr: "⇐",
  lAtail: "⤛",
  lBarr: "⤎",
  lE: "≦",
  lEg: "⪋",
  lHar: "⥢",
  lacute: "ĺ",
  laemptyv: "⦴",
  lagran: "ℒ",
  lambda: "λ",
  lang: "⟨",
  langd: "⦑",
  langle: "⟨",
  lap: "⪅",
  laquo: "«",
  larr: "←",
  larrb: "⇤",
  larrbfs: "⤟",
  larrfs: "⤝",
  larrhk: "↩",
  larrlp: "↫",
  larrpl: "⤹",
  larrsim: "⥳",
  larrtl: "↢",
  lat: "⪫",
  latail: "⤙",
  late: "⪭",
  lates: "⪭︀",
  lbarr: "⤌",
  lbbrk: "❲",
  lbrace: "{",
  lbrack: "[",
  lbrke: "⦋",
  lbrksld: "⦏",
  lbrkslu: "⦍",
  lcaron: "ľ",
  lcedil: "ļ",
  lceil: "⌈",
  lcub: "{",
  lcy: "л",
  ldca: "⤶",
  ldquo: "“",
  ldquor: "„",
  ldrdhar: "⥧",
  ldrushar: "⥋",
  ldsh: "↲",
  le: "≤",
  leftarrow: "←",
  leftarrowtail: "↢",
  leftharpoondown: "↽",
  leftharpoonup: "↼",
  leftleftarrows: "⇇",
  leftrightarrow: "↔",
  leftrightarrows: "⇆",
  leftrightharpoons: "⇋",
  leftrightsquigarrow: "↭",
  leftthreetimes: "⋋",
  leg: "⋚",
  leq: "≤",
  leqq: "≦",
  leqslant: "⩽",
  les: "⩽",
  lescc: "⪨",
  lesdot: "⩿",
  lesdoto: "⪁",
  lesdotor: "⪃",
  lesg: "⋚︀",
  lesges: "⪓",
  lessapprox: "⪅",
  lessdot: "⋖",
  lesseqgtr: "⋚",
  lesseqqgtr: "⪋",
  lessgtr: "≶",
  lesssim: "≲",
  lfisht: "⥼",
  lfloor: "⌊",
  lfr: "𝔩",
  lg: "≶",
  lgE: "⪑",
  lhard: "↽",
  lharu: "↼",
  lharul: "⥪",
  lhblk: "▄",
  ljcy: "љ",
  ll: "≪",
  llarr: "⇇",
  llcorner: "⌞",
  llhard: "⥫",
  lltri: "◺",
  lmidot: "ŀ",
  lmoust: "⎰",
  lmoustache: "⎰",
  lnE: "≨",
  lnap: "⪉",
  lnapprox: "⪉",
  lne: "⪇",
  lneq: "⪇",
  lneqq: "≨",
  lnsim: "⋦",
  loang: "⟬",
  loarr: "⇽",
  lobrk: "⟦",
  longleftarrow: "⟵",
  longleftrightarrow: "⟷",
  longmapsto: "⟼",
  longrightarrow: "⟶",
  looparrowleft: "↫",
  looparrowright: "↬",
  lopar: "⦅",
  lopf: "𝕝",
  loplus: "⨭",
  lotimes: "⨴",
  lowast: "∗",
  lowbar: "_",
  loz: "◊",
  lozenge: "◊",
  lozf: "⧫",
  lpar: "(",
  lparlt: "⦓",
  lrarr: "⇆",
  lrcorner: "⌟",
  lrhar: "⇋",
  lrhard: "⥭",
  lrm: "‎",
  lrtri: "⊿",
  lsaquo: "‹",
  lscr: "𝓁",
  lsh: "↰",
  lsim: "≲",
  lsime: "⪍",
  lsimg: "⪏",
  lsqb: "[",
  lsquo: "‘",
  lsquor: "‚",
  lstrok: "ł",
  lt: "<",
  ltcc: "⪦",
  ltcir: "⩹",
  ltdot: "⋖",
  lthree: "⋋",
  ltimes: "⋉",
  ltlarr: "⥶",
  ltquest: "⩻",
  ltrPar: "⦖",
  ltri: "◃",
  ltrie: "⊴",
  ltrif: "◂",
  lurdshar: "⥊",
  luruhar: "⥦",
  lvertneqq: "≨︀",
  lvnE: "≨︀",
  mDDot: "∺",
  macr: "¯",
  male: "♂",
  malt: "✠",
  maltese: "✠",
  map: "↦",
  mapsto: "↦",
  mapstodown: "↧",
  mapstoleft: "↤",
  mapstoup: "↥",
  marker: "▮",
  mcomma: "⨩",
  mcy: "м",
  mdash: "—",
  measuredangle: "∡",
  mfr: "𝔪",
  mho: "℧",
  micro: "µ",
  mid: "∣",
  midast: "*",
  midcir: "⫰",
  middot: "·",
  minus: "−",
  minusb: "⊟",
  minusd: "∸",
  minusdu: "⨪",
  mlcp: "⫛",
  mldr: "…",
  mnplus: "∓",
  models: "⊧",
  mopf: "𝕞",
  mp: "∓",
  mscr: "𝓂",
  mstpos: "∾",
  mu: "μ",
  multimap: "⊸",
  mumap: "⊸",
  nGg: "⋙̸",
  nGt: "≫⃒",
  nGtv: "≫̸",
  nLeftarrow: "⇍",
  nLeftrightarrow: "⇎",
  nLl: "⋘̸",
  nLt: "≪⃒",
  nLtv: "≪̸",
  nRightarrow: "⇏",
  nVDash: "⊯",
  nVdash: "⊮",
  nabla: "∇",
  nacute: "ń",
  nang: "∠⃒",
  nap: "≉",
  napE: "⩰̸",
  napid: "≋̸",
  napos: "ŉ",
  napprox: "≉",
  natur: "♮",
  natural: "♮",
  naturals: "ℕ",
  nbsp: " ",
  nbump: "≎̸",
  nbumpe: "≏̸",
  ncap: "⩃",
  ncaron: "ň",
  ncedil: "ņ",
  ncong: "≇",
  ncongdot: "⩭̸",
  ncup: "⩂",
  ncy: "н",
  ndash: "–",
  ne: "≠",
  neArr: "⇗",
  nearhk: "⤤",
  nearr: "↗",
  nearrow: "↗",
  nedot: "≐̸",
  nequiv: "≢",
  nesear: "⤨",
  nesim: "≂̸",
  nexist: "∄",
  nexists: "∄",
  nfr: "𝔫",
  ngE: "≧̸",
  nge: "≱",
  ngeq: "≱",
  ngeqq: "≧̸",
  ngeqslant: "⩾̸",
  nges: "⩾̸",
  ngsim: "≵",
  ngt: "≯",
  ngtr: "≯",
  nhArr: "⇎",
  nharr: "↮",
  nhpar: "⫲",
  ni: "∋",
  nis: "⋼",
  nisd: "⋺",
  niv: "∋",
  njcy: "њ",
  nlArr: "⇍",
  nlE: "≦̸",
  nlarr: "↚",
  nldr: "‥",
  nle: "≰",
  nleftarrow: "↚",
  nleftrightarrow: "↮",
  nleq: "≰",
  nleqq: "≦̸",
  nleqslant: "⩽̸",
  nles: "⩽̸",
  nless: "≮",
  nlsim: "≴",
  nlt: "≮",
  nltri: "⋪",
  nltrie: "⋬",
  nmid: "∤",
  nopf: "𝕟",
  not: "¬",
  notin: "∉",
  notinE: "⋹̸",
  notindot: "⋵̸",
  notinva: "∉",
  notinvb: "⋷",
  notinvc: "⋶",
  notni: "∌",
  notniva: "∌",
  notnivb: "⋾",
  notnivc: "⋽",
  npar: "∦",
  nparallel: "∦",
  nparsl: "⫽⃥",
  npart: "∂̸",
  npolint: "⨔",
  npr: "⊀",
  nprcue: "⋠",
  npre: "⪯̸",
  nprec: "⊀",
  npreceq: "⪯̸",
  nrArr: "⇏",
  nrarr: "↛",
  nrarrc: "⤳̸",
  nrarrw: "↝̸",
  nrightarrow: "↛",
  nrtri: "⋫",
  nrtrie: "⋭",
  nsc: "⊁",
  nsccue: "⋡",
  nsce: "⪰̸",
  nscr: "𝓃",
  nshortmid: "∤",
  nshortparallel: "∦",
  nsim: "≁",
  nsime: "≄",
  nsimeq: "≄",
  nsmid: "∤",
  nspar: "∦",
  nsqsube: "⋢",
  nsqsupe: "⋣",
  nsub: "⊄",
  nsubE: "⫅̸",
  nsube: "⊈",
  nsubset: "⊂⃒",
  nsubseteq: "⊈",
  nsubseteqq: "⫅̸",
  nsucc: "⊁",
  nsucceq: "⪰̸",
  nsup: "⊅",
  nsupE: "⫆̸",
  nsupe: "⊉",
  nsupset: "⊃⃒",
  nsupseteq: "⊉",
  nsupseteqq: "⫆̸",
  ntgl: "≹",
  ntilde: "ñ",
  ntlg: "≸",
  ntriangleleft: "⋪",
  ntrianglelefteq: "⋬",
  ntriangleright: "⋫",
  ntrianglerighteq: "⋭",
  nu: "ν",
  num: "#",
  numero: "№",
  numsp: " ",
  nvDash: "⊭",
  nvHarr: "⤄",
  nvap: "≍⃒",
  nvdash: "⊬",
  nvge: "≥⃒",
  nvgt: ">⃒",
  nvinfin: "⧞",
  nvlArr: "⤂",
  nvle: "≤⃒",
  nvlt: "<⃒",
  nvltrie: "⊴⃒",
  nvrArr: "⤃",
  nvrtrie: "⊵⃒",
  nvsim: "∼⃒",
  nwArr: "⇖",
  nwarhk: "⤣",
  nwarr: "↖",
  nwarrow: "↖",
  nwnear: "⤧",
  oS: "Ⓢ",
  oacute: "ó",
  oast: "⊛",
  ocir: "⊚",
  ocirc: "ô",
  ocy: "о",
  odash: "⊝",
  odblac: "ő",
  odiv: "⨸",
  odot: "⊙",
  odsold: "⦼",
  oelig: "œ",
  ofcir: "⦿",
  ofr: "𝔬",
  ogon: "˛",
  ograve: "ò",
  ogt: "⧁",
  ohbar: "⦵",
  ohm: "Ω",
  oint: "∮",
  olarr: "↺",
  olcir: "⦾",
  olcross: "⦻",
  oline: "‾",
  olt: "⧀",
  omacr: "ō",
  omega: "ω",
  omicron: "ο",
  omid: "⦶",
  ominus: "⊖",
  oopf: "𝕠",
  opar: "⦷",
  operp: "⦹",
  oplus: "⊕",
  or: "∨",
  orarr: "↻",
  ord: "⩝",
  order: "ℴ",
  orderof: "ℴ",
  ordf: "ª",
  ordm: "º",
  origof: "⊶",
  oror: "⩖",
  orslope: "⩗",
  orv: "⩛",
  oscr: "ℴ",
  oslash: "ø",
  osol: "⊘",
  otilde: "õ",
  otimes: "⊗",
  otimesas: "⨶",
  ouml: "ö",
  ovbar: "⌽",
  par: "∥",
  para: "¶",
  parallel: "∥",
  parsim: "⫳",
  parsl: "⫽",
  part: "∂",
  pcy: "п",
  percnt: "%",
  period: ".",
  permil: "‰",
  perp: "⊥",
  pertenk: "‱",
  pfr: "𝔭",
  phi: "φ",
  phiv: "ϕ",
  phmmat: "ℳ",
  phone: "☎",
  pi: "π",
  pitchfork: "⋔",
  piv: "ϖ",
  planck: "ℏ",
  planckh: "ℎ",
  plankv: "ℏ",
  plus: "+",
  plusacir: "⨣",
  plusb: "⊞",
  pluscir: "⨢",
  plusdo: "∔",
  plusdu: "⨥",
  pluse: "⩲",
  plusmn: "±",
  plussim: "⨦",
  plustwo: "⨧",
  pm: "±",
  pointint: "⨕",
  popf: "𝕡",
  pound: "£",
  pr: "≺",
  prE: "⪳",
  prap: "⪷",
  prcue: "≼",
  pre: "⪯",
  prec: "≺",
  precapprox: "⪷",
  preccurlyeq: "≼",
  preceq: "⪯",
  precnapprox: "⪹",
  precneqq: "⪵",
  precnsim: "⋨",
  precsim: "≾",
  prime: "′",
  primes: "ℙ",
  prnE: "⪵",
  prnap: "⪹",
  prnsim: "⋨",
  prod: "∏",
  profalar: "⌮",
  profline: "⌒",
  profsurf: "⌓",
  prop: "∝",
  propto: "∝",
  prsim: "≾",
  prurel: "⊰",
  pscr: "𝓅",
  psi: "ψ",
  puncsp: " ",
  qfr: "𝔮",
  qint: "⨌",
  qopf: "𝕢",
  qprime: "⁗",
  qscr: "𝓆",
  quaternions: "ℍ",
  quatint: "⨖",
  quest: "?",
  questeq: "≟",
  quot: '"',
  rAarr: "⇛",
  rArr: "⇒",
  rAtail: "⤜",
  rBarr: "⤏",
  rHar: "⥤",
  race: "∽̱",
  racute: "ŕ",
  radic: "√",
  raemptyv: "⦳",
  rang: "⟩",
  rangd: "⦒",
  range: "⦥",
  rangle: "⟩",
  raquo: "»",
  rarr: "→",
  rarrap: "⥵",
  rarrb: "⇥",
  rarrbfs: "⤠",
  rarrc: "⤳",
  rarrfs: "⤞",
  rarrhk: "↪",
  rarrlp: "↬",
  rarrpl: "⥅",
  rarrsim: "⥴",
  rarrtl: "↣",
  rarrw: "↝",
  ratail: "⤚",
  ratio: "∶",
  rationals: "ℚ",
  rbarr: "⤍",
  rbbrk: "❳",
  rbrace: "}",
  rbrack: "]",
  rbrke: "⦌",
  rbrksld: "⦎",
  rbrkslu: "⦐",
  rcaron: "ř",
  rcedil: "ŗ",
  rceil: "⌉",
  rcub: "}",
  rcy: "р",
  rdca: "⤷",
  rdldhar: "⥩",
  rdquo: "”",
  rdquor: "”",
  rdsh: "↳",
  real: "ℜ",
  realine: "ℛ",
  realpart: "ℜ",
  reals: "ℝ",
  rect: "▭",
  reg: "®",
  rfisht: "⥽",
  rfloor: "⌋",
  rfr: "𝔯",
  rhard: "⇁",
  rharu: "⇀",
  rharul: "⥬",
  rho: "ρ",
  rhov: "ϱ",
  rightarrow: "→",
  rightarrowtail: "↣",
  rightharpoondown: "⇁",
  rightharpoonup: "⇀",
  rightleftarrows: "⇄",
  rightleftharpoons: "⇌",
  rightrightarrows: "⇉",
  rightsquigarrow: "↝",
  rightthreetimes: "⋌",
  ring: "˚",
  risingdotseq: "≓",
  rlarr: "⇄",
  rlhar: "⇌",
  rlm: "‏",
  rmoust: "⎱",
  rmoustache: "⎱",
  rnmid: "⫮",
  roang: "⟭",
  roarr: "⇾",
  robrk: "⟧",
  ropar: "⦆",
  ropf: "𝕣",
  roplus: "⨮",
  rotimes: "⨵",
  rpar: ")",
  rpargt: "⦔",
  rppolint: "⨒",
  rrarr: "⇉",
  rsaquo: "›",
  rscr: "𝓇",
  rsh: "↱",
  rsqb: "]",
  rsquo: "’",
  rsquor: "’",
  rthree: "⋌",
  rtimes: "⋊",
  rtri: "▹",
  rtrie: "⊵",
  rtrif: "▸",
  rtriltri: "⧎",
  ruluhar: "⥨",
  rx: "℞",
  sacute: "ś",
  sbquo: "‚",
  sc: "≻",
  scE: "⪴",
  scap: "⪸",
  scaron: "š",
  sccue: "≽",
  sce: "⪰",
  scedil: "ş",
  scirc: "ŝ",
  scnE: "⪶",
  scnap: "⪺",
  scnsim: "⋩",
  scpolint: "⨓",
  scsim: "≿",
  scy: "с",
  sdot: "⋅",
  sdotb: "⊡",
  sdote: "⩦",
  seArr: "⇘",
  searhk: "⤥",
  searr: "↘",
  searrow: "↘",
  sect: "§",
  semi: ";",
  seswar: "⤩",
  setminus: "∖",
  setmn: "∖",
  sext: "✶",
  sfr: "𝔰",
  sfrown: "⌢",
  sharp: "♯",
  shchcy: "щ",
  shcy: "ш",
  shortmid: "∣",
  shortparallel: "∥",
  shy: "­",
  sigma: "σ",
  sigmaf: "ς",
  sigmav: "ς",
  sim: "∼",
  simdot: "⩪",
  sime: "≃",
  simeq: "≃",
  simg: "⪞",
  simgE: "⪠",
  siml: "⪝",
  simlE: "⪟",
  simne: "≆",
  simplus: "⨤",
  simrarr: "⥲",
  slarr: "←",
  smallsetminus: "∖",
  smashp: "⨳",
  smeparsl: "⧤",
  smid: "∣",
  smile: "⌣",
  smt: "⪪",
  smte: "⪬",
  smtes: "⪬︀",
  softcy: "ь",
  sol: "/",
  solb: "⧄",
  solbar: "⌿",
  sopf: "𝕤",
  spades: "♠",
  spadesuit: "♠",
  spar: "∥",
  sqcap: "⊓",
  sqcaps: "⊓︀",
  sqcup: "⊔",
  sqcups: "⊔︀",
  sqsub: "⊏",
  sqsube: "⊑",
  sqsubset: "⊏",
  sqsubseteq: "⊑",
  sqsup: "⊐",
  sqsupe: "⊒",
  sqsupset: "⊐",
  sqsupseteq: "⊒",
  squ: "□",
  square: "□",
  squarf: "▪",
  squf: "▪",
  srarr: "→",
  sscr: "𝓈",
  ssetmn: "∖",
  ssmile: "⌣",
  sstarf: "⋆",
  star: "☆",
  starf: "★",
  straightepsilon: "ϵ",
  straightphi: "ϕ",
  strns: "¯",
  sub: "⊂",
  subE: "⫅",
  subdot: "⪽",
  sube: "⊆",
  subedot: "⫃",
  submult: "⫁",
  subnE: "⫋",
  subne: "⊊",
  subplus: "⪿",
  subrarr: "⥹",
  subset: "⊂",
  subseteq: "⊆",
  subseteqq: "⫅",
  subsetneq: "⊊",
  subsetneqq: "⫋",
  subsim: "⫇",
  subsub: "⫕",
  subsup: "⫓",
  succ: "≻",
  succapprox: "⪸",
  succcurlyeq: "≽",
  succeq: "⪰",
  succnapprox: "⪺",
  succneqq: "⪶",
  succnsim: "⋩",
  succsim: "≿",
  sum: "∑",
  sung: "♪",
  sup1: "¹",
  sup2: "²",
  sup3: "³",
  sup: "⊃",
  supE: "⫆",
  supdot: "⪾",
  supdsub: "⫘",
  supe: "⊇",
  supedot: "⫄",
  suphsol: "⟉",
  suphsub: "⫗",
  suplarr: "⥻",
  supmult: "⫂",
  supnE: "⫌",
  supne: "⊋",
  supplus: "⫀",
  supset: "⊃",
  supseteq: "⊇",
  supseteqq: "⫆",
  supsetneq: "⊋",
  supsetneqq: "⫌",
  supsim: "⫈",
  supsub: "⫔",
  supsup: "⫖",
  swArr: "⇙",
  swarhk: "⤦",
  swarr: "↙",
  swarrow: "↙",
  swnwar: "⤪",
  szlig: "ß",
  target: "⌖",
  tau: "τ",
  tbrk: "⎴",
  tcaron: "ť",
  tcedil: "ţ",
  tcy: "т",
  tdot: "⃛",
  telrec: "⌕",
  tfr: "𝔱",
  there4: "∴",
  therefore: "∴",
  theta: "θ",
  thetasym: "ϑ",
  thetav: "ϑ",
  thickapprox: "≈",
  thicksim: "∼",
  thinsp: " ",
  thkap: "≈",
  thksim: "∼",
  thorn: "þ",
  tilde: "˜",
  times: "×",
  timesb: "⊠",
  timesbar: "⨱",
  timesd: "⨰",
  tint: "∭",
  toea: "⤨",
  top: "⊤",
  topbot: "⌶",
  topcir: "⫱",
  topf: "𝕥",
  topfork: "⫚",
  tosa: "⤩",
  tprime: "‴",
  trade: "™",
  triangle: "▵",
  triangledown: "▿",
  triangleleft: "◃",
  trianglelefteq: "⊴",
  triangleq: "≜",
  triangleright: "▹",
  trianglerighteq: "⊵",
  tridot: "◬",
  trie: "≜",
  triminus: "⨺",
  triplus: "⨹",
  trisb: "⧍",
  tritime: "⨻",
  trpezium: "⏢",
  tscr: "𝓉",
  tscy: "ц",
  tshcy: "ћ",
  tstrok: "ŧ",
  twixt: "≬",
  twoheadleftarrow: "↞",
  twoheadrightarrow: "↠",
  uArr: "⇑",
  uHar: "⥣",
  uacute: "ú",
  uarr: "↑",
  ubrcy: "ў",
  ubreve: "ŭ",
  ucirc: "û",
  ucy: "у",
  udarr: "⇅",
  udblac: "ű",
  udhar: "⥮",
  ufisht: "⥾",
  ufr: "𝔲",
  ugrave: "ù",
  uharl: "↿",
  uharr: "↾",
  uhblk: "▀",
  ulcorn: "⌜",
  ulcorner: "⌜",
  ulcrop: "⌏",
  ultri: "◸",
  umacr: "ū",
  uml: "¨",
  uogon: "ų",
  uopf: "𝕦",
  uparrow: "↑",
  updownarrow: "↕",
  upharpoonleft: "↿",
  upharpoonright: "↾",
  uplus: "⊎",
  upsi: "υ",
  upsih: "ϒ",
  upsilon: "υ",
  upuparrows: "⇈",
  urcorn: "⌝",
  urcorner: "⌝",
  urcrop: "⌎",
  uring: "ů",
  urtri: "◹",
  uscr: "𝓊",
  utdot: "⋰",
  utilde: "ũ",
  utri: "▵",
  utrif: "▴",
  uuarr: "⇈",
  uuml: "ü",
  uwangle: "⦧",
  vArr: "⇕",
  vBar: "⫨",
  vBarv: "⫩",
  vDash: "⊨",
  vangrt: "⦜",
  varepsilon: "ϵ",
  varkappa: "ϰ",
  varnothing: "∅",
  varphi: "ϕ",
  varpi: "ϖ",
  varpropto: "∝",
  varr: "↕",
  varrho: "ϱ",
  varsigma: "ς",
  varsubsetneq: "⊊︀",
  varsubsetneqq: "⫋︀",
  varsupsetneq: "⊋︀",
  varsupsetneqq: "⫌︀",
  vartheta: "ϑ",
  vartriangleleft: "⊲",
  vartriangleright: "⊳",
  vcy: "в",
  vdash: "⊢",
  vee: "∨",
  veebar: "⊻",
  veeeq: "≚",
  vellip: "⋮",
  verbar: "|",
  vert: "|",
  vfr: "𝔳",
  vltri: "⊲",
  vnsub: "⊂⃒",
  vnsup: "⊃⃒",
  vopf: "𝕧",
  vprop: "∝",
  vrtri: "⊳",
  vscr: "𝓋",
  vsubnE: "⫋︀",
  vsubne: "⊊︀",
  vsupnE: "⫌︀",
  vsupne: "⊋︀",
  vzigzag: "⦚",
  wcirc: "ŵ",
  wedbar: "⩟",
  wedge: "∧",
  wedgeq: "≙",
  weierp: "℘",
  wfr: "𝔴",
  wopf: "𝕨",
  wp: "℘",
  wr: "≀",
  wreath: "≀",
  wscr: "𝓌",
  xcap: "⋂",
  xcirc: "◯",
  xcup: "⋃",
  xdtri: "▽",
  xfr: "𝔵",
  xhArr: "⟺",
  xharr: "⟷",
  xi: "ξ",
  xlArr: "⟸",
  xlarr: "⟵",
  xmap: "⟼",
  xnis: "⋻",
  xodot: "⨀",
  xopf: "𝕩",
  xoplus: "⨁",
  xotime: "⨂",
  xrArr: "⟹",
  xrarr: "⟶",
  xscr: "𝓍",
  xsqcup: "⨆",
  xuplus: "⨄",
  xutri: "△",
  xvee: "⋁",
  xwedge: "⋀",
  yacute: "ý",
  yacy: "я",
  ycirc: "ŷ",
  ycy: "ы",
  yen: "¥",
  yfr: "𝔶",
  yicy: "ї",
  yopf: "𝕪",
  yscr: "𝓎",
  yucy: "ю",
  yuml: "ÿ",
  zacute: "ź",
  zcaron: "ž",
  zcy: "з",
  zdot: "ż",
  zeetrf: "ℨ",
  zeta: "ζ",
  zfr: "𝔷",
  zhcy: "ж",
  zigrarr: "⇝",
  zopf: "𝕫",
  zscr: "𝓏",
  zwj: "‍",
  zwnj: "‌"
}, Ue = {}.hasOwnProperty;
function wt(t) {
  return Ue.call(jt, t) ? jt[t] : !1;
}
function W(t, n, e, r) {
  const u = t.length;
  let i = 0, a;
  if (n < 0 ? n = -n > u ? 0 : u + n : n = n > u ? u : n, e = e > 0 ? e : 0, r.length < 1e4)
    a = Array.from(r), a.unshift(n, e), t.splice(...a);
  else
    for (e && t.splice(n, e); i < r.length; )
      a = r.slice(i, i + 1e4), a.unshift(n, 0), t.splice(...a), i += 1e4, n += 1e4;
}
function j(t, n) {
  return t.length > 0 ? (W(t, t.length, 0, n), t) : n;
}
const Lt = {}.hasOwnProperty;
function je(t) {
  const n = {};
  let e = -1;
  for (; ++e < t.length; )
    Ge(n, t[e]);
  return n;
}
function Ge(t, n) {
  let e;
  for (e in n) {
    const u = (Lt.call(t, e) ? t[e] : void 0) || (t[e] = {}), i = n[e];
    let a;
    if (i)
      for (a in i) {
        Lt.call(u, a) || (u[a] = []);
        const l = i[a];
        Qe(
          // @ts-expect-error Looks like a list.
          u[a],
          Array.isArray(l) ? l : l ? [l] : []
        );
      }
  }
}
function Qe(t, n) {
  let e = -1;
  const r = [];
  for (; ++e < n.length; )
    (n[e].add === "after" ? t : r).push(n[e]);
  W(t, 0, 0, r);
}
function We(t) {
  const n = {};
  let e = -1;
  for (; ++e < t.length; )
    $e(n, t[e]);
  return n;
}
function $e(t, n) {
  let e;
  for (e in n) {
    const u = (Lt.call(t, e) ? t[e] : void 0) || (t[e] = {}), i = n[e];
    let a;
    if (i)
      for (a in i)
        u[a] = i[a];
  }
}
function Ye(t, n) {
  const e = Number.parseInt(t, n);
  return (
    // C0 except for HT, LF, FF, CR, space.
    e < 9 || e === 11 || e > 13 && e < 32 || // Control character (DEL) of C0, and C1 controls.
    e > 126 && e < 160 || // Lone high surrogates and low surrogates.
    e > 55295 && e < 57344 || // Noncharacters.
    e > 64975 && e < 65008 || /* eslint-disable no-bitwise */
    (e & 65535) === 65535 || (e & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    e > 1114111 ? "�" : String.fromCodePoint(e)
  );
}
const Ze = { '"': "quot", "&": "amp", "<": "lt", ">": "gt" };
function ie(t) {
  return t.replace(/["&<>]/g, n);
  function n(e) {
    return "&" + Ze[
      /** @type {keyof typeof characterReferences} */
      e
    ] + ";";
  }
}
function et(t) {
  return t.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const $ = lt(/[A-Za-z]/), G = lt(/[\dA-Za-z]/), Je = lt(/[#-'*+\--9=?A-Z^-~]/);
function vt(t) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    t !== null && (t < 32 || t === 127)
  );
}
const zt = lt(/\d/), Ke = lt(/[\dA-Fa-f]/), Xe = lt(/[!-/:-@[-`{-~]/);
function v(t) {
  return t !== null && t < -2;
}
function M(t) {
  return t !== null && (t < 0 || t === 32);
}
function O(t) {
  return t === -2 || t === -1 || t === 32;
}
const tn = lt(new RegExp("\\p{P}|\\p{S}", "u")), en = lt(/\s/);
function lt(t) {
  return n;
  function n(e) {
    return e !== null && e > -1 && t.test(String.fromCharCode(e));
  }
}
function pt(t, n) {
  const e = ie(nn(t || ""));
  if (!n)
    return e;
  const r = e.indexOf(":"), u = e.indexOf("?"), i = e.indexOf("#"), a = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    r < 0 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    a > -1 && r > a || u > -1 && r > u || i > -1 && r > i || // It is a protocol, it should be allowed.
    n.test(e.slice(0, r)) ? e : ""
  );
}
function nn(t) {
  const n = [];
  let e = -1, r = 0, u = 0;
  for (; ++e < t.length; ) {
    const i = t.charCodeAt(e);
    let a = "";
    if (i === 37 && G(t.charCodeAt(e + 1)) && G(t.charCodeAt(e + 2)))
      u = 2;
    else if (i < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(i)) || (a = String.fromCharCode(i));
    else if (i > 55295 && i < 57344) {
      const l = t.charCodeAt(e + 1);
      i < 56320 && l > 56319 && l < 57344 ? (a = String.fromCharCode(i, l), u = 1) : a = "�";
    } else
      a = String.fromCharCode(i);
    a && (n.push(t.slice(r, e), encodeURIComponent(a)), r = e + u + 1, a = ""), u && (e += u, u = 0);
  }
  return n.join("") + t.slice(r);
}
const Gt = {}.hasOwnProperty, Qt = /^(https?|ircs?|mailto|xmpp)$/i, rn = /^https?$/i;
function an(t) {
  const n = t || {};
  let e = !0;
  const r = {}, u = [[]], i = [], a = [], c = (
    /** @type {NormalizedHtmlExtension} */
    We([{
      enter: {
        blockQuote: d,
        codeFenced: nt,
        codeFencedFenceInfo: S,
        codeFencedFenceMeta: S,
        codeIndented: rt,
        codeText: Ne,
        content: ye,
        definition: be,
        definitionDestinationString: xe,
        definitionLabelString: S,
        definitionTitleString: S,
        emphasis: Ie,
        htmlFlow: Te,
        htmlText: _t,
        image: J,
        label: S,
        link: ot,
        listItemMarker: q,
        listItemValue: x,
        listOrdered: R,
        listUnordered: A,
        paragraph: V,
        reference: S,
        resource: st,
        resourceDestinationString: ct,
        resourceTitleString: S,
        setextHeading: Ae,
        strong: Fe
      },
      exit: {
        atxHeading: De,
        atxHeadingSequence: Ce,
        autolinkEmail: Ve,
        autolinkProtocol: Me,
        blockQuote: _,
        characterEscapeValue: ft,
        characterReferenceMarkerHexadecimal: Mt,
        characterReferenceMarkerNumeric: Mt,
        characterReferenceValue: _e,
        codeFenced: f,
        codeFencedFence: Z,
        codeFencedFenceInfo: g,
        codeFencedFenceMeta: N,
        codeFlowValue: ze,
        codeIndented: f,
        codeText: Re,
        codeTextData: ft,
        data: ft,
        definition: Se,
        definitionDestinationString: ke,
        definitionLabelString: de,
        definitionTitleString: we,
        emphasis: Be,
        hardBreakEscape: Ot,
        hardBreakTrailing: Ot,
        htmlFlow: Pt,
        htmlFlowData: ft,
        htmlText: Pt,
        htmlTextData: ft,
        image: Bt,
        label: gt,
        labelText: H,
        lineEnding: ve,
        link: Bt,
        listOrdered: L,
        listUnordered: T,
        paragraph: Y,
        reference: N,
        referenceString: ut,
        resource: N,
        resourceDestinationString: Ct,
        resourceTitleString: me,
        setextHeading: Le,
        setextHeadingLineSequence: qe,
        setextHeadingText: Ee,
        strong: Oe,
        thematicBreak: Pe
      }
    }, ...n.htmlExtensions || []])
  ), o = {
    definitions: r,
    tightStack: a
  }, p = {
    buffer: S,
    encode: w,
    getData: y,
    lineEndingIfNeeded: z,
    options: n,
    raw: E,
    resume: k,
    setData: b,
    tag: C
  };
  let h = n.defaultLineEnding;
  return m;
  function m(D) {
    let I = -1, U = 0;
    const K = [];
    let X = [], it = [];
    for (; ++I < D.length; )
      !h && (D[I][1].type === "lineEnding" || D[I][1].type === "lineEndingBlank") && (h = /** @type {LineEnding} */
      D[I][2].sliceSerialize(D[I][1])), (D[I][1].type === "listOrdered" || D[I][1].type === "listUnordered") && (D[I][0] === "enter" ? K.push(I) : s(D.slice(K.pop(), I))), D[I][1].type === "definition" && (D[I][0] === "enter" ? (it = j(it, D.slice(U, I)), U = I) : (X = j(X, D.slice(U, I + 1)), U = I + 1));
    X = j(X, it), X = j(X, D.slice(U)), I = -1;
    const tt = X;
    for (c.enter.null && c.enter.null.call(p); ++I < D.length; ) {
      const Vt = c[tt[I][0]], Ht = tt[I][1].type, Ut = Vt[Ht];
      Gt.call(Vt, Ht) && Ut && Ut.call({
        sliceSerialize: tt[I][2].sliceSerialize,
        ...p
      }, tt[I][1]);
    }
    return c.exit.null && c.exit.null.call(p), u[0].join("");
  }
  function s(D) {
    const I = D.length;
    let U = 0, K = 0, X = !1, it;
    for (; ++U < I; ) {
      const tt = D[U];
      if (tt[1]._container)
        it = void 0, tt[0] === "enter" ? K++ : K--;
      else switch (tt[1].type) {
        case "listItemPrefix": {
          tt[0] === "exit" && (it = !0);
          break;
        }
        case "linePrefix":
          break;
        case "lineEndingBlank": {
          tt[0] === "enter" && !K && (it ? it = void 0 : X = !0);
          break;
        }
        default:
          it = void 0;
      }
    }
    D[0][1]._loose = X;
  }
  function b(D, I) {
    o[D] = I;
  }
  function y(D) {
    return o[D];
  }
  function S() {
    u.push([]);
  }
  function k() {
    return u.pop().join("");
  }
  function C(D) {
    e && (b("lastWasTag", !0), u[u.length - 1].push(D));
  }
  function E(D) {
    b("lastWasTag"), u[u.length - 1].push(D);
  }
  function F() {
    E(h || `
`);
  }
  function z() {
    const D = u[u.length - 1], I = D[D.length - 1], U = I ? I.charCodeAt(I.length - 1) : null;
    U === 10 || U === 13 || U === null || F();
  }
  function w(D) {
    return y("ignoreEncode") ? D : ie(D);
  }
  function N() {
    k();
  }
  function R(D) {
    a.push(!D._loose), z(), C("<ol"), b("expectFirstItem", !0);
  }
  function A(D) {
    a.push(!D._loose), z(), C("<ul"), b("expectFirstItem", !0);
  }
  function x(D) {
    if (y("expectFirstItem")) {
      const I = Number.parseInt(this.sliceSerialize(D), 10);
      I !== 1 && C(' start="' + w(String(I)) + '"');
    }
  }
  function q() {
    y("expectFirstItem") ? C(">") : P(), z(), C("<li>"), b("expectFirstItem"), b("lastWasTag");
  }
  function L() {
    P(), a.pop(), F(), C("</ol>");
  }
  function T() {
    P(), a.pop(), F(), C("</ul>");
  }
  function P() {
    y("lastWasTag") && !y("slurpAllLineEndings") && z(), C("</li>"), b("slurpAllLineEndings");
  }
  function d() {
    a.push(!1), z(), C("<blockquote>");
  }
  function _() {
    a.pop(), z(), C("</blockquote>"), b("slurpAllLineEndings");
  }
  function V() {
    a[a.length - 1] || (z(), C("<p>")), b("slurpAllLineEndings");
  }
  function Y() {
    a[a.length - 1] ? b("slurpAllLineEndings", !0) : C("</p>");
  }
  function nt() {
    z(), C("<pre><code"), b("fencesCount", 0);
  }
  function g() {
    const D = k();
    C(' class="language-' + D + '"');
  }
  function Z() {
    const D = y("fencesCount") || 0;
    D || (C(">"), b("slurpOneLineEnding", !0)), b("fencesCount", D + 1);
  }
  function rt() {
    z(), C("<pre><code>");
  }
  function f() {
    const D = y("fencesCount");
    D !== void 0 && D < 2 && o.tightStack.length > 0 && !y("lastWasTag") && F(), y("flowCodeSeenData") && z(), C("</code></pre>"), D !== void 0 && D < 2 && z(), b("flowCodeSeenData"), b("fencesCount"), b("slurpOneLineEnding");
  }
  function J() {
    i.push({
      image: !0
    }), e = void 0;
  }
  function ot() {
    i.push({});
  }
  function H(D) {
    i[i.length - 1].labelId = this.sliceSerialize(D);
  }
  function gt() {
    i[i.length - 1].label = k();
  }
  function ut(D) {
    i[i.length - 1].referenceId = this.sliceSerialize(D);
  }
  function st() {
    S(), i[i.length - 1].destination = "";
  }
  function ct() {
    S(), b("ignoreEncode", !0);
  }
  function Ct() {
    i[i.length - 1].destination = k(), b("ignoreEncode");
  }
  function me() {
    i[i.length - 1].title = k();
  }
  function Bt() {
    let D = i.length - 1;
    const I = i[D], U = I.referenceId || I.labelId, K = I.destination === void 0 ? r[et(U)] : I;
    for (e = !0; D--; )
      if (i[D].image) {
        e = void 0;
        break;
      }
    I.image ? (C('<img src="' + pt(K.destination, n.allowDangerousProtocol ? void 0 : rn) + '" alt="'), E(I.label), C('"')) : C('<a href="' + pt(K.destination, n.allowDangerousProtocol ? void 0 : Qt) + '"'), C(K.title ? ' title="' + K.title + '"' : ""), I.image ? C(" />") : (C(">"), E(I.label), C("</a>")), i.pop();
  }
  function be() {
    S(), i.push({});
  }
  function de(D) {
    k(), i[i.length - 1].labelId = this.sliceSerialize(D);
  }
  function xe() {
    S(), b("ignoreEncode", !0);
  }
  function ke() {
    i[i.length - 1].destination = k(), b("ignoreEncode");
  }
  function we() {
    i[i.length - 1].title = k();
  }
  function Se() {
    const D = i[i.length - 1], I = et(D.labelId);
    k(), Gt.call(r, I) || (r[I] = i[i.length - 1]), i.pop();
  }
  function ye() {
    b("slurpAllLineEndings", !0);
  }
  function Ce(D) {
    y("headingRank") || (b("headingRank", this.sliceSerialize(D).length), z(), C("<h" + y("headingRank") + ">"));
  }
  function Ae() {
    S(), b("slurpAllLineEndings");
  }
  function Ee() {
    b("slurpAllLineEndings", !0);
  }
  function De() {
    C("</h" + y("headingRank") + ">"), b("headingRank");
  }
  function qe(D) {
    b("headingRank", this.sliceSerialize(D).charCodeAt(0) === 61 ? 1 : 2);
  }
  function Le() {
    const D = k();
    z(), C("<h" + y("headingRank") + ">"), E(D), C("</h" + y("headingRank") + ">"), b("slurpAllLineEndings"), b("headingRank");
  }
  function ft(D) {
    E(w(this.sliceSerialize(D)));
  }
  function ve(D) {
    if (!y("slurpAllLineEndings")) {
      if (y("slurpOneLineEnding")) {
        b("slurpOneLineEnding");
        return;
      }
      if (y("inCodeText")) {
        E(" ");
        return;
      }
      E(w(this.sliceSerialize(D)));
    }
  }
  function ze(D) {
    E(w(this.sliceSerialize(D))), b("flowCodeSeenData", !0);
  }
  function Ot() {
    C("<br />");
  }
  function Te() {
    z(), _t();
  }
  function Pt() {
    b("ignoreEncode");
  }
  function _t() {
    n.allowDangerousHtml && b("ignoreEncode", !0);
  }
  function Ie() {
    C("<em>");
  }
  function Fe() {
    C("<strong>");
  }
  function Ne() {
    b("inCodeText", !0), C("<code>");
  }
  function Re() {
    b("inCodeText"), C("</code>");
  }
  function Be() {
    C("</em>");
  }
  function Oe() {
    C("</strong>");
  }
  function Pe() {
    z(), C("<hr />");
  }
  function Mt(D) {
    b("characterReferenceType", D.type);
  }
  function _e(D) {
    const I = this.sliceSerialize(D), U = y("characterReferenceType") ? Ye(I, y("characterReferenceType") === "characterReferenceMarkerNumeric" ? 10 : 16) : wt(I);
    E(w(
      /** @type {string} */
      U
    )), b("characterReferenceType");
  }
  function Me(D) {
    const I = this.sliceSerialize(D);
    C('<a href="' + pt(I, n.allowDangerousProtocol ? void 0 : Qt) + '">'), E(w(I)), C("</a>");
  }
  function Ve(D) {
    const I = this.sliceSerialize(D);
    C('<a href="' + pt("mailto:" + I) + '">'), E(w(I)), C("</a>");
  }
}
function B(t, n, e, r) {
  const u = r ? r - 1 : Number.POSITIVE_INFINITY;
  let i = 0;
  return a;
  function a(c) {
    return O(c) ? (t.enter(e), l(c)) : n(c);
  }
  function l(c) {
    return O(c) && i++ < u ? (t.consume(c), l) : (t.exit(e), n(c));
  }
}
const un = {
  tokenize: ln
};
function ln(t) {
  const n = t.attempt(this.parser.constructs.contentInitial, r, u);
  let e;
  return n;
  function r(l) {
    if (l === null) {
      t.consume(l);
      return;
    }
    return t.enter("lineEnding"), t.consume(l), t.exit("lineEnding"), B(t, n, "linePrefix");
  }
  function u(l) {
    return t.enter("paragraph"), i(l);
  }
  function i(l) {
    const c = t.enter("chunkText", {
      contentType: "text",
      previous: e
    });
    return e && (e.next = c), e = c, a(l);
  }
  function a(l) {
    if (l === null) {
      t.exit("chunkText"), t.exit("paragraph"), t.consume(l);
      return;
    }
    return v(l) ? (t.consume(l), t.exit("chunkText"), i) : (t.consume(l), a);
  }
}
const on = {
  tokenize: sn
}, Wt = {
  tokenize: cn
};
function sn(t) {
  const n = this, e = [];
  let r = 0, u, i, a;
  return l;
  function l(E) {
    if (r < e.length) {
      const F = e[r];
      return n.containerState = F[1], t.attempt(F[0].continuation, c, o)(E);
    }
    return o(E);
  }
  function c(E) {
    if (r++, n.containerState._closeFlow) {
      n.containerState._closeFlow = void 0, u && C();
      const F = n.events.length;
      let z = F, w;
      for (; z--; )
        if (n.events[z][0] === "exit" && n.events[z][1].type === "chunkFlow") {
          w = n.events[z][1].end;
          break;
        }
      k(r);
      let N = F;
      for (; N < n.events.length; )
        n.events[N][1].end = {
          ...w
        }, N++;
      return W(n.events, z + 1, 0, n.events.slice(F)), n.events.length = N, o(E);
    }
    return l(E);
  }
  function o(E) {
    if (r === e.length) {
      if (!u)
        return m(E);
      if (u.currentConstruct && u.currentConstruct.concrete)
        return b(E);
      n.interrupt = !!(u.currentConstruct && !u._gfmTableDynamicInterruptHack);
    }
    return n.containerState = {}, t.check(Wt, p, h)(E);
  }
  function p(E) {
    return u && C(), k(r), m(E);
  }
  function h(E) {
    return n.parser.lazy[n.now().line] = r !== e.length, a = n.now().offset, b(E);
  }
  function m(E) {
    return n.containerState = {}, t.attempt(Wt, s, b)(E);
  }
  function s(E) {
    return r++, e.push([n.currentConstruct, n.containerState]), m(E);
  }
  function b(E) {
    if (E === null) {
      u && C(), k(0), t.consume(E);
      return;
    }
    return u = u || n.parser.flow(n.now()), t.enter("chunkFlow", {
      _tokenizer: u,
      contentType: "flow",
      previous: i
    }), y(E);
  }
  function y(E) {
    if (E === null) {
      S(t.exit("chunkFlow"), !0), k(0), t.consume(E);
      return;
    }
    return v(E) ? (t.consume(E), S(t.exit("chunkFlow")), r = 0, n.interrupt = void 0, l) : (t.consume(E), y);
  }
  function S(E, F) {
    const z = n.sliceStream(E);
    if (F && z.push(null), E.previous = i, i && (i.next = E), i = E, u.defineSkip(E.start), u.write(z), n.parser.lazy[E.start.line]) {
      let w = u.events.length;
      for (; w--; )
        if (
          // The token starts before the line ending…
          u.events[w][1].start.offset < a && // …and either is not ended yet…
          (!u.events[w][1].end || // …or ends after it.
          u.events[w][1].end.offset > a)
        )
          return;
      const N = n.events.length;
      let R = N, A, x;
      for (; R--; )
        if (n.events[R][0] === "exit" && n.events[R][1].type === "chunkFlow") {
          if (A) {
            x = n.events[R][1].end;
            break;
          }
          A = !0;
        }
      for (k(r), w = N; w < n.events.length; )
        n.events[w][1].end = {
          ...x
        }, w++;
      W(n.events, R + 1, 0, n.events.slice(N)), n.events.length = w;
    }
  }
  function k(E) {
    let F = e.length;
    for (; F-- > E; ) {
      const z = e[F];
      n.containerState = z[1], z[0].exit.call(n, t);
    }
    e.length = E;
  }
  function C() {
    u.write([null]), i = void 0, u = void 0, n.containerState._closeFlow = void 0;
  }
}
function cn(t, n, e) {
  return B(t, t.attempt(this.parser.constructs.document, n, e), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function St(t) {
  if (t === null || M(t) || en(t))
    return 1;
  if (tn(t))
    return 2;
}
function yt(t, n, e) {
  const r = [];
  let u = -1;
  for (; ++u < t.length; ) {
    const i = t[u].resolveAll;
    i && !r.includes(i) && (n = i(n, e), r.push(i));
  }
  return n;
}
const Tt = {
  name: "attention",
  resolveAll: hn,
  tokenize: pn
};
function hn(t, n) {
  let e = -1, r, u, i, a, l, c, o, p;
  for (; ++e < t.length; )
    if (t[e][0] === "enter" && t[e][1].type === "attentionSequence" && t[e][1]._close) {
      for (r = e; r--; )
        if (t[r][0] === "exit" && t[r][1].type === "attentionSequence" && t[r][1]._open && // If the markers are the same:
        n.sliceSerialize(t[r][1]).charCodeAt(0) === n.sliceSerialize(t[e][1]).charCodeAt(0)) {
          if ((t[r][1]._close || t[e][1]._open) && (t[e][1].end.offset - t[e][1].start.offset) % 3 && !((t[r][1].end.offset - t[r][1].start.offset + t[e][1].end.offset - t[e][1].start.offset) % 3))
            continue;
          c = t[r][1].end.offset - t[r][1].start.offset > 1 && t[e][1].end.offset - t[e][1].start.offset > 1 ? 2 : 1;
          const h = {
            ...t[r][1].end
          }, m = {
            ...t[e][1].start
          };
          $t(h, -c), $t(m, c), a = {
            type: c > 1 ? "strongSequence" : "emphasisSequence",
            start: h,
            end: {
              ...t[r][1].end
            }
          }, l = {
            type: c > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...t[e][1].start
            },
            end: m
          }, i = {
            type: c > 1 ? "strongText" : "emphasisText",
            start: {
              ...t[r][1].end
            },
            end: {
              ...t[e][1].start
            }
          }, u = {
            type: c > 1 ? "strong" : "emphasis",
            start: {
              ...a.start
            },
            end: {
              ...l.end
            }
          }, t[r][1].end = {
            ...a.start
          }, t[e][1].start = {
            ...l.end
          }, o = [], t[r][1].end.offset - t[r][1].start.offset && (o = j(o, [["enter", t[r][1], n], ["exit", t[r][1], n]])), o = j(o, [["enter", u, n], ["enter", a, n], ["exit", a, n], ["enter", i, n]]), o = j(o, yt(n.parser.constructs.insideSpan.null, t.slice(r + 1, e), n)), o = j(o, [["exit", i, n], ["enter", l, n], ["exit", l, n], ["exit", u, n]]), t[e][1].end.offset - t[e][1].start.offset ? (p = 2, o = j(o, [["enter", t[e][1], n], ["exit", t[e][1], n]])) : p = 0, W(t, r - 1, e - r + 3, o), e = r + o.length - p - 2;
          break;
        }
    }
  for (e = -1; ++e < t.length; )
    t[e][1].type === "attentionSequence" && (t[e][1].type = "data");
  return t;
}
function pn(t, n) {
  const e = this.parser.constructs.attentionMarkers.null, r = this.previous, u = St(r);
  let i;
  return a;
  function a(c) {
    return i = c, t.enter("attentionSequence"), l(c);
  }
  function l(c) {
    if (c === i)
      return t.consume(c), l;
    const o = t.exit("attentionSequence"), p = St(c), h = !p || p === 2 && u || e.includes(c), m = !u || u === 2 && p || e.includes(r);
    return o._open = !!(i === 42 ? h : h && (u || !m)), o._close = !!(i === 42 ? m : m && (p || !h)), n(c);
  }
}
function $t(t, n) {
  t.column += n, t.offset += n, t._bufferIndex += n;
}
const gn = {
  name: "autolink",
  tokenize: fn
};
function fn(t, n, e) {
  let r = 0;
  return u;
  function u(s) {
    return t.enter("autolink"), t.enter("autolinkMarker"), t.consume(s), t.exit("autolinkMarker"), t.enter("autolinkProtocol"), i;
  }
  function i(s) {
    return $(s) ? (t.consume(s), a) : s === 64 ? e(s) : o(s);
  }
  function a(s) {
    return s === 43 || s === 45 || s === 46 || G(s) ? (r = 1, l(s)) : o(s);
  }
  function l(s) {
    return s === 58 ? (t.consume(s), r = 0, c) : (s === 43 || s === 45 || s === 46 || G(s)) && r++ < 32 ? (t.consume(s), l) : (r = 0, o(s));
  }
  function c(s) {
    return s === 62 ? (t.exit("autolinkProtocol"), t.enter("autolinkMarker"), t.consume(s), t.exit("autolinkMarker"), t.exit("autolink"), n) : s === null || s === 32 || s === 60 || vt(s) ? e(s) : (t.consume(s), c);
  }
  function o(s) {
    return s === 64 ? (t.consume(s), p) : Je(s) ? (t.consume(s), o) : e(s);
  }
  function p(s) {
    return G(s) ? h(s) : e(s);
  }
  function h(s) {
    return s === 46 ? (t.consume(s), r = 0, p) : s === 62 ? (t.exit("autolinkProtocol").type = "autolinkEmail", t.enter("autolinkMarker"), t.consume(s), t.exit("autolinkMarker"), t.exit("autolink"), n) : m(s);
  }
  function m(s) {
    if ((s === 45 || G(s)) && r++ < 63) {
      const b = s === 45 ? m : h;
      return t.consume(s), b;
    }
    return e(s);
  }
}
const bt = {
  partial: !0,
  tokenize: mn
};
function mn(t, n, e) {
  return r;
  function r(i) {
    return O(i) ? B(t, u, "linePrefix")(i) : u(i);
  }
  function u(i) {
    return i === null || v(i) ? n(i) : e(i);
  }
}
const ae = {
  continuation: {
    tokenize: dn
  },
  exit: xn,
  name: "blockQuote",
  tokenize: bn
};
function bn(t, n, e) {
  const r = this;
  return u;
  function u(a) {
    if (a === 62) {
      const l = r.containerState;
      return l.open || (t.enter("blockQuote", {
        _container: !0
      }), l.open = !0), t.enter("blockQuotePrefix"), t.enter("blockQuoteMarker"), t.consume(a), t.exit("blockQuoteMarker"), i;
    }
    return e(a);
  }
  function i(a) {
    return O(a) ? (t.enter("blockQuotePrefixWhitespace"), t.consume(a), t.exit("blockQuotePrefixWhitespace"), t.exit("blockQuotePrefix"), n) : (t.exit("blockQuotePrefix"), n(a));
  }
}
function dn(t, n, e) {
  const r = this;
  return u;
  function u(a) {
    return O(a) ? B(t, i, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a) : i(a);
  }
  function i(a) {
    return t.attempt(ae, n, e)(a);
  }
}
function xn(t) {
  t.exit("blockQuote");
}
const ue = {
  name: "characterEscape",
  tokenize: kn
};
function kn(t, n, e) {
  return r;
  function r(i) {
    return t.enter("characterEscape"), t.enter("escapeMarker"), t.consume(i), t.exit("escapeMarker"), u;
  }
  function u(i) {
    return Xe(i) ? (t.enter("characterEscapeValue"), t.consume(i), t.exit("characterEscapeValue"), t.exit("characterEscape"), n) : e(i);
  }
}
const le = {
  name: "characterReference",
  tokenize: wn
};
function wn(t, n, e) {
  const r = this;
  let u = 0, i, a;
  return l;
  function l(h) {
    return t.enter("characterReference"), t.enter("characterReferenceMarker"), t.consume(h), t.exit("characterReferenceMarker"), c;
  }
  function c(h) {
    return h === 35 ? (t.enter("characterReferenceMarkerNumeric"), t.consume(h), t.exit("characterReferenceMarkerNumeric"), o) : (t.enter("characterReferenceValue"), i = 31, a = G, p(h));
  }
  function o(h) {
    return h === 88 || h === 120 ? (t.enter("characterReferenceMarkerHexadecimal"), t.consume(h), t.exit("characterReferenceMarkerHexadecimal"), t.enter("characterReferenceValue"), i = 6, a = Ke, p) : (t.enter("characterReferenceValue"), i = 7, a = zt, p(h));
  }
  function p(h) {
    if (h === 59 && u) {
      const m = t.exit("characterReferenceValue");
      return a === G && !wt(r.sliceSerialize(m)) ? e(h) : (t.enter("characterReferenceMarker"), t.consume(h), t.exit("characterReferenceMarker"), t.exit("characterReference"), n);
    }
    return a(h) && u++ < i ? (t.consume(h), p) : e(h);
  }
}
const Yt = {
  partial: !0,
  tokenize: yn
}, Zt = {
  concrete: !0,
  name: "codeFenced",
  tokenize: Sn
};
function Sn(t, n, e) {
  const r = this, u = {
    partial: !0,
    tokenize: z
  };
  let i = 0, a = 0, l;
  return c;
  function c(w) {
    return o(w);
  }
  function o(w) {
    const N = r.events[r.events.length - 1];
    return i = N && N[1].type === "linePrefix" ? N[2].sliceSerialize(N[1], !0).length : 0, l = w, t.enter("codeFenced"), t.enter("codeFencedFence"), t.enter("codeFencedFenceSequence"), p(w);
  }
  function p(w) {
    return w === l ? (a++, t.consume(w), p) : a < 3 ? e(w) : (t.exit("codeFencedFenceSequence"), O(w) ? B(t, h, "whitespace")(w) : h(w));
  }
  function h(w) {
    return w === null || v(w) ? (t.exit("codeFencedFence"), r.interrupt ? n(w) : t.check(Yt, y, F)(w)) : (t.enter("codeFencedFenceInfo"), t.enter("chunkString", {
      contentType: "string"
    }), m(w));
  }
  function m(w) {
    return w === null || v(w) ? (t.exit("chunkString"), t.exit("codeFencedFenceInfo"), h(w)) : O(w) ? (t.exit("chunkString"), t.exit("codeFencedFenceInfo"), B(t, s, "whitespace")(w)) : w === 96 && w === l ? e(w) : (t.consume(w), m);
  }
  function s(w) {
    return w === null || v(w) ? h(w) : (t.enter("codeFencedFenceMeta"), t.enter("chunkString", {
      contentType: "string"
    }), b(w));
  }
  function b(w) {
    return w === null || v(w) ? (t.exit("chunkString"), t.exit("codeFencedFenceMeta"), h(w)) : w === 96 && w === l ? e(w) : (t.consume(w), b);
  }
  function y(w) {
    return t.attempt(u, F, S)(w);
  }
  function S(w) {
    return t.enter("lineEnding"), t.consume(w), t.exit("lineEnding"), k;
  }
  function k(w) {
    return i > 0 && O(w) ? B(t, C, "linePrefix", i + 1)(w) : C(w);
  }
  function C(w) {
    return w === null || v(w) ? t.check(Yt, y, F)(w) : (t.enter("codeFlowValue"), E(w));
  }
  function E(w) {
    return w === null || v(w) ? (t.exit("codeFlowValue"), C(w)) : (t.consume(w), E);
  }
  function F(w) {
    return t.exit("codeFenced"), n(w);
  }
  function z(w, N, R) {
    let A = 0;
    return x;
    function x(d) {
      return w.enter("lineEnding"), w.consume(d), w.exit("lineEnding"), q;
    }
    function q(d) {
      return w.enter("codeFencedFence"), O(d) ? B(w, L, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(d) : L(d);
    }
    function L(d) {
      return d === l ? (w.enter("codeFencedFenceSequence"), T(d)) : R(d);
    }
    function T(d) {
      return d === l ? (A++, w.consume(d), T) : A >= a ? (w.exit("codeFencedFenceSequence"), O(d) ? B(w, P, "whitespace")(d) : P(d)) : R(d);
    }
    function P(d) {
      return d === null || v(d) ? (w.exit("codeFencedFence"), N(d)) : R(d);
    }
  }
}
function yn(t, n, e) {
  const r = this;
  return u;
  function u(a) {
    return a === null ? e(a) : (t.enter("lineEnding"), t.consume(a), t.exit("lineEnding"), i);
  }
  function i(a) {
    return r.parser.lazy[r.now().line] ? e(a) : n(a);
  }
}
const At = {
  name: "codeIndented",
  tokenize: An
}, Cn = {
  partial: !0,
  tokenize: En
};
function An(t, n, e) {
  const r = this;
  return u;
  function u(o) {
    return t.enter("codeIndented"), B(t, i, "linePrefix", 5)(o);
  }
  function i(o) {
    const p = r.events[r.events.length - 1];
    return p && p[1].type === "linePrefix" && p[2].sliceSerialize(p[1], !0).length >= 4 ? a(o) : e(o);
  }
  function a(o) {
    return o === null ? c(o) : v(o) ? t.attempt(Cn, a, c)(o) : (t.enter("codeFlowValue"), l(o));
  }
  function l(o) {
    return o === null || v(o) ? (t.exit("codeFlowValue"), a(o)) : (t.consume(o), l);
  }
  function c(o) {
    return t.exit("codeIndented"), n(o);
  }
}
function En(t, n, e) {
  const r = this;
  return u;
  function u(a) {
    return r.parser.lazy[r.now().line] ? e(a) : v(a) ? (t.enter("lineEnding"), t.consume(a), t.exit("lineEnding"), u) : B(t, i, "linePrefix", 5)(a);
  }
  function i(a) {
    const l = r.events[r.events.length - 1];
    return l && l[1].type === "linePrefix" && l[2].sliceSerialize(l[1], !0).length >= 4 ? n(a) : v(a) ? u(a) : e(a);
  }
}
const Dn = {
  name: "codeText",
  previous: Ln,
  resolve: qn,
  tokenize: vn
};
function qn(t) {
  let n = t.length - 4, e = 3, r, u;
  if ((t[e][1].type === "lineEnding" || t[e][1].type === "space") && (t[n][1].type === "lineEnding" || t[n][1].type === "space")) {
    for (r = e; ++r < n; )
      if (t[r][1].type === "codeTextData") {
        t[e][1].type = "codeTextPadding", t[n][1].type = "codeTextPadding", e += 2, n -= 2;
        break;
      }
  }
  for (r = e - 1, n++; ++r <= n; )
    u === void 0 ? r !== n && t[r][1].type !== "lineEnding" && (u = r) : (r === n || t[r][1].type === "lineEnding") && (t[u][1].type = "codeTextData", r !== u + 2 && (t[u][1].end = t[r - 1][1].end, t.splice(u + 2, r - u - 2), n -= r - u - 2, r = u + 2), u = void 0);
  return t;
}
function Ln(t) {
  return t !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function vn(t, n, e) {
  let r = 0, u, i;
  return a;
  function a(h) {
    return t.enter("codeText"), t.enter("codeTextSequence"), l(h);
  }
  function l(h) {
    return h === 96 ? (t.consume(h), r++, l) : (t.exit("codeTextSequence"), c(h));
  }
  function c(h) {
    return h === null ? e(h) : h === 32 ? (t.enter("space"), t.consume(h), t.exit("space"), c) : h === 96 ? (i = t.enter("codeTextSequence"), u = 0, p(h)) : v(h) ? (t.enter("lineEnding"), t.consume(h), t.exit("lineEnding"), c) : (t.enter("codeTextData"), o(h));
  }
  function o(h) {
    return h === null || h === 32 || h === 96 || v(h) ? (t.exit("codeTextData"), c(h)) : (t.consume(h), o);
  }
  function p(h) {
    return h === 96 ? (t.consume(h), u++, p) : u === r ? (t.exit("codeTextSequence"), t.exit("codeText"), n(h)) : (i.type = "codeTextData", o(h));
  }
}
class zn {
  /**
   * @param {ReadonlyArray<T> | null | undefined} [initial]
   *   Initial items (optional).
   * @returns
   *   Splice buffer.
   */
  constructor(n) {
    this.left = n ? [...n] : [], this.right = [];
  }
  /**
   * Array access;
   * does not move the cursor.
   *
   * @param {number} index
   *   Index.
   * @return {T}
   *   Item.
   */
  get(n) {
    if (n < 0 || n >= this.left.length + this.right.length)
      throw new RangeError("Cannot access index `" + n + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
    return n < this.left.length ? this.left[n] : this.right[this.right.length - n + this.left.length - 1];
  }
  /**
   * The length of the splice buffer, one greater than the largest index in the
   * array.
   */
  get length() {
    return this.left.length + this.right.length;
  }
  /**
   * Remove and return `list[0]`;
   * moves the cursor to `0`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  shift() {
    return this.setCursor(0), this.right.pop();
  }
  /**
   * Slice the buffer to get an array;
   * does not move the cursor.
   *
   * @param {number} start
   *   Start.
   * @param {number | null | undefined} [end]
   *   End (optional).
   * @returns {Array<T>}
   *   Array of items.
   */
  slice(n, e) {
    const r = e ?? Number.POSITIVE_INFINITY;
    return r < this.left.length ? this.left.slice(n, r) : n > this.left.length ? this.right.slice(this.right.length - r + this.left.length, this.right.length - n + this.left.length).reverse() : this.left.slice(n).concat(this.right.slice(this.right.length - r + this.left.length).reverse());
  }
  /**
   * Mimics the behavior of Array.prototype.splice() except for the change of
   * interface necessary to avoid segfaults when patching in very large arrays.
   *
   * This operation moves cursor is moved to `start` and results in the cursor
   * placed after any inserted items.
   *
   * @param {number} start
   *   Start;
   *   zero-based index at which to start changing the array;
   *   negative numbers count backwards from the end of the array and values
   *   that are out-of bounds are clamped to the appropriate end of the array.
   * @param {number | null | undefined} [deleteCount=0]
   *   Delete count (default: `0`);
   *   maximum number of elements to delete, starting from start.
   * @param {Array<T> | null | undefined} [items=[]]
   *   Items to include in place of the deleted items (default: `[]`).
   * @return {Array<T>}
   *   Any removed items.
   */
  splice(n, e, r) {
    const u = e || 0;
    this.setCursor(Math.trunc(n));
    const i = this.right.splice(this.right.length - u, Number.POSITIVE_INFINITY);
    return r && mt(this.left, r), i.reverse();
  }
  /**
   * Remove and return the highest-numbered item in the array, so
   * `list[list.length - 1]`;
   * Moves the cursor to `length`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  pop() {
    return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
  }
  /**
   * Inserts a single item to the high-numbered side of the array;
   * moves the cursor to `length`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  push(n) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(n);
  }
  /**
   * Inserts many items to the high-numbered side of the array.
   * Moves the cursor to `length`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  pushMany(n) {
    this.setCursor(Number.POSITIVE_INFINITY), mt(this.left, n);
  }
  /**
   * Inserts a single item to the low-numbered side of the array;
   * Moves the cursor to `0`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  unshift(n) {
    this.setCursor(0), this.right.push(n);
  }
  /**
   * Inserts many items to the low-numbered side of the array;
   * moves the cursor to `0`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  unshiftMany(n) {
    this.setCursor(0), mt(this.right, n.reverse());
  }
  /**
   * Move the cursor to a specific position in the array. Requires
   * time proportional to the distance moved.
   *
   * If `n < 0`, the cursor will end up at the beginning.
   * If `n > length`, the cursor will end up at the end.
   *
   * @param {number} n
   *   Position.
   * @return {undefined}
   *   Nothing.
   */
  setCursor(n) {
    if (!(n === this.left.length || n > this.left.length && this.right.length === 0 || n < 0 && this.left.length === 0))
      if (n < this.left.length) {
        const e = this.left.splice(n, Number.POSITIVE_INFINITY);
        mt(this.right, e.reverse());
      } else {
        const e = this.right.splice(this.left.length + this.right.length - n, Number.POSITIVE_INFINITY);
        mt(this.left, e.reverse());
      }
  }
}
function mt(t, n) {
  let e = 0;
  if (n.length < 1e4)
    t.push(...n);
  else
    for (; e < n.length; )
      t.push(...n.slice(e, e + 1e4)), e += 1e4;
}
function oe(t) {
  const n = {};
  let e = -1, r, u, i, a, l, c, o;
  const p = new zn(t);
  for (; ++e < p.length; ) {
    for (; e in n; )
      e = n[e];
    if (r = p.get(e), e && r[1].type === "chunkFlow" && p.get(e - 1)[1].type === "listItemPrefix" && (c = r[1]._tokenizer.events, i = 0, i < c.length && c[i][1].type === "lineEndingBlank" && (i += 2), i < c.length && c[i][1].type === "content"))
      for (; ++i < c.length && c[i][1].type !== "content"; )
        c[i][1].type === "chunkText" && (c[i][1]._isInFirstContentOfListItem = !0, i++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(n, Tn(p, e)), e = n[e], o = !0);
    else if (r[1]._container) {
      for (i = e, u = void 0; i--; )
        if (a = p.get(i), a[1].type === "lineEnding" || a[1].type === "lineEndingBlank")
          a[0] === "enter" && (u && (p.get(u)[1].type = "lineEndingBlank"), a[1].type = "lineEnding", u = i);
        else if (!(a[1].type === "linePrefix" || a[1].type === "listItemIndent")) break;
      u && (r[1].end = {
        ...p.get(u)[1].start
      }, l = p.slice(u, e), l.unshift(r), p.splice(u, e - u + 1, l));
    }
  }
  return W(t, 0, Number.POSITIVE_INFINITY, p.slice(0)), !o;
}
function Tn(t, n) {
  const e = t.get(n)[1], r = t.get(n)[2];
  let u = n - 1;
  const i = [];
  let a = e._tokenizer;
  a || (a = r.parser[e.contentType](e.start), e._contentTypeTextTrailing && (a._contentTypeTextTrailing = !0));
  const l = a.events, c = [], o = {};
  let p, h, m = -1, s = e, b = 0, y = 0;
  const S = [y];
  for (; s; ) {
    for (; t.get(++u)[1] !== s; )
      ;
    i.push(u), s._tokenizer || (p = r.sliceStream(s), s.next || p.push(null), h && a.defineSkip(s.start), s._isInFirstContentOfListItem && (a._gfmTasklistFirstContentOfListItem = !0), a.write(p), s._isInFirstContentOfListItem && (a._gfmTasklistFirstContentOfListItem = void 0)), h = s, s = s.next;
  }
  for (s = e; ++m < l.length; )
    // Find a void token that includes a break.
    l[m][0] === "exit" && l[m - 1][0] === "enter" && l[m][1].type === l[m - 1][1].type && l[m][1].start.line !== l[m][1].end.line && (y = m + 1, S.push(y), s._tokenizer = void 0, s.previous = void 0, s = s.next);
  for (a.events = [], s ? (s._tokenizer = void 0, s.previous = void 0) : S.pop(), m = S.length; m--; ) {
    const k = l.slice(S[m], S[m + 1]), C = i.pop();
    c.push([C, C + k.length - 1]), t.splice(C, 2, k);
  }
  for (c.reverse(), m = -1; ++m < c.length; )
    o[b + c[m][0]] = b + c[m][1], b += c[m][1] - c[m][0] - 1;
  return o;
}
const In = {
  resolve: Nn,
  tokenize: Rn
}, Fn = {
  partial: !0,
  tokenize: Bn
};
function Nn(t) {
  return oe(t), t;
}
function Rn(t, n) {
  let e;
  return r;
  function r(l) {
    return t.enter("content"), e = t.enter("chunkContent", {
      contentType: "content"
    }), u(l);
  }
  function u(l) {
    return l === null ? i(l) : v(l) ? t.check(Fn, a, i)(l) : (t.consume(l), u);
  }
  function i(l) {
    return t.exit("chunkContent"), t.exit("content"), n(l);
  }
  function a(l) {
    return t.consume(l), t.exit("chunkContent"), e.next = t.enter("chunkContent", {
      contentType: "content",
      previous: e
    }), e = e.next, u;
  }
}
function Bn(t, n, e) {
  const r = this;
  return u;
  function u(a) {
    return t.exit("chunkContent"), t.enter("lineEnding"), t.consume(a), t.exit("lineEnding"), B(t, i, "linePrefix");
  }
  function i(a) {
    if (a === null || v(a))
      return e(a);
    const l = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && l && l[1].type === "linePrefix" && l[2].sliceSerialize(l[1], !0).length >= 4 ? n(a) : t.interrupt(r.parser.constructs.flow, e, n)(a);
  }
}
function se(t, n, e, r, u, i, a, l, c) {
  const o = c || Number.POSITIVE_INFINITY;
  let p = 0;
  return h;
  function h(k) {
    return k === 60 ? (t.enter(r), t.enter(u), t.enter(i), t.consume(k), t.exit(i), m) : k === null || k === 32 || k === 41 || vt(k) ? e(k) : (t.enter(r), t.enter(a), t.enter(l), t.enter("chunkString", {
      contentType: "string"
    }), y(k));
  }
  function m(k) {
    return k === 62 ? (t.enter(i), t.consume(k), t.exit(i), t.exit(u), t.exit(r), n) : (t.enter(l), t.enter("chunkString", {
      contentType: "string"
    }), s(k));
  }
  function s(k) {
    return k === 62 ? (t.exit("chunkString"), t.exit(l), m(k)) : k === null || k === 60 || v(k) ? e(k) : (t.consume(k), k === 92 ? b : s);
  }
  function b(k) {
    return k === 60 || k === 62 || k === 92 ? (t.consume(k), s) : s(k);
  }
  function y(k) {
    return !p && (k === null || k === 41 || M(k)) ? (t.exit("chunkString"), t.exit(l), t.exit(a), t.exit(r), n(k)) : p < o && k === 40 ? (t.consume(k), p++, y) : k === 41 ? (t.consume(k), p--, y) : k === null || k === 32 || k === 40 || vt(k) ? e(k) : (t.consume(k), k === 92 ? S : y);
  }
  function S(k) {
    return k === 40 || k === 41 || k === 92 ? (t.consume(k), y) : y(k);
  }
}
function ce(t, n, e, r, u, i) {
  const a = this;
  let l = 0, c;
  return o;
  function o(s) {
    return t.enter(r), t.enter(u), t.consume(s), t.exit(u), t.enter(i), p;
  }
  function p(s) {
    return l > 999 || s === null || s === 91 || s === 93 && !c || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    s === 94 && !l && "_hiddenFootnoteSupport" in a.parser.constructs ? e(s) : s === 93 ? (t.exit(i), t.enter(u), t.consume(s), t.exit(u), t.exit(r), n) : v(s) ? (t.enter("lineEnding"), t.consume(s), t.exit("lineEnding"), p) : (t.enter("chunkString", {
      contentType: "string"
    }), h(s));
  }
  function h(s) {
    return s === null || s === 91 || s === 93 || v(s) || l++ > 999 ? (t.exit("chunkString"), p(s)) : (t.consume(s), c || (c = !O(s)), s === 92 ? m : h);
  }
  function m(s) {
    return s === 91 || s === 92 || s === 93 ? (t.consume(s), l++, h) : h(s);
  }
}
function he(t, n, e, r, u, i) {
  let a;
  return l;
  function l(m) {
    return m === 34 || m === 39 || m === 40 ? (t.enter(r), t.enter(u), t.consume(m), t.exit(u), a = m === 40 ? 41 : m, c) : e(m);
  }
  function c(m) {
    return m === a ? (t.enter(u), t.consume(m), t.exit(u), t.exit(r), n) : (t.enter(i), o(m));
  }
  function o(m) {
    return m === a ? (t.exit(i), c(a)) : m === null ? e(m) : v(m) ? (t.enter("lineEnding"), t.consume(m), t.exit("lineEnding"), B(t, o, "linePrefix")) : (t.enter("chunkString", {
      contentType: "string"
    }), p(m));
  }
  function p(m) {
    return m === a || m === null || v(m) ? (t.exit("chunkString"), o(m)) : (t.consume(m), m === 92 ? h : p);
  }
  function h(m) {
    return m === a || m === 92 ? (t.consume(m), p) : p(m);
  }
}
function at(t, n) {
  let e;
  return r;
  function r(u) {
    return v(u) ? (t.enter("lineEnding"), t.consume(u), t.exit("lineEnding"), e = !0, r) : O(u) ? B(t, r, e ? "linePrefix" : "lineSuffix")(u) : n(u);
  }
}
const On = {
  name: "definition",
  tokenize: _n
}, Pn = {
  partial: !0,
  tokenize: Mn
};
function _n(t, n, e) {
  const r = this;
  let u;
  return i;
  function i(s) {
    return t.enter("definition"), a(s);
  }
  function a(s) {
    return ce.call(
      r,
      t,
      l,
      // Note: we don’t need to reset the way `markdown-rs` does.
      e,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(s);
  }
  function l(s) {
    return u = et(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), s === 58 ? (t.enter("definitionMarker"), t.consume(s), t.exit("definitionMarker"), c) : e(s);
  }
  function c(s) {
    return M(s) ? at(t, o)(s) : o(s);
  }
  function o(s) {
    return se(
      t,
      p,
      // Note: we don’t need to reset the way `markdown-rs` does.
      e,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(s);
  }
  function p(s) {
    return t.attempt(Pn, h, h)(s);
  }
  function h(s) {
    return O(s) ? B(t, m, "whitespace")(s) : m(s);
  }
  function m(s) {
    return s === null || v(s) ? (t.exit("definition"), r.parser.defined.push(u), n(s)) : e(s);
  }
}
function Mn(t, n, e) {
  return r;
  function r(l) {
    return M(l) ? at(t, u)(l) : e(l);
  }
  function u(l) {
    return he(t, i, e, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(l);
  }
  function i(l) {
    return O(l) ? B(t, a, "whitespace")(l) : a(l);
  }
  function a(l) {
    return l === null || v(l) ? n(l) : e(l);
  }
}
const Vn = {
  name: "hardBreakEscape",
  tokenize: Hn
};
function Hn(t, n, e) {
  return r;
  function r(i) {
    return t.enter("hardBreakEscape"), t.consume(i), u;
  }
  function u(i) {
    return v(i) ? (t.exit("hardBreakEscape"), n(i)) : e(i);
  }
}
const Un = {
  name: "headingAtx",
  resolve: jn,
  tokenize: Gn
};
function jn(t, n) {
  let e = t.length - 2, r = 3, u, i;
  return t[r][1].type === "whitespace" && (r += 2), e - 2 > r && t[e][1].type === "whitespace" && (e -= 2), t[e][1].type === "atxHeadingSequence" && (r === e - 1 || e - 4 > r && t[e - 2][1].type === "whitespace") && (e -= r + 1 === e ? 2 : 4), e > r && (u = {
    type: "atxHeadingText",
    start: t[r][1].start,
    end: t[e][1].end
  }, i = {
    type: "chunkText",
    start: t[r][1].start,
    end: t[e][1].end,
    contentType: "text"
  }, W(t, r, e - r + 1, [["enter", u, n], ["enter", i, n], ["exit", i, n], ["exit", u, n]])), t;
}
function Gn(t, n, e) {
  let r = 0;
  return u;
  function u(p) {
    return t.enter("atxHeading"), i(p);
  }
  function i(p) {
    return t.enter("atxHeadingSequence"), a(p);
  }
  function a(p) {
    return p === 35 && r++ < 6 ? (t.consume(p), a) : p === null || M(p) ? (t.exit("atxHeadingSequence"), l(p)) : e(p);
  }
  function l(p) {
    return p === 35 ? (t.enter("atxHeadingSequence"), c(p)) : p === null || v(p) ? (t.exit("atxHeading"), n(p)) : O(p) ? B(t, l, "whitespace")(p) : (t.enter("atxHeadingText"), o(p));
  }
  function c(p) {
    return p === 35 ? (t.consume(p), c) : (t.exit("atxHeadingSequence"), l(p));
  }
  function o(p) {
    return p === null || p === 35 || M(p) ? (t.exit("atxHeadingText"), l(p)) : (t.consume(p), o);
  }
}
const Qn = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], Jt = ["pre", "script", "style", "textarea"], Wn = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: Zn,
  tokenize: Jn
}, $n = {
  partial: !0,
  tokenize: Xn
}, Yn = {
  partial: !0,
  tokenize: Kn
};
function Zn(t) {
  let n = t.length;
  for (; n-- && !(t[n][0] === "enter" && t[n][1].type === "htmlFlow"); )
    ;
  return n > 1 && t[n - 2][1].type === "linePrefix" && (t[n][1].start = t[n - 2][1].start, t[n + 1][1].start = t[n - 2][1].start, t.splice(n - 2, 2)), t;
}
function Jn(t, n, e) {
  const r = this;
  let u, i, a, l, c;
  return o;
  function o(f) {
    return p(f);
  }
  function p(f) {
    return t.enter("htmlFlow"), t.enter("htmlFlowData"), t.consume(f), h;
  }
  function h(f) {
    return f === 33 ? (t.consume(f), m) : f === 47 ? (t.consume(f), i = !0, y) : f === 63 ? (t.consume(f), u = 3, r.interrupt ? n : g) : $(f) ? (t.consume(f), a = String.fromCharCode(f), S) : e(f);
  }
  function m(f) {
    return f === 45 ? (t.consume(f), u = 2, s) : f === 91 ? (t.consume(f), u = 5, l = 0, b) : $(f) ? (t.consume(f), u = 4, r.interrupt ? n : g) : e(f);
  }
  function s(f) {
    return f === 45 ? (t.consume(f), r.interrupt ? n : g) : e(f);
  }
  function b(f) {
    const J = "CDATA[";
    return f === J.charCodeAt(l++) ? (t.consume(f), l === J.length ? r.interrupt ? n : L : b) : e(f);
  }
  function y(f) {
    return $(f) ? (t.consume(f), a = String.fromCharCode(f), S) : e(f);
  }
  function S(f) {
    if (f === null || f === 47 || f === 62 || M(f)) {
      const J = f === 47, ot = a.toLowerCase();
      return !J && !i && Jt.includes(ot) ? (u = 1, r.interrupt ? n(f) : L(f)) : Qn.includes(a.toLowerCase()) ? (u = 6, J ? (t.consume(f), k) : r.interrupt ? n(f) : L(f)) : (u = 7, r.interrupt && !r.parser.lazy[r.now().line] ? e(f) : i ? C(f) : E(f));
    }
    return f === 45 || G(f) ? (t.consume(f), a += String.fromCharCode(f), S) : e(f);
  }
  function k(f) {
    return f === 62 ? (t.consume(f), r.interrupt ? n : L) : e(f);
  }
  function C(f) {
    return O(f) ? (t.consume(f), C) : x(f);
  }
  function E(f) {
    return f === 47 ? (t.consume(f), x) : f === 58 || f === 95 || $(f) ? (t.consume(f), F) : O(f) ? (t.consume(f), E) : x(f);
  }
  function F(f) {
    return f === 45 || f === 46 || f === 58 || f === 95 || G(f) ? (t.consume(f), F) : z(f);
  }
  function z(f) {
    return f === 61 ? (t.consume(f), w) : O(f) ? (t.consume(f), z) : E(f);
  }
  function w(f) {
    return f === null || f === 60 || f === 61 || f === 62 || f === 96 ? e(f) : f === 34 || f === 39 ? (t.consume(f), c = f, N) : O(f) ? (t.consume(f), w) : R(f);
  }
  function N(f) {
    return f === c ? (t.consume(f), c = null, A) : f === null || v(f) ? e(f) : (t.consume(f), N);
  }
  function R(f) {
    return f === null || f === 34 || f === 39 || f === 47 || f === 60 || f === 61 || f === 62 || f === 96 || M(f) ? z(f) : (t.consume(f), R);
  }
  function A(f) {
    return f === 47 || f === 62 || O(f) ? E(f) : e(f);
  }
  function x(f) {
    return f === 62 ? (t.consume(f), q) : e(f);
  }
  function q(f) {
    return f === null || v(f) ? L(f) : O(f) ? (t.consume(f), q) : e(f);
  }
  function L(f) {
    return f === 45 && u === 2 ? (t.consume(f), _) : f === 60 && u === 1 ? (t.consume(f), V) : f === 62 && u === 4 ? (t.consume(f), Z) : f === 63 && u === 3 ? (t.consume(f), g) : f === 93 && u === 5 ? (t.consume(f), nt) : v(f) && (u === 6 || u === 7) ? (t.exit("htmlFlowData"), t.check($n, rt, T)(f)) : f === null || v(f) ? (t.exit("htmlFlowData"), T(f)) : (t.consume(f), L);
  }
  function T(f) {
    return t.check(Yn, P, rt)(f);
  }
  function P(f) {
    return t.enter("lineEnding"), t.consume(f), t.exit("lineEnding"), d;
  }
  function d(f) {
    return f === null || v(f) ? T(f) : (t.enter("htmlFlowData"), L(f));
  }
  function _(f) {
    return f === 45 ? (t.consume(f), g) : L(f);
  }
  function V(f) {
    return f === 47 ? (t.consume(f), a = "", Y) : L(f);
  }
  function Y(f) {
    if (f === 62) {
      const J = a.toLowerCase();
      return Jt.includes(J) ? (t.consume(f), Z) : L(f);
    }
    return $(f) && a.length < 8 ? (t.consume(f), a += String.fromCharCode(f), Y) : L(f);
  }
  function nt(f) {
    return f === 93 ? (t.consume(f), g) : L(f);
  }
  function g(f) {
    return f === 62 ? (t.consume(f), Z) : f === 45 && u === 2 ? (t.consume(f), g) : L(f);
  }
  function Z(f) {
    return f === null || v(f) ? (t.exit("htmlFlowData"), rt(f)) : (t.consume(f), Z);
  }
  function rt(f) {
    return t.exit("htmlFlow"), n(f);
  }
}
function Kn(t, n, e) {
  const r = this;
  return u;
  function u(a) {
    return v(a) ? (t.enter("lineEnding"), t.consume(a), t.exit("lineEnding"), i) : e(a);
  }
  function i(a) {
    return r.parser.lazy[r.now().line] ? e(a) : n(a);
  }
}
function Xn(t, n, e) {
  return r;
  function r(u) {
    return t.enter("lineEnding"), t.consume(u), t.exit("lineEnding"), t.attempt(bt, n, e);
  }
}
const tr = {
  name: "htmlText",
  tokenize: er
};
function er(t, n, e) {
  const r = this;
  let u, i, a;
  return l;
  function l(g) {
    return t.enter("htmlText"), t.enter("htmlTextData"), t.consume(g), c;
  }
  function c(g) {
    return g === 33 ? (t.consume(g), o) : g === 47 ? (t.consume(g), z) : g === 63 ? (t.consume(g), E) : $(g) ? (t.consume(g), R) : e(g);
  }
  function o(g) {
    return g === 45 ? (t.consume(g), p) : g === 91 ? (t.consume(g), i = 0, b) : $(g) ? (t.consume(g), C) : e(g);
  }
  function p(g) {
    return g === 45 ? (t.consume(g), s) : e(g);
  }
  function h(g) {
    return g === null ? e(g) : g === 45 ? (t.consume(g), m) : v(g) ? (a = h, V(g)) : (t.consume(g), h);
  }
  function m(g) {
    return g === 45 ? (t.consume(g), s) : h(g);
  }
  function s(g) {
    return g === 62 ? _(g) : g === 45 ? m(g) : h(g);
  }
  function b(g) {
    const Z = "CDATA[";
    return g === Z.charCodeAt(i++) ? (t.consume(g), i === Z.length ? y : b) : e(g);
  }
  function y(g) {
    return g === null ? e(g) : g === 93 ? (t.consume(g), S) : v(g) ? (a = y, V(g)) : (t.consume(g), y);
  }
  function S(g) {
    return g === 93 ? (t.consume(g), k) : y(g);
  }
  function k(g) {
    return g === 62 ? _(g) : g === 93 ? (t.consume(g), k) : y(g);
  }
  function C(g) {
    return g === null || g === 62 ? _(g) : v(g) ? (a = C, V(g)) : (t.consume(g), C);
  }
  function E(g) {
    return g === null ? e(g) : g === 63 ? (t.consume(g), F) : v(g) ? (a = E, V(g)) : (t.consume(g), E);
  }
  function F(g) {
    return g === 62 ? _(g) : E(g);
  }
  function z(g) {
    return $(g) ? (t.consume(g), w) : e(g);
  }
  function w(g) {
    return g === 45 || G(g) ? (t.consume(g), w) : N(g);
  }
  function N(g) {
    return v(g) ? (a = N, V(g)) : O(g) ? (t.consume(g), N) : _(g);
  }
  function R(g) {
    return g === 45 || G(g) ? (t.consume(g), R) : g === 47 || g === 62 || M(g) ? A(g) : e(g);
  }
  function A(g) {
    return g === 47 ? (t.consume(g), _) : g === 58 || g === 95 || $(g) ? (t.consume(g), x) : v(g) ? (a = A, V(g)) : O(g) ? (t.consume(g), A) : _(g);
  }
  function x(g) {
    return g === 45 || g === 46 || g === 58 || g === 95 || G(g) ? (t.consume(g), x) : q(g);
  }
  function q(g) {
    return g === 61 ? (t.consume(g), L) : v(g) ? (a = q, V(g)) : O(g) ? (t.consume(g), q) : A(g);
  }
  function L(g) {
    return g === null || g === 60 || g === 61 || g === 62 || g === 96 ? e(g) : g === 34 || g === 39 ? (t.consume(g), u = g, T) : v(g) ? (a = L, V(g)) : O(g) ? (t.consume(g), L) : (t.consume(g), P);
  }
  function T(g) {
    return g === u ? (t.consume(g), u = void 0, d) : g === null ? e(g) : v(g) ? (a = T, V(g)) : (t.consume(g), T);
  }
  function P(g) {
    return g === null || g === 34 || g === 39 || g === 60 || g === 61 || g === 96 ? e(g) : g === 47 || g === 62 || M(g) ? A(g) : (t.consume(g), P);
  }
  function d(g) {
    return g === 47 || g === 62 || M(g) ? A(g) : e(g);
  }
  function _(g) {
    return g === 62 ? (t.consume(g), t.exit("htmlTextData"), t.exit("htmlText"), n) : e(g);
  }
  function V(g) {
    return t.exit("htmlTextData"), t.enter("lineEnding"), t.consume(g), t.exit("lineEnding"), Y;
  }
  function Y(g) {
    return O(g) ? B(t, nt, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(g) : nt(g);
  }
  function nt(g) {
    return t.enter("htmlTextData"), a(g);
  }
}
const It = {
  name: "labelEnd",
  resolveAll: ar,
  resolveTo: ur,
  tokenize: lr
}, nr = {
  tokenize: or
}, rr = {
  tokenize: sr
}, ir = {
  tokenize: cr
};
function ar(t) {
  let n = -1;
  const e = [];
  for (; ++n < t.length; ) {
    const r = t[n][1];
    if (e.push(t[n]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
      const u = r.type === "labelImage" ? 4 : 2;
      r.type = "data", n += u;
    }
  }
  return t.length !== e.length && W(t, 0, t.length, e), t;
}
function ur(t, n) {
  let e = t.length, r = 0, u, i, a, l;
  for (; e--; )
    if (u = t[e][1], i) {
      if (u.type === "link" || u.type === "labelLink" && u._inactive)
        break;
      t[e][0] === "enter" && u.type === "labelLink" && (u._inactive = !0);
    } else if (a) {
      if (t[e][0] === "enter" && (u.type === "labelImage" || u.type === "labelLink") && !u._balanced && (i = e, u.type !== "labelLink")) {
        r = 2;
        break;
      }
    } else u.type === "labelEnd" && (a = e);
  const c = {
    type: t[i][1].type === "labelLink" ? "link" : "image",
    start: {
      ...t[i][1].start
    },
    end: {
      ...t[t.length - 1][1].end
    }
  }, o = {
    type: "label",
    start: {
      ...t[i][1].start
    },
    end: {
      ...t[a][1].end
    }
  }, p = {
    type: "labelText",
    start: {
      ...t[i + r + 2][1].end
    },
    end: {
      ...t[a - 2][1].start
    }
  };
  return l = [["enter", c, n], ["enter", o, n]], l = j(l, t.slice(i + 1, i + r + 3)), l = j(l, [["enter", p, n]]), l = j(l, yt(n.parser.constructs.insideSpan.null, t.slice(i + r + 4, a - 3), n)), l = j(l, [["exit", p, n], t[a - 2], t[a - 1], ["exit", o, n]]), l = j(l, t.slice(a + 1)), l = j(l, [["exit", c, n]]), W(t, i, t.length, l), t;
}
function lr(t, n, e) {
  const r = this;
  let u = r.events.length, i, a;
  for (; u--; )
    if ((r.events[u][1].type === "labelImage" || r.events[u][1].type === "labelLink") && !r.events[u][1]._balanced) {
      i = r.events[u][1];
      break;
    }
  return l;
  function l(m) {
    return i ? i._inactive ? h(m) : (a = r.parser.defined.includes(et(r.sliceSerialize({
      start: i.end,
      end: r.now()
    }))), t.enter("labelEnd"), t.enter("labelMarker"), t.consume(m), t.exit("labelMarker"), t.exit("labelEnd"), c) : e(m);
  }
  function c(m) {
    return m === 40 ? t.attempt(nr, p, a ? p : h)(m) : m === 91 ? t.attempt(rr, p, a ? o : h)(m) : a ? p(m) : h(m);
  }
  function o(m) {
    return t.attempt(ir, p, h)(m);
  }
  function p(m) {
    return n(m);
  }
  function h(m) {
    return i._balanced = !0, e(m);
  }
}
function or(t, n, e) {
  return r;
  function r(h) {
    return t.enter("resource"), t.enter("resourceMarker"), t.consume(h), t.exit("resourceMarker"), u;
  }
  function u(h) {
    return M(h) ? at(t, i)(h) : i(h);
  }
  function i(h) {
    return h === 41 ? p(h) : se(t, a, l, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(h);
  }
  function a(h) {
    return M(h) ? at(t, c)(h) : p(h);
  }
  function l(h) {
    return e(h);
  }
  function c(h) {
    return h === 34 || h === 39 || h === 40 ? he(t, o, e, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(h) : p(h);
  }
  function o(h) {
    return M(h) ? at(t, p)(h) : p(h);
  }
  function p(h) {
    return h === 41 ? (t.enter("resourceMarker"), t.consume(h), t.exit("resourceMarker"), t.exit("resource"), n) : e(h);
  }
}
function sr(t, n, e) {
  const r = this;
  return u;
  function u(l) {
    return ce.call(r, t, i, a, "reference", "referenceMarker", "referenceString")(l);
  }
  function i(l) {
    return r.parser.defined.includes(et(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? n(l) : e(l);
  }
  function a(l) {
    return e(l);
  }
}
function cr(t, n, e) {
  return r;
  function r(i) {
    return t.enter("reference"), t.enter("referenceMarker"), t.consume(i), t.exit("referenceMarker"), u;
  }
  function u(i) {
    return i === 93 ? (t.enter("referenceMarker"), t.consume(i), t.exit("referenceMarker"), t.exit("reference"), n) : e(i);
  }
}
const hr = {
  name: "labelStartImage",
  resolveAll: It.resolveAll,
  tokenize: pr
};
function pr(t, n, e) {
  const r = this;
  return u;
  function u(l) {
    return t.enter("labelImage"), t.enter("labelImageMarker"), t.consume(l), t.exit("labelImageMarker"), i;
  }
  function i(l) {
    return l === 91 ? (t.enter("labelMarker"), t.consume(l), t.exit("labelMarker"), t.exit("labelImage"), a) : e(l);
  }
  function a(l) {
    return l === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? e(l) : n(l);
  }
}
const gr = {
  name: "labelStartLink",
  resolveAll: It.resolveAll,
  tokenize: fr
};
function fr(t, n, e) {
  const r = this;
  return u;
  function u(a) {
    return t.enter("labelLink"), t.enter("labelMarker"), t.consume(a), t.exit("labelMarker"), t.exit("labelLink"), i;
  }
  function i(a) {
    return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? e(a) : n(a);
  }
}
const Et = {
  name: "lineEnding",
  tokenize: mr
};
function mr(t, n) {
  return e;
  function e(r) {
    return t.enter("lineEnding"), t.consume(r), t.exit("lineEnding"), B(t, n, "linePrefix");
  }
}
const kt = {
  name: "thematicBreak",
  tokenize: br
};
function br(t, n, e) {
  let r = 0, u;
  return i;
  function i(o) {
    return t.enter("thematicBreak"), a(o);
  }
  function a(o) {
    return u = o, l(o);
  }
  function l(o) {
    return o === u ? (t.enter("thematicBreakSequence"), c(o)) : r >= 3 && (o === null || v(o)) ? (t.exit("thematicBreak"), n(o)) : e(o);
  }
  function c(o) {
    return o === u ? (t.consume(o), r++, c) : (t.exit("thematicBreakSequence"), O(o) ? B(t, l, "whitespace")(o) : l(o));
  }
}
const Q = {
  continuation: {
    tokenize: wr
  },
  exit: yr,
  name: "list",
  tokenize: kr
}, dr = {
  partial: !0,
  tokenize: Cr
}, xr = {
  partial: !0,
  tokenize: Sr
};
function kr(t, n, e) {
  const r = this, u = r.events[r.events.length - 1];
  let i = u && u[1].type === "linePrefix" ? u[2].sliceSerialize(u[1], !0).length : 0, a = 0;
  return l;
  function l(s) {
    const b = r.containerState.type || (s === 42 || s === 43 || s === 45 ? "listUnordered" : "listOrdered");
    if (b === "listUnordered" ? !r.containerState.marker || s === r.containerState.marker : zt(s)) {
      if (r.containerState.type || (r.containerState.type = b, t.enter(b, {
        _container: !0
      })), b === "listUnordered")
        return t.enter("listItemPrefix"), s === 42 || s === 45 ? t.check(kt, e, o)(s) : o(s);
      if (!r.interrupt || s === 49)
        return t.enter("listItemPrefix"), t.enter("listItemValue"), c(s);
    }
    return e(s);
  }
  function c(s) {
    return zt(s) && ++a < 10 ? (t.consume(s), c) : (!r.interrupt || a < 2) && (r.containerState.marker ? s === r.containerState.marker : s === 41 || s === 46) ? (t.exit("listItemValue"), o(s)) : e(s);
  }
  function o(s) {
    return t.enter("listItemMarker"), t.consume(s), t.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || s, t.check(
      bt,
      // Can’t be empty when interrupting.
      r.interrupt ? e : p,
      t.attempt(dr, m, h)
    );
  }
  function p(s) {
    return r.containerState.initialBlankLine = !0, i++, m(s);
  }
  function h(s) {
    return O(s) ? (t.enter("listItemPrefixWhitespace"), t.consume(s), t.exit("listItemPrefixWhitespace"), m) : e(s);
  }
  function m(s) {
    return r.containerState.size = i + r.sliceSerialize(t.exit("listItemPrefix"), !0).length, n(s);
  }
}
function wr(t, n, e) {
  const r = this;
  return r.containerState._closeFlow = void 0, t.check(bt, u, i);
  function u(l) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, B(t, n, "listItemIndent", r.containerState.size + 1)(l);
  }
  function i(l) {
    return r.containerState.furtherBlankLines || !O(l) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, a(l)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, t.attempt(xr, n, a)(l));
  }
  function a(l) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, B(t, t.attempt(Q, n, e), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(l);
  }
}
function Sr(t, n, e) {
  const r = this;
  return B(t, u, "listItemIndent", r.containerState.size + 1);
  function u(i) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "listItemIndent" && a[2].sliceSerialize(a[1], !0).length === r.containerState.size ? n(i) : e(i);
  }
}
function yr(t) {
  t.exit(this.containerState.type);
}
function Cr(t, n, e) {
  const r = this;
  return B(t, u, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function u(i) {
    const a = r.events[r.events.length - 1];
    return !O(i) && a && a[1].type === "listItemPrefixWhitespace" ? n(i) : e(i);
  }
}
const Kt = {
  name: "setextUnderline",
  resolveTo: Ar,
  tokenize: Er
};
function Ar(t, n) {
  let e = t.length, r, u, i;
  for (; e--; )
    if (t[e][0] === "enter") {
      if (t[e][1].type === "content") {
        r = e;
        break;
      }
      t[e][1].type === "paragraph" && (u = e);
    } else
      t[e][1].type === "content" && t.splice(e, 1), !i && t[e][1].type === "definition" && (i = e);
  const a = {
    type: "setextHeading",
    start: {
      ...t[r][1].start
    },
    end: {
      ...t[t.length - 1][1].end
    }
  };
  return t[u][1].type = "setextHeadingText", i ? (t.splice(u, 0, ["enter", a, n]), t.splice(i + 1, 0, ["exit", t[r][1], n]), t[r][1].end = {
    ...t[i][1].end
  }) : t[r][1] = a, t.push(["exit", a, n]), t;
}
function Er(t, n, e) {
  const r = this;
  let u;
  return i;
  function i(o) {
    let p = r.events.length, h;
    for (; p--; )
      if (r.events[p][1].type !== "lineEnding" && r.events[p][1].type !== "linePrefix" && r.events[p][1].type !== "content") {
        h = r.events[p][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || h) ? (t.enter("setextHeadingLine"), u = o, a(o)) : e(o);
  }
  function a(o) {
    return t.enter("setextHeadingLineSequence"), l(o);
  }
  function l(o) {
    return o === u ? (t.consume(o), l) : (t.exit("setextHeadingLineSequence"), O(o) ? B(t, c, "lineSuffix")(o) : c(o));
  }
  function c(o) {
    return o === null || v(o) ? (t.exit("setextHeadingLine"), n(o)) : e(o);
  }
}
const Dr = {
  tokenize: qr
};
function qr(t) {
  const n = this, e = t.attempt(
    // Try to parse a blank line.
    bt,
    r,
    // Try to parse initial flow (essentially, only code).
    t.attempt(this.parser.constructs.flowInitial, u, B(t, t.attempt(this.parser.constructs.flow, u, t.attempt(In, u)), "linePrefix"))
  );
  return e;
  function r(i) {
    if (i === null) {
      t.consume(i);
      return;
    }
    return t.enter("lineEndingBlank"), t.consume(i), t.exit("lineEndingBlank"), n.currentConstruct = void 0, e;
  }
  function u(i) {
    if (i === null) {
      t.consume(i);
      return;
    }
    return t.enter("lineEnding"), t.consume(i), t.exit("lineEnding"), n.currentConstruct = void 0, e;
  }
}
const Lr = {
  resolveAll: ge()
}, vr = pe("string"), zr = pe("text");
function pe(t) {
  return {
    resolveAll: ge(t === "text" ? Tr : void 0),
    tokenize: n
  };
  function n(e) {
    const r = this, u = this.parser.constructs[t], i = e.attempt(u, a, l);
    return a;
    function a(p) {
      return o(p) ? i(p) : l(p);
    }
    function l(p) {
      if (p === null) {
        e.consume(p);
        return;
      }
      return e.enter("data"), e.consume(p), c;
    }
    function c(p) {
      return o(p) ? (e.exit("data"), i(p)) : (e.consume(p), c);
    }
    function o(p) {
      if (p === null)
        return !0;
      const h = u[p];
      let m = -1;
      if (h)
        for (; ++m < h.length; ) {
          const s = h[m];
          if (!s.previous || s.previous.call(r, r.previous))
            return !0;
        }
      return !1;
    }
  }
}
function ge(t) {
  return n;
  function n(e, r) {
    let u = -1, i;
    for (; ++u <= e.length; )
      i === void 0 ? e[u] && e[u][1].type === "data" && (i = u, u++) : (!e[u] || e[u][1].type !== "data") && (u !== i + 2 && (e[i][1].end = e[u - 1][1].end, e.splice(i + 2, u - i - 2), u = i + 2), i = void 0);
    return t ? t(e, r) : e;
  }
}
function Tr(t, n) {
  let e = 0;
  for (; ++e <= t.length; )
    if ((e === t.length || t[e][1].type === "lineEnding") && t[e - 1][1].type === "data") {
      const r = t[e - 1][1], u = n.sliceStream(r);
      let i = u.length, a = -1, l = 0, c;
      for (; i--; ) {
        const o = u[i];
        if (typeof o == "string") {
          for (a = o.length; o.charCodeAt(a - 1) === 32; )
            l++, a--;
          if (a) break;
          a = -1;
        } else if (o === -2)
          c = !0, l++;
        else if (o !== -1) {
          i++;
          break;
        }
      }
      if (n._contentTypeTextTrailing && e === t.length && (l = 0), l) {
        const o = {
          type: e === t.length || c || l < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: i ? a : r.start._bufferIndex + a,
            _index: r.start._index + i,
            line: r.end.line,
            column: r.end.column - l,
            offset: r.end.offset - l
          },
          end: {
            ...r.end
          }
        };
        r.end = {
          ...o.start
        }, r.start.offset === r.end.offset ? Object.assign(r, o) : (t.splice(e, 0, ["enter", o, n], ["exit", o, n]), e += 2);
      }
      e++;
    }
  return t;
}
const Ir = {
  42: Q,
  43: Q,
  45: Q,
  48: Q,
  49: Q,
  50: Q,
  51: Q,
  52: Q,
  53: Q,
  54: Q,
  55: Q,
  56: Q,
  57: Q,
  62: ae
}, Fr = {
  91: On
}, Nr = {
  [-2]: At,
  [-1]: At,
  32: At
}, Rr = {
  35: Un,
  42: kt,
  45: [Kt, kt],
  60: Wn,
  61: Kt,
  95: kt,
  96: Zt,
  126: Zt
}, Br = {
  38: le,
  92: ue
}, Or = {
  [-5]: Et,
  [-4]: Et,
  [-3]: Et,
  33: hr,
  38: le,
  42: Tt,
  60: [gn, tr],
  91: gr,
  92: [Vn, ue],
  93: It,
  95: Tt,
  96: Dn
}, Pr = {
  null: [Tt, Lr]
}, _r = {
  null: [42, 95]
}, Mr = {
  null: []
}, Vr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: _r,
  contentInitial: Fr,
  disable: Mr,
  document: Ir,
  flow: Rr,
  flowInitial: Nr,
  insideSpan: Pr,
  string: Br,
  text: Or
}, Symbol.toStringTag, { value: "Module" }));
function Hr(t, n, e) {
  let r = {
    _bufferIndex: -1,
    _index: 0,
    line: e && e.line || 1,
    column: e && e.column || 1,
    offset: e && e.offset || 0
  };
  const u = {}, i = [];
  let a = [], l = [];
  const c = {
    attempt: N(z),
    check: N(w),
    consume: C,
    enter: E,
    exit: F,
    interrupt: N(w, {
      interrupt: !0
    })
  }, o = {
    code: null,
    containerState: {},
    defineSkip: y,
    events: [],
    now: b,
    parser: t,
    previous: null,
    sliceSerialize: m,
    sliceStream: s,
    write: h
  };
  let p = n.tokenize.call(o, c);
  return n.resolveAll && i.push(n), o;
  function h(q) {
    return a = j(a, q), S(), a[a.length - 1] !== null ? [] : (R(n, 0), o.events = yt(i, o.events, o), o.events);
  }
  function m(q, L) {
    return jr(s(q), L);
  }
  function s(q) {
    return Ur(a, q);
  }
  function b() {
    const {
      _bufferIndex: q,
      _index: L,
      line: T,
      column: P,
      offset: d
    } = r;
    return {
      _bufferIndex: q,
      _index: L,
      line: T,
      column: P,
      offset: d
    };
  }
  function y(q) {
    u[q.line] = q.column, x();
  }
  function S() {
    let q;
    for (; r._index < a.length; ) {
      const L = a[r._index];
      if (typeof L == "string")
        for (q = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === q && r._bufferIndex < L.length; )
          k(L.charCodeAt(r._bufferIndex));
      else
        k(L);
    }
  }
  function k(q) {
    p = p(q);
  }
  function C(q) {
    v(q) ? (r.line++, r.column = 1, r.offset += q === -3 ? 2 : 1, x()) : q !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    a[r._index].length && (r._bufferIndex = -1, r._index++)), o.previous = q;
  }
  function E(q, L) {
    const T = L || {};
    return T.type = q, T.start = b(), o.events.push(["enter", T, o]), l.push(T), T;
  }
  function F(q) {
    const L = l.pop();
    return L.end = b(), o.events.push(["exit", L, o]), L;
  }
  function z(q, L) {
    R(q, L.from);
  }
  function w(q, L) {
    L.restore();
  }
  function N(q, L) {
    return T;
    function T(P, d, _) {
      let V, Y, nt, g;
      return Array.isArray(P) ? (
        /* c8 ignore next 1 */
        rt(P)
      ) : "tokenize" in P ? (
        // Looks like a construct.
        rt([
          /** @type {Construct} */
          P
        ])
      ) : Z(P);
      function Z(H) {
        return gt;
        function gt(ut) {
          const st = ut !== null && H[ut], ct = ut !== null && H.null, Ct = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(st) ? st : st ? [st] : [],
            ...Array.isArray(ct) ? ct : ct ? [ct] : []
          ];
          return rt(Ct)(ut);
        }
      }
      function rt(H) {
        return V = H, Y = 0, H.length === 0 ? _ : f(H[Y]);
      }
      function f(H) {
        return gt;
        function gt(ut) {
          return g = A(), nt = H, H.partial || (o.currentConstruct = H), H.name && o.parser.constructs.disable.null.includes(H.name) ? ot() : H.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            L ? Object.assign(Object.create(o), L) : o,
            c,
            J,
            ot
          )(ut);
        }
      }
      function J(H) {
        return q(nt, g), d;
      }
      function ot(H) {
        return g.restore(), ++Y < V.length ? f(V[Y]) : _;
      }
    }
  }
  function R(q, L) {
    q.resolveAll && !i.includes(q) && i.push(q), q.resolve && W(o.events, L, o.events.length - L, q.resolve(o.events.slice(L), o)), q.resolveTo && (o.events = q.resolveTo(o.events, o));
  }
  function A() {
    const q = b(), L = o.previous, T = o.currentConstruct, P = o.events.length, d = Array.from(l);
    return {
      from: P,
      restore: _
    };
    function _() {
      r = q, o.previous = L, o.currentConstruct = T, o.events.length = P, l = d, x();
    }
  }
  function x() {
    r.line in u && r.column < 2 && (r.column = u[r.line], r.offset += u[r.line] - 1);
  }
}
function Ur(t, n) {
  const e = n.start._index, r = n.start._bufferIndex, u = n.end._index, i = n.end._bufferIndex;
  let a;
  if (e === u)
    a = [t[e].slice(r, i)];
  else {
    if (a = t.slice(e, u), r > -1) {
      const l = a[0];
      typeof l == "string" ? a[0] = l.slice(r) : a.shift();
    }
    i > 0 && a.push(t[u].slice(0, i));
  }
  return a;
}
function jr(t, n) {
  let e = -1;
  const r = [];
  let u;
  for (; ++e < t.length; ) {
    const i = t[e];
    let a;
    if (typeof i == "string")
      a = i;
    else switch (i) {
      case -5: {
        a = "\r";
        break;
      }
      case -4: {
        a = `
`;
        break;
      }
      case -3: {
        a = `\r
`;
        break;
      }
      case -2: {
        a = n ? " " : "	";
        break;
      }
      case -1: {
        if (!n && u) continue;
        a = " ";
        break;
      }
      default:
        a = String.fromCharCode(i);
    }
    u = i === -2, r.push(a);
  }
  return r.join("");
}
function Gr(t) {
  const r = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      je([Vr, ...(t || {}).extensions || []])
    ),
    content: u(un),
    defined: [],
    document: u(on),
    flow: u(Dr),
    lazy: {},
    string: u(vr),
    text: u(zr)
  };
  return r;
  function u(i) {
    return a;
    function a(l) {
      return Hr(r, i, l);
    }
  }
}
function Qr(t) {
  for (; !oe(t); )
    ;
  return t;
}
const Xt = /[\0\t\n\r]/g;
function Wr() {
  let t = 1, n = "", e = !0, r;
  return u;
  function u(i, a, l) {
    const c = [];
    let o, p, h, m, s;
    for (i = n + (typeof i == "string" ? i.toString() : new TextDecoder(a || void 0).decode(i)), h = 0, n = "", e && (i.charCodeAt(0) === 65279 && h++, e = void 0); h < i.length; ) {
      if (Xt.lastIndex = h, o = Xt.exec(i), m = o && o.index !== void 0 ? o.index : i.length, s = i.charCodeAt(m), !o) {
        n = i.slice(h);
        break;
      }
      if (s === 10 && h === m && r)
        c.push(-3), r = void 0;
      else
        switch (r && (c.push(-5), r = void 0), h < m && (c.push(i.slice(h, m)), t += m - h), s) {
          case 0: {
            c.push(65533), t++;
            break;
          }
          case 9: {
            for (p = Math.ceil(t / 4) * 4, c.push(-2); t++ < p; ) c.push(-1);
            break;
          }
          case 10: {
            c.push(-4), t = 1;
            break;
          }
          default:
            r = !0, t = 1;
        }
      h = m + 1;
    }
    return l && (r && c.push(-5), n && c.push(n), c.push(null)), c;
  }
}
function Bi(t, n, e) {
  return typeof n != "string" && (e = n, n = void 0), an(e)(Qr(Gr(e).document().write(Wr()(t, n, !0))));
}
function Ft(t, n, e, r, u, i, a, l, c, o, p, h, m, s, b) {
  let y, S;
  return k;
  function k(d) {
    return t.enter(r), t.enter(u), t.consume(d), t.exit(u), C;
  }
  function C(d) {
    return d === 35 ? (y = a, E(d)) : d === 46 ? (y = l, E(d)) : d === 58 || d === 95 || $(d) ? (t.enter(i), t.enter(c), t.consume(d), w) : b && O(d) ? B(t, C, "whitespace")(d) : !b && M(d) ? at(t, C)(d) : P(d);
  }
  function E(d) {
    const _ = (
      /** @type {TokenType} */
      y + "Marker"
    );
    return t.enter(i), t.enter(y), t.enter(_), t.consume(d), t.exit(_), F;
  }
  function F(d) {
    if (d === null || d === 34 || d === 35 || d === 39 || d === 46 || d === 60 || d === 61 || d === 62 || d === 96 || d === 125 || M(d))
      return e(d);
    const _ = (
      /** @type {TokenType} */
      y + "Value"
    );
    return t.enter(_), t.consume(d), z;
  }
  function z(d) {
    if (d === null || d === 34 || d === 39 || d === 60 || d === 61 || d === 62 || d === 96)
      return e(d);
    if (d === 35 || d === 46 || d === 125 || M(d)) {
      const _ = (
        /** @type {TokenType} */
        y + "Value"
      );
      return t.exit(_), t.exit(y), t.exit(i), C(d);
    }
    return t.consume(d), z;
  }
  function w(d) {
    return d === 45 || d === 46 || d === 58 || d === 95 || G(d) ? (t.consume(d), w) : (t.exit(c), b && O(d) ? B(t, N, "whitespace")(d) : !b && M(d) ? at(t, N)(d) : N(d));
  }
  function N(d) {
    return d === 61 ? (t.enter(o), t.consume(d), t.exit(o), R) : (t.exit(i), C(d));
  }
  function R(d) {
    return d === null || d === 60 || d === 61 || d === 62 || d === 96 || d === 125 || b && v(d) ? e(d) : d === 34 || d === 39 ? (t.enter(p), t.enter(m), t.consume(d), t.exit(m), S = d, x) : b && O(d) ? B(t, R, "whitespace")(d) : !b && M(d) ? at(t, R)(d) : (t.enter(h), t.enter(s), t.consume(d), S = void 0, A);
  }
  function A(d) {
    return d === null || d === 34 || d === 39 || d === 60 || d === 61 || d === 62 || d === 96 ? e(d) : d === 125 || M(d) ? (t.exit(s), t.exit(h), t.exit(i), C(d)) : (t.consume(d), A);
  }
  function x(d) {
    return d === S ? (t.enter(m), t.consume(d), t.exit(m), t.exit(p), t.exit(i), T) : (t.enter(h), q(d));
  }
  function q(d) {
    return d === S ? (t.exit(h), x(d)) : d === null ? e(d) : v(d) ? b ? e(d) : at(t, q)(d) : (t.enter(s), t.consume(d), L);
  }
  function L(d) {
    return d === S || d === null || v(d) ? (t.exit(s), q(d)) : (t.consume(d), L);
  }
  function T(d) {
    return d === 125 || M(d) ? C(d) : P(d);
  }
  function P(d) {
    return d === 125 ? (t.enter(u), t.consume(d), t.exit(u), t.exit(r), n) : e(d);
  }
}
function Nt(t, n, e, r, u, i, a) {
  let l = 0, c = 0, o;
  return p;
  function p(S) {
    return t.enter(r), t.enter(u), t.consume(S), t.exit(u), h;
  }
  function h(S) {
    return S === 93 ? (t.enter(u), t.consume(S), t.exit(u), t.exit(r), n) : (t.enter(i), m(S));
  }
  function m(S) {
    if (S === 93 && !c)
      return y(S);
    const k = t.enter("chunkText", {
      contentType: "text",
      previous: o
    });
    return o && (o.next = k), o = k, s(S);
  }
  function s(S) {
    return S === null || l > 999 || S === 91 && ++c > 32 ? e(S) : S === 93 && !c-- ? (t.exit("chunkText"), y(S)) : v(S) ? a ? e(S) : (t.consume(S), t.exit("chunkText"), m) : (t.consume(S), S === 92 ? b : s);
  }
  function b(S) {
    return S === 91 || S === 92 || S === 93 ? (t.consume(S), l++, s) : s(S);
  }
  function y(S) {
    return t.exit(i), t.enter(u), t.consume(S), t.exit(u), t.exit(r), n;
  }
}
function Rt(t, n, e, r) {
  const u = this;
  return i;
  function i(l) {
    return $(l) ? (t.enter(r), t.consume(l), a) : e(l);
  }
  function a(l) {
    return l === 45 || l === 95 || G(l) ? (t.consume(l), a) : (t.exit(r), u.previous === 45 || u.previous === 95 ? e(l) : n(l));
  }
}
const $r = {
  tokenize: Jr,
  concrete: !0
}, Yr = {
  tokenize: Kr,
  partial: !0
}, Zr = {
  tokenize: Xr,
  partial: !0
}, dt = {
  tokenize: ti,
  partial: !0
};
function Jr(t, n, e) {
  const r = this, u = r.events[r.events.length - 1], i = u && u[1].type === "linePrefix" ? u[2].sliceSerialize(u[1], !0).length : 0;
  let a = 0, l;
  return c;
  function c(A) {
    return t.enter("directiveContainer"), t.enter("directiveContainerFence"), t.enter("directiveContainerSequence"), o(A);
  }
  function o(A) {
    return A === 58 ? (t.consume(A), a++, o) : a < 3 ? e(A) : (t.exit("directiveContainerSequence"), Rt.call(r, t, p, e, "directiveContainerName")(A));
  }
  function p(A) {
    return A === 91 ? t.attempt(Yr, h, h)(A) : h(A);
  }
  function h(A) {
    return A === 123 ? t.attempt(Zr, m, m)(A) : m(A);
  }
  function m(A) {
    return B(t, s, "whitespace")(A);
  }
  function s(A) {
    return t.exit("directiveContainerFence"), A === null ? N(A) : v(A) ? r.interrupt ? n(A) : t.attempt(dt, b, N)(A) : e(A);
  }
  function b(A) {
    return A === null ? N(A) : v(A) ? t.check(dt, E, N)(A) : (t.enter("directiveContainerContent"), y(A));
  }
  function y(A) {
    return t.attempt({
      tokenize: R,
      partial: !0
    }, w, i ? B(t, S, "linePrefix", i + 1) : S)(A);
  }
  function S(A) {
    return A === null ? w(A) : v(A) ? t.check(dt, C, w)(A) : C(A);
  }
  function k(A) {
    if (A === null) {
      const x = t.exit("chunkDocument");
      return r.parser.lazy[x.start.line] = !1, w(A);
    }
    return v(A) ? t.check(dt, F, z)(A) : (t.consume(A), k);
  }
  function C(A) {
    const x = t.enter("chunkDocument", {
      contentType: "document",
      previous: l
    });
    return l && (l.next = x), l = x, k(A);
  }
  function E(A) {
    return t.enter("directiveContainerContent"), y(A);
  }
  function F(A) {
    t.consume(A);
    const x = t.exit("chunkDocument");
    return r.parser.lazy[x.start.line] = !1, y;
  }
  function z(A) {
    const x = t.exit("chunkDocument");
    return r.parser.lazy[x.start.line] = !1, w(A);
  }
  function w(A) {
    return t.exit("directiveContainerContent"), N(A);
  }
  function N(A) {
    return t.exit("directiveContainer"), n(A);
  }
  function R(A, x, q) {
    let L = 0;
    return B(A, T, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
    function T(_) {
      return A.enter("directiveContainerFence"), A.enter("directiveContainerSequence"), P(_);
    }
    function P(_) {
      return _ === 58 ? (A.consume(_), L++, P) : L < a ? q(_) : (A.exit("directiveContainerSequence"), B(A, d, "whitespace")(_));
    }
    function d(_) {
      return _ === null || v(_) ? (A.exit("directiveContainerFence"), x(_)) : q(_);
    }
  }
}
function Kr(t, n, e) {
  return Nt(t, n, e, "directiveContainerLabel", "directiveContainerLabelMarker", "directiveContainerLabelString", !0);
}
function Xr(t, n, e) {
  return Ft(t, n, e, "directiveContainerAttributes", "directiveContainerAttributesMarker", "directiveContainerAttribute", "directiveContainerAttributeId", "directiveContainerAttributeClass", "directiveContainerAttributeName", "directiveContainerAttributeInitializerMarker", "directiveContainerAttributeValueLiteral", "directiveContainerAttributeValue", "directiveContainerAttributeValueMarker", "directiveContainerAttributeValueData", !0);
}
function ti(t, n, e) {
  const r = this;
  return u;
  function u(a) {
    return t.enter("lineEnding"), t.consume(a), t.exit("lineEnding"), i;
  }
  function i(a) {
    return r.parser.lazy[r.now().line] ? e(a) : n(a);
  }
}
const ei = {
  tokenize: ii
}, ni = {
  tokenize: ai,
  partial: !0
}, ri = {
  tokenize: ui,
  partial: !0
};
function ii(t, n, e) {
  const r = this;
  return u;
  function u(p) {
    return t.enter("directiveLeaf"), t.enter("directiveLeafSequence"), t.consume(p), i;
  }
  function i(p) {
    return p === 58 ? (t.consume(p), t.exit("directiveLeafSequence"), Rt.call(r, t, a, e, "directiveLeafName")) : e(p);
  }
  function a(p) {
    return p === 91 ? t.attempt(ni, l, l)(p) : l(p);
  }
  function l(p) {
    return p === 123 ? t.attempt(ri, c, c)(p) : c(p);
  }
  function c(p) {
    return B(t, o, "whitespace")(p);
  }
  function o(p) {
    return p === null || v(p) ? (t.exit("directiveLeaf"), n(p)) : e(p);
  }
}
function ai(t, n, e) {
  return Nt(t, n, e, "directiveLeafLabel", "directiveLeafLabelMarker", "directiveLeafLabelString", !0);
}
function ui(t, n, e) {
  return Ft(t, n, e, "directiveLeafAttributes", "directiveLeafAttributesMarker", "directiveLeafAttribute", "directiveLeafAttributeId", "directiveLeafAttributeClass", "directiveLeafAttributeName", "directiveLeafAttributeInitializerMarker", "directiveLeafAttributeValueLiteral", "directiveLeafAttributeValue", "directiveLeafAttributeValueMarker", "directiveLeafAttributeValueData", !0);
}
const li = {
  tokenize: hi,
  previous: ci
}, oi = {
  tokenize: pi,
  partial: !0
}, si = {
  tokenize: gi,
  partial: !0
};
function ci(t) {
  return t !== 58 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function hi(t, n, e) {
  const r = this;
  return u;
  function u(c) {
    return t.enter("directiveText"), t.enter("directiveTextMarker"), t.consume(c), t.exit("directiveTextMarker"), Rt.call(r, t, i, e, "directiveTextName");
  }
  function i(c) {
    return c === 58 ? e(c) : c === 91 ? t.attempt(oi, a, a)(c) : a(c);
  }
  function a(c) {
    return c === 123 ? t.attempt(si, l, l)(c) : l(c);
  }
  function l(c) {
    return t.exit("directiveText"), n(c);
  }
}
function pi(t, n, e) {
  return Nt(t, n, e, "directiveTextLabel", "directiveTextLabelMarker", "directiveTextLabelString");
}
function gi(t, n, e) {
  return Ft(t, n, e, "directiveTextAttributes", "directiveTextAttributesMarker", "directiveTextAttribute", "directiveTextAttributeId", "directiveTextAttributeClass", "directiveTextAttributeName", "directiveTextAttributeInitializerMarker", "directiveTextAttributeValueLiteral", "directiveTextAttributeValue", "directiveTextAttributeValueMarker", "directiveTextAttributeValueData");
}
function Oi() {
  return {
    text: {
      58: li
    },
    flow: {
      58: [$r, ei]
    }
  };
}
const te = {
  0: "�",
  128: "€",
  130: "‚",
  131: "ƒ",
  132: "„",
  133: "…",
  134: "†",
  135: "‡",
  136: "ˆ",
  137: "‰",
  138: "Š",
  139: "‹",
  140: "Œ",
  142: "Ž",
  145: "‘",
  146: "’",
  147: "“",
  148: "”",
  149: "•",
  150: "–",
  151: "—",
  152: "˜",
  153: "™",
  154: "š",
  155: "›",
  156: "œ",
  158: "ž",
  159: "Ÿ"
};
function fe(t) {
  const n = typeof t == "string" ? t.charCodeAt(0) : t;
  return n >= 48 && n <= 57;
}
function fi(t) {
  const n = typeof t == "string" ? t.charCodeAt(0) : t;
  return n >= 97 && n <= 102 || n >= 65 && n <= 70 || n >= 48 && n <= 57;
}
function mi(t) {
  const n = typeof t == "string" ? t.charCodeAt(0) : t;
  return n >= 97 && n <= 122 || n >= 65 && n <= 90;
}
function ee(t) {
  return mi(t) || fe(t);
}
const bi = [
  "",
  /* 1: Non terminated (named) */
  "Named character references must be terminated by a semicolon",
  /* 2: Non terminated (numeric) */
  "Numeric character references must be terminated by a semicolon",
  /* 3: Empty (named) */
  "Named character references cannot be empty",
  /* 4: Empty (numeric) */
  "Numeric character references cannot be empty",
  /* 5: Unknown (named) */
  "Named character references must be known",
  /* 6: Disallowed (numeric) */
  "Numeric character references cannot be disallowed",
  /* 7: Prohibited (numeric) */
  "Numeric character references cannot be outside the permissible Unicode range"
];
function Dt(t, n) {
  const e = n || {}, r = typeof e.additional == "string" ? e.additional.charCodeAt(0) : e.additional, u = [];
  let i = 0, a = -1, l = "", c, o;
  e.position && ("start" in e.position || "indent" in e.position ? (o = e.position.indent, c = e.position.start) : c = e.position);
  let p = (c ? c.line : 0) || 1, h = (c ? c.column : 0) || 1, m = b(), s;
  for (i--; ++i <= t.length; )
    if (s === 10 && (h = (o ? o[a] : 0) || 1), s = t.charCodeAt(i), s === 38) {
      const k = t.charCodeAt(i + 1);
      if (k === 9 || k === 10 || k === 12 || k === 32 || k === 38 || k === 60 || Number.isNaN(k) || r && k === r) {
        l += String.fromCharCode(s), h++;
        continue;
      }
      const C = i + 1;
      let E = C, F = C, z;
      if (k === 35) {
        F = ++E;
        const T = t.charCodeAt(F);
        T === 88 || T === 120 ? (z = "hexadecimal", F = ++E) : z = "decimal";
      } else
        z = "named";
      let w = "", N = "", R = "";
      const A = z === "named" ? ee : z === "decimal" ? fe : fi;
      for (F--; ++F <= t.length; ) {
        const T = t.charCodeAt(F);
        if (!A(T))
          break;
        R += String.fromCharCode(T), z === "named" && He.includes(R) && (w = R, N = wt(R));
      }
      let x = t.charCodeAt(F) === 59;
      if (x) {
        F++;
        const T = z === "named" ? wt(R) : !1;
        T && (w = R, N = T);
      }
      let q = 1 + F - C, L = "";
      if (!(!x && e.nonTerminated === !1)) if (!R)
        z !== "named" && y(4, q);
      else if (z === "named") {
        if (x && !N)
          y(5, 1);
        else if (w !== R && (F = E + w.length, q = 1 + F - E, x = !1), !x) {
          const T = w ? 1 : 3;
          if (e.attribute) {
            const P = t.charCodeAt(F);
            P === 61 ? (y(T, q), N = "") : ee(P) ? N = "" : y(T, q);
          } else
            y(T, q);
        }
        L = N;
      } else {
        x || y(2, q);
        let T = Number.parseInt(
          R,
          z === "hexadecimal" ? 16 : 10
        );
        if (di(T))
          y(7, q), L = "�";
        else if (T in te)
          y(6, q), L = te[T];
        else {
          let P = "";
          xi(T) && y(6, q), T > 65535 && (T -= 65536, P += String.fromCharCode(
            T >>> 10 | 55296
          ), T = 56320 | T & 1023), L = P + String.fromCharCode(T);
        }
      }
      if (L) {
        S(), m = b(), i = F - 1, h += F - C + 1, u.push(L);
        const T = b();
        T.offset++, e.reference && e.reference.call(
          e.referenceContext || void 0,
          L,
          { start: m, end: T },
          t.slice(C - 1, F)
        ), m = T;
      } else
        R = t.slice(C - 1, F), l += R, h += R.length, i = F - 1;
    } else
      s === 10 && (p++, a++, h = 0), Number.isNaN(s) ? S() : (l += String.fromCharCode(s), h++);
  return u.join("");
  function b() {
    return {
      line: p,
      column: h,
      offset: i + ((c ? c.offset : 0) || 0)
    };
  }
  function y(k, C) {
    let E;
    e.warning && (E = b(), E.column += C, E.offset += C, e.warning.call(
      e.warningContext || void 0,
      bi[k],
      E,
      k
    ));
  }
  function S() {
    l && (u.push(l), e.text && e.text.call(e.textContext || void 0, l, {
      start: m,
      end: b()
    }), l = "");
  }
}
function di(t) {
  return t >= 55296 && t <= 57343 || t > 1114111;
}
function xi(t) {
  return t >= 1 && t <= 8 || t === 11 || t >= 13 && t <= 31 || t >= 127 && t <= 159 || t >= 64976 && t <= 65007 || (t & 65535) === 65535 || (t & 65535) === 65534;
}
const ne = {}.hasOwnProperty;
function Pi(t) {
  const n = t || {};
  return {
    enter: {
      directiveContainer() {
        e.call(this, "containerDirective");
      },
      directiveContainerAttributes: a,
      directiveContainerLabel: u,
      directiveContainerContent() {
        this.buffer();
      },
      directiveLeaf() {
        e.call(this, "leafDirective");
      },
      directiveLeafAttributes: a,
      directiveLeafLabel: u,
      directiveText() {
        e.call(this, "textDirective");
      },
      directiveTextAttributes: a,
      directiveTextLabel: u
    },
    exit: {
      directiveContainer: b,
      directiveContainerAttributeClassValue: c,
      directiveContainerAttributeIdValue: l,
      directiveContainerAttributeName: o,
      directiveContainerAttributeValue: p,
      directiveContainerAttributes: h,
      directiveContainerContent: m,
      directiveContainerFence: s,
      directiveContainerLabel: i,
      directiveContainerName: r,
      directiveLeaf: b,
      directiveLeafAttributeClassValue: c,
      directiveLeafAttributeIdValue: l,
      directiveLeafAttributeName: o,
      directiveLeafAttributeValue: p,
      directiveLeafAttributes: h,
      directiveLeafLabel: i,
      directiveLeafName: r,
      directiveText: b,
      directiveTextAttributeClassValue: c,
      directiveTextAttributeIdValue: l,
      directiveTextAttributeName: o,
      directiveTextAttributeValue: p,
      directiveTextAttributes: h,
      directiveTextLabel: i,
      directiveTextName: r
    }
  };
  function e(y) {
    let S = this.getData("directiveStack");
    S || this.setData("directiveStack", S = []), S.push({
      type: y,
      name: ""
    });
  }
  function r(y) {
    const S = this.getData("directiveStack");
    S[S.length - 1].name = this.sliceSerialize(y);
  }
  function u() {
    this.buffer();
  }
  function i() {
    const y = this.resume(), S = this.getData("directiveStack");
    S[S.length - 1].label = y;
  }
  function a() {
    this.buffer(), this.setData("directiveAttributes", []);
  }
  function l(y) {
    this.getData("directiveAttributes").push(["id", Dt(this.sliceSerialize(y), {
      attribute: !0
    })]);
  }
  function c(y) {
    this.getData("directiveAttributes").push(["class", Dt(this.sliceSerialize(y), {
      attribute: !0
    })]);
  }
  function o(y) {
    this.getData("directiveAttributes").push([this.sliceSerialize(y), ""]);
  }
  function p(y) {
    const S = this.getData("directiveAttributes");
    S[S.length - 1][1] = Dt(this.sliceSerialize(y), {
      attribute: !0
    });
  }
  function h() {
    const y = this.getData("directiveStack"), S = this.getData("directiveAttributes"), k = {};
    let C = -1;
    for (; ++C < S.length; ) {
      const E = S[C];
      E[0] === "class" && k.class ? k.class += " " + E[1] : k[E[0]] = E[1];
    }
    this.resume(), this.setData("directiveAttributes"), y[y.length - 1].attributes = k;
  }
  function m() {
    const y = this.resume(), S = this.getData("directiveStack");
    S[S.length - 1].content = y;
  }
  function s() {
    const y = this.getData("directiveStack"), S = y[y.length - 1];
    S._fenceCount || (S._fenceCount = 0), S._fenceCount++, S._fenceCount === 1 && this.setData("slurpOneLineEnding", !0);
  }
  function b() {
    const S = this.getData("directiveStack").pop();
    let k, C;
    ne.call(n, S.name) && (C = n[S.name].call(this, S), k = C !== !1), !k && ne.call(n, "*") && (C = n["*"].call(this, S), k = C !== !1), !k && S.type !== "textDirective" && this.setData("slurpOneLineEnding", !0);
  }
}
const ki = {
  tokenize: Di,
  partial: !0
};
function _i() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: Ci,
        continuation: {
          tokenize: Ai
        },
        exit: Ei
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: yi
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: wi,
        resolveTo: Si
      }
    }
  };
}
function wi(t, n, e) {
  const r = this;
  let u = r.events.length;
  const i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let a;
  for (; u--; ) {
    const c = r.events[u][1];
    if (c.type === "labelImage") {
      a = c;
      break;
    }
    if (c.type === "gfmFootnoteCall" || c.type === "labelLink" || c.type === "label" || c.type === "image" || c.type === "link")
      break;
  }
  return l;
  function l(c) {
    if (!a || !a._balanced)
      return e(c);
    const o = et(r.sliceSerialize({
      start: a.end,
      end: r.now()
    }));
    return o.codePointAt(0) !== 94 || !i.includes(o.slice(1)) ? e(c) : (t.enter("gfmFootnoteCallLabelMarker"), t.consume(c), t.exit("gfmFootnoteCallLabelMarker"), n(c));
  }
}
function Si(t, n) {
  let e = t.length;
  for (; e--; )
    if (t[e][1].type === "labelImage" && t[e][0] === "enter") {
      t[e][1];
      break;
    }
  t[e + 1][1].type = "data", t[e + 3][1].type = "gfmFootnoteCallLabelMarker";
  const r = {
    type: "gfmFootnoteCall",
    start: Object.assign({}, t[e + 3][1].start),
    end: Object.assign({}, t[t.length - 1][1].end)
  }, u = {
    type: "gfmFootnoteCallMarker",
    start: Object.assign({}, t[e + 3][1].end),
    end: Object.assign({}, t[e + 3][1].end)
  };
  u.end.column++, u.end.offset++, u.end._bufferIndex++;
  const i = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, u.end),
    end: Object.assign({}, t[t.length - 1][1].start)
  }, a = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, i.start),
    end: Object.assign({}, i.end)
  }, l = [
    // Take the `labelImageMarker` (now `data`, the `!`)
    t[e + 1],
    t[e + 2],
    ["enter", r, n],
    // The `[`
    t[e + 3],
    t[e + 4],
    // The `^`.
    ["enter", u, n],
    ["exit", u, n],
    // Everything in between.
    ["enter", i, n],
    ["enter", a, n],
    ["exit", a, n],
    ["exit", i, n],
    // The ending (`]`, properly parsed and labelled).
    t[t.length - 2],
    t[t.length - 1],
    ["exit", r, n]
  ];
  return t.splice(e, t.length - e + 1, ...l), t;
}
function yi(t, n, e) {
  const r = this, u = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let i = 0, a;
  return l;
  function l(h) {
    return t.enter("gfmFootnoteCall"), t.enter("gfmFootnoteCallLabelMarker"), t.consume(h), t.exit("gfmFootnoteCallLabelMarker"), c;
  }
  function c(h) {
    return h !== 94 ? e(h) : (t.enter("gfmFootnoteCallMarker"), t.consume(h), t.exit("gfmFootnoteCallMarker"), t.enter("gfmFootnoteCallString"), t.enter("chunkString").contentType = "string", o);
  }
  function o(h) {
    if (
      // Too long.
      i > 999 || // Closing brace with nothing.
      h === 93 && !a || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      h === null || h === 91 || M(h)
    )
      return e(h);
    if (h === 93) {
      t.exit("chunkString");
      const m = t.exit("gfmFootnoteCallString");
      return u.includes(et(r.sliceSerialize(m))) ? (t.enter("gfmFootnoteCallLabelMarker"), t.consume(h), t.exit("gfmFootnoteCallLabelMarker"), t.exit("gfmFootnoteCall"), n) : e(h);
    }
    return M(h) || (a = !0), i++, t.consume(h), h === 92 ? p : o;
  }
  function p(h) {
    return h === 91 || h === 92 || h === 93 ? (t.consume(h), i++, o) : o(h);
  }
}
function Ci(t, n, e) {
  const r = this, u = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let i, a = 0, l;
  return c;
  function c(b) {
    return t.enter("gfmFootnoteDefinition")._container = !0, t.enter("gfmFootnoteDefinitionLabel"), t.enter("gfmFootnoteDefinitionLabelMarker"), t.consume(b), t.exit("gfmFootnoteDefinitionLabelMarker"), o;
  }
  function o(b) {
    return b === 94 ? (t.enter("gfmFootnoteDefinitionMarker"), t.consume(b), t.exit("gfmFootnoteDefinitionMarker"), t.enter("gfmFootnoteDefinitionLabelString"), t.enter("chunkString").contentType = "string", p) : e(b);
  }
  function p(b) {
    if (
      // Too long.
      a > 999 || // Closing brace with nothing.
      b === 93 && !l || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      b === null || b === 91 || M(b)
    )
      return e(b);
    if (b === 93) {
      t.exit("chunkString");
      const y = t.exit("gfmFootnoteDefinitionLabelString");
      return i = et(r.sliceSerialize(y)), t.enter("gfmFootnoteDefinitionLabelMarker"), t.consume(b), t.exit("gfmFootnoteDefinitionLabelMarker"), t.exit("gfmFootnoteDefinitionLabel"), m;
    }
    return M(b) || (l = !0), a++, t.consume(b), b === 92 ? h : p;
  }
  function h(b) {
    return b === 91 || b === 92 || b === 93 ? (t.consume(b), a++, p) : p(b);
  }
  function m(b) {
    return b === 58 ? (t.enter("definitionMarker"), t.consume(b), t.exit("definitionMarker"), u.includes(i) || u.push(i), B(t, s, "gfmFootnoteDefinitionWhitespace")) : e(b);
  }
  function s(b) {
    return n(b);
  }
}
function Ai(t, n, e) {
  return t.check(bt, n, t.attempt(ki, n, e));
}
function Ei(t) {
  t.exit("gfmFootnoteDefinition");
}
function Di(t, n, e) {
  const r = this;
  return B(t, u, "gfmFootnoteDefinitionIndent", 5);
  function u(i) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "gfmFootnoteDefinitionIndent" && a[2].sliceSerialize(a[1], !0).length === 4 ? n(i) : e(i);
  }
}
const qi = {}.hasOwnProperty, Li = {};
function vi(t, n) {
  return "Back to reference " + (t + 1) + (n > 1 ? "-" + n : "");
}
function Mi(t) {
  const n = Li, e = n.label || "Footnotes", r = n.labelTagName || "h2", u = n.labelAttributes === null || n.labelAttributes === void 0 ? 'class="sr-only"' : n.labelAttributes, i = n.backLabel || vi, a = n.clobberPrefix === null || n.clobberPrefix === void 0 ? "user-content-" : n.clobberPrefix;
  return {
    enter: {
      gfmFootnoteDefinition() {
        this.getData("tightStack").push(!1);
      },
      gfmFootnoteDefinitionLabelString() {
        this.buffer();
      },
      gfmFootnoteCallString() {
        this.buffer();
      }
    },
    exit: {
      gfmFootnoteDefinition() {
        let l = this.getData("gfmFootnoteDefinitions");
        const c = this.getData("gfmFootnoteDefinitionStack"), o = this.getData("tightStack"), p = c.pop(), h = this.resume();
        l || this.setData("gfmFootnoteDefinitions", l = {}), qi.call(l, p) || (l[p] = h), o.pop(), this.setData("slurpOneLineEnding", !0), this.setData("lastWasTag");
      },
      gfmFootnoteDefinitionLabelString(l) {
        let c = this.getData("gfmFootnoteDefinitionStack");
        c || this.setData("gfmFootnoteDefinitionStack", c = []), c.push(et(this.sliceSerialize(l))), this.resume(), this.buffer();
      },
      gfmFootnoteCallString(l) {
        let c = this.getData("gfmFootnoteCallOrder"), o = this.getData("gfmFootnoteCallCounts");
        const p = et(this.sliceSerialize(l));
        let h;
        this.resume(), c || this.setData("gfmFootnoteCallOrder", c = []), o || this.setData("gfmFootnoteCallCounts", o = {});
        const m = c.indexOf(p), s = pt(p.toLowerCase());
        m === -1 ? (c.push(p), o[p] = 1, h = c.length) : (o[p]++, h = m + 1);
        const b = o[p];
        this.tag('<sup><a href="#' + a + "fn-" + s + '" id="' + a + "fnref-" + s + (b > 1 ? "-" + b : "") + '" data-footnote-ref="" aria-describedby="footnote-label">' + String(h) + "</a></sup>");
      },
      null() {
        const l = this.getData("gfmFootnoteCallOrder") || [], c = this.getData("gfmFootnoteCallCounts") || {}, o = this.getData("gfmFootnoteDefinitions") || {};
        let p = -1;
        for (l.length > 0 && (this.lineEndingIfNeeded(), this.tag('<section data-footnotes="" class="footnotes"><' + r + ' id="footnote-label"' + (u ? " " + u : "") + ">"), this.raw(this.encode(e)), this.tag("</" + r + ">"), this.lineEndingIfNeeded(), this.tag("<ol>")); ++p < l.length; ) {
          const h = l[p], m = pt(h.toLowerCase());
          let s = 0;
          const b = [];
          for (; ++s <= c[h]; )
            b.push('<a href="#' + a + "fnref-" + m + (s > 1 ? "-" + s : "") + '" data-footnote-backref="" aria-label="' + this.encode(typeof i == "string" ? i : i(p, s)) + '" class="data-footnote-backref">↩' + (s > 1 ? "<sup>" + s + "</sup>" : "") + "</a>");
          const y = b.join(" ");
          let S = !1;
          this.lineEndingIfNeeded(), this.tag('<li id="' + a + "fn-" + m + '">'), this.lineEndingIfNeeded(), this.tag(o[h].replace(/<\/p>(?:\r?\n|\r)?$/, function(k) {
            return S = !0, " " + y + k;
          })), S || (this.lineEndingIfNeeded(), this.tag(y)), this.lineEndingIfNeeded(), this.tag("</li>");
        }
        l.length > 0 && (this.lineEndingIfNeeded(), this.tag("</ol>"), this.lineEndingIfNeeded(), this.tag("</section>"));
      }
    }
  };
}
function Vi() {
  return {
    enter: {
      strikethrough() {
        this.tag("<del>");
      }
    },
    exit: {
      strikethrough() {
        this.tag("</del>");
      }
    }
  };
}
function Hi(t) {
  let e = (t || {}).singleTilde;
  const r = {
    name: "strikethrough",
    tokenize: i,
    resolveAll: u
  };
  return e == null && (e = !0), {
    text: {
      126: r
    },
    insideSpan: {
      null: [r]
    },
    attentionMarkers: {
      null: [126]
    }
  };
  function u(a, l) {
    let c = -1;
    for (; ++c < a.length; )
      if (a[c][0] === "enter" && a[c][1].type === "strikethroughSequenceTemporary" && a[c][1]._close) {
        let o = c;
        for (; o--; )
          if (a[o][0] === "exit" && a[o][1].type === "strikethroughSequenceTemporary" && a[o][1]._open && // If the sizes are the same:
          a[c][1].end.offset - a[c][1].start.offset === a[o][1].end.offset - a[o][1].start.offset) {
            a[c][1].type = "strikethroughSequence", a[o][1].type = "strikethroughSequence";
            const p = {
              type: "strikethrough",
              start: Object.assign({}, a[o][1].start),
              end: Object.assign({}, a[c][1].end)
            }, h = {
              type: "strikethroughText",
              start: Object.assign({}, a[o][1].end),
              end: Object.assign({}, a[c][1].start)
            }, m = [["enter", p, l], ["enter", a[o][1], l], ["exit", a[o][1], l], ["enter", h, l]], s = l.parser.constructs.insideSpan.null;
            s && W(m, m.length, 0, yt(s, a.slice(o + 1, c), l)), W(m, m.length, 0, [["exit", h, l], ["enter", a[c][1], l], ["exit", a[c][1], l], ["exit", p, l]]), W(a, o - 1, c - o + 3, m), c = o + m.length - 2;
            break;
          }
      }
    for (c = -1; ++c < a.length; )
      a[c][1].type === "strikethroughSequenceTemporary" && (a[c][1].type = "data");
    return a;
  }
  function i(a, l, c) {
    const o = this.previous, p = this.events;
    let h = 0;
    return m;
    function m(b) {
      return o === 126 && p[p.length - 1][1].type !== "characterEscape" ? c(b) : (a.enter("strikethroughSequenceTemporary"), s(b));
    }
    function s(b) {
      const y = St(o);
      if (b === 126)
        return h > 1 ? c(b) : (a.consume(b), h++, s);
      if (h < 2 && !e) return c(b);
      const S = a.exit("strikethroughSequenceTemporary"), k = St(b);
      return S._open = !k || k === 2 && !!y, S._close = !y || y === 2 && !!k, l(b);
    }
  }
}
const qt = {
  none: "",
  left: ' align="left"',
  right: ' align="right"',
  center: ' align="center"'
};
function Ui() {
  return {
    enter: {
      table(t) {
        const n = t._align;
        this.lineEndingIfNeeded(), this.tag("<table>"), this.setData("tableAlign", n);
      },
      tableBody() {
        this.tag("<tbody>");
      },
      tableData() {
        const t = this.getData("tableAlign"), n = this.getData("tableColumn"), e = qt[t[n]];
        e === void 0 ? this.buffer() : (this.lineEndingIfNeeded(), this.tag("<td" + e + ">"));
      },
      tableHead() {
        this.lineEndingIfNeeded(), this.tag("<thead>");
      },
      tableHeader() {
        const t = this.getData("tableAlign"), n = this.getData("tableColumn"), e = qt[t[n]];
        this.lineEndingIfNeeded(), this.tag("<th" + e + ">");
      },
      tableRow() {
        this.setData("tableColumn", 0), this.lineEndingIfNeeded(), this.tag("<tr>");
      }
    },
    exit: {
      // Overwrite the default code text data handler to unescape escaped pipes when
      // they are in tables.
      codeTextData(t) {
        let n = this.sliceSerialize(t);
        this.getData("tableAlign") && (n = n.replace(/\\([\\|])/g, zi)), this.raw(this.encode(n));
      },
      table() {
        this.setData("tableAlign"), this.setData("slurpAllLineEndings"), this.lineEndingIfNeeded(), this.tag("</table>");
      },
      tableBody() {
        this.lineEndingIfNeeded(), this.tag("</tbody>");
      },
      tableData() {
        const t = this.getData("tableAlign"), n = this.getData("tableColumn");
        n in t ? (this.tag("</td>"), this.setData("tableColumn", n + 1)) : this.resume();
      },
      tableHead() {
        this.lineEndingIfNeeded(), this.tag("</thead>");
      },
      tableHeader() {
        const t = this.getData("tableColumn");
        this.tag("</th>"), this.setData("tableColumn", t + 1);
      },
      tableRow() {
        const t = this.getData("tableAlign");
        let n = this.getData("tableColumn");
        for (; n < t.length; )
          this.lineEndingIfNeeded(), this.tag("<td" + qt[t[n]] + "></td>"), n++;
        this.setData("tableColumn", n), this.lineEndingIfNeeded(), this.tag("</tr>");
      }
    }
  };
}
function zi(t, n) {
  return n === "|" ? n : t;
}
class Ti {
  /**
   * Create a new edit map.
   */
  constructor() {
    this.map = [];
  }
  /**
   * Create an edit: a remove and/or add at a certain place.
   *
   * @param {number} index
   * @param {number} remove
   * @param {Array<Event>} add
   * @returns {undefined}
   */
  add(n, e, r) {
    Ii(this, n, e, r);
  }
  // To do: add this when moving to `micromark`.
  // /**
  //  * Create an edit: but insert `add` before existing additions.
  //  *
  //  * @param {number} index
  //  * @param {number} remove
  //  * @param {Array<Event>} add
  //  * @returns {undefined}
  //  */
  // addBefore(index, remove, add) {
  //   addImplementation(this, index, remove, add, true)
  // }
  /**
   * Done, change the events.
   *
   * @param {Array<Event>} events
   * @returns {undefined}
   */
  consume(n) {
    if (this.map.sort(function(i, a) {
      return i[0] - a[0];
    }), this.map.length === 0)
      return;
    let e = this.map.length;
    const r = [];
    for (; e > 0; )
      e -= 1, r.push(n.slice(this.map[e][0] + this.map[e][1]), this.map[e][2]), n.length = this.map[e][0];
    r.push(n.slice()), n.length = 0;
    let u = r.pop();
    for (; u; ) {
      for (const i of u)
        n.push(i);
      u = r.pop();
    }
    this.map.length = 0;
  }
}
function Ii(t, n, e, r) {
  let u = 0;
  if (!(e === 0 && r.length === 0)) {
    for (; u < t.map.length; ) {
      if (t.map[u][0] === n) {
        t.map[u][1] += e, t.map[u][2].push(...r);
        return;
      }
      u += 1;
    }
    t.map.push([n, e, r]);
  }
}
function Fi(t, n) {
  let e = !1;
  const r = [];
  for (; n < t.length; ) {
    const u = t[n];
    if (e) {
      if (u[0] === "enter")
        u[1].type === "tableContent" && r.push(t[n + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
      else if (u[1].type === "tableContent") {
        if (t[n - 1][1].type === "tableDelimiterMarker") {
          const i = r.length - 1;
          r[i] = r[i] === "left" ? "center" : "right";
        }
      } else if (u[1].type === "tableDelimiterRow")
        break;
    } else u[0] === "enter" && u[1].type === "tableDelimiterRow" && (e = !0);
    n += 1;
  }
  return r;
}
function ji() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: Ni,
        resolveAll: Ri
      }
    }
  };
}
function Ni(t, n, e) {
  const r = this;
  let u = 0, i = 0, a;
  return l;
  function l(x) {
    let q = r.events.length - 1;
    for (; q > -1; ) {
      const P = r.events[q][1].type;
      if (P === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      P === "linePrefix") q--;
      else break;
    }
    const L = q > -1 ? r.events[q][1].type : null, T = L === "tableHead" || L === "tableRow" ? w : c;
    return T === w && r.parser.lazy[r.now().line] ? e(x) : T(x);
  }
  function c(x) {
    return t.enter("tableHead"), t.enter("tableRow"), o(x);
  }
  function o(x) {
    return x === 124 || (a = !0, i += 1), p(x);
  }
  function p(x) {
    return x === null ? e(x) : v(x) ? i > 1 ? (i = 0, r.interrupt = !0, t.exit("tableRow"), t.enter("lineEnding"), t.consume(x), t.exit("lineEnding"), s) : e(x) : O(x) ? B(t, p, "whitespace")(x) : (i += 1, a && (a = !1, u += 1), x === 124 ? (t.enter("tableCellDivider"), t.consume(x), t.exit("tableCellDivider"), a = !0, p) : (t.enter("data"), h(x)));
  }
  function h(x) {
    return x === null || x === 124 || M(x) ? (t.exit("data"), p(x)) : (t.consume(x), x === 92 ? m : h);
  }
  function m(x) {
    return x === 92 || x === 124 ? (t.consume(x), h) : h(x);
  }
  function s(x) {
    return r.interrupt = !1, r.parser.lazy[r.now().line] ? e(x) : (t.enter("tableDelimiterRow"), a = !1, O(x) ? B(t, b, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(x) : b(x));
  }
  function b(x) {
    return x === 45 || x === 58 ? S(x) : x === 124 ? (a = !0, t.enter("tableCellDivider"), t.consume(x), t.exit("tableCellDivider"), y) : z(x);
  }
  function y(x) {
    return O(x) ? B(t, S, "whitespace")(x) : S(x);
  }
  function S(x) {
    return x === 58 ? (i += 1, a = !0, t.enter("tableDelimiterMarker"), t.consume(x), t.exit("tableDelimiterMarker"), k) : x === 45 ? (i += 1, k(x)) : x === null || v(x) ? F(x) : z(x);
  }
  function k(x) {
    return x === 45 ? (t.enter("tableDelimiterFiller"), C(x)) : z(x);
  }
  function C(x) {
    return x === 45 ? (t.consume(x), C) : x === 58 ? (a = !0, t.exit("tableDelimiterFiller"), t.enter("tableDelimiterMarker"), t.consume(x), t.exit("tableDelimiterMarker"), E) : (t.exit("tableDelimiterFiller"), E(x));
  }
  function E(x) {
    return O(x) ? B(t, F, "whitespace")(x) : F(x);
  }
  function F(x) {
    return x === 124 ? b(x) : x === null || v(x) ? !a || u !== i ? z(x) : (t.exit("tableDelimiterRow"), t.exit("tableHead"), n(x)) : z(x);
  }
  function z(x) {
    return e(x);
  }
  function w(x) {
    return t.enter("tableRow"), N(x);
  }
  function N(x) {
    return x === 124 ? (t.enter("tableCellDivider"), t.consume(x), t.exit("tableCellDivider"), N) : x === null || v(x) ? (t.exit("tableRow"), n(x)) : O(x) ? B(t, N, "whitespace")(x) : (t.enter("data"), R(x));
  }
  function R(x) {
    return x === null || x === 124 || M(x) ? (t.exit("data"), N(x)) : (t.consume(x), x === 92 ? A : R);
  }
  function A(x) {
    return x === 92 || x === 124 ? (t.consume(x), R) : R(x);
  }
}
function Ri(t, n) {
  let e = -1, r = !0, u = 0, i = [0, 0, 0, 0], a = [0, 0, 0, 0], l = !1, c = 0, o, p, h;
  const m = new Ti();
  for (; ++e < t.length; ) {
    const s = t[e], b = s[1];
    s[0] === "enter" ? b.type === "tableHead" ? (l = !1, c !== 0 && (re(m, n, c, o, p), p = void 0, c = 0), o = {
      type: "table",
      start: Object.assign({}, b.start),
      // Note: correct end is set later.
      end: Object.assign({}, b.end)
    }, m.add(e, 0, [["enter", o, n]])) : b.type === "tableRow" || b.type === "tableDelimiterRow" ? (r = !0, h = void 0, i = [0, 0, 0, 0], a = [0, e + 1, 0, 0], l && (l = !1, p = {
      type: "tableBody",
      start: Object.assign({}, b.start),
      // Note: correct end is set later.
      end: Object.assign({}, b.end)
    }, m.add(e, 0, [["enter", p, n]])), u = b.type === "tableDelimiterRow" ? 2 : p ? 3 : 1) : u && (b.type === "data" || b.type === "tableDelimiterMarker" || b.type === "tableDelimiterFiller") ? (r = !1, a[2] === 0 && (i[1] !== 0 && (a[0] = a[1], h = xt(m, n, i, u, void 0, h), i = [0, 0, 0, 0]), a[2] = e)) : b.type === "tableCellDivider" && (r ? r = !1 : (i[1] !== 0 && (a[0] = a[1], h = xt(m, n, i, u, void 0, h)), i = a, a = [i[1], e, 0, 0])) : b.type === "tableHead" ? (l = !0, c = e) : b.type === "tableRow" || b.type === "tableDelimiterRow" ? (c = e, i[1] !== 0 ? (a[0] = a[1], h = xt(m, n, i, u, e, h)) : a[1] !== 0 && (h = xt(m, n, a, u, e, h)), u = 0) : u && (b.type === "data" || b.type === "tableDelimiterMarker" || b.type === "tableDelimiterFiller") && (a[3] = e);
  }
  for (c !== 0 && re(m, n, c, o, p), m.consume(n.events), e = -1; ++e < n.events.length; ) {
    const s = n.events[e];
    s[0] === "enter" && s[1].type === "table" && (s[1]._align = Fi(n.events, e));
  }
  return t;
}
function xt(t, n, e, r, u, i) {
  const a = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData", l = "tableContent";
  e[0] !== 0 && (i.end = Object.assign({}, ht(n.events, e[0])), t.add(e[0], 0, [["exit", i, n]]));
  const c = ht(n.events, e[1]);
  if (i = {
    type: a,
    start: Object.assign({}, c),
    // Note: correct end is set later.
    end: Object.assign({}, c)
  }, t.add(e[1], 0, [["enter", i, n]]), e[2] !== 0) {
    const o = ht(n.events, e[2]), p = ht(n.events, e[3]), h = {
      type: l,
      start: Object.assign({}, o),
      end: Object.assign({}, p)
    };
    if (t.add(e[2], 0, [["enter", h, n]]), r !== 2) {
      const m = n.events[e[2]], s = n.events[e[3]];
      if (m[1].end = Object.assign({}, s[1].end), m[1].type = "chunkText", m[1].contentType = "text", e[3] > e[2] + 1) {
        const b = e[2] + 1, y = e[3] - e[2] - 1;
        t.add(b, y, []);
      }
    }
    t.add(e[3] + 1, 0, [["exit", h, n]]);
  }
  return u !== void 0 && (i.end = Object.assign({}, ht(n.events, u)), t.add(u, 0, [["exit", i, n]]), i = void 0), i;
}
function re(t, n, e, r, u) {
  const i = [], a = ht(n.events, e);
  u && (u.end = Object.assign({}, a), i.push(["exit", u, n])), r.end = Object.assign({}, a), i.push(["exit", r, n]), t.add(e + 1, 0, i);
}
function ht(t, n) {
  const e = t[n], r = e[0] === "enter" ? "start" : "end";
  return e[1][r];
}
export {
  Vi as a,
  Ui as b,
  He as c,
  Pi as d,
  _i as e,
  Hi as f,
  Mi as g,
  ji as h,
  Oi as i,
  Bi as m
};
//# sourceMappingURL=micromark_CAniCe8D.js.map
