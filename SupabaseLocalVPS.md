---
public: true
title: Running Supabase on a remote VPS while keeping local development workflow
created: 2025-09-09
giscus: true
---

# Running Supabase on a remote VPS while keeping local development workflow

I don’t like running [Docker](Docker) on my Mac, as I want to conserve battery. (And did you know [Supabase requires 7+ GB of RAM](https://supabase.com/docs/reference/cli/supabase-start#:~:text=It%20is%20recommended%20to%20have%20at%20least%207GB%20of%20RAM%20to%20start%20all%20services.) to run locally?)

However, some projects require running services in Docker, which is inconvenient. Since I have a VPS, here’s how I set up [Supabase](Supabase) CLI to work with Docker running remotely and behave as if it was running locally:

```shell
# Create a new Docker context for remote management
docker context create remote --docker "host=ssh://username@your-server-ip"

# Connect to the remote Docker context
docker context use remote

# In another tab, run autossh to forward ports expected by Supabase CLI
autossh -M 0 -v -N -T \
  -o ServerAliveInterval=15 \
  -o ServerAliveCountMax=3 \
  -o ExitOnForwardFailure=yes \
  -L 54321:localhost:54321 \
  -L 54322:localhost:54322 \
  -L 54323:localhost:54323 \
  -L 54324:localhost:54324 \
  username@your-server-ip

# Create a Docker network where published ports will be exposed only to localhost
# See issue: https://github.com/supabase/cli/issues/1397
docker network create -o 'com.docker.network.bridge.host_binding_ipv4=127.0.0.1' supabase_network

# Start Supabase CLI as usual, but tell it to use the created network
# Had to exclude vector as it fails to start in this setup
supabase start --exclude vector --network-id supabase_network
```

This setup lets me:

- Run Supabase Stack’s containers on my VPS instead of locally
- Keep my local development workflow unchanged
- Use Supabase CLI as if everything was running locally
- Save battery by not running Docker Desktop

A limitation of this approach is that since Docker is now running on a remote machine, we can’t use bind mounts to share files between host and containers. But for Supabase app development, this is not a problem. For cases where bind mounts are needed, I develop the project completely remotely using [GitHub Codespaces](Codespaces).

Also, for some commands that runs extra Docker containers, you will need to pass `--network-id supabase_network` to them as well. Otherwise, you will get errors due to `db` host not being found.
