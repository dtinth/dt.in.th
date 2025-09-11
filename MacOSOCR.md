---
public: true
title: Extracting text from image in macOS from the CLI
---

# Extracting text from image in macOS from the CLI

Newer versions of [macOS](MacOS) has the [VNRecognizeTextRequest](https://developer.apple.com/documentation/vision/vnrecognizetextrequest) API. However, I can't find an easy-to-install tool that lets me use this API in a command line. However, this can be worked around thanks to the fact that:

- The [Shortcuts app](https://support.apple.com/guide/shortcuts-mac/intro-to-shortcuts-apdf22b0444c/mac) offers the "Extract text from image" action.
- [Shortcuts can be run from the command line](https://support.apple.com/guide/shortcuts-mac/run-shortcuts-from-the-command-line-apd455c82f02/mac) and can output its result via stdout.

## Setting up a shortcut

First, create a shortcut like this:

![A screenshot of the macOS Shortcuts app, displaying the configuration settings for a shortcut named "Extract Text." The shortcut is designed to receive images as input, likely from other apps or Quick Actions. The left side of the window shows the workflow steps: receiving images, extracting text, and outputting the result. Options for handling missing input (no image) are also visible, including a "Stop and Respond" action and a "No image given!" message. The right side of the window displays various settings under the "Details," "Privacy," and "Setup" tabs. The "Details" tab is currently selected, showing options such as "Use as Quick Action" (checked) and "Provide Output" (checked).](https://im.dt.in.th/ipfs/bafybeibofd4xjxkwlsj46uvc6l3dvkaihstazocy6h2wigsg45ntybitia/image.webp)

- Name the shortcut **Extract Text**
- At the right, under **Details**, check the following boxes:
  - **Use as Quick Action**
  - **Provide Output**
- In the workflow, add the following actions:
  - Receive **Images** input from **Quick Actions**
  - Extract text from **Shortcut Input**
  - Stop and output **Text from Image**

## Invoking the shortcut

Then, run the shortcut like this:

```sh
shortcuts run 'Extract Text' -i <path/to/image.png> | cat
```

The `| cat` is required to make the shortcuts CLI output the result to stdout. Otherwise, it will not output anything.
