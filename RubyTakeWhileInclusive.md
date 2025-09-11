---
public: true
title: 'Enumerable#take_while but inclusive'
---

<div class="lead">

In [Ruby](Ruby), [`Enumerable#take_while`](https://ruby-doc.org/core-3.1.2/Enumerable.html#method-i-take_while) does not include the element that ended the iteration. But sometimes, you may be interested in that element as well.

</div>

The trick is to use [`Enumerable#slice_after`](https://ruby-doc.org/core-3.1.2/Enumerable.html#method-i-slice_after) in combination with [`Enumerable#first`](https://ruby-doc.org/core-3.1.2/Enumerable.html#method-i-first) instead:

```ruby
p (1..10).slice_after { |i| i == 5 }.first || []
# => [1, 2, 3, 4, 5]
```

A few things to note:

- The condition must be negated; that is, the predicate in `slice_after` is the opposite of the condition in `take_while`.
- The `|| []` is necessary because `slice_after` returns an empty enumerator if the condition is never met.
