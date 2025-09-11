---
title: K-sortable unique ID formats (and generator)
public: true
---

:::lead
There are many ways to **generate unique IDs** in a **sortable** manner. Here are some of them:
:::

<table @click="onClick" class="n-code-copyable">
  <thead>
    <tr>
      <th>Format</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://www.rfc-editor.org/rfc/rfc9562#name-uuid-version-7">UUIDv7</a></td>
      <td><code>{{uuidv7}}</code></td>
    </tr>
    <tr>
      <td><a href="https://github.com/segmentio/ksuid">KSUID</a></td>
      <td><code>{{ksuid}}</code></td>
    </tr>
    <tr>
      <td><a href="https://github.com/ulid/spec">ULID</a></td>
      <td><code>{{ulid}}</code></td>
    </tr>
    <tr>
      <td><a href="https://www.mongodb.com/docs/manual/reference/bson-types/#std-label-objectid">MongoDB ObjectId</a></td>
      <td><code>{{bson}}</code></td>
    </tr>
    <tr>
      <td><a href="https://firebase.blog/posts/2015/02/the-2120-ways-to-ensure-unique_68">Firebase Push ID</a></td>
      <td><code>{{firebase}}</code></td>
    </tr>
    <tr>
      <td><a href="https://github.com/sony/sonyflake">Sonyflake</a></td>
      <td><code>{{sonyflake}}</code></td>
    </tr>
    <tr>
      <td><a href="https://discord.com/developers/docs/reference#snowflakes">Discord Snowflake</a></td>
      <td><code>{{discord}}</code></td>
    </tr>
    <tr>
      <td><a href="https://github.com/twitter-archive/snowflake/tree/snowflake-2010">Twitter Snowflake</a></td>
      <td><code>{{twitter}}</code></td>
    </tr>
  </tbody>
</table>

Click on the code to copy it to the clipboard.

<style scoped>
  .n-code-copyable code {
    cursor: pointer;
  }
</style>

<script setup>
  const uuidv7 = Vue.ref('########-####-7###-####-############')
  const ulid = Vue.ref('##########################')
  const ksuid = Vue.ref('###########################')
  const bson = Vue.ref('########################')
  const twitter = Vue.ref('###################')
  const discord   = Vue.ref('###################')
  const sonyflake = Vue.ref('####################')
  const firebase = Vue.ref('####################')

  const onChange = []

  const onClick = e => {
    const code = e.target.closest('code')
    if (code) {
      navigator.clipboard.writeText(code.textContent)
    }
  }
                     
  async function runGenerator(ref, modPromise, f) {
    const mod = await modPromise
    ref.value = await f(mod)
    onChange.push(() => ref.value = f(mod))
  }

  let interval
  Vue.onMounted(() => {
    runGenerator(uuidv7, import('https://cdn.jsdelivr.net/npm/uuidv7@1.0.2/+esm'), m => m.uuidv7())
    runGenerator(ulid, import('https://cdn.jsdelivr.net/npm/ulid@2.3.0/+esm'), m => m.ulid())
    runGenerator(ksuid, import('https://cdn.jsdelivr.net/npm/xksuid@0.0.4/+esm'), m => m.generate())
    runGenerator(bson, import('https://cdn.jsdelivr.net/npm/bson-objectid@2.0.4/+esm'), m => m.default().toString())
    const snowflake = import('https://cdn.jsdelivr.net/npm/@sapphire/snowflake@3.5.5/+esm')
    runGenerator(twitter, snowflake, m => m.TwitterSnowflake.generate().toString())
    runGenerator(discord, snowflake, m => m.DiscordSnowflake.generate().toString())
    runGenerator(sonyflake, import('https://cdn.jsdelivr.net/npm/sonyflake@1.1.2/+esm'), m => new m.Sonyflake().nextId())
    runGenerator(firebase, import('https://cdn.jsdelivr.net/npm/firebase-auto-ids@1.1.0/+esm'), m => m.default(Date.now()))
    interval = setInterval(() => onChange.forEach(f => f()), 16)
  })
  Vue.onUnmounted(() => clearInterval(interval))
</script>
