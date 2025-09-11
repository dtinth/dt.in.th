---
public: true
title: Notes about React 18 RC.0
reddit: https://www.reddit.com/r/reactjs/comments/scz8rs/notes_about_react_18_rc_curated_from_react_18s/
aliases:
  - 20211212T123200Z8098
---

# Notes about React 18 RC.0

I am writing this note while [React](React) 18 is in **release candidate** stage. I created this note because I did not closely follow its development progress, and I’m only aware that React 18 will be released soon after the RC was published.

I studied React’s [excellent](https://twitter.com/dan_abramov/status/1470613745315594247) test suite and [compared test reports between React 17 and 18-rc.0](https://github.com/dtinth/react-tests/blob/main/reports/v17.0.2_VS_v18.0.0-rc.0.md)^[The **bold text** in front of each entry is an internal name in React source code that you can use to learn more about the feature or change, until official documentation is available. My recomendation is to look up test files with that name, as they very precisely describe the behavior of the API.] and gathered what I learned from the tests, [relevant blog posts and discussions](https://reactjs.org/blog/2021/06/08/the-plan-for-react-18.html)^[At the time of writing, I wasn’t aware that [React Conf 2021](https://conf.reactjs.org/stage) happened, and that React 18 RC was released during the conference. Maybe you can go watch the keynotes instead…] in this note.

1. **ReactDOMRoot:** [`ReactDOM.createRoot` supersedes `ReactDOM.render`.](https://github.com/reactwg/react-18/discussions/5)

   - `ReactDOM.render` is still available but this creates a “root” in [**“legacy” mode**](https://github.com/reactwg/react-18/discussions/5#:~:text=New%20Root%20API.-,Legacy%20root%20API,-%3A%20This%20is%20the). This API is called “Legacy root API”. A legacy root behaves like React 17.

     ```js
     // Before (Legacy Root API)
     ReactDOM.render(<App tab="home" />, container)

     // After (New Root API)
     const root = ReactDOM.createRoot(container)
     root.render(<App tab="home" />)
     ```

   - The new API is called the **New root API**. The new root API enables concurrent rendering.

   - [This new API no longer has the ability to specify a render callback.](https://github.com/reactwg/react-18/discussions/5#:~:text=What%20about%20the%20render%20callback) Instead, put a `ref` callback on the target DOM node to be notified when something is mounted.

     - Due to concurrent rendering, the `ref` may not be assigned immediately (i.e. synchronously), unless `ReactDOM.flushSync` is used.

2. **ReactDOMRoot:** [`ReactDOM.hydrateRoot` supersedes `ReactDOM.hydrate`.](https://github.com/reactwg/react-18/discussions/5#:~:text=What%20about%20hydration%3F)

   ```js
   // Before
   ReactDOM.hydrate(<App tab="home" />, container)

   // After
   const root = ReactDOM.hydrateRoot(container, <App tab="home" />)
   ```

3. **ReactDOMFiberAsync:** In the New root API, [state updates will be batched by default](https://github.com/reactwg/react-18/discussions/21).

4. **ReactFlushSync:** [`ReactDOM.flushSync`](https://github.com/reactwg/react-18/discussions/21#:~:text=What%20if%20I%20don%E2%80%99t%20want%20to%20batch%3F) takes a callback that updates React state. It invokes the callback, performs the update, and flushes them to DOM **synchronously**. Replaces [`unstable_batchedUpdates`](https://github.com/reactwg/react-18/discussions/21#:~:text=What%20about%20unstable_batchedUpdates).

   - When used in conjection with `React.startTransition` (see below) then [the innermost one wins](https://github.com/facebook/react/blob/f2a59df48bec2352a4dd3b5415282a4ea240a4f8/packages/react-reconciler/src/__tests__/ReactFlushSync-test.js#L70).

5. **ReactTransition:** [`React.startTransition`](https://github.com/reactwg/react-18/discussions/41) takes a callback that updates React state and updates it with lower priority (they call it **non-urgent** updates). [See a real world example.](https://github.com/reactwg/react-18/discussions/65) [See tests.](https://github.com/facebook/react/blob/f2a59df48bec2352a4dd3b5415282a4ea240a4f8/packages/react-reconciler/src/__tests__/ReactHooksWithNoopRenderer-test.js#L3577)

   ```js
   setInputValue(input) // urgent (default priority)
   startTransition(() => {
     setSearchQuery(input) // non-urgent (idle priority)
   })
   ```

   - **ReactHooks:** [`React.useDeferredValue`](https://github.com/facebook/react/blob/f2a59df48bec2352a4dd3b5415282a4ea240a4f8/packages/react-reconciler/src/__tests__/ReactHooksWithNoopRenderer-test.js#L3638) is (roughly) a [sugar for this pattern](https://github.dev/facebook/react/blob/3b3daf5573efe801fa3dc659020625b4023d3a9f/packages/react-reconciler/src/ReactFiberHooks.new.js#L1927) (note: [might be inaccurate](https://www.reddit.com/r/reactjs/comments/scz8rs/comment/huaqcor/?utm_source=reddit&utm_medium=web2x&context=3)):

     ```js
     // Before
     const [searchQuery, setSearchQuery] = useState(input)
     useEffect(() => {
       startTransition(() => {
         setSearchQuery(input)
       })
     }, [input])

     // After
     const searchQuery = useDeferredValue(input)
     ```

6. **ReactTransition:** [`React.useTransition`](https://github.com/reactwg/react-18/discussions/41#:~:text=What%20do%20I%20do%20while%20the%20transition%20is%20pending%3F) exposes an `isPending` status for transitions that are started using the returned `startTransition` callback. This allows the UI to display feedback to the user that the UI is still updating.

   ```js
   const [isPending, startTransition] = useTransition()
   // Use the returned `startTransition` instead of React.startTransition.
   ```

7. **ReactDOMUseId:** [`React.useId()`](https://github.com/reactwg/react-18/discussions/111) generates an ID that remains consistent between server and client rendering.

8. **ReactEmptyComponent:** [Components may now return `undefined` in addition to `null`](https://github.com/reactwg/react-18/discussions/75).

9. **ReactDOMFizzServer:** ^[[“React Fizz”](https://www.reddit.com/r/reactjs/comments/a495zg/react_fizz_new_streaming_server_renderer/) is the codename for new server-rendering architecture, which supports streaming and suspense.] [`React.Suspense` can now be rendered on the server](https://github.com/facebook/react/pull/21488).

   - **ReactDOMServerSuspense:** When rendering synchronously (e.g. `ReactDOMServer.renderToString`) this [will just render a fallback](https://github.com/facebook/react/blob/f2a59df48bec2352a4dd3b5415282a4ea240a4f8/packages/react-dom/src/__tests__/ReactDOMServerSuspense-test.internal.js#L111).

10. **[StrictEffectsMode](ReactStrictEffectMode):** Under the New Root API, inside `<React.StrictMode>`, `useEffect` and `useLayoutEffects` callbacks are [now](https://github.com/facebook/react/pull/21597/files) [doubled](https://github.com/facebook/react/pull/19523) in dev mode ([see tests](https://github.com/facebook/react/blob/f2a59df48bec2352a4dd3b5415282a4ea240a4f8/packages/react-reconciler/src/__tests__/StrictEffectsMode-test.js#L61)). That is, given the following code, it will call `subscribe(); unsubscribe(); subscribe()`:

    ```js
    useEffect(() => {
      subscribe()
      return () => unsubscribe()
    }, [])
    ```

11. **useSyncExternalStore:** [`state = useSyncExternalStore(subscribe, get)`](https://github.com/reactwg/react-18/discussions/86) is introduced to allow components [“to safely and efficiently read from a mutable external source”](https://github.com/reactjs/rfcs/blob/main/text/0147-use-mutable-source.md) in a way that works with concurrent rendering. For older React versions that support hooks, [`use-sync-external-store/shim`](https://www.npmjs.com/package/use-sync-external-store) package can be used. [See tests](https://github.com/facebook/react/blob/f2a59df48bec2352a4dd3b5415282a4ea240a4f8/packages/use-sync-external-store/src/__tests__/useSyncExternalStoreShared-test.js#L127).

12. **ReactHooks:** [`useInsertionEffect` is for performing effects _before_ `useLayoutEffect`](https://github.com/reactwg/react-18/discussions/110), e.g. injecting style tags performantly in CSS-in-JS scenario when React is rendering concurrently.
