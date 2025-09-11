---
public: true
title: Run an X11 display server and noVNC on Codespaces
aliases:
  - 20220719T064918Z5905
---

When running a default [Codespaces](Codespaces) image, sometimes I want to use GUI applications (e.g. web browsers for testing).

This is possible with [noVNC](https://novnc.com/) (a web-based VNC client) and [Xtigervnc](https://tigervnc.org/) (a VNC server that supports X11). Here’s a script to set them up with [Docker](Docker) Compose. To use it, copy the following snippet into a new Bash terminal:

```bash
mkdir -p ~/setup-display && cd ~/setup-display
cat > docker-compose.yml <<EOF
services:
  display:
    image: ghcr.io/dtinth/xtigervnc-docker:main
    tmpfs: /tmp
    restart: always
    environment:
      VNC_GEOMETRY: 1440x900
    ports:
      - 127.0.0.1:5900:5900
      - 127.0.0.1:6000:6000
  novnc:
    image: geek1011/easy-novnc
    restart: always
    command: -a :5800 -h display --no-url-password
    ports:
      - 127.0.0.1:5800:5800
EOF
docker compose up -d
```

Once run, we need to tell our applications to connect to the server we started. To do that, set the DISPLAY environment variable to `127.0.0.1:0`:

```bash
export DISPLAY=127.0.0.1:0
```

Once that’s done, we can start our GUI applications from that terminal.

## Playwright Test + VS Code

To [use Playwright Test with VS Code](https://playwright.dev/docs/getting-started-vscode) in GitHub Codespaces:

1. Go to Settings in VS Code.

2. Click on **Remote [Codespaces]** tab.

3. Search for `playwright.env` and then click on **Edit in settings.json**.

4. Add the following to the settings:

   ```json
     "playwright.env": {
       "DISPLAY": "127.0.0.1:0"
     }
   ```

After this, you should be able to debug [Playwright](Playwright) tests in VS Code.

Note that the [“Show & reuse browser” feature introduced in Playwright v1.25](https://github.com/microsoft/playwright/releases/tag/v1.25.0) is not working yet. [A workaround is available in the Playwright GitHub issue](https://github.com/microsoft/playwright/issues/17616).
