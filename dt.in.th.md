---
parents: [projects]
title: dt.in.th
created: 2005-10-15T16:00:00.000Z
updated: 2020-09-16T00:00:00.000Z
description: Thai Pangsakulyanont’s website where he documents the stuffs he made.
featured: false
tags:
  - Project
---

My website where I document about the stuff that I made.

It is this website that you are already looking at.

## History

Taking a trip down the memory lane.

### 2005

I first [created my personal website](https://web.archive.org/web/20060417193928/http://dttvb.yi.org/) in 2005 (12yo) on a domain `dttvb.yi.org`, programmed using PHP and MySQL. Although I lost the source code already, I programmed the website to [publish](https://web.archive.org/web/20060523215042/http://dttvb.yi.org/src/home.php?showsource=1) [its](https://web.archive.org/web/20060523214938/http://dttvb.yi.org/?showsource_header=1) [own](https://web.archive.org/web/20060523214923/http://dttvb.yi.org/?showsource_footer=1) [source](https://web.archive.org/web/20060523214621/http://dttvb.yi.org/?showsource_common_one=1) [code](https://web.archive.org/web/20060523214830/http://dttvb.yi.org/script.js). It ran on my personal computer at home.

### 2006

The website has been redesigned into a [blog](https://web.archive.org/web/20070214084821/http://dttvb.yi.org:80/), still self-coded.

### 2007

I [moved](https://web.archive.org/web/20071213194403/http://dt.in.th:80/) my website to a new domain of my own, `dt.in.th`.

### 2009

An online friend bought me a domain, `dttvb.com`, as a new year present. As a courtesy, I [moved](https://web.archive.org/web/20090420144553/http://dt.in.th/) my blog to that domain. Google [launched Google App Engine](http://googleappengine.blogspot.com/2008/04/introducing-google-app-engine-our-new.html) a year before, so I created a blog engine using Google App Engine.

Later on, the domain expired and the buyer didn’t renew the domain for me. I could not contact him either as he no longer responds to my message after the domain expired.

I installed WordPress, created my own theme, and [moved](https://web.archive.org/web/20100422200600/http://blog.dt.in.th:80/) my blog to a subdomain `blog.dt.in.th`, while dt.in.th [became a portal](https://web.archive.org/web/20111231021608/http://dt.in.th:80/) to my other domains.

### 2011

My blog at `blog.dt.in.th` went down. I learned Ruby on Rails, followed its blog tutorial, deployed it to Heroku, turned it into an actual blog, and [moved](https://web.archive.org/web/20120122142022/http://me.dt.in.th:80/) to a new domain `me.dt.in.th`.

### 2012

Hosting my blog on a free Heroku instance means that entering the site for the first time can be very slow (due to cold start). Also, static site generators became ever more popular. So, I created my own static site generator using Node.js and [migrated](https://web.archive.org/web/20120712155827/http://me.dt.in.th:80/) the blog to run on GitHub Pages instead.

Now that I created a lot of projects, I made `dt.in.th` into a [small webpage](https://web.archive.org/web/20120629123821/http://dt.in.th:80/) with basic info, linking to my significant projects, a little resume of sorts, but it hardly ever gets updated. It is a basic HTML/CSS webpage generated using Jade language (which is now called [Pug](https://pugjs.org/api/getting-started.html)).

### 2013

Tired of having to run scripts to publish changes to the blog, I [migrated](https://me.dt.in.th/) one last time to Jekyll where it powers my old blog until today.

### 2014

I [started writing on Medium](https://medium.com/@dtinth) instead and left the old blog.

### 2018

In addition to making software and writing blog posts, I also start giving more talks and compose music occasionally. So I wanted a catalog where I can refer back to it.

React-based static sites becomes more mainstream. I [created](https://github.com/dtinth/dt.in.th/tree/before-gatsby) my own static site generator where React is only used to render the HTML pages during build time, with no React in the client-side.

### 2019

Tired of having to maintain my custom static site generator, I [migrated](https://github.com/dtinth/dt.in.th/pull/3) the website to use [Gatsby](https://www.gatsbyjs.org/).

### 2020

Things that I made are scattered everywhere. Apart from my talks and songs which are now linked from `dt.in.th`, my code projects are on [GitHub repos](https://github.com/dtinth) under multiple different organizations, various [Glitch projects](https://glitch.com/@dtinth), [Codepen](https://codepen.io/dtinth), [CodeSandbox](https://codesandbox.io/u/dtinth) (and more). Writings are on [Medium](https://medium.com/@dtinth), [Dev.to](https://dev.to/dtinth/), [wonderful.software](https://wonderful.software), [my old blog](https://me.dt.in.th/), and sometimes I post some popular content on Facebook.

That was a lot of stuff! And I didn’t have a catalog for them! Instead of having separate catalogs for my code projects, writings, songs, talks, videos, etc. I decided to create one single collection of stuffs that I want to share. This is also a way I can give each thing I made a homepage about it.

I wanted to focus more on _content_ rather than _maintaining the content infrastructure_, so I [switched](https://github.com/dtinth/dt.in.th/pull/19) the website to use [VuePress](https://vuepress.vuejs.org/).
