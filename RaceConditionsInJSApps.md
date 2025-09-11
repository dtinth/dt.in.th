---
title: Race Conditions in JS Apps
public: true
created: 2019-06-16
description: >-
  A talk about race conditions in JavaScript, showing how easy it is to create
  one, and how to deal with them. Based on experience building a real-time
  collaborative app. Presented at JSConf.Asia 2019.
aliases:
  - race-conditions-in-js-apps
---

# Race Conditions in JS Apps

:::lead
It’s easy to create race conditions in JavaScript if you’re not careful.
:::

::youtube[DWZj56qUNfs]

This talk is about dealing with common kinds of race conditions based on my experience working on a real-time collaborative app.

Presented at [JSConf.Asia 2019](https://2019.jsconf.asia/).

## Talk proposals

This is the CFP submission.

> **Topic:** Race conditions in JavaScript apps
>
> JavaScript apps have to deal with a lot of asynchronous operations, especially real-time collaborative apps. I work at Taskworld, and we build a real-time collaborative app.
>
> The race conditions are often overlooked, leading to data inconsistency problems. The goal of this talk is to help developers to not forget to handle race conditions. It does this by: (1) showing examples of simple race condition problems along with simple solutions to these problems; and (2) showing a series of complex scenarios that our app has to deal with.
>
> To my knowledge these complexities are never mentioned any tutorial, and these complications only appear when we scale our product to more customers.
>
> I talked with 3 groups of people about this story. They all found the examples to be intriguing and said that they’ve “never thought a CRUD app has to be this complex.”
>
> As a result, I hope the audience will gain an appreciation of race conditions in real-world apps. I hope this talk will remind them to always handle race condition whenever they write an async function. I hope this talk can serve as a reference to future developers.
>
> This talk is not specific to any framework, library, or language. I believe it can benefit the whole developer community, not just JS.

## Original talk sketch

I wrote the following talk sketch before crafting the CFP above. I did not sent this in the CFP submission.

<blockquote>

**Intro**

- Some time ago, a friend asked me: “Is it hard to handle race conditions in JavaScript?”

  - I answered “No. It’s easy. You just don’t forget to deal with them. Then it’s easy.”

**Example 1**

- Let’s look at example.
- Example: Latest result overwritten by earlier requests that responds slowly.
  - Scenario: Tab bar that loads content via Ajax.
  - Solution A:
    - Cancel previous request. e.g. `cancelPreviousRequest()` mutable function.

**Example 2**

- Example: An autocompletion bar
  - Solution A:
    - Same as previous
  - Solution B (monotonically increasing display):
    - Assign an increasing request ID to each request. Display the result if its request ID is higher than the one currently displayed.

**As you can see**

- Whenever you make an asynchronous call, there is a potential for race condition.
- They can be solved using a simple technique.
- That’s why I said “You just don’t forget to deal with them. Then it’s easy.”
- The next time you see an asynchronous call, I want you to remember this talk.
- 💡 Talk about Rx

**Example 3**

- Example: Taskworld CRUD operations
  - 💡 As we grow, serving many customers, we start getting reports about “inconsistent data”
  - Optimistic updates: What to do when API call is rejected?
  - Storing previous results in order to revert
    - What if there are concurrent changes?
    - What if before the rejection, someone else change the data?
  - Operation queue
    - Keep a queue of pending operations
    - If connection is down, queue is paused.
  - Let’s say, if the connection is down, but the user makes a change, and then closes their browser before the connection restored?
    - Persist the queue contents
  - A user can open multiple tabs which shares the same queue storage.
    - Must make sure that queue contents are stay in sync.
    - But which tab will process the queue?
      - Must designate a tab.
        - Each tab: If no one is going to work on it, I will volunteer.
          - Race condition concerning the shared storage.
          - Job ownership confirmation.
    - What if the tab is closed while processing the queue?
      - Other tabs must pick up the unfinished job and resume the queue.
        - Must keep the timestamp.

</blockquote>
