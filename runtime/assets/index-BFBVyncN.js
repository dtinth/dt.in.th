import{_ as l}from"./supabase-C7t6A7AB.js";import{s as p,V as a,d as c,x as i}from"./vue-DhWNrUS5.js";function f(t,e){const o=s=>{if(s==="vue")return a;if(e[s])return e[s];throw new Error("[executeCjs] Unavailable module: "+s)},n={},r={exports:n};return(typeof t=="function"?t:new Function("require","exports","module","Vue",t))(o,n,r,a),r.exports}function b(t,e){const o=f(t,{}).default,n=p(o);d(n),n.mount(e).$nextTick().then(async()=>{const{littlefoot:r}=await l(async()=>{const{littlefoot:u}=await import("./littlefoot-DnJ0xbxM.js");return{littlefoot:u}},[]);r({scope:e,buttonTemplate:`<button
      aria-expanded="false"
      aria-label="Footnote <% number %>"
      class="littlefoot__button"
      id="<% reference %>"
      title="See Footnote <% number %>"
    />
      <% number %>
    </button>`})})}function d(t){t.component("d-split",c({setup(e,{slots:o}){return()=>i("div",{class:"d-split"},[i("div",{class:"d-split__left"},o.default?.()),i("div",{class:"d-split__right"},o.right?.())])}}))}export{f as executeCjs,b as hydrate,d as registerComponents};
//# sourceMappingURL=index-BFBVyncN.js.map
