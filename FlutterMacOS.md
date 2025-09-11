---
public: true
title: Setting up Flutter and Android in macOS using Homebrew
aliases:
  - 20220812T132952Z9473
---

Setting up Flutter and Android in macOS using Homebrew

```sh
brew install --cask flutter

# Do not install `android-commandlinetools` with Homebrew.
# As of writing, Flutter does not see it. Don't do:
#     brew install --cask android-commandlinetools

# Instead, install Android Studio:
brew install --cask android-studio
```

Then [install Android SDK Command-line Tools from Android Studio’s SDK manager.](https://stackoverflow.com/a/68492909/559913)

```sh
flutter doctor
flutter doctor --android-licenses
```
