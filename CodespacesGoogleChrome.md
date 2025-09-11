---
public: true
title: Installing Google Chrome on Codespaces (and also chromedriver)
aliases:
  - 20220718T062034Z1075
---

When running a default [Codespaces](Codespaces) image, sometimes I want to have Google Chrome available. This is a simple script to install Google Chrome and chromedriver on Codespaces:

```bash
mkdir ~/setup-chrome && cd ~/setup-chrome

# Install Google Chrome
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo apt install ./google-chrome-stable_current_amd64.deb -y

# Install Chromedriver
CHROME_MAJOR_VERSION=$(google-chrome-stable --version | ruby -e 'puts $stdin.read[/\d+/]')
CHROMEDRIVER_VERSION=$(curl -sS https://chromedriver.storage.googleapis.com/LATEST_RELEASE_${CHROME_MAJOR_VERSION})
wget https://chromedriver.storage.googleapis.com/${CHROMEDRIVER_VERSION}/chromedriver_linux64.zip
unzip chromedriver_linux64.zip
sudo mv chromedriver /usr/local/bin/
```

When launching `google-chrome-stable` on Codespaces, you may see these errors:

- **Missing X server or $DISPLAY**

  To solve, [run an X11 display server](CodespacesDisplayServer).
