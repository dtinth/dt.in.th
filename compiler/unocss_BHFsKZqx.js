const Pt = "default", ie = "preflights", Vn = "shortcuts", Yn = "imports", Xn = {
  [Yn]: -200,
  [ie]: -100,
  [Vn]: -10,
  [Pt]: 0
}, ar = /[\\:]?[\s'"`;{}]+/g;
function qn(t) {
  return t.split(ar);
}
const Hn = {
  name: "@unocss/core/extractor-split",
  order: 0,
  extract({ code: t }) {
    return qn(t);
  }
};
function O(t = []) {
  return Array.isArray(t) ? t : [t];
}
function X(t) {
  return Array.from(new Set(t));
}
function ke(t, e) {
  return t.reduce((r, n) => (r.findIndex((i) => e(n, i)) === -1 && r.push(n), r), []);
}
function A(t) {
  return typeof t == "string";
}
var Gn = Object.defineProperty, Kn = (t, e, r) => e in t ? Gn(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Zn = (t, e, r) => (Kn(t, e + "", r), r);
class sr extends Set {
  constructor(e) {
    super(e), Zn(this, "_map"), this._map ?? (this._map = /* @__PURE__ */ new Map());
  }
  add(e) {
    return this._map ?? (this._map = /* @__PURE__ */ new Map()), this._map.set(e, (this._map.get(e) ?? 0) + 1), super.add(e);
  }
  delete(e) {
    return this._map.delete(e), super.delete(e);
  }
  clear() {
    this._map.clear(), super.clear();
  }
  getCount(e) {
    return this._map.get(e) ?? 0;
  }
  setCount(e, r) {
    return this._map.set(e, r), super.add(e);
  }
}
function Zt(t) {
  return t instanceof sr;
}
function yt(t) {
  return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function gt(t) {
  const e = t.length;
  let r = -1, n, o = "";
  const i = t.charCodeAt(0);
  for (; ++r < e; ) {
    if (n = t.charCodeAt(r), n === 0) {
      o += "�";
      continue;
    }
    if (n === 37) {
      o += "\\%";
      continue;
    }
    if (n === 44) {
      o += "\\,";
      continue;
    }
    if (
      // If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
      // U+007F, […]
      n >= 1 && n <= 31 || n === 127 || r === 0 && n >= 48 && n <= 57 || r === 1 && n >= 48 && n <= 57 && i === 45
    ) {
      o += `\\${n.toString(16)} `;
      continue;
    }
    if (
      // If the character is the first character and is a `-` (U+002D), and
      // there is no second character, […]
      r === 0 && e === 1 && n === 45
    ) {
      o += `\\${t.charAt(r)}`;
      continue;
    }
    if (n >= 128 || n === 45 || n === 95 || n >= 48 && n <= 57 || n >= 65 && n <= 90 || n >= 97 && n <= 122) {
      o += t.charAt(r);
      continue;
    }
    o += `\\${t.charAt(r)}`;
  }
  return o;
}
const Jt = gt, Jn = /[\w\u00A0-\uFFFF%-?]/;
function Qn(t = "") {
  return Jn.test(t);
}
function to(t) {
  return typeof t == "function" ? { match: t } : t;
}
function Se(t) {
  return t.length === 3;
}
function Ce(t) {
  return t != null;
}
function eo() {
}
var ro = Object.defineProperty, no = (t, e, r) => e in t ? ro(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, oo = (t, e, r) => (no(t, e + "", r), r);
class io {
  constructor() {
    oo(this, "_map", /* @__PURE__ */ new Map());
  }
  get(e, r) {
    const n = this._map.get(e);
    if (n)
      return n.get(r);
  }
  getFallback(e, r, n) {
    let o = this._map.get(e);
    return o || (o = /* @__PURE__ */ new Map(), this._map.set(e, o)), o.has(r) || o.set(r, n), o.get(r);
  }
  set(e, r, n) {
    let o = this._map.get(e);
    return o || (o = /* @__PURE__ */ new Map(), this._map.set(e, o)), o.set(r, n), this;
  }
  has(e, r) {
    return this._map.get(e)?.has(r);
  }
  delete(e, r) {
    return this._map.get(e)?.delete(r) || !1;
  }
  deleteTop(e) {
    return this._map.delete(e);
  }
  map(e) {
    return Array.from(this._map.entries()).flatMap(([r, n]) => Array.from(n.entries()).map(([o, i]) => e(i, r, o)));
  }
}
class ao extends Map {
  getFallback(e, r) {
    const n = this.get(e);
    return n === void 0 ? (this.set(e, r), r) : n;
  }
  map(e) {
    const r = [];
    return this.forEach((n, o) => {
      r.push(e(n, o));
    }), r;
  }
  flatMap(e) {
    const r = [];
    return this.forEach((n, o) => {
      r.push(...e(n, o));
    }), r;
  }
}
function bt(t) {
  return A(t) ? t : (Array.isArray(t) ? t : Object.entries(t)).filter((e) => e[1] != null);
}
function so(t) {
  return Array.isArray(t) ? t.find((e) => !Array.isArray(e) || Array.isArray(e[0])) ? t.map((e) => bt(e)) : [t] : [bt(t)];
}
function co(t) {
  return t.filter(([e, r], n) => {
    if (e.startsWith("$$"))
      return !1;
    for (let o = n - 1; o >= 0; o--)
      if (t[o][0] === e && t[o][1] === r)
        return !1;
    return !0;
  });
}
function Mt(t) {
  return t == null ? "" : co(t).map(([e, r]) => r != null && typeof r != "function" ? `${e}:${r};` : void 0).filter(Boolean).join("");
}
function kt(t) {
  return t && typeof t == "object" && !Array.isArray(t);
}
function cr(t, e, r = !1) {
  const n = t, o = e;
  if (Array.isArray(o))
    return r && Array.isArray(o) ? [...n, ...o] : [...o];
  const i = { ...n };
  return kt(n) && kt(o) && Object.keys(o).forEach((a) => {
    kt(n[a]) && kt(o[a]) || Array.isArray(n[a]) && Array.isArray(o[a]) ? i[a] = cr(n[a], o[a], r) : Object.assign(i, { [a]: o[a] });
  }), i;
}
function Ft(t) {
  let e, r, n;
  if (Array.isArray(t)) {
    for (r = Array.from({ length: e = t.length }); e--; )
      r[e] = (n = t[e]) && typeof n == "object" ? Ft(n) : n;
    return r;
  }
  if (Object.prototype.toString.call(t) === "[object Object]") {
    r = {};
    for (e in t)
      e === "__proto__" ? Object.defineProperty(r, e, {
        value: Ft(t[e]),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : r[e] = (n = t[e]) && typeof n == "object" ? Ft(n) : n;
    return r;
  }
  return t;
}
function lo(t) {
  return A(t[0]);
}
function fo(t) {
  return A(t[0]);
}
const St = {};
function uo(t = ["-", ":"]) {
  const e = t.join("|");
  return St[e] || (St[e] = new RegExp(`((?:[!@<~\\w+:_/-]|\\[&?>?:?\\S*\\])+?)(${e})\\(((?:[~!<>\\w\\s:/\\\\,%#.$?-]|\\[.*?\\])+?)\\)(?!\\s*?=>)`, "gm")), St[e].lastIndex = 0, St[e];
}
function po(t, e = ["-", ":"], r = 5) {
  const n = uo(e);
  let o, i = t.toString();
  const a = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map();
  do
    o = !1, i = i.replace(
      n,
      (f, u, d, m, h) => {
        if (!e.includes(d))
          return f;
        o = !0, a.add(u + d);
        const b = h + u.length + d.length + 1, y = { length: f.length, items: [] };
        s.set(h, y);
        for (const w of [...m.matchAll(/\S+/g)]) {
          const C = b + w.index;
          let g = s.get(C)?.items;
          g ? s.delete(C) : g = [{
            offset: C,
            length: w[0].length,
            className: w[0]
          }];
          for (const $ of g)
            $.className = $.className === "~" ? u : $.className.replace(/^(!?)(.*)/, `$1${u}${d}$2`), y.items.push($);
        }
        return "$".repeat(f.length);
      }
    ), r -= 1;
  while (o && r);
  let c;
  if (typeof t == "string") {
    c = "";
    let f = 0;
    for (const [u, d] of s)
      c += t.slice(f, u), c += d.items.map((m) => m.className).join(" "), f = u + d.length;
    c += t.slice(f);
  } else {
    c = t;
    for (const [f, u] of s)
      c.overwrite(
        f,
        f + u.length,
        u.items.map((d) => d.className).join(" ")
      );
  }
  return {
    prefixes: Array.from(a),
    hasChanged: o,
    groupsByOffset: s,
    // Computed lazily because MagicString's toString does a lot of work
    get expanded() {
      return c.toString();
    }
  };
}
function mo(t, e = ["-", ":"], r = 5) {
  const n = po(t, e, r);
  return typeof t == "string" ? n.expanded : t;
}
const ze = /* @__PURE__ */ new Set();
function Dt(t) {
  ze.has(t) || (console.warn("[unocss]", t), ze.add(t));
}
function lr(t) {
  return O(t).flatMap((e) => Array.isArray(e) ? [e] : Object.entries(e));
}
const je = "_uno_resolved";
function ho(t) {
  let e = typeof t == "function" ? t() : t;
  if (je in e)
    return e;
  e = { ...e }, Object.defineProperty(e, je, {
    value: !0,
    enumerable: !1
  });
  const r = e.shortcuts ? lr(e.shortcuts) : void 0;
  if (e.shortcuts = r, e.prefix || e.layer) {
    const n = (o) => {
      o[2] || (o[2] = {});
      const i = o[2];
      i.prefix == null && e.prefix && (i.prefix = O(e.prefix)), i.layer == null && e.layer && (i.layer = e.layer);
    };
    r?.forEach(n), e.rules?.forEach(n);
  }
  return e;
}
function fr(t) {
  const e = ho(t);
  if (!e.presets)
    return [e];
  const r = (e.presets || []).flatMap(O).flatMap(fr);
  return [e, ...r];
}
function go(t) {
  if (t.length === 0)
    return {};
  const e = [], r = [];
  let n = !1;
  for (const o of t)
    o.pipeline === !1 ? n = !0 : (e.push(o.pipeline?.include ?? []), r.push(o.pipeline?.exclude ?? []));
  return {
    filesystem: X(t.flatMap((o) => o.filesystem ?? [])),
    inline: X(t.flatMap((o) => o.inline ?? [])),
    plain: X(t.flatMap((o) => o.plain ?? [])),
    pipeline: n ? !1 : {
      include: X(Ae(...e)),
      exclude: X(Ae(...r))
    }
  };
}
function Ee(t = {}, e = {}) {
  const r = Object.assign({}, e, t), n = ke((r.presets || []).flatMap(O).flatMap(fr), (p, v) => p.name === v.name), o = [
    ...n.filter((p) => p.enforce === "pre"),
    ...n.filter((p) => !p.enforce),
    ...n.filter((p) => p.enforce === "post")
  ], i = [
    ...o,
    r
  ], a = [...i].reverse(), s = Object.assign({}, Xn, ...i.map((p) => p.layers));
  function c(p) {
    return X(i.flatMap((v) => O(v[p] || [])));
  }
  const f = c("extractors");
  let u = a.find((p) => p.extractorDefault !== void 0)?.extractorDefault;
  u === void 0 && (u = Hn), u && !f.includes(u) && f.unshift(u), f.sort((p, v) => (p.order || 0) - (v.order || 0));
  const d = c("rules"), m = {}, h = d.length, b = d.map((p, v) => {
    if (lo(p)) {
      O(p[2]?.prefix || "").forEach((W) => {
        m[W + p[0]] = [v, p[1], p[2], p];
      });
      return;
    }
    return [v, ...p];
  }).filter(Boolean).reverse();
  let y = bo(i.map((p) => p.theme));
  const w = c("extendTheme");
  for (const p of w)
    y = p(y) || y;
  const C = {
    templates: X(i.flatMap((p) => O(p.autocomplete?.templates))),
    extractors: i.flatMap((p) => O(p.autocomplete?.extractors)).sort((p, v) => (p.order || 0) - (v.order || 0)),
    shorthands: yo(i.map((p) => p.autocomplete?.shorthands || {}))
  };
  let g = c("separators");
  g.length || (g = [":", "-"]);
  const $ = c("content"), z = go($), k = {
    mergeSelectors: !0,
    warn: !0,
    sortLayers: (p) => p,
    ...r,
    blocklist: c("blocklist"),
    presets: o,
    envMode: r.envMode || "build",
    shortcutsLayer: r.shortcutsLayer || "shortcuts",
    layers: s,
    theme: y,
    rulesSize: h,
    rulesDynamic: b,
    rulesStaticMap: m,
    preprocess: c("preprocess"),
    postprocess: c("postprocess"),
    preflights: c("preflights"),
    autocomplete: C,
    variants: c("variants").map(to).sort((p, v) => (p.order || 0) - (v.order || 0)),
    shortcuts: lr(c("shortcuts")).reverse(),
    extractors: f,
    safelist: c("safelist"),
    separators: g,
    details: r.details ?? r.envMode === "dev",
    content: z,
    transformers: ke(c("transformers"), (p, v) => p.name === v.name)
  };
  for (const p of i)
    p?.configResolved?.(k);
  return k;
}
function bo(t) {
  return t.map((e) => e ? Ft(e) : {}).reduce((e, r) => cr(e, r), {});
}
function yo(t) {
  return t.reduce((e, r) => {
    const n = {};
    for (const o in r) {
      const i = r[o];
      Array.isArray(i) ? n[o] = `(${i.join("|")})` : n[o] = i;
    }
    return {
      ...e,
      ...n
    };
  }, {});
}
function Ae(...t) {
  return t.flatMap(xo);
}
function xo(t) {
  return Array.isArray(t) ? t : t ? [t] : [];
}
const $o = "0.62.4";
function vo() {
  return {
    events: {},
    emit(t, ...e) {
      (this.events[t] || []).forEach((r) => r(...e));
    },
    on(t, e) {
      return (this.events[t] = this.events[t] || []).push(e), () => this.events[t] = (this.events[t] || []).filter((r) => r !== e);
    }
  };
}
var wo = Object.defineProperty, ko = (t, e, r) => e in t ? wo(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Q = (t, e, r) => (ko(t, typeof e != "symbol" ? e + "" : e, r), r);
const tt = {
  shortcutsNoMerge: "$$symbol-shortcut-no-merge",
  variants: "$$symbol-variants",
  parent: "$$symbol-parent",
  selector: "$$symbol-selector"
};
class So {
  constructor(e = {}, r = {}) {
    this.userConfig = e, this.defaults = r, Q(this, "version", $o), Q(this, "_cache", /* @__PURE__ */ new Map()), Q(this, "config"), Q(this, "blocked", /* @__PURE__ */ new Set()), Q(this, "parentOrders", /* @__PURE__ */ new Map()), Q(this, "events", vo()), this.config = Ee(e, r), this.events.emit("config", this.config);
  }
  setConfig(e, r) {
    e && (r && (this.defaults = r), this.userConfig = e, this.blocked.clear(), this.parentOrders.clear(), this._cache.clear(), this.config = Ee(e, this.defaults), this.events.emit("config", this.config));
  }
  async applyExtractors(e, r, n = /* @__PURE__ */ new Set()) {
    const o = {
      original: e,
      code: e,
      id: r,
      extracted: n,
      envMode: this.config.envMode
    };
    for (const i of this.config.extractors) {
      const a = await i.extract?.(o);
      if (a)
        if (Zt(a) && Zt(n))
          for (const s of a)
            n.setCount(s, n.getCount(s) + a.getCount(s));
        else
          for (const s of a)
            n.add(s);
    }
    return n;
  }
  makeContext(e, r) {
    const n = {
      rawSelector: e,
      currentSelector: r[1],
      theme: this.config.theme,
      generator: this,
      symbols: tt,
      variantHandlers: r[2],
      constructCSS: (...o) => this.constructCustomCSS(n, ...o),
      variantMatch: r
    };
    return n;
  }
  async parseToken(e, r) {
    if (this.blocked.has(e))
      return;
    const n = `${e}${r ? ` ${r}` : ""}`;
    if (this._cache.has(n))
      return this._cache.get(n);
    let o = e;
    for (const f of this.config.preprocess)
      o = f(e);
    if (this.isBlocked(o)) {
      this.blocked.add(e), this._cache.set(n, null);
      return;
    }
    const i = await this.matchVariants(e, o);
    if (!i || this.isBlocked(i[1])) {
      this.blocked.add(e), this._cache.set(n, null);
      return;
    }
    const a = this.makeContext(e, [r || i[0], i[1], i[2], i[3]]);
    this.config.details && (a.variants = [...i[3]]);
    const s = await this.expandShortcut(a.currentSelector, a), c = s ? await this.stringifyShortcuts(a.variantMatch, a, s[0], s[1]) : (await this.parseUtil(a.variantMatch, a))?.map((f) => this.stringifyUtil(f, a)).filter(Ce);
    if (c?.length)
      return this._cache.set(n, c), c;
    this._cache.set(n, null);
  }
  async generate(e, r = {}) {
    const {
      id: n,
      scope: o,
      preflights: i = !0,
      safelist: a = !0,
      minify: s = !1,
      extendedInfo: c = !1
    } = r, f = this.config.outputToCssLayers, u = A(e) ? await this.applyExtractors(
      e,
      n,
      c ? new sr() : /* @__PURE__ */ new Set()
    ) : Array.isArray(e) ? new Set(e) : e;
    if (a) {
      const k = {
        generator: this,
        theme: this.config.theme
      };
      this.config.safelist.flatMap((p) => typeof p == "function" ? p(k) : p).forEach((p) => {
        u.has(p) || u.add(p);
      });
    }
    const d = s ? "" : `
`, m = /* @__PURE__ */ new Set([Pt]), h = c ? /* @__PURE__ */ new Map() : /* @__PURE__ */ new Set(), b = /* @__PURE__ */ new Map();
    let y = {};
    const w = Array.from(u).map(async (k) => {
      if (h.has(k))
        return;
      const p = await this.parseToken(k);
      if (p != null) {
        h instanceof Map ? h.set(k, {
          data: p,
          count: Zt(u) ? u.getCount(k) : -1
        }) : h.add(k);
        for (const v of p) {
          const _ = v[3] || "", W = v[4]?.layer;
          b.has(_) || b.set(_, []), b.get(_).push(v), W && m.add(W);
        }
      }
    });
    await Promise.all(w), await (async () => {
      if (!i)
        return;
      const k = {
        generator: this,
        theme: this.config.theme
      }, p = /* @__PURE__ */ new Set([]);
      this.config.preflights.forEach(({ layer: v = ie }) => {
        m.add(v), p.add(v);
      }), y = Object.fromEntries(
        await Promise.all(Array.from(p).map(
          async (v) => {
            const W = (await Promise.all(
              this.config.preflights.filter((st) => (st.layer || ie) === v).map(async (st) => await st.getCSS(k))
            )).filter(Boolean).join(d);
            return [v, W];
          }
        ))
      );
    })();
    const C = this.config.sortLayers(Array.from(m).sort((k, p) => (this.config.layers[k] ?? 0) - (this.config.layers[p] ?? 0) || k.localeCompare(p))), g = {}, $ = (k = Pt) => {
      if (g[k])
        return g[k];
      let p = Array.from(b).sort((_, W) => (this.parentOrders.get(_[0]) ?? 0) - (this.parentOrders.get(W[0]) ?? 0) || _[0]?.localeCompare(W[0] || "") || 0).map(([_, W]) => {
        const st = W.length, Ht = W.filter((L) => (L[4]?.layer || Pt) === k).sort((L, N) => L[0] - N[0] || (L[4]?.sort || 0) - (N[4]?.sort || 0) || L[5]?.currentSelector?.localeCompare(N[5]?.currentSelector ?? "") || L[1]?.localeCompare(N[1] || "") || L[2]?.localeCompare(N[2] || "") || 0).map(([, L, N, , wt, , Gt]) => [
          [[(L && zo(L, o)) ?? "", wt?.sort ?? 0]],
          N,
          !!(Gt ?? wt?.noMerge)
        ]);
        if (!Ht.length)
          return;
        const ve = Ht.reverse().map(([L, N, wt], Gt) => {
          if (!wt && this.config.mergeSelectors)
            for (let H = Gt + 1; H < st; H++) {
              const D = Ht[H];
              if (D && !D[2] && (L && D[0] || L == null && D[0] == null) && D[1] === N)
                return L && D[0] && D[0].push(...L), null;
            }
          const Kt = L ? X(L.sort((H, D) => H[1] - D[1] || H[0]?.localeCompare(D[0] || "") || 0).map((H) => H[0]).filter(Boolean)) : [];
          return Kt.length ? `${Kt.join(`,${d}`)}{${N}}` : N;
        }).filter(Boolean).reverse().join(d);
        if (!_)
          return ve;
        const we = _.split(" $$ ");
        return `${we.join("{")}{${d}${ve}${d}${"}".repeat(we.length)}`;
      }).filter(Boolean).join(d);
      if (i && (p = [y[k], p].filter(Boolean).join(d)), f && p) {
        let _ = typeof f == "object" ? f.cssLayerName?.(k) : void 0;
        _ !== null && (_ || (_ = k), p = `@layer ${_}{${d}${p}${d}}`);
      }
      const v = s ? "" : `/* layer: ${k} */${d}`;
      return g[k] = p ? v + p : "";
    }, z = (k = C, p) => k.filter((v) => !p?.includes(v)).map((v) => $(v) || "").filter(Boolean).join(d);
    return {
      get css() {
        return z();
      },
      layers: C,
      matched: h,
      getLayers: z,
      getLayer: $
    };
  }
  async matchVariants(e, r) {
    const n = /* @__PURE__ */ new Set(), o = [];
    let i = r || e, a = !0;
    const s = {
      rawSelector: e,
      theme: this.config.theme,
      generator: this
    };
    for (; a; ) {
      a = !1;
      for (const c of this.config.variants) {
        if (!c.multiPass && n.has(c))
          continue;
        let f = await c.match(i, s);
        if (f) {
          if (A(f)) {
            if (f === i)
              continue;
            f = { matcher: f };
          }
          i = f.matcher ?? i, o.unshift(f), n.add(c), a = !0;
          break;
        }
      }
      if (!a)
        break;
      if (o.length > 500)
        throw new Error(`Too many variants applied to "${e}"`);
    }
    return [e, i, o, n];
  }
  applyVariants(e, r = e[4], n = e[1]) {
    const i = r.slice().sort((f, u) => (f.order || 0) - (u.order || 0)).reduceRight(
      (f, u) => (d) => {
        const m = u.body?.(d.entries) || d.entries, h = Array.isArray(u.parent) ? u.parent : [u.parent, void 0];
        return (u.handle ?? Eo)({
          ...d,
          entries: m,
          selector: u.selector?.(d.selector, m) || d.selector,
          parent: h[0] || d.parent,
          parentOrder: h[1] || d.parentOrder,
          layer: u.layer || d.layer,
          sort: u.sort || d.sort
        }, f);
      },
      (f) => f
    )({
      prefix: "",
      selector: jo(n),
      pseudo: "",
      entries: e[2]
    }), { parent: a, parentOrder: s } = i;
    a != null && s != null && this.parentOrders.set(a, s);
    const c = {
      selector: [
        i.prefix,
        i.selector,
        i.pseudo
      ].join(""),
      entries: i.entries,
      parent: a,
      layer: i.layer,
      sort: i.sort,
      noMerge: i.noMerge
    };
    for (const f of this.config.postprocess)
      f(c);
    return c;
  }
  constructCustomCSS(e, r, n) {
    const o = bt(r);
    if (A(o))
      return o;
    const { selector: i, entries: a, parent: s } = this.applyVariants([0, n || e.rawSelector, o, void 0, e.variantHandlers]), c = `${i}{${Mt(a)}}`;
    return s ? `${s}{${c}}` : c;
  }
  async parseUtil(e, r, n = !1, o) {
    const [i, a, s] = A(e) ? await this.matchVariants(e) : e;
    this.config.details && (r.rules = r.rules ?? []);
    const c = this.config.rulesStaticMap[a];
    if (c && c[1] && (n || !c[2]?.internal)) {
      this.config.details && r.rules.push(c[3]);
      const u = c[0], d = bt(c[1]), m = c[2];
      return A(d) ? [[u, d, m]] : [[u, i, d, m, s]];
    }
    r.variantHandlers = s;
    const { rulesDynamic: f } = this.config;
    for (const [u, d, m, h] of f) {
      if (h?.internal && !n)
        continue;
      let b = a;
      if (h?.prefix) {
        const g = O(h.prefix);
        if (o) {
          const $ = O(o);
          if (!g.some((z) => $.includes(z)))
            continue;
        } else {
          const $ = g.find((z) => a.startsWith(z));
          if ($ == null)
            continue;
          b = a.slice($.length);
        }
      }
      const y = b.match(d);
      if (!y)
        continue;
      let w = await m(y, r);
      if (!w)
        continue;
      if (this.config.details && r.rules.push([d, m, h]), typeof w != "string")
        if (Symbol.asyncIterator in w) {
          const g = [];
          for await (const $ of w)
            $ && g.push($);
          w = g;
        } else Symbol.iterator in w && !Array.isArray(w) && (w = Array.from(w).filter(Ce));
      const C = so(w).filter((g) => g.length);
      if (C.length)
        return C.map((g) => {
          if (A(g))
            return [u, g, h];
          let $ = s;
          for (const z of g)
            z[0] === tt.variants ? $ = [
              ...O(z[1]),
              ...$
            ] : z[0] === tt.parent ? $ = [
              { parent: z[1] },
              ...$
            ] : z[0] === tt.selector && ($ = [
              { selector: z[1] },
              ...$
            ]);
          return [u, i, g, h, $];
        });
    }
  }
  stringifyUtil(e, r) {
    if (!e)
      return;
    if (Se(e))
      return [e[0], void 0, e[1], void 0, e[2], this.config.details ? r : void 0, void 0];
    const {
      selector: n,
      entries: o,
      parent: i,
      layer: a,
      sort: s,
      noMerge: c
    } = this.applyVariants(e), f = Mt(o);
    if (!f)
      return;
    const { layer: u, sort: d, ...m } = e[3] ?? {}, h = {
      ...m,
      layer: a ?? u,
      sort: s ?? d
    };
    return [e[0], n, f, i, h, this.config.details ? r : void 0, c];
  }
  async expandShortcut(e, r, n = 5) {
    if (n === 0)
      return;
    const o = this.config.details ? (s) => {
      r.shortcuts = r.shortcuts ?? [], r.shortcuts.push(s);
    } : eo;
    let i, a;
    for (const s of this.config.shortcuts) {
      let c = e;
      if (s[2]?.prefix) {
        const u = O(s[2].prefix).find((d) => e.startsWith(d));
        if (u == null)
          continue;
        c = e.slice(u.length);
      }
      if (fo(s)) {
        if (s[0] === c) {
          i = i || s[2], a = s[1], o(s);
          break;
        }
      } else {
        const f = c.match(s[0]);
        if (f && (a = s[1](f, r)), a) {
          i = i || s[2], o(s);
          break;
        }
      }
    }
    if (a && (a = O(a).map((s) => A(s) ? mo(s.trim()).split(/\s+/g) : s).flat()), !a) {
      const [s, c] = A(e) ? await this.matchVariants(e) : e;
      if (s !== c) {
        const f = await this.expandShortcut(c, r, n - 1);
        f && (a = f[0].map((u) => A(u) ? s.replace(c, u) : u));
      }
    }
    if (a)
      return [
        (await Promise.all(a.map(async (s) => (A(s) ? (await this.expandShortcut(s, r, n - 1))?.[0] : void 0) || [s]))).flat(1).filter(Boolean),
        i
      ];
  }
  async stringifyShortcuts(e, r, n, o = { layer: this.config.shortcutsLayer }) {
    const i = new ao(), a = (await Promise.all(X(n).map(async (u) => {
      const d = A(u) ? await this.parseUtil(u, r, !0, o.prefix) : [[Number.POSITIVE_INFINITY, "{inline}", bt(u), void 0, []]];
      return !d && this.config.warn && Dt(`unmatched utility "${u}" in shortcut "${e[1]}"`), d || [];
    }))).flat(1).filter(Boolean).sort((u, d) => u[0] - d[0]), [s, , c] = e, f = [];
    for (const u of a) {
      if (Se(u)) {
        f.push([u[0], void 0, u[1], void 0, u[2], r, void 0]);
        continue;
      }
      const { selector: d, entries: m, parent: h, sort: b, noMerge: y, layer: w } = this.applyVariants(u, [...u[4], ...c], s);
      i.getFallback(w ?? o.layer, new io()).getFallback(d, h, [[], u[0]])[0].push([m, !!(y ?? u[3]?.noMerge), b ?? 0]);
    }
    return f.concat(i.flatMap(
      (u, d) => u.map(([m, h], b, y) => {
        const w = (g, $, z) => {
          const k = Math.max(...z.map((v) => v[1])), p = z.map((v) => v[0]);
          return (g ? [p.flat(1)] : p).map((v) => {
            const _ = Mt(v);
            if (_)
              return [h, b, _, y, { ...o, noMerge: $, sort: k, layer: d }, r, void 0];
          });
        };
        return [
          [m.filter(([, g]) => g).map(([g, , $]) => [g, $]), !0],
          [m.filter(([, g]) => !g).map(([g, , $]) => [g, $]), !1]
        ].map(([g, $]) => [
          ...w(!1, $, g.filter(([z]) => z.some((k) => k[0] === tt.shortcutsNoMerge))),
          ...w(!0, $, g.filter(([z]) => z.every((k) => k[0] !== tt.shortcutsNoMerge)))
        ]);
      }).flat(2).filter(Boolean)
    ));
  }
  isBlocked(e) {
    return !e || this.config.blocklist.map((r) => Array.isArray(r) ? r[0] : r).some((r) => typeof r == "function" ? r(e) : A(r) ? r === e : r.test(e));
  }
  getBlocked(e) {
    const r = this.config.blocklist.find((n) => {
      const o = Array.isArray(n) ? n[0] : n;
      return typeof o == "function" ? o(e) : A(o) ? o === e : o.test(e);
    });
    return r ? Array.isArray(r) ? r : [r, void 0] : void 0;
  }
}
function wc(t, e) {
  return new So(t, e);
}
const ur = /\s\$\$\s+/g;
function Co(t) {
  return ur.test(t);
}
function zo(t, e) {
  return Co(t) ? t.replace(ur, e ? ` ${e} ` : " ") : e ? `${e} ${t}` : t;
}
const _e = /^\[(.+?)(~?=)"(.*)"\]$/;
function jo(t) {
  return _e.test(t) ? t.replace(_e, (e, r, n, o) => `[${Jt(r)}${n}"${Jt(o)}"]`) : `.${Jt(t)}`;
}
function Eo(t, e) {
  return e(t);
}
function Ao(t) {
  let e, r, n = 2166136261;
  for (e = 0, r = t.length; e < r; e++)
    n ^= t.charCodeAt(e), n += (n << 1) + (n << 4) + (n << 7) + (n << 8) + (n << 24);
  return `00000${(n >>> 0).toString(36)}`.slice(-6);
}
function _o(t, e, r, n) {
  for (const o of Array.from(t.matchAll(r)))
    if (o != null) {
      const i = o[0], a = `${n}${Ao(i)}`;
      e.set(a, i), t = t.replace(i, a);
    }
  return t;
}
function Lo(t, e) {
  for (const [r, n] of e.entries())
    t = t.replaceAll(r, n);
  return t;
}
const Oo = /\/\/#\s*sourceMappingURL=.*\n?/g;
function Ro(t) {
  return t.includes("sourceMappingURL=") ? t.replace(Oo, "") : t;
}
const Po = /(?:[\w&:[\]-]|\[\S{1,64}=\S{1,64}\]){1,64}\[\\?['"]?\S{1,64}?['"]\]\]?[\w:-]{0,64}/g, Mo = /\[(\\\W|[\w-]){1,64}:[^\s:]{0,64}?("\S{1,64}?"|'\S{1,64}?'|`\S{1,64}?`|[^\s:]{1,64}?)[^\s:]{0,64}?\)?\]/g, Fo = /^\[(?:\\\W|[\w-]){1,64}:['"]?\S{1,64}?['"]?\]$/;
function Wo(t) {
  const e = [];
  for (const o of t.matchAll(Mo))
    o.index !== 0 && !/^[\s'"`]/.test(t[o.index - 1] ?? "") || e.push(o[0]);
  for (const o of t.matchAll(Po))
    e.push(o[0]);
  const r = /* @__PURE__ */ new Map(), n = "@unocss-skip-arbitrary-brackets";
  return t = _o(t, r, /-\[[^\]]*\]/g, n), t && t.split(ar).forEach((o) => {
    o.includes(n) && (o = Lo(o, r)), Qn(o) && !Fo.test(o) && e.push(o);
  }), e;
}
const To = {
  name: "@unocss/extractor-arbitrary-variants",
  order: 0,
  extract({ code: t }) {
    return Wo(Ro(t));
  }
};
var No = 44, Uo = 59, Le = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", dr = new Uint8Array(64), Bo = new Uint8Array(128);
for (let t = 0; t < Le.length; t++) {
  const e = Le.charCodeAt(t);
  dr[t] = e, Bo[e] = t;
}
function ct(t, e, r) {
  let n = e - r;
  n = n < 0 ? -n << 1 | 1 : n << 1;
  do {
    let o = n & 31;
    n >>>= 5, n > 0 && (o |= 32), t.write(dr[o]);
  } while (n > 0);
  return e;
}
var Oe = 1024 * 16, Re = typeof TextDecoder < "u" ? /* @__PURE__ */ new TextDecoder() : typeof Buffer < "u" ? {
  decode(t) {
    return Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString();
  }
} : {
  decode(t) {
    let e = "";
    for (let r = 0; r < t.length; r++)
      e += String.fromCharCode(t[r]);
    return e;
  }
}, Do = class {
  constructor() {
    this.pos = 0, this.out = "", this.buffer = new Uint8Array(Oe);
  }
  write(t) {
    const { buffer: e } = this;
    e[this.pos++] = t, this.pos === Oe && (this.out += Re.decode(e), this.pos = 0);
  }
  flush() {
    const { buffer: t, out: e, pos: r } = this;
    return r > 0 ? e + Re.decode(t.subarray(0, r)) : e;
  }
};
function Io(t) {
  const e = new Do();
  let r = 0, n = 0, o = 0, i = 0;
  for (let a = 0; a < t.length; a++) {
    const s = t[a];
    if (a > 0 && e.write(Uo), s.length === 0) continue;
    let c = 0;
    for (let f = 0; f < s.length; f++) {
      const u = s[f];
      f > 0 && e.write(No), c = ct(e, u[0], c), u.length !== 1 && (r = ct(e, u[1], r), n = ct(e, u[2], n), o = ct(e, u[3], o), u.length !== 4 && (i = ct(e, u[4], i)));
    }
  }
  return e.flush();
}
class Wt {
  constructor(e) {
    this.bits = e instanceof Wt ? e.bits.slice() : [];
  }
  add(e) {
    this.bits[e >> 5] |= 1 << (e & 31);
  }
  has(e) {
    return !!(this.bits[e >> 5] & 1 << (e & 31));
  }
}
class xt {
  constructor(e, r, n) {
    this.start = e, this.end = r, this.original = n, this.intro = "", this.outro = "", this.content = n, this.storeName = !1, this.edited = !1, this.previous = null, this.next = null;
  }
  appendLeft(e) {
    this.outro += e;
  }
  appendRight(e) {
    this.intro = this.intro + e;
  }
  clone() {
    const e = new xt(this.start, this.end, this.original);
    return e.intro = this.intro, e.outro = this.outro, e.content = this.content, e.storeName = this.storeName, e.edited = this.edited, e;
  }
  contains(e) {
    return this.start < e && e < this.end;
  }
  eachNext(e) {
    let r = this;
    for (; r; )
      e(r), r = r.next;
  }
  eachPrevious(e) {
    let r = this;
    for (; r; )
      e(r), r = r.previous;
  }
  edit(e, r, n) {
    return this.content = e, n || (this.intro = "", this.outro = ""), this.storeName = r, this.edited = !0, this;
  }
  prependLeft(e) {
    this.outro = e + this.outro;
  }
  prependRight(e) {
    this.intro = e + this.intro;
  }
  reset() {
    this.intro = "", this.outro = "", this.edited && (this.content = this.original, this.storeName = !1, this.edited = !1);
  }
  split(e) {
    const r = e - this.start, n = this.original.slice(0, r), o = this.original.slice(r);
    this.original = n;
    const i = new xt(e, this.end, o);
    return i.outro = this.outro, this.outro = "", this.end = e, this.edited ? (i.edit("", !1), this.content = "") : this.content = n, i.next = this.next, i.next && (i.next.previous = i), i.previous = this, this.next = i, i;
  }
  toString() {
    return this.intro + this.content + this.outro;
  }
  trimEnd(e) {
    if (this.outro = this.outro.replace(e, ""), this.outro.length) return !0;
    const r = this.content.replace(e, "");
    if (r.length)
      return r !== this.content && (this.split(this.start + r.length).edit("", void 0, !0), this.edited && this.edit(r, this.storeName, !0)), !0;
    if (this.edit("", void 0, !0), this.intro = this.intro.replace(e, ""), this.intro.length) return !0;
  }
  trimStart(e) {
    if (this.intro = this.intro.replace(e, ""), this.intro.length) return !0;
    const r = this.content.replace(e, "");
    if (r.length) {
      if (r !== this.content) {
        const n = this.split(this.end - r.length);
        this.edited && n.edit(r, this.storeName, !0), this.edit("", void 0, !0);
      }
      return !0;
    } else if (this.edit("", void 0, !0), this.outro = this.outro.replace(e, ""), this.outro.length) return !0;
  }
}
function Vo() {
  return typeof globalThis < "u" && typeof globalThis.btoa == "function" ? (t) => globalThis.btoa(unescape(encodeURIComponent(t))) : typeof Buffer == "function" ? (t) => Buffer.from(t, "utf-8").toString("base64") : () => {
    throw new Error("Unsupported environment: `window.btoa` or `Buffer` should be supported.");
  };
}
const Yo = /* @__PURE__ */ Vo();
class Xo {
  constructor(e) {
    this.version = 3, this.file = e.file, this.sources = e.sources, this.sourcesContent = e.sourcesContent, this.names = e.names, this.mappings = Io(e.mappings), typeof e.x_google_ignoreList < "u" && (this.x_google_ignoreList = e.x_google_ignoreList), typeof e.debugId < "u" && (this.debugId = e.debugId);
  }
  toString() {
    return JSON.stringify(this);
  }
  toUrl() {
    return "data:application/json;charset=utf-8;base64," + Yo(this.toString());
  }
}
function qo(t) {
  const e = t.split(`
`), r = e.filter((i) => /^\t+/.test(i)), n = e.filter((i) => /^ {2,}/.test(i));
  if (r.length === 0 && n.length === 0)
    return null;
  if (r.length >= n.length)
    return "	";
  const o = n.reduce((i, a) => {
    const s = /^ +/.exec(a)[0].length;
    return Math.min(s, i);
  }, 1 / 0);
  return new Array(o + 1).join(" ");
}
function Ho(t, e) {
  const r = t.split(/[/\\]/), n = e.split(/[/\\]/);
  for (r.pop(); r[0] === n[0]; )
    r.shift(), n.shift();
  if (r.length) {
    let o = r.length;
    for (; o--; ) r[o] = "..";
  }
  return r.concat(n).join("/");
}
const Go = Object.prototype.toString;
function Ko(t) {
  return Go.call(t) === "[object Object]";
}
function Pe(t) {
  const e = t.split(`
`), r = [];
  for (let n = 0, o = 0; n < e.length; n++)
    r.push(o), o += e[n].length + 1;
  return function(o) {
    let i = 0, a = r.length;
    for (; i < a; ) {
      const f = i + a >> 1;
      o < r[f] ? a = f : i = f + 1;
    }
    const s = i - 1, c = o - r[s];
    return { line: s, column: c };
  };
}
const Zo = /\w/;
class Jo {
  constructor(e) {
    this.hires = e, this.generatedCodeLine = 0, this.generatedCodeColumn = 0, this.raw = [], this.rawSegments = this.raw[this.generatedCodeLine] = [], this.pending = null;
  }
  addEdit(e, r, n, o) {
    if (r.length) {
      const i = r.length - 1;
      let a = r.indexOf(`
`, 0), s = -1;
      for (; a >= 0 && i > a; ) {
        const f = [this.generatedCodeColumn, e, n.line, n.column];
        o >= 0 && f.push(o), this.rawSegments.push(f), this.generatedCodeLine += 1, this.raw[this.generatedCodeLine] = this.rawSegments = [], this.generatedCodeColumn = 0, s = a, a = r.indexOf(`
`, a + 1);
      }
      const c = [this.generatedCodeColumn, e, n.line, n.column];
      o >= 0 && c.push(o), this.rawSegments.push(c), this.advance(r.slice(s + 1));
    } else this.pending && (this.rawSegments.push(this.pending), this.advance(r));
    this.pending = null;
  }
  addUneditedChunk(e, r, n, o, i) {
    let a = r.start, s = !0, c = !1;
    for (; a < r.end; ) {
      if (n[a] === `
`)
        o.line += 1, o.column = 0, this.generatedCodeLine += 1, this.raw[this.generatedCodeLine] = this.rawSegments = [], this.generatedCodeColumn = 0, s = !0, c = !1;
      else {
        if (this.hires || s || i.has(a)) {
          const f = [this.generatedCodeColumn, e, o.line, o.column];
          this.hires === "boundary" ? Zo.test(n[a]) ? c || (this.rawSegments.push(f), c = !0) : (this.rawSegments.push(f), c = !1) : this.rawSegments.push(f);
        }
        o.column += 1, this.generatedCodeColumn += 1, s = !1;
      }
      a += 1;
    }
    this.pending = null;
  }
  advance(e) {
    if (!e) return;
    const r = e.split(`
`);
    if (r.length > 1) {
      for (let n = 0; n < r.length - 1; n++)
        this.generatedCodeLine++, this.raw[this.generatedCodeLine] = this.rawSegments = [];
      this.generatedCodeColumn = 0;
    }
    this.generatedCodeColumn += r[r.length - 1].length;
  }
}
const lt = `
`, et = {
  insertLeft: !1,
  insertRight: !1,
  storeName: !1
};
class ue {
  constructor(e, r = {}) {
    const n = new xt(0, e.length, e);
    Object.defineProperties(this, {
      original: { writable: !0, value: e },
      outro: { writable: !0, value: "" },
      intro: { writable: !0, value: "" },
      firstChunk: { writable: !0, value: n },
      lastChunk: { writable: !0, value: n },
      lastSearchedChunk: { writable: !0, value: n },
      byStart: { writable: !0, value: {} },
      byEnd: { writable: !0, value: {} },
      filename: { writable: !0, value: r.filename },
      indentExclusionRanges: { writable: !0, value: r.indentExclusionRanges },
      sourcemapLocations: { writable: !0, value: new Wt() },
      storedNames: { writable: !0, value: {} },
      indentStr: { writable: !0, value: void 0 },
      ignoreList: { writable: !0, value: r.ignoreList },
      offset: { writable: !0, value: r.offset || 0 }
    }), this.byStart[0] = n, this.byEnd[e.length] = n;
  }
  addSourcemapLocation(e) {
    this.sourcemapLocations.add(e);
  }
  append(e) {
    if (typeof e != "string") throw new TypeError("outro content must be a string");
    return this.outro += e, this;
  }
  appendLeft(e, r) {
    if (e = e + this.offset, typeof r != "string") throw new TypeError("inserted content must be a string");
    this._split(e);
    const n = this.byEnd[e];
    return n ? n.appendLeft(r) : this.intro += r, this;
  }
  appendRight(e, r) {
    if (e = e + this.offset, typeof r != "string") throw new TypeError("inserted content must be a string");
    this._split(e);
    const n = this.byStart[e];
    return n ? n.appendRight(r) : this.outro += r, this;
  }
  clone() {
    const e = new ue(this.original, { filename: this.filename, offset: this.offset });
    let r = this.firstChunk, n = e.firstChunk = e.lastSearchedChunk = r.clone();
    for (; r; ) {
      e.byStart[n.start] = n, e.byEnd[n.end] = n;
      const o = r.next, i = o && o.clone();
      i && (n.next = i, i.previous = n, n = i), r = o;
    }
    return e.lastChunk = n, this.indentExclusionRanges && (e.indentExclusionRanges = this.indentExclusionRanges.slice()), e.sourcemapLocations = new Wt(this.sourcemapLocations), e.intro = this.intro, e.outro = this.outro, e;
  }
  generateDecodedMap(e) {
    e = e || {};
    const r = 0, n = Object.keys(this.storedNames), o = new Jo(e.hires), i = Pe(this.original);
    return this.intro && o.advance(this.intro), this.firstChunk.eachNext((a) => {
      const s = i(a.start);
      a.intro.length && o.advance(a.intro), a.edited ? o.addEdit(
        r,
        a.content,
        s,
        a.storeName ? n.indexOf(a.original) : -1
      ) : o.addUneditedChunk(r, a, this.original, s, this.sourcemapLocations), a.outro.length && o.advance(a.outro);
    }), {
      file: e.file ? e.file.split(/[/\\]/).pop() : void 0,
      sources: [
        e.source ? Ho(e.file || "", e.source) : e.file || ""
      ],
      sourcesContent: e.includeContent ? [this.original] : void 0,
      names: n,
      mappings: o.raw,
      x_google_ignoreList: this.ignoreList ? [r] : void 0
    };
  }
  generateMap(e) {
    return new Xo(this.generateDecodedMap(e));
  }
  _ensureindentStr() {
    this.indentStr === void 0 && (this.indentStr = qo(this.original));
  }
  _getRawIndentString() {
    return this._ensureindentStr(), this.indentStr;
  }
  getIndentString() {
    return this._ensureindentStr(), this.indentStr === null ? "	" : this.indentStr;
  }
  indent(e, r) {
    const n = /^[^\r\n]/gm;
    if (Ko(e) && (r = e, e = void 0), e === void 0 && (this._ensureindentStr(), e = this.indentStr || "	"), e === "") return this;
    r = r || {};
    const o = {};
    r.exclude && (typeof r.exclude[0] == "number" ? [r.exclude] : r.exclude).forEach((u) => {
      for (let d = u[0]; d < u[1]; d += 1)
        o[d] = !0;
    });
    let i = r.indentStart !== !1;
    const a = (f) => i ? `${e}${f}` : (i = !0, f);
    this.intro = this.intro.replace(n, a);
    let s = 0, c = this.firstChunk;
    for (; c; ) {
      const f = c.end;
      if (c.edited)
        o[s] || (c.content = c.content.replace(n, a), c.content.length && (i = c.content[c.content.length - 1] === `
`));
      else
        for (s = c.start; s < f; ) {
          if (!o[s]) {
            const u = this.original[s];
            u === `
` ? i = !0 : u !== "\r" && i && (i = !1, s === c.start || (this._splitChunk(c, s), c = c.next), c.prependRight(e));
          }
          s += 1;
        }
      s = c.end, c = c.next;
    }
    return this.outro = this.outro.replace(n, a), this;
  }
  insert() {
    throw new Error(
      "magicString.insert(...) is deprecated. Use prependRight(...) or appendLeft(...)"
    );
  }
  insertLeft(e, r) {
    return et.insertLeft || (console.warn(
      "magicString.insertLeft(...) is deprecated. Use magicString.appendLeft(...) instead"
    ), et.insertLeft = !0), this.appendLeft(e, r);
  }
  insertRight(e, r) {
    return et.insertRight || (console.warn(
      "magicString.insertRight(...) is deprecated. Use magicString.prependRight(...) instead"
    ), et.insertRight = !0), this.prependRight(e, r);
  }
  move(e, r, n) {
    if (e = e + this.offset, r = r + this.offset, n = n + this.offset, n >= e && n <= r) throw new Error("Cannot move a selection inside itself");
    this._split(e), this._split(r), this._split(n);
    const o = this.byStart[e], i = this.byEnd[r], a = o.previous, s = i.next, c = this.byStart[n];
    if (!c && i === this.lastChunk) return this;
    const f = c ? c.previous : this.lastChunk;
    return a && (a.next = s), s && (s.previous = a), f && (f.next = o), c && (c.previous = i), o.previous || (this.firstChunk = i.next), i.next || (this.lastChunk = o.previous, this.lastChunk.next = null), o.previous = f, i.next = c || null, f || (this.firstChunk = o), c || (this.lastChunk = i), this;
  }
  overwrite(e, r, n, o) {
    return o = o || {}, this.update(e, r, n, { ...o, overwrite: !o.contentOnly });
  }
  update(e, r, n, o) {
    if (e = e + this.offset, r = r + this.offset, typeof n != "string") throw new TypeError("replacement content must be a string");
    if (this.original.length !== 0) {
      for (; e < 0; ) e += this.original.length;
      for (; r < 0; ) r += this.original.length;
    }
    if (r > this.original.length) throw new Error("end is out of bounds");
    if (e === r)
      throw new Error(
        "Cannot overwrite a zero-length range – use appendLeft or prependRight instead"
      );
    this._split(e), this._split(r), o === !0 && (et.storeName || (console.warn(
      "The final argument to magicString.overwrite(...) should be an options object. See https://github.com/rich-harris/magic-string"
    ), et.storeName = !0), o = { storeName: !0 });
    const i = o !== void 0 ? o.storeName : !1, a = o !== void 0 ? o.overwrite : !1;
    if (i) {
      const f = this.original.slice(e, r);
      Object.defineProperty(this.storedNames, f, {
        writable: !0,
        value: !0,
        enumerable: !0
      });
    }
    const s = this.byStart[e], c = this.byEnd[r];
    if (s) {
      let f = s;
      for (; f !== c; ) {
        if (f.next !== this.byStart[f.end])
          throw new Error("Cannot overwrite across a split point");
        f = f.next, f.edit("", !1);
      }
      s.edit(n, i, !a);
    } else {
      const f = new xt(e, r, "").edit(n, i);
      c.next = f, f.previous = c;
    }
    return this;
  }
  prepend(e) {
    if (typeof e != "string") throw new TypeError("outro content must be a string");
    return this.intro = e + this.intro, this;
  }
  prependLeft(e, r) {
    if (e = e + this.offset, typeof r != "string") throw new TypeError("inserted content must be a string");
    this._split(e);
    const n = this.byEnd[e];
    return n ? n.prependLeft(r) : this.intro = r + this.intro, this;
  }
  prependRight(e, r) {
    if (e = e + this.offset, typeof r != "string") throw new TypeError("inserted content must be a string");
    this._split(e);
    const n = this.byStart[e];
    return n ? n.prependRight(r) : this.outro = r + this.outro, this;
  }
  remove(e, r) {
    if (e = e + this.offset, r = r + this.offset, this.original.length !== 0) {
      for (; e < 0; ) e += this.original.length;
      for (; r < 0; ) r += this.original.length;
    }
    if (e === r) return this;
    if (e < 0 || r > this.original.length) throw new Error("Character is out of bounds");
    if (e > r) throw new Error("end must be greater than start");
    this._split(e), this._split(r);
    let n = this.byStart[e];
    for (; n; )
      n.intro = "", n.outro = "", n.edit(""), n = r > n.end ? this.byStart[n.end] : null;
    return this;
  }
  reset(e, r) {
    if (e = e + this.offset, r = r + this.offset, this.original.length !== 0) {
      for (; e < 0; ) e += this.original.length;
      for (; r < 0; ) r += this.original.length;
    }
    if (e === r) return this;
    if (e < 0 || r > this.original.length) throw new Error("Character is out of bounds");
    if (e > r) throw new Error("end must be greater than start");
    this._split(e), this._split(r);
    let n = this.byStart[e];
    for (; n; )
      n.reset(), n = r > n.end ? this.byStart[n.end] : null;
    return this;
  }
  lastChar() {
    if (this.outro.length) return this.outro[this.outro.length - 1];
    let e = this.lastChunk;
    do {
      if (e.outro.length) return e.outro[e.outro.length - 1];
      if (e.content.length) return e.content[e.content.length - 1];
      if (e.intro.length) return e.intro[e.intro.length - 1];
    } while (e = e.previous);
    return this.intro.length ? this.intro[this.intro.length - 1] : "";
  }
  lastLine() {
    let e = this.outro.lastIndexOf(lt);
    if (e !== -1) return this.outro.substr(e + 1);
    let r = this.outro, n = this.lastChunk;
    do {
      if (n.outro.length > 0) {
        if (e = n.outro.lastIndexOf(lt), e !== -1) return n.outro.substr(e + 1) + r;
        r = n.outro + r;
      }
      if (n.content.length > 0) {
        if (e = n.content.lastIndexOf(lt), e !== -1) return n.content.substr(e + 1) + r;
        r = n.content + r;
      }
      if (n.intro.length > 0) {
        if (e = n.intro.lastIndexOf(lt), e !== -1) return n.intro.substr(e + 1) + r;
        r = n.intro + r;
      }
    } while (n = n.previous);
    return e = this.intro.lastIndexOf(lt), e !== -1 ? this.intro.substr(e + 1) + r : this.intro + r;
  }
  slice(e = 0, r = this.original.length - this.offset) {
    if (e = e + this.offset, r = r + this.offset, this.original.length !== 0) {
      for (; e < 0; ) e += this.original.length;
      for (; r < 0; ) r += this.original.length;
    }
    let n = "", o = this.firstChunk;
    for (; o && (o.start > e || o.end <= e); ) {
      if (o.start < r && o.end >= r)
        return n;
      o = o.next;
    }
    if (o && o.edited && o.start !== e)
      throw new Error(`Cannot use replaced character ${e} as slice start anchor.`);
    const i = o;
    for (; o; ) {
      o.intro && (i !== o || o.start === e) && (n += o.intro);
      const a = o.start < r && o.end >= r;
      if (a && o.edited && o.end !== r)
        throw new Error(`Cannot use replaced character ${r} as slice end anchor.`);
      const s = i === o ? e - o.start : 0, c = a ? o.content.length + r - o.end : o.content.length;
      if (n += o.content.slice(s, c), o.outro && (!a || o.end === r) && (n += o.outro), a)
        break;
      o = o.next;
    }
    return n;
  }
  // TODO deprecate this? not really very useful
  snip(e, r) {
    const n = this.clone();
    return n.remove(0, e), n.remove(r, n.original.length), n;
  }
  _split(e) {
    if (this.byStart[e] || this.byEnd[e]) return;
    let r = this.lastSearchedChunk, n = r;
    const o = e > r.end;
    for (; r; ) {
      if (r.contains(e)) return this._splitChunk(r, e);
      if (r = o ? this.byStart[r.end] : this.byEnd[r.start], r === n) return;
      n = r;
    }
  }
  _splitChunk(e, r) {
    if (e.edited && e.content.length) {
      const o = Pe(this.original)(r);
      throw new Error(
        `Cannot split a chunk that has already been edited (${o.line}:${o.column} – "${e.original}")`
      );
    }
    const n = e.split(r);
    return this.byEnd[r] = e, this.byStart[r] = n, this.byEnd[n.end] = n, e === this.lastChunk && (this.lastChunk = n), this.lastSearchedChunk = e, !0;
  }
  toString() {
    let e = this.intro, r = this.firstChunk;
    for (; r; )
      e += r.toString(), r = r.next;
    return e + this.outro;
  }
  isEmpty() {
    let e = this.firstChunk;
    do
      if (e.intro.length && e.intro.trim() || e.content.length && e.content.trim() || e.outro.length && e.outro.trim())
        return !1;
    while (e = e.next);
    return !0;
  }
  length() {
    let e = this.firstChunk, r = 0;
    do
      r += e.intro.length + e.content.length + e.outro.length;
    while (e = e.next);
    return r;
  }
  trimLines() {
    return this.trim("[\\r\\n]");
  }
  trim(e) {
    return this.trimStart(e).trimEnd(e);
  }
  trimEndAborted(e) {
    const r = new RegExp((e || "\\s") + "+$");
    if (this.outro = this.outro.replace(r, ""), this.outro.length) return !0;
    let n = this.lastChunk;
    do {
      const o = n.end, i = n.trimEnd(r);
      if (n.end !== o && (this.lastChunk === n && (this.lastChunk = n.next), this.byEnd[n.end] = n, this.byStart[n.next.start] = n.next, this.byEnd[n.next.end] = n.next), i) return !0;
      n = n.previous;
    } while (n);
    return !1;
  }
  trimEnd(e) {
    return this.trimEndAborted(e), this;
  }
  trimStartAborted(e) {
    const r = new RegExp("^" + (e || "\\s") + "+");
    if (this.intro = this.intro.replace(r, ""), this.intro.length) return !0;
    let n = this.firstChunk;
    do {
      const o = n.end, i = n.trimStart(r);
      if (n.end !== o && (n === this.lastChunk && (this.lastChunk = n.next), this.byEnd[n.end] = n, this.byStart[n.next.start] = n.next, this.byEnd[n.next.end] = n.next), i) return !0;
      n = n.next;
    } while (n);
    return !1;
  }
  trimStart(e) {
    return this.trimStartAborted(e), this;
  }
  hasChanged() {
    return this.original !== this.toString();
  }
  _replaceRegexp(e, r) {
    function n(i, a) {
      return typeof r == "string" ? r.replace(/\$(\$|&|\d+)/g, (s, c) => c === "$" ? "$" : c === "&" ? i[0] : +c < i.length ? i[+c] : `$${c}`) : r(...i, i.index, a, i.groups);
    }
    function o(i, a) {
      let s;
      const c = [];
      for (; s = i.exec(a); )
        c.push(s);
      return c;
    }
    if (e.global)
      o(e, this.original).forEach((a) => {
        if (a.index != null) {
          const s = n(a, this.original);
          s !== a[0] && this.overwrite(a.index, a.index + a[0].length, s);
        }
      });
    else {
      const i = this.original.match(e);
      if (i && i.index != null) {
        const a = n(i, this.original);
        a !== i[0] && this.overwrite(i.index, i.index + i[0].length, a);
      }
    }
    return this;
  }
  _replaceString(e, r) {
    const { original: n } = this, o = n.indexOf(e);
    return o !== -1 && this.overwrite(o, o + e.length, r), this;
  }
  replace(e, r) {
    return typeof e == "string" ? this._replaceString(e, r) : this._replaceRegexp(e, r);
  }
  _replaceAllString(e, r) {
    const { original: n } = this, o = e.length;
    for (let i = n.indexOf(e); i !== -1; i = n.indexOf(e, i + o))
      n.slice(i, i + o) !== r && this.overwrite(i, i + o, r);
    return this;
  }
  replaceAll(e, r) {
    if (typeof e == "string")
      return this._replaceAllString(e, r);
    if (!e.global)
      throw new TypeError(
        "MagicString.prototype.replaceAll called with a non-global RegExp argument"
      );
    return this._replaceRegexp(e, r);
  }
}
function de(t, e, r) {
  if (t === "")
    return;
  const n = t.length;
  let o = 0, i = !1, a = 0;
  for (let s = 0; s < n; s++)
    switch (t[s]) {
      case e:
        i || (i = !0, a = s), o++;
        break;
      case r:
        if (--o, o < 0)
          return;
        if (o === 0)
          return [
            t.slice(a, s + 1),
            t.slice(s + 1),
            t.slice(0, a)
          ];
        break;
    }
}
function It(t, e, r, n) {
  if (t === "" || (A(n) && (n = [n]), n.length === 0))
    return;
  const o = t.length;
  let i = 0;
  for (let a = 0; a < o; a++)
    switch (t[a]) {
      case e:
        i++;
        break;
      case r:
        if (--i < 0)
          return;
        break;
      default:
        for (const s of n) {
          const c = s.length;
          if (c && s === t.slice(a, a + c) && i === 0)
            return a === 0 || a === o - c ? void 0 : [
              t.slice(0, a),
              t.slice(a + c)
            ];
        }
    }
  return [
    t,
    ""
  ];
}
function Tt(t, e, r) {
  r = r ?? 10;
  const n = [];
  let o = 0;
  for (; t !== ""; ) {
    if (++o > r)
      return;
    const i = It(t, "(", ")", e);
    if (!i)
      return;
    const [a, s] = i;
    n.push(a), t = s;
  }
  if (n.length > 0)
    return n;
}
const pe = ["hsl", "hsla", "hwb", "lab", "lch", "oklab", "oklch", "rgb", "rgba"], pr = ["%alpha", "<alpha-value>"], Qo = new RegExp(pr.map((t) => yt(t)).join("|"));
function K(t = "") {
  const e = ti(t);
  if (e == null || e === !1)
    return;
  const { type: r, components: n, alpha: o } = e, i = r.toLowerCase();
  if (n.length !== 0 && !(pe.includes(i) && ![1, 3].includes(n.length)))
    return {
      type: i,
      components: n.map((a) => typeof a == "string" ? a.trim() : a),
      alpha: typeof o == "string" ? o.trim() : o
    };
}
function Nt(t) {
  const e = t.alpha ?? 1;
  return typeof e == "string" && pr.includes(e) ? 1 : e;
}
function M(t, e) {
  if (typeof t == "string")
    return t.replace(Qo, `${e ?? 1}`);
  const { components: r } = t;
  let { alpha: n, type: o } = t;
  return n = e ?? n, o = o.toLowerCase(), ["hsla", "rgba"].includes(o) ? `${o}(${r.join(", ")}${n == null ? "" : `, ${n}`})` : (n = n == null ? "" : ` / ${n}`, pe.includes(o) ? `${o}(${r.join(" ")}${n})` : `color(${o} ${r.join(" ")}${n})`);
}
function ti(t) {
  if (!t)
    return;
  let e = ei(t);
  if (e != null || (e = ri(t), e != null) || (e = ni(t), e != null) || (e = ii(t), e != null) || (e = ai(t), e != null))
    return e;
}
function ei(t) {
  const [, e] = t.match(/^#([\da-f]+)$/i) || [];
  if (e)
    switch (e.length) {
      case 3:
      case 4:
        const r = Array.from(e, (o) => Number.parseInt(o, 16)).map((o) => o << 4 | o);
        return {
          type: "rgb",
          components: r.slice(0, 3),
          alpha: e.length === 3 ? void 0 : Math.round(r[3] / 255 * 100) / 100
        };
      case 6:
      case 8:
        const n = Number.parseInt(e, 16);
        return {
          type: "rgb",
          components: e.length === 6 ? [n >> 16 & 255, n >> 8 & 255, n & 255] : [n >> 24 & 255, n >> 16 & 255, n >> 8 & 255],
          alpha: e.length === 6 ? void 0 : Math.round((n & 255) / 255 * 100) / 100
        };
    }
}
function ri(t) {
  const e = {
    rebeccapurple: [102, 51, 153, 1]
  }[t];
  if (e != null)
    return {
      type: "rgb",
      components: e.slice(0, 3),
      alpha: e[3]
    };
}
function ni(t) {
  const e = t.match(/^(rgb|rgba|hsl|hsla)\((.+)\)$/i);
  if (!e)
    return;
  const [, r, n] = e, o = Tt(n, ",", 5);
  if (o) {
    if ([3, 4].includes(o.length))
      return {
        type: r,
        components: o.slice(0, 3),
        alpha: o[3]
      };
    if (o.length !== 1)
      return !1;
  }
}
const oi = new RegExp(`^(${pe.join("|")})\\((.+)\\)$`, "i");
function ii(t) {
  const e = t.match(oi);
  if (!e)
    return;
  const [, r, n] = e, o = mr(`${r} ${n}`);
  if (o) {
    const { alpha: i, components: [a, ...s] } = o;
    return {
      type: a,
      components: s,
      alpha: i
    };
  }
}
function ai(t) {
  const e = t.match(/^color\((.+)\)$/);
  if (!e)
    return;
  const r = mr(e[1]);
  if (r) {
    const { alpha: n, components: [o, ...i] } = r;
    return {
      type: o,
      components: i,
      alpha: n
    };
  }
}
function mr(t) {
  const e = Tt(t, " ");
  if (!e)
    return;
  let r = e.length;
  if (e[r - 2] === "/")
    return {
      components: e.slice(0, r - 2),
      alpha: e[r - 1]
    };
  if (e[r - 2] != null && (e[r - 2].endsWith("/") || e[r - 1].startsWith("/"))) {
    const i = e.splice(r - 2);
    e.push(i.join(" ")), --r;
  }
  const n = Tt(e[r - 1], "/", 2);
  if (!n)
    return;
  if (n.length === 1 || n[n.length - 1] === "")
    return { components: e };
  const o = n.pop();
  return e[r - 1] = n.join("/"), {
    components: e,
    alpha: o
  };
}
function si(t) {
  const e = function(n) {
    const o = this.__options?.sequence || [];
    this.__options.sequence = [];
    for (const i of o) {
      const a = t[i](n);
      if (a != null)
        return a;
    }
  };
  function r(n, o) {
    return n.__options || (n.__options = {
      sequence: []
    }), n.__options.sequence.push(o), n;
  }
  for (const n of Object.keys(t))
    Object.defineProperty(e, n, {
      enumerable: !0,
      configurable: !0,
      get() {
        return r(this, n);
      }
    });
  return e;
}
const ci = /theme\(\s*(['"])?(.*?)\1?\s*\)/g;
function li(t) {
  return t.includes("theme(") && t.includes(")");
}
function fi(t, e, r = !0) {
  const n = Array.from(t.toString().matchAll(ci));
  if (!n.length)
    return t;
  const o = new ue(t);
  for (const i of n) {
    const a = i[2];
    if (!a)
      throw new Error("theme() expect exact one argument, but got 0");
    const s = ui(a, e, r);
    s && o.overwrite(
      i.index,
      i.index + i[0].length,
      s
    );
  }
  return o.toString();
}
function ui(t, e, r = !0) {
  const [n, o] = t.split("/");
  let a = n.trim().split(".").reduce((s, c) => s?.[c], e);
  if (typeof a == "object" && (a = a.DEFAULT), typeof a == "string") {
    if (o) {
      const s = K(a);
      s && (a = M(s, o));
    }
    return a;
  } else if (r)
    throw new Error(`theme of "${t}" did not found`);
}
function q(t, e) {
  let r;
  return {
    name: t,
    match(n, o) {
      r || (r = new RegExp(`^${yt(t)}(?:${o.generator.config.separators.join("|")})`));
      const i = n.match(r);
      if (i)
        return {
          matcher: n.slice(i[0].length),
          handle: (a, s) => s({
            ...a,
            ...e(a)
          })
        };
    },
    autocomplete: `${t}:`
  };
}
function B(t, e) {
  let r;
  return {
    name: t,
    match(n, o) {
      r || (r = new RegExp(`^${yt(t)}(?:${o.generator.config.separators.join("|")})`));
      const i = n.match(r);
      if (i)
        return {
          matcher: n.slice(i[0].length),
          handle: (a, s) => s({
            ...a,
            parent: `${a.parent ? `${a.parent} $$ ` : ""}${e}`
          })
        };
    },
    autocomplete: `${t}:`
  };
}
function $t(t, e, r) {
  if (e.startsWith(`${t}[`)) {
    const [n, o] = de(e.slice(t.length), "[", "]") ?? [];
    if (n && o) {
      for (const i of r)
        if (o.startsWith(i))
          return [n, o.slice(i.length), i];
      return [n, o, ""];
    }
  }
}
function V(t, e, r) {
  if (e.startsWith(t)) {
    const n = $t(t, e, r);
    if (n) {
      const [o = "", i = n[1]] = V("/", n[1], r) ?? [];
      return [n[0], i, o];
    }
    for (const o of r.filter((i) => i !== "/")) {
      const i = e.indexOf(o, t.length);
      if (i !== -1) {
        const a = e.indexOf("/", t.length), s = a === -1 || i <= a;
        return [
          e.slice(t.length, s ? i : a),
          e.slice(i + o.length),
          s ? "" : e.slice(a + 1, i)
        ];
      }
    }
  }
}
const F = {
  l: ["-left"],
  r: ["-right"],
  t: ["-top"],
  b: ["-bottom"],
  s: ["-inline-start"],
  e: ["-inline-end"],
  x: ["-left", "-right"],
  y: ["-top", "-bottom"],
  "": [""],
  bs: ["-block-start"],
  be: ["-block-end"],
  is: ["-inline-start"],
  ie: ["-inline-end"],
  block: ["-block-start", "-block-end"],
  inline: ["-inline-start", "-inline-end"]
}, Me = {
  ...F,
  s: ["-inset-inline-start"],
  start: ["-inset-inline-start"],
  e: ["-inset-inline-end"],
  end: ["-inset-inline-end"],
  bs: ["-inset-block-start"],
  be: ["-inset-block-end"],
  is: ["-inset-inline-start"],
  ie: ["-inset-inline-end"],
  block: ["-inset-block-start", "-inset-block-end"],
  inline: ["-inset-inline-start", "-inset-inline-end"]
}, Fe = {
  l: ["-top-left", "-bottom-left"],
  r: ["-top-right", "-bottom-right"],
  t: ["-top-left", "-top-right"],
  b: ["-bottom-left", "-bottom-right"],
  tl: ["-top-left"],
  lt: ["-top-left"],
  tr: ["-top-right"],
  rt: ["-top-right"],
  bl: ["-bottom-left"],
  lb: ["-bottom-left"],
  br: ["-bottom-right"],
  rb: ["-bottom-right"],
  "": [""],
  bs: ["-start-start", "-start-end"],
  be: ["-end-start", "-end-end"],
  s: ["-end-start", "-start-start"],
  is: ["-end-start", "-start-start"],
  e: ["-start-end", "-end-end"],
  ie: ["-start-end", "-end-end"],
  ss: ["-start-start"],
  "bs-is": ["-start-start"],
  "is-bs": ["-start-start"],
  se: ["-start-end"],
  "bs-ie": ["-start-end"],
  "ie-bs": ["-start-end"],
  es: ["-end-start"],
  "be-is": ["-end-start"],
  "is-be": ["-end-start"],
  ee: ["-end-end"],
  "be-ie": ["-end-end"],
  "ie-be": ["-end-end"]
}, di = {
  x: ["-x"],
  y: ["-y"],
  z: ["-z"],
  "": ["-x", "-y"]
}, pi = ["x", "y", "z"], We = [
  "top",
  "top center",
  "top left",
  "top right",
  "bottom",
  "bottom center",
  "bottom left",
  "bottom right",
  "left",
  "left center",
  "left top",
  "left bottom",
  "right",
  "right center",
  "right top",
  "right bottom",
  "center",
  "center top",
  "center bottom",
  "center left",
  "center right",
  "center center"
], P = Object.assign(
  {},
  ...We.map((t) => ({ [t.replace(/ /, "-")]: t })),
  ...We.map((t) => ({ [t.replace(/\b(\w)\w+/g, "$1").replace(/ /, "")]: t }))
), E = [
  "inherit",
  "initial",
  "revert",
  "revert-layer",
  "unset"
], me = /^(calc|clamp|min|max)\s*\((.+)\)(.*)/, hr = /^(var)\s*\((.+)\)(.*)/, Vt = /^(-?\d*(?:\.\d+)?)(px|pt|pc|%|r?(?:em|ex|lh|cap|ch|ic)|(?:[sld]?v|cq)(?:[whib]|min|max)|in|cm|mm|rpx)?$/i, gr = /^(-?\d*(?:\.\d+)?)$/, br = /^(px|[sld]?v[wh])$/i, yr = {
  px: 1,
  vw: 100,
  vh: 100,
  svw: 100,
  svh: 100,
  dvw: 100,
  dvh: 100,
  lvh: 100,
  lvw: 100
}, xr = /^\[(color|length|size|position|quoted|string):/i, mi = /,(?![^()]*\))/g, hi = [
  // basic props
  "color",
  "border-color",
  "background-color",
  "outline-color",
  "text-decoration-color",
  "flex-grow",
  "flex",
  "flex-shrink",
  "caret-color",
  "font",
  "gap",
  "opacity",
  "visibility",
  "z-index",
  "font-weight",
  "zoom",
  "text-shadow",
  "transform",
  "box-shadow",
  "border",
  // positions
  "background-position",
  "left",
  "right",
  "top",
  "bottom",
  "object-position",
  // sizes
  "max-height",
  "min-height",
  "max-width",
  "min-width",
  "height",
  "width",
  "border-width",
  "margin",
  "padding",
  "outline-width",
  "outline-offset",
  "font-size",
  "line-height",
  "text-indent",
  "vertical-align",
  "border-spacing",
  "letter-spacing",
  "word-spacing",
  // enhances
  "stroke",
  "filter",
  "backdrop-filter",
  "fill",
  "mask",
  "mask-size",
  "mask-border",
  "clip-path",
  "clip",
  "border-radius"
];
function T(t) {
  return +t.toFixed(10);
}
function gi(t) {
  const e = t.match(Vt);
  if (!e)
    return;
  const [, r, n] = e, o = Number.parseFloat(r);
  if (n && !Number.isNaN(o))
    return `${T(o)}${n}`;
}
function bi(t) {
  if (t === "auto" || t === "a")
    return "auto";
}
function yi(t) {
  if (!t)
    return;
  if (br.test(t))
    return `${yr[t]}${t}`;
  const e = t.match(Vt);
  if (!e)
    return;
  const [, r, n] = e, o = Number.parseFloat(r);
  if (!Number.isNaN(o))
    return o === 0 ? "0" : n ? `${T(o)}${n}` : `${T(o / 4)}rem`;
}
function xi(t) {
  if (br.test(t))
    return `${yr[t]}${t}`;
  const e = t.match(Vt);
  if (!e)
    return;
  const [, r, n] = e, o = Number.parseFloat(r);
  if (!Number.isNaN(o))
    return n ? `${T(o)}${n}` : `${T(o)}px`;
}
function $i(t) {
  if (!gr.test(t))
    return;
  const e = Number.parseFloat(t);
  if (!Number.isNaN(e))
    return T(e);
}
function vi(t) {
  if (t.endsWith("%") && (t = t.slice(0, -1)), !gr.test(t))
    return;
  const e = Number.parseFloat(t);
  if (!Number.isNaN(e))
    return `${T(e / 100)}`;
}
function wi(t) {
  if (!t)
    return;
  if (t === "full")
    return "100%";
  const [e, r] = t.split("/"), n = Number.parseFloat(e) / Number.parseFloat(r);
  if (!Number.isNaN(n))
    return n === 0 ? "0" : `${T(n * 100)}%`;
}
function Yt(t, e) {
  if (t && t.startsWith("[") && t.endsWith("]")) {
    let r, n;
    const o = t.match(xr);
    if (o ? (e || (n = o[1]), r = t.slice(o[0].length, -1)) : r = t.slice(1, -1), !r || r === '=""')
      return;
    r.startsWith("--") && (r = `var(${r})`);
    let i = 0;
    for (const a of r)
      if (a === "[")
        i += 1;
      else if (a === "]" && (i -= 1, i < 0))
        return;
    if (i)
      return;
    switch (n) {
      case "string":
        return r.replace(/(^|[^\\])_/g, "$1 ").replace(/\\_/g, "_");
      case "quoted":
        return r.replace(/(^|[^\\])_/g, "$1 ").replace(/\\_/g, "_").replace(/(["\\])/g, "\\$1").replace(/^(.+)$/, '"$1"');
    }
    return r.replace(/(url\(.*?\))/g, (a) => a.replace(/_/g, "\\_")).replace(/(^|[^\\])_/g, "$1 ").replace(/\\_/g, "_").replace(/(?:calc|clamp|max|min)\((.*)/g, (a) => {
      const s = [];
      return a.replace(/var\((--.+?)[,)]/g, (c, f) => (s.push(f), c.replace(f, "--un-calc"))).replace(/(-?\d*\.?\d(?!-\d.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 ").replace(/--un-calc/g, () => s.shift());
    });
  }
}
function ki(t) {
  return Yt(t);
}
function Si(t) {
  return Yt(t, "color");
}
function Ci(t) {
  return Yt(t, "length");
}
function zi(t) {
  return Yt(t, "position");
}
function ji(t) {
  if (/^\$[^\s'"`;{}]/.test(t)) {
    const [e, r] = t.slice(1).split(",");
    return `var(--${gt(e)}${r ? `, ${r}` : ""})`;
  }
}
function Ei(t) {
  const e = t.match(/^(-?[0-9.]+)(s|ms)?$/i);
  if (!e)
    return;
  const [, r, n] = e, o = Number.parseFloat(r);
  if (!Number.isNaN(o))
    return o === 0 && !n ? "0s" : n ? `${T(o)}${n}` : `${T(o)}ms`;
}
function Ai(t) {
  const e = t.match(/^(-?[0-9.]+)(deg|rad|grad|turn)?$/i);
  if (!e)
    return;
  const [, r, n] = e, o = Number.parseFloat(r);
  if (!Number.isNaN(o))
    return o === 0 ? "0" : n ? `${T(o)}${n}` : `${T(o)}deg`;
}
function _i(t) {
  if (E.includes(t))
    return t;
}
function Li(t) {
  if (t.split(",").every((e) => hi.includes(e)))
    return t;
}
function Oi(t) {
  if (["top", "left", "right", "bottom", "center"].includes(t))
    return t;
}
const Ri = {
  __proto__: null,
  auto: bi,
  bracket: ki,
  bracketOfColor: Si,
  bracketOfLength: Ci,
  bracketOfPosition: zi,
  cssvar: ji,
  degree: Ai,
  fraction: wi,
  global: _i,
  number: $i,
  numberWithUnit: gi,
  percent: vi,
  position: Oi,
  properties: Li,
  px: xi,
  rem: yi,
  time: Ei
}, Pi = si(Ri), l = Pi, Mi = "$$mini-no-negative";
function j(t) {
  return ([e, r, n], { theme: o }) => {
    const i = o.spacing?.[n || "DEFAULT"] ?? l.bracket.cssvar.global.auto.fraction.rem(n);
    if (i != null)
      return F[r].map((a) => [`${t}${a}`, i]);
    if (n?.startsWith("-")) {
      const a = o.spacing?.[n.slice(1)];
      if (a != null)
        return F[r].map((s) => [`${t}${s}`, `calc(${a} * -1)`]);
    }
  };
}
function Te(t, e, r = "colors") {
  let n = t[r], o = -1;
  for (const i of e) {
    if (o += 1, n && typeof n != "string") {
      const a = e.slice(o).join("-").replace(/(-[a-z])/g, (s) => s.slice(1).toUpperCase());
      if (n[a])
        return n[a];
      if (n[i]) {
        n = n[i];
        continue;
      }
    }
    return;
  }
  return n;
}
function Ct(t, e, r) {
  return Te(t, e, r) || Te(t, e, "colors");
}
function $r(t, e) {
  const [r, n] = It(t, "[", "]", ["/", ":"]) ?? [];
  if (r != null) {
    const o = (r.match(xr) ?? [])[1];
    if (o == null || o === e)
      return [r, n];
  }
}
function Xt(t, e, r) {
  const n = $r(t, "color");
  if (!n)
    return;
  const [o, i] = n, a = o.replace(/([a-z])(\d)/g, "$1-$2").split(/-/g), [s] = a;
  if (!s)
    return;
  let c;
  const f = l.bracketOfColor(o), u = f || o;
  if (l.numberWithUnit(u))
    return;
  if (/^#[\da-f]+$/i.test(u) ? c = u : /^hex-[\da-fA-F]+$/.test(u) ? c = `#${u.slice(4)}` : o.startsWith("$") && (c = l.cssvar(o)), c = c || f, !c) {
    const m = Ct(e, [o], r);
    typeof m == "string" && (c = m);
  }
  let d = "DEFAULT";
  if (!c) {
    let m;
    const [h] = a.slice(-1);
    /^\d+$/.test(h) ? (d = h, m = Ct(e, a.slice(0, -1), r), !m || typeof m == "string" ? c = void 0 : c = m[d]) : (m = Ct(e, a, r), !m && a.length <= 2 && ([, d = d] = a, m = Ct(e, [s], r)), typeof m == "string" ? c = m : d && m && (c = m[d]));
  }
  return {
    opacity: i,
    name: s,
    no: d,
    color: c,
    cssColor: K(c),
    alpha: l.bracket.cssvar.percent(i ?? "")
  };
}
function R(t, e, r, n) {
  return ([, o], { theme: i, generator: a }) => {
    const s = Xt(o, i, r);
    if (!s)
      return;
    const { alpha: c, color: f, cssColor: u } = s, m = a.config.envMode === "dev" && f ? ` /* ${f} */` : "", h = {};
    if (u)
      if (c != null)
        h[t] = M(u, c) + m;
      else {
        const b = `--un-${e}-opacity`, y = M(u, `var(${b})`);
        y.includes(b) && (h[b] = Nt(u)), h[t] = y + m;
      }
    else if (f)
      if (c != null)
        h[t] = M(f, c) + m;
      else {
        const b = `--un-${e}-opacity`, y = M(f, `var(${b})`);
        y.includes(b) && (h[b] = 1), h[t] = y + m;
      }
    return h;
  };
}
function he(t, e) {
  const r = [];
  t = O(t);
  for (let n = 0; n < t.length; n++) {
    const o = Tt(t[n], " ", 6);
    if (!o || o.length < 3)
      return t;
    let i = !1;
    const a = o.indexOf("inset");
    a !== -1 && (o.splice(a, 1), i = !0);
    let s = "";
    const c = o.at(-1);
    if (K(o.at(0))) {
      const f = K(o.shift());
      f && (s = `, ${M(f)}`);
    } else if (K(c)) {
      const f = K(o.pop());
      f && (s = `, ${M(f)}`);
    } else c && hr.test(c) && (s = `, ${o.pop()}`);
    r.push(`${i ? "inset " : ""}${o.join(" ")} var(${e}${s})`);
  }
  return r;
}
function ge(t, e, r) {
  return t != null && !!Xt(t, e, r)?.color;
}
const Ne = /[a-z]+/gi, Qt = /* @__PURE__ */ new WeakMap();
function qt({ theme: t, generator: e }, r = "breakpoints") {
  const n = e?.userConfig?.theme?.[r] || t[r];
  if (!n)
    return;
  if (Qt.has(t))
    return Qt.get(t);
  const o = Object.entries(n).sort((i, a) => Number.parseInt(i[1].replace(Ne, "")) - Number.parseInt(a[1].replace(Ne, ""))).map(([i, a]) => ({ point: i, size: a }));
  return Qt.set(t, o), o;
}
function x(t, e) {
  return E.map((r) => [`${t}-${r}`, { [e ?? t]: r }]);
}
function ot(t) {
  return t != null && me.test(t);
}
function Fi(t) {
  return t[0] === "[" && t.slice(-1) === "]" && (t = t.slice(1, -1)), me.test(t) || Vt.test(t);
}
function be(t, e, r) {
  const n = e.split(mi);
  return t || !t && n.length === 1 ? di[t].map((o) => [`--un-${r}${o}`, e]) : n.map((o, i) => [`--un-${r}-${pi[i]}`, o]);
}
const vr = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
    950: "#4c0519"
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
    950: "#500724"
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
    950: "#4a044e"
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
    950: "#3b0764"
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
    950: "#2e1065"
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
    950: "#1e1b4b"
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554"
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
    950: "#082f49"
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
    950: "#083344"
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    950: "#042f2e"
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
    950: "#022c22"
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16"
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314",
    950: "#1a2e05"
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12",
    950: "#422006"
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
    950: "#451a03"
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
    950: "#431407"
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712"
  },
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617"
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b"
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a"
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
    950: "#0c0a09"
  },
  light: {
    50: "#fdfdfd",
    100: "#fcfcfc",
    200: "#fafafa",
    300: "#f8f9fa",
    400: "#f6f6f6",
    500: "#f2f2f2",
    600: "#f1f3f5",
    700: "#e9ecef",
    800: "#dee2e6",
    900: "#dde1e3",
    950: "#d8dcdf"
  },
  dark: {
    50: "#4a4a4a",
    100: "#3c3c3c",
    200: "#323232",
    300: "#2d2d2d",
    400: "#222222",
    500: "#1f1f1f",
    600: "#1c1c1e",
    700: "#1b1b1b",
    800: "#181818",
    900: "#0f0f0f",
    950: "#080808"
  },
  get lightblue() {
    return this.sky;
  },
  get lightBlue() {
    return this.sky;
  },
  get warmgray() {
    return this.stone;
  },
  get warmGray() {
    return this.stone;
  },
  get truegray() {
    return this.neutral;
  },
  get trueGray() {
    return this.neutral;
  },
  get coolgray() {
    return this.gray;
  },
  get coolGray() {
    return this.gray;
  },
  get bluegray() {
    return this.slate;
  },
  get blueGray() {
    return this.slate;
  }
};
Object.values(vr).forEach((t) => {
  typeof t != "string" && t !== void 0 && (t.DEFAULT = t.DEFAULT || t[400], Object.keys(t).forEach((e) => {
    const r = +e / 100;
    r === Math.round(r) && (t[r] = t[e]);
  }));
});
const Wi = ["auto", "default", "none", "context-menu", "help", "pointer", "progress", "wait", "cell", "crosshair", "text", "vertical-text", "alias", "copy", "move", "no-drop", "not-allowed", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out"], Ti = ["none", "strict", "content", "size", "inline-size", "layout", "style", "paint"], S = " ", wr = [
  ["inline", { display: "inline" }],
  ["block", { display: "block" }],
  ["inline-block", { display: "inline-block" }],
  ["contents", { display: "contents" }],
  ["flow-root", { display: "flow-root" }],
  ["list-item", { display: "list-item" }],
  ["hidden", { display: "none" }],
  [/^display-(.+)$/, ([, t]) => ({ display: l.bracket.cssvar.global(t) })]
], kr = [
  ["visible", { visibility: "visible" }],
  ["invisible", { visibility: "hidden" }],
  ["backface-visible", { "backface-visibility": "visible" }],
  ["backface-hidden", { "backface-visibility": "hidden" }],
  ...x("backface", "backface-visibility")
], Sr = [
  [/^cursor-(.+)$/, ([, t]) => ({ cursor: l.bracket.cssvar.global(t) })],
  ...Wi.map((t) => [`cursor-${t}`, { cursor: t }])
], Cr = [
  [/^contain-(.*)$/, ([, t]) => l.bracket(t) != null ? {
    contain: l.bracket(t).split(" ").map((e) => l.cssvar.fraction(e) ?? e).join(" ")
  } : Ti.includes(t) ? { contain: t } : void 0]
], zr = [
  ["pointer-events-auto", { "pointer-events": "auto" }],
  ["pointer-events-none", { "pointer-events": "none" }],
  ...x("pointer-events")
], jr = [
  ["resize-x", { resize: "horizontal" }],
  ["resize-y", { resize: "vertical" }],
  ["resize", { resize: "both" }],
  ["resize-none", { resize: "none" }],
  ...x("resize")
], Er = [
  ["select-auto", { "-webkit-user-select": "auto", "user-select": "auto" }],
  ["select-all", { "-webkit-user-select": "all", "user-select": "all" }],
  ["select-text", { "-webkit-user-select": "text", "user-select": "text" }],
  ["select-none", { "-webkit-user-select": "none", "user-select": "none" }],
  ...x("select", "user-select")
], Ar = [
  [
    /^(?:whitespace-|ws-)([-\w]+)$/,
    ([, t]) => ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces", ...E].includes(t) ? { "white-space": t } : void 0,
    { autocomplete: "(whitespace|ws)-(normal|nowrap|pre|pre-line|pre-wrap|break-spaces)" }
  ]
], _r = [
  [/^intrinsic-size-(.+)$/, ([, t]) => ({ "contain-intrinsic-size": l.bracket.cssvar.global.fraction.rem(t) }), { autocomplete: "intrinsic-size-<num>" }],
  ["content-visibility-visible", { "content-visibility": "visible" }],
  ["content-visibility-hidden", { "content-visibility": "hidden" }],
  ["content-visibility-auto", { "content-visibility": "auto" }],
  ...x("content-visibility")
], Lr = [
  [/^content-(.+)$/, ([, t]) => ({ content: l.bracket.cssvar(t) })],
  ["content-empty", { content: '""' }],
  ["content-none", { content: "none" }]
], Or = [
  ["break-normal", { "overflow-wrap": "normal", "word-break": "normal" }],
  ["break-words", { "overflow-wrap": "break-word" }],
  ["break-all", { "word-break": "break-all" }],
  ["break-keep", { "word-break": "keep-all" }],
  ["break-anywhere", { "overflow-wrap": "anywhere" }]
], Rr = [
  ["text-wrap", { "text-wrap": "wrap" }],
  ["text-nowrap", { "text-wrap": "nowrap" }],
  ["text-balance", { "text-wrap": "balance" }],
  ["text-pretty", { "text-wrap": "pretty" }]
], Pr = [
  ["truncate", { overflow: "hidden", "text-overflow": "ellipsis", "white-space": "nowrap" }],
  ["text-truncate", { overflow: "hidden", "text-overflow": "ellipsis", "white-space": "nowrap" }],
  ["text-ellipsis", { "text-overflow": "ellipsis" }],
  ["text-clip", { "text-overflow": "clip" }]
], Mr = [
  ["case-upper", { "text-transform": "uppercase" }],
  ["case-lower", { "text-transform": "lowercase" }],
  ["case-capital", { "text-transform": "capitalize" }],
  ["case-normal", { "text-transform": "none" }],
  ...x("case", "text-transform")
], Fr = [
  ["italic", { "font-style": "italic" }],
  ["not-italic", { "font-style": "normal" }],
  ["font-italic", { "font-style": "italic" }],
  ["font-not-italic", { "font-style": "normal" }],
  ["oblique", { "font-style": "oblique" }],
  ["not-oblique", { "font-style": "normal" }],
  ["font-oblique", { "font-style": "oblique" }],
  ["font-not-oblique", { "font-style": "normal" }]
], Wr = [
  ["antialiased", {
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale"
  }],
  ["subpixel-antialiased", {
    "-webkit-font-smoothing": "auto",
    "-moz-osx-font-smoothing": "auto"
  }]
], Tr = {
  "--un-ring-inset": S,
  "--un-ring-offset-width": "0px",
  "--un-ring-offset-color": "#fff",
  "--un-ring-width": "0px",
  "--un-ring-color": "rgb(147 197 253 / 0.5)",
  "--un-shadow": "0 0 rgb(0 0 0 / 0)"
}, Nr = [
  // ring
  [/^ring(?:-(.+))?$/, ([, t], { theme: e }) => {
    const r = e.ringWidth?.[t || "DEFAULT"] ?? l.px(t || "1");
    if (r)
      return {
        "--un-ring-width": r,
        "--un-ring-offset-shadow": "var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color)",
        "--un-ring-shadow": "var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color)",
        "box-shadow": "var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow)"
      };
  }, { autocomplete: "ring-$ringWidth" }],
  // size
  [/^ring-(?:width-|size-)(.+)$/, Ur, { autocomplete: "ring-(width|size)-$lineWidth" }],
  // offset size
  ["ring-offset", { "--un-ring-offset-width": "1px" }],
  [/^ring-offset-(?:width-|size-)?(.+)$/, ([, t], { theme: e }) => ({ "--un-ring-offset-width": e.lineWidth?.[t] ?? l.bracket.cssvar.px(t) }), { autocomplete: "ring-offset-(width|size)-$lineWidth" }],
  // colors
  [/^ring-(.+)$/, Ni, { autocomplete: "ring-$colors" }],
  [/^ring-op(?:acity)?-?(.+)$/, ([, t]) => ({ "--un-ring-opacity": l.bracket.percent.cssvar(t) }), { autocomplete: "ring-(op|opacity)-<percent>" }],
  // offset color
  [/^ring-offset-(.+)$/, R("--un-ring-offset-color", "ring-offset", "borderColor"), { autocomplete: "ring-offset-$colors" }],
  [/^ring-offset-op(?:acity)?-?(.+)$/, ([, t]) => ({ "--un-ring-offset-opacity": l.bracket.percent.cssvar(t) }), { autocomplete: "ring-offset-(op|opacity)-<percent>" }],
  // style
  ["ring-inset", { "--un-ring-inset": "inset" }]
];
function Ur([, t], { theme: e }) {
  return { "--un-ring-width": e.ringWidth?.[t] ?? l.bracket.cssvar.px(t) };
}
function Ni(t, e) {
  return ot(l.bracket(t[1])) ? Ur(t, e) : R("--un-ring-color", "ring", "borderColor")(t, e);
}
const Br = {
  "--un-ring-offset-shadow": "0 0 rgb(0 0 0 / 0)",
  "--un-ring-shadow": "0 0 rgb(0 0 0 / 0)",
  "--un-shadow-inset": S,
  "--un-shadow": "0 0 rgb(0 0 0 / 0)"
}, Dr = [
  // color
  [/^shadow(?:-(.+))?$/, (t, e) => {
    const [, r] = t, { theme: n } = e, o = n.boxShadow?.[r || "DEFAULT"], i = r ? l.bracket.cssvar(r) : void 0;
    return (o != null || i != null) && !ge(i, n, "shadowColor") ? {
      "--un-shadow": he(o || i, "--un-shadow-color").join(","),
      "box-shadow": "var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow)"
    } : R("--un-shadow-color", "shadow", "shadowColor")(t, e);
  }, { autocomplete: ["shadow-$colors", "shadow-$boxShadow"] }],
  [/^shadow-op(?:acity)?-?(.+)$/, ([, t]) => ({ "--un-shadow-opacity": l.bracket.percent.cssvar(t) }), { autocomplete: "shadow-(op|opacity)-<percent>" }],
  // inset
  ["shadow-inset", { "--un-shadow-inset": "inset" }]
], zt = [
  "translate",
  "rotate",
  "scale"
], Ui = [
  "translateX(var(--un-translate-x))",
  "translateY(var(--un-translate-y))",
  // 'translateZ(var(--un-translate-z))',
  "rotate(var(--un-rotate))",
  // 'rotateX(var(--un-rotate-x))',
  // 'rotateY(var(--un-rotate-y))',
  "rotateZ(var(--un-rotate-z))",
  "skewX(var(--un-skew-x))",
  "skewY(var(--un-skew-y))",
  "scaleX(var(--un-scale-x))",
  "scaleY(var(--un-scale-y))"
  // 'scaleZ(var(--un-scale-z))',
].join(" "), nt = [
  "translateX(var(--un-translate-x))",
  "translateY(var(--un-translate-y))",
  "translateZ(var(--un-translate-z))",
  "rotate(var(--un-rotate))",
  "rotateX(var(--un-rotate-x))",
  "rotateY(var(--un-rotate-y))",
  "rotateZ(var(--un-rotate-z))",
  "skewX(var(--un-skew-x))",
  "skewY(var(--un-skew-y))",
  "scaleX(var(--un-scale-x))",
  "scaleY(var(--un-scale-y))",
  "scaleZ(var(--un-scale-z))"
].join(" "), Bi = [
  "translate3d(var(--un-translate-x), var(--un-translate-y), var(--un-translate-z))",
  "rotate(var(--un-rotate))",
  "rotateX(var(--un-rotate-x))",
  "rotateY(var(--un-rotate-y))",
  "rotateZ(var(--un-rotate-z))",
  "skewX(var(--un-skew-x))",
  "skewY(var(--un-skew-y))",
  "scaleX(var(--un-scale-x))",
  "scaleY(var(--un-scale-y))",
  "scaleZ(var(--un-scale-z))"
].join(" "), Ir = {
  // transform
  "--un-rotate": 0,
  "--un-rotate-x": 0,
  "--un-rotate-y": 0,
  "--un-rotate-z": 0,
  "--un-scale-x": 1,
  "--un-scale-y": 1,
  "--un-scale-z": 1,
  "--un-skew-x": 0,
  "--un-skew-y": 0,
  "--un-translate-x": 0,
  "--un-translate-y": 0,
  "--un-translate-z": 0
}, Vr = [
  // origins
  [/^(?:transform-)?origin-(.+)$/, ([, t]) => ({ "transform-origin": P[t] ?? l.bracket.cssvar(t) }), { autocomplete: [`transform-origin-(${Object.keys(P).join("|")})`, `origin-(${Object.keys(P).join("|")})`] }],
  // perspectives
  [/^(?:transform-)?perspect(?:ive)?-(.+)$/, ([, t]) => {
    const e = l.bracket.cssvar.px.numberWithUnit(t);
    if (e != null)
      return {
        "-webkit-perspective": e,
        perspective: e
      };
  }],
  // skip 1 & 2 letters shortcut
  [/^(?:transform-)?perspect(?:ive)?-origin-(.+)$/, ([, t]) => {
    const e = l.bracket.cssvar(t) ?? (t.length >= 3 ? P[t] : void 0);
    if (e != null)
      return {
        "-webkit-perspective-origin": e,
        "perspective-origin": e
      };
  }],
  // modifiers
  [/^(?:transform-)?translate-()(.+)$/, Ue],
  [/^(?:transform-)?translate-([xyz])-(.+)$/, Ue],
  [/^(?:transform-)?rotate-()(.+)$/, De],
  [/^(?:transform-)?rotate-([xyz])-(.+)$/, De],
  [/^(?:transform-)?skew-()(.+)$/, Ie],
  [/^(?:transform-)?skew-([xy])-(.+)$/, Ie, { autocomplete: ["transform-skew-(x|y)-<percent>", "skew-(x|y)-<percent>"] }],
  [/^(?:transform-)?scale-()(.+)$/, Be],
  [/^(?:transform-)?scale-([xyz])-(.+)$/, Be, { autocomplete: [`transform-(${zt.join("|")})-<percent>`, `transform-(${zt.join("|")})-(x|y|z)-<percent>`, `(${zt.join("|")})-<percent>`, `(${zt.join("|")})-(x|y|z)-<percent>`] }],
  // style
  [/^(?:transform-)?preserve-3d$/, () => ({ "transform-style": "preserve-3d" })],
  [/^(?:transform-)?preserve-flat$/, () => ({ "transform-style": "flat" })],
  // base
  ["transform", { transform: nt }],
  ["transform-cpu", { transform: Ui }],
  ["transform-gpu", { transform: Bi }],
  ["transform-none", { transform: "none" }],
  ...x("transform")
];
function Ue([, t, e], { theme: r }) {
  const n = r.spacing?.[e] ?? l.bracket.cssvar.fraction.rem(e);
  if (n != null)
    return [
      ...be(t, n, "translate"),
      ["transform", nt]
    ];
}
function Be([, t, e]) {
  const r = l.bracket.cssvar.fraction.percent(e);
  if (r != null)
    return [
      ...be(t, r, "scale"),
      ["transform", nt]
    ];
}
function De([, t = "", e]) {
  const r = l.bracket.cssvar.degree(e);
  if (r != null)
    return t ? {
      "--un-rotate": 0,
      [`--un-rotate-${t}`]: r,
      transform: nt
    } : {
      "--un-rotate-x": 0,
      "--un-rotate-y": 0,
      "--un-rotate-z": 0,
      "--un-rotate": r,
      transform: nt
    };
}
function Ie([, t, e]) {
  const r = l.bracket.cssvar.degree(e);
  if (r != null)
    return [
      ...be(t, r, "skew"),
      ["transform", nt]
    ];
}
const Di = {
  DEFAULT: "8px",
  0: "0",
  sm: "4px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, Ii = {
  DEFAULT: ["0 1px 2px rgb(0 0 0 / 0.1)", "0 1px 1px rgb(0 0 0 / 0.06)"],
  sm: "0 1px 1px rgb(0 0 0 / 0.05)",
  md: ["0 4px 3px rgb(0 0 0 / 0.07)", "0 2px 2px rgb(0 0 0 / 0.06)"],
  lg: ["0 10px 8px rgb(0 0 0 / 0.04)", "0 4px 3px rgb(0 0 0 / 0.1)"],
  xl: ["0 20px 13px rgb(0 0 0 / 0.03)", "0 8px 5px rgb(0 0 0 / 0.08)"],
  "2xl": "0 25px 25px rgb(0 0 0 / 0.15)",
  none: "0 0 rgb(0 0 0 / 0)"
}, Vi = {
  sans: [
    "ui-sans-serif",
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    '"Noto Sans"',
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Noto Color Emoji"'
  ].join(","),
  serif: [
    "ui-serif",
    "Georgia",
    "Cambria",
    '"Times New Roman"',
    "Times",
    "serif"
  ].join(","),
  mono: [
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    '"Liberation Mono"',
    '"Courier New"',
    "monospace"
  ].join(",")
}, Yi = {
  xs: ["0.75rem", "1rem"],
  sm: ["0.875rem", "1.25rem"],
  base: ["1rem", "1.5rem"],
  lg: ["1.125rem", "1.75rem"],
  xl: ["1.25rem", "1.75rem"],
  "2xl": ["1.5rem", "2rem"],
  "3xl": ["1.875rem", "2.25rem"],
  "4xl": ["2.25rem", "2.5rem"],
  "5xl": ["3rem", "1"],
  "6xl": ["3.75rem", "1"],
  "7xl": ["4.5rem", "1"],
  "8xl": ["6rem", "1"],
  "9xl": ["8rem", "1"]
}, Xi = {
  DEFAULT: "1.5rem",
  xs: "0.5rem",
  sm: "1rem",
  md: "1.5rem",
  lg: "2rem",
  xl: "2.5rem",
  "2xl": "3rem",
  "3xl": "4rem"
}, qi = {
  DEFAULT: "1.5rem",
  none: "0",
  sm: "thin",
  md: "medium",
  lg: "thick"
}, Hi = {
  DEFAULT: ["0 0 1px rgb(0 0 0 / 0.2)", "0 0 1px rgb(1 0 5 / 0.1)"],
  none: "0 0 rgb(0 0 0 / 0)",
  sm: "1px 1px 3px rgb(36 37 47 / 0.25)",
  md: ["0 1px 2px rgb(30 29 39 / 0.19)", "1px 2px 4px rgb(54 64 147 / 0.18)"],
  lg: ["3px 3px 6px rgb(0 0 0 / 0.26)", "0 0 5px rgb(15 3 86 / 0.22)"],
  xl: ["1px 1px 3px rgb(0 0 0 / 0.29)", "2px 4px 7px rgb(73 64 125 / 0.35)"]
}, Gi = {
  none: "1",
  tight: "1.25",
  snug: "1.375",
  normal: "1.5",
  relaxed: "1.625",
  loose: "2"
}, Yr = {
  tighter: "-0.05em",
  tight: "-0.025em",
  normal: "0em",
  wide: "0.025em",
  wider: "0.05em",
  widest: "0.1em"
}, Ki = {
  thin: "100",
  extralight: "200",
  light: "300",
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
  black: "900"
  // int[0, 900] -> int
}, Zi = Yr, Xr = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px"
}, Ji = { ...Xr }, Qi = {
  DEFAULT: "1px",
  none: "0"
}, ta = {
  DEFAULT: "1rem",
  none: "0",
  xs: "0.75rem",
  sm: "0.875rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "3.75rem",
  "7xl": "4.5rem",
  "8xl": "6rem",
  "9xl": "8rem"
}, ea = {
  DEFAULT: "150ms",
  none: "0s",
  75: "75ms",
  100: "100ms",
  150: "150ms",
  200: "200ms",
  300: "300ms",
  500: "500ms",
  700: "700ms",
  1e3: "1000ms"
}, ra = {
  DEFAULT: "0.25rem",
  none: "0",
  sm: "0.125rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
}, na = {
  DEFAULT: ["var(--un-shadow-inset) 0 1px 3px 0 rgb(0 0 0 / 0.1)", "var(--un-shadow-inset) 0 1px 2px -1px rgb(0 0 0 / 0.1)"],
  none: "0 0 rgb(0 0 0 / 0)",
  sm: "var(--un-shadow-inset) 0 1px 2px 0 rgb(0 0 0 / 0.05)",
  md: ["var(--un-shadow-inset) 0 4px 6px -1px rgb(0 0 0 / 0.1)", "var(--un-shadow-inset) 0 2px 4px -2px rgb(0 0 0 / 0.1)"],
  lg: ["var(--un-shadow-inset) 0 10px 15px -3px rgb(0 0 0 / 0.1)", "var(--un-shadow-inset) 0 4px 6px -4px rgb(0 0 0 / 0.1)"],
  xl: ["var(--un-shadow-inset) 0 20px 25px -5px rgb(0 0 0 / 0.1)", "var(--un-shadow-inset) 0 8px 10px -6px rgb(0 0 0 / 0.1)"],
  "2xl": "var(--un-shadow-inset) 0 25px 50px -12px rgb(0 0 0 / 0.25)",
  inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)"
}, oa = {
  DEFAULT: "3px",
  none: "0"
}, ia = {
  auto: "auto"
}, aa = {
  mouse: "(hover) and (pointer: fine)"
}, sa = {
  ...Ir,
  ...Br,
  ...Tr
}, vt = {
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
  prose: "65ch"
}, Ve = {
  auto: "auto",
  ...vt,
  screen: "100vw"
}, jt = {
  none: "none",
  ...vt,
  screen: "100vw"
}, Ye = {
  auto: "auto",
  ...vt,
  screen: "100vh"
}, Et = {
  none: "none",
  ...vt,
  screen: "100vh"
}, ca = Object.fromEntries(Object.entries(vt).map(([t, e]) => [t, `(min-width: ${e})`])), la = {
  DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
  linear: "linear",
  in: "cubic-bezier(0.4, 0, 1, 1)",
  out: "cubic-bezier(0, 0, 0.2, 1)",
  "in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
}, fa = {
  none: "none",
  all: "all",
  colors: ["color", "background-color", "border-color", "text-decoration-color", "fill", "stroke"].join(","),
  opacity: "opacity",
  shadow: "box-shadow",
  transform: "transform",
  get DEFAULT() {
    return [this.colors, "opacity", "box-shadow", "transform", "filter", "backdrop-filter"].join(",");
  }
}, qr = {
  width: Ve,
  height: Ye,
  maxWidth: jt,
  maxHeight: Et,
  minWidth: jt,
  minHeight: Et,
  inlineSize: Ve,
  blockSize: Ye,
  maxInlineSize: jt,
  maxBlockSize: Et,
  minInlineSize: jt,
  minBlockSize: Et,
  colors: vr,
  fontFamily: Vi,
  fontSize: Yi,
  fontWeight: Ki,
  breakpoints: Xr,
  verticalBreakpoints: Ji,
  borderRadius: ra,
  lineHeight: Gi,
  letterSpacing: Yr,
  wordSpacing: Zi,
  boxShadow: na,
  textIndent: Xi,
  textShadow: Hi,
  textStrokeWidth: qi,
  blur: Di,
  dropShadow: Ii,
  easing: la,
  transitionProperty: fa,
  lineWidth: Qi,
  spacing: ta,
  duration: ea,
  ringWidth: oa,
  preflightBase: sa,
  containers: ca,
  zIndex: ia,
  media: aa
}, Xe = {
  mid: "middle",
  base: "baseline",
  btm: "bottom",
  baseline: "baseline",
  top: "top",
  start: "top",
  middle: "middle",
  bottom: "bottom",
  end: "bottom",
  "text-top": "text-top",
  "text-bottom": "text-bottom",
  sub: "sub",
  super: "super",
  ...Object.fromEntries(E.map((t) => [t, t]))
}, Hr = [
  [
    /^(?:vertical|align|v)-([-\w]+%?)$/,
    ([, t]) => ({ "vertical-align": Xe[t] ?? l.numberWithUnit(t) }),
    {
      autocomplete: [
        `(vertical|align|v)-(${Object.keys(Xe).join("|")})`,
        "(vertical|align|v)-<percentage>"
      ]
    }
  ]
], qe = ["center", "left", "right", "justify", "start", "end"], Gr = [
  ...qe.map((t) => [`text-${t}`, { "text-align": t }]),
  ...[
    ...E,
    ...qe
  ].map((t) => [`text-align-${t}`, { "text-align": t }])
], Kr = [
  // size
  [/^outline-(?:width-|size-)?(.+)$/, Zr, { autocomplete: "outline-(width|size)-<num>" }],
  // color
  [/^outline-(?:color-)?(.+)$/, ua, { autocomplete: "outline-$colors" }],
  // offset
  [/^outline-offset-(.+)$/, ([, t], { theme: e }) => ({ "outline-offset": e.lineWidth?.[t] ?? l.bracket.cssvar.global.px(t) }), { autocomplete: "outline-(offset)-<num>" }],
  // style
  ["outline", { "outline-style": "solid" }],
  ...["auto", "dashed", "dotted", "double", "hidden", "solid", "groove", "ridge", "inset", "outset", ...E].map((t) => [`outline-${t}`, { "outline-style": t }]),
  ["outline-none", { outline: "2px solid transparent", "outline-offset": "2px" }]
];
function Zr([, t], { theme: e }) {
  return { "outline-width": e.lineWidth?.[t] ?? l.bracket.cssvar.global.px(t) };
}
function ua(t, e) {
  return ot(l.bracket(t[1])) ? Zr(t, e) : R("outline-color", "outline-color", "borderColor")(t, e);
}
const Jr = [
  ["appearance-auto", { "-webkit-appearance": "auto", appearance: "auto" }],
  ["appearance-none", { "-webkit-appearance": "none", appearance: "none" }]
];
function da(t) {
  return l.properties.auto.global(t) ?? {
    contents: "contents",
    scroll: "scroll-position"
  }[t];
}
const Qr = [
  [/^will-change-(.+)/, ([, t]) => ({ "will-change": da(t) })]
], rt = ["solid", "dashed", "dotted", "double", "hidden", "none", "groove", "ridge", "inset", "outset", ...E], tn = [
  // compound
  [/^(?:border|b)()(?:-(.+))?$/, U, { autocomplete: "(border|b)-<directions>" }],
  [/^(?:border|b)-([xy])(?:-(.+))?$/, U],
  [/^(?:border|b)-([rltbse])(?:-(.+))?$/, U],
  [/^(?:border|b)-(block|inline)(?:-(.+))?$/, U],
  [/^(?:border|b)-([bi][se])(?:-(.+))?$/, U],
  // size
  [/^(?:border|b)-()(?:width|size)-(.+)$/, U, { autocomplete: ["(border|b)-<num>", "(border|b)-<directions>-<num>"] }],
  [/^(?:border|b)-([xy])-(?:width|size)-(.+)$/, U],
  [/^(?:border|b)-([rltbse])-(?:width|size)-(.+)$/, U],
  [/^(?:border|b)-(block|inline)-(?:width|size)-(.+)$/, U],
  [/^(?:border|b)-([bi][se])-(?:width|size)-(.+)$/, U],
  // colors
  [/^(?:border|b)-()(?:color-)?(.+)$/, ft, { autocomplete: ["(border|b)-$colors", "(border|b)-<directions>-$colors"] }],
  [/^(?:border|b)-([xy])-(?:color-)?(.+)$/, ft],
  [/^(?:border|b)-([rltbse])-(?:color-)?(.+)$/, ft],
  [/^(?:border|b)-(block|inline)-(?:color-)?(.+)$/, ft],
  [/^(?:border|b)-([bi][se])-(?:color-)?(.+)$/, ft],
  // opacity
  [/^(?:border|b)-()op(?:acity)?-?(.+)$/, ut, { autocomplete: "(border|b)-(op|opacity)-<percent>" }],
  [/^(?:border|b)-([xy])-op(?:acity)?-?(.+)$/, ut],
  [/^(?:border|b)-([rltbse])-op(?:acity)?-?(.+)$/, ut],
  [/^(?:border|b)-(block|inline)-op(?:acity)?-?(.+)$/, ut],
  [/^(?:border|b)-([bi][se])-op(?:acity)?-?(.+)$/, ut],
  // radius
  [/^(?:border-|b-)?(?:rounded|rd)()(?:-(.+))?$/, dt, { autocomplete: ["(border|b)-(rounded|rd)", "(border|b)-(rounded|rd)-$borderRadius", "(rounded|rd)", "(rounded|rd)-$borderRadius"] }],
  [/^(?:border-|b-)?(?:rounded|rd)-([rltbse])(?:-(.+))?$/, dt],
  [/^(?:border-|b-)?(?:rounded|rd)-([rltb]{2})(?:-(.+))?$/, dt],
  [/^(?:border-|b-)?(?:rounded|rd)-([bise][se])(?:-(.+))?$/, dt],
  [/^(?:border-|b-)?(?:rounded|rd)-([bi][se]-[bi][se])(?:-(.+))?$/, dt],
  // style
  [/^(?:border|b)-(?:style-)?()(.+)$/, pt, { autocomplete: ["(border|b)-style", `(border|b)-(${rt.join("|")})`, "(border|b)-<directions>-style", `(border|b)-<directions>-(${rt.join("|")})`, `(border|b)-<directions>-style-(${rt.join("|")})`, `(border|b)-style-(${rt.join("|")})`] }],
  [/^(?:border|b)-([xy])-(?:style-)?(.+)$/, pt],
  [/^(?:border|b)-([rltbse])-(?:style-)?(.+)$/, pt],
  [/^(?:border|b)-(block|inline)-(?:style-)?(.+)$/, pt],
  [/^(?:border|b)-([bi][se])-(?:style-)?(.+)$/, pt]
];
function He(t, e, r) {
  if (e != null)
    return {
      [`border${r}-color`]: M(t, e)
    };
  if (r === "") {
    const n = {}, o = "--un-border-opacity", i = M(t, `var(${o})`);
    return i.includes(o) && (n[o] = typeof t == "string" ? 1 : Nt(t)), n["border-color"] = i, n;
  } else {
    const n = {}, o = "--un-border-opacity", i = `--un-border${r}-opacity`, a = M(t, `var(${i})`);
    return a.includes(i) && (n[o] = typeof t == "string" ? 1 : Nt(t), n[i] = `var(${o})`), n[`border${r}-color`] = a, n;
  }
}
function pa(t) {
  return ([, e], r) => {
    const n = Xt(e, r, "borderColor");
    if (!n)
      return;
    const { alpha: o, color: i, cssColor: a } = n;
    if (a)
      return He(a, o, t);
    if (i)
      return He(i, o, t);
  };
}
function U([, t = "", e], { theme: r }) {
  const n = r.lineWidth?.[e || "DEFAULT"] ?? l.bracket.cssvar.global.px(e || "1");
  if (t in F && n != null)
    return F[t].map((o) => [`border${o}-width`, n]);
}
function ft([, t = "", e], r) {
  if (t in F) {
    if (ot(l.bracket(e)))
      return U(["", t, e], r);
    if (ge(e, r.theme, "borderColor"))
      return Object.assign(
        {},
        ...F[t].map((n) => pa(n)(["", e], r.theme))
      );
  }
}
function ut([, t = "", e]) {
  const r = l.bracket.percent.cssvar(e);
  if (t in F && r != null)
    return F[t].map((n) => [`--un-border${n}-opacity`, r]);
}
function dt([, t = "", e], { theme: r }) {
  const n = r.borderRadius?.[e || "DEFAULT"] || l.bracket.cssvar.global.fraction.rem(e || "1");
  if (t in Fe && n != null)
    return Fe[t].map((o) => [`border${o}-radius`, n]);
}
function pt([, t = "", e]) {
  if (rt.includes(e) && t in F)
    return F[t].map((r) => [`border${r}-style`, e]);
}
const en = [
  [/^op(?:acity)?-?(.+)$/, ([, t]) => ({ opacity: l.bracket.percent.cssvar(t) })]
], ma = /^\[url\(.+\)\]$/, ha = /^\[(?:length|size):.+\]$/, ga = /^\[position:.+\]$/, ba = /^\[(?:linear|conic|radial)-gradient\(.+\)\]$/, rn = [
  [/^bg-(.+)$/, (...t) => {
    const e = t[0][1];
    return ma.test(e) ? { "--un-url": l.bracket(e), "background-image": "var(--un-url)" } : ha.test(e) && l.bracketOfLength(e) != null ? { "background-size": l.bracketOfLength(e).split(" ").map((r) => l.fraction.auto.px.cssvar(r) ?? r).join(" ") } : (Fi(e) || ga.test(e)) && l.bracketOfPosition(e) != null ? { "background-position": l.bracketOfPosition(e).split(" ").map((r) => l.position.fraction.auto.px.cssvar(r) ?? r).join(" ") } : ba.test(e) ? { "background-image": l.bracket(e) } : R("background-color", "bg", "backgroundColor")(...t);
  }, { autocomplete: "bg-$colors" }],
  [/^bg-op(?:acity)?-?(.+)$/, ([, t]) => ({ "--un-bg-opacity": l.bracket.percent.cssvar(t) }), { autocomplete: "bg-(op|opacity)-<percent>" }]
], nn = [
  [/^color-scheme-(\w+)$/, ([, t]) => ({ "color-scheme": t })]
], on = [
  [/^@container(?:\/(\w+))?(?:-(normal))?$/, ([, t, e]) => (Dt("The container query rule is experimental and may not follow semver."), {
    "container-type": e ?? "inline-size",
    "container-name": t
  })]
], Ge = ["solid", "double", "dotted", "dashed", "wavy", ...E], an = [
  [/^(?:decoration-)?(underline|overline|line-through)$/, ([, t]) => ({ "text-decoration-line": t }), { autocomplete: "decoration-(underline|overline|line-through)" }],
  // size
  [/^(?:underline|decoration)-(?:size-)?(.+)$/, sn, { autocomplete: "(underline|decoration)-<num>" }],
  [/^(?:underline|decoration)-(auto|from-font)$/, ([, t]) => ({ "text-decoration-thickness": t }), { autocomplete: "(underline|decoration)-(auto|from-font)" }],
  // colors
  [/^(?:underline|decoration)-(.+)$/, ya, { autocomplete: "(underline|decoration)-$colors" }],
  [/^(?:underline|decoration)-op(?:acity)?-?(.+)$/, ([, t]) => ({ "--un-line-opacity": l.bracket.percent.cssvar(t) }), { autocomplete: "(underline|decoration)-(op|opacity)-<percent>" }],
  // offset
  [/^(?:underline|decoration)-offset-(.+)$/, ([, t], { theme: e }) => ({ "text-underline-offset": e.lineWidth?.[t] ?? l.auto.bracket.cssvar.global.px(t) }), { autocomplete: "(underline|decoration)-(offset)-<num>" }],
  // style
  ...Ge.map((t) => [`underline-${t}`, { "text-decoration-style": t }]),
  ...Ge.map((t) => [`decoration-${t}`, { "text-decoration-style": t }]),
  ["no-underline", { "text-decoration": "none" }],
  ["decoration-none", { "text-decoration": "none" }]
];
function sn([, t], { theme: e }) {
  return { "text-decoration-thickness": e.lineWidth?.[t] ?? l.bracket.cssvar.global.px(t) };
}
function ya(t, e) {
  if (ot(l.bracket(t[1])))
    return sn(t, e);
  const r = R("text-decoration-color", "line", "borderColor")(t, e);
  if (r)
    return {
      "-webkit-text-decoration-color": r["text-decoration-color"],
      ...r
    };
}
const cn = [
  // display
  ["flex", { display: "flex" }],
  ["inline-flex", { display: "inline-flex" }],
  ["flex-inline", { display: "inline-flex" }],
  // flex
  [/^flex-(.*)$/, ([, t]) => ({ flex: l.bracket(t) != null ? l.bracket(t).split(" ").map((e) => l.cssvar.fraction(e) ?? e).join(" ") : l.cssvar.fraction(t) })],
  ["flex-1", { flex: "1 1 0%" }],
  ["flex-auto", { flex: "1 1 auto" }],
  ["flex-initial", { flex: "0 1 auto" }],
  ["flex-none", { flex: "none" }],
  // shrink/grow/basis
  [/^(?:flex-)?shrink(?:-(.*))?$/, ([, t = ""]) => ({ "flex-shrink": l.bracket.cssvar.number(t) ?? 1 }), { autocomplete: ["flex-shrink-<num>", "shrink-<num>"] }],
  [/^(?:flex-)?grow(?:-(.*))?$/, ([, t = ""]) => ({ "flex-grow": l.bracket.cssvar.number(t) ?? 1 }), { autocomplete: ["flex-grow-<num>", "grow-<num>"] }],
  [/^(?:flex-)?basis-(.+)$/, ([, t], { theme: e }) => ({ "flex-basis": e.spacing?.[t] ?? l.bracket.cssvar.auto.fraction.rem(t) }), { autocomplete: ["flex-basis-$spacing", "basis-$spacing"] }],
  // directions
  ["flex-row", { "flex-direction": "row" }],
  ["flex-row-reverse", { "flex-direction": "row-reverse" }],
  ["flex-col", { "flex-direction": "column" }],
  ["flex-col-reverse", { "flex-direction": "column-reverse" }],
  // wraps
  ["flex-wrap", { "flex-wrap": "wrap" }],
  ["flex-wrap-reverse", { "flex-wrap": "wrap-reverse" }],
  ["flex-nowrap", { "flex-wrap": "nowrap" }]
], xa = {
  "": "",
  x: "column-",
  y: "row-",
  col: "column-",
  row: "row-"
};
function te([, t = "", e], { theme: r }) {
  const n = r.spacing?.[e] ?? l.bracket.cssvar.global.rem(e);
  if (n != null)
    return {
      [`${xa[t]}gap`]: n
    };
}
const ln = [
  [/^(?:flex-|grid-)?gap-?()(.+)$/, te, { autocomplete: ["gap-$spacing", "gap-<num>"] }],
  [/^(?:flex-|grid-)?gap-([xy])-?(.+)$/, te, { autocomplete: ["gap-(x|y)-$spacing", "gap-(x|y)-<num>"] }],
  [/^(?:flex-|grid-)?gap-(col|row)-?(.+)$/, te, { autocomplete: ["gap-(col|row)-$spacing", "gap-(col|row)-<num>"] }]
];
function I(t) {
  return t.replace("col", "column");
}
function ae(t) {
  return t[0] === "r" ? "Row" : "Column";
}
function $a(t, e, r) {
  const n = e[`gridAuto${ae(t)}`]?.[r];
  if (n != null)
    return n;
  switch (r) {
    case "min":
      return "min-content";
    case "max":
      return "max-content";
    case "fr":
      return "minmax(0,1fr)";
  }
  return l.bracket.cssvar.auto.rem(r);
}
const fn = [
  // displays
  ["grid", { display: "grid" }],
  ["inline-grid", { display: "inline-grid" }],
  // global
  [/^(?:grid-)?(row|col)-(.+)$/, ([, t, e], { theme: r }) => ({
    [`grid-${I(t)}`]: r[`grid${ae(t)}`]?.[e] ?? l.bracket.cssvar.auto(e)
  })],
  // span
  [/^(?:grid-)?(row|col)-span-(.+)$/, ([, t, e]) => {
    if (e === "full")
      return { [`grid-${I(t)}`]: "1/-1" };
    const r = l.bracket.number(e);
    if (r != null)
      return { [`grid-${I(t)}`]: `span ${r}/span ${r}` };
  }, { autocomplete: "(grid-row|grid-col|row|col)-span-<num>" }],
  // starts & ends
  [/^(?:grid-)?(row|col)-start-(.+)$/, ([, t, e]) => ({ [`grid-${I(t)}-start`]: l.bracket.cssvar(e) ?? e })],
  [/^(?:grid-)?(row|col)-end-(.+)$/, ([, t, e]) => ({ [`grid-${I(t)}-end`]: l.bracket.cssvar(e) ?? e }), { autocomplete: "(grid-row|grid-col|row|col)-(start|end)-<num>" }],
  // auto flows
  [/^(?:grid-)?auto-(rows|cols)-(.+)$/, ([, t, e], { theme: r }) => ({ [`grid-auto-${I(t)}`]: $a(t, r, e) }), { autocomplete: "(grid-auto|auto)-(rows|cols)-<num>" }],
  // grid-auto-flow, auto-flow: uno
  // grid-flow: wind
  [/^(?:grid-auto-flow|auto-flow|grid-flow)-(.+)$/, ([, t]) => ({ "grid-auto-flow": l.bracket.cssvar(t) })],
  [/^(?:grid-auto-flow|auto-flow|grid-flow)-(row|col|dense|row-dense|col-dense)$/, ([, t]) => ({ "grid-auto-flow": I(t).replace("-", " ") }), { autocomplete: ["(grid-auto-flow|auto-flow|grid-flow)-(row|col|dense|row-dense|col-dense)"] }],
  // templates
  [/^(?:grid-)?(rows|cols)-(.+)$/, ([, t, e], { theme: r }) => ({
    [`grid-template-${I(t)}`]: r[`gridTemplate${ae(t)}`]?.[e] ?? l.bracket.cssvar(e)
  })],
  [/^(?:grid-)?(rows|cols)-minmax-([\w.-]+)$/, ([, t, e]) => ({ [`grid-template-${I(t)}`]: `repeat(auto-fill,minmax(${e},1fr))` })],
  [/^(?:grid-)?(rows|cols)-(\d+)$/, ([, t, e]) => ({ [`grid-template-${I(t)}`]: `repeat(${e},minmax(0,1fr))` }), { autocomplete: "(grid-rows|grid-cols|rows|cols)-<num>" }],
  // areas
  [/^grid-area(s)?-(.+)$/, ([, t, e]) => t != null ? { "grid-template-areas": l.cssvar(e) ?? e.split("-").map((r) => `"${l.bracket(r)}"`).join(" ") } : { "grid-area": l.bracket.cssvar(e) }],
  // template none
  ["grid-rows-none", { "grid-template-rows": "none" }],
  ["grid-cols-none", { "grid-template-columns": "none" }],
  // template subgrid
  ["grid-rows-subgrid", { "grid-template-rows": "subgrid" }],
  ["grid-cols-subgrid", { "grid-template-columns": "subgrid" }]
], At = [
  "auto",
  "hidden",
  "clip",
  "visible",
  "scroll",
  "overlay",
  ...E
], un = [
  [/^(?:overflow|of)-(.+)$/, ([, t]) => At.includes(t) ? { overflow: t } : void 0, { autocomplete: [`(overflow|of)-(${At.join("|")})`, `(overflow|of)-(x|y)-(${At.join("|")})`] }],
  [/^(?:overflow|of)-([xy])-(.+)$/, ([, t, e]) => At.includes(e) ? { [`overflow-${t}`]: e } : void 0]
], dn = [
  [/^(?:position-|pos-)?(relative|absolute|fixed|sticky)$/, ([, t]) => ({ position: t }), {
    autocomplete: [
      "(position|pos)-<position>",
      "(position|pos)-<globalKeyword>",
      "<position>"
    ]
  }],
  [/^(?:position-|pos-)([-\w]+)$/, ([, t]) => E.includes(t) ? { position: t } : void 0],
  [/^(?:position-|pos-)?(static)$/, ([, t]) => ({ position: t })]
], ye = [
  // contents
  ["justify-start", { "justify-content": "flex-start" }],
  ["justify-end", { "justify-content": "flex-end" }],
  ["justify-center", { "justify-content": "center" }],
  ["justify-between", { "justify-content": "space-between" }],
  ["justify-around", { "justify-content": "space-around" }],
  ["justify-evenly", { "justify-content": "space-evenly" }],
  ["justify-stretch", { "justify-content": "stretch" }],
  ["justify-left", { "justify-content": "left" }],
  ["justify-right", { "justify-content": "right" }],
  ...x("justify", "justify-content"),
  // items
  ["justify-items-start", { "justify-items": "start" }],
  ["justify-items-end", { "justify-items": "end" }],
  ["justify-items-center", { "justify-items": "center" }],
  ["justify-items-stretch", { "justify-items": "stretch" }],
  ...x("justify-items"),
  // selfs
  ["justify-self-auto", { "justify-self": "auto" }],
  ["justify-self-start", { "justify-self": "start" }],
  ["justify-self-end", { "justify-self": "end" }],
  ["justify-self-center", { "justify-self": "center" }],
  ["justify-self-stretch", { "justify-self": "stretch" }],
  ...x("justify-self")
], pn = [
  [/^order-(.+)$/, ([, t]) => ({ order: l.bracket.cssvar.number(t) })],
  ["order-first", { order: "-9999" }],
  ["order-last", { order: "9999" }],
  ["order-none", { order: "0" }]
], xe = [
  // contents
  ["content-center", { "align-content": "center" }],
  ["content-start", { "align-content": "flex-start" }],
  ["content-end", { "align-content": "flex-end" }],
  ["content-between", { "align-content": "space-between" }],
  ["content-around", { "align-content": "space-around" }],
  ["content-evenly", { "align-content": "space-evenly" }],
  ...x("content", "align-content"),
  // items
  ["items-start", { "align-items": "flex-start" }],
  ["items-end", { "align-items": "flex-end" }],
  ["items-center", { "align-items": "center" }],
  ["items-baseline", { "align-items": "baseline" }],
  ["items-stretch", { "align-items": "stretch" }],
  ...x("items", "align-items"),
  // selfs
  ["self-auto", { "align-self": "auto" }],
  ["self-start", { "align-self": "flex-start" }],
  ["self-end", { "align-self": "flex-end" }],
  ["self-center", { "align-self": "center" }],
  ["self-stretch", { "align-self": "stretch" }],
  ["self-baseline", { "align-self": "baseline" }],
  ...x("self", "align-self")
], $e = [
  // contents
  ["place-content-center", { "place-content": "center" }],
  ["place-content-start", { "place-content": "start" }],
  ["place-content-end", { "place-content": "end" }],
  ["place-content-between", { "place-content": "space-between" }],
  ["place-content-around", { "place-content": "space-around" }],
  ["place-content-evenly", { "place-content": "space-evenly" }],
  ["place-content-stretch", { "place-content": "stretch" }],
  ...x("place-content"),
  // items
  ["place-items-start", { "place-items": "start" }],
  ["place-items-end", { "place-items": "end" }],
  ["place-items-center", { "place-items": "center" }],
  ["place-items-stretch", { "place-items": "stretch" }],
  ...x("place-items"),
  // selfs
  ["place-self-auto", { "place-self": "auto" }],
  ["place-self-start", { "place-self": "start" }],
  ["place-self-end", { "place-self": "end" }],
  ["place-self-center", { "place-self": "center" }],
  ["place-self-stretch", { "place-self": "stretch" }],
  ...x("place-self")
], mn = [...ye, ...xe, ...$e].flatMap(([t, e]) => [
  [`flex-${t}`, e],
  [`grid-${t}`, e]
]);
function se(t, { theme: e }) {
  return e.spacing?.[t] ?? l.bracket.cssvar.global.auto.fraction.rem(t);
}
function mt([, t, e], r) {
  const n = se(e, r);
  if (n != null && t in Me)
    return Me[t].map((o) => [o.slice(1), n]);
}
const hn = [
  [
    /^(?:position-|pos-)?inset-(.+)$/,
    ([, t], e) => ({ inset: se(t, e) }),
    {
      autocomplete: [
        "(position|pos)-inset-<directions>-$spacing",
        "(position|pos)-inset-(block|inline)-$spacing",
        "(position|pos)-inset-(bs|be|is|ie)-$spacing",
        "(position|pos)-(top|left|right|bottom)-$spacing"
      ]
    }
  ],
  [/^(?:position-|pos-)?(start|end)-(.+)$/, mt],
  [/^(?:position-|pos-)?inset-([xy])-(.+)$/, mt],
  [/^(?:position-|pos-)?inset-([rltbse])-(.+)$/, mt],
  [/^(?:position-|pos-)?inset-(block|inline)-(.+)$/, mt],
  [/^(?:position-|pos-)?inset-([bi][se])-(.+)$/, mt],
  [/^(?:position-|pos-)?(top|left|right|bottom)-(.+)$/, ([, t, e], r) => ({ [t]: se(e, r) })]
], gn = [
  // floats
  ["float-left", { float: "left" }],
  ["float-right", { float: "right" }],
  ["float-start", { float: "inline-start" }],
  ["float-end", { float: "inline-end" }],
  ["float-none", { float: "none" }],
  ...x("float"),
  // clears
  ["clear-left", { clear: "left" }],
  ["clear-right", { clear: "right" }],
  ["clear-both", { clear: "both" }],
  ["clear-start", { clear: "inline-start" }],
  ["clear-end", { clear: "inline-end" }],
  ["clear-none", { clear: "none" }],
  ...x("clear")
], bn = [
  [/^(?:position-|pos-)?z([\d.]+)$/, ([, t]) => ({ "z-index": l.number(t) })],
  [/^(?:position-|pos-)?z-(.+)$/, ([, t], { theme: e }) => ({ "z-index": e.zIndex?.[t] ?? l.bracket.cssvar.global.auto.number(t) }), { autocomplete: "z-<num>" }]
], yn = [
  ["box-border", { "box-sizing": "border-box" }],
  ["box-content", { "box-sizing": "content-box" }],
  ...x("box", "box-sizing")
], xn = [
  [
    /^(where|\?)$/,
    (t, { constructCSS: e, generator: r }) => {
      if (r.userConfig.envMode === "dev")
        return `@keyframes __un_qm{0%{box-shadow:inset 4px 4px #ff1e90, inset -4px -4px #ff1e90}100%{box-shadow:inset 8px 8px #3399ff, inset -8px -8px #3399ff}} ${e({ animation: "__un_qm 0.5s ease-in-out alternate infinite" })}`;
    }
  ]
], va = {
  h: "height",
  w: "width",
  inline: "inline-size",
  block: "block-size"
};
function Z(t, e) {
  return `${t || ""}${va[e]}`;
}
function _t(t, e, r, n) {
  const o = Z(t, e).replace(/-(\w)/g, (a, s) => s.toUpperCase()), i = r[o]?.[n];
  if (i != null)
    return i;
  switch (n) {
    case "fit":
    case "max":
    case "min":
      return `${n}-content`;
  }
  return l.bracket.cssvar.global.auto.fraction.rem(n);
}
const $n = [
  [/^size-(min-|max-)?(.+)$/, ([, t, e], { theme: r }) => ({ [Z(t, "w")]: _t(t, "w", r, e), [Z(t, "h")]: _t(t, "h", r, e) })],
  [/^(?:size-)?(min-|max-)?([wh])-?(.+)$/, ([, t, e, r], { theme: n }) => ({ [Z(t, e)]: _t(t, e, n, r) })],
  [/^(?:size-)?(min-|max-)?(block|inline)-(.+)$/, ([, t, e, r], { theme: n }) => ({ [Z(t, e)]: _t(t, e, n, r) }), {
    autocomplete: [
      "(w|h)-$width|height|maxWidth|maxHeight|minWidth|minHeight|inlineSize|blockSize|maxInlineSize|maxBlockSize|minInlineSize|minBlockSize",
      "(block|inline)-$width|height|maxWidth|maxHeight|minWidth|minHeight|inlineSize|blockSize|maxInlineSize|maxBlockSize|minInlineSize|minBlockSize",
      "(max|min)-(w|h|block|inline)",
      "(max|min)-(w|h|block|inline)-$width|height|maxWidth|maxHeight|minWidth|minHeight|inlineSize|blockSize|maxInlineSize|maxBlockSize|minInlineSize|minBlockSize",
      "(w|h)-full",
      "(max|min)-(w|h)-full"
    ]
  }],
  [/^(?:size-)?(min-|max-)?(h)-screen-(.+)$/, ([, t, e, r], n) => ({ [Z(t, e)]: Ke(n, r, "verticalBreakpoints") })],
  [/^(?:size-)?(min-|max-)?(w)-screen-(.+)$/, ([, t, e, r], n) => ({ [Z(t, e)]: Ke(n, r) }), {
    autocomplete: [
      "(w|h)-screen",
      "(min|max)-(w|h)-screen",
      "h-screen-$verticalBreakpoints",
      "(min|max)-h-screen-$verticalBreakpoints",
      "w-screen-$breakpoints",
      "(min|max)-w-screen-$breakpoints"
    ]
  }]
];
function Ke(t, e, r = "breakpoints") {
  const n = qt(t, r);
  if (n)
    return n.find((o) => o.point === e)?.size;
}
function wa(t) {
  if (/^\d+\/\d+$/.test(t))
    return t;
  switch (t) {
    case "square":
      return "1/1";
    case "video":
      return "16/9";
  }
  return l.bracket.cssvar.global.auto.number(t);
}
const vn = [
  [/^(?:size-)?aspect-(?:ratio-)?(.+)$/, ([, t]) => ({ "aspect-ratio": wa(t) }), { autocomplete: ["aspect-(square|video|ratio)", "aspect-ratio-(square|video)"] }]
], wn = [
  [/^pa?()-?(.+)$/, j("padding"), { autocomplete: ["(m|p)<num>", "(m|p)-<num>"] }],
  [/^p-?xy()()$/, j("padding"), { autocomplete: "(m|p)-(xy)" }],
  [/^p-?([xy])(?:-?(.+))?$/, j("padding")],
  [/^p-?([rltbse])(?:-?(.+))?$/, j("padding"), { autocomplete: "(m|p)<directions>-<num>" }],
  [/^p-(block|inline)(?:-(.+))?$/, j("padding"), { autocomplete: "(m|p)-(block|inline)-<num>" }],
  [/^p-?([bi][se])(?:-?(.+))?$/, j("padding"), { autocomplete: "(m|p)-(bs|be|is|ie)-<num>" }]
], kn = [
  [/^ma?()-?(.+)$/, j("margin")],
  [/^m-?xy()()$/, j("margin")],
  [/^m-?([xy])(?:-?(.+))?$/, j("margin")],
  [/^m-?([rltbse])(?:-?(.+))?$/, j("margin")],
  [/^m-(block|inline)(?:-(.+))?$/, j("margin")],
  [/^m-?([bi][se])(?:-?(.+))?$/, j("margin")]
], Sn = [
  // fills
  [/^fill-(.+)$/, R("fill", "fill", "backgroundColor"), { autocomplete: "fill-$colors" }],
  [/^fill-op(?:acity)?-?(.+)$/, ([, t]) => ({ "--un-fill-opacity": l.bracket.percent.cssvar(t) }), { autocomplete: "fill-(op|opacity)-<percent>" }],
  ["fill-none", { fill: "none" }],
  // stroke size
  [/^stroke-(?:width-|size-)?(.+)$/, Cn, { autocomplete: ["stroke-width-$lineWidth", "stroke-size-$lineWidth"] }],
  // stroke dash
  [/^stroke-dash-(.+)$/, ([, t]) => ({ "stroke-dasharray": l.bracket.cssvar.number(t) }), { autocomplete: "stroke-dash-<num>" }],
  [/^stroke-offset-(.+)$/, ([, t], { theme: e }) => ({ "stroke-dashoffset": e.lineWidth?.[t] ?? l.bracket.cssvar.px.numberWithUnit(t) }), { autocomplete: "stroke-offset-$lineWidth" }],
  // stroke colors
  [/^stroke-(.+)$/, ka, { autocomplete: "stroke-$colors" }],
  [/^stroke-op(?:acity)?-?(.+)$/, ([, t]) => ({ "--un-stroke-opacity": l.bracket.percent.cssvar(t) }), { autocomplete: "stroke-(op|opacity)-<percent>" }],
  // line cap
  ["stroke-cap-square", { "stroke-linecap": "square" }],
  ["stroke-cap-round", { "stroke-linecap": "round" }],
  ["stroke-cap-auto", { "stroke-linecap": "butt" }],
  // line join
  ["stroke-join-arcs", { "stroke-linejoin": "arcs" }],
  ["stroke-join-bevel", { "stroke-linejoin": "bevel" }],
  ["stroke-join-clip", { "stroke-linejoin": "miter-clip" }],
  ["stroke-join-round", { "stroke-linejoin": "round" }],
  ["stroke-join-auto", { "stroke-linejoin": "miter" }],
  // none
  ["stroke-none", { stroke: "none" }]
];
function Cn([, t], { theme: e }) {
  return { "stroke-width": e.lineWidth?.[t] ?? l.bracket.cssvar.fraction.px.number(t) };
}
function ka(t, e) {
  return ot(l.bracket(t[1])) ? Cn(t, e) : R("stroke", "stroke", "borderColor")(t, e);
}
function Ze(t, e) {
  let r;
  if (l.cssvar(t) != null)
    r = l.cssvar(t);
  else {
    t.startsWith("[") && t.endsWith("]") && (t = t.slice(1, -1));
    const n = t.split(",").map((o) => e.transitionProperty?.[o] ?? l.properties(o));
    n.every(Boolean) && (r = n.join(","));
  }
  return r;
}
const zn = [
  // transition
  [
    /^transition(?:-(\D+?))?(?:-(\d+))?$/,
    ([, t, e], { theme: r }) => {
      if (!t && !e)
        return {
          "transition-property": r.transitionProperty?.DEFAULT,
          "transition-timing-function": r.easing?.DEFAULT,
          "transition-duration": r.duration?.DEFAULT ?? l.time("150")
        };
      if (t != null) {
        const n = Ze(t, r), o = r.duration?.[e || "DEFAULT"] ?? l.time(e || "150");
        if (n)
          return {
            "transition-property": n,
            "transition-timing-function": r.easing?.DEFAULT,
            "transition-duration": o
          };
      } else if (e != null)
        return {
          "transition-property": r.transitionProperty?.DEFAULT,
          "transition-timing-function": r.easing?.DEFAULT,
          "transition-duration": r.duration?.[e] ?? l.time(e)
        };
    },
    {
      autocomplete: "transition-$transitionProperty-$duration"
    }
  ],
  // timings
  [
    /^(?:transition-)?duration-(.+)$/,
    ([, t], { theme: e }) => ({ "transition-duration": e.duration?.[t || "DEFAULT"] ?? l.bracket.cssvar.time(t) }),
    { autocomplete: ["transition-duration-$duration", "duration-$duration"] }
  ],
  [
    /^(?:transition-)?delay-(.+)$/,
    ([, t], { theme: e }) => ({ "transition-delay": e.duration?.[t || "DEFAULT"] ?? l.bracket.cssvar.time(t) }),
    { autocomplete: ["transition-delay-$duration", "delay-$duration"] }
  ],
  [
    /^(?:transition-)?ease(?:-(.+))?$/,
    ([, t], { theme: e }) => ({ "transition-timing-function": e.easing?.[t || "DEFAULT"] ?? l.bracket.cssvar(t) }),
    { autocomplete: ["transition-ease-(linear|in|out|in-out|DEFAULT)", "ease-(linear|in|out|in-out|DEFAULT)"] }
  ],
  // props
  [
    /^(?:transition-)?property-(.+)$/,
    ([, t], { theme: e }) => {
      const r = l.global(t) || Ze(t, e);
      if (r)
        return { "transition-property": r };
    },
    { autocomplete: [
      `transition-property-(${[...E].join("|")})`,
      "transition-property-$transitionProperty",
      "property-$transitionProperty"
    ] }
  ],
  // none
  ["transition-none", { transition: "none" }],
  ...x("transition"),
  // behavior
  ["transition-discrete", { "transition-behavior": "allow-discrete" }],
  ["transition-normal", { "transition-behavior": "normal" }]
], jn = [
  // text
  [/^text-(.+)$/, Ca, { autocomplete: "text-$fontSize" }],
  // text size
  [/^(?:text|font)-size-(.+)$/, On, { autocomplete: "text-size-$fontSize" }],
  // text colors
  [/^text-(?:color-)?(.+)$/, Sa, { autocomplete: "text-$colors" }],
  // colors
  [/^(?:color|c)-(.+)$/, R("color", "text", "textColor"), { autocomplete: "(color|c)-$colors" }],
  // style
  [/^(?:text|color|c)-(.+)$/, ([, t]) => E.includes(t) ? { color: t } : void 0, { autocomplete: `(text|color|c)-(${E.join("|")})` }],
  // opacity
  [/^(?:text|color|c)-op(?:acity)?-?(.+)$/, ([, t]) => ({ "--un-text-opacity": l.bracket.percent.cssvar(t) }), { autocomplete: "(text|color|c)-(op|opacity)-<percent>" }],
  // weights
  [
    /^(?:font|fw)-?([^-]+)$/,
    ([, t], { theme: e }) => ({ "font-weight": e.fontWeight?.[t] || l.bracket.global.number(t) }),
    {
      autocomplete: [
        "(font|fw)-(100|200|300|400|500|600|700|800|900)",
        "(font|fw)-$fontWeight"
      ]
    }
  ],
  // leadings
  [
    /^(?:font-)?(?:leading|lh|line-height)-(.+)$/,
    ([, t], { theme: e }) => ({ "line-height": ce(t, e, "lineHeight") }),
    { autocomplete: "(leading|lh|line-height)-$lineHeight" }
  ],
  // synthesis
  ["font-synthesis-weight", { "font-synthesis": "weight" }],
  ["font-synthesis-style", { "font-synthesis": "style" }],
  ["font-synthesis-small-caps", { "font-synthesis": "small-caps" }],
  ["font-synthesis-none", { "font-synthesis": "none" }],
  [/^font-synthesis-(.+)$/, ([, t]) => ({ "font-synthesis": l.bracket.cssvar.global(t) })],
  // tracking
  [
    /^(?:font-)?tracking-(.+)$/,
    ([, t], { theme: e }) => ({ "letter-spacing": e.letterSpacing?.[t] || l.bracket.cssvar.global.rem(t) }),
    { autocomplete: "tracking-$letterSpacing" }
  ],
  // word-spacing
  [
    /^(?:font-)?word-spacing-(.+)$/,
    ([, t], { theme: e }) => ({ "word-spacing": e.wordSpacing?.[t] || l.bracket.cssvar.global.rem(t) }),
    { autocomplete: "word-spacing-$wordSpacing" }
  ],
  // stretch
  ["font-stretch-normal", { "font-stretch": "normal" }],
  ["font-stretch-ultra-condensed", { "font-stretch": "ultra-condensed" }],
  ["font-stretch-extra-condensed", { "font-stretch": "extra-condensed" }],
  ["font-stretch-condensed", { "font-stretch": "condensed" }],
  ["font-stretch-semi-condensed", { "font-stretch": "semi-condensed" }],
  ["font-stretch-semi-expanded", { "font-stretch": "semi-expanded" }],
  ["font-stretch-expanded", { "font-stretch": "expanded" }],
  ["font-stretch-extra-expanded", { "font-stretch": "extra-expanded" }],
  ["font-stretch-ultra-expanded", { "font-stretch": "ultra-expanded" }],
  [
    /^font-stretch-(.+)$/,
    ([, t]) => ({ "font-stretch": l.bracket.cssvar.fraction.global(t) }),
    { autocomplete: "font-stretch-<percentage>" }
  ],
  // family
  [
    /^font-(.+)$/,
    ([, t], { theme: e }) => ({ "font-family": e.fontFamily?.[t] || l.bracket.cssvar.global(t) }),
    { autocomplete: "font-$fontFamily" }
  ]
], En = [
  [/^tab(?:-(.+))?$/, ([, t]) => {
    const e = l.bracket.cssvar.global.number(t || "4");
    if (e != null)
      return {
        "-moz-tab-size": e,
        "-o-tab-size": e,
        "tab-size": e
      };
  }]
], An = [
  [/^indent(?:-(.+))?$/, ([, t], { theme: e }) => ({ "text-indent": e.textIndent?.[t || "DEFAULT"] || l.bracket.cssvar.global.fraction.rem(t) }), { autocomplete: "indent-$textIndent" }]
], _n = [
  // widths
  [/^text-stroke(?:-(.+))?$/, ([, t], { theme: e }) => ({ "-webkit-text-stroke-width": e.textStrokeWidth?.[t || "DEFAULT"] || l.bracket.cssvar.px(t) }), { autocomplete: "text-stroke-$textStrokeWidth" }],
  // colors
  [/^text-stroke-(.+)$/, R("-webkit-text-stroke-color", "text-stroke", "borderColor"), { autocomplete: "text-stroke-$colors" }],
  [/^text-stroke-op(?:acity)?-?(.+)$/, ([, t]) => ({ "--un-text-stroke-opacity": l.bracket.percent.cssvar(t) }), { autocomplete: "text-stroke-(op|opacity)-<percent>" }]
], Ln = [
  [/^text-shadow(?:-(.+))?$/, ([, t], { theme: e }) => {
    const r = e.textShadow?.[t || "DEFAULT"];
    return r != null ? {
      "--un-text-shadow": he(r, "--un-text-shadow-color").join(","),
      "text-shadow": "var(--un-text-shadow)"
    } : { "text-shadow": l.bracket.cssvar.global(t) };
  }, { autocomplete: "text-shadow-$textShadow" }],
  // colors
  [/^text-shadow-color-(.+)$/, R("--un-text-shadow-color", "text-shadow", "shadowColor"), { autocomplete: "text-shadow-color-$colors" }],
  [/^text-shadow-color-op(?:acity)?-?(.+)$/, ([, t]) => ({ "--un-text-shadow-opacity": l.bracket.percent.cssvar(t) }), { autocomplete: "text-shadow-color-(op|opacity)-<percent>" }]
];
function ce(t, e, r) {
  return e[r]?.[t] || l.bracket.cssvar.global.rem(t);
}
function On([, t], { theme: e }) {
  const n = O(e.fontSize?.[t])?.[0] ?? l.bracket.cssvar.global.rem(t);
  if (n != null)
    return { "font-size": n };
}
function Sa(t, e) {
  return ot(l.bracket(t[1])) ? On(t, e) : R("color", "text", "textColor")(t, e);
}
function Ca([, t = "base"], { theme: e }) {
  const r = $r(t, "length");
  if (!r)
    return;
  const [n, o] = r, i = O(e.fontSize?.[n]), a = o ? ce(o, e, "lineHeight") : void 0;
  if (i?.[0]) {
    const [c, f, u] = i;
    return typeof f == "object" ? {
      "font-size": c,
      ...f
    } : {
      "font-size": c,
      "line-height": a ?? f ?? "1",
      "letter-spacing": u ? ce(u, e, "letterSpacing") : void 0
    };
  }
  const s = l.bracketOfLength.rem(n);
  return a && s ? {
    "font-size": s,
    "line-height": a
  } : { "font-size": l.bracketOfLength.rem(t) };
}
const za = {
  backface: "backface-visibility",
  break: "word-break",
  case: "text-transform",
  content: "align-content",
  fw: "font-weight",
  items: "align-items",
  justify: "justify-content",
  select: "user-select",
  self: "align-self",
  vertical: "vertical-align",
  visible: "visibility",
  whitespace: "white-space",
  ws: "white-space"
}, Rn = [
  [/^(.+?)-(\$.+)$/, ([, t, e]) => {
    const r = za[t];
    if (r)
      return { [r]: l.cssvar(e) };
  }]
], Pn = [
  [/^\[(.*)\]$/, ([t, e]) => {
    if (!e.includes(":"))
      return;
    const [r, ...n] = e.split(":"), o = n.join(":");
    if (!Ea(e) && /^[a-z-]+$/.test(r) && ja(o)) {
      const i = l.bracket(`[${o}]`);
      if (i)
        return { [r]: i };
    }
  }]
];
function ja(t) {
  let e = 0;
  function r(n) {
    for (; e < t.length; )
      if (e += 1, t[e] === n)
        return !0;
    return !1;
  }
  for (e = 0; e < t.length; e++) {
    const n = t[e];
    if ("\"`'".includes(n)) {
      if (!r(n))
        return !1;
    } else if (n === "(") {
      if (!r(")"))
        return !1;
    } else if ("[]{}:".includes(n))
      return !1;
  }
  return !0;
}
function Ea(t) {
  if (!t.includes("://"))
    return !1;
  try {
    return new URL(t).host !== "";
  } catch {
    return !1;
  }
}
const Aa = [
  Rn,
  Pn,
  Cr,
  zr,
  kr,
  dn,
  hn,
  bn,
  pn,
  fn,
  gn,
  kn,
  yn,
  wr,
  vn,
  $n,
  cn,
  Vr,
  Sr,
  Er,
  jr,
  Jr,
  $e,
  xe,
  ye,
  ln,
  mn,
  un,
  Pr,
  Ar,
  Or,
  tn,
  rn,
  nn,
  Sn,
  wn,
  Gr,
  An,
  Rr,
  Hr,
  jn,
  Mr,
  Fr,
  an,
  Wr,
  En,
  _n,
  Ln,
  en,
  Dr,
  Kr,
  Nr,
  zn,
  Qr,
  _r,
  Lr,
  on,
  // should be the last
  xn
].flat(1), _a = {
  name: "aria",
  match(t, e) {
    const r = V("aria-", t, e.generator.config.separators);
    if (r) {
      const [n, o] = r, i = l.bracket(n) ?? e.theme.aria?.[n] ?? "";
      if (i)
        return {
          matcher: o,
          selector: (a) => `${a}[aria-${i}]`
        };
    }
  }
};
function Lt(t) {
  return {
    name: `${t}-aria`,
    match(e, r) {
      const n = V(`${t}-aria-`, e, r.generator.config.separators);
      if (n) {
        const [o, i] = n, a = l.bracket(o) ?? r.theme.aria?.[o] ?? "";
        if (a)
          return {
            matcher: `${t}-[[aria-${a}]]:${i}`
          };
      }
    }
  };
}
const La = [
  Lt("group"),
  Lt("peer"),
  Lt("parent"),
  Lt("previous")
];
function Je(t) {
  const e = t.match(/^-?\d+\.?\d*/)?.[0] || "", r = t.slice(e.length);
  if (r === "px") {
    const n = Number.parseFloat(e) - 0.1;
    return Number.isNaN(n) ? t : `${n}${r}`;
  }
  return `calc(${t} - 0.1px)`;
}
const Qe = /(max|min)-\[([^\]]*)\]:/;
function Oa() {
  const t = {};
  return {
    name: "breakpoints",
    match(e, r) {
      if (Qe.test(e)) {
        const o = e.match(Qe);
        return {
          matcher: e.replace(o[0], ""),
          handle: (a, s) => s({
            ...a,
            parent: `${a.parent ? `${a.parent} $$ ` : ""}@media (${o[1]}-width: ${o[2]})`
            // parentOrder: order,
          })
        };
      }
      const n = (qt(r) ?? []).map(({ point: o, size: i }, a) => [o, i, a]);
      for (const [o, i, a] of n) {
        t[o] || (t[o] = new RegExp(`^((?:([al]t-|[<~]|max-))?${o}(?:${r.generator.config.separators.join("|")}))`));
        const s = e.match(t[o]);
        if (!s)
          continue;
        const [, c] = s, f = e.slice(c.length);
        if (f === "container")
          continue;
        const u = c.startsWith("lt-") || c.startsWith("<") || c.startsWith("max-"), d = c.startsWith("at-") || c.startsWith("~");
        let m = 3e3;
        return u ? (m -= a + 1, {
          matcher: f,
          handle: (h, b) => b({
            ...h,
            parent: `${h.parent ? `${h.parent} $$ ` : ""}@media (max-width: ${Je(i)})`,
            parentOrder: m
          })
        }) : (m += a + 1, d && a < n.length - 1 ? {
          matcher: f,
          handle: (h, b) => b({
            ...h,
            parent: `${h.parent ? `${h.parent} $$ ` : ""}@media (min-width: ${i}) and (max-width: ${Je(n[a + 1][1])})`,
            parentOrder: m
          })
        } : {
          matcher: f,
          handle: (h, b) => b({
            ...h,
            parent: `${h.parent ? `${h.parent} $$ ` : ""}@media (min-width: ${i})`,
            parentOrder: m
          })
        });
      }
    },
    multiPass: !0,
    autocomplete: "(at-|lt-|max-|)$breakpoints:"
  };
}
const Ra = [
  q("*", (t) => ({ selector: `${t.selector} > *` }))
];
function ht(t, e) {
  return {
    name: `combinator:${t}`,
    match(r, n) {
      if (!r.startsWith(t))
        return;
      const o = n.generator.config.separators;
      let i = $t(`${t}-`, r, o);
      if (!i) {
        for (const s of o)
          if (r.startsWith(`${t}${s}`)) {
            i = ["", r.slice(t.length + s.length)];
            break;
          }
        if (!i)
          return;
      }
      let a = l.bracket(i[0]) ?? "";
      return a === "" && (a = "*"), {
        matcher: i[1],
        selector: (s) => `${s}${e}${a}`
      };
    },
    multiPass: !0
  };
}
const Pa = [
  ht("all", " "),
  ht("children", ">"),
  ht("next", "+"),
  ht("sibling", "+"),
  ht("siblings", "~")
], Ma = {
  name: "@",
  match(t, e) {
    if (t.startsWith("@container"))
      return;
    const r = V("@", t, e.generator.config.separators);
    if (r) {
      const [n, o, i] = r, a = l.bracket(n);
      let s;
      if (a) {
        const c = l.numberWithUnit(a);
        c && (s = `(min-width: ${c})`);
      } else
        s = e.theme.containers?.[n] ?? "";
      if (s) {
        Dt("The container query variant is experimental and may not follow semver.");
        let c = 1e3 + Object.keys(e.theme.containers ?? {}).indexOf(n);
        return i && (c += 1e3), {
          matcher: o,
          handle: (f, u) => u({
            ...f,
            parent: `${f.parent ? `${f.parent} $$ ` : ""}@container${i ? ` ${i} ` : " "}${s}`,
            parentOrder: c
          })
        };
      }
    }
  },
  multiPass: !0
};
function Fa(t = {}) {
  if (t?.dark === "class" || typeof t.dark == "object") {
    const { dark: e = ".dark", light: r = ".light" } = typeof t.dark == "string" ? {} : t.dark;
    return [
      q("dark", (n) => ({ prefix: `${e} $$ ${n.prefix}` })),
      q("light", (n) => ({ prefix: `${r} $$ ${n.prefix}` }))
    ];
  }
  return [
    B("dark", "@media (prefers-color-scheme: dark)"),
    B("light", "@media (prefers-color-scheme: light)")
  ];
}
const Wa = {
  name: "data",
  match(t, e) {
    const r = V("data-", t, e.generator.config.separators);
    if (r) {
      const [n, o] = r, i = l.bracket(n) ?? e.theme.data?.[n] ?? "";
      if (i)
        return {
          matcher: o,
          selector: (a) => `${a}[data-${i}]`
        };
    }
  }
};
function Ot(t) {
  return {
    name: `${t}-data`,
    match(e, r) {
      const n = V(`${t}-data-`, e, r.generator.config.separators);
      if (n) {
        const [o, i] = n, a = l.bracket(o) ?? r.theme.data?.[o] ?? "";
        if (a)
          return {
            matcher: `${t}-[[data-${a}]]:${i}`
          };
      }
    }
  };
}
const Ta = [
  Ot("group"),
  Ot("peer"),
  Ot("parent"),
  Ot("previous")
], Na = [
  q("rtl", (t) => ({ prefix: `[dir="rtl"] $$ ${t.prefix}` })),
  q("ltr", (t) => ({ prefix: `[dir="ltr"] $$ ${t.prefix}` }))
];
function Ua() {
  let t;
  return {
    name: "important",
    match(e, r) {
      t || (t = new RegExp(`^(important(?:${r.generator.config.separators.join("|")})|!)`));
      let n;
      const o = e.match(t);
      if (o ? n = e.slice(o[0].length) : e.endsWith("!") && (n = e.slice(0, -1)), n)
        return {
          matcher: n,
          body: (i) => (i.forEach((a) => {
            a[1] != null && (a[1] += " !important");
          }), i)
        };
    }
  };
}
const Ba = B("print", "@media print"), Da = {
  name: "media",
  match(t, e) {
    const r = V("media-", t, e.generator.config.separators);
    if (r) {
      const [n, o] = r;
      let i = l.bracket(n) ?? "";
      if (i === "" && (i = e.theme.media?.[n] ?? ""), i)
        return {
          matcher: o,
          handle: (a, s) => s({
            ...a,
            parent: `${a.parent ? `${a.parent} $$ ` : ""}@media ${i}`
          })
        };
    }
  },
  multiPass: !0
}, Ia = {
  name: "selector",
  match(t, e) {
    const r = $t("selector-", t, e.generator.config.separators);
    if (r) {
      const [n, o] = r, i = l.bracket(n);
      if (i)
        return {
          matcher: o,
          selector: () => i
        };
    }
  }
}, Va = {
  name: "layer",
  match(t, e) {
    const r = V("layer-", t, e.generator.config.separators);
    if (r) {
      const [n, o] = r, i = l.bracket(n) ?? n;
      if (i)
        return {
          matcher: o,
          handle: (a, s) => s({
            ...a,
            parent: `${a.parent ? `${a.parent} $$ ` : ""}@layer ${i}`
          })
        };
    }
  }
}, Ya = {
  name: "uno-layer",
  match(t, e) {
    const r = V("uno-layer-", t, e.generator.config.separators);
    if (r) {
      const [n, o] = r, i = l.bracket(n) ?? n;
      if (i)
        return {
          matcher: o,
          layer: i
        };
    }
  }
}, Xa = {
  name: "scope",
  match(t, e) {
    const r = $t("scope-", t, e.generator.config.separators);
    if (r) {
      const [n, o] = r, i = l.bracket(n);
      if (i)
        return {
          matcher: o,
          selector: (a) => `${i} $$ ${a}`
        };
    }
  }
}, qa = {
  name: "variables",
  match(t, e) {
    if (!t.startsWith("["))
      return;
    const [r, n] = de(t, "[", "]") ?? [];
    if (!(r && n))
      return;
    let o;
    for (const s of e.generator.config.separators)
      if (n.startsWith(s)) {
        o = n.slice(s.length);
        break;
      }
    if (o == null)
      return;
    const i = l.bracket(r) ?? "", a = i.startsWith("@");
    if (a || i.includes("&"))
      return {
        matcher: o,
        handle(s, c) {
          const f = a ? {
            parent: `${s.parent ? `${s.parent} $$ ` : ""}${i}`
          } : {
            selector: i.replace(/&/g, s.selector)
          };
          return c({
            ...s,
            ...f
          });
        }
      };
  },
  multiPass: !0
}, Ha = {
  name: "theme-variables",
  match(t, e) {
    if (li(t))
      return {
        matcher: t,
        handle(r, n) {
          return n({
            ...r,
            //  entries: [ [ '--css-spacing', '28px' ] ],
            entries: JSON.parse(fi(JSON.stringify(r.entries), e.theme))
          });
        }
      };
  }
}, Mn = /^-?[0-9.]+(?:[a-z]+|%)?$/, Fn = /-?[0-9.]+(?:[a-z]+|%)?/, Ga = [
  /\b(opacity|color|flex|backdrop-filter|^filter|transform)\b/
];
function Ka(t) {
  const e = t.match(me) || t.match(hr);
  if (e) {
    const [r, n] = It(`(${e[2]})${e[3]}`, "(", ")", " ") ?? [];
    if (r)
      return `calc(${e[1]}${r} * -1)${n ? ` ${n}` : ""}`;
  }
}
const Za = /\b(hue-rotate)\s*(\(.*)/;
function Ja(t) {
  const e = t.match(Za);
  if (e) {
    const [r, n] = It(e[2], "(", ")", " ") ?? [];
    if (r) {
      const o = Mn.test(r.slice(1, -1)) ? r.replace(Fn, (i) => i.startsWith("-") ? i.slice(1) : `-${i}`) : `(calc(${r} * -1))`;
      return `${e[1]}${o}${n ? ` ${n}` : ""}`;
    }
  }
}
const Qa = {
  name: "negative",
  match(t) {
    if (t.startsWith("-"))
      return {
        matcher: t.slice(1),
        body: (e) => {
          if (e.find((n) => n[0] === Mi))
            return;
          let r = !1;
          return e.forEach((n) => {
            const o = n[1]?.toString();
            if (!o || o === "0" || Ga.some((s) => s.test(n[0])))
              return;
            const i = Ka(o);
            if (i) {
              n[1] = i, r = !0;
              return;
            }
            const a = Ja(o);
            if (a) {
              n[1] = a, r = !0;
              return;
            }
            Mn.test(o) && (n[1] = o.replace(Fn, (s) => s.startsWith("-") ? s.slice(1) : `-${s}`), r = !0);
          }), r ? e : [];
        }
      };
  }
}, it = Object.fromEntries([
  // pseudo elements part 1
  ["first-letter", "::first-letter"],
  ["first-line", "::first-line"],
  // location
  "any-link",
  "link",
  "visited",
  "target",
  ["open", "[open]"],
  // forms
  "default",
  "checked",
  "indeterminate",
  "placeholder-shown",
  "autofill",
  "optional",
  "required",
  "valid",
  "invalid",
  "user-valid",
  "user-invalid",
  "in-range",
  "out-of-range",
  "read-only",
  "read-write",
  // content
  "empty",
  // interactions
  "focus-within",
  "hover",
  "focus",
  "focus-visible",
  "active",
  "enabled",
  "disabled",
  "popover-open",
  // tree-structural
  "root",
  "empty",
  ["even-of-type", ":nth-of-type(even)"],
  ["even", ":nth-child(even)"],
  ["odd-of-type", ":nth-of-type(odd)"],
  ["odd", ":nth-child(odd)"],
  "first-of-type",
  ["first", ":first-child"],
  "last-of-type",
  ["last", ":last-child"],
  "only-child",
  "only-of-type",
  // pseudo elements part 2
  ["backdrop-element", "::backdrop"],
  ["placeholder", "::placeholder"],
  ["before", "::before"],
  ["after", "::after"],
  ["selection", " ::selection"],
  ["marker", " ::marker"],
  ["file", "::file-selector-button"]
].map((t) => Array.isArray(t) ? t : [t, `:${t}`])), Wn = Object.keys(it), at = Object.fromEntries([
  ["backdrop", "::backdrop"]
].map((t) => Array.isArray(t) ? t : [t, `:${t}`])), Tn = Object.keys(at), ts = [
  "not",
  "is",
  "where",
  "has"
], le = Object.entries(it).filter(([, t]) => !t.startsWith("::")).map(([t]) => t).sort((t, e) => e.length - t.length).join("|"), fe = Object.entries(at).filter(([, t]) => !t.startsWith("::")).map(([t]) => t).sort((t, e) => e.length - t.length).join("|"), J = ts.join("|");
function es(t, e, r) {
  const n = new RegExp(`^(${yt(e)}:)(\\S+)${yt(r)}\\1`);
  let o, i, a, s;
  const c = (d) => {
    const m = $t(`${t}-`, d, []);
    if (!m)
      return;
    const [h, b] = m, y = l.bracket(h);
    if (y == null)
      return;
    const w = b.split(o, 1)?.[0] ?? "", C = `${e}${gt(w)}`;
    return [
      w,
      d.slice(d.length - (b.length - w.length - 1)),
      y.includes("&") ? y.replace(/&/g, C) : `${C}${y}`
    ];
  }, f = (d) => {
    const m = d.match(i) || d.match(a);
    if (!m)
      return;
    const [h, b, y] = m, w = m[3] ?? "";
    let C = it[y] || at[y] || `:${y}`;
    return b && (C = `:${b}(${C})`), [
      w,
      d.slice(h.length),
      `${e}${gt(w)}${C}`,
      y
    ];
  }, u = (d) => {
    const m = d.match(s);
    if (!m)
      return;
    const [h, b, y] = m, w = m[3] ?? "", C = `:${b}(${y})`;
    return [
      w,
      d.slice(h.length),
      `${e}${gt(w)}${C}`
    ];
  };
  return {
    name: `pseudo:${t}`,
    match(d, m) {
      if (o && i && a || (o = new RegExp(`(?:${m.generator.config.separators.join("|")})`), i = new RegExp(`^${t}-(?:(?:(${J})-)?(${le}))(?:(/\\w+))?(?:${m.generator.config.separators.join("|")})`), a = new RegExp(`^${t}-(?:(?:(${J})-)?(${fe}))(?:(/\\w+))?(?:${m.generator.config.separators.filter((g) => g !== "-").join("|")})`), s = new RegExp(`^${t}-(?:(${J})-)?\\[(.+)\\](?:(/\\w+))?(?:${m.generator.config.separators.filter((g) => g !== "-").join("|")})`)), !d.startsWith(t))
        return;
      const h = c(d) || f(d) || u(d);
      if (!h)
        return;
      const [b, y, w, C = ""] = h;
      return b !== "" && Dt("The labeled variant is experimental and may not follow semver."), {
        matcher: y,
        handle: (g, $) => $({
          ...g,
          prefix: `${w}${r}${g.prefix}`.replace(n, "$1$2:"),
          sort: Wn.indexOf(C) ?? Tn.indexOf(C)
        })
      };
    },
    multiPass: !0
  };
}
const rs = [
  "::-webkit-resizer",
  "::-webkit-scrollbar",
  "::-webkit-scrollbar-button",
  "::-webkit-scrollbar-corner",
  "::-webkit-scrollbar-thumb",
  "::-webkit-scrollbar-track",
  "::-webkit-scrollbar-track-piece",
  "::file-selector-button"
], tr = Object.entries(it).map(([t]) => t).sort((t, e) => e.length - t.length).join("|"), er = Object.entries(at).map(([t]) => t).sort((t, e) => e.length - t.length).join("|");
function ns() {
  let t, e;
  return {
    name: "pseudo",
    match(r, n) {
      t && t || (t = new RegExp(`^(${tr})(?:${n.generator.config.separators.join("|")})`), e = new RegExp(`^(${er})(?:${n.generator.config.separators.filter((i) => i !== "-").join("|")})`));
      const o = r.match(t) || r.match(e);
      if (o) {
        const i = it[o[1]] || at[o[1]] || `:${o[1]}`;
        let a = Wn.indexOf(o[1]);
        return a === -1 && (a = Tn.indexOf(o[1])), a === -1 && (a = void 0), {
          matcher: r.slice(o[0].length),
          handle: (s, c) => {
            const f = i.startsWith("::") && !rs.includes(i) ? {
              pseudo: `${s.pseudo}${i}`
            } : {
              selector: `${s.selector}${i}`
            };
            return c({
              ...s,
              ...f,
              sort: a,
              noMerge: !0
            });
          }
        };
      }
    },
    multiPass: !0,
    autocomplete: `(${tr}|${er}):`
  };
}
function os() {
  let t, e, r;
  return {
    match(n, o) {
      t && e || (t = new RegExp(`^(${J})-(${le})(?:${o.generator.config.separators.join("|")})`), e = new RegExp(`^(${J})-(${fe})(?:${o.generator.config.separators.filter((a) => a !== "-").join("|")})`), r = new RegExp(`^(${J})-(\\[.+\\])(?:${o.generator.config.separators.filter((a) => a !== "-").join("|")})`));
      const i = n.match(t) || n.match(e) || n.match(r);
      if (i) {
        const a = i[1], c = de(i[2], "[", "]") ? l.bracket(i[2]) : it[i[2]] || at[i[2]] || `:${i[2]}`;
        return {
          matcher: n.slice(i[0].length),
          selector: (f) => `${f}:${a}(${c})`
        };
      }
    },
    multiPass: !0,
    autocomplete: `(${J})-(${le}|${fe}):`
  };
}
function is(t = {}) {
  const e = !!t?.attributifyPseudo;
  let r = t?.prefix ?? "";
  r = (Array.isArray(r) ? r : [r]).filter(Boolean)[0] ?? "";
  const n = (o, i) => es(o, e ? `[${r}${o}=""]` : `.${r}${o}`, i);
  return [
    n("group", " "),
    n("peer", "~"),
    n("parent", ">"),
    n("previous", "+"),
    n("group-aria", " "),
    n("peer-aria", "~"),
    n("parent-aria", ">"),
    n("previous-aria", "+")
  ];
}
const as = /(part-\[(.+)\]:)(.+)/, ss = {
  match(t) {
    const e = t.match(as);
    if (e) {
      const r = `part(${e[2]})`;
      return {
        matcher: t.slice(e[1].length),
        selector: (n) => `${n}::${r}`
      };
    }
  },
  multiPass: !0
}, cs = {
  name: "starting",
  match(t) {
    if (t.startsWith("starting:"))
      return {
        matcher: t.slice(9),
        handle: (e, r) => r({
          ...e,
          parent: "@starting-style"
        })
      };
  }
}, ls = {
  name: "supports",
  match(t, e) {
    const r = V("supports-", t, e.generator.config.separators);
    if (r) {
      const [n, o] = r;
      let i = l.bracket(n) ?? "";
      if (i === "" && (i = e.theme.supports?.[n] ?? ""), i)
        return {
          matcher: o,
          handle: (a, s) => s({
            ...a,
            parent: `${a.parent ? `${a.parent} $$ ` : ""}@supports ${i}`
          })
        };
    }
  },
  multiPass: !0
};
function Nn(t) {
  return [
    _a,
    Wa,
    Va,
    Ia,
    Ya,
    Qa,
    cs,
    Ua(),
    ls,
    Ba,
    Da,
    Oa(),
    ...Pa,
    ns(),
    os(),
    ...is(t),
    ss,
    ...Fa(t),
    ...Na,
    Xa,
    ...Ra,
    Ma,
    qa,
    ...Ta,
    ...La,
    Ha
  ];
}
const fs = [
  {
    layer: "preflights",
    getCSS(t) {
      if (t.theme.preflightBase) {
        const e = Mt(Object.entries(t.theme.preflightBase));
        return O(t.theme.preflightRoot ?? ["*,::before,::after", "::backdrop"]).map((n) => `${n}{${e}}`).join("");
      }
    }
  }
], us = {
  position: [
    "relative",
    "absolute",
    "fixed",
    "sticky",
    "static"
  ],
  globalKeyword: E
}, Un = (t = {}) => (t.dark = t.dark ?? "class", t.attributifyPseudo = t.attributifyPseudo ?? !1, t.preflight = t.preflight ?? !0, t.variablePrefix = t.variablePrefix ?? "un-", {
  name: "@unocss/preset-mini",
  theme: qr,
  rules: Aa,
  variants: Nn(t),
  options: t,
  prefix: t.prefix,
  postprocess: ds(t.variablePrefix),
  preflights: t.preflight ? ps(fs, t.variablePrefix) : [],
  extractorDefault: t.arbitraryVariants === !1 ? void 0 : To,
  autocomplete: {
    shorthands: us
  }
});
function ds(t) {
  if (t !== "un-")
    return (e) => {
      e.entries.forEach((r) => {
        r[0] = r[0].replace(/^--un-/, `--${t}`), typeof r[1] == "string" && (r[1] = r[1].replace(/var\(--un-/g, `var(--${t}`));
      });
    };
}
function ps(t, e) {
  return e !== "un-" ? t.map((r) => ({
    ...r,
    getCSS: async (n) => {
      const o = await r.getCSS(n);
      if (o)
        return o.replace(/--un-/g, `--${e}`);
    }
  })) : t;
}
function ms(t) {
  if (t == null || t === !1)
    return [];
  const e = (r) => r.startsWith(":is(") && r.endsWith(")") ? r : r.includes("::") ? r.replace(/(.*?)(\s*::.*)/, ":is($1)$2") : `:is(${r})`;
  return [
    t === !0 ? (r) => {
      r.entries.forEach((n) => {
        n[1] != null && !String(n[1]).endsWith("!important") && (n[1] += " !important");
      });
    } : (r) => {
      r.selector.startsWith(t) || (r.selector = `${t} ${e(r.selector)}`);
    }
  ];
}
function hs(t) {
  return [
    ...O(Un(t).postprocess),
    ...ms(t.important)
  ];
}
const gs = [
  [/^(?:animate-)?keyframes-(.+)$/, ([, t], { theme: e }) => {
    const r = e.animation?.keyframes?.[t];
    if (r)
      return [
        `@keyframes ${t}${r}`,
        { animation: t }
      ];
  }, { autocomplete: ["animate-keyframes-$animation.keyframes", "keyframes-$animation.keyframes"] }],
  [/^animate-(.+)$/, ([, t], { theme: e }) => {
    const r = e.animation?.keyframes?.[t];
    if (r) {
      const n = e.animation?.durations?.[t] ?? "1s", o = e.animation?.timingFns?.[t] ?? "linear", i = e.animation?.counts?.[t] ?? 1, a = e.animation?.properties?.[t];
      return [
        `@keyframes ${t}${r}`,
        {
          animation: `${t} ${n} ${o} ${i}`,
          ...a
        }
      ];
    }
    return { animation: l.bracket.cssvar(t) };
  }, { autocomplete: "animate-$animation.keyframes" }],
  [/^animate-name-(.+)/, ([, t]) => ({ "animation-name": l.bracket.cssvar(t) ?? t })],
  // timings
  [/^animate-duration-(.+)$/, ([, t], { theme: e }) => ({ "animation-duration": e.duration?.[t || "DEFAULT"] ?? l.bracket.cssvar.time(t) }), { autocomplete: ["animate-duration", "animate-duration-$duration"] }],
  [/^animate-delay-(.+)$/, ([, t], { theme: e }) => ({ "animation-delay": e.duration?.[t || "DEFAULT"] ?? l.bracket.cssvar.time(t) }), { autocomplete: ["animate-delay", "animate-delay-$duration"] }],
  [/^animate-ease(?:-(.+))?$/, ([, t], { theme: e }) => ({ "animation-timing-function": e.easing?.[t || "DEFAULT"] ?? l.bracket.cssvar(t) }), { autocomplete: ["animate-ease", "animate-ease-$easing"] }],
  // fill mode
  [/^animate-(fill-mode-|fill-|mode-)?(.+)$/, ([, t, e]) => ["none", "forwards", "backwards", "both", t ? E : []].includes(e) ? { "animation-fill-mode": e } : void 0, {
    autocomplete: [
      "animate-(fill|mode|fill-mode)",
      "animate-(fill|mode|fill-mode)-(none|forwards|backwards|both|inherit|initial|revert|revert-layer|unset)",
      "animate-(none|forwards|backwards|both|inherit|initial|revert|revert-layer|unset)"
    ]
  }],
  // direction
  [/^animate-(direction-)?(.+)$/, ([, t, e]) => ["normal", "reverse", "alternate", "alternate-reverse", t ? E : []].includes(e) ? { "animation-direction": e } : void 0, {
    autocomplete: [
      "animate-direction",
      "animate-direction-(normal|reverse|alternate|alternate-reverse|inherit|initial|revert|revert-layer|unset)",
      "animate-(normal|reverse|alternate|alternate-reverse|inherit|initial|revert|revert-layer|unset)"
    ]
  }],
  // others
  [/^animate-(?:iteration-count-|iteration-|count-)(.+)$/, ([, t]) => ({ "animation-iteration-count": l.bracket.cssvar(t) ?? t.replace(/-/g, ",") }), { autocomplete: ["animate-(iteration|count|iteration-count)", "animate-(iteration|count|iteration-count)-<num>"] }],
  [/^animate-(play-state-|play-|state-)?(.+)$/, ([, t, e]) => ["paused", "running", t ? E : []].includes(e) ? { "animation-play-state": e } : void 0, {
    autocomplete: [
      "animate-(play|state|play-state)",
      "animate-(play|state|play-state)-(paused|running|inherit|initial|revert|revert-layer|unset)",
      "animate-(paused|running|inherit|initial|revert|revert-layer|unset)"
    ]
  }],
  ["animate-none", { animation: "none" }],
  ...x("animate", "animation")
];
function rr(t) {
  return t ? M(t, 0) : "rgb(255 255 255 / 0)";
}
function bs(t, e, r, n) {
  return e ? n != null ? M(e, n) : M(e, `var(--un-${t}-opacity, ${Nt(e)})`) : M(r, n);
}
function ee() {
  return ([, t, e], { theme: r }) => {
    const n = Xt(e, r, "backgroundColor");
    if (!n)
      return;
    const { alpha: o, color: i, cssColor: a } = n;
    if (!i)
      return;
    const s = bs(t, a, i, o);
    switch (t) {
      case "from":
        return {
          "--un-gradient-from-position": "0%",
          "--un-gradient-from": `${s} var(--un-gradient-from-position)`,
          "--un-gradient-to-position": "100%",
          "--un-gradient-to": `${rr(a)} var(--un-gradient-to-position)`,
          "--un-gradient-stops": "var(--un-gradient-from), var(--un-gradient-to)"
        };
      case "via":
        return {
          "--un-gradient-via-position": "50%",
          "--un-gradient-to": rr(a),
          "--un-gradient-stops": `var(--un-gradient-from), ${s} var(--un-gradient-via-position), var(--un-gradient-to)`
        };
      case "to":
        return {
          "--un-gradient-to-position": "100%",
          "--un-gradient-to": `${s} var(--un-gradient-to-position)`
        };
    }
  };
}
function ys() {
  return ([, t, e]) => ({
    [`--un-gradient-${t}-position`]: `${Number(l.bracket.cssvar.percent(e)) * 100}%`
  });
}
const xs = [
  // gradients
  [/^bg-gradient-(.+)$/, ([, t]) => ({ "--un-gradient": l.bracket(t) }), {
    autocomplete: ["bg-gradient", "bg-gradient-(from|to|via)", "bg-gradient-(from|to|via)-$colors", "bg-gradient-(from|to|via)-(op|opacity)", "bg-gradient-(from|to|via)-(op|opacity)-<percent>"]
  }],
  [/^(?:bg-gradient-)?stops-(\[.+\])$/, ([, t]) => ({ "--un-gradient-stops": l.bracket(t) })],
  [/^(?:bg-gradient-)?(from)-(.+)$/, ee()],
  [/^(?:bg-gradient-)?(via)-(.+)$/, ee()],
  [/^(?:bg-gradient-)?(to)-(.+)$/, ee()],
  [/^(?:bg-gradient-)?(from|via|to)-op(?:acity)?-?(.+)$/, ([, t, e]) => ({ [`--un-${t}-opacity`]: l.bracket.percent(e) })],
  [/^(from|via|to)-([\d.]+)%$/, ys()],
  // images
  [/^bg-gradient-((?:repeating-)?(?:linear|radial|conic))$/, ([, t]) => ({
    "background-image": `${t}-gradient(var(--un-gradient, var(--un-gradient-stops, rgb(255 255 255 / 0))))`
  }), { autocomplete: ["bg-gradient-repeating", "bg-gradient-(linear|radial|conic)", "bg-gradient-repeating-(linear|radial|conic)"] }],
  // ignore any center position
  [/^bg-gradient-to-([rltb]{1,2})$/, ([, t]) => {
    if (t in P)
      return {
        "--un-gradient-shape": `to ${P[t]}`,
        "--un-gradient": "var(--un-gradient-shape), var(--un-gradient-stops)",
        "background-image": "linear-gradient(var(--un-gradient))"
      };
  }, { autocomplete: `bg-gradient-to-(${Object.keys(P).filter((t) => t.length <= 2 && Array.from(t).every((e) => "rltb".includes(e))).join("|")})` }],
  [/^(?:bg-gradient-)?shape-(.+)$/, ([, t]) => {
    const e = t in P ? `to ${P[t]}` : l.bracket(t);
    if (e != null)
      return {
        "--un-gradient-shape": e,
        "--un-gradient": "var(--un-gradient-shape), var(--un-gradient-stops)"
      };
  }, { autocomplete: ["bg-gradient-shape", `bg-gradient-shape-(${Object.keys(P).join("|")})`, `shape-(${Object.keys(P).join("|")})`] }],
  ["bg-none", { "background-image": "none" }],
  ["box-decoration-slice", { "box-decoration-break": "slice" }],
  ["box-decoration-clone", { "box-decoration-break": "clone" }],
  ...x("box-decoration", "box-decoration-break"),
  // size
  ["bg-auto", { "background-size": "auto" }],
  ["bg-cover", { "background-size": "cover" }],
  ["bg-contain", { "background-size": "contain" }],
  // attachments
  ["bg-fixed", { "background-attachment": "fixed" }],
  ["bg-local", { "background-attachment": "local" }],
  ["bg-scroll", { "background-attachment": "scroll" }],
  // clips
  ["bg-clip-border", { "-webkit-background-clip": "border-box", "background-clip": "border-box" }],
  ["bg-clip-content", { "-webkit-background-clip": "content-box", "background-clip": "content-box" }],
  ["bg-clip-padding", { "-webkit-background-clip": "padding-box", "background-clip": "padding-box" }],
  ["bg-clip-text", { "-webkit-background-clip": "text", "background-clip": "text" }],
  ...E.map((t) => [`bg-clip-${t}`, {
    "-webkit-background-clip": t,
    "background-clip": t
  }]),
  // positions
  // skip 1 & 2 letters shortcut
  [/^bg-([-\w]{3,})$/, ([, t]) => ({ "background-position": P[t] })],
  // repeats
  ["bg-repeat", { "background-repeat": "repeat" }],
  ["bg-no-repeat", { "background-repeat": "no-repeat" }],
  ["bg-repeat-x", { "background-repeat": "repeat-x" }],
  ["bg-repeat-y", { "background-repeat": "repeat-y" }],
  ["bg-repeat-round", { "background-repeat": "round" }],
  ["bg-repeat-space", { "background-repeat": "space" }],
  ...x("bg-repeat", "background-repeat"),
  // origins
  ["bg-origin-border", { "background-origin": "border-box" }],
  ["bg-origin-padding", { "background-origin": "padding-box" }],
  ["bg-origin-content", { "background-origin": "content-box" }],
  ...x("bg-origin", "background-origin")
], re = {
  disc: "disc",
  circle: "circle",
  square: "square",
  decimal: "decimal",
  "zero-decimal": "decimal-leading-zero",
  greek: "lower-greek",
  roman: "lower-roman",
  "upper-roman": "upper-roman",
  alpha: "lower-alpha",
  "upper-alpha": "upper-alpha",
  latin: "lower-latin",
  "upper-latin": "upper-latin"
}, $s = [
  // base
  [/^list-(.+?)(?:-(outside|inside))?$/, ([, t, e]) => {
    const r = re[t];
    if (r)
      return e ? {
        "list-style-position": e,
        "list-style-type": r
      } : { "list-style-type": r };
  }, { autocomplete: [`list-(${Object.keys(re).join("|")})`, `list-(${Object.keys(re).join("|")})-(outside|inside)`] }],
  // styles
  ["list-outside", { "list-style-position": "outside" }],
  ["list-inside", { "list-style-position": "inside" }],
  ["list-none", { "list-style-type": "none" }],
  // image
  [/^list-image-(.+)$/, ([, t]) => {
    if (/^\[url\(.+\)\]$/.test(t))
      return { "list-style-image": l.bracket(t) };
  }],
  ["list-image-none", { "list-style-image": "none" }],
  ...x("list", "list-style-type")
], vs = [
  [/^accent-(.+)$/, R("accent-color", "accent", "accentColor"), { autocomplete: "accent-$colors" }],
  [/^accent-op(?:acity)?-?(.+)$/, ([, t]) => ({ "--un-accent-opacity": l.bracket.percent(t) }), { autocomplete: ["accent-(op|opacity)", "accent-(op|opacity)-<percent>"] }]
], ws = [
  [/^caret-(.+)$/, R("caret-color", "caret", "textColor"), { autocomplete: "caret-$colors" }],
  [/^caret-op(?:acity)?-?(.+)$/, ([, t]) => ({ "--un-caret-opacity": l.bracket.percent(t) }), { autocomplete: ["caret-(op|opacity)", "caret-(op|opacity)-<percent>"] }]
], ks = [
  ["image-render-auto", { "image-rendering": "auto" }],
  ["image-render-edge", { "image-rendering": "crisp-edges" }],
  ["image-render-pixel", [
    ["-ms-interpolation-mode", "nearest-neighbor"],
    ["image-rendering", "-webkit-optimize-contrast"],
    ["image-rendering", "-moz-crisp-edges"],
    ["image-rendering", "-o-pixelated"],
    ["image-rendering", "pixelated"]
  ]]
], Ss = [
  ["overscroll-auto", { "overscroll-behavior": "auto" }],
  ["overscroll-contain", { "overscroll-behavior": "contain" }],
  ["overscroll-none", { "overscroll-behavior": "none" }],
  ...x("overscroll", "overscroll-behavior"),
  ["overscroll-x-auto", { "overscroll-behavior-x": "auto" }],
  ["overscroll-x-contain", { "overscroll-behavior-x": "contain" }],
  ["overscroll-x-none", { "overscroll-behavior-x": "none" }],
  ...x("overscroll-x", "overscroll-behavior-x"),
  ["overscroll-y-auto", { "overscroll-behavior-y": "auto" }],
  ["overscroll-y-contain", { "overscroll-behavior-y": "contain" }],
  ["overscroll-y-none", { "overscroll-behavior-y": "none" }],
  ...x("overscroll-y", "overscroll-behavior-y")
], Cs = [
  ["scroll-auto", { "scroll-behavior": "auto" }],
  ["scroll-smooth", { "scroll-behavior": "smooth" }],
  ...x("scroll", "scroll-behavior")
], zs = [
  [/^columns-(.+)$/, ([, t]) => ({ columns: l.bracket.global.number.auto.numberWithUnit(t) }), { autocomplete: "columns-<num>" }],
  // break before
  ["break-before-auto", { "break-before": "auto" }],
  ["break-before-avoid", { "break-before": "avoid" }],
  ["break-before-all", { "break-before": "all" }],
  ["break-before-avoid-page", { "break-before": "avoid-page" }],
  ["break-before-page", { "break-before": "page" }],
  ["break-before-left", { "break-before": "left" }],
  ["break-before-right", { "break-before": "right" }],
  ["break-before-column", { "break-before": "column" }],
  ...x("break-before"),
  // break inside
  ["break-inside-auto", { "break-inside": "auto" }],
  ["break-inside-avoid", { "break-inside": "avoid" }],
  ["break-inside-avoid-page", { "break-inside": "avoid-page" }],
  ["break-inside-avoid-column", { "break-inside": "avoid-column" }],
  ...x("break-inside"),
  // break after
  ["break-after-auto", { "break-after": "auto" }],
  ["break-after-avoid", { "break-after": "avoid" }],
  ["break-after-all", { "break-after": "all" }],
  ["break-after-avoid-page", { "break-after": "avoid-page" }],
  ["break-after-page", { "break-after": "page" }],
  ["break-after-left", { "break-after": "left" }],
  ["break-after-right", { "break-after": "right" }],
  ["break-after-column", { "break-after": "column" }],
  ...x("break-after")
], js = /@media \(min-width: (.+)\)/, Es = [
  [
    /^__container$/,
    (t, e) => {
      const { theme: r, variantHandlers: n } = e, o = r.container?.padding;
      let i;
      A(o) ? i = o : i = o?.DEFAULT;
      const a = r.container?.maxWidth;
      let s;
      for (const f of n) {
        const u = f.handle?.({}, (d) => d)?.parent;
        if (A(u)) {
          const d = u.match(js)?.[1];
          if (d) {
            const h = (qt(e) ?? []).find((b) => b.size === d)?.point;
            a ? h && (s = a?.[h]) : s = d, h && !A(o) && (i = o?.[h] ?? i);
          }
        }
      }
      const c = {
        "max-width": s
      };
      return n.length || (c.width = "100%"), r.container?.center && (c["margin-left"] = "auto", c["margin-right"] = "auto"), o && (c["padding-left"] = i, c["padding-right"] = i), c;
    },
    { internal: !0 }
  ]
], As = [
  [/^(?:(\w+)[:-])?container$/, ([, t], e) => {
    let r = (qt(e) ?? []).map((o) => o.point);
    if (t) {
      if (!r.includes(t))
        return;
      r = r.slice(r.indexOf(t));
    }
    const n = r.map((o) => `${o}:__container`);
    return t || n.unshift("__container"), n;
  }]
], _s = [
  // divides
  [/^divide-?([xy])$/, Rt, { autocomplete: ["divide-(x|y|block|inline)", "divide-(x|y|block|inline)-reverse", "divide-(x|y|block|inline)-$lineWidth"] }],
  [/^divide-?([xy])-?(.+)$/, Rt],
  [/^divide-?([xy])-reverse$/, ([, t]) => ({ [`--un-divide-${t}-reverse`]: 1 })],
  [/^divide-(block|inline)$/, Rt],
  [/^divide-(block|inline)-(.+)$/, Rt],
  [/^divide-(block|inline)-reverse$/, ([, t]) => ({ [`--un-divide-${t}-reverse`]: 1 })],
  // color & opacity
  [/^divide-(.+)$/, R("border-color", "divide", "borderColor"), { autocomplete: "divide-$colors" }],
  [/^divide-op(?:acity)?-?(.+)$/, ([, t]) => ({ "--un-divide-opacity": l.bracket.percent(t) }), { autocomplete: ["divide-(op|opacity)", "divide-(op|opacity)-<percent>"] }],
  // styles
  ...rt.map((t) => [`divide-${t}`, { "border-style": t }])
];
function Rt([, t, e], { theme: r }) {
  let n = r.lineWidth?.[e || "DEFAULT"] ?? l.bracket.cssvar.px(e || "1");
  if (n != null) {
    n === "0" && (n = "0px");
    const o = F[t].map((i) => {
      const a = `border${i}-width`, s = i.endsWith("right") || i.endsWith("bottom") ? `calc(${n} * var(--un-divide-${t}-reverse))` : `calc(${n} * calc(1 - var(--un-divide-${t}-reverse)))`;
      return [a, s];
    });
    if (o)
      return [
        [`--un-divide-${t}-reverse`, 0],
        ...o
      ];
  }
}
const Ls = {
  "--un-blur": S,
  "--un-brightness": S,
  "--un-contrast": S,
  "--un-drop-shadow": S,
  "--un-grayscale": S,
  "--un-hue-rotate": S,
  "--un-invert": S,
  "--un-saturate": S,
  "--un-sepia": S
}, Ut = "var(--un-blur) var(--un-brightness) var(--un-contrast) var(--un-drop-shadow) var(--un-grayscale) var(--un-hue-rotate) var(--un-invert) var(--un-saturate) var(--un-sepia)", Os = {
  "--un-backdrop-blur": S,
  "--un-backdrop-brightness": S,
  "--un-backdrop-contrast": S,
  "--un-backdrop-grayscale": S,
  "--un-backdrop-hue-rotate": S,
  "--un-backdrop-invert": S,
  "--un-backdrop-opacity": S,
  "--un-backdrop-saturate": S,
  "--un-backdrop-sepia": S
}, Bt = "var(--un-backdrop-blur) var(--un-backdrop-brightness) var(--un-backdrop-contrast) var(--un-backdrop-grayscale) var(--un-backdrop-hue-rotate) var(--un-backdrop-invert) var(--un-backdrop-opacity) var(--un-backdrop-saturate) var(--un-backdrop-sepia)";
function ne(t) {
  let e = l.bracket.cssvar(t || "");
  if (e != null || (e = t ? l.percent(t) : "1", e != null && Number.parseFloat(e) <= 1))
    return e;
}
function Y(t, e) {
  return ([, r, n], { theme: o }) => {
    const i = e(n, o) ?? (n === "none" ? "0" : "");
    if (i !== "")
      return r ? {
        [`--un-${r}${t}`]: `${t}(${i})`,
        "-webkit-backdrop-filter": Bt,
        "backdrop-filter": Bt
      } : {
        [`--un-${t}`]: `${t}(${i})`,
        filter: Ut
      };
  };
}
function Rs([, t], { theme: e }) {
  let r = e.dropShadow?.[t || "DEFAULT"];
  if (r != null)
    return {
      "--un-drop-shadow": `drop-shadow(${he(r, "--un-drop-shadow-color").join(") drop-shadow(")})`,
      filter: Ut
    };
  if (r = l.bracket.cssvar(t), r != null)
    return {
      "--un-drop-shadow": `drop-shadow(${r})`,
      filter: Ut
    };
}
const Ps = [
  // filters
  [/^(?:(backdrop-)|filter-)?blur(?:-(.+))?$/, Y("blur", (t, e) => e.blur?.[t || "DEFAULT"] || l.bracket.cssvar.px(t)), { autocomplete: ["(backdrop|filter)-blur-$blur", "blur-$blur", "filter-blur"] }],
  [/^(?:(backdrop-)|filter-)?brightness-(.+)$/, Y("brightness", (t) => l.bracket.cssvar.percent(t)), { autocomplete: ["(backdrop|filter)-brightness-<percent>", "brightness-<percent>"] }],
  [/^(?:(backdrop-)|filter-)?contrast-(.+)$/, Y("contrast", (t) => l.bracket.cssvar.percent(t)), { autocomplete: ["(backdrop|filter)-contrast-<percent>", "contrast-<percent>"] }],
  // drop-shadow only on filter
  [/^(?:filter-)?drop-shadow(?:-(.+))?$/, Rs, {
    autocomplete: [
      "filter-drop",
      "filter-drop-shadow",
      "filter-drop-shadow-color",
      "drop-shadow",
      "drop-shadow-color",
      "filter-drop-shadow-$dropShadow",
      "drop-shadow-$dropShadow",
      "filter-drop-shadow-color-$colors",
      "drop-shadow-color-$colors",
      "filter-drop-shadow-color-(op|opacity)",
      "drop-shadow-color-(op|opacity)",
      "filter-drop-shadow-color-(op|opacity)-<percent>",
      "drop-shadow-color-(op|opacity)-<percent>"
    ]
  }],
  [/^(?:filter-)?drop-shadow-color-(.+)$/, R("--un-drop-shadow-color", "drop-shadow", "shadowColor")],
  [/^(?:filter-)?drop-shadow-color-op(?:acity)?-?(.+)$/, ([, t]) => ({ "--un-drop-shadow-opacity": l.bracket.percent(t) })],
  [/^(?:(backdrop-)|filter-)?grayscale(?:-(.+))?$/, Y("grayscale", ne), { autocomplete: ["(backdrop|filter)-grayscale", "(backdrop|filter)-grayscale-<percent>", "grayscale-<percent>"] }],
  [/^(?:(backdrop-)|filter-)?hue-rotate-(.+)$/, Y("hue-rotate", (t) => l.bracket.cssvar.degree(t))],
  [/^(?:(backdrop-)|filter-)?invert(?:-(.+))?$/, Y("invert", ne), { autocomplete: ["(backdrop|filter)-invert", "(backdrop|filter)-invert-<percent>", "invert-<percent>"] }],
  // opacity only on backdrop-filter
  [/^(backdrop-)op(?:acity)?-(.+)$/, Y("opacity", (t) => l.bracket.cssvar.percent(t)), { autocomplete: ["backdrop-(op|opacity)", "backdrop-(op|opacity)-<percent>"] }],
  [/^(?:(backdrop-)|filter-)?saturate-(.+)$/, Y("saturate", (t) => l.bracket.cssvar.percent(t)), { autocomplete: ["(backdrop|filter)-saturate", "(backdrop|filter)-saturate-<percent>", "saturate-<percent>"] }],
  [/^(?:(backdrop-)|filter-)?sepia(?:-(.+))?$/, Y("sepia", ne), { autocomplete: ["(backdrop|filter)-sepia", "(backdrop|filter)-sepia-<percent>", "sepia-<percent>"] }],
  // base
  ["filter", { filter: Ut }],
  ["backdrop-filter", {
    "-webkit-backdrop-filter": Bt,
    "backdrop-filter": Bt
  }],
  // nones
  ["filter-none", { filter: "none" }],
  ["backdrop-filter-none", {
    "-webkit-backdrop-filter": "none",
    "backdrop-filter": "none"
  }],
  ...E.map((t) => [`filter-${t}`, { filter: t }]),
  ...E.map((t) => [`backdrop-filter-${t}`, {
    "-webkit-backdrop-filter": t,
    "backdrop-filter": t
  }])
], Ms = [
  [/^line-clamp-(\d+)$/, ([, t]) => ({
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": t,
    "line-clamp": t
  }), { autocomplete: ["line-clamp", "line-clamp-<num>"] }],
  ...["none", ...E].map((t) => [`line-clamp-${t}`, {
    overflow: "visible",
    display: "block",
    "-webkit-box-orient": "horizontal",
    "-webkit-line-clamp": t,
    "line-clamp": t
  }])
], Fs = [
  // The prefix `$ ` is intentional. This rule is not to be matched directly from user-generated token.
  // See variants/placeholder.
  [/^\$ placeholder-(.+)$/, R("color", "placeholder", "accentColor"), { autocomplete: "placeholder-$colors" }],
  [/^\$ placeholder-op(?:acity)?-?(.+)$/, ([, t]) => ({ "--un-placeholder-opacity": l.bracket.percent(t) }), { autocomplete: ["placeholder-(op|opacity)", "placeholder-(op|opacity)-<percent>"] }]
], Ws = {
  "--un-scroll-snap-strictness": "proximity"
}, Ts = [
  // snap type
  [/^snap-(x|y)$/, ([, t]) => ({
    "scroll-snap-type": `${t} var(--un-scroll-snap-strictness)`
  }), { autocomplete: "snap-(x|y|both)" }],
  [/^snap-both$/, () => ({
    "scroll-snap-type": "both var(--un-scroll-snap-strictness)"
  })],
  ["snap-mandatory", { "--un-scroll-snap-strictness": "mandatory" }],
  ["snap-proximity", { "--un-scroll-snap-strictness": "proximity" }],
  ["snap-none", { "scroll-snap-type": "none" }],
  // snap align
  ["snap-start", { "scroll-snap-align": "start" }],
  ["snap-end", { "scroll-snap-align": "end" }],
  ["snap-center", { "scroll-snap-align": "center" }],
  ["snap-align-none", { "scroll-snap-align": "none" }],
  // snap stop
  ["snap-normal", { "scroll-snap-stop": "normal" }],
  ["snap-always", { "scroll-snap-stop": "always" }],
  // scroll margin
  [/^scroll-ma?()-?(.+)$/, j("scroll-margin"), {
    autocomplete: [
      "scroll-(m|p|ma|pa|block|inline)",
      "scroll-(m|p|ma|pa|block|inline)-$spacing",
      "scroll-(m|p|ma|pa|block|inline)-(x|y|r|l|t|b|bs|be|is|ie)",
      "scroll-(m|p|ma|pa|block|inline)-(x|y|r|l|t|b|bs|be|is|ie)-$spacing"
    ]
  }],
  [/^scroll-m-?([xy])-?(.+)$/, j("scroll-margin")],
  [/^scroll-m-?([rltb])-?(.+)$/, j("scroll-margin")],
  [/^scroll-m-(block|inline)-(.+)$/, j("scroll-margin")],
  [/^scroll-m-?([bi][se])-?(.+)$/, j("scroll-margin")],
  // scroll padding
  [/^scroll-pa?()-?(.+)$/, j("scroll-padding")],
  [/^scroll-p-?([xy])-?(.+)$/, j("scroll-padding")],
  [/^scroll-p-?([rltb])-?(.+)$/, j("scroll-padding")],
  [/^scroll-p-(block|inline)-(.+)$/, j("scroll-padding")],
  [/^scroll-p-?([bi][se])-?(.+)$/, j("scroll-padding")]
], Ns = [
  [/^space-([xy])-(.+)$/, nr, { autocomplete: ["space-(x|y|block|inline)", "space-(x|y|block|inline)-reverse", "space-(x|y|block|inline)-$spacing"] }],
  [/^space-([xy])-reverse$/, ([, t]) => ({ [`--un-space-${t}-reverse`]: 1 })],
  [/^space-(block|inline)-(.+)$/, nr],
  [/^space-(block|inline)-reverse$/, ([, t]) => ({ [`--un-space-${t}-reverse`]: 1 })]
];
function nr([, t, e], { theme: r }) {
  let n = r.spacing?.[e || "DEFAULT"] ?? l.bracket.cssvar.auto.fraction.rem(e || "1");
  if (n != null) {
    n === "0" && (n = "0px");
    const o = F[t].map((i) => {
      const a = `margin${i}`, s = i.endsWith("right") || i.endsWith("bottom") ? `calc(${n} * var(--un-space-${t}-reverse))` : `calc(${n} * calc(1 - var(--un-space-${t}-reverse)))`;
      return [a, s];
    });
    if (o)
      return [
        [`--un-space-${t}-reverse`, 0],
        ...o
      ];
  }
}
const Us = [
  // tailwind compat
  ["uppercase", { "text-transform": "uppercase" }],
  ["lowercase", { "text-transform": "lowercase" }],
  ["capitalize", { "text-transform": "capitalize" }],
  ["normal-case", { "text-transform": "none" }]
], Bs = [
  ...["manual", "auto", "none", ...E].map((t) => [`hyphens-${t}`, {
    "-webkit-hyphens": t,
    "-ms-hyphens": t,
    hyphens: t
  }])
], Ds = [
  ["write-vertical-right", { "writing-mode": "vertical-rl" }],
  ["write-vertical-left", { "writing-mode": "vertical-lr" }],
  ["write-normal", { "writing-mode": "horizontal-tb" }],
  ...x("write", "writing-mode")
], Is = [
  ["write-orient-mixed", { "text-orientation": "mixed" }],
  ["write-orient-sideways", { "text-orientation": "sideways" }],
  ["write-orient-upright", { "text-orientation": "upright" }],
  ...x("write-orient", "text-orientation")
], Vs = [
  [
    "sr-only",
    {
      position: "absolute",
      width: "1px",
      height: "1px",
      padding: "0",
      margin: "-1px",
      overflow: "hidden",
      clip: "rect(0,0,0,0)",
      "white-space": "nowrap",
      "border-width": 0
    }
  ],
  [
    "not-sr-only",
    {
      position: "static",
      width: "auto",
      height: "auto",
      padding: "0",
      margin: "0",
      overflow: "visible",
      clip: "auto",
      "white-space": "normal"
    }
  ]
], Ys = [
  ["isolate", { isolation: "isolate" }],
  ["isolate-auto", { isolation: "auto" }],
  ["isolation-auto", { isolation: "auto" }]
], Xs = [
  // object fit
  ["object-cover", { "object-fit": "cover" }],
  ["object-contain", { "object-fit": "contain" }],
  ["object-fill", { "object-fit": "fill" }],
  ["object-scale-down", { "object-fit": "scale-down" }],
  ["object-none", { "object-fit": "none" }],
  // object position
  [/^object-(.+)$/, ([, t]) => {
    if (P[t])
      return { "object-position": P[t] };
    if (l.bracketOfPosition(t) != null)
      return { "object-position": l.bracketOfPosition(t).split(" ").map((e) => l.position.fraction.auto.px.cssvar(e) ?? e).join(" ") };
  }, { autocomplete: `object-(${Object.keys(P).join("|")})` }]
], qs = [
  ["bg-blend-multiply", { "background-blend-mode": "multiply" }],
  ["bg-blend-screen", { "background-blend-mode": "screen" }],
  ["bg-blend-overlay", { "background-blend-mode": "overlay" }],
  ["bg-blend-darken", { "background-blend-mode": "darken" }],
  ["bg-blend-lighten", { "background-blend-mode": "lighten" }],
  ["bg-blend-color-dodge", { "background-blend-mode": "color-dodge" }],
  ["bg-blend-color-burn", { "background-blend-mode": "color-burn" }],
  ["bg-blend-hard-light", { "background-blend-mode": "hard-light" }],
  ["bg-blend-soft-light", { "background-blend-mode": "soft-light" }],
  ["bg-blend-difference", { "background-blend-mode": "difference" }],
  ["bg-blend-exclusion", { "background-blend-mode": "exclusion" }],
  ["bg-blend-hue", { "background-blend-mode": "hue" }],
  ["bg-blend-saturation", { "background-blend-mode": "saturation" }],
  ["bg-blend-color", { "background-blend-mode": "color" }],
  ["bg-blend-luminosity", { "background-blend-mode": "luminosity" }],
  ["bg-blend-normal", { "background-blend-mode": "normal" }],
  ...x("bg-blend", "background-blend")
], Hs = [
  ["mix-blend-multiply", { "mix-blend-mode": "multiply" }],
  ["mix-blend-screen", { "mix-blend-mode": "screen" }],
  ["mix-blend-overlay", { "mix-blend-mode": "overlay" }],
  ["mix-blend-darken", { "mix-blend-mode": "darken" }],
  ["mix-blend-lighten", { "mix-blend-mode": "lighten" }],
  ["mix-blend-color-dodge", { "mix-blend-mode": "color-dodge" }],
  ["mix-blend-color-burn", { "mix-blend-mode": "color-burn" }],
  ["mix-blend-hard-light", { "mix-blend-mode": "hard-light" }],
  ["mix-blend-soft-light", { "mix-blend-mode": "soft-light" }],
  ["mix-blend-difference", { "mix-blend-mode": "difference" }],
  ["mix-blend-exclusion", { "mix-blend-mode": "exclusion" }],
  ["mix-blend-hue", { "mix-blend-mode": "hue" }],
  ["mix-blend-saturation", { "mix-blend-mode": "saturation" }],
  ["mix-blend-color", { "mix-blend-mode": "color" }],
  ["mix-blend-luminosity", { "mix-blend-mode": "luminosity" }],
  ["mix-blend-plus-lighter", { "mix-blend-mode": "plus-lighter" }],
  ["mix-blend-normal", { "mix-blend-mode": "normal" }],
  ...x("mix-blend")
], Gs = [
  ["min-h-dvh", { "min-height": "100dvh" }],
  ["min-h-svh", { "min-height": "100svh" }],
  ["min-h-lvh", { "min-height": "100lvh" }],
  ["h-dvh", { height: "100dvh" }],
  ["h-svh", { height: "100svh" }],
  ["h-lvh", { height: "100lvh" }],
  ["max-h-dvh", { "max-height": "100dvh" }],
  ["max-h-svh", { "max-height": "100svh" }],
  ["max-h-lvh", { "max-height": "100lvh" }]
], Ks = {
  "--un-border-spacing-x": 0,
  "--un-border-spacing-y": 0
}, or = "var(--un-border-spacing-x) var(--un-border-spacing-y)", Zs = [
  // displays
  ["inline-table", { display: "inline-table" }],
  ["table", { display: "table" }],
  ["table-caption", { display: "table-caption" }],
  ["table-cell", { display: "table-cell" }],
  ["table-column", { display: "table-column" }],
  ["table-column-group", { display: "table-column-group" }],
  ["table-footer-group", { display: "table-footer-group" }],
  ["table-header-group", { display: "table-header-group" }],
  ["table-row", { display: "table-row" }],
  ["table-row-group", { display: "table-row-group" }],
  // layouts
  ["border-collapse", { "border-collapse": "collapse" }],
  ["border-separate", { "border-collapse": "separate" }],
  [/^border-spacing-(.+)$/, ([, t], { theme: e }) => {
    const r = e.spacing?.[t] ?? l.bracket.cssvar.global.auto.fraction.rem(t);
    if (r != null)
      return {
        "--un-border-spacing-x": r,
        "--un-border-spacing-y": r,
        "border-spacing": or
      };
  }, { autocomplete: ["border-spacing", "border-spacing-$spacing"] }],
  [/^border-spacing-([xy])-(.+)$/, ([, t, e], { theme: r }) => {
    const n = r.spacing?.[e] ?? l.bracket.cssvar.global.auto.fraction.rem(e);
    if (n != null)
      return {
        [`--un-border-spacing-${t}`]: n,
        "border-spacing": or
      };
  }, { autocomplete: ["border-spacing-(x|y)", "border-spacing-(x|y)-$spacing"] }],
  ["caption-top", { "caption-side": "top" }],
  ["caption-bottom", { "caption-side": "bottom" }],
  ["table-auto", { "table-layout": "auto" }],
  ["table-fixed", { "table-layout": "fixed" }],
  ["table-empty-cells-visible", { "empty-cells": "show" }],
  ["table-empty-cells-hidden", { "empty-cells": "hide" }]
], Js = {
  "--un-pan-x": S,
  "--un-pan-y": S,
  "--un-pinch-zoom": S
}, oe = "var(--un-pan-x) var(--un-pan-y) var(--un-pinch-zoom)", Qs = [
  [/^touch-pan-(x|left|right)$/, ([, t]) => ({
    "--un-pan-x": `pan-${t}`,
    "touch-action": oe
  }), { autocomplete: ["touch-pan", "touch-pan-(x|left|right|y|up|down)"] }],
  [/^touch-pan-(y|up|down)$/, ([, t]) => ({
    "--un-pan-y": `pan-${t}`,
    "touch-action": oe
  })],
  ["touch-pinch-zoom", {
    "--un-pinch-zoom": "pinch-zoom",
    "touch-action": oe
  }],
  ["touch-auto", { "touch-action": "auto" }],
  ["touch-manipulation", { "touch-action": "manipulation" }],
  ["touch-none", { "touch-action": "none" }],
  ...x("touch", "touch-action")
], tc = {
  "--un-ordinal": S,
  "--un-slashed-zero": S,
  "--un-numeric-figure": S,
  "--un-numeric-spacing": S,
  "--un-numeric-fraction": S
};
function G(t) {
  return {
    ...t,
    "font-variant-numeric": "var(--un-ordinal) var(--un-slashed-zero) var(--un-numeric-figure) var(--un-numeric-spacing) var(--un-numeric-fraction)"
  };
}
const ec = [
  [/^ordinal$/, () => G({ "--un-ordinal": "ordinal" }), { autocomplete: "ordinal" }],
  [/^slashed-zero$/, () => G({ "--un-slashed-zero": "slashed-zero" }), { autocomplete: "slashed-zero" }],
  [/^lining-nums$/, () => G({ "--un-numeric-figure": "lining-nums" }), { autocomplete: "lining-nums" }],
  [/^oldstyle-nums$/, () => G({ "--un-numeric-figure": "oldstyle-nums" }), { autocomplete: "oldstyle-nums" }],
  [/^proportional-nums$/, () => G({ "--un-numeric-spacing": "proportional-nums" }), { autocomplete: "proportional-nums" }],
  [/^tabular-nums$/, () => G({ "--un-numeric-spacing": "tabular-nums" }), { autocomplete: "tabular-nums" }],
  [/^diagonal-fractions$/, () => G({ "--un-numeric-fraction": "diagonal-fractions" }), { autocomplete: "diagonal-fractions" }],
  [/^stacked-fractions$/, () => G({ "--un-numeric-fraction": "stacked-fractions" }), { autocomplete: "stacked-fractions" }],
  ["normal-nums", { "font-variant-numeric": "normal" }]
], rc = {
  "bg-blend": "background-blend-mode",
  "bg-clip": "-webkit-background-clip",
  "bg-gradient": "linear-gradient",
  "bg-image": "background-image",
  "bg-origin": "background-origin",
  "bg-position": "background-position",
  "bg-repeat": "background-repeat",
  "bg-size": "background-size",
  "mix-blend": "mix-blend-mode",
  object: "object-fit",
  "object-position": "object-position",
  write: "writing-mode",
  "write-orient": "text-orientation"
}, nc = [
  [/^(.+?)-(\$.+)$/, ([, t, e]) => {
    const r = rc[t];
    if (r)
      return { [r]: l.cssvar(e) };
  }]
], oc = [
  [/^view-transition-([\w-]+)$/, ([, t]) => ({ "view-transition-name": t })]
], ic = [
  Rn,
  nc,
  Pn,
  Es,
  Cr,
  Vs,
  zr,
  kr,
  dn,
  hn,
  Ms,
  Ys,
  bn,
  pn,
  fn,
  gn,
  kn,
  yn,
  wr,
  vn,
  $n,
  cn,
  Zs,
  Vr,
  gs,
  Sr,
  Qs,
  Er,
  jr,
  Ts,
  $s,
  Jr,
  zs,
  $e,
  xe,
  ye,
  ln,
  mn,
  Ns,
  _s,
  un,
  Ss,
  Cs,
  Pr,
  Ar,
  Or,
  tn,
  rn,
  xs,
  nn,
  Sn,
  Xs,
  wn,
  Gr,
  An,
  Rr,
  Hr,
  jn,
  Mr,
  Us,
  Fr,
  ec,
  an,
  Wr,
  En,
  _n,
  Ln,
  Bs,
  Ds,
  Is,
  ws,
  vs,
  en,
  qs,
  Hs,
  Dr,
  Kr,
  Nr,
  ks,
  Ps,
  zn,
  Qr,
  _r,
  Lr,
  Fs,
  on,
  oc,
  Gs,
  // should be the last
  xn
].flat(1), ac = [
  ...As
], sc = {
  ...qr,
  aria: {
    busy: 'busy="true"',
    checked: 'checked="true"',
    disabled: 'disabled="true"',
    expanded: 'expanded="true"',
    hidden: 'hidden="true"',
    pressed: 'pressed="true"',
    readonly: 'readonly="true"',
    required: 'required="true"',
    selected: 'selected="true"'
  },
  animation: {
    keyframes: {
      pulse: "{0%, 100% {opacity:1} 50% {opacity:.5}}",
      bounce: "{0%, 100% {transform:translateY(-25%);animation-timing-function:cubic-bezier(0.8,0,1,1)} 50% {transform:translateY(0);animation-timing-function:cubic-bezier(0,0,0.2,1)}}",
      spin: "{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}",
      ping: "{0%{transform:scale(1);opacity:1}75%,100%{transform:scale(2);opacity:0}}",
      "bounce-alt": "{from,20%,53%,80%,to{animation-timing-function:cubic-bezier(0.215,0.61,0.355,1);transform:translate3d(0,0,0)}40%,43%{animation-timing-function:cubic-bezier(0.755,0.05,0.855,0.06);transform:translate3d(0,-30px,0)}70%{animation-timing-function:cubic-bezier(0.755,0.05,0.855,0.06);transform:translate3d(0,-15px,0)}90%{transform:translate3d(0,-4px,0)}}",
      flash: "{from,50%,to{opacity:1}25%,75%{opacity:0}}",
      "pulse-alt": "{from{transform:scale3d(1,1,1)}50%{transform:scale3d(1.05,1.05,1.05)}to{transform:scale3d(1,1,1)}}",
      "rubber-band": "{from{transform:scale3d(1,1,1)}30%{transform:scale3d(1.25,0.75,1)}40%{transform:scale3d(0.75,1.25,1)}50%{transform:scale3d(1.15,0.85,1)}65%{transform:scale3d(0.95,1.05,1)}75%{transform:scale3d(1.05,0.95,1)}to{transform:scale3d(1,1,1)}}",
      "shake-x": "{from,to{transform:translate3d(0,0,0)}10%,30%,50%,70%,90%{transform:translate3d(-10px,0,0)}20%,40%,60%,80%{transform:translate3d(10px,0,0)}}",
      "shake-y": "{from,to{transform:translate3d(0,0,0)}10%,30%,50%,70%,90%{transform:translate3d(0,-10px,0)}20%,40%,60%,80%{transform:translate3d(0,10px,0)}}",
      "head-shake": "{0%{transform:translateX(0)}6.5%{transform:translateX(-6px) rotateY(-9deg)}18.5%{transform:translateX(5px) rotateY(7deg)}31.5%{transform:translateX(-3px) rotateY(-5deg)}43.5%{transform:translateX(2px) rotateY(3deg)}50%{transform:translateX(0)}}",
      swing: "{20%{transform:rotate3d(0,0,1,15deg)}40%{transform:rotate3d(0,0,1,-10deg)}60%{transform:rotate3d(0,0,1,5deg)}80%{transform:rotate3d(0,0,1,-5deg)}to{transform:rotate3d(0,0,1,0deg)}}",
      tada: "{from{transform:scale3d(1,1,1)}10%,20%{transform:scale3d(0.9,0.9,0.9) rotate3d(0,0,1,-3deg)}30%,50%,70%,90%{transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,3deg)}40%,60%,80%{transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg)}to{transform:scale3d(1,1,1)}}",
      wobble: "{from{transform:translate3d(0,0,0)}15%{transform:translate3d(-25%,0,0) rotate3d(0,0,1,-5deg)}30%{transform:translate3d(20%,0,0) rotate3d(0,0,1,3deg)}45%{transform:translate3d(-15%,0,0) rotate3d(0,0,1,-3deg)}60%{transform:translate3d(10%,0,0) rotate3d(0,0,1,2deg)}75%{transform:translate3d(-5%,0,0) rotate3d(0,0,1,-1deg)}to{transform:translate3d(0,0,0)}}",
      jello: "{from,11.1%,to{transform:translate3d(0,0,0)}22.2%{transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{transform:skewX(6.25deg) skewY(6.25deg)}44.4%{transform:skewX(-3.125deg)skewY(-3.125deg)}55.5%{transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{transform:skewX(-0.78125deg) skewY(-0.78125deg)}77.7%{transform:skewX(0.390625deg) skewY(0.390625deg)}88.8%{transform:skewX(-0.1953125deg) skewY(-0.1953125deg)}}",
      "heart-beat": "{0%{transform:scale(1)}14%{transform:scale(1.3)}28%{transform:scale(1)}42%{transform:scale(1.3)}70%{transform:scale(1)}}",
      hinge: "{0%{transform-origin:top left;animation-timing-function:ease-in-out}20%,60%{transform:rotate3d(0,0,1,80deg);transform-origin:top left;animation-timing-function:ease-in-out}40%,80%{transform:rotate3d(0,0,1,60deg);transform-origin:top left;animation-timing-function:ease-in-out}to{transform:translate3d(0,700px,0);opacity:0}}",
      "jack-in-the-box": "{from{opacity:0;transform-origin:center bottom;transform:scale(0.1) rotate(30deg)}50%{transform:rotate(-10deg)}70%{transform:rotate(3deg)}to{transform:scale(1)}}",
      "light-speed-in-left": "{from{opacity:0;transform:translate3d(-100%,0,0) skewX(-30deg)}60%{opacity:1;transform:skewX(20deg)}80%{transform:skewX(-5deg)}to{transform:translate3d(0,0,0)}}",
      "light-speed-in-right": "{from{opacity:0;transform:translate3d(100%,0,0) skewX(-30deg)}60%{opacity:1;transform:skewX(20deg)}80%{transform:skewX(-5deg)}to{transform:translate3d(0,0,0)}}",
      "light-speed-out-left": "{from{opacity:1}to{opacity:0;transform:translate3d(-100%,0,0) skewX(30deg)}}",
      "light-speed-out-right": "{from{opacity:1}to{opacity:0;transform:translate3d(100%,0,0) skewX(30deg)}}",
      flip: "{from{transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);animation-timing-function:ease-out}40%{transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);animation-timing-function:ease-out}50%{transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);animation-timing-function:ease-in}80%{transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);animation-timing-function:ease-in}to{transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);animation-timing-function:ease-in}}",
      "flip-in-x": "{from{transform:perspective(400px) rotate3d(1,0,0,90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotate3d(1,0,0,-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotate3d(1,0,0,10deg);opacity:1}80%{transform:perspective(400px) rotate3d(1,0,0,-5deg)}to{transform:perspective(400px)}}",
      "flip-in-y": "{from{transform:perspective(400px) rotate3d(0,1,0,90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotate3d(0,1,0,-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotate3d(0,1,0,10deg);opacity:1}80%{transform:perspective(400px) rotate3d(0,1,0,-5deg)}to{transform:perspective(400px)}}",
      "flip-out-x": "{from{transform:perspective(400px)}30%{transform:perspective(400px) rotate3d(1,0,0,-20deg);opacity:1}to{transform:perspective(400px) rotate3d(1,0,0,90deg);opacity:0}}",
      "flip-out-y": "{from{transform:perspective(400px)}30%{transform:perspective(400px) rotate3d(0,1,0,-15deg);opacity:1}to{transform:perspective(400px) rotate3d(0,1,0,90deg);opacity:0}}",
      "rotate-in": "{from{transform-origin:center;transform:rotate3d(0,0,1,-200deg);opacity:0}to{transform-origin:center;transform:translate3d(0,0,0);opacity:1}}",
      "rotate-in-down-left": "{from{transform-origin:left bottom;transform:rotate3d(0,0,1,-45deg);opacity:0}to{transform-origin:left bottom;transform:translate3d(0,0,0);opacity:1}}",
      "rotate-in-down-right": "{from{transform-origin:right bottom;transform:rotate3d(0,0,1,45deg);opacity:0}to{transform-origin:right bottom;transform:translate3d(0,0,0);opacity:1}}",
      "rotate-in-up-left": "{from{transform-origin:left top;transform:rotate3d(0,0,1,45deg);opacity:0}to{transform-origin:left top;transform:translate3d(0,0,0);opacity:1}}",
      "rotate-in-up-right": "{from{transform-origin:right bottom;transform:rotate3d(0,0,1,-90deg);opacity:0}to{transform-origin:right bottom;transform:translate3d(0,0,0);opacity:1}}",
      "rotate-out": "{from{transform-origin:center;opacity:1}to{transform-origin:center;transform:rotate3d(0,0,1,200deg);opacity:0}}",
      "rotate-out-down-left": "{from{transform-origin:left bottom;opacity:1}to{transform-origin:left bottom;transform:rotate3d(0,0,1,45deg);opacity:0}}",
      "rotate-out-down-right": "{from{transform-origin:right bottom;opacity:1}to{transform-origin:right bottom;transform:rotate3d(0,0,1,-45deg);opacity:0}}",
      "rotate-out-up-left": "{from{transform-origin:left bottom;opacity:1}to{transform-origin:left bottom;transform:rotate3d(0,0,1,-45deg);opacity:0}}",
      "rotate-out-up-right": "{from{transform-origin:right bottom;opacity:1}to{transform-origin:left bottom;transform:rotate3d(0,0,1,90deg);opacity:0}}",
      "roll-in": "{from{opacity:0;transform:translate3d(-100%,0,0) rotate3d(0,0,1,-120deg)}to{opacity:1;transform:translate3d(0,0,0)}}",
      "roll-out": "{from{opacity:1}to{opacity:0;transform:translate3d(100%,0,0) rotate3d(0,0,1,120deg)}}",
      "zoom-in": "{from{opacity:0;transform:scale3d(0.3,0.3,0.3)}50%{opacity:1}}",
      "zoom-in-down": "{from{opacity:0;transform:scale3d(0.1,0.1,0.1) translate3d(0,-1000px,0);animation-timing-function:cubic-bezier(0.55,0.055,0.675,0.19)}60%{opacity:1;transform:scale3d(0.475,0.475,0.475) translate3d(0,60px,0);animation-timing-function:cubic-bezier(0.175,0.885,0.32,1)}}",
      "zoom-in-left": "{from{opacity:0;transform:scale3d(0.1,0.1,0.1) translate3d(-1000px,0,0);animation-timing-function:cubic-bezier(0.55,0.055,0.675,0.19)}60%{opacity:1;transform:scale3d(0.475,0.475,0.475) translate3d(10px,0,0);animation-timing-function:cubic-bezier(0.175,0.885,0.32,1)}}",
      "zoom-in-right": "{from{opacity:0;transform:scale3d(0.1,0.1,0.1) translate3d(1000px,0,0);animation-timing-function:cubic-bezier(0.55,0.055,0.675,0.19)}60%{opacity:1;transform:scale3d(0.475,0.475,0.475) translate3d(-10px,0,0);animation-timing-function:cubic-bezier(0.175,0.885,0.32,1)}}",
      "zoom-in-up": "{from{opacity:0;transform:scale3d(0.1,0.1,0.1) translate3d(0,1000px,0);animation-timing-function:cubic-bezier(0.55,0.055,0.675,0.19)}60%{opacity:1;transform:scale3d(0.475,0.475,0.475) translate3d(0,-60px,0);animation-timing-function:cubic-bezier(0.175,0.885,0.32,1)}}",
      "zoom-out": "{from{opacity:1}50%{opacity:0;transform:scale3d(0.3,0.3,0.3)}to{opacity:0}}",
      "zoom-out-down": "{40%{opacity:1;transform:scale3d(0.475,0.475,0.475) translate3d(0,-60px,0);animation-timing-function:cubic-bezier(0.55,0.055,0.675,0.19)}to{opacity:0;transform:scale3d(0.1,0.1,0.1) translate3d(0,2000px,0);transform-origin:center bottom;animation-timing-function:cubic-bezier(0.175,0.885,0.32,1)}}",
      "zoom-out-left": "{40%{opacity:1;transform:scale3d(0.475,0.475,0.475) translate3d(42px,0,0)}to{opacity:0;transform:scale(0.1) translate3d(-2000px,0,0);transform-origin:left center}}",
      "zoom-out-right": "{40%{opacity:1;transform:scale3d(0.475,0.475,0.475) translate3d(-42px,0,0)}to{opacity:0;transform:scale(0.1) translate3d(2000px,0,0);transform-origin:right center}}",
      "zoom-out-up": "{40%{opacity:1;transform:scale3d(0.475,0.475,0.475) translate3d(0,60px,0);animation-timing-function:cubic-bezier(0.55,0.055,0.675,0.19)}to{opacity:0;transform:scale3d(0.1,0.1,0.1) translate3d(0,-2000px,0);transform-origin:center bottom;animation-timing-function:cubic-bezier(0.175,0.885,0.32,1)}}",
      "bounce-in": "{from,20%,40%,60%,80%,to{animation-timing-function:ease-in-out}0%{opacity:0;transform:scale3d(0.3,0.3,0.3)}20%{transform:scale3d(1.1,1.1,1.1)}40%{transform:scale3d(0.9,0.9,0.9)}60%{transform:scale3d(1.03,1.03,1.03);opacity:1}80%{transform:scale3d(0.97,0.97,0.97)}to{opacity:1;transform:scale3d(1,1,1)}}",
      "bounce-in-down": "{from,60%,75%,90%,to{animation-timing-function:cubic-bezier(0.215,0.61,0.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:translate3d(0,0,0)}}",
      "bounce-in-left": "{from,60%,75%,90%,to{animation-timing-function:cubic-bezier(0.215,0.61,0.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:translate3d(0,0,0)}}",
      "bounce-in-right": "{from,60%,75%,90%,to{animation-timing-function:cubic-bezier(0.215,0.61,0.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:translate3d(0,0,0)}}",
      "bounce-in-up": "{from,60%,75%,90%,to{animation-timing-function:cubic-bezier(0.215,0.61,0.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translate3d(0,0,0)}}",
      "bounce-out": "{20%{transform:scale3d(0.9,0.9,0.9)}50%,55%{opacity:1;transform:scale3d(1.1,1.1,1.1)}to{opacity:0;transform:scale3d(0.3,0.3,0.3)}}",
      "bounce-out-down": "{20%{transform:translate3d(0,10px,0)}40%,45%{opacity:1;transform:translate3d(0,-20px,0)}to{opacity:0;transform:translate3d(0,2000px,0)}}",
      "bounce-out-left": "{20%{opacity:1;transform:translate3d(20px,0,0)}to{opacity:0;transform:translate3d(-2000px,0,0)}}",
      "bounce-out-right": "{20%{opacity:1;transform:translate3d(-20px,0,0)}to{opacity:0;transform:translate3d(2000px,0,0)}}",
      "bounce-out-up": "{20%{transform:translate3d(0,-10px,0)}40%,45%{opacity:1;transform:translate3d(0,20px,0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}",
      "slide-in-down": "{from{transform:translate3d(0,-100%,0);visibility:visible}to{transform:translate3d(0,0,0)}}",
      "slide-in-left": "{from{transform:translate3d(-100%,0,0);visibility:visible}to{transform:translate3d(0,0,0)}}",
      "slide-in-right": "{from{transform:translate3d(100%,0,0);visibility:visible}to{transform:translate3d(0,0,0)}}",
      "slide-in-up": "{from{transform:translate3d(0,100%,0);visibility:visible}to{transform:translate3d(0,0,0)}}",
      "slide-out-down": "{from{transform:translate3d(0,0,0)}to{visibility:hidden;transform:translate3d(0,100%,0)}}",
      "slide-out-left": "{from{transform:translate3d(0,0,0)}to{visibility:hidden;transform:translate3d(-100%,0,0)}}",
      "slide-out-right": "{from{transform:translate3d(0,0,0)}to{visibility:hidden;transform:translate3d(100%,0,0)}}",
      "slide-out-up": "{from{transform:translate3d(0,0,0)}to{visibility:hidden;transform:translate3d(0,-100%,0)}}",
      "fade-in": "{from{opacity:0}to{opacity:1}}",
      "fade-in-down": "{from{opacity:0;transform:translate3d(0,-100%,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
      "fade-in-down-big": "{from{opacity:0;transform:translate3d(0,-2000px,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
      "fade-in-left": "{from{opacity:0;transform:translate3d(-100%,0,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
      "fade-in-left-big": "{from{opacity:0;transform:translate3d(-2000px,0,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
      "fade-in-right": "{from{opacity:0;transform:translate3d(100%,0,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
      "fade-in-right-big": "{from{opacity:0;transform:translate3d(2000px,0,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
      "fade-in-up": "{from{opacity:0;transform:translate3d(0,100%,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
      "fade-in-up-big": "{from{opacity:0;transform:translate3d(0,2000px,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
      "fade-in-top-left": "{from{opacity:0;transform:translate3d(-100%,-100%,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
      "fade-in-top-right": "{from{opacity:0;transform:translate3d(100%,-100%,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
      "fade-in-bottom-left": "{from{opacity:0;transform:translate3d(-100%,100%,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
      "fade-in-bottom-right": "{from{opacity:0;transform:translate3d(100%,100%,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
      "fade-out": "{from{opacity:1}to{opacity:0}}",
      "fade-out-down": "{from{opacity:1}to{opacity:0;transform:translate3d(0,100%,0)}}",
      "fade-out-down-big": "{from{opacity:1}to{opacity:0;transform:translate3d(0,2000px,0)}}",
      "fade-out-left": "{from{opacity:1}to{opacity:0;transform:translate3d(-100%,0,0)}}",
      "fade-out-left-big": "{from{opacity:1}to{opacity:0;transform:translate3d(-2000px,0,0)}}",
      "fade-out-right": "{from{opacity:1}to{opacity:0;transform:translate3d(100%,0,0)}}",
      "fade-out-right-big": "{from{opacity:1}to{opacity:0;transform:translate3d(2000px,0,0)}}",
      "fade-out-up": "{from{opacity:1}to{opacity:0;transform:translate3d(0,-100%,0)}}",
      "fade-out-up-big": "{from{opacity:1}to{opacity:0;transform:translate3d(0,-2000px,0)}}",
      "fade-out-top-left": "{from{opacity:1;transform:translate3d(0,0,0)}to{opacity:0;transform:translate3d(-100%,-100%,0)}}",
      "fade-out-top-right": "{from{opacity:1;transform:translate3d(0,0,0)}to{opacity:0;transform:translate3d(100%,-100%,0)}}",
      "fade-out-bottom-left": "{from{opacity:1;transform:translate3d(0,0,0)}to{opacity:0;transform:translate3d(-100%,100%,0)}}",
      "fade-out-bottom-right": "{from{opacity:1;transform:translate3d(0,0,0)}to{opacity:0;transform:translate3d(100%,100%,0)}}",
      "back-in-up": "{0%{opacity:0.7;transform:translateY(1200px) scale(0.7)}80%{opacity:0.7;transform:translateY(0px) scale(0.7)}100%{opacity:1;transform:scale(1)}}",
      "back-in-down": "{0%{opacity:0.7;transform:translateY(-1200px) scale(0.7)}80%{opacity:0.7;transform:translateY(0px) scale(0.7)}100%{opacity:1;transform:scale(1)}}",
      "back-in-right": "{0%{opacity:0.7;transform:translateX(2000px) scale(0.7)}80%{opacity:0.7;transform:translateY(0px) scale(0.7)}100%{opacity:1;transform:scale(1)}}",
      "back-in-left": "{0%{opacity:0.7;transform:translateX(-2000px) scale(0.7)}80%{opacity:0.7;transform:translateX(0px) scale(0.7)}100%{opacity:1;transform:scale(1)}}",
      "back-out-up": "{0%{opacity:1;transform:scale(1)}80%{opacity:0.7;transform:translateY(0px) scale(0.7)}100%{opacity:0.7;transform:translateY(-700px) scale(0.7)}}",
      "back-out-down": "{0%{opacity:1;transform:scale(1)}80%{opacity:0.7;transform:translateY(0px) scale(0.7)}100%{opacity:0.7;transform:translateY(700px) scale(0.7)}}",
      "back-out-right": "{0%{opacity:1;transform:scale(1)}80%{opacity:0.7;transform:translateY(0px) scale(0.7)}100%{opacity:0.7;transform:translateX(2000px) scale(0.7)}}",
      "back-out-left": "{0%{opacity:1;transform:scale(1)}80%{opacity:0.7;transform:translateX(-2000px) scale(0.7)}100%{opacity:0.7;transform:translateY(-700px) scale(0.7)}}"
    },
    durations: {
      pulse: "2s",
      "heart-beat": "1.3s",
      "bounce-in": "0.75s",
      "bounce-out": "0.75s",
      "flip-out-x": "0.75s",
      "flip-out-y": "0.75s",
      hinge: "2s"
    },
    timingFns: {
      pulse: "cubic-bezier(0.4,0,.6,1)",
      ping: "cubic-bezier(0,0,.2,1)",
      "head-shake": "ease-in-out",
      "heart-beat": "ease-in-out",
      "pulse-alt": "ease-in-out",
      "light-speed-in-left": "ease-out",
      "light-speed-in-right": "ease-out",
      "light-speed-out-left": "ease-in",
      "light-speed-out-right": "ease-in"
    },
    properties: {
      "bounce-alt": { "transform-origin": "center bottom" },
      jello: { "transform-origin": "center" },
      swing: { "transform-origin": "top center" },
      flip: { "backface-visibility": "visible" },
      "flip-in-x": { "backface-visibility": "visible !important" },
      "flip-in-y": { "backface-visibility": "visible !important" },
      "flip-out-x": { "backface-visibility": "visible !important" },
      "flip-out-y": { "backface-visibility": "visible !important" },
      "rotate-in": { "transform-origin": "center" },
      "rotate-in-down-left": { "transform-origin": "left bottom" },
      "rotate-in-down-right": { "transform-origin": "right bottom" },
      "rotate-in-up-left": { "transform-origin": "left bottom" },
      "rotate-in-up-right": { "transform-origin": "right bottom" },
      "rotate-out": { "transform-origin": "center" },
      "rotate-out-down-left": { "transform-origin": "left bottom" },
      "rotate-out-down-right": { "transform-origin": "right bottom" },
      "rotate-out-up-left": { "transform-origin": "left bottom" },
      "rotate-out-up-right": { "transform-origin": "right bottom" },
      hinge: { "transform-origin": "top left" },
      "zoom-out-down": { "transform-origin": "center bottom" },
      "zoom-out-left": { "transform-origin": "left center" },
      "zoom-out-right": { "transform-origin": "right center" },
      "zoom-out-up": { "transform-origin": "center bottom" }
    },
    counts: {
      spin: "infinite",
      ping: "infinite",
      pulse: "infinite",
      "pulse-alt": "infinite",
      bounce: "infinite",
      "bounce-alt": "infinite"
    }
  },
  media: {
    portrait: "(orientation: portrait)",
    landscape: "(orientation: landscape)",
    os_dark: "(prefers-color-scheme: dark)",
    os_light: "(prefers-color-scheme: light)",
    motion_ok: "(prefers-reduced-motion: no-preference)",
    motion_not_ok: "(prefers-reduced-motion: reduce)",
    high_contrast: "(prefers-contrast: high)",
    low_contrast: "(prefers-contrast: low)",
    opacity_ok: "(prefers-reduced-transparency: no-preference)",
    opacity_not_ok: "(prefers-reduced-transparency: reduce)",
    use_data_ok: "(prefers-reduced-data: no-preference)",
    use_data_not_ok: "(prefers-reduced-data: reduce)",
    touch: "(hover: none) and (pointer: coarse)",
    stylus: "(hover: none) and (pointer: fine)",
    pointer: "(hover) and (pointer: coarse)",
    mouse: "(hover) and (pointer: fine)",
    hd_color: "(dynamic-range: high)"
  },
  supports: {
    grid: "(display: grid)"
  },
  preflightBase: {
    ...Ir,
    ...Js,
    ...Ws,
    ...tc,
    ...Ks,
    ...Br,
    ...Tr,
    ...Ls,
    ...Os
  }
}, cc = [
  q("svg", (t) => ({ selector: `${t.selector} svg` }))
], lc = [
  q(".dark", (t) => ({ prefix: `.dark $$ ${t.prefix}` })),
  q(".light", (t) => ({ prefix: `.light $$ ${t.prefix}` })),
  B("@dark", "@media (prefers-color-scheme: dark)"),
  B("@light", "@media (prefers-color-scheme: light)")
], fc = [
  B("contrast-more", "@media (prefers-contrast: more)"),
  B("contrast-less", "@media (prefers-contrast: less)")
], uc = [
  B("motion-reduce", "@media (prefers-reduced-motion: reduce)"),
  B("motion-safe", "@media (prefers-reduced-motion: no-preference)")
], dc = [
  B("landscape", "@media (orientation: landscape)"),
  B("portrait", "@media (orientation: portrait)")
], pc = (t) => {
  if (!t.startsWith("_") && (/space-[xy]-.+$/.test(t) || /divide-/.test(t)))
    return {
      matcher: t,
      selector: (e) => {
        const r = ">:not([hidden])~:not([hidden])";
        return e.includes(r) ? e : `${e}${r}`;
      }
    };
}, mc = [
  q("@hover", (t) => ({
    parent: `${t.parent ? `${t.parent} $$ ` : ""}@media (hover: hover) and (pointer: fine)`,
    selector: `${t.selector || ""}:hover`
  }))
], hc = (t, { theme: e }) => {
  const r = t.match(/^(.*)\b(placeholder-)(.+)$/);
  if (r) {
    const [, n = "", o, i] = r;
    if (ge(i, e, "accentColor") || gc(i))
      return {
        // Append `placeholder-$ ` (with space!) to the rule to be matched.
        // The `placeholder-` is added for placeholder variant processing, and
        // the `$ ` is added for rule matching after `placeholder-` is removed by the variant.
        // See rules/placeholder.
        matcher: `${n}placeholder-$ ${o}${i}`
      };
  }
};
function gc(t) {
  const e = t.match(/^op(?:acity)?-?(.+)$/);
  return e && e[1] != null ? l.bracket.percent(e[1]) != null : !1;
}
function bc(t) {
  return [
    hc,
    pc,
    ...Nn(t),
    ...fc,
    ...dc,
    ...uc,
    ...cc,
    ...lc,
    ...mc
  ];
}
const yc = (t = {}) => (t.important = t.important ?? !1, {
  ...Un(t),
  name: "@unocss/preset-wind",
  theme: sc,
  rules: ic,
  shortcuts: ac,
  variants: bc(t),
  postprocess: hs(t)
});
function ir(t, e, r) {
  return `calc(${e} + (${t} - ${e}) * ${r} / 100)`;
}
function Bn(t, e, r) {
  const n = [t, e], o = [];
  for (let a = 0; a < 2; a++) {
    const s = typeof n[a] == "string" ? K(n[a]) : n[a];
    if (!s || !["rgb", "rgba"].includes(s.type))
      return;
    o.push(s);
  }
  const i = [];
  for (let a = 0; a < 3; a++)
    i.push(ir(o[0].components[a], o[1].components[a], r));
  return {
    type: "rgb",
    components: i,
    alpha: ir(o[0].alpha ?? 1, o[1].alpha ?? 1, r)
  };
}
function Dn(t, e) {
  return Bn("#fff", t, e);
}
function In(t, e) {
  return Bn("#000", t, e);
}
function xc(t, e) {
  const r = Number.parseFloat(`${e}`);
  if (!Number.isNaN(r))
    return r > 0 ? In(t, e) : Dn(t, -r);
}
const $c = { tint: Dn, shade: In, shift: xc };
function vc() {
  let t;
  return {
    name: "mix",
    match(e, r) {
      t || (t = new RegExp(`^mix-(tint|shade|shift)-(-?\\d{1,3})(?:${r.generator.config.separators.join("|")})`));
      const n = e.match(t);
      if (n)
        return {
          matcher: e.slice(n[0].length),
          body: (o) => (o.forEach((i) => {
            if (i[1]) {
              const a = K(`${i[1]}`);
              if (a) {
                const s = $c[n[1]](a, n[2]);
                s && (i[1] = M(s));
              }
            }
          }), o)
        };
    }
  };
}
const kc = (t = {}) => {
  const e = yc(t);
  return {
    ...e,
    name: "@unocss/preset-uno",
    variants: [
      ...e.variants,
      vc()
    ]
  };
};
export {
  wc as c,
  Io as e,
  kc as p
};
//# sourceMappingURL=unocss_BHFsKZqx.js.map
