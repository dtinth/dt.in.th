---
public: true
title: Counters in Ruby
facebook: https://www.facebook.com/dtinth/posts/10215988562141070
aliases:
  - 20201222T145634Z3177
---

# Counters in Ruby

I just read [↩ Pontakorn's blog](https://pontakornth.vercel.app/blog/useful-counter/) about the usefulness of Python's [`collections.Counter`](https://docs.python.org/3/library/collections.html#counter-objects) class. I think it is very useful, so I want to find ways to do the same thing in [Ruby](Ruby).

**Ruby does not have a `Counter` class,** but the same functionalities can be accomplished using just Ruby's built-in APIs and data structures.

## Functional counters

### Post-Ruby 2.7

Here, we have collection of data that we want to count. For example, given a string `s = "abcabcabczza"`, we want to count the occurrence of each character:

1. Separate the string into characters^[We can skip creating an intermediate array in this step by using `.each_char` instead of `.chars`]:

   ```ruby
   > s.chars
   #=> ["a", "b", "c", "a", "b", "c", "a", "b", "c", "z", "z", "a"]
   ```

2. Use `Enumerable#tally`:

   ```ruby
   > s.chars.tally
   #=> {"a"=>4, "b"=>3, "c"=>3, "z"=>2}
   ```

### Pre-Ruby 2.7

Here, we have collection of data that we want to count. For example, given a string `s = "abcabcabczza"`, we want to count the occurrence of each character:

1. Separate the string into characters^[We can skip creating an intermediate array in this step by using `.each_char` instead of `.chars`]:

   ```ruby
   > s.chars
   #=> ["a", "b", "c", "a", "b", "c", "a", "b", "c", "z", "z", "a"]
   ```

2. Group by itself:

   ```ruby
   > s.chars.group_by(&:itself)
   #=> {"a"=>["a", "a", "a", "a"],
   #    "b"=>["b", "b", "b"],
   #    "c"=>["c", "c", "c"],
   #    "z"=>["z", "z"]}
   ```

3. Transform the grouping into count:

   ```ruby
   > s.chars.group_by(&:itself).transform_values(&:count)
   #=> {"a"=>4, "b"=>3, "c"=>3, "z"=>2}
   ```

### Hamlet word counting

This is [the example from Python's docs for `Counter`](https://docs.python.org/3/library/collections.html#counter-objects)^[The numbers are different because I used a different `hamlet.txt` than the one used in the example.]:

```python
>>> from collections import Counter
>>> import re
>>> words = re.findall(r'\w+', open('hamlet.txt').read().lower())
>>> Counter(words).most_common(10)
# [('the', 993), ('and', 863), ('to', 685), ('of', 610), ('i', 574),
#  ('you', 527), ('a', 511), ('my', 502), ('it', 419), ('in', 400)]
```

Let's do the same in Ruby.

1. Read the file:

   ```ruby
   > File.read('hamlet.txt')
   #=> "[The Tragedie of Hamlet by William Shakespeare 1599]\n\n\nActus Primus..."
   ```

2. Transform to lowercase^[In `irb` (Interactive Ruby), the `_` variable corresponds to the result of the previous line.]:

   ```ruby
   > _.downcase
   #=> "[the tragedie of hamlet by william shakespeare 1599]\n\n\nactus primus..."
   ```

3. Get all the words:

   ```ruby
   > _.scan(/\w+/)
   #=> ["the", "tragedie", "of", "hamlet", "by", "william", "shakespeare", "1599",
   #    "actus", "primus", "scoena", "prima", "enter", "barnardo", "and", ...]
   ```

4. Group by itself and get the count:

   ```ruby
   > _.group_by(&:itself).transform_values(&:count)
   #=> {"the"=>993, "tragedie"=>4, "of"=>610, "hamlet"=>100, "by"=>107,
   #    "william"=>1, "shakespeare"=>1, "1599"=>1, "actus"=>2, "primus"=>1, ...}
   ```

5. Sort by count^[A hash, when enumerated, each entry is represented as a `[key, value]` pair. So, `item.first` is the key and `item.last` is the value. Consequently, `hash.sort_by(&:first)` means sort by key and `hash.sort_by(&:last)` means sort by value.]:

   ```ruby
   > _.sort_by(&:last)
   #=> [... ["his", 285], ["not", 300], ["is", 328], ["ham", 337], ["that", 377],
   #    ["in", 400], ["it", 419], ["my", 502], ["a", 511], ["you", 527],
   #    ["i", 574], ["of", 610], ["to", 685], ["and", 863], ["the", 993]]
   ```

6. We only need the top ten. So take the last 10 entries and reverse to get the final result:

   ```ruby
   > _.last(10).reverse
   #=> [["the", 993], ["and", 863], ["to", 685], ["of", 610], ["i", 574],
   #    ["you", 527], ["a", 511], ["my", 502], ["it", 419], ["in", 400]]
   ```

Combining the previous steps into a single line program.

```ruby
File.read('hamlet.txt').downcase.scan(/\w+/).group_by(&:itself).transform_values(&:count).sort_by(&:last).last(10).reverse
```

As you see, **in Ruby many problems can be solved by writing code [strictly from left to right](RubyMethodChaining).** Meanwhile in Python, oftentimes you need to mix function calls with methods (e.g. `str.lower()`, `len(str)`) and list comprehensions.

## Imperative counters

When counting **imperatively** we start from zero and tally up the counts.

This is [the example from Python's docs for `Counter`](https://docs.python.org/3/library/collections.html#counter-objects):

```python
>>> # Tally occurrences of words in a list
>>> cnt = Counter()
>>> for word in ['red', 'blue', 'red', 'green', 'blue', 'blue']:
...     cnt[word] += 1
>>> cnt
# Counter({'blue': 3, 'red': 2, 'green': 1})
```

In Ruby, hashes can have a **default value**. We can use a hash with a default value of 0 to simulate a counter, no specialized data structure needed:

```ruby
> cnt = Hash.new(0)
* ['red', 'blue', 'red', 'green', 'blue', 'blue'].each do |word|
*   cnt[word] += 1
> end
> cnt
#=> {"red"=>2, "blue"=>3, "green"=>1}
```
