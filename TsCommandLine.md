---
public: true
title: Building CLI apps using @rushstack/ts-command-line library
---

The [`@rushstack/ts-command-line`](https://www.npmjs.com/package/@rushstack/ts-command-line) library is used by many [Node.js](Nodejs) CLI tools developed by Microsoft, such as [Heft](https://www.npmjs.com/package/@rushstack/heft), [API Documenter](https://www.npmjs.com/package/@microsoft/api-documenter) and [API Extractor](https://api-extractor.com/).

## Boilerplate

To use this boilerplate:

1. Copy the code below.
2. Rename `AppCommandLineParser`
3. Rename `AppCommandLineAction`
4. Fix things in `fixme`

```ts
import {
  CommandLineAction,
  CommandLineParser,
} from '@rushstack/ts-command-line'

class AppCommandLineParser extends CommandLineParser {
  public constructor() {
    super({
      toolFilename: 'fixme',
      toolDescription: 'fixme',
    })
    this.addAction(new AppCommandLineAction())
  }
  protected onDefineParameters(): void {
    // fixme
  }
}

class AppCommandLineAction extends CommandLineAction {
  public constructor() {
    super({
      actionName: 'fixme',
      summary: 'fixme',
      documentation: 'fixme',
    })
  }
  protected onDefineParameters(): void {
    // fixme
  }
  protected async onExecute(): Promise<void> {
    // fixme
    console.log('Hello!')
  }
}

new AppCommandLineParser().execute()
```
