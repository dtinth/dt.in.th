---
public: true
title: Configuring Open WebUI and LiteLLM with Docker Compose to talk to OpenAI, Anthropic, Gemini, and Perplexity APIs
---

# Configuring Open WebUI and LiteLLM with Docker Compose to talk to OpenAI, Anthropic, Gemini, and Perplexity APIs

:::warning[Outdated]
Now, both Google and Anthropic gave in and provided OpenAI-compatible APIs. So, you can now use Open WebUI directly with these APIs without needing LiteLLM as a proxy. See docs for [Google Gemini API](https://ai.google.dev/gemini-api/docs/openai) and [Claude API](https://docs.claude.com/en/api/openai-sdk). For my latest setup, see my [**Open WebUI Docker Compose setup**](OpenWebUI#docker-compose-setup).
:::

I want to use a single UI to interact with [LLMs](LargeLanguageModel) from different providers (OpenAI, Anthropic, Google, and Perplexity). I found that there is a way to do this now, but you have to self-host some software.

1. [**Open WebUI**](https://github.com/open-webui/open-webui) — A web-based LLM client that works Ollama and any OpenAI-compatible API.
2. [**LiteLLM**](https://github.com/BerriAI/litellm) — A proxy server that exposes 100s of LLMs with a unified, OpenAI-compatible API.

![A flowchart diagram showing the relationship between different components. It starts with "Open WebUI" on the left, which connects via a green arrow to "LiteLLM" in the center. From "LiteLLM", three green arrows branch out to the right, connecting to "Gemini API", "OpenAI API", and "Anthropic API". Each component is represented by a black rectangle with white text inside.](https://im.dt.in.th/ipfs/bafybeiavabarskefnfaenl57lwkugoioswkapqaqvb46ovh3ric2jso4ga/image.webp)

The UI is very flexible. You can choose which model to talk to, or talk to all of them at once:

![A dark-themed chat interface showing conversations with three different AI models: claude-3-5-sonnet, gemini-1.5-pro-latest, and gpt-4o. The top of the screen displays these model names as selectable options. A user message "hello world!" appears in a speech bubble on the right. Below are three response boxes, one for each AI model. Each AI gives a friendly greeting and offers assistance. The interface includes icons for various actions like editing, copying, and liking messages beneath each response.](https://im.dt.in.th/ipfs/bafybeidw67od5gpxgmhlnjxhtnhmd4xih5xwznpjkl4t7bj2fzdjialxoy/image.webp)

This is how I set it up:

1. **Set up the environment variables.** Put the API keys in a `.env` file.

   ```
   OPENAI_API_KEY=
   ANTHROPIC_API_KEY=
   GEMINI_API_KEY=
   PERPLEXITYAI_API_KEY=
   ```

2. **Create a LiteLLM config file.** Put the model names and API keys in a `litellm_config.yaml` file.

   ```yaml
   model_list:
     - model_name: gpt-4o
       litellm_params:
         model: openai/gpt-4o
     - model_name: claude-3-5-sonnet
       litellm_params:
         model: anthropic/claude-3-5-sonnet-20240620
     - model_name: gemini-1.5-pro-latest
       litellm_params:
         model: gemini/gemini-1.5-pro-latest
         safety_settings:
           - category: HARM_CATEGORY_HARASSMENT
             threshold: BLOCK_NONE
           - category: HARM_CATEGORY_HATE_SPEECH
             threshold: BLOCK_NONE
           - category: HARM_CATEGORY_SEXUALLY_EXPLICIT
             threshold: BLOCK_NONE
           - category: HARM_CATEGORY_DANGEROUS_CONTENT
             threshold: BLOCK_NONE
     - model_name: pplx-llama-3.1-sonar-huge
       litellm_params:
         model: perplexity/llama-3.1-sonar-huge-128k-online
   ```

3. **Create a Docker Compose project.** Here’s the `docker-compose.yml` file that puts it all together:

   ```yaml
   services:
     webui:
       image: ghcr.io/open-webui/open-webui:main
       restart: unless-stopped
       ports:
         - '127.0.0.1:33371:8080'
       environment:
         - OPENAI_API_KEY=dummy
         - OPENAI_API_BASE_URL=http://litellm:4000/v1
       volumes:
         - open-webui:/app/backend/data
     litellm:
       image: ghcr.io/berriai/litellm:main-latest
       restart: unless-stopped
       command:
         - '--config=/litellm_config.yaml'
         - '--detailed_debug'
       ports:
         - '127.0.0.1:33372:4000'
       environment:
         - LITELLM_MASTER_KEY=dummy
         - OPENAI_API_KEY
         - GEMINI_API_KEY
         - ANTHROPIC_API_KEY
         - PERPLEXITYAI_API_KEY
       volumes:
         - ./litellm_config.yaml:/litellm_config.yaml
   volumes:
     open-webui:
   ```

4. **Start the project.** Run `docker compose up -d` to start the project, then go to `http://localhost:33371/` and create an account there.
