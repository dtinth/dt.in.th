import { i as cu } from "./shiki_CE0IyDxo.js";
const Q = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  (function(u) {
    if (u == null)
      return Au;
    if (typeof u == "function")
      return S(u);
    if (typeof u == "object")
      return Array.isArray(u) ? su(u) : iu(u);
    if (typeof u == "string")
      return ou(u);
    throw new Error("Expected function, string, or object as test");
  })
);
function su(u) {
  const F = [];
  let D = -1;
  for (; ++D < u.length; )
    F[D] = Q(u[D]);
  return S(n);
  function n(...e) {
    let r = -1;
    for (; ++r < F.length; )
      if (F[r].apply(this, e)) return !0;
    return !1;
  }
}
function iu(u) {
  const F = (
    /** @type {Record<string, unknown>} */
    u
  );
  return S(D);
  function D(n) {
    const e = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      n
    );
    let r;
    for (r in u)
      if (e[r] !== F[r]) return !1;
    return !0;
  }
}
function ou(u) {
  return S(F);
  function F(D) {
    return D && D.type === u;
  }
}
function S(u) {
  return F;
  function F(D, n, e) {
    return !!(Eu(D) && u.call(
      this,
      D,
      typeof n == "number" ? n : void 0,
      e || void 0
    ));
  }
}
function Au() {
  return !0;
}
function Eu(u) {
  return u !== null && typeof u == "object" && "type" in u;
}
const Z = [], Cu = !0, _ = !1, N = "skip";
function au(u, F, D, n) {
  let e;
  typeof F == "function" && typeof D != "function" ? (n = D, D = F) : e = F;
  const r = Q(e), t = n ? -1 : 1;
  c(u, void 0, [])();
  function c(s, l, A) {
    const C = (
      /** @type {Record<string, unknown>} */
      s && typeof s == "object" ? s : {}
    );
    if (typeof C.type == "string") {
      const o = (
        // `hast`
        typeof C.tagName == "string" ? C.tagName : (
          // `xast`
          typeof C.name == "string" ? C.name : void 0
        )
      );
      Object.defineProperty(i, "name", {
        value: "node (" + (s.type + (o ? "<" + o + ">" : "")) + ")"
      });
    }
    return i;
    function i() {
      let o = Z, E, a, y;
      if ((!F || r(s, l, A[A.length - 1] || void 0)) && (o = fu(D(s, A)), o[0] === _))
        return o;
      if ("children" in s && s.children) {
        const f = (
          /** @type {UnistParent} */
          s
        );
        if (f.children && o[0] !== N)
          for (a = (n ? f.children.length : -1) + t, y = A.concat(f); a > -1 && a < f.children.length; ) {
            const p = f.children[a];
            if (E = c(p, a, y)(), E[0] === _)
              return E;
            a = typeof E[1] == "number" ? E[1] : a + t;
          }
      }
      return o;
    }
  }
}
function fu(u) {
  return Array.isArray(u) ? u : typeof u == "number" ? [Cu, u] : u == null ? Z : [u];
}
function P(u, F, D, n) {
  let e, r, t;
  r = F, t = D, e = n, au(u, r, c, e);
  function c(s, l) {
    const A = l[l.length - 1], C = A ? A.children.indexOf(s) : void 0;
    return t(s, C, A);
  }
}
function R(u) {
  return "children" in u ? v(u) : "value" in u ? u.value : "";
}
function Bu(u) {
  return u.type === "text" ? u.value : "children" in u ? v(u) : "";
}
function v(u) {
  let F = -1;
  const D = [];
  for (; ++F < u.children.length; )
    D[F] = Bu(u.children[F]);
  return D.join("");
}
const lu = {
  "tailing-curly-colon": (u, F) => {
    const D = R(F), n = D.match(/(.+)\{:([\w-]+)\}$/);
    if (n)
      return {
        type: "inline",
        code: n[1] ?? D,
        lang: n.at(2)
      };
  }
}, J = "language-", pu = (u, F) => {
  const D = F.children[0];
  if (!D || D.type !== "element" || D.tagName !== "code" || !D.properties)
    return;
  const n = D.properties.className, e = Array.isArray(n) ? n.find(
    (r) => typeof r == "string" && r.startsWith(J)
  ) : void 0;
  return {
    type: "pre",
    lang: typeof e == "string" ? e.slice(J.length) : void 0,
    code: R(D),
    meta: D.data?.meta ?? D.properties.metastring?.toString() ?? ""
  };
}, gu = "language-";
function Lu(u, F) {
  const {
    addLanguageClass: D = !1,
    parseMetaString: n,
    cache: e,
    defaultLanguage: r,
    fallbackLanguage: t,
    onError: c,
    stripEndNewline: s = !0,
    inline: l = !1,
    lazy: A = !1,
    ...C
  } = F;
  function i(o, E, a = "", y = {}) {
    const f = `${o}:${a}:${E}`, p = e?.get(f);
    if (p)
      return p;
    const g = {
      ...C,
      lang: o,
      meta: {
        ...C.meta,
        ...y,
        __raw: a
      }
    };
    D && (g.transformers = [
      ...g.transformers ?? [],
      {
        name: "rehype-shiki:code-language-class",
        code(B) {
          return this.addClassToHast(B, `${gu}${o}`), B;
        }
      }
    ]), s && E.endsWith(`
`) && (E = E.slice(0, -1));
    try {
      const B = u.codeToHast(E, g);
      return e?.set(f, B), B;
    } catch (B) {
      if (c)
        c(B);
      else
        throw B;
    }
  }
  return (o) => {
    const E = [];
    if (P(o, "element", (a, y, f) => {
      let p;
      if (!f || y == null || (a.tagName === "pre" && (p = pu), a.tagName === "code" && l && (p = lu[l]), !p))
        return;
      const g = p(o, a);
      if (!g)
        return;
      let B, H = !1;
      if (g.lang ? u.getLoadedLanguages().includes(g.lang) || cu(g.lang) ? B = g.lang : A ? (H = !0, B = g.lang) : t && (B = t) : B = r, !B)
        return;
      const U = () => {
        const ru = g.meta ? n?.(g.meta, a, o) : void 0, j = i(B, g.code, g.meta, ru ?? {});
        if (j) {
          if (g.type === "inline") {
            const x = j.children[0];
            x.type === "element" && x.tagName === "pre" && (x.tagName = "span");
          }
          f.children[y] = j;
        }
      };
      return H ? E.push(u.loadLanguage(B).then(() => U())) : U(), "skip";
    }), E.length > 0) {
      async function a() {
        await Promise.all(E);
      }
      return a();
    }
  };
}
const uu = -1, O = 0, m = 1, k = 2, T = 3, L = 4, M = 5, V = 6, Du = 7, Fu = 8, Y = typeof self == "object" ? self : globalThis, yu = (u, F) => {
  const D = (e, r) => (u.set(r, e), e), n = (e) => {
    if (u.has(e))
      return u.get(e);
    const [r, t] = F[e];
    switch (r) {
      case O:
      case uu:
        return D(t, e);
      case m: {
        const c = D([], e);
        for (const s of t)
          c.push(n(s));
        return c;
      }
      case k: {
        const c = D({}, e);
        for (const [s, l] of t)
          c[n(s)] = n(l);
        return c;
      }
      case T:
        return D(new Date(t), e);
      case L: {
        const { source: c, flags: s } = t;
        return D(new RegExp(c, s), e);
      }
      case M: {
        const c = D(/* @__PURE__ */ new Map(), e);
        for (const [s, l] of t)
          c.set(n(s), n(l));
        return c;
      }
      case V: {
        const c = D(/* @__PURE__ */ new Set(), e);
        for (const s of t)
          c.add(n(s));
        return c;
      }
      case Du: {
        const { name: c, message: s } = t;
        return D(new Y[c](s), e);
      }
      case Fu:
        return D(BigInt(t), e);
      case "BigInt":
        return D(Object(BigInt(t)), e);
      case "ArrayBuffer":
        return D(new Uint8Array(t).buffer, t);
      case "DataView": {
        const { buffer: c } = new Uint8Array(t);
        return D(new DataView(c), t);
      }
    }
    return D(new Y[r](t), e);
  };
  return n;
}, G = (u) => yu(/* @__PURE__ */ new Map(), u)(0), h = "", { toString: hu } = {}, { keys: du } = Object, d = (u) => {
  const F = typeof u;
  if (F !== "object" || !u)
    return [O, F];
  const D = hu.call(u).slice(8, -1);
  switch (D) {
    case "Array":
      return [m, h];
    case "Object":
      return [k, h];
    case "Date":
      return [T, h];
    case "RegExp":
      return [L, h];
    case "Map":
      return [M, h];
    case "Set":
      return [V, h];
    case "DataView":
      return [m, D];
  }
  return D.includes("Array") ? [m, D] : D.includes("Error") ? [Du, D] : [k, D];
}, w = ([u, F]) => u === O && (F === "function" || F === "symbol"), mu = (u, F, D, n) => {
  const e = (t, c) => {
    const s = n.push(t) - 1;
    return D.set(c, s), s;
  }, r = (t) => {
    if (D.has(t))
      return D.get(t);
    let [c, s] = d(t);
    switch (c) {
      case O: {
        let A = t;
        switch (s) {
          case "bigint":
            c = Fu, A = t.toString();
            break;
          case "function":
          case "symbol":
            if (u)
              throw new TypeError("unable to serialize " + s);
            A = null;
            break;
          case "undefined":
            return e([uu], t);
        }
        return e([c, A], t);
      }
      case m: {
        if (s) {
          let i = t;
          return s === "DataView" ? i = new Uint8Array(t.buffer) : s === "ArrayBuffer" && (i = new Uint8Array(t)), e([s, [...i]], t);
        }
        const A = [], C = e([c, A], t);
        for (const i of t)
          A.push(r(i));
        return C;
      }
      case k: {
        if (s)
          switch (s) {
            case "BigInt":
              return e([s, t.toString()], t);
            case "Boolean":
            case "Number":
            case "String":
              return e([s, t.valueOf()], t);
          }
        if (F && "toJSON" in t)
          return r(t.toJSON());
        const A = [], C = e([c, A], t);
        for (const i of du(t))
          (u || !w(d(t[i]))) && A.push([r(i), r(t[i])]);
        return C;
      }
      case T:
        return e([c, t.toISOString()], t);
      case L: {
        const { source: A, flags: C } = t;
        return e([c, { source: A, flags: C }], t);
      }
      case M: {
        const A = [], C = e([c, A], t);
        for (const [i, o] of t)
          (u || !(w(d(i)) || w(d(o)))) && A.push([r(i), r(o)]);
        return C;
      }
      case V: {
        const A = [], C = e([c, A], t);
        for (const i of t)
          (u || !w(d(i))) && A.push(r(i));
        return C;
      }
    }
    const { message: l } = t;
    return e([c, { name: s, message: l }], t);
  };
  return r;
}, K = (u, { json: F, lossy: D } = {}) => {
  const n = [];
  return mu(!(F || D), !!F, /* @__PURE__ */ new Map(), n)(u), n;
}, wu = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (u, F) => F && ("json" in F || "lossy" in F) ? G(K(u, F)) : structuredClone(u)
) : (u, F) => G(K(u, F));
function eu(u) {
  const F = u.type === "element" ? u.tagName.toLowerCase() : "", D = F.length === 2 && F.charCodeAt(0) === 104 ? F.charCodeAt(1) : 0;
  return D > 48 && D < 55 ? D - 48 : void 0;
}
const tu = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends TestFunction>(test: Condition) => (element: unknown, index?: number | null | undefined, parent?: Parents | null | undefined, context?: unknown) => element is Element & Predicate<Condition, Element>) &
   *   (<Condition extends string>(test: Condition) => (element: unknown, index?: number | null | undefined, parent?: Parents | null | undefined, context?: unknown) => element is Element & {tagName: Condition}) &
   *   ((test?: null | undefined) => (element?: unknown, index?: number | null | undefined, parent?: Parents | null | undefined, context?: unknown) => element is Element) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test | null | undefined} [test]
   * @returns {Check}
   */
  (function(u) {
    if (u == null)
      return ku;
    if (typeof u == "string")
      return Nu(u);
    if (typeof u == "object")
      return bu(u);
    if (typeof u == "function")
      return $(u);
    throw new Error("Expected function, string, or array as `test`");
  })
);
function bu(u) {
  const F = [];
  let D = -1;
  for (; ++D < u.length; )
    F[D] = tu(u[D]);
  return $(n);
  function n(...e) {
    let r = -1;
    for (; ++r < F.length; )
      if (F[r].apply(this, e)) return !0;
    return !1;
  }
}
function Nu(u) {
  return $(F);
  function F(D) {
    return D.tagName === u;
  }
}
function $(u) {
  return F;
  function F(D, n, e) {
    return !!(Su(D) && u.call(
      this,
      D,
      typeof n == "number" ? n : void 0,
      e || void 0
    ));
  }
}
function ku(u) {
  return !!(u && typeof u == "object" && "type" in u && u.type === "element" && "tagName" in u && typeof u.tagName == "string");
}
function Su(u) {
  return u !== null && typeof u == "object" && "type" in u && "tagName" in u;
}
const W = {
  type: "element",
  tagName: "span",
  properties: { className: ["icon", "icon-link"] },
  children: []
}, Ou = {};
function Mu(u) {
  const F = u || Ou;
  let D = F.properties;
  const n = F.headingProperties, e = F.behavior || "prepend", r = F.content, t = F.group, c = tu(F.test);
  let s;
  return e === "after" || e === "before" ? s = A : e === "wrap" ? s = C : (s = l, D || (D = { ariaHidden: "true", tabIndex: -1 })), function(i) {
    P(i, "element", function(o, E, a) {
      if (eu(o) && o.properties.id && c(o, E, a))
        return Object.assign(o.properties, b(n, o)), s(o, E, a);
    });
  };
  function l(i) {
    const o = X(r || W, i);
    return i.children[e === "prepend" ? "unshift" : "push"](
      I(i, b(D, i), o)
    ), [N];
  }
  function A(i, o, E) {
    if (typeof o != "number" || !E) return;
    const a = X(r || W, i), y = I(i, b(D, i), a);
    let f = e === "before" ? [y, i] : [i, y];
    if (t) {
      const p = nu(t, i);
      p && !Array.isArray(p) && p.type === "element" && (p.children = f, f = [p]);
    }
    return E.children.splice(o, 1, ...f), [N, o + f.length];
  }
  function C(i) {
    let o = i.children, E = [];
    return typeof r == "function" ? (o = [], E = r(i)) : r && (E = z(r)), i.children = [
      I(
        i,
        b(D, i),
        Array.isArray(E) ? [...o, ...E] : [...o, E]
      )
    ], [N];
  }
}
function z(u) {
  return (
    /** @type {Cloneable<T>} */
    wu(u)
  );
}
function I(u, F, D) {
  return {
    type: "element",
    tagName: "a",
    properties: { ...F, href: "#" + u.properties.id },
    children: D
  };
}
function X(u, F) {
  const D = nu(u, F);
  return Array.isArray(D) ? D : [D];
}
function nu(u, F) {
  return typeof u == "function" ? u(F) : z(u);
}
function b(u, F) {
  return typeof u == "function" ? u(F) : u ? z(u) : {};
}
const ju = /[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g, xu = Object.hasOwnProperty;
class Iu {
  /**
   * Create a new slug class.
   */
  constructor() {
    this.occurrences, this.reset();
  }
  /**
   * Generate a unique slug.
  *
  * Tracks previously generated slugs: repeated calls with the same value
  * will result in different slugs.
  * Use the `slug` function to get same slugs.
   *
   * @param  {string} value
   *   String of text to slugify
   * @param  {boolean} [maintainCase=false]
   *   Keep the current case, otherwise make all lowercase
   * @return {string}
   *   A unique slug string
   */
  slug(F, D) {
    const n = this;
    let e = Pu(F, D === !0);
    const r = e;
    for (; xu.call(n.occurrences, e); )
      n.occurrences[r]++, e = r + "-" + n.occurrences[r];
    return n.occurrences[e] = 0, e;
  }
  /**
   * Reset - Forget all previous slugs
   *
   * @return void
   */
  reset() {
    this.occurrences = /* @__PURE__ */ Object.create(null);
  }
}
function Pu(u, F) {
  return typeof u != "string" ? "" : (F || (u = u.toLowerCase()), u.replace(ju, "").replace(/ /g, "-"));
}
const Ru = {}, q = new Iu();
function Vu(u) {
  const D = (u || Ru).prefix || "";
  return function(n) {
    q.reset(), P(n, "element", function(e) {
      eu(e) && !e.properties.id && (e.properties.id = D + q.slug(R(e)));
    });
  };
}
const $u = (u) => {
  const {
    hoistStyle: F = !0,
    hoistScript: D = !0
  } = u || {};
  return (n) => {
    const e = [], r = [], t = {
      type: "element",
      tagName: "template",
      properties: {},
      children: [],
      content: {
        type: "root",
        children: n.children.filter((c) => F && c.type === "element" && c.tagName === "style" ? (r.push(c), !1) : D && c.type === "element" && c.tagName === "script" ? (e.push(c), !1) : !0)
      }
    };
    return n.children = [
      ...e,
      t,
      ...r
    ], n;
  };
};
export {
  Mu as a,
  Lu as b,
  $u as c,
  Vu as r
};
//# sourceMappingURL=rehype-plugins_BbrP8Grd.js.map
