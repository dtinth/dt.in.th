---
public: true
title: Adding OpenTelemetry tracing to a Next.js app with Output File Tracing enabled
---

<div class="lead">

**POV:** You are building a [production-grade Next.js app](NextInProduction) with [Output File Tracing](https://nextjs.org/docs/advanced-features/output-file-tracing) enabled, and you wanted to add [OpenTelemetry](https://opentelemetry.io/) tracing to it.

</div>

You followed the [tutorial](https://opentelemetry.io/docs/instrumentation/js/getting-started/nodejs/) and found that it didn’t work, because the `tracing.js` file was not included in the output files. You copied the `tracing.js` file into the app folder, now it crashes because the dependencies were not included in the output files.

## Solution

The solution is to create a nested Node.js project inside the Next.js app.

```
.
├── node_modules/
├── package.json (Next.js)
├── pages/
├── …
└── tracing/
    ├── node_modules/
    ├── package.json (OTel)
    └── index.js
```

Install OpenTelemtetry dependencies in the `tracing` directory:

```sh
cd tracing
echo '{}' > package.json
npm install --save \
  @opentelemetry/sdk-node
  @opentelemetry/auto-instrumentations-node \
  @opentelemetry/exporter-trace-otlp-http
```

Resulting `package.json`:

```json
{
  "dependencies": {
    "@opentelemetry/auto-instrumentations-node": "^0.35.0",
    "@opentelemetry/exporter-trace-otlp-http": "^0.34.0",
    "@opentelemetry/sdk-node": "^0.34.0"
  }
}
```

Create `tracing/index.js`:

```js
const opentelemetry = require('@opentelemetry/sdk-node')
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http')
const {
  getNodeAutoInstrumentations,
} = require('@opentelemetry/auto-instrumentations-node')

const sdk = new opentelemetry.NodeSDK({
  traceExporter: new OTLPTraceExporter(),
  instrumentations: [getNodeAutoInstrumentations()],
})

sdk.start().then(() => {
  console.log('Tracing SDK started successfully')
})
```

After building the Next.js app, **copy the `tracing` directory (along with its `node_modules`) into the output directory.**
