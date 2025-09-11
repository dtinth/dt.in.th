---
public: true
title: “How to create a named tmux sessions and windows in an idempotent way?”
---

I recently had a need to automate the creation of a [tmux](Tmux) session, window, and pane. I wanted to do this in an idempotent way, so that I could run the same command multiple times without creating duplicate stuff. So I asked ChatGPT:

“How to create a named tmux session in an idempotent way?”

<blockquote>

To create a named tmux session in an idempotent way, you can use the **`tmux new-session`** command with the **`-s`** flag to specify a name for the session. For example, to create a session named **`my-session`**, you can use the following command:

```sh
tmux new-session -s my-session
```

To make this command idempotent, you can check if a session with the specified name already exists before running the command. You can use the **`tmux has-session`** command to check if a session with a given name exists, and then only run the **`tmux new-session`** command if the session does not exist.

Here is an example of a script that creates a named tmux session in an idempotent way:

```sh
# check if the session already exists
if ! tmux has-session -t my-session
then
  # create the session if it does not exist
  tmux new-session -s my-session
fi
```

This script will check if a session named **`my-session`** already exists, and if it does not exist, it will create the session. This ensures that the **`tmux new-session`** command is only run if the session does not already exist, making the script idempotent.

</blockquote>

“How to create a named window in an idempotent way?”

<blockquote>

To create a named window in an idempotent way, you can use the **`tmux new-window`** command with the **`-n`** flag to specify a name for the window. For example, to create a window named **`my-window`**, you can use the following command:

```sh
tmux new-window -n my-window
```

To make this command idempotent, you can check if a window with the specified name already exists before running the command. You can use the **`tmux list-windows`** command to list all windows in the current session, and then check if the specified window name is in the list of windows. If the window does not exist, you can run the **`tmux new-window`** command to create it.

Here is an example of a script that creates a named tmux window in an idempotent way:

```sh
# list all windows in the current session
windows=$(tmux list-windows)

# check if the window already exists
if ! echo "$windows" | grep -q "my-window"
then
  # create the window if it does not exist
  tmux new-window -n my-window
fi
```

This script will check if a window named **`my-window`** already exists in the current session, and if it does not exist, it will create the window. This ensures that the **`tmux new-window`** command is only run if the window does not already exist, making the script idempotent.

</blockquote>
