---
public: true
aliases:
  - 20220605T203251Z9758
title: A GitHub Actions workflow to save files to Linode Object Storage
---

[GitHub Actions](GitHubActions) workflow to save files to [Linode](Linode) Object Storage

```yaml
on:
  push:
    branches: master
name: Deploy
jobs:
  deploy:
    runs-on: ubuntu-20.04
    steps:
      - uses: actions/checkout@v2
      - run: pip install s3cmd
      - run: s3cmd --host='https://ap-south-1.linodeobjects.com' --host-bucket='https://%(bucket)s.ap-south-1.linodeobjects.com' put index.json s3://music4.bemuse.ninja/server/index.json --acl-public --add-header='cache-control:public,max-age=60,s-maxage=60'
        env:
          AWS_ACCESS_KEY_ID: 0C3CA3AOYYPEI0B2ZJ1Y
          AWS_SECRET_ACCESS_KEY: ${{ secrets.SECRET_0C3CA3AOYYPEI0B2ZJ1Y }}
```

Source: <https://github.com/bemusic/bemuse-official-music-server/blob/master/.github/workflows/deploy.yml>
