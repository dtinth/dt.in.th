---
title: 'Open WebUI'
public: true
topic: true
---

[**Open WebUI**](https://openwebui.com/) is an open-source web interface for running large language models, compatible with OpenAI API and Ollama.

- [Configuring Open WebUI and LiteLLM with Docker Compose to talk to OpenAI, Anthropic, Gemini, and Perplexity APIs (outdated)](OpenWebUILiteLLM)

## Docker Compose setup

```yaml
services:
  webui:
    image: ghcr.io/open-webui/open-webui:main-slim
    restart: unless-stopped
    ports:
      - '127.0.0.1:8080:8080'
    volumes:
      - open-webui:/app/backend/data
volumes:
  open-webui:
```

To enable Google login, add the following environment variables to `webui` service:

<!-- prettier-ignore -->
```yaml
    environment:
      - ENABLE_OAUTH_SIGNUP=true
      - OAUTH_MERGE_ACCOUNTS_BY_EMAIL=true
      - GOOGLE_CLIENT_ID
      - GOOGLE_CLIENT_SECRET
```

and add to `stack.env` (Portainer) or `.env` (docker-compose):

```env
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

## Related topics

- [Large Language Model](LargeLanguageModel)
