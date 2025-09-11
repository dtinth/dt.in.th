---
public: true
title: Analyzing and optimizing Next.js bundle size
---

# Analyzing Next.js bundle size

<div class="lead">

When building a [production-grade Next.js app](NextInProduction),\*\* you may eventually run into problems with large bundle size:

</div>

![](https://user-images.githubusercontent.com/193136/194515122-7777ec2b-36d1-489a-bc5a-f2c4364e4177.png)

## Easy case — direct dependencies

The first thing to do is to use [`@next/bundle-analyzer`](https://www.npmjs.com/package/@next/bundle-analyzer) to analyze the bundle size.

This can generate a report that looks like this:

![](https://static.dt.in.th/uploads/2022/12/13/obv.jpeg)

In this case, it is obvious what is going on. We are importing the whole Font Awesome library, which is huge. We can easily optimize this by importing just the icons we need.

```diff
-import { far } from '@fortawesome/pro-regular-svg-icons'
+import { faEnvelope } from '@fortawesome/pro-regular-svg-icons/faEnvelope'
```

## Complicated case — transitive dependencies

This is where official help from Next.js framework ended.

But things can still get more complicated when the bundle size is large, not because of direct dependencies, but because of **dependencies of dependencies** _(transitive dependencies)._

![](https://static.dt.in.th/uploads/2022/12/13/transitive.jpeg)

In the example above, it seems like **an HTML5 parser** and the **[cheerio](https://www.npmjs.com/package/cheerio)** library is included in the bundle. _But why?_ We are not doing any HTML parsing in our app, so it must be one of our dependencies that we use that pulls in these libraries.

The [`@next/bundle-analyzer`](https://www.npmjs.com/package/@next/bundle-analyzer) plugin shows the size of each module, but **it does not tell us why that module is included in the bundle in the first place.** To find that out, we need more information about the build process.

### Generating a stats file

Under the hood, `@next/bundle-analyzer` uses [`webpack-bundle-analyzer`](https://www.npmjs.com/package/webpack-bundle-analyzer) to generate the report. We can use _that_ to generate a stats file that shows the **reasons** why each module is included in the bundle by passing the [`generateStatsFile`](https://www.npmjs.com/package/webpack-bundle-analyzer#:~:text=in%20default%20browser.-,generateStatsFile,-%7BBoolean%7D) option.

However, `@next/bundle-analyzer` [has hardcoded the options passed to `webpack-bundle-analyzer`](https://github.com/vercel/next.js/blob/04c2509daaa6ceae7882598b933f9580ca874517/packages/next-bundle-analyzer/index.js#L9-L17), so turning that option on requires some hackery.

Edit `node_modules/@next/bundle-analyzer/index.js` and add the `generateStatsFile` option to the `webpack-bundle-analyzer` options:

```diff
           config.plugins.push(
             new BundleAnalyzerPlugin({
+              generateStatsFile: true,
               analyzerMode: 'static',
               openAnalyzer,
               reportFilename: options.isServer
                 ? '../analyze/server.html'
                 : './analyze/client.html',
             })
           )
```

Build the app again. This time, the console should now show the path to the stats file:

```
Webpack Bundle Analyzer saved report to /.../.next/analyze/client.html
Webpack Bundle Analyzer saved stats file to /.../.next/stats.json
```

### Exploring the stats file

The stats file is a JSON file that contains a lot of information about the build process. Fortunately, the webpack project provides the [**analyze**](https://webpack.github.io/analyse/) tool to help us explore it.

When you open the stats file in the analyze tool, and click on the **Modules** tab.

![](https://static.dt.in.th/uploads/2022/12/13/analyze-home.jpeg)

You will see module graph, and a table of modules.

![](https://static.dt.in.th/uploads/2022/12/13/analyze-modules.jpeg)

### Finding the culprit

Search for the module you want to find. In this case, we are looking for `cheerio`. Once you find it, click on the module ID to inspect it. Also take note of the ID, it will become useful later (in this case, 848).

![](https://static.dt.in.th/uploads/2022/12/13/analyze-find.jpeg)

The module graph will update to highlight the selected module.

![](https://static.dt.in.th/uploads/2022/12/13/analyze-mod.jpeg)

Scroll your mouse wheel to zoom in and out.

![](https://static.dt.in.th/uploads/2022/12/13/analyze-mod-graph.jpeg)

- The module being inspected is highlighted in **black**.
- The modules that depend on the module (‘reasons’) are highlighted in **red**.
- The dependencies of the module are highlighted in **green**.

The same information can be seen below the graph in the **reasons** and **dependencies** sections.

![](https://static.dt.in.th/uploads/2022/12/13/analyze-mod-table.jpeg)

**Keep following the reasons** until you find the culprit in your code.

![](https://static.dt.in.th/uploads/2022/12/13/analyze-trail.jpeg)

In our case,

- We have a module `./src/utils/Helper.ts` which is a collection of helper functions.
- One of the helper function imports `juice`, which imports `cheerio`, which imports `htmlparser2`. This helper function is only used in the server-side code.
- However, many client-side modules also imports `./src/utils/Helper.ts`, which caused juice, along with its dependencies, to be included in the client-side bundle.

So the solution to optimize the bundle size in this scenario is to separate the `Helpers` module into two, one for the server and one for the client.
