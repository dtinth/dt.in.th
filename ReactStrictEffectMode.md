---
public: true
title: React 18's StrictEffectMode
created: 2022-01-26
aliases:
  - 20220126T112639Z7327
---

# React 18’s StrictEffectMode

These notes are copied from [my Reddit comments](https://www.reddit.com/r/reactjs/comments/scz8rs/notes_about_react_18_rc_curated_from_react_18s/hua329h/) about my earlier [Notes about React 18 RC](React18RC).

## About StrictEffectMode

[Comment](https://www.reddit.com/r/reactjs/comments/scz8rs/comment/hua2nig/?utm_source=reddit&utm_medium=web2x&context=3)

One more tidbit that I found particular interesting [in React 18] is the “doubling” of effects in `<React.StrictMode>` (no.10). I got bitten by it. I used to write code like this:

```js
function App() {
  const canvasRef = useRef(null)
  useEffect(() => {
    window.addEventListener('resize', () => {
      resizeCanvasToWindow(canvasRef.current)
    })
  }, [])
  // ...
}
```

Note that I never called `removeEventListener()`. Normally this is a red flag, but since it’s the root component that never gets unmounted, this is actually fine. At least, in earlier versions of React this is not problem (although they [render twice](https://stackoverflow.com/questions/61254372/my-react-component-is-rendering-twice-because-of-strict-mode/61897567#61897567), they invoke effects just once.)

However, in React 18, under `<React.StrictMode>`, under development build, React will actually invoke the effect twice (i.e. `effect()?.(); effect()`) just to force you to always clean up after your effects.

With the example above, the event listener is now attached **twice**, so each `'resize'` event invokes `resizeCanvasToWindow()` 2 times. (To fix, I need to add `removeEventListener()` in `useEffect`’s return. Took me a while to figure that one out!)

## The history of StrictEffectMode

[Comment](https://www.reddit.com/r/reactjs/comments/scz8rs/comment/hua56ke/?utm_source=reddit&utm_medium=web2x&context=3)

In case you are curious about the story I [`git blame`’d the test files](https://github.com/facebook/react/blame/f2a59df48bec2352a4dd3b5415282a4ea240a4f8/packages/react-reconciler/src/__tests__/StrictEffectsMode-test.js) and here’s what I found:

- This feature is called **StrictEffectsMode** (test file name).
- Sep 2020: The feature is implemented in [PR #19523](https://github.com/facebook/react/pull/19523) but is hidden behind a feature flag.
- Feb 2021: 3 levels of strict modes introduced in [PR #20844](https://github.com/facebook/react/pull/20844) and [PR #20849](https://github.com/facebook/react/pull/20849).
  - Level 0 (sloppy mode) is `ReactDOM.render`.
  - Level 1 (legacy mode) is `ReactDOM.render` + `StrictMode` (which double-renders).
  - Level 2 (strict effects mode) is `ReactDOM.createRoot` + `StrictMode` (which double-renders + double-effects).
