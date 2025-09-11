---
public: true
aliases:
  - 20220401T135725Z7492
---

# Setting up Jest in ESM projects

This is applicable for Jest 28+. As of writing, it is unreleased.

```
yarn add --dev jest@next
```

`package.json`:

```json
{
  "scripts": {
    "jest": "^28.0.0-alpha.7"
  }
}
```

`jest.config.js`:

```js
module.exports = {
  transform: {},
  testMatch: ['**/*.test.mjs'],
  moduleFileExtensions: ['js', 'mjs'],
}
```
