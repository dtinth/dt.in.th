---
title: GitHub-flavored Markdown alerts/admonitions/callouts
public: true
giscus: true
created: 2025-12-09
---

[GitHub](GitHub) supports [these syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts) for alerts/admonitions/callouts in [Markdown](Markdown) files:

::::::::split

```md
> [!NOTE]
> Text
```

:::::::aside

:::note[<iconify-icon icon="octicon:info-16" inline></iconify-icon> Note]
Text
:::

:::::::

::::::::

::::::::split

```md
> [!TIP]
> Text
```

:::::::aside

:::success[<iconify-icon icon="octicon:light-bulb-16" inline></iconify-icon> Tip]
Text
:::

:::::::

::::::::

::::::::split

```md
> [!IMPORTANT]
> Text
```

:::::::aside

:::important[<iconify-icon icon="octicon:comment-16" inline></iconify-icon> Important]
Text
:::

:::::::

::::::::

::::::::split

```md
> [!WARNING]
> Text
```

:::::::aside

:::warning[<iconify-icon icon="octicon:alert-16" inline></iconify-icon> Warning]
Text
:::

:::::::

::::::::

::::::::split

```md
> [!CAUTION]
> Text
```

:::::::aside

:::caution[<iconify-icon icon="octicon:stop-16" inline></iconify-icon> Caution]
Text
:::

:::::::

::::::::
