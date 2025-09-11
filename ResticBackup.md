---
public: true
title: Backing up a Linux cloud server with Restic
---

# Backing up a Linux cloud server with Restic

To save on cloud costs, I want to decommission some old cloud servers. But before I do that, just to be safe, I wanted to back up the data on the it. Unfortunately, many cloud providers doesn’t let you download the snapshot of the VM.

[**Restic**](https://restic.readthedocs.io/en/stable/) is a modern backup tool _(“Backups done right!”)_[^discovery]. It is shipped as a static binary, so it can run on an old [Linux](Linux) cloud server[^old].

[^discovery]: I discovered this tool because it’s a backup tool of choice for [Canasta](https://canasta.wiki/).
[^old]: My pet cloud server is very old — it is running the Ubuntu 14.04 (Trusty). It is 8 years old already. Thankfully, Restic still works on it.

## Downloading the binary

The latest release can be found at <https://github.com/restic/restic/releases>.

```sh
# Make sure to replace the version number and CPU architecture in the URL.
wget https://github.com/restic/restic/releases/download/v0.17.1/restic_0.17.1_linux_amd64.bz2 -O restic.bz2

bzip2 -d restic.bz2
chmod +x restic
mv restic /usr/local/bin/restic
```

## Creating a repository

A [repository](https://restic.readthedocs.io/en/stable/030_preparing_a_new_repo.html) holds the backup data. It can be stored in a local directory, or in a cloud storage. I will use [Linode’s Object Storage](https://www.linode.com/products/object-storage/) ([my referral link](https://www.linode.com/lp/refer/?r=bbaf5d3f89469ec79343da7e08de7c60f664084a)).

You can create a repository for each server, but you can also [create a single repository for all servers, which leads to a better de-duplication.](https://restic.readthedocs.io/en/stable/040_backup.html#:~:text=In%20fact%20several%20hosts%20may%20use%20the%20same%20repository%20to%20backup%20directories%20and%20files%20leading%20to%20a%20greater%20de%2Dduplication.).

```sh
# Set the repository
export RESTIC_REPOSITORY="s3:https://<region>.linodeobjects.com/<bucket-name>/<subdirectory>"

# Set the password for accessing the repository
export RESTIC_PASSWORD=

# Set the access keys for S3-compatible storage
export AWS_ACCESS_KEY_ID=
export AWS_SECRET_ACCESS_KEY=

# If you are on a very old machine like me (Ubuntu 14.04), HTTPS may
# no longer work due to outdated CA certificate store. On a system this
# old, `apt update` no longer works. As a workaround, you can download
# the latest cacert.pem from https://curl.se/docs/caextract.html and set
# the environment variable SSL_CERT_FILE to point to the downloaded file.
# export SSL_CERT_FILE=cacert.pem

# Initialize the repository
restic init
```

## Backing up

Thankfully, buried in the [documentation](https://restic.readthedocs.io/en/stable/080_examples.html) is a command for backing up a Linux server:

```sh
# Based on the command from the docs
restic --exclude={/dev,/media,/mnt,/proc,/run,/sys,/tmp,/var/tmp} backup /

# My version
# - It excludes /swapfile, which is a file used for swap space.
# - It incudes /mnt, which is usually used for volumes.
restic --exclude={/dev,/media,/proc,/run,/sys,/tmp,/var/tmp,/swapfile} backup /
```

## Listing snapshots

```sh
restic snapshots
```

[More info in the docs.](https://restic.readthedocs.io/en/stable/045_working_with_repos.html#listing-all-snapshots)

## Further reading

- [Restoring from snapshots](https://restic.readthedocs.io/en/stable/050_restore.html)
- [Reading a single file or directory](https://restic.readthedocs.io/en/stable/050_restore.html#printing-files-to-stdout)
- [Mounting a snapshot as a FUSE filesystem](https://restic.readthedocs.io/en/stable/050_restore.html#restore-using-mount)
