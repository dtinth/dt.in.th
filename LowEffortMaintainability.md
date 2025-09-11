---
public: true
title: Low-effort things you can do today to improve code maintainability a year later.
wide: true
aliases:
  - 20211019T141224Z1105
---

# Low-effort things you can do today to improve code maintainability a year later

When it comes to **code maintainability** in the long run, one has to strike a balance and avoid:

- **Over-[engineering](SoftwareEngineering)** — spending a lot of time upfront designing things that turn out to be unnecessarily complex (or just unnecessary).
- **Under-[engineering](SoftwareEngineering)** — writing spaghetti code to ship fast, and paying for the technical debt later, suffering through bug-ridden untestable code and painful restructurings and/or rewrites.

In this note, I will list a few practices that takes _minimal up-front effort_ to do, but end up saving a lot of time down the line. Each section will also feature a few examples from real-world code. I will assume that you already have a basic level of code hygiene, e.g. using linters and formatting your code in a consistent style.

---

## Own your interface

:::::split

**Instead of depending on external libraries’ API, consider owning the API yourself.**

You don’t have to design the API by yourself.
The easiest low-effort approach is to steal the API from external modules by re-exporting them in your own modules.
Make your application code depend only on _your_ API instead of external APIs.

When I follow this guideline, it lets me insulate myself from:

- Breaking changes when upgrading the external library.
- Rewriting a lot of code when I want to switch to a new library.
- Adding features not provided by the third-party library.

::::aside

Before:

```ts
// app.js
import { Button } from 'semantic-ui-react'
```

After:

```ts
// ui.js
export { Button } from 'semantic-ui-react'

// app.js
import { Button } from '@/ui'
```

::::

:::::

:::::split

If, for example, one year later I decide to switch to [MUI][],
I can do so while keeping most of my code intact.

[mui]: https://mui.com/

At this point, the project will probably have 100 files that imports the Button component.
That little re-export I did 1 year ago would have saved the effort of having to change 100 files.

Some people call this an [anti-corruption layer](https://learn.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer). TypeScript’s structural typing makes building such layers very lightweight.

::::aside

Switch to MUI:

```ts
// ui.js
import Button from '@mui/material/Button'

export function Button(props) {
  const variant = props.primary
    ? 'contained'
    : props.secondary
    ? 'outlined'
    : 'text'
  return (
    <Button onClick={props.onClick} variant={variant}>
      {props.children}
    </Button>
  )
}
```

::::

:::::

### Real-world examples

:::::split

- By [owning the `Storage` interface](https://github.com/dtinth/evalaas/blob/c83d3b3420d680ab97da977bfe3acda547be8384/types.d.ts#L17-L25) which is derived from a _strict minimal subset_ of Google Cloud Storage’s JavaScript API…

  - [It becomes trivial to create a mock storage for testing purposes.](https://github.com/dtinth/evalaas/blob/c83d3b3420d680ab97da977bfe3acda547be8384/server.js#L131-L149)

  - A `new gcs.Storage()` can be used where our `Storage` is expected without having to write any abstraction layer, thanks to TypeScript’s structural typing.

::::aside

Types:

```ts
type Storage = {
  bucket: (bucketName: string) => Bucket
}
type Bucket = {
  file: (key: string) => File
}
type File = {
  download: () => Promise<[Buffer]>
}
```

App:

```ts
import * as gcs from '@google-cloud/storage'
const storage: Storage = new gcs.Storage()
```

---

::::

:::::

:::::split

- Sometimes doing acceptance tests against UIs requires using a lot of helper libraries to set up the component hierarchy. This can easily lead to import hell. By owning the interface for the helper libraries…

  - I can use all helpers in my tests without having to importing them from each npm package; the package where each helper comes from now becomes just an _implementation detail._
  - I can also create more idiomatic helpers (such as `renderInTestWrapper`) leading to cleaner tests and less boilerplate, without having to add more import statements.

- At [Taskworld](https://taskworld.com/), using the same technique, we were able to…

  - migrate from [WebdriverIO library](https://webdriver.io/) (v4)
  - …to [Selenium’s official JavaScript API](https://www.npmjs.com/package/selenium-webdriver) in 2019[^why-selenium], and
  - …to [Playwright](https://www.npmjs.com/package/playwright) in 2021,
  - with very little changes to the test scripts.

[^why-selenium]:
    **Why did we switch from WebdriverIO to Selenium?** At that time, we found a few problems with WebdriverIO:

    - Sometimes it would error out with messages like “an unknown server-side error occurred” without showing the response from Selenium server.
    - Upgrading to WebdriverIO v5 is painful due to [a lot of breaking changes](https://github.com/webdriverio/webdriverio/blob/v5/CHANGELOG.md#v500-2018-12-20).
    - WebdriverIO v5 ships with built-in type definitions, but the types were inaccurate and inconsistent with its actual API.

    As of writing, WebdriverIO is at v7. Meanwhile, since 2019 selenium-webdriver’s API is much more stable and contains very little breaking changes.

::::aside

Before:

```ts
import { setupWorker, rest } from 'msw'
import { Provider } from 'react-redux'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { QueryClient, QueryClientProvider } from 'react-query'
import {
  render,
  findByText,
  fireEvent,
  waitFor,
  act,
} from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from '@mui/material/styles'
import { simulateDragAndDrop, retry } from '@/test-utils'
import { theme } from '@/app-design'
```

After:

```ts
import {
  mockEndpoints,
  renderInTestWrapper,
  renderHook,
  findByText,
  actions,
  waitFor,
  act,
  retry,
} from '@/test-utils'
```

---

::::

:::::

### Applicability

:::::split

I use this principle with:

- Common UI components.
- Common infrastructure without a standardized interface e.g. logging.
- Testing utilities.
- Third-party SDKs.

::::aside

I don’t use this principle with:

- Standard libraries, e.g. Array, Set, Map.
- Common infrastructure with a standardized interface e.g. OpenTelemetry.
- Very stable libraries e.g. Lodash.
- Base frameworks, e.g. React.

::::

:::::

---

## Dependency-inject IO functions

:::::split

One rule of thumb that works really well for me is to **perform dependency-injection on most IO operations.**

- Since I wanted the instant gratification of seeing my app working in the shortest amount of time possible, I didn’t bother doing test-driven development[^tdd], because that would take me longer time until my app is usable. _I want to see that report already!_

- Still, I follow the above rule of thumb and made sure all IO operations are dependency-injected.

[^tdd]:
    When I was just starting out, TDD was an excellent tool. By forcing me to write tests before I write actual code, it teaches me **how to write testable code.** Religiously applying TDD was a very useful experience for me, because I did not know how to write testable code before.

    But now I know how to write testable code. Without any test, I can write code knowing exactly how I would test it later when I need to. Do I still need TDD? Well, _sometimes._

    Nowadays I do TDD when it is apparent that writing tests first would save me more time. I also try to write tests first when dealing with software regressions and legacy code.

---

Another rule of thumb that I follow is to **make every function that involves IO `async` from the start** — even if it doesn’t use `await` at first.

- This way, should this function ever need to perform any async operation, I can just use `await` without introducing any breaking changes or costly refactors.

---

Now that I get the gratification of seeing that my app is working, I realized _“what a big mess of code I just created.”_ I needed to refactor — and that’s when I have a need to test my code…

::::aside

Before:

```js
export async function generateReport() {
  const views = parseCSV(fs.readFileSync('views.csv'))
  const events = parseCSV(fs.readFileSync('events.csv'))
  // ...
  fs.writeFileSync('engagement.csv', toCSV(engagement))
  fs.writeFileSync('revenue.csv', toCSV(revenue))
  console.log('Completed!')
}
```

After:

```js
export async function generateReport({
  fs: { readFileSync, writeFileSync } = fs,
  logger: { log } = console,
} = {}) {
  const views = parseCSV(readFileSync('views.csv'))
  const events = parseCSV(readFileSync('events.csv'))
  // ...
  writeFileSync('engagement.csv', toCSV(engagement))
  writeFileSync('revenue.csv', toCSV(revenue))
  log('Completed!')
}
```

::::

:::::

:::::split

Thanks to the above rule, when I write tests,

- I can **inject mock implementations** of the IO functions, which lets me test my functions without stubbing or spying required.
- I can easily write **acceptance tests** that covers the whole process and [**still runs fast**](https://www.youtube.com/watch?v=AJ7u_Z-TS-A). These acceptance tests can provide more fidelity and confidence than unit tests.
- Also, since dependency is injected from the outside, it also makes writing unit tests easier.

::::aside

Tests:

```js
describe('the engagement report', () => {
  it('...', async () => {
    const fs = new FakeFS(fixtures)
    await generateReport({ fs })
    expect(fs.readFileSync('engagement.csv')).toMatchSnapshot()
  })
})
```

::::

:::::

### Real-world examples

:::::split

- The [`renderChart`](https://github.com/bemusic/song-workshop/blob/6d75baacf08b5c7127b6b6149e3a9c75973c1ec4/src/SongRender.ts#L52) function takes a musical score and bundles of sound files, and renders it into an OGG audio file[^renderchart].

  - Since everything related to IO is injected into the function, I can [trivially write a smoke test for it.](https://github.com/bemusic/song-workshop/blob/6d75baacf08b5c7127b6b6149e3a9c75973c1ec4/src/SongRender.spec.ts#L9-L27)

::::aside

```ts
export type RenderOptions = {
  soundAssetsMetadata: SoundAssetsMetadata
  chartData: ArrayBuffer
  chartFilename: string
  loadBemusepack: (path: string) => Promise<ArrayBuffer>
  log?: (text: string) => void
}

export async function renderChart(options: RenderOptions)
```

---

::::

:::::

:::::split

- The [`OmniInput`](https://github.com/bemusic/bemuse/blob/5c4c3206b90ea7c05635da380f65508f4fff55aa/bemuse/src/omni-input/index.js#L29) class handles all supported input for the game (keyboard, gamepad, MIDI controller).

  - The `window` instance is injected through its constructor, [it becomes trivial to write unit tests for these input devices without any stubbing.](https://github.com/bemusic/bemuse/blob/5c4c3206b90ea7c05635da380f65508f4fff55aa/bemuse/src/omni-input/index.spec.js#L72-L146)

::::aside

```ts
export class OmniInput {
  constructor(private _window = window, options = {}) {
    // ...
  }
  // ...
}
```

::::

:::::

[^renderchart]: It uses Web Audio API and ffmpeg.wasm, but that’s an implementation detail

<style scoped>
  h1 {
    max-width: 24em;
  }
</style>
