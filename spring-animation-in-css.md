---
parents: [talks, projects]
title: 'CSS Spring Animation Using Physics and Calculus'
created: 2015-11-22T00:00:00.000Z
updated: 2015-11-22T00:00:00.000Z
description: A talk about how I implemented a realistic spring-type animation using basic knowledge of physics and calculus.
---

Where design, programming, physics and calculus meet.

<style>
@keyframes wobble {
  0% {
            transform: scale(0, 0);
  }
  1% {
            transform: scale(0.086484529651881, 0.179427456557767);
  }
  2% {
            transform: scale(0.292554252432152, 0.545376716848168);
  }
  3% {
            transform: scale(0.545376716848168, 0.894404964543183);
  }
  4% {
            transform: scale(0.788551391390369, 1.120376016086594);
  }
  5% {
            transform: scale(0.985835941661639, 1.205153326404069);
  }
  6% {
            transform: scale(1.120376016086594, 1.184807461549862);
  }
  7% {
            transform: scale(1.191045818185745, 1.113400777234015);
  }
  8% {
            transform: scale(1.207445230574602, 1.037247338712057);
  }
  9% {
            transform: scale(1.184807461549862, 0.983312126349848);
  }
  10% {
            transform: scale(1.139672272493081, 0.959151493096828);
  }
  11% {
            transform: scale(1.086773838727188, 0.959207005548428);
  }
  12% {
            transform: scale(1.037247338712057, 0.972534530793938);
  }
  13% {
            transform: scale(0.998010256157525, 0.98880159678671);
  }
  14% {
            transform: scale(0.972031419546276, 1.001379435012348);
  }
  15% {
            transform: scale(0.959151493096828, 1.00783265522376);
  }
  16% {
            transform: scale(0.957140100254271, 1.008821093113781);
  }
  17% {
            transform: scale(0.96274018852263, 1.006488198218788);
  }
  18% {
            transform: scale(0.972534530793938, 1.003092956925791);
  }
  19% {
            transform: scale(0.983552526255917, 1.000221414749495);
  }
  20% {
            transform: scale(0.993604544681563, 0.998573305048547);
  }
  21% {
            transform: scale(1.001379435012348, 0.998133854506318);
  }
  22% {
            transform: scale(1.006367469874671, 0.998500975623806);
  }
  23% {
            transform: scale(1.00867876840649, 0.999191084459488);
  }
  24% {
            transform: scale(1.008821093113781, 0.999833501948367);
  }
  25% {
            transform: scale(1.007486437375814, 1.000240340703161);
  }
  26% {
            transform: scale(1.005378103626964, 1.000385276149533);
  }
  27% {
            transform: scale(1.003092956925791, 1.000339232175458);
  }
  28% {
            transform: scale(1.001059752569101, 1.000203385122328);
  }
  29% {
            transform: scale(0.999525049489696, 1.000062534362191);
  }
  30% {
            transform: scale(0.998573305048547, 0.999964849826148);
  }
  31% {
            transform: scale(0.998166624576185, 0.999922697095762);
  }
  32% {
            transform: scale(0.998191241770966, 0.999924761163581);
  }
  33% {
            transform: scale(0.998500975623806, 0.999950419122189);
  }
  34% {
            transform: scale(0.998951615476555, 0.999980662109647);
  }
  35% {
            transform: scale(0.99942365059167, 1.000003563281379);
  }
  36% {
            transform: scale(0.999833501948367, 1.000014970213524);
  }
  37% {
            transform: scale(1.000135225951195, 1.000016350718153);
  }
  38% {
            transform: scale(1.00031555507819, 1.000011778605271);
  }
  39% {
            transform: scale(1.000385276149533, 1.000005429970832);
  }
  40% {
            transform: scale(1.00036955135608, 1.000000175788403);
  }
  41% {
            transform: scale(1.000299099745054, 0.999997234930038);
  }
  42% {
            transform: scale(1.000203385122328, 0.999996522266158);
  }
  43% {
            transform: scale(1.000106253265117, 0.999997264764804);
  }
  44% {
            transform: scale(1.000023918238932, 0.999998563845857);
  }
  45% {
            transform: scale(0.999964849826148, 0.999999744931904);
  }
  46% {
            transform: scale(0.999930953553718, 1.000000476269022);
  }
  47% {
            transform: scale(0.999919425875407, 1.000000722388812);
  }
  48% {
            transform: scale(0.999924761163581, 1.000000621989317);
  }
  49% {
            transform: scale(0.999940535092441, 1.000000364142579);
  }
  50% {
            transform: scale(0.99996074901389, 1.000000103935755);
  }
  51% {
            transform: scale(0.999980662109647, 0.999999927251821);
  }
  52% {
            transform: scale(0.999997145282538, 0.999999853998891);
  }
  53% {
            transform: scale(1.000008657088084, 0.999999861387962);
  }
  54% {
            transform: scale(1.000014970213524, 0.999999910625746);
  }
  55% {
            transform: scale(1.000016775086596, 0.999999966780841);
  }
  56% {
            transform: scale(1.000015265384358, 1.000000008427682);
  }
  57% {
            transform: scale(1.000011778605271, 1.000000028536839);
  }
  58% {
            transform: scale(1.000007531821609, 1.000000030270993);
  }
  59% {
            transform: scale(1.000003464072008, 1.000000021355454);
  }
  60% {
            transform: scale(1.000000175788403, 1.000000009501385);
  }
  61% {
            transform: scale(0.999997943086903, 0.99999999989862);
  }
  62% {
            transform: scale(0.999996779924779, 0.999999994661554);
  }
  63% {
            transform: scale(0.999996522266158, 0.999999993527534);
  }
  64% {
            transform: scale(0.999996913355979, 0.999999995014962);
  }
  65% {
            transform: scale(0.999997675912265, 0.999999997456225);
  }
  66% {
            transform: scale(0.999998563845857, 0.999999999625199);
  }
  67% {
            transform: scale(0.999999391872285, 1.000000000937729);
  }
  68% {
            transform: scale(1.000000045503658, 1.000000001352395);
  }
  69% {
            transform: scale(1.000000476269022, 1.000000001139136);
  }
  70% {
            transform: scale(1.000000687807928, 1.000000000650779);
  }
  71% {
            transform: scale(1.000000718100621, 1.000000000170632);
  }
  72% {
            transform: scale(1.000000621989317, 0.999999999851502);
  }
  73% {
            transform: scale(1.000000456728239, 0.999999999724764);
  }
  74% {
            transform: scale(1.00000027190648, 0.999999999744926);
  }
  75% {
            transform: scale(1.000000103935755, 0.999999999839136);
  }
  76% {
            transform: scale(0.999999974491714, 0.999999999943276);
  }
  77% {
            transform: scale(0.999999891858109, 1.000000000018919);
  }
  78% {
            transform: scale(0.999999853998891, 1.000000000054265);
  }
  79% {
            transform: scale(0.999999852290513, 1.000000000055976);
  }
  80% {
            transform: scale(0.999999875091735, 1.000000000038668);
  }
  81% {
            transform: scale(0.999999910625746, 1.000000000016565);
  }
  82% {
            transform: scale(0.999999948934096, 0.999999999999035);
  }
  83% {
            transform: scale(0.999999982891666, 0.999999999989729);
  }
  84% {
            transform: scale(1.000000008427682, 0.999999999987969);
  }
  85% {
            transform: scale(1.000000024178711, 0.999999999990925);
  }
  86% {
            transform: scale(1.000000030817137, 0.999999999995506);
  }
  87% {
            transform: scale(1.000000030270993, 0.999999999999484);
  }
  88% {
            transform: scale(1.000000024997425, 1.000000000001836);
  }
  89% {
            transform: scale(1.000000017409911, 1.000000000002528);
  }
  90% {
            transform: scale(1.000000009501385, 1.000000000002084);
  }
  91% {
            transform: scale(1.000000002659794, 1.000000000001161);
  }
  92% {
            transform: scale(0.999999997642536, 1.000000000000276);
  }
  93% {
            transform: scale(0.999999994661554, 0.9999999999997);
  }
  94% {
            transform: scale(0.999999993528801, 0.999999999999482);
  }
  95% {
            transform: scale(0.999999993818591, 0.999999999999531);
  }
  96% {
            transform: scale(0.999999995014962, 0.999999999999711);
  }
  97% {
            transform: scale(0.999999996625079, 0.999999999999904);
  }
  98% {
            transform: scale(0.999999998251508, 1.000000000000041);
  }
  99% {
            transform: scale(0.999999999625199, 1.000000000000103);
  }
  100% {
            transform: scale(1.000000000606774, 1.000000000000103);
  }
}
</style>

<div style="animation: 3s wobble">

In this talk and project, I implemented a realistic spring-type animation using basic knowledge of physics and calculus. I talk about this because many software engineering students wonder if they’ll ever use the knowledge learn from the required Calculus and Physics course in their life. I want to show that knowledge allows you to be more creative.

Presented at [BarCamp Bangkhen 6](http://2015.barcampbangkhen.org/).

</div>

<call-to-action href="https://medium.com/@dtinth/spring-animation-in-css-2039de6e1a03">
  Writeup
</call-to-action>

<call-to-action href="https://codepen.io/dtinth/pen/jbXKRv">
  Demo
</call-to-action>
