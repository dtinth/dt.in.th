---
public: true
title: Quickly publish a Markdown page without build tool
aliases:
  - 20220617T052637Z0285
---

Sometimes, I wanted to create an [HTML](HTML) file with some contents. I do not intend to upload it anywhere, just display it locally. I want to use [Markdown](Markdown) for some of the contents, but I don’t want to use any build tool. I just want an edit-save-reload workflow.

Here’s a boilerplate for that:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta charset="UTF-8" />
  </head>
  <body>
    <div id="app"></div>
    <script
      src="https://cdn.jsdelivr.net/npm/markdown-it@13.0.1/dist/markdown-it.min.js"
      crossorigin="anonymous"
    ></script>
    <script>
      app.innerHTML = markdownit().render(`

# Hello!

Put your Markdown content here.

`)
    </script>
  </body>
</html>
```
