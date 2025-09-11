---
public: true
title: 'Advent of Code 2021: Day 24'
aliases:
  - 20211224T121217Z7595
---

# Advent of Code 2021: Day 24

For this day’s [Advent of Code](AdventOfCode) puzzle, first, I converted the assembly code into an Excel spreadsheet. This helps me to analyze the code more easily.

```ruby
instructions = $<.readlines.map(&:strip).map(&:split)
row = { 'w' => 2, 'x' => 2, 'y' => 2, 'z' => 2, }
col = { 'w' => 'A', 'x' => 'B', 'y' => 'C', 'z' => 'D', }
cur_row = 3
grid = {}
$num_inp = 0
instructions.each_with_index do |inst, i|
    result_row = grid[cur_row] && grid[cur_row][inst[1]] ? cur_row + 1 : cur_row
    result_col = col[inst[1]]

    grid[result_row] ||= {}
    get = -> var { var =~ /-?\d+/ ? var : "#{col[var]}#{row[var]}" }
    grid[result_row][inst[1]] = begin
        case inst[0]
        when 'inp'
            v = "=#{(65 + 4 + $num_inp).chr}1"
            $num_inp += 1
            v
        when 'add'
            "=#{get[inst[1]]}+#{get[inst[2]]}"
        when 'mul'
            inst[2] == '0' ? '0' : "=#{get[inst[1]]}*#{get[inst[2]]}"
        when 'div'
            "=TRUNC(#{get[inst[1]]}/#{get[inst[2]]})"
        when 'mod'
            "=MOD(#{get[inst[1]]},#{get[inst[2]]})"
        when 'eql'
            "=IF(#{get[inst[1]]}=#{get[inst[2]]},1,0)"
        end
    end
    cur_row = result_row
    row[inst[1]] = cur_row
end
puts ['w', 'x', 'y', 'z', *[9] * 14] * "\t"
puts [0, 0, 0, 0] * "\t"
(3..grid.keys.max).each do |i|
    puts ['w', 'x', 'y', 'z'].map { grid[i][_1] || '' } * "\t"
end
```

The result looks like this:

![Speadsheet](https://static.dt.in.th/uploads/2021/12/24/excl.png)

Also, built an interpreter to verify that the Excel sheet works correctly:

```ruby
$digits = 99999999999999.digits
variables = { 'w' => 0, 'x' => 0, 'y' => 0, 'z' => 0, }
instructions.each_with_index do |inst, i|
    get = -> var { var =~ /-?\d+/ ? var.to_i : variables[var] }
    case inst[0]
    when 'inp'
        variables[inst[1]] = $digits.pop
    when 'add'
        variables[inst[1]] += get[inst[2]]
    when 'mul'
        variables[inst[1]] *= get[inst[2]]
    when 'div'
        variables[inst[1]] /= get[inst[2]]
    when 'mod'
        variables[inst[1]] %= get[inst[2]]
    when 'eql'
        variables[inst[1]] = variables[inst[1]] == get[inst[2]] ? 1 : 0
    end
end
p variables
```

After analyzing the Excel sheet, I recreated the program in higher-level [Ruby](Ruby):

```ruby
add = [13, 15, 15, 11, -16, -11, -6, 11, 10, -10, -8, -11, 12, -15]
add2 = [5, 14, 15, 16,   8,   9,  2, 13, 16,   6,  6,   9, 11,   5]
div =  [1,  1,  1,  1,  26,  26, 26,  1,  1,  26, 26,  26,  1,  26]
inp =  [9,  9,  9,  9,   9,  9,   9,  9,  9,   9,  9,   9,  9,   9]
w = x = y = z = 0
inp.zip(add, add2, div).each do |w, a, a2, d|
    x = (z % 26) + a == w ? 0 : 1
    y = 25 * x + 1
    z = y * (z / d)
    y = (w + a2) * x
    z = z + y
    p [w, x, y, z]
end
```

I noticed that there is a lot of no-op when `x == 0`, so I factored them into 2 cases:

```ruby
inp.zip(add, add2, div).each do |w, a, a2, d|
    if w == (z % 26) + a
        z /= d
    else
        z /= d
        z *= 26
        z += w + a2
    end
    p [w, x, y, z]
end
```

Notice the recurrence of number 26 in the code. Also, the values of `div` and thus the variable `d` only hold number `1` and `26`. This looks like a stack of base-26 digits:

- `z /= 1` &rarr; no-op
- `z /= 26` &rarr; pop
- `z *= 26; z += _` &rarr; push

Rewritten using array-based stack:

```ruby
zz = []
inp.zip(add, add2, div).each do |w, a, a2, d|
    if zz.last == w - a
        zz.pop if d == 26
    else
        zz.pop if d == 26
        zz.push w + a2
    end
    p [w, zz.reduce(0) { _1 * 26 + _2 }, zz]
end
```

Take a look again at the `div` array,

```ruby
div =  [1,  1,  1,  1,  26,  26, 26,  1,  1,  26, 26,  26,  1,  26]
```

There is an equal number of `1` (push) and `26` (pop) in the array. That means if we fail to pop the stack when `d == 26`, in the end, the stack will not be empty (0). In such cases there will be no solution, so we can prune the search space.

With this knowledge, the problem has turned into state-space search. The rest, is just a matter of brute-forcing.

```ruby
find = -> w, i, zz, path {
    if i == 14
        p [zz, path.join[0...14]]
        return
    end
    a = add[i]
    a2 = add2[i]
    d = div[i]
    if d == 26
        return if w - a != zz.last
        next_zz = zz[0...-1]
        9.downto 1 do |next_w|
            find[next_w, i + 1, next_zz, [*path, next_w]]
        end
    else
        next_zz = [*zz, w + a2]
        9.downto 1 do |next_w|
            find[next_w, i + 1, next_zz, [*path, next_w]]
        end
    end
}
9.downto 1 do |w|
    find[w, 0, [], [w]]
end
p :done
```
