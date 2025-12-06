---
public: true
title: Deploying n8n to Virtuozzo Application Platform
created: 2025-05-25
giscus: true
---

# Deploying n8n to Virtuozzo Application Platform

**Virtuozzo Application Platform** providers (such as [Ruk-Com's PaaS](https://ruk-com.cloud/cloud-paas/)) allows easy deployment of Docker images. What I like about Virtuozzo's offerings are:

- **[Pay-per-use pricing model](https://www.virtuozzo.com/application-platform-docs/pricing-model/)** - Unlike traditional VPS providers where you pay for reserved resources (i.e. pay for the limits) regardless of usage, with Virtuozzo "you do not pay for unused resources" as you "pay for the usage."
  ![Comparison chart showing Pay for the Limits vs Pay for the Usage pricing models. Left side shows Pay-As-You-Go with unused resources wasted; right side shows Pay-Per-Use where you only pay for actual resource consumption. Both models illustrated with resource usage graphs and dollar sign patterns.](https://im.dt.in.th/ipfs/bafybeiebgkfhd53wy72i2af7jox5whjuad6uurf3dlbhyajnuz6gk75ujy/image.webp)
  - Resources are measured in [cloudlets](https://www.virtuozzo.com/application-platform-docs/cloudlet/) (128MB RAM + 400MHz CPU)
  - A cloudlet is cheap. Pricing depends on [providers](https://www.virtuozzo.com/application-platform-partners/). For my instance, a cloudlet on Ruk-Com costs approximately THB 50 (USD ~1.5) per month
  - Applications with lower resource requirements result in lower hosting costs
  - You can set the “scaling limit” for each service to control spending
- **Free subdomain and SSL** included with every deployment
  - You only need to make sure your container listens on port 8080, and Virtuozzo will set up a [Shared Load Balancer](https://www.virtuozzo.com/application-platform-docs/shared-load-balancer/) to securely route traffic to your container and takes care of SSL/HTTPS for you
- **Intuitive management interface** - The control panel provides easy access to:
  - Service management
  - Application logs
  - File system browser
  - Deployment configuration
- **Prepaid account balance system** - No bill shock concerns as you simply top up your account in advance and services consume from that balance
- **Multi-region flexibility** - Easy migration of environments between geographical regions when your provider operates in multiple locations

## Observations

These are my observations from about 2 weeks of running n8n on Virtuozzo PaaS:

- **Resource usage:** At idle, n8n consumes about 2\~3 cloudlets, which is about 100\~150 THB per month. However, you should set a high scaling limit (such as 8\~12 cloudlets) so that the system can scale up when needed, and so that n8n can handle spikes in memory usage when running workflows. Otherwise, n8n may crash when it runs out of memory. If you want to save cost, then you will need to learn [how to optimize n8n's memory usage](https://docs.n8n.io/hosting/scaling/memory-errors/).

- **No crash recovery by default:** If your n8n instance crashes on its own, by default, it will not automatically restart. You will need to manually restart the node from the control panel. I worked around this by configuring Node.js RAM limit to 8GB (`--max_old_space_size=8000`), which is way larger than the scaling limit. This way, the platform’s OOM killer will kill the n8n process before Node.js crashes on its own, and the platform will automatically restart the n8n process.

- **Compatibility:** While most features work very well ([Webhooks](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/), [Schedule Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.scheduletrigger/), etc.), the [MCP Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-langchain.mcptrigger/) doesn’t seem to work well with Shared Load Balancer (SLB), so if you plan to integrate n8n with your AI agent (MCP clients), this set up may not be suitable for you.

## Setting up n8n

Start by clicking **New Environment**:

![](https://im.dt.in.th/ipfs/bafybeiat7q654g4x5do5ngc32qbsx6h7j73unskngbslozm4yjqpyaz6ti/image.webp)

In the New Environment window, select a **Custom** container for the Application Server then click on **Select Image**:

![](https://im.dt.in.th/ipfs/bafybeidda6vzrp6uzr5xxxq6j6z6cfydqaafqpsbg3nyxijp7kr75yzzra/image.webp)

In the **Select Container** screen, search for **n8n**, select **n8nio/n8n** and then click **Next**:

![](https://im.dt.in.th/ipfs/bafybeiapq4ersai6j2xqf6vilapxk2vxwkwncgcfqmvn7boo4kaucauh6e/image.webp)

Configure the following:

1. Set your own **Environment Name** and **note the domain name**
2. Ensure **Access via SLB** is turned on.
3. Adjust the number of **Cloudlets** to your needs, which will affect the cost
4. Then, click on **Variables,** which will take you to the next screen

![](https://im.dt.in.th/ipfs/bafybeic7akddmloa3c5cgmhtple3rnf3hr6pyxwgflgubtckyvch5m7oma/image.webp)

Configure the following **Environment Variables**:

| Name               | Value                              |
| ------------------ | ---------------------------------- |
| `GENERIC_TIMEZONE` | `Asia/Bangkok`                     |
| `WEBHOOK_URL`      | `https://<your-subdomain>/`        |
| `N8N_PROTOCOL`     | `https`                            |
| `N8N_HOST`         | `<your-subdomain>`                 |
| `N8N_PORT`         | `8080`                             |
| `NODE_OPTIONS`     | [`--max_old_space_size=8000`][ram] |

[ram]: https://docs.n8n.io/hosting/scaling/memory-errors/#increase-old-memory

![](https://im.dt.in.th/ipfs/bafybeif22ejzozyvvxlulqm2jc7wu4yvvntqdfylnmrnsngkflpsxinhxm/image.webp)

On the same window, go to **Volumes** and add a **Local Filesystem** volume at `/home/node/.n8n`, then click **Apply.**

![](https://im.dt.in.th/ipfs/bafybeichjqzts5anaq5kb3ikud3eg6hmrrcnuk2q74igzpy2era754kzpm/image.webp)

Then, go to **SSL** and enable **Built-in SSL**. Finally, click **Create** to deploy the environment:

![](https://im.dt.in.th/ipfs/bafybeieewtf5zhafst3owaojfy4rwu34pvebib37o7vzueyhz6ulsjc47y/image.webp)

After creation, you can access your n8n instance and create an admin user.
