---
title: JavaScript - Check a string's length in bytes
public: true
created: 2008-09-16
aliases:
  - 2008-09-16.string-length-in-bytes
---

:::tip[From the old blog archive]
This article is archived from my old blog. The original post date is September 16, 2008.
:::

:::warning[Outdated]
This article is now way outdated since its original publication in 2008. Most websites now handles UTF-8 inputs properly, and since 2014, we now have `TextEncoder` which provides a more direct way to measure a string’s byte length. The same code could be written: `const byteLengthOfString = (s) => new TextEncoder().encode(s).length`. Also, adding to a global prototype is now considered as an anti-pattern by most people.
:::

# Checking a string's byte length in JavaScript

We can tell the length of a string by `('something').length`. That is the number of characters, not bytes.

Some sites may limit a fixed numbers of characters accepted into an input box. At most times they limit it by number of bytes. In [JavaScript](JavaScript), each character adds the length property by one.

But for unicode characters, say, UTF-8, each Thai letter takes 3 bytes. When its length is checked by a server-side script it may return an error.

To find a length of a string object in bytes, I made this function:

```js
String.prototype.getBytes = function () {
  return encodeURIComponent(this).replace(/%../g, 'x').length
}
```

This returns the bytes taken if the string is encoded in UTF-8. For example, an English character takes 1 byte while Thai characters take 3 bytes. This function should accurately return the number of bytes.
