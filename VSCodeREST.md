---
public: true
title: VS Code REST Client snippets
wide: true
created: 2022-09-07
aliases:
  - 20220907T163410Z4258
---

The [**REST Client**](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) [VS Code](VSCode) extension provides a nice and lightweight way to send HTTP requests. I usually use this as an alternative to [Postman](https://www.postman.com/) when I don't need the full power of Postman. This note contains some snippets that I use in my REST Client files.

## Documenting HTTP requests in Markdown files

:::::split

In Markdown files, it is possible to document HTTP requests using the fenced code block with the language `http`. The extension will add a “Send Request” button to the Markdown file which allows easily sending a request!

::::aside

```http
GET https://api.example.com/users
```

::::

:::::

## Form post

:::::split

To send a form post, set: `Content-Type: application/x-www-form-urlencoded`. In the request body, each field can be on its own line.

::::aside

```
POST https://api.example.com/login HTTP/1.1
Content-Type: application/x-www-form-urlencoded

name=foo
&password=bar
```

::::

:::::

## GraphQL

:::::split

To send GraphQL request, set: `X-REQUEST-TYPE: GraphQL` then put the GraphQL query in the next section, followed by JSON representation of the variables to send along with the query.

::::aside

```
POST https://api.github.com/graphql
Content-Type: application/json
Authorization: Bearer xxx
X-REQUEST-TYPE: GraphQL

query (…) {
  …
}

{
  /* variables here */
}
```

::::

:::::

## Referencing environment variables in `.env` files

:::::split

You can use <code v-pre>{{$dotenv ____}}</code> to reference the environment value stored in the `.env` file in the same directory.

::::aside

<div v-pre>

```
GET https://api.github.com/user
Authorization: Bearer {{$dotenv GITHUB_TOKEN}}
```

</div>

::::

:::::

## Prefixing

:::::split

To not repeat the same URL over and over, variables can be used.

- Define variables with `@name = value`
- Reference variables with <span v-pre>`{{ name }}`</span>

::::aside

<div v-pre>

```
@base = https://api.example.com

GET {{base}}/user
```

</div>

::::

:::::
