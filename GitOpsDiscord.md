---
public: true
title: GitOpsing a Discord message
---

# [GitOpsing](GitOps) a [Discord](Discord) message

In [Discord](Discord) communities, it’s common to create read-only channels for rules, resources, and other important information. While this information is important for community members to see, it can be difficult to manage and update if [only the original poster has the ability to edit those messages.](https://support.discord.com/hc/en-us/community/posts/360055533252-Allow-admin-mods-to-edit-members-posts)

However, by applying the principles of [GitOps](GitOps), it’s possible to store the message content in a GitHub repo and use GitHub Actions to update the messages on behalf of the server admin.

This means that anyone can contribute and make updates to these messages by submitting pull requests, making the process of maintaining and updating important information in Discord communities more efficient, collaborative, and transparent.

![](https://user-images.githubusercontent.com/193136/216098888-9441f09d-3735-459d-881e-3ed783cee16f.png)

1. Create a webhook. You will get a webhook URL.

2. Send the message to the webhook URL.

   ```sh
   # Example, using HTTPie
   http post "$RESOURCES_WEBHOOK_URL?wait=true" content="hello world"
   ```

3. Copy the message ID.

4. To edit the message, send a PATCH request to the message URL.

   ```sh
   # Example, using HTTPie
   http patch $RESOURCES_WEBHOOK_URL/messages/$RESOURCES_MESSAGE_ID content="hello world2"
   ```

5. Write a script to update the message. [Example](https://github.com/creatorsgarten/bangkok-open-source-discord/blob/main/scripts/sync.ts)

6. Assuming that the `$RESOURCES_WEBHOOK_URL` and `$RESOURCES_MESSAGE_ID` are stored in a `.env` file, we can upload them as secrets to GitHub:

   ```sh
   # Using `gh` CLI
   gh secret set -f .env
   ```

7. Write a GitHub Actions workflow to run the script when pushed. [Example](https://github.com/creatorsgarten/bangkok-open-source-discord/blob/main/.github/workflows/sync.yml)

8. Push everything to GitHub. The workflow will run and the message should be updated.

Currently being used in:

- [Bangkok Open Source Initiative Discord server](https://github.com/creatorsgarten/bangkok-open-source-discord)
