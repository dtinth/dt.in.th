---
public: true
title: Using Rclone with a Public Google Drive folder
---

I had to mirror some public Google Drive folder to an object storage service. [Rclone](https://rclone.org/) can do this easily, but configuring it is a bit tricky.

## Prerequisites

- Rclone installed
- A Google Cloud Project with Drive API enabled
- A Google Cloud service account — you can create a service account without giving it any permission, as a public folder can already be accessed by anyone

## Configuration

```
[gdrivepublic]
type = drive
scope = drive.readonly
service_account_file = /path/to/gdrivepublic.service-account.json
```

Normally we would have to configure the `root_folder_id` setting, but this setting can also be configured from the environment variables, which is what we will use.

## Usage

Then you can use the `RCLONE_CONFIG_GDRIVEPUBLIC_ROOT_FOLDER_ID` environment variable to specify the public folder ID. For example:

```sh
env RCLONE_CONFIG_GDRIVEPUBLIC_ROOT_FOLDER_ID=… rclone lsjson gdrivepublic: --recursive --files-only
```
