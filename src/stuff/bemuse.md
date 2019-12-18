---
id: bemuse
title: Bemuse
created: 2013-12-10T14:41:31.000Z
updated: 2019-10-04T17:37:35.000Z
description: 'A free and open source, online, web-based rhythm action game.'
featured: true
tags:
  - Project
---

A free and open source, web-based online rhythm action game.

Started in 2015, it is built based on modern HTML5 technology and libraries such as React and Pixi.js.

`youtube: https://youtu.be/lGw6VMkDWCA`

<call-to-action href="https://bemuse.ninja">
  Play the game
</call-to-action>

I built this game as a playground in applying software engineering principles and practices.
It is also my [graduation project](https://gist.github.com/dtinth/0b633afa89a2a070647d).
The project is open source, and has automated tests as well as a CI/CD pipeline around it.

<call-to-action href="https://github.com/bemusic/bemuse">
  Source code on GitHub
</call-to-action>

The gameplay is heavily inspired and influenced by Lunatic Rave 2, beatmaniaIIDX, and O2Jam. It is **key sounded**, meaning that each individual note gets its own sound. The song will sound off if you did not hit the notes correctly.

I created this project because most PC rhythm games only work on Windows, and I use a Mac. I originally designed this project for desktops and iPads, but being web based, the game could be made to work on more devices as mobile devices become more powerful over time, bringing a truly cross platform experience.

In 2018, a **3D mode** is added, and the game can be enjoyed in mobile phones.

`youtube: https://youtu.be/rM1Rhk48iKE`

**Party mode** lets multiple people play Bemuse together.

`youtube: https://youtu.be/hiJzFRIhiiA`

As of 2019, Bemuse has over **15,000 monthly active players.**

![](/uploads/bemuse-google-analytics-2019.png)

## Development

### Software engineering

The first few weeks of development consists solely of setting up the project: webpack with loaders for [Jade](https://www.npmjs.com/package/jade), [SCSS](https://github.com/sass/node-sass), and [6to5](https://www.npmjs.com/package/6to5) (now [Babel](https://babeljs.io)). [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server), [JSHint](https://jshint.com/), [JSCS](https://jscs-dev.github.io/), [Jasmine](https://jasmine.github.io/), [Istanbul](https://istanbul.js.org/), [Code Climate](https://codeclimate.com/), [Travis CI](https://travis-ci.org/), among others.

Developing software in an **Agile** way entails taking to heart that _“Working software is the primary measure of progress.”_
Within a month, I deployed a [teaser page](https://bemuse.ninja/?mode=comingSoon) with a technical demo, which proves that a rhythm game can indeed be built with current browser technology.

**Software engineering** for me is about _striking a healthy balance between building the right thing and building it right._
Although I want to ship things fast, I want to do it on top of a sound foundation.

Here are some technical choices that I felt very happy about when I look back:

- Setting up **linting tools** from the start with pre-commit hooks and [an automated code review bot](https://github.com/bemusic/bemuse/pull/51).

- Using **test-driven development** for the game logic. As far as I remember, it never broke. Without the tests I wouldn’t dare [replacing Ramda with Lodash](https://github.com/bemusic/bemuse/pull/164/commits/d82dc51864b1cabe8ea9dd4e0afd314ba7b778d1) in one go. You can [even run the unit tests online][unit-tests]. A Japanese player once [reviewed](https://w.atwiki.jp/laser_bm/pages/95.html) the game and said that <i>“beta 版だが結構安定している。” (although the game is in beta, it is quite stable)</i>.

- Setting up the app to allow **multiple entry points**.
  This lets me create pages to [test components in isolation](https://bemuse.ninja/?mode=playground) before Storybook existed,
  and also keep the [teaser page](https://bemuse.ninja/?mode=comingSoon) and as well as our [unit tests][unit-tests] online.

- Not using too many **webpack plugins**. This made upgrading to newer versions of webpack relatively painless.

- Not using **ES features lower than stage 2** or **custom Babel plugins**. This gave a lot of interoperability with tools that were not based on Babel, and also eased the transition to TypeScript compiler later on.

- Using **clean architecture** and separating the core logic away from UI frameworks and libraries.
  This allowed me to [replace Vue.js (v0.11) with Ractive (v0.7)](https://github.com/bemusic/bemuse/pull/164/commits/b8c345c2101fc3c269872e80f6bc057a687ad869) and subsequently [replace Ractive with React (v0.13)](https://github.com/bemusic/bemuse/pull/166).

### Experiment with confidence and explore with safety

**Clean architecture** and **tests** enable me to **experiment with new things.**
I can try out new (and perhaps not-so-mainstream) libraries and tools (such as webpack (at the time), Ramda, Ractive, and Bacon.js).

If they worked out well, then I could keep them (webpack being one example).
Otherwise, if situation calls, I could switch to more [boring](http://boringtechnology.club/), stable, tried-and-true solutions (such as Lodash, React, and Redux) at a relatively low cost.

It allowed me to update the project to use new tools and follow the general direction of JavaScript community:

- For **UI library** I initially used [Vue (v0.11)](https://vuejs.org/), then [migrated](https://github.com/bemusic/bemuse/pull/164/commits/b8c345c2101fc3c269872e80f6bc057a687ad869) to [Ractive (v0.7)](https://ractive.js.org/), then [migrated again](https://github.com/bemusic/bemuse/pull/166) to [React](https://reactjs.org/).

- The **project documentation** used to reside directly on GitHub, then [moved](https://github.com/bemusic/bemuse/commit/b0749ae87708da0f6aadd5cd453cf60fb6f9d664) to [Viewdocs](http://progrium.viewdocs.io/viewdocs/), [then](https://github.com/bemusic/bemuse/pull/122) to [Read the Docs](https://readthedocs.org/),
  and [then](https://github.com/bemusic/bemuse/pull/479) with help from [Resi Respati](https://github.com/resir014), to [Docusaurus](https://docusaurus.io/).

- For **testing framework** I initially used [Jasmine](https://jasmine.github.io/), then [moved](https://github.com/bemusic/bemuse/commit/b7926878d3a27f4bee04aca1d176798f451d7526) to [Mocha](https://mochajs.org/) due to Jasmine’s lack of support for Promises at the time despite Promises becoming mainstream already.

- For **testing library** I initially used [expectations](https://www.npmjs.com/package/expectations) (because Jasmine), and then later on [migrated](https://github.com/bemusic/bemuse/commit/c4dde9d549b1d11d3b048e31c30dbb27618e3300) to [Chai](http://chaijs.com/).

- For **test runner** I started with plain Mocha running in the browser.
  I created my own [test runner](https://github.com/bemusic/bemuse/blob/46831e7bb864a545998d0320f4c455e3aec46470/tasks/support/test-runner/index.js) script that [fires up a browser](https://github.com/bemusic/bemuse/blob/46831e7bb864a545998d0320f4c455e3aec46470/tasks/support/test-runner/browser.js), navigates to the test page, and then [collects](https://github.com/bemusic/bemuse/blob/46831e7bb864a545998d0320f4c455e3aec46470/tasks/support/test-runner/server.js) the test result.
  It then gets replaced with [Karma](https://github.com/bemusic/bemuse/commit/4df73187006b00099f96f9102b8d91a27776ed27) once it has a [perfect webpack support](https://github.com/webpack-contrib/karma-webpack).
  I did not migrate to [Jest](https://jestjs.io/) because our tests required access to browser’s APIs such as canvas.

- For **continuous integration** I initially used [Travis CI](https://travis-ci.org/). But since there are many CI services in the market, I [commenced](https://github.com/bemusic/bemuse/pull/69) a CI war and also added [CircleCI](http://circleci.com/), [AppVeyor](https://www.appveyor.com/) and [Codeship](https://codeship.com/). In the end [CircleCI wins](https://github.com/bemusic/bemuse/pull/516).

- For **Promise utilities**, I initially tried out [prfun](https://www.npmjs.com/package/prfun) and later [replaced](https://github.com/bemusic/bemuse/pull/86) it with [Bluebird](http://bluebirdjs.com/) which was more popular.

- For **code quality management** I initially used [Code Climate](https://codeclimate.com/), then stopped using it due to subpar support for JavaScript, replacing it with [Coveralls](https://github.com/bemusic/bemuse/commit/b23399ec9f009f741c28a8c82b12e568cf6389fa), and [then](https://github.com/bemusic/bemuse/commit/42e9fb1743f679510d81254a69e07c40b50a9906) with [Codecov](https://codecov.io/gh/bemusic/bemuse), before [coming back to Code Climate](https://codeclimate.com/github/bemusic/bemuse) after it improved support for JavaScript and TypeScript. I also threw in [SonarCloud](https://github.com/bemusic/bemuse/commit/110b8752f9f909238f86561aa979070b49c3f8bc) after SonarQube gets a nice TypeScript support.

- For **source code transpilation** I initially used [6to5](https://www.npmjs.com/package/6to5) which is later [renamed](https://github.com/bemusic/bemuse/commit/97157628d0ee31c47de444b20f4714682f12b7b6) to [Babel](https://babeljs.io). Getting tired of having to configure the plugins and presets and setting up regenerator, I [replaced](https://github.com/bemusic/bemuse/pull/512) Babel with [TypeScript](http://www.typescriptlang.org/) compiler. One `tsconfig.json` file to rule ’em all!

- For **code coverage instrumentation** I initially used [Istanbul](https://istanbul.js.org/) but its lack of ES6 support at the time made me [switch](https://github.com/bemusic/bemuse/pull/115) to [Isparta](https://www.npmjs.com/package/isparta), which has some issues and that [led](https://github.com/dtinth/babel-plugin-__coverage__#theres-already-isparta-why-another-coverage-tool) me to create [`babel-plugin-__coverage__`](https://github.com/dtinth/babel-plugin-__coverage__) for [use](https://github.com/bemusic/bemuse/pull/224) in Bemuse. That Babel plugin later got [incorporated](https://github.com/dtinth/babel-plugin-__coverage__/issues/42) into a new major version of [Istanbul](https://istanbul.js.org/) to which I [migrated](https://github.com/bemusic/bemuse/pull/360) the project to once again.

- For **linting** I initially used [JSHint](https://jshint.com/) then later [replaced](https://github.com/bemusic/bemuse/pull/126) with [ESLint](https://eslint.org/). Extra linting is done with TypeScript Compiler’s `strict` mode, SonarCloud and Code Climate.

- For **code formatting** I initially used [JSCS](https://jshint.com/) then later [replaced](https://github.com/bemusic/bemuse/pull/126) with [ESLint](https://eslint.org/), and [subsequently](https://github.com/bemusic/bemuse/pull/513) with [Prettier](https://prettier.io/).

Having a system for automated tests in place also allowed me to implement support for new file format [in a single night](https://twitter.com/bemusegame/status/634020332093837312).

<twitter-embed>
  <p lang="en" dir="ltr"><a href="https://twitter.com/wosderge?ref_src=twsrc%5Etfw">@wosderge</a> Thanks to unit tests. It saved a lot of manual testing time. <a href="https://t.co/Gkqf3mMfql">https://t.co/Gkqf3mMfql</a> <a href="http://t.co/WUUw1eWjl4">pic.twitter.com/WUUw1eWjl4</a></p>&mdash; Bemuse · flicknote は JSConf.jp に行きます (@bemusegame) <a href="https://twitter.com/bemusegame/status/634204792433197056?ref_src=twsrc%5Etfw">August 20, 2015</a>
</twitter-embed>

### Music

Bemuse plays song files in **[Be-Music Source](https://en.wikipedia.org/wiki/Be-Music_Source) `.bms` file format.**
It is the same format used in Lunatic Rave 2 and others, and has a thriving community around it where ‘BMS artists’ collectively publish hundreds of original songs [every year](https://hitkey.nekokan.dyndns.info/bmsevt.htm#ALL).

Most playable songs in the game, I reached out to BMS artists and asked for permission to use them in the game.
Most artists are happy to allow me to use their songs for free, given that Bemuse is also a free game.

The background music for the game screens, as well as some playable songs, I composed myself.

- Tutorial song: [BY☆MY☆SIDE](/music/by-my-side/)
- Music selection song: [BY☆MY☆SIDE (Ambient House Mix)](/music/by-my-side-ambient-house-mix/)
- Delay calibration song: [AUTO±SYNCHRO](/music/auto-synchro/)

[unit-tests]: https://bemuse.ninja/?mode=test&grep=game
