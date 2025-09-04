import { g as getAugmentedNamespace } from "./sucrase_Vx5h13n5.js";
const __viteBrowserExternal = {}, __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" })), require$$0 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
var kindOf, hasRequiredKindOf;
function requireKindOf() {
  if (hasRequiredKindOf) return kindOf;
  hasRequiredKindOf = 1;
  var l = Object.prototype.toString;
  kindOf = function(s) {
    if (s === void 0) return "undefined";
    if (s === null) return "null";
    var E = typeof s;
    if (E === "boolean") return "boolean";
    if (E === "string") return "string";
    if (E === "number") return "number";
    if (E === "symbol") return "symbol";
    if (E === "function")
      return f(s) ? "generatorfunction" : "function";
    if (S(s)) return "array";
    if (i(s)) return "buffer";
    if (n(s)) return "arguments";
    if (p(s)) return "date";
    if (u(s)) return "error";
    if (c(s)) return "regexp";
    switch (x(s)) {
      case "Symbol":
        return "symbol";
      case "Promise":
        return "promise";
      // Set, Map, WeakSet, WeakMap
      case "WeakMap":
        return "weakmap";
      case "WeakSet":
        return "weakset";
      case "Map":
        return "map";
      case "Set":
        return "set";
      // 8-bit typed arrays
      case "Int8Array":
        return "int8array";
      case "Uint8Array":
        return "uint8array";
      case "Uint8ClampedArray":
        return "uint8clampedarray";
      // 16-bit typed arrays
      case "Int16Array":
        return "int16array";
      case "Uint16Array":
        return "uint16array";
      // 32-bit typed arrays
      case "Int32Array":
        return "int32array";
      case "Uint32Array":
        return "uint32array";
      case "Float32Array":
        return "float32array";
      case "Float64Array":
        return "float64array";
    }
    if (g(s))
      return "generator";
    switch (E = l.call(s), E) {
      case "[object Object]":
        return "object";
      // iterators
      case "[object Map Iterator]":
        return "mapiterator";
      case "[object Set Iterator]":
        return "setiterator";
      case "[object String Iterator]":
        return "stringiterator";
      case "[object Array Iterator]":
        return "arrayiterator";
    }
    return E.slice(8, -1).toLowerCase().replace(/\s/g, "");
  };
  function x(t) {
    return typeof t.constructor == "function" ? t.constructor.name : null;
  }
  function S(t) {
    return Array.isArray ? Array.isArray(t) : t instanceof Array;
  }
  function u(t) {
    return t instanceof Error || typeof t.message == "string" && t.constructor && typeof t.constructor.stackTraceLimit == "number";
  }
  function p(t) {
    return t instanceof Date ? !0 : typeof t.toDateString == "function" && typeof t.getDate == "function" && typeof t.setDate == "function";
  }
  function c(t) {
    return t instanceof RegExp ? !0 : typeof t.flags == "string" && typeof t.ignoreCase == "boolean" && typeof t.multiline == "boolean" && typeof t.global == "boolean";
  }
  function f(t, s) {
    return x(t) === "GeneratorFunction";
  }
  function g(t) {
    return typeof t.throw == "function" && typeof t.return == "function" && typeof t.next == "function";
  }
  function n(t) {
    try {
      if (typeof t.length == "number" && typeof t.callee == "function")
        return !0;
    } catch (s) {
      if (s.message.indexOf("callee") !== -1)
        return !0;
    }
    return !1;
  }
  function i(t) {
    return t.constructor && typeof t.constructor.isBuffer == "function" ? t.constructor.isBuffer(t) : !1;
  }
  return kindOf;
}
/*!
 * is-extendable <https://github.com/jonschlinkert/is-extendable>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */
var isExtendable, hasRequiredIsExtendable;
function requireIsExtendable() {
  return hasRequiredIsExtendable || (hasRequiredIsExtendable = 1, isExtendable = function(x) {
    return typeof x < "u" && x !== null && (typeof x == "object" || typeof x == "function");
  }), isExtendable;
}
var extendShallow, hasRequiredExtendShallow;
function requireExtendShallow() {
  if (hasRequiredExtendShallow) return extendShallow;
  hasRequiredExtendShallow = 1;
  var l = requireIsExtendable();
  extendShallow = function(p) {
    l(p) || (p = {});
    for (var c = arguments.length, f = 1; f < c; f++) {
      var g = arguments[f];
      l(g) && x(p, g);
    }
    return p;
  };
  function x(u, p) {
    for (var c in p)
      S(p, c) && (u[c] = p[c]);
  }
  function S(u, p) {
    return Object.prototype.hasOwnProperty.call(u, p);
  }
  return extendShallow;
}
var sectionMatter, hasRequiredSectionMatter;
function requireSectionMatter() {
  if (hasRequiredSectionMatter) return sectionMatter;
  hasRequiredSectionMatter = 1;
  var l = requireKindOf(), x = requireExtendShallow();
  sectionMatter = function(n, i) {
    typeof i == "function" && (i = { parse: i });
    var t = u(n), s = { section_delimiter: "---", parse: f }, E = x({}, s, i), T = E.section_delimiter, F = t.content.split(/\r?\n/), I = null, D = c(), M = [], B = [];
    function Y(Q) {
      t.content = Q, I = [], M = [];
    }
    function P(Q) {
      B.length && (D.key = p(B[0], T), D.content = Q, E.parse(D, I), I.push(D), D = c(), M = [], B = []);
    }
    for (var j = 0; j < F.length; j++) {
      var H = F[j], X = B.length, W = H.trim();
      if (S(W, T)) {
        if (W.length === 3 && j !== 0) {
          if (X === 0 || X === 2) {
            M.push(H);
            continue;
          }
          B.push(W), D.data = M.join(`
`), M = [];
          continue;
        }
        I === null && Y(M.join(`
`)), X === 2 && P(M.join(`
`)), B.push(W);
        continue;
      }
      M.push(H);
    }
    return I === null ? Y(M.join(`
`)) : P(M.join(`
`)), t.sections = I, t;
  };
  function S(n, i) {
    return !(n.slice(0, i.length) !== i || n.charAt(i.length + 1) === i.slice(-1));
  }
  function u(n) {
    if (l(n) !== "object" && (n = { content: n }), typeof n.content != "string" && !g(n.content))
      throw new TypeError("expected a buffer or string");
    return n.content = n.content.toString(), n.sections = [], n;
  }
  function p(n, i) {
    return n ? n.slice(i.length).trim() : "";
  }
  function c() {
    return { key: "", data: "", content: "" };
  }
  function f(n) {
    return n;
  }
  function g(n) {
    return n && n.constructor && typeof n.constructor.isBuffer == "function" ? n.constructor.isBuffer(n) : !1;
  }
  return sectionMatter;
}
var engines = { exports: {} }, jsYaml$1 = {}, loader = {}, common = {}, hasRequiredCommon;
function requireCommon() {
  if (hasRequiredCommon) return common;
  hasRequiredCommon = 1;
  function l(f) {
    return typeof f > "u" || f === null;
  }
  function x(f) {
    return typeof f == "object" && f !== null;
  }
  function S(f) {
    return Array.isArray(f) ? f : l(f) ? [] : [f];
  }
  function u(f, g) {
    var n, i, t, s;
    if (g)
      for (s = Object.keys(g), n = 0, i = s.length; n < i; n += 1)
        t = s[n], f[t] = g[t];
    return f;
  }
  function p(f, g) {
    var n = "", i;
    for (i = 0; i < g; i += 1)
      n += f;
    return n;
  }
  function c(f) {
    return f === 0 && Number.NEGATIVE_INFINITY === 1 / f;
  }
  return common.isNothing = l, common.isObject = x, common.toArray = S, common.repeat = p, common.isNegativeZero = c, common.extend = u, common;
}
var exception, hasRequiredException;
function requireException() {
  if (hasRequiredException) return exception;
  hasRequiredException = 1;
  function l(x, S) {
    Error.call(this), this.name = "YAMLException", this.reason = x, this.mark = S, this.message = (this.reason || "(unknown reason)") + (this.mark ? " " + this.mark.toString() : ""), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
  }
  return l.prototype = Object.create(Error.prototype), l.prototype.constructor = l, l.prototype.toString = function(S) {
    var u = this.name + ": ";
    return u += this.reason || "(unknown reason)", !S && this.mark && (u += " " + this.mark.toString()), u;
  }, exception = l, exception;
}
var mark, hasRequiredMark;
function requireMark() {
  if (hasRequiredMark) return mark;
  hasRequiredMark = 1;
  var l = requireCommon();
  function x(S, u, p, c, f) {
    this.name = S, this.buffer = u, this.position = p, this.line = c, this.column = f;
  }
  return x.prototype.getSnippet = function(u, p) {
    var c, f, g, n, i;
    if (!this.buffer) return null;
    for (u = u || 4, p = p || 75, c = "", f = this.position; f > 0 && `\0\r
\u2028\u2029`.indexOf(this.buffer.charAt(f - 1)) === -1; )
      if (f -= 1, this.position - f > p / 2 - 1) {
        c = " ... ", f += 5;
        break;
      }
    for (g = "", n = this.position; n < this.buffer.length && `\0\r
\u2028\u2029`.indexOf(this.buffer.charAt(n)) === -1; )
      if (n += 1, n - this.position > p / 2 - 1) {
        g = " ... ", n -= 5;
        break;
      }
    return i = this.buffer.slice(f, n), l.repeat(" ", u) + c + i + g + `
` + l.repeat(" ", u + this.position - f + c.length) + "^";
  }, x.prototype.toString = function(u) {
    var p, c = "";
    return this.name && (c += 'in "' + this.name + '" '), c += "at line " + (this.line + 1) + ", column " + (this.column + 1), u || (p = this.getSnippet(), p && (c += `:
` + p)), c;
  }, mark = x, mark;
}
var type, hasRequiredType;
function requireType() {
  if (hasRequiredType) return type;
  hasRequiredType = 1;
  var l = requireException(), x = [
    "kind",
    "resolve",
    "construct",
    "instanceOf",
    "predicate",
    "represent",
    "defaultStyle",
    "styleAliases"
  ], S = [
    "scalar",
    "sequence",
    "mapping"
  ];
  function u(c) {
    var f = {};
    return c !== null && Object.keys(c).forEach(function(g) {
      c[g].forEach(function(n) {
        f[String(n)] = g;
      });
    }), f;
  }
  function p(c, f) {
    if (f = f || {}, Object.keys(f).forEach(function(g) {
      if (x.indexOf(g) === -1)
        throw new l('Unknown option "' + g + '" is met in definition of "' + c + '" YAML type.');
    }), this.tag = c, this.kind = f.kind || null, this.resolve = f.resolve || function() {
      return !0;
    }, this.construct = f.construct || function(g) {
      return g;
    }, this.instanceOf = f.instanceOf || null, this.predicate = f.predicate || null, this.represent = f.represent || null, this.defaultStyle = f.defaultStyle || null, this.styleAliases = u(f.styleAliases || null), S.indexOf(this.kind) === -1)
      throw new l('Unknown kind "' + this.kind + '" is specified for "' + c + '" YAML type.');
  }
  return type = p, type;
}
var schema, hasRequiredSchema;
function requireSchema() {
  if (hasRequiredSchema) return schema;
  hasRequiredSchema = 1;
  var l = requireCommon(), x = requireException(), S = requireType();
  function u(f, g, n) {
    var i = [];
    return f.include.forEach(function(t) {
      n = u(t, g, n);
    }), f[g].forEach(function(t) {
      n.forEach(function(s, E) {
        s.tag === t.tag && s.kind === t.kind && i.push(E);
      }), n.push(t);
    }), n.filter(function(t, s) {
      return i.indexOf(s) === -1;
    });
  }
  function p() {
    var f = {
      scalar: {},
      sequence: {},
      mapping: {},
      fallback: {}
    }, g, n;
    function i(t) {
      f[t.kind][t.tag] = f.fallback[t.tag] = t;
    }
    for (g = 0, n = arguments.length; g < n; g += 1)
      arguments[g].forEach(i);
    return f;
  }
  function c(f) {
    this.include = f.include || [], this.implicit = f.implicit || [], this.explicit = f.explicit || [], this.implicit.forEach(function(g) {
      if (g.loadKind && g.loadKind !== "scalar")
        throw new x("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    }), this.compiledImplicit = u(this, "implicit", []), this.compiledExplicit = u(this, "explicit", []), this.compiledTypeMap = p(this.compiledImplicit, this.compiledExplicit);
  }
  return c.DEFAULT = null, c.create = function() {
    var g, n;
    switch (arguments.length) {
      case 1:
        g = c.DEFAULT, n = arguments[0];
        break;
      case 2:
        g = arguments[0], n = arguments[1];
        break;
      default:
        throw new x("Wrong number of arguments for Schema.create function");
    }
    if (g = l.toArray(g), n = l.toArray(n), !g.every(function(i) {
      return i instanceof c;
    }))
      throw new x("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");
    if (!n.every(function(i) {
      return i instanceof S;
    }))
      throw new x("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    return new c({
      include: g,
      explicit: n
    });
  }, schema = c, schema;
}
var str, hasRequiredStr;
function requireStr() {
  if (hasRequiredStr) return str;
  hasRequiredStr = 1;
  var l = requireType();
  return str = new l("tag:yaml.org,2002:str", {
    kind: "scalar",
    construct: function(x) {
      return x !== null ? x : "";
    }
  }), str;
}
var seq, hasRequiredSeq;
function requireSeq() {
  if (hasRequiredSeq) return seq;
  hasRequiredSeq = 1;
  var l = requireType();
  return seq = new l("tag:yaml.org,2002:seq", {
    kind: "sequence",
    construct: function(x) {
      return x !== null ? x : [];
    }
  }), seq;
}
var map, hasRequiredMap;
function requireMap() {
  if (hasRequiredMap) return map;
  hasRequiredMap = 1;
  var l = requireType();
  return map = new l("tag:yaml.org,2002:map", {
    kind: "mapping",
    construct: function(x) {
      return x !== null ? x : {};
    }
  }), map;
}
var failsafe, hasRequiredFailsafe;
function requireFailsafe() {
  if (hasRequiredFailsafe) return failsafe;
  hasRequiredFailsafe = 1;
  var l = requireSchema();
  return failsafe = new l({
    explicit: [
      requireStr(),
      requireSeq(),
      requireMap()
    ]
  }), failsafe;
}
var _null, hasRequired_null;
function require_null() {
  if (hasRequired_null) return _null;
  hasRequired_null = 1;
  var l = requireType();
  function x(p) {
    if (p === null) return !0;
    var c = p.length;
    return c === 1 && p === "~" || c === 4 && (p === "null" || p === "Null" || p === "NULL");
  }
  function S() {
    return null;
  }
  function u(p) {
    return p === null;
  }
  return _null = new l("tag:yaml.org,2002:null", {
    kind: "scalar",
    resolve: x,
    construct: S,
    predicate: u,
    represent: {
      canonical: function() {
        return "~";
      },
      lowercase: function() {
        return "null";
      },
      uppercase: function() {
        return "NULL";
      },
      camelcase: function() {
        return "Null";
      }
    },
    defaultStyle: "lowercase"
  }), _null;
}
var bool, hasRequiredBool;
function requireBool() {
  if (hasRequiredBool) return bool;
  hasRequiredBool = 1;
  var l = requireType();
  function x(p) {
    if (p === null) return !1;
    var c = p.length;
    return c === 4 && (p === "true" || p === "True" || p === "TRUE") || c === 5 && (p === "false" || p === "False" || p === "FALSE");
  }
  function S(p) {
    return p === "true" || p === "True" || p === "TRUE";
  }
  function u(p) {
    return Object.prototype.toString.call(p) === "[object Boolean]";
  }
  return bool = new l("tag:yaml.org,2002:bool", {
    kind: "scalar",
    resolve: x,
    construct: S,
    predicate: u,
    represent: {
      lowercase: function(p) {
        return p ? "true" : "false";
      },
      uppercase: function(p) {
        return p ? "TRUE" : "FALSE";
      },
      camelcase: function(p) {
        return p ? "True" : "False";
      }
    },
    defaultStyle: "lowercase"
  }), bool;
}
var int, hasRequiredInt;
function requireInt() {
  if (hasRequiredInt) return int;
  hasRequiredInt = 1;
  var l = requireCommon(), x = requireType();
  function S(n) {
    return 48 <= n && n <= 57 || 65 <= n && n <= 70 || 97 <= n && n <= 102;
  }
  function u(n) {
    return 48 <= n && n <= 55;
  }
  function p(n) {
    return 48 <= n && n <= 57;
  }
  function c(n) {
    if (n === null) return !1;
    var i = n.length, t = 0, s = !1, E;
    if (!i) return !1;
    if (E = n[t], (E === "-" || E === "+") && (E = n[++t]), E === "0") {
      if (t + 1 === i) return !0;
      if (E = n[++t], E === "b") {
        for (t++; t < i; t++)
          if (E = n[t], E !== "_") {
            if (E !== "0" && E !== "1") return !1;
            s = !0;
          }
        return s && E !== "_";
      }
      if (E === "x") {
        for (t++; t < i; t++)
          if (E = n[t], E !== "_") {
            if (!S(n.charCodeAt(t))) return !1;
            s = !0;
          }
        return s && E !== "_";
      }
      for (; t < i; t++)
        if (E = n[t], E !== "_") {
          if (!u(n.charCodeAt(t))) return !1;
          s = !0;
        }
      return s && E !== "_";
    }
    if (E === "_") return !1;
    for (; t < i; t++)
      if (E = n[t], E !== "_") {
        if (E === ":") break;
        if (!p(n.charCodeAt(t)))
          return !1;
        s = !0;
      }
    return !s || E === "_" ? !1 : E !== ":" ? !0 : /^(:[0-5]?[0-9])+$/.test(n.slice(t));
  }
  function f(n) {
    var i = n, t = 1, s, E, T = [];
    return i.indexOf("_") !== -1 && (i = i.replace(/_/g, "")), s = i[0], (s === "-" || s === "+") && (s === "-" && (t = -1), i = i.slice(1), s = i[0]), i === "0" ? 0 : s === "0" ? i[1] === "b" ? t * parseInt(i.slice(2), 2) : i[1] === "x" ? t * parseInt(i, 16) : t * parseInt(i, 8) : i.indexOf(":") !== -1 ? (i.split(":").forEach(function(F) {
      T.unshift(parseInt(F, 10));
    }), i = 0, E = 1, T.forEach(function(F) {
      i += F * E, E *= 60;
    }), t * i) : t * parseInt(i, 10);
  }
  function g(n) {
    return Object.prototype.toString.call(n) === "[object Number]" && n % 1 === 0 && !l.isNegativeZero(n);
  }
  return int = new x("tag:yaml.org,2002:int", {
    kind: "scalar",
    resolve: c,
    construct: f,
    predicate: g,
    represent: {
      binary: function(n) {
        return n >= 0 ? "0b" + n.toString(2) : "-0b" + n.toString(2).slice(1);
      },
      octal: function(n) {
        return n >= 0 ? "0" + n.toString(8) : "-0" + n.toString(8).slice(1);
      },
      decimal: function(n) {
        return n.toString(10);
      },
      /* eslint-disable max-len */
      hexadecimal: function(n) {
        return n >= 0 ? "0x" + n.toString(16).toUpperCase() : "-0x" + n.toString(16).toUpperCase().slice(1);
      }
    },
    defaultStyle: "decimal",
    styleAliases: {
      binary: [2, "bin"],
      octal: [8, "oct"],
      decimal: [10, "dec"],
      hexadecimal: [16, "hex"]
    }
  }), int;
}
var float, hasRequiredFloat;
function requireFloat() {
  if (hasRequiredFloat) return float;
  hasRequiredFloat = 1;
  var l = requireCommon(), x = requireType(), S = new RegExp(
    // 2.5e4, 2.5 and integers
    "^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
  );
  function u(n) {
    return !(n === null || !S.test(n) || // Quick hack to not allow integers end with `_`
    // Probably should update regexp & check speed
    n[n.length - 1] === "_");
  }
  function p(n) {
    var i, t, s, E;
    return i = n.replace(/_/g, "").toLowerCase(), t = i[0] === "-" ? -1 : 1, E = [], "+-".indexOf(i[0]) >= 0 && (i = i.slice(1)), i === ".inf" ? t === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : i === ".nan" ? NaN : i.indexOf(":") >= 0 ? (i.split(":").forEach(function(T) {
      E.unshift(parseFloat(T, 10));
    }), i = 0, s = 1, E.forEach(function(T) {
      i += T * s, s *= 60;
    }), t * i) : t * parseFloat(i, 10);
  }
  var c = /^[-+]?[0-9]+e/;
  function f(n, i) {
    var t;
    if (isNaN(n))
      switch (i) {
        case "lowercase":
          return ".nan";
        case "uppercase":
          return ".NAN";
        case "camelcase":
          return ".NaN";
      }
    else if (Number.POSITIVE_INFINITY === n)
      switch (i) {
        case "lowercase":
          return ".inf";
        case "uppercase":
          return ".INF";
        case "camelcase":
          return ".Inf";
      }
    else if (Number.NEGATIVE_INFINITY === n)
      switch (i) {
        case "lowercase":
          return "-.inf";
        case "uppercase":
          return "-.INF";
        case "camelcase":
          return "-.Inf";
      }
    else if (l.isNegativeZero(n))
      return "-0.0";
    return t = n.toString(10), c.test(t) ? t.replace("e", ".e") : t;
  }
  function g(n) {
    return Object.prototype.toString.call(n) === "[object Number]" && (n % 1 !== 0 || l.isNegativeZero(n));
  }
  return float = new x("tag:yaml.org,2002:float", {
    kind: "scalar",
    resolve: u,
    construct: p,
    predicate: g,
    represent: f,
    defaultStyle: "lowercase"
  }), float;
}
var json, hasRequiredJson;
function requireJson() {
  if (hasRequiredJson) return json;
  hasRequiredJson = 1;
  var l = requireSchema();
  return json = new l({
    include: [
      requireFailsafe()
    ],
    implicit: [
      require_null(),
      requireBool(),
      requireInt(),
      requireFloat()
    ]
  }), json;
}
var core, hasRequiredCore;
function requireCore() {
  if (hasRequiredCore) return core;
  hasRequiredCore = 1;
  var l = requireSchema();
  return core = new l({
    include: [
      requireJson()
    ]
  }), core;
}
var timestamp, hasRequiredTimestamp;
function requireTimestamp() {
  if (hasRequiredTimestamp) return timestamp;
  hasRequiredTimestamp = 1;
  var l = requireType(), x = new RegExp(
    "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
  ), S = new RegExp(
    "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
  );
  function u(f) {
    return f === null ? !1 : x.exec(f) !== null || S.exec(f) !== null;
  }
  function p(f) {
    var g, n, i, t, s, E, T, F = 0, I = null, D, M, B;
    if (g = x.exec(f), g === null && (g = S.exec(f)), g === null) throw new Error("Date resolve error");
    if (n = +g[1], i = +g[2] - 1, t = +g[3], !g[4])
      return new Date(Date.UTC(n, i, t));
    if (s = +g[4], E = +g[5], T = +g[6], g[7]) {
      for (F = g[7].slice(0, 3); F.length < 3; )
        F += "0";
      F = +F;
    }
    return g[9] && (D = +g[10], M = +(g[11] || 0), I = (D * 60 + M) * 6e4, g[9] === "-" && (I = -I)), B = new Date(Date.UTC(n, i, t, s, E, T, F)), I && B.setTime(B.getTime() - I), B;
  }
  function c(f) {
    return f.toISOString();
  }
  return timestamp = new l("tag:yaml.org,2002:timestamp", {
    kind: "scalar",
    resolve: u,
    construct: p,
    instanceOf: Date,
    represent: c
  }), timestamp;
}
var merge, hasRequiredMerge;
function requireMerge() {
  if (hasRequiredMerge) return merge;
  hasRequiredMerge = 1;
  var l = requireType();
  function x(S) {
    return S === "<<" || S === null;
  }
  return merge = new l("tag:yaml.org,2002:merge", {
    kind: "scalar",
    resolve: x
  }), merge;
}
function commonjsRequire(l) {
  throw new Error('Could not dynamically require "' + l + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var binary, hasRequiredBinary;
function requireBinary() {
  if (hasRequiredBinary) return binary;
  hasRequiredBinary = 1;
  var l;
  try {
    var x = commonjsRequire;
    l = x("buffer").Buffer;
  } catch {
  }
  var S = requireType(), u = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
  function p(n) {
    if (n === null) return !1;
    var i, t, s = 0, E = n.length, T = u;
    for (t = 0; t < E; t++)
      if (i = T.indexOf(n.charAt(t)), !(i > 64)) {
        if (i < 0) return !1;
        s += 6;
      }
    return s % 8 === 0;
  }
  function c(n) {
    var i, t, s = n.replace(/[\r\n=]/g, ""), E = s.length, T = u, F = 0, I = [];
    for (i = 0; i < E; i++)
      i % 4 === 0 && i && (I.push(F >> 16 & 255), I.push(F >> 8 & 255), I.push(F & 255)), F = F << 6 | T.indexOf(s.charAt(i));
    return t = E % 4 * 6, t === 0 ? (I.push(F >> 16 & 255), I.push(F >> 8 & 255), I.push(F & 255)) : t === 18 ? (I.push(F >> 10 & 255), I.push(F >> 2 & 255)) : t === 12 && I.push(F >> 4 & 255), l ? l.from ? l.from(I) : new l(I) : I;
  }
  function f(n) {
    var i = "", t = 0, s, E, T = n.length, F = u;
    for (s = 0; s < T; s++)
      s % 3 === 0 && s && (i += F[t >> 18 & 63], i += F[t >> 12 & 63], i += F[t >> 6 & 63], i += F[t & 63]), t = (t << 8) + n[s];
    return E = T % 3, E === 0 ? (i += F[t >> 18 & 63], i += F[t >> 12 & 63], i += F[t >> 6 & 63], i += F[t & 63]) : E === 2 ? (i += F[t >> 10 & 63], i += F[t >> 4 & 63], i += F[t << 2 & 63], i += F[64]) : E === 1 && (i += F[t >> 2 & 63], i += F[t << 4 & 63], i += F[64], i += F[64]), i;
  }
  function g(n) {
    return l && l.isBuffer(n);
  }
  return binary = new S("tag:yaml.org,2002:binary", {
    kind: "scalar",
    resolve: p,
    construct: c,
    predicate: g,
    represent: f
  }), binary;
}
var omap, hasRequiredOmap;
function requireOmap() {
  if (hasRequiredOmap) return omap;
  hasRequiredOmap = 1;
  var l = requireType(), x = Object.prototype.hasOwnProperty, S = Object.prototype.toString;
  function u(c) {
    if (c === null) return !0;
    var f = [], g, n, i, t, s, E = c;
    for (g = 0, n = E.length; g < n; g += 1) {
      if (i = E[g], s = !1, S.call(i) !== "[object Object]") return !1;
      for (t in i)
        if (x.call(i, t))
          if (!s) s = !0;
          else return !1;
      if (!s) return !1;
      if (f.indexOf(t) === -1) f.push(t);
      else return !1;
    }
    return !0;
  }
  function p(c) {
    return c !== null ? c : [];
  }
  return omap = new l("tag:yaml.org,2002:omap", {
    kind: "sequence",
    resolve: u,
    construct: p
  }), omap;
}
var pairs, hasRequiredPairs;
function requirePairs() {
  if (hasRequiredPairs) return pairs;
  hasRequiredPairs = 1;
  var l = requireType(), x = Object.prototype.toString;
  function S(p) {
    if (p === null) return !0;
    var c, f, g, n, i, t = p;
    for (i = new Array(t.length), c = 0, f = t.length; c < f; c += 1) {
      if (g = t[c], x.call(g) !== "[object Object]" || (n = Object.keys(g), n.length !== 1)) return !1;
      i[c] = [n[0], g[n[0]]];
    }
    return !0;
  }
  function u(p) {
    if (p === null) return [];
    var c, f, g, n, i, t = p;
    for (i = new Array(t.length), c = 0, f = t.length; c < f; c += 1)
      g = t[c], n = Object.keys(g), i[c] = [n[0], g[n[0]]];
    return i;
  }
  return pairs = new l("tag:yaml.org,2002:pairs", {
    kind: "sequence",
    resolve: S,
    construct: u
  }), pairs;
}
var set, hasRequiredSet;
function requireSet() {
  if (hasRequiredSet) return set;
  hasRequiredSet = 1;
  var l = requireType(), x = Object.prototype.hasOwnProperty;
  function S(p) {
    if (p === null) return !0;
    var c, f = p;
    for (c in f)
      if (x.call(f, c) && f[c] !== null)
        return !1;
    return !0;
  }
  function u(p) {
    return p !== null ? p : {};
  }
  return set = new l("tag:yaml.org,2002:set", {
    kind: "mapping",
    resolve: S,
    construct: u
  }), set;
}
var default_safe, hasRequiredDefault_safe;
function requireDefault_safe() {
  if (hasRequiredDefault_safe) return default_safe;
  hasRequiredDefault_safe = 1;
  var l = requireSchema();
  return default_safe = new l({
    include: [
      requireCore()
    ],
    implicit: [
      requireTimestamp(),
      requireMerge()
    ],
    explicit: [
      requireBinary(),
      requireOmap(),
      requirePairs(),
      requireSet()
    ]
  }), default_safe;
}
var _undefined, hasRequired_undefined;
function require_undefined() {
  if (hasRequired_undefined) return _undefined;
  hasRequired_undefined = 1;
  var l = requireType();
  function x() {
    return !0;
  }
  function S() {
  }
  function u() {
    return "";
  }
  function p(c) {
    return typeof c > "u";
  }
  return _undefined = new l("tag:yaml.org,2002:js/undefined", {
    kind: "scalar",
    resolve: x,
    construct: S,
    predicate: p,
    represent: u
  }), _undefined;
}
var regexp, hasRequiredRegexp;
function requireRegexp() {
  if (hasRequiredRegexp) return regexp;
  hasRequiredRegexp = 1;
  var l = requireType();
  function x(c) {
    if (c === null || c.length === 0) return !1;
    var f = c, g = /\/([gim]*)$/.exec(c), n = "";
    return !(f[0] === "/" && (g && (n = g[1]), n.length > 3 || f[f.length - n.length - 1] !== "/"));
  }
  function S(c) {
    var f = c, g = /\/([gim]*)$/.exec(c), n = "";
    return f[0] === "/" && (g && (n = g[1]), f = f.slice(1, f.length - n.length - 1)), new RegExp(f, n);
  }
  function u(c) {
    var f = "/" + c.source + "/";
    return c.global && (f += "g"), c.multiline && (f += "m"), c.ignoreCase && (f += "i"), f;
  }
  function p(c) {
    return Object.prototype.toString.call(c) === "[object RegExp]";
  }
  return regexp = new l("tag:yaml.org,2002:js/regexp", {
    kind: "scalar",
    resolve: x,
    construct: S,
    predicate: p,
    represent: u
  }), regexp;
}
var _function, hasRequired_function;
function require_function() {
  if (hasRequired_function) return _function;
  hasRequired_function = 1;
  var l;
  try {
    var x = commonjsRequire;
    l = x("esprima");
  } catch {
    typeof window < "u" && (l = window.esprima);
  }
  var S = requireType();
  function u(g) {
    if (g === null) return !1;
    try {
      var n = "(" + g + ")", i = l.parse(n, { range: !0 });
      return !(i.type !== "Program" || i.body.length !== 1 || i.body[0].type !== "ExpressionStatement" || i.body[0].expression.type !== "ArrowFunctionExpression" && i.body[0].expression.type !== "FunctionExpression");
    } catch {
      return !1;
    }
  }
  function p(g) {
    var n = "(" + g + ")", i = l.parse(n, { range: !0 }), t = [], s;
    if (i.type !== "Program" || i.body.length !== 1 || i.body[0].type !== "ExpressionStatement" || i.body[0].expression.type !== "ArrowFunctionExpression" && i.body[0].expression.type !== "FunctionExpression")
      throw new Error("Failed to resolve function");
    return i.body[0].expression.params.forEach(function(E) {
      t.push(E.name);
    }), s = i.body[0].expression.body.range, i.body[0].expression.body.type === "BlockStatement" ? new Function(t, n.slice(s[0] + 1, s[1] - 1)) : new Function(t, "return " + n.slice(s[0], s[1]));
  }
  function c(g) {
    return g.toString();
  }
  function f(g) {
    return Object.prototype.toString.call(g) === "[object Function]";
  }
  return _function = new S("tag:yaml.org,2002:js/function", {
    kind: "scalar",
    resolve: u,
    construct: p,
    predicate: f,
    represent: c
  }), _function;
}
var default_full, hasRequiredDefault_full;
function requireDefault_full() {
  if (hasRequiredDefault_full) return default_full;
  hasRequiredDefault_full = 1;
  var l = requireSchema();
  return default_full = l.DEFAULT = new l({
    include: [
      requireDefault_safe()
    ],
    explicit: [
      require_undefined(),
      requireRegexp(),
      require_function()
    ]
  }), default_full;
}
var hasRequiredLoader;
function requireLoader() {
  if (hasRequiredLoader) return loader;
  hasRequiredLoader = 1;
  var l = requireCommon(), x = requireException(), S = requireMark(), u = requireDefault_safe(), p = requireDefault_full(), c = Object.prototype.hasOwnProperty, f = 1, g = 2, n = 3, i = 4, t = 1, s = 2, E = 3, T = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, F = /[\x85\u2028\u2029]/, I = /[,\[\]\{\}]/, D = /^(?:!|!!|![a-z\-]+!)$/i, M = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
  function B(e) {
    return Object.prototype.toString.call(e);
  }
  function Y(e) {
    return e === 10 || e === 13;
  }
  function P(e) {
    return e === 9 || e === 32;
  }
  function j(e) {
    return e === 9 || e === 32 || e === 10 || e === 13;
  }
  function H(e) {
    return e === 44 || e === 91 || e === 93 || e === 123 || e === 125;
  }
  function X(e) {
    var o;
    return 48 <= e && e <= 57 ? e - 48 : (o = e | 32, 97 <= o && o <= 102 ? o - 97 + 10 : -1);
  }
  function W(e) {
    return e === 120 ? 2 : e === 117 ? 4 : e === 85 ? 8 : 0;
  }
  function Q(e) {
    return 48 <= e && e <= 57 ? e - 48 : -1;
  }
  function te(e) {
    return e === 48 ? "\0" : e === 97 ? "\x07" : e === 98 ? "\b" : e === 116 || e === 9 ? "	" : e === 110 ? `
` : e === 118 ? "\v" : e === 102 ? "\f" : e === 114 ? "\r" : e === 101 ? "\x1B" : e === 32 ? " " : e === 34 ? '"' : e === 47 ? "/" : e === 92 ? "\\" : e === 78 ? "" : e === 95 ? " " : e === 76 ? "\u2028" : e === 80 ? "\u2029" : "";
  }
  function ue(e) {
    return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode(
      (e - 65536 >> 10) + 55296,
      (e - 65536 & 1023) + 56320
    );
  }
  for (var oe = new Array(256), re = new Array(256), L = 0; L < 256; L++)
    oe[L] = te(L) ? 1 : 0, re[L] = te(L);
  function Ae(e, o) {
    this.input = e, this.filename = o.filename || null, this.schema = o.schema || p, this.onWarning = o.onWarning || null, this.legacy = o.legacy || !1, this.json = o.json || !1, this.listener = o.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = e.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.documents = [];
  }
  function ae(e, o) {
    return new x(
      o,
      new S(e.filename, e.input, e.position, e.line, e.position - e.lineStart)
    );
  }
  function b(e, o) {
    throw ae(e, o);
  }
  function ee(e, o) {
    e.onWarning && e.onWarning.call(null, ae(e, o));
  }
  var ne = {
    YAML: function(o, m, w) {
      var y, C, r;
      o.version !== null && b(o, "duplication of %YAML directive"), w.length !== 1 && b(o, "YAML directive accepts exactly one argument"), y = /^([0-9]+)\.([0-9]+)$/.exec(w[0]), y === null && b(o, "ill-formed argument of the YAML directive"), C = parseInt(y[1], 10), r = parseInt(y[2], 10), C !== 1 && b(o, "unacceptable YAML version of the document"), o.version = w[0], o.checkLineBreaks = r < 2, r !== 1 && r !== 2 && ee(o, "unsupported YAML version of the document");
    },
    TAG: function(o, m, w) {
      var y, C;
      w.length !== 2 && b(o, "TAG directive accepts exactly two arguments"), y = w[0], C = w[1], D.test(y) || b(o, "ill-formed tag handle (first argument) of the TAG directive"), c.call(o.tagMap, y) && b(o, 'there is a previously declared suffix for "' + y + '" tag handle'), M.test(C) || b(o, "ill-formed tag prefix (second argument) of the TAG directive"), o.tagMap[y] = C;
    }
  };
  function $(e, o, m, w) {
    var y, C, r, a;
    if (o < m) {
      if (a = e.input.slice(o, m), w)
        for (y = 0, C = a.length; y < C; y += 1)
          r = a.charCodeAt(y), r === 9 || 32 <= r && r <= 1114111 || b(e, "expected valid JSON character");
      else T.test(a) && b(e, "the stream contains non-printable characters");
      e.result += a;
    }
  }
  function le(e, o, m, w) {
    var y, C, r, a;
    for (l.isObject(m) || b(e, "cannot merge mappings; the provided source object is unacceptable"), y = Object.keys(m), r = 0, a = y.length; r < a; r += 1)
      C = y[r], c.call(o, C) || (o[C] = m[C], w[C] = !0);
  }
  function K(e, o, m, w, y, C, r, a) {
    var d, q;
    if (Array.isArray(y))
      for (y = Array.prototype.slice.call(y), d = 0, q = y.length; d < q; d += 1)
        Array.isArray(y[d]) && b(e, "nested arrays are not supported inside keys"), typeof y == "object" && B(y[d]) === "[object Object]" && (y[d] = "[object Object]");
    if (typeof y == "object" && B(y) === "[object Object]" && (y = "[object Object]"), y = String(y), o === null && (o = {}), w === "tag:yaml.org,2002:merge")
      if (Array.isArray(C))
        for (d = 0, q = C.length; d < q; d += 1)
          le(e, o, C[d], m);
      else
        le(e, o, C, m);
    else
      !e.json && !c.call(m, y) && c.call(o, y) && (e.line = r || e.line, e.position = a || e.position, b(e, "duplicated mapping key")), o[y] = C, delete m[y];
    return o;
  }
  function J(e) {
    var o;
    o = e.input.charCodeAt(e.position), o === 10 ? e.position++ : o === 13 ? (e.position++, e.input.charCodeAt(e.position) === 10 && e.position++) : b(e, "a line break is expected"), e.line += 1, e.lineStart = e.position;
  }
  function N(e, o, m) {
    for (var w = 0, y = e.input.charCodeAt(e.position); y !== 0; ) {
      for (; P(y); )
        y = e.input.charCodeAt(++e.position);
      if (o && y === 35)
        do
          y = e.input.charCodeAt(++e.position);
        while (y !== 10 && y !== 13 && y !== 0);
      if (Y(y))
        for (J(e), y = e.input.charCodeAt(e.position), w++, e.lineIndent = 0; y === 32; )
          e.lineIndent++, y = e.input.charCodeAt(++e.position);
      else
        break;
    }
    return m !== -1 && w !== 0 && e.lineIndent < m && ee(e, "deficient indentation"), w;
  }
  function Z(e) {
    var o = e.position, m;
    return m = e.input.charCodeAt(o), !!((m === 45 || m === 46) && m === e.input.charCodeAt(o + 1) && m === e.input.charCodeAt(o + 2) && (o += 3, m = e.input.charCodeAt(o), m === 0 || j(m)));
  }
  function ie(e, o) {
    o === 1 ? e.result += " " : o > 1 && (e.result += l.repeat(`
`, o - 1));
  }
  function ce(e, o, m) {
    var w, y, C, r, a, d, q, A, h = e.kind, _ = e.result, v;
    if (v = e.input.charCodeAt(e.position), j(v) || H(v) || v === 35 || v === 38 || v === 42 || v === 33 || v === 124 || v === 62 || v === 39 || v === 34 || v === 37 || v === 64 || v === 96 || (v === 63 || v === 45) && (y = e.input.charCodeAt(e.position + 1), j(y) || m && H(y)))
      return !1;
    for (e.kind = "scalar", e.result = "", C = r = e.position, a = !1; v !== 0; ) {
      if (v === 58) {
        if (y = e.input.charCodeAt(e.position + 1), j(y) || m && H(y))
          break;
      } else if (v === 35) {
        if (w = e.input.charCodeAt(e.position - 1), j(w))
          break;
      } else {
        if (e.position === e.lineStart && Z(e) || m && H(v))
          break;
        if (Y(v))
          if (d = e.line, q = e.lineStart, A = e.lineIndent, N(e, !1, -1), e.lineIndent >= o) {
            a = !0, v = e.input.charCodeAt(e.position);
            continue;
          } else {
            e.position = r, e.line = d, e.lineStart = q, e.lineIndent = A;
            break;
          }
      }
      a && ($(e, C, r, !1), ie(e, e.line - d), C = r = e.position, a = !1), P(v) || (r = e.position + 1), v = e.input.charCodeAt(++e.position);
    }
    return $(e, C, r, !1), e.result ? !0 : (e.kind = h, e.result = _, !1);
  }
  function fe(e, o) {
    var m, w, y;
    if (m = e.input.charCodeAt(e.position), m !== 39)
      return !1;
    for (e.kind = "scalar", e.result = "", e.position++, w = y = e.position; (m = e.input.charCodeAt(e.position)) !== 0; )
      if (m === 39)
        if ($(e, w, e.position, !0), m = e.input.charCodeAt(++e.position), m === 39)
          w = e.position, e.position++, y = e.position;
        else
          return !0;
      else Y(m) ? ($(e, w, y, !0), ie(e, N(e, !1, o)), w = y = e.position) : e.position === e.lineStart && Z(e) ? b(e, "unexpected end of the document within a single quoted scalar") : (e.position++, y = e.position);
    b(e, "unexpected end of the stream within a single quoted scalar");
  }
  function se(e, o) {
    var m, w, y, C, r, a;
    if (a = e.input.charCodeAt(e.position), a !== 34)
      return !1;
    for (e.kind = "scalar", e.result = "", e.position++, m = w = e.position; (a = e.input.charCodeAt(e.position)) !== 0; ) {
      if (a === 34)
        return $(e, m, e.position, !0), e.position++, !0;
      if (a === 92) {
        if ($(e, m, e.position, !0), a = e.input.charCodeAt(++e.position), Y(a))
          N(e, !1, o);
        else if (a < 256 && oe[a])
          e.result += re[a], e.position++;
        else if ((r = W(a)) > 0) {
          for (y = r, C = 0; y > 0; y--)
            a = e.input.charCodeAt(++e.position), (r = X(a)) >= 0 ? C = (C << 4) + r : b(e, "expected hexadecimal character");
          e.result += ue(C), e.position++;
        } else
          b(e, "unknown escape sequence");
        m = w = e.position;
      } else Y(a) ? ($(e, m, w, !0), ie(e, N(e, !1, o)), m = w = e.position) : e.position === e.lineStart && Z(e) ? b(e, "unexpected end of the document within a double quoted scalar") : (e.position++, w = e.position);
    }
    b(e, "unexpected end of the stream within a double quoted scalar");
  }
  function pe(e, o) {
    var m = !0, w, y = e.tag, C, r = e.anchor, a, d, q, A, h, _ = {}, v, R, k, O;
    if (O = e.input.charCodeAt(e.position), O === 91)
      d = 93, h = !1, C = [];
    else if (O === 123)
      d = 125, h = !0, C = {};
    else
      return !1;
    for (e.anchor !== null && (e.anchorMap[e.anchor] = C), O = e.input.charCodeAt(++e.position); O !== 0; ) {
      if (N(e, !0, o), O = e.input.charCodeAt(e.position), O === d)
        return e.position++, e.tag = y, e.anchor = r, e.kind = h ? "mapping" : "sequence", e.result = C, !0;
      m || b(e, "missed comma between flow collection entries"), R = v = k = null, q = A = !1, O === 63 && (a = e.input.charCodeAt(e.position + 1), j(a) && (q = A = !0, e.position++, N(e, !0, o))), w = e.line, V(e, o, f, !1, !0), R = e.tag, v = e.result, N(e, !0, o), O = e.input.charCodeAt(e.position), (A || e.line === w) && O === 58 && (q = !0, O = e.input.charCodeAt(++e.position), N(e, !0, o), V(e, o, f, !1, !0), k = e.result), h ? K(e, C, _, R, v, k) : q ? C.push(K(e, null, _, R, v, k)) : C.push(v), N(e, !0, o), O = e.input.charCodeAt(e.position), O === 44 ? (m = !0, O = e.input.charCodeAt(++e.position)) : m = !1;
    }
    b(e, "unexpected end of the stream within a flow collection");
  }
  function de(e, o) {
    var m, w, y = t, C = !1, r = !1, a = o, d = 0, q = !1, A, h;
    if (h = e.input.charCodeAt(e.position), h === 124)
      w = !1;
    else if (h === 62)
      w = !0;
    else
      return !1;
    for (e.kind = "scalar", e.result = ""; h !== 0; )
      if (h = e.input.charCodeAt(++e.position), h === 43 || h === 45)
        t === y ? y = h === 43 ? E : s : b(e, "repeat of a chomping mode identifier");
      else if ((A = Q(h)) >= 0)
        A === 0 ? b(e, "bad explicit indentation width of a block scalar; it cannot be less than one") : r ? b(e, "repeat of an indentation width identifier") : (a = o + A - 1, r = !0);
      else
        break;
    if (P(h)) {
      do
        h = e.input.charCodeAt(++e.position);
      while (P(h));
      if (h === 35)
        do
          h = e.input.charCodeAt(++e.position);
        while (!Y(h) && h !== 0);
    }
    for (; h !== 0; ) {
      for (J(e), e.lineIndent = 0, h = e.input.charCodeAt(e.position); (!r || e.lineIndent < a) && h === 32; )
        e.lineIndent++, h = e.input.charCodeAt(++e.position);
      if (!r && e.lineIndent > a && (a = e.lineIndent), Y(h)) {
        d++;
        continue;
      }
      if (e.lineIndent < a) {
        y === E ? e.result += l.repeat(`
`, C ? 1 + d : d) : y === t && C && (e.result += `
`);
        break;
      }
      for (w ? P(h) ? (q = !0, e.result += l.repeat(`
`, C ? 1 + d : d)) : q ? (q = !1, e.result += l.repeat(`
`, d + 1)) : d === 0 ? C && (e.result += " ") : e.result += l.repeat(`
`, d) : e.result += l.repeat(`
`, C ? 1 + d : d), C = !0, r = !0, d = 0, m = e.position; !Y(h) && h !== 0; )
        h = e.input.charCodeAt(++e.position);
      $(e, m, e.position, !1);
    }
    return !0;
  }
  function z(e, o) {
    var m, w = e.tag, y = e.anchor, C = [], r, a = !1, d;
    for (e.anchor !== null && (e.anchorMap[e.anchor] = C), d = e.input.charCodeAt(e.position); d !== 0 && !(d !== 45 || (r = e.input.charCodeAt(e.position + 1), !j(r))); ) {
      if (a = !0, e.position++, N(e, !0, -1) && e.lineIndent <= o) {
        C.push(null), d = e.input.charCodeAt(e.position);
        continue;
      }
      if (m = e.line, V(e, o, n, !1, !0), C.push(e.result), N(e, !0, -1), d = e.input.charCodeAt(e.position), (e.line === m || e.lineIndent > o) && d !== 0)
        b(e, "bad indentation of a sequence entry");
      else if (e.lineIndent < o)
        break;
    }
    return a ? (e.tag = w, e.anchor = y, e.kind = "sequence", e.result = C, !0) : !1;
  }
  function qe(e, o, m) {
    var w, y, C, r, a = e.tag, d = e.anchor, q = {}, A = {}, h = null, _ = null, v = null, R = !1, k = !1, O;
    for (e.anchor !== null && (e.anchorMap[e.anchor] = q), O = e.input.charCodeAt(e.position); O !== 0; ) {
      if (w = e.input.charCodeAt(e.position + 1), C = e.line, r = e.position, (O === 63 || O === 58) && j(w))
        O === 63 ? (R && (K(e, q, A, h, _, null), h = _ = v = null), k = !0, R = !0, y = !0) : R ? (R = !1, y = !0) : b(e, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), e.position += 1, O = w;
      else if (V(e, m, g, !1, !0))
        if (e.line === C) {
          for (O = e.input.charCodeAt(e.position); P(O); )
            O = e.input.charCodeAt(++e.position);
          if (O === 58)
            O = e.input.charCodeAt(++e.position), j(O) || b(e, "a whitespace character is expected after the key-value separator within a block mapping"), R && (K(e, q, A, h, _, null), h = _ = v = null), k = !0, R = !1, y = !1, h = e.tag, _ = e.result;
          else if (k)
            b(e, "can not read an implicit mapping pair; a colon is missed");
          else
            return e.tag = a, e.anchor = d, !0;
        } else if (k)
          b(e, "can not read a block mapping entry; a multiline key may not be an implicit key");
        else
          return e.tag = a, e.anchor = d, !0;
      else
        break;
      if ((e.line === C || e.lineIndent > o) && (V(e, o, i, !0, y) && (R ? _ = e.result : v = e.result), R || (K(e, q, A, h, _, v, C, r), h = _ = v = null), N(e, !0, -1), O = e.input.charCodeAt(e.position)), e.lineIndent > o && O !== 0)
        b(e, "bad indentation of a mapping entry");
      else if (e.lineIndent < o)
        break;
    }
    return R && K(e, q, A, h, _, null), k && (e.tag = a, e.anchor = d, e.kind = "mapping", e.result = q), k;
  }
  function Ee(e) {
    var o, m = !1, w = !1, y, C, r;
    if (r = e.input.charCodeAt(e.position), r !== 33) return !1;
    if (e.tag !== null && b(e, "duplication of a tag property"), r = e.input.charCodeAt(++e.position), r === 60 ? (m = !0, r = e.input.charCodeAt(++e.position)) : r === 33 ? (w = !0, y = "!!", r = e.input.charCodeAt(++e.position)) : y = "!", o = e.position, m) {
      do
        r = e.input.charCodeAt(++e.position);
      while (r !== 0 && r !== 62);
      e.position < e.length ? (C = e.input.slice(o, e.position), r = e.input.charCodeAt(++e.position)) : b(e, "unexpected end of the stream within a verbatim tag");
    } else {
      for (; r !== 0 && !j(r); )
        r === 33 && (w ? b(e, "tag suffix cannot contain exclamation marks") : (y = e.input.slice(o - 1, e.position + 1), D.test(y) || b(e, "named tag handle cannot contain such characters"), w = !0, o = e.position + 1)), r = e.input.charCodeAt(++e.position);
      C = e.input.slice(o, e.position), I.test(C) && b(e, "tag suffix cannot contain flow indicator characters");
    }
    return C && !M.test(C) && b(e, "tag name cannot contain such characters: " + C), m ? e.tag = C : c.call(e.tagMap, y) ? e.tag = e.tagMap[y] + C : y === "!" ? e.tag = "!" + C : y === "!!" ? e.tag = "tag:yaml.org,2002:" + C : b(e, 'undeclared tag handle "' + y + '"'), !0;
  }
  function he(e) {
    var o, m;
    if (m = e.input.charCodeAt(e.position), m !== 38) return !1;
    for (e.anchor !== null && b(e, "duplication of an anchor property"), m = e.input.charCodeAt(++e.position), o = e.position; m !== 0 && !j(m) && !H(m); )
      m = e.input.charCodeAt(++e.position);
    return e.position === o && b(e, "name of an anchor node must contain at least one character"), e.anchor = e.input.slice(o, e.position), !0;
  }
  function me(e) {
    var o, m, w;
    if (w = e.input.charCodeAt(e.position), w !== 42) return !1;
    for (w = e.input.charCodeAt(++e.position), o = e.position; w !== 0 && !j(w) && !H(w); )
      w = e.input.charCodeAt(++e.position);
    return e.position === o && b(e, "name of an alias node must contain at least one character"), m = e.input.slice(o, e.position), c.call(e.anchorMap, m) || b(e, 'unidentified alias "' + m + '"'), e.result = e.anchorMap[m], N(e, !0, -1), !0;
  }
  function V(e, o, m, w, y) {
    var C, r, a, d = 1, q = !1, A = !1, h, _, v, R, k;
    if (e.listener !== null && e.listener("open", e), e.tag = null, e.anchor = null, e.kind = null, e.result = null, C = r = a = i === m || n === m, w && N(e, !0, -1) && (q = !0, e.lineIndent > o ? d = 1 : e.lineIndent === o ? d = 0 : e.lineIndent < o && (d = -1)), d === 1)
      for (; Ee(e) || he(e); )
        N(e, !0, -1) ? (q = !0, a = C, e.lineIndent > o ? d = 1 : e.lineIndent === o ? d = 0 : e.lineIndent < o && (d = -1)) : a = !1;
    if (a && (a = q || y), (d === 1 || i === m) && (f === m || g === m ? R = o : R = o + 1, k = e.position - e.lineStart, d === 1 ? a && (z(e, k) || qe(e, k, R)) || pe(e, R) ? A = !0 : (r && de(e, R) || fe(e, R) || se(e, R) ? A = !0 : me(e) ? (A = !0, (e.tag !== null || e.anchor !== null) && b(e, "alias node should not have any properties")) : ce(e, R, f === m) && (A = !0, e.tag === null && (e.tag = "?")), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : d === 0 && (A = a && z(e, k))), e.tag !== null && e.tag !== "!")
      if (e.tag === "?") {
        for (e.result !== null && e.kind !== "scalar" && b(e, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + e.kind + '"'), h = 0, _ = e.implicitTypes.length; h < _; h += 1)
          if (v = e.implicitTypes[h], v.resolve(e.result)) {
            e.result = v.construct(e.result), e.tag = v.tag, e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
            break;
          }
      } else c.call(e.typeMap[e.kind || "fallback"], e.tag) ? (v = e.typeMap[e.kind || "fallback"][e.tag], e.result !== null && v.kind !== e.kind && b(e, "unacceptable node kind for !<" + e.tag + '> tag; it should be "' + v.kind + '", not "' + e.kind + '"'), v.resolve(e.result) ? (e.result = v.construct(e.result), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : b(e, "cannot resolve a node with !<" + e.tag + "> explicit tag")) : b(e, "unknown tag !<" + e.tag + ">");
    return e.listener !== null && e.listener("close", e), e.tag !== null || e.anchor !== null || A;
  }
  function ge(e) {
    var o = e.position, m, w, y, C = !1, r;
    for (e.version = null, e.checkLineBreaks = e.legacy, e.tagMap = {}, e.anchorMap = {}; (r = e.input.charCodeAt(e.position)) !== 0 && (N(e, !0, -1), r = e.input.charCodeAt(e.position), !(e.lineIndent > 0 || r !== 37)); ) {
      for (C = !0, r = e.input.charCodeAt(++e.position), m = e.position; r !== 0 && !j(r); )
        r = e.input.charCodeAt(++e.position);
      for (w = e.input.slice(m, e.position), y = [], w.length < 1 && b(e, "directive name must not be less than one character in length"); r !== 0; ) {
        for (; P(r); )
          r = e.input.charCodeAt(++e.position);
        if (r === 35) {
          do
            r = e.input.charCodeAt(++e.position);
          while (r !== 0 && !Y(r));
          break;
        }
        if (Y(r)) break;
        for (m = e.position; r !== 0 && !j(r); )
          r = e.input.charCodeAt(++e.position);
        y.push(e.input.slice(m, e.position));
      }
      r !== 0 && J(e), c.call(ne, w) ? ne[w](e, w, y) : ee(e, 'unknown document directive "' + w + '"');
    }
    if (N(e, !0, -1), e.lineIndent === 0 && e.input.charCodeAt(e.position) === 45 && e.input.charCodeAt(e.position + 1) === 45 && e.input.charCodeAt(e.position + 2) === 45 ? (e.position += 3, N(e, !0, -1)) : C && b(e, "directives end mark is expected"), V(e, e.lineIndent - 1, i, !1, !0), N(e, !0, -1), e.checkLineBreaks && F.test(e.input.slice(o, e.position)) && ee(e, "non-ASCII line breaks are interpreted as content"), e.documents.push(e.result), e.position === e.lineStart && Z(e)) {
      e.input.charCodeAt(e.position) === 46 && (e.position += 3, N(e, !0, -1));
      return;
    }
    if (e.position < e.length - 1)
      b(e, "end of the stream or a document separator is expected");
    else
      return;
  }
  function xe(e, o) {
    e = String(e), o = o || {}, e.length !== 0 && (e.charCodeAt(e.length - 1) !== 10 && e.charCodeAt(e.length - 1) !== 13 && (e += `
`), e.charCodeAt(0) === 65279 && (e = e.slice(1)));
    var m = new Ae(e, o), w = e.indexOf("\0");
    for (w !== -1 && (m.position = w, b(m, "null byte is not allowed in input")), m.input += "\0"; m.input.charCodeAt(m.position) === 32; )
      m.lineIndent += 1, m.position += 1;
    for (; m.position < m.length - 1; )
      ge(m);
    return m.documents;
  }
  function ye(e, o, m) {
    o !== null && typeof o == "object" && typeof m > "u" && (m = o, o = null);
    var w = xe(e, m);
    if (typeof o != "function")
      return w;
    for (var y = 0, C = w.length; y < C; y += 1)
      o(w[y]);
  }
  function ve(e, o) {
    var m = xe(e, o);
    if (m.length !== 0) {
      if (m.length === 1)
        return m[0];
      throw new x("expected a single document in the stream, but found more");
    }
  }
  function Se(e, o, m) {
    return typeof o == "object" && o !== null && typeof m > "u" && (m = o, o = null), ye(e, o, l.extend({ schema: u }, m));
  }
  function _e(e, o) {
    return ve(e, l.extend({ schema: u }, o));
  }
  return loader.loadAll = ye, loader.load = ve, loader.safeLoadAll = Se, loader.safeLoad = _e, loader;
}
var dumper = {}, hasRequiredDumper;
function requireDumper() {
  if (hasRequiredDumper) return dumper;
  hasRequiredDumper = 1;
  var l = requireCommon(), x = requireException(), S = requireDefault_full(), u = requireDefault_safe(), p = Object.prototype.toString, c = Object.prototype.hasOwnProperty, f = 9, g = 10, n = 13, i = 32, t = 33, s = 34, E = 35, T = 37, F = 38, I = 39, D = 42, M = 44, B = 45, Y = 58, P = 61, j = 62, H = 63, X = 64, W = 91, Q = 93, te = 96, ue = 123, oe = 124, re = 125, L = {};
  L[0] = "\\0", L[7] = "\\a", L[8] = "\\b", L[9] = "\\t", L[10] = "\\n", L[11] = "\\v", L[12] = "\\f", L[13] = "\\r", L[27] = "\\e", L[34] = '\\"', L[92] = "\\\\", L[133] = "\\N", L[160] = "\\_", L[8232] = "\\L", L[8233] = "\\P";
  var Ae = [
    "y",
    "Y",
    "yes",
    "Yes",
    "YES",
    "on",
    "On",
    "ON",
    "n",
    "N",
    "no",
    "No",
    "NO",
    "off",
    "Off",
    "OFF"
  ];
  function ae(r, a) {
    var d, q, A, h, _, v, R;
    if (a === null) return {};
    for (d = {}, q = Object.keys(a), A = 0, h = q.length; A < h; A += 1)
      _ = q[A], v = String(a[_]), _.slice(0, 2) === "!!" && (_ = "tag:yaml.org,2002:" + _.slice(2)), R = r.compiledTypeMap.fallback[_], R && c.call(R.styleAliases, v) && (v = R.styleAliases[v]), d[_] = v;
    return d;
  }
  function b(r) {
    var a, d, q;
    if (a = r.toString(16).toUpperCase(), r <= 255)
      d = "x", q = 2;
    else if (r <= 65535)
      d = "u", q = 4;
    else if (r <= 4294967295)
      d = "U", q = 8;
    else
      throw new x("code point within a string may not be greater than 0xFFFFFFFF");
    return "\\" + d + l.repeat("0", q - a.length) + a;
  }
  function ee(r) {
    this.schema = r.schema || S, this.indent = Math.max(1, r.indent || 2), this.noArrayIndent = r.noArrayIndent || !1, this.skipInvalid = r.skipInvalid || !1, this.flowLevel = l.isNothing(r.flowLevel) ? -1 : r.flowLevel, this.styleMap = ae(this.schema, r.styles || null), this.sortKeys = r.sortKeys || !1, this.lineWidth = r.lineWidth || 80, this.noRefs = r.noRefs || !1, this.noCompatMode = r.noCompatMode || !1, this.condenseFlow = r.condenseFlow || !1, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
  }
  function ne(r, a) {
    for (var d = l.repeat(" ", a), q = 0, A = -1, h = "", _, v = r.length; q < v; )
      A = r.indexOf(`
`, q), A === -1 ? (_ = r.slice(q), q = v) : (_ = r.slice(q, A + 1), q = A + 1), _.length && _ !== `
` && (h += d), h += _;
    return h;
  }
  function $(r, a) {
    return `
` + l.repeat(" ", r.indent * a);
  }
  function le(r, a) {
    var d, q, A;
    for (d = 0, q = r.implicitTypes.length; d < q; d += 1)
      if (A = r.implicitTypes[d], A.resolve(a))
        return !0;
    return !1;
  }
  function K(r) {
    return r === i || r === f;
  }
  function J(r) {
    return 32 <= r && r <= 126 || 161 <= r && r <= 55295 && r !== 8232 && r !== 8233 || 57344 <= r && r <= 65533 && r !== 65279 || 65536 <= r && r <= 1114111;
  }
  function N(r) {
    return J(r) && !K(r) && r !== 65279 && r !== n && r !== g;
  }
  function Z(r, a) {
    return J(r) && r !== 65279 && r !== M && r !== W && r !== Q && r !== ue && r !== re && r !== Y && (r !== E || a && N(a));
  }
  function ie(r) {
    return J(r) && r !== 65279 && !K(r) && r !== B && r !== H && r !== Y && r !== M && r !== W && r !== Q && r !== ue && r !== re && r !== E && r !== F && r !== D && r !== t && r !== oe && r !== P && r !== j && r !== I && r !== s && r !== T && r !== X && r !== te;
  }
  function ce(r) {
    var a = /^\n* /;
    return a.test(r);
  }
  var fe = 1, se = 2, pe = 3, de = 4, z = 5;
  function qe(r, a, d, q, A) {
    var h, _, v, R = !1, k = !1, O = q !== -1, G = -1, U = ie(r.charCodeAt(0)) && !K(r.charCodeAt(r.length - 1));
    if (a)
      for (h = 0; h < r.length; h++) {
        if (_ = r.charCodeAt(h), !J(_))
          return z;
        v = h > 0 ? r.charCodeAt(h - 1) : null, U = U && Z(_, v);
      }
    else {
      for (h = 0; h < r.length; h++) {
        if (_ = r.charCodeAt(h), _ === g)
          R = !0, O && (k = k || // Foldable line = too long, and not more-indented.
          h - G - 1 > q && r[G + 1] !== " ", G = h);
        else if (!J(_))
          return z;
        v = h > 0 ? r.charCodeAt(h - 1) : null, U = U && Z(_, v);
      }
      k = k || O && h - G - 1 > q && r[G + 1] !== " ";
    }
    return !R && !k ? U && !A(r) ? fe : se : d > 9 && ce(r) ? z : k ? de : pe;
  }
  function Ee(r, a, d, q) {
    r.dump = (function() {
      if (a.length === 0)
        return "''";
      if (!r.noCompatMode && Ae.indexOf(a) !== -1)
        return "'" + a + "'";
      var A = r.indent * Math.max(1, d), h = r.lineWidth === -1 ? -1 : Math.max(Math.min(r.lineWidth, 40), r.lineWidth - A), _ = q || r.flowLevel > -1 && d >= r.flowLevel;
      function v(R) {
        return le(r, R);
      }
      switch (qe(a, _, r.indent, h, v)) {
        case fe:
          return a;
        case se:
          return "'" + a.replace(/'/g, "''") + "'";
        case pe:
          return "|" + he(a, r.indent) + me(ne(a, A));
        case de:
          return ">" + he(a, r.indent) + me(ne(V(a, h), A));
        case z:
          return '"' + xe(a) + '"';
        default:
          throw new x("impossible error: invalid scalar style");
      }
    })();
  }
  function he(r, a) {
    var d = ce(r) ? String(a) : "", q = r[r.length - 1] === `
`, A = q && (r[r.length - 2] === `
` || r === `
`), h = A ? "+" : q ? "" : "-";
    return d + h + `
`;
  }
  function me(r) {
    return r[r.length - 1] === `
` ? r.slice(0, -1) : r;
  }
  function V(r, a) {
    for (var d = /(\n+)([^\n]*)/g, q = (function() {
      var k = r.indexOf(`
`);
      return k = k !== -1 ? k : r.length, d.lastIndex = k, ge(r.slice(0, k), a);
    })(), A = r[0] === `
` || r[0] === " ", h, _; _ = d.exec(r); ) {
      var v = _[1], R = _[2];
      h = R[0] === " ", q += v + (!A && !h && R !== "" ? `
` : "") + ge(R, a), A = h;
    }
    return q;
  }
  function ge(r, a) {
    if (r === "" || r[0] === " ") return r;
    for (var d = / [^ ]/g, q, A = 0, h, _ = 0, v = 0, R = ""; q = d.exec(r); )
      v = q.index, v - A > a && (h = _ > A ? _ : v, R += `
` + r.slice(A, h), A = h + 1), _ = v;
    return R += `
`, r.length - A > a && _ > A ? R += r.slice(A, _) + `
` + r.slice(_ + 1) : R += r.slice(A), R.slice(1);
  }
  function xe(r) {
    for (var a = "", d, q, A, h = 0; h < r.length; h++) {
      if (d = r.charCodeAt(h), d >= 55296 && d <= 56319 && (q = r.charCodeAt(h + 1), q >= 56320 && q <= 57343)) {
        a += b((d - 55296) * 1024 + q - 56320 + 65536), h++;
        continue;
      }
      A = L[d], a += !A && J(d) ? r[h] : A || b(d);
    }
    return a;
  }
  function ye(r, a, d) {
    var q = "", A = r.tag, h, _;
    for (h = 0, _ = d.length; h < _; h += 1)
      o(r, a, d[h], !1, !1) && (h !== 0 && (q += "," + (r.condenseFlow ? "" : " ")), q += r.dump);
    r.tag = A, r.dump = "[" + q + "]";
  }
  function ve(r, a, d, q) {
    var A = "", h = r.tag, _, v;
    for (_ = 0, v = d.length; _ < v; _ += 1)
      o(r, a + 1, d[_], !0, !0) && ((!q || _ !== 0) && (A += $(r, a)), r.dump && g === r.dump.charCodeAt(0) ? A += "-" : A += "- ", A += r.dump);
    r.tag = h, r.dump = A || "[]";
  }
  function Se(r, a, d) {
    var q = "", A = r.tag, h = Object.keys(d), _, v, R, k, O;
    for (_ = 0, v = h.length; _ < v; _ += 1)
      O = "", _ !== 0 && (O += ", "), r.condenseFlow && (O += '"'), R = h[_], k = d[R], o(r, a, R, !1, !1) && (r.dump.length > 1024 && (O += "? "), O += r.dump + (r.condenseFlow ? '"' : "") + ":" + (r.condenseFlow ? "" : " "), o(r, a, k, !1, !1) && (O += r.dump, q += O));
    r.tag = A, r.dump = "{" + q + "}";
  }
  function _e(r, a, d, q) {
    var A = "", h = r.tag, _ = Object.keys(d), v, R, k, O, G, U;
    if (r.sortKeys === !0)
      _.sort();
    else if (typeof r.sortKeys == "function")
      _.sort(r.sortKeys);
    else if (r.sortKeys)
      throw new x("sortKeys must be a boolean or a function");
    for (v = 0, R = _.length; v < R; v += 1)
      U = "", (!q || v !== 0) && (U += $(r, a)), k = _[v], O = d[k], o(r, a + 1, k, !0, !0, !0) && (G = r.tag !== null && r.tag !== "?" || r.dump && r.dump.length > 1024, G && (r.dump && g === r.dump.charCodeAt(0) ? U += "?" : U += "? "), U += r.dump, G && (U += $(r, a)), o(r, a + 1, O, !0, G) && (r.dump && g === r.dump.charCodeAt(0) ? U += ":" : U += ": ", U += r.dump, A += U));
    r.tag = h, r.dump = A || "{}";
  }
  function e(r, a, d) {
    var q, A, h, _, v, R;
    for (A = d ? r.explicitTypes : r.implicitTypes, h = 0, _ = A.length; h < _; h += 1)
      if (v = A[h], (v.instanceOf || v.predicate) && (!v.instanceOf || typeof a == "object" && a instanceof v.instanceOf) && (!v.predicate || v.predicate(a))) {
        if (r.tag = d ? v.tag : "?", v.represent) {
          if (R = r.styleMap[v.tag] || v.defaultStyle, p.call(v.represent) === "[object Function]")
            q = v.represent(a, R);
          else if (c.call(v.represent, R))
            q = v.represent[R](a, R);
          else
            throw new x("!<" + v.tag + '> tag resolver accepts not "' + R + '" style');
          r.dump = q;
        }
        return !0;
      }
    return !1;
  }
  function o(r, a, d, q, A, h) {
    r.tag = null, r.dump = d, e(r, d, !1) || e(r, d, !0);
    var _ = p.call(r.dump);
    q && (q = r.flowLevel < 0 || r.flowLevel > a);
    var v = _ === "[object Object]" || _ === "[object Array]", R, k;
    if (v && (R = r.duplicates.indexOf(d), k = R !== -1), (r.tag !== null && r.tag !== "?" || k || r.indent !== 2 && a > 0) && (A = !1), k && r.usedDuplicates[R])
      r.dump = "*ref_" + R;
    else {
      if (v && k && !r.usedDuplicates[R] && (r.usedDuplicates[R] = !0), _ === "[object Object]")
        q && Object.keys(r.dump).length !== 0 ? (_e(r, a, r.dump, A), k && (r.dump = "&ref_" + R + r.dump)) : (Se(r, a, r.dump), k && (r.dump = "&ref_" + R + " " + r.dump));
      else if (_ === "[object Array]") {
        var O = r.noArrayIndent && a > 0 ? a - 1 : a;
        q && r.dump.length !== 0 ? (ve(r, O, r.dump, A), k && (r.dump = "&ref_" + R + r.dump)) : (ye(r, O, r.dump), k && (r.dump = "&ref_" + R + " " + r.dump));
      } else if (_ === "[object String]")
        r.tag !== "?" && Ee(r, r.dump, a, h);
      else {
        if (r.skipInvalid) return !1;
        throw new x("unacceptable kind of an object to dump " + _);
      }
      r.tag !== null && r.tag !== "?" && (r.dump = "!<" + r.tag + "> " + r.dump);
    }
    return !0;
  }
  function m(r, a) {
    var d = [], q = [], A, h;
    for (w(r, d, q), A = 0, h = q.length; A < h; A += 1)
      a.duplicates.push(d[q[A]]);
    a.usedDuplicates = new Array(h);
  }
  function w(r, a, d) {
    var q, A, h;
    if (r !== null && typeof r == "object")
      if (A = a.indexOf(r), A !== -1)
        d.indexOf(A) === -1 && d.push(A);
      else if (a.push(r), Array.isArray(r))
        for (A = 0, h = r.length; A < h; A += 1)
          w(r[A], a, d);
      else
        for (q = Object.keys(r), A = 0, h = q.length; A < h; A += 1)
          w(r[q[A]], a, d);
  }
  function y(r, a) {
    a = a || {};
    var d = new ee(a);
    return d.noRefs || m(r, d), o(d, 0, r, !0, !0) ? d.dump + `
` : "";
  }
  function C(r, a) {
    return y(r, l.extend({ schema: u }, a));
  }
  return dumper.dump = y, dumper.safeDump = C, dumper;
}
var hasRequiredJsYaml$1;
function requireJsYaml$1() {
  if (hasRequiredJsYaml$1) return jsYaml$1;
  hasRequiredJsYaml$1 = 1;
  var l = requireLoader(), x = requireDumper();
  function S(u) {
    return function() {
      throw new Error("Function " + u + " is deprecated and cannot be used.");
    };
  }
  return jsYaml$1.Type = requireType(), jsYaml$1.Schema = requireSchema(), jsYaml$1.FAILSAFE_SCHEMA = requireFailsafe(), jsYaml$1.JSON_SCHEMA = requireJson(), jsYaml$1.CORE_SCHEMA = requireCore(), jsYaml$1.DEFAULT_SAFE_SCHEMA = requireDefault_safe(), jsYaml$1.DEFAULT_FULL_SCHEMA = requireDefault_full(), jsYaml$1.load = l.load, jsYaml$1.loadAll = l.loadAll, jsYaml$1.safeLoad = l.safeLoad, jsYaml$1.safeLoadAll = l.safeLoadAll, jsYaml$1.dump = x.dump, jsYaml$1.safeDump = x.safeDump, jsYaml$1.YAMLException = requireException(), jsYaml$1.MINIMAL_SCHEMA = requireFailsafe(), jsYaml$1.SAFE_SCHEMA = requireDefault_safe(), jsYaml$1.DEFAULT_SCHEMA = requireDefault_full(), jsYaml$1.scan = S("scan"), jsYaml$1.parse = S("parse"), jsYaml$1.compose = S("compose"), jsYaml$1.addConstructor = S("addConstructor"), jsYaml$1;
}
var jsYaml, hasRequiredJsYaml;
function requireJsYaml() {
  if (hasRequiredJsYaml) return jsYaml;
  hasRequiredJsYaml = 1;
  var l = requireJsYaml$1();
  return jsYaml = l, jsYaml;
}
var hasRequiredEngines;
function requireEngines() {
  return hasRequiredEngines || (hasRequiredEngines = 1, (function(module, exports) {
    const yaml = requireJsYaml(), engines = module.exports;
    engines.yaml = {
      parse: yaml.safeLoad.bind(yaml),
      stringify: yaml.safeDump.bind(yaml)
    }, engines.json = {
      parse: JSON.parse.bind(JSON),
      stringify: function(l, x) {
        const S = Object.assign({ replacer: null, space: 2 }, x);
        return JSON.stringify(l, S.replacer, S.space);
      }
    }, engines.javascript = {
      parse: function parse(str, options, wrap) {
        try {
          return wrap !== !1 && (str = `(function() {
return ` + str.trim() + `;
}());`), eval(str) || {};
        } catch (l) {
          if (wrap !== !1 && /(unexpected|identifier)/i.test(l.message))
            return parse(str, options, !1);
          throw new SyntaxError(l);
        }
      },
      stringify: function() {
        throw new Error("stringifying JavaScript is not supported");
      }
    };
  })(engines)), engines.exports;
}
var utils = {};
/*!
 * strip-bom-string <https://github.com/jonschlinkert/strip-bom-string>
 *
 * Copyright (c) 2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */
var stripBomString, hasRequiredStripBomString;
function requireStripBomString() {
  return hasRequiredStripBomString || (hasRequiredStripBomString = 1, stripBomString = function(l) {
    return typeof l == "string" && l.charAt(0) === "\uFEFF" ? l.slice(1) : l;
  }), stripBomString;
}
var hasRequiredUtils;
function requireUtils() {
  return hasRequiredUtils || (hasRequiredUtils = 1, (function(l) {
    const x = requireStripBomString(), S = requireKindOf();
    l.define = function(u, p, c) {
      Reflect.defineProperty(u, p, {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: c
      });
    }, l.isBuffer = function(u) {
      return S(u) === "buffer";
    }, l.isObject = function(u) {
      return S(u) === "object";
    }, l.toBuffer = function(u) {
      return typeof u == "string" ? Buffer.from(u) : u;
    }, l.toString = function(u) {
      if (l.isBuffer(u)) return x(String(u));
      if (typeof u != "string")
        throw new TypeError("expected input to be a string or buffer");
      return x(u);
    }, l.arrayify = function(u) {
      return u ? Array.isArray(u) ? u : [u] : [];
    }, l.startsWith = function(u, p, c) {
      return typeof c != "number" && (c = p.length), u.slice(0, c) === p;
    };
  })(utils)), utils;
}
var defaults, hasRequiredDefaults;
function requireDefaults() {
  if (hasRequiredDefaults) return defaults;
  hasRequiredDefaults = 1;
  const l = requireEngines(), x = requireUtils();
  return defaults = function(S) {
    const u = Object.assign({}, S);
    return u.delimiters = x.arrayify(u.delims || u.delimiters || "---"), u.delimiters.length === 1 && u.delimiters.push(u.delimiters[0]), u.language = (u.language || u.lang || "yaml").toLowerCase(), u.engines = Object.assign({}, l, u.parsers, u.engines), u;
  }, defaults;
}
var engine, hasRequiredEngine;
function requireEngine() {
  if (hasRequiredEngine) return engine;
  hasRequiredEngine = 1, engine = function(x, S) {
    let u = S.engines[x] || S.engines[l(x)];
    if (typeof u > "u")
      throw new Error('gray-matter engine "' + x + '" is not registered');
    return typeof u == "function" && (u = { parse: u }), u;
  };
  function l(x) {
    switch (x.toLowerCase()) {
      case "js":
      case "javascript":
        return "javascript";
      case "coffee":
      case "coffeescript":
      case "cson":
        return "coffee";
      case "yaml":
      case "yml":
        return "yaml";
      default:
        return x;
    }
  }
  return engine;
}
var stringify, hasRequiredStringify;
function requireStringify() {
  if (hasRequiredStringify) return stringify;
  hasRequiredStringify = 1;
  const l = requireKindOf(), x = requireEngine(), S = requireDefaults();
  stringify = function(p, c, f) {
    if (c == null && f == null)
      switch (l(p)) {
        case "object":
          c = p.data, f = {};
          break;
        case "string":
          return p;
        default:
          throw new TypeError("expected file to be a string or object");
      }
    const g = p.content, n = S(f);
    if (c == null) {
      if (!n.data) return p;
      c = n.data;
    }
    const i = p.language || n.language, t = x(i, n);
    if (typeof t.stringify != "function")
      throw new TypeError('expected "' + i + '.stringify" to be a function');
    c = Object.assign({}, p.data, c);
    const s = n.delimiters[0], E = n.delimiters[1], T = t.stringify(c, f).trim();
    let F = "";
    return T !== "{}" && (F = u(s) + u(T) + u(E)), typeof p.excerpt == "string" && p.excerpt !== "" && g.indexOf(p.excerpt.trim()) === -1 && (F += u(p.excerpt) + u(E)), F + u(g);
  };
  function u(p) {
    return p.slice(-1) !== `
` ? p + `
` : p;
  }
  return stringify;
}
var excerpt, hasRequiredExcerpt;
function requireExcerpt() {
  if (hasRequiredExcerpt) return excerpt;
  hasRequiredExcerpt = 1;
  const l = requireDefaults();
  return excerpt = function(x, S) {
    const u = l(S);
    if (x.data == null && (x.data = {}), typeof u.excerpt == "function")
      return u.excerpt(x, u);
    const p = x.data.excerpt_separator || u.excerpt_separator;
    if (p == null && (u.excerpt === !1 || u.excerpt == null))
      return x;
    const c = typeof u.excerpt == "string" ? u.excerpt : p || u.delimiters[0], f = x.content.indexOf(c);
    return f !== -1 && (x.excerpt = x.content.slice(0, f)), x;
  }, excerpt;
}
var toFile, hasRequiredToFile;
function requireToFile() {
  if (hasRequiredToFile) return toFile;
  hasRequiredToFile = 1;
  const l = requireKindOf(), x = requireStringify(), S = requireUtils();
  return toFile = function(u) {
    return l(u) !== "object" && (u = { content: u }), l(u.data) !== "object" && (u.data = {}), u.contents && u.content == null && (u.content = u.contents), S.define(u, "orig", S.toBuffer(u.content)), S.define(u, "language", u.language || ""), S.define(u, "matter", u.matter || ""), S.define(u, "stringify", function(p, c) {
      return c && c.language && (u.language = c.language), x(u, p, c);
    }), u.content = S.toString(u.content), u.isEmpty = !1, u.excerpt = "", u;
  }, toFile;
}
var parse, hasRequiredParse;
function requireParse() {
  if (hasRequiredParse) return parse;
  hasRequiredParse = 1;
  const l = requireEngine(), x = requireDefaults();
  return parse = function(S, u, p) {
    const c = x(p), f = l(S, c);
    if (typeof f.parse != "function")
      throw new TypeError('expected "' + S + '.parse" to be a function');
    return f.parse(u, c);
  }, parse;
}
var grayMatter, hasRequiredGrayMatter;
function requireGrayMatter() {
  if (hasRequiredGrayMatter) return grayMatter;
  hasRequiredGrayMatter = 1;
  const l = require$$0, x = requireSectionMatter(), S = requireDefaults(), u = requireStringify(), p = requireExcerpt(), c = requireEngines(), f = requireToFile(), g = requireParse(), n = requireUtils();
  function i(s, E) {
    if (s === "")
      return { data: {}, content: s, excerpt: "", orig: s };
    let T = f(s);
    const F = i.cache[T.content];
    if (!E) {
      if (F)
        return T = Object.assign({}, F), T.orig = F.orig, T;
      i.cache[T.content] = T;
    }
    return t(T, E);
  }
  function t(s, E) {
    const T = S(E), F = T.delimiters[0], I = `
` + T.delimiters[1];
    let D = s.content;
    T.language && (s.language = T.language);
    const M = F.length;
    if (!n.startsWith(D, F, M))
      return p(s, T), s;
    if (D.charAt(M) === F.slice(-1))
      return s;
    D = D.slice(M);
    const B = D.length, Y = i.language(D, T);
    Y.name && (s.language = Y.name, D = D.slice(Y.raw.length));
    let P = D.indexOf(I);
    return P === -1 && (P = B), s.matter = D.slice(0, P), s.matter.replace(/^\s*#[^\n]+/gm, "").trim() === "" ? (s.isEmpty = !0, s.empty = s.content, s.data = {}) : s.data = g(s.language, s.matter, T), P === B ? s.content = "" : (s.content = D.slice(P + I.length), s.content[0] === "\r" && (s.content = s.content.slice(1)), s.content[0] === `
` && (s.content = s.content.slice(1))), p(s, T), (T.sections === !0 || typeof T.section == "function") && x(s, T.section), s;
  }
  return i.engines = c, i.stringify = function(s, E, T) {
    return typeof s == "string" && (s = i(s, T)), u(s, E, T);
  }, i.read = function(s, E) {
    const T = l.readFileSync(s, "utf8"), F = i(T, E);
    return F.path = s, F;
  }, i.test = function(s, E) {
    return n.startsWith(s, S(E).delimiters[0]);
  }, i.language = function(s, E) {
    const F = S(E).delimiters[0];
    i.test(s) && (s = s.slice(F.length));
    const I = s.slice(0, s.search(/\r?\n/));
    return {
      raw: I,
      name: I ? I.trim() : ""
    };
  }, i.cache = {}, i.clearCache = function() {
    i.cache = {};
  }, grayMatter = i, grayMatter;
}
export {
  requireGrayMatter as r
};
//# sourceMappingURL=gray-matter_DUytiCZw.js.map
