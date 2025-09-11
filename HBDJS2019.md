---
created: 2019-07-11
title: Happy Birthday Song in Obfuscated JS
public: true
---

In 2019, I sent this [piece](ProgrammaticMusic) of [JavaScript](JavaScript) code to [Poom](https://poom.dev) on his birthday.

When pasted into the browser console, it plays a happy birthday song.

<div class="n-code-wrap">

<!-- prettier-ignore -->
```js
((c=new AudioContext(),n=[...'畋畋畍甯畋甯畐甯畏甯甯甯畋畋畍甯畋甯畒甯畐甯甯甯畋畋畗甯畔甯畐畐畏甯畍甯甯甯畕畕畔甯畐甯畒甯畐'+'甯甸甼甿町甽甿町甽甿甸甼甿甸甿畂甸甽畁畄町甿畄甸甼甿畄'].map(a=>a.charCodeAt(0)-30000),z=c.currentTime,t=(f,b,o=c.createOscillator(),g=c.createGain(),l=0.5)=>(o.frequency.value=f,o.connect(g),g.connect(c.destination),g.gain.setValueAtTime(0.5,z+b),g.gain.linearRampToValueAtTime(0,z+b+l),o.start(z+b),o.stop(z+b+l)))=>n.forEach((c,i)=>c+1&&t(220*2**((c)/12),(i>=47?(i-47)*2:i+(i%2)/6)/4)))()
```

</div>

<style scoped>
  .n-code-wrap pre {
    white-space: pre-wrap;
  }
</style>
