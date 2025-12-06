---
public: true
title: Upserting data into Grist using n8n
giscus: true
---

# Upserting data into Grist using n8n

:::lead
Although [n8n](N8n) offers [a built-in Grist integration](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.grist/), it currently doesn't support the upsert operation. Therefore, we will need to use the HTTP Request node to interact with [Grist](Grist)'s API directly.
:::

The key to efficient upserting is to batch multiple records into a single API request, rather than making one request per record. The [Grist API](https://support.getgrist.com/api/#tag/records/operation/modifyRecords) supports batched upserts, which significantly improves performance.

:::figure{.framed}
![Workflow diagram](https://im.dt.in.th/ipfs/bafybeifontes6i57c5f3ntos6on4pqfzdvhqjtxmqrr2emtgwswoiohbvm/image.webp)
:::

:::note[Update (2025-08-07)]
[I am submitting a pull request to n8n to add native upsert support to the Grist node.](https://github.com/n8n-io/n8n/pull/18067) If accepted, this will simplify the workflow significantly. Upvote the PR if you would like to see this feature added.
:::

## Prerequisites

- An n8n instance set up and running
- A [Grist](Grist) account with an [API key](https://support.getgrist.com/rest-api/)
- A [Grist](Grist) document and table where you want to upsert data

## Setting up credentials

:::note[Built-in Grist credentials can not be used]
While n8n has [built-in Grist credentials](https://docs.n8n.io/integrations/builtin/credentials/grist/), as of `n8n@1.106.0`, they are not usable with the HTTP Request node. So we need to create a separate Generic Credential here.
:::

1. In n8n, create a new Header credential, name it “Grist”.
2. Set the “Name” field to “Authorization”.
3. In the “Value” field, enter “Bearer [your Grist API key]”.
4. Save the credential.

## Workflow Steps

The efficient approach involves 3 steps to batch all records into a single API request:

<div v-pre>

### Step 1: Edit Fields - Prepare Data Structure

Add an "Edit Fields" node to transform your data into the format required by the Grist API.

![Edit Fields configuration](https://im.dt.in.th/ipfs/bafybeig3bsbjo7ukcj2ntkgex3dcovt37rqonjthqbjm46t6ozcorvsmda/image.webp)

Use dotted property syntax to create nested objects. For example:

- `require.ticketId` → `{{ $json.ticketId }}`
- `fields.discordId` → `{{ $json.discordId }}`
- `fields.discordUsername` → `{{ $json.discordUsername }}`

This creates objects with the structure:

```json
{
  "require": { "ticketId": 8540677 },
  "fields": { "discordId": "104986860236877824", "discordUsername": "dtinth" }
}
```

### Step 2: Aggregate - Combine All Items

Add an "Aggregate" node to combine all individual items into a single array. See the [Aggregate node documentation](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.aggregate/) for details.

Configure the Aggregate node:

- **Aggregate**: All Item Data (Into a Single List)
- **Put Output in Field**: `data`
- **Include**: All Fields

### Step 3: HTTP Request - Batch Upsert

Add an "HTTP Request" node for the final API call.

![HTTP Request configuration](https://im.dt.in.th/ipfs/bafybeiebbpw5ec3scbloywtlhyasvecwq7czuzd47dlw5dxrkeduyttfne/image.webp)

Configure the HTTP Request:

1. **Method**: PUT
2. **URL**: `https://{instance}/api/docs/{docId}/tables/{tableId}/records`
3. **Authentication**: Generic Credential Type → Header Auth → “Grist”
4. **Send Body**: Enabled
5. **Body Content Type**: JSON
6. **Specify Body**: Using Fields Below
7. **Body Parameters**:
   - **Name**: `records`
   - **Value**: `{{ $json.data }}` (takes the aggregated array from the previous step)

The `records` parameter should contain the array of objects with `require` and `fields` keys:

- **require**: Fields used for matching existing records (for upsert logic)
- **fields**: Fields to update or create

</div>
