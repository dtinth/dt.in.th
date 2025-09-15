---
title: AI vs Thai Exams
public: true
created: 2025-02-26
---

# AI vs Thai Exams

:::lead
The **AI vs Thai Exams** project evaluates [large language models](LargeLanguageModel) on Thailand's standardized exams.
:::

I built this [project](Projects) to create an up-to-date benchmark for AI models on Thai educational content, as existing leaderboards had become outdated with newer models. The exam datasets come from the [ThaiExam Dataset](https://huggingface.co/datasets/scb10x/thai_exam) from SCB 10X and the [OpenThaiGPT Evaluation Dataset](https://huggingface.co/datasets/openthaigpt/openthaigpt_eval).

::cta[View Live Results]{href="https://ai-vs-thai-exams.pages.dev/"}

## Motivation

In 2024, [I tried testing various large language models on O-NET high school exams](ThaiLanguageLLMBenchmark) using SCB 10X's ThaiExam dataset. With many new models being released frequently (like Claude 3.7 Sonnet at the time), I wanted to see how they performed on Thai content.

Prior work includes [ThaiLLM Leaderboard](https://huggingface.co/ThaiLLM-Leaderboard) project, as well the [ThaiExam Leaderboard on CRFM HELM](https://crfm.stanford.edu/helm/thaiexam/latest/#/leaderboard), but the data was quite outdated. There is no data for models newer than Claude 3.5 — and many models have improved significantly since then.

I initially considered cloning those projects to run benchmarks myself, but couldn't get them running locally (Python version conflicts, massive dependencies like PyTorch taking up GBs of space), so I built my own lightweight benchmark using Bun + Vercel AI SDK.

## Methodology

The benchmark differs from existing approaches in several key ways:

- **API-only models**: Focuses only on models accessible via API, eliminating complex inference dependencies and keeping the project lightweight. We use [Vercel AI SDK](https://vercel.com/docs/ai) with the official API providers for [OpenAI](https://openai.com/), [Anthropic](https://www.anthropic.com/), and [Google](https://cloud.google.com/vertex-ai), while other open models are accessed via [OpenRouter](https://openrouter.ai/).
- **Zero-shot testing**: Uses one-shot prompting—no example questions or answers provided. Models only see the JSON input/output format followed by the question to solve.
- **Reasoning transparency**: Prompts are designed to allow models to think and explain their reasoning before answering, improving performance and revealing their understanding process.
- **Individual evaluation**: Unlike HELM's approach, each question is individually tested rather than in batches.

## Community Support

The project is community-funded through individual sponsors who contribute to API costs for running expensive models like o1-preview and Claude Opus.

This project is funded by our generous sponsors who contribute funds and API keys:

- [Jetbodin Prakoonsuksapan](https://github.com/Jetbodin)
- [Sakol Assawasagool](https://github.com/koobitor)
- [Khachain Wangthammang](https://github.com/icez)
- [Kasidis Satangmongkol](https://github.com/toyeiei)
- [Tossapol Pomsuwan](https://github.com/mastervii)
- [R'ket](https://r-ket.app/) via [Veha Suwatphisankij](https://github.com/vehas) and [Natechawin Suthison](https://github.com/nsuthison)
- [Chrisada Sookdhis](https://github.com/chrisadas)

::cta[Source code on GitHub]{href="https://github.com/dtinth/thaiexamjs"}

## Updates

I share regular updates on Facebook about new models and findings:

<!-- prettier-ignore -->
| Date | Update |
|:--- |:--- |
| 2025-08-08 | [GPT-5 becomes second model to exceed 90% on O-NET](https://www.facebook.com/dtinth/posts/pfbid0YkuwJ8vUNN7qxajZhdEQ9MsX4nFZjyets1rmKbZyR6JemguNAe7o1fVSiCK2KHDvl) (90.24%), joining Gemini 2.5 Pro (91.46%) |
| 2025-05-23 | [Claude 4 performance analysis](https://www.facebook.com/dtinth/posts/pfbid0Hiynz37rGQejUjH6cJzgiYoRvzqm4g6vqQV9RWw6UuuQtaZdU4NM37qC1dHcrxLzl) - coding-focused model shows decreased O-NET performance vs 3.7 Sonnet |
| 2025-04-18 | [Gemini 2.5 Pro breakthrough](https://www.facebook.com/dtinth/posts/pfbid0CdgBKFxMo5ZGfKLsMUC2kZgH4FdqcNWm6gvPGwDrrE1dpDd6LPn44rZxDGhmKnSel) - first model to exceed 90% on O-NET (up from 72% in June 2024) |
| 2025-03-08 | [Major model additions](https://www.facebook.com/dtinth/posts/pfbid032YrU2HuoftDN2pV2KGC8Wuo2NUpZEBXGaWjkcySyQuCHbYSB6WLAmcZ3AJbENhSal) - GPT-4.5, o3-mini, o1, Gemma-2-27b, plus IC Licensing Exams |
| 2025-02-28 | [TPAT-1 medical ethics findings](https://www.facebook.com/dtinth/posts/pfbid02pfX7CHfTe6rtJhuX6NohndTNCNresqV6nwNUpVJsQKqCDPHGLQw9YNo61pvTnNPVl) - models excel at intelligence (92%) but struggle with ethics (68%) |
| 2025-02-26 | [Project announcement](https://www.facebook.com/dtinth/posts/pfbid02acvQrb6Ww1h2jJkASTDgu5qmbUNG5dNZGh6pyrRYXLd7tm1hsSMU6xWd5YuHWVEel) - lightweight benchmark launch with web report interface |
