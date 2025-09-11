---
public: true
title: Ruby code-golfing tricks
aliases:
  - 20201226T210707Z4948
---

**These are some [Ruby](Ruby) code-golfing tricks I learned** from playing [Clash of Code](https://www.codingame.com/multiplayer/clashofcode). These tricks can help when playing the "shortest" mode but excessively using these tricks can lead to less readable code.

`#sum` accepts a block:

```ruby
"1 2 3".split.map(&:to_i).sum
"1 2 3".split.sum(&:to_i)
```

`$>` is STDOUT:

```ruby
print 1
$><<1
```

`$<` is STDIN:

```ruby
STDIN.to_a
$<.to_a
```

`[*x]` is `x.to_a`:

```ruby
$<.to_a
[*$<]
```

`Range` does not need an ending:

```ruby
"hello"[3..-1]
"hello"[3..]
```

`Range` has `#%` to iterate with desired step:

```ruby
[*(1..10).step(3)]
[*(1..10) % 3]

[*(10..1).step(-1)]
[*(10..1) % -1]
```

`Integer` has `#digits`:

```ruby
1234.to_s.chars.map(&:to_i)
1234.digits.reverse
```

One-character can be presented using ?:

```ruby
"a"
?a

'"'
?"
```

Generate a fixed-size array using a block with `n.times.map`:

```ruby
Array.new(10){|x|x*x}
10.times.map{|x|x*x}
```

To check if any of the numbers are 0, multiply them together and check once:

```ruby
a==0||b==0
a*b==0
```

You can assign things to variable without a parens if it’s the rightmost term:

```ruby
a=2;b=3*a
b=3*a=2    # equivalent to b=3*(a=2)
```

Ruby doesn’t usually coerce strings to numbers (and this can be annoying when codegolfing) but it does coerce string to number when formatting:

```ruby
"1234".to_i.to_s(2)
"%b" % "1234"
```

Hashes have `to_proc`:

```ruby
names.map { |name| things[name] }
names.map(&things)
```

Hashes have `transform_values`:

```ruby
hash.map { |k, v| [k, f(v)] }.to_h
hash.transform_values { |v| f v }
```

Enumerables have `grep` and `grep_v` (for inverse):

```ruby
(1..100).select { |x| (38..44).include? x }
(1..100).select { |x| (38..44) === x }
(1..100).grep 38..44
```

Numbers (actually, any Comparable) can be clamped:

```ruby
[[progress, 0].max, 100].min
progress.clamp(0, 100)
```

`Integer#pow` can take a modulus:

```ruby
2.pow(12345678) % 10000   # works, but slow
2.pow(12345678, 10000)    # very fast

2.pow(123456789) % 10000  # => NaN + warning: in a**b, b may be too big
2.pow(123456789, 10000)   # => 6112
```
