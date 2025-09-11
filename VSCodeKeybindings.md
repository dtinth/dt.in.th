---
public: true
title: My VS Code snippets keyboard shortcuts (keybindings)
---

When working JavaScript/TypeScript projects, I set up these [VS Code](VSCode) keybindings so I can type common words/idioms quickly. For example, pressing Control+R Control+T types out `return true`. For extra comfort, I remap my Caps Lock key to Control.

```json
  {
    "key": "ctrl+f",
    "command": "editor.action.insertSnippet",
    "when": "editorTextFocus",
    "args": {
      "snippet": "false"
    }
  },
  {
    "key": "ctrl+a",
    "command": "editor.action.insertSnippet",
    "when": "editorTextFocus",
    "args": {
      "snippet": "async "
    }
  },
  {
    "key": "ctrl+c",
    "command": "editor.action.insertSnippet",
    "when": "editorTextFocus",
    "args": {
      "snippet": "const "
    }
  },
  {
    "key": "ctrl+r",
    "command": "editor.action.insertSnippet",
    "when": "editorTextFocus",
    "args": {
      "snippet": "return "
    }
  },
  {
    "key": "ctrl+t",
    "command": "editor.action.insertSnippet",
    "when": "editorTextFocus",
    "args": {
      "snippet": "true"
    }
  },
  {
    "key": "ctrl+x",
    "command": "editor.action.insertSnippet",
    "when": "editorTextFocus",
    "args": {
      "snippet": "export "
    }
  },
  {
    "key": "ctrl+l",
    "command": "editor.action.insertSnippet",
    "when": "editorTextFocus",
    "args": {
      "snippet": "console.log($1)"
    }
  },
  {
    "key": "ctrl+n",
    "command": "editor.action.insertSnippet",
    "when": "editorTextFocus",
    "args": {
      "snippet": "function$1 ($2) {\n}"
    }
  },
  {
    "key": "ctrl+=",
    "command": "editor.action.insertSnippet",
    "when": "editorTextFocus",
    "args": {
      "snippet": "($2) => {$1}"
    }
  },
  {
    "key": "ctrl+w",
    "command": "editor.action.insertSnippet",
    "when": "editorTextFocus",
    "args": {
      "snippet": "await "
    }
  },
  {
    "key": "ctrl+h",
    "command": "editor.action.insertSnippet",
    "when": "editorTextFocus",
    "args": {
      "snippet": "throw ${1:new ${2:Error('$3')}}"
    }
  },
  {
    "key": "ctrl+i",
    "command": "editor.action.insertSnippet",
    "when": "editorTextFocus",
    "args": {
      "snippet": "this"
    }
  },
  {
    "key": "ctrl+m",
    "command": "editor.action.insertSnippet",
    "when": "editorTextFocus",
    "args": {
      "snippet": "import ${2:{$3\\}} from '$1'"
    }
  },
  {
    "key": "ctrl+\\",
    "command": "editor.action.insertSnippet",
    "when": "editorTextFocus",
    "args": {
      "snippet": "// 🚨🚨🚨 TODO: $1 🚨🚨🚨"
    }
  },
  {
    "key": "ctrl+p",
    "command": "editor.action.insertSnippet",
    "when": "editorTextFocus",
    "args": {
      "snippet": "export interface $1 {$2}\n\nexport const $1: FC<$1> = (props) => {$3}"
    }
  },
```
