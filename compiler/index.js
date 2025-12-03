import { V as h, d as D, S as f, e as I, U as T, W as _, X as j } from "./vue_zazawFZq.js";
import { c as O, p as R } from "./unocss_BHFsKZqx.js";
import { v as q, r as M, a as G, b as V, c as $ } from "./rehype-plugins_BuBHLxS0.js";
import { a as w } from "./sucrase_Vx5h13n5.js";
import { r as W } from "./gray-matter_DUytiCZw.js";
import { m as A, g as z, a as N, b as P, d as L, e as U, f as Y, h as Q, i as J } from "./micromark_CAniCe8D.js";
import { r as X } from "./rehype_CFsT5uBQ.js";
import { l as K } from "./shiki-langs_DnE6IOY8.js";
import { c as Z, g as ee } from "./shiki_CE0IyDxo.js";
function te(o, r) {
  const t = (s) => {
    if (s === "vue") return h;
    if (r[s]) return r[s];
    throw new Error("[executeCjs] Unavailable module: " + s);
  }, a = {}, n = { exports: a };
  return (typeof o == "function" ? o : new Function("require", "exports", "module", "Vue", o))(t, a, n, h), n.exports;
}
function re(o) {
  o.component(
    "d-split",
    D({
      setup(r, { slots: t }) {
        return () => f("div", { class: "d-split" }, [
          f("div", { class: "d-split__left" }, t.default?.()),
          f("div", { class: "d-split__right" }, t.right?.())
        ]);
      }
    })
  );
}
var oe = W();
const ne = /* @__PURE__ */ w(oe), ae = /^\[if[ \t\f\n\r]+[^\]]+]|<!\[endif]$/;
function ie(o) {
  return o.type === "comment" && ae.test(o.value);
}
const se = {};
function de(o) {
  const r = o || se;
  return function(t) {
    q(t, "comment", function(a, n, i) {
      if (typeof n == "number" && i && (r.removeConditional || !ie(a)) && (!r.test || !r.test(a.value)))
        return i.children.splice(n, 1), n;
    });
  };
}
var l, k;
function ce() {
  return k || (k = 1, l = function o(r, t) {
    if (r === t) return !0;
    if (r && t && typeof r == "object" && typeof t == "object") {
      if (r.constructor !== t.constructor) return !1;
      var a, n, i;
      if (Array.isArray(r)) {
        if (a = r.length, a != t.length) return !1;
        for (n = a; n-- !== 0; )
          if (!o(r[n], t[n])) return !1;
        return !0;
      }
      if (r.constructor === RegExp) return r.source === t.source && r.flags === t.flags;
      if (r.valueOf !== Object.prototype.valueOf) return r.valueOf() === t.valueOf();
      if (r.toString !== Object.prototype.toString) return r.toString() === t.toString();
      if (i = Object.keys(r), a = i.length, a !== Object.keys(t).length) return !1;
      for (n = a; n-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(t, i[n])) return !1;
      for (n = a; n-- !== 0; ) {
        var s = i[n];
        if (!o(r[s], t[s])) return !1;
      }
      return !0;
    }
    return r !== r && t !== t;
  }), l;
}
var p, B;
function ue() {
  if (B) return p;
  B = 1;
  const o = ce();
  return p = (t, a = o, { cachePromiseRejection: n = !1 } = {}) => {
    if (!t) throw new TypeError("You have to provide a `fn` function.");
    let i = !1, s, e;
    return async (...d) => (i && a(d, s) || (e = t(...d), !n && e.catch && e.catch(() => i = !1), i = !0, s = d), e);
  }, p;
}
var ge = ue();
const fe = /* @__PURE__ */ w(ge), le = Object.freeze(JSON.parse('{"colors":{"activityBar.activeBorder":"#f9826c","activityBar.background":"#24292e","activityBar.border":"#1b1f23","activityBar.foreground":"#e1e4e8","activityBar.inactiveForeground":"#6a737d","activityBarBadge.background":"#0366d6","activityBarBadge.foreground":"#fff","badge.background":"#044289","badge.foreground":"#c8e1ff","breadcrumb.activeSelectionForeground":"#d1d5da","breadcrumb.focusForeground":"#e1e4e8","breadcrumb.foreground":"#959da5","breadcrumbPicker.background":"#2b3036","button.background":"#176f2c","button.foreground":"#dcffe4","button.hoverBackground":"#22863a","button.secondaryBackground":"#444d56","button.secondaryForeground":"#fff","button.secondaryHoverBackground":"#586069","checkbox.background":"#444d56","checkbox.border":"#1b1f23","debugToolBar.background":"#2b3036","descriptionForeground":"#959da5","diffEditor.insertedTextBackground":"#28a74530","diffEditor.removedTextBackground":"#d73a4930","dropdown.background":"#2f363d","dropdown.border":"#1b1f23","dropdown.foreground":"#e1e4e8","dropdown.listBackground":"#24292e","editor.background":"#24292e","editor.findMatchBackground":"#ffd33d44","editor.findMatchHighlightBackground":"#ffd33d22","editor.focusedStackFrameHighlightBackground":"#2b6a3033","editor.foldBackground":"#58606915","editor.foreground":"#e1e4e8","editor.inactiveSelectionBackground":"#3392FF22","editor.lineHighlightBackground":"#2b3036","editor.linkedEditingBackground":"#3392FF22","editor.selectionBackground":"#3392FF44","editor.selectionHighlightBackground":"#17E5E633","editor.selectionHighlightBorder":"#17E5E600","editor.stackFrameHighlightBackground":"#C6902625","editor.wordHighlightBackground":"#17E5E600","editor.wordHighlightBorder":"#17E5E699","editor.wordHighlightStrongBackground":"#17E5E600","editor.wordHighlightStrongBorder":"#17E5E666","editorBracketHighlight.foreground1":"#79b8ff","editorBracketHighlight.foreground2":"#ffab70","editorBracketHighlight.foreground3":"#b392f0","editorBracketHighlight.foreground4":"#79b8ff","editorBracketHighlight.foreground5":"#ffab70","editorBracketHighlight.foreground6":"#b392f0","editorBracketMatch.background":"#17E5E650","editorBracketMatch.border":"#17E5E600","editorCursor.foreground":"#c8e1ff","editorError.foreground":"#f97583","editorGroup.border":"#1b1f23","editorGroupHeader.tabsBackground":"#1f2428","editorGroupHeader.tabsBorder":"#1b1f23","editorGutter.addedBackground":"#28a745","editorGutter.deletedBackground":"#ea4a5a","editorGutter.modifiedBackground":"#2188ff","editorIndentGuide.activeBackground":"#444d56","editorIndentGuide.background":"#2f363d","editorLineNumber.activeForeground":"#e1e4e8","editorLineNumber.foreground":"#444d56","editorOverviewRuler.border":"#1b1f23","editorWarning.foreground":"#ffea7f","editorWhitespace.foreground":"#444d56","editorWidget.background":"#1f2428","errorForeground":"#f97583","focusBorder":"#005cc5","foreground":"#d1d5da","gitDecoration.addedResourceForeground":"#34d058","gitDecoration.conflictingResourceForeground":"#ffab70","gitDecoration.deletedResourceForeground":"#ea4a5a","gitDecoration.ignoredResourceForeground":"#6a737d","gitDecoration.modifiedResourceForeground":"#79b8ff","gitDecoration.submoduleResourceForeground":"#6a737d","gitDecoration.untrackedResourceForeground":"#34d058","input.background":"#2f363d","input.border":"#1b1f23","input.foreground":"#e1e4e8","input.placeholderForeground":"#959da5","list.activeSelectionBackground":"#39414a","list.activeSelectionForeground":"#e1e4e8","list.focusBackground":"#044289","list.hoverBackground":"#282e34","list.hoverForeground":"#e1e4e8","list.inactiveFocusBackground":"#1d2d3e","list.inactiveSelectionBackground":"#282e34","list.inactiveSelectionForeground":"#e1e4e8","notificationCenterHeader.background":"#24292e","notificationCenterHeader.foreground":"#959da5","notifications.background":"#2f363d","notifications.border":"#1b1f23","notifications.foreground":"#e1e4e8","notificationsErrorIcon.foreground":"#ea4a5a","notificationsInfoIcon.foreground":"#79b8ff","notificationsWarningIcon.foreground":"#ffab70","panel.background":"#1f2428","panel.border":"#1b1f23","panelInput.border":"#2f363d","panelTitle.activeBorder":"#f9826c","panelTitle.activeForeground":"#e1e4e8","panelTitle.inactiveForeground":"#959da5","peekViewEditor.background":"#1f242888","peekViewEditor.matchHighlightBackground":"#ffd33d33","peekViewResult.background":"#1f2428","peekViewResult.matchHighlightBackground":"#ffd33d33","pickerGroup.border":"#444d56","pickerGroup.foreground":"#e1e4e8","progressBar.background":"#0366d6","quickInput.background":"#24292e","quickInput.foreground":"#e1e4e8","scrollbar.shadow":"#0008","scrollbarSlider.activeBackground":"#6a737d88","scrollbarSlider.background":"#6a737d33","scrollbarSlider.hoverBackground":"#6a737d44","settings.headerForeground":"#e1e4e8","settings.modifiedItemIndicator":"#0366d6","sideBar.background":"#1f2428","sideBar.border":"#1b1f23","sideBar.foreground":"#d1d5da","sideBarSectionHeader.background":"#1f2428","sideBarSectionHeader.border":"#1b1f23","sideBarSectionHeader.foreground":"#e1e4e8","sideBarTitle.foreground":"#e1e4e8","statusBar.background":"#24292e","statusBar.border":"#1b1f23","statusBar.debuggingBackground":"#931c06","statusBar.debuggingForeground":"#fff","statusBar.foreground":"#d1d5da","statusBar.noFolderBackground":"#24292e","statusBarItem.prominentBackground":"#282e34","statusBarItem.remoteBackground":"#24292e","statusBarItem.remoteForeground":"#d1d5da","tab.activeBackground":"#24292e","tab.activeBorder":"#24292e","tab.activeBorderTop":"#f9826c","tab.activeForeground":"#e1e4e8","tab.border":"#1b1f23","tab.hoverBackground":"#24292e","tab.inactiveBackground":"#1f2428","tab.inactiveForeground":"#959da5","tab.unfocusedActiveBorder":"#24292e","tab.unfocusedActiveBorderTop":"#1b1f23","tab.unfocusedHoverBackground":"#24292e","terminal.ansiBlack":"#586069","terminal.ansiBlue":"#2188ff","terminal.ansiBrightBlack":"#959da5","terminal.ansiBrightBlue":"#79b8ff","terminal.ansiBrightCyan":"#56d4dd","terminal.ansiBrightGreen":"#85e89d","terminal.ansiBrightMagenta":"#b392f0","terminal.ansiBrightRed":"#f97583","terminal.ansiBrightWhite":"#fafbfc","terminal.ansiBrightYellow":"#ffea7f","terminal.ansiCyan":"#39c5cf","terminal.ansiGreen":"#34d058","terminal.ansiMagenta":"#b392f0","terminal.ansiRed":"#ea4a5a","terminal.ansiWhite":"#d1d5da","terminal.ansiYellow":"#ffea7f","terminal.foreground":"#d1d5da","terminal.tab.activeBorder":"#f9826c","terminalCursor.background":"#586069","terminalCursor.foreground":"#79b8ff","textBlockQuote.background":"#24292e","textBlockQuote.border":"#444d56","textCodeBlock.background":"#2f363d","textLink.activeForeground":"#c8e1ff","textLink.foreground":"#79b8ff","textPreformat.foreground":"#d1d5da","textSeparator.foreground":"#586069","titleBar.activeBackground":"#24292e","titleBar.activeForeground":"#e1e4e8","titleBar.border":"#1b1f23","titleBar.inactiveBackground":"#1f2428","titleBar.inactiveForeground":"#959da5","tree.indentGuidesStroke":"#2f363d","welcomePage.buttonBackground":"#2f363d","welcomePage.buttonHoverBackground":"#444d56"},"displayName":"GitHub Dark","name":"github-dark","semanticHighlighting":true,"tokenColors":[{"scope":["comment","punctuation.definition.comment","string.comment"],"settings":{"foreground":"#6a737d"}},{"scope":["constant","entity.name.constant","variable.other.constant","variable.other.enummember","variable.language"],"settings":{"foreground":"#79b8ff"}},{"scope":["entity","entity.name"],"settings":{"foreground":"#b392f0"}},{"scope":"variable.parameter.function","settings":{"foreground":"#e1e4e8"}},{"scope":"entity.name.tag","settings":{"foreground":"#85e89d"}},{"scope":"keyword","settings":{"foreground":"#f97583"}},{"scope":["storage","storage.type"],"settings":{"foreground":"#f97583"}},{"scope":["storage.modifier.package","storage.modifier.import","storage.type.java"],"settings":{"foreground":"#e1e4e8"}},{"scope":["string","punctuation.definition.string","string punctuation.section.embedded source"],"settings":{"foreground":"#9ecbff"}},{"scope":"support","settings":{"foreground":"#79b8ff"}},{"scope":"meta.property-name","settings":{"foreground":"#79b8ff"}},{"scope":"variable","settings":{"foreground":"#ffab70"}},{"scope":"variable.other","settings":{"foreground":"#e1e4e8"}},{"scope":"invalid.broken","settings":{"fontStyle":"italic","foreground":"#fdaeb7"}},{"scope":"invalid.deprecated","settings":{"fontStyle":"italic","foreground":"#fdaeb7"}},{"scope":"invalid.illegal","settings":{"fontStyle":"italic","foreground":"#fdaeb7"}},{"scope":"invalid.unimplemented","settings":{"fontStyle":"italic","foreground":"#fdaeb7"}},{"scope":"carriage-return","settings":{"background":"#f97583","content":"^M","fontStyle":"italic underline","foreground":"#24292e"}},{"scope":"message.error","settings":{"foreground":"#fdaeb7"}},{"scope":"string variable","settings":{"foreground":"#79b8ff"}},{"scope":["source.regexp","string.regexp"],"settings":{"foreground":"#dbedff"}},{"scope":["string.regexp.character-class","string.regexp constant.character.escape","string.regexp source.ruby.embedded","string.regexp string.regexp.arbitrary-repitition"],"settings":{"foreground":"#dbedff"}},{"scope":"string.regexp constant.character.escape","settings":{"fontStyle":"bold","foreground":"#85e89d"}},{"scope":"support.constant","settings":{"foreground":"#79b8ff"}},{"scope":"support.variable","settings":{"foreground":"#79b8ff"}},{"scope":"meta.module-reference","settings":{"foreground":"#79b8ff"}},{"scope":"punctuation.definition.list.begin.markdown","settings":{"foreground":"#ffab70"}},{"scope":["markup.heading","markup.heading entity.name"],"settings":{"fontStyle":"bold","foreground":"#79b8ff"}},{"scope":"markup.quote","settings":{"foreground":"#85e89d"}},{"scope":"markup.italic","settings":{"fontStyle":"italic","foreground":"#e1e4e8"}},{"scope":"markup.bold","settings":{"fontStyle":"bold","foreground":"#e1e4e8"}},{"scope":["markup.underline"],"settings":{"fontStyle":"underline"}},{"scope":["markup.strikethrough"],"settings":{"fontStyle":"strikethrough"}},{"scope":"markup.inline.raw","settings":{"foreground":"#79b8ff"}},{"scope":["markup.deleted","meta.diff.header.from-file","punctuation.definition.deleted"],"settings":{"background":"#86181d","foreground":"#fdaeb7"}},{"scope":["markup.inserted","meta.diff.header.to-file","punctuation.definition.inserted"],"settings":{"background":"#144620","foreground":"#85e89d"}},{"scope":["markup.changed","punctuation.definition.changed"],"settings":{"background":"#c24e00","foreground":"#ffab70"}},{"scope":["markup.ignored","markup.untracked"],"settings":{"background":"#79b8ff","foreground":"#2f363d"}},{"scope":"meta.diff.range","settings":{"fontStyle":"bold","foreground":"#b392f0"}},{"scope":"meta.diff.header","settings":{"foreground":"#79b8ff"}},{"scope":"meta.separator","settings":{"fontStyle":"bold","foreground":"#79b8ff"}},{"scope":"meta.output","settings":{"foreground":"#79b8ff"}},{"scope":["brackethighlighter.tag","brackethighlighter.curly","brackethighlighter.round","brackethighlighter.square","brackethighlighter.angle","brackethighlighter.quote"],"settings":{"foreground":"#d1d5da"}},{"scope":"brackethighlighter.unmatched","settings":{"foreground":"#fdaeb7"}},{"scope":["constant.other.reference.link","string.other.link"],"settings":{"fontStyle":"underline","foreground":"#dbedff"}}],"type":"dark"}')), pe = fe(
  () => Z({
    themes: [le],
    langs: K,
    loadWasm: ee
  })
);
async function me(o, r = () => {
}) {
  r("markdownToVue started");
  const { content: t, data: a } = ne(o);
  r("matter extracted");
  const n = A(t, {
    allowDangerousHtml: !0,
    extensions: [
      U(),
      Y({ singleTilde: !0 }),
      Q(),
      J()
    ],
    htmlExtensions: [
      z(),
      N(),
      P(),
      L({
        lead: function(e) {
          return e.type !== "containerDirective" ? !1 : (this.tag('<div class="lead">'), e.content && this.raw(e.content), this.tag("</div>"), !0);
        },
        split: function(e) {
          return e.type !== "containerDirective" ? !1 : (this.tag("<d-split>"), e.content && this.raw(e.content), this.tag("</d-split>"), !0);
        },
        aside: function(e) {
          return e.type !== "containerDirective" ? !1 : (this.tag("<template v-slot:right>"), e.content && this.raw(e.content), this.tag("</template>"), !0);
        },
        me: function(e) {
          return e.type !== "containerDirective" ? !1 : (this.tag('<div class="notes-bubble" data-author-position="right">'), this.tag(
            '<div class="notes-bubble__author"><span class="notes-bubble__me">Me:</span></div>'
          ), this.tag('<div class="notes-bubble__message">'), e.content && this.raw(e.content), this.tag("</div>"), this.tag("</div>"), !0);
        },
        thought: function(e) {
          return e.type !== "containerDirective" ? !1 : (this.tag('<div class="notes-bubble" data-author-position="right">'), this.tag('<div class="notes-bubble__message">'), e.content && this.raw(e.content), this.tag("</div>"), this.tag("</div>"), !0);
        },
        bubble: function(e) {
          return e.type !== "containerDirective" ? !1 : (this.tag('<div class="notes-bubble" data-author-position="left">'), this.tag(
            `<div class="notes-bubble__author"><notes-bubble-author author="${e.label}"></notes-bubble-author></div>`
          ), this.tag('<div class="notes-bubble__message">'), e.content && this.raw(e.content), this.tag("</div>"), this.tag("</div>"), !0);
        },
        youtube: function(e) {
          return e.type !== "leafDirective" ? !1 : (this.tag(
            `<youtube-embed video-id="${e.label}"></youtube-embed>`
          ), !0);
        },
        soundcloud: function(e) {
          return e.type !== "leafDirective" ? !1 : (this.tag(
            `<soundcloud-embed track-id="${e.label}"></soundcloud-embed>`
          ), !0);
        },
        tweet: function(e) {
          return e.type !== "containerDirective" ? !1 : (this.tag('<blockquote class="twitter-tweet">'), e.content && this.raw(e.content), this.tag("</blockquote>"), !0);
        },
        cta: function(e) {
          return e.type !== "leafDirective" ? !1 : (this.tag('<p class="notes-cta">'), this.tag(
            `<a class="notes-cta__link" href="${e.attributes?.href}">`
          ), this.tag('<span class="notes-cta__title">'), this.raw(e.label || ""), this.tag("</span>"), this.tag('<span class="notes-cta__url">'), this.raw(e.attributes?.href || ""), this.tag("</span>"), this.tag("</a>"), this.tag("</p>"), !0);
        },
        note: u("Note"),
        success: u("Success"),
        info: u("Info"),
        tip: u("Tip"),
        important: u("Important"),
        warning: u("Warning"),
        caution: u("Caution"),
        danger: u("Danger"),
        details: function(e) {
          return e.type !== "containerDirective" ? !1 : (this.tag("<details>"), this.tag("<summary>"), this.raw(e.label || "Details"), this.tag("</summary>"), e.content && this.raw(e.content), this.tag("</details>"), !0);
        },
        figure: function(e) {
          if (e.type !== "containerDirective") return !1;
          let d = "";
          return e.attributes?.class && (d += ` class="${e.attributes.class}"`), this.tag("<figure" + d + ">"), e.content && this.raw(e.content), e.label && (this.tag("<figcaption>"), this.raw(e.label), this.tag("</figcaption>")), this.tag("</figure>"), !0;
        },
        "*": function(e) {
          return e.content && this.raw(e.content), !0;
        }
      })
    ]
  });
  r("micromark processed");
  const s = await X().data("settings", { fragment: !0 }).use(de).use(M).use(G).use(V, await pe(), {
    theme: "github-dark",
    colorReplacements: {
      "#24292e": "#252423"
    }
  }).use($).process(n);
  return r("rehype processed"), {
    vueTemplate: s.toString(),
    frontMatter: a
  };
}
function u(o) {
  return function(r) {
    return r.type !== "containerDirective" ? !1 : (this.tag(`<div class="notes-callout" data-type="${o}">`), this.tag('<p class="notes-callout__label">'), this.tag(`<notes-callout-icon type="${o}"></notes-callout-icon>`), this.raw(r.label || o), this.tag("</p>"), r.content && this.raw(r.content), this.tag("</div>"), !0);
  };
}
const be = O({
  presets: [R({ preflight: !1 })],
  extendTheme: (o) => {
    o.fontFamily ??= {}, o.fontFamily.sans = [
      "Arimo",
      "Helvetica",
      "Arial",
      o.fontFamily.sans
    ].join(", "), o.fontFamily.mono = ["Comic Mono", o.fontFamily.mono].join(", ");
  }
});
async function xe(o, r) {
  const t = {
    compiled: {
      html: "<!-- Compilation unsuccessful -->",
      css: "/* Compilation unsuccessful */",
      js: "/* Compilation unsuccessful */",
      title: r,
      dataset: {},
      head: [],
      frontMatter: {}
    },
    errors: [],
    debuggingInfo: {},
    log: []
  }, a = (n) => {
    t.log.push([performance.now(), n]);
  };
  try {
    let { vueTemplate: n, frontMatter: i } = await me(o, a);
    t.debuggingInfo.vueTemplate = n, t.compiled.frontMatter = i;
    {
      const c = await be.generate(n);
      c.css && (n += `
<style scoped>${c.css}</style>`, t.debuggingInfo.vueTemplate = n), a("unocss processed");
    }
    /*!
     * This function includes code yoinked from @vue/repl.
     * https://github.com/vuejs/repl/blob/main/src/transform.ts
     * Copyright (c) 2021-present, Yuxi (Evan) You
     *
     * Used under the MIT License
     */
    const s = await import("./vue-repl_CW-irzU5.js").then((c) => c.v);
    a("vue compiler imported");
    const e = {
      compiler: I,
      sfcOptions: {
        template: {
          compilerOptions: {
            isCustomElement: (c) => c.includes("-")
          }
        }
      }
    }, d = {
      filename: "Note.vue",
      code: n,
      compiled: { js: "", css: "", ssr: "" }
    }, g = await s.compileFile(e, d);
    if (a("vue compiler finished"), g.length) {
      for (const c of g)
        t.errors.push(v(c));
      throw new Error("Failed to compile Vue SFC: " + g.join(", "));
    }
    t.debuggingInfo.ssrEsm = d.compiled.ssr, t.debuggingInfo.clientEsm = d.compiled.js, a("converting ssr");
    const m = await y(d.compiled.ssr, a);
    t.debuggingInfo.ssrCjs = m, a("converting js");
    const F = await y(d.compiled.js, a);
    t.compiled.js = F;
    const S = d.compiled.css;
    t.compiled.css = S, a("executing ssr");
    const H = te(m, {
      "vue/server-renderer": T
    }).default, b = _(H);
    re(b);
    const E = await j(b);
    t.compiled.html = E, a("ssr executed"), i.wide && (t.compiled.dataset.layout = "wide"), i.title && (t.compiled.title = i.title);
    const x = `https://screenshot.source.in.th/image/_/notes/${r}`;
    t.compiled.head.push(
      ["meta", { property: "og:title", content: t.compiled.title }],
      ["meta", { property: "og:image", content: x }],
      ["meta", { property: "og:image:width", content: "1800" }],
      ["meta", { property: "og:image:height", content: "1680" }]
    );
    const C = `https://dt.in.th/${r}`;
    t.compiled.head.push([
      "link",
      { rel: "canonical", href: C }
    ]);
  } catch (n) {
    t.errors.push(v(n));
  }
  return t;
}
function v(o) {
  return String(typeof o == "object" && o && "stack" in o ? o.stack : o);
}
async function y(o, r = () => {
}) {
  r("esmToCjs started");
  const t = await import("./sucrase_Vx5h13n5.js").then((n) => n.i);
  r("sucrase imported");
  const a = t.transform(o, {
    transforms: ["imports"],
    preserveDynamicImport: !0
  });
  return r("transformed"), a.code;
}
export {
  xe as compileMarkdown
};
//# sourceMappingURL=index.js.map
