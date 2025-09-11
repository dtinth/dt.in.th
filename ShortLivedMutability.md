---
public: true
title: Short-lived mutability
aliases:
  - 20220406T150008Z2912
---

# Short-lived mutability

There once was a buzz that says ‘mutability is bad’ and that people should stop mutating things down to the lowest level. But now, I am starting to see in the [JavaScript](JavaScript) ecosystem that **short-lived mutability** can be useful and is becoming a trend on recent JavaScript libraries.

I define **short-lived mutability** as a piece of imperative code that mutates stuff to get the job done within a single microtask, under the following rules:

- Everything that is mutated is created within that microtask.
- Once the microtask is done, the mutated stuff is no longer mutable.

## Non-examples

- **DOM manipulation.** In most cases, DOM that is being mutated exists before the microtask runs, and can still be mutated after the microtask is done.

## Examples

- [**Immer**](https://github.com/immerjs/immer) — The Immer library lets you write imperative-ish code to deal with immutable data structures, leading to more idiomatic JavaScript code. Immer works by taking a recipe — a piece of impertative code that mutates a draft state (which is temporarily mutable for the extent of the recipe’s execution) — and an object to produce a new version of that object in an immutable way. Since the recipe is not async, it fits within a single microtask.

- [**React Hooks**](https://reactjs.org/docs/hooks-intro.html) — Calling a React hook mutates the functional components’s internal state to be able to store state in a place managed by React. A global dispatcher allows the hook implementation to be aware of what component is currently being worked on, without requiring callers to explicitly pass around internal data structure. For more information on this mechanism see [_Getting Closure on Hooks_](https://www.swyx.io/hooks/).

- [**Immediate mode GUI**](https://en.wikipedia.org/wiki/Immediate_mode_GUI) — This design pattern allows one to write an imperative yet declarative build a GUI. Every frame, the GUI-declaration code is executed, where the caller “declares” what GUI elements should be shown, and the result is rendered afterwards. For a quick example, see the first part of the [mCoding’s video _“Pythonizing Imgui (feat. Cython) and contributing to open source”_](https://www.youtube.com/watch?v=wh_W-veFpKU).

## Patterns

A pattern emerges:

- To the eyes of an outsider, nothing is being mutated.
- To the eyes of an insider, we are writing straightforward code that is straight up mutating things, yet due to its short-lived nature, the imperative code has no long-term effects.

So now it sounds to me like “short-lived imperative logic, [functional core, imperative shell](https://www.destroyallsoftware.com/screencasts/catalog/functional-core-imperative-shell).”
