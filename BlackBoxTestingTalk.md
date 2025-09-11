---
public: true
title: Move fast while maintaining quality with black box testing (talk)
created: 2022-09-29
---

# Move fast while maintaining quality with black box testing (talk)

:::lead
Some systems are hastily built → No automated tests → Code became tightly coupled → Code became difficult to test → Want to improve the code but afraid of improving due to fear that it might break because there are no automated tests. In this talk, I share some ideas on how I try to get out of this loop.
:::

::youtube[vbIWSwz8NxQ]

::cta[Transcript]{href="https://creatorsgarten.org/videos/bkkjs17/blackbox"}

## References

### Introductions

- Somkiat Puisungnoen (2015), ["ขอโทษนะ !! ยังจะทดสอบแบบ Manual เป็นหลักกันอยู่อีกหรือ ?"](https://www.somkiat.cc/eventually-fail-with-manual-testing/)
- Charity Majors (2021), ["It is time to fulfill the promise of Continuous Delivery."](https://speakerdeck.com/charity/cd?slide=25)
- David Heinemeier Hansson (2014), ["Test-induced design damage."](https://dhh.dk/2014/test-induced-design-damage.html)

### Testing Pyramid vs Testing Trophy

- Mike Wacker (2015), ["Just Say No to More End-to-End Tests,"](https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html) Google Testing Blog.
- Kent C. Dodds (2018), ["The Testing Trophy"](https://twitter.com/kentcdodds/status/960723172591992832)

### More opinion on testing approaches

- Dave Farley (2022), ["Don't Do E2E Testing!"](https://www.youtube.com/watch?v=QFCHSEHgqFE) Continuous Delivery.
- Theo Browne (2022), ["Why I Don't Unit Test."](https://www.youtube.com/watch?v=ZGKGb109-I4)

### More testing pyramids

- Seb Rose (2020), ["Eviscerating the Test Automation Pyramid,"](https://cucumber.io/blog/bdd/eviscerating-the-test-automation-pyramid/) Cucumber Blog.
- Andrew Knight (2018), ["The Testing Pyramid,"](https://automationpanda.com/2018/08/01/the-testing-pyramid/) Automation Panda.
- Devesh Bajpai (2018), ["Agile Testing: Test Pyramid and BDD."](https://medium.com/@deveshbajpai_3123/agile-testing-test-pyramid-and-bdd-842a155d0337)

### Making things easy to test

- Example of service menu in arcade games: [[1]](https://cdn.betson.com/wp-content/uploads/wpallimport/files/redemption-service-manuals/pump-it-up-game-service-manual-andamiro-games.pdf), [[2]](https://piudev.info/manuals/InfinitySoftwareServiceManualFullr2.pdf)
- [Samsung's diagnostic menu](https://www.makeuseof.com/access-secret-diagnostic-menu-samsung-phone/)
- Kent C. Dodds (2020), ["Make your own DevTools."](https://kentcdodds.com/blog/make-your-own-dev-tools)
- [Bemuse's playground page](https://bemuse.ninja/?mode=playground) and [Bemuse Song Workshop's unit tests page.](https://song-workshop.bemuse.ninja/?test)

### Playwright

- [Playwright](https://playwright.dev/)
- [Playwright VS Code extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)

### Testing in production

- Michael Bryzek (2017), ["Testing in Production - Quality Software Faster,"](https://www.youtube.com/watch?v=9C0efJkT0Hg) QCon San Francisco 2017.

## More resources

- [Dan Abramov's tweet on testing](https://twitter.com/dan_abramov/status/1470613745315594247?ref_src=twsrc%5Etfw)

## Related notes

- [Testing in production](TestingInProduction)
