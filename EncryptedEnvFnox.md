---
title: Encrypted environment variables with fnox
public: true
---

I started using [fnox](https://fnox.jdx.dev/) to implement encrypted environment variables in my projects. For simple use cases, [age-encryption](https://age-encryption.org/) can be [used](https://fnox.jdx.dev/providers/age.html) to store secrets locally but it can also be [integrated](https://fnox.jdx.dev/providers/overview.html) with cloud secret management services and password managers. It also supports multiple [providers](https://fnox.jdx.dev/providers/overview.html) simulataneously, as well as multiple [profiles](https://fnox.jdx.dev/guide/profiles.html).

When using age as the encryption provider, anyone can add/update encrypted secrets, but only those with the private keys can decrypt them.

1. **Initialize fnox** using `fnox init` to create a `fnox.toml` configuration file:

   ```bash
   fnox init
   ```

   :::details[Example configuration]

   ```toml
   default_provider = "age"

   [providers.age]
   type = "age"
   recipients = ["age1qgkrnkprrzkpvnysfhjg2sgxvx5vmpfakkg8z25m39g8zx6xesmq4wgw5u"]
   ```

   :::

   :::info[About recipients]

   Usually I add 2 recipients:

   1. **My development machine.** I [use my SSH key](https://fnox.jdx.dev/providers/age.html#configuration) as a recipient. I can just put the public key (`ssh-ed25519 AAAAC3Nza...)` in the `recipients` list. I can easily grab my public key from GitHub by going to `https://github.com/[username].keys`.
   2. **My deployment server.** I generate a new age key pair using `age-keygen` and put that public key in the `recipients` list. The private key is stored securely on the server.

   :::

2. **Add secrets** using `fnox set`:

   ```bash
   # Select a profile (optional)
   # export FNOX_PROFILE=server1

   # Set a secret (prompts for value)
   fnox set DATABASE_URL

   # Or provide the value directly
   fnox set DATABASE_URL "postgresql://localhost/mydb"
   ```

   :::info[Anyone can add/update secrets]

   Since it uses asymmetric encryption, anyone can add or update secrets without requiring the key, but only those with the private keys can decrypt them.

   :::

3. **Run a command** with `fnox exec` to have the secrets injected as environment variables:

   ```bash
   fnox exec -- pnpm start
   ```

   :::info[Providing the secret key]

   Secret key can be provided via environment variable:

   - `FNOX_AGE_KEY` (specify the private key directly)
   - `FNOX_AGE_KEY_FILE` (specify a file containing the private key, which can also be an SSH private key if using SSH keys as recipients)

   :::
