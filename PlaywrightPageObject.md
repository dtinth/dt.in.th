---
title: How I structure Playwright page objects
public: true
---

# How I structure Playwright page objects

After using [Playwright](Playwright) for 4 years, I think I have finally found the code structure for creating page objects that I’m actually happy with. First, let's take a look at a before and after comparison:

## Before

```ts
import { test, expect } from '@playwright/test'

// Multiple page objects have to be imported...
import { LoginPage } from './page-objects/LoginPage'
import { RepoPage } from './page-objects/RepoPage'
import { IssueCreatePage } from './page-objects/IssueCreatePage'
import { IssueViewPage } from './page-objects/IssueViewPage'
import { IssueListPage } from './page-objects/IssueListPage'

// ...and declared...
let loginPage: LoginPage
let repoPage: RepoPage
let issueCreatePage: IssueCreatePage
let issueViewPage: IssueViewPage
let issueListPage: IssueListPage

// ...and initialized in the beforeEach hook...
test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page)
  repoPage = new RepoPage(page)
  issueCreatePage = new IssueCreatePage(page)
  issueViewPage = new IssueViewPage(page)
  issueListPage = new IssueListPage(page)
})

// ...so that they can be used in the test.
test('Create a new issue', async ({ page }) => {
  await loginPage.goto()
  await loginPage.login('username', 'password')

  await repoPage.goto('myorg/myrepo')
  await repoPage.navigateToIssues()
  await issueListPage.createNewIssue()
  await issueCreatePage.createIssue('New bug', 'This is a new bug')
  await issueViewPage.expectIssueTitle('New bug')
})
```

As you can see, there is more boilerplate code than the actual test logic.

## After

```ts
import { test, expect } from '@playwright/test'

// A single AppTester class is imported...
import { AppTester } from './page-objects'

test('Create a new issue', async ({ page }) => {
  // ...and initialized in the test.
  const app = new AppTester({ page })

  // The AppTester provides access to all the page objects
  // which are lazily initialized.
  await app.loginPage.goto()
  await app.loginPage.login('username', 'password')
  await app.repoPage.goto('myorg/myrepo')
  await app.repoPage.navigateToIssues()
  await app.issueListPage.createNewIssue()
  await app.issueCreatePage.createIssue('New bug', 'This is a new bug')
  await app.issueViewPage.expectIssueTitle('New bug')
})
```

As you can see, the "After" version is much cleaner and more concise. We no longer need to import multiple page objects, declare variables, or initialize them in a beforeEach hook. Instead, we have a single `AppTester` class that serves as an entry point to all our page objects.

## How it works

Let's break down how this structure is achieved.

### The `PageObject` superclass

First, we define a `PageObject` superclass and a `PageObjectContext` interface:

```ts
import { Page } from '@playwright/test'

export interface PageObjectContext {
  page: Page
}

export abstract class PageObject {
  constructor(protected readonly context: PageObjectContext) {}

  protected get page() {
    return this.context.page
  }
}
```

This superclass provides a common structure for all page objects and ensures they have access to the Playwright `Page` object.

### The `AppTester` class

The `AppTester` class serves as the main entry point for all page objects:

```ts
import { Page } from '@playwright/test'
import { PageObject, PageObjectContext } from './PageObject'
import { LoginPageTester } from './LoginPageTester'
import { RepoPageTester } from './RepoPageTester'
import { IssueCreatePageTester } from './IssueCreatePageTester'
import { IssueViewPageTester } from './IssueViewPageTester'
import { IssueListPageTester } from './IssueListPageTester'

export class AppTester extends PageObject {
  constructor(context: PageObjectContext | Page) {
    if ('page' in context) {
      super(context)
    } else {
      super({ page: context })
    }
  }
  get loginPage() {
    return new LoginPageTester(this.context)
  }
  get repoPage() {
    return new RepoPageTester(this.context)
  }
  get issueCreatePage() {
    return new IssueCreatePageTester(this.context)
  }
  get issueViewPage() {
    return new IssueViewPageTester(this.context)
  }
  get issueListPage() {
    return new IssueListPageTester(this.context)
  }

  // AppTester can also have utility functions for app-wide actions
  async expectTextVisible(text: string) {
    await expect(
      this.page.getByText(text).filter({ visible: true }).first()
    ).toBeVisible()
  }

  async takeScreenshot(filename: string) {
    await this.page.screenshot({ path: `screenshots/${filename}` })
  }
}
```

The `AppTester` class uses getters to instantiate page objects on-demand, providing a unified API for testing. It can also include utility methods for app-wide actions that don't belong to specific pages.

### Individual page objects

Each page object extends the `PageObject` class and uses the `Tester` suffix to distinguish from production code:

```ts
export class LoginPageTester extends PageObject {
  async goto() {
    await this.page.goto('https://github.com/login')
  }
  async login(username: string, password: string) {
    await this.page.getByTestId('login-field').fill(username)
    await this.page.getByTestId('password-field').fill(password)
    await this.page.getByRole('button', { name: 'Sign in' }).click()
  }
}
```

### Component-based testers

For components that appear across multiple pages, create separate component testers:

```ts
export class ActionButtonsTester extends PageObject {
  get printButton() {
    return this.page.getByTestId('print-button')
  }

  get copyButton() {
    return this.page.getByTestId('copy-button')
  }

  async print() {
    await this.printButton.click()
  }

  async expectPrintButtonVisible() {
    await expect(this.printButton).toBeVisible()
  }
}
```

Then reference these component testers from your AppTester (or from other page objects that need them):

```ts
export class AppTester extends PageObject {
  // ... other page getters ...

  get actionButtons() {
    return new ActionButtonsTester(this.context)
  }
}
```

This allows you to write tests like `await app.actionButtons.print()` regardless of which page you're on.

## General notes

- **Only use when necessary:** This structure is most useful when your app starts growing and you need to scale your test suite. For small projects, it might be overkill.

- **Keep page objects stateless:** Page objects should not maintain any state. This allows them to be instantiated on-demand and discarded after each line.

- **Page groups:** If multiple pages are closely related, consider grouping them under a single page object. e.g.

  ```ts
  // Note that `SettingsTester` does not end with `PageTester` to indicate
  // that it's merely grouping multiple page objects together.
  class SettingsTester extends PageObject {
    get account() {
      return new SettingsAccountPageTester(this.context)
    }
    get profile() {
      return new SettingsProfilePageTester(this.context)
    }
    get security() {
      return new SettingsSecurityPageTester(this.context)
    }
  }
  ```

- **Sub-components:** If a page has multiple distinct sections, consider using getters to provide access to these as separate page objects.

  - If these sub-components are used in just one page, they can be put in the same file as the main page object.

  - If some sub-components are used in multiple pages, create separate component testers (like `ActionButtonsTester`) that can be shared across multiple page objects.

- **Working with multiple tabs:** Sometimes some actions open a new tab. This causes a new `Page` object to be created. You can create a `pageObjectContext` object separately so that you can mutate the `page` property during the test.

  ```ts
  const pageObjectContext = { page }
  const app = new AppTester(pageObjectContext)

  // Prepare for a new tab
  const nextPagePromise = this.page.context().waitForEvent('page')

  // Do something here that causes a new tab to open
  // ...

  // Then switch to the new tab
  pageObjectContext.page = await nextPagePromise
  ```

## Other guidelines I follow

- **Semantic locators over CSS selectors:** I prefer `getByRole()` > `getByTestId()` > `getByText()` > `locator()`. CSS selectors like `.button--primary` break when styling changes. Also see [Playwright's best practices docs.](https://playwright.dev/docs/best-practices#use-locators)

- **Built-in testability:** Add `data-testid` attributes and ARIA roles to make components testable from the start. This prevents brittle tests that break on DOM changes. [I expand on this concept in my talk.](BlackBoxTestingStrategies)

- **Mock with DOM events:** For realistic testing, dispatch custom DOM events instead of injecting mocks directly. This keeps tests closer to real user interactions.

- **Component-specific screenshots:** Take screenshots of specific elements (`getByTestId('document')`) rather than full pages for more focused visual regression testing.
