---
public: true
title: Testing in production
topic: true
---

**Testing in production** usually gets a bad rap, but when done well, can become a great tool for writing quality [software](SoftwareEngineering). This entails writing software that is **testable in production.**

## Learning notes

- [Michael Bryzek (2017). “Testing in Production - Quality Software Faster.” _QCon 2017_](https://www.youtube.com/watch?v=9C0efJkT0Hg)

  - If you don’t test in production, how do you know that your software works in production?
  - By adopting a testing in production mindset, “we could prove to ourselves that our software works, and interestingly, it helps us test software in a number of different ways that previously was difficult.”
  - At Flow:
    - True [continuous delivery](ContinuousDelivery) (merge = deploy to prod immediately).
    - Continuous integration happens **before** merging.
    - No staging environment, no dev environment, no QA environment. “We don’t have any pre-production environments or any environments like that by any other name.”
  - Examples for testing in production and techniques used.
    - How they verify that the checkout flow works: They have a bot that places a real order (on real stores) against production (through an iPhone app!) every few minutes. In the order processing code, 3 lines of code is added to check if the email address is a test email address. If it is, the order is immediately cancelled. To avoid affecting customers, an API is exposed to return items with lots of stocking in the inventory. They then set up an alert to verify when there’s no order for more than 3 minutes (or the test user encountered an error).
    - Load testing in production — At Gilt products went on sale at noon. So between 11:59 and 12:00 traffic increases 50x, and traffic between 12:00 to 13:00 drives 80% of the revenue. So they run load tests on other times where there is very low impact on the revenue. “Every single day, the load test runs, and on the day it breaks, we find out 12 hours before it matters, and we have a chance at protecting the revenue for the business.”
    - Integration tests in production — Accounts/organizations can be marked as “sandbox”. Integration tests create sandbox organizations at start, and delete them at the end. There are only a few differences between the sandbox and production organizations, e.g. charges are no-op in the sandbox, and other things are the same between sandbox and production.
  - **Treat every service as a third party**

- [Charity Majors (2018). “Observability-Driven Development.” _GopherCon EU 2018_](https://www.youtube.com/watch?v=qE1OoRebOIE)

  - “The more that we try to resist it, the more we take our precious scarce engineering cycles, and instead of investing them into making our testing in production resilient and robust and not scary, we tend to pour it all into this very fragile idea that we can stave off all problems by running everything on staging first.”
  - “Why do people sink so much time into staging, when they can't even tell if their own production environment is healthy or not? Because their [o11y](Observability) is so shitty they literally have no idea what's going on in production, usually.”

- [Szczepan Faber (2018). “Testing in production at LinkedIn.” _Devoxx Poland 2018_](https://www.youtube.com/watch?v=lbO6INBICpQ)

  - LinkedIn deploys 1,000 changes per week by 300 unique contributors.
  - “One of the great decisions that we made: to push hard for [continuous delivery](ContinuousDelivery).”
  - Key mitigation strategy: Separate code rollout from feature rollout.
  - Their A/B testing tooling can automatically detect stale code paths, and open a ticket to remove them. Some engineers are responsible for removing stale code paths.

- Making systems multi-tenant allows easier E2E testing in production. Case studies from [Uber](https://www.uber.com/en-TH/blog/multitenancy-microservice-architecture/) and [DoorDash](https://doordash.engineering/2022/03/03/moving-e2e-testing-into-production-with-multi-tenancy-for-increased-speed-and-reliability/).

- Lessons from Squeaky: [“How Removing Staging Environments Can Improve Your Deployments”](https://www.infoq.com/news/2022/05/removing-staging-environments/)

  - Problems with staging environments:

    - Pre-live environments are never at parity with production
    - There’s always a queue, which makes releases larger and reduces ownership
    - Process replaces accountability

  - Four key tenets of Squeaky’s approach:

    - Only merge code that is ready to go live
    - A flat branching strategy
    - Feature flagging for high-risk changes
    - Hands-on deployments (monitoring, logging, alarms, blue/green deployments)

- [“if you can't deploy straight to prod, just write better code” —@jim_bisenius](https://twitter.com/jim_bisenius/status/1612243624439472129)
