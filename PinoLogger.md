---
public: true
---

A logger module based on [pino](Pino)… Usually I put this in `src/packlets/logger/index.ts`

```ts
import pino from 'pino'
import pretty from 'pino-pretty'

// This `require.resolve()` call is there for Next.js to be able to
// add the `package.json` file into the build output.
// This allows OpenTelemetry SDK to be able to correctly infer pino’s version.
require.resolve('pino/package.json')

const rootLogger = pino(
  {
    serializers: {
      req: pino.stdSerializers.req,
      res: pino.stdSerializers.res,
      err: pino.stdSerializers.err,
    },
  },
  process.env.NODE_ENV === 'production'
    ? pino.destination(1)
    : pretty({ translateTime: 'SYS:standard' })
)

/**
 * Create a logger
 *
 * @param name - The name of the logger
 */
export function createLogger(name: string) {
  return rootLogger.child({ name })
}
```

The first version of this module was taken from [`bemusic/scoreboard-next`](https://github.com/bemusic/scoreboard-next/blob/main/src/packlets/logger/index.ts) project.
