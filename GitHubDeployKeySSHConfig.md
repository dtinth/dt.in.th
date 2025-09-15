---
public: true
title: Cloning private GitHub projects onto a new worker Linux box
aliases:
  - 20220727T072632Z9353
---

Cloning private [GitHub](GitHub) projects onto a new worker Linux box.

Goals:

- That machine should have access to that project, but not other projects. This is done using the Deploy Keys feature of GitHub.

- It should be able to access other repositories as needed. Note that each repository will need its own SSH key.

Implementation, for each project and machine:

- Generate a new ssh key for that project, and add it to the repository’s list of allowed deploy keys.

  ```sh
  ssh-keygen -f project1 -C project1
  ```

- Set up ssh config

  ```sh
  Host project1.gh
    HostName github.com
    IdentityFile /path/to/your/keys/project1
    User git
  ```

- Use `project1.gh` instead of `git@github.com` when cloning the repository.

---

I do this when I set up [my notes vault](AboutThisWebsite) on a new machine.
