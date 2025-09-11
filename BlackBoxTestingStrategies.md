---
public: true
title: Strategies for Black-Box Testability (2024 talk)
created: 2024-12-12
---

# Strategies for Black-Box Testability

::youtube[TsdZ01eTdHE]

Talk given at National Coding Day 2024 for teams building applications and looking for approaches to automated testing or ways for developers and testers to work together more effectively.

## Talk Summary

This session addresses the common challenge of developer/tester silos where different teams work independently without considering each other's needs.

- When developers don't understand testers' perspectives, applications become difficult to test - lacking accessibility features, test IDs, or APIs that facilitate testing.
- When testers can't adopt a developer mindset, test code becomes unmaintainable and fragile.

At Eventpop, we've built a testing culture with over 8,000 automated tests running across 30+ VMs in just 15 minutes, enabling daily deployments without fear, even on Fridays. The talk demonstrates practical techniques used at Eventpop to make end-to-end testing more efficient and reliable:

**Core Philosophy:**

- Black-box testing can be more valuable than unit tests when starting with legacy systems
- Writing automated tests should be easier than manual testing to encourage adoption
- Developers and testers should be able to "wear each other's hats" and empathize with each other's challenges

**Practical Benefits Shown:**

- Reducing bug reproduction from 14 manual steps to 6 lines of test code
- Eliminating fear of refactoring through comprehensive test coverage
- Creating "golden paths" where the easiest approach is also the best approach

## Key Strategies

### 1. Scenario Setup API

API designed specifically for automated testing to simulate various scenarios:

- **One endpoint per scenario**: Each API endpoint represents one complete testing scenario
- **Isolated test data**: Every API call creates fresh, isolated data preventing test interference
- **Parallel execution**: Multiple tests can run simultaneously without conflicts
- **Rich return data**: Returns all necessary information (IDs, credentials, URLs) for test continuation
- **Easy expansion**: Built on a mini-framework with utility functions and base classes, keeping each scenario to just a few lines of code while the heavy lifting is done by shared libraries. Average of 48 lines per scenario across 100+ scenarios demonstrates good software engineering practices applied to testing
- **TypeScript SDK**: [Auto-generated SDK from OpenAPI spec](https://openapi-ts.dev/) provides IDE autocomplete and type safety
- **Command line interface**: Scripts allow developers to quickly create test scenarios during development
- **Swagger documentation**: Full API documentation accessible via Postman or other API tools

**Benefits:**

- Reduces complex bug reproduction from 14 manual steps to simple API calls
- Eliminates fear of clearing databases since scenarios can be recreated instantly
- Enables quick setup of complex testing situations (e.g. orders from 2 days ago)

### 2. Trigger API

API for simulating events that might occur after scenario setup:

- **Event simulation**: Triggers specific events like race conditions or timing-based scenarios
- **Complex interactions**: Handles situations requiring multiple actors (e.g. two users buying the same seat)
- **Deterministic testing**: Makes non-deterministic scenarios reproducible and testable
- **Integration with scenarios**: Works alongside scenario APIs to create complete test workflows

**Example use case:**

- Scenario API creates a seating event with available seats and returns user credentials
- User A selects a seat and prepares to buy
- Trigger API simulates User B purchasing that seat first
- Test verifies proper handling of the race condition

### 3. App Design for Both Testers and Users

Designing application components to serve both end users and testing needs:

- **Hidden functionality for testers**: Select boxes styled as number displays for easy automation
- **Accessibility improvements**: Better selectors and IDs that benefit both automated testing and screen readers
- **Data test IDs**: Strategic placement of `data-testid` attributes where CSS selectors are insufficient
- **Dual-purpose features**: UI elements that improve user experience while enabling easier testing

**Trade-offs considered:**

- Balance between clean code and testing convenience
- Evaluating when test-specific attributes are justified
- Ensuring tester-friendly features also benefit real users when possible

### 4. Test Pages

Dedicated pages for testing specific components in isolation:

- **Component-specific testing**: Pages focused on individual UI components without full application context
- **Multiple state variations**: Ability to test different configurations, edge cases, and error states
- **Reduced setup complexity**: No need to navigate through entire application flows
- **Quick iteration**: Developers can rapidly test UI changes and component behavior

**Examples:**

- Tax receipt form testing page with address auto-extraction features
- Ticket selection page with various pricing scenarios, discounts, and tax configurations
- Payment flow components with different states and error conditions

**Real-world inspiration:**

- [Bluesky deploys test pages to production](https://bsky.app/sys/debug)
- Samsung phones include test menus accessible via special codes

### 5. Testing Tools in App

Building testing utilities directly into the application interface:

- **In-context testing**: Tools embedded within actual application pages
- **Environment-specific**: Only available in development and testing environments
- **Workflow acceleration**: Shortcuts for common testing scenarios without leaving the application
- **Integration with external services**: Direct interfaces to testing APIs from payment providers

**Example implementations:**

- PromptPay payment testing with buttons to [simulate successful/failed payments](https://docs.omise.co/charges-api#mark_as_paid)
- Integration with payment gateway sandbox APIs for various transaction outcomes
- Quick scenario generation buttons embedded in relevant application pages

### 6. Test Doubles

Using mock services and emulators to replace external services during testing:

- **Email testing**: [MailDev](https://github.com/maildev/maildev) SMTP server captures emails locally with web interface and API access
- **Payment simulation**: [Sandbox environments](https://docs.omise.co/api-testing) with [specific card numbers](https://docs.omise.co/api-testing#test-card-numbers) for [different error scenarios](https://docs.omise.co/api-testing#creating-failed-charges)
- **Official emulators**: [Firebase emulator suite](Firebase), [AWS LocalStack](https://github.com/localstack/localstack) for cloud service simulation
- **Custom test doubles**: Purpose-built mock services for internal APIs and external integrations

**Available options:**

- **Sandbox environments**: Many services provide testing environments with special behaviors
- **Official emulators**: Cloud providers offer local development/testing tools
- **Third-party tools**: Community-built solutions for common services (I build [dtinth/mockapis](https://github.com/dtinth/mockapis))
- **Custom implementations**: Build your own when existing solutions don't meet needs

**Benefits:**

- Faster test execution without network dependencies
- Reliable test results independent of external service availability
- Ability to test error conditions and edge cases on demand
- Cost reduction by avoiding charges for test API calls

## Context

This talk builds on my 2022 presentation [Move fast while maintaining quality with black box testing](BlackBoxTestingTalk) and focuses on practical strategies learned at Eventpop, where we maintain over 8,000 automated tests that run in 15 minutes across 30+ VMs.

The main insight: developers should view testers as users of the application, designing systems that make testing easier rather than treating it as an afterthought.
