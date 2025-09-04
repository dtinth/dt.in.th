import { e as Fr } from "./unocss_BHFsKZqx.js";
function Dl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ol(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var n = e.default;
  if (typeof n == "function") {
    var s = function o() {
      var i = !1;
      try {
        i = this instanceof o;
      } catch {
      }
      return i ? Reflect.construct(n, arguments, this.constructor) : n.apply(this, arguments);
    };
    s.prototype = n.prototype;
  } else s = {};
  return Object.defineProperty(s, "__esModule", { value: !0 }), Object.keys(e).forEach(function(o) {
    var i = Object.getOwnPropertyDescriptor(e, o);
    Object.defineProperty(s, o, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[o];
      }
    });
  }), s;
}
var l;
(function(e) {
  e[e.NONE = 0] = "NONE";
  const s = 1;
  e[e._abstract = s] = "_abstract";
  const o = s + 1;
  e[e._accessor = o] = "_accessor";
  const i = o + 1;
  e[e._as = i] = "_as";
  const c = i + 1;
  e[e._assert = c] = "_assert";
  const h = c + 1;
  e[e._asserts = h] = "_asserts";
  const m = h + 1;
  e[e._async = m] = "_async";
  const g = m + 1;
  e[e._await = g] = "_await";
  const f = g + 1;
  e[e._checks = f] = "_checks";
  const y = f + 1;
  e[e._constructor = y] = "_constructor";
  const T = y + 1;
  e[e._declare = T] = "_declare";
  const S = T + 1;
  e[e._enum = S] = "_enum";
  const P = S + 1;
  e[e._exports = P] = "_exports";
  const B = P + 1;
  e[e._from = B] = "_from";
  const U = B + 1;
  e[e._get = U] = "_get";
  const K = U + 1;
  e[e._global = K] = "_global";
  const se = K + 1;
  e[e._implements = se] = "_implements";
  const ye = se + 1;
  e[e._infer = ye] = "_infer";
  const he = ye + 1;
  e[e._interface = he] = "_interface";
  const ce = he + 1;
  e[e._is = ce] = "_is";
  const ve = ce + 1;
  e[e._keyof = ve] = "_keyof";
  const Fe = ve + 1;
  e[e._mixins = Fe] = "_mixins";
  const je = Fe + 1;
  e[e._module = je] = "_module";
  const Me = je + 1;
  e[e._namespace = Me] = "_namespace";
  const Ne = Me + 1;
  e[e._of = Ne] = "_of";
  const qe = Ne + 1;
  e[e._opaque = qe] = "_opaque";
  const Ie = qe + 1;
  e[e._out = Ie] = "_out";
  const be = Ie + 1;
  e[e._override = be] = "_override";
  const Be = be + 1;
  e[e._private = Be] = "_private";
  const Pe = Be + 1;
  e[e._protected = Pe] = "_protected";
  const $e = Pe + 1;
  e[e._proto = $e] = "_proto";
  const Ce = $e + 1;
  e[e._public = Ce] = "_public";
  const Re = Ce + 1;
  e[e._readonly = Re] = "_readonly";
  const J = Re + 1;
  e[e._require = J] = "_require";
  const Ue = J + 1;
  e[e._satisfies = Ue] = "_satisfies";
  const Le = Ue + 1;
  e[e._set = Le] = "_set";
  const He = Le + 1;
  e[e._static = He] = "_static";
  const we = He + 1;
  e[e._symbol = we] = "_symbol";
  const De = we + 1;
  e[e._type = De] = "_type";
  const Ve = De + 1;
  e[e._unique = Ve] = "_unique";
  const _ = Ve + 1;
  e[e._using = _] = "_using";
})(l || (l = {}));
var t;
(function(e) {
  e[e.PRECEDENCE_MASK = 15] = "PRECEDENCE_MASK";
  const s = 16;
  e[e.IS_KEYWORD = s] = "IS_KEYWORD";
  const o = 32;
  e[e.IS_ASSIGN = o] = "IS_ASSIGN";
  const i = 64;
  e[e.IS_RIGHT_ASSOCIATIVE = i] = "IS_RIGHT_ASSOCIATIVE";
  const c = 128;
  e[e.IS_PREFIX = c] = "IS_PREFIX";
  const h = 256;
  e[e.IS_POSTFIX = h] = "IS_POSTFIX";
  const m = 512;
  e[e.IS_EXPRESSION_START = m] = "IS_EXPRESSION_START";
  const g = 512;
  e[e.num = g] = "num";
  const f = 1536;
  e[e.bigint = f] = "bigint";
  const y = 2560;
  e[e.decimal = y] = "decimal";
  const T = 3584;
  e[e.regexp = T] = "regexp";
  const S = 4608;
  e[e.string = S] = "string";
  const P = 5632;
  e[e.name = P] = "name";
  const B = 6144;
  e[e.eof = B] = "eof";
  const U = 7680;
  e[e.bracketL = U] = "bracketL";
  const K = 8192;
  e[e.bracketR = K] = "bracketR";
  const se = 9728;
  e[e.braceL = se] = "braceL";
  const ye = 10752;
  e[e.braceBarL = ye] = "braceBarL";
  const he = 11264;
  e[e.braceR = he] = "braceR";
  const ce = 12288;
  e[e.braceBarR = ce] = "braceBarR";
  const ve = 13824;
  e[e.parenL = ve] = "parenL";
  const Fe = 14336;
  e[e.parenR = Fe] = "parenR";
  const je = 15360;
  e[e.comma = je] = "comma";
  const Me = 16384;
  e[e.semi = Me] = "semi";
  const Ne = 17408;
  e[e.colon = Ne] = "colon";
  const qe = 18432;
  e[e.doubleColon = qe] = "doubleColon";
  const Ie = 19456;
  e[e.dot = Ie] = "dot";
  const be = 20480;
  e[e.question = be] = "question";
  const Be = 21504;
  e[e.questionDot = Be] = "questionDot";
  const Pe = 22528;
  e[e.arrow = Pe] = "arrow";
  const $e = 23552;
  e[e.template = $e] = "template";
  const Ce = 24576;
  e[e.ellipsis = Ce] = "ellipsis";
  const Re = 25600;
  e[e.backQuote = Re] = "backQuote";
  const J = 27136;
  e[e.dollarBraceL = J] = "dollarBraceL";
  const Ue = 27648;
  e[e.at = Ue] = "at";
  const Le = 29184;
  e[e.hash = Le] = "hash";
  const He = 29728;
  e[e.eq = He] = "eq";
  const we = 30752;
  e[e.assign = we] = "assign";
  const De = 32640;
  e[e.preIncDec = De] = "preIncDec";
  const Ve = 33664;
  e[e.postIncDec = Ve] = "postIncDec";
  const _ = 34432;
  e[e.bang = _] = "bang";
  const x = 35456;
  e[e.tilde = x] = "tilde";
  const I = 35841;
  e[e.pipeline = I] = "pipeline";
  const w = 36866;
  e[e.nullishCoalescing = w] = "nullishCoalescing";
  const A = 37890;
  e[e.logicalOR = A] = "logicalOR";
  const C = 38915;
  e[e.logicalAND = C] = "logicalAND";
  const R = 39940;
  e[e.bitwiseOR = R] = "bitwiseOR";
  const M = 40965;
  e[e.bitwiseXOR = M] = "bitwiseXOR";
  const X = 41990;
  e[e.bitwiseAND = X] = "bitwiseAND";
  const V = 43015;
  e[e.equality = V] = "equality";
  const ee = 44040;
  e[e.lessThan = ee] = "lessThan";
  const le = 45064;
  e[e.greaterThan = le] = "greaterThan";
  const Q = 46088;
  e[e.relationalOrEqual = Q] = "relationalOrEqual";
  const re = 47113;
  e[e.bitShiftL = re] = "bitShiftL";
  const oe = 48137;
  e[e.bitShiftR = oe] = "bitShiftR";
  const Qe = 49802;
  e[e.plus = Qe] = "plus";
  const ot = 50826;
  e[e.minus = ot] = "minus";
  const pt = 51723;
  e[e.modulo = pt] = "modulo";
  const en = 52235;
  e[e.star = en] = "star";
  const tn = 53259;
  e[e.slash = tn] = "slash";
  const nn = 54348;
  e[e.exponent = nn] = "exponent";
  const sn = 55296;
  e[e.jsxName = sn] = "jsxName";
  const rn = 56320;
  e[e.jsxText = rn] = "jsxText";
  const on = 57344;
  e[e.jsxEmptyText = on] = "jsxEmptyText";
  const an = 58880;
  e[e.jsxTagStart = an] = "jsxTagStart";
  const cn = 59392;
  e[e.jsxTagEnd = cn] = "jsxTagEnd";
  const ln = 60928;
  e[e.typeParameterStart = ln] = "typeParameterStart";
  const un = 61440;
  e[e.nonNullAssertion = un] = "nonNullAssertion";
  const hn = 62480;
  e[e._break = hn] = "_break";
  const pn = 63504;
  e[e._case = pn] = "_case";
  const fn = 64528;
  e[e._catch = fn] = "_catch";
  const mn = 65552;
  e[e._continue = mn] = "_continue";
  const dn = 66576;
  e[e._debugger = dn] = "_debugger";
  const kn = 67600;
  e[e._default = kn] = "_default";
  const _n = 68624;
  e[e._do = _n] = "_do";
  const gn = 69648;
  e[e._else = gn] = "_else";
  const xn = 70672;
  e[e._finally = xn] = "_finally";
  const yn = 71696;
  e[e._for = yn] = "_for";
  const In = 73232;
  e[e._function = In] = "_function";
  const bn = 73744;
  e[e._if = bn] = "_if";
  const wn = 74768;
  e[e._return = wn] = "_return";
  const Tn = 75792;
  e[e._switch = Tn] = "_switch";
  const An = 77456;
  e[e._throw = An] = "_throw";
  const En = 77840;
  e[e._try = En] = "_try";
  const Sn = 78864;
  e[e._var = Sn] = "_var";
  const vn = 79888;
  e[e._let = vn] = "_let";
  const Nn = 80912;
  e[e._const = Nn] = "_const";
  const Pn = 81936;
  e[e._while = Pn] = "_while";
  const Cn = 82960;
  e[e._with = Cn] = "_with";
  const Rn = 84496;
  e[e._new = Rn] = "_new";
  const Ln = 85520;
  e[e._this = Ln] = "_this";
  const Dn = 86544;
  e[e._super = Dn] = "_super";
  const On = 87568;
  e[e._class = On] = "_class";
  const Fn = 88080;
  e[e._extends = Fn] = "_extends";
  const jn = 89104;
  e[e._export = jn] = "_export";
  const Mn = 90640;
  e[e._import = Mn] = "_import";
  const qn = 91664;
  e[e._yield = qn] = "_yield";
  const Bn = 92688;
  e[e._null = Bn] = "_null";
  const $n = 93712;
  e[e._true = $n] = "_true";
  const Un = 94736;
  e[e._false = Un] = "_false";
  const Hn = 95256;
  e[e._in = Hn] = "_in";
  const Vn = 96280;
  e[e._instanceof = Vn] = "_instanceof";
  const Wn = 97936;
  e[e._typeof = Wn] = "_typeof";
  const Xn = 98960;
  e[e._void = Xn] = "_void";
  const yr = 99984;
  e[e._delete = yr] = "_delete";
  const Ir = 100880;
  e[e._async = Ir] = "_async";
  const br = 101904;
  e[e._get = br] = "_get";
  const wr = 102928;
  e[e._set = wr] = "_set";
  const Tr = 103952;
  e[e._declare = Tr] = "_declare";
  const Ar = 104976;
  e[e._readonly = Ar] = "_readonly";
  const Er = 106e3;
  e[e._abstract = Er] = "_abstract";
  const Sr = 107024;
  e[e._static = Sr] = "_static";
  const vr = 107536;
  e[e._public = vr] = "_public";
  const Nr = 108560;
  e[e._private = Nr] = "_private";
  const Pr = 109584;
  e[e._protected = Pr] = "_protected";
  const Cr = 110608;
  e[e._override = Cr] = "_override";
  const Rr = 112144;
  e[e._as = Rr] = "_as";
  const Lr = 113168;
  e[e._enum = Lr] = "_enum";
  const Dr = 114192;
  e[e._type = Dr] = "_type";
  const Or = 115216;
  e[e._implements = Or] = "_implements";
})(t || (t = {}));
function jr(e) {
  switch (e) {
    case t.num:
      return "num";
    case t.bigint:
      return "bigint";
    case t.decimal:
      return "decimal";
    case t.regexp:
      return "regexp";
    case t.string:
      return "string";
    case t.name:
      return "name";
    case t.eof:
      return "eof";
    case t.bracketL:
      return "[";
    case t.bracketR:
      return "]";
    case t.braceL:
      return "{";
    case t.braceBarL:
      return "{|";
    case t.braceR:
      return "}";
    case t.braceBarR:
      return "|}";
    case t.parenL:
      return "(";
    case t.parenR:
      return ")";
    case t.comma:
      return ",";
    case t.semi:
      return ";";
    case t.colon:
      return ":";
    case t.doubleColon:
      return "::";
    case t.dot:
      return ".";
    case t.question:
      return "?";
    case t.questionDot:
      return "?.";
    case t.arrow:
      return "=>";
    case t.template:
      return "template";
    case t.ellipsis:
      return "...";
    case t.backQuote:
      return "`";
    case t.dollarBraceL:
      return "${";
    case t.at:
      return "@";
    case t.hash:
      return "#";
    case t.eq:
      return "=";
    case t.assign:
      return "_=";
    case t.preIncDec:
      return "++/--";
    case t.postIncDec:
      return "++/--";
    case t.bang:
      return "!";
    case t.tilde:
      return "~";
    case t.pipeline:
      return "|>";
    case t.nullishCoalescing:
      return "??";
    case t.logicalOR:
      return "||";
    case t.logicalAND:
      return "&&";
    case t.bitwiseOR:
      return "|";
    case t.bitwiseXOR:
      return "^";
    case t.bitwiseAND:
      return "&";
    case t.equality:
      return "==/!=";
    case t.lessThan:
      return "<";
    case t.greaterThan:
      return ">";
    case t.relationalOrEqual:
      return "<=/>=";
    case t.bitShiftL:
      return "<<";
    case t.bitShiftR:
      return ">>/>>>";
    case t.plus:
      return "+";
    case t.minus:
      return "-";
    case t.modulo:
      return "%";
    case t.star:
      return "*";
    case t.slash:
      return "/";
    case t.exponent:
      return "**";
    case t.jsxName:
      return "jsxName";
    case t.jsxText:
      return "jsxText";
    case t.jsxEmptyText:
      return "jsxEmptyText";
    case t.jsxTagStart:
      return "jsxTagStart";
    case t.jsxTagEnd:
      return "jsxTagEnd";
    case t.typeParameterStart:
      return "typeParameterStart";
    case t.nonNullAssertion:
      return "nonNullAssertion";
    case t._break:
      return "break";
    case t._case:
      return "case";
    case t._catch:
      return "catch";
    case t._continue:
      return "continue";
    case t._debugger:
      return "debugger";
    case t._default:
      return "default";
    case t._do:
      return "do";
    case t._else:
      return "else";
    case t._finally:
      return "finally";
    case t._for:
      return "for";
    case t._function:
      return "function";
    case t._if:
      return "if";
    case t._return:
      return "return";
    case t._switch:
      return "switch";
    case t._throw:
      return "throw";
    case t._try:
      return "try";
    case t._var:
      return "var";
    case t._let:
      return "let";
    case t._const:
      return "const";
    case t._while:
      return "while";
    case t._with:
      return "with";
    case t._new:
      return "new";
    case t._this:
      return "this";
    case t._super:
      return "super";
    case t._class:
      return "class";
    case t._extends:
      return "extends";
    case t._export:
      return "export";
    case t._import:
      return "import";
    case t._yield:
      return "yield";
    case t._null:
      return "null";
    case t._true:
      return "true";
    case t._false:
      return "false";
    case t._in:
      return "in";
    case t._instanceof:
      return "instanceof";
    case t._typeof:
      return "typeof";
    case t._void:
      return "void";
    case t._delete:
      return "delete";
    case t._async:
      return "async";
    case t._get:
      return "get";
    case t._set:
      return "set";
    case t._declare:
      return "declare";
    case t._readonly:
      return "readonly";
    case t._abstract:
      return "abstract";
    case t._static:
      return "static";
    case t._public:
      return "public";
    case t._private:
      return "private";
    case t._protected:
      return "protected";
    case t._override:
      return "override";
    case t._as:
      return "as";
    case t._enum:
      return "enum";
    case t._type:
      return "type";
    case t._implements:
      return "implements";
    default:
      return "";
  }
}
class Ee {
  constructor(n, s, o) {
    this.startTokenIndex = n, this.endTokenIndex = s, this.isFunctionScope = o;
  }
}
class Mr {
  constructor(n, s, o, i, c, h, m, g, f, y, T, S, P) {
    this.potentialArrowAt = n, this.noAnonFunctionType = s, this.inDisallowConditionalTypesContext = o, this.tokensLength = i, this.scopesLength = c, this.pos = h, this.type = m, this.contextualKeyword = g, this.start = f, this.end = y, this.isType = T, this.scopeDepth = S, this.error = P;
  }
}
class ie {
  constructor() {
    ie.prototype.__init.call(this), ie.prototype.__init2.call(this), ie.prototype.__init3.call(this), ie.prototype.__init4.call(this), ie.prototype.__init5.call(this), ie.prototype.__init6.call(this), ie.prototype.__init7.call(this), ie.prototype.__init8.call(this), ie.prototype.__init9.call(this), ie.prototype.__init10.call(this), ie.prototype.__init11.call(this), ie.prototype.__init12.call(this), ie.prototype.__init13.call(this);
  }
  // Used to signify the start of a potential arrow function
  __init() {
    this.potentialArrowAt = -1;
  }
  // Used by Flow to handle an edge case involving function type parsing.
  __init2() {
    this.noAnonFunctionType = !1;
  }
  // Used by TypeScript to handle ambiguities when parsing conditional types.
  __init3() {
    this.inDisallowConditionalTypesContext = !1;
  }
  // Token store.
  __init4() {
    this.tokens = [];
  }
  // Array of all observed scopes, ordered by their ending position.
  __init5() {
    this.scopes = [];
  }
  // The current position of the tokenizer in the input.
  __init6() {
    this.pos = 0;
  }
  // Information about the current token.
  __init7() {
    this.type = t.eof;
  }
  __init8() {
    this.contextualKeyword = l.NONE;
  }
  __init9() {
    this.start = 0;
  }
  __init10() {
    this.end = 0;
  }
  __init11() {
    this.isType = !1;
  }
  __init12() {
    this.scopeDepth = 0;
  }
  /**
   * If the parser is in an error state, then the token is always tt.eof and all functions can
   * keep executing but should be written so they don't get into an infinite loop in this situation.
   *
   * This approach, combined with the ability to snapshot and restore state, allows us to implement
   * backtracking without exceptions and without needing to explicitly propagate error states
   * everywhere.
   */
  __init13() {
    this.error = null;
  }
  snapshot() {
    return new Mr(
      this.potentialArrowAt,
      this.noAnonFunctionType,
      this.inDisallowConditionalTypesContext,
      this.tokens.length,
      this.scopes.length,
      this.pos,
      this.type,
      this.contextualKeyword,
      this.start,
      this.end,
      this.isType,
      this.scopeDepth,
      this.error
    );
  }
  restoreFromSnapshot(n) {
    this.potentialArrowAt = n.potentialArrowAt, this.noAnonFunctionType = n.noAnonFunctionType, this.inDisallowConditionalTypesContext = n.inDisallowConditionalTypesContext, this.tokens.length = n.tokensLength, this.scopes.length = n.scopesLength, this.pos = n.pos, this.type = n.type, this.contextualKeyword = n.contextualKeyword, this.start = n.start, this.end = n.end, this.isType = n.isType, this.scopeDepth = n.scopeDepth, this.error = n.error;
  }
}
var u;
(function(e) {
  e[e.backSpace = 8] = "backSpace";
  const s = 10;
  e[e.lineFeed = s] = "lineFeed";
  const o = 9;
  e[e.tab = o] = "tab";
  const i = 13;
  e[e.carriageReturn = i] = "carriageReturn";
  const c = 14;
  e[e.shiftOut = c] = "shiftOut";
  const h = 32;
  e[e.space = h] = "space";
  const m = 33;
  e[e.exclamationMark = m] = "exclamationMark";
  const g = 34;
  e[e.quotationMark = g] = "quotationMark";
  const f = 35;
  e[e.numberSign = f] = "numberSign";
  const y = 36;
  e[e.dollarSign = y] = "dollarSign";
  const T = 37;
  e[e.percentSign = T] = "percentSign";
  const S = 38;
  e[e.ampersand = S] = "ampersand";
  const P = 39;
  e[e.apostrophe = P] = "apostrophe";
  const B = 40;
  e[e.leftParenthesis = B] = "leftParenthesis";
  const U = 41;
  e[e.rightParenthesis = U] = "rightParenthesis";
  const K = 42;
  e[e.asterisk = K] = "asterisk";
  const se = 43;
  e[e.plusSign = se] = "plusSign";
  const ye = 44;
  e[e.comma = ye] = "comma";
  const he = 45;
  e[e.dash = he] = "dash";
  const ce = 46;
  e[e.dot = ce] = "dot";
  const ve = 47;
  e[e.slash = ve] = "slash";
  const Fe = 48;
  e[e.digit0 = Fe] = "digit0";
  const je = 49;
  e[e.digit1 = je] = "digit1";
  const Me = 50;
  e[e.digit2 = Me] = "digit2";
  const Ne = 51;
  e[e.digit3 = Ne] = "digit3";
  const qe = 52;
  e[e.digit4 = qe] = "digit4";
  const Ie = 53;
  e[e.digit5 = Ie] = "digit5";
  const be = 54;
  e[e.digit6 = be] = "digit6";
  const Be = 55;
  e[e.digit7 = Be] = "digit7";
  const Pe = 56;
  e[e.digit8 = Pe] = "digit8";
  const $e = 57;
  e[e.digit9 = $e] = "digit9";
  const Ce = 58;
  e[e.colon = Ce] = "colon";
  const Re = 59;
  e[e.semicolon = Re] = "semicolon";
  const J = 60;
  e[e.lessThan = J] = "lessThan";
  const Ue = 61;
  e[e.equalsTo = Ue] = "equalsTo";
  const Le = 62;
  e[e.greaterThan = Le] = "greaterThan";
  const He = 63;
  e[e.questionMark = He] = "questionMark";
  const we = 64;
  e[e.atSign = we] = "atSign";
  const De = 65;
  e[e.uppercaseA = De] = "uppercaseA";
  const Ve = 66;
  e[e.uppercaseB = Ve] = "uppercaseB";
  const _ = 67;
  e[e.uppercaseC = _] = "uppercaseC";
  const x = 68;
  e[e.uppercaseD = x] = "uppercaseD";
  const I = 69;
  e[e.uppercaseE = I] = "uppercaseE";
  const w = 70;
  e[e.uppercaseF = w] = "uppercaseF";
  const A = 71;
  e[e.uppercaseG = A] = "uppercaseG";
  const C = 72;
  e[e.uppercaseH = C] = "uppercaseH";
  const R = 73;
  e[e.uppercaseI = R] = "uppercaseI";
  const M = 74;
  e[e.uppercaseJ = M] = "uppercaseJ";
  const X = 75;
  e[e.uppercaseK = X] = "uppercaseK";
  const V = 76;
  e[e.uppercaseL = V] = "uppercaseL";
  const ee = 77;
  e[e.uppercaseM = ee] = "uppercaseM";
  const le = 78;
  e[e.uppercaseN = le] = "uppercaseN";
  const Q = 79;
  e[e.uppercaseO = Q] = "uppercaseO";
  const re = 80;
  e[e.uppercaseP = re] = "uppercaseP";
  const oe = 81;
  e[e.uppercaseQ = oe] = "uppercaseQ";
  const Qe = 82;
  e[e.uppercaseR = Qe] = "uppercaseR";
  const ot = 83;
  e[e.uppercaseS = ot] = "uppercaseS";
  const pt = 84;
  e[e.uppercaseT = pt] = "uppercaseT";
  const en = 85;
  e[e.uppercaseU = en] = "uppercaseU";
  const tn = 86;
  e[e.uppercaseV = tn] = "uppercaseV";
  const nn = 87;
  e[e.uppercaseW = nn] = "uppercaseW";
  const sn = 88;
  e[e.uppercaseX = sn] = "uppercaseX";
  const rn = 89;
  e[e.uppercaseY = rn] = "uppercaseY";
  const on = 90;
  e[e.uppercaseZ = on] = "uppercaseZ";
  const an = 91;
  e[e.leftSquareBracket = an] = "leftSquareBracket";
  const cn = 92;
  e[e.backslash = cn] = "backslash";
  const ln = 93;
  e[e.rightSquareBracket = ln] = "rightSquareBracket";
  const un = 94;
  e[e.caret = un] = "caret";
  const hn = 95;
  e[e.underscore = hn] = "underscore";
  const pn = 96;
  e[e.graveAccent = pn] = "graveAccent";
  const fn = 97;
  e[e.lowercaseA = fn] = "lowercaseA";
  const mn = 98;
  e[e.lowercaseB = mn] = "lowercaseB";
  const dn = 99;
  e[e.lowercaseC = dn] = "lowercaseC";
  const kn = 100;
  e[e.lowercaseD = kn] = "lowercaseD";
  const _n = 101;
  e[e.lowercaseE = _n] = "lowercaseE";
  const gn = 102;
  e[e.lowercaseF = gn] = "lowercaseF";
  const xn = 103;
  e[e.lowercaseG = xn] = "lowercaseG";
  const yn = 104;
  e[e.lowercaseH = yn] = "lowercaseH";
  const In = 105;
  e[e.lowercaseI = In] = "lowercaseI";
  const bn = 106;
  e[e.lowercaseJ = bn] = "lowercaseJ";
  const wn = 107;
  e[e.lowercaseK = wn] = "lowercaseK";
  const Tn = 108;
  e[e.lowercaseL = Tn] = "lowercaseL";
  const An = 109;
  e[e.lowercaseM = An] = "lowercaseM";
  const En = 110;
  e[e.lowercaseN = En] = "lowercaseN";
  const Sn = 111;
  e[e.lowercaseO = Sn] = "lowercaseO";
  const vn = 112;
  e[e.lowercaseP = vn] = "lowercaseP";
  const Nn = 113;
  e[e.lowercaseQ = Nn] = "lowercaseQ";
  const Pn = 114;
  e[e.lowercaseR = Pn] = "lowercaseR";
  const Cn = 115;
  e[e.lowercaseS = Cn] = "lowercaseS";
  const Rn = 116;
  e[e.lowercaseT = Rn] = "lowercaseT";
  const Ln = 117;
  e[e.lowercaseU = Ln] = "lowercaseU";
  const Dn = 118;
  e[e.lowercaseV = Dn] = "lowercaseV";
  const On = 119;
  e[e.lowercaseW = On] = "lowercaseW";
  const Fn = 120;
  e[e.lowercaseX = Fn] = "lowercaseX";
  const jn = 121;
  e[e.lowercaseY = jn] = "lowercaseY";
  const Mn = 122;
  e[e.lowercaseZ = Mn] = "lowercaseZ";
  const qn = 123;
  e[e.leftCurlyBrace = qn] = "leftCurlyBrace";
  const Bn = 124;
  e[e.verticalBar = Bn] = "verticalBar";
  const $n = 125;
  e[e.rightCurlyBrace = $n] = "rightCurlyBrace";
  const Un = 126;
  e[e.tilde = Un] = "tilde";
  const Hn = 160;
  e[e.nonBreakingSpace = Hn] = "nonBreakingSpace";
  const Vn = 5760;
  e[e.oghamSpaceMark = Vn] = "oghamSpaceMark";
  const Wn = 8232;
  e[e.lineSeparator = Wn] = "lineSeparator";
  const Xn = 8233;
  e[e.paragraphSeparator = Xn] = "paragraphSeparator";
})(u || (u = {}));
let Xt, j, q, r, b, us;
function xt() {
  return us++;
}
function qr(e) {
  if ("pos" in e) {
    const n = $r(e.pos);
    e.message += ` (${n.line}:${n.column})`, e.loc = n;
  }
  return e;
}
class Br {
  constructor(n, s) {
    this.line = n, this.column = s;
  }
}
function $r(e) {
  let n = 1, s = 1;
  for (let o = 0; o < e; o++)
    b.charCodeAt(o) === u.lineFeed ? (n++, s = 1) : s++;
  return new Br(n, s);
}
function Ur(e, n, s, o) {
  b = e, r = new ie(), us = 1, Xt = n, j = s, q = o;
}
function E(e) {
  return r.contextualKeyword === e;
}
function h1(e) {
  const n = Et();
  return n.type === t.name && n.contextualKeyword === e;
}
function Z(e) {
  return r.contextualKeyword === e && p(t.name);
}
function Y(e) {
  Z(e) || D();
}
function pe() {
  return a(t.eof) || a(t.braceR) || ae();
}
function ae() {
  const e = r.tokens[r.tokens.length - 1], n = e ? e.end : 0;
  for (let s = n; s < r.start; s++) {
    const o = b.charCodeAt(s);
    if (o === u.lineFeed || o === u.carriageReturn || o === 8232 || o === 8233)
      return !0;
  }
  return !1;
}
function hs() {
  const e = p1();
  for (let n = r.end; n < e; n++) {
    const s = b.charCodeAt(n);
    if (s === u.lineFeed || s === u.carriageReturn || s === 8232 || s === 8233)
      return !0;
  }
  return !1;
}
function Te() {
  return p(t.semi) || pe();
}
function W() {
  Te() || D('Unexpected token, expected ";"');
}
function d(e) {
  p(e) || D(`Unexpected token, expected "${jr(e)}"`);
}
function D(e = "Unexpected token", n = r.start) {
  if (r.error)
    return;
  const s = new SyntaxError(e);
  s.pos = n, r.error = s, r.pos = b.length, L(t.eof);
}
const ps = [
  9,
  11,
  12,
  u.space,
  u.nonBreakingSpace,
  u.oghamSpaceMark,
  8192,
  // EN QUAD
  8193,
  // EM QUAD
  8194,
  // EN SPACE
  8195,
  // EM SPACE
  8196,
  // THREE-PER-EM SPACE
  8197,
  // FOUR-PER-EM SPACE
  8198,
  // SIX-PER-EM SPACE
  8199,
  // FIGURE SPACE
  8200,
  // PUNCTUATION SPACE
  8201,
  // THIN SPACE
  8202,
  // HAIR SPACE
  8239,
  // NARROW NO-BREAK SPACE
  8287,
  // MEDIUM MATHEMATICAL SPACE
  12288,
  // IDEOGRAPHIC SPACE
  65279
  // ZERO WIDTH NO-BREAK SPACE
], q1 = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g, fs = new Uint8Array(65536);
for (const e of ps)
  fs[e] = 1;
function Hr(e) {
  if (e < 48) return e === 36;
  if (e < 58) return !0;
  if (e < 65) return !1;
  if (e < 91) return !0;
  if (e < 97) return e === 95;
  if (e < 123) return !0;
  if (e < 128) return !1;
  throw new Error("Should not be called with non-ASCII char code.");
}
const _e = new Uint8Array(65536);
for (let e = 0; e < 128; e++)
  _e[e] = Hr(e) ? 1 : 0;
for (let e = 128; e < 65536; e++)
  _e[e] = 1;
for (const e of ps)
  _e[e] = 0;
_e[8232] = 0;
_e[8233] = 0;
const At = _e.slice();
for (let e = u.digit0; e <= u.digit9; e++)
  At[e] = 0;
const B1 = new Int32Array([
  // ""
  -1,
  27,
  783,
  918,
  1755,
  2376,
  2862,
  3483,
  -1,
  3699,
  -1,
  4617,
  4752,
  4833,
  5130,
  5508,
  5940,
  -1,
  6480,
  6939,
  7749,
  8181,
  8451,
  8613,
  -1,
  8829,
  -1,
  // "a"
  -1,
  -1,
  54,
  243,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  432,
  -1,
  -1,
  -1,
  675,
  -1,
  -1,
  -1,
  // "ab"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  81,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "abs"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  108,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "abst"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  135,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "abstr"
  -1,
  162,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "abstra"
  -1,
  -1,
  -1,
  189,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "abstrac"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  216,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "abstract"
  l._abstract << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "ac"
  -1,
  -1,
  -1,
  270,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "acc"
  -1,
  -1,
  -1,
  -1,
  -1,
  297,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "acce"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  324,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "acces"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  351,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "access"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  378,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "accesso"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  405,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "accessor"
  l._accessor << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "as"
  l._as << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  459,
  -1,
  -1,
  -1,
  -1,
  -1,
  594,
  -1,
  // "ass"
  -1,
  -1,
  -1,
  -1,
  -1,
  486,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "asse"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  513,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "asser"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  540,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "assert"
  l._assert << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  567,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "asserts"
  l._asserts << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "asy"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  621,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "asyn"
  -1,
  -1,
  -1,
  648,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "async"
  l._async << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "aw"
  -1,
  702,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "awa"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  729,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "awai"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  756,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "await"
  l._await << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "b"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  810,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "br"
  -1,
  -1,
  -1,
  -1,
  -1,
  837,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "bre"
  -1,
  864,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "brea"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  891,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "break"
  (t._break << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "c"
  -1,
  945,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1107,
  -1,
  -1,
  -1,
  1242,
  -1,
  -1,
  1350,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "ca"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  972,
  1026,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "cas"
  -1,
  -1,
  -1,
  -1,
  -1,
  999,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "case"
  (t._case << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "cat"
  -1,
  -1,
  -1,
  1053,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "catc"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1080,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "catch"
  (t._catch << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "ch"
  -1,
  -1,
  -1,
  -1,
  -1,
  1134,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "che"
  -1,
  -1,
  -1,
  1161,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "chec"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1188,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "check"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1215,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "checks"
  l._checks << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "cl"
  -1,
  1269,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "cla"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1296,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "clas"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1323,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "class"
  (t._class << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "co"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1377,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "con"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1404,
  1620,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "cons"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1431,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "const"
  (t._const << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1458,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "constr"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1485,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "constru"
  -1,
  -1,
  -1,
  1512,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "construc"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1539,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "construct"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1566,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "constructo"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1593,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "constructor"
  l._constructor << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "cont"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1647,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "conti"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1674,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "contin"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1701,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "continu"
  -1,
  -1,
  -1,
  -1,
  -1,
  1728,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "continue"
  (t._continue << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "d"
  -1,
  -1,
  -1,
  -1,
  -1,
  1782,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2349,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "de"
  -1,
  -1,
  1809,
  1971,
  -1,
  -1,
  2106,
  -1,
  -1,
  -1,
  -1,
  -1,
  2241,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "deb"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1836,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "debu"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1863,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "debug"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1890,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "debugg"
  -1,
  -1,
  -1,
  -1,
  -1,
  1917,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "debugge"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1944,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "debugger"
  (t._debugger << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "dec"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1998,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "decl"
  -1,
  2025,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "decla"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2052,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "declar"
  -1,
  -1,
  -1,
  -1,
  -1,
  2079,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "declare"
  l._declare << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "def"
  -1,
  2133,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "defa"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2160,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "defau"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2187,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "defaul"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2214,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "default"
  (t._default << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "del"
  -1,
  -1,
  -1,
  -1,
  -1,
  2268,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "dele"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2295,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "delet"
  -1,
  -1,
  -1,
  -1,
  -1,
  2322,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "delete"
  (t._delete << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "do"
  (t._do << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "e"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2403,
  -1,
  2484,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2565,
  -1,
  -1,
  // "el"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2430,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "els"
  -1,
  -1,
  -1,
  -1,
  -1,
  2457,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "else"
  (t._else << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "en"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2511,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "enu"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2538,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "enum"
  l._enum << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "ex"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2592,
  -1,
  -1,
  -1,
  2727,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "exp"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2619,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "expo"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2646,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "expor"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2673,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "export"
  (t._export << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2700,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "exports"
  l._exports << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "ext"
  -1,
  -1,
  -1,
  -1,
  -1,
  2754,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "exte"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2781,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "exten"
  -1,
  -1,
  -1,
  -1,
  2808,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "extend"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2835,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "extends"
  (t._extends << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "f"
  -1,
  2889,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2997,
  -1,
  -1,
  -1,
  -1,
  -1,
  3159,
  -1,
  -1,
  3213,
  -1,
  -1,
  3294,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "fa"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2916,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "fal"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2943,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "fals"
  -1,
  -1,
  -1,
  -1,
  -1,
  2970,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "false"
  (t._false << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "fi"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3024,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "fin"
  -1,
  3051,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "fina"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3078,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "final"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3105,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "finall"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3132,
  -1,
  // "finally"
  (t._finally << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "fo"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3186,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "for"
  (t._for << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "fr"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3240,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "fro"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3267,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "from"
  l._from << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "fu"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3321,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "fun"
  -1,
  -1,
  -1,
  3348,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "func"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3375,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "funct"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3402,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "functi"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3429,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "functio"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3456,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "function"
  (t._function << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "g"
  -1,
  -1,
  -1,
  -1,
  -1,
  3510,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3564,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "ge"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3537,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "get"
  l._get << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "gl"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3591,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "glo"
  -1,
  -1,
  3618,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "glob"
  -1,
  3645,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "globa"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3672,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "global"
  l._global << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "i"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3726,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3753,
  4077,
  -1,
  -1,
  -1,
  -1,
  4590,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "if"
  (t._if << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "im"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3780,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "imp"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3807,
  -1,
  -1,
  3996,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "impl"
  -1,
  -1,
  -1,
  -1,
  -1,
  3834,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "imple"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3861,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "implem"
  -1,
  -1,
  -1,
  -1,
  -1,
  3888,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "impleme"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3915,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "implemen"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3942,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "implement"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3969,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "implements"
  l._implements << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "impo"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4023,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "impor"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4050,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "import"
  (t._import << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "in"
  (t._in << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4104,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4185,
  4401,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "inf"
  -1,
  -1,
  -1,
  -1,
  -1,
  4131,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "infe"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4158,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "infer"
  l._infer << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "ins"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4212,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "inst"
  -1,
  4239,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "insta"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4266,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "instan"
  -1,
  -1,
  -1,
  4293,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "instanc"
  -1,
  -1,
  -1,
  -1,
  -1,
  4320,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "instance"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4347,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "instanceo"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4374,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "instanceof"
  (t._instanceof << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "int"
  -1,
  -1,
  -1,
  -1,
  -1,
  4428,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "inte"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4455,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "inter"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4482,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "interf"
  -1,
  4509,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "interfa"
  -1,
  -1,
  -1,
  4536,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "interfac"
  -1,
  -1,
  -1,
  -1,
  -1,
  4563,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "interface"
  l._interface << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "is"
  l._is << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "k"
  -1,
  -1,
  -1,
  -1,
  -1,
  4644,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "ke"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4671,
  -1,
  // "key"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4698,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "keyo"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4725,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "keyof"
  l._keyof << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "l"
  -1,
  -1,
  -1,
  -1,
  -1,
  4779,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "le"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4806,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "let"
  (t._let << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "m"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4860,
  -1,
  -1,
  -1,
  -1,
  -1,
  4995,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "mi"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4887,
  -1,
  -1,
  // "mix"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4914,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "mixi"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4941,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "mixin"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4968,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "mixins"
  l._mixins << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "mo"
  -1,
  -1,
  -1,
  -1,
  5022,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "mod"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5049,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "modu"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5076,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "modul"
  -1,
  -1,
  -1,
  -1,
  -1,
  5103,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "module"
  l._module << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "n"
  -1,
  5157,
  -1,
  -1,
  -1,
  5373,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5427,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "na"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5184,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "nam"
  -1,
  -1,
  -1,
  -1,
  -1,
  5211,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "name"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5238,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "names"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5265,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "namesp"
  -1,
  5292,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "namespa"
  -1,
  -1,
  -1,
  5319,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "namespac"
  -1,
  -1,
  -1,
  -1,
  -1,
  5346,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "namespace"
  l._namespace << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "ne"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5400,
  -1,
  -1,
  -1,
  // "new"
  (t._new << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "nu"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5454,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "nul"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5481,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "null"
  (t._null << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "o"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5535,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5562,
  -1,
  -1,
  -1,
  -1,
  5697,
  5751,
  -1,
  -1,
  -1,
  -1,
  // "of"
  l._of << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "op"
  -1,
  5589,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "opa"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5616,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "opaq"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5643,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "opaqu"
  -1,
  -1,
  -1,
  -1,
  -1,
  5670,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "opaque"
  l._opaque << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "ou"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5724,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "out"
  l._out << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "ov"
  -1,
  -1,
  -1,
  -1,
  -1,
  5778,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "ove"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5805,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "over"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5832,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "overr"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5859,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "overri"
  -1,
  -1,
  -1,
  -1,
  5886,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "overrid"
  -1,
  -1,
  -1,
  -1,
  -1,
  5913,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "override"
  l._override << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "p"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5967,
  -1,
  -1,
  6345,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "pr"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5994,
  -1,
  -1,
  -1,
  -1,
  -1,
  6129,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "pri"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6021,
  -1,
  -1,
  -1,
  -1,
  // "priv"
  -1,
  6048,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "priva"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6075,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "privat"
  -1,
  -1,
  -1,
  -1,
  -1,
  6102,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "private"
  l._private << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "pro"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6156,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "prot"
  -1,
  -1,
  -1,
  -1,
  -1,
  6183,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6318,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "prote"
  -1,
  -1,
  -1,
  6210,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "protec"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6237,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "protect"
  -1,
  -1,
  -1,
  -1,
  -1,
  6264,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "protecte"
  -1,
  -1,
  -1,
  -1,
  6291,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "protected"
  l._protected << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "proto"
  l._proto << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "pu"
  -1,
  -1,
  6372,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "pub"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6399,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "publ"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6426,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "publi"
  -1,
  -1,
  -1,
  6453,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "public"
  l._public << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "r"
  -1,
  -1,
  -1,
  -1,
  -1,
  6507,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "re"
  -1,
  6534,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6696,
  -1,
  -1,
  6831,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "rea"
  -1,
  -1,
  -1,
  -1,
  6561,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "read"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6588,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "reado"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6615,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "readon"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6642,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "readonl"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6669,
  -1,
  // "readonly"
  l._readonly << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "req"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6723,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "requ"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6750,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "requi"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6777,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "requir"
  -1,
  -1,
  -1,
  -1,
  -1,
  6804,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "require"
  l._require << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "ret"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6858,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "retu"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6885,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "retur"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6912,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "return"
  (t._return << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "s"
  -1,
  6966,
  -1,
  -1,
  -1,
  7182,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7236,
  7371,
  -1,
  7479,
  -1,
  7614,
  -1,
  // "sa"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6993,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "sat"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7020,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "sati"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7047,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "satis"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7074,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "satisf"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7101,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "satisfi"
  -1,
  -1,
  -1,
  -1,
  -1,
  7128,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "satisfie"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7155,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "satisfies"
  l._satisfies << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "se"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7209,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "set"
  l._set << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "st"
  -1,
  7263,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "sta"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7290,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "stat"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7317,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "stati"
  -1,
  -1,
  -1,
  7344,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "static"
  l._static << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "su"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7398,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "sup"
  -1,
  -1,
  -1,
  -1,
  -1,
  7425,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "supe"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7452,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "super"
  (t._super << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "sw"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7506,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "swi"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7533,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "swit"
  -1,
  -1,
  -1,
  7560,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "switc"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7587,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "switch"
  (t._switch << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "sy"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7641,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "sym"
  -1,
  -1,
  7668,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "symb"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7695,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "symbo"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7722,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "symbol"
  l._symbol << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "t"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7776,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7938,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8046,
  -1,
  // "th"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7803,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7857,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "thi"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7830,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "this"
  (t._this << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "thr"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7884,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "thro"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7911,
  -1,
  -1,
  -1,
  // "throw"
  (t._throw << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "tr"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7965,
  -1,
  -1,
  -1,
  8019,
  -1,
  // "tru"
  -1,
  -1,
  -1,
  -1,
  -1,
  7992,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "true"
  (t._true << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "try"
  (t._try << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "ty"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8073,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "typ"
  -1,
  -1,
  -1,
  -1,
  -1,
  8100,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "type"
  l._type << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8127,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "typeo"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8154,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "typeof"
  (t._typeof << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "u"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8208,
  -1,
  -1,
  -1,
  -1,
  8343,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "un"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8235,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "uni"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8262,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "uniq"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8289,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "uniqu"
  -1,
  -1,
  -1,
  -1,
  -1,
  8316,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "unique"
  l._unique << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "us"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8370,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "usi"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8397,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "usin"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8424,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "using"
  l._using << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "v"
  -1,
  8478,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8532,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "va"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8505,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "var"
  (t._var << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "vo"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8559,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "voi"
  -1,
  -1,
  -1,
  -1,
  8586,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "void"
  (t._void << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "w"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8640,
  8748,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "wh"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8667,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "whi"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8694,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "whil"
  -1,
  -1,
  -1,
  -1,
  -1,
  8721,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "while"
  (t._while << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "wi"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8775,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "wit"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8802,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "with"
  (t._with << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "y"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8856,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "yi"
  -1,
  -1,
  -1,
  -1,
  -1,
  8883,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "yie"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8910,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "yiel"
  -1,
  -1,
  -1,
  -1,
  8937,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "yield"
  (t._yield << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1
]);
function Vr() {
  let e = 0, n = 0, s = r.pos;
  for (; s < b.length && (n = b.charCodeAt(s), !(n < u.lowercaseA || n > u.lowercaseZ)); ) {
    const i = B1[e + (n - u.lowercaseA) + 1];
    if (i === -1)
      break;
    e = i, s++;
  }
  const o = B1[e];
  if (o > -1 && !_e[n]) {
    r.pos = s, o & 1 ? L(o >>> 1) : L(t.name, o >>> 1);
    return;
  }
  for (; s < b.length; ) {
    const i = b.charCodeAt(s);
    if (_e[i])
      s++;
    else if (i === u.backslash) {
      if (s += 2, b.charCodeAt(s) === u.leftCurlyBrace) {
        for (; s < b.length && b.charCodeAt(s) !== u.rightCurlyBrace; )
          s++;
        s++;
      }
    } else if (i === u.atSign && b.charCodeAt(s + 1) === u.atSign)
      s += 2;
    else
      break;
  }
  r.pos = s, L(t.name);
}
var v;
(function(e) {
  e[e.Access = 0] = "Access";
  const s = 1;
  e[e.ExportAccess = s] = "ExportAccess";
  const o = s + 1;
  e[e.TopLevelDeclaration = o] = "TopLevelDeclaration";
  const i = o + 1;
  e[e.FunctionScopedDeclaration = i] = "FunctionScopedDeclaration";
  const c = i + 1;
  e[e.BlockScopedDeclaration = c] = "BlockScopedDeclaration";
  const h = c + 1;
  e[e.ObjectShorthandTopLevelDeclaration = h] = "ObjectShorthandTopLevelDeclaration";
  const m = h + 1;
  e[e.ObjectShorthandFunctionScopedDeclaration = m] = "ObjectShorthandFunctionScopedDeclaration";
  const g = m + 1;
  e[e.ObjectShorthandBlockScopedDeclaration = g] = "ObjectShorthandBlockScopedDeclaration";
  const f = g + 1;
  e[e.ObjectShorthand = f] = "ObjectShorthand";
  const y = f + 1;
  e[e.ImportDeclaration = y] = "ImportDeclaration";
  const T = y + 1;
  e[e.ObjectKey = T] = "ObjectKey";
  const S = T + 1;
  e[e.ImportAccess = S] = "ImportAccess";
})(v || (v = {}));
var ke;
(function(e) {
  e[e.NoChildren = 0] = "NoChildren";
  const s = 1;
  e[e.OneChild = s] = "OneChild";
  const o = s + 1;
  e[e.StaticChildren = o] = "StaticChildren";
  const i = o + 1;
  e[e.KeyAfterPropSpread = i] = "KeyAfterPropSpread";
})(ke || (ke = {}));
function ms(e) {
  const n = e.identifierRole;
  return n === v.TopLevelDeclaration || n === v.FunctionScopedDeclaration || n === v.BlockScopedDeclaration || n === v.ObjectShorthandTopLevelDeclaration || n === v.ObjectShorthandFunctionScopedDeclaration || n === v.ObjectShorthandBlockScopedDeclaration;
}
function Wr(e) {
  const n = e.identifierRole;
  return n === v.FunctionScopedDeclaration || n === v.BlockScopedDeclaration || n === v.ObjectShorthandFunctionScopedDeclaration || n === v.ObjectShorthandBlockScopedDeclaration;
}
function ds(e) {
  const n = e.identifierRole;
  return n === v.TopLevelDeclaration || n === v.ObjectShorthandTopLevelDeclaration || n === v.ImportDeclaration;
}
function Xr(e) {
  const n = e.identifierRole;
  return n === v.TopLevelDeclaration || n === v.BlockScopedDeclaration || n === v.ObjectShorthandTopLevelDeclaration || n === v.ObjectShorthandBlockScopedDeclaration;
}
function Gr(e) {
  const n = e.identifierRole;
  return n === v.FunctionScopedDeclaration || n === v.ObjectShorthandFunctionScopedDeclaration;
}
function zr(e) {
  return e.identifierRole === v.ObjectShorthandTopLevelDeclaration || e.identifierRole === v.ObjectShorthandBlockScopedDeclaration || e.identifierRole === v.ObjectShorthandFunctionScopedDeclaration;
}
class Gt {
  constructor() {
    this.type = r.type, this.contextualKeyword = r.contextualKeyword, this.start = r.start, this.end = r.end, this.scopeDepth = r.scopeDepth, this.isType = r.isType, this.identifierRole = null, this.jsxRole = null, this.shadowsGlobal = !1, this.isAsyncOperation = !1, this.contextId = null, this.rhsEndIndex = null, this.isExpression = !1, this.numNullishCoalesceStarts = 0, this.numNullishCoalesceEnds = 0, this.isOptionalChainStart = !1, this.isOptionalChainEnd = !1, this.subscriptStartIndex = null, this.nullishStartIndex = null;
  }
  // Initially false for all tokens, then may be computed in a follow-up step that does scope
  // analysis.
  // Initially false for all tokens, but may be set during transform to mark it as containing an
  // await operation.
  // For assignments, the index of the RHS. For export tokens, the end of the export.
  // For class tokens, records if the class is a class expression or a class statement.
  // Number of times to insert a `nullishCoalesce(` snippet before this token.
  // Number of times to insert a `)` snippet after this token.
  // If true, insert an `optionalChain([` snippet before this token.
  // If true, insert a `])` snippet after this token.
  // Tag for `.`, `?.`, `[`, `?.[`, `(`, and `?.(` to denote the "root" token for this
  // subscript chain. This can be used to determine if this chain is an optional chain.
  // Tag for `??` operators to denote the root token for this nullish coalescing call.
}
function k() {
  r.tokens.push(new Gt()), xs();
}
function We() {
  r.tokens.push(new Gt()), r.start = r.pos, ho();
}
function Jr() {
  r.type === t.assign && --r.pos, co();
}
function F(e) {
  for (let s = r.tokens.length - e; s < r.tokens.length; s++)
    r.tokens[s].isType = !0;
  const n = r.isType;
  return r.isType = !0, n;
}
function O(e) {
  r.isType = e;
}
function p(e) {
  return a(e) ? (k(), !0) : !1;
}
function ks(e) {
  const n = r.isType;
  r.isType = !0, p(e), r.isType = n;
}
function a(e) {
  return r.type === e;
}
function G() {
  const e = r.snapshot();
  k();
  const n = r.type;
  return r.restoreFromSnapshot(e), n;
}
class Qr {
  constructor(n, s) {
    this.type = n, this.contextualKeyword = s;
  }
}
function Et() {
  const e = r.snapshot();
  k();
  const n = r.type, s = r.contextualKeyword;
  return r.restoreFromSnapshot(e), new Qr(n, s);
}
function p1() {
  return _s(r.pos);
}
function _s(e) {
  q1.lastIndex = e;
  const n = q1.exec(b);
  return e + n[0].length;
}
function gs() {
  return b.charCodeAt(p1());
}
function xs() {
  if (Is(), r.start = r.pos, r.pos >= b.length) {
    const e = r.tokens;
    e.length >= 2 && e[e.length - 1].start >= b.length && e[e.length - 2].start >= b.length && D("Unexpectedly reached the end of input."), L(t.eof);
    return;
  }
  Yr(b.charCodeAt(r.pos));
}
function Yr(e) {
  At[e] || e === u.backslash || e === u.atSign && b.charCodeAt(r.pos + 1) === u.atSign ? Vr() : Ts(e);
}
function Zr() {
  for (; b.charCodeAt(r.pos) !== u.asterisk || b.charCodeAt(r.pos + 1) !== u.slash; )
    if (r.pos++, r.pos > b.length) {
      D("Unterminated comment", r.pos - 2);
      return;
    }
  r.pos += 2;
}
function ys(e) {
  let n = b.charCodeAt(r.pos += e);
  if (r.pos < b.length)
    for (; n !== u.lineFeed && n !== u.carriageReturn && n !== u.lineSeparator && n !== u.paragraphSeparator && ++r.pos < b.length; )
      n = b.charCodeAt(r.pos);
}
function Is() {
  for (; r.pos < b.length; ) {
    const e = b.charCodeAt(r.pos);
    switch (e) {
      case u.carriageReturn:
        b.charCodeAt(r.pos + 1) === u.lineFeed && ++r.pos;
      case u.lineFeed:
      case u.lineSeparator:
      case u.paragraphSeparator:
        ++r.pos;
        break;
      case u.slash:
        switch (b.charCodeAt(r.pos + 1)) {
          case u.asterisk:
            r.pos += 2, Zr();
            break;
          case u.slash:
            ys(2);
            break;
          default:
            return;
        }
        break;
      default:
        if (fs[e])
          ++r.pos;
        else
          return;
    }
  }
}
function L(e, n = l.NONE) {
  r.end = r.pos, r.type = e, r.contextualKeyword = n;
}
function Kr() {
  const e = b.charCodeAt(r.pos + 1);
  if (e >= u.digit0 && e <= u.digit9) {
    As(!0);
    return;
  }
  e === u.dot && b.charCodeAt(r.pos + 2) === u.dot ? (r.pos += 3, L(t.ellipsis)) : (++r.pos, L(t.dot));
}
function eo() {
  b.charCodeAt(r.pos + 1) === u.equalsTo ? $(t.assign, 2) : $(t.slash, 1);
}
function to(e) {
  let n = e === u.asterisk ? t.star : t.modulo, s = 1, o = b.charCodeAt(r.pos + 1);
  e === u.asterisk && o === u.asterisk && (s++, o = b.charCodeAt(r.pos + 2), n = t.exponent), o === u.equalsTo && b.charCodeAt(r.pos + 2) !== u.greaterThan && (s++, n = t.assign), $(n, s);
}
function no(e) {
  const n = b.charCodeAt(r.pos + 1);
  if (n === e) {
    b.charCodeAt(r.pos + 2) === u.equalsTo ? $(t.assign, 3) : $(e === u.verticalBar ? t.logicalOR : t.logicalAND, 2);
    return;
  }
  if (e === u.verticalBar) {
    if (n === u.greaterThan) {
      $(t.pipeline, 2);
      return;
    } else if (n === u.rightCurlyBrace && q) {
      $(t.braceBarR, 2);
      return;
    }
  }
  if (n === u.equalsTo) {
    $(t.assign, 2);
    return;
  }
  $(e === u.verticalBar ? t.bitwiseOR : t.bitwiseAND, 1);
}
function so() {
  b.charCodeAt(r.pos + 1) === u.equalsTo ? $(t.assign, 2) : $(t.bitwiseXOR, 1);
}
function ro(e) {
  const n = b.charCodeAt(r.pos + 1);
  if (n === e) {
    $(t.preIncDec, 2);
    return;
  }
  n === u.equalsTo ? $(t.assign, 2) : e === u.plusSign ? $(t.plus, 1) : $(t.minus, 1);
}
function oo() {
  const e = b.charCodeAt(r.pos + 1);
  if (e === u.lessThan) {
    if (b.charCodeAt(r.pos + 2) === u.equalsTo) {
      $(t.assign, 3);
      return;
    }
    r.isType ? $(t.lessThan, 1) : $(t.bitShiftL, 2);
    return;
  }
  e === u.equalsTo ? $(t.relationalOrEqual, 2) : $(t.lessThan, 1);
}
function bs() {
  if (r.isType) {
    $(t.greaterThan, 1);
    return;
  }
  const e = b.charCodeAt(r.pos + 1);
  if (e === u.greaterThan) {
    const n = b.charCodeAt(r.pos + 2) === u.greaterThan ? 3 : 2;
    if (b.charCodeAt(r.pos + n) === u.equalsTo) {
      $(t.assign, n + 1);
      return;
    }
    $(t.bitShiftR, n);
    return;
  }
  e === u.equalsTo ? $(t.relationalOrEqual, 2) : $(t.greaterThan, 1);
}
function ws() {
  r.type === t.greaterThan && (r.pos -= 1, bs());
}
function io(e) {
  const n = b.charCodeAt(r.pos + 1);
  if (n === u.equalsTo) {
    $(t.equality, b.charCodeAt(r.pos + 2) === u.equalsTo ? 3 : 2);
    return;
  }
  if (e === u.equalsTo && n === u.greaterThan) {
    r.pos += 2, L(t.arrow);
    return;
  }
  $(e === u.equalsTo ? t.eq : t.bang, 1);
}
function ao() {
  const e = b.charCodeAt(r.pos + 1), n = b.charCodeAt(r.pos + 2);
  e === u.questionMark && // In Flow (but not TypeScript), ??string is a valid type that should be
  // tokenized as two individual ? tokens.
  !(q && r.isType) ? n === u.equalsTo ? $(t.assign, 3) : $(t.nullishCoalescing, 2) : e === u.dot && !(n >= u.digit0 && n <= u.digit9) ? (r.pos += 2, L(t.questionDot)) : (++r.pos, L(t.question));
}
function Ts(e) {
  switch (e) {
    case u.numberSign:
      ++r.pos, L(t.hash);
      return;
    // The interpretation of a dot depends on whether it is followed
    // by a digit or another two dots.
    case u.dot:
      Kr();
      return;
    // Punctuation tokens.
    case u.leftParenthesis:
      ++r.pos, L(t.parenL);
      return;
    case u.rightParenthesis:
      ++r.pos, L(t.parenR);
      return;
    case u.semicolon:
      ++r.pos, L(t.semi);
      return;
    case u.comma:
      ++r.pos, L(t.comma);
      return;
    case u.leftSquareBracket:
      ++r.pos, L(t.bracketL);
      return;
    case u.rightSquareBracket:
      ++r.pos, L(t.bracketR);
      return;
    case u.leftCurlyBrace:
      q && b.charCodeAt(r.pos + 1) === u.verticalBar ? $(t.braceBarL, 2) : (++r.pos, L(t.braceL));
      return;
    case u.rightCurlyBrace:
      ++r.pos, L(t.braceR);
      return;
    case u.colon:
      b.charCodeAt(r.pos + 1) === u.colon ? $(t.doubleColon, 2) : (++r.pos, L(t.colon));
      return;
    case u.questionMark:
      ao();
      return;
    case u.atSign:
      ++r.pos, L(t.at);
      return;
    case u.graveAccent:
      ++r.pos, L(t.backQuote);
      return;
    case u.digit0: {
      const n = b.charCodeAt(r.pos + 1);
      if (n === u.lowercaseX || n === u.uppercaseX || n === u.lowercaseO || n === u.uppercaseO || n === u.lowercaseB || n === u.uppercaseB) {
        lo();
        return;
      }
    }
    // Anything else beginning with a digit is an integer, octal
    // number, or float.
    case u.digit1:
    case u.digit2:
    case u.digit3:
    case u.digit4:
    case u.digit5:
    case u.digit6:
    case u.digit7:
    case u.digit8:
    case u.digit9:
      As(!1);
      return;
    // Quotes produce strings.
    case u.quotationMark:
    case u.apostrophe:
      uo(e);
      return;
    // Operators are parsed inline in tiny state machines. '=' (charCodes.equalsTo) is
    // often referred to. `finishOp` simply skips the amount of
    // characters it is given as second argument, and returns a token
    // of the type given by its first argument.
    case u.slash:
      eo();
      return;
    case u.percentSign:
    case u.asterisk:
      to(e);
      return;
    case u.verticalBar:
    case u.ampersand:
      no(e);
      return;
    case u.caret:
      so();
      return;
    case u.plusSign:
    case u.dash:
      ro(e);
      return;
    case u.lessThan:
      oo();
      return;
    case u.greaterThan:
      bs();
      return;
    case u.equalsTo:
    case u.exclamationMark:
      io(e);
      return;
    case u.tilde:
      $(t.tilde, 1);
      return;
  }
  D(`Unexpected character '${String.fromCharCode(e)}'`, r.pos);
}
function $(e, n) {
  r.pos += n, L(e);
}
function co() {
  const e = r.pos;
  let n = !1, s = !1;
  for (; ; ) {
    if (r.pos >= b.length) {
      D("Unterminated regular expression", e);
      return;
    }
    const o = b.charCodeAt(r.pos);
    if (n)
      n = !1;
    else {
      if (o === u.leftSquareBracket)
        s = !0;
      else if (o === u.rightSquareBracket && s)
        s = !1;
      else if (o === u.slash && !s)
        break;
      n = o === u.backslash;
    }
    ++r.pos;
  }
  ++r.pos, po(), L(t.regexp);
}
function Gn() {
  for (; ; ) {
    const e = b.charCodeAt(r.pos);
    if (e >= u.digit0 && e <= u.digit9 || e === u.underscore)
      r.pos++;
    else
      break;
  }
}
function lo() {
  for (r.pos += 2; ; ) {
    const n = b.charCodeAt(r.pos);
    if (n >= u.digit0 && n <= u.digit9 || n >= u.lowercaseA && n <= u.lowercaseF || n >= u.uppercaseA && n <= u.uppercaseF || n === u.underscore)
      r.pos++;
    else
      break;
  }
  b.charCodeAt(r.pos) === u.lowercaseN ? (++r.pos, L(t.bigint)) : L(t.num);
}
function As(e) {
  let n = !1, s = !1;
  e || Gn();
  let o = b.charCodeAt(r.pos);
  if (o === u.dot && (++r.pos, Gn(), o = b.charCodeAt(r.pos)), (o === u.uppercaseE || o === u.lowercaseE) && (o = b.charCodeAt(++r.pos), (o === u.plusSign || o === u.dash) && ++r.pos, Gn(), o = b.charCodeAt(r.pos)), o === u.lowercaseN ? (++r.pos, n = !0) : o === u.lowercaseM && (++r.pos, s = !0), n) {
    L(t.bigint);
    return;
  }
  if (s) {
    L(t.decimal);
    return;
  }
  L(t.num);
}
function uo(e) {
  for (r.pos++; ; ) {
    if (r.pos >= b.length) {
      D("Unterminated string constant");
      return;
    }
    const n = b.charCodeAt(r.pos);
    if (n === u.backslash)
      r.pos++;
    else if (n === e)
      break;
    r.pos++;
  }
  r.pos++, L(t.string);
}
function ho() {
  for (; ; ) {
    if (r.pos >= b.length) {
      D("Unterminated template");
      return;
    }
    const e = b.charCodeAt(r.pos);
    if (e === u.graveAccent || e === u.dollarSign && b.charCodeAt(r.pos + 1) === u.leftCurlyBrace) {
      if (r.pos === r.start && a(t.template))
        if (e === u.dollarSign) {
          r.pos += 2, L(t.dollarBraceL);
          return;
        } else {
          ++r.pos, L(t.backQuote);
          return;
        }
      L(t.template);
      return;
    }
    e === u.backslash && r.pos++, r.pos++;
  }
}
function po() {
  for (; r.pos < b.length; ) {
    const e = b.charCodeAt(r.pos);
    if (_e[e])
      r.pos++;
    else if (e === u.backslash) {
      if (r.pos += 2, b.charCodeAt(r.pos) === u.leftCurlyBrace) {
        for (; r.pos < b.length && b.charCodeAt(r.pos) !== u.rightCurlyBrace; )
          r.pos++;
        r.pos++;
      }
    } else
      break;
  }
}
function yt(e, n = e.currentIndex()) {
  let s = n + 1;
  if (Ct(e, s)) {
    const o = e.identifierNameAtIndex(n);
    return {
      isType: !1,
      leftName: o,
      rightName: o,
      endIndex: s
    };
  }
  if (s++, Ct(e, s))
    return {
      isType: !0,
      leftName: null,
      rightName: null,
      endIndex: s
    };
  if (s++, Ct(e, s))
    return {
      isType: !1,
      leftName: e.identifierNameAtIndex(n),
      rightName: e.identifierNameAtIndex(n + 2),
      endIndex: s
    };
  if (s++, Ct(e, s))
    return {
      isType: !0,
      leftName: null,
      rightName: null,
      endIndex: s
    };
  throw new Error(`Unexpected import/export specifier at ${n}`);
}
function Ct(e, n) {
  const s = e.tokens[n];
  return s.type === t.braceR || s.type === t.comma;
}
const fo = /* @__PURE__ */ new Map([
  ["quot", '"'],
  ["amp", "&"],
  ["apos", "'"],
  ["lt", "<"],
  ["gt", ">"],
  ["nbsp", " "],
  ["iexcl", "¡"],
  ["cent", "¢"],
  ["pound", "£"],
  ["curren", "¤"],
  ["yen", "¥"],
  ["brvbar", "¦"],
  ["sect", "§"],
  ["uml", "¨"],
  ["copy", "©"],
  ["ordf", "ª"],
  ["laquo", "«"],
  ["not", "¬"],
  ["shy", "­"],
  ["reg", "®"],
  ["macr", "¯"],
  ["deg", "°"],
  ["plusmn", "±"],
  ["sup2", "²"],
  ["sup3", "³"],
  ["acute", "´"],
  ["micro", "µ"],
  ["para", "¶"],
  ["middot", "·"],
  ["cedil", "¸"],
  ["sup1", "¹"],
  ["ordm", "º"],
  ["raquo", "»"],
  ["frac14", "¼"],
  ["frac12", "½"],
  ["frac34", "¾"],
  ["iquest", "¿"],
  ["Agrave", "À"],
  ["Aacute", "Á"],
  ["Acirc", "Â"],
  ["Atilde", "Ã"],
  ["Auml", "Ä"],
  ["Aring", "Å"],
  ["AElig", "Æ"],
  ["Ccedil", "Ç"],
  ["Egrave", "È"],
  ["Eacute", "É"],
  ["Ecirc", "Ê"],
  ["Euml", "Ë"],
  ["Igrave", "Ì"],
  ["Iacute", "Í"],
  ["Icirc", "Î"],
  ["Iuml", "Ï"],
  ["ETH", "Ð"],
  ["Ntilde", "Ñ"],
  ["Ograve", "Ò"],
  ["Oacute", "Ó"],
  ["Ocirc", "Ô"],
  ["Otilde", "Õ"],
  ["Ouml", "Ö"],
  ["times", "×"],
  ["Oslash", "Ø"],
  ["Ugrave", "Ù"],
  ["Uacute", "Ú"],
  ["Ucirc", "Û"],
  ["Uuml", "Ü"],
  ["Yacute", "Ý"],
  ["THORN", "Þ"],
  ["szlig", "ß"],
  ["agrave", "à"],
  ["aacute", "á"],
  ["acirc", "â"],
  ["atilde", "ã"],
  ["auml", "ä"],
  ["aring", "å"],
  ["aelig", "æ"],
  ["ccedil", "ç"],
  ["egrave", "è"],
  ["eacute", "é"],
  ["ecirc", "ê"],
  ["euml", "ë"],
  ["igrave", "ì"],
  ["iacute", "í"],
  ["icirc", "î"],
  ["iuml", "ï"],
  ["eth", "ð"],
  ["ntilde", "ñ"],
  ["ograve", "ò"],
  ["oacute", "ó"],
  ["ocirc", "ô"],
  ["otilde", "õ"],
  ["ouml", "ö"],
  ["divide", "÷"],
  ["oslash", "ø"],
  ["ugrave", "ù"],
  ["uacute", "ú"],
  ["ucirc", "û"],
  ["uuml", "ü"],
  ["yacute", "ý"],
  ["thorn", "þ"],
  ["yuml", "ÿ"],
  ["OElig", "Œ"],
  ["oelig", "œ"],
  ["Scaron", "Š"],
  ["scaron", "š"],
  ["Yuml", "Ÿ"],
  ["fnof", "ƒ"],
  ["circ", "ˆ"],
  ["tilde", "˜"],
  ["Alpha", "Α"],
  ["Beta", "Β"],
  ["Gamma", "Γ"],
  ["Delta", "Δ"],
  ["Epsilon", "Ε"],
  ["Zeta", "Ζ"],
  ["Eta", "Η"],
  ["Theta", "Θ"],
  ["Iota", "Ι"],
  ["Kappa", "Κ"],
  ["Lambda", "Λ"],
  ["Mu", "Μ"],
  ["Nu", "Ν"],
  ["Xi", "Ξ"],
  ["Omicron", "Ο"],
  ["Pi", "Π"],
  ["Rho", "Ρ"],
  ["Sigma", "Σ"],
  ["Tau", "Τ"],
  ["Upsilon", "Υ"],
  ["Phi", "Φ"],
  ["Chi", "Χ"],
  ["Psi", "Ψ"],
  ["Omega", "Ω"],
  ["alpha", "α"],
  ["beta", "β"],
  ["gamma", "γ"],
  ["delta", "δ"],
  ["epsilon", "ε"],
  ["zeta", "ζ"],
  ["eta", "η"],
  ["theta", "θ"],
  ["iota", "ι"],
  ["kappa", "κ"],
  ["lambda", "λ"],
  ["mu", "μ"],
  ["nu", "ν"],
  ["xi", "ξ"],
  ["omicron", "ο"],
  ["pi", "π"],
  ["rho", "ρ"],
  ["sigmaf", "ς"],
  ["sigma", "σ"],
  ["tau", "τ"],
  ["upsilon", "υ"],
  ["phi", "φ"],
  ["chi", "χ"],
  ["psi", "ψ"],
  ["omega", "ω"],
  ["thetasym", "ϑ"],
  ["upsih", "ϒ"],
  ["piv", "ϖ"],
  ["ensp", " "],
  ["emsp", " "],
  ["thinsp", " "],
  ["zwnj", "‌"],
  ["zwj", "‍"],
  ["lrm", "‎"],
  ["rlm", "‏"],
  ["ndash", "–"],
  ["mdash", "—"],
  ["lsquo", "‘"],
  ["rsquo", "’"],
  ["sbquo", "‚"],
  ["ldquo", "“"],
  ["rdquo", "”"],
  ["bdquo", "„"],
  ["dagger", "†"],
  ["Dagger", "‡"],
  ["bull", "•"],
  ["hellip", "…"],
  ["permil", "‰"],
  ["prime", "′"],
  ["Prime", "″"],
  ["lsaquo", "‹"],
  ["rsaquo", "›"],
  ["oline", "‾"],
  ["frasl", "⁄"],
  ["euro", "€"],
  ["image", "ℑ"],
  ["weierp", "℘"],
  ["real", "ℜ"],
  ["trade", "™"],
  ["alefsym", "ℵ"],
  ["larr", "←"],
  ["uarr", "↑"],
  ["rarr", "→"],
  ["darr", "↓"],
  ["harr", "↔"],
  ["crarr", "↵"],
  ["lArr", "⇐"],
  ["uArr", "⇑"],
  ["rArr", "⇒"],
  ["dArr", "⇓"],
  ["hArr", "⇔"],
  ["forall", "∀"],
  ["part", "∂"],
  ["exist", "∃"],
  ["empty", "∅"],
  ["nabla", "∇"],
  ["isin", "∈"],
  ["notin", "∉"],
  ["ni", "∋"],
  ["prod", "∏"],
  ["sum", "∑"],
  ["minus", "−"],
  ["lowast", "∗"],
  ["radic", "√"],
  ["prop", "∝"],
  ["infin", "∞"],
  ["ang", "∠"],
  ["and", "∧"],
  ["or", "∨"],
  ["cap", "∩"],
  ["cup", "∪"],
  ["int", "∫"],
  ["there4", "∴"],
  ["sim", "∼"],
  ["cong", "≅"],
  ["asymp", "≈"],
  ["ne", "≠"],
  ["equiv", "≡"],
  ["le", "≤"],
  ["ge", "≥"],
  ["sub", "⊂"],
  ["sup", "⊃"],
  ["nsub", "⊄"],
  ["sube", "⊆"],
  ["supe", "⊇"],
  ["oplus", "⊕"],
  ["otimes", "⊗"],
  ["perp", "⊥"],
  ["sdot", "⋅"],
  ["lceil", "⌈"],
  ["rceil", "⌉"],
  ["lfloor", "⌊"],
  ["rfloor", "⌋"],
  ["lang", "〈"],
  ["rang", "〉"],
  ["loz", "◊"],
  ["spades", "♠"],
  ["clubs", "♣"],
  ["hearts", "♥"],
  ["diams", "♦"]
]);
function Es(e) {
  const [n, s] = $1(e.jsxPragma || "React.createElement"), [o, i] = $1(e.jsxFragmentPragma || "React.Fragment");
  return { base: n, suffix: s, fragmentBase: o, fragmentSuffix: i };
}
function $1(e) {
  let n = e.indexOf(".");
  return n === -1 && (n = e.length), [e.slice(0, n), e.slice(n)];
}
class ge {
  // Return true if anything was processed, false otherwise.
  getPrefixCode() {
    return "";
  }
  getHoistedCode() {
    return "";
  }
  getSuffixCode() {
    return "";
  }
}
class Ye extends ge {
  // State for calculating the line number of each JSX tag in development.
  __init() {
    this.lastLineNumber = 1;
  }
  __init2() {
    this.lastIndex = 0;
  }
  // In development, variable name holding the name of the current file.
  __init3() {
    this.filenameVarName = null;
  }
  // Mapping of claimed names for imports in the automatic transform, e,g.
  // {jsx: "_jsx"}. This determines which imports to generate in the prefix.
  __init4() {
    this.esmAutomaticImportNameResolutions = {};
  }
  // When automatically adding imports in CJS mode, we store the variable name
  // holding the imported CJS module so we can require it in the prefix.
  __init5() {
    this.cjsAutomaticModuleNameResolutions = {};
  }
  constructor(n, s, o, i, c) {
    super(), this.rootTransformer = n, this.tokens = s, this.importProcessor = o, this.nameManager = i, this.options = c, Ye.prototype.__init.call(this), Ye.prototype.__init2.call(this), Ye.prototype.__init3.call(this), Ye.prototype.__init4.call(this), Ye.prototype.__init5.call(this), this.jsxPragmaInfo = Es(c), this.isAutomaticRuntime = c.jsxRuntime === "automatic", this.jsxImportSource = c.jsxImportSource || "react";
  }
  process() {
    return this.tokens.matches1(t.jsxTagStart) ? (this.processJSXTag(), !0) : !1;
  }
  getPrefixCode() {
    let n = "";
    if (this.filenameVarName && (n += `const ${this.filenameVarName} = ${JSON.stringify(this.options.filePath || "")};`), this.isAutomaticRuntime)
      if (this.importProcessor)
        for (const [s, o] of Object.entries(this.cjsAutomaticModuleNameResolutions))
          n += `var ${o} = require("${s}");`;
      else {
        const { createElement: s, ...o } = this.esmAutomaticImportNameResolutions;
        s && (n += `import {createElement as ${s}} from "${this.jsxImportSource}";`);
        const i = Object.entries(o).map(([c, h]) => `${c} as ${h}`).join(", ");
        if (i) {
          const c = this.jsxImportSource + (this.options.production ? "/jsx-runtime" : "/jsx-dev-runtime");
          n += `import {${i}} from "${c}";`;
        }
      }
    return n;
  }
  processJSXTag() {
    const { jsxRole: n, start: s } = this.tokens.currentToken(), o = this.options.production ? null : this.getElementLocationCode(s);
    this.isAutomaticRuntime && n !== ke.KeyAfterPropSpread ? this.transformTagToJSXFunc(o, n) : this.transformTagToCreateElement(o);
  }
  getElementLocationCode(n) {
    return `lineNumber: ${this.getLineNumberForIndex(n)}`;
  }
  /**
   * Get the line number for this source position. This is calculated lazily and
   * must be called in increasing order by index.
   */
  getLineNumberForIndex(n) {
    const s = this.tokens.code;
    for (; this.lastIndex < n && this.lastIndex < s.length; )
      s[this.lastIndex] === `
` && this.lastLineNumber++, this.lastIndex++;
    return this.lastLineNumber;
  }
  /**
   * Convert the current JSX element to a call to jsx, jsxs, or jsxDEV. This is
   * the primary transformation for the automatic transform.
   *
   * Example:
   * <div a={1} key={2}>Hello{x}</div>
   * becomes
   * jsxs('div', {a: 1, children: ["Hello", x]}, 2)
   */
  transformTagToJSXFunc(n, s) {
    const o = s === ke.StaticChildren;
    this.tokens.replaceToken(this.getJSXFuncInvocationCode(o));
    let i = null;
    if (this.tokens.matches1(t.jsxTagEnd))
      this.tokens.replaceToken(`${this.getFragmentCode()}, {`), this.processAutomaticChildrenAndEndProps(s);
    else {
      if (this.processTagIntro(), this.tokens.appendCode(", {"), i = this.processProps(!0), this.tokens.matches2(t.slash, t.jsxTagEnd))
        this.tokens.appendCode("}");
      else if (this.tokens.matches1(t.jsxTagEnd))
        this.tokens.removeToken(), this.processAutomaticChildrenAndEndProps(s);
      else
        throw new Error("Expected either /> or > at the end of the tag.");
      i && this.tokens.appendCode(`, ${i}`);
    }
    for (this.options.production || (i === null && this.tokens.appendCode(", void 0"), this.tokens.appendCode(`, ${o}, ${this.getDevSource(n)}, this`)), this.tokens.removeInitialToken(); !this.tokens.matches1(t.jsxTagEnd); )
      this.tokens.removeToken();
    this.tokens.replaceToken(")");
  }
  /**
   * Convert the current JSX element to a createElement call. In the classic
   * runtime, this is the only case. In the automatic runtime, this is called
   * as a fallback in some situations.
   *
   * Example:
   * <div a={1} key={2}>Hello{x}</div>
   * becomes
   * React.createElement('div', {a: 1, key: 2}, "Hello", x)
   */
  transformTagToCreateElement(n) {
    if (this.tokens.replaceToken(this.getCreateElementInvocationCode()), this.tokens.matches1(t.jsxTagEnd))
      this.tokens.replaceToken(`${this.getFragmentCode()}, null`), this.processChildren(!0);
    else if (this.processTagIntro(), this.processPropsObjectWithDevInfo(n), !this.tokens.matches2(t.slash, t.jsxTagEnd)) if (this.tokens.matches1(t.jsxTagEnd))
      this.tokens.removeToken(), this.processChildren(!0);
    else
      throw new Error("Expected either /> or > at the end of the tag.");
    for (this.tokens.removeInitialToken(); !this.tokens.matches1(t.jsxTagEnd); )
      this.tokens.removeToken();
    this.tokens.replaceToken(")");
  }
  /**
   * Get the code for the relevant function for this context: jsx, jsxs,
   * or jsxDEV. The following open-paren is included as well.
   *
   * These functions are only used for the automatic runtime, so they are always
   * auto-imported, but the auto-import will be either CJS or ESM based on the
   * target module format.
   */
  getJSXFuncInvocationCode(n) {
    return this.options.production ? n ? this.claimAutoImportedFuncInvocation("jsxs", "/jsx-runtime") : this.claimAutoImportedFuncInvocation("jsx", "/jsx-runtime") : this.claimAutoImportedFuncInvocation("jsxDEV", "/jsx-dev-runtime");
  }
  /**
   * Return the code to use for the createElement function, e.g.
   * `React.createElement`, including the following open-paren.
   *
   * This is the main function to use for the classic runtime. For the
   * automatic runtime, this function is used as a fallback function to
   * preserve behavior when there is a prop spread followed by an explicit
   * key. In that automatic runtime case, the function should be automatically
   * imported.
   */
  getCreateElementInvocationCode() {
    if (this.isAutomaticRuntime)
      return this.claimAutoImportedFuncInvocation("createElement", "");
    {
      const { jsxPragmaInfo: n } = this;
      return `${this.importProcessor && this.importProcessor.getIdentifierReplacement(n.base) || n.base}${n.suffix}(`;
    }
  }
  /**
   * Return the code to use as the component when compiling a shorthand
   * fragment, e.g. `React.Fragment`.
   *
   * This may be called from either the classic or automatic runtime, and
   * the value should be auto-imported for the automatic runtime.
   */
  getFragmentCode() {
    if (this.isAutomaticRuntime)
      return this.claimAutoImportedName(
        "Fragment",
        this.options.production ? "/jsx-runtime" : "/jsx-dev-runtime"
      );
    {
      const { jsxPragmaInfo: n } = this;
      return (this.importProcessor && this.importProcessor.getIdentifierReplacement(n.fragmentBase) || n.fragmentBase) + n.fragmentSuffix;
    }
  }
  /**
   * Return code that invokes the given function.
   *
   * When the imports transform is enabled, use the CJSImportTransformer
   * strategy of using `.call(void 0, ...` to avoid passing a `this` value in a
   * situation that would otherwise look like a method call.
   */
  claimAutoImportedFuncInvocation(n, s) {
    const o = this.claimAutoImportedName(n, s);
    return this.importProcessor ? `${o}.call(void 0, ` : `${o}(`;
  }
  claimAutoImportedName(n, s) {
    if (this.importProcessor) {
      const o = this.jsxImportSource + s;
      return this.cjsAutomaticModuleNameResolutions[o] || (this.cjsAutomaticModuleNameResolutions[o] = this.importProcessor.getFreeIdentifierForPath(o)), `${this.cjsAutomaticModuleNameResolutions[o]}.${n}`;
    } else
      return this.esmAutomaticImportNameResolutions[n] || (this.esmAutomaticImportNameResolutions[n] = this.nameManager.claimFreeName(
        `_${n}`
      )), this.esmAutomaticImportNameResolutions[n];
  }
  /**
   * Process the first part of a tag, before any props.
   */
  processTagIntro() {
    let n = this.tokens.currentIndex() + 1;
    for (; this.tokens.tokens[n].isType || !this.tokens.matches2AtIndex(n - 1, t.jsxName, t.jsxName) && !this.tokens.matches2AtIndex(n - 1, t.greaterThan, t.jsxName) && !this.tokens.matches1AtIndex(n, t.braceL) && !this.tokens.matches1AtIndex(n, t.jsxTagEnd) && !this.tokens.matches2AtIndex(n, t.slash, t.jsxTagEnd); )
      n++;
    if (n === this.tokens.currentIndex() + 1) {
      const s = this.tokens.identifierName();
      Ss(s) && this.tokens.replaceToken(`'${s}'`);
    }
    for (; this.tokens.currentIndex() < n; )
      this.rootTransformer.processToken();
  }
  /**
   * Starting at the beginning of the props, add the props argument to
   * React.createElement, including the comma before it.
   */
  processPropsObjectWithDevInfo(n) {
    const s = this.options.production ? "" : `__self: this, __source: ${this.getDevSource(n)}`;
    if (!this.tokens.matches1(t.jsxName) && !this.tokens.matches1(t.braceL)) {
      s ? this.tokens.appendCode(`, {${s}}`) : this.tokens.appendCode(", null");
      return;
    }
    this.tokens.appendCode(", {"), this.processProps(!1), s ? this.tokens.appendCode(` ${s}}`) : this.tokens.appendCode("}");
  }
  /**
   * Transform the core part of the props, assuming that a { has already been
   * inserted before us and that a } will be inserted after us.
   *
   * If extractKeyCode is true (i.e. when using any jsx... function), any prop
   * named "key" has its code captured and returned rather than being emitted to
   * the output code. This shifts line numbers, and emitting the code later will
   * correct line numbers again. If no key is found or if extractKeyCode is
   * false, this function returns null.
   */
  processProps(n) {
    let s = null;
    for (; ; ) {
      if (this.tokens.matches2(t.jsxName, t.eq)) {
        const o = this.tokens.identifierName();
        if (n && o === "key") {
          s !== null && this.tokens.appendCode(s.replace(/[^\n]/g, "")), this.tokens.removeToken(), this.tokens.removeToken();
          const i = this.tokens.snapshot();
          this.processPropValue(), s = this.tokens.dangerouslyGetAndRemoveCodeSinceSnapshot(i);
          continue;
        } else
          this.processPropName(o), this.tokens.replaceToken(": "), this.processPropValue();
      } else if (this.tokens.matches1(t.jsxName)) {
        const o = this.tokens.identifierName();
        this.processPropName(o), this.tokens.appendCode(": true");
      } else if (this.tokens.matches1(t.braceL))
        this.tokens.replaceToken(""), this.rootTransformer.processBalancedCode(), this.tokens.replaceToken("");
      else
        break;
      this.tokens.appendCode(",");
    }
    return s;
  }
  processPropName(n) {
    n.includes("-") ? this.tokens.replaceToken(`'${n}'`) : this.tokens.copyToken();
  }
  processPropValue() {
    this.tokens.matches1(t.braceL) ? (this.tokens.replaceToken(""), this.rootTransformer.processBalancedCode(), this.tokens.replaceToken("")) : this.tokens.matches1(t.jsxTagStart) ? this.processJSXTag() : this.processStringPropValue();
  }
  processStringPropValue() {
    const n = this.tokens.currentToken(), s = this.tokens.code.slice(n.start + 1, n.end - 1), o = U1(s), i = ko(s);
    this.tokens.replaceToken(i + o);
  }
  /**
   * Starting in the middle of the props object literal, produce an additional
   * prop for the children and close the object literal.
   */
  processAutomaticChildrenAndEndProps(n) {
    n === ke.StaticChildren ? (this.tokens.appendCode(" children: ["), this.processChildren(!1), this.tokens.appendCode("]}")) : (n === ke.OneChild && this.tokens.appendCode(" children: "), this.processChildren(!1), this.tokens.appendCode("}"));
  }
  /**
   * Transform children into a comma-separated list, which will be either
   * arguments to createElement or array elements of a children prop.
   */
  processChildren(n) {
    let s = n;
    for (; ; ) {
      if (this.tokens.matches2(t.jsxTagStart, t.slash))
        return;
      let o = !1;
      if (this.tokens.matches1(t.braceL))
        this.tokens.matches2(t.braceL, t.braceR) ? (this.tokens.replaceToken(""), this.tokens.replaceToken("")) : (this.tokens.replaceToken(s ? ", " : ""), this.rootTransformer.processBalancedCode(), this.tokens.replaceToken(""), o = !0);
      else if (this.tokens.matches1(t.jsxTagStart))
        this.tokens.appendCode(s ? ", " : ""), this.processJSXTag(), o = !0;
      else if (this.tokens.matches1(t.jsxText) || this.tokens.matches1(t.jsxEmptyText))
        o = this.processChildTextElement(s);
      else
        throw new Error("Unexpected token when processing JSX children.");
      o && (s = !0);
    }
  }
  /**
   * Turn a JSX text element into a string literal, or nothing at all if the JSX
   * text resolves to the empty string.
   *
   * Returns true if a string literal is emitted, false otherwise.
   */
  processChildTextElement(n) {
    const s = this.tokens.currentToken(), o = this.tokens.code.slice(s.start, s.end), i = U1(o), c = mo(o);
    return c === '""' ? (this.tokens.replaceToken(i), !1) : (this.tokens.replaceToken(`${n ? ", " : ""}${c}${i}`), !0);
  }
  getDevSource(n) {
    return `{fileName: ${this.getFilenameVarName()}, ${n}}`;
  }
  getFilenameVarName() {
    return this.filenameVarName || (this.filenameVarName = this.nameManager.claimFreeName("_jsxFileName")), this.filenameVarName;
  }
}
function Ss(e) {
  const n = e.charCodeAt(0);
  return n >= u.lowercaseA && n <= u.lowercaseZ;
}
function mo(e) {
  let n = "", s = "", o = !1, i = !1;
  for (let c = 0; c < e.length; c++) {
    const h = e[c];
    if (h === " " || h === "	" || h === "\r")
      o || (s += h);
    else if (h === `
`)
      s = "", o = !0;
    else {
      if (i && o && (n += " "), n += s, s = "", h === "&") {
        const { entity: m, newI: g } = vs(e, c + 1);
        c = g - 1, n += m;
      } else
        n += h;
      i = !0, o = !1;
    }
  }
  return o || (n += s), JSON.stringify(n);
}
function U1(e) {
  let n = 0, s = 0;
  for (const o of e)
    o === `
` ? (n++, s = 0) : o === " " && s++;
  return `
`.repeat(n) + " ".repeat(s);
}
function ko(e) {
  let n = "";
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (o === `
`)
      if (/\s/.test(e[s + 1]))
        for (n += " "; s < e.length && /\s/.test(e[s + 1]); )
          s++;
      else
        n += `
`;
    else if (o === "&") {
      const { entity: i, newI: c } = vs(e, s + 1);
      n += i, s = c - 1;
    } else
      n += o;
  }
  return JSON.stringify(n);
}
function vs(e, n) {
  let s = "", o = 0, i, c = n;
  if (e[c] === "#") {
    let h = 10;
    c++;
    let m;
    if (e[c] === "x")
      for (h = 16, c++, m = c; c < e.length && go(e.charCodeAt(c)); )
        c++;
    else
      for (m = c; c < e.length && _o(e.charCodeAt(c)); )
        c++;
    if (e[c] === ";") {
      const g = e.slice(m, c);
      g && (c++, i = String.fromCodePoint(parseInt(g, h)));
    }
  } else
    for (; c < e.length && o++ < 10; ) {
      const h = e[c];
      if (c++, h === ";") {
        i = fo.get(s);
        break;
      }
      s += h;
    }
  return i ? { entity: i, newI: c } : { entity: "&", newI: n };
}
function _o(e) {
  return e >= u.digit0 && e <= u.digit9;
}
function go(e) {
  return e >= u.digit0 && e <= u.digit9 || e >= u.lowercaseA && e <= u.lowercaseF || e >= u.uppercaseA && e <= u.uppercaseF;
}
function Ns(e, n) {
  const s = Es(n), o = /* @__PURE__ */ new Set();
  for (let i = 0; i < e.tokens.length; i++) {
    const c = e.tokens[i];
    if (c.type === t.name && !c.isType && (c.identifierRole === v.Access || c.identifierRole === v.ObjectShorthand || c.identifierRole === v.ExportAccess) && !c.shadowsGlobal && o.add(e.identifierNameForToken(c)), c.type === t.jsxTagStart && o.add(s.base), c.type === t.jsxTagStart && i + 1 < e.tokens.length && e.tokens[i + 1].type === t.jsxTagEnd && (o.add(s.base), o.add(s.fragmentBase)), c.type === t.jsxName && c.identifierRole === v.Access) {
      const h = e.identifierNameForToken(c);
      (!Ss(h) || e.tokens[i + 1].type === t.dot) && o.add(e.identifierNameForToken(c));
    }
  }
  return o;
}
class Ze {
  __init() {
    this.nonTypeIdentifiers = /* @__PURE__ */ new Set();
  }
  __init2() {
    this.importInfoByPath = /* @__PURE__ */ new Map();
  }
  __init3() {
    this.importsToReplace = /* @__PURE__ */ new Map();
  }
  __init4() {
    this.identifierReplacements = /* @__PURE__ */ new Map();
  }
  __init5() {
    this.exportBindingsByLocalName = /* @__PURE__ */ new Map();
  }
  constructor(n, s, o, i, c, h, m) {
    this.nameManager = n, this.tokens = s, this.enableLegacyTypeScriptModuleInterop = o, this.options = i, this.isTypeScriptTransformEnabled = c, this.keepUnusedImports = h, this.helperManager = m, Ze.prototype.__init.call(this), Ze.prototype.__init2.call(this), Ze.prototype.__init3.call(this), Ze.prototype.__init4.call(this), Ze.prototype.__init5.call(this);
  }
  preprocessTokens() {
    for (let n = 0; n < this.tokens.tokens.length; n++)
      this.tokens.matches1AtIndex(n, t._import) && !this.tokens.matches3AtIndex(n, t._import, t.name, t.eq) && this.preprocessImportAtIndex(n), this.tokens.matches1AtIndex(n, t._export) && !this.tokens.matches2AtIndex(n, t._export, t.eq) && this.preprocessExportAtIndex(n);
    this.generateImportReplacements();
  }
  /**
   * In TypeScript, import statements that only import types should be removed.
   * This includes `import {} from 'foo';`, but not `import 'foo';`.
   */
  pruneTypeOnlyImports() {
    this.nonTypeIdentifiers = Ns(this.tokens, this.options);
    for (const [n, s] of this.importInfoByPath.entries()) {
      if (s.hasBareImport || s.hasStarExport || s.exportStarNames.length > 0 || s.namedExports.length > 0)
        continue;
      [
        ...s.defaultNames,
        ...s.wildcardNames,
        ...s.namedImports.map(({ localName: i }) => i)
      ].every((i) => this.shouldAutomaticallyElideImportedName(i)) && this.importsToReplace.set(n, "");
    }
  }
  shouldAutomaticallyElideImportedName(n) {
    return this.isTypeScriptTransformEnabled && !this.keepUnusedImports && !this.nonTypeIdentifiers.has(n);
  }
  generateImportReplacements() {
    for (const [n, s] of this.importInfoByPath.entries()) {
      const {
        defaultNames: o,
        wildcardNames: i,
        namedImports: c,
        namedExports: h,
        exportStarNames: m,
        hasStarExport: g
      } = s;
      if (o.length === 0 && i.length === 0 && c.length === 0 && h.length === 0 && m.length === 0 && !g) {
        this.importsToReplace.set(n, `require('${n}');`);
        continue;
      }
      const f = this.getFreeIdentifierForPath(n);
      let y;
      this.enableLegacyTypeScriptModuleInterop ? y = f : y = i.length > 0 ? i[0] : this.getFreeIdentifierForPath(n);
      let T = `var ${f} = require('${n}');`;
      if (i.length > 0)
        for (const S of i) {
          const P = this.enableLegacyTypeScriptModuleInterop ? f : `${this.helperManager.getHelperName("interopRequireWildcard")}(${f})`;
          T += ` var ${S} = ${P};`;
        }
      else m.length > 0 && y !== f ? T += ` var ${y} = ${this.helperManager.getHelperName(
        "interopRequireWildcard"
      )}(${f});` : o.length > 0 && y !== f && (T += ` var ${y} = ${this.helperManager.getHelperName(
        "interopRequireDefault"
      )}(${f});`);
      for (const { importedName: S, localName: P } of h)
        T += ` ${this.helperManager.getHelperName(
          "createNamedExportFrom"
        )}(${f}, '${P}', '${S}');`;
      for (const S of m)
        T += ` exports.${S} = ${y};`;
      g && (T += ` ${this.helperManager.getHelperName(
        "createStarExport"
      )}(${f});`), this.importsToReplace.set(n, T);
      for (const S of o)
        this.identifierReplacements.set(S, `${y}.default`);
      for (const { importedName: S, localName: P } of c)
        this.identifierReplacements.set(P, `${f}.${S}`);
    }
  }
  getFreeIdentifierForPath(n) {
    const s = n.split("/"), i = s[s.length - 1].replace(/\W/g, "");
    return this.nameManager.claimFreeName(`_${i}`);
  }
  preprocessImportAtIndex(n) {
    const s = [], o = [], i = [];
    if (n++, (this.tokens.matchesContextualAtIndex(n, l._type) || this.tokens.matches1AtIndex(n, t._typeof)) && !this.tokens.matches1AtIndex(n + 1, t.comma) && !this.tokens.matchesContextualAtIndex(n + 1, l._from) || this.tokens.matches1AtIndex(n, t.parenL))
      return;
    if (this.tokens.matches1AtIndex(n, t.name) && (s.push(this.tokens.identifierNameAtIndex(n)), n++, this.tokens.matches1AtIndex(n, t.comma) && n++), this.tokens.matches1AtIndex(n, t.star) && (n += 2, o.push(this.tokens.identifierNameAtIndex(n)), n++), this.tokens.matches1AtIndex(n, t.braceL)) {
      const m = this.getNamedImports(n + 1);
      n = m.newIndex;
      for (const g of m.namedImports)
        g.importedName === "default" ? s.push(g.localName) : i.push(g);
    }
    if (this.tokens.matchesContextualAtIndex(n, l._from) && n++, !this.tokens.matches1AtIndex(n, t.string))
      throw new Error("Expected string token at the end of import statement.");
    const c = this.tokens.stringValueAtIndex(n), h = this.getImportInfo(c);
    h.defaultNames.push(...s), h.wildcardNames.push(...o), h.namedImports.push(...i), s.length === 0 && o.length === 0 && i.length === 0 && (h.hasBareImport = !0);
  }
  preprocessExportAtIndex(n) {
    if (this.tokens.matches2AtIndex(n, t._export, t._var) || this.tokens.matches2AtIndex(n, t._export, t._let) || this.tokens.matches2AtIndex(n, t._export, t._const))
      this.preprocessVarExportAtIndex(n);
    else if (this.tokens.matches2AtIndex(n, t._export, t._function) || this.tokens.matches2AtIndex(n, t._export, t._class)) {
      const s = this.tokens.identifierNameAtIndex(n + 2);
      this.addExportBinding(s, s);
    } else if (this.tokens.matches3AtIndex(n, t._export, t.name, t._function)) {
      const s = this.tokens.identifierNameAtIndex(n + 3);
      this.addExportBinding(s, s);
    } else this.tokens.matches2AtIndex(n, t._export, t.braceL) ? this.preprocessNamedExportAtIndex(n) : this.tokens.matches2AtIndex(n, t._export, t.star) && this.preprocessExportStarAtIndex(n);
  }
  preprocessVarExportAtIndex(n) {
    let s = 0;
    for (let o = n + 2; ; o++)
      if (this.tokens.matches1AtIndex(o, t.braceL) || this.tokens.matches1AtIndex(o, t.dollarBraceL) || this.tokens.matches1AtIndex(o, t.bracketL))
        s++;
      else if (this.tokens.matches1AtIndex(o, t.braceR) || this.tokens.matches1AtIndex(o, t.bracketR))
        s--;
      else {
        if (s === 0 && !this.tokens.matches1AtIndex(o, t.name))
          break;
        if (this.tokens.matches1AtIndex(1, t.eq)) {
          const i = this.tokens.currentToken().rhsEndIndex;
          if (i == null)
            throw new Error("Expected = token with an end index.");
          o = i - 1;
        } else {
          const i = this.tokens.tokens[o];
          if (ms(i)) {
            const c = this.tokens.identifierNameAtIndex(o);
            this.identifierReplacements.set(c, `exports.${c}`);
          }
        }
      }
  }
  /**
   * Walk this export statement just in case it's an export...from statement.
   * If it is, combine it into the import info for that path. Otherwise, just
   * bail out; it'll be handled later.
   */
  preprocessNamedExportAtIndex(n) {
    n += 2;
    const { newIndex: s, namedImports: o } = this.getNamedImports(n);
    if (n = s, this.tokens.matchesContextualAtIndex(n, l._from))
      n++;
    else {
      for (const { importedName: h, localName: m } of o)
        this.addExportBinding(h, m);
      return;
    }
    if (!this.tokens.matches1AtIndex(n, t.string))
      throw new Error("Expected string token at the end of import statement.");
    const i = this.tokens.stringValueAtIndex(n);
    this.getImportInfo(i).namedExports.push(...o);
  }
  preprocessExportStarAtIndex(n) {
    let s = null;
    if (this.tokens.matches3AtIndex(n, t._export, t.star, t._as) ? (n += 3, s = this.tokens.identifierNameAtIndex(n), n += 2) : n += 3, !this.tokens.matches1AtIndex(n, t.string))
      throw new Error("Expected string token at the end of star export statement.");
    const o = this.tokens.stringValueAtIndex(n), i = this.getImportInfo(o);
    s !== null ? i.exportStarNames.push(s) : i.hasStarExport = !0;
  }
  getNamedImports(n) {
    const s = [];
    for (; ; ) {
      if (this.tokens.matches1AtIndex(n, t.braceR)) {
        n++;
        break;
      }
      const o = yt(this.tokens, n);
      if (n = o.endIndex, o.isType || s.push({
        importedName: o.leftName,
        localName: o.rightName
      }), this.tokens.matches2AtIndex(n, t.comma, t.braceR)) {
        n += 2;
        break;
      } else if (this.tokens.matches1AtIndex(n, t.braceR)) {
        n++;
        break;
      } else if (this.tokens.matches1AtIndex(n, t.comma))
        n++;
      else
        throw new Error(`Unexpected token: ${JSON.stringify(this.tokens.tokens[n])}`);
    }
    return { newIndex: n, namedImports: s };
  }
  /**
   * Get a mutable import info object for this path, creating one if it doesn't
   * exist yet.
   */
  getImportInfo(n) {
    const s = this.importInfoByPath.get(n);
    if (s)
      return s;
    const o = {
      defaultNames: [],
      wildcardNames: [],
      namedImports: [],
      namedExports: [],
      hasBareImport: !1,
      exportStarNames: [],
      hasStarExport: !1
    };
    return this.importInfoByPath.set(n, o), o;
  }
  addExportBinding(n, s) {
    this.exportBindingsByLocalName.has(n) || this.exportBindingsByLocalName.set(n, []), this.exportBindingsByLocalName.get(n).push(s);
  }
  /**
   * Return the code to use for the import for this path, or the empty string if
   * the code has already been "claimed" by a previous import.
   */
  claimImportCode(n) {
    const s = this.importsToReplace.get(n);
    return this.importsToReplace.set(n, ""), s || "";
  }
  getIdentifierReplacement(n) {
    return this.identifierReplacements.get(n) || null;
  }
  /**
   * Return a string like `exports.foo = exports.bar`.
   */
  resolveExportBinding(n) {
    const s = this.exportBindingsByLocalName.get(n);
    return !s || s.length === 0 ? null : s.map((o) => `exports.${o}`).join(" = ");
  }
  /**
   * Return all imported/exported names where we might be interested in whether usages of those
   * names are shadowed.
   */
  getGlobalNames() {
    return /* @__PURE__ */ new Set([
      ...this.identifierReplacements.keys(),
      ...this.exportBindingsByLocalName.keys()
    ]);
  }
}
var zn = class {
  constructor() {
    this._indexes = { __proto__: null }, this.array = [];
  }
};
function xo(e, n) {
  return e._indexes[n];
}
function yo(e, n) {
  const s = xo(e, n);
  if (s !== void 0) return s;
  const { array: o, _indexes: i } = e, c = o.push(n);
  return i[n] = c - 1;
}
var Io = 0, bo = 1, wo = 2, To = 3, Ao = 4, Ps = -1, Eo = class {
  constructor({ file: e, sourceRoot: n } = {}) {
    this._names = new zn(), this._sources = new zn(), this._sourcesContent = [], this._mappings = [], this.file = e, this.sourceRoot = n, this._ignoreList = new zn();
  }
};
var Jn = (e, n, s, o, i, c, h, m) => No(
  !0,
  e,
  n,
  s,
  o,
  i,
  c
);
function So(e) {
  const {
    _mappings: n,
    _sources: s,
    _sourcesContent: o,
    _names: i,
    _ignoreList: c
    // _originalScopes: originalScopes,
    // _generatedRanges: generatedRanges,
  } = e;
  return Ro(n), {
    version: 3,
    file: e.file || void 0,
    names: i.array,
    sourceRoot: e.sourceRoot || void 0,
    sources: s.array,
    sourcesContent: o,
    mappings: n,
    // originalScopes,
    // generatedRanges,
    ignoreList: c.array
  };
}
function vo(e) {
  const n = So(e);
  return Object.assign({}, n, {
    // originalScopes: decoded.originalScopes.map((os) => encodeOriginalScopes(os)),
    // generatedRanges: encodeGeneratedRanges(decoded.generatedRanges as GeneratedRange[]),
    mappings: Fr(n.mappings)
  });
}
function No(e, n, s, o, i, c, h, m, g) {
  const {
    _mappings: f,
    _sources: y,
    _sourcesContent: T,
    _names: S
    // _originalScopes: originalScopes,
  } = n, P = Po(f, s), B = Co(P, o);
  if (!i)
    return Lo(P, B) ? void 0 : H1(P, B, [o]);
  const U = yo(y, i), K = Ps;
  if (U === T.length && (T[U] = null), !Do(P, B, U, c, h, K))
    return H1(
      P,
      B,
      [o, U, c, h]
    );
}
function Po(e, n) {
  for (let s = e.length; s <= n; s++)
    e[s] = [];
  return e[n];
}
function Co(e, n) {
  let s = e.length;
  for (let o = s - 1; o >= 0; s = o--) {
    const i = e[o];
    if (n >= i[Io]) break;
  }
  return s;
}
function H1(e, n, s) {
  for (let o = e.length; o > n; o--)
    e[o] = e[o - 1];
  e[n] = s;
}
function Ro(e) {
  const { length: n } = e;
  let s = n;
  for (let o = s - 1; o >= 0 && !(e[o].length > 0); s = o, o--)
    ;
  s < n && (e.length = s);
}
function Lo(e, n) {
  return n === 0 ? !0 : e[n - 1].length === 1;
}
function Do(e, n, s, o, i, c) {
  if (n === 0) return !1;
  const h = e[n - 1];
  return h.length === 1 ? !1 : s === h[bo] && o === h[wo] && i === h[To] && c === (h.length === 5 ? h[Ao] : Ps);
}
function Oo({ code: e, mappings: n }, s, o, i, c) {
  const h = Fo(i, c), m = new Eo({ file: o.compiledFilename });
  let g = 0, f = n[0];
  for (; f === void 0 && g < n.length - 1; )
    g++, f = n[g];
  let y = 0, T = 0;
  f !== T && Jn(m, y, 0, s, y, 0);
  for (let U = 0; U < e.length; U++) {
    if (U === f) {
      const K = f - T, se = h[g];
      for (Jn(m, y, K, s, y, se); (f === U || f === void 0) && g < n.length - 1; )
        g++, f = n[g];
    }
    e.charCodeAt(U) === u.lineFeed && (y++, T = U + 1, f !== T && Jn(m, y, 0, s, y, 0));
  }
  const { sourceRoot: S, sourcesContent: P, ...B } = vo(m);
  return B;
}
function Fo(e, n) {
  const s = new Array(n.length);
  let o = 0, i = n[o].start, c = 0;
  for (let h = 0; h < e.length; h++)
    h === i && (s[o] = i - c, o++, i = n[o].start), e.charCodeAt(h) === u.lineFeed && (c = h + 1);
  return s;
}
const jo = {
  require: `
    import {createRequire as CREATE_REQUIRE_NAME} from "module";
    const require = CREATE_REQUIRE_NAME(import.meta.url);
  `,
  interopRequireWildcard: `
    function interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              newObj[key] = obj[key];
            }
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
  `,
  interopRequireDefault: `
    function interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
  `,
  createNamedExportFrom: `
    function createNamedExportFrom(obj, localName, importedName) {
      Object.defineProperty(exports, localName, {enumerable: true, configurable: true, get: () => obj[importedName]});
    }
  `,
  // Note that TypeScript and Babel do this differently; TypeScript does a simple existence
  // check in the exports object and does a plain assignment, whereas Babel uses
  // defineProperty and builds an object of explicitly-exported names so that star exports can
  // always take lower precedence. For now, we do the easier TypeScript thing.
  createStarExport: `
    function createStarExport(obj) {
      Object.keys(obj)
        .filter((key) => key !== "default" && key !== "__esModule")
        .forEach((key) => {
          if (exports.hasOwnProperty(key)) {
            return;
          }
          Object.defineProperty(exports, key, {enumerable: true, configurable: true, get: () => obj[key]});
        });
    }
  `,
  nullishCoalesce: `
    function nullishCoalesce(lhs, rhsFn) {
      if (lhs != null) {
        return lhs;
      } else {
        return rhsFn();
      }
    }
  `,
  asyncNullishCoalesce: `
    async function asyncNullishCoalesce(lhs, rhsFn) {
      if (lhs != null) {
        return lhs;
      } else {
        return await rhsFn();
      }
    }
  `,
  optionalChain: `
    function optionalChain(ops) {
      let lastAccessLHS = undefined;
      let value = ops[0];
      let i = 1;
      while (i < ops.length) {
        const op = ops[i];
        const fn = ops[i + 1];
        i += 2;
        if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
          return undefined;
        }
        if (op === 'access' || op === 'optionalAccess') {
          lastAccessLHS = value;
          value = fn(value);
        } else if (op === 'call' || op === 'optionalCall') {
          value = fn((...args) => value.call(lastAccessLHS, ...args));
          lastAccessLHS = undefined;
        }
      }
      return value;
    }
  `,
  asyncOptionalChain: `
    async function asyncOptionalChain(ops) {
      let lastAccessLHS = undefined;
      let value = ops[0];
      let i = 1;
      while (i < ops.length) {
        const op = ops[i];
        const fn = ops[i + 1];
        i += 2;
        if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
          return undefined;
        }
        if (op === 'access' || op === 'optionalAccess') {
          lastAccessLHS = value;
          value = await fn(value);
        } else if (op === 'call' || op === 'optionalCall') {
          value = await fn((...args) => value.call(lastAccessLHS, ...args));
          lastAccessLHS = undefined;
        }
      }
      return value;
    }
  `,
  optionalChainDelete: `
    function optionalChainDelete(ops) {
      const result = OPTIONAL_CHAIN_NAME(ops);
      return result == null ? true : result;
    }
  `,
  asyncOptionalChainDelete: `
    async function asyncOptionalChainDelete(ops) {
      const result = await ASYNC_OPTIONAL_CHAIN_NAME(ops);
      return result == null ? true : result;
    }
  `
};
class jt {
  __init() {
    this.helperNames = {};
  }
  __init2() {
    this.createRequireName = null;
  }
  constructor(n) {
    this.nameManager = n, jt.prototype.__init.call(this), jt.prototype.__init2.call(this);
  }
  getHelperName(n) {
    let s = this.helperNames[n];
    return s || (s = this.nameManager.claimFreeName(`_${n}`), this.helperNames[n] = s, s);
  }
  emitHelpers() {
    let n = "";
    this.helperNames.optionalChainDelete && this.getHelperName("optionalChain"), this.helperNames.asyncOptionalChainDelete && this.getHelperName("asyncOptionalChain");
    for (const [s, o] of Object.entries(jo)) {
      const i = this.helperNames[s];
      let c = o;
      s === "optionalChainDelete" ? c = c.replace("OPTIONAL_CHAIN_NAME", this.helperNames.optionalChain) : s === "asyncOptionalChainDelete" ? c = c.replace(
        "ASYNC_OPTIONAL_CHAIN_NAME",
        this.helperNames.asyncOptionalChain
      ) : s === "require" && (this.createRequireName === null && (this.createRequireName = this.nameManager.claimFreeName("_createRequire")), c = c.replace(/CREATE_REQUIRE_NAME/g, this.createRequireName)), i && (n += " ", n += c.replace(s, i).replace(/\s+/g, " ").trim());
    }
    return n;
  }
}
function V1(e, n, s) {
  Mo(e, s) && qo(e, n, s);
}
function Mo(e, n) {
  for (const s of e.tokens)
    if (s.type === t.name && !s.isType && Wr(s) && n.has(e.identifierNameForToken(s)))
      return !0;
  return !1;
}
function qo(e, n, s) {
  const o = [];
  let i = n.length - 1;
  for (let c = e.tokens.length - 1; ; c--) {
    for (; o.length > 0 && o[o.length - 1].startTokenIndex === c + 1; )
      o.pop();
    for (; i >= 0 && n[i].endTokenIndex === c + 1; )
      o.push(n[i]), i--;
    if (c < 0)
      break;
    const h = e.tokens[c], m = e.identifierNameForToken(h);
    if (o.length > 1 && !h.isType && h.type === t.name && s.has(m)) {
      if (Xr(h))
        W1(o[o.length - 1], e, m);
      else if (Gr(h)) {
        let g = o.length - 1;
        for (; g > 0 && !o[g].isFunctionScope; )
          g--;
        if (g < 0)
          throw new Error("Did not find parent function scope.");
        W1(o[g], e, m);
      }
    }
  }
  if (o.length > 0)
    throw new Error("Expected empty scope stack after processing file.");
}
function W1(e, n, s) {
  for (let o = e.startTokenIndex; o < e.endTokenIndex; o++) {
    const i = n.tokens[o];
    (i.type === t.name || i.type === t.jsxName) && n.identifierNameForToken(i) === s && (i.shadowsGlobal = !0);
  }
}
function Bo(e, n) {
  const s = [];
  for (const o of n)
    o.type === t.name && s.push(e.slice(o.start, o.end));
  return s;
}
class f1 {
  __init() {
    this.usedNames = /* @__PURE__ */ new Set();
  }
  constructor(n, s) {
    f1.prototype.__init.call(this), this.usedNames = new Set(Bo(n, s));
  }
  claimFreeName(n) {
    const s = this.findFreeName(n);
    return this.usedNames.add(s), s;
  }
  findFreeName(n) {
    if (!this.usedNames.has(n))
      return n;
    let s = 2;
    for (; this.usedNames.has(n + String(s)); )
      s++;
    return n + String(s);
  }
}
var ft = {}, mt = {}, de = {}, X1;
function e1() {
  if (X1) return de;
  X1 = 1;
  var e = de && de.__extends || /* @__PURE__ */ (function() {
    var c = function(h, m) {
      return c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(g, f) {
        g.__proto__ = f;
      } || function(g, f) {
        for (var y in f) f.hasOwnProperty(y) && (g[y] = f[y]);
      }, c(h, m);
    };
    return function(h, m) {
      c(h, m);
      function g() {
        this.constructor = h;
      }
      h.prototype = m === null ? Object.create(m) : (g.prototype = m.prototype, new g());
    };
  })();
  Object.defineProperty(de, "__esModule", { value: !0 }), de.DetailContext = de.NoopContext = de.VError = void 0;
  var n = (
    /** @class */
    (function(c) {
      e(h, c);
      function h(m, g) {
        var f = c.call(this, g) || this;
        return f.path = m, Object.setPrototypeOf(f, h.prototype), f;
      }
      return h;
    })(Error)
  );
  de.VError = n;
  var s = (
    /** @class */
    (function() {
      function c() {
      }
      return c.prototype.fail = function(h, m, g) {
        return !1;
      }, c.prototype.unionResolver = function() {
        return this;
      }, c.prototype.createContext = function() {
        return this;
      }, c.prototype.resolveUnion = function(h) {
      }, c;
    })()
  );
  de.NoopContext = s;
  var o = (
    /** @class */
    (function() {
      function c() {
        this._propNames = [""], this._messages = [null], this._score = 0;
      }
      return c.prototype.fail = function(h, m, g) {
        return this._propNames.push(h), this._messages.push(m), this._score += g, !1;
      }, c.prototype.unionResolver = function() {
        return new i();
      }, c.prototype.resolveUnion = function(h) {
        for (var m, g, f = h, y = null, T = 0, S = f.contexts; T < S.length; T++) {
          var P = S[T];
          (!y || P._score >= y._score) && (y = P);
        }
        y && y._score > 0 && ((m = this._propNames).push.apply(m, y._propNames), (g = this._messages).push.apply(g, y._messages));
      }, c.prototype.getError = function(h) {
        for (var m = [], g = this._propNames.length - 1; g >= 0; g--) {
          var f = this._propNames[g];
          h += typeof f == "number" ? "[" + f + "]" : f ? "." + f : "";
          var y = this._messages[g];
          y && m.push(h + " " + y);
        }
        return new n(h, m.join("; "));
      }, c.prototype.getErrorDetail = function(h) {
        for (var m = [], g = this._propNames.length - 1; g >= 0; g--) {
          var f = this._propNames[g];
          h += typeof f == "number" ? "[" + f + "]" : f ? "." + f : "";
          var y = this._messages[g];
          y && m.push({ path: h, message: y });
        }
        for (var T = null, g = m.length - 1; g >= 0; g--)
          T && (m[g].nested = [T]), T = m[g];
        return T;
      }, c;
    })()
  );
  de.DetailContext = o;
  var i = (
    /** @class */
    (function() {
      function c() {
        this.contexts = [];
      }
      return c.prototype.createContext = function() {
        var h = new o();
        return this.contexts.push(h), h;
      }, c;
    })()
  );
  return de;
}
var G1;
function z1() {
  return G1 || (G1 = 1, (function(e) {
    var n = mt && mt.__extends || /* @__PURE__ */ (function() {
      var _ = function(x, I) {
        return _ = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(w, A) {
          w.__proto__ = A;
        } || function(w, A) {
          for (var C in A) A.hasOwnProperty(C) && (w[C] = A[C]);
        }, _(x, I);
      };
      return function(x, I) {
        _(x, I);
        function w() {
          this.constructor = x;
        }
        x.prototype = I === null ? Object.create(I) : (w.prototype = I.prototype, new w());
      };
    })();
    Object.defineProperty(e, "__esModule", { value: !0 }), e.basicTypes = e.BasicType = e.TParamList = e.TParam = e.param = e.TFunc = e.func = e.TProp = e.TOptional = e.opt = e.TIface = e.iface = e.TEnumLiteral = e.enumlit = e.TEnumType = e.enumtype = e.TIntersection = e.intersection = e.TUnion = e.union = e.TTuple = e.tuple = e.TArray = e.array = e.TLiteral = e.lit = e.TName = e.name = e.TType = void 0;
    var s = e1(), o = (
      /** @class */
      /* @__PURE__ */ (function() {
        function _() {
        }
        return _;
      })()
    );
    e.TType = o;
    function i(_) {
      return typeof _ == "string" ? h(_) : _;
    }
    function c(_, x) {
      var I = _[x];
      if (!I)
        throw new Error("Unknown type " + x);
      return I;
    }
    function h(_) {
      return new m(_);
    }
    e.name = h;
    var m = (
      /** @class */
      (function(_) {
        n(x, _);
        function x(I) {
          var w = _.call(this) || this;
          return w.name = I, w._failMsg = "is not a " + I, w;
        }
        return x.prototype.getChecker = function(I, w, A) {
          var C = this, R = c(I, this.name), M = R.getChecker(I, w, A);
          return R instanceof J || R instanceof x ? M : function(X, V) {
            return M(X, V) ? !0 : V.fail(null, C._failMsg, 0);
          };
        }, x;
      })(o)
    );
    e.TName = m;
    function g(_) {
      return new f(_);
    }
    e.lit = g;
    var f = (
      /** @class */
      (function(_) {
        n(x, _);
        function x(I) {
          var w = _.call(this) || this;
          return w.value = I, w.name = JSON.stringify(I), w._failMsg = "is not " + w.name, w;
        }
        return x.prototype.getChecker = function(I, w) {
          var A = this;
          return function(C, R) {
            return C === A.value ? !0 : R.fail(null, A._failMsg, -1);
          };
        }, x;
      })(o)
    );
    e.TLiteral = f;
    function y(_) {
      return new T(i(_));
    }
    e.array = y;
    var T = (
      /** @class */
      (function(_) {
        n(x, _);
        function x(I) {
          var w = _.call(this) || this;
          return w.ttype = I, w;
        }
        return x.prototype.getChecker = function(I, w) {
          var A = this.ttype.getChecker(I, w);
          return function(C, R) {
            if (!Array.isArray(C))
              return R.fail(null, "is not an array", 0);
            for (var M = 0; M < C.length; M++) {
              var X = A(C[M], R);
              if (!X)
                return R.fail(M, null, 1);
            }
            return !0;
          };
        }, x;
      })(o)
    );
    e.TArray = T;
    function S() {
      for (var _ = [], x = 0; x < arguments.length; x++)
        _[x] = arguments[x];
      return new P(_.map(function(I) {
        return i(I);
      }));
    }
    e.tuple = S;
    var P = (
      /** @class */
      (function(_) {
        n(x, _);
        function x(I) {
          var w = _.call(this) || this;
          return w.ttypes = I, w;
        }
        return x.prototype.getChecker = function(I, w) {
          var A = this.ttypes.map(function(R) {
            return R.getChecker(I, w);
          }), C = function(R, M) {
            if (!Array.isArray(R))
              return M.fail(null, "is not an array", 0);
            for (var X = 0; X < A.length; X++) {
              var V = A[X](R[X], M);
              if (!V)
                return M.fail(X, null, 1);
            }
            return !0;
          };
          return w ? function(R, M) {
            return C(R, M) ? R.length <= A.length ? !0 : M.fail(A.length, "is extraneous", 2) : !1;
          } : C;
        }, x;
      })(o)
    );
    e.TTuple = P;
    function B() {
      for (var _ = [], x = 0; x < arguments.length; x++)
        _[x] = arguments[x];
      return new U(_.map(function(I) {
        return i(I);
      }));
    }
    e.union = B;
    var U = (
      /** @class */
      (function(_) {
        n(x, _);
        function x(I) {
          var w = _.call(this) || this;
          w.ttypes = I;
          var A = I.map(function(R) {
            return R instanceof m || R instanceof f ? R.name : null;
          }).filter(function(R) {
            return R;
          }), C = I.length - A.length;
          return A.length ? (C > 0 && A.push(C + " more"), w._failMsg = "is none of " + A.join(", ")) : w._failMsg = "is none of " + C + " types", w;
        }
        return x.prototype.getChecker = function(I, w) {
          var A = this, C = this.ttypes.map(function(R) {
            return R.getChecker(I, w);
          });
          return function(R, M) {
            for (var X = M.unionResolver(), V = 0; V < C.length; V++) {
              var ee = C[V](R, X.createContext());
              if (ee)
                return !0;
            }
            return M.resolveUnion(X), M.fail(null, A._failMsg, 0);
          };
        }, x;
      })(o)
    );
    e.TUnion = U;
    function K() {
      for (var _ = [], x = 0; x < arguments.length; x++)
        _[x] = arguments[x];
      return new se(_.map(function(I) {
        return i(I);
      }));
    }
    e.intersection = K;
    var se = (
      /** @class */
      (function(_) {
        n(x, _);
        function x(I) {
          var w = _.call(this) || this;
          return w.ttypes = I, w;
        }
        return x.prototype.getChecker = function(I, w) {
          var A = /* @__PURE__ */ new Set(), C = this.ttypes.map(function(R) {
            return R.getChecker(I, w, A);
          });
          return function(R, M) {
            var X = C.every(function(V) {
              return V(R, M);
            });
            return X ? !0 : M.fail(null, null, 0);
          };
        }, x;
      })(o)
    );
    e.TIntersection = se;
    function ye(_) {
      return new he(_);
    }
    e.enumtype = ye;
    var he = (
      /** @class */
      (function(_) {
        n(x, _);
        function x(I) {
          var w = _.call(this) || this;
          return w.members = I, w.validValues = /* @__PURE__ */ new Set(), w._failMsg = "is not a valid enum value", w.validValues = new Set(Object.keys(I).map(function(A) {
            return I[A];
          })), w;
        }
        return x.prototype.getChecker = function(I, w) {
          var A = this;
          return function(C, R) {
            return A.validValues.has(C) ? !0 : R.fail(null, A._failMsg, 0);
          };
        }, x;
      })(o)
    );
    e.TEnumType = he;
    function ce(_, x) {
      return new ve(_, x);
    }
    e.enumlit = ce;
    var ve = (
      /** @class */
      (function(_) {
        n(x, _);
        function x(I, w) {
          var A = _.call(this) || this;
          return A.enumName = I, A.prop = w, A._failMsg = "is not " + I + "." + w, A;
        }
        return x.prototype.getChecker = function(I, w) {
          var A = this, C = c(I, this.enumName);
          if (!(C instanceof he))
            throw new Error("Type " + this.enumName + " used in enumlit is not an enum type");
          var R = C.members[this.prop];
          if (!C.members.hasOwnProperty(this.prop))
            throw new Error("Unknown value " + this.enumName + "." + this.prop + " used in enumlit");
          return function(M, X) {
            return M === R ? !0 : X.fail(null, A._failMsg, -1);
          };
        }, x;
      })(o)
    );
    e.TEnumLiteral = ve;
    function Fe(_) {
      return Object.keys(_).map(function(x) {
        return je(x, _[x]);
      });
    }
    function je(_, x) {
      return x instanceof Ie ? new be(_, x.ttype, !0) : new be(_, i(x), !1);
    }
    function Me(_, x) {
      return new Ne(_, Fe(x));
    }
    e.iface = Me;
    var Ne = (
      /** @class */
      (function(_) {
        n(x, _);
        function x(I, w) {
          var A = _.call(this) || this;
          return A.bases = I, A.props = w, A.propSet = new Set(w.map(function(C) {
            return C.name;
          })), A;
        }
        return x.prototype.getChecker = function(I, w, A) {
          var C = this, R = this.bases.map(function(Q) {
            return c(I, Q).getChecker(I, w);
          }), M = this.props.map(function(Q) {
            return Q.ttype.getChecker(I, w);
          }), X = new s.NoopContext(), V = this.props.map(function(Q, re) {
            return !Q.isOpt && !M[re](void 0, X);
          }), ee = function(Q, re) {
            if (typeof Q != "object" || Q === null)
              return re.fail(null, "is not an object", 0);
            for (var oe = 0; oe < R.length; oe++)
              if (!R[oe](Q, re))
                return !1;
            for (var oe = 0; oe < M.length; oe++) {
              var Qe = C.props[oe].name, ot = Q[Qe];
              if (ot === void 0) {
                if (V[oe])
                  return re.fail(Qe, "is missing", 1);
              } else {
                var pt = M[oe](ot, re);
                if (!pt)
                  return re.fail(Qe, null, 1);
              }
            }
            return !0;
          };
          if (!w)
            return ee;
          var le = this.propSet;
          return A && (this.propSet.forEach(function(Q) {
            return A.add(Q);
          }), le = A), function(Q, re) {
            if (!ee(Q, re))
              return !1;
            for (var oe in Q)
              if (!le.has(oe))
                return re.fail(oe, "is extraneous", 2);
            return !0;
          };
        }, x;
      })(o)
    );
    e.TIface = Ne;
    function qe(_) {
      return new Ie(i(_));
    }
    e.opt = qe;
    var Ie = (
      /** @class */
      (function(_) {
        n(x, _);
        function x(I) {
          var w = _.call(this) || this;
          return w.ttype = I, w;
        }
        return x.prototype.getChecker = function(I, w) {
          var A = this.ttype.getChecker(I, w);
          return function(C, R) {
            return C === void 0 || A(C, R);
          };
        }, x;
      })(o)
    );
    e.TOptional = Ie;
    var be = (
      /** @class */
      /* @__PURE__ */ (function() {
        function _(x, I, w) {
          this.name = x, this.ttype = I, this.isOpt = w;
        }
        return _;
      })()
    );
    e.TProp = be;
    function Be(_) {
      for (var x = [], I = 1; I < arguments.length; I++)
        x[I - 1] = arguments[I];
      return new Pe(new Re(x), i(_));
    }
    e.func = Be;
    var Pe = (
      /** @class */
      (function(_) {
        n(x, _);
        function x(I, w) {
          var A = _.call(this) || this;
          return A.paramList = I, A.result = w, A;
        }
        return x.prototype.getChecker = function(I, w) {
          return function(A, C) {
            return typeof A == "function" ? !0 : C.fail(null, "is not a function", 0);
          };
        }, x;
      })(o)
    );
    e.TFunc = Pe;
    function $e(_, x, I) {
      return new Ce(_, i(x), !!I);
    }
    e.param = $e;
    var Ce = (
      /** @class */
      /* @__PURE__ */ (function() {
        function _(x, I, w) {
          this.name = x, this.ttype = I, this.isOpt = w;
        }
        return _;
      })()
    );
    e.TParam = Ce;
    var Re = (
      /** @class */
      (function(_) {
        n(x, _);
        function x(I) {
          var w = _.call(this) || this;
          return w.params = I, w;
        }
        return x.prototype.getChecker = function(I, w) {
          var A = this, C = this.params.map(function(V) {
            return V.ttype.getChecker(I, w);
          }), R = new s.NoopContext(), M = this.params.map(function(V, ee) {
            return !V.isOpt && !C[ee](void 0, R);
          }), X = function(V, ee) {
            if (!Array.isArray(V))
              return ee.fail(null, "is not an array", 0);
            for (var le = 0; le < C.length; le++) {
              var Q = A.params[le];
              if (V[le] === void 0) {
                if (M[le])
                  return ee.fail(Q.name, "is missing", 1);
              } else {
                var re = C[le](V[le], ee);
                if (!re)
                  return ee.fail(Q.name, null, 1);
              }
            }
            return !0;
          };
          return w ? function(V, ee) {
            return X(V, ee) ? V.length <= C.length ? !0 : ee.fail(C.length, "is extraneous", 2) : !1;
          } : X;
        }, x;
      })(o)
    );
    e.TParamList = Re;
    var J = (
      /** @class */
      (function(_) {
        n(x, _);
        function x(I, w) {
          var A = _.call(this) || this;
          return A.validator = I, A.message = w, A;
        }
        return x.prototype.getChecker = function(I, w) {
          var A = this;
          return function(C, R) {
            return A.validator(C) ? !0 : R.fail(null, A.message, 0);
          };
        }, x;
      })(o)
    );
    e.BasicType = J, e.basicTypes = {
      any: new J(function(_) {
        return !0;
      }, "is invalid"),
      number: new J(function(_) {
        return typeof _ == "number";
      }, "is not a number"),
      object: new J(function(_) {
        return typeof _ == "object" && _;
      }, "is not an object"),
      boolean: new J(function(_) {
        return typeof _ == "boolean";
      }, "is not a boolean"),
      string: new J(function(_) {
        return typeof _ == "string";
      }, "is not a string"),
      symbol: new J(function(_) {
        return typeof _ == "symbol";
      }, "is not a symbol"),
      void: new J(function(_) {
        return _ == null;
      }, "is not void"),
      undefined: new J(function(_) {
        return _ === void 0;
      }, "is not undefined"),
      null: new J(function(_) {
        return _ === null;
      }, "is not null"),
      never: new J(function(_) {
        return !1;
      }, "is unexpected"),
      Date: new J(Le("[object Date]"), "is not a Date"),
      RegExp: new J(Le("[object RegExp]"), "is not a RegExp")
    };
    var Ue = Object.prototype.toString;
    function Le(_) {
      return function(x) {
        return typeof x == "object" && x && Ue.call(x) === _;
      };
    }
    typeof Buffer < "u" && (e.basicTypes.Buffer = new J(function(_) {
      return Buffer.isBuffer(_);
    }, "is not a Buffer"));
    for (var He = function(_) {
      e.basicTypes[_.name] = new J(function(x) {
        return x instanceof _;
      }, "is not a " + _.name);
    }, we = 0, De = [
      Int8Array,
      Uint8Array,
      Uint8ClampedArray,
      Int16Array,
      Uint16Array,
      Int32Array,
      Uint32Array,
      Float32Array,
      Float64Array,
      ArrayBuffer
    ]; we < De.length; we++) {
      var Ve = De[we];
      He(Ve);
    }
  })(mt)), mt;
}
var J1;
function $o() {
  return J1 || (J1 = 1, (function(e) {
    var n = ft && ft.__spreadArrays || function() {
      for (var g = 0, f = 0, y = arguments.length; f < y; f++) g += arguments[f].length;
      for (var T = Array(g), S = 0, f = 0; f < y; f++)
        for (var P = arguments[f], B = 0, U = P.length; B < U; B++, S++)
          T[S] = P[B];
      return T;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Checker = e.createCheckers = void 0;
    var s = z1(), o = e1(), i = z1();
    Object.defineProperty(e, "TArray", { enumerable: !0, get: function() {
      return i.TArray;
    } }), Object.defineProperty(e, "TEnumType", { enumerable: !0, get: function() {
      return i.TEnumType;
    } }), Object.defineProperty(e, "TEnumLiteral", { enumerable: !0, get: function() {
      return i.TEnumLiteral;
    } }), Object.defineProperty(e, "TFunc", { enumerable: !0, get: function() {
      return i.TFunc;
    } }), Object.defineProperty(e, "TIface", { enumerable: !0, get: function() {
      return i.TIface;
    } }), Object.defineProperty(e, "TLiteral", { enumerable: !0, get: function() {
      return i.TLiteral;
    } }), Object.defineProperty(e, "TName", { enumerable: !0, get: function() {
      return i.TName;
    } }), Object.defineProperty(e, "TOptional", { enumerable: !0, get: function() {
      return i.TOptional;
    } }), Object.defineProperty(e, "TParam", { enumerable: !0, get: function() {
      return i.TParam;
    } }), Object.defineProperty(e, "TParamList", { enumerable: !0, get: function() {
      return i.TParamList;
    } }), Object.defineProperty(e, "TProp", { enumerable: !0, get: function() {
      return i.TProp;
    } }), Object.defineProperty(e, "TTuple", { enumerable: !0, get: function() {
      return i.TTuple;
    } }), Object.defineProperty(e, "TType", { enumerable: !0, get: function() {
      return i.TType;
    } }), Object.defineProperty(e, "TUnion", { enumerable: !0, get: function() {
      return i.TUnion;
    } }), Object.defineProperty(e, "TIntersection", { enumerable: !0, get: function() {
      return i.TIntersection;
    } }), Object.defineProperty(e, "array", { enumerable: !0, get: function() {
      return i.array;
    } }), Object.defineProperty(e, "enumlit", { enumerable: !0, get: function() {
      return i.enumlit;
    } }), Object.defineProperty(e, "enumtype", { enumerable: !0, get: function() {
      return i.enumtype;
    } }), Object.defineProperty(e, "func", { enumerable: !0, get: function() {
      return i.func;
    } }), Object.defineProperty(e, "iface", { enumerable: !0, get: function() {
      return i.iface;
    } }), Object.defineProperty(e, "lit", { enumerable: !0, get: function() {
      return i.lit;
    } }), Object.defineProperty(e, "name", { enumerable: !0, get: function() {
      return i.name;
    } }), Object.defineProperty(e, "opt", { enumerable: !0, get: function() {
      return i.opt;
    } }), Object.defineProperty(e, "param", { enumerable: !0, get: function() {
      return i.param;
    } }), Object.defineProperty(e, "tuple", { enumerable: !0, get: function() {
      return i.tuple;
    } }), Object.defineProperty(e, "union", { enumerable: !0, get: function() {
      return i.union;
    } }), Object.defineProperty(e, "intersection", { enumerable: !0, get: function() {
      return i.intersection;
    } }), Object.defineProperty(e, "BasicType", { enumerable: !0, get: function() {
      return i.BasicType;
    } });
    var c = e1();
    Object.defineProperty(e, "VError", { enumerable: !0, get: function() {
      return c.VError;
    } });
    function h() {
      for (var g = [], f = 0; f < arguments.length; f++)
        g[f] = arguments[f];
      for (var y = Object.assign.apply(Object, n([{}, s.basicTypes], g)), T = {}, S = 0, P = g; S < P.length; S++)
        for (var B = P[S], U = 0, K = Object.keys(B); U < K.length; U++) {
          var se = K[U];
          T[se] = new m(y, B[se]);
        }
      return T;
    }
    e.createCheckers = h;
    var m = (
      /** @class */
      (function() {
        function g(f, y, T) {
          if (T === void 0 && (T = "value"), this.suite = f, this.ttype = y, this._path = T, this.props = /* @__PURE__ */ new Map(), y instanceof s.TIface)
            for (var S = 0, P = y.props; S < P.length; S++) {
              var B = P[S];
              this.props.set(B.name, B.ttype);
            }
          this.checkerPlain = this.ttype.getChecker(f, !1), this.checkerStrict = this.ttype.getChecker(f, !0);
        }
        return g.prototype.setReportedPath = function(f) {
          this._path = f;
        }, g.prototype.check = function(f) {
          return this._doCheck(this.checkerPlain, f);
        }, g.prototype.test = function(f) {
          return this.checkerPlain(f, new o.NoopContext());
        }, g.prototype.validate = function(f) {
          return this._doValidate(this.checkerPlain, f);
        }, g.prototype.strictCheck = function(f) {
          return this._doCheck(this.checkerStrict, f);
        }, g.prototype.strictTest = function(f) {
          return this.checkerStrict(f, new o.NoopContext());
        }, g.prototype.strictValidate = function(f) {
          return this._doValidate(this.checkerStrict, f);
        }, g.prototype.getProp = function(f) {
          var y = this.props.get(f);
          if (!y)
            throw new Error("Type has no property " + f);
          return new g(this.suite, y, this._path + "." + f);
        }, g.prototype.methodArgs = function(f) {
          var y = this._getMethod(f);
          return new g(this.suite, y.paramList);
        }, g.prototype.methodResult = function(f) {
          var y = this._getMethod(f);
          return new g(this.suite, y.result);
        }, g.prototype.getArgs = function() {
          if (!(this.ttype instanceof s.TFunc))
            throw new Error("getArgs() applied to non-function");
          return new g(this.suite, this.ttype.paramList);
        }, g.prototype.getResult = function() {
          if (!(this.ttype instanceof s.TFunc))
            throw new Error("getResult() applied to non-function");
          return new g(this.suite, this.ttype.result);
        }, g.prototype.getType = function() {
          return this.ttype;
        }, g.prototype._doCheck = function(f, y) {
          var T = new o.NoopContext();
          if (!f(y, T)) {
            var S = new o.DetailContext();
            throw f(y, S), S.getError(this._path);
          }
        }, g.prototype._doValidate = function(f, y) {
          var T = new o.NoopContext();
          if (f(y, T))
            return null;
          var S = new o.DetailContext();
          return f(y, S), S.getErrorDetail(this._path);
        }, g.prototype._getMethod = function(f) {
          var y = this.props.get(f);
          if (!y)
            throw new Error("Type has no property " + f);
          if (!(y instanceof s.TFunc))
            throw new Error("Property " + f + " is not a method");
          return y;
        }, g;
      })()
    );
    e.Checker = m;
  })(ft)), ft;
}
var H = $o();
const Uo = H.union(
  H.lit("jsx"),
  H.lit("typescript"),
  H.lit("flow"),
  H.lit("imports"),
  H.lit("react-hot-loader"),
  H.lit("jest")
), Ho = H.iface([], {
  compiledFilename: "string"
}), Vo = H.iface([], {
  transforms: H.array("Transform"),
  disableESTransforms: H.opt("boolean"),
  jsxRuntime: H.opt(H.union(H.lit("classic"), H.lit("automatic"), H.lit("preserve"))),
  production: H.opt("boolean"),
  jsxImportSource: H.opt("string"),
  jsxPragma: H.opt("string"),
  jsxFragmentPragma: H.opt("string"),
  keepUnusedImports: H.opt("boolean"),
  preserveDynamicImport: H.opt("boolean"),
  injectCreateRequireForImportRequire: H.opt("boolean"),
  enableLegacyTypeScriptModuleInterop: H.opt("boolean"),
  enableLegacyBabel5ModuleInterop: H.opt("boolean"),
  sourceMapOptions: H.opt("SourceMapOptions"),
  filePath: H.opt("string")
}), Wo = {
  Transform: Uo,
  SourceMapOptions: Ho,
  Options: Vo
}, { Options: Xo } = H.createCheckers(Wo);
function Go(e) {
  Xo.strictCheck(e);
}
function Cs() {
  k(), ne(!1);
}
function Rs(e) {
  k(), zt(e);
}
function Je(e) {
  N(), m1(e);
}
function Mt() {
  N(), r.tokens[r.tokens.length - 1].identifierRole = v.ImportDeclaration;
}
function m1(e) {
  let n;
  r.scopeDepth === 0 ? n = v.TopLevelDeclaration : e ? n = v.BlockScopedDeclaration : n = v.FunctionScopedDeclaration, r.tokens[r.tokens.length - 1].identifierRole = n;
}
function zt(e) {
  switch (r.type) {
    case t._this: {
      const n = F(0);
      k(), O(n);
      return;
    }
    case t._yield:
    case t.name: {
      r.type = t.name, Je(e);
      return;
    }
    case t.bracketL: {
      k(), d1(
        t.bracketR,
        e,
        !0
        /* allowEmpty */
      );
      return;
    }
    case t.braceL:
      E1(!0, e);
      return;
    default:
      D();
  }
}
function d1(e, n, s = !1, o = !1, i = 0) {
  let c = !0, h = !1;
  const m = r.tokens.length;
  for (; !p(e) && !r.error; )
    if (c ? c = !1 : (d(t.comma), r.tokens[r.tokens.length - 1].contextId = i, !h && r.tokens[m].isType && (r.tokens[r.tokens.length - 1].isType = !0, h = !0)), !(s && a(t.comma))) {
      if (p(e))
        break;
      if (a(t.ellipsis)) {
        Rs(n), Ls(), p(t.comma), d(e);
        break;
      } else
        zo(o, n);
    }
}
function zo(e, n) {
  e && k1([
    l._public,
    l._protected,
    l._private,
    l._readonly,
    l._override
  ]), qt(n), Ls(), qt(
    n,
    !0
    /* leftAlreadyParsed */
  );
}
function Ls() {
  q ? pc() : j && na();
}
function qt(e, n = !1) {
  if (n || zt(e), !p(t.eq))
    return;
  const s = r.tokens.length - 1;
  ne(), r.tokens[s].rhsEndIndex = r.tokens.length;
}
function t1() {
  return a(t.name);
}
function Jo() {
  return a(t.name) || !!(r.type & t.IS_KEYWORD) || a(t.string) || a(t.num) || a(t.bigint) || a(t.decimal);
}
function Ds() {
  const e = r.snapshot();
  return k(), (a(t.bracketL) || a(t.braceL) || a(t.star) || a(t.ellipsis) || a(t.hash) || Jo()) && !ae() ? !0 : (r.restoreFromSnapshot(e), !1);
}
function k1(e) {
  for (; Os(e) !== null; )
    ;
}
function Os(e) {
  if (!a(t.name))
    return null;
  const n = r.contextualKeyword;
  if (e.indexOf(n) !== -1 && Ds()) {
    switch (n) {
      case l._readonly:
        r.tokens[r.tokens.length - 1].type = t._readonly;
        break;
      case l._abstract:
        r.tokens[r.tokens.length - 1].type = t._abstract;
        break;
      case l._static:
        r.tokens[r.tokens.length - 1].type = t._static;
        break;
      case l._public:
        r.tokens[r.tokens.length - 1].type = t._public;
        break;
      case l._private:
        r.tokens[r.tokens.length - 1].type = t._private;
        break;
      case l._protected:
        r.tokens[r.tokens.length - 1].type = t._protected;
        break;
      case l._override:
        r.tokens[r.tokens.length - 1].type = t._override;
        break;
      case l._declare:
        r.tokens[r.tokens.length - 1].type = t._declare;
        break;
    }
    return n;
  }
  return null;
}
function St() {
  for (N(); p(t.dot); )
    N();
}
function Qo() {
  St(), !ae() && a(t.lessThan) && ut();
}
function Yo() {
  k(), vt();
}
function Zo() {
  k();
}
function Ko() {
  d(t._typeof), a(t._import) ? Fs() : St(), !ae() && a(t.lessThan) && ut();
}
function Fs() {
  d(t._import), d(t.parenL), d(t.string), d(t.parenR), p(t.dot) && St(), a(t.lessThan) && ut();
}
function ei() {
  p(t._const);
  const e = p(t._in), n = Z(l._out);
  p(t._const), (e || n) && !a(t.name) ? r.tokens[r.tokens.length - 1].type = t.name : N(), p(t._extends) && z(), p(t.eq) && z();
}
function st() {
  a(t.lessThan) && Jt();
}
function Jt() {
  const e = F(0);
  for (a(t.lessThan) || a(t.typeParameterStart) ? k() : D(); !p(t.greaterThan) && !r.error; )
    ei(), p(t.comma);
  O(e);
}
function _1(e) {
  const n = e === t.arrow;
  st(), d(t.parenL), r.scopeDepth++, ti(
    !1
    /* isBlockScope */
  ), r.scopeDepth--, (n || a(e)) && It(e);
}
function ti(e) {
  d1(t.parenR, e);
}
function Bt() {
  p(t.comma) || W();
}
function Q1() {
  _1(t.colon), Bt();
}
function ni() {
  const e = r.snapshot();
  k();
  const n = p(t.name) && a(t.colon);
  return r.restoreFromSnapshot(e), n;
}
function js() {
  if (!(a(t.bracketL) && ni()))
    return !1;
  const e = F(0);
  return d(t.bracketL), N(), vt(), d(t.bracketR), lt(), Bt(), O(e), !0;
}
function Y1(e) {
  p(t.question), !e && (a(t.parenL) || a(t.lessThan)) ? (_1(t.colon), Bt()) : (lt(), Bt());
}
function si() {
  if (a(t.parenL) || a(t.lessThan)) {
    Q1();
    return;
  }
  if (a(t._new)) {
    k(), a(t.parenL) || a(t.lessThan) ? Q1() : Y1(!1);
    return;
  }
  const e = !!Os([l._readonly]);
  js() || ((E(l._get) || E(l._set)) && Ds(), bt(
    -1
    /* Types don't need context IDs. */
  ), Y1(e));
}
function ri() {
  Ms();
}
function Ms() {
  for (d(t.braceL); !p(t.braceR) && !r.error; )
    si();
}
function oi() {
  const e = r.snapshot(), n = ii();
  return r.restoreFromSnapshot(e), n;
}
function ii() {
  return k(), p(t.plus) || p(t.minus) ? E(l._readonly) : (E(l._readonly) && k(), !a(t.bracketL) || (k(), !t1()) ? !1 : (k(), a(t._in)));
}
function ai() {
  N(), d(t._in), z();
}
function ci() {
  d(t.braceL), a(t.plus) || a(t.minus) ? (k(), Y(l._readonly)) : Z(l._readonly), d(t.bracketL), ai(), Z(l._as) && z(), d(t.bracketR), a(t.plus) || a(t.minus) ? (k(), d(t.question)) : p(t.question), bi(), W(), d(t.braceR);
}
function li() {
  for (d(t.bracketL); !p(t.bracketR) && !r.error; )
    ui(), p(t.comma);
}
function ui() {
  p(t.ellipsis) ? z() : (z(), p(t.question)), p(t.colon) && z();
}
function hi() {
  d(t.parenL), z(), d(t.parenR);
}
function pi() {
  for (We(), We(); !a(t.backQuote) && !r.error; )
    d(t.dollarBraceL), z(), We(), We();
  k();
}
var Xe;
(function(e) {
  e[e.TSFunctionType = 0] = "TSFunctionType";
  const s = 1;
  e[e.TSConstructorType = s] = "TSConstructorType";
  const o = s + 1;
  e[e.TSAbstractConstructorType = o] = "TSAbstractConstructorType";
})(Xe || (Xe = {}));
function Qn(e) {
  e === Xe.TSAbstractConstructorType && Y(l._abstract), (e === Xe.TSConstructorType || e === Xe.TSAbstractConstructorType) && d(t._new);
  const n = r.inDisallowConditionalTypesContext;
  r.inDisallowConditionalTypesContext = !1, _1(t.arrow), r.inDisallowConditionalTypesContext = n;
}
function fi() {
  switch (r.type) {
    case t.name:
      Qo();
      return;
    case t._void:
    case t._null:
      k();
      return;
    case t.string:
    case t.num:
    case t.bigint:
    case t.decimal:
    case t._true:
    case t._false:
      ct();
      return;
    case t.minus:
      k(), ct();
      return;
    case t._this: {
      Zo(), E(l._is) && !ae() && Yo();
      return;
    }
    case t._typeof:
      Ko();
      return;
    case t._import:
      Fs();
      return;
    case t.braceL:
      oi() ? ci() : ri();
      return;
    case t.bracketL:
      li();
      return;
    case t.parenL:
      hi();
      return;
    case t.backQuote:
      pi();
      return;
    default:
      if (r.type & t.IS_KEYWORD) {
        k(), r.tokens[r.tokens.length - 1].type = t.name;
        return;
      }
      break;
  }
  D();
}
function mi() {
  for (fi(); !ae() && p(t.bracketL); )
    p(t.bracketR) || (z(), d(t.bracketR));
}
function di() {
  if (Y(l._infer), N(), a(t._extends)) {
    const e = r.snapshot();
    d(t._extends);
    const n = r.inDisallowConditionalTypesContext;
    r.inDisallowConditionalTypesContext = !0, z(), r.inDisallowConditionalTypesContext = n, (r.error || !r.inDisallowConditionalTypesContext && a(t.question)) && r.restoreFromSnapshot(e);
  }
}
function n1() {
  if (E(l._keyof) || E(l._unique) || E(l._readonly))
    k(), n1();
  else if (E(l._infer))
    di();
  else {
    const e = r.inDisallowConditionalTypesContext;
    r.inDisallowConditionalTypesContext = !1, mi(), r.inDisallowConditionalTypesContext = e;
  }
}
function Z1() {
  if (p(t.bitwiseAND), n1(), a(t.bitwiseAND))
    for (; p(t.bitwiseAND); )
      n1();
}
function ki() {
  if (p(t.bitwiseOR), Z1(), a(t.bitwiseOR))
    for (; p(t.bitwiseOR); )
      Z1();
}
function _i() {
  return a(t.lessThan) ? !0 : a(t.parenL) && xi();
}
function gi() {
  if (a(t.name) || a(t._this))
    return k(), !0;
  if (a(t.braceL) || a(t.bracketL)) {
    let e = 1;
    for (k(); e > 0 && !r.error; )
      a(t.braceL) || a(t.bracketL) ? e++ : (a(t.braceR) || a(t.bracketR)) && e--, k();
    return !0;
  }
  return !1;
}
function xi() {
  const e = r.snapshot(), n = yi();
  return r.restoreFromSnapshot(e), n;
}
function yi() {
  return k(), !!(a(t.parenR) || a(t.ellipsis) || gi() && (a(t.colon) || a(t.comma) || a(t.question) || a(t.eq) || a(t.parenR) && (k(), a(t.arrow))));
}
function It(e) {
  const n = F(0);
  d(e), wi() || z(), O(n);
}
function Ii() {
  a(t.colon) && It(t.colon);
}
function lt() {
  a(t.colon) && vt();
}
function bi() {
  p(t.colon) && z();
}
function wi() {
  const e = r.snapshot();
  return E(l._asserts) ? (k(), Z(l._is) ? (z(), !0) : t1() || a(t._this) ? (k(), Z(l._is) && z(), !0) : (r.restoreFromSnapshot(e), !1)) : t1() || a(t._this) ? (k(), E(l._is) && !ae() ? (k(), z(), !0) : (r.restoreFromSnapshot(e), !1)) : !1;
}
function vt() {
  const e = F(0);
  d(t.colon), z(), O(e);
}
function z() {
  if (K1(), r.inDisallowConditionalTypesContext || ae() || !p(t._extends))
    return;
  const e = r.inDisallowConditionalTypesContext;
  r.inDisallowConditionalTypesContext = !0, K1(), r.inDisallowConditionalTypesContext = e, d(t.question), z(), d(t.colon), z();
}
function Ti() {
  return E(l._abstract) && G() === t._new;
}
function K1() {
  if (_i()) {
    Qn(Xe.TSFunctionType);
    return;
  }
  if (a(t._new)) {
    Qn(Xe.TSConstructorType);
    return;
  } else if (Ti()) {
    Qn(Xe.TSAbstractConstructorType);
    return;
  }
  ki();
}
function Ai() {
  const e = F(1);
  z(), d(t.greaterThan), O(e), Nt();
}
function Ei() {
  if (p(t.jsxTagStart)) {
    r.tokens[r.tokens.length - 1].type = t.typeParameterStart;
    const e = F(1);
    for (; !a(t.greaterThan) && !r.error; )
      z(), p(t.comma);
    me(), O(e);
  }
}
function qs() {
  for (; !a(t.braceL) && !r.error; )
    Si(), p(t.comma);
}
function Si() {
  St(), a(t.lessThan) && ut();
}
function vi() {
  Je(!1), st(), p(t._extends) && qs(), Ms();
}
function Ni() {
  Je(!1), st(), d(t.eq), z(), W();
}
function Pi() {
  if (a(t.string) ? ct() : N(), p(t.eq)) {
    const e = r.tokens.length - 1;
    ne(), r.tokens[e].rhsEndIndex = r.tokens.length;
  }
}
function g1() {
  for (Je(!1), d(t.braceL); !p(t.braceR) && !r.error; )
    Pi(), p(t.comma);
}
function x1() {
  d(t.braceL), Kt(
    /* end */
    t.braceR
  );
}
function s1() {
  Je(!1), p(t.dot) ? s1() : x1();
}
function Bs() {
  E(l._global) ? N() : a(t.string) ? Oe() : D(), a(t.braceL) ? x1() : W();
}
function r1() {
  Mt(), d(t.eq), Ri(), W();
}
function Ci() {
  return E(l._require) && G() === t.parenL;
}
function Ri() {
  Ci() ? Li() : St();
}
function Li() {
  Y(l._require), d(t.parenL), a(t.string) || D(), ct(), d(t.parenR);
}
function Di() {
  if (Te())
    return !1;
  switch (r.type) {
    case t._function: {
      const e = F(1);
      k();
      const n = r.start;
      return tt(
        n,
        /* isStatement */
        !0
      ), O(e), !0;
    }
    case t._class: {
      const e = F(1);
      return nt(
        /* isStatement */
        !0,
        /* optionalId */
        !1
      ), O(e), !0;
    }
    case t._const:
      if (a(t._const) && h1(l._enum)) {
        const e = F(1);
        return d(t._const), Y(l._enum), r.tokens[r.tokens.length - 1].type = t._enum, g1(), O(e), !0;
      }
    // falls through
    case t._var:
    case t._let: {
      const e = F(1);
      return Ot(r.type !== t._var), O(e), !0;
    }
    case t.name: {
      const e = F(1), n = r.contextualKeyword;
      let s = !1;
      return n === l._global ? (Bs(), s = !0) : s = Qt(
        n,
        /* isBeforeToken */
        !0
      ), O(e), s;
    }
    default:
      return !1;
  }
}
function es() {
  return Qt(
    r.contextualKeyword,
    /* isBeforeToken */
    !0
  );
}
function Oi(e) {
  switch (e) {
    case l._declare: {
      const n = r.tokens.length - 1;
      if (Di())
        return r.tokens[n].type = t._declare, !0;
      break;
    }
    case l._global:
      if (a(t.braceL))
        return x1(), !0;
      break;
    default:
      return Qt(
        e,
        /* isBeforeToken */
        !1
      );
  }
  return !1;
}
function Qt(e, n) {
  switch (e) {
    case l._abstract:
      if (it(n) && a(t._class))
        return r.tokens[r.tokens.length - 1].type = t._abstract, nt(
          /* isStatement */
          !0,
          /* optionalId */
          !1
        ), !0;
      break;
    case l._enum:
      if (it(n) && a(t.name))
        return r.tokens[r.tokens.length - 1].type = t._enum, g1(), !0;
      break;
    case l._interface:
      if (it(n) && a(t.name)) {
        const s = F(n ? 2 : 1);
        return vi(), O(s), !0;
      }
      break;
    case l._module:
      if (it(n)) {
        if (a(t.string)) {
          const s = F(n ? 2 : 1);
          return Bs(), O(s), !0;
        } else if (a(t.name)) {
          const s = F(n ? 2 : 1);
          return s1(), O(s), !0;
        }
      }
      break;
    case l._namespace:
      if (it(n) && a(t.name)) {
        const s = F(n ? 2 : 1);
        return s1(), O(s), !0;
      }
      break;
    case l._type:
      if (it(n) && a(t.name)) {
        const s = F(n ? 2 : 1);
        return Ni(), O(s), !0;
      }
      break;
  }
  return !1;
}
function it(e) {
  return e ? (k(), !0) : !Te();
}
function Fi() {
  const e = r.snapshot();
  return Jt(), ht(), Ii(), d(t.arrow), r.error ? (r.restoreFromSnapshot(e), !1) : (Pt(!0), !0);
}
function y1() {
  r.type === t.bitShiftL && (r.pos -= 1, L(t.lessThan)), ut();
}
function ut() {
  const e = F(0);
  for (d(t.lessThan); !a(t.greaterThan) && !r.error; )
    z(), p(t.comma);
  e ? (d(t.greaterThan), O(e)) : (O(e), ws(), d(t.greaterThan), r.tokens[r.tokens.length - 1].isType = !0);
}
function $s() {
  if (a(t.name))
    switch (r.contextualKeyword) {
      case l._abstract:
      case l._declare:
      case l._enum:
      case l._interface:
      case l._module:
      case l._namespace:
      case l._type:
        return !0;
    }
  return !1;
}
function ji(e, n) {
  if (a(t.colon) && It(t.colon), !a(t.braceL) && Te()) {
    let s = r.tokens.length - 1;
    for (; s >= 0 && (r.tokens[s].start >= e || r.tokens[s].type === t._default || r.tokens[s].type === t._export); )
      r.tokens[s].isType = !0, s--;
    return;
  }
  Pt(!1, n);
}
function Mi(e, n, s) {
  if (!ae() && p(t.bang)) {
    r.tokens[r.tokens.length - 1].type = t.nonNullAssertion;
    return;
  }
  if (a(t.lessThan) || a(t.bitShiftL)) {
    const o = r.snapshot();
    if (!n && Js() && Fi())
      return;
    if (y1(), !n && p(t.parenL) ? (r.tokens[r.tokens.length - 1].subscriptStartIndex = e, Ge()) : a(t.backQuote) ? A1() : (
      // The remaining possible case is an instantiation expression, e.g.
      // Array<number> . Check for a few cases that would disqualify it and
      // cause us to bail out.
      // a<b>>c is not (a<b>)>c, but a<(b>>c)
      (r.type === t.greaterThan || // a<b>c is (a<b)>c
      r.type !== t.parenL && r.type & t.IS_EXPRESSION_START && !ae()) && D()
    ), r.error)
      r.restoreFromSnapshot(o);
    else
      return;
  } else !n && a(t.questionDot) && G() === t.lessThan && (k(), r.tokens[e].isOptionalChainStart = !0, r.tokens[r.tokens.length - 1].subscriptStartIndex = e, ut(), d(t.parenL), Ge());
  b1(e, n, s);
}
function qi() {
  if (p(t._import))
    return E(l._type) && G() !== t.eq && Y(l._type), r1(), !0;
  if (p(t.eq))
    return te(), W(), !0;
  if (Z(l._as))
    return Y(l._namespace), N(), W(), !0;
  if (E(l._type)) {
    const e = G();
    (e === t.braceL || e === t.star) && k();
  }
  return !1;
}
function Bi() {
  if (N(), a(t.comma) || a(t.braceR)) {
    r.tokens[r.tokens.length - 1].identifierRole = v.ImportDeclaration;
    return;
  }
  if (N(), a(t.comma) || a(t.braceR)) {
    r.tokens[r.tokens.length - 1].identifierRole = v.ImportDeclaration, r.tokens[r.tokens.length - 2].isType = !0, r.tokens[r.tokens.length - 1].isType = !0;
    return;
  }
  if (N(), a(t.comma) || a(t.braceR)) {
    r.tokens[r.tokens.length - 3].identifierRole = v.ImportAccess, r.tokens[r.tokens.length - 1].identifierRole = v.ImportDeclaration;
    return;
  }
  N(), r.tokens[r.tokens.length - 3].identifierRole = v.ImportAccess, r.tokens[r.tokens.length - 1].identifierRole = v.ImportDeclaration, r.tokens[r.tokens.length - 4].isType = !0, r.tokens[r.tokens.length - 3].isType = !0, r.tokens[r.tokens.length - 2].isType = !0, r.tokens[r.tokens.length - 1].isType = !0;
}
function $i() {
  if (N(), a(t.comma) || a(t.braceR)) {
    r.tokens[r.tokens.length - 1].identifierRole = v.ExportAccess;
    return;
  }
  if (N(), a(t.comma) || a(t.braceR)) {
    r.tokens[r.tokens.length - 1].identifierRole = v.ExportAccess, r.tokens[r.tokens.length - 2].isType = !0, r.tokens[r.tokens.length - 1].isType = !0;
    return;
  }
  if (N(), a(t.comma) || a(t.braceR)) {
    r.tokens[r.tokens.length - 3].identifierRole = v.ExportAccess;
    return;
  }
  N(), r.tokens[r.tokens.length - 3].identifierRole = v.ExportAccess, r.tokens[r.tokens.length - 4].isType = !0, r.tokens[r.tokens.length - 3].isType = !0, r.tokens[r.tokens.length - 2].isType = !0, r.tokens[r.tokens.length - 1].isType = !0;
}
function Ui() {
  if (E(l._abstract) && G() === t._class)
    return r.type = t._abstract, k(), nt(!0, !0), !0;
  if (E(l._interface)) {
    const e = F(2);
    return Qt(l._interface, !0), O(e), !0;
  }
  return !1;
}
function Hi() {
  if (r.type === t._const) {
    const e = Et();
    if (e.type === t.name && e.contextualKeyword === l._enum)
      return d(t._const), Y(l._enum), r.tokens[r.tokens.length - 1].type = t._enum, g1(), !0;
  }
  return !1;
}
function Vi(e) {
  const n = r.tokens.length;
  k1([
    l._abstract,
    l._readonly,
    l._declare,
    l._static,
    l._override
  ]);
  const s = r.tokens.length;
  if (js()) {
    const i = e ? n - 1 : n;
    for (let c = i; c < s; c++)
      r.tokens[c].isType = !0;
    return !0;
  }
  return !1;
}
function Wi(e) {
  Oi(e) || W();
}
function Xi() {
  const e = Z(l._declare);
  e && (r.tokens[r.tokens.length - 1].type = t._declare);
  let n = !1;
  if (a(t.name))
    if (e) {
      const s = F(2);
      n = es(), O(s);
    } else
      n = es();
  if (!n)
    if (e) {
      const s = F(2);
      fe(!0), O(s);
    } else
      fe(!0);
}
function Gi(e) {
  if (e && (a(t.lessThan) || a(t.bitShiftL)) && y1(), Z(l._implements)) {
    r.tokens[r.tokens.length - 1].type = t._implements;
    const n = F(1);
    qs(), O(n);
  }
}
function zi() {
  st();
}
function Ji() {
  st();
}
function Qi() {
  const e = F(0);
  ae() || p(t.bang), lt(), O(e);
}
function Yi() {
  a(t.colon) && vt();
}
function Zi(e, n) {
  return Xt ? Ki(e, n) : ea(e, n);
}
function Ki(e, n) {
  if (!a(t.lessThan))
    return Ae(e, n);
  const s = r.snapshot();
  let o = Ae(e, n);
  if (r.error)
    r.restoreFromSnapshot(s);
  else
    return o;
  return r.type = t.typeParameterStart, Jt(), o = Ae(e, n), o || D(), o;
}
function ea(e, n) {
  if (!a(t.lessThan))
    return Ae(e, n);
  const s = r.snapshot();
  Jt();
  const o = Ae(e, n);
  if (o || D(), r.error)
    r.restoreFromSnapshot(s);
  else
    return o;
  return Ae(e, n);
}
function ta() {
  if (a(t.colon)) {
    const e = r.snapshot();
    It(t.colon), pe() && D(), a(t.arrow) || D(), r.error && r.restoreFromSnapshot(e);
  }
  return p(t.arrow);
}
function na() {
  const e = F(0);
  p(t.question), lt(), O(e);
}
function sa() {
  (a(t.lessThan) || a(t.bitShiftL)) && y1(), ar();
}
function ra() {
  let e = !1, n = !1;
  for (; ; ) {
    if (r.pos >= b.length) {
      D("Unterminated JSX contents");
      return;
    }
    const s = b.charCodeAt(r.pos);
    if (s === u.lessThan || s === u.leftCurlyBrace) {
      if (r.pos === r.start) {
        if (s === u.lessThan) {
          r.pos++, L(t.jsxTagStart);
          return;
        }
        Ts(s);
        return;
      }
      L(e && !n ? t.jsxEmptyText : t.jsxText);
      return;
    }
    s === u.lineFeed ? e = !0 : s !== u.space && s !== u.carriageReturn && s !== u.tab && (n = !0), r.pos++;
  }
}
function oa(e) {
  for (r.pos++; ; ) {
    if (r.pos >= b.length) {
      D("Unterminated string constant");
      return;
    }
    if (b.charCodeAt(r.pos) === e) {
      r.pos++;
      break;
    }
    r.pos++;
  }
  L(t.string);
}
function ia() {
  let e;
  do {
    if (r.pos > b.length) {
      D("Unexpectedly reached the end of input.");
      return;
    }
    e = b.charCodeAt(++r.pos);
  } while (_e[e] || e === u.dash);
  L(t.jsxName);
}
function o1() {
  me();
}
function Us(e) {
  if (o1(), !p(t.colon)) {
    r.tokens[r.tokens.length - 1].identifierRole = e;
    return;
  }
  o1();
}
function Hs() {
  const e = r.tokens.length;
  Us(v.Access);
  let n = !1;
  for (; a(t.dot); )
    n = !0, me(), o1();
  if (!n) {
    const s = r.tokens[e], o = b.charCodeAt(s.start);
    o >= u.lowercaseA && o <= u.lowercaseZ && (s.identifierRole = null);
  }
}
function aa() {
  switch (r.type) {
    case t.braceL:
      k(), te(), me();
      return;
    case t.jsxTagStart:
      Ws(), me();
      return;
    case t.string:
      me();
      return;
    default:
      D("JSX value should be either an expression or a quoted JSX text");
  }
}
function ca() {
  d(t.ellipsis), te();
}
function la(e) {
  if (a(t.jsxTagEnd))
    return !1;
  Hs(), j && Ei();
  let n = !1;
  for (; !a(t.slash) && !a(t.jsxTagEnd) && !r.error; ) {
    if (p(t.braceL)) {
      n = !0, d(t.ellipsis), ne(), me();
      continue;
    }
    n && r.end - r.start === 3 && b.charCodeAt(r.start) === u.lowercaseK && b.charCodeAt(r.start + 1) === u.lowercaseE && b.charCodeAt(r.start + 2) === u.lowercaseY && (r.tokens[e].jsxRole = ke.KeyAfterPropSpread), Us(v.ObjectKey), a(t.eq) && (me(), aa());
  }
  const s = a(t.slash);
  return s && me(), s;
}
function ua() {
  a(t.jsxTagEnd) || Hs();
}
function Vs() {
  const e = r.tokens.length - 1;
  r.tokens[e].jsxRole = ke.NoChildren;
  let n = 0;
  if (!la(e))
    for (at(); ; )
      switch (r.type) {
        case t.jsxTagStart:
          if (me(), a(t.slash)) {
            me(), ua(), r.tokens[e].jsxRole !== ke.KeyAfterPropSpread && (n === 1 ? r.tokens[e].jsxRole = ke.OneChild : n > 1 && (r.tokens[e].jsxRole = ke.StaticChildren));
            return;
          }
          n++, Vs(), at();
          break;
        case t.jsxText:
          n++, at();
          break;
        case t.jsxEmptyText:
          at();
          break;
        case t.braceL:
          k(), a(t.ellipsis) ? (ca(), at(), n += 2) : (a(t.braceR) || (n++, te()), at());
          break;
        // istanbul ignore next - should never happen
        default:
          D();
          return;
      }
}
function Ws() {
  me(), Vs();
}
function me() {
  r.tokens.push(new Gt()), Is(), r.start = r.pos;
  const e = b.charCodeAt(r.pos);
  if (At[e])
    ia();
  else if (e === u.quotationMark || e === u.apostrophe)
    oa(e);
  else
    switch (++r.pos, e) {
      case u.greaterThan:
        L(t.jsxTagEnd);
        break;
      case u.lessThan:
        L(t.jsxTagStart);
        break;
      case u.slash:
        L(t.slash);
        break;
      case u.equalsTo:
        L(t.eq);
        break;
      case u.leftCurlyBrace:
        L(t.braceL);
        break;
      case u.dot:
        L(t.dot);
        break;
      case u.colon:
        L(t.colon);
        break;
      default:
        D();
    }
}
function at() {
  r.tokens.push(new Gt()), r.start = r.pos, ra();
}
function ha(e) {
  if (a(t.question)) {
    const n = G();
    if (n === t.colon || n === t.comma || n === t.parenR)
      return;
  }
  Xs(e);
}
function pa() {
  ks(t.question), a(t.colon) && (j ? vt() : q && rt());
}
class fa {
  constructor(n) {
    this.stop = n;
  }
}
function te(e = !1) {
  if (ne(e), a(t.comma))
    for (; p(t.comma); )
      ne(e);
}
function ne(e = !1, n = !1) {
  return j ? Zi(e, n) : q ? gc(e, n) : Ae(e, n);
}
function Ae(e, n) {
  if (a(t._yield))
    return Na(), !1;
  (a(t.parenL) || a(t.name) || a(t._yield)) && (r.potentialArrowAt = r.start);
  const s = ma(e);
  return n && T1(), r.type & t.IS_ASSIGN ? (k(), ne(e), !1) : s;
}
function ma(e) {
  return ka(e) ? !0 : (da(e), !1);
}
function da(e) {
  j || q ? ha(e) : Xs(e);
}
function Xs(e) {
  p(t.question) && (ne(), d(t.colon), ne(e));
}
function ka(e) {
  const n = r.tokens.length;
  return Nt() ? !0 : (Lt(n, -1, e), !1);
}
function Lt(e, n, s) {
  if (j && (t._in & t.PRECEDENCE_MASK) > n && !ae() && (Z(l._as) || Z(l._satisfies))) {
    const i = F(1);
    z(), O(i), ws(), Lt(e, n, s);
    return;
  }
  const o = r.type & t.PRECEDENCE_MASK;
  if (o > 0 && (!s || !a(t._in)) && o > n) {
    const i = r.type;
    k(), i === t.nullishCoalescing && (r.tokens[r.tokens.length - 1].nullishStartIndex = e);
    const c = r.tokens.length;
    Nt(), Lt(c, i & t.IS_RIGHT_ASSOCIATIVE ? o - 1 : o, s), i === t.nullishCoalescing && (r.tokens[e].numNullishCoalesceStarts++, r.tokens[r.tokens.length - 1].numNullishCoalesceEnds++), Lt(e, n, s);
  }
}
function Nt() {
  if (j && !Xt && p(t.lessThan))
    return Ai(), !1;
  if (E(l._module) && gs() === u.leftCurlyBrace && !hs())
    return Pa(), !1;
  if (r.type & t.IS_PREFIX)
    return k(), Nt(), !1;
  if (Gs())
    return !0;
  for (; r.type & t.IS_POSTFIX && !pe(); )
    r.type === t.preIncDec && (r.type = t.postIncDec), k();
  return !1;
}
function Gs() {
  const e = r.tokens.length;
  return Oe() ? !0 : (I1(e), r.tokens.length > e && r.tokens[e].isOptionalChainStart && (r.tokens[r.tokens.length - 1].isOptionalChainEnd = !0), !1);
}
function I1(e, n = !1) {
  q ? yc(e, n) : zs(e, n);
}
function zs(e, n = !1) {
  const s = new fa(!1);
  do
    _a(e, n, s);
  while (!s.stop && !r.error);
}
function _a(e, n, s) {
  j ? Mi(e, n, s) : q ? ec(e, n, s) : b1(e, n, s);
}
function b1(e, n, s) {
  if (!n && p(t.doubleColon))
    w1(), s.stop = !0, I1(e, n);
  else if (a(t.questionDot)) {
    if (r.tokens[e].isOptionalChainStart = !0, n && G() === t.parenL) {
      s.stop = !0;
      return;
    }
    k(), r.tokens[r.tokens.length - 1].subscriptStartIndex = e, p(t.bracketL) ? (te(), d(t.bracketR)) : p(t.parenL) ? Ge() : $t();
  } else if (p(t.dot))
    r.tokens[r.tokens.length - 1].subscriptStartIndex = e, $t();
  else if (p(t.bracketL))
    r.tokens[r.tokens.length - 1].subscriptStartIndex = e, te(), d(t.bracketR);
  else if (!n && a(t.parenL))
    if (Js()) {
      const o = r.snapshot(), i = r.tokens.length;
      k(), r.tokens[r.tokens.length - 1].subscriptStartIndex = e;
      const c = xt();
      r.tokens[r.tokens.length - 1].contextId = c, Ge(), r.tokens[r.tokens.length - 1].contextId = c, ga() && (r.restoreFromSnapshot(o), s.stop = !0, r.scopeDepth++, ht(), xa(i));
    } else {
      k(), r.tokens[r.tokens.length - 1].subscriptStartIndex = e;
      const o = xt();
      r.tokens[r.tokens.length - 1].contextId = o, Ge(), r.tokens[r.tokens.length - 1].contextId = o;
    }
  else a(t.backQuote) ? A1() : s.stop = !0;
}
function Js() {
  return r.tokens[r.tokens.length - 1].contextualKeyword === l._async && !pe();
}
function Ge() {
  let e = !0;
  for (; !p(t.parenR) && !r.error; ) {
    if (e)
      e = !1;
    else if (d(t.comma), p(t.parenR))
      break;
    Ks(!1);
  }
}
function ga() {
  return a(t.colon) || a(t.arrow);
}
function xa(e) {
  j ? Yi() : q && _c(), d(t.arrow), wt(e);
}
function w1() {
  const e = r.tokens.length;
  Oe(), I1(e, !0);
}
function Oe() {
  if (p(t.modulo))
    return N(), !1;
  if (a(t.jsxText) || a(t.jsxEmptyText))
    return ct(), !1;
  if (a(t.lessThan) && Xt)
    return r.type = t.jsxTagStart, Ws(), k(), !1;
  const e = r.potentialArrowAt === r.start;
  switch (r.type) {
    case t.slash:
    case t.assign:
      Jr();
    // Fall through.
    case t._super:
    case t._this:
    case t.regexp:
    case t.num:
    case t.bigint:
    case t.decimal:
    case t.string:
    case t._null:
    case t._true:
    case t._false:
      return k(), !1;
    case t._import:
      return k(), a(t.dot) && (r.tokens[r.tokens.length - 1].type = t.name, k(), N()), !1;
    case t.name: {
      const n = r.tokens.length, s = r.start, o = r.contextualKeyword;
      return N(), o === l._await ? (va(), !1) : o === l._async && a(t._function) && !pe() ? (k(), tt(s, !1), !1) : e && o === l._async && !pe() && a(t.name) ? (r.scopeDepth++, Je(!1), d(t.arrow), wt(n), !0) : a(t._do) && !pe() ? (k(), ze(), !1) : e && !pe() && a(t.arrow) ? (r.scopeDepth++, m1(!1), d(t.arrow), wt(n), !0) : (r.tokens[r.tokens.length - 1].identifierRole = v.Access, !1);
    }
    case t._do:
      return k(), ze(), !1;
    case t.parenL:
      return Qs(e);
    case t.bracketL:
      return k(), Zs(t.bracketR, !0), !1;
    case t.braceL:
      return E1(!1, !1), !1;
    case t._function:
      return ya(), !1;
    case t.at:
      O1();
    // Fall through.
    case t._class:
      return nt(!1), !1;
    case t._new:
      return ba(), !1;
    case t.backQuote:
      return A1(), !1;
    case t.doubleColon:
      return k(), w1(), !1;
    case t.hash: {
      const n = gs();
      return At[n] || n === u.backslash ? $t() : k(), !1;
    }
    default:
      return D(), !1;
  }
}
function $t() {
  p(t.hash), N();
}
function ya() {
  const e = r.start;
  N(), p(t.dot) && N(), tt(e, !1);
}
function ct() {
  k();
}
function Yt() {
  d(t.parenL), te(), d(t.parenR);
}
function Qs(e) {
  const n = r.snapshot(), s = r.tokens.length;
  d(t.parenL);
  let o = !0;
  for (; !a(t.parenR) && !r.error; ) {
    if (o)
      o = !1;
    else if (d(t.comma), a(t.parenR))
      break;
    if (a(t.ellipsis)) {
      Rs(
        !1
        /* isBlockScope */
      ), T1();
      break;
    } else
      ne(!1, !0);
  }
  return d(t.parenR), e && Ia() && i1() ? (r.restoreFromSnapshot(n), r.scopeDepth++, ht(), i1(), wt(s), r.error ? (r.restoreFromSnapshot(n), Qs(!1), !1) : !0) : !1;
}
function Ia() {
  return a(t.colon) || !pe();
}
function i1() {
  return j ? ta() : q ? xc() : p(t.arrow);
}
function T1() {
  (j || q) && pa();
}
function ba() {
  if (d(t._new), p(t.dot)) {
    N();
    return;
  }
  wa(), q && tc(), p(t.parenL) && Zs(t.parenR);
}
function wa() {
  w1(), p(t.questionDot);
}
function A1() {
  for (We(), We(); !a(t.backQuote) && !r.error; )
    d(t.dollarBraceL), te(), We(), We();
  k();
}
function E1(e, n) {
  const s = xt();
  let o = !0;
  for (k(), r.tokens[r.tokens.length - 1].contextId = s; !p(t.braceR) && !r.error; ) {
    if (o)
      o = !1;
    else if (d(t.comma), p(t.braceR))
      break;
    let i = !1;
    if (a(t.ellipsis)) {
      const c = r.tokens.length;
      if (Cs(), e && (r.tokens.length === c + 2 && m1(n), p(t.braceR)))
        break;
      continue;
    }
    e || (i = p(t.star)), !e && E(l._async) ? (i && D(), N(), a(t.colon) || a(t.parenL) || a(t.braceR) || a(t.eq) || a(t.comma) || (a(t.star) && (k(), i = !0), bt(s))) : bt(s), Sa(e, n, s);
  }
  r.tokens[r.tokens.length - 1].contextId = s;
}
function Ta(e) {
  return !e && (a(t.string) || // get "string"() {}
  a(t.num) || // get 1() {}
  a(t.bracketL) || // get ["string"]() {}
  a(t.name) || // get foo() {}
  !!(r.type & t.IS_KEYWORD));
}
function Aa(e, n) {
  const s = r.start;
  return a(t.parenL) ? (e && D(), a1(
    s,
    /* isConstructor */
    !1
  ), !0) : Ta(e) ? (bt(n), a1(
    s,
    /* isConstructor */
    !1
  ), !0) : !1;
}
function Ea(e, n) {
  if (p(t.colon)) {
    e ? qt(n) : ne(!1);
    return;
  }
  let s;
  e ? r.scopeDepth === 0 ? s = v.ObjectShorthandTopLevelDeclaration : n ? s = v.ObjectShorthandBlockScopedDeclaration : s = v.ObjectShorthandFunctionScopedDeclaration : s = v.ObjectShorthand, r.tokens[r.tokens.length - 1].identifierRole = s, qt(n, !0);
}
function Sa(e, n, s) {
  j ? zi() : q && hc(), Aa(e, s) || Ea(e, n);
}
function bt(e) {
  q && D1(), p(t.bracketL) ? (r.tokens[r.tokens.length - 1].contextId = e, ne(), d(t.bracketR), r.tokens[r.tokens.length - 1].contextId = e) : (a(t.num) || a(t.string) || a(t.bigint) || a(t.decimal) ? Oe() : $t(), r.tokens[r.tokens.length - 1].identifierRole = v.ObjectKey, r.tokens[r.tokens.length - 1].contextId = e);
}
function a1(e, n) {
  const s = xt();
  r.scopeDepth++;
  const o = r.tokens.length;
  ht(n, s), Ys(e, s);
  const c = r.tokens.length;
  r.scopes.push(new Ee(o, c, !0)), r.scopeDepth--;
}
function wt(e) {
  Pt(!0);
  const n = r.tokens.length;
  r.scopes.push(new Ee(e, n, !0)), r.scopeDepth--;
}
function Ys(e, n = 0) {
  j ? ji(e, n) : q ? Ka(n) : Pt(!1, n);
}
function Pt(e, n = 0) {
  e && !a(t.braceL) ? ne() : ze(!0, n);
}
function Zs(e, n = !1) {
  let s = !0;
  for (; !p(e) && !r.error; ) {
    if (s)
      s = !1;
    else if (d(t.comma), p(e)) break;
    Ks(n);
  }
}
function Ks(e) {
  e && a(t.comma) || (a(t.ellipsis) ? (Cs(), T1()) : a(t.question) ? k() : ne(!1, !0));
}
function N() {
  k(), r.tokens[r.tokens.length - 1].type = t.name;
}
function va() {
  Nt();
}
function Na() {
  k(), !a(t.semi) && !pe() && (p(t.star), ne());
}
function Pa() {
  Y(l._module), d(t.braceL), Kt(t.braceR);
}
function Ca(e) {
  return (e.type === t.name || !!(e.type & t.IS_KEYWORD)) && e.contextualKeyword !== l._from;
}
function Se(e) {
  const n = F(0);
  d(e || t.colon), ue(), O(n);
}
function ts() {
  d(t.modulo), Y(l._checks), p(t.parenL) && (te(), d(t.parenR));
}
function S1() {
  const e = F(0);
  d(t.colon), a(t.modulo) ? ts() : (ue(), a(t.modulo) && ts()), O(e);
}
function Ra() {
  k(), v1(
    /* isClass */
    !0
  );
}
function La() {
  k(), N(), a(t.lessThan) && xe(), d(t.parenL), l1(), d(t.parenR), S1(), W();
}
function c1() {
  a(t._class) ? Ra() : a(t._function) ? La() : a(t._var) ? Da() : Z(l._module) ? p(t.dot) ? ja() : Oa() : E(l._type) ? Ma() : E(l._opaque) ? qa() : E(l._interface) ? Ba() : a(t._export) ? Fa() : D();
}
function Da() {
  k(), sr(), W();
}
function Oa() {
  for (a(t.string) ? Oe() : N(), d(t.braceL); !a(t.braceR) && !r.error; )
    a(t._import) ? (k(), fr()) : D();
  d(t.braceR);
}
function Fa() {
  d(t._export), p(t._default) ? a(t._function) || a(t._class) ? c1() : (ue(), W()) : a(t._var) || // declare export var ...
  a(t._function) || // declare export function ...
  a(t._class) || // declare export class ...
  E(l._opaque) ? c1() : a(t.star) || // declare export * from ''
  a(t.braceL) || // declare export {} ...
  E(l._interface) || // declare export interface ...
  E(l._type) || // declare export type ...
  E(l._opaque) ? hr() : D();
}
function ja() {
  Y(l._exports), rt(), W();
}
function Ma() {
  k(), P1();
}
function qa() {
  k(), C1(!0);
}
function Ba() {
  k(), v1();
}
function v1(e = !1) {
  if (Zt(), a(t.lessThan) && xe(), p(t._extends))
    do
      Dt();
    while (!e && p(t.comma));
  if (E(l._mixins)) {
    k();
    do
      Dt();
    while (p(t.comma));
  }
  if (E(l._implements)) {
    k();
    do
      Dt();
    while (p(t.comma));
  }
  Ut(e, !1, e);
}
function Dt() {
  er(!1), a(t.lessThan) && et();
}
function N1() {
  v1();
}
function Zt() {
  N();
}
function P1() {
  Zt(), a(t.lessThan) && xe(), Se(t.eq), W();
}
function C1(e) {
  Y(l._type), Zt(), a(t.lessThan) && xe(), a(t.colon) && Se(t.colon), e || Se(t.eq), W();
}
function $a() {
  D1(), sr(), p(t.eq) && ue();
}
function xe() {
  const e = F(0);
  a(t.lessThan) || a(t.typeParameterStart) ? k() : D();
  do
    $a(), a(t.greaterThan) || d(t.comma);
  while (!a(t.greaterThan) && !r.error);
  d(t.greaterThan), O(e);
}
function et() {
  const e = F(0);
  for (d(t.lessThan); !a(t.greaterThan) && !r.error; )
    ue(), a(t.greaterThan) || d(t.comma);
  d(t.greaterThan), O(e);
}
function Ua() {
  if (Y(l._interface), p(t._extends))
    do
      Dt();
    while (p(t.comma));
  Ut(!1, !1, !1);
}
function R1() {
  a(t.num) || a(t.string) ? Oe() : N();
}
function Ha() {
  G() === t.colon ? (R1(), Se()) : ue(), d(t.bracketR), Se();
}
function Va() {
  R1(), d(t.bracketR), d(t.bracketR), a(t.lessThan) || a(t.parenL) ? L1() : (p(t.question), Se());
}
function L1() {
  for (a(t.lessThan) && xe(), d(t.parenL); !a(t.parenR) && !a(t.ellipsis) && !r.error; )
    Ht(), a(t.parenR) || d(t.comma);
  p(t.ellipsis) && Ht(), d(t.parenR), Se();
}
function Wa() {
  L1();
}
function Ut(e, n, s) {
  let o;
  for (n && a(t.braceBarL) ? (d(t.braceBarL), o = t.braceBarR) : (d(t.braceL), o = t.braceR); !a(o) && !r.error; ) {
    if (s && E(l._proto)) {
      const i = G();
      i !== t.colon && i !== t.question && (k(), e = !1);
    }
    if (e && E(l._static)) {
      const i = G();
      i !== t.colon && i !== t.question && k();
    }
    if (D1(), p(t.bracketL))
      p(t.bracketL) ? Va() : Ha();
    else if (a(t.parenL) || a(t.lessThan))
      Wa();
    else {
      if (E(l._get) || E(l._set)) {
        const i = G();
        (i === t.name || i === t.string || i === t.num) && k();
      }
      Xa();
    }
    Ga();
  }
  d(o);
}
function Xa() {
  if (a(t.ellipsis)) {
    if (d(t.ellipsis), p(t.comma) || p(t.semi), a(t.braceR))
      return;
    ue();
  } else
    R1(), a(t.lessThan) || a(t.parenL) ? L1() : (p(t.question), Se());
}
function Ga() {
  !p(t.semi) && !p(t.comma) && !a(t.braceR) && !a(t.braceBarR) && D();
}
function er(e) {
  for (e || N(); p(t.dot); )
    N();
}
function za() {
  er(!0), a(t.lessThan) && et();
}
function Ja() {
  d(t._typeof), tr();
}
function Qa() {
  for (d(t.bracketL); r.pos < b.length && !a(t.bracketR) && (ue(), !a(t.bracketR)); )
    d(t.comma);
  d(t.bracketR);
}
function Ht() {
  const e = G();
  e === t.colon || e === t.question ? (N(), p(t.question), Se()) : ue();
}
function l1() {
  for (; !a(t.parenR) && !a(t.ellipsis) && !r.error; )
    Ht(), a(t.parenR) || d(t.comma);
  p(t.ellipsis) && Ht();
}
function tr() {
  let e = !1;
  const n = r.noAnonFunctionType;
  switch (r.type) {
    case t.name: {
      if (E(l._interface)) {
        Ua();
        return;
      }
      N(), za();
      return;
    }
    case t.braceL:
      Ut(!1, !1, !1);
      return;
    case t.braceBarL:
      Ut(!1, !0, !1);
      return;
    case t.bracketL:
      Qa();
      return;
    case t.lessThan:
      xe(), d(t.parenL), l1(), d(t.parenR), d(t.arrow), ue();
      return;
    case t.parenL:
      if (k(), !a(t.parenR) && !a(t.ellipsis))
        if (a(t.name)) {
          const s = G();
          e = s !== t.question && s !== t.colon;
        } else
          e = !0;
      if (e)
        if (r.noAnonFunctionType = !1, ue(), r.noAnonFunctionType = n, r.noAnonFunctionType || !(a(t.comma) || a(t.parenR) && G() === t.arrow)) {
          d(t.parenR);
          return;
        } else
          p(t.comma);
      l1(), d(t.parenR), d(t.arrow), ue();
      return;
    case t.minus:
      k(), ct();
      return;
    case t.string:
    case t.num:
    case t._true:
    case t._false:
    case t._null:
    case t._this:
    case t._void:
    case t.star:
      k();
      return;
    default:
      if (r.type === t._typeof) {
        Ja();
        return;
      } else if (r.type & t.IS_KEYWORD) {
        k(), r.tokens[r.tokens.length - 1].type = t.name;
        return;
      }
  }
  D();
}
function Ya() {
  for (tr(); !pe() && (a(t.bracketL) || a(t.questionDot)); )
    p(t.questionDot), d(t.bracketL), p(t.bracketR) || (ue(), d(t.bracketR));
}
function nr() {
  p(t.question) ? nr() : Ya();
}
function ns() {
  nr(), !r.noAnonFunctionType && p(t.arrow) && ue();
}
function ss() {
  for (p(t.bitwiseAND), ns(); p(t.bitwiseAND); )
    ns();
}
function Za() {
  for (p(t.bitwiseOR), ss(); p(t.bitwiseOR); )
    ss();
}
function ue() {
  Za();
}
function rt() {
  Se();
}
function sr() {
  N(), a(t.colon) && rt();
}
function D1() {
  (a(t.plus) || a(t.minus)) && (k(), r.tokens[r.tokens.length - 1].isType = !0);
}
function Ka(e) {
  a(t.colon) && S1(), Pt(!1, e);
}
function ec(e, n, s) {
  if (a(t.questionDot) && G() === t.lessThan) {
    if (n) {
      s.stop = !0;
      return;
    }
    k(), et(), d(t.parenL), Ge();
    return;
  } else if (!n && a(t.lessThan)) {
    const o = r.snapshot();
    if (et(), d(t.parenL), Ge(), r.error)
      r.restoreFromSnapshot(o);
    else
      return;
  }
  b1(e, n, s);
}
function tc() {
  if (a(t.lessThan)) {
    const e = r.snapshot();
    et(), r.error && r.restoreFromSnapshot(e);
  }
}
function nc() {
  if (a(t.name) && r.contextualKeyword === l._interface) {
    const e = F(0);
    return k(), N1(), O(e), !0;
  } else if (E(l._enum))
    return rr(), !0;
  return !1;
}
function sc() {
  return E(l._enum) ? (rr(), !0) : !1;
}
function rc(e) {
  if (e === l._declare) {
    if (a(t._class) || a(t.name) || a(t._function) || a(t._var) || a(t._export)) {
      const n = F(1);
      c1(), O(n);
    }
  } else if (a(t.name)) {
    if (e === l._interface) {
      const n = F(1);
      N1(), O(n);
    } else if (e === l._type) {
      const n = F(1);
      P1(), O(n);
    } else if (e === l._opaque) {
      const n = F(1);
      C1(!1), O(n);
    }
  }
  W();
}
function oc() {
  return E(l._type) || E(l._interface) || E(l._opaque) || E(l._enum);
}
function ic() {
  return a(t.name) && (r.contextualKeyword === l._type || r.contextualKeyword === l._interface || r.contextualKeyword === l._opaque || r.contextualKeyword === l._enum);
}
function ac() {
  if (E(l._type)) {
    const e = F(1);
    k(), a(t.braceL) ? (F1(), Tt()) : P1(), O(e);
  } else if (E(l._opaque)) {
    const e = F(1);
    k(), C1(!1), O(e);
  } else if (E(l._interface)) {
    const e = F(1);
    k(), N1(), O(e);
  } else
    fe(!0);
}
function cc() {
  return a(t.star) || E(l._type) && G() === t.star;
}
function lc() {
  if (Z(l._type)) {
    const e = F(2);
    u1(), O(e);
  } else
    u1();
}
function uc(e) {
  if (e && a(t.lessThan) && et(), E(l._implements)) {
    const n = F(0);
    k(), r.tokens[r.tokens.length - 1].type = t._implements;
    do
      Zt(), a(t.lessThan) && et();
    while (p(t.comma));
    O(n);
  }
}
function hc() {
  a(t.lessThan) && (xe(), a(t.parenL) || D());
}
function pc() {
  const e = F(0);
  p(t.question), a(t.colon) && rt(), O(e);
}
function fc() {
  if (a(t._typeof) || E(l._type)) {
    const e = Et();
    (Ca(e) || e.type === t.braceL || e.type === t.star) && k();
  }
}
function mc() {
  const e = r.contextualKeyword === l._type || r.type === t._typeof;
  e ? k() : N(), E(l._as) && !h1(l._as) ? (N(), e && !a(t.name) && !(r.type & t.IS_KEYWORD) || N()) : (e && (a(t.name) || r.type & t.IS_KEYWORD) && N(), Z(l._as) && N());
}
function dc() {
  if (a(t.lessThan)) {
    const e = F(0);
    xe(), O(e);
  }
}
function kc() {
  a(t.colon) && rt();
}
function _c() {
  if (a(t.colon)) {
    const e = r.noAnonFunctionType;
    r.noAnonFunctionType = !0, rt(), r.noAnonFunctionType = e;
  }
}
function gc(e, n) {
  if (a(t.lessThan)) {
    const s = r.snapshot();
    let o = Ae(e, n);
    if (r.error)
      r.restoreFromSnapshot(s), r.type = t.typeParameterStart;
    else
      return o;
    const i = F(0);
    if (xe(), O(i), o = Ae(e, n), o)
      return !0;
    D();
  }
  return Ae(e, n);
}
function xc() {
  if (a(t.colon)) {
    const e = F(0), n = r.snapshot(), s = r.noAnonFunctionType;
    r.noAnonFunctionType = !0, S1(), r.noAnonFunctionType = s, pe() && D(), a(t.arrow) || D(), r.error && r.restoreFromSnapshot(n), O(e);
  }
  return p(t.arrow);
}
function yc(e, n = !1) {
  if (r.tokens[r.tokens.length - 1].contextualKeyword === l._async && a(t.lessThan)) {
    const s = r.snapshot();
    if (Ic() && !r.error)
      return;
    r.restoreFromSnapshot(s);
  }
  zs(e, n);
}
function Ic() {
  r.scopeDepth++;
  const e = r.tokens.length;
  return ht(), i1() ? (wt(e), !0) : !1;
}
function rr() {
  Y(l._enum), r.tokens[r.tokens.length - 1].type = t._enum, N(), bc();
}
function bc() {
  Z(l._of) && k(), d(t.braceL), wc(), d(t.braceR);
}
function wc() {
  for (; !a(t.braceR) && !r.error && !p(t.ellipsis); )
    Tc(), a(t.braceR) || d(t.comma);
}
function Tc() {
  N(), p(t.eq) && k();
}
function Ac() {
  if (Kt(t.eof), r.scopes.push(new Ee(0, r.tokens.length, !0)), r.scopeDepth !== 0)
    throw new Error(`Invalid scope depth at end of file: ${r.scopeDepth}`);
  return new hl(r.tokens, r.scopes);
}
function fe(e) {
  q && nc() || (a(t.at) && O1(), Ec(e));
}
function Ec(e) {
  if (j && Hi())
    return;
  const n = r.type;
  switch (n) {
    case t._break:
    case t._continue:
      vc();
      return;
    case t._debugger:
      Nc();
      return;
    case t._do:
      Pc();
      return;
    case t._for:
      Cc();
      return;
    case t._function:
      if (G() === t.dot) break;
      e || D(), Dc();
      return;
    case t._class:
      e || D(), nt(!0);
      return;
    case t._if:
      Oc();
      return;
    case t._return:
      Fc();
      return;
    case t._switch:
      jc();
      return;
    case t._throw:
      Mc();
      return;
    case t._try:
      Bc();
      return;
    case t._let:
    case t._const:
      e || D();
    // NOTE: falls through to _var
    case t._var:
      Ot(n !== t._var);
      return;
    case t._while:
      $c();
      return;
    case t.braceL:
      ze();
      return;
    case t.semi:
      Uc();
      return;
    case t._export:
    case t._import: {
      const i = G();
      if (i === t.parenL || i === t.dot)
        break;
      k(), n === t._import ? fr() : hr();
      return;
    }
    case t.name:
      if (r.contextualKeyword === l._async) {
        const i = r.start, c = r.snapshot();
        if (k(), a(t._function) && !pe()) {
          d(t._function), tt(i, !0);
          return;
        } else
          r.restoreFromSnapshot(c);
      } else if (r.contextualKeyword === l._using && !hs() && // Statements like `using[0]` and `using in foo` aren't actual using
      // declarations.
      G() === t.name) {
        Ot(!0);
        return;
      } else if (or()) {
        Y(l._await), Ot(!0);
        return;
      }
  }
  const s = r.tokens.length;
  te();
  let o = null;
  if (r.tokens.length === s + 1) {
    const i = r.tokens[r.tokens.length - 1];
    i.type === t.name && (o = i.contextualKeyword);
  }
  if (o == null) {
    W();
    return;
  }
  p(t.colon) ? Hc() : Vc(o);
}
function or() {
  if (!E(l._await))
    return !1;
  const e = r.snapshot();
  return k(), !E(l._using) || ae() || (k(), !a(t.name) || ae()) ? (r.restoreFromSnapshot(e), !1) : (r.restoreFromSnapshot(e), !0);
}
function O1() {
  for (; a(t.at); )
    ir();
}
function ir() {
  if (k(), p(t.parenL))
    te(), d(t.parenR);
  else {
    for (N(); p(t.dot); )
      N();
    Sc();
  }
}
function Sc() {
  j ? sa() : ar();
}
function ar() {
  p(t.parenL) && Ge();
}
function vc() {
  k(), Te() || (N(), W());
}
function Nc() {
  k(), W();
}
function Pc() {
  k(), fe(!1), d(t._while), Yt(), p(t.semi);
}
function Cc() {
  r.scopeDepth++;
  const e = r.tokens.length;
  Lc();
  const n = r.tokens.length;
  r.scopes.push(new Ee(e, n, !1)), r.scopeDepth--;
}
function Rc() {
  return !(!E(l._using) || h1(l._of));
}
function Lc() {
  k();
  let e = !1;
  if (E(l._await) && (e = !0, k()), d(t.parenL), a(t.semi)) {
    e && D(), Yn();
    return;
  }
  const n = or();
  if (n || a(t._var) || a(t._let) || a(t._const) || Rc()) {
    if (n && Y(l._await), k(), cr(!0, r.type !== t._var), a(t._in) || E(l._of)) {
      rs(e);
      return;
    }
    Yn();
    return;
  }
  if (te(!0), a(t._in) || E(l._of)) {
    rs(e);
    return;
  }
  e && D(), Yn();
}
function Dc() {
  const e = r.start;
  k(), tt(e, !0);
}
function Oc() {
  k(), Yt(), fe(!1), p(t._else) && fe(!1);
}
function Fc() {
  k(), Te() || (te(), W());
}
function jc() {
  k(), Yt(), r.scopeDepth++;
  const e = r.tokens.length;
  for (d(t.braceL); !a(t.braceR) && !r.error; )
    if (a(t._case) || a(t._default)) {
      const s = a(t._case);
      k(), s && te(), d(t.colon);
    } else
      fe(!0);
  k();
  const n = r.tokens.length;
  r.scopes.push(new Ee(e, n, !1)), r.scopeDepth--;
}
function Mc() {
  k(), te(), W();
}
function qc() {
  zt(
    !0
    /* isBlockScope */
  ), j && lt();
}
function Bc() {
  if (k(), ze(), a(t._catch)) {
    k();
    let e = null;
    if (a(t.parenL) && (r.scopeDepth++, e = r.tokens.length, d(t.parenL), qc(), d(t.parenR)), ze(), e != null) {
      const n = r.tokens.length;
      r.scopes.push(new Ee(e, n, !1)), r.scopeDepth--;
    }
  }
  p(t._finally) && ze();
}
function Ot(e) {
  k(), cr(!1, e), W();
}
function $c() {
  k(), Yt(), fe(!1);
}
function Uc() {
  k();
}
function Hc() {
  fe(!0);
}
function Vc(e) {
  j ? Wi(e) : q ? rc(e) : W();
}
function ze(e = !1, n = 0) {
  const s = r.tokens.length;
  r.scopeDepth++, d(t.braceL), n && (r.tokens[r.tokens.length - 1].contextId = n), Kt(t.braceR), n && (r.tokens[r.tokens.length - 1].contextId = n);
  const o = r.tokens.length;
  r.scopes.push(new Ee(s, o, e)), r.scopeDepth--;
}
function Kt(e) {
  for (; !p(e) && !r.error; )
    fe(!0);
}
function Yn() {
  d(t.semi), a(t.semi) || te(), d(t.semi), a(t.parenR) || te(), d(t.parenR), fe(!1);
}
function rs(e) {
  e ? Z(l._of) : k(), te(), d(t.parenR), fe(!1);
}
function cr(e, n) {
  for (; ; ) {
    if (Wc(n), p(t.eq)) {
      const s = r.tokens.length - 1;
      ne(e), r.tokens[s].rhsEndIndex = r.tokens.length;
    }
    if (!p(t.comma))
      break;
  }
}
function Wc(e) {
  zt(e), j ? Qi() : q && kc();
}
function tt(e, n, s = !1) {
  a(t.star) && k(), n && !s && !a(t.name) && !a(t._yield) && D();
  let o = null;
  a(t.name) && (n || (o = r.tokens.length, r.scopeDepth++), Je(!1));
  const i = r.tokens.length;
  r.scopeDepth++, ht(), Ys(e);
  const c = r.tokens.length;
  r.scopes.push(new Ee(i, c, !0)), r.scopeDepth--, o !== null && (r.scopes.push(new Ee(o, c, !0)), r.scopeDepth--);
}
function ht(e = !1, n = 0) {
  j ? Ji() : q && dc(), d(t.parenL), n && (r.tokens[r.tokens.length - 1].contextId = n), d1(
    t.parenR,
    !1,
    !1,
    e,
    n
  ), n && (r.tokens[r.tokens.length - 1].contextId = n);
}
function nt(e, n = !1) {
  const s = xt();
  k(), r.tokens[r.tokens.length - 1].contextId = s, r.tokens[r.tokens.length - 1].isExpression = !e;
  let o = null;
  e || (o = r.tokens.length, r.scopeDepth++), Jc(e, n), Qc();
  const i = r.tokens.length;
  if (Xc(s), !r.error && (r.tokens[i].contextId = s, r.tokens[r.tokens.length - 1].contextId = s, o !== null)) {
    const c = r.tokens.length;
    r.scopes.push(new Ee(o, c, !1)), r.scopeDepth--;
  }
}
function lr() {
  return a(t.eq) || a(t.semi) || a(t.braceR) || a(t.bang) || a(t.colon);
}
function ur() {
  return a(t.parenL) || a(t.lessThan);
}
function Xc(e) {
  for (d(t.braceL); !p(t.braceR) && !r.error; ) {
    if (p(t.semi))
      continue;
    if (a(t.at)) {
      ir();
      continue;
    }
    const n = r.start;
    Gc(n, e);
  }
}
function Gc(e, n) {
  j && k1([
    l._declare,
    l._public,
    l._protected,
    l._private,
    l._override
  ]);
  let s = !1;
  if (a(t.name) && r.contextualKeyword === l._static) {
    if (N(), ur()) {
      kt(
        e,
        /* isConstructor */
        !1
      );
      return;
    } else if (lr()) {
      Ft();
      return;
    }
    if (r.tokens[r.tokens.length - 1].type = t._static, s = !0, a(t.braceL)) {
      r.tokens[r.tokens.length - 1].contextId = n, ze();
      return;
    }
  }
  zc(e, s, n);
}
function zc(e, n, s) {
  if (j && Vi(n))
    return;
  if (p(t.star)) {
    dt(s), kt(
      e,
      /* isConstructor */
      !1
    );
    return;
  }
  dt(s);
  let o = !1;
  const i = r.tokens[r.tokens.length - 1];
  i.contextualKeyword === l._constructor && (o = !0), os(), ur() ? kt(e, o) : lr() ? Ft() : i.contextualKeyword === l._async && !Te() ? (r.tokens[r.tokens.length - 1].type = t._async, a(t.star) && k(), dt(s), os(), kt(
    e,
    !1
    /* isConstructor */
  )) : (i.contextualKeyword === l._get || i.contextualKeyword === l._set) && !(Te() && a(t.star)) ? (i.contextualKeyword === l._get ? r.tokens[r.tokens.length - 1].type = t._get : r.tokens[r.tokens.length - 1].type = t._set, dt(s), kt(
    e,
    /* isConstructor */
    !1
  )) : i.contextualKeyword === l._accessor && !Te() ? (dt(s), Ft()) : Te() ? Ft() : D();
}
function kt(e, n) {
  j ? st() : q && a(t.lessThan) && xe(), a1(e, n);
}
function dt(e) {
  bt(e);
}
function os() {
  if (j) {
    const e = F(0);
    p(t.question), O(e);
  }
}
function Ft() {
  if (j ? (ks(t.bang), lt()) : q && a(t.colon) && rt(), a(t.eq)) {
    const e = r.tokens.length;
    k(), ne(), r.tokens[e].rhsEndIndex = r.tokens.length;
  }
  W();
}
function Jc(e, n = !1) {
  j && (!e || n) && E(l._implements) || (a(t.name) && Je(!0), j ? st() : q && a(t.lessThan) && xe());
}
function Qc() {
  let e = !1;
  p(t._extends) ? (Gs(), e = !0) : e = !1, j ? Gi(e) : q && uc(e);
}
function hr() {
  const e = r.tokens.length - 1;
  j && qi() || (el() ? tl() : Kc() ? (N(), a(t.comma) && G() === t.star ? (d(t.comma), d(t.star), Y(l._as), N()) : pr(), Tt()) : p(t._default) ? Yc() : sl() ? Zc() : (F1(), Tt()), r.tokens[e].rhsEndIndex = r.tokens.length);
}
function Yc() {
  if (j && Ui() || q && sc())
    return;
  const e = r.start;
  p(t._function) ? tt(e, !0, !0) : E(l._async) && G() === t._function ? (Z(l._async), p(t._function), tt(e, !0, !0)) : a(t._class) ? nt(!0, !0) : a(t.at) ? (O1(), nt(!0, !0)) : (ne(), W());
}
function Zc() {
  j ? Xi() : q ? ac() : fe(!0);
}
function Kc() {
  if (j && $s())
    return !1;
  if (q && ic())
    return !1;
  if (a(t.name))
    return r.contextualKeyword !== l._async;
  if (!a(t._default))
    return !1;
  const e = p1(), n = Et(), s = n.type === t.name && n.contextualKeyword === l._from;
  if (n.type === t.comma)
    return !0;
  if (s) {
    const o = b.charCodeAt(_s(e + 4));
    return o === u.quotationMark || o === u.apostrophe;
  }
  return !1;
}
function pr() {
  p(t.comma) && F1();
}
function Tt() {
  Z(l._from) && (Oe(), mr()), W();
}
function el() {
  return q ? cc() : a(t.star);
}
function tl() {
  q ? lc() : u1();
}
function u1() {
  d(t.star), E(l._as) ? nl() : Tt();
}
function nl() {
  k(), r.tokens[r.tokens.length - 1].type = t._as, N(), pr(), Tt();
}
function sl() {
  return j && $s() || q && oc() || r.type === t._var || r.type === t._const || r.type === t._let || r.type === t._function || r.type === t._class || E(l._async) || a(t.at);
}
function F1() {
  let e = !0;
  for (d(t.braceL); !p(t.braceR) && !r.error; ) {
    if (e)
      e = !1;
    else if (d(t.comma), p(t.braceR))
      break;
    rl();
  }
}
function rl() {
  if (j) {
    $i();
    return;
  }
  N(), r.tokens[r.tokens.length - 1].identifierRole = v.ExportAccess, Z(l._as) && N();
}
function ol() {
  const e = r.snapshot();
  return Y(l._module), Z(l._from) ? E(l._from) ? (r.restoreFromSnapshot(e), !0) : (r.restoreFromSnapshot(e), !1) : a(t.comma) ? (r.restoreFromSnapshot(e), !1) : (r.restoreFromSnapshot(e), !0);
}
function il() {
  E(l._module) && ol() && k();
}
function fr() {
  if (j && a(t.name) && G() === t.eq) {
    r1();
    return;
  }
  if (j && E(l._type)) {
    const e = Et();
    if (e.type === t.name && e.contextualKeyword !== l._from) {
      if (Y(l._type), G() === t.eq) {
        r1();
        return;
      }
    } else (e.type === t.star || e.type === t.braceL) && Y(l._type);
  }
  a(t.string) || (il(), cl(), Y(l._from)), Oe(), mr(), W();
}
function al() {
  return a(t.name);
}
function is() {
  Mt();
}
function cl() {
  q && fc();
  let e = !0;
  if (!(al() && (is(), !p(t.comma)))) {
    if (a(t.star)) {
      k(), Y(l._as), is();
      return;
    }
    for (d(t.braceL); !p(t.braceR) && !r.error; ) {
      if (e)
        e = !1;
      else if (p(t.colon) && D(
        "ES2015 named imports do not destructure. Use another statement for destructuring after the import."
      ), d(t.comma), p(t.braceR))
        break;
      ll();
    }
  }
}
function ll() {
  if (j) {
    Bi();
    return;
  }
  if (q) {
    mc();
    return;
  }
  Mt(), E(l._as) && (r.tokens[r.tokens.length - 1].identifierRole = v.ImportAccess, k(), Mt());
}
function mr() {
  (a(t._with) || E(l._assert) && !ae()) && (k(), E1(!1, !1));
}
function ul() {
  return r.pos === 0 && b.charCodeAt(0) === u.numberSign && b.charCodeAt(1) === u.exclamationMark && ys(2), xs(), Ac();
}
class hl {
  constructor(n, s) {
    this.tokens = n, this.scopes = s;
  }
}
function pl(e, n, s, o) {
  if (o && s)
    throw new Error("Cannot combine flow and typescript plugins.");
  Ur(e, n, s, o);
  const i = ul();
  if (r.error)
    throw qr(r.error);
  return i;
}
function fl(e) {
  let n = e.currentIndex(), s = 0;
  const o = e.currentToken();
  do {
    const i = e.tokens[n];
    if (i.isOptionalChainStart && s++, i.isOptionalChainEnd && s--, s += i.numNullishCoalesceStarts, s -= i.numNullishCoalesceEnds, i.contextualKeyword === l._await && i.identifierRole == null && i.scopeDepth === o.scopeDepth)
      return !0;
    n += 1;
  } while (s > 0 && n < e.tokens.length);
  return !1;
}
class _t {
  __init() {
    this.resultCode = "";
  }
  // Array mapping input token index to optional string index position in the
  // output code.
  __init2() {
    this.resultMappings = new Array(this.tokens.length);
  }
  __init3() {
    this.tokenIndex = 0;
  }
  constructor(n, s, o, i, c) {
    this.code = n, this.tokens = s, this.isFlowEnabled = o, this.disableESTransforms = i, this.helperManager = c, _t.prototype.__init.call(this), _t.prototype.__init2.call(this), _t.prototype.__init3.call(this);
  }
  /**
   * Snapshot the token state in a way that can be restored later, useful for
   * things like lookahead.
   *
   * resultMappings do not need to be copied since in all use cases, they will
   * be overwritten anyway after restore.
   */
  snapshot() {
    return {
      resultCode: this.resultCode,
      tokenIndex: this.tokenIndex
    };
  }
  restoreToSnapshot(n) {
    this.resultCode = n.resultCode, this.tokenIndex = n.tokenIndex;
  }
  /**
   * Remove and return the code generated since the snapshot, leaving the
   * current token position in-place. Unlike most TokenProcessor operations,
   * this operation can result in input/output line number mismatches because
   * the removed code may contain newlines, so this operation should be used
   * sparingly.
   */
  dangerouslyGetAndRemoveCodeSinceSnapshot(n) {
    const s = this.resultCode.slice(n.resultCode.length);
    return this.resultCode = n.resultCode, s;
  }
  reset() {
    this.resultCode = "", this.resultMappings = new Array(this.tokens.length), this.tokenIndex = 0;
  }
  matchesContextualAtIndex(n, s) {
    return this.matches1AtIndex(n, t.name) && this.tokens[n].contextualKeyword === s;
  }
  identifierNameAtIndex(n) {
    return this.identifierNameForToken(this.tokens[n]);
  }
  identifierNameAtRelativeIndex(n) {
    return this.identifierNameForToken(this.tokenAtRelativeIndex(n));
  }
  identifierName() {
    return this.identifierNameForToken(this.currentToken());
  }
  identifierNameForToken(n) {
    return this.code.slice(n.start, n.end);
  }
  rawCodeForToken(n) {
    return this.code.slice(n.start, n.end);
  }
  stringValueAtIndex(n) {
    return this.stringValueForToken(this.tokens[n]);
  }
  stringValue() {
    return this.stringValueForToken(this.currentToken());
  }
  stringValueForToken(n) {
    return this.code.slice(n.start + 1, n.end - 1);
  }
  matches1AtIndex(n, s) {
    return this.tokens[n].type === s;
  }
  matches2AtIndex(n, s, o) {
    return this.tokens[n].type === s && this.tokens[n + 1].type === o;
  }
  matches3AtIndex(n, s, o, i) {
    return this.tokens[n].type === s && this.tokens[n + 1].type === o && this.tokens[n + 2].type === i;
  }
  matches1(n) {
    return this.tokens[this.tokenIndex].type === n;
  }
  matches2(n, s) {
    return this.tokens[this.tokenIndex].type === n && this.tokens[this.tokenIndex + 1].type === s;
  }
  matches3(n, s, o) {
    return this.tokens[this.tokenIndex].type === n && this.tokens[this.tokenIndex + 1].type === s && this.tokens[this.tokenIndex + 2].type === o;
  }
  matches4(n, s, o, i) {
    return this.tokens[this.tokenIndex].type === n && this.tokens[this.tokenIndex + 1].type === s && this.tokens[this.tokenIndex + 2].type === o && this.tokens[this.tokenIndex + 3].type === i;
  }
  matches5(n, s, o, i, c) {
    return this.tokens[this.tokenIndex].type === n && this.tokens[this.tokenIndex + 1].type === s && this.tokens[this.tokenIndex + 2].type === o && this.tokens[this.tokenIndex + 3].type === i && this.tokens[this.tokenIndex + 4].type === c;
  }
  matchesContextual(n) {
    return this.matchesContextualAtIndex(this.tokenIndex, n);
  }
  matchesContextIdAndLabel(n, s) {
    return this.matches1(n) && this.currentToken().contextId === s;
  }
  previousWhitespaceAndComments() {
    let n = this.code.slice(
      this.tokenIndex > 0 ? this.tokens[this.tokenIndex - 1].end : 0,
      this.tokenIndex < this.tokens.length ? this.tokens[this.tokenIndex].start : this.code.length
    );
    return this.isFlowEnabled && (n = n.replace(/@flow/g, "")), n;
  }
  replaceToken(n) {
    this.resultCode += this.previousWhitespaceAndComments(), this.appendTokenPrefix(), this.resultMappings[this.tokenIndex] = this.resultCode.length, this.resultCode += n, this.appendTokenSuffix(), this.tokenIndex++;
  }
  replaceTokenTrimmingLeftWhitespace(n) {
    this.resultCode += this.previousWhitespaceAndComments().replace(/[^\r\n]/g, ""), this.appendTokenPrefix(), this.resultMappings[this.tokenIndex] = this.resultCode.length, this.resultCode += n, this.appendTokenSuffix(), this.tokenIndex++;
  }
  removeInitialToken() {
    this.replaceToken("");
  }
  removeToken() {
    this.replaceTokenTrimmingLeftWhitespace("");
  }
  /**
   * Remove all code until the next }, accounting for balanced braces.
   */
  removeBalancedCode() {
    let n = 0;
    for (; !this.isAtEnd(); ) {
      if (this.matches1(t.braceL))
        n++;
      else if (this.matches1(t.braceR)) {
        if (n === 0)
          return;
        n--;
      }
      this.removeToken();
    }
  }
  copyExpectedToken(n) {
    if (this.tokens[this.tokenIndex].type !== n)
      throw new Error(`Expected token ${n}`);
    this.copyToken();
  }
  copyToken() {
    this.resultCode += this.previousWhitespaceAndComments(), this.appendTokenPrefix(), this.resultMappings[this.tokenIndex] = this.resultCode.length, this.resultCode += this.code.slice(
      this.tokens[this.tokenIndex].start,
      this.tokens[this.tokenIndex].end
    ), this.appendTokenSuffix(), this.tokenIndex++;
  }
  copyTokenWithPrefix(n) {
    this.resultCode += this.previousWhitespaceAndComments(), this.appendTokenPrefix(), this.resultCode += n, this.resultMappings[this.tokenIndex] = this.resultCode.length, this.resultCode += this.code.slice(
      this.tokens[this.tokenIndex].start,
      this.tokens[this.tokenIndex].end
    ), this.appendTokenSuffix(), this.tokenIndex++;
  }
  appendTokenPrefix() {
    const n = this.currentToken();
    if ((n.numNullishCoalesceStarts || n.isOptionalChainStart) && (n.isAsyncOperation = fl(this)), !this.disableESTransforms) {
      if (n.numNullishCoalesceStarts)
        for (let s = 0; s < n.numNullishCoalesceStarts; s++)
          n.isAsyncOperation ? (this.resultCode += "await ", this.resultCode += this.helperManager.getHelperName("asyncNullishCoalesce")) : this.resultCode += this.helperManager.getHelperName("nullishCoalesce"), this.resultCode += "(";
      n.isOptionalChainStart && (n.isAsyncOperation && (this.resultCode += "await "), this.tokenIndex > 0 && this.tokenAtRelativeIndex(-1).type === t._delete ? n.isAsyncOperation ? this.resultCode += this.helperManager.getHelperName("asyncOptionalChainDelete") : this.resultCode += this.helperManager.getHelperName("optionalChainDelete") : n.isAsyncOperation ? this.resultCode += this.helperManager.getHelperName("asyncOptionalChain") : this.resultCode += this.helperManager.getHelperName("optionalChain"), this.resultCode += "([");
    }
  }
  appendTokenSuffix() {
    const n = this.currentToken();
    if (n.isOptionalChainEnd && !this.disableESTransforms && (this.resultCode += "])"), n.numNullishCoalesceEnds && !this.disableESTransforms)
      for (let s = 0; s < n.numNullishCoalesceEnds; s++)
        this.resultCode += "))";
  }
  appendCode(n) {
    this.resultCode += n;
  }
  currentToken() {
    return this.tokens[this.tokenIndex];
  }
  currentTokenCode() {
    const n = this.currentToken();
    return this.code.slice(n.start, n.end);
  }
  tokenAtRelativeIndex(n) {
    return this.tokens[this.tokenIndex + n];
  }
  currentIndex() {
    return this.tokenIndex;
  }
  /**
   * Move to the next token. Only suitable in preprocessing steps. When
   * generating new code, you should use copyToken or removeToken.
   */
  nextToken() {
    if (this.tokenIndex === this.tokens.length)
      throw new Error("Unexpectedly reached end of input.");
    this.tokenIndex++;
  }
  previousToken() {
    this.tokenIndex--;
  }
  finish() {
    if (this.tokenIndex !== this.tokens.length)
      throw new Error("Tried to finish processing tokens before reaching the end.");
    return this.resultCode += this.previousWhitespaceAndComments(), { code: this.resultCode, mappings: this.resultMappings };
  }
  isAtEnd() {
    return this.tokenIndex === this.tokens.length;
  }
}
function ml(e, n, s, o) {
  const i = n.snapshot(), c = dl(n);
  let h = [];
  const m = [], g = [];
  let f = null;
  const y = [], T = [], S = n.currentToken().contextId;
  if (S == null)
    throw new Error("Expected non-null class context ID on class open-brace.");
  for (n.nextToken(); !n.matchesContextIdAndLabel(t.braceR, S); )
    if (n.matchesContextual(l._constructor) && !n.currentToken().isType)
      ({ constructorInitializerStatements: h, constructorInsertPos: f } = as(n));
    else if (n.matches1(t.semi))
      o || T.push({ start: n.currentIndex(), end: n.currentIndex() + 1 }), n.nextToken();
    else if (n.currentToken().isType)
      n.nextToken();
    else {
      const P = n.currentIndex();
      let B = !1, U = !1, K = !1;
      for (; Vt(n.currentToken()); )
        n.matches1(t._static) && (B = !0), n.matches1(t.hash) && (U = !0), (n.matches1(t._declare) || n.matches1(t._abstract)) && (K = !0), n.nextToken();
      if (B && n.matches1(t.braceL)) {
        Zn(n, S);
        continue;
      }
      if (U) {
        Zn(n, S);
        continue;
      }
      if (n.matchesContextual(l._constructor) && !n.currentToken().isType) {
        ({ constructorInitializerStatements: h, constructorInsertPos: f } = as(n));
        continue;
      }
      const se = n.currentIndex();
      if (kl(n), n.matches1(t.lessThan) || n.matches1(t.parenL)) {
        Zn(n, S);
        continue;
      }
      for (; n.currentToken().isType; )
        n.nextToken();
      if (n.matches1(t.eq)) {
        const ye = n.currentIndex(), he = n.currentToken().rhsEndIndex;
        if (he == null)
          throw new Error("Expected rhsEndIndex on class field assignment.");
        for (n.nextToken(); n.currentIndex() < he; )
          e.processToken();
        let ce;
        B ? (ce = s.claimFreeName("__initStatic"), g.push(ce)) : (ce = s.claimFreeName("__init"), m.push(ce)), y.push({
          initializerName: ce,
          equalsIndex: ye,
          start: se,
          end: n.currentIndex()
        });
      } else (!o || K) && T.push({ start: P, end: n.currentIndex() });
    }
  return n.restoreToSnapshot(i), o ? {
    headerInfo: c,
    constructorInitializerStatements: h,
    instanceInitializerNames: [],
    staticInitializerNames: [],
    constructorInsertPos: f,
    fields: [],
    rangesToRemove: T
  } : {
    headerInfo: c,
    constructorInitializerStatements: h,
    instanceInitializerNames: m,
    staticInitializerNames: g,
    constructorInsertPos: f,
    fields: y,
    rangesToRemove: T
  };
}
function Zn(e, n) {
  for (e.nextToken(); e.currentToken().contextId !== n; )
    e.nextToken();
  for (; Vt(e.tokenAtRelativeIndex(-1)); )
    e.previousToken();
}
function dl(e) {
  const n = e.currentToken(), s = n.contextId;
  if (s == null)
    throw new Error("Expected context ID on class token.");
  const o = n.isExpression;
  if (o == null)
    throw new Error("Expected isExpression on class token.");
  let i = null, c = !1;
  for (e.nextToken(), e.matches1(t.name) && (i = e.identifierName()); !e.matchesContextIdAndLabel(t.braceL, s); )
    e.matches1(t._extends) && !e.currentToken().isType && (c = !0), e.nextToken();
  return { isExpression: o, className: i, hasSuperclass: c };
}
function as(e) {
  const n = [];
  e.nextToken();
  const s = e.currentToken().contextId;
  if (s == null)
    throw new Error("Expected context ID on open-paren starting constructor params.");
  for (; !e.matchesContextIdAndLabel(t.parenR, s); )
    if (e.currentToken().contextId === s) {
      if (e.nextToken(), Vt(e.currentToken())) {
        for (e.nextToken(); Vt(e.currentToken()); )
          e.nextToken();
        const c = e.currentToken();
        if (c.type !== t.name)
          throw new Error("Expected identifier after access modifiers in constructor arg.");
        const h = e.identifierNameForToken(c);
        n.push(`this.${h} = ${h}`);
      }
    } else
      e.nextToken();
  for (e.nextToken(); e.currentToken().isType; )
    e.nextToken();
  let o = e.currentIndex(), i = !1;
  for (; !e.matchesContextIdAndLabel(t.braceR, s); ) {
    if (!i && e.matches2(t._super, t.parenL)) {
      e.nextToken();
      const c = e.currentToken().contextId;
      if (c == null)
        throw new Error("Expected a context ID on the super call");
      for (; !e.matchesContextIdAndLabel(t.parenR, c); )
        e.nextToken();
      o = e.currentIndex(), i = !0;
    }
    e.nextToken();
  }
  return e.nextToken(), { constructorInitializerStatements: n, constructorInsertPos: o };
}
function Vt(e) {
  return [
    t._async,
    t._get,
    t._set,
    t.plus,
    t.minus,
    t._readonly,
    t._static,
    t._public,
    t._private,
    t._protected,
    t._override,
    t._abstract,
    t.star,
    t._declare,
    t.hash
  ].includes(e.type);
}
function kl(e) {
  if (e.matches1(t.bracketL)) {
    const s = e.currentToken().contextId;
    if (s == null)
      throw new Error("Expected class context ID on computed name open bracket.");
    for (; !e.matchesContextIdAndLabel(t.bracketR, s); )
      e.nextToken();
    e.nextToken();
  } else
    e.nextToken();
}
function dr(e) {
  if (e.removeInitialToken(), e.removeToken(), e.removeToken(), e.removeToken(), e.matches1(t.parenL))
    e.removeToken(), e.removeToken(), e.removeToken();
  else
    for (; e.matches1(t.dot); )
      e.removeToken(), e.removeToken();
}
const kr = {
  typeDeclarations: /* @__PURE__ */ new Set(),
  valueDeclarations: /* @__PURE__ */ new Set()
};
function _r(e) {
  const n = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set();
  for (let o = 0; o < e.tokens.length; o++) {
    const i = e.tokens[o];
    i.type === t.name && ds(i) && (i.isType ? n.add(e.identifierNameForToken(i)) : s.add(e.identifierNameForToken(i)));
  }
  return { typeDeclarations: n, valueDeclarations: s };
}
function gr(e) {
  let n = e.currentIndex();
  for (; !e.matches1AtIndex(n, t.braceR); )
    n++;
  return e.matchesContextualAtIndex(n + 1, l._from) && e.matches1AtIndex(n + 2, t.string);
}
function Ke(e) {
  (e.matches2(t._with, t.braceL) || e.matches2(t.name, t.braceL) && e.matchesContextual(l._assert)) && (e.removeToken(), e.removeToken(), e.removeBalancedCode(), e.removeToken());
}
function xr(e, n, s, o) {
  if (!e || n)
    return !1;
  const i = s.currentToken();
  if (i.rhsEndIndex == null)
    throw new Error("Expected non-null rhsEndIndex on export token.");
  const c = i.rhsEndIndex - s.currentIndex();
  if (c !== 3 && !(c === 4 && s.matches1AtIndex(i.rhsEndIndex - 1, t.semi)))
    return !1;
  const h = s.tokenAtRelativeIndex(2);
  if (h.type !== t.name)
    return !1;
  const m = s.identifierNameForToken(h);
  return o.typeDeclarations.has(m) && !o.valueDeclarations.has(m);
}
class gt extends ge {
  __init() {
    this.hadExport = !1;
  }
  __init2() {
    this.hadNamedExport = !1;
  }
  __init3() {
    this.hadDefaultExport = !1;
  }
  constructor(n, s, o, i, c, h, m, g, f, y, T, S) {
    super(), this.rootTransformer = n, this.tokens = s, this.importProcessor = o, this.nameManager = i, this.helperManager = c, this.reactHotLoaderTransformer = h, this.enableLegacyBabel5ModuleInterop = m, this.enableLegacyTypeScriptModuleInterop = g, this.isTypeScriptTransformEnabled = f, this.isFlowTransformEnabled = y, this.preserveDynamicImport = T, this.keepUnusedImports = S, gt.prototype.__init.call(this), gt.prototype.__init2.call(this), gt.prototype.__init3.call(this), this.declarationInfo = f ? _r(s) : kr;
  }
  getPrefixCode() {
    let n = "";
    return this.hadExport && (n += 'Object.defineProperty(exports, "__esModule", {value: true});'), n;
  }
  getSuffixCode() {
    return this.enableLegacyBabel5ModuleInterop && this.hadDefaultExport && !this.hadNamedExport ? `
module.exports = exports.default;
` : "";
  }
  process() {
    return this.tokens.matches3(t._import, t.name, t.eq) ? this.processImportEquals() : this.tokens.matches1(t._import) ? (this.processImport(), !0) : this.tokens.matches2(t._export, t.eq) ? (this.tokens.replaceToken("module.exports"), !0) : this.tokens.matches1(t._export) && !this.tokens.currentToken().isType ? (this.hadExport = !0, this.processExport()) : this.tokens.matches2(t.name, t.postIncDec) && this.processPostIncDec() ? !0 : this.tokens.matches1(t.name) || this.tokens.matches1(t.jsxName) ? this.processIdentifier() : this.tokens.matches1(t.eq) ? this.processAssignment() : this.tokens.matches1(t.assign) ? this.processComplexAssignment() : this.tokens.matches1(t.preIncDec) ? this.processPreIncDec() : !1;
  }
  processImportEquals() {
    const n = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
    return this.importProcessor.shouldAutomaticallyElideImportedName(n) ? dr(this.tokens) : this.tokens.replaceToken("const"), !0;
  }
  /**
   * Transform this:
   * import foo, {bar} from 'baz';
   * into
   * var _baz = require('baz'); var _baz2 = _interopRequireDefault(_baz);
   *
   * The import code was already generated in the import preprocessing step, so
   * we just need to look it up.
   */
  processImport() {
    if (this.tokens.matches2(t._import, t.parenL)) {
      if (this.preserveDynamicImport) {
        this.tokens.copyToken();
        return;
      }
      const s = this.enableLegacyTypeScriptModuleInterop ? "" : `${this.helperManager.getHelperName("interopRequireWildcard")}(`;
      this.tokens.replaceToken(`Promise.resolve().then(() => ${s}require`);
      const o = this.tokens.currentToken().contextId;
      if (o == null)
        throw new Error("Expected context ID on dynamic import invocation.");
      for (this.tokens.copyToken(); !this.tokens.matchesContextIdAndLabel(t.parenR, o); )
        this.rootTransformer.processToken();
      this.tokens.replaceToken(s ? ")))" : "))");
      return;
    }
    if (this.removeImportAndDetectIfShouldElide())
      this.tokens.removeToken();
    else {
      const s = this.tokens.stringValue();
      this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(s)), this.tokens.appendCode(this.importProcessor.claimImportCode(s));
    }
    Ke(this.tokens), this.tokens.matches1(t.semi) && this.tokens.removeToken();
  }
  /**
   * Erase this import (since any CJS output would be completely different), and
   * return true if this import is should be elided due to being a type-only
   * import. Such imports will not be emitted at all to avoid side effects.
   *
   * Import elision only happens with the TypeScript or Flow transforms enabled.
   *
   * TODO: This function has some awkward overlap with
   *  CJSImportProcessor.pruneTypeOnlyImports , and the two should be unified.
   *  That function handles TypeScript implicit import name elision, and removes
   *  an import if all typical imported names (without `type`) are removed due
   *  to being type-only imports. This function handles Flow import removal and
   *  properly distinguishes `import 'foo'` from `import {} from 'foo'` for TS
   *  purposes.
   *
   * The position should end at the import string.
   */
  removeImportAndDetectIfShouldElide() {
    if (this.tokens.removeInitialToken(), this.tokens.matchesContextual(l._type) && !this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, t.comma) && !this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, l._from))
      return this.removeRemainingImport(), !0;
    if (this.tokens.matches1(t.name) || this.tokens.matches1(t.star))
      return this.removeRemainingImport(), !1;
    if (this.tokens.matches1(t.string))
      return !1;
    let n = !1, s = !1;
    for (; !this.tokens.matches1(t.string); )
      (!n && this.tokens.matches1(t.braceL) || this.tokens.matches1(t.comma)) && (this.tokens.removeToken(), this.tokens.matches1(t.braceR) || (s = !0), (this.tokens.matches2(t.name, t.comma) || this.tokens.matches2(t.name, t.braceR) || this.tokens.matches4(t.name, t.name, t.name, t.comma) || this.tokens.matches4(t.name, t.name, t.name, t.braceR)) && (n = !0)), this.tokens.removeToken();
    return this.keepUnusedImports ? !1 : this.isTypeScriptTransformEnabled ? !n : this.isFlowTransformEnabled ? s && !n : !1;
  }
  removeRemainingImport() {
    for (; !this.tokens.matches1(t.string); )
      this.tokens.removeToken();
  }
  processIdentifier() {
    const n = this.tokens.currentToken();
    if (n.shadowsGlobal)
      return !1;
    if (n.identifierRole === v.ObjectShorthand)
      return this.processObjectShorthand();
    if (n.identifierRole !== v.Access)
      return !1;
    const s = this.importProcessor.getIdentifierReplacement(
      this.tokens.identifierNameForToken(n)
    );
    if (!s)
      return !1;
    let o = this.tokens.currentIndex() + 1;
    for (; o < this.tokens.tokens.length && this.tokens.tokens[o].type === t.parenR; )
      o++;
    return this.tokens.tokens[o].type === t.parenL ? this.tokens.tokenAtRelativeIndex(1).type === t.parenL && this.tokens.tokenAtRelativeIndex(-1).type !== t._new ? (this.tokens.replaceToken(`${s}.call(void 0, `), this.tokens.removeToken(), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(t.parenR)) : this.tokens.replaceToken(`(0, ${s})`) : this.tokens.replaceToken(s), !0;
  }
  processObjectShorthand() {
    const n = this.tokens.identifierName(), s = this.importProcessor.getIdentifierReplacement(n);
    return s ? (this.tokens.replaceToken(`${n}: ${s}`), !0) : !1;
  }
  processExport() {
    if (this.tokens.matches2(t._export, t._enum) || this.tokens.matches3(t._export, t._const, t._enum))
      return this.hadNamedExport = !0, !1;
    if (this.tokens.matches2(t._export, t._default))
      return this.tokens.matches3(t._export, t._default, t._enum) ? (this.hadDefaultExport = !0, !1) : (this.processExportDefault(), !0);
    if (this.tokens.matches2(t._export, t.braceL))
      return this.processExportBindings(), !0;
    if (this.tokens.matches2(t._export, t.name) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, l._type)) {
      if (this.tokens.removeInitialToken(), this.tokens.removeToken(), this.tokens.matches1(t.braceL)) {
        for (; !this.tokens.matches1(t.braceR); )
          this.tokens.removeToken();
        this.tokens.removeToken();
      } else
        this.tokens.removeToken(), this.tokens.matches1(t._as) && (this.tokens.removeToken(), this.tokens.removeToken());
      return this.tokens.matchesContextual(l._from) && this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, t.string) && (this.tokens.removeToken(), this.tokens.removeToken(), Ke(this.tokens)), !0;
    }
    if (this.hadNamedExport = !0, this.tokens.matches2(t._export, t._var) || this.tokens.matches2(t._export, t._let) || this.tokens.matches2(t._export, t._const))
      return this.processExportVar(), !0;
    if (this.tokens.matches2(t._export, t._function) || // export async function
    this.tokens.matches3(t._export, t.name, t._function))
      return this.processExportFunction(), !0;
    if (this.tokens.matches2(t._export, t._class) || this.tokens.matches3(t._export, t._abstract, t._class) || this.tokens.matches2(t._export, t.at))
      return this.processExportClass(), !0;
    if (this.tokens.matches2(t._export, t.star))
      return this.processExportStar(), !0;
    throw new Error("Unrecognized export syntax.");
  }
  processAssignment() {
    const n = this.tokens.currentIndex(), s = this.tokens.tokens[n - 1];
    if (s.isType || s.type !== t.name || s.shadowsGlobal || n >= 2 && this.tokens.matches1AtIndex(n - 2, t.dot) || n >= 2 && [t._var, t._let, t._const].includes(this.tokens.tokens[n - 2].type))
      return !1;
    const o = this.importProcessor.resolveExportBinding(
      this.tokens.identifierNameForToken(s)
    );
    return o ? (this.tokens.copyToken(), this.tokens.appendCode(` ${o} =`), !0) : !1;
  }
  /**
   * Process something like `a += 3`, where `a` might be an exported value.
   */
  processComplexAssignment() {
    const n = this.tokens.currentIndex(), s = this.tokens.tokens[n - 1];
    if (s.type !== t.name || s.shadowsGlobal || n >= 2 && this.tokens.matches1AtIndex(n - 2, t.dot))
      return !1;
    const o = this.importProcessor.resolveExportBinding(
      this.tokens.identifierNameForToken(s)
    );
    return o ? (this.tokens.appendCode(` = ${o}`), this.tokens.copyToken(), !0) : !1;
  }
  /**
   * Process something like `++a`, where `a` might be an exported value.
   */
  processPreIncDec() {
    const n = this.tokens.currentIndex(), s = this.tokens.tokens[n + 1];
    if (s.type !== t.name || s.shadowsGlobal || n + 2 < this.tokens.tokens.length && (this.tokens.matches1AtIndex(n + 2, t.dot) || this.tokens.matches1AtIndex(n + 2, t.bracketL) || this.tokens.matches1AtIndex(n + 2, t.parenL)))
      return !1;
    const o = this.tokens.identifierNameForToken(s), i = this.importProcessor.resolveExportBinding(o);
    return i ? (this.tokens.appendCode(`${i} = `), this.tokens.copyToken(), !0) : !1;
  }
  /**
   * Process something like `a++`, where `a` might be an exported value.
   * This starts at the `a`, not at the `++`.
   */
  processPostIncDec() {
    const n = this.tokens.currentIndex(), s = this.tokens.tokens[n], o = this.tokens.tokens[n + 1];
    if (s.type !== t.name || s.shadowsGlobal || n >= 1 && this.tokens.matches1AtIndex(n - 1, t.dot))
      return !1;
    const i = this.tokens.identifierNameForToken(s), c = this.importProcessor.resolveExportBinding(i);
    if (!c)
      return !1;
    const h = this.tokens.rawCodeForToken(o), m = this.importProcessor.getIdentifierReplacement(i) || i;
    if (h === "++")
      this.tokens.replaceToken(`(${m} = ${c} = ${m} + 1, ${m} - 1)`);
    else if (h === "--")
      this.tokens.replaceToken(`(${m} = ${c} = ${m} - 1, ${m} + 1)`);
    else
      throw new Error(`Unexpected operator: ${h}`);
    return this.tokens.removeToken(), !0;
  }
  processExportDefault() {
    let n = !0;
    if (this.tokens.matches4(t._export, t._default, t._function, t.name) || // export default async function
    this.tokens.matches5(t._export, t._default, t.name, t._function, t.name) && this.tokens.matchesContextualAtIndex(
      this.tokens.currentIndex() + 2,
      l._async
    )) {
      this.tokens.removeInitialToken(), this.tokens.removeToken();
      const s = this.processNamedFunction();
      this.tokens.appendCode(` exports.default = ${s};`);
    } else if (this.tokens.matches4(t._export, t._default, t._class, t.name) || this.tokens.matches5(t._export, t._default, t._abstract, t._class, t.name) || this.tokens.matches3(t._export, t._default, t.at)) {
      this.tokens.removeInitialToken(), this.tokens.removeToken(), this.copyDecorators(), this.tokens.matches1(t._abstract) && this.tokens.removeToken();
      const s = this.rootTransformer.processNamedClass();
      this.tokens.appendCode(` exports.default = ${s};`);
    } else if (xr(
      this.isTypeScriptTransformEnabled,
      this.keepUnusedImports,
      this.tokens,
      this.declarationInfo
    ))
      n = !1, this.tokens.removeInitialToken(), this.tokens.removeToken(), this.tokens.removeToken();
    else if (this.reactHotLoaderTransformer) {
      const s = this.nameManager.claimFreeName("_default");
      this.tokens.replaceToken(`let ${s}; exports.`), this.tokens.copyToken(), this.tokens.appendCode(` = ${s} =`), this.reactHotLoaderTransformer.setExtractedDefaultExportName(s);
    } else
      this.tokens.replaceToken("exports."), this.tokens.copyToken(), this.tokens.appendCode(" =");
    n && (this.hadDefaultExport = !0);
  }
  copyDecorators() {
    for (; this.tokens.matches1(t.at); )
      if (this.tokens.copyToken(), this.tokens.matches1(t.parenL))
        this.tokens.copyExpectedToken(t.parenL), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(t.parenR);
      else {
        for (this.tokens.copyExpectedToken(t.name); this.tokens.matches1(t.dot); )
          this.tokens.copyExpectedToken(t.dot), this.tokens.copyExpectedToken(t.name);
        this.tokens.matches1(t.parenL) && (this.tokens.copyExpectedToken(t.parenL), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(t.parenR));
      }
  }
  /**
   * Transform a declaration like `export var`, `export let`, or `export const`.
   */
  processExportVar() {
    this.isSimpleExportVar() ? this.processSimpleExportVar() : this.processComplexExportVar();
  }
  /**
   * Determine if the export is of the form:
   * export var/let/const [varName] = [expr];
   * In other words, determine if function name inference might apply.
   */
  isSimpleExportVar() {
    let n = this.tokens.currentIndex();
    if (n++, n++, !this.tokens.matches1AtIndex(n, t.name))
      return !1;
    for (n++; n < this.tokens.tokens.length && this.tokens.tokens[n].isType; )
      n++;
    return !!this.tokens.matches1AtIndex(n, t.eq);
  }
  /**
   * Transform an `export var` declaration initializing a single variable.
   *
   * For example, this:
   * export const f = () => {};
   * becomes this:
   * const f = () => {}; exports.f = f;
   *
   * The variable is unused (e.g. exports.f has the true value of the export).
   * We need to produce an assignment of this form so that the function will
   * have an inferred name of "f", which wouldn't happen in the more general
   * case below.
   */
  processSimpleExportVar() {
    this.tokens.removeInitialToken(), this.tokens.copyToken();
    const n = this.tokens.identifierName();
    for (; !this.tokens.matches1(t.eq); )
      this.rootTransformer.processToken();
    const s = this.tokens.currentToken().rhsEndIndex;
    if (s == null)
      throw new Error("Expected = token with an end index.");
    for (; this.tokens.currentIndex() < s; )
      this.rootTransformer.processToken();
    this.tokens.appendCode(`; exports.${n} = ${n}`);
  }
  /**
   * Transform normal declaration exports, including handling destructuring.
   * For example, this:
   * export const {x: [a = 2, b], c} = d;
   * becomes this:
   * ({x: [exports.a = 2, exports.b], c: exports.c} = d;)
   */
  processComplexExportVar() {
    this.tokens.removeInitialToken(), this.tokens.removeToken();
    const n = this.tokens.matches1(t.braceL);
    n && this.tokens.appendCode("(");
    let s = 0;
    for (; ; )
      if (this.tokens.matches1(t.braceL) || this.tokens.matches1(t.dollarBraceL) || this.tokens.matches1(t.bracketL))
        s++, this.tokens.copyToken();
      else if (this.tokens.matches1(t.braceR) || this.tokens.matches1(t.bracketR))
        s--, this.tokens.copyToken();
      else {
        if (s === 0 && !this.tokens.matches1(t.name) && !this.tokens.currentToken().isType)
          break;
        if (this.tokens.matches1(t.eq)) {
          const o = this.tokens.currentToken().rhsEndIndex;
          if (o == null)
            throw new Error("Expected = token with an end index.");
          for (; this.tokens.currentIndex() < o; )
            this.rootTransformer.processToken();
        } else {
          const o = this.tokens.currentToken();
          if (ms(o)) {
            const i = this.tokens.identifierName();
            let c = this.importProcessor.getIdentifierReplacement(i);
            if (c === null)
              throw new Error(`Expected a replacement for ${i} in \`export var\` syntax.`);
            zr(o) && (c = `${i}: ${c}`), this.tokens.replaceToken(c);
          } else
            this.rootTransformer.processToken();
        }
      }
    if (n) {
      const o = this.tokens.currentToken().rhsEndIndex;
      if (o == null)
        throw new Error("Expected = token with an end index.");
      for (; this.tokens.currentIndex() < o; )
        this.rootTransformer.processToken();
      this.tokens.appendCode(")");
    }
  }
  /**
   * Transform this:
   * export function foo() {}
   * into this:
   * function foo() {} exports.foo = foo;
   */
  processExportFunction() {
    this.tokens.replaceToken("");
    const n = this.processNamedFunction();
    this.tokens.appendCode(` exports.${n} = ${n};`);
  }
  /**
   * Skip past a function with a name and return that name.
   */
  processNamedFunction() {
    if (this.tokens.matches1(t._function))
      this.tokens.copyToken();
    else if (this.tokens.matches2(t.name, t._function)) {
      if (!this.tokens.matchesContextual(l._async))
        throw new Error("Expected async keyword in function export.");
      this.tokens.copyToken(), this.tokens.copyToken();
    }
    if (this.tokens.matches1(t.star) && this.tokens.copyToken(), !this.tokens.matches1(t.name))
      throw new Error("Expected identifier for exported function name.");
    const n = this.tokens.identifierName();
    if (this.tokens.copyToken(), this.tokens.currentToken().isType)
      for (this.tokens.removeInitialToken(); this.tokens.currentToken().isType; )
        this.tokens.removeToken();
    return this.tokens.copyExpectedToken(t.parenL), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(t.parenR), this.rootTransformer.processPossibleTypeRange(), this.tokens.copyExpectedToken(t.braceL), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(t.braceR), n;
  }
  /**
   * Transform this:
   * export class A {}
   * into this:
   * class A {} exports.A = A;
   */
  processExportClass() {
    this.tokens.removeInitialToken(), this.copyDecorators(), this.tokens.matches1(t._abstract) && this.tokens.removeToken();
    const n = this.rootTransformer.processNamedClass();
    this.tokens.appendCode(` exports.${n} = ${n};`);
  }
  /**
   * Transform this:
   * export {a, b as c};
   * into this:
   * exports.a = a; exports.c = b;
   *
   * OR
   *
   * Transform this:
   * export {a, b as c} from './foo';
   * into the pre-generated Object.defineProperty code from the ImportProcessor.
   *
   * For the first case, if the TypeScript transform is enabled, we need to skip
   * exports that are only defined as types.
   */
  processExportBindings() {
    this.tokens.removeInitialToken(), this.tokens.removeToken();
    const n = gr(this.tokens), s = [];
    for (; ; ) {
      if (this.tokens.matches1(t.braceR)) {
        this.tokens.removeToken();
        break;
      }
      const o = yt(this.tokens);
      for (; this.tokens.currentIndex() < o.endIndex; )
        this.tokens.removeToken();
      if (!(o.isType || !n && this.shouldElideExportedIdentifier(o.leftName))) {
        const c = o.rightName;
        c === "default" ? this.hadDefaultExport = !0 : this.hadNamedExport = !0;
        const h = o.leftName, m = this.importProcessor.getIdentifierReplacement(h);
        s.push(`exports.${c} = ${m || h};`);
      }
      if (this.tokens.matches1(t.braceR)) {
        this.tokens.removeToken();
        break;
      }
      if (this.tokens.matches2(t.comma, t.braceR)) {
        this.tokens.removeToken(), this.tokens.removeToken();
        break;
      } else if (this.tokens.matches1(t.comma))
        this.tokens.removeToken();
      else
        throw new Error(`Unexpected token: ${JSON.stringify(this.tokens.currentToken())}`);
    }
    if (this.tokens.matchesContextual(l._from)) {
      this.tokens.removeToken();
      const o = this.tokens.stringValue();
      this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(o)), Ke(this.tokens);
    } else
      this.tokens.appendCode(s.join(" "));
    this.tokens.matches1(t.semi) && this.tokens.removeToken();
  }
  processExportStar() {
    for (this.tokens.removeInitialToken(); !this.tokens.matches1(t.string); )
      this.tokens.removeToken();
    const n = this.tokens.stringValue();
    this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(n)), Ke(this.tokens), this.tokens.matches1(t.semi) && this.tokens.removeToken();
  }
  shouldElideExportedIdentifier(n) {
    return this.isTypeScriptTransformEnabled && !this.keepUnusedImports && !this.declarationInfo.valueDeclarations.has(n);
  }
}
class _l extends ge {
  constructor(n, s, o, i, c, h, m, g) {
    super(), this.tokens = n, this.nameManager = s, this.helperManager = o, this.reactHotLoaderTransformer = i, this.isTypeScriptTransformEnabled = c, this.isFlowTransformEnabled = h, this.keepUnusedImports = m, this.nonTypeIdentifiers = c && !m ? Ns(n, g) : /* @__PURE__ */ new Set(), this.declarationInfo = c && !m ? _r(n) : kr, this.injectCreateRequireForImportRequire = !!g.injectCreateRequireForImportRequire;
  }
  process() {
    if (this.tokens.matches3(t._import, t.name, t.eq))
      return this.processImportEquals();
    if (this.tokens.matches4(t._import, t.name, t.name, t.eq) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, l._type)) {
      this.tokens.removeInitialToken();
      for (let n = 0; n < 7; n++)
        this.tokens.removeToken();
      return !0;
    }
    if (this.tokens.matches2(t._export, t.eq))
      return this.tokens.replaceToken("module.exports"), !0;
    if (this.tokens.matches5(t._export, t._import, t.name, t.name, t.eq) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 2, l._type)) {
      this.tokens.removeInitialToken();
      for (let n = 0; n < 8; n++)
        this.tokens.removeToken();
      return !0;
    }
    if (this.tokens.matches1(t._import))
      return this.processImport();
    if (this.tokens.matches2(t._export, t._default))
      return this.processExportDefault();
    if (this.tokens.matches2(t._export, t.braceL))
      return this.processNamedExports();
    if (this.tokens.matches2(t._export, t.name) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, l._type)) {
      if (this.tokens.removeInitialToken(), this.tokens.removeToken(), this.tokens.matches1(t.braceL)) {
        for (; !this.tokens.matches1(t.braceR); )
          this.tokens.removeToken();
        this.tokens.removeToken();
      } else
        this.tokens.removeToken(), this.tokens.matches1(t._as) && (this.tokens.removeToken(), this.tokens.removeToken());
      return this.tokens.matchesContextual(l._from) && this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, t.string) && (this.tokens.removeToken(), this.tokens.removeToken(), Ke(this.tokens)), !0;
    }
    return !1;
  }
  processImportEquals() {
    const n = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
    return this.shouldAutomaticallyElideImportedName(n) ? dr(this.tokens) : this.injectCreateRequireForImportRequire ? (this.tokens.replaceToken("const"), this.tokens.copyToken(), this.tokens.copyToken(), this.tokens.replaceToken(this.helperManager.getHelperName("require"))) : this.tokens.replaceToken("const"), !0;
  }
  processImport() {
    if (this.tokens.matches2(t._import, t.parenL))
      return !1;
    const n = this.tokens.snapshot();
    if (this.removeImportTypeBindings()) {
      for (this.tokens.restoreToSnapshot(n); !this.tokens.matches1(t.string); )
        this.tokens.removeToken();
      this.tokens.removeToken(), Ke(this.tokens), this.tokens.matches1(t.semi) && this.tokens.removeToken();
    }
    return !0;
  }
  /**
   * Remove type bindings from this import, leaving the rest of the import intact.
   *
   * Return true if this import was ONLY types, and thus is eligible for removal. This will bail out
   * of the replacement operation, so we can return early here.
   */
  removeImportTypeBindings() {
    if (this.tokens.copyExpectedToken(t._import), this.tokens.matchesContextual(l._type) && !this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, t.comma) && !this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, l._from))
      return !0;
    if (this.tokens.matches1(t.string))
      return this.tokens.copyToken(), !1;
    this.tokens.matchesContextual(l._module) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 2, l._from) && this.tokens.copyToken();
    let n = !1, s = !1, o = !1;
    if (this.tokens.matches1(t.name) && (this.shouldAutomaticallyElideImportedName(this.tokens.identifierName()) ? (this.tokens.removeToken(), this.tokens.matches1(t.comma) && this.tokens.removeToken()) : (n = !0, this.tokens.copyToken(), this.tokens.matches1(t.comma) && (o = !0, this.tokens.removeToken()))), this.tokens.matches1(t.star))
      this.shouldAutomaticallyElideImportedName(this.tokens.identifierNameAtRelativeIndex(2)) ? (this.tokens.removeToken(), this.tokens.removeToken(), this.tokens.removeToken()) : (o && this.tokens.appendCode(","), n = !0, this.tokens.copyExpectedToken(t.star), this.tokens.copyExpectedToken(t.name), this.tokens.copyExpectedToken(t.name));
    else if (this.tokens.matches1(t.braceL)) {
      for (o && this.tokens.appendCode(","), this.tokens.copyToken(); !this.tokens.matches1(t.braceR); ) {
        s = !0;
        const i = yt(this.tokens);
        if (i.isType || this.shouldAutomaticallyElideImportedName(i.rightName)) {
          for (; this.tokens.currentIndex() < i.endIndex; )
            this.tokens.removeToken();
          this.tokens.matches1(t.comma) && this.tokens.removeToken();
        } else {
          for (n = !0; this.tokens.currentIndex() < i.endIndex; )
            this.tokens.copyToken();
          this.tokens.matches1(t.comma) && this.tokens.copyToken();
        }
      }
      this.tokens.copyExpectedToken(t.braceR);
    }
    return this.keepUnusedImports ? !1 : this.isTypeScriptTransformEnabled ? !n : this.isFlowTransformEnabled ? s && !n : !1;
  }
  shouldAutomaticallyElideImportedName(n) {
    return this.isTypeScriptTransformEnabled && !this.keepUnusedImports && !this.nonTypeIdentifiers.has(n);
  }
  processExportDefault() {
    if (xr(
      this.isTypeScriptTransformEnabled,
      this.keepUnusedImports,
      this.tokens,
      this.declarationInfo
    ))
      return this.tokens.removeInitialToken(), this.tokens.removeToken(), this.tokens.removeToken(), !0;
    if (!(this.tokens.matches4(t._export, t._default, t._function, t.name) || // export default async function
    this.tokens.matches5(t._export, t._default, t.name, t._function, t.name) && this.tokens.matchesContextualAtIndex(
      this.tokens.currentIndex() + 2,
      l._async
    ) || this.tokens.matches4(t._export, t._default, t._class, t.name) || this.tokens.matches5(t._export, t._default, t._abstract, t._class, t.name)) && this.reactHotLoaderTransformer) {
      const s = this.nameManager.claimFreeName("_default");
      return this.tokens.replaceToken(`let ${s}; export`), this.tokens.copyToken(), this.tokens.appendCode(` ${s} =`), this.reactHotLoaderTransformer.setExtractedDefaultExportName(s), !0;
    }
    return !1;
  }
  /**
   * Handle a statement with one of these forms:
   * export {a, type b};
   * export {c, type d} from 'foo';
   *
   * In both cases, any explicit type exports should be removed. In the first
   * case, we also need to handle implicit export elision for names declared as
   * types. In the second case, we must NOT do implicit named export elision,
   * but we must remove the runtime import if all exports are type exports.
   */
  processNamedExports() {
    if (!this.isTypeScriptTransformEnabled)
      return !1;
    this.tokens.copyExpectedToken(t._export), this.tokens.copyExpectedToken(t.braceL);
    const n = gr(this.tokens);
    let s = !1;
    for (; !this.tokens.matches1(t.braceR); ) {
      const o = yt(this.tokens);
      if (o.isType || !n && this.shouldElideExportedName(o.leftName)) {
        for (; this.tokens.currentIndex() < o.endIndex; )
          this.tokens.removeToken();
        this.tokens.matches1(t.comma) && this.tokens.removeToken();
      } else {
        for (s = !0; this.tokens.currentIndex() < o.endIndex; )
          this.tokens.copyToken();
        this.tokens.matches1(t.comma) && this.tokens.copyToken();
      }
    }
    return this.tokens.copyExpectedToken(t.braceR), !this.keepUnusedImports && n && !s && (this.tokens.removeToken(), this.tokens.removeToken(), Ke(this.tokens)), !0;
  }
  /**
   * ESM elides all imports with the rule that we only elide if we see that it's
   * a type and never see it as a value. This is in contrast to CJS, which
   * elides imports that are completely unknown.
   */
  shouldElideExportedName(n) {
    return this.isTypeScriptTransformEnabled && !this.keepUnusedImports && this.declarationInfo.typeDeclarations.has(n) && !this.declarationInfo.valueDeclarations.has(n);
  }
}
class gl extends ge {
  constructor(n, s, o) {
    super(), this.rootTransformer = n, this.tokens = s, this.isImportsTransformEnabled = o;
  }
  process() {
    return this.rootTransformer.processPossibleArrowParamEnd() || this.rootTransformer.processPossibleAsyncArrowWithTypeParams() || this.rootTransformer.processPossibleTypeRange() ? !0 : this.tokens.matches1(t._enum) ? (this.processEnum(), !0) : this.tokens.matches2(t._export, t._enum) ? (this.processNamedExportEnum(), !0) : this.tokens.matches3(t._export, t._default, t._enum) ? (this.processDefaultExportEnum(), !0) : !1;
  }
  /**
   * Handle a declaration like:
   * export enum E ...
   *
   * With this imports transform, this becomes:
   * const E = [[enum]]; exports.E = E;
   *
   * otherwise, it becomes:
   * export const E = [[enum]];
   */
  processNamedExportEnum() {
    if (this.isImportsTransformEnabled) {
      this.tokens.removeInitialToken();
      const n = this.tokens.identifierNameAtRelativeIndex(1);
      this.processEnum(), this.tokens.appendCode(` exports.${n} = ${n};`);
    } else
      this.tokens.copyToken(), this.processEnum();
  }
  /**
   * Handle a declaration like:
   * export default enum E
   *
   * With the imports transform, this becomes:
   * const E = [[enum]]; exports.default = E;
   *
   * otherwise, it becomes:
   * const E = [[enum]]; export default E;
   */
  processDefaultExportEnum() {
    this.tokens.removeInitialToken(), this.tokens.removeToken();
    const n = this.tokens.identifierNameAtRelativeIndex(1);
    this.processEnum(), this.isImportsTransformEnabled ? this.tokens.appendCode(` exports.default = ${n};`) : this.tokens.appendCode(` export default ${n};`);
  }
  /**
   * Transpile flow enums to invoke the "flow-enums-runtime" library.
   *
   * Currently, the transpiled code always uses `require("flow-enums-runtime")`,
   * but if future flexibility is needed, we could expose a config option for
   * this string (similar to configurable JSX). Even when targeting ESM, the
   * default behavior of babel-plugin-transform-flow-enums is to use require
   * rather than injecting an import.
   *
   * Flow enums are quite a bit simpler than TS enums and have some convenient
   * constraints:
   * - Element initializers must be either always present or always absent. That
   *   means that we can use fixed lookahead on the first element (if any) and
   *   assume that all elements are like that.
   * - The right-hand side of an element initializer must be a literal value,
   *   not a complex expression and not referencing other elements. That means
   *   we can simply copy a single token.
   *
   * Enums can be broken up into three basic cases:
   *
   * Mirrored enums:
   * enum E {A, B}
   *   ->
   * const E = require("flow-enums-runtime").Mirrored(["A", "B"]);
   *
   * Initializer enums:
   * enum E {A = 1, B = 2}
   *   ->
   * const E = require("flow-enums-runtime")({A: 1, B: 2});
   *
   * Symbol enums:
   * enum E of symbol {A, B}
   *   ->
   * const E = require("flow-enums-runtime")({A: Symbol("A"), B: Symbol("B")});
   *
   * We can statically detect which of the three cases this is by looking at the
   * "of" declaration (if any) and seeing if the first element has an initializer.
   * Since the other transform details are so similar between the three cases, we
   * use a single implementation and vary the transform within processEnumElement
   * based on case.
   */
  processEnum() {
    this.tokens.replaceToken("const"), this.tokens.copyExpectedToken(t.name);
    let n = !1;
    this.tokens.matchesContextual(l._of) && (this.tokens.removeToken(), n = this.tokens.matchesContextual(l._symbol), this.tokens.removeToken());
    const s = this.tokens.matches3(t.braceL, t.name, t.eq);
    this.tokens.appendCode(' = require("flow-enums-runtime")');
    const o = !n && !s;
    for (this.tokens.replaceTokenTrimmingLeftWhitespace(o ? ".Mirrored([" : "({"); !this.tokens.matches1(t.braceR); ) {
      if (this.tokens.matches1(t.ellipsis)) {
        this.tokens.removeToken();
        break;
      }
      this.processEnumElement(n, s), this.tokens.matches1(t.comma) && this.tokens.copyToken();
    }
    this.tokens.replaceToken(o ? "]);" : "});");
  }
  /**
   * Process an individual enum element, producing either an array element or an
   * object element based on what type of enum this is.
   */
  processEnumElement(n, s) {
    if (n) {
      const o = this.tokens.identifierName();
      this.tokens.copyToken(), this.tokens.appendCode(`: Symbol("${o}")`);
    } else s ? (this.tokens.copyToken(), this.tokens.replaceTokenTrimmingLeftWhitespace(":"), this.tokens.copyToken()) : this.tokens.replaceToken(`"${this.tokens.identifierName()}"`);
  }
}
function xl(e) {
  let n, s = e[0], o = 1;
  for (; o < e.length; ) {
    const i = e[o], c = e[o + 1];
    if (o += 2, (i === "optionalAccess" || i === "optionalCall") && s == null)
      return;
    i === "access" || i === "optionalAccess" ? (n = s, s = c(s)) : (i === "call" || i === "optionalCall") && (s = c((...h) => s.call(n, ...h)), n = void 0);
  }
  return s;
}
const Rt = "jest", yl = ["mock", "unmock", "enableAutomock", "disableAutomock"];
class j1 extends ge {
  __init() {
    this.hoistedFunctionNames = [];
  }
  constructor(n, s, o, i) {
    super(), this.rootTransformer = n, this.tokens = s, this.nameManager = o, this.importProcessor = i, j1.prototype.__init.call(this);
  }
  process() {
    return this.tokens.currentToken().scopeDepth === 0 && this.tokens.matches4(t.name, t.dot, t.name, t.parenL) && this.tokens.identifierName() === Rt ? xl([this, "access", (n) => n.importProcessor, "optionalAccess", (n) => n.getGlobalNames, "call", (n) => n(), "optionalAccess", (n) => n.has, "call", (n) => n(Rt)]) ? !1 : this.extractHoistedCalls() : !1;
  }
  getHoistedCode() {
    return this.hoistedFunctionNames.length > 0 ? this.hoistedFunctionNames.map((n) => `${n}();`).join("") : "";
  }
  /**
   * Extracts any methods calls on the jest-object that should be hoisted.
   *
   * According to the jest docs, https://jestjs.io/docs/en/jest-object#jestmockmodulename-factory-options,
   * mock, unmock, enableAutomock, disableAutomock, are the methods that should be hoisted.
   *
   * We do not apply the same checks of the arguments as babel-plugin-jest-hoist does.
   */
  extractHoistedCalls() {
    this.tokens.removeToken();
    let n = !1;
    for (; this.tokens.matches3(t.dot, t.name, t.parenL); ) {
      const s = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
      if (yl.includes(s)) {
        const i = this.nameManager.claimFreeName("__jestHoist");
        this.hoistedFunctionNames.push(i), this.tokens.replaceToken(`function ${i}(){${Rt}.`), this.tokens.copyToken(), this.tokens.copyToken(), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(t.parenR), this.tokens.appendCode(";}"), n = !1;
      } else
        n ? this.tokens.copyToken() : this.tokens.replaceToken(`${Rt}.`), this.tokens.copyToken(), this.tokens.copyToken(), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(t.parenR), n = !0;
    }
    return !0;
  }
}
class Il extends ge {
  constructor(n) {
    super(), this.tokens = n;
  }
  process() {
    if (this.tokens.matches1(t.num)) {
      const n = this.tokens.currentTokenCode();
      if (n.includes("_"))
        return this.tokens.replaceToken(n.replace(/_/g, "")), !0;
    }
    return !1;
  }
}
class bl extends ge {
  constructor(n, s) {
    super(), this.tokens = n, this.nameManager = s;
  }
  process() {
    return this.tokens.matches2(t._catch, t.braceL) ? (this.tokens.copyToken(), this.tokens.appendCode(` (${this.nameManager.claimFreeName("e")})`), !0) : !1;
  }
}
class wl extends ge {
  constructor(n, s) {
    super(), this.tokens = n, this.nameManager = s;
  }
  process() {
    if (this.tokens.matches1(t.nullishCoalescing)) {
      const o = this.tokens.currentToken();
      return this.tokens.tokens[o.nullishStartIndex].isAsyncOperation ? this.tokens.replaceTokenTrimmingLeftWhitespace(", async () => (") : this.tokens.replaceTokenTrimmingLeftWhitespace(", () => ("), !0;
    }
    if (this.tokens.matches1(t._delete) && this.tokens.tokenAtRelativeIndex(1).isOptionalChainStart)
      return this.tokens.removeInitialToken(), !0;
    const s = this.tokens.currentToken().subscriptStartIndex;
    if (s != null && this.tokens.tokens[s].isOptionalChainStart && // Super subscripts can't be optional (since super is never null/undefined), and the syntax
    // relies on the subscript being intact, so leave this token alone.
    this.tokens.tokenAtRelativeIndex(-1).type !== t._super) {
      const o = this.nameManager.claimFreeName("_");
      let i;
      if (s > 0 && this.tokens.matches1AtIndex(s - 1, t._delete) && this.isLastSubscriptInChain() ? i = `${o} => delete ${o}` : i = `${o} => ${o}`, this.tokens.tokens[s].isAsyncOperation && (i = `async ${i}`), this.tokens.matches2(t.questionDot, t.parenL) || this.tokens.matches2(t.questionDot, t.lessThan))
        this.justSkippedSuper() && this.tokens.appendCode(".bind(this)"), this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalCall', ${i}`);
      else if (this.tokens.matches2(t.questionDot, t.bracketL))
        this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalAccess', ${i}`);
      else if (this.tokens.matches1(t.questionDot))
        this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalAccess', ${i}.`);
      else if (this.tokens.matches1(t.dot))
        this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'access', ${i}.`);
      else if (this.tokens.matches1(t.bracketL))
        this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'access', ${i}[`);
      else if (this.tokens.matches1(t.parenL))
        this.justSkippedSuper() && this.tokens.appendCode(".bind(this)"), this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'call', ${i}(`);
      else
        throw new Error("Unexpected subscript operator in optional chain.");
      return !0;
    }
    return !1;
  }
  /**
   * Determine if the current token is the last of its chain, so that we know whether it's eligible
   * to have a delete op inserted.
   *
   * We can do this by walking forward until we determine one way or another. Each
   * isOptionalChainStart token must be paired with exactly one isOptionalChainEnd token after it in
   * a nesting way, so we can track depth and walk to the end of the chain (the point where the
   * depth goes negative) and see if any other subscript token is after us in the chain.
   */
  isLastSubscriptInChain() {
    let n = 0;
    for (let s = this.tokens.currentIndex() + 1; ; s++) {
      if (s >= this.tokens.tokens.length)
        throw new Error("Reached the end of the code while finding the end of the access chain.");
      if (this.tokens.tokens[s].isOptionalChainStart ? n++ : this.tokens.tokens[s].isOptionalChainEnd && n--, n < 0)
        return !0;
      if (n === 0 && this.tokens.tokens[s].subscriptStartIndex != null)
        return !1;
    }
  }
  /**
   * Determine if we are the open-paren in an expression like super.a()?.b.
   *
   * We can do this by walking backward to find the previous subscript. If that subscript was
   * preceded by a super, then we must be the subscript after it, so if this is a call expression,
   * we'll need to attach the right context.
   */
  justSkippedSuper() {
    let n = 0, s = this.tokens.currentIndex() - 1;
    for (; ; ) {
      if (s < 0)
        throw new Error(
          "Reached the start of the code while finding the start of the access chain."
        );
      if (this.tokens.tokens[s].isOptionalChainStart ? n-- : this.tokens.tokens[s].isOptionalChainEnd && n++, n < 0)
        return !1;
      if (n === 0 && this.tokens.tokens[s].subscriptStartIndex != null)
        return this.tokens.tokens[s - 1].type === t._super;
      s--;
    }
  }
}
class Tl extends ge {
  constructor(n, s, o, i) {
    super(), this.rootTransformer = n, this.tokens = s, this.importProcessor = o, this.options = i;
  }
  process() {
    const n = this.tokens.currentIndex();
    if (this.tokens.identifierName() === "createReactClass") {
      const s = this.importProcessor && this.importProcessor.getIdentifierReplacement("createReactClass");
      return s ? this.tokens.replaceToken(`(0, ${s})`) : this.tokens.copyToken(), this.tryProcessCreateClassCall(n), !0;
    }
    if (this.tokens.matches3(t.name, t.dot, t.name) && this.tokens.identifierName() === "React" && this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 2) === "createClass") {
      const s = this.importProcessor && this.importProcessor.getIdentifierReplacement("React") || "React";
      return this.tokens.replaceToken(s), this.tokens.copyToken(), this.tokens.copyToken(), this.tryProcessCreateClassCall(n), !0;
    }
    return !1;
  }
  /**
   * This is called with the token position at the open-paren.
   */
  tryProcessCreateClassCall(n) {
    const s = this.findDisplayName(n);
    s && this.classNeedsDisplayName() && (this.tokens.copyExpectedToken(t.parenL), this.tokens.copyExpectedToken(t.braceL), this.tokens.appendCode(`displayName: '${s}',`), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(t.braceR), this.tokens.copyExpectedToken(t.parenR));
  }
  findDisplayName(n) {
    return n < 2 ? null : this.tokens.matches2AtIndex(n - 2, t.name, t.eq) ? this.tokens.identifierNameAtIndex(n - 2) : n >= 2 && this.tokens.tokens[n - 2].identifierRole === v.ObjectKey ? this.tokens.identifierNameAtIndex(n - 2) : this.tokens.matches2AtIndex(n - 2, t._export, t._default) ? this.getDisplayNameFromFilename() : null;
  }
  getDisplayNameFromFilename() {
    const s = (this.options.filePath || "unknown").split("/"), o = s[s.length - 1], i = o.lastIndexOf("."), c = i === -1 ? o : o.slice(0, i);
    return c === "index" && s[s.length - 2] ? s[s.length - 2] : c;
  }
  /**
   * We only want to add a display name when this is a function call containing
   * one argument, which is an object literal without `displayName` as an
   * existing key.
   */
  classNeedsDisplayName() {
    let n = this.tokens.currentIndex();
    if (!this.tokens.matches2(t.parenL, t.braceL))
      return !1;
    const s = n + 1, o = this.tokens.tokens[s].contextId;
    if (o == null)
      throw new Error("Expected non-null context ID on object open-brace.");
    for (; n < this.tokens.tokens.length; n++) {
      const i = this.tokens.tokens[n];
      if (i.type === t.braceR && i.contextId === o) {
        n++;
        break;
      }
      if (this.tokens.identifierNameAtIndex(n) === "displayName" && this.tokens.tokens[n].identifierRole === v.ObjectKey && i.contextId === o)
        return !1;
    }
    if (n === this.tokens.tokens.length)
      throw new Error("Unexpected end of input when processing React class.");
    return this.tokens.matches1AtIndex(n, t.parenR) || this.tokens.matches2AtIndex(n, t.comma, t.parenR);
  }
}
class M1 extends ge {
  __init() {
    this.extractedDefaultExportName = null;
  }
  constructor(n, s) {
    super(), this.tokens = n, this.filePath = s, M1.prototype.__init.call(this);
  }
  setExtractedDefaultExportName(n) {
    this.extractedDefaultExportName = n;
  }
  getPrefixCode() {
    return `
      (function () {
        var enterModule = require('react-hot-loader').enterModule;
        enterModule && enterModule(module);
      })();`.replace(/\s+/g, " ").trim();
  }
  getSuffixCode() {
    const n = /* @__PURE__ */ new Set();
    for (const o of this.tokens.tokens)
      !o.isType && ds(o) && o.identifierRole !== v.ImportDeclaration && n.add(this.tokens.identifierNameForToken(o));
    const s = Array.from(n).map((o) => ({
      variableName: o,
      uniqueLocalName: o
    }));
    return this.extractedDefaultExportName && s.push({
      variableName: this.extractedDefaultExportName,
      uniqueLocalName: "default"
    }), `
;(function () {
  var reactHotLoader = require('react-hot-loader').default;
  var leaveModule = require('react-hot-loader').leaveModule;
  if (!reactHotLoader) {
    return;
  }
${s.map(
      ({ variableName: o, uniqueLocalName: i }) => `  reactHotLoader.register(${o}, "${i}", ${JSON.stringify(
        this.filePath || ""
      )});`
    ).join(`
`)}
  leaveModule(module);
})();`;
  }
  process() {
    return !1;
  }
}
const Al = /* @__PURE__ */ new Set([
  // Reserved keywords as of ECMAScript 2015
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "else",
  "export",
  "extends",
  "finally",
  "for",
  "function",
  "if",
  "import",
  "in",
  "instanceof",
  "new",
  "return",
  "super",
  "switch",
  "this",
  "throw",
  "try",
  "typeof",
  "var",
  "void",
  "while",
  "with",
  "yield",
  // Future reserved keywords
  "enum",
  "implements",
  "interface",
  "let",
  "package",
  "private",
  "protected",
  "public",
  "static",
  "await",
  // Literals that cannot be used as identifiers
  "false",
  "null",
  "true"
]);
function cs(e) {
  if (e.length === 0 || !At[e.charCodeAt(0)])
    return !1;
  for (let n = 1; n < e.length; n++)
    if (!_e[e.charCodeAt(n)])
      return !1;
  return !Al.has(e);
}
class El extends ge {
  constructor(n, s, o) {
    super(), this.rootTransformer = n, this.tokens = s, this.isImportsTransformEnabled = o;
  }
  process() {
    return this.rootTransformer.processPossibleArrowParamEnd() || this.rootTransformer.processPossibleAsyncArrowWithTypeParams() || this.rootTransformer.processPossibleTypeRange() ? !0 : this.tokens.matches1(t._public) || this.tokens.matches1(t._protected) || this.tokens.matches1(t._private) || this.tokens.matches1(t._abstract) || this.tokens.matches1(t._readonly) || this.tokens.matches1(t._override) || this.tokens.matches1(t.nonNullAssertion) ? (this.tokens.removeInitialToken(), !0) : this.tokens.matches1(t._enum) || this.tokens.matches2(t._const, t._enum) ? (this.processEnum(), !0) : this.tokens.matches2(t._export, t._enum) || this.tokens.matches3(t._export, t._const, t._enum) ? (this.processEnum(!0), !0) : !1;
  }
  processEnum(n = !1) {
    for (this.tokens.removeInitialToken(); this.tokens.matches1(t._const) || this.tokens.matches1(t._enum); )
      this.tokens.removeToken();
    const s = this.tokens.identifierName();
    this.tokens.removeToken(), n && !this.isImportsTransformEnabled && this.tokens.appendCode("export "), this.tokens.appendCode(`var ${s}; (function (${s})`), this.tokens.copyExpectedToken(t.braceL), this.processEnumBody(s), this.tokens.copyExpectedToken(t.braceR), n && this.isImportsTransformEnabled ? this.tokens.appendCode(`)(${s} || (exports.${s} = ${s} = {}));`) : this.tokens.appendCode(`)(${s} || (${s} = {}));`);
  }
  /**
   * Transform an enum into equivalent JS. This has complexity in a few places:
   * - TS allows string enums, numeric enums, and a mix of the two styles within an enum.
   * - Enum keys are allowed to be referenced in later enum values.
   * - Enum keys are allowed to be strings.
   * - When enum values are omitted, they should follow an auto-increment behavior.
   */
  processEnumBody(n) {
    let s = null;
    for (; !this.tokens.matches1(t.braceR); ) {
      const { nameStringCode: o, variableName: i } = this.extractEnumKeyInfo(this.tokens.currentToken());
      this.tokens.removeInitialToken(), this.tokens.matches3(t.eq, t.string, t.comma) || this.tokens.matches3(t.eq, t.string, t.braceR) ? this.processStringLiteralEnumMember(n, o, i) : this.tokens.matches1(t.eq) ? this.processExplicitValueEnumMember(n, o, i) : this.processImplicitValueEnumMember(
        n,
        o,
        i,
        s
      ), this.tokens.matches1(t.comma) && this.tokens.removeToken(), i != null ? s = i : s = `${n}[${o}]`;
    }
  }
  /**
   * Detect name information about this enum key, which will be used to determine which code to emit
   * and whether we should declare a variable as part of this declaration.
   *
   * Some cases to keep in mind:
   * - Enum keys can be implicitly referenced later, e.g. `X = 1, Y = X`. In Sucrase, we implement
   *   this by declaring a variable `X` so that later expressions can use it.
   * - In addition to the usual identifier key syntax, enum keys are allowed to be string literals,
   *   e.g. `"hello world" = 3,`. Template literal syntax is NOT allowed.
   * - Even if the enum key is defined as a string literal, it may still be referenced by identifier
   *   later, e.g. `"X" = 1, Y = X`. That means that we need to detect whether or not a string
   *   literal is identifier-like and emit a variable if so, even if the declaration did not use an
   *   identifier.
   * - Reserved keywords like `break` are valid enum keys, but are not valid to be referenced later
   *   and would be a syntax error if we emitted a variable, so we need to skip the variable
   *   declaration in those cases.
   *
   * The variableName return value captures these nuances: if non-null, we can and must emit a
   * variable declaration, and if null, we can't and shouldn't.
   */
  extractEnumKeyInfo(n) {
    if (n.type === t.name) {
      const s = this.tokens.identifierNameForToken(n);
      return {
        nameStringCode: `"${s}"`,
        variableName: cs(s) ? s : null
      };
    } else if (n.type === t.string) {
      const s = this.tokens.stringValueForToken(n);
      return {
        nameStringCode: this.tokens.code.slice(n.start, n.end),
        variableName: cs(s) ? s : null
      };
    } else
      throw new Error("Expected name or string at beginning of enum element.");
  }
  /**
   * Handle an enum member where the RHS is just a string literal (not omitted, not a number, and
   * not a complex expression). This is the typical form for TS string enums, and in this case, we
   * do *not* create a reverse mapping.
   *
   * This is called after deleting the key token, when the token processor is at the equals sign.
   *
   * Example 1:
   * someKey = "some value"
   * ->
   * const someKey = "some value"; MyEnum["someKey"] = someKey;
   *
   * Example 2:
   * "some key" = "some value"
   * ->
   * MyEnum["some key"] = "some value";
   */
  processStringLiteralEnumMember(n, s, o) {
    o != null ? (this.tokens.appendCode(`const ${o}`), this.tokens.copyToken(), this.tokens.copyToken(), this.tokens.appendCode(`; ${n}[${s}] = ${o};`)) : (this.tokens.appendCode(`${n}[${s}]`), this.tokens.copyToken(), this.tokens.copyToken(), this.tokens.appendCode(";"));
  }
  /**
   * Handle an enum member initialized with an expression on the right-hand side (other than a
   * string literal). In these cases, we should transform the expression and emit code that sets up
   * a reverse mapping.
   *
   * The TypeScript implementation of this operation distinguishes between expressions that can be
   * "constant folded" at compile time (i.e. consist of number literals and simple math operations
   * on those numbers) and ones that are dynamic. For constant expressions, it emits the resolved
   * numeric value, and auto-incrementing is only allowed in that case. Evaluating expressions at
   * compile time would add significant complexity to Sucrase, so Sucrase instead leaves the
   * expression as-is, and will later emit something like `MyEnum["previousKey"] + 1` to implement
   * auto-incrementing.
   *
   * This is called after deleting the key token, when the token processor is at the equals sign.
   *
   * Example 1:
   * someKey = 1 + 1
   * ->
   * const someKey = 1 + 1; MyEnum[MyEnum["someKey"] = someKey] = "someKey";
   *
   * Example 2:
   * "some key" = 1 + 1
   * ->
   * MyEnum[MyEnum["some key"] = 1 + 1] = "some key";
   */
  processExplicitValueEnumMember(n, s, o) {
    const i = this.tokens.currentToken().rhsEndIndex;
    if (i == null)
      throw new Error("Expected rhsEndIndex on enum assign.");
    if (o != null) {
      for (this.tokens.appendCode(`const ${o}`), this.tokens.copyToken(); this.tokens.currentIndex() < i; )
        this.rootTransformer.processToken();
      this.tokens.appendCode(
        `; ${n}[${n}[${s}] = ${o}] = ${s};`
      );
    } else {
      for (this.tokens.appendCode(`${n}[${n}[${s}]`), this.tokens.copyToken(); this.tokens.currentIndex() < i; )
        this.rootTransformer.processToken();
      this.tokens.appendCode(`] = ${s};`);
    }
  }
  /**
   * Handle an enum member with no right-hand side expression. In this case, the value is the
   * previous value plus 1, or 0 if there was no previous value. We should also always emit a
   * reverse mapping.
   *
   * Example 1:
   * someKey2
   * ->
   * const someKey2 = someKey1 + 1; MyEnum[MyEnum["someKey2"] = someKey2] = "someKey2";
   *
   * Example 2:
   * "some key 2"
   * ->
   * MyEnum[MyEnum["some key 2"] = someKey1 + 1] = "some key 2";
   */
  processImplicitValueEnumMember(n, s, o, i) {
    let c = i != null ? `${i} + 1` : "0";
    o != null && (this.tokens.appendCode(`const ${o} = ${c}; `), c = o), this.tokens.appendCode(
      `${n}[${n}[${s}] = ${c}] = ${s};`
    );
  }
}
class Wt {
  __init() {
    this.transformers = [];
  }
  __init2() {
    this.generatedVariables = [];
  }
  constructor(n, s, o, i) {
    Wt.prototype.__init.call(this), Wt.prototype.__init2.call(this), this.nameManager = n.nameManager, this.helperManager = n.helperManager;
    const { tokenProcessor: c, importProcessor: h } = n;
    this.tokens = c, this.isImportsTransformEnabled = s.includes("imports"), this.isReactHotLoaderTransformEnabled = s.includes("react-hot-loader"), this.disableESTransforms = !!i.disableESTransforms, i.disableESTransforms || (this.transformers.push(
      new wl(c, this.nameManager)
    ), this.transformers.push(new Il(c)), this.transformers.push(new bl(c, this.nameManager))), s.includes("jsx") && (i.jsxRuntime !== "preserve" && this.transformers.push(
      new Ye(this, c, h, this.nameManager, i)
    ), this.transformers.push(
      new Tl(this, c, h, i)
    ));
    let m = null;
    if (s.includes("react-hot-loader")) {
      if (!i.filePath)
        throw new Error("filePath is required when using the react-hot-loader transform.");
      m = new M1(c, i.filePath), this.transformers.push(m);
    }
    if (s.includes("imports")) {
      if (h === null)
        throw new Error("Expected non-null importProcessor with imports transform enabled.");
      this.transformers.push(
        new gt(
          this,
          c,
          h,
          this.nameManager,
          this.helperManager,
          m,
          o,
          !!i.enableLegacyTypeScriptModuleInterop,
          s.includes("typescript"),
          s.includes("flow"),
          !!i.preserveDynamicImport,
          !!i.keepUnusedImports
        )
      );
    } else
      this.transformers.push(
        new _l(
          c,
          this.nameManager,
          this.helperManager,
          m,
          s.includes("typescript"),
          s.includes("flow"),
          !!i.keepUnusedImports,
          i
        )
      );
    s.includes("flow") && this.transformers.push(
      new gl(this, c, s.includes("imports"))
    ), s.includes("typescript") && this.transformers.push(
      new El(this, c, s.includes("imports"))
    ), s.includes("jest") && this.transformers.push(
      new j1(this, c, this.nameManager, h)
    );
  }
  transform() {
    this.tokens.reset(), this.processBalancedCode();
    let s = this.isImportsTransformEnabled ? '"use strict";' : "";
    for (const h of this.transformers)
      s += h.getPrefixCode();
    s += this.helperManager.emitHelpers(), s += this.generatedVariables.map((h) => ` var ${h};`).join("");
    for (const h of this.transformers)
      s += h.getHoistedCode();
    let o = "";
    for (const h of this.transformers)
      o += h.getSuffixCode();
    const i = this.tokens.finish();
    let { code: c } = i;
    if (c.startsWith("#!")) {
      let h = c.indexOf(`
`);
      return h === -1 && (h = c.length, c += `
`), {
        code: c.slice(0, h + 1) + s + c.slice(h + 1) + o,
        // The hashbang line has no tokens, so shifting the tokens to account
        // for prefix can happen normally.
        mappings: this.shiftMappings(i.mappings, s.length)
      };
    } else
      return {
        code: s + c + o,
        mappings: this.shiftMappings(i.mappings, s.length)
      };
  }
  processBalancedCode() {
    let n = 0, s = 0;
    for (; !this.tokens.isAtEnd(); ) {
      if (this.tokens.matches1(t.braceL) || this.tokens.matches1(t.dollarBraceL))
        n++;
      else if (this.tokens.matches1(t.braceR)) {
        if (n === 0)
          return;
        n--;
      }
      if (this.tokens.matches1(t.parenL))
        s++;
      else if (this.tokens.matches1(t.parenR)) {
        if (s === 0)
          return;
        s--;
      }
      this.processToken();
    }
  }
  processToken() {
    if (this.tokens.matches1(t._class)) {
      this.processClass();
      return;
    }
    for (const n of this.transformers)
      if (n.process())
        return;
    this.tokens.copyToken();
  }
  /**
   * Skip past a class with a name and return that name.
   */
  processNamedClass() {
    if (!this.tokens.matches2(t._class, t.name))
      throw new Error("Expected identifier for exported class name.");
    const n = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
    return this.processClass(), n;
  }
  processClass() {
    const n = ml(this, this.tokens, this.nameManager, this.disableESTransforms), s = (n.headerInfo.isExpression || !n.headerInfo.className) && n.staticInitializerNames.length + n.instanceInitializerNames.length > 0;
    let o = n.headerInfo.className;
    s && (o = this.nameManager.claimFreeName("_class"), this.generatedVariables.push(o), this.tokens.appendCode(` (${o} =`));
    const c = this.tokens.currentToken().contextId;
    if (c == null)
      throw new Error("Expected class to have a context ID.");
    for (this.tokens.copyExpectedToken(t._class); !this.tokens.matchesContextIdAndLabel(t.braceL, c); )
      this.processToken();
    this.processClassBody(n, o);
    const h = n.staticInitializerNames.map(
      (m) => `${o}.${m}()`
    );
    s ? this.tokens.appendCode(
      `, ${h.map((m) => `${m}, `).join("")}${o})`
    ) : n.staticInitializerNames.length > 0 && this.tokens.appendCode(` ${h.map((m) => `${m};`).join(" ")}`);
  }
  /**
   * We want to just handle class fields in all contexts, since TypeScript supports them. Later,
   * when some JS implementations support class fields, this should be made optional.
   */
  processClassBody(n, s) {
    const {
      headerInfo: o,
      constructorInsertPos: i,
      constructorInitializerStatements: c,
      fields: h,
      instanceInitializerNames: m,
      rangesToRemove: g
    } = n;
    let f = 0, y = 0;
    const T = this.tokens.currentToken().contextId;
    if (T == null)
      throw new Error("Expected non-null context ID on class.");
    this.tokens.copyExpectedToken(t.braceL), this.isReactHotLoaderTransformEnabled && this.tokens.appendCode(
      "__reactstandin__regenerateByEval(key, code) {this[key] = eval(code);}"
    );
    const S = c.length + m.length > 0;
    if (i === null && S) {
      const P = this.makeConstructorInitCode(
        c,
        m,
        s
      );
      if (o.hasSuperclass) {
        const B = this.nameManager.claimFreeName("args");
        this.tokens.appendCode(
          `constructor(...${B}) { super(...${B}); ${P}; }`
        );
      } else
        this.tokens.appendCode(`constructor() { ${P}; }`);
    }
    for (; !this.tokens.matchesContextIdAndLabel(t.braceR, T); )
      if (f < h.length && this.tokens.currentIndex() === h[f].start) {
        let P = !1;
        for (this.tokens.matches1(t.bracketL) ? this.tokens.copyTokenWithPrefix(`${h[f].initializerName}() {this`) : this.tokens.matches1(t.string) || this.tokens.matches1(t.num) ? (this.tokens.copyTokenWithPrefix(`${h[f].initializerName}() {this[`), P = !0) : this.tokens.copyTokenWithPrefix(`${h[f].initializerName}() {this.`); this.tokens.currentIndex() < h[f].end; )
          P && this.tokens.currentIndex() === h[f].equalsIndex && this.tokens.appendCode("]"), this.processToken();
        this.tokens.appendCode("}"), f++;
      } else if (y < g.length && this.tokens.currentIndex() >= g[y].start) {
        for (this.tokens.currentIndex() < g[y].end && this.tokens.removeInitialToken(); this.tokens.currentIndex() < g[y].end; )
          this.tokens.removeToken();
        y++;
      } else this.tokens.currentIndex() === i ? (this.tokens.copyToken(), S && this.tokens.appendCode(
        `;${this.makeConstructorInitCode(
          c,
          m,
          s
        )};`
      ), this.processToken()) : this.processToken();
    this.tokens.copyExpectedToken(t.braceR);
  }
  makeConstructorInitCode(n, s, o) {
    return [
      ...n,
      ...s.map((i) => `${o}.prototype.${i}.call(this)`)
    ].join(";");
  }
  /**
   * Normally it's ok to simply remove type tokens, but we need to be more careful when dealing with
   * arrow function return types since they can confuse the parser. In that case, we want to move
   * the close-paren to the same line as the arrow.
   *
   * See https://github.com/alangpierce/sucrase/issues/391 for more details.
   */
  processPossibleArrowParamEnd() {
    if (this.tokens.matches2(t.parenR, t.colon) && this.tokens.tokenAtRelativeIndex(1).isType) {
      let n = this.tokens.currentIndex() + 1;
      for (; this.tokens.tokens[n].isType; )
        n++;
      if (this.tokens.matches1AtIndex(n, t.arrow)) {
        for (this.tokens.removeInitialToken(); this.tokens.currentIndex() < n; )
          this.tokens.removeToken();
        return this.tokens.replaceTokenTrimmingLeftWhitespace(") =>"), !0;
      }
    }
    return !1;
  }
  /**
   * An async arrow function might be of the form:
   *
   * async <
   *   T
   * >() => {}
   *
   * in which case, removing the type parameters will cause a syntax error. Detect this case and
   * move the open-paren earlier.
   */
  processPossibleAsyncArrowWithTypeParams() {
    if (!this.tokens.matchesContextual(l._async) && !this.tokens.matches1(t._async))
      return !1;
    const n = this.tokens.tokenAtRelativeIndex(1);
    if (n.type !== t.lessThan || !n.isType)
      return !1;
    let s = this.tokens.currentIndex() + 1;
    for (; this.tokens.tokens[s].isType; )
      s++;
    if (this.tokens.matches1AtIndex(s, t.parenL)) {
      for (this.tokens.replaceToken("async ("), this.tokens.removeInitialToken(); this.tokens.currentIndex() < s; )
        this.tokens.removeToken();
      return this.tokens.removeToken(), this.processBalancedCode(), this.processToken(), !0;
    }
    return !1;
  }
  processPossibleTypeRange() {
    if (this.tokens.currentToken().isType) {
      for (this.tokens.removeInitialToken(); this.tokens.currentToken().isType; )
        this.tokens.removeToken();
      return !0;
    }
    return !1;
  }
  shiftMappings(n, s) {
    for (let o = 0; o < n.length; o++) {
      const i = n[o];
      i !== void 0 && (n[o] = i + s);
    }
    return n;
  }
}
var Kn = {}, ls;
function Sl() {
  return ls || (ls = 1, (function(e) {
    e.__esModule = !0, e.LinesAndColumns = void 0;
    var n = `
`, s = "\r", o = (
      /** @class */
      (function() {
        function i(c) {
          this.string = c;
          for (var h = [0], m = 0; m < c.length; )
            switch (c[m]) {
              case n:
                m += n.length, h.push(m);
                break;
              case s:
                m += s.length, c[m] === n && (m += n.length), h.push(m);
                break;
              default:
                m++;
                break;
            }
          this.offsets = h;
        }
        return i.prototype.locationForIndex = function(c) {
          if (c < 0 || c > this.string.length)
            return null;
          for (var h = 0, m = this.offsets; m[h + 1] <= c; )
            h++;
          var g = c - m[h];
          return { line: h, column: g };
        }, i.prototype.indexForLocation = function(c) {
          var h = c.line, m = c.column;
          return h < 0 || h >= this.offsets.length || m < 0 || m > this.lengthOfLine(h) ? null : this.offsets[h] + m;
        }, i.prototype.lengthOfLine = function(c) {
          var h = this.offsets[c], m = c === this.offsets.length - 1 ? this.string.length : this.offsets[c + 1];
          return m - h;
        }, i;
      })()
    );
    e.LinesAndColumns = o, e.default = o;
  })(Kn)), Kn;
}
Sl();
function vl(e) {
  const n = /* @__PURE__ */ new Set();
  for (let s = 0; s < e.tokens.length; s++)
    e.matches1AtIndex(s, t._import) && !e.matches3AtIndex(s, t._import, t.name, t.eq) && Nl(e, s, n);
  return n;
}
function Nl(e, n, s) {
  n++, !e.matches1AtIndex(n, t.parenL) && (e.matches1AtIndex(n, t.name) && (s.add(e.identifierNameAtIndex(n)), n++, e.matches1AtIndex(n, t.comma) && n++), e.matches1AtIndex(n, t.star) && (n += 2, s.add(e.identifierNameAtIndex(n)), n++), e.matches1AtIndex(n, t.braceL) && (n++, Pl(e, n, s)));
}
function Pl(e, n, s) {
  for (; ; ) {
    if (e.matches1AtIndex(n, t.braceR))
      return;
    const o = yt(e, n);
    if (n = o.endIndex, o.isType || s.add(o.rightName), e.matches2AtIndex(n, t.comma, t.braceR))
      return;
    if (e.matches1AtIndex(n, t.braceR))
      return;
    if (e.matches1AtIndex(n, t.comma))
      n++;
    else
      throw new Error(`Unexpected token: ${JSON.stringify(e.tokens[n])}`);
  }
}
function Cl(e, n) {
  Go(n);
  try {
    const s = Rl(e, n), i = new Wt(
      s,
      n.transforms,
      !!n.enableLegacyBabel5ModuleInterop,
      n
    ).transform();
    let c = { code: i.code };
    if (n.sourceMapOptions) {
      if (!n.filePath)
        throw new Error("filePath must be specified when generating a source map.");
      c = {
        ...c,
        sourceMap: Oo(
          i,
          n.filePath,
          n.sourceMapOptions,
          e,
          s.tokenProcessor.tokens
        )
      };
    }
    return c;
  } catch (s) {
    throw n.filePath && (s.message = `Error transforming ${n.filePath}: ${s.message}`), s;
  }
}
function Rl(e, n) {
  const s = n.transforms.includes("jsx"), o = n.transforms.includes("typescript"), i = n.transforms.includes("flow"), c = n.disableESTransforms === !0, h = pl(e, s, o, i), m = h.tokens, g = h.scopes, f = new f1(e, m), y = new jt(f), T = new _t(
    e,
    m,
    i,
    c,
    y
  ), S = !!n.enableLegacyTypeScriptModuleInterop;
  let P = null;
  return n.transforms.includes("imports") ? (P = new Ze(
    f,
    T,
    S,
    n,
    n.transforms.includes("typescript"),
    !!n.keepUnusedImports,
    y
  ), P.preprocessTokens(), V1(T, g, P.getGlobalNames()), n.transforms.includes("typescript") && !n.keepUnusedImports && P.pruneTypeOnlyImports()) : n.transforms.includes("typescript") && !n.keepUnusedImports && V1(T, g, vl(T)), { tokenProcessor: T, scopes: g, nameManager: f, importProcessor: P, helperManager: y };
}
const Fl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  transform: Cl
}, Symbol.toStringTag, { value: "Module" }));
export {
  Dl as a,
  Ol as g,
  Fl as i
};
//# sourceMappingURL=sucrase_Vx5h13n5.js.map
