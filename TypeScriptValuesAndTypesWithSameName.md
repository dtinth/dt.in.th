---
public: true
title: Creating types and values with the same name in TypeScript
aliases:
  - 20220523T045945Z2734
---

# Naming types in TypeScript: don’t!

If you have a React component named `Foo`, how do you name the type that represents its props? Do you use `FooProps` or just `Props`?
I recently learned that I could’ve just named it `Foo`. No need to create a new name.
So this is the convention I now use in [React](React) projects:

<!-- prettier-ignore-start -->

```ts
// ❌ Do not use "Props" — they are ambiguous, hard to auto-import, and
//    doesn’t work well when you have multiple components in the same file.
export interface Props { foo: string }
export const Thing: FC<Props> = (props) => { /* ... */ }

// ❌ Do not use "ThingProps" — verbose and requires an extra import.
export interface ThingProps { foo: string }
export const Thing: FC<ThingProps> = (props) => { /* ... */ }

// ✅ Use the same name for the component and the type representing its props.
export interface Thing { foo: string }
export const Thing: FC<Thing> = (props) => { /* ... */ }
```

<!-- prettier-ignore-end -->

At first glance, it may seem weird to create a type and a value with the same name. Wouldn’t that be confusing?
This post provides the rationale for why this can be considered idiomatic code, as well as more examples.

## The two planes of existence

Did you know that this is a valid [TypeScript](TypeScript) code?

```ts
// Note: Contrived example; more useful examples below.
export type X = number
export const X = () => 42
```

We created a type and a constant, but they have the same name, yet we don’t get an error.
This works because in TypeScript there is a **world of values** and another **world of types**.

When you declare things in TypeScript, you either:

- Declare a name in the **world of values**. Examples: `var`, `let`, `const`, `function`.
- Declare a name in the **world of types**. Examples: `type`, `interface`.
- Declare a name in the **both worlds**. Examples: `class`[^class-x], `namespace`[^namespace-x], `enum`[^enum-x].

[^class-x]: Take `class X` for example.

    - As a value, `X` refers to the constructor function.
    - As a type, `X` refers to the type that represents instances of the class.
    - To represent the type of the class itself, use `typeof X`.

[^namespace-x]: Take `namespace X` for example.

    - As a value, `X` refers to the namespace object.
    - As a type, `X` refers to the type that contains the types exported from the namespace.
    - To represent the type of a namespace object itself, use `typeof X`.

[^enum-x]: Take `enum X` for example.

    - As a value, `X` refers to the enum object.
    - As a type, `X` refers to the type that represents the members of the enum.
    - To represent the type of the enum object itself, use `typeof X`.

<!-- - When you write `const X`, you’re declaring the name `X` in the **world of values.**
- When you write `type X`, you’re declaring the name `X` in the **world of types.**
As they are in different worlds, they can coexist. Note that some constructs lets you declare a name in both worlds at the same time (see examples below for more info).
-->

<details><summary>More explanation</summary>

If a name exists only in the world of values, it can’t be used as a type:

```ts
type X = 1
let Y = X
//      ^ 'X' only refers to a type, but is being used as a value here.
```

If a name exists only in the world of types, it can’t be used as a value:

```ts
let X = 1
type Y = X
//       ^ 'X' refers to a value, but is being used as a type here.
//         Did you mean 'typeof X'?
```

When importing a name, normally, both worlds are considered.

```ts
import { glob, IOptions } from 'glob'
//       |     |
//       |     +---> type
//       +---------> value

import { EventEmitter } from 'events'
//       |
//       +---> both type and value, since EventEmitter is a class
```

If `import type` is used, then only the world of types is considered.

```ts
import type { EventEmitter } from 'events'

function f(emitter: EventEmitter) {}
// Ok, as `EventEmitter` is used in a type context.

let x = new EventEmitter()
// 'EventEmitter' cannot be used as a value because it was imported
// using 'import type'.
```

</details>

## Why would this be useful? More real-world examples

As previously mentioned, whenever you create a class, a namespace, or an enum, you’re declaring a name in both the world of values and the world of types, and in different world they mean different things. Take the `EventEmitter` class, for example:

- As a value, `EventEmitter` refers to the class object, the constructor function that creates instances of the class.
- As a type, `EventEmitter` refers to the type that represents instances of the class.

We can also do the same thing in our own code. Let’s look at a few practical use cases. All of these examples came from real-world projects:

### Declaring a type with a corresponding schema

Sometimes we not only want to declare a type (which is only useful for compile-time checks), but also a schema (which is useful for runtime checks).
Rather than having to use 2 different names, we can use the same name for both.

```ts
import { JSONSchemaType } from 'ajv'

// As a type, `RectangleSize` represents a shape of an object.
export interface RectangleSize {
  width: number
  height: number
}

// As a value, `RectangleSize` refers to a JSON schema corresponding to
// the type of the same name.
export const RectangleSize: JSONSchemaType<RectangleSize> = {
  type: 'object',
  properties: {
    width: { type: 'number' },
    height: { type: 'number' },
  },
  required: ['width', 'height'],
}
```

### Declaring an interface with a corresponding dependency injection token

This example is taken straight from VS Code’s source code [(1)](https://github.com/microsoft/vscode/blob/c0769274fa136b45799edeccc0d0a2f645b75caf/src/vs/platform/log/common/log.ts#L15) [(2)](https://github.com/microsoft/vscode/blob/c0769274fa136b45799edeccc0d0a2f645b75caf/src/vs/platform/log/common/log.ts#L108-L120) [(3)](https://github.com/microsoft/vscode/blob/0ca2dff09db2473752c34e3475cfe7b9600cf8a1/src/vs/platform/telemetry/common/telemetryLogAppender.ts).

```ts
// As a type, `ILoggerService` represents an interface that can be implemented
// by a service that can create loggers.
export interface ILoggerService {
  createLogger(file: URI, options?: ILoggerOptions): ILogger
  getLogger(file: URI): ILogger | undefined
}

// As a value, `ILoggerService` is a decorator that can be used to inject
// an `ILoggerService` instance into a class.
export const ILoggerService = createDecorator<ILoggerService>('loggerService')

// In another file...
import { ILoggerService } from 'vs/platform/log/common/log'
//       ^ imports both type and value

export class DependentService {
  constructor(@ILoggerService private readonly loggerService: ILoggerService) {}
  //           ^ value                                        ^ type
}
```

### Declaring a React component with a corresponding prop type

Are you tired of having to import 2 different names, one for the React component and another for the type representing its props?

```ts
import { Button, ButtonProps } from '../ui-kit'
//       |       |
//       |       +---> The prop type for the Button component
//       +-----------> The Button React component (value)
```

You can do this instead:

```ts
// The interface represents the props of the component
// (same name as the component!)
export interface Button {}

// The component itself
export const Button: React.FC<Button> = (props) => {
  /* ... */
}
```

And with that you no longer need to import the component and its prop type separately:

```ts
import { Button } from '../ui-kit'
//       |
//       +--> As a value, `Button` refers to the React component.
//            As a type, `Button` refers to the type representing Button’s props.
//            Both are imported at once!
```

Note that this pattern only works with functional components.

So, having learned this, in my recent React projects I now use the following convention:

<!-- prettier-ignore-start -->

```ts
// ❌ Do not use "Props" — they are ambiguous, hard to auto-import, and
//    doesn’t work well when you have multiple components in the same file.
export interface Props { foo: string }
export const Thing: FC<Props> = (props) => { /* ... */ }

// ❌ Do not use "ThingProps" — verbose and requires an extra import.
export interface ThingProps { foo: string }
export const Thing: FC<ThingProps> = (props) => { /* ... */ }

// ✅ Use the same name for the component and the type representing its props.
export interface Thing { foo: string }
export const Thing: FC<Thing> = (props) => { /* ... */ }
```

<!-- prettier-ignore-end -->

### Declaring a React context with a corresponding context type

The same can be applied to React contexts.

```ts
import { createContext } from 'react'

// The interface represents the type of the context value
// (same name as the context!)
export interface ThemeContext {
  theme: 'dark' | 'light'
}

// The context itself
export const ThemeContext = createContext<ThemeContext>({
  theme: 'dark',
})
```

## Automatic enforcement

To enforce the convention for React components, I use this [Semgrep](Semgrep) rule^[In my projects, I use Semgrep in conjunction with ESLint. ESLint for community rules and Semgrep for project-specific rules.]:

```yaml
rules:
  - id: consistent_react_prop_type_naming
    pattern-either:
      - pattern-regex: 'const (\w+): React\.FC<\s*(?:\1)?Props\s*>'
      - pattern-regex: 'function (\w+)\(\s*props:\s*(?:\1)?Props\s*'
    message: Make the prop type/interface have the same name as the React component.
    languages: [ts]
    severity: ERROR
```
