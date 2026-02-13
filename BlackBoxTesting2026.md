---
title: 'Move Fast While Maintaining Quality with Black-Box Testing (2026)'
public: true
created: 2026-02-06
---

# Move Fast While Maintaining Quality with Black-Box Testing (2026)

This is a page for my talk at [CityJS Singapore 2026](https://singapore.cityjsconf.org/). More details will be added to this page later, please stay tuned. For now, you can check out [CityJS Singapore livestream](https://www.youtube.com/watch?v=Vto1TRm3Fcc).

## References

### On manual testing

- [James Grenning (2012). “Manual Test is Unsustainable”](https://blog.wingman-sw.com/manual-test-is-unsustainable)

### On testing pyramid and testing trophy

- [Mike Wacker (2015). “Just Say No to More End-to-End Tests”](https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html)
- [Kent C. Dodds (2018). “The Testing Trophy”](https://twitter.com/kentcdodds/status/960723172591992832)
- [Devesh Bajpai (2018). “Agile Testing: Test Pyramid and BDD”](https://medium.com/@deveshbajpai_3123/agile-testing-test-pyramid-and-bdd-842a155d0337)

## The Two Principles

1. **Make software easy to test.**

   If we can get our app to a point where it's easier to write a new automated test than testing manually, then the test suite will grow naturally.

2. **Cover bugs with tests before fixing them.**

   Ensures fixed bugs stays fixed and acts as a trigger for improving testability. Before fixing a bug, I have to ask myself

   - “How to cover this with a test?”
   - “What needs to be improved so testing is easy?”

## Improving testability

- Provide alternative pathway for testing
- Make it possible for multiple testers to test the app concurrently without interference
- Provide easy way to set up scenario
- Make it easy to target UI elements

## Dealing with external services

- Use their sandbox environment
- Use their emulator
- Use a 3rd party simulator
- Create your own simulator
- Make the connection optional

## Test doubles

- [mockapis](https://github.com/dtinth/mockapis)

## Past talks

- [2022: Move fast while maintaining quality with black-box testing](BlackBoxTestingTalk)
- [2024: Strategies for Black-Box Testability](BlackBoxTestingStrategies)

## Post-talk Q&A

Here are some questions I received after the talk:

### Which tools are used for the test suite in the demo?

- They are all Playwright tests.

- I have written a note on [how I structure my Playwright page objects](PlaywrightPageObject) which explains the pattern I used in the demo.

- You can also check out the [test code](https://gist.github.com/dtinth/835d611ee3fc132d2f22decfa067bb69) for the learning platform.

  ::youtube[qKLYBzCIaVs]

### What do you think about using AI for black-box testing?

- AI is capable of generating tests, and if placed in a closed loop where it can run tests and see results, it can even fix them on its own.

- However, I’ve found a few issues when using AI to write tests:

  1.  **Old patterns:** AI models often generate code using older syntax (e.g., `page.click('<css selector>')` instead of `page.getByRole('button', { name: '<accessible name>' }).click()`).
  2.  **Raw locators:** There is a bias towards raw CSS selectors rather than semantic ones like `getByRole`.
  3.  **Workarounds:** When creating tests for hard-to-test UI, AI tends to find convoluted workarounds with complex selectors rather than suggesting improvements to the application code.

- The goal of this talk is to make developers aware of black-box testing strategies so they can effectively steer AI agents.

- My view is that we should improve the application code to make it easier to test (e.g., ensuring elements are easily targeted). This results in cleaner tests, whereas AI left unchecked might produce unreadable tests to "make it work" without touching the app code.

### What is your workflow for using AI agents to write tests?

- A common pitfall is asking an AI to “write tests for this feature” and getting 400 lines of unnecessary code. My approach is iterative:

  1.  **Start small:** Ask for just _one_ test case and get it to pass.
  2.  **Review and steer:** Give feedback to correct its approach.
  3.  **Iterate:** Ask for the second test. With the first test and feedback in context, the result is usually much better.
  4.  **Scale:** Once confident, ask for more tests.
  5.  **Consolidate:** After the session, ask the AI to summarize its learnings into a “rules” or “memory” file. This allows future sessions to require less steering.

- I also note in my instructions that the agent should **study the current test infrastructure** before writing new tests.

- With the release of the [**Playwright CLI**](https://github.com/microsoft/playwright-cli) (not to be confused with the [Playwright Test CLI](https://playwright.dev/docs/test-cli)), this process is even easier. This tool is designed to be used by AI agents to interactively drive the browser. You can [equip the agent with the skill](https://github.com/microsoft/playwright-cli/blob/main/skills/playwright-cli/SKILL.md) and ask it to complete a user flow. As it goes through the UI, the CLI will generate the equivalent Playwright code. This gives the agent perfect context on which elements exist and how to target them, allowing it to generate test cases with much better precision.

### How do you handle UI changes?

- I think of tests as a **safety strap**. If too loose, it misses bugs. If too tight, it locks you in, forcing test updates for every minor UI change. There is definitely a maintenance cost to this.

- I manage this using the [Page Object Pattern](PlaywrightPageObject). In the [demo](#which-tools-are-used-for-the-test-suite-in-the-demo), using page objects reduced the code volume significantly by removing repetition.

- When using AI:

  1.  **Use existing objects:** I instruct the AI to use existing page objects where possible.
  2.  **Hardcode first:** If a new method is needed, I ask the AI to hardcode the interaction in the test first, avoiding premature updates to page objects.
  3.  **Refactor later:** Once the test works, we can look for patterns to extract into page objects.

- Even if AI can automatically update tests when the UI changes, I still find value in Page Objects for human readability and reviewability.

### Is it hard to add black-box tests to an existing legacy application?

- In my experience across three different companies, I was the person who introduced black-box tests to projects that didn't have them. I found that **getting the whole application under test is often easier than testing all the individual units.** Individual units often have complex internal dependencies that are tightly coupled to implementation details. In contrast, the application as a whole usually has only a few dozen connection points to external services, which can be stubbed out with test doubles.

- For more on this, I recommend the [**Test Doubles** chapter in the book _Software Engineering at Google_](https://abseil.io/resources/swe-book/html/ch13.html).

### How did you implement the scenario system at Event Pop?

- I covered the implementation details extensively in my 2024 talk, **[Strategies for Black-Box Testability](BlackBoxTestingStrategies)**. While this talk condenses the concepts into 15 minutes, the previous talk explores the technical implementation in depth (approx. 45 minutes).

- Since our tests are strictly black-box, we cannot direct-connect to the database to insert data. Everything must go through a proper interface. We solved this by treating the test suite as a client that has its own set of APIs.

  1. **Dedicate API Endpoints:** We implemented every test scenario as a separate API endpoint (e.g., `/api/scenarios/SeatingScenario`). We have over 100 such endpoints.
  2. **Type-Safe Client Generation:** Our backend framework generates an OpenAPI specification from the code. We filter this spec for scenario-related endpoints and use [OpenAPI TypeScript](https://openapi-ts.dev/) to generate the type definitions. We import these definitions to create a type-safe client. This allows our test code to interface with the scenario setup system with full autocomplete and type safety.
  3. **Backend Abstractions:** To keep these 100+ endpoints maintainable, we have a shared “scenario utilities” module. This module handles common entity creation logic, allowing each specific scenario endpoint to be very small—often just 10 lines of code composing these helper functions.
  4. **Triggering Complex Events:** For scenarios requiring orchestration (like race conditions), our setup API returns "triggers" in addition to the created data.

For example, to test a **seat selection conflict**:

1.  The setup API creates the event and user, and returns a **trigger ID** for "another user takes this seat."
2.  The Playwright test navigates to the page and selects the seat.
3.  Just before clicking "Confirm", the test invokes the **trigger** API.
4.  The backend simulates another user snatching the seat.
5.  The test clicks "Confirm" and verifies that the UI handles the error correctly.

This allows us to deterministically simulate and test high-concurrency race conditions.
