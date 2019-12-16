const fetch = require('node-fetch')
const tkt = require('tkt')

require('tkt')
  .cli()
  .command(
    'embed-tweet <url>',
    'Generate a code to embed a Tweet',
    {
      url: { type: 'string' },
    },
    async args => {
      const html = await fetch(
        'https://publish.twitter.com/oembed?omit_script=1&url=' +
          encodeURIComponent(args.url),
      )
        .then(r => r.json())
        .then(b => b.html)
      console.log(
        html.replace(
          /class="twitter-tweet"/,
          'class="twitter-tweet tw-align-center" data-theme="dark"',
        ),
      )
    },
  )
  .parse()
