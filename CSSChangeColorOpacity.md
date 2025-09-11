---
public: true
title: Modifying the alpha channel of a color using CSS
---

# Modifying the alpha channel of a color using CSS

:::lead
Suppose you have a [color](Colors) defined in a [CSS](CSS) variable (e.g., `var(--brand)`), and you want a more transparent version of it (for example, 75% opacity). You can achieve this using the `color-mix()` function in CSS:
:::

```css
background: color-mix(in srgb, var(--brand) 75%, transparent);
```

## Equivalent in SCSS, Less, and Stylus

- **SCSS**:

  ```scss
  color: rgba($brand, 75%);
  ```

- **Less**:

  ```less
  color: rgba(@brand, 75%);
  ```

- **Stylus**:

  ```stylus
  color rgba(brand, 75%)
  ```

## Reference

- [StackOverflow Question: How do I apply opacity to a CSS color variable?](https://stackoverflow.com/a/71098929)
