---
public: true
title: Solving problems by adding code from left to right in Ruby
aliases:
  - 20201222T155532Z7236
---

**In [Ruby](Ruby), everything is an object. A lot of problems can be solved by writing code strictly from left to right, by chaining method calls.**

## More ways can mean more consistency.

Even though the Zen of Python states that _"There should be one&mdash; and preferably only one &mdash;obvious way to do it."_, but in Python, to derive a new value from an existing one, oftentimes you have to mix and match multiple syntaxes (such as method calls, functions, and list comprehensions). So, when you look at a single problem in isolation, there is often one obvious way to solve that people consistently use. But when you combine smaller solutions to form a big solution, the syntax inconsistencies become apparent.

In Ruby, there are many possible ways to accomplish the same objective. There are many **synonyms** and **aliases** in the language.

- To convert something to an array, you can do either of these:
  - `[*thing]`
  - `thing.to_a`
- To create an array with 5 elements filled with `'hello'`, you can do any of these:
  - `Array.new(5) { 'hello' }`
  - `5.times.map { 'hello' }`
  - `Array.new(5, 'hello')`
  - `['hello'] * 5`
- To convert an array to hash, you can do either of these:
  - `Hash[my_array]`
  - `my_array.to_h`
- To call a Ruby proc:
  - `my_proc[arg1, arg2]`
  - `my_proc.(arg1, arg2)`
  - `my_proc.call(arg1, arg2)`
- To add things to an Array:
  - `my_array << thing1 << thing2`
  - `my_array.push(thing1, thing2)`
  - `my_array.append(thing1, thing2)`

While this can lead to the same problem being solved differently by different people, it also allows composing solutions using the same syntax (in this example: method calls).

<!-- prettier-ignore-start -->

| Python example                      | Ruby                                               |
| ----------------------------------- | -------------------------------------------------- |
| `fruits.index('cherry')`            | `fruits.index('cherry')`                           |
| `len(fruits)`                       | `fruits.count`<br>`fruits.length`<br>`fruits.size` |
| `[f for f in fruits if len(f) > 5]` | `fruits.select { |f| f.length > 5 }`               |

<!-- prettier-ignore-end -->

From the above table, you see 3 different syntaxes in Python for 3 solutions, whereas in Ruby all solutions are possible via method calls.

## Value pipeline

When an object doesn't have a method you want (for example, Ruby numbers doesn't have the `sqrt` method), Ruby provides the `then` method that lets you derive a new value using an arbitrary block.

<!-- prettier-ignore-start -->

| Ruby                     | Also Ruby               |
| ------------------------ | ----------------------- |
| `Math.sqrt(16)` | `16.then(&Math.method(:sqrt))`<br>`16.then { |v| Math.sqrt v }` |
| `f(123)`        | `123.then(&method(:f))`<br>`123.then { |v| f v }`               |

<!-- prettier-ignore-end -->

The code on the right isn't necessarily cleaner, but when you are focused on short-term development speed (such as when you are rapid-prototyping or doing some competitive programming), you may find the `.then` trick useful.

## Operators are methods too

| Ruby                   | Also Ruby                                            |
| ---------------------- | ---------------------------------------------------- |
| `1 + 1`                | `1.+(1)` ^[The method name is `+`]                   |
| `fruits[0]`            | `fruits.[](0)` ^[The method name is `[]`]            |
| `fruits[1] = 'banana'` | `fruits.[](1, 'banana')` ^[The method name is `[]=`] |
