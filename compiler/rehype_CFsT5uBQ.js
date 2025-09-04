import { a as zt } from "./sucrase_Vx5h13n5.js";
import { f as Tt, p as We, a as Ge, n as Ve, h as Ue, s as ke, t as Jt } from "./shiki_CE0IyDxo.js";
const Ke = /[#.]/g;
function Zt(e, t) {
  const u = e || "", s = {};
  let n = 0, o, E;
  for (; n < u.length; ) {
    Ke.lastIndex = n;
    const l = Ke.exec(u), T = u.slice(n, l ? l.index : u.length);
    T && (o ? o === "#" ? s.id = T : Array.isArray(s.className) ? s.className.push(T) : s.className = [T] : E = T, n += T.length), l && (o = l[0], n++);
  }
  return {
    type: "element",
    // @ts-expect-error: tag name is parsed.
    tagName: E || t || "div",
    properties: s,
    children: []
  };
}
function mt(e, t, u) {
  const s = u ? uu(u) : void 0;
  function n(o, E, ...l) {
    let T;
    if (o == null) {
      T = { type: "root", children: [] };
      const m = (
        /** @type {Child} */
        E
      );
      l.unshift(m);
    } else {
      T = Zt(o, t);
      const m = T.tagName.toLowerCase(), _ = s ? s.get(m) : void 0;
      if (T.tagName = _ || m, $t(E))
        l.unshift(E);
      else
        for (const [A, I] of Object.entries(E))
          eu(e, T.properties, A, I);
    }
    for (const m of l)
      Oe(T.children, m);
    return T.type === "element" && T.tagName === "template" && (T.content = { type: "root", children: T.children }, T.children = []), T;
  }
  return n;
}
function $t(e) {
  if (e === null || typeof e != "object" || Array.isArray(e))
    return !0;
  if (typeof e.type != "string") return !1;
  const t = (
    /** @type {Record<string, unknown>} */
    e
  ), u = Object.keys(e);
  for (const s of u) {
    const n = t[s];
    if (n && typeof n == "object") {
      if (!Array.isArray(n)) return !0;
      const o = (
        /** @type {ReadonlyArray<unknown>} */
        n
      );
      for (const E of o)
        if (typeof E != "number" && typeof E != "string")
          return !0;
    }
  }
  return !!("children" in e && Array.isArray(e.children));
}
function eu(e, t, u, s) {
  const n = Tt(e, u);
  let o;
  if (s != null) {
    if (typeof s == "number") {
      if (Number.isNaN(s)) return;
      o = s;
    } else typeof s == "boolean" ? o = s : typeof s == "string" ? n.spaceSeparated ? o = We(s) : n.commaSeparated ? o = Ge(s) : n.commaOrSpaceSeparated ? o = We(Ge(s).join(" ")) : o = Xe(n, n.property, s) : Array.isArray(s) ? o = [...s] : o = n.property === "style" ? tu(s) : String(s);
    if (Array.isArray(o)) {
      const E = [];
      for (const l of o)
        E.push(
          /** @type {number | string} */
          Xe(n, n.property, l)
        );
      o = E;
    }
    n.property === "className" && Array.isArray(t.className) && (o = t.className.concat(
      /** @type {Array<number | string> | number | string} */
      o
    )), t[n.property] = o;
  }
}
function Oe(e, t) {
  if (t != null) if (typeof t == "number" || typeof t == "string")
    e.push({ type: "text", value: String(t) });
  else if (Array.isArray(t))
    for (const u of t)
      Oe(e, u);
  else if (typeof t == "object" && "type" in t)
    t.type === "root" ? Oe(e, t.children) : e.push(t);
  else
    throw new Error("Expected node, nodes, or string, got `" + t + "`");
}
function Xe(e, t, u) {
  if (typeof u == "string") {
    if (e.number && u && !Number.isNaN(Number(u)))
      return Number(u);
    if ((e.boolean || e.overloadedBoolean) && (u === "" || Ve(u) === Ve(t)))
      return !0;
  }
  return u;
}
function tu(e) {
  const t = [];
  for (const [u, s] of Object.entries(e))
    t.push([u, s].join(": "));
  return t.join("; ");
}
function uu(e) {
  const t = /* @__PURE__ */ new Map();
  for (const u of e)
    t.set(u.toLowerCase(), u);
  return t;
}
const au = [
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "clipPath",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "foreignObject",
  "glyphRef",
  "linearGradient",
  "radialGradient",
  "solidColor",
  "textArea",
  "textPath"
], su = mt(Ue, "div"), ru = mt(ke, "g", au);
function nu(e) {
  const t = String(e), u = [];
  return { toOffset: n, toPoint: s };
  function s(o) {
    if (typeof o == "number" && o > -1 && o <= t.length) {
      let E = 0;
      for (; ; ) {
        let l = u[E];
        if (l === void 0) {
          const T = je(t, u[E - 1]);
          l = T === -1 ? t.length + 1 : T + 1, u[E] = l;
        }
        if (l > o)
          return {
            line: E + 1,
            column: o - (E > 0 ? u[E - 1] : 0) + 1,
            offset: o
          };
        E++;
      }
    }
  }
  function n(o) {
    if (o && typeof o.line == "number" && typeof o.column == "number" && !Number.isNaN(o.line) && !Number.isNaN(o.column)) {
      for (; u.length < o.line; ) {
        const l = u[u.length - 1], T = je(t, l), m = T === -1 ? t.length + 1 : T + 1;
        if (l === m) break;
        u.push(m);
      }
      const E = (o.line > 1 ? u[o.line - 2] : 0) + o.column - 1;
      if (E < u[o.line - 1]) return E;
    }
  }
}
function je(e, t) {
  const u = e.indexOf("\r", t), s = e.indexOf(`
`, t);
  return s === -1 ? u : u === -1 || u + 1 === s ? s : u < s ? u : s;
}
const iu = {
  svg: "http://www.w3.org/2000/svg"
}, bt = {}.hasOwnProperty, cu = Object.prototype;
function ou(e, t) {
  const u = t || {};
  return He(
    {
      file: u.file || void 0,
      location: !1,
      schema: u.space === "svg" ? ke : Ue,
      verbose: u.verbose || !1
    },
    e
  );
}
function He(e, t) {
  let u;
  switch (t.nodeName) {
    case "#comment": {
      const s = (
        /** @type {DefaultTreeAdapterMap['commentNode']} */
        t
      );
      return u = { type: "comment", value: s.data }, ne(e, s, u), u;
    }
    case "#document":
    case "#document-fragment": {
      const s = (
        /** @type {DefaultTreeAdapterMap['document'] | DefaultTreeAdapterMap['documentFragment']} */
        t
      ), n = "mode" in s ? s.mode === "quirks" || s.mode === "limited-quirks" : !1;
      if (u = {
        type: "root",
        children: _t(e, t.childNodes),
        data: { quirksMode: n }
      }, e.file && e.location) {
        const o = String(e.file), E = nu(o), l = E.toPoint(0), T = E.toPoint(o.length);
        u.position = { start: l, end: T };
      }
      return u;
    }
    case "#documentType": {
      const s = (
        /** @type {DefaultTreeAdapterMap['documentType']} */
        t
      );
      return u = { type: "doctype" }, ne(e, s, u), u;
    }
    case "#text": {
      const s = (
        /** @type {DefaultTreeAdapterMap['textNode']} */
        t
      );
      return u = { type: "text", value: s.value }, ne(e, s, u), u;
    }
    // Element.
    default:
      return u = du(
        e,
        /** @type {DefaultTreeAdapterMap['element']} */
        t
      ), u;
  }
}
function _t(e, t) {
  let u = -1;
  const s = [];
  for (; ++u < t.length; ) {
    const n = (
      /** @type {RootContent} */
      He(e, t[u])
    );
    s.push(n);
  }
  return s;
}
function du(e, t) {
  const u = e.schema;
  e.schema = t.namespaceURI === iu.svg ? ke : Ue;
  let s = -1;
  const n = {};
  for (; ++s < t.attrs.length; ) {
    const l = t.attrs[s], T = (l.prefix ? l.prefix + ":" : "") + l.name;
    bt.call(cu, T) || (n[T] = l.value);
  }
  const E = (e.schema.space === "svg" ? ru : su)(t.tagName, n, _t(e, t.childNodes));
  if (ne(e, t, E), E.tagName === "template") {
    const l = (
      /** @type {DefaultTreeAdapterMap['template']} */
      t
    ), T = l.sourceCodeLocation, m = T && T.startTag && W(T.startTag), _ = T && T.endTag && W(T.endTag), A = (
      /** @type {Root} */
      He(e, l.content)
    );
    m && _ && e.file && (A.position = { start: m.end, end: _.start }), E.content = A;
  }
  return e.schema = u, E;
}
function ne(e, t, u) {
  if ("sourceCodeLocation" in t && t.sourceCodeLocation && e.file) {
    const s = Eu(e, u, t.sourceCodeLocation);
    s && (e.location = !0, u.position = s);
  }
}
function Eu(e, t, u) {
  const s = W(u);
  if (t.type === "element") {
    const n = t.children[t.children.length - 1];
    if (s && !u.endTag && n && n.position && n.position.end && (s.end = Object.assign({}, n.position.end)), e.verbose) {
      const o = {};
      let E;
      if (u.attrs)
        for (E in u.attrs)
          bt.call(u.attrs, E) && (o[Tt(e.schema, E).property] = W(
            u.attrs[E]
          ));
      u.startTag;
      const l = W(u.startTag), T = u.endTag ? W(u.endTag) : void 0, m = { opening: l };
      T && (m.closing = T), m.properties = o, t.data = { position: m };
    }
  }
  return s;
}
function W(e) {
  const t = ze({
    line: e.startLine,
    column: e.startCol,
    offset: e.startOffset
  }), u = ze({
    line: e.endLine,
    column: e.endCol,
    offset: e.endOffset
  });
  return t || u ? { start: t, end: u } : void 0;
}
function ze(e) {
  return e.line && e.column ? e : void 0;
}
const fu = /* @__PURE__ */ new Set([
  65534,
  65535,
  131070,
  131071,
  196606,
  196607,
  262142,
  262143,
  327678,
  327679,
  393214,
  393215,
  458750,
  458751,
  524286,
  524287,
  589822,
  589823,
  655358,
  655359,
  720894,
  720895,
  786430,
  786431,
  851966,
  851967,
  917502,
  917503,
  983038,
  983039,
  1048574,
  1048575,
  1114110,
  1114111
]), N = "�";
var r;
(function(e) {
  e[e.EOF = -1] = "EOF", e[e.NULL = 0] = "NULL", e[e.TABULATION = 9] = "TABULATION", e[e.CARRIAGE_RETURN = 13] = "CARRIAGE_RETURN", e[e.LINE_FEED = 10] = "LINE_FEED", e[e.FORM_FEED = 12] = "FORM_FEED", e[e.SPACE = 32] = "SPACE", e[e.EXCLAMATION_MARK = 33] = "EXCLAMATION_MARK", e[e.QUOTATION_MARK = 34] = "QUOTATION_MARK", e[e.AMPERSAND = 38] = "AMPERSAND", e[e.APOSTROPHE = 39] = "APOSTROPHE", e[e.HYPHEN_MINUS = 45] = "HYPHEN_MINUS", e[e.SOLIDUS = 47] = "SOLIDUS", e[e.DIGIT_0 = 48] = "DIGIT_0", e[e.DIGIT_9 = 57] = "DIGIT_9", e[e.SEMICOLON = 59] = "SEMICOLON", e[e.LESS_THAN_SIGN = 60] = "LESS_THAN_SIGN", e[e.EQUALS_SIGN = 61] = "EQUALS_SIGN", e[e.GREATER_THAN_SIGN = 62] = "GREATER_THAN_SIGN", e[e.QUESTION_MARK = 63] = "QUESTION_MARK", e[e.LATIN_CAPITAL_A = 65] = "LATIN_CAPITAL_A", e[e.LATIN_CAPITAL_Z = 90] = "LATIN_CAPITAL_Z", e[e.RIGHT_SQUARE_BRACKET = 93] = "RIGHT_SQUARE_BRACKET", e[e.GRAVE_ACCENT = 96] = "GRAVE_ACCENT", e[e.LATIN_SMALL_A = 97] = "LATIN_SMALL_A", e[e.LATIN_SMALL_Z = 122] = "LATIN_SMALL_Z";
})(r || (r = {}));
const D = {
  DASH_DASH: "--",
  CDATA_START: "[CDATA[",
  DOCTYPE: "doctype",
  SCRIPT: "script",
  PUBLIC: "public",
  SYSTEM: "system"
};
function At(e) {
  return e >= 55296 && e <= 57343;
}
function lu(e) {
  return e >= 56320 && e <= 57343;
}
function hu(e, t) {
  return (e - 55296) * 1024 + 9216 + t;
}
function pt(e) {
  return e !== 32 && e !== 10 && e !== 13 && e !== 9 && e !== 12 && e >= 1 && e <= 31 || e >= 127 && e <= 159;
}
function It(e) {
  return e >= 64976 && e <= 65007 || fu.has(e);
}
var f;
(function(e) {
  e.controlCharacterInInputStream = "control-character-in-input-stream", e.noncharacterInInputStream = "noncharacter-in-input-stream", e.surrogateInInputStream = "surrogate-in-input-stream", e.nonVoidHtmlElementStartTagWithTrailingSolidus = "non-void-html-element-start-tag-with-trailing-solidus", e.endTagWithAttributes = "end-tag-with-attributes", e.endTagWithTrailingSolidus = "end-tag-with-trailing-solidus", e.unexpectedSolidusInTag = "unexpected-solidus-in-tag", e.unexpectedNullCharacter = "unexpected-null-character", e.unexpectedQuestionMarkInsteadOfTagName = "unexpected-question-mark-instead-of-tag-name", e.invalidFirstCharacterOfTagName = "invalid-first-character-of-tag-name", e.unexpectedEqualsSignBeforeAttributeName = "unexpected-equals-sign-before-attribute-name", e.missingEndTagName = "missing-end-tag-name", e.unexpectedCharacterInAttributeName = "unexpected-character-in-attribute-name", e.unknownNamedCharacterReference = "unknown-named-character-reference", e.missingSemicolonAfterCharacterReference = "missing-semicolon-after-character-reference", e.unexpectedCharacterAfterDoctypeSystemIdentifier = "unexpected-character-after-doctype-system-identifier", e.unexpectedCharacterInUnquotedAttributeValue = "unexpected-character-in-unquoted-attribute-value", e.eofBeforeTagName = "eof-before-tag-name", e.eofInTag = "eof-in-tag", e.missingAttributeValue = "missing-attribute-value", e.missingWhitespaceBetweenAttributes = "missing-whitespace-between-attributes", e.missingWhitespaceAfterDoctypePublicKeyword = "missing-whitespace-after-doctype-public-keyword", e.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers = "missing-whitespace-between-doctype-public-and-system-identifiers", e.missingWhitespaceAfterDoctypeSystemKeyword = "missing-whitespace-after-doctype-system-keyword", e.missingQuoteBeforeDoctypePublicIdentifier = "missing-quote-before-doctype-public-identifier", e.missingQuoteBeforeDoctypeSystemIdentifier = "missing-quote-before-doctype-system-identifier", e.missingDoctypePublicIdentifier = "missing-doctype-public-identifier", e.missingDoctypeSystemIdentifier = "missing-doctype-system-identifier", e.abruptDoctypePublicIdentifier = "abrupt-doctype-public-identifier", e.abruptDoctypeSystemIdentifier = "abrupt-doctype-system-identifier", e.cdataInHtmlContent = "cdata-in-html-content", e.incorrectlyOpenedComment = "incorrectly-opened-comment", e.eofInScriptHtmlCommentLikeText = "eof-in-script-html-comment-like-text", e.eofInDoctype = "eof-in-doctype", e.nestedComment = "nested-comment", e.abruptClosingOfEmptyComment = "abrupt-closing-of-empty-comment", e.eofInComment = "eof-in-comment", e.incorrectlyClosedComment = "incorrectly-closed-comment", e.eofInCdata = "eof-in-cdata", e.absenceOfDigitsInNumericCharacterReference = "absence-of-digits-in-numeric-character-reference", e.nullCharacterReference = "null-character-reference", e.surrogateCharacterReference = "surrogate-character-reference", e.characterReferenceOutsideUnicodeRange = "character-reference-outside-unicode-range", e.controlCharacterReference = "control-character-reference", e.noncharacterCharacterReference = "noncharacter-character-reference", e.missingWhitespaceBeforeDoctypeName = "missing-whitespace-before-doctype-name", e.missingDoctypeName = "missing-doctype-name", e.invalidCharacterSequenceAfterDoctypeName = "invalid-character-sequence-after-doctype-name", e.duplicateAttribute = "duplicate-attribute", e.nonConformingDoctype = "non-conforming-doctype", e.missingDoctype = "missing-doctype", e.misplacedDoctype = "misplaced-doctype", e.endTagWithoutMatchingOpenElement = "end-tag-without-matching-open-element", e.closingOfElementWithOpenChildElements = "closing-of-element-with-open-child-elements", e.disallowedContentInNoscriptInHead = "disallowed-content-in-noscript-in-head", e.openElementsLeftAfterEof = "open-elements-left-after-eof", e.abandonedHeadElementChild = "abandoned-head-element-child", e.misplacedStartTagForHeadElement = "misplaced-start-tag-for-head-element", e.nestedNoscriptInHead = "nested-noscript-in-head", e.eofInElementThatCanContainOnlyText = "eof-in-element-that-can-contain-only-text";
})(f || (f = {}));
const Tu = 65536;
class mu {
  constructor(t) {
    this.handler = t, this.html = "", this.pos = -1, this.lastGapPos = -2, this.gapStack = [], this.skipNextNewLine = !1, this.lastChunkWritten = !1, this.endOfChunkHit = !1, this.bufferWaterline = Tu, this.isEol = !1, this.lineStartPos = 0, this.droppedBufferSize = 0, this.line = 1, this.lastErrOffset = -1;
  }
  /** The column on the current line. If we just saw a gap (eg. a surrogate pair), return the index before. */
  get col() {
    return this.pos - this.lineStartPos + +(this.lastGapPos !== this.pos);
  }
  get offset() {
    return this.droppedBufferSize + this.pos;
  }
  getError(t, u) {
    const { line: s, col: n, offset: o } = this, E = n + u, l = o + u;
    return {
      code: t,
      startLine: s,
      endLine: s,
      startCol: E,
      endCol: E,
      startOffset: l,
      endOffset: l
    };
  }
  _err(t) {
    this.handler.onParseError && this.lastErrOffset !== this.offset && (this.lastErrOffset = this.offset, this.handler.onParseError(this.getError(t, 0)));
  }
  _addGap() {
    this.gapStack.push(this.lastGapPos), this.lastGapPos = this.pos;
  }
  _processSurrogate(t) {
    if (this.pos !== this.html.length - 1) {
      const u = this.html.charCodeAt(this.pos + 1);
      if (lu(u))
        return this.pos++, this._addGap(), hu(t, u);
    } else if (!this.lastChunkWritten)
      return this.endOfChunkHit = !0, r.EOF;
    return this._err(f.surrogateInInputStream), t;
  }
  willDropParsedChunk() {
    return this.pos > this.bufferWaterline;
  }
  dropParsedChunk() {
    this.willDropParsedChunk() && (this.html = this.html.substring(this.pos), this.lineStartPos -= this.pos, this.droppedBufferSize += this.pos, this.pos = 0, this.lastGapPos = -2, this.gapStack.length = 0);
  }
  write(t, u) {
    this.html.length > 0 ? this.html += t : this.html = t, this.endOfChunkHit = !1, this.lastChunkWritten = u;
  }
  insertHtmlAtCurrentPos(t) {
    this.html = this.html.substring(0, this.pos + 1) + t + this.html.substring(this.pos + 1), this.endOfChunkHit = !1;
  }
  startsWith(t, u) {
    if (this.pos + t.length > this.html.length)
      return this.endOfChunkHit = !this.lastChunkWritten, !1;
    if (u)
      return this.html.startsWith(t, this.pos);
    for (let s = 0; s < t.length; s++)
      if ((this.html.charCodeAt(this.pos + s) | 32) !== t.charCodeAt(s))
        return !1;
    return !0;
  }
  peek(t) {
    const u = this.pos + t;
    if (u >= this.html.length)
      return this.endOfChunkHit = !this.lastChunkWritten, r.EOF;
    const s = this.html.charCodeAt(u);
    return s === r.CARRIAGE_RETURN ? r.LINE_FEED : s;
  }
  advance() {
    if (this.pos++, this.isEol && (this.isEol = !1, this.line++, this.lineStartPos = this.pos), this.pos >= this.html.length)
      return this.endOfChunkHit = !this.lastChunkWritten, r.EOF;
    let t = this.html.charCodeAt(this.pos);
    return t === r.CARRIAGE_RETURN ? (this.isEol = !0, this.skipNextNewLine = !0, r.LINE_FEED) : t === r.LINE_FEED && (this.isEol = !0, this.skipNextNewLine) ? (this.line--, this.skipNextNewLine = !1, this._addGap(), this.advance()) : (this.skipNextNewLine = !1, At(t) && (t = this._processSurrogate(t)), this.handler.onParseError === null || t > 31 && t < 127 || t === r.LINE_FEED || t === r.CARRIAGE_RETURN || t > 159 && t < 64976 || this._checkForProblematicCharacters(t), t);
  }
  _checkForProblematicCharacters(t) {
    pt(t) ? this._err(f.controlCharacterInInputStream) : It(t) && this._err(f.noncharacterInInputStream);
  }
  retreat(t) {
    for (this.pos -= t; this.pos < this.lastGapPos; )
      this.lastGapPos = this.gapStack.pop(), this.pos--;
    this.isEol = !1;
  }
}
var p;
(function(e) {
  e[e.CHARACTER = 0] = "CHARACTER", e[e.NULL_CHARACTER = 1] = "NULL_CHARACTER", e[e.WHITESPACE_CHARACTER = 2] = "WHITESPACE_CHARACTER", e[e.START_TAG = 3] = "START_TAG", e[e.END_TAG = 4] = "END_TAG", e[e.COMMENT = 5] = "COMMENT", e[e.DOCTYPE = 6] = "DOCTYPE", e[e.EOF = 7] = "EOF", e[e.HIBERNATION = 8] = "HIBERNATION";
})(p || (p = {}));
function Nt(e, t) {
  for (let u = e.attrs.length - 1; u >= 0; u--)
    if (e.attrs[u].name === t)
      return e.attrs[u].value;
  return null;
}
const bu = /* @__PURE__ */ new Uint16Array(
  // prettier-ignore
  /* @__PURE__ */ 'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map((e) => e.charCodeAt(0))
), _u = /* @__PURE__ */ new Map([
  [0, 65533],
  // C1 Unicode control character reference replacements
  [128, 8364],
  [130, 8218],
  [131, 402],
  [132, 8222],
  [133, 8230],
  [134, 8224],
  [135, 8225],
  [136, 710],
  [137, 8240],
  [138, 352],
  [139, 8249],
  [140, 338],
  [142, 381],
  [145, 8216],
  [146, 8217],
  [147, 8220],
  [148, 8221],
  [149, 8226],
  [150, 8211],
  [151, 8212],
  [152, 732],
  [153, 8482],
  [154, 353],
  [155, 8250],
  [156, 339],
  [158, 382],
  [159, 376]
]);
function Au(e) {
  var t;
  return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : (t = _u.get(e)) !== null && t !== void 0 ? t : e;
}
var S;
(function(e) {
  e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z";
})(S || (S = {}));
const pu = 32;
var v;
(function(e) {
  e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE";
})(v || (v = {}));
function Le(e) {
  return e >= S.ZERO && e <= S.NINE;
}
function Iu(e) {
  return e >= S.UPPER_A && e <= S.UPPER_F || e >= S.LOWER_A && e <= S.LOWER_F;
}
function Nu(e) {
  return e >= S.UPPER_A && e <= S.UPPER_Z || e >= S.LOWER_A && e <= S.LOWER_Z || Le(e);
}
function Cu(e) {
  return e === S.EQUALS || Nu(e);
}
var g;
(function(e) {
  e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity";
})(g || (g = {}));
var F;
(function(e) {
  e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute";
})(F || (F = {}));
class gu {
  constructor(t, u, s) {
    this.decodeTree = t, this.emitCodePoint = u, this.errors = s, this.state = g.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = F.Strict;
  }
  /** Resets the instance to make it reusable. */
  startEntity(t) {
    this.decodeMode = t, this.state = g.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
  }
  /**
   * Write an entity to the decoder. This can be called multiple times with partial entities.
   * If the entity is incomplete, the decoder will return -1.
   *
   * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
   * entity is incomplete, and resume when the next string is written.
   *
   * @param input The string containing the entity (or a continuation of the entity).
   * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  write(t, u) {
    switch (this.state) {
      case g.EntityStart:
        return t.charCodeAt(u) === S.NUM ? (this.state = g.NumericStart, this.consumed += 1, this.stateNumericStart(t, u + 1)) : (this.state = g.NamedEntity, this.stateNamedEntity(t, u));
      case g.NumericStart:
        return this.stateNumericStart(t, u);
      case g.NumericDecimal:
        return this.stateNumericDecimal(t, u);
      case g.NumericHex:
        return this.stateNumericHex(t, u);
      case g.NamedEntity:
        return this.stateNamedEntity(t, u);
    }
  }
  /**
   * Switches between the numeric decimal and hexadecimal states.
   *
   * Equivalent to the `Numeric character reference state` in the HTML spec.
   *
   * @param input The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericStart(t, u) {
    return u >= t.length ? -1 : (t.charCodeAt(u) | pu) === S.LOWER_X ? (this.state = g.NumericHex, this.consumed += 1, this.stateNumericHex(t, u + 1)) : (this.state = g.NumericDecimal, this.stateNumericDecimal(t, u));
  }
  addToNumericResult(t, u, s, n) {
    if (u !== s) {
      const o = s - u;
      this.result = this.result * Math.pow(n, o) + Number.parseInt(t.substr(u, o), n), this.consumed += o;
    }
  }
  /**
   * Parses a hexadecimal numeric entity.
   *
   * Equivalent to the `Hexademical character reference state` in the HTML spec.
   *
   * @param input The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericHex(t, u) {
    const s = u;
    for (; u < t.length; ) {
      const n = t.charCodeAt(u);
      if (Le(n) || Iu(n))
        u += 1;
      else
        return this.addToNumericResult(t, s, u, 16), this.emitNumericEntity(n, 3);
    }
    return this.addToNumericResult(t, s, u, 16), -1;
  }
  /**
   * Parses a decimal numeric entity.
   *
   * Equivalent to the `Decimal character reference state` in the HTML spec.
   *
   * @param input The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericDecimal(t, u) {
    const s = u;
    for (; u < t.length; ) {
      const n = t.charCodeAt(u);
      if (Le(n))
        u += 1;
      else
        return this.addToNumericResult(t, s, u, 10), this.emitNumericEntity(n, 2);
    }
    return this.addToNumericResult(t, s, u, 10), -1;
  }
  /**
   * Validate and emit a numeric entity.
   *
   * Implements the logic from the `Hexademical character reference start
   * state` and `Numeric character reference end state` in the HTML spec.
   *
   * @param lastCp The last code point of the entity. Used to see if the
   *               entity was terminated with a semicolon.
   * @param expectedLength The minimum number of characters that should be
   *                       consumed. Used to validate that at least one digit
   *                       was consumed.
   * @returns The number of characters that were consumed.
   */
  emitNumericEntity(t, u) {
    var s;
    if (this.consumed <= u)
      return (s = this.errors) === null || s === void 0 || s.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
    if (t === S.SEMI)
      this.consumed += 1;
    else if (this.decodeMode === F.Strict)
      return 0;
    return this.emitCodePoint(Au(this.result), this.consumed), this.errors && (t !== S.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
  }
  /**
   * Parses a named entity.
   *
   * Equivalent to the `Named character reference state` in the HTML spec.
   *
   * @param input The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNamedEntity(t, u) {
    const { decodeTree: s } = this;
    let n = s[this.treeIndex], o = (n & v.VALUE_LENGTH) >> 14;
    for (; u < t.length; u++, this.excess++) {
      const E = t.charCodeAt(u);
      if (this.treeIndex = Su(s, n, this.treeIndex + Math.max(1, o), E), this.treeIndex < 0)
        return this.result === 0 || // If we are parsing an attribute
        this.decodeMode === F.Attribute && // We shouldn't have consumed any characters after the entity,
        (o === 0 || // And there should be no invalid characters.
        Cu(E)) ? 0 : this.emitNotTerminatedNamedEntity();
      if (n = s[this.treeIndex], o = (n & v.VALUE_LENGTH) >> 14, o !== 0) {
        if (E === S.SEMI)
          return this.emitNamedEntityData(this.treeIndex, o, this.consumed + this.excess);
        this.decodeMode !== F.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
      }
    }
    return -1;
  }
  /**
   * Emit a named entity that was not terminated with a semicolon.
   *
   * @returns The number of characters consumed.
   */
  emitNotTerminatedNamedEntity() {
    var t;
    const { result: u, decodeTree: s } = this, n = (s[u] & v.VALUE_LENGTH) >> 14;
    return this.emitNamedEntityData(u, n, this.consumed), (t = this.errors) === null || t === void 0 || t.missingSemicolonAfterCharacterReference(), this.consumed;
  }
  /**
   * Emit a named entity.
   *
   * @param result The index of the entity in the decode tree.
   * @param valueLength The number of bytes in the entity.
   * @param consumed The number of characters consumed.
   *
   * @returns The number of characters consumed.
   */
  emitNamedEntityData(t, u, s) {
    const { decodeTree: n } = this;
    return this.emitCodePoint(u === 1 ? n[t] & ~v.VALUE_LENGTH : n[t + 1], s), u === 3 && this.emitCodePoint(n[t + 2], s), s;
  }
  /**
   * Signal to the parser that the end of the input was reached.
   *
   * Remaining data will be emitted and relevant errors will be produced.
   *
   * @returns The number of characters consumed.
   */
  end() {
    var t;
    switch (this.state) {
      case g.NamedEntity:
        return this.result !== 0 && (this.decodeMode !== F.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      // Otherwise, emit a numeric entity if we have one.
      case g.NumericDecimal:
        return this.emitNumericEntity(0, 2);
      case g.NumericHex:
        return this.emitNumericEntity(0, 3);
      case g.NumericStart:
        return (t = this.errors) === null || t === void 0 || t.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
      case g.EntityStart:
        return 0;
    }
  }
}
function Su(e, t, u, s) {
  const n = (t & v.BRANCH_LENGTH) >> 7, o = t & v.JUMP_TABLE;
  if (n === 0)
    return o !== 0 && s === o ? u : -1;
  if (o) {
    const T = s - o;
    return T < 0 || T >= n ? -1 : e[u + T] - 1;
  }
  let E = u, l = E + n - 1;
  for (; E <= l; ) {
    const T = E + l >>> 1, m = e[T];
    if (m < s)
      E = T + 1;
    else if (m > s)
      l = T - 1;
    else
      return e[T + n];
  }
  return -1;
}
var h;
(function(e) {
  e.HTML = "http://www.w3.org/1999/xhtml", e.MATHML = "http://www.w3.org/1998/Math/MathML", e.SVG = "http://www.w3.org/2000/svg", e.XLINK = "http://www.w3.org/1999/xlink", e.XML = "http://www.w3.org/XML/1998/namespace", e.XMLNS = "http://www.w3.org/2000/xmlns/";
})(h || (h = {}));
var Q;
(function(e) {
  e.TYPE = "type", e.ACTION = "action", e.ENCODING = "encoding", e.PROMPT = "prompt", e.NAME = "name", e.COLOR = "color", e.FACE = "face", e.SIZE = "size";
})(Q || (Q = {}));
var M;
(function(e) {
  e.NO_QUIRKS = "no-quirks", e.QUIRKS = "quirks", e.LIMITED_QUIRKS = "limited-quirks";
})(M || (M = {}));
var d;
(function(e) {
  e.A = "a", e.ADDRESS = "address", e.ANNOTATION_XML = "annotation-xml", e.APPLET = "applet", e.AREA = "area", e.ARTICLE = "article", e.ASIDE = "aside", e.B = "b", e.BASE = "base", e.BASEFONT = "basefont", e.BGSOUND = "bgsound", e.BIG = "big", e.BLOCKQUOTE = "blockquote", e.BODY = "body", e.BR = "br", e.BUTTON = "button", e.CAPTION = "caption", e.CENTER = "center", e.CODE = "code", e.COL = "col", e.COLGROUP = "colgroup", e.DD = "dd", e.DESC = "desc", e.DETAILS = "details", e.DIALOG = "dialog", e.DIR = "dir", e.DIV = "div", e.DL = "dl", e.DT = "dt", e.EM = "em", e.EMBED = "embed", e.FIELDSET = "fieldset", e.FIGCAPTION = "figcaption", e.FIGURE = "figure", e.FONT = "font", e.FOOTER = "footer", e.FOREIGN_OBJECT = "foreignObject", e.FORM = "form", e.FRAME = "frame", e.FRAMESET = "frameset", e.H1 = "h1", e.H2 = "h2", e.H3 = "h3", e.H4 = "h4", e.H5 = "h5", e.H6 = "h6", e.HEAD = "head", e.HEADER = "header", e.HGROUP = "hgroup", e.HR = "hr", e.HTML = "html", e.I = "i", e.IMG = "img", e.IMAGE = "image", e.INPUT = "input", e.IFRAME = "iframe", e.KEYGEN = "keygen", e.LABEL = "label", e.LI = "li", e.LINK = "link", e.LISTING = "listing", e.MAIN = "main", e.MALIGNMARK = "malignmark", e.MARQUEE = "marquee", e.MATH = "math", e.MENU = "menu", e.META = "meta", e.MGLYPH = "mglyph", e.MI = "mi", e.MO = "mo", e.MN = "mn", e.MS = "ms", e.MTEXT = "mtext", e.NAV = "nav", e.NOBR = "nobr", e.NOFRAMES = "noframes", e.NOEMBED = "noembed", e.NOSCRIPT = "noscript", e.OBJECT = "object", e.OL = "ol", e.OPTGROUP = "optgroup", e.OPTION = "option", e.P = "p", e.PARAM = "param", e.PLAINTEXT = "plaintext", e.PRE = "pre", e.RB = "rb", e.RP = "rp", e.RT = "rt", e.RTC = "rtc", e.RUBY = "ruby", e.S = "s", e.SCRIPT = "script", e.SEARCH = "search", e.SECTION = "section", e.SELECT = "select", e.SOURCE = "source", e.SMALL = "small", e.SPAN = "span", e.STRIKE = "strike", e.STRONG = "strong", e.STYLE = "style", e.SUB = "sub", e.SUMMARY = "summary", e.SUP = "sup", e.TABLE = "table", e.TBODY = "tbody", e.TEMPLATE = "template", e.TEXTAREA = "textarea", e.TFOOT = "tfoot", e.TD = "td", e.TH = "th", e.THEAD = "thead", e.TITLE = "title", e.TR = "tr", e.TRACK = "track", e.TT = "tt", e.U = "u", e.UL = "ul", e.SVG = "svg", e.VAR = "var", e.WBR = "wbr", e.XMP = "xmp";
})(d || (d = {}));
var a;
(function(e) {
  e[e.UNKNOWN = 0] = "UNKNOWN", e[e.A = 1] = "A", e[e.ADDRESS = 2] = "ADDRESS", e[e.ANNOTATION_XML = 3] = "ANNOTATION_XML", e[e.APPLET = 4] = "APPLET", e[e.AREA = 5] = "AREA", e[e.ARTICLE = 6] = "ARTICLE", e[e.ASIDE = 7] = "ASIDE", e[e.B = 8] = "B", e[e.BASE = 9] = "BASE", e[e.BASEFONT = 10] = "BASEFONT", e[e.BGSOUND = 11] = "BGSOUND", e[e.BIG = 12] = "BIG", e[e.BLOCKQUOTE = 13] = "BLOCKQUOTE", e[e.BODY = 14] = "BODY", e[e.BR = 15] = "BR", e[e.BUTTON = 16] = "BUTTON", e[e.CAPTION = 17] = "CAPTION", e[e.CENTER = 18] = "CENTER", e[e.CODE = 19] = "CODE", e[e.COL = 20] = "COL", e[e.COLGROUP = 21] = "COLGROUP", e[e.DD = 22] = "DD", e[e.DESC = 23] = "DESC", e[e.DETAILS = 24] = "DETAILS", e[e.DIALOG = 25] = "DIALOG", e[e.DIR = 26] = "DIR", e[e.DIV = 27] = "DIV", e[e.DL = 28] = "DL", e[e.DT = 29] = "DT", e[e.EM = 30] = "EM", e[e.EMBED = 31] = "EMBED", e[e.FIELDSET = 32] = "FIELDSET", e[e.FIGCAPTION = 33] = "FIGCAPTION", e[e.FIGURE = 34] = "FIGURE", e[e.FONT = 35] = "FONT", e[e.FOOTER = 36] = "FOOTER", e[e.FOREIGN_OBJECT = 37] = "FOREIGN_OBJECT", e[e.FORM = 38] = "FORM", e[e.FRAME = 39] = "FRAME", e[e.FRAMESET = 40] = "FRAMESET", e[e.H1 = 41] = "H1", e[e.H2 = 42] = "H2", e[e.H3 = 43] = "H3", e[e.H4 = 44] = "H4", e[e.H5 = 45] = "H5", e[e.H6 = 46] = "H6", e[e.HEAD = 47] = "HEAD", e[e.HEADER = 48] = "HEADER", e[e.HGROUP = 49] = "HGROUP", e[e.HR = 50] = "HR", e[e.HTML = 51] = "HTML", e[e.I = 52] = "I", e[e.IMG = 53] = "IMG", e[e.IMAGE = 54] = "IMAGE", e[e.INPUT = 55] = "INPUT", e[e.IFRAME = 56] = "IFRAME", e[e.KEYGEN = 57] = "KEYGEN", e[e.LABEL = 58] = "LABEL", e[e.LI = 59] = "LI", e[e.LINK = 60] = "LINK", e[e.LISTING = 61] = "LISTING", e[e.MAIN = 62] = "MAIN", e[e.MALIGNMARK = 63] = "MALIGNMARK", e[e.MARQUEE = 64] = "MARQUEE", e[e.MATH = 65] = "MATH", e[e.MENU = 66] = "MENU", e[e.META = 67] = "META", e[e.MGLYPH = 68] = "MGLYPH", e[e.MI = 69] = "MI", e[e.MO = 70] = "MO", e[e.MN = 71] = "MN", e[e.MS = 72] = "MS", e[e.MTEXT = 73] = "MTEXT", e[e.NAV = 74] = "NAV", e[e.NOBR = 75] = "NOBR", e[e.NOFRAMES = 76] = "NOFRAMES", e[e.NOEMBED = 77] = "NOEMBED", e[e.NOSCRIPT = 78] = "NOSCRIPT", e[e.OBJECT = 79] = "OBJECT", e[e.OL = 80] = "OL", e[e.OPTGROUP = 81] = "OPTGROUP", e[e.OPTION = 82] = "OPTION", e[e.P = 83] = "P", e[e.PARAM = 84] = "PARAM", e[e.PLAINTEXT = 85] = "PLAINTEXT", e[e.PRE = 86] = "PRE", e[e.RB = 87] = "RB", e[e.RP = 88] = "RP", e[e.RT = 89] = "RT", e[e.RTC = 90] = "RTC", e[e.RUBY = 91] = "RUBY", e[e.S = 92] = "S", e[e.SCRIPT = 93] = "SCRIPT", e[e.SEARCH = 94] = "SEARCH", e[e.SECTION = 95] = "SECTION", e[e.SELECT = 96] = "SELECT", e[e.SOURCE = 97] = "SOURCE", e[e.SMALL = 98] = "SMALL", e[e.SPAN = 99] = "SPAN", e[e.STRIKE = 100] = "STRIKE", e[e.STRONG = 101] = "STRONG", e[e.STYLE = 102] = "STYLE", e[e.SUB = 103] = "SUB", e[e.SUMMARY = 104] = "SUMMARY", e[e.SUP = 105] = "SUP", e[e.TABLE = 106] = "TABLE", e[e.TBODY = 107] = "TBODY", e[e.TEMPLATE = 108] = "TEMPLATE", e[e.TEXTAREA = 109] = "TEXTAREA", e[e.TFOOT = 110] = "TFOOT", e[e.TD = 111] = "TD", e[e.TH = 112] = "TH", e[e.THEAD = 113] = "THEAD", e[e.TITLE = 114] = "TITLE", e[e.TR = 115] = "TR", e[e.TRACK = 116] = "TRACK", e[e.TT = 117] = "TT", e[e.U = 118] = "U", e[e.UL = 119] = "UL", e[e.SVG = 120] = "SVG", e[e.VAR = 121] = "VAR", e[e.WBR = 122] = "WBR", e[e.XMP = 123] = "XMP";
})(a || (a = {}));
const Ou = /* @__PURE__ */ new Map([
  [d.A, a.A],
  [d.ADDRESS, a.ADDRESS],
  [d.ANNOTATION_XML, a.ANNOTATION_XML],
  [d.APPLET, a.APPLET],
  [d.AREA, a.AREA],
  [d.ARTICLE, a.ARTICLE],
  [d.ASIDE, a.ASIDE],
  [d.B, a.B],
  [d.BASE, a.BASE],
  [d.BASEFONT, a.BASEFONT],
  [d.BGSOUND, a.BGSOUND],
  [d.BIG, a.BIG],
  [d.BLOCKQUOTE, a.BLOCKQUOTE],
  [d.BODY, a.BODY],
  [d.BR, a.BR],
  [d.BUTTON, a.BUTTON],
  [d.CAPTION, a.CAPTION],
  [d.CENTER, a.CENTER],
  [d.CODE, a.CODE],
  [d.COL, a.COL],
  [d.COLGROUP, a.COLGROUP],
  [d.DD, a.DD],
  [d.DESC, a.DESC],
  [d.DETAILS, a.DETAILS],
  [d.DIALOG, a.DIALOG],
  [d.DIR, a.DIR],
  [d.DIV, a.DIV],
  [d.DL, a.DL],
  [d.DT, a.DT],
  [d.EM, a.EM],
  [d.EMBED, a.EMBED],
  [d.FIELDSET, a.FIELDSET],
  [d.FIGCAPTION, a.FIGCAPTION],
  [d.FIGURE, a.FIGURE],
  [d.FONT, a.FONT],
  [d.FOOTER, a.FOOTER],
  [d.FOREIGN_OBJECT, a.FOREIGN_OBJECT],
  [d.FORM, a.FORM],
  [d.FRAME, a.FRAME],
  [d.FRAMESET, a.FRAMESET],
  [d.H1, a.H1],
  [d.H2, a.H2],
  [d.H3, a.H3],
  [d.H4, a.H4],
  [d.H5, a.H5],
  [d.H6, a.H6],
  [d.HEAD, a.HEAD],
  [d.HEADER, a.HEADER],
  [d.HGROUP, a.HGROUP],
  [d.HR, a.HR],
  [d.HTML, a.HTML],
  [d.I, a.I],
  [d.IMG, a.IMG],
  [d.IMAGE, a.IMAGE],
  [d.INPUT, a.INPUT],
  [d.IFRAME, a.IFRAME],
  [d.KEYGEN, a.KEYGEN],
  [d.LABEL, a.LABEL],
  [d.LI, a.LI],
  [d.LINK, a.LINK],
  [d.LISTING, a.LISTING],
  [d.MAIN, a.MAIN],
  [d.MALIGNMARK, a.MALIGNMARK],
  [d.MARQUEE, a.MARQUEE],
  [d.MATH, a.MATH],
  [d.MENU, a.MENU],
  [d.META, a.META],
  [d.MGLYPH, a.MGLYPH],
  [d.MI, a.MI],
  [d.MO, a.MO],
  [d.MN, a.MN],
  [d.MS, a.MS],
  [d.MTEXT, a.MTEXT],
  [d.NAV, a.NAV],
  [d.NOBR, a.NOBR],
  [d.NOFRAMES, a.NOFRAMES],
  [d.NOEMBED, a.NOEMBED],
  [d.NOSCRIPT, a.NOSCRIPT],
  [d.OBJECT, a.OBJECT],
  [d.OL, a.OL],
  [d.OPTGROUP, a.OPTGROUP],
  [d.OPTION, a.OPTION],
  [d.P, a.P],
  [d.PARAM, a.PARAM],
  [d.PLAINTEXT, a.PLAINTEXT],
  [d.PRE, a.PRE],
  [d.RB, a.RB],
  [d.RP, a.RP],
  [d.RT, a.RT],
  [d.RTC, a.RTC],
  [d.RUBY, a.RUBY],
  [d.S, a.S],
  [d.SCRIPT, a.SCRIPT],
  [d.SEARCH, a.SEARCH],
  [d.SECTION, a.SECTION],
  [d.SELECT, a.SELECT],
  [d.SOURCE, a.SOURCE],
  [d.SMALL, a.SMALL],
  [d.SPAN, a.SPAN],
  [d.STRIKE, a.STRIKE],
  [d.STRONG, a.STRONG],
  [d.STYLE, a.STYLE],
  [d.SUB, a.SUB],
  [d.SUMMARY, a.SUMMARY],
  [d.SUP, a.SUP],
  [d.TABLE, a.TABLE],
  [d.TBODY, a.TBODY],
  [d.TEMPLATE, a.TEMPLATE],
  [d.TEXTAREA, a.TEXTAREA],
  [d.TFOOT, a.TFOOT],
  [d.TD, a.TD],
  [d.TH, a.TH],
  [d.THEAD, a.THEAD],
  [d.TITLE, a.TITLE],
  [d.TR, a.TR],
  [d.TRACK, a.TRACK],
  [d.TT, a.TT],
  [d.U, a.U],
  [d.UL, a.UL],
  [d.SVG, a.SVG],
  [d.VAR, a.VAR],
  [d.WBR, a.WBR],
  [d.XMP, a.XMP]
]);
function Ee(e) {
  var t;
  return (t = Ou.get(e)) !== null && t !== void 0 ? t : a.UNKNOWN;
}
const b = a, Lu = {
  [h.HTML]: /* @__PURE__ */ new Set([
    b.ADDRESS,
    b.APPLET,
    b.AREA,
    b.ARTICLE,
    b.ASIDE,
    b.BASE,
    b.BASEFONT,
    b.BGSOUND,
    b.BLOCKQUOTE,
    b.BODY,
    b.BR,
    b.BUTTON,
    b.CAPTION,
    b.CENTER,
    b.COL,
    b.COLGROUP,
    b.DD,
    b.DETAILS,
    b.DIR,
    b.DIV,
    b.DL,
    b.DT,
    b.EMBED,
    b.FIELDSET,
    b.FIGCAPTION,
    b.FIGURE,
    b.FOOTER,
    b.FORM,
    b.FRAME,
    b.FRAMESET,
    b.H1,
    b.H2,
    b.H3,
    b.H4,
    b.H5,
    b.H6,
    b.HEAD,
    b.HEADER,
    b.HGROUP,
    b.HR,
    b.HTML,
    b.IFRAME,
    b.IMG,
    b.INPUT,
    b.LI,
    b.LINK,
    b.LISTING,
    b.MAIN,
    b.MARQUEE,
    b.MENU,
    b.META,
    b.NAV,
    b.NOEMBED,
    b.NOFRAMES,
    b.NOSCRIPT,
    b.OBJECT,
    b.OL,
    b.P,
    b.PARAM,
    b.PLAINTEXT,
    b.PRE,
    b.SCRIPT,
    b.SECTION,
    b.SELECT,
    b.SOURCE,
    b.STYLE,
    b.SUMMARY,
    b.TABLE,
    b.TBODY,
    b.TD,
    b.TEMPLATE,
    b.TEXTAREA,
    b.TFOOT,
    b.TH,
    b.THEAD,
    b.TITLE,
    b.TR,
    b.TRACK,
    b.UL,
    b.WBR,
    b.XMP
  ]),
  [h.MATHML]: /* @__PURE__ */ new Set([b.MI, b.MO, b.MN, b.MS, b.MTEXT, b.ANNOTATION_XML]),
  [h.SVG]: /* @__PURE__ */ new Set([b.TITLE, b.FOREIGN_OBJECT, b.DESC]),
  [h.XLINK]: /* @__PURE__ */ new Set(),
  [h.XML]: /* @__PURE__ */ new Set(),
  [h.XMLNS]: /* @__PURE__ */ new Set()
}, Re = /* @__PURE__ */ new Set([b.H1, b.H2, b.H3, b.H4, b.H5, b.H6]);
d.STYLE, d.SCRIPT, d.XMP, d.IFRAME, d.NOEMBED, d.NOFRAMES, d.PLAINTEXT;
var i;
(function(e) {
  e[e.DATA = 0] = "DATA", e[e.RCDATA = 1] = "RCDATA", e[e.RAWTEXT = 2] = "RAWTEXT", e[e.SCRIPT_DATA = 3] = "SCRIPT_DATA", e[e.PLAINTEXT = 4] = "PLAINTEXT", e[e.TAG_OPEN = 5] = "TAG_OPEN", e[e.END_TAG_OPEN = 6] = "END_TAG_OPEN", e[e.TAG_NAME = 7] = "TAG_NAME", e[e.RCDATA_LESS_THAN_SIGN = 8] = "RCDATA_LESS_THAN_SIGN", e[e.RCDATA_END_TAG_OPEN = 9] = "RCDATA_END_TAG_OPEN", e[e.RCDATA_END_TAG_NAME = 10] = "RCDATA_END_TAG_NAME", e[e.RAWTEXT_LESS_THAN_SIGN = 11] = "RAWTEXT_LESS_THAN_SIGN", e[e.RAWTEXT_END_TAG_OPEN = 12] = "RAWTEXT_END_TAG_OPEN", e[e.RAWTEXT_END_TAG_NAME = 13] = "RAWTEXT_END_TAG_NAME", e[e.SCRIPT_DATA_LESS_THAN_SIGN = 14] = "SCRIPT_DATA_LESS_THAN_SIGN", e[e.SCRIPT_DATA_END_TAG_OPEN = 15] = "SCRIPT_DATA_END_TAG_OPEN", e[e.SCRIPT_DATA_END_TAG_NAME = 16] = "SCRIPT_DATA_END_TAG_NAME", e[e.SCRIPT_DATA_ESCAPE_START = 17] = "SCRIPT_DATA_ESCAPE_START", e[e.SCRIPT_DATA_ESCAPE_START_DASH = 18] = "SCRIPT_DATA_ESCAPE_START_DASH", e[e.SCRIPT_DATA_ESCAPED = 19] = "SCRIPT_DATA_ESCAPED", e[e.SCRIPT_DATA_ESCAPED_DASH = 20] = "SCRIPT_DATA_ESCAPED_DASH", e[e.SCRIPT_DATA_ESCAPED_DASH_DASH = 21] = "SCRIPT_DATA_ESCAPED_DASH_DASH", e[e.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN = 22] = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN", e[e.SCRIPT_DATA_ESCAPED_END_TAG_OPEN = 23] = "SCRIPT_DATA_ESCAPED_END_TAG_OPEN", e[e.SCRIPT_DATA_ESCAPED_END_TAG_NAME = 24] = "SCRIPT_DATA_ESCAPED_END_TAG_NAME", e[e.SCRIPT_DATA_DOUBLE_ESCAPE_START = 25] = "SCRIPT_DATA_DOUBLE_ESCAPE_START", e[e.SCRIPT_DATA_DOUBLE_ESCAPED = 26] = "SCRIPT_DATA_DOUBLE_ESCAPED", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH = 27] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH = 28] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN = 29] = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN", e[e.SCRIPT_DATA_DOUBLE_ESCAPE_END = 30] = "SCRIPT_DATA_DOUBLE_ESCAPE_END", e[e.BEFORE_ATTRIBUTE_NAME = 31] = "BEFORE_ATTRIBUTE_NAME", e[e.ATTRIBUTE_NAME = 32] = "ATTRIBUTE_NAME", e[e.AFTER_ATTRIBUTE_NAME = 33] = "AFTER_ATTRIBUTE_NAME", e[e.BEFORE_ATTRIBUTE_VALUE = 34] = "BEFORE_ATTRIBUTE_VALUE", e[e.ATTRIBUTE_VALUE_DOUBLE_QUOTED = 35] = "ATTRIBUTE_VALUE_DOUBLE_QUOTED", e[e.ATTRIBUTE_VALUE_SINGLE_QUOTED = 36] = "ATTRIBUTE_VALUE_SINGLE_QUOTED", e[e.ATTRIBUTE_VALUE_UNQUOTED = 37] = "ATTRIBUTE_VALUE_UNQUOTED", e[e.AFTER_ATTRIBUTE_VALUE_QUOTED = 38] = "AFTER_ATTRIBUTE_VALUE_QUOTED", e[e.SELF_CLOSING_START_TAG = 39] = "SELF_CLOSING_START_TAG", e[e.BOGUS_COMMENT = 40] = "BOGUS_COMMENT", e[e.MARKUP_DECLARATION_OPEN = 41] = "MARKUP_DECLARATION_OPEN", e[e.COMMENT_START = 42] = "COMMENT_START", e[e.COMMENT_START_DASH = 43] = "COMMENT_START_DASH", e[e.COMMENT = 44] = "COMMENT", e[e.COMMENT_LESS_THAN_SIGN = 45] = "COMMENT_LESS_THAN_SIGN", e[e.COMMENT_LESS_THAN_SIGN_BANG = 46] = "COMMENT_LESS_THAN_SIGN_BANG", e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH = 47] = "COMMENT_LESS_THAN_SIGN_BANG_DASH", e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH = 48] = "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH", e[e.COMMENT_END_DASH = 49] = "COMMENT_END_DASH", e[e.COMMENT_END = 50] = "COMMENT_END", e[e.COMMENT_END_BANG = 51] = "COMMENT_END_BANG", e[e.DOCTYPE = 52] = "DOCTYPE", e[e.BEFORE_DOCTYPE_NAME = 53] = "BEFORE_DOCTYPE_NAME", e[e.DOCTYPE_NAME = 54] = "DOCTYPE_NAME", e[e.AFTER_DOCTYPE_NAME = 55] = "AFTER_DOCTYPE_NAME", e[e.AFTER_DOCTYPE_PUBLIC_KEYWORD = 56] = "AFTER_DOCTYPE_PUBLIC_KEYWORD", e[e.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER = 57] = "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER", e[e.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED = 58] = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED", e[e.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED = 59] = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED", e[e.AFTER_DOCTYPE_PUBLIC_IDENTIFIER = 60] = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER", e[e.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS = 61] = "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS", e[e.AFTER_DOCTYPE_SYSTEM_KEYWORD = 62] = "AFTER_DOCTYPE_SYSTEM_KEYWORD", e[e.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER = 63] = "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER", e[e.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED = 64] = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED", e[e.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED = 65] = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED", e[e.AFTER_DOCTYPE_SYSTEM_IDENTIFIER = 66] = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER", e[e.BOGUS_DOCTYPE = 67] = "BOGUS_DOCTYPE", e[e.CDATA_SECTION = 68] = "CDATA_SECTION", e[e.CDATA_SECTION_BRACKET = 69] = "CDATA_SECTION_BRACKET", e[e.CDATA_SECTION_END = 70] = "CDATA_SECTION_END", e[e.CHARACTER_REFERENCE = 71] = "CHARACTER_REFERENCE", e[e.AMBIGUOUS_AMPERSAND = 72] = "AMBIGUOUS_AMPERSAND";
})(i || (i = {}));
const P = {
  DATA: i.DATA,
  RCDATA: i.RCDATA,
  RAWTEXT: i.RAWTEXT,
  SCRIPT_DATA: i.SCRIPT_DATA,
  PLAINTEXT: i.PLAINTEXT,
  CDATA_SECTION: i.CDATA_SECTION
};
function Ru(e) {
  return e >= r.DIGIT_0 && e <= r.DIGIT_9;
}
function j(e) {
  return e >= r.LATIN_CAPITAL_A && e <= r.LATIN_CAPITAL_Z;
}
function Du(e) {
  return e >= r.LATIN_SMALL_A && e <= r.LATIN_SMALL_Z;
}
function w(e) {
  return Du(e) || j(e);
}
function Je(e) {
  return w(e) || Ru(e);
}
function se(e) {
  return e + 32;
}
function Ct(e) {
  return e === r.SPACE || e === r.LINE_FEED || e === r.TABULATION || e === r.FORM_FEED;
}
function Ze(e) {
  return Ct(e) || e === r.SOLIDUS || e === r.GREATER_THAN_SIGN;
}
function Pu(e) {
  return e === r.NULL ? f.nullCharacterReference : e > 1114111 ? f.characterReferenceOutsideUnicodeRange : At(e) ? f.surrogateCharacterReference : It(e) ? f.noncharacterCharacterReference : pt(e) || e === r.CARRIAGE_RETURN ? f.controlCharacterReference : null;
}
class xu {
  constructor(t, u) {
    this.options = t, this.handler = u, this.paused = !1, this.inLoop = !1, this.inForeignNode = !1, this.lastStartTagName = "", this.active = !1, this.state = i.DATA, this.returnState = i.DATA, this.entityStartPos = 0, this.consumedAfterSnapshot = -1, this.currentCharacterToken = null, this.currentToken = null, this.currentAttr = { name: "", value: "" }, this.preprocessor = new mu(u), this.currentLocation = this.getCurrentLocation(-1), this.entityDecoder = new gu(bu, (s, n) => {
      this.preprocessor.pos = this.entityStartPos + n - 1, this._flushCodePointConsumedAsCharacterReference(s);
    }, u.onParseError ? {
      missingSemicolonAfterCharacterReference: () => {
        this._err(f.missingSemicolonAfterCharacterReference, 1);
      },
      absenceOfDigitsInNumericCharacterReference: (s) => {
        this._err(f.absenceOfDigitsInNumericCharacterReference, this.entityStartPos - this.preprocessor.pos + s);
      },
      validateNumericCharacterReference: (s) => {
        const n = Pu(s);
        n && this._err(n, 1);
      }
    } : void 0);
  }
  //Errors
  _err(t, u = 0) {
    var s, n;
    (n = (s = this.handler).onParseError) === null || n === void 0 || n.call(s, this.preprocessor.getError(t, u));
  }
  // NOTE: `offset` may never run across line boundaries.
  getCurrentLocation(t) {
    return this.options.sourceCodeLocationInfo ? {
      startLine: this.preprocessor.line,
      startCol: this.preprocessor.col - t,
      startOffset: this.preprocessor.offset - t,
      endLine: -1,
      endCol: -1,
      endOffset: -1
    } : null;
  }
  _runParsingLoop() {
    if (!this.inLoop) {
      for (this.inLoop = !0; this.active && !this.paused; ) {
        this.consumedAfterSnapshot = 0;
        const t = this._consume();
        this._ensureHibernation() || this._callState(t);
      }
      this.inLoop = !1;
    }
  }
  //API
  pause() {
    this.paused = !0;
  }
  resume(t) {
    if (!this.paused)
      throw new Error("Parser was already resumed");
    this.paused = !1, !this.inLoop && (this._runParsingLoop(), this.paused || t?.());
  }
  write(t, u, s) {
    this.active = !0, this.preprocessor.write(t, u), this._runParsingLoop(), this.paused || s?.();
  }
  insertHtmlAtCurrentPos(t) {
    this.active = !0, this.preprocessor.insertHtmlAtCurrentPos(t), this._runParsingLoop();
  }
  //Hibernation
  _ensureHibernation() {
    return this.preprocessor.endOfChunkHit ? (this.preprocessor.retreat(this.consumedAfterSnapshot), this.consumedAfterSnapshot = 0, this.active = !1, !0) : !1;
  }
  //Consumption
  _consume() {
    return this.consumedAfterSnapshot++, this.preprocessor.advance();
  }
  _advanceBy(t) {
    this.consumedAfterSnapshot += t;
    for (let u = 0; u < t; u++)
      this.preprocessor.advance();
  }
  _consumeSequenceIfMatch(t, u) {
    return this.preprocessor.startsWith(t, u) ? (this._advanceBy(t.length - 1), !0) : !1;
  }
  //Token creation
  _createStartTagToken() {
    this.currentToken = {
      type: p.START_TAG,
      tagName: "",
      tagID: a.UNKNOWN,
      selfClosing: !1,
      ackSelfClosing: !1,
      attrs: [],
      location: this.getCurrentLocation(1)
    };
  }
  _createEndTagToken() {
    this.currentToken = {
      type: p.END_TAG,
      tagName: "",
      tagID: a.UNKNOWN,
      selfClosing: !1,
      ackSelfClosing: !1,
      attrs: [],
      location: this.getCurrentLocation(2)
    };
  }
  _createCommentToken(t) {
    this.currentToken = {
      type: p.COMMENT,
      data: "",
      location: this.getCurrentLocation(t)
    };
  }
  _createDoctypeToken(t) {
    this.currentToken = {
      type: p.DOCTYPE,
      name: t,
      forceQuirks: !1,
      publicId: null,
      systemId: null,
      location: this.currentLocation
    };
  }
  _createCharacterToken(t, u) {
    this.currentCharacterToken = {
      type: t,
      chars: u,
      location: this.currentLocation
    };
  }
  //Tag attributes
  _createAttr(t) {
    this.currentAttr = {
      name: t,
      value: ""
    }, this.currentLocation = this.getCurrentLocation(0);
  }
  _leaveAttrName() {
    var t, u;
    const s = this.currentToken;
    if (Nt(s, this.currentAttr.name) === null) {
      if (s.attrs.push(this.currentAttr), s.location && this.currentLocation) {
        const n = (t = (u = s.location).attrs) !== null && t !== void 0 ? t : u.attrs = /* @__PURE__ */ Object.create(null);
        n[this.currentAttr.name] = this.currentLocation, this._leaveAttrValue();
      }
    } else
      this._err(f.duplicateAttribute);
  }
  _leaveAttrValue() {
    this.currentLocation && (this.currentLocation.endLine = this.preprocessor.line, this.currentLocation.endCol = this.preprocessor.col, this.currentLocation.endOffset = this.preprocessor.offset);
  }
  //Token emission
  prepareToken(t) {
    this._emitCurrentCharacterToken(t.location), this.currentToken = null, t.location && (t.location.endLine = this.preprocessor.line, t.location.endCol = this.preprocessor.col + 1, t.location.endOffset = this.preprocessor.offset + 1), this.currentLocation = this.getCurrentLocation(-1);
  }
  emitCurrentTagToken() {
    const t = this.currentToken;
    this.prepareToken(t), t.tagID = Ee(t.tagName), t.type === p.START_TAG ? (this.lastStartTagName = t.tagName, this.handler.onStartTag(t)) : (t.attrs.length > 0 && this._err(f.endTagWithAttributes), t.selfClosing && this._err(f.endTagWithTrailingSolidus), this.handler.onEndTag(t)), this.preprocessor.dropParsedChunk();
  }
  emitCurrentComment(t) {
    this.prepareToken(t), this.handler.onComment(t), this.preprocessor.dropParsedChunk();
  }
  emitCurrentDoctype(t) {
    this.prepareToken(t), this.handler.onDoctype(t), this.preprocessor.dropParsedChunk();
  }
  _emitCurrentCharacterToken(t) {
    if (this.currentCharacterToken) {
      switch (t && this.currentCharacterToken.location && (this.currentCharacterToken.location.endLine = t.startLine, this.currentCharacterToken.location.endCol = t.startCol, this.currentCharacterToken.location.endOffset = t.startOffset), this.currentCharacterToken.type) {
        case p.CHARACTER: {
          this.handler.onCharacter(this.currentCharacterToken);
          break;
        }
        case p.NULL_CHARACTER: {
          this.handler.onNullCharacter(this.currentCharacterToken);
          break;
        }
        case p.WHITESPACE_CHARACTER: {
          this.handler.onWhitespaceCharacter(this.currentCharacterToken);
          break;
        }
      }
      this.currentCharacterToken = null;
    }
  }
  _emitEOFToken() {
    const t = this.getCurrentLocation(0);
    t && (t.endLine = t.startLine, t.endCol = t.startCol, t.endOffset = t.startOffset), this._emitCurrentCharacterToken(t), this.handler.onEof({ type: p.EOF, location: t }), this.active = !1;
  }
  //Characters emission
  //OPTIMIZATION: The specification uses only one type of character token (one token per character).
  //This causes a huge memory overhead and a lot of unnecessary parser loops. parse5 uses 3 groups of characters.
  //If we have a sequence of characters that belong to the same group, the parser can process it
  //as a single solid character token.
  //So, there are 3 types of character tokens in parse5:
  //1)TokenType.NULL_CHARACTER - \u0000-character sequences (e.g. '\u0000\u0000\u0000')
  //2)TokenType.WHITESPACE_CHARACTER - any whitespace/new-line character sequences (e.g. '\n  \r\t   \f')
  //3)TokenType.CHARACTER - any character sequence which don't belong to groups 1 and 2 (e.g. 'abcdef1234@@#$%^')
  _appendCharToCurrentCharacterToken(t, u) {
    if (this.currentCharacterToken)
      if (this.currentCharacterToken.type === t) {
        this.currentCharacterToken.chars += u;
        return;
      } else
        this.currentLocation = this.getCurrentLocation(0), this._emitCurrentCharacterToken(this.currentLocation), this.preprocessor.dropParsedChunk();
    this._createCharacterToken(t, u);
  }
  _emitCodePoint(t) {
    const u = Ct(t) ? p.WHITESPACE_CHARACTER : t === r.NULL ? p.NULL_CHARACTER : p.CHARACTER;
    this._appendCharToCurrentCharacterToken(u, String.fromCodePoint(t));
  }
  //NOTE: used when we emit characters explicitly.
  //This is always for non-whitespace and non-null characters, which allows us to avoid additional checks.
  _emitChars(t) {
    this._appendCharToCurrentCharacterToken(p.CHARACTER, t);
  }
  // Character reference helpers
  _startCharacterReference() {
    this.returnState = this.state, this.state = i.CHARACTER_REFERENCE, this.entityStartPos = this.preprocessor.pos, this.entityDecoder.startEntity(this._isCharacterReferenceInAttribute() ? F.Attribute : F.Legacy);
  }
  _isCharacterReferenceInAttribute() {
    return this.returnState === i.ATTRIBUTE_VALUE_DOUBLE_QUOTED || this.returnState === i.ATTRIBUTE_VALUE_SINGLE_QUOTED || this.returnState === i.ATTRIBUTE_VALUE_UNQUOTED;
  }
  _flushCodePointConsumedAsCharacterReference(t) {
    this._isCharacterReferenceInAttribute() ? this.currentAttr.value += String.fromCodePoint(t) : this._emitCodePoint(t);
  }
  // Calling states this way turns out to be much faster than any other approach.
  _callState(t) {
    switch (this.state) {
      case i.DATA: {
        this._stateData(t);
        break;
      }
      case i.RCDATA: {
        this._stateRcdata(t);
        break;
      }
      case i.RAWTEXT: {
        this._stateRawtext(t);
        break;
      }
      case i.SCRIPT_DATA: {
        this._stateScriptData(t);
        break;
      }
      case i.PLAINTEXT: {
        this._statePlaintext(t);
        break;
      }
      case i.TAG_OPEN: {
        this._stateTagOpen(t);
        break;
      }
      case i.END_TAG_OPEN: {
        this._stateEndTagOpen(t);
        break;
      }
      case i.TAG_NAME: {
        this._stateTagName(t);
        break;
      }
      case i.RCDATA_LESS_THAN_SIGN: {
        this._stateRcdataLessThanSign(t);
        break;
      }
      case i.RCDATA_END_TAG_OPEN: {
        this._stateRcdataEndTagOpen(t);
        break;
      }
      case i.RCDATA_END_TAG_NAME: {
        this._stateRcdataEndTagName(t);
        break;
      }
      case i.RAWTEXT_LESS_THAN_SIGN: {
        this._stateRawtextLessThanSign(t);
        break;
      }
      case i.RAWTEXT_END_TAG_OPEN: {
        this._stateRawtextEndTagOpen(t);
        break;
      }
      case i.RAWTEXT_END_TAG_NAME: {
        this._stateRawtextEndTagName(t);
        break;
      }
      case i.SCRIPT_DATA_LESS_THAN_SIGN: {
        this._stateScriptDataLessThanSign(t);
        break;
      }
      case i.SCRIPT_DATA_END_TAG_OPEN: {
        this._stateScriptDataEndTagOpen(t);
        break;
      }
      case i.SCRIPT_DATA_END_TAG_NAME: {
        this._stateScriptDataEndTagName(t);
        break;
      }
      case i.SCRIPT_DATA_ESCAPE_START: {
        this._stateScriptDataEscapeStart(t);
        break;
      }
      case i.SCRIPT_DATA_ESCAPE_START_DASH: {
        this._stateScriptDataEscapeStartDash(t);
        break;
      }
      case i.SCRIPT_DATA_ESCAPED: {
        this._stateScriptDataEscaped(t);
        break;
      }
      case i.SCRIPT_DATA_ESCAPED_DASH: {
        this._stateScriptDataEscapedDash(t);
        break;
      }
      case i.SCRIPT_DATA_ESCAPED_DASH_DASH: {
        this._stateScriptDataEscapedDashDash(t);
        break;
      }
      case i.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN: {
        this._stateScriptDataEscapedLessThanSign(t);
        break;
      }
      case i.SCRIPT_DATA_ESCAPED_END_TAG_OPEN: {
        this._stateScriptDataEscapedEndTagOpen(t);
        break;
      }
      case i.SCRIPT_DATA_ESCAPED_END_TAG_NAME: {
        this._stateScriptDataEscapedEndTagName(t);
        break;
      }
      case i.SCRIPT_DATA_DOUBLE_ESCAPE_START: {
        this._stateScriptDataDoubleEscapeStart(t);
        break;
      }
      case i.SCRIPT_DATA_DOUBLE_ESCAPED: {
        this._stateScriptDataDoubleEscaped(t);
        break;
      }
      case i.SCRIPT_DATA_DOUBLE_ESCAPED_DASH: {
        this._stateScriptDataDoubleEscapedDash(t);
        break;
      }
      case i.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH: {
        this._stateScriptDataDoubleEscapedDashDash(t);
        break;
      }
      case i.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN: {
        this._stateScriptDataDoubleEscapedLessThanSign(t);
        break;
      }
      case i.SCRIPT_DATA_DOUBLE_ESCAPE_END: {
        this._stateScriptDataDoubleEscapeEnd(t);
        break;
      }
      case i.BEFORE_ATTRIBUTE_NAME: {
        this._stateBeforeAttributeName(t);
        break;
      }
      case i.ATTRIBUTE_NAME: {
        this._stateAttributeName(t);
        break;
      }
      case i.AFTER_ATTRIBUTE_NAME: {
        this._stateAfterAttributeName(t);
        break;
      }
      case i.BEFORE_ATTRIBUTE_VALUE: {
        this._stateBeforeAttributeValue(t);
        break;
      }
      case i.ATTRIBUTE_VALUE_DOUBLE_QUOTED: {
        this._stateAttributeValueDoubleQuoted(t);
        break;
      }
      case i.ATTRIBUTE_VALUE_SINGLE_QUOTED: {
        this._stateAttributeValueSingleQuoted(t);
        break;
      }
      case i.ATTRIBUTE_VALUE_UNQUOTED: {
        this._stateAttributeValueUnquoted(t);
        break;
      }
      case i.AFTER_ATTRIBUTE_VALUE_QUOTED: {
        this._stateAfterAttributeValueQuoted(t);
        break;
      }
      case i.SELF_CLOSING_START_TAG: {
        this._stateSelfClosingStartTag(t);
        break;
      }
      case i.BOGUS_COMMENT: {
        this._stateBogusComment(t);
        break;
      }
      case i.MARKUP_DECLARATION_OPEN: {
        this._stateMarkupDeclarationOpen(t);
        break;
      }
      case i.COMMENT_START: {
        this._stateCommentStart(t);
        break;
      }
      case i.COMMENT_START_DASH: {
        this._stateCommentStartDash(t);
        break;
      }
      case i.COMMENT: {
        this._stateComment(t);
        break;
      }
      case i.COMMENT_LESS_THAN_SIGN: {
        this._stateCommentLessThanSign(t);
        break;
      }
      case i.COMMENT_LESS_THAN_SIGN_BANG: {
        this._stateCommentLessThanSignBang(t);
        break;
      }
      case i.COMMENT_LESS_THAN_SIGN_BANG_DASH: {
        this._stateCommentLessThanSignBangDash(t);
        break;
      }
      case i.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH: {
        this._stateCommentLessThanSignBangDashDash(t);
        break;
      }
      case i.COMMENT_END_DASH: {
        this._stateCommentEndDash(t);
        break;
      }
      case i.COMMENT_END: {
        this._stateCommentEnd(t);
        break;
      }
      case i.COMMENT_END_BANG: {
        this._stateCommentEndBang(t);
        break;
      }
      case i.DOCTYPE: {
        this._stateDoctype(t);
        break;
      }
      case i.BEFORE_DOCTYPE_NAME: {
        this._stateBeforeDoctypeName(t);
        break;
      }
      case i.DOCTYPE_NAME: {
        this._stateDoctypeName(t);
        break;
      }
      case i.AFTER_DOCTYPE_NAME: {
        this._stateAfterDoctypeName(t);
        break;
      }
      case i.AFTER_DOCTYPE_PUBLIC_KEYWORD: {
        this._stateAfterDoctypePublicKeyword(t);
        break;
      }
      case i.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER: {
        this._stateBeforeDoctypePublicIdentifier(t);
        break;
      }
      case i.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED: {
        this._stateDoctypePublicIdentifierDoubleQuoted(t);
        break;
      }
      case i.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED: {
        this._stateDoctypePublicIdentifierSingleQuoted(t);
        break;
      }
      case i.AFTER_DOCTYPE_PUBLIC_IDENTIFIER: {
        this._stateAfterDoctypePublicIdentifier(t);
        break;
      }
      case i.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS: {
        this._stateBetweenDoctypePublicAndSystemIdentifiers(t);
        break;
      }
      case i.AFTER_DOCTYPE_SYSTEM_KEYWORD: {
        this._stateAfterDoctypeSystemKeyword(t);
        break;
      }
      case i.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER: {
        this._stateBeforeDoctypeSystemIdentifier(t);
        break;
      }
      case i.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED: {
        this._stateDoctypeSystemIdentifierDoubleQuoted(t);
        break;
      }
      case i.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED: {
        this._stateDoctypeSystemIdentifierSingleQuoted(t);
        break;
      }
      case i.AFTER_DOCTYPE_SYSTEM_IDENTIFIER: {
        this._stateAfterDoctypeSystemIdentifier(t);
        break;
      }
      case i.BOGUS_DOCTYPE: {
        this._stateBogusDoctype(t);
        break;
      }
      case i.CDATA_SECTION: {
        this._stateCdataSection(t);
        break;
      }
      case i.CDATA_SECTION_BRACKET: {
        this._stateCdataSectionBracket(t);
        break;
      }
      case i.CDATA_SECTION_END: {
        this._stateCdataSectionEnd(t);
        break;
      }
      case i.CHARACTER_REFERENCE: {
        this._stateCharacterReference();
        break;
      }
      case i.AMBIGUOUS_AMPERSAND: {
        this._stateAmbiguousAmpersand(t);
        break;
      }
      default:
        throw new Error("Unknown state");
    }
  }
  // State machine
  // Data state
  //------------------------------------------------------------------
  _stateData(t) {
    switch (t) {
      case r.LESS_THAN_SIGN: {
        this.state = i.TAG_OPEN;
        break;
      }
      case r.AMPERSAND: {
        this._startCharacterReference();
        break;
      }
      case r.NULL: {
        this._err(f.unexpectedNullCharacter), this._emitCodePoint(t);
        break;
      }
      case r.EOF: {
        this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(t);
    }
  }
  //  RCDATA state
  //------------------------------------------------------------------
  _stateRcdata(t) {
    switch (t) {
      case r.AMPERSAND: {
        this._startCharacterReference();
        break;
      }
      case r.LESS_THAN_SIGN: {
        this.state = i.RCDATA_LESS_THAN_SIGN;
        break;
      }
      case r.NULL: {
        this._err(f.unexpectedNullCharacter), this._emitChars(N);
        break;
      }
      case r.EOF: {
        this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(t);
    }
  }
  // RAWTEXT state
  //------------------------------------------------------------------
  _stateRawtext(t) {
    switch (t) {
      case r.LESS_THAN_SIGN: {
        this.state = i.RAWTEXT_LESS_THAN_SIGN;
        break;
      }
      case r.NULL: {
        this._err(f.unexpectedNullCharacter), this._emitChars(N);
        break;
      }
      case r.EOF: {
        this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(t);
    }
  }
  // Script data state
  //------------------------------------------------------------------
  _stateScriptData(t) {
    switch (t) {
      case r.LESS_THAN_SIGN: {
        this.state = i.SCRIPT_DATA_LESS_THAN_SIGN;
        break;
      }
      case r.NULL: {
        this._err(f.unexpectedNullCharacter), this._emitChars(N);
        break;
      }
      case r.EOF: {
        this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(t);
    }
  }
  // PLAINTEXT state
  //------------------------------------------------------------------
  _statePlaintext(t) {
    switch (t) {
      case r.NULL: {
        this._err(f.unexpectedNullCharacter), this._emitChars(N);
        break;
      }
      case r.EOF: {
        this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(t);
    }
  }
  // Tag open state
  //------------------------------------------------------------------
  _stateTagOpen(t) {
    if (w(t))
      this._createStartTagToken(), this.state = i.TAG_NAME, this._stateTagName(t);
    else
      switch (t) {
        case r.EXCLAMATION_MARK: {
          this.state = i.MARKUP_DECLARATION_OPEN;
          break;
        }
        case r.SOLIDUS: {
          this.state = i.END_TAG_OPEN;
          break;
        }
        case r.QUESTION_MARK: {
          this._err(f.unexpectedQuestionMarkInsteadOfTagName), this._createCommentToken(1), this.state = i.BOGUS_COMMENT, this._stateBogusComment(t);
          break;
        }
        case r.EOF: {
          this._err(f.eofBeforeTagName), this._emitChars("<"), this._emitEOFToken();
          break;
        }
        default:
          this._err(f.invalidFirstCharacterOfTagName), this._emitChars("<"), this.state = i.DATA, this._stateData(t);
      }
  }
  // End tag open state
  //------------------------------------------------------------------
  _stateEndTagOpen(t) {
    if (w(t))
      this._createEndTagToken(), this.state = i.TAG_NAME, this._stateTagName(t);
    else
      switch (t) {
        case r.GREATER_THAN_SIGN: {
          this._err(f.missingEndTagName), this.state = i.DATA;
          break;
        }
        case r.EOF: {
          this._err(f.eofBeforeTagName), this._emitChars("</"), this._emitEOFToken();
          break;
        }
        default:
          this._err(f.invalidFirstCharacterOfTagName), this._createCommentToken(2), this.state = i.BOGUS_COMMENT, this._stateBogusComment(t);
      }
  }
  // Tag name state
  //------------------------------------------------------------------
  _stateTagName(t) {
    const u = this.currentToken;
    switch (t) {
      case r.SPACE:
      case r.LINE_FEED:
      case r.TABULATION:
      case r.FORM_FEED: {
        this.state = i.BEFORE_ATTRIBUTE_NAME;
        break;
      }
      case r.SOLIDUS: {
        this.state = i.SELF_CLOSING_START_TAG;
        break;
      }
      case r.GREATER_THAN_SIGN: {
        this.state = i.DATA, this.emitCurrentTagToken();
        break;
      }
      case r.NULL: {
        this._err(f.unexpectedNullCharacter), u.tagName += N;
        break;
      }
      case r.EOF: {
        this._err(f.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        u.tagName += String.fromCodePoint(j(t) ? se(t) : t);
    }
  }
  // RCDATA less-than sign state
  //------------------------------------------------------------------
  _stateRcdataLessThanSign(t) {
    t === r.SOLIDUS ? this.state = i.RCDATA_END_TAG_OPEN : (this._emitChars("<"), this.state = i.RCDATA, this._stateRcdata(t));
  }
  // RCDATA end tag open state
  //------------------------------------------------------------------
  _stateRcdataEndTagOpen(t) {
    w(t) ? (this.state = i.RCDATA_END_TAG_NAME, this._stateRcdataEndTagName(t)) : (this._emitChars("</"), this.state = i.RCDATA, this._stateRcdata(t));
  }
  handleSpecialEndTag(t) {
    if (!this.preprocessor.startsWith(this.lastStartTagName, !1))
      return !this._ensureHibernation();
    this._createEndTagToken();
    const u = this.currentToken;
    switch (u.tagName = this.lastStartTagName, this.preprocessor.peek(this.lastStartTagName.length)) {
      case r.SPACE:
      case r.LINE_FEED:
      case r.TABULATION:
      case r.FORM_FEED:
        return this._advanceBy(this.lastStartTagName.length), this.state = i.BEFORE_ATTRIBUTE_NAME, !1;
      case r.SOLIDUS:
        return this._advanceBy(this.lastStartTagName.length), this.state = i.SELF_CLOSING_START_TAG, !1;
      case r.GREATER_THAN_SIGN:
        return this._advanceBy(this.lastStartTagName.length), this.emitCurrentTagToken(), this.state = i.DATA, !1;
      default:
        return !this._ensureHibernation();
    }
  }
  // RCDATA end tag name state
  //------------------------------------------------------------------
  _stateRcdataEndTagName(t) {
    this.handleSpecialEndTag(t) && (this._emitChars("</"), this.state = i.RCDATA, this._stateRcdata(t));
  }
  // RAWTEXT less-than sign state
  //------------------------------------------------------------------
  _stateRawtextLessThanSign(t) {
    t === r.SOLIDUS ? this.state = i.RAWTEXT_END_TAG_OPEN : (this._emitChars("<"), this.state = i.RAWTEXT, this._stateRawtext(t));
  }
  // RAWTEXT end tag open state
  //------------------------------------------------------------------
  _stateRawtextEndTagOpen(t) {
    w(t) ? (this.state = i.RAWTEXT_END_TAG_NAME, this._stateRawtextEndTagName(t)) : (this._emitChars("</"), this.state = i.RAWTEXT, this._stateRawtext(t));
  }
  // RAWTEXT end tag name state
  //------------------------------------------------------------------
  _stateRawtextEndTagName(t) {
    this.handleSpecialEndTag(t) && (this._emitChars("</"), this.state = i.RAWTEXT, this._stateRawtext(t));
  }
  // Script data less-than sign state
  //------------------------------------------------------------------
  _stateScriptDataLessThanSign(t) {
    switch (t) {
      case r.SOLIDUS: {
        this.state = i.SCRIPT_DATA_END_TAG_OPEN;
        break;
      }
      case r.EXCLAMATION_MARK: {
        this.state = i.SCRIPT_DATA_ESCAPE_START, this._emitChars("<!");
        break;
      }
      default:
        this._emitChars("<"), this.state = i.SCRIPT_DATA, this._stateScriptData(t);
    }
  }
  // Script data end tag open state
  //------------------------------------------------------------------
  _stateScriptDataEndTagOpen(t) {
    w(t) ? (this.state = i.SCRIPT_DATA_END_TAG_NAME, this._stateScriptDataEndTagName(t)) : (this._emitChars("</"), this.state = i.SCRIPT_DATA, this._stateScriptData(t));
  }
  // Script data end tag name state
  //------------------------------------------------------------------
  _stateScriptDataEndTagName(t) {
    this.handleSpecialEndTag(t) && (this._emitChars("</"), this.state = i.SCRIPT_DATA, this._stateScriptData(t));
  }
  // Script data escape start state
  //------------------------------------------------------------------
  _stateScriptDataEscapeStart(t) {
    t === r.HYPHEN_MINUS ? (this.state = i.SCRIPT_DATA_ESCAPE_START_DASH, this._emitChars("-")) : (this.state = i.SCRIPT_DATA, this._stateScriptData(t));
  }
  // Script data escape start dash state
  //------------------------------------------------------------------
  _stateScriptDataEscapeStartDash(t) {
    t === r.HYPHEN_MINUS ? (this.state = i.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-")) : (this.state = i.SCRIPT_DATA, this._stateScriptData(t));
  }
  // Script data escaped state
  //------------------------------------------------------------------
  _stateScriptDataEscaped(t) {
    switch (t) {
      case r.HYPHEN_MINUS: {
        this.state = i.SCRIPT_DATA_ESCAPED_DASH, this._emitChars("-");
        break;
      }
      case r.LESS_THAN_SIGN: {
        this.state = i.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
        break;
      }
      case r.NULL: {
        this._err(f.unexpectedNullCharacter), this._emitChars(N);
        break;
      }
      case r.EOF: {
        this._err(f.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(t);
    }
  }
  // Script data escaped dash state
  //------------------------------------------------------------------
  _stateScriptDataEscapedDash(t) {
    switch (t) {
      case r.HYPHEN_MINUS: {
        this.state = i.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-");
        break;
      }
      case r.LESS_THAN_SIGN: {
        this.state = i.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
        break;
      }
      case r.NULL: {
        this._err(f.unexpectedNullCharacter), this.state = i.SCRIPT_DATA_ESCAPED, this._emitChars(N);
        break;
      }
      case r.EOF: {
        this._err(f.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this.state = i.SCRIPT_DATA_ESCAPED, this._emitCodePoint(t);
    }
  }
  // Script data escaped dash dash state
  //------------------------------------------------------------------
  _stateScriptDataEscapedDashDash(t) {
    switch (t) {
      case r.HYPHEN_MINUS: {
        this._emitChars("-");
        break;
      }
      case r.LESS_THAN_SIGN: {
        this.state = i.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
        break;
      }
      case r.GREATER_THAN_SIGN: {
        this.state = i.SCRIPT_DATA, this._emitChars(">");
        break;
      }
      case r.NULL: {
        this._err(f.unexpectedNullCharacter), this.state = i.SCRIPT_DATA_ESCAPED, this._emitChars(N);
        break;
      }
      case r.EOF: {
        this._err(f.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this.state = i.SCRIPT_DATA_ESCAPED, this._emitCodePoint(t);
    }
  }
  // Script data escaped less-than sign state
  //------------------------------------------------------------------
  _stateScriptDataEscapedLessThanSign(t) {
    t === r.SOLIDUS ? this.state = i.SCRIPT_DATA_ESCAPED_END_TAG_OPEN : w(t) ? (this._emitChars("<"), this.state = i.SCRIPT_DATA_DOUBLE_ESCAPE_START, this._stateScriptDataDoubleEscapeStart(t)) : (this._emitChars("<"), this.state = i.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(t));
  }
  // Script data escaped end tag open state
  //------------------------------------------------------------------
  _stateScriptDataEscapedEndTagOpen(t) {
    w(t) ? (this.state = i.SCRIPT_DATA_ESCAPED_END_TAG_NAME, this._stateScriptDataEscapedEndTagName(t)) : (this._emitChars("</"), this.state = i.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(t));
  }
  // Script data escaped end tag name state
  //------------------------------------------------------------------
  _stateScriptDataEscapedEndTagName(t) {
    this.handleSpecialEndTag(t) && (this._emitChars("</"), this.state = i.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(t));
  }
  // Script data double escape start state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscapeStart(t) {
    if (this.preprocessor.startsWith(D.SCRIPT, !1) && Ze(this.preprocessor.peek(D.SCRIPT.length))) {
      this._emitCodePoint(t);
      for (let u = 0; u < D.SCRIPT.length; u++)
        this._emitCodePoint(this._consume());
      this.state = i.SCRIPT_DATA_DOUBLE_ESCAPED;
    } else this._ensureHibernation() || (this.state = i.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(t));
  }
  // Script data double escaped state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscaped(t) {
    switch (t) {
      case r.HYPHEN_MINUS: {
        this.state = i.SCRIPT_DATA_DOUBLE_ESCAPED_DASH, this._emitChars("-");
        break;
      }
      case r.LESS_THAN_SIGN: {
        this.state = i.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
        break;
      }
      case r.NULL: {
        this._err(f.unexpectedNullCharacter), this._emitChars(N);
        break;
      }
      case r.EOF: {
        this._err(f.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(t);
    }
  }
  // Script data double escaped dash state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscapedDash(t) {
    switch (t) {
      case r.HYPHEN_MINUS: {
        this.state = i.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH, this._emitChars("-");
        break;
      }
      case r.LESS_THAN_SIGN: {
        this.state = i.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
        break;
      }
      case r.NULL: {
        this._err(f.unexpectedNullCharacter), this.state = i.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars(N);
        break;
      }
      case r.EOF: {
        this._err(f.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this.state = i.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(t);
    }
  }
  // Script data double escaped dash dash state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscapedDashDash(t) {
    switch (t) {
      case r.HYPHEN_MINUS: {
        this._emitChars("-");
        break;
      }
      case r.LESS_THAN_SIGN: {
        this.state = i.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
        break;
      }
      case r.GREATER_THAN_SIGN: {
        this.state = i.SCRIPT_DATA, this._emitChars(">");
        break;
      }
      case r.NULL: {
        this._err(f.unexpectedNullCharacter), this.state = i.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars(N);
        break;
      }
      case r.EOF: {
        this._err(f.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this.state = i.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(t);
    }
  }
  // Script data double escaped less-than sign state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscapedLessThanSign(t) {
    t === r.SOLIDUS ? (this.state = i.SCRIPT_DATA_DOUBLE_ESCAPE_END, this._emitChars("/")) : (this.state = i.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(t));
  }
  // Script data double escape end state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscapeEnd(t) {
    if (this.preprocessor.startsWith(D.SCRIPT, !1) && Ze(this.preprocessor.peek(D.SCRIPT.length))) {
      this._emitCodePoint(t);
      for (let u = 0; u < D.SCRIPT.length; u++)
        this._emitCodePoint(this._consume());
      this.state = i.SCRIPT_DATA_ESCAPED;
    } else this._ensureHibernation() || (this.state = i.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(t));
  }
  // Before attribute name state
  //------------------------------------------------------------------
  _stateBeforeAttributeName(t) {
    switch (t) {
      case r.SPACE:
      case r.LINE_FEED:
      case r.TABULATION:
      case r.FORM_FEED:
        break;
      case r.SOLIDUS:
      case r.GREATER_THAN_SIGN:
      case r.EOF: {
        this.state = i.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(t);
        break;
      }
      case r.EQUALS_SIGN: {
        this._err(f.unexpectedEqualsSignBeforeAttributeName), this._createAttr("="), this.state = i.ATTRIBUTE_NAME;
        break;
      }
      default:
        this._createAttr(""), this.state = i.ATTRIBUTE_NAME, this._stateAttributeName(t);
    }
  }
  // Attribute name state
  //------------------------------------------------------------------
  _stateAttributeName(t) {
    switch (t) {
      case r.SPACE:
      case r.LINE_FEED:
      case r.TABULATION:
      case r.FORM_FEED:
      case r.SOLIDUS:
      case r.GREATER_THAN_SIGN:
      case r.EOF: {
        this._leaveAttrName(), this.state = i.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(t);
        break;
      }
      case r.EQUALS_SIGN: {
        this._leaveAttrName(), this.state = i.BEFORE_ATTRIBUTE_VALUE;
        break;
      }
      case r.QUOTATION_MARK:
      case r.APOSTROPHE:
      case r.LESS_THAN_SIGN: {
        this._err(f.unexpectedCharacterInAttributeName), this.currentAttr.name += String.fromCodePoint(t);
        break;
      }
      case r.NULL: {
        this._err(f.unexpectedNullCharacter), this.currentAttr.name += N;
        break;
      }
      default:
        this.currentAttr.name += String.fromCodePoint(j(t) ? se(t) : t);
    }
  }
  // After attribute name state
  //------------------------------------------------------------------
  _stateAfterAttributeName(t) {
    switch (t) {
      case r.SPACE:
      case r.LINE_FEED:
      case r.TABULATION:
      case r.FORM_FEED:
        break;
      case r.SOLIDUS: {
        this.state = i.SELF_CLOSING_START_TAG;
        break;
      }
      case r.EQUALS_SIGN: {
        this.state = i.BEFORE_ATTRIBUTE_VALUE;
        break;
      }
      case r.GREATER_THAN_SIGN: {
        this.state = i.DATA, this.emitCurrentTagToken();
        break;
      }
      case r.EOF: {
        this._err(f.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this._createAttr(""), this.state = i.ATTRIBUTE_NAME, this._stateAttributeName(t);
    }
  }
  // Before attribute value state
  //------------------------------------------------------------------
  _stateBeforeAttributeValue(t) {
    switch (t) {
      case r.SPACE:
      case r.LINE_FEED:
      case r.TABULATION:
      case r.FORM_FEED:
        break;
      case r.QUOTATION_MARK: {
        this.state = i.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
        break;
      }
      case r.APOSTROPHE: {
        this.state = i.ATTRIBUTE_VALUE_SINGLE_QUOTED;
        break;
      }
      case r.GREATER_THAN_SIGN: {
        this._err(f.missingAttributeValue), this.state = i.DATA, this.emitCurrentTagToken();
        break;
      }
      default:
        this.state = i.ATTRIBUTE_VALUE_UNQUOTED, this._stateAttributeValueUnquoted(t);
    }
  }
  // Attribute value (double-quoted) state
  //------------------------------------------------------------------
  _stateAttributeValueDoubleQuoted(t) {
    switch (t) {
      case r.QUOTATION_MARK: {
        this.state = i.AFTER_ATTRIBUTE_VALUE_QUOTED;
        break;
      }
      case r.AMPERSAND: {
        this._startCharacterReference();
        break;
      }
      case r.NULL: {
        this._err(f.unexpectedNullCharacter), this.currentAttr.value += N;
        break;
      }
      case r.EOF: {
        this._err(f.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this.currentAttr.value += String.fromCodePoint(t);
    }
  }
  // Attribute value (single-quoted) state
  //------------------------------------------------------------------
  _stateAttributeValueSingleQuoted(t) {
    switch (t) {
      case r.APOSTROPHE: {
        this.state = i.AFTER_ATTRIBUTE_VALUE_QUOTED;
        break;
      }
      case r.AMPERSAND: {
        this._startCharacterReference();
        break;
      }
      case r.NULL: {
        this._err(f.unexpectedNullCharacter), this.currentAttr.value += N;
        break;
      }
      case r.EOF: {
        this._err(f.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this.currentAttr.value += String.fromCodePoint(t);
    }
  }
  // Attribute value (unquoted) state
  //------------------------------------------------------------------
  _stateAttributeValueUnquoted(t) {
    switch (t) {
      case r.SPACE:
      case r.LINE_FEED:
      case r.TABULATION:
      case r.FORM_FEED: {
        this._leaveAttrValue(), this.state = i.BEFORE_ATTRIBUTE_NAME;
        break;
      }
      case r.AMPERSAND: {
        this._startCharacterReference();
        break;
      }
      case r.GREATER_THAN_SIGN: {
        this._leaveAttrValue(), this.state = i.DATA, this.emitCurrentTagToken();
        break;
      }
      case r.NULL: {
        this._err(f.unexpectedNullCharacter), this.currentAttr.value += N;
        break;
      }
      case r.QUOTATION_MARK:
      case r.APOSTROPHE:
      case r.LESS_THAN_SIGN:
      case r.EQUALS_SIGN:
      case r.GRAVE_ACCENT: {
        this._err(f.unexpectedCharacterInUnquotedAttributeValue), this.currentAttr.value += String.fromCodePoint(t);
        break;
      }
      case r.EOF: {
        this._err(f.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this.currentAttr.value += String.fromCodePoint(t);
    }
  }
  // After attribute value (quoted) state
  //------------------------------------------------------------------
  _stateAfterAttributeValueQuoted(t) {
    switch (t) {
      case r.SPACE:
      case r.LINE_FEED:
      case r.TABULATION:
      case r.FORM_FEED: {
        this._leaveAttrValue(), this.state = i.BEFORE_ATTRIBUTE_NAME;
        break;
      }
      case r.SOLIDUS: {
        this._leaveAttrValue(), this.state = i.SELF_CLOSING_START_TAG;
        break;
      }
      case r.GREATER_THAN_SIGN: {
        this._leaveAttrValue(), this.state = i.DATA, this.emitCurrentTagToken();
        break;
      }
      case r.EOF: {
        this._err(f.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this._err(f.missingWhitespaceBetweenAttributes), this.state = i.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(t);
    }
  }
  // Self-closing start tag state
  //------------------------------------------------------------------
  _stateSelfClosingStartTag(t) {
    switch (t) {
      case r.GREATER_THAN_SIGN: {
        const u = this.currentToken;
        u.selfClosing = !0, this.state = i.DATA, this.emitCurrentTagToken();
        break;
      }
      case r.EOF: {
        this._err(f.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this._err(f.unexpectedSolidusInTag), this.state = i.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(t);
    }
  }
  // Bogus comment state
  //------------------------------------------------------------------
  _stateBogusComment(t) {
    const u = this.currentToken;
    switch (t) {
      case r.GREATER_THAN_SIGN: {
        this.state = i.DATA, this.emitCurrentComment(u);
        break;
      }
      case r.EOF: {
        this.emitCurrentComment(u), this._emitEOFToken();
        break;
      }
      case r.NULL: {
        this._err(f.unexpectedNullCharacter), u.data += N;
        break;
      }
      default:
        u.data += String.fromCodePoint(t);
    }
  }
  // Markup declaration open state
  //------------------------------------------------------------------
  _stateMarkupDeclarationOpen(t) {
    this._consumeSequenceIfMatch(D.DASH_DASH, !0) ? (this._createCommentToken(D.DASH_DASH.length + 1), this.state = i.COMMENT_START) : this._consumeSequenceIfMatch(D.DOCTYPE, !1) ? (this.currentLocation = this.getCurrentLocation(D.DOCTYPE.length + 1), this.state = i.DOCTYPE) : this._consumeSequenceIfMatch(D.CDATA_START, !0) ? this.inForeignNode ? this.state = i.CDATA_SECTION : (this._err(f.cdataInHtmlContent), this._createCommentToken(D.CDATA_START.length + 1), this.currentToken.data = "[CDATA[", this.state = i.BOGUS_COMMENT) : this._ensureHibernation() || (this._err(f.incorrectlyOpenedComment), this._createCommentToken(2), this.state = i.BOGUS_COMMENT, this._stateBogusComment(t));
  }
  // Comment start state
  //------------------------------------------------------------------
  _stateCommentStart(t) {
    switch (t) {
      case r.HYPHEN_MINUS: {
        this.state = i.COMMENT_START_DASH;
        break;
      }
      case r.GREATER_THAN_SIGN: {
        this._err(f.abruptClosingOfEmptyComment), this.state = i.DATA;
        const u = this.currentToken;
        this.emitCurrentComment(u);
        break;
      }
      default:
        this.state = i.COMMENT, this._stateComment(t);
    }
  }
  // Comment start dash state
  //------------------------------------------------------------------
  _stateCommentStartDash(t) {
    const u = this.currentToken;
    switch (t) {
      case r.HYPHEN_MINUS: {
        this.state = i.COMMENT_END;
        break;
      }
      case r.GREATER_THAN_SIGN: {
        this._err(f.abruptClosingOfEmptyComment), this.state = i.DATA, this.emitCurrentComment(u);
        break;
      }
      case r.EOF: {
        this._err(f.eofInComment), this.emitCurrentComment(u), this._emitEOFToken();
        break;
      }
      default:
        u.data += "-", this.state = i.COMMENT, this._stateComment(t);
    }
  }
  // Comment state
  //------------------------------------------------------------------
  _stateComment(t) {
    const u = this.currentToken;
    switch (t) {
      case r.HYPHEN_MINUS: {
        this.state = i.COMMENT_END_DASH;
        break;
      }
      case r.LESS_THAN_SIGN: {
        u.data += "<", this.state = i.COMMENT_LESS_THAN_SIGN;
        break;
      }
      case r.NULL: {
        this._err(f.unexpectedNullCharacter), u.data += N;
        break;
      }
      case r.EOF: {
        this._err(f.eofInComment), this.emitCurrentComment(u), this._emitEOFToken();
        break;
      }
      default:
        u.data += String.fromCodePoint(t);
    }
  }
  // Comment less-than sign state
  //------------------------------------------------------------------
  _stateCommentLessThanSign(t) {
    const u = this.currentToken;
    switch (t) {
      case r.EXCLAMATION_MARK: {
        u.data += "!", this.state = i.COMMENT_LESS_THAN_SIGN_BANG;
        break;
      }
      case r.LESS_THAN_SIGN: {
        u.data += "<";
        break;
      }
      default:
        this.state = i.COMMENT, this._stateComment(t);
    }
  }
  // Comment less-than sign bang state
  //------------------------------------------------------------------
  _stateCommentLessThanSignBang(t) {
    t === r.HYPHEN_MINUS ? this.state = i.COMMENT_LESS_THAN_SIGN_BANG_DASH : (this.state = i.COMMENT, this._stateComment(t));
  }
  // Comment less-than sign bang dash state
  //------------------------------------------------------------------
  _stateCommentLessThanSignBangDash(t) {
    t === r.HYPHEN_MINUS ? this.state = i.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH : (this.state = i.COMMENT_END_DASH, this._stateCommentEndDash(t));
  }
  // Comment less-than sign bang dash dash state
  //------------------------------------------------------------------
  _stateCommentLessThanSignBangDashDash(t) {
    t !== r.GREATER_THAN_SIGN && t !== r.EOF && this._err(f.nestedComment), this.state = i.COMMENT_END, this._stateCommentEnd(t);
  }
  // Comment end dash state
  //------------------------------------------------------------------
  _stateCommentEndDash(t) {
    const u = this.currentToken;
    switch (t) {
      case r.HYPHEN_MINUS: {
        this.state = i.COMMENT_END;
        break;
      }
      case r.EOF: {
        this._err(f.eofInComment), this.emitCurrentComment(u), this._emitEOFToken();
        break;
      }
      default:
        u.data += "-", this.state = i.COMMENT, this._stateComment(t);
    }
  }
  // Comment end state
  //------------------------------------------------------------------
  _stateCommentEnd(t) {
    const u = this.currentToken;
    switch (t) {
      case r.GREATER_THAN_SIGN: {
        this.state = i.DATA, this.emitCurrentComment(u);
        break;
      }
      case r.EXCLAMATION_MARK: {
        this.state = i.COMMENT_END_BANG;
        break;
      }
      case r.HYPHEN_MINUS: {
        u.data += "-";
        break;
      }
      case r.EOF: {
        this._err(f.eofInComment), this.emitCurrentComment(u), this._emitEOFToken();
        break;
      }
      default:
        u.data += "--", this.state = i.COMMENT, this._stateComment(t);
    }
  }
  // Comment end bang state
  //------------------------------------------------------------------
  _stateCommentEndBang(t) {
    const u = this.currentToken;
    switch (t) {
      case r.HYPHEN_MINUS: {
        u.data += "--!", this.state = i.COMMENT_END_DASH;
        break;
      }
      case r.GREATER_THAN_SIGN: {
        this._err(f.incorrectlyClosedComment), this.state = i.DATA, this.emitCurrentComment(u);
        break;
      }
      case r.EOF: {
        this._err(f.eofInComment), this.emitCurrentComment(u), this._emitEOFToken();
        break;
      }
      default:
        u.data += "--!", this.state = i.COMMENT, this._stateComment(t);
    }
  }
  // DOCTYPE state
  //------------------------------------------------------------------
  _stateDoctype(t) {
    switch (t) {
      case r.SPACE:
      case r.LINE_FEED:
      case r.TABULATION:
      case r.FORM_FEED: {
        this.state = i.BEFORE_DOCTYPE_NAME;
        break;
      }
      case r.GREATER_THAN_SIGN: {
        this.state = i.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(t);
        break;
      }
      case r.EOF: {
        this._err(f.eofInDoctype), this._createDoctypeToken(null);
        const u = this.currentToken;
        u.forceQuirks = !0, this.emitCurrentDoctype(u), this._emitEOFToken();
        break;
      }
      default:
        this._err(f.missingWhitespaceBeforeDoctypeName), this.state = i.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(t);
    }
  }
  // Before DOCTYPE name state
  //------------------------------------------------------------------
  _stateBeforeDoctypeName(t) {
    if (j(t))
      this._createDoctypeToken(String.fromCharCode(se(t))), this.state = i.DOCTYPE_NAME;
    else
      switch (t) {
        case r.SPACE:
        case r.LINE_FEED:
        case r.TABULATION:
        case r.FORM_FEED:
          break;
        case r.NULL: {
          this._err(f.unexpectedNullCharacter), this._createDoctypeToken(N), this.state = i.DOCTYPE_NAME;
          break;
        }
        case r.GREATER_THAN_SIGN: {
          this._err(f.missingDoctypeName), this._createDoctypeToken(null);
          const u = this.currentToken;
          u.forceQuirks = !0, this.emitCurrentDoctype(u), this.state = i.DATA;
          break;
        }
        case r.EOF: {
          this._err(f.eofInDoctype), this._createDoctypeToken(null);
          const u = this.currentToken;
          u.forceQuirks = !0, this.emitCurrentDoctype(u), this._emitEOFToken();
          break;
        }
        default:
          this._createDoctypeToken(String.fromCodePoint(t)), this.state = i.DOCTYPE_NAME;
      }
  }
  // DOCTYPE name state
  //------------------------------------------------------------------
  _stateDoctypeName(t) {
    const u = this.currentToken;
    switch (t) {
      case r.SPACE:
      case r.LINE_FEED:
      case r.TABULATION:
      case r.FORM_FEED: {
        this.state = i.AFTER_DOCTYPE_NAME;
        break;
      }
      case r.GREATER_THAN_SIGN: {
        this.state = i.DATA, this.emitCurrentDoctype(u);
        break;
      }
      case r.NULL: {
        this._err(f.unexpectedNullCharacter), u.name += N;
        break;
      }
      case r.EOF: {
        this._err(f.eofInDoctype), u.forceQuirks = !0, this.emitCurrentDoctype(u), this._emitEOFToken();
        break;
      }
      default:
        u.name += String.fromCodePoint(j(t) ? se(t) : t);
    }
  }
  // After DOCTYPE name state
  //------------------------------------------------------------------
  _stateAfterDoctypeName(t) {
    const u = this.currentToken;
    switch (t) {
      case r.SPACE:
      case r.LINE_FEED:
      case r.TABULATION:
      case r.FORM_FEED:
        break;
      case r.GREATER_THAN_SIGN: {
        this.state = i.DATA, this.emitCurrentDoctype(u);
        break;
      }
      case r.EOF: {
        this._err(f.eofInDoctype), u.forceQuirks = !0, this.emitCurrentDoctype(u), this._emitEOFToken();
        break;
      }
      default:
        this._consumeSequenceIfMatch(D.PUBLIC, !1) ? this.state = i.AFTER_DOCTYPE_PUBLIC_KEYWORD : this._consumeSequenceIfMatch(D.SYSTEM, !1) ? this.state = i.AFTER_DOCTYPE_SYSTEM_KEYWORD : this._ensureHibernation() || (this._err(f.invalidCharacterSequenceAfterDoctypeName), u.forceQuirks = !0, this.state = i.BOGUS_DOCTYPE, this._stateBogusDoctype(t));
    }
  }
  // After DOCTYPE public keyword state
  //------------------------------------------------------------------
  _stateAfterDoctypePublicKeyword(t) {
    const u = this.currentToken;
    switch (t) {
      case r.SPACE:
      case r.LINE_FEED:
      case r.TABULATION:
      case r.FORM_FEED: {
        this.state = i.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
        break;
      }
      case r.QUOTATION_MARK: {
        this._err(f.missingWhitespaceAfterDoctypePublicKeyword), u.publicId = "", this.state = i.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case r.APOSTROPHE: {
        this._err(f.missingWhitespaceAfterDoctypePublicKeyword), u.publicId = "", this.state = i.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case r.GREATER_THAN_SIGN: {
        this._err(f.missingDoctypePublicIdentifier), u.forceQuirks = !0, this.state = i.DATA, this.emitCurrentDoctype(u);
        break;
      }
      case r.EOF: {
        this._err(f.eofInDoctype), u.forceQuirks = !0, this.emitCurrentDoctype(u), this._emitEOFToken();
        break;
      }
      default:
        this._err(f.missingQuoteBeforeDoctypePublicIdentifier), u.forceQuirks = !0, this.state = i.BOGUS_DOCTYPE, this._stateBogusDoctype(t);
    }
  }
  // Before DOCTYPE public identifier state
  //------------------------------------------------------------------
  _stateBeforeDoctypePublicIdentifier(t) {
    const u = this.currentToken;
    switch (t) {
      case r.SPACE:
      case r.LINE_FEED:
      case r.TABULATION:
      case r.FORM_FEED:
        break;
      case r.QUOTATION_MARK: {
        u.publicId = "", this.state = i.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case r.APOSTROPHE: {
        u.publicId = "", this.state = i.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case r.GREATER_THAN_SIGN: {
        this._err(f.missingDoctypePublicIdentifier), u.forceQuirks = !0, this.state = i.DATA, this.emitCurrentDoctype(u);
        break;
      }
      case r.EOF: {
        this._err(f.eofInDoctype), u.forceQuirks = !0, this.emitCurrentDoctype(u), this._emitEOFToken();
        break;
      }
      default:
        this._err(f.missingQuoteBeforeDoctypePublicIdentifier), u.forceQuirks = !0, this.state = i.BOGUS_DOCTYPE, this._stateBogusDoctype(t);
    }
  }
  // DOCTYPE public identifier (double-quoted) state
  //------------------------------------------------------------------
  _stateDoctypePublicIdentifierDoubleQuoted(t) {
    const u = this.currentToken;
    switch (t) {
      case r.QUOTATION_MARK: {
        this.state = i.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
        break;
      }
      case r.NULL: {
        this._err(f.unexpectedNullCharacter), u.publicId += N;
        break;
      }
      case r.GREATER_THAN_SIGN: {
        this._err(f.abruptDoctypePublicIdentifier), u.forceQuirks = !0, this.emitCurrentDoctype(u), this.state = i.DATA;
        break;
      }
      case r.EOF: {
        this._err(f.eofInDoctype), u.forceQuirks = !0, this.emitCurrentDoctype(u), this._emitEOFToken();
        break;
      }
      default:
        u.publicId += String.fromCodePoint(t);
    }
  }
  // DOCTYPE public identifier (single-quoted) state
  //------------------------------------------------------------------
  _stateDoctypePublicIdentifierSingleQuoted(t) {
    const u = this.currentToken;
    switch (t) {
      case r.APOSTROPHE: {
        this.state = i.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
        break;
      }
      case r.NULL: {
        this._err(f.unexpectedNullCharacter), u.publicId += N;
        break;
      }
      case r.GREATER_THAN_SIGN: {
        this._err(f.abruptDoctypePublicIdentifier), u.forceQuirks = !0, this.emitCurrentDoctype(u), this.state = i.DATA;
        break;
      }
      case r.EOF: {
        this._err(f.eofInDoctype), u.forceQuirks = !0, this.emitCurrentDoctype(u), this._emitEOFToken();
        break;
      }
      default:
        u.publicId += String.fromCodePoint(t);
    }
  }
  // After DOCTYPE public identifier state
  //------------------------------------------------------------------
  _stateAfterDoctypePublicIdentifier(t) {
    const u = this.currentToken;
    switch (t) {
      case r.SPACE:
      case r.LINE_FEED:
      case r.TABULATION:
      case r.FORM_FEED: {
        this.state = i.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
        break;
      }
      case r.GREATER_THAN_SIGN: {
        this.state = i.DATA, this.emitCurrentDoctype(u);
        break;
      }
      case r.QUOTATION_MARK: {
        this._err(f.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), u.systemId = "", this.state = i.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case r.APOSTROPHE: {
        this._err(f.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), u.systemId = "", this.state = i.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case r.EOF: {
        this._err(f.eofInDoctype), u.forceQuirks = !0, this.emitCurrentDoctype(u), this._emitEOFToken();
        break;
      }
      default:
        this._err(f.missingQuoteBeforeDoctypeSystemIdentifier), u.forceQuirks = !0, this.state = i.BOGUS_DOCTYPE, this._stateBogusDoctype(t);
    }
  }
  // Between DOCTYPE public and system identifiers state
  //------------------------------------------------------------------
  _stateBetweenDoctypePublicAndSystemIdentifiers(t) {
    const u = this.currentToken;
    switch (t) {
      case r.SPACE:
      case r.LINE_FEED:
      case r.TABULATION:
      case r.FORM_FEED:
        break;
      case r.GREATER_THAN_SIGN: {
        this.emitCurrentDoctype(u), this.state = i.DATA;
        break;
      }
      case r.QUOTATION_MARK: {
        u.systemId = "", this.state = i.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case r.APOSTROPHE: {
        u.systemId = "", this.state = i.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case r.EOF: {
        this._err(f.eofInDoctype), u.forceQuirks = !0, this.emitCurrentDoctype(u), this._emitEOFToken();
        break;
      }
      default:
        this._err(f.missingQuoteBeforeDoctypeSystemIdentifier), u.forceQuirks = !0, this.state = i.BOGUS_DOCTYPE, this._stateBogusDoctype(t);
    }
  }
  // After DOCTYPE system keyword state
  //------------------------------------------------------------------
  _stateAfterDoctypeSystemKeyword(t) {
    const u = this.currentToken;
    switch (t) {
      case r.SPACE:
      case r.LINE_FEED:
      case r.TABULATION:
      case r.FORM_FEED: {
        this.state = i.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
        break;
      }
      case r.QUOTATION_MARK: {
        this._err(f.missingWhitespaceAfterDoctypeSystemKeyword), u.systemId = "", this.state = i.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case r.APOSTROPHE: {
        this._err(f.missingWhitespaceAfterDoctypeSystemKeyword), u.systemId = "", this.state = i.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case r.GREATER_THAN_SIGN: {
        this._err(f.missingDoctypeSystemIdentifier), u.forceQuirks = !0, this.state = i.DATA, this.emitCurrentDoctype(u);
        break;
      }
      case r.EOF: {
        this._err(f.eofInDoctype), u.forceQuirks = !0, this.emitCurrentDoctype(u), this._emitEOFToken();
        break;
      }
      default:
        this._err(f.missingQuoteBeforeDoctypeSystemIdentifier), u.forceQuirks = !0, this.state = i.BOGUS_DOCTYPE, this._stateBogusDoctype(t);
    }
  }
  // Before DOCTYPE system identifier state
  //------------------------------------------------------------------
  _stateBeforeDoctypeSystemIdentifier(t) {
    const u = this.currentToken;
    switch (t) {
      case r.SPACE:
      case r.LINE_FEED:
      case r.TABULATION:
      case r.FORM_FEED:
        break;
      case r.QUOTATION_MARK: {
        u.systemId = "", this.state = i.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case r.APOSTROPHE: {
        u.systemId = "", this.state = i.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case r.GREATER_THAN_SIGN: {
        this._err(f.missingDoctypeSystemIdentifier), u.forceQuirks = !0, this.state = i.DATA, this.emitCurrentDoctype(u);
        break;
      }
      case r.EOF: {
        this._err(f.eofInDoctype), u.forceQuirks = !0, this.emitCurrentDoctype(u), this._emitEOFToken();
        break;
      }
      default:
        this._err(f.missingQuoteBeforeDoctypeSystemIdentifier), u.forceQuirks = !0, this.state = i.BOGUS_DOCTYPE, this._stateBogusDoctype(t);
    }
  }
  // DOCTYPE system identifier (double-quoted) state
  //------------------------------------------------------------------
  _stateDoctypeSystemIdentifierDoubleQuoted(t) {
    const u = this.currentToken;
    switch (t) {
      case r.QUOTATION_MARK: {
        this.state = i.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
        break;
      }
      case r.NULL: {
        this._err(f.unexpectedNullCharacter), u.systemId += N;
        break;
      }
      case r.GREATER_THAN_SIGN: {
        this._err(f.abruptDoctypeSystemIdentifier), u.forceQuirks = !0, this.emitCurrentDoctype(u), this.state = i.DATA;
        break;
      }
      case r.EOF: {
        this._err(f.eofInDoctype), u.forceQuirks = !0, this.emitCurrentDoctype(u), this._emitEOFToken();
        break;
      }
      default:
        u.systemId += String.fromCodePoint(t);
    }
  }
  // DOCTYPE system identifier (single-quoted) state
  //------------------------------------------------------------------
  _stateDoctypeSystemIdentifierSingleQuoted(t) {
    const u = this.currentToken;
    switch (t) {
      case r.APOSTROPHE: {
        this.state = i.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
        break;
      }
      case r.NULL: {
        this._err(f.unexpectedNullCharacter), u.systemId += N;
        break;
      }
      case r.GREATER_THAN_SIGN: {
        this._err(f.abruptDoctypeSystemIdentifier), u.forceQuirks = !0, this.emitCurrentDoctype(u), this.state = i.DATA;
        break;
      }
      case r.EOF: {
        this._err(f.eofInDoctype), u.forceQuirks = !0, this.emitCurrentDoctype(u), this._emitEOFToken();
        break;
      }
      default:
        u.systemId += String.fromCodePoint(t);
    }
  }
  // After DOCTYPE system identifier state
  //------------------------------------------------------------------
  _stateAfterDoctypeSystemIdentifier(t) {
    const u = this.currentToken;
    switch (t) {
      case r.SPACE:
      case r.LINE_FEED:
      case r.TABULATION:
      case r.FORM_FEED:
        break;
      case r.GREATER_THAN_SIGN: {
        this.emitCurrentDoctype(u), this.state = i.DATA;
        break;
      }
      case r.EOF: {
        this._err(f.eofInDoctype), u.forceQuirks = !0, this.emitCurrentDoctype(u), this._emitEOFToken();
        break;
      }
      default:
        this._err(f.unexpectedCharacterAfterDoctypeSystemIdentifier), this.state = i.BOGUS_DOCTYPE, this._stateBogusDoctype(t);
    }
  }
  // Bogus DOCTYPE state
  //------------------------------------------------------------------
  _stateBogusDoctype(t) {
    const u = this.currentToken;
    switch (t) {
      case r.GREATER_THAN_SIGN: {
        this.emitCurrentDoctype(u), this.state = i.DATA;
        break;
      }
      case r.NULL: {
        this._err(f.unexpectedNullCharacter);
        break;
      }
      case r.EOF: {
        this.emitCurrentDoctype(u), this._emitEOFToken();
        break;
      }
    }
  }
  // CDATA section state
  //------------------------------------------------------------------
  _stateCdataSection(t) {
    switch (t) {
      case r.RIGHT_SQUARE_BRACKET: {
        this.state = i.CDATA_SECTION_BRACKET;
        break;
      }
      case r.EOF: {
        this._err(f.eofInCdata), this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(t);
    }
  }
  // CDATA section bracket state
  //------------------------------------------------------------------
  _stateCdataSectionBracket(t) {
    t === r.RIGHT_SQUARE_BRACKET ? this.state = i.CDATA_SECTION_END : (this._emitChars("]"), this.state = i.CDATA_SECTION, this._stateCdataSection(t));
  }
  // CDATA section end state
  //------------------------------------------------------------------
  _stateCdataSectionEnd(t) {
    switch (t) {
      case r.GREATER_THAN_SIGN: {
        this.state = i.DATA;
        break;
      }
      case r.RIGHT_SQUARE_BRACKET: {
        this._emitChars("]");
        break;
      }
      default:
        this._emitChars("]]"), this.state = i.CDATA_SECTION, this._stateCdataSection(t);
    }
  }
  // Character reference state
  //------------------------------------------------------------------
  _stateCharacterReference() {
    let t = this.entityDecoder.write(this.preprocessor.html, this.preprocessor.pos);
    if (t < 0)
      if (this.preprocessor.lastChunkWritten)
        t = this.entityDecoder.end();
      else {
        this.active = !1, this.preprocessor.pos = this.preprocessor.html.length - 1, this.consumedAfterSnapshot = 0, this.preprocessor.endOfChunkHit = !0;
        return;
      }
    t === 0 ? (this.preprocessor.pos = this.entityStartPos, this._flushCodePointConsumedAsCharacterReference(r.AMPERSAND), this.state = !this._isCharacterReferenceInAttribute() && Je(this.preprocessor.peek(1)) ? i.AMBIGUOUS_AMPERSAND : this.returnState) : this.state = this.returnState;
  }
  // Ambiguos ampersand state
  //------------------------------------------------------------------
  _stateAmbiguousAmpersand(t) {
    Je(t) ? this._flushCodePointConsumedAsCharacterReference(t) : (t === r.SEMICOLON && this._err(f.unknownNamedCharacterReference), this.state = this.returnState, this._callState(t));
  }
}
const gt = /* @__PURE__ */ new Set([a.DD, a.DT, a.LI, a.OPTGROUP, a.OPTION, a.P, a.RB, a.RP, a.RT, a.RTC]), $e = /* @__PURE__ */ new Set([
  ...gt,
  a.CAPTION,
  a.COLGROUP,
  a.TBODY,
  a.TD,
  a.TFOOT,
  a.TH,
  a.THEAD,
  a.TR
]), ce = /* @__PURE__ */ new Set([
  a.APPLET,
  a.CAPTION,
  a.HTML,
  a.MARQUEE,
  a.OBJECT,
  a.TABLE,
  a.TD,
  a.TEMPLATE,
  a.TH
]), Mu = /* @__PURE__ */ new Set([...ce, a.OL, a.UL]), Bu = /* @__PURE__ */ new Set([...ce, a.BUTTON]), et = /* @__PURE__ */ new Set([a.ANNOTATION_XML, a.MI, a.MN, a.MO, a.MS, a.MTEXT]), tt = /* @__PURE__ */ new Set([a.DESC, a.FOREIGN_OBJECT, a.TITLE]), yu = /* @__PURE__ */ new Set([a.TR, a.TEMPLATE, a.HTML]), Uu = /* @__PURE__ */ new Set([a.TBODY, a.TFOOT, a.THEAD, a.TEMPLATE, a.HTML]), ku = /* @__PURE__ */ new Set([a.TABLE, a.TEMPLATE, a.HTML]), Hu = /* @__PURE__ */ new Set([a.TD, a.TH]);
class Fu {
  get currentTmplContentOrNode() {
    return this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : this.current;
  }
  constructor(t, u, s) {
    this.treeAdapter = u, this.handler = s, this.items = [], this.tagIDs = [], this.stackTop = -1, this.tmplCount = 0, this.currentTagId = a.UNKNOWN, this.current = t;
  }
  //Index of element
  _indexOf(t) {
    return this.items.lastIndexOf(t, this.stackTop);
  }
  //Update current element
  _isInTemplate() {
    return this.currentTagId === a.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === h.HTML;
  }
  _updateCurrentElement() {
    this.current = this.items[this.stackTop], this.currentTagId = this.tagIDs[this.stackTop];
  }
  //Mutations
  push(t, u) {
    this.stackTop++, this.items[this.stackTop] = t, this.current = t, this.tagIDs[this.stackTop] = u, this.currentTagId = u, this._isInTemplate() && this.tmplCount++, this.handler.onItemPush(t, u, !0);
  }
  pop() {
    const t = this.current;
    this.tmplCount > 0 && this._isInTemplate() && this.tmplCount--, this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(t, !0);
  }
  replace(t, u) {
    const s = this._indexOf(t);
    this.items[s] = u, s === this.stackTop && (this.current = u);
  }
  insertAfter(t, u, s) {
    const n = this._indexOf(t) + 1;
    this.items.splice(n, 0, u), this.tagIDs.splice(n, 0, s), this.stackTop++, n === this.stackTop && this._updateCurrentElement(), this.current && this.currentTagId !== void 0 && this.handler.onItemPush(this.current, this.currentTagId, n === this.stackTop);
  }
  popUntilTagNamePopped(t) {
    let u = this.stackTop + 1;
    do
      u = this.tagIDs.lastIndexOf(t, u - 1);
    while (u > 0 && this.treeAdapter.getNamespaceURI(this.items[u]) !== h.HTML);
    this.shortenToLength(Math.max(u, 0));
  }
  shortenToLength(t) {
    for (; this.stackTop >= t; ) {
      const u = this.current;
      this.tmplCount > 0 && this._isInTemplate() && (this.tmplCount -= 1), this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(u, this.stackTop < t);
    }
  }
  popUntilElementPopped(t) {
    const u = this._indexOf(t);
    this.shortenToLength(Math.max(u, 0));
  }
  popUntilPopped(t, u) {
    const s = this._indexOfTagNames(t, u);
    this.shortenToLength(Math.max(s, 0));
  }
  popUntilNumberedHeaderPopped() {
    this.popUntilPopped(Re, h.HTML);
  }
  popUntilTableCellPopped() {
    this.popUntilPopped(Hu, h.HTML);
  }
  popAllUpToHtmlElement() {
    this.tmplCount = 0, this.shortenToLength(1);
  }
  _indexOfTagNames(t, u) {
    for (let s = this.stackTop; s >= 0; s--)
      if (t.has(this.tagIDs[s]) && this.treeAdapter.getNamespaceURI(this.items[s]) === u)
        return s;
    return -1;
  }
  clearBackTo(t, u) {
    const s = this._indexOfTagNames(t, u);
    this.shortenToLength(s + 1);
  }
  clearBackToTableContext() {
    this.clearBackTo(ku, h.HTML);
  }
  clearBackToTableBodyContext() {
    this.clearBackTo(Uu, h.HTML);
  }
  clearBackToTableRowContext() {
    this.clearBackTo(yu, h.HTML);
  }
  remove(t) {
    const u = this._indexOf(t);
    u >= 0 && (u === this.stackTop ? this.pop() : (this.items.splice(u, 1), this.tagIDs.splice(u, 1), this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(t, !1)));
  }
  //Search
  tryPeekProperlyNestedBodyElement() {
    return this.stackTop >= 1 && this.tagIDs[1] === a.BODY ? this.items[1] : null;
  }
  contains(t) {
    return this._indexOf(t) > -1;
  }
  getCommonAncestor(t) {
    const u = this._indexOf(t) - 1;
    return u >= 0 ? this.items[u] : null;
  }
  isRootHtmlElementCurrent() {
    return this.stackTop === 0 && this.tagIDs[0] === a.HTML;
  }
  //Element in scope
  hasInDynamicScope(t, u) {
    for (let s = this.stackTop; s >= 0; s--) {
      const n = this.tagIDs[s];
      switch (this.treeAdapter.getNamespaceURI(this.items[s])) {
        case h.HTML: {
          if (n === t)
            return !0;
          if (u.has(n))
            return !1;
          break;
        }
        case h.SVG: {
          if (tt.has(n))
            return !1;
          break;
        }
        case h.MATHML: {
          if (et.has(n))
            return !1;
          break;
        }
      }
    }
    return !0;
  }
  hasInScope(t) {
    return this.hasInDynamicScope(t, ce);
  }
  hasInListItemScope(t) {
    return this.hasInDynamicScope(t, Mu);
  }
  hasInButtonScope(t) {
    return this.hasInDynamicScope(t, Bu);
  }
  hasNumberedHeaderInScope() {
    for (let t = this.stackTop; t >= 0; t--) {
      const u = this.tagIDs[t];
      switch (this.treeAdapter.getNamespaceURI(this.items[t])) {
        case h.HTML: {
          if (Re.has(u))
            return !0;
          if (ce.has(u))
            return !1;
          break;
        }
        case h.SVG: {
          if (tt.has(u))
            return !1;
          break;
        }
        case h.MATHML: {
          if (et.has(u))
            return !1;
          break;
        }
      }
    }
    return !0;
  }
  hasInTableScope(t) {
    for (let u = this.stackTop; u >= 0; u--)
      if (this.treeAdapter.getNamespaceURI(this.items[u]) === h.HTML)
        switch (this.tagIDs[u]) {
          case t:
            return !0;
          case a.TABLE:
          case a.HTML:
            return !1;
        }
    return !0;
  }
  hasTableBodyContextInTableScope() {
    for (let t = this.stackTop; t >= 0; t--)
      if (this.treeAdapter.getNamespaceURI(this.items[t]) === h.HTML)
        switch (this.tagIDs[t]) {
          case a.TBODY:
          case a.THEAD:
          case a.TFOOT:
            return !0;
          case a.TABLE:
          case a.HTML:
            return !1;
        }
    return !0;
  }
  hasInSelectScope(t) {
    for (let u = this.stackTop; u >= 0; u--)
      if (this.treeAdapter.getNamespaceURI(this.items[u]) === h.HTML)
        switch (this.tagIDs[u]) {
          case t:
            return !0;
          case a.OPTION:
          case a.OPTGROUP:
            break;
          default:
            return !1;
        }
    return !0;
  }
  //Implied end tags
  generateImpliedEndTags() {
    for (; this.currentTagId !== void 0 && gt.has(this.currentTagId); )
      this.pop();
  }
  generateImpliedEndTagsThoroughly() {
    for (; this.currentTagId !== void 0 && $e.has(this.currentTagId); )
      this.pop();
  }
  generateImpliedEndTagsWithExclusion(t) {
    for (; this.currentTagId !== void 0 && this.currentTagId !== t && $e.has(this.currentTagId); )
      this.pop();
  }
}
const me = 3;
var H;
(function(e) {
  e[e.Marker = 0] = "Marker", e[e.Element = 1] = "Element";
})(H || (H = {}));
const ut = { type: H.Marker };
class wu {
  constructor(t) {
    this.treeAdapter = t, this.entries = [], this.bookmark = null;
  }
  //Noah Ark's condition
  //OPTIMIZATION: at first we try to find possible candidates for exclusion using
  //lightweight heuristics without thorough attributes check.
  _getNoahArkConditionCandidates(t, u) {
    const s = [], n = u.length, o = this.treeAdapter.getTagName(t), E = this.treeAdapter.getNamespaceURI(t);
    for (let l = 0; l < this.entries.length; l++) {
      const T = this.entries[l];
      if (T.type === H.Marker)
        break;
      const { element: m } = T;
      if (this.treeAdapter.getTagName(m) === o && this.treeAdapter.getNamespaceURI(m) === E) {
        const _ = this.treeAdapter.getAttrList(m);
        _.length === n && s.push({ idx: l, attrs: _ });
      }
    }
    return s;
  }
  _ensureNoahArkCondition(t) {
    if (this.entries.length < me)
      return;
    const u = this.treeAdapter.getAttrList(t), s = this._getNoahArkConditionCandidates(t, u);
    if (s.length < me)
      return;
    const n = new Map(u.map((E) => [E.name, E.value]));
    let o = 0;
    for (let E = 0; E < s.length; E++) {
      const l = s[E];
      l.attrs.every((T) => n.get(T.name) === T.value) && (o += 1, o >= me && this.entries.splice(l.idx, 1));
    }
  }
  //Mutations
  insertMarker() {
    this.entries.unshift(ut);
  }
  pushElement(t, u) {
    this._ensureNoahArkCondition(t), this.entries.unshift({
      type: H.Element,
      element: t,
      token: u
    });
  }
  insertElementAfterBookmark(t, u) {
    const s = this.entries.indexOf(this.bookmark);
    this.entries.splice(s, 0, {
      type: H.Element,
      element: t,
      token: u
    });
  }
  removeEntry(t) {
    const u = this.entries.indexOf(t);
    u !== -1 && this.entries.splice(u, 1);
  }
  /**
   * Clears the list of formatting elements up to the last marker.
   *
   * @see https://html.spec.whatwg.org/multipage/parsing.html#clear-the-list-of-active-formatting-elements-up-to-the-last-marker
   */
  clearToLastMarker() {
    const t = this.entries.indexOf(ut);
    t === -1 ? this.entries.length = 0 : this.entries.splice(0, t + 1);
  }
  //Search
  getElementEntryInScopeWithTagName(t) {
    const u = this.entries.find((s) => s.type === H.Marker || this.treeAdapter.getTagName(s.element) === t);
    return u && u.type === H.Element ? u : null;
  }
  getElementEntry(t) {
    return this.entries.find((u) => u.type === H.Element && u.element === t);
  }
}
const Y = {
  //Node construction
  createDocument() {
    return {
      nodeName: "#document",
      mode: M.NO_QUIRKS,
      childNodes: []
    };
  },
  createDocumentFragment() {
    return {
      nodeName: "#document-fragment",
      childNodes: []
    };
  },
  createElement(e, t, u) {
    return {
      nodeName: e,
      tagName: e,
      attrs: u,
      namespaceURI: t,
      childNodes: [],
      parentNode: null
    };
  },
  createCommentNode(e) {
    return {
      nodeName: "#comment",
      data: e,
      parentNode: null
    };
  },
  createTextNode(e) {
    return {
      nodeName: "#text",
      value: e,
      parentNode: null
    };
  },
  //Tree mutation
  appendChild(e, t) {
    e.childNodes.push(t), t.parentNode = e;
  },
  insertBefore(e, t, u) {
    const s = e.childNodes.indexOf(u);
    e.childNodes.splice(s, 0, t), t.parentNode = e;
  },
  setTemplateContent(e, t) {
    e.content = t;
  },
  getTemplateContent(e) {
    return e.content;
  },
  setDocumentType(e, t, u, s) {
    const n = e.childNodes.find((o) => o.nodeName === "#documentType");
    if (n)
      n.name = t, n.publicId = u, n.systemId = s;
    else {
      const o = {
        nodeName: "#documentType",
        name: t,
        publicId: u,
        systemId: s,
        parentNode: null
      };
      Y.appendChild(e, o);
    }
  },
  setDocumentMode(e, t) {
    e.mode = t;
  },
  getDocumentMode(e) {
    return e.mode;
  },
  detachNode(e) {
    if (e.parentNode) {
      const t = e.parentNode.childNodes.indexOf(e);
      e.parentNode.childNodes.splice(t, 1), e.parentNode = null;
    }
  },
  insertText(e, t) {
    if (e.childNodes.length > 0) {
      const u = e.childNodes[e.childNodes.length - 1];
      if (Y.isTextNode(u)) {
        u.value += t;
        return;
      }
    }
    Y.appendChild(e, Y.createTextNode(t));
  },
  insertTextBefore(e, t, u) {
    const s = e.childNodes[e.childNodes.indexOf(u) - 1];
    s && Y.isTextNode(s) ? s.value += t : Y.insertBefore(e, Y.createTextNode(t), u);
  },
  adoptAttributes(e, t) {
    const u = new Set(e.attrs.map((s) => s.name));
    for (let s = 0; s < t.length; s++)
      u.has(t[s].name) || e.attrs.push(t[s]);
  },
  //Tree traversing
  getFirstChild(e) {
    return e.childNodes[0];
  },
  getChildNodes(e) {
    return e.childNodes;
  },
  getParentNode(e) {
    return e.parentNode;
  },
  getAttrList(e) {
    return e.attrs;
  },
  //Node data
  getTagName(e) {
    return e.tagName;
  },
  getNamespaceURI(e) {
    return e.namespaceURI;
  },
  getTextNodeContent(e) {
    return e.value;
  },
  getCommentNodeContent(e) {
    return e.data;
  },
  getDocumentTypeNodeName(e) {
    return e.name;
  },
  getDocumentTypeNodePublicId(e) {
    return e.publicId;
  },
  getDocumentTypeNodeSystemId(e) {
    return e.systemId;
  },
  //Node types
  isTextNode(e) {
    return e.nodeName === "#text";
  },
  isCommentNode(e) {
    return e.nodeName === "#comment";
  },
  isDocumentTypeNode(e) {
    return e.nodeName === "#documentType";
  },
  isElementNode(e) {
    return Object.prototype.hasOwnProperty.call(e, "tagName");
  },
  // Source code location
  setNodeSourceCodeLocation(e, t) {
    e.sourceCodeLocation = t;
  },
  getNodeSourceCodeLocation(e) {
    return e.sourceCodeLocation;
  },
  updateNodeSourceCodeLocation(e, t) {
    e.sourceCodeLocation = { ...e.sourceCodeLocation, ...t };
  }
}, St = "html", Yu = "about:legacy-compat", vu = "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd", Ot = [
  "+//silmaril//dtd html pro v0r11 19970101//",
  "-//as//dtd html 3.0 aswedit + extensions//",
  "-//advasoft ltd//dtd html 3.0 aswedit + extensions//",
  "-//ietf//dtd html 2.0 level 1//",
  "-//ietf//dtd html 2.0 level 2//",
  "-//ietf//dtd html 2.0 strict level 1//",
  "-//ietf//dtd html 2.0 strict level 2//",
  "-//ietf//dtd html 2.0 strict//",
  "-//ietf//dtd html 2.0//",
  "-//ietf//dtd html 2.1e//",
  "-//ietf//dtd html 3.0//",
  "-//ietf//dtd html 3.2 final//",
  "-//ietf//dtd html 3.2//",
  "-//ietf//dtd html 3//",
  "-//ietf//dtd html level 0//",
  "-//ietf//dtd html level 1//",
  "-//ietf//dtd html level 2//",
  "-//ietf//dtd html level 3//",
  "-//ietf//dtd html strict level 0//",
  "-//ietf//dtd html strict level 1//",
  "-//ietf//dtd html strict level 2//",
  "-//ietf//dtd html strict level 3//",
  "-//ietf//dtd html strict//",
  "-//ietf//dtd html//",
  "-//metrius//dtd metrius presentational//",
  "-//microsoft//dtd internet explorer 2.0 html strict//",
  "-//microsoft//dtd internet explorer 2.0 html//",
  "-//microsoft//dtd internet explorer 2.0 tables//",
  "-//microsoft//dtd internet explorer 3.0 html strict//",
  "-//microsoft//dtd internet explorer 3.0 html//",
  "-//microsoft//dtd internet explorer 3.0 tables//",
  "-//netscape comm. corp.//dtd html//",
  "-//netscape comm. corp.//dtd strict html//",
  "-//o'reilly and associates//dtd html 2.0//",
  "-//o'reilly and associates//dtd html extended 1.0//",
  "-//o'reilly and associates//dtd html extended relaxed 1.0//",
  "-//sq//dtd html 2.0 hotmetal + extensions//",
  "-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//",
  "-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//",
  "-//spyglass//dtd html 2.0 extended//",
  "-//sun microsystems corp.//dtd hotjava html//",
  "-//sun microsystems corp.//dtd hotjava strict html//",
  "-//w3c//dtd html 3 1995-03-24//",
  "-//w3c//dtd html 3.2 draft//",
  "-//w3c//dtd html 3.2 final//",
  "-//w3c//dtd html 3.2//",
  "-//w3c//dtd html 3.2s draft//",
  "-//w3c//dtd html 4.0 frameset//",
  "-//w3c//dtd html 4.0 transitional//",
  "-//w3c//dtd html experimental 19960712//",
  "-//w3c//dtd html experimental 970421//",
  "-//w3c//dtd w3 html//",
  "-//w3o//dtd w3 html 3.0//",
  "-//webtechs//dtd mozilla html 2.0//",
  "-//webtechs//dtd mozilla html//"
], Qu = [
  ...Ot,
  "-//w3c//dtd html 4.01 frameset//",
  "-//w3c//dtd html 4.01 transitional//"
], qu = /* @__PURE__ */ new Set([
  "-//w3o//dtd w3 html strict 3.0//en//",
  "-/w3c/dtd html 4.0 transitional/en",
  "html"
]), Lt = ["-//w3c//dtd xhtml 1.0 frameset//", "-//w3c//dtd xhtml 1.0 transitional//"], Wu = [
  ...Lt,
  "-//w3c//dtd html 4.01 frameset//",
  "-//w3c//dtd html 4.01 transitional//"
];
function at(e, t) {
  return t.some((u) => e.startsWith(u));
}
function Gu(e) {
  return e.name === St && e.publicId === null && (e.systemId === null || e.systemId === Yu);
}
function Vu(e) {
  if (e.name !== St)
    return M.QUIRKS;
  const { systemId: t } = e;
  if (t && t.toLowerCase() === vu)
    return M.QUIRKS;
  let { publicId: u } = e;
  if (u !== null) {
    if (u = u.toLowerCase(), qu.has(u))
      return M.QUIRKS;
    let s = t === null ? Qu : Ot;
    if (at(u, s))
      return M.QUIRKS;
    if (s = t === null ? Lt : Wu, at(u, s))
      return M.LIMITED_QUIRKS;
  }
  return M.NO_QUIRKS;
}
const st = {
  TEXT_HTML: "text/html",
  APPLICATION_XML: "application/xhtml+xml"
}, Ku = "definitionurl", Xu = "definitionURL", ju = new Map([
  "attributeName",
  "attributeType",
  "baseFrequency",
  "baseProfile",
  "calcMode",
  "clipPathUnits",
  "diffuseConstant",
  "edgeMode",
  "filterUnits",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "kernelMatrix",
  "kernelUnitLength",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "limitingConeAngle",
  "markerHeight",
  "markerUnits",
  "markerWidth",
  "maskContentUnits",
  "maskUnits",
  "numOctaves",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "refX",
  "refY",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "specularConstant",
  "specularExponent",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stitchTiles",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textLength",
  "viewBox",
  "viewTarget",
  "xChannelSelector",
  "yChannelSelector",
  "zoomAndPan"
].map((e) => [e.toLowerCase(), e])), zu = /* @__PURE__ */ new Map([
  ["xlink:actuate", { prefix: "xlink", name: "actuate", namespace: h.XLINK }],
  ["xlink:arcrole", { prefix: "xlink", name: "arcrole", namespace: h.XLINK }],
  ["xlink:href", { prefix: "xlink", name: "href", namespace: h.XLINK }],
  ["xlink:role", { prefix: "xlink", name: "role", namespace: h.XLINK }],
  ["xlink:show", { prefix: "xlink", name: "show", namespace: h.XLINK }],
  ["xlink:title", { prefix: "xlink", name: "title", namespace: h.XLINK }],
  ["xlink:type", { prefix: "xlink", name: "type", namespace: h.XLINK }],
  ["xml:lang", { prefix: "xml", name: "lang", namespace: h.XML }],
  ["xml:space", { prefix: "xml", name: "space", namespace: h.XML }],
  ["xmlns", { prefix: "", name: "xmlns", namespace: h.XMLNS }],
  ["xmlns:xlink", { prefix: "xmlns", name: "xlink", namespace: h.XMLNS }]
]), Ju = new Map([
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "clipPath",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "foreignObject",
  "glyphRef",
  "linearGradient",
  "radialGradient",
  "textPath"
].map((e) => [e.toLowerCase(), e])), Zu = /* @__PURE__ */ new Set([
  a.B,
  a.BIG,
  a.BLOCKQUOTE,
  a.BODY,
  a.BR,
  a.CENTER,
  a.CODE,
  a.DD,
  a.DIV,
  a.DL,
  a.DT,
  a.EM,
  a.EMBED,
  a.H1,
  a.H2,
  a.H3,
  a.H4,
  a.H5,
  a.H6,
  a.HEAD,
  a.HR,
  a.I,
  a.IMG,
  a.LI,
  a.LISTING,
  a.MENU,
  a.META,
  a.NOBR,
  a.OL,
  a.P,
  a.PRE,
  a.RUBY,
  a.S,
  a.SMALL,
  a.SPAN,
  a.STRONG,
  a.STRIKE,
  a.SUB,
  a.SUP,
  a.TABLE,
  a.TT,
  a.U,
  a.UL,
  a.VAR
]);
function $u(e) {
  const t = e.tagID;
  return t === a.FONT && e.attrs.some(({ name: s }) => s === Q.COLOR || s === Q.SIZE || s === Q.FACE) || Zu.has(t);
}
function Rt(e) {
  for (let t = 0; t < e.attrs.length; t++)
    if (e.attrs[t].name === Ku) {
      e.attrs[t].name = Xu;
      break;
    }
}
function Dt(e) {
  for (let t = 0; t < e.attrs.length; t++) {
    const u = ju.get(e.attrs[t].name);
    u != null && (e.attrs[t].name = u);
  }
}
function Fe(e) {
  for (let t = 0; t < e.attrs.length; t++) {
    const u = zu.get(e.attrs[t].name);
    u && (e.attrs[t].prefix = u.prefix, e.attrs[t].name = u.name, e.attrs[t].namespace = u.namespace);
  }
}
function ea(e) {
  const t = Ju.get(e.tagName);
  t != null && (e.tagName = t, e.tagID = Ee(e.tagName));
}
function ta(e, t) {
  return t === h.MATHML && (e === a.MI || e === a.MO || e === a.MN || e === a.MS || e === a.MTEXT);
}
function ua(e, t, u) {
  if (t === h.MATHML && e === a.ANNOTATION_XML) {
    for (let s = 0; s < u.length; s++)
      if (u[s].name === Q.ENCODING) {
        const n = u[s].value.toLowerCase();
        return n === st.TEXT_HTML || n === st.APPLICATION_XML;
      }
  }
  return t === h.SVG && (e === a.FOREIGN_OBJECT || e === a.DESC || e === a.TITLE);
}
function aa(e, t, u, s) {
  return (!s || s === h.HTML) && ua(e, t, u) || (!s || s === h.MATHML) && ta(e, t);
}
const sa = "hidden", ra = 8, na = 3;
var c;
(function(e) {
  e[e.INITIAL = 0] = "INITIAL", e[e.BEFORE_HTML = 1] = "BEFORE_HTML", e[e.BEFORE_HEAD = 2] = "BEFORE_HEAD", e[e.IN_HEAD = 3] = "IN_HEAD", e[e.IN_HEAD_NO_SCRIPT = 4] = "IN_HEAD_NO_SCRIPT", e[e.AFTER_HEAD = 5] = "AFTER_HEAD", e[e.IN_BODY = 6] = "IN_BODY", e[e.TEXT = 7] = "TEXT", e[e.IN_TABLE = 8] = "IN_TABLE", e[e.IN_TABLE_TEXT = 9] = "IN_TABLE_TEXT", e[e.IN_CAPTION = 10] = "IN_CAPTION", e[e.IN_COLUMN_GROUP = 11] = "IN_COLUMN_GROUP", e[e.IN_TABLE_BODY = 12] = "IN_TABLE_BODY", e[e.IN_ROW = 13] = "IN_ROW", e[e.IN_CELL = 14] = "IN_CELL", e[e.IN_SELECT = 15] = "IN_SELECT", e[e.IN_SELECT_IN_TABLE = 16] = "IN_SELECT_IN_TABLE", e[e.IN_TEMPLATE = 17] = "IN_TEMPLATE", e[e.AFTER_BODY = 18] = "AFTER_BODY", e[e.IN_FRAMESET = 19] = "IN_FRAMESET", e[e.AFTER_FRAMESET = 20] = "AFTER_FRAMESET", e[e.AFTER_AFTER_BODY = 21] = "AFTER_AFTER_BODY", e[e.AFTER_AFTER_FRAMESET = 22] = "AFTER_AFTER_FRAMESET";
})(c || (c = {}));
const ia = {
  startLine: -1,
  startCol: -1,
  startOffset: -1,
  endLine: -1,
  endCol: -1,
  endOffset: -1
}, Pt = /* @__PURE__ */ new Set([a.TABLE, a.TBODY, a.TFOOT, a.THEAD, a.TR]), rt = {
  scriptingEnabled: !0,
  sourceCodeLocationInfo: !1,
  treeAdapter: Y,
  onParseError: null
};
class xt {
  constructor(t, u, s = null, n = null) {
    this.fragmentContext = s, this.scriptHandler = n, this.currentToken = null, this.stopped = !1, this.insertionMode = c.INITIAL, this.originalInsertionMode = c.INITIAL, this.headElement = null, this.formElement = null, this.currentNotInHTML = !1, this.tmplInsertionModeStack = [], this.pendingCharacterTokens = [], this.hasNonWhitespacePendingCharacterToken = !1, this.framesetOk = !0, this.skipNextNewLine = !1, this.fosterParentingEnabled = !1, this.options = {
      ...rt,
      ...t
    }, this.treeAdapter = this.options.treeAdapter, this.onParseError = this.options.onParseError, this.onParseError && (this.options.sourceCodeLocationInfo = !0), this.document = u ?? this.treeAdapter.createDocument(), this.tokenizer = new xu(this.options, this), this.activeFormattingElements = new wu(this.treeAdapter), this.fragmentContextID = s ? Ee(this.treeAdapter.getTagName(s)) : a.UNKNOWN, this._setContextModes(s ?? this.document, this.fragmentContextID), this.openElements = new Fu(this.document, this.treeAdapter, this);
  }
  // API
  static parse(t, u) {
    const s = new this(u);
    return s.tokenizer.write(t, !0), s.document;
  }
  static getFragmentParser(t, u) {
    const s = {
      ...rt,
      ...u
    };
    t ?? (t = s.treeAdapter.createElement(d.TEMPLATE, h.HTML, []));
    const n = s.treeAdapter.createElement("documentmock", h.HTML, []), o = new this(s, n, t);
    return o.fragmentContextID === a.TEMPLATE && o.tmplInsertionModeStack.unshift(c.IN_TEMPLATE), o._initTokenizerForFragmentParsing(), o._insertFakeRootElement(), o._resetInsertionMode(), o._findFormInFragmentContext(), o;
  }
  getFragment() {
    const t = this.treeAdapter.getFirstChild(this.document), u = this.treeAdapter.createDocumentFragment();
    return this._adoptNodes(t, u), u;
  }
  //Errors
  /** @internal */
  _err(t, u, s) {
    var n;
    if (!this.onParseError)
      return;
    const o = (n = t.location) !== null && n !== void 0 ? n : ia, E = {
      code: u,
      startLine: o.startLine,
      startCol: o.startCol,
      startOffset: o.startOffset,
      endLine: s ? o.startLine : o.endLine,
      endCol: s ? o.startCol : o.endCol,
      endOffset: s ? o.startOffset : o.endOffset
    };
    this.onParseError(E);
  }
  //Stack events
  /** @internal */
  onItemPush(t, u, s) {
    var n, o;
    (o = (n = this.treeAdapter).onItemPush) === null || o === void 0 || o.call(n, t), s && this.openElements.stackTop > 0 && this._setContextModes(t, u);
  }
  /** @internal */
  onItemPop(t, u) {
    var s, n;
    if (this.options.sourceCodeLocationInfo && this._setEndLocation(t, this.currentToken), (n = (s = this.treeAdapter).onItemPop) === null || n === void 0 || n.call(s, t, this.openElements.current), u) {
      let o, E;
      this.openElements.stackTop === 0 && this.fragmentContext ? (o = this.fragmentContext, E = this.fragmentContextID) : { current: o, currentTagId: E } = this.openElements, this._setContextModes(o, E);
    }
  }
  _setContextModes(t, u) {
    const s = t === this.document || t && this.treeAdapter.getNamespaceURI(t) === h.HTML;
    this.currentNotInHTML = !s, this.tokenizer.inForeignNode = !s && t !== void 0 && u !== void 0 && !this._isIntegrationPoint(u, t);
  }
  /** @protected */
  _switchToTextParsing(t, u) {
    this._insertElement(t, h.HTML), this.tokenizer.state = u, this.originalInsertionMode = this.insertionMode, this.insertionMode = c.TEXT;
  }
  switchToPlaintextParsing() {
    this.insertionMode = c.TEXT, this.originalInsertionMode = c.IN_BODY, this.tokenizer.state = P.PLAINTEXT;
  }
  //Fragment parsing
  /** @protected */
  _getAdjustedCurrentElement() {
    return this.openElements.stackTop === 0 && this.fragmentContext ? this.fragmentContext : this.openElements.current;
  }
  /** @protected */
  _findFormInFragmentContext() {
    let t = this.fragmentContext;
    for (; t; ) {
      if (this.treeAdapter.getTagName(t) === d.FORM) {
        this.formElement = t;
        break;
      }
      t = this.treeAdapter.getParentNode(t);
    }
  }
  _initTokenizerForFragmentParsing() {
    if (!(!this.fragmentContext || this.treeAdapter.getNamespaceURI(this.fragmentContext) !== h.HTML))
      switch (this.fragmentContextID) {
        case a.TITLE:
        case a.TEXTAREA: {
          this.tokenizer.state = P.RCDATA;
          break;
        }
        case a.STYLE:
        case a.XMP:
        case a.IFRAME:
        case a.NOEMBED:
        case a.NOFRAMES:
        case a.NOSCRIPT: {
          this.tokenizer.state = P.RAWTEXT;
          break;
        }
        case a.SCRIPT: {
          this.tokenizer.state = P.SCRIPT_DATA;
          break;
        }
        case a.PLAINTEXT: {
          this.tokenizer.state = P.PLAINTEXT;
          break;
        }
      }
  }
  //Tree mutation
  /** @protected */
  _setDocumentType(t) {
    const u = t.name || "", s = t.publicId || "", n = t.systemId || "";
    if (this.treeAdapter.setDocumentType(this.document, u, s, n), t.location) {
      const E = this.treeAdapter.getChildNodes(this.document).find((l) => this.treeAdapter.isDocumentTypeNode(l));
      E && this.treeAdapter.setNodeSourceCodeLocation(E, t.location);
    }
  }
  /** @protected */
  _attachElementToTree(t, u) {
    if (this.options.sourceCodeLocationInfo) {
      const s = u && {
        ...u,
        startTag: u
      };
      this.treeAdapter.setNodeSourceCodeLocation(t, s);
    }
    if (this._shouldFosterParentOnInsertion())
      this._fosterParentElement(t);
    else {
      const s = this.openElements.currentTmplContentOrNode;
      this.treeAdapter.appendChild(s ?? this.document, t);
    }
  }
  /**
   * For self-closing tags. Add an element to the tree, but skip adding it
   * to the stack.
   */
  /** @protected */
  _appendElement(t, u) {
    const s = this.treeAdapter.createElement(t.tagName, u, t.attrs);
    this._attachElementToTree(s, t.location);
  }
  /** @protected */
  _insertElement(t, u) {
    const s = this.treeAdapter.createElement(t.tagName, u, t.attrs);
    this._attachElementToTree(s, t.location), this.openElements.push(s, t.tagID);
  }
  /** @protected */
  _insertFakeElement(t, u) {
    const s = this.treeAdapter.createElement(t, h.HTML, []);
    this._attachElementToTree(s, null), this.openElements.push(s, u);
  }
  /** @protected */
  _insertTemplate(t) {
    const u = this.treeAdapter.createElement(t.tagName, h.HTML, t.attrs), s = this.treeAdapter.createDocumentFragment();
    this.treeAdapter.setTemplateContent(u, s), this._attachElementToTree(u, t.location), this.openElements.push(u, t.tagID), this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(s, null);
  }
  /** @protected */
  _insertFakeRootElement() {
    const t = this.treeAdapter.createElement(d.HTML, h.HTML, []);
    this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(t, null), this.treeAdapter.appendChild(this.openElements.current, t), this.openElements.push(t, a.HTML);
  }
  /** @protected */
  _appendCommentNode(t, u) {
    const s = this.treeAdapter.createCommentNode(t.data);
    this.treeAdapter.appendChild(u, s), this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(s, t.location);
  }
  /** @protected */
  _insertCharacters(t) {
    let u, s;
    if (this._shouldFosterParentOnInsertion() ? ({ parent: u, beforeElement: s } = this._findFosterParentingLocation(), s ? this.treeAdapter.insertTextBefore(u, t.chars, s) : this.treeAdapter.insertText(u, t.chars)) : (u = this.openElements.currentTmplContentOrNode, this.treeAdapter.insertText(u, t.chars)), !t.location)
      return;
    const n = this.treeAdapter.getChildNodes(u), o = s ? n.lastIndexOf(s) : n.length, E = n[o - 1];
    if (this.treeAdapter.getNodeSourceCodeLocation(E)) {
      const { endLine: T, endCol: m, endOffset: _ } = t.location;
      this.treeAdapter.updateNodeSourceCodeLocation(E, { endLine: T, endCol: m, endOffset: _ });
    } else this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(E, t.location);
  }
  /** @protected */
  _adoptNodes(t, u) {
    for (let s = this.treeAdapter.getFirstChild(t); s; s = this.treeAdapter.getFirstChild(t))
      this.treeAdapter.detachNode(s), this.treeAdapter.appendChild(u, s);
  }
  /** @protected */
  _setEndLocation(t, u) {
    if (this.treeAdapter.getNodeSourceCodeLocation(t) && u.location) {
      const s = u.location, n = this.treeAdapter.getTagName(t), o = (
        // NOTE: For cases like <p> <p> </p> - First 'p' closes without a closing
        // tag and for cases like <td> <p> </td> - 'p' closes without a closing tag.
        u.type === p.END_TAG && n === u.tagName ? {
          endTag: { ...s },
          endLine: s.endLine,
          endCol: s.endCol,
          endOffset: s.endOffset
        } : {
          endLine: s.startLine,
          endCol: s.startCol,
          endOffset: s.startOffset
        }
      );
      this.treeAdapter.updateNodeSourceCodeLocation(t, o);
    }
  }
  //Token processing
  shouldProcessStartTagTokenInForeignContent(t) {
    if (!this.currentNotInHTML)
      return !1;
    let u, s;
    return this.openElements.stackTop === 0 && this.fragmentContext ? (u = this.fragmentContext, s = this.fragmentContextID) : { current: u, currentTagId: s } = this.openElements, t.tagID === a.SVG && this.treeAdapter.getTagName(u) === d.ANNOTATION_XML && this.treeAdapter.getNamespaceURI(u) === h.MATHML ? !1 : (
      // Check that `current` is not an integration point for HTML or MathML elements.
      this.tokenizer.inForeignNode || // If it _is_ an integration point, then we might have to check that it is not an HTML
      // integration point.
      (t.tagID === a.MGLYPH || t.tagID === a.MALIGNMARK) && s !== void 0 && !this._isIntegrationPoint(s, u, h.HTML)
    );
  }
  /** @protected */
  _processToken(t) {
    switch (t.type) {
      case p.CHARACTER: {
        this.onCharacter(t);
        break;
      }
      case p.NULL_CHARACTER: {
        this.onNullCharacter(t);
        break;
      }
      case p.COMMENT: {
        this.onComment(t);
        break;
      }
      case p.DOCTYPE: {
        this.onDoctype(t);
        break;
      }
      case p.START_TAG: {
        this._processStartTag(t);
        break;
      }
      case p.END_TAG: {
        this.onEndTag(t);
        break;
      }
      case p.EOF: {
        this.onEof(t);
        break;
      }
      case p.WHITESPACE_CHARACTER: {
        this.onWhitespaceCharacter(t);
        break;
      }
    }
  }
  //Integration points
  /** @protected */
  _isIntegrationPoint(t, u, s) {
    const n = this.treeAdapter.getNamespaceURI(u), o = this.treeAdapter.getAttrList(u);
    return aa(t, n, o, s);
  }
  //Active formatting elements reconstruction
  /** @protected */
  _reconstructActiveFormattingElements() {
    const t = this.activeFormattingElements.entries.length;
    if (t) {
      const u = this.activeFormattingElements.entries.findIndex((n) => n.type === H.Marker || this.openElements.contains(n.element)), s = u === -1 ? t - 1 : u - 1;
      for (let n = s; n >= 0; n--) {
        const o = this.activeFormattingElements.entries[n];
        this._insertElement(o.token, this.treeAdapter.getNamespaceURI(o.element)), o.element = this.openElements.current;
      }
    }
  }
  //Close elements
  /** @protected */
  _closeTableCell() {
    this.openElements.generateImpliedEndTags(), this.openElements.popUntilTableCellPopped(), this.activeFormattingElements.clearToLastMarker(), this.insertionMode = c.IN_ROW;
  }
  /** @protected */
  _closePElement() {
    this.openElements.generateImpliedEndTagsWithExclusion(a.P), this.openElements.popUntilTagNamePopped(a.P);
  }
  //Insertion modes
  /** @protected */
  _resetInsertionMode() {
    for (let t = this.openElements.stackTop; t >= 0; t--)
      switch (t === 0 && this.fragmentContext ? this.fragmentContextID : this.openElements.tagIDs[t]) {
        case a.TR: {
          this.insertionMode = c.IN_ROW;
          return;
        }
        case a.TBODY:
        case a.THEAD:
        case a.TFOOT: {
          this.insertionMode = c.IN_TABLE_BODY;
          return;
        }
        case a.CAPTION: {
          this.insertionMode = c.IN_CAPTION;
          return;
        }
        case a.COLGROUP: {
          this.insertionMode = c.IN_COLUMN_GROUP;
          return;
        }
        case a.TABLE: {
          this.insertionMode = c.IN_TABLE;
          return;
        }
        case a.BODY: {
          this.insertionMode = c.IN_BODY;
          return;
        }
        case a.FRAMESET: {
          this.insertionMode = c.IN_FRAMESET;
          return;
        }
        case a.SELECT: {
          this._resetInsertionModeForSelect(t);
          return;
        }
        case a.TEMPLATE: {
          this.insertionMode = this.tmplInsertionModeStack[0];
          return;
        }
        case a.HTML: {
          this.insertionMode = this.headElement ? c.AFTER_HEAD : c.BEFORE_HEAD;
          return;
        }
        case a.TD:
        case a.TH: {
          if (t > 0) {
            this.insertionMode = c.IN_CELL;
            return;
          }
          break;
        }
        case a.HEAD: {
          if (t > 0) {
            this.insertionMode = c.IN_HEAD;
            return;
          }
          break;
        }
      }
    this.insertionMode = c.IN_BODY;
  }
  /** @protected */
  _resetInsertionModeForSelect(t) {
    if (t > 0)
      for (let u = t - 1; u > 0; u--) {
        const s = this.openElements.tagIDs[u];
        if (s === a.TEMPLATE)
          break;
        if (s === a.TABLE) {
          this.insertionMode = c.IN_SELECT_IN_TABLE;
          return;
        }
      }
    this.insertionMode = c.IN_SELECT;
  }
  //Foster parenting
  /** @protected */
  _isElementCausesFosterParenting(t) {
    return Pt.has(t);
  }
  /** @protected */
  _shouldFosterParentOnInsertion() {
    return this.fosterParentingEnabled && this.openElements.currentTagId !== void 0 && this._isElementCausesFosterParenting(this.openElements.currentTagId);
  }
  /** @protected */
  _findFosterParentingLocation() {
    for (let t = this.openElements.stackTop; t >= 0; t--) {
      const u = this.openElements.items[t];
      switch (this.openElements.tagIDs[t]) {
        case a.TEMPLATE: {
          if (this.treeAdapter.getNamespaceURI(u) === h.HTML)
            return { parent: this.treeAdapter.getTemplateContent(u), beforeElement: null };
          break;
        }
        case a.TABLE: {
          const s = this.treeAdapter.getParentNode(u);
          return s ? { parent: s, beforeElement: u } : { parent: this.openElements.items[t - 1], beforeElement: null };
        }
      }
    }
    return { parent: this.openElements.items[0], beforeElement: null };
  }
  /** @protected */
  _fosterParentElement(t) {
    const u = this._findFosterParentingLocation();
    u.beforeElement ? this.treeAdapter.insertBefore(u.parent, t, u.beforeElement) : this.treeAdapter.appendChild(u.parent, t);
  }
  //Special elements
  /** @protected */
  _isSpecialElement(t, u) {
    const s = this.treeAdapter.getNamespaceURI(t);
    return Lu[s].has(u);
  }
  /** @internal */
  onCharacter(t) {
    if (this.skipNextNewLine = !1, this.tokenizer.inForeignNode) {
      Hs(this, t);
      return;
    }
    switch (this.insertionMode) {
      case c.INITIAL: {
        K(this, t);
        break;
      }
      case c.BEFORE_HTML: {
        z(this, t);
        break;
      }
      case c.BEFORE_HEAD: {
        J(this, t);
        break;
      }
      case c.IN_HEAD: {
        Z(this, t);
        break;
      }
      case c.IN_HEAD_NO_SCRIPT: {
        $(this, t);
        break;
      }
      case c.AFTER_HEAD: {
        ee(this, t);
        break;
      }
      case c.IN_BODY:
      case c.IN_CAPTION:
      case c.IN_CELL:
      case c.IN_TEMPLATE: {
        Bt(this, t);
        break;
      }
      case c.TEXT:
      case c.IN_SELECT:
      case c.IN_SELECT_IN_TABLE: {
        this._insertCharacters(t);
        break;
      }
      case c.IN_TABLE:
      case c.IN_TABLE_BODY:
      case c.IN_ROW: {
        be(this, t);
        break;
      }
      case c.IN_TABLE_TEXT: {
        wt(this, t);
        break;
      }
      case c.IN_COLUMN_GROUP: {
        oe(this, t);
        break;
      }
      case c.AFTER_BODY: {
        de(this, t);
        break;
      }
      case c.AFTER_AFTER_BODY: {
        ie(this, t);
        break;
      }
    }
  }
  /** @internal */
  onNullCharacter(t) {
    if (this.skipNextNewLine = !1, this.tokenizer.inForeignNode) {
      ks(this, t);
      return;
    }
    switch (this.insertionMode) {
      case c.INITIAL: {
        K(this, t);
        break;
      }
      case c.BEFORE_HTML: {
        z(this, t);
        break;
      }
      case c.BEFORE_HEAD: {
        J(this, t);
        break;
      }
      case c.IN_HEAD: {
        Z(this, t);
        break;
      }
      case c.IN_HEAD_NO_SCRIPT: {
        $(this, t);
        break;
      }
      case c.AFTER_HEAD: {
        ee(this, t);
        break;
      }
      case c.TEXT: {
        this._insertCharacters(t);
        break;
      }
      case c.IN_TABLE:
      case c.IN_TABLE_BODY:
      case c.IN_ROW: {
        be(this, t);
        break;
      }
      case c.IN_COLUMN_GROUP: {
        oe(this, t);
        break;
      }
      case c.AFTER_BODY: {
        de(this, t);
        break;
      }
      case c.AFTER_AFTER_BODY: {
        ie(this, t);
        break;
      }
    }
  }
  /** @internal */
  onComment(t) {
    if (this.skipNextNewLine = !1, this.currentNotInHTML) {
      De(this, t);
      return;
    }
    switch (this.insertionMode) {
      case c.INITIAL:
      case c.BEFORE_HTML:
      case c.BEFORE_HEAD:
      case c.IN_HEAD:
      case c.IN_HEAD_NO_SCRIPT:
      case c.AFTER_HEAD:
      case c.IN_BODY:
      case c.IN_TABLE:
      case c.IN_CAPTION:
      case c.IN_COLUMN_GROUP:
      case c.IN_TABLE_BODY:
      case c.IN_ROW:
      case c.IN_CELL:
      case c.IN_SELECT:
      case c.IN_SELECT_IN_TABLE:
      case c.IN_TEMPLATE:
      case c.IN_FRAMESET:
      case c.AFTER_FRAMESET: {
        De(this, t);
        break;
      }
      case c.IN_TABLE_TEXT: {
        X(this, t);
        break;
      }
      case c.AFTER_BODY: {
        ha(this, t);
        break;
      }
      case c.AFTER_AFTER_BODY:
      case c.AFTER_AFTER_FRAMESET: {
        Ta(this, t);
        break;
      }
    }
  }
  /** @internal */
  onDoctype(t) {
    switch (this.skipNextNewLine = !1, this.insertionMode) {
      case c.INITIAL: {
        ma(this, t);
        break;
      }
      case c.BEFORE_HEAD:
      case c.IN_HEAD:
      case c.IN_HEAD_NO_SCRIPT:
      case c.AFTER_HEAD: {
        this._err(t, f.misplacedDoctype);
        break;
      }
      case c.IN_TABLE_TEXT: {
        X(this, t);
        break;
      }
    }
  }
  /** @internal */
  onStartTag(t) {
    this.skipNextNewLine = !1, this.currentToken = t, this._processStartTag(t), t.selfClosing && !t.ackSelfClosing && this._err(t, f.nonVoidHtmlElementStartTagWithTrailingSolidus);
  }
  /**
   * Processes a given start tag.
   *
   * `onStartTag` checks if a self-closing tag was recognized. When a token
   * is moved inbetween multiple insertion modes, this check for self-closing
   * could lead to false positives. To avoid this, `_processStartTag` is used
   * for nested calls.
   *
   * @param token The token to process.
   * @protected
   */
  _processStartTag(t) {
    this.shouldProcessStartTagTokenInForeignContent(t) ? Fs(this, t) : this._startTagOutsideForeignContent(t);
  }
  /** @protected */
  _startTagOutsideForeignContent(t) {
    switch (this.insertionMode) {
      case c.INITIAL: {
        K(this, t);
        break;
      }
      case c.BEFORE_HTML: {
        ba(this, t);
        break;
      }
      case c.BEFORE_HEAD: {
        Aa(this, t);
        break;
      }
      case c.IN_HEAD: {
        y(this, t);
        break;
      }
      case c.IN_HEAD_NO_SCRIPT: {
        Na(this, t);
        break;
      }
      case c.AFTER_HEAD: {
        ga(this, t);
        break;
      }
      case c.IN_BODY: {
        L(this, t);
        break;
      }
      case c.IN_TABLE: {
        G(this, t);
        break;
      }
      case c.IN_TABLE_TEXT: {
        X(this, t);
        break;
      }
      case c.IN_CAPTION: {
        ps(this, t);
        break;
      }
      case c.IN_COLUMN_GROUP: {
        ve(this, t);
        break;
      }
      case c.IN_TABLE_BODY: {
        he(this, t);
        break;
      }
      case c.IN_ROW: {
        Te(this, t);
        break;
      }
      case c.IN_CELL: {
        Cs(this, t);
        break;
      }
      case c.IN_SELECT: {
        Qt(this, t);
        break;
      }
      case c.IN_SELECT_IN_TABLE: {
        Ss(this, t);
        break;
      }
      case c.IN_TEMPLATE: {
        Ls(this, t);
        break;
      }
      case c.AFTER_BODY: {
        Ds(this, t);
        break;
      }
      case c.IN_FRAMESET: {
        Ps(this, t);
        break;
      }
      case c.AFTER_FRAMESET: {
        Ms(this, t);
        break;
      }
      case c.AFTER_AFTER_BODY: {
        ys(this, t);
        break;
      }
      case c.AFTER_AFTER_FRAMESET: {
        Us(this, t);
        break;
      }
    }
  }
  /** @internal */
  onEndTag(t) {
    this.skipNextNewLine = !1, this.currentToken = t, this.currentNotInHTML ? ws(this, t) : this._endTagOutsideForeignContent(t);
  }
  /** @protected */
  _endTagOutsideForeignContent(t) {
    switch (this.insertionMode) {
      case c.INITIAL: {
        K(this, t);
        break;
      }
      case c.BEFORE_HTML: {
        _a(this, t);
        break;
      }
      case c.BEFORE_HEAD: {
        pa(this, t);
        break;
      }
      case c.IN_HEAD: {
        Ia(this, t);
        break;
      }
      case c.IN_HEAD_NO_SCRIPT: {
        Ca(this, t);
        break;
      }
      case c.AFTER_HEAD: {
        Sa(this, t);
        break;
      }
      case c.IN_BODY: {
        le(this, t);
        break;
      }
      case c.TEXT: {
        ds(this, t);
        break;
      }
      case c.IN_TABLE: {
        te(this, t);
        break;
      }
      case c.IN_TABLE_TEXT: {
        X(this, t);
        break;
      }
      case c.IN_CAPTION: {
        Is(this, t);
        break;
      }
      case c.IN_COLUMN_GROUP: {
        Ns(this, t);
        break;
      }
      case c.IN_TABLE_BODY: {
        Pe(this, t);
        break;
      }
      case c.IN_ROW: {
        vt(this, t);
        break;
      }
      case c.IN_CELL: {
        gs(this, t);
        break;
      }
      case c.IN_SELECT: {
        qt(this, t);
        break;
      }
      case c.IN_SELECT_IN_TABLE: {
        Os(this, t);
        break;
      }
      case c.IN_TEMPLATE: {
        Rs(this, t);
        break;
      }
      case c.AFTER_BODY: {
        Gt(this, t);
        break;
      }
      case c.IN_FRAMESET: {
        xs(this, t);
        break;
      }
      case c.AFTER_FRAMESET: {
        Bs(this, t);
        break;
      }
      case c.AFTER_AFTER_BODY: {
        ie(this, t);
        break;
      }
    }
  }
  /** @internal */
  onEof(t) {
    switch (this.insertionMode) {
      case c.INITIAL: {
        K(this, t);
        break;
      }
      case c.BEFORE_HTML: {
        z(this, t);
        break;
      }
      case c.BEFORE_HEAD: {
        J(this, t);
        break;
      }
      case c.IN_HEAD: {
        Z(this, t);
        break;
      }
      case c.IN_HEAD_NO_SCRIPT: {
        $(this, t);
        break;
      }
      case c.AFTER_HEAD: {
        ee(this, t);
        break;
      }
      case c.IN_BODY:
      case c.IN_TABLE:
      case c.IN_CAPTION:
      case c.IN_COLUMN_GROUP:
      case c.IN_TABLE_BODY:
      case c.IN_ROW:
      case c.IN_CELL:
      case c.IN_SELECT:
      case c.IN_SELECT_IN_TABLE: {
        Ht(this, t);
        break;
      }
      case c.TEXT: {
        Es(this, t);
        break;
      }
      case c.IN_TABLE_TEXT: {
        X(this, t);
        break;
      }
      case c.IN_TEMPLATE: {
        Wt(this, t);
        break;
      }
      case c.AFTER_BODY:
      case c.IN_FRAMESET:
      case c.AFTER_FRAMESET:
      case c.AFTER_AFTER_BODY:
      case c.AFTER_AFTER_FRAMESET: {
        Ye(this, t);
        break;
      }
    }
  }
  /** @internal */
  onWhitespaceCharacter(t) {
    if (this.skipNextNewLine && (this.skipNextNewLine = !1, t.chars.charCodeAt(0) === r.LINE_FEED)) {
      if (t.chars.length === 1)
        return;
      t.chars = t.chars.substr(1);
    }
    if (this.tokenizer.inForeignNode) {
      this._insertCharacters(t);
      return;
    }
    switch (this.insertionMode) {
      case c.IN_HEAD:
      case c.IN_HEAD_NO_SCRIPT:
      case c.AFTER_HEAD:
      case c.TEXT:
      case c.IN_COLUMN_GROUP:
      case c.IN_SELECT:
      case c.IN_SELECT_IN_TABLE:
      case c.IN_FRAMESET:
      case c.AFTER_FRAMESET: {
        this._insertCharacters(t);
        break;
      }
      case c.IN_BODY:
      case c.IN_CAPTION:
      case c.IN_CELL:
      case c.IN_TEMPLATE:
      case c.AFTER_BODY:
      case c.AFTER_AFTER_BODY:
      case c.AFTER_AFTER_FRAMESET: {
        Mt(this, t);
        break;
      }
      case c.IN_TABLE:
      case c.IN_TABLE_BODY:
      case c.IN_ROW: {
        be(this, t);
        break;
      }
      case c.IN_TABLE_TEXT: {
        Ft(this, t);
        break;
      }
    }
  }
}
function ca(e, t) {
  let u = e.activeFormattingElements.getElementEntryInScopeWithTagName(t.tagName);
  return u ? e.openElements.contains(u.element) ? e.openElements.hasInScope(t.tagID) || (u = null) : (e.activeFormattingElements.removeEntry(u), u = null) : kt(e, t), u;
}
function oa(e, t) {
  let u = null, s = e.openElements.stackTop;
  for (; s >= 0; s--) {
    const n = e.openElements.items[s];
    if (n === t.element)
      break;
    e._isSpecialElement(n, e.openElements.tagIDs[s]) && (u = n);
  }
  return u || (e.openElements.shortenToLength(Math.max(s, 0)), e.activeFormattingElements.removeEntry(t)), u;
}
function da(e, t, u) {
  let s = t, n = e.openElements.getCommonAncestor(t);
  for (let o = 0, E = n; E !== u; o++, E = n) {
    n = e.openElements.getCommonAncestor(E);
    const l = e.activeFormattingElements.getElementEntry(E), T = l && o >= na;
    !l || T ? (T && e.activeFormattingElements.removeEntry(l), e.openElements.remove(E)) : (E = Ea(e, l), s === t && (e.activeFormattingElements.bookmark = l), e.treeAdapter.detachNode(s), e.treeAdapter.appendChild(E, s), s = E);
  }
  return s;
}
function Ea(e, t) {
  const u = e.treeAdapter.getNamespaceURI(t.element), s = e.treeAdapter.createElement(t.token.tagName, u, t.token.attrs);
  return e.openElements.replace(t.element, s), t.element = s, s;
}
function fa(e, t, u) {
  const s = e.treeAdapter.getTagName(t), n = Ee(s);
  if (e._isElementCausesFosterParenting(n))
    e._fosterParentElement(u);
  else {
    const o = e.treeAdapter.getNamespaceURI(t);
    n === a.TEMPLATE && o === h.HTML && (t = e.treeAdapter.getTemplateContent(t)), e.treeAdapter.appendChild(t, u);
  }
}
function la(e, t, u) {
  const s = e.treeAdapter.getNamespaceURI(u.element), { token: n } = u, o = e.treeAdapter.createElement(n.tagName, s, n.attrs);
  e._adoptNodes(t, o), e.treeAdapter.appendChild(t, o), e.activeFormattingElements.insertElementAfterBookmark(o, n), e.activeFormattingElements.removeEntry(u), e.openElements.remove(u.element), e.openElements.insertAfter(t, o, n.tagID);
}
function we(e, t) {
  for (let u = 0; u < ra; u++) {
    const s = ca(e, t);
    if (!s)
      break;
    const n = oa(e, s);
    if (!n)
      break;
    e.activeFormattingElements.bookmark = s;
    const o = da(e, n, s.element), E = e.openElements.getCommonAncestor(s.element);
    e.treeAdapter.detachNode(o), E && fa(e, E, o), la(e, n, s);
  }
}
function De(e, t) {
  e._appendCommentNode(t, e.openElements.currentTmplContentOrNode);
}
function ha(e, t) {
  e._appendCommentNode(t, e.openElements.items[0]);
}
function Ta(e, t) {
  e._appendCommentNode(t, e.document);
}
function Ye(e, t) {
  if (e.stopped = !0, t.location) {
    const u = e.fragmentContext ? 0 : 2;
    for (let s = e.openElements.stackTop; s >= u; s--)
      e._setEndLocation(e.openElements.items[s], t);
    if (!e.fragmentContext && e.openElements.stackTop >= 0) {
      const s = e.openElements.items[0], n = e.treeAdapter.getNodeSourceCodeLocation(s);
      if (n && !n.endTag && (e._setEndLocation(s, t), e.openElements.stackTop >= 1)) {
        const o = e.openElements.items[1], E = e.treeAdapter.getNodeSourceCodeLocation(o);
        E && !E.endTag && e._setEndLocation(o, t);
      }
    }
  }
}
function ma(e, t) {
  e._setDocumentType(t);
  const u = t.forceQuirks ? M.QUIRKS : Vu(t);
  Gu(t) || e._err(t, f.nonConformingDoctype), e.treeAdapter.setDocumentMode(e.document, u), e.insertionMode = c.BEFORE_HTML;
}
function K(e, t) {
  e._err(t, f.missingDoctype, !0), e.treeAdapter.setDocumentMode(e.document, M.QUIRKS), e.insertionMode = c.BEFORE_HTML, e._processToken(t);
}
function ba(e, t) {
  t.tagID === a.HTML ? (e._insertElement(t, h.HTML), e.insertionMode = c.BEFORE_HEAD) : z(e, t);
}
function _a(e, t) {
  const u = t.tagID;
  (u === a.HTML || u === a.HEAD || u === a.BODY || u === a.BR) && z(e, t);
}
function z(e, t) {
  e._insertFakeRootElement(), e.insertionMode = c.BEFORE_HEAD, e._processToken(t);
}
function Aa(e, t) {
  switch (t.tagID) {
    case a.HTML: {
      L(e, t);
      break;
    }
    case a.HEAD: {
      e._insertElement(t, h.HTML), e.headElement = e.openElements.current, e.insertionMode = c.IN_HEAD;
      break;
    }
    default:
      J(e, t);
  }
}
function pa(e, t) {
  const u = t.tagID;
  u === a.HEAD || u === a.BODY || u === a.HTML || u === a.BR ? J(e, t) : e._err(t, f.endTagWithoutMatchingOpenElement);
}
function J(e, t) {
  e._insertFakeElement(d.HEAD, a.HEAD), e.headElement = e.openElements.current, e.insertionMode = c.IN_HEAD, e._processToken(t);
}
function y(e, t) {
  switch (t.tagID) {
    case a.HTML: {
      L(e, t);
      break;
    }
    case a.BASE:
    case a.BASEFONT:
    case a.BGSOUND:
    case a.LINK:
    case a.META: {
      e._appendElement(t, h.HTML), t.ackSelfClosing = !0;
      break;
    }
    case a.TITLE: {
      e._switchToTextParsing(t, P.RCDATA);
      break;
    }
    case a.NOSCRIPT: {
      e.options.scriptingEnabled ? e._switchToTextParsing(t, P.RAWTEXT) : (e._insertElement(t, h.HTML), e.insertionMode = c.IN_HEAD_NO_SCRIPT);
      break;
    }
    case a.NOFRAMES:
    case a.STYLE: {
      e._switchToTextParsing(t, P.RAWTEXT);
      break;
    }
    case a.SCRIPT: {
      e._switchToTextParsing(t, P.SCRIPT_DATA);
      break;
    }
    case a.TEMPLATE: {
      e._insertTemplate(t), e.activeFormattingElements.insertMarker(), e.framesetOk = !1, e.insertionMode = c.IN_TEMPLATE, e.tmplInsertionModeStack.unshift(c.IN_TEMPLATE);
      break;
    }
    case a.HEAD: {
      e._err(t, f.misplacedStartTagForHeadElement);
      break;
    }
    default:
      Z(e, t);
  }
}
function Ia(e, t) {
  switch (t.tagID) {
    case a.HEAD: {
      e.openElements.pop(), e.insertionMode = c.AFTER_HEAD;
      break;
    }
    case a.BODY:
    case a.BR:
    case a.HTML: {
      Z(e, t);
      break;
    }
    case a.TEMPLATE: {
      q(e, t);
      break;
    }
    default:
      e._err(t, f.endTagWithoutMatchingOpenElement);
  }
}
function q(e, t) {
  e.openElements.tmplCount > 0 ? (e.openElements.generateImpliedEndTagsThoroughly(), e.openElements.currentTagId !== a.TEMPLATE && e._err(t, f.closingOfElementWithOpenChildElements), e.openElements.popUntilTagNamePopped(a.TEMPLATE), e.activeFormattingElements.clearToLastMarker(), e.tmplInsertionModeStack.shift(), e._resetInsertionMode()) : e._err(t, f.endTagWithoutMatchingOpenElement);
}
function Z(e, t) {
  e.openElements.pop(), e.insertionMode = c.AFTER_HEAD, e._processToken(t);
}
function Na(e, t) {
  switch (t.tagID) {
    case a.HTML: {
      L(e, t);
      break;
    }
    case a.BASEFONT:
    case a.BGSOUND:
    case a.HEAD:
    case a.LINK:
    case a.META:
    case a.NOFRAMES:
    case a.STYLE: {
      y(e, t);
      break;
    }
    case a.NOSCRIPT: {
      e._err(t, f.nestedNoscriptInHead);
      break;
    }
    default:
      $(e, t);
  }
}
function Ca(e, t) {
  switch (t.tagID) {
    case a.NOSCRIPT: {
      e.openElements.pop(), e.insertionMode = c.IN_HEAD;
      break;
    }
    case a.BR: {
      $(e, t);
      break;
    }
    default:
      e._err(t, f.endTagWithoutMatchingOpenElement);
  }
}
function $(e, t) {
  const u = t.type === p.EOF ? f.openElementsLeftAfterEof : f.disallowedContentInNoscriptInHead;
  e._err(t, u), e.openElements.pop(), e.insertionMode = c.IN_HEAD, e._processToken(t);
}
function ga(e, t) {
  switch (t.tagID) {
    case a.HTML: {
      L(e, t);
      break;
    }
    case a.BODY: {
      e._insertElement(t, h.HTML), e.framesetOk = !1, e.insertionMode = c.IN_BODY;
      break;
    }
    case a.FRAMESET: {
      e._insertElement(t, h.HTML), e.insertionMode = c.IN_FRAMESET;
      break;
    }
    case a.BASE:
    case a.BASEFONT:
    case a.BGSOUND:
    case a.LINK:
    case a.META:
    case a.NOFRAMES:
    case a.SCRIPT:
    case a.STYLE:
    case a.TEMPLATE:
    case a.TITLE: {
      e._err(t, f.abandonedHeadElementChild), e.openElements.push(e.headElement, a.HEAD), y(e, t), e.openElements.remove(e.headElement);
      break;
    }
    case a.HEAD: {
      e._err(t, f.misplacedStartTagForHeadElement);
      break;
    }
    default:
      ee(e, t);
  }
}
function Sa(e, t) {
  switch (t.tagID) {
    case a.BODY:
    case a.HTML:
    case a.BR: {
      ee(e, t);
      break;
    }
    case a.TEMPLATE: {
      q(e, t);
      break;
    }
    default:
      e._err(t, f.endTagWithoutMatchingOpenElement);
  }
}
function ee(e, t) {
  e._insertFakeElement(d.BODY, a.BODY), e.insertionMode = c.IN_BODY, fe(e, t);
}
function fe(e, t) {
  switch (t.type) {
    case p.CHARACTER: {
      Bt(e, t);
      break;
    }
    case p.WHITESPACE_CHARACTER: {
      Mt(e, t);
      break;
    }
    case p.COMMENT: {
      De(e, t);
      break;
    }
    case p.START_TAG: {
      L(e, t);
      break;
    }
    case p.END_TAG: {
      le(e, t);
      break;
    }
    case p.EOF: {
      Ht(e, t);
      break;
    }
  }
}
function Mt(e, t) {
  e._reconstructActiveFormattingElements(), e._insertCharacters(t);
}
function Bt(e, t) {
  e._reconstructActiveFormattingElements(), e._insertCharacters(t), e.framesetOk = !1;
}
function Oa(e, t) {
  e.openElements.tmplCount === 0 && e.treeAdapter.adoptAttributes(e.openElements.items[0], t.attrs);
}
function La(e, t) {
  const u = e.openElements.tryPeekProperlyNestedBodyElement();
  u && e.openElements.tmplCount === 0 && (e.framesetOk = !1, e.treeAdapter.adoptAttributes(u, t.attrs));
}
function Ra(e, t) {
  const u = e.openElements.tryPeekProperlyNestedBodyElement();
  e.framesetOk && u && (e.treeAdapter.detachNode(u), e.openElements.popAllUpToHtmlElement(), e._insertElement(t, h.HTML), e.insertionMode = c.IN_FRAMESET);
}
function Da(e, t) {
  e.openElements.hasInButtonScope(a.P) && e._closePElement(), e._insertElement(t, h.HTML);
}
function Pa(e, t) {
  e.openElements.hasInButtonScope(a.P) && e._closePElement(), e.openElements.currentTagId !== void 0 && Re.has(e.openElements.currentTagId) && e.openElements.pop(), e._insertElement(t, h.HTML);
}
function xa(e, t) {
  e.openElements.hasInButtonScope(a.P) && e._closePElement(), e._insertElement(t, h.HTML), e.skipNextNewLine = !0, e.framesetOk = !1;
}
function Ma(e, t) {
  const u = e.openElements.tmplCount > 0;
  (!e.formElement || u) && (e.openElements.hasInButtonScope(a.P) && e._closePElement(), e._insertElement(t, h.HTML), u || (e.formElement = e.openElements.current));
}
function Ba(e, t) {
  e.framesetOk = !1;
  const u = t.tagID;
  for (let s = e.openElements.stackTop; s >= 0; s--) {
    const n = e.openElements.tagIDs[s];
    if (u === a.LI && n === a.LI || (u === a.DD || u === a.DT) && (n === a.DD || n === a.DT)) {
      e.openElements.generateImpliedEndTagsWithExclusion(n), e.openElements.popUntilTagNamePopped(n);
      break;
    }
    if (n !== a.ADDRESS && n !== a.DIV && n !== a.P && e._isSpecialElement(e.openElements.items[s], n))
      break;
  }
  e.openElements.hasInButtonScope(a.P) && e._closePElement(), e._insertElement(t, h.HTML);
}
function ya(e, t) {
  e.openElements.hasInButtonScope(a.P) && e._closePElement(), e._insertElement(t, h.HTML), e.tokenizer.state = P.PLAINTEXT;
}
function Ua(e, t) {
  e.openElements.hasInScope(a.BUTTON) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(a.BUTTON)), e._reconstructActiveFormattingElements(), e._insertElement(t, h.HTML), e.framesetOk = !1;
}
function ka(e, t) {
  const u = e.activeFormattingElements.getElementEntryInScopeWithTagName(d.A);
  u && (we(e, t), e.openElements.remove(u.element), e.activeFormattingElements.removeEntry(u)), e._reconstructActiveFormattingElements(), e._insertElement(t, h.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t);
}
function Ha(e, t) {
  e._reconstructActiveFormattingElements(), e._insertElement(t, h.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t);
}
function Fa(e, t) {
  e._reconstructActiveFormattingElements(), e.openElements.hasInScope(a.NOBR) && (we(e, t), e._reconstructActiveFormattingElements()), e._insertElement(t, h.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t);
}
function wa(e, t) {
  e._reconstructActiveFormattingElements(), e._insertElement(t, h.HTML), e.activeFormattingElements.insertMarker(), e.framesetOk = !1;
}
function Ya(e, t) {
  e.treeAdapter.getDocumentMode(e.document) !== M.QUIRKS && e.openElements.hasInButtonScope(a.P) && e._closePElement(), e._insertElement(t, h.HTML), e.framesetOk = !1, e.insertionMode = c.IN_TABLE;
}
function yt(e, t) {
  e._reconstructActiveFormattingElements(), e._appendElement(t, h.HTML), e.framesetOk = !1, t.ackSelfClosing = !0;
}
function Ut(e) {
  const t = Nt(e, Q.TYPE);
  return t != null && t.toLowerCase() === sa;
}
function va(e, t) {
  e._reconstructActiveFormattingElements(), e._appendElement(t, h.HTML), Ut(t) || (e.framesetOk = !1), t.ackSelfClosing = !0;
}
function Qa(e, t) {
  e._appendElement(t, h.HTML), t.ackSelfClosing = !0;
}
function qa(e, t) {
  e.openElements.hasInButtonScope(a.P) && e._closePElement(), e._appendElement(t, h.HTML), e.framesetOk = !1, t.ackSelfClosing = !0;
}
function Wa(e, t) {
  t.tagName = d.IMG, t.tagID = a.IMG, yt(e, t);
}
function Ga(e, t) {
  e._insertElement(t, h.HTML), e.skipNextNewLine = !0, e.tokenizer.state = P.RCDATA, e.originalInsertionMode = e.insertionMode, e.framesetOk = !1, e.insertionMode = c.TEXT;
}
function Va(e, t) {
  e.openElements.hasInButtonScope(a.P) && e._closePElement(), e._reconstructActiveFormattingElements(), e.framesetOk = !1, e._switchToTextParsing(t, P.RAWTEXT);
}
function Ka(e, t) {
  e.framesetOk = !1, e._switchToTextParsing(t, P.RAWTEXT);
}
function nt(e, t) {
  e._switchToTextParsing(t, P.RAWTEXT);
}
function Xa(e, t) {
  e._reconstructActiveFormattingElements(), e._insertElement(t, h.HTML), e.framesetOk = !1, e.insertionMode = e.insertionMode === c.IN_TABLE || e.insertionMode === c.IN_CAPTION || e.insertionMode === c.IN_TABLE_BODY || e.insertionMode === c.IN_ROW || e.insertionMode === c.IN_CELL ? c.IN_SELECT_IN_TABLE : c.IN_SELECT;
}
function ja(e, t) {
  e.openElements.currentTagId === a.OPTION && e.openElements.pop(), e._reconstructActiveFormattingElements(), e._insertElement(t, h.HTML);
}
function za(e, t) {
  e.openElements.hasInScope(a.RUBY) && e.openElements.generateImpliedEndTags(), e._insertElement(t, h.HTML);
}
function Ja(e, t) {
  e.openElements.hasInScope(a.RUBY) && e.openElements.generateImpliedEndTagsWithExclusion(a.RTC), e._insertElement(t, h.HTML);
}
function Za(e, t) {
  e._reconstructActiveFormattingElements(), Rt(t), Fe(t), t.selfClosing ? e._appendElement(t, h.MATHML) : e._insertElement(t, h.MATHML), t.ackSelfClosing = !0;
}
function $a(e, t) {
  e._reconstructActiveFormattingElements(), Dt(t), Fe(t), t.selfClosing ? e._appendElement(t, h.SVG) : e._insertElement(t, h.SVG), t.ackSelfClosing = !0;
}
function it(e, t) {
  e._reconstructActiveFormattingElements(), e._insertElement(t, h.HTML);
}
function L(e, t) {
  switch (t.tagID) {
    case a.I:
    case a.S:
    case a.B:
    case a.U:
    case a.EM:
    case a.TT:
    case a.BIG:
    case a.CODE:
    case a.FONT:
    case a.SMALL:
    case a.STRIKE:
    case a.STRONG: {
      Ha(e, t);
      break;
    }
    case a.A: {
      ka(e, t);
      break;
    }
    case a.H1:
    case a.H2:
    case a.H3:
    case a.H4:
    case a.H5:
    case a.H6: {
      Pa(e, t);
      break;
    }
    case a.P:
    case a.DL:
    case a.OL:
    case a.UL:
    case a.DIV:
    case a.DIR:
    case a.NAV:
    case a.MAIN:
    case a.MENU:
    case a.ASIDE:
    case a.CENTER:
    case a.FIGURE:
    case a.FOOTER:
    case a.HEADER:
    case a.HGROUP:
    case a.DIALOG:
    case a.DETAILS:
    case a.ADDRESS:
    case a.ARTICLE:
    case a.SEARCH:
    case a.SECTION:
    case a.SUMMARY:
    case a.FIELDSET:
    case a.BLOCKQUOTE:
    case a.FIGCAPTION: {
      Da(e, t);
      break;
    }
    case a.LI:
    case a.DD:
    case a.DT: {
      Ba(e, t);
      break;
    }
    case a.BR:
    case a.IMG:
    case a.WBR:
    case a.AREA:
    case a.EMBED:
    case a.KEYGEN: {
      yt(e, t);
      break;
    }
    case a.HR: {
      qa(e, t);
      break;
    }
    case a.RB:
    case a.RTC: {
      za(e, t);
      break;
    }
    case a.RT:
    case a.RP: {
      Ja(e, t);
      break;
    }
    case a.PRE:
    case a.LISTING: {
      xa(e, t);
      break;
    }
    case a.XMP: {
      Va(e, t);
      break;
    }
    case a.SVG: {
      $a(e, t);
      break;
    }
    case a.HTML: {
      Oa(e, t);
      break;
    }
    case a.BASE:
    case a.LINK:
    case a.META:
    case a.STYLE:
    case a.TITLE:
    case a.SCRIPT:
    case a.BGSOUND:
    case a.BASEFONT:
    case a.TEMPLATE: {
      y(e, t);
      break;
    }
    case a.BODY: {
      La(e, t);
      break;
    }
    case a.FORM: {
      Ma(e, t);
      break;
    }
    case a.NOBR: {
      Fa(e, t);
      break;
    }
    case a.MATH: {
      Za(e, t);
      break;
    }
    case a.TABLE: {
      Ya(e, t);
      break;
    }
    case a.INPUT: {
      va(e, t);
      break;
    }
    case a.PARAM:
    case a.TRACK:
    case a.SOURCE: {
      Qa(e, t);
      break;
    }
    case a.IMAGE: {
      Wa(e, t);
      break;
    }
    case a.BUTTON: {
      Ua(e, t);
      break;
    }
    case a.APPLET:
    case a.OBJECT:
    case a.MARQUEE: {
      wa(e, t);
      break;
    }
    case a.IFRAME: {
      Ka(e, t);
      break;
    }
    case a.SELECT: {
      Xa(e, t);
      break;
    }
    case a.OPTION:
    case a.OPTGROUP: {
      ja(e, t);
      break;
    }
    case a.NOEMBED:
    case a.NOFRAMES: {
      nt(e, t);
      break;
    }
    case a.FRAMESET: {
      Ra(e, t);
      break;
    }
    case a.TEXTAREA: {
      Ga(e, t);
      break;
    }
    case a.NOSCRIPT: {
      e.options.scriptingEnabled ? nt(e, t) : it(e, t);
      break;
    }
    case a.PLAINTEXT: {
      ya(e, t);
      break;
    }
    case a.COL:
    case a.TH:
    case a.TD:
    case a.TR:
    case a.HEAD:
    case a.FRAME:
    case a.TBODY:
    case a.TFOOT:
    case a.THEAD:
    case a.CAPTION:
    case a.COLGROUP:
      break;
    default:
      it(e, t);
  }
}
function es(e, t) {
  if (e.openElements.hasInScope(a.BODY) && (e.insertionMode = c.AFTER_BODY, e.options.sourceCodeLocationInfo)) {
    const u = e.openElements.tryPeekProperlyNestedBodyElement();
    u && e._setEndLocation(u, t);
  }
}
function ts(e, t) {
  e.openElements.hasInScope(a.BODY) && (e.insertionMode = c.AFTER_BODY, Gt(e, t));
}
function us(e, t) {
  const u = t.tagID;
  e.openElements.hasInScope(u) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(u));
}
function as(e) {
  const t = e.openElements.tmplCount > 0, { formElement: u } = e;
  t || (e.formElement = null), (u || t) && e.openElements.hasInScope(a.FORM) && (e.openElements.generateImpliedEndTags(), t ? e.openElements.popUntilTagNamePopped(a.FORM) : u && e.openElements.remove(u));
}
function ss(e) {
  e.openElements.hasInButtonScope(a.P) || e._insertFakeElement(d.P, a.P), e._closePElement();
}
function rs(e) {
  e.openElements.hasInListItemScope(a.LI) && (e.openElements.generateImpliedEndTagsWithExclusion(a.LI), e.openElements.popUntilTagNamePopped(a.LI));
}
function ns(e, t) {
  const u = t.tagID;
  e.openElements.hasInScope(u) && (e.openElements.generateImpliedEndTagsWithExclusion(u), e.openElements.popUntilTagNamePopped(u));
}
function is(e) {
  e.openElements.hasNumberedHeaderInScope() && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilNumberedHeaderPopped());
}
function cs(e, t) {
  const u = t.tagID;
  e.openElements.hasInScope(u) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(u), e.activeFormattingElements.clearToLastMarker());
}
function os(e) {
  e._reconstructActiveFormattingElements(), e._insertFakeElement(d.BR, a.BR), e.openElements.pop(), e.framesetOk = !1;
}
function kt(e, t) {
  const u = t.tagName, s = t.tagID;
  for (let n = e.openElements.stackTop; n > 0; n--) {
    const o = e.openElements.items[n], E = e.openElements.tagIDs[n];
    if (s === E && (s !== a.UNKNOWN || e.treeAdapter.getTagName(o) === u)) {
      e.openElements.generateImpliedEndTagsWithExclusion(s), e.openElements.stackTop >= n && e.openElements.shortenToLength(n);
      break;
    }
    if (e._isSpecialElement(o, E))
      break;
  }
}
function le(e, t) {
  switch (t.tagID) {
    case a.A:
    case a.B:
    case a.I:
    case a.S:
    case a.U:
    case a.EM:
    case a.TT:
    case a.BIG:
    case a.CODE:
    case a.FONT:
    case a.NOBR:
    case a.SMALL:
    case a.STRIKE:
    case a.STRONG: {
      we(e, t);
      break;
    }
    case a.P: {
      ss(e);
      break;
    }
    case a.DL:
    case a.UL:
    case a.OL:
    case a.DIR:
    case a.DIV:
    case a.NAV:
    case a.PRE:
    case a.MAIN:
    case a.MENU:
    case a.ASIDE:
    case a.BUTTON:
    case a.CENTER:
    case a.FIGURE:
    case a.FOOTER:
    case a.HEADER:
    case a.HGROUP:
    case a.DIALOG:
    case a.ADDRESS:
    case a.ARTICLE:
    case a.DETAILS:
    case a.SEARCH:
    case a.SECTION:
    case a.SUMMARY:
    case a.LISTING:
    case a.FIELDSET:
    case a.BLOCKQUOTE:
    case a.FIGCAPTION: {
      us(e, t);
      break;
    }
    case a.LI: {
      rs(e);
      break;
    }
    case a.DD:
    case a.DT: {
      ns(e, t);
      break;
    }
    case a.H1:
    case a.H2:
    case a.H3:
    case a.H4:
    case a.H5:
    case a.H6: {
      is(e);
      break;
    }
    case a.BR: {
      os(e);
      break;
    }
    case a.BODY: {
      es(e, t);
      break;
    }
    case a.HTML: {
      ts(e, t);
      break;
    }
    case a.FORM: {
      as(e);
      break;
    }
    case a.APPLET:
    case a.OBJECT:
    case a.MARQUEE: {
      cs(e, t);
      break;
    }
    case a.TEMPLATE: {
      q(e, t);
      break;
    }
    default:
      kt(e, t);
  }
}
function Ht(e, t) {
  e.tmplInsertionModeStack.length > 0 ? Wt(e, t) : Ye(e, t);
}
function ds(e, t) {
  var u;
  t.tagID === a.SCRIPT && ((u = e.scriptHandler) === null || u === void 0 || u.call(e, e.openElements.current)), e.openElements.pop(), e.insertionMode = e.originalInsertionMode;
}
function Es(e, t) {
  e._err(t, f.eofInElementThatCanContainOnlyText), e.openElements.pop(), e.insertionMode = e.originalInsertionMode, e.onEof(t);
}
function be(e, t) {
  if (e.openElements.currentTagId !== void 0 && Pt.has(e.openElements.currentTagId))
    switch (e.pendingCharacterTokens.length = 0, e.hasNonWhitespacePendingCharacterToken = !1, e.originalInsertionMode = e.insertionMode, e.insertionMode = c.IN_TABLE_TEXT, t.type) {
      case p.CHARACTER: {
        wt(e, t);
        break;
      }
      case p.WHITESPACE_CHARACTER: {
        Ft(e, t);
        break;
      }
    }
  else
    ue(e, t);
}
function fs(e, t) {
  e.openElements.clearBackToTableContext(), e.activeFormattingElements.insertMarker(), e._insertElement(t, h.HTML), e.insertionMode = c.IN_CAPTION;
}
function ls(e, t) {
  e.openElements.clearBackToTableContext(), e._insertElement(t, h.HTML), e.insertionMode = c.IN_COLUMN_GROUP;
}
function hs(e, t) {
  e.openElements.clearBackToTableContext(), e._insertFakeElement(d.COLGROUP, a.COLGROUP), e.insertionMode = c.IN_COLUMN_GROUP, ve(e, t);
}
function Ts(e, t) {
  e.openElements.clearBackToTableContext(), e._insertElement(t, h.HTML), e.insertionMode = c.IN_TABLE_BODY;
}
function ms(e, t) {
  e.openElements.clearBackToTableContext(), e._insertFakeElement(d.TBODY, a.TBODY), e.insertionMode = c.IN_TABLE_BODY, he(e, t);
}
function bs(e, t) {
  e.openElements.hasInTableScope(a.TABLE) && (e.openElements.popUntilTagNamePopped(a.TABLE), e._resetInsertionMode(), e._processStartTag(t));
}
function _s(e, t) {
  Ut(t) ? e._appendElement(t, h.HTML) : ue(e, t), t.ackSelfClosing = !0;
}
function As(e, t) {
  !e.formElement && e.openElements.tmplCount === 0 && (e._insertElement(t, h.HTML), e.formElement = e.openElements.current, e.openElements.pop());
}
function G(e, t) {
  switch (t.tagID) {
    case a.TD:
    case a.TH:
    case a.TR: {
      ms(e, t);
      break;
    }
    case a.STYLE:
    case a.SCRIPT:
    case a.TEMPLATE: {
      y(e, t);
      break;
    }
    case a.COL: {
      hs(e, t);
      break;
    }
    case a.FORM: {
      As(e, t);
      break;
    }
    case a.TABLE: {
      bs(e, t);
      break;
    }
    case a.TBODY:
    case a.TFOOT:
    case a.THEAD: {
      Ts(e, t);
      break;
    }
    case a.INPUT: {
      _s(e, t);
      break;
    }
    case a.CAPTION: {
      fs(e, t);
      break;
    }
    case a.COLGROUP: {
      ls(e, t);
      break;
    }
    default:
      ue(e, t);
  }
}
function te(e, t) {
  switch (t.tagID) {
    case a.TABLE: {
      e.openElements.hasInTableScope(a.TABLE) && (e.openElements.popUntilTagNamePopped(a.TABLE), e._resetInsertionMode());
      break;
    }
    case a.TEMPLATE: {
      q(e, t);
      break;
    }
    case a.BODY:
    case a.CAPTION:
    case a.COL:
    case a.COLGROUP:
    case a.HTML:
    case a.TBODY:
    case a.TD:
    case a.TFOOT:
    case a.TH:
    case a.THEAD:
    case a.TR:
      break;
    default:
      ue(e, t);
  }
}
function ue(e, t) {
  const u = e.fosterParentingEnabled;
  e.fosterParentingEnabled = !0, fe(e, t), e.fosterParentingEnabled = u;
}
function Ft(e, t) {
  e.pendingCharacterTokens.push(t);
}
function wt(e, t) {
  e.pendingCharacterTokens.push(t), e.hasNonWhitespacePendingCharacterToken = !0;
}
function X(e, t) {
  let u = 0;
  if (e.hasNonWhitespacePendingCharacterToken)
    for (; u < e.pendingCharacterTokens.length; u++)
      ue(e, e.pendingCharacterTokens[u]);
  else
    for (; u < e.pendingCharacterTokens.length; u++)
      e._insertCharacters(e.pendingCharacterTokens[u]);
  e.insertionMode = e.originalInsertionMode, e._processToken(t);
}
const Yt = /* @__PURE__ */ new Set([a.CAPTION, a.COL, a.COLGROUP, a.TBODY, a.TD, a.TFOOT, a.TH, a.THEAD, a.TR]);
function ps(e, t) {
  const u = t.tagID;
  Yt.has(u) ? e.openElements.hasInTableScope(a.CAPTION) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(a.CAPTION), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = c.IN_TABLE, G(e, t)) : L(e, t);
}
function Is(e, t) {
  const u = t.tagID;
  switch (u) {
    case a.CAPTION:
    case a.TABLE: {
      e.openElements.hasInTableScope(a.CAPTION) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(a.CAPTION), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = c.IN_TABLE, u === a.TABLE && te(e, t));
      break;
    }
    case a.BODY:
    case a.COL:
    case a.COLGROUP:
    case a.HTML:
    case a.TBODY:
    case a.TD:
    case a.TFOOT:
    case a.TH:
    case a.THEAD:
    case a.TR:
      break;
    default:
      le(e, t);
  }
}
function ve(e, t) {
  switch (t.tagID) {
    case a.HTML: {
      L(e, t);
      break;
    }
    case a.COL: {
      e._appendElement(t, h.HTML), t.ackSelfClosing = !0;
      break;
    }
    case a.TEMPLATE: {
      y(e, t);
      break;
    }
    default:
      oe(e, t);
  }
}
function Ns(e, t) {
  switch (t.tagID) {
    case a.COLGROUP: {
      e.openElements.currentTagId === a.COLGROUP && (e.openElements.pop(), e.insertionMode = c.IN_TABLE);
      break;
    }
    case a.TEMPLATE: {
      q(e, t);
      break;
    }
    case a.COL:
      break;
    default:
      oe(e, t);
  }
}
function oe(e, t) {
  e.openElements.currentTagId === a.COLGROUP && (e.openElements.pop(), e.insertionMode = c.IN_TABLE, e._processToken(t));
}
function he(e, t) {
  switch (t.tagID) {
    case a.TR: {
      e.openElements.clearBackToTableBodyContext(), e._insertElement(t, h.HTML), e.insertionMode = c.IN_ROW;
      break;
    }
    case a.TH:
    case a.TD: {
      e.openElements.clearBackToTableBodyContext(), e._insertFakeElement(d.TR, a.TR), e.insertionMode = c.IN_ROW, Te(e, t);
      break;
    }
    case a.CAPTION:
    case a.COL:
    case a.COLGROUP:
    case a.TBODY:
    case a.TFOOT:
    case a.THEAD: {
      e.openElements.hasTableBodyContextInTableScope() && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = c.IN_TABLE, G(e, t));
      break;
    }
    default:
      G(e, t);
  }
}
function Pe(e, t) {
  const u = t.tagID;
  switch (t.tagID) {
    case a.TBODY:
    case a.TFOOT:
    case a.THEAD: {
      e.openElements.hasInTableScope(u) && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = c.IN_TABLE);
      break;
    }
    case a.TABLE: {
      e.openElements.hasTableBodyContextInTableScope() && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = c.IN_TABLE, te(e, t));
      break;
    }
    case a.BODY:
    case a.CAPTION:
    case a.COL:
    case a.COLGROUP:
    case a.HTML:
    case a.TD:
    case a.TH:
    case a.TR:
      break;
    default:
      te(e, t);
  }
}
function Te(e, t) {
  switch (t.tagID) {
    case a.TH:
    case a.TD: {
      e.openElements.clearBackToTableRowContext(), e._insertElement(t, h.HTML), e.insertionMode = c.IN_CELL, e.activeFormattingElements.insertMarker();
      break;
    }
    case a.CAPTION:
    case a.COL:
    case a.COLGROUP:
    case a.TBODY:
    case a.TFOOT:
    case a.THEAD:
    case a.TR: {
      e.openElements.hasInTableScope(a.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = c.IN_TABLE_BODY, he(e, t));
      break;
    }
    default:
      G(e, t);
  }
}
function vt(e, t) {
  switch (t.tagID) {
    case a.TR: {
      e.openElements.hasInTableScope(a.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = c.IN_TABLE_BODY);
      break;
    }
    case a.TABLE: {
      e.openElements.hasInTableScope(a.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = c.IN_TABLE_BODY, Pe(e, t));
      break;
    }
    case a.TBODY:
    case a.TFOOT:
    case a.THEAD: {
      (e.openElements.hasInTableScope(t.tagID) || e.openElements.hasInTableScope(a.TR)) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = c.IN_TABLE_BODY, Pe(e, t));
      break;
    }
    case a.BODY:
    case a.CAPTION:
    case a.COL:
    case a.COLGROUP:
    case a.HTML:
    case a.TD:
    case a.TH:
      break;
    default:
      te(e, t);
  }
}
function Cs(e, t) {
  const u = t.tagID;
  Yt.has(u) ? (e.openElements.hasInTableScope(a.TD) || e.openElements.hasInTableScope(a.TH)) && (e._closeTableCell(), Te(e, t)) : L(e, t);
}
function gs(e, t) {
  const u = t.tagID;
  switch (u) {
    case a.TD:
    case a.TH: {
      e.openElements.hasInTableScope(u) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(u), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = c.IN_ROW);
      break;
    }
    case a.TABLE:
    case a.TBODY:
    case a.TFOOT:
    case a.THEAD:
    case a.TR: {
      e.openElements.hasInTableScope(u) && (e._closeTableCell(), vt(e, t));
      break;
    }
    case a.BODY:
    case a.CAPTION:
    case a.COL:
    case a.COLGROUP:
    case a.HTML:
      break;
    default:
      le(e, t);
  }
}
function Qt(e, t) {
  switch (t.tagID) {
    case a.HTML: {
      L(e, t);
      break;
    }
    case a.OPTION: {
      e.openElements.currentTagId === a.OPTION && e.openElements.pop(), e._insertElement(t, h.HTML);
      break;
    }
    case a.OPTGROUP: {
      e.openElements.currentTagId === a.OPTION && e.openElements.pop(), e.openElements.currentTagId === a.OPTGROUP && e.openElements.pop(), e._insertElement(t, h.HTML);
      break;
    }
    case a.HR: {
      e.openElements.currentTagId === a.OPTION && e.openElements.pop(), e.openElements.currentTagId === a.OPTGROUP && e.openElements.pop(), e._appendElement(t, h.HTML), t.ackSelfClosing = !0;
      break;
    }
    case a.INPUT:
    case a.KEYGEN:
    case a.TEXTAREA:
    case a.SELECT: {
      e.openElements.hasInSelectScope(a.SELECT) && (e.openElements.popUntilTagNamePopped(a.SELECT), e._resetInsertionMode(), t.tagID !== a.SELECT && e._processStartTag(t));
      break;
    }
    case a.SCRIPT:
    case a.TEMPLATE: {
      y(e, t);
      break;
    }
  }
}
function qt(e, t) {
  switch (t.tagID) {
    case a.OPTGROUP: {
      e.openElements.stackTop > 0 && e.openElements.currentTagId === a.OPTION && e.openElements.tagIDs[e.openElements.stackTop - 1] === a.OPTGROUP && e.openElements.pop(), e.openElements.currentTagId === a.OPTGROUP && e.openElements.pop();
      break;
    }
    case a.OPTION: {
      e.openElements.currentTagId === a.OPTION && e.openElements.pop();
      break;
    }
    case a.SELECT: {
      e.openElements.hasInSelectScope(a.SELECT) && (e.openElements.popUntilTagNamePopped(a.SELECT), e._resetInsertionMode());
      break;
    }
    case a.TEMPLATE: {
      q(e, t);
      break;
    }
  }
}
function Ss(e, t) {
  const u = t.tagID;
  u === a.CAPTION || u === a.TABLE || u === a.TBODY || u === a.TFOOT || u === a.THEAD || u === a.TR || u === a.TD || u === a.TH ? (e.openElements.popUntilTagNamePopped(a.SELECT), e._resetInsertionMode(), e._processStartTag(t)) : Qt(e, t);
}
function Os(e, t) {
  const u = t.tagID;
  u === a.CAPTION || u === a.TABLE || u === a.TBODY || u === a.TFOOT || u === a.THEAD || u === a.TR || u === a.TD || u === a.TH ? e.openElements.hasInTableScope(u) && (e.openElements.popUntilTagNamePopped(a.SELECT), e._resetInsertionMode(), e.onEndTag(t)) : qt(e, t);
}
function Ls(e, t) {
  switch (t.tagID) {
    // First, handle tags that can start without a mode change
    case a.BASE:
    case a.BASEFONT:
    case a.BGSOUND:
    case a.LINK:
    case a.META:
    case a.NOFRAMES:
    case a.SCRIPT:
    case a.STYLE:
    case a.TEMPLATE:
    case a.TITLE: {
      y(e, t);
      break;
    }
    // Re-process the token in the appropriate mode
    case a.CAPTION:
    case a.COLGROUP:
    case a.TBODY:
    case a.TFOOT:
    case a.THEAD: {
      e.tmplInsertionModeStack[0] = c.IN_TABLE, e.insertionMode = c.IN_TABLE, G(e, t);
      break;
    }
    case a.COL: {
      e.tmplInsertionModeStack[0] = c.IN_COLUMN_GROUP, e.insertionMode = c.IN_COLUMN_GROUP, ve(e, t);
      break;
    }
    case a.TR: {
      e.tmplInsertionModeStack[0] = c.IN_TABLE_BODY, e.insertionMode = c.IN_TABLE_BODY, he(e, t);
      break;
    }
    case a.TD:
    case a.TH: {
      e.tmplInsertionModeStack[0] = c.IN_ROW, e.insertionMode = c.IN_ROW, Te(e, t);
      break;
    }
    default:
      e.tmplInsertionModeStack[0] = c.IN_BODY, e.insertionMode = c.IN_BODY, L(e, t);
  }
}
function Rs(e, t) {
  t.tagID === a.TEMPLATE && q(e, t);
}
function Wt(e, t) {
  e.openElements.tmplCount > 0 ? (e.openElements.popUntilTagNamePopped(a.TEMPLATE), e.activeFormattingElements.clearToLastMarker(), e.tmplInsertionModeStack.shift(), e._resetInsertionMode(), e.onEof(t)) : Ye(e, t);
}
function Ds(e, t) {
  t.tagID === a.HTML ? L(e, t) : de(e, t);
}
function Gt(e, t) {
  var u;
  if (t.tagID === a.HTML) {
    if (e.fragmentContext || (e.insertionMode = c.AFTER_AFTER_BODY), e.options.sourceCodeLocationInfo && e.openElements.tagIDs[0] === a.HTML) {
      e._setEndLocation(e.openElements.items[0], t);
      const s = e.openElements.items[1];
      s && !(!((u = e.treeAdapter.getNodeSourceCodeLocation(s)) === null || u === void 0) && u.endTag) && e._setEndLocation(s, t);
    }
  } else
    de(e, t);
}
function de(e, t) {
  e.insertionMode = c.IN_BODY, fe(e, t);
}
function Ps(e, t) {
  switch (t.tagID) {
    case a.HTML: {
      L(e, t);
      break;
    }
    case a.FRAMESET: {
      e._insertElement(t, h.HTML);
      break;
    }
    case a.FRAME: {
      e._appendElement(t, h.HTML), t.ackSelfClosing = !0;
      break;
    }
    case a.NOFRAMES: {
      y(e, t);
      break;
    }
  }
}
function xs(e, t) {
  t.tagID === a.FRAMESET && !e.openElements.isRootHtmlElementCurrent() && (e.openElements.pop(), !e.fragmentContext && e.openElements.currentTagId !== a.FRAMESET && (e.insertionMode = c.AFTER_FRAMESET));
}
function Ms(e, t) {
  switch (t.tagID) {
    case a.HTML: {
      L(e, t);
      break;
    }
    case a.NOFRAMES: {
      y(e, t);
      break;
    }
  }
}
function Bs(e, t) {
  t.tagID === a.HTML && (e.insertionMode = c.AFTER_AFTER_FRAMESET);
}
function ys(e, t) {
  t.tagID === a.HTML ? L(e, t) : ie(e, t);
}
function ie(e, t) {
  e.insertionMode = c.IN_BODY, fe(e, t);
}
function Us(e, t) {
  switch (t.tagID) {
    case a.HTML: {
      L(e, t);
      break;
    }
    case a.NOFRAMES: {
      y(e, t);
      break;
    }
  }
}
function ks(e, t) {
  t.chars = N, e._insertCharacters(t);
}
function Hs(e, t) {
  e._insertCharacters(t), e.framesetOk = !1;
}
function Vt(e) {
  for (; e.treeAdapter.getNamespaceURI(e.openElements.current) !== h.HTML && e.openElements.currentTagId !== void 0 && !e._isIntegrationPoint(e.openElements.currentTagId, e.openElements.current); )
    e.openElements.pop();
}
function Fs(e, t) {
  if ($u(t))
    Vt(e), e._startTagOutsideForeignContent(t);
  else {
    const u = e._getAdjustedCurrentElement(), s = e.treeAdapter.getNamespaceURI(u);
    s === h.MATHML ? Rt(t) : s === h.SVG && (ea(t), Dt(t)), Fe(t), t.selfClosing ? e._appendElement(t, s) : e._insertElement(t, s), t.ackSelfClosing = !0;
  }
}
function ws(e, t) {
  if (t.tagID === a.P || t.tagID === a.BR) {
    Vt(e), e._endTagOutsideForeignContent(t);
    return;
  }
  for (let u = e.openElements.stackTop; u > 0; u--) {
    const s = e.openElements.items[u];
    if (e.treeAdapter.getNamespaceURI(s) === h.HTML) {
      e._endTagOutsideForeignContent(t);
      break;
    }
    const n = e.treeAdapter.getTagName(s);
    if (n.toLowerCase() === t.tagName) {
      t.tagName = n, e.openElements.shortenToLength(u);
      break;
    }
  }
}
d.AREA, d.BASE, d.BASEFONT, d.BGSOUND, d.BR, d.COL, d.EMBED, d.FRAME, d.HR, d.IMG, d.INPUT, d.KEYGEN, d.LINK, d.META, d.PARAM, d.SOURCE, d.TRACK, d.WBR;
function Ys(e, t) {
  return xt.parse(e, t);
}
function vs(e, t, u) {
  typeof e == "string" && (u = t, t = e, e = null);
  const s = xt.getFragmentParser(e, u);
  return s.tokenizer.write(t, !0), s.getFragment();
}
function Qs(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? ct(e.position) : "start" in e || "end" in e ? ct(e) : "line" in e || "column" in e ? xe(e) : "";
}
function xe(e) {
  return ot(e && e.line) + ":" + ot(e && e.column);
}
function ct(e) {
  return xe(e && e.start) + "-" + xe(e && e.end);
}
function ot(e) {
  return e && typeof e == "number" ? e : 1;
}
class R extends Error {
  /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // eslint-disable-next-line complexity
  constructor(t, u, s) {
    super(), typeof u == "string" && (s = u, u = void 0);
    let n = "", o = {}, E = !1;
    if (u && ("line" in u && "column" in u ? o = { place: u } : "start" in u && "end" in u ? o = { place: u } : "type" in u ? o = {
      ancestors: [u],
      place: u.position
    } : o = { ...u }), typeof t == "string" ? n = t : !o.cause && t && (E = !0, n = t.message, o.cause = t), !o.ruleId && !o.source && typeof s == "string") {
      const T = s.indexOf(":");
      T === -1 ? o.ruleId = s : (o.source = s.slice(0, T), o.ruleId = s.slice(T + 1));
    }
    if (!o.place && o.ancestors && o.ancestors) {
      const T = o.ancestors[o.ancestors.length - 1];
      T && (o.place = T.position);
    }
    const l = o.place && "start" in o.place ? o.place.start : o.place;
    this.ancestors = o.ancestors || void 0, this.cause = o.cause || void 0, this.column = l ? l.column : void 0, this.fatal = void 0, this.file = "", this.message = n, this.line = l ? l.line : void 0, this.name = Qs(o.place) || "1:1", this.place = o.place || void 0, this.reason = this.message, this.ruleId = o.ruleId || void 0, this.source = o.source || void 0, this.stack = E && o.cause && typeof o.cause.stack == "string" ? o.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
  }
}
R.prototype.file = "";
R.prototype.name = "";
R.prototype.reason = "";
R.prototype.message = "";
R.prototype.stack = "";
R.prototype.column = void 0;
R.prototype.line = void 0;
R.prototype.ancestors = void 0;
R.prototype.cause = void 0;
R.prototype.fatal = void 0;
R.prototype.place = void 0;
R.prototype.ruleId = void 0;
R.prototype.source = void 0;
const k = { basename: qs, dirname: Ws, extname: Gs, join: Vs, sep: "/" };
function qs(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  ae(e);
  let u = 0, s = -1, n = e.length, o;
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; n--; )
      if (e.codePointAt(n) === 47) {
        if (o) {
          u = n + 1;
          break;
        }
      } else s < 0 && (o = !0, s = n + 1);
    return s < 0 ? "" : e.slice(u, s);
  }
  if (t === e)
    return "";
  let E = -1, l = t.length - 1;
  for (; n--; )
    if (e.codePointAt(n) === 47) {
      if (o) {
        u = n + 1;
        break;
      }
    } else
      E < 0 && (o = !0, E = n + 1), l > -1 && (e.codePointAt(n) === t.codePointAt(l--) ? l < 0 && (s = n) : (l = -1, s = E));
  return u === s ? s = E : s < 0 && (s = e.length), e.slice(u, s);
}
function Ws(e) {
  if (ae(e), e.length === 0)
    return ".";
  let t = -1, u = e.length, s;
  for (; --u; )
    if (e.codePointAt(u) === 47) {
      if (s) {
        t = u;
        break;
      }
    } else s || (s = !0);
  return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t);
}
function Gs(e) {
  ae(e);
  let t = e.length, u = -1, s = 0, n = -1, o = 0, E;
  for (; t--; ) {
    const l = e.codePointAt(t);
    if (l === 47) {
      if (E) {
        s = t + 1;
        break;
      }
      continue;
    }
    u < 0 && (E = !0, u = t + 1), l === 46 ? n < 0 ? n = t : o !== 1 && (o = 1) : n > -1 && (o = -1);
  }
  return n < 0 || u < 0 || // We saw a non-dot character immediately before the dot.
  o === 0 || // The (right-most) trimmed path component is exactly `..`.
  o === 1 && n === u - 1 && n === s + 1 ? "" : e.slice(n, u);
}
function Vs(...e) {
  let t = -1, u;
  for (; ++t < e.length; )
    ae(e[t]), e[t] && (u = u === void 0 ? e[t] : u + "/" + e[t]);
  return u === void 0 ? "." : Ks(u);
}
function Ks(e) {
  ae(e);
  const t = e.codePointAt(0) === 47;
  let u = Xs(e, !t);
  return u.length === 0 && !t && (u = "."), u.length > 0 && e.codePointAt(e.length - 1) === 47 && (u += "/"), t ? "/" + u : u;
}
function Xs(e, t) {
  let u = "", s = 0, n = -1, o = 0, E = -1, l, T;
  for (; ++E <= e.length; ) {
    if (E < e.length)
      l = e.codePointAt(E);
    else {
      if (l === 47)
        break;
      l = 47;
    }
    if (l === 47) {
      if (!(n === E - 1 || o === 1)) if (n !== E - 1 && o === 2) {
        if (u.length < 2 || s !== 2 || u.codePointAt(u.length - 1) !== 46 || u.codePointAt(u.length - 2) !== 46) {
          if (u.length > 2) {
            if (T = u.lastIndexOf("/"), T !== u.length - 1) {
              T < 0 ? (u = "", s = 0) : (u = u.slice(0, T), s = u.length - 1 - u.lastIndexOf("/")), n = E, o = 0;
              continue;
            }
          } else if (u.length > 0) {
            u = "", s = 0, n = E, o = 0;
            continue;
          }
        }
        t && (u = u.length > 0 ? u + "/.." : "..", s = 2);
      } else
        u.length > 0 ? u += "/" + e.slice(n + 1, E) : u = e.slice(n + 1, E), s = E - n - 1;
      n = E, o = 0;
    } else l === 46 && o > -1 ? o++ : o = -1;
  }
  return u;
}
function ae(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const js = { cwd: zs };
function zs() {
  return "/";
}
function Me(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function Js(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!Me(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return Zs(e);
}
function Zs(e) {
  if (e.hostname !== "") {
    const s = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw s.code = "ERR_INVALID_FILE_URL_HOST", s;
  }
  const t = e.pathname;
  let u = -1;
  for (; ++u < t.length; )
    if (t.codePointAt(u) === 37 && t.codePointAt(u + 1) === 50) {
      const s = t.codePointAt(u + 2);
      if (s === 70 || s === 102) {
        const n = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw n.code = "ERR_INVALID_FILE_URL_PATH", n;
      }
    }
  return decodeURIComponent(t);
}
const _e = (
  /** @type {const} */
  [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ]
);
class Be {
  /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Uint8Array` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */
  constructor(t) {
    let u;
    t ? Me(t) ? u = { path: t } : typeof t == "string" || $s(t) ? u = { value: t } : u = t : u = {}, this.cwd = "cwd" in u ? "" : js.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let s = -1;
    for (; ++s < _e.length; ) {
      const o = _e[s];
      o in u && u[o] !== void 0 && u[o] !== null && (this[o] = o === "history" ? [...u[o]] : u[o]);
    }
    let n;
    for (n in u)
      _e.includes(n) || (this[n] = u[n]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? k.basename(this.path) : void 0;
  }
  /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} basename
   *   Basename.
   * @returns {undefined}
   *   Nothing.
   */
  set basename(t) {
    pe(t, "basename"), Ae(t, "basename"), this.path = k.join(this.dirname || "", t);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? k.dirname(this.path) : void 0;
  }
  /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} dirname
   *   Dirname.
   * @returns {undefined}
   *   Nothing.
   */
  set dirname(t) {
    dt(this.basename, "dirname"), this.path = k.join(t || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? k.extname(this.path) : void 0;
  }
  /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} extname
   *   Extname.
   * @returns {undefined}
   *   Nothing.
   */
  set extname(t) {
    if (Ae(t, "extname"), dt(this.dirname, "extname"), t) {
      if (t.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = k.join(this.dirname, this.stem + (t || ""));
  }
  /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   *   Path.
   */
  get path() {
    return this.history[this.history.length - 1];
  }
  /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {URL | string} path
   *   Path.
   * @returns {undefined}
   *   Nothing.
   */
  set path(t) {
    Me(t) && (t = Js(t)), pe(t, "path"), this.path !== t && this.history.push(t);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? k.basename(this.path, this.extname) : void 0;
  }
  /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} stem
   *   Stem.
   * @returns {undefined}
   *   Nothing.
   */
  set stem(t) {
    pe(t, "stem"), Ae(t, "stem"), this.path = k.join(this.dirname || "", t + (this.extname || ""));
  }
  // Normal prototypal methods.
  /**
   * Create a fatal message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `true` (error; file not usable)
   * and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Never.
   * @throws {VFileMessage}
   *   Message.
   */
  fail(t, u, s) {
    const n = this.message(t, u, s);
    throw n.fatal = !0, n;
  }
  /**
   * Create an info message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `undefined` (info; change
   * likely not needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  info(t, u, s) {
    const n = this.message(t, u, s);
    return n.fatal = void 0, n;
  }
  /**
   * Create a message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `false` (warning; change may be
   * needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  message(t, u, s) {
    const n = new R(
      // @ts-expect-error: the overloads are fine.
      t,
      u,
      s
    );
    return this.path && (n.name = this.path + ":" + n.name, n.file = this.path), n.fatal = !1, this.messages.push(n), n;
  }
  /**
   * Serialize the file.
   *
   * > **Note**: which encodings are supported depends on the engine.
   * > For info on Node.js, see:
   * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
   *
   * @param {string | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Uint8Array`
   *   (default: `'utf-8'`).
   * @returns {string}
   *   Serialized file.
   */
  toString(t) {
    return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(t || void 0).decode(this.value);
  }
}
function Ae(e, t) {
  if (e && e.includes(k.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + k.sep + "`"
    );
}
function pe(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function dt(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function $s(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const er = {
  /** @type {ErrorInfo} */
  abandonedHeadElementChild: {
    reason: "Unexpected metadata element after head",
    description: "Unexpected element after head. Expected the element before `</head>`",
    url: !1
  },
  /** @type {ErrorInfo} */
  abruptClosingOfEmptyComment: {
    reason: "Unexpected abruptly closed empty comment",
    description: "Unexpected `>` or `->`. Expected `-->` to close comments"
  },
  /** @type {ErrorInfo} */
  abruptDoctypePublicIdentifier: {
    reason: "Unexpected abruptly closed public identifier",
    description: "Unexpected `>`. Expected a closing `\"` or `'` after the public identifier"
  },
  /** @type {ErrorInfo} */
  abruptDoctypeSystemIdentifier: {
    reason: "Unexpected abruptly closed system identifier",
    description: "Unexpected `>`. Expected a closing `\"` or `'` after the identifier identifier"
  },
  /** @type {ErrorInfo} */
  absenceOfDigitsInNumericCharacterReference: {
    reason: "Unexpected non-digit at start of numeric character reference",
    description: "Unexpected `%c`. Expected `[0-9]` for decimal references or `[0-9a-fA-F]` for hexadecimal references"
  },
  /** @type {ErrorInfo} */
  cdataInHtmlContent: {
    reason: "Unexpected CDATA section in HTML",
    description: "Unexpected `<![CDATA[` in HTML. Remove it, use a comment, or encode special characters instead"
  },
  /** @type {ErrorInfo} */
  characterReferenceOutsideUnicodeRange: {
    reason: "Unexpected too big numeric character reference",
    description: "Unexpectedly high character reference. Expected character references to be at most hexadecimal 10ffff (or decimal 1114111)"
  },
  /** @type {ErrorInfo} */
  closingOfElementWithOpenChildElements: {
    reason: "Unexpected closing tag with open child elements",
    description: "Unexpectedly closing tag. Expected other tags to be closed first",
    url: !1
  },
  /** @type {ErrorInfo} */
  controlCharacterInInputStream: {
    reason: "Unexpected control character",
    description: "Unexpected control character `%x`. Expected a non-control code point, 0x00, or ASCII whitespace"
  },
  /** @type {ErrorInfo} */
  controlCharacterReference: {
    reason: "Unexpected control character reference",
    description: "Unexpectedly control character in reference. Expected a non-control code point, 0x00, or ASCII whitespace"
  },
  /** @type {ErrorInfo} */
  disallowedContentInNoscriptInHead: {
    reason: "Disallowed content inside `<noscript>` in `<head>`",
    description: "Unexpected text character `%c`. Only use text in `<noscript>`s in `<body>`",
    url: !1
  },
  /** @type {ErrorInfo} */
  duplicateAttribute: {
    reason: "Unexpected duplicate attribute",
    description: "Unexpectedly double attribute. Expected attributes to occur only once"
  },
  /** @type {ErrorInfo} */
  endTagWithAttributes: {
    reason: "Unexpected attribute on closing tag",
    description: "Unexpected attribute. Expected `>` instead"
  },
  /** @type {ErrorInfo} */
  endTagWithTrailingSolidus: {
    reason: "Unexpected slash at end of closing tag",
    description: "Unexpected `%c-1`. Expected `>` instead"
  },
  /** @type {ErrorInfo} */
  endTagWithoutMatchingOpenElement: {
    reason: "Unexpected unopened end tag",
    description: "Unexpected end tag. Expected no end tag or another end tag",
    url: !1
  },
  /** @type {ErrorInfo} */
  eofBeforeTagName: {
    reason: "Unexpected end of file",
    description: "Unexpected end of file. Expected tag name instead"
  },
  /** @type {ErrorInfo} */
  eofInCdata: {
    reason: "Unexpected end of file in CDATA",
    description: "Unexpected end of file. Expected `]]>` to close the CDATA"
  },
  /** @type {ErrorInfo} */
  eofInComment: {
    reason: "Unexpected end of file in comment",
    description: "Unexpected end of file. Expected `-->` to close the comment"
  },
  /** @type {ErrorInfo} */
  eofInDoctype: {
    reason: "Unexpected end of file in doctype",
    description: "Unexpected end of file. Expected a valid doctype (such as `<!doctype html>`)"
  },
  /** @type {ErrorInfo} */
  eofInElementThatCanContainOnlyText: {
    reason: "Unexpected end of file in element that can only contain text",
    description: "Unexpected end of file. Expected text or a closing tag",
    url: !1
  },
  /** @type {ErrorInfo} */
  eofInScriptHtmlCommentLikeText: {
    reason: "Unexpected end of file in comment inside script",
    description: "Unexpected end of file. Expected `-->` to close the comment"
  },
  /** @type {ErrorInfo} */
  eofInTag: {
    reason: "Unexpected end of file in tag",
    description: "Unexpected end of file. Expected `>` to close the tag"
  },
  /** @type {ErrorInfo} */
  incorrectlyClosedComment: {
    reason: "Incorrectly closed comment",
    description: "Unexpected `%c-1`. Expected `-->` to close the comment"
  },
  /** @type {ErrorInfo} */
  incorrectlyOpenedComment: {
    reason: "Incorrectly opened comment",
    description: "Unexpected `%c`. Expected `<!--` to open the comment"
  },
  /** @type {ErrorInfo} */
  invalidCharacterSequenceAfterDoctypeName: {
    reason: "Invalid sequence after doctype name",
    description: "Unexpected sequence at `%c`. Expected `public` or `system`"
  },
  /** @type {ErrorInfo} */
  invalidFirstCharacterOfTagName: {
    reason: "Invalid first character in tag name",
    description: "Unexpected `%c`. Expected an ASCII letter instead"
  },
  /** @type {ErrorInfo} */
  misplacedDoctype: {
    reason: "Misplaced doctype",
    description: "Unexpected doctype. Expected doctype before head",
    url: !1
  },
  /** @type {ErrorInfo} */
  misplacedStartTagForHeadElement: {
    reason: "Misplaced `<head>` start tag",
    description: "Unexpected start tag `<head>`. Expected `<head>` directly after doctype",
    url: !1
  },
  /** @type {ErrorInfo} */
  missingAttributeValue: {
    reason: "Missing attribute value",
    description: "Unexpected `%c-1`. Expected an attribute value or no `%c-1` instead"
  },
  /** @type {ErrorInfo} */
  missingDoctype: {
    reason: "Missing doctype before other content",
    description: "Expected a `<!doctype html>` before anything else",
    url: !1
  },
  /** @type {ErrorInfo} */
  missingDoctypeName: {
    reason: "Missing doctype name",
    description: "Unexpected doctype end at `%c`. Expected `html` instead"
  },
  /** @type {ErrorInfo} */
  missingDoctypePublicIdentifier: {
    reason: "Missing public identifier in doctype",
    description: "Unexpected `%c`. Expected identifier for `public` instead"
  },
  /** @type {ErrorInfo} */
  missingDoctypeSystemIdentifier: {
    reason: "Missing system identifier in doctype",
    description: 'Unexpected `%c`. Expected identifier for `system` instead (suggested: `"about:legacy-compat"`)'
  },
  /** @type {ErrorInfo} */
  missingEndTagName: {
    reason: "Missing name in end tag",
    description: "Unexpected `%c`. Expected an ASCII letter instead"
  },
  /** @type {ErrorInfo} */
  missingQuoteBeforeDoctypePublicIdentifier: {
    reason: "Missing quote before public identifier in doctype",
    description: "Unexpected `%c`. Expected `\"` or `'` instead"
  },
  /** @type {ErrorInfo} */
  missingQuoteBeforeDoctypeSystemIdentifier: {
    reason: "Missing quote before system identifier in doctype",
    description: "Unexpected `%c`. Expected `\"` or `'` instead"
  },
  /** @type {ErrorInfo} */
  missingSemicolonAfterCharacterReference: {
    reason: "Missing semicolon after character reference",
    description: "Unexpected `%c`. Expected `;` instead"
  },
  /** @type {ErrorInfo} */
  missingWhitespaceAfterDoctypePublicKeyword: {
    reason: "Missing whitespace after public identifier in doctype",
    description: "Unexpected `%c`. Expected ASCII whitespace instead"
  },
  /** @type {ErrorInfo} */
  missingWhitespaceAfterDoctypeSystemKeyword: {
    reason: "Missing whitespace after system identifier in doctype",
    description: "Unexpected `%c`. Expected ASCII whitespace instead"
  },
  /** @type {ErrorInfo} */
  missingWhitespaceBeforeDoctypeName: {
    reason: "Missing whitespace before doctype name",
    description: "Unexpected `%c`. Expected ASCII whitespace instead"
  },
  /** @type {ErrorInfo} */
  missingWhitespaceBetweenAttributes: {
    reason: "Missing whitespace between attributes",
    description: "Unexpected `%c`. Expected ASCII whitespace instead"
  },
  /** @type {ErrorInfo} */
  missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers: {
    reason: "Missing whitespace between public and system identifiers in doctype",
    description: "Unexpected `%c`. Expected ASCII whitespace instead"
  },
  /** @type {ErrorInfo} */
  nestedComment: {
    reason: "Unexpected nested comment",
    description: "Unexpected `<!--`. Expected `-->`"
  },
  /** @type {ErrorInfo} */
  nestedNoscriptInHead: {
    reason: "Unexpected nested `<noscript>` in `<head>`",
    description: "Unexpected `<noscript>`. Expected a closing tag or a meta element",
    url: !1
  },
  /** @type {ErrorInfo} */
  nonConformingDoctype: {
    reason: "Unexpected non-conforming doctype declaration",
    description: 'Expected `<!doctype html>` or `<!doctype html system "about:legacy-compat">`',
    url: !1
  },
  /** @type {ErrorInfo} */
  nonVoidHtmlElementStartTagWithTrailingSolidus: {
    reason: "Unexpected trailing slash on start tag of non-void element",
    description: "Unexpected `/`. Expected `>` instead"
  },
  /** @type {ErrorInfo} */
  noncharacterCharacterReference: {
    reason: "Unexpected noncharacter code point referenced by character reference",
    description: "Unexpected code point. Do not use noncharacters in HTML"
  },
  /** @type {ErrorInfo} */
  noncharacterInInputStream: {
    reason: "Unexpected noncharacter character",
    description: "Unexpected code point `%x`. Do not use noncharacters in HTML"
  },
  /** @type {ErrorInfo} */
  nullCharacterReference: {
    reason: "Unexpected NULL character referenced by character reference",
    description: "Unexpected code point. Do not use NULL characters in HTML"
  },
  /** @type {ErrorInfo} */
  openElementsLeftAfterEof: {
    reason: "Unexpected end of file",
    description: "Unexpected end of file. Expected closing tag instead",
    url: !1
  },
  /** @type {ErrorInfo} */
  surrogateCharacterReference: {
    reason: "Unexpected surrogate character referenced by character reference",
    description: "Unexpected code point. Do not use lone surrogate characters in HTML"
  },
  /** @type {ErrorInfo} */
  surrogateInInputStream: {
    reason: "Unexpected surrogate character",
    description: "Unexpected code point `%x`. Do not use lone surrogate characters in HTML"
  },
  /** @type {ErrorInfo} */
  unexpectedCharacterAfterDoctypeSystemIdentifier: {
    reason: "Invalid character after system identifier in doctype",
    description: "Unexpected character at `%c`. Expected `>`"
  },
  /** @type {ErrorInfo} */
  unexpectedCharacterInAttributeName: {
    reason: "Unexpected character in attribute name",
    description: "Unexpected `%c`. Expected whitespace, `/`, `>`, `=`, or probably an ASCII letter"
  },
  /** @type {ErrorInfo} */
  unexpectedCharacterInUnquotedAttributeValue: {
    reason: "Unexpected character in unquoted attribute value",
    description: "Unexpected `%c`. Quote the attribute value to include it"
  },
  /** @type {ErrorInfo} */
  unexpectedEqualsSignBeforeAttributeName: {
    reason: "Unexpected equals sign before attribute name",
    description: "Unexpected `%c`. Add an attribute name before it"
  },
  /** @type {ErrorInfo} */
  unexpectedNullCharacter: {
    reason: "Unexpected NULL character",
    description: "Unexpected code point `%x`. Do not use NULL characters in HTML"
  },
  /** @type {ErrorInfo} */
  unexpectedQuestionMarkInsteadOfTagName: {
    reason: "Unexpected question mark instead of tag name",
    description: "Unexpected `%c`. Expected an ASCII letter instead"
  },
  /** @type {ErrorInfo} */
  unexpectedSolidusInTag: {
    reason: "Unexpected slash in tag",
    description: "Unexpected `%c-1`. Expected it followed by `>` or in a quoted attribute value"
  },
  /** @type {ErrorInfo} */
  unknownNamedCharacterReference: {
    reason: "Unexpected unknown named character reference",
    description: "Unexpected character reference. Expected known named character references"
  }
}, tr = "https://html.spec.whatwg.org/multipage/parsing.html#parse-error-", ur = /-[a-z]/g, ar = /%c(?:([-+])(\d+))?/g, sr = /%x/g, rr = { 2: !0, 1: !1, 0: null }, nr = {};
function ir(e, t) {
  const u = t || nr, s = u.onerror, n = e instanceof Be ? e : new Be(e), o = u.fragment ? vs : Ys, E = String(n), l = o(E, {
    sourceCodeLocationInfo: !0,
    // Note `parse5` types currently do not allow `undefined`.
    onParseError: u.onerror ? T : null,
    scriptingEnabled: !1
  });
  return (
    /** @type {Root} */
    ou(l, {
      file: n,
      space: u.space,
      verbose: u.verbose
    })
  );
  function T(m) {
    const _ = m.code, A = cr(_), I = u[A], O = I ?? !0, x = typeof O == "number" ? O : O ? 1 : 0;
    if (x) {
      const U = er[A], B = new R(C(U.reason), {
        place: {
          start: {
            line: m.startLine,
            column: m.startCol,
            offset: m.startOffset
          },
          end: {
            line: m.endLine,
            column: m.endCol,
            offset: m.endOffset
          }
        },
        ruleId: _,
        source: "hast-util-from-html"
      });
      n.path && (B.file = n.path, B.name = n.path + ":" + B.name), B.fatal = rr[x], B.note = C(U.description), B.url = U.url === !1 ? void 0 : tr + _, s(B);
    }
    function C(U) {
      return U.replace(ar, B).replace(sr, V);
      function B(gr, Kt, qe) {
        const Xt = (qe ? Number.parseInt(qe, 10) : 0) * (Kt === "-" ? -1 : 1), jt = E.charAt(m.startOffset + Xt);
        return dr(jt);
      }
      function V() {
        return Er(E.charCodeAt(m.startOffset));
      }
    }
  }
}
function cr(e) {
  return (
    /** @type {ErrorCode} */
    e.replace(ur, or)
  );
}
function or(e) {
  return e.charAt(1).toUpperCase();
}
function dr(e) {
  return e === "`" ? "` ` `" : e;
}
function Er(e) {
  return "0x" + e.toString(16).toUpperCase();
}
function fr(e) {
  const t = this, { emitParseErrors: u, ...s } = { ...t.data("settings"), ...e };
  t.parser = n;
  function n(o, E) {
    return ir(o, {
      ...s,
      onerror: u ? function(l) {
        E.path && (l.name = E.path + ":" + l.name, l.file = E.path), E.messages.push(l);
      } : void 0
    });
  }
}
function lr(e) {
  const t = this, u = { ...t.data("settings"), ...e };
  t.compiler = s;
  function s(n) {
    return Jt(n, u);
  }
}
function Et(e) {
  if (e)
    throw e;
}
var Ie, ft;
function hr() {
  if (ft) return Ie;
  ft = 1;
  var e = Object.prototype.hasOwnProperty, t = Object.prototype.toString, u = Object.defineProperty, s = Object.getOwnPropertyDescriptor, n = function(m) {
    return typeof Array.isArray == "function" ? Array.isArray(m) : t.call(m) === "[object Array]";
  }, o = function(m) {
    if (!m || t.call(m) !== "[object Object]")
      return !1;
    var _ = e.call(m, "constructor"), A = m.constructor && m.constructor.prototype && e.call(m.constructor.prototype, "isPrototypeOf");
    if (m.constructor && !_ && !A)
      return !1;
    var I;
    for (I in m)
      ;
    return typeof I > "u" || e.call(m, I);
  }, E = function(m, _) {
    u && _.name === "__proto__" ? u(m, _.name, {
      enumerable: !0,
      configurable: !0,
      value: _.newValue,
      writable: !0
    }) : m[_.name] = _.newValue;
  }, l = function(m, _) {
    if (_ === "__proto__")
      if (e.call(m, _)) {
        if (s)
          return s(m, _).value;
      } else return;
    return m[_];
  };
  return Ie = function T() {
    var m, _, A, I, O, x, C = arguments[0], U = 1, B = arguments.length, V = !1;
    for (typeof C == "boolean" && (V = C, C = arguments[1] || {}, U = 2), (C == null || typeof C != "object" && typeof C != "function") && (C = {}); U < B; ++U)
      if (m = arguments[U], m != null)
        for (_ in m)
          A = l(C, _), I = l(m, _), C !== I && (V && I && (o(I) || (O = n(I))) ? (O ? (O = !1, x = A && n(A) ? A : []) : x = A && o(A) ? A : {}, E(C, { name: _, newValue: T(V, x, I) })) : typeof I < "u" && E(C, { name: _, newValue: I }));
    return C;
  }, Ie;
}
var Tr = hr();
const Ne = /* @__PURE__ */ zt(Tr);
function ye(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function mr() {
  const e = [], t = { run: u, use: s };
  return t;
  function u(...n) {
    let o = -1;
    const E = n.pop();
    if (typeof E != "function")
      throw new TypeError("Expected function as last argument, not " + E);
    l(null, ...n);
    function l(T, ...m) {
      const _ = e[++o];
      let A = -1;
      if (T) {
        E(T);
        return;
      }
      for (; ++A < n.length; )
        (m[A] === null || m[A] === void 0) && (m[A] = n[A]);
      n = m, _ ? br(_, l)(...m) : E(null, ...m);
    }
  }
  function s(n) {
    if (typeof n != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + n
      );
    return e.push(n), t;
  }
}
function br(e, t) {
  let u;
  return s;
  function s(...E) {
    const l = e.length > E.length;
    let T;
    l && E.push(n);
    try {
      T = e.apply(this, E);
    } catch (m) {
      const _ = (
        /** @type {Error} */
        m
      );
      if (l && u)
        throw _;
      return n(_);
    }
    l || (T && T.then && typeof T.then == "function" ? T.then(o, n) : T instanceof Error ? n(T) : o(T));
  }
  function n(E, ...l) {
    u || (u = !0, t(E, ...l));
  }
  function o(E) {
    n(null, E);
  }
}
const _r = (
  /**
   * @type {new <Parameters extends Array<unknown>, Result>(property: string | symbol) => (...parameters: Parameters) => Result}
   */
  /** @type {unknown} */
  /**
   * @this {Function}
   * @param {string | symbol} property
   * @returns {(...parameters: Array<unknown>) => unknown}
   */
  (function(e) {
    const s = (
      /** @type {Record<string | symbol, Function>} */
      // Prototypes do exist.
      // type-coverage:ignore-next-line
      this.constructor.prototype
    ), n = s[e], o = function() {
      return n.apply(o, arguments);
    };
    return Object.setPrototypeOf(o, s), o;
  })
), Ar = {}.hasOwnProperty;
class Qe extends _r {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = mr();
  }
  /**
   * Copy a processor.
   *
   * @deprecated
   *   This is a private internal method and should not be used.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   New *unfrozen* processor ({@linkcode Processor}) that is
   *   configured to work the same as its ancestor.
   *   When the descendant processor is configured in the future it does not
   *   affect the ancestral processor.
   */
  copy() {
    const t = (
      /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
      new Qe()
    );
    let u = -1;
    for (; ++u < this.attachers.length; ) {
      const s = this.attachers[u];
      t.use(...s);
    }
    return t.data(Ne(!0, {}, this.namespace)), t;
  }
  /**
   * Configure the processor with info available to all plugins.
   * Information is stored in an object.
   *
   * Typically, options can be given to a specific plugin, but sometimes it
   * makes sense to have information shared with several plugins.
   * For example, a list of HTML elements that are self-closing, which is
   * needed during all phases.
   *
   * > **Note**: setting information cannot occur on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * > **Note**: to register custom data in TypeScript, augment the
   * > {@linkcode Data} interface.
   *
   * @example
   *   This example show how to get and set info:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   const processor = unified().data('alpha', 'bravo')
   *
   *   processor.data('alpha') // => 'bravo'
   *
   *   processor.data() // => {alpha: 'bravo'}
   *
   *   processor.data({charlie: 'delta'})
   *
   *   processor.data() // => {charlie: 'delta'}
   *   ```
   *
   * @template {keyof Data} Key
   *
   * @overload
   * @returns {Data}
   *
   * @overload
   * @param {Data} dataset
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Key} key
   * @returns {Data[Key]}
   *
   * @overload
   * @param {Key} key
   * @param {Data[Key]} value
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @param {Data | Key} [key]
   *   Key to get or set, or entire dataset to set, or nothing to get the
   *   entire dataset (optional).
   * @param {Data[Key]} [value]
   *   Value to set (optional).
   * @returns {unknown}
   *   The current processor when setting, the value at `key` when getting, or
   *   the entire dataset when getting without key.
   */
  data(t, u) {
    return typeof t == "string" ? arguments.length === 2 ? (Se("data", this.frozen), this.namespace[t] = u, this) : Ar.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (Se("data", this.frozen), this.namespace = t, this) : this.namespace;
  }
  /**
   * Freeze a processor.
   *
   * Frozen processors are meant to be extended and not to be configured
   * directly.
   *
   * When a processor is frozen it cannot be unfrozen.
   * New processors working the same way can be created by calling the
   * processor.
   *
   * It’s possible to freeze processors explicitly by calling `.freeze()`.
   * Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
   * `.stringify()`, `.process()`, or `.processSync()` are called.
   *
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   The current processor.
   */
  freeze() {
    if (this.frozen)
      return this;
    const t = (
      /** @type {Processor} */
      /** @type {unknown} */
      this
    );
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [u, ...s] = this.attachers[this.freezeIndex];
      if (s[0] === !1)
        continue;
      s[0] === !0 && (s[0] = void 0);
      const n = u.call(t, ...s);
      typeof n == "function" && this.transformers.use(n);
    }
    return this.frozen = !0, this.freezeIndex = Number.POSITIVE_INFINITY, this;
  }
  /**
   * Parse text to a syntax tree.
   *
   * > **Note**: `parse` freezes the processor if not already *frozen*.
   *
   * > **Note**: `parse` performs the parse phase, not the run phase or other
   * > phases.
   *
   * @param {Compatible | undefined} [file]
   *   file to parse (optional); typically `string` or `VFile`; any value
   *   accepted as `x` in `new VFile(x)`.
   * @returns {ParseTree extends undefined ? Node : ParseTree}
   *   Syntax tree representing `file`.
   */
  parse(t) {
    this.freeze();
    const u = re(t), s = this.parser || this.Parser;
    return Ce("parse", s), s(String(u), u);
  }
  /**
   * Process the given file as configured on the processor.
   *
   * > **Note**: `process` freezes the processor if not already *frozen*.
   *
   * > **Note**: `process` performs the parse, run, and stringify phases.
   *
   * @overload
   * @param {Compatible | undefined} file
   * @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
   * @returns {undefined}
   *
   * @overload
   * @param {Compatible | undefined} [file]
   * @returns {Promise<VFileWithOutput<CompileResult>>}
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`]; any value accepted as
   *   `x` in `new VFile(x)`.
   * @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
   *   Callback (optional).
   * @returns {Promise<VFile> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise a promise, rejected with a fatal error or resolved with the
   *   processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  process(t, u) {
    const s = this;
    return this.freeze(), Ce("process", this.parser || this.Parser), ge("process", this.compiler || this.Compiler), u ? n(void 0, u) : new Promise(n);
    function n(o, E) {
      const l = re(t), T = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        s.parse(l)
      );
      s.run(T, l, function(_, A, I) {
        if (_ || !A || !I)
          return m(_);
        const O = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          A
        ), x = s.stringify(O, I);
        Nr(x) ? I.value = x : I.result = x, m(
          _,
          /** @type {VFileWithOutput<CompileResult>} */
          I
        );
      });
      function m(_, A) {
        _ || !A ? E(_) : o ? o(A) : u(void 0, A);
      }
    }
  }
  /**
   * Process the given file as configured on the processor.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `processSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `processSync` performs the parse, run, and stringify phases.
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`; any value accepted as
   *   `x` in `new VFile(x)`.
   * @returns {VFileWithOutput<CompileResult>}
   *   The processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  processSync(t) {
    let u = !1, s;
    return this.freeze(), Ce("processSync", this.parser || this.Parser), ge("processSync", this.compiler || this.Compiler), this.process(t, n), ht("processSync", "process", u), s;
    function n(o, E) {
      u = !0, Et(o), s = E;
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * > **Note**: `run` freezes the processor if not already *frozen*.
   *
   * > **Note**: `run` performs the run phase, not other phases.
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} file
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} [file]
   * @returns {Promise<TailTree extends undefined ? Node : TailTree>}
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {(
   *   RunCallback<TailTree extends undefined ? Node : TailTree> |
   *   Compatible
   * )} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
   *   Callback (optional).
   * @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise, a promise rejected with a fatal error or resolved with the
   *   transformed tree.
   */
  run(t, u, s) {
    lt(t), this.freeze();
    const n = this.transformers;
    return !s && typeof u == "function" && (s = u, u = void 0), s ? o(void 0, s) : new Promise(o);
    function o(E, l) {
      const T = re(u);
      n.run(t, T, m);
      function m(_, A, I) {
        const O = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          A || t
        );
        _ ? l(_) : E ? E(O) : s(void 0, O, I);
      }
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `runSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `runSync` performs the run phase, not other phases.
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {TailTree extends undefined ? Node : TailTree}
   *   Transformed tree.
   */
  runSync(t, u) {
    let s = !1, n;
    return this.run(t, u, o), ht("runSync", "run", s), n;
    function o(E, l) {
      Et(E), n = l, s = !0;
    }
  }
  /**
   * Compile a syntax tree.
   *
   * > **Note**: `stringify` freezes the processor if not already *frozen*.
   *
   * > **Note**: `stringify` performs the stringify phase, not the run phase
   * > or other phases.
   *
   * @param {CompileTree extends undefined ? Node : CompileTree} tree
   *   Tree to compile.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {CompileResult extends undefined ? Value : CompileResult}
   *   Textual representation of the tree (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most compilers
   *   > return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  stringify(t, u) {
    this.freeze();
    const s = re(u), n = this.compiler || this.Compiler;
    return ge("stringify", n), lt(t), n(t, s);
  }
  /**
   * Configure the processor to use a plugin, a list of usable values, or a
   * preset.
   *
   * If the processor is already using a plugin, the previous plugin
   * configuration is changed based on the options that are passed in.
   * In other words, the plugin is not added a second time.
   *
   * > **Note**: `use` cannot be called on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * @example
   *   There are many ways to pass plugins to `.use()`.
   *   This example gives an overview:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   unified()
   *     // Plugin with options:
   *     .use(pluginA, {x: true, y: true})
   *     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
   *     .use(pluginA, {y: false, z: true})
   *     // Plugins:
   *     .use([pluginB, pluginC])
   *     // Two plugins, the second with options:
   *     .use([pluginD, [pluginE, {}]])
   *     // Preset with plugins and settings:
   *     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
   *     // Settings only:
   *     .use({settings: {position: false}})
   *   ```
   *
   * @template {Array<unknown>} [Parameters=[]]
   * @template {Node | string | undefined} [Input=undefined]
   * @template [Output=Input]
   *
   * @overload
   * @param {Preset | null | undefined} [preset]
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {PluggableList} list
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Plugin<Parameters, Input, Output>} plugin
   * @param {...(Parameters | [boolean])} parameters
   * @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
   *
   * @param {PluggableList | Plugin | Preset | null | undefined} value
   *   Usable value.
   * @param {...unknown} parameters
   *   Parameters, when a plugin is given as a usable value.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   Current processor.
   */
  use(t, ...u) {
    const s = this.attachers, n = this.namespace;
    if (Se("use", this.frozen), t != null) if (typeof t == "function")
      T(t, u);
    else if (typeof t == "object")
      Array.isArray(t) ? l(t) : E(t);
    else
      throw new TypeError("Expected usable value, not `" + t + "`");
    return this;
    function o(m) {
      if (typeof m == "function")
        T(m, []);
      else if (typeof m == "object")
        if (Array.isArray(m)) {
          const [_, ...A] = (
            /** @type {PluginTuple<Array<unknown>>} */
            m
          );
          T(_, A);
        } else
          E(m);
      else
        throw new TypeError("Expected usable value, not `" + m + "`");
    }
    function E(m) {
      if (!("plugins" in m) && !("settings" in m))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      l(m.plugins), m.settings && (n.settings = Ne(!0, n.settings, m.settings));
    }
    function l(m) {
      let _ = -1;
      if (m != null) if (Array.isArray(m))
        for (; ++_ < m.length; ) {
          const A = m[_];
          o(A);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + m + "`");
    }
    function T(m, _) {
      let A = -1, I = -1;
      for (; ++A < s.length; )
        if (s[A][0] === m) {
          I = A;
          break;
        }
      if (I === -1)
        s.push([m, ..._]);
      else if (_.length > 0) {
        let [O, ...x] = _;
        const C = s[I][1];
        ye(C) && ye(O) && (O = Ne(!0, C, O)), s[I] = [m, O, ...x];
      }
    }
  }
}
const pr = new Qe().freeze();
function Ce(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function ge(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function Se(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function lt(e) {
  if (!ye(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function ht(e, t, u) {
  if (!u)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function re(e) {
  return Ir(e) ? e : new Be(e);
}
function Ir(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function Nr(e) {
  return typeof e == "string" || Cr(e);
}
function Cr(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const Lr = pr().use(fr).use(lr).freeze();
export {
  Lr as r
};
//# sourceMappingURL=rehype_CFsT5uBQ.js.map
