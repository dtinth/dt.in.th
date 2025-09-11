---
title: Using multiple refs in React
public: true
created: 2020-06-09
aliases:
  - 20200609T210456Z7886
---

# Using multiple refs in React

<https://www.npmjs.com/package/@seznam/compose-react-refs>

```js
import composeRefs from '@seznam/compose-react-refs'
```

```js
const textareaRef = useRef < HTMLTextAreaElement > null
return <textarea ref={composeRefs(textareaRef, props.textareaRef)} />
```
