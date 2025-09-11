---
public: true
title: Increasing Node.js heap size (memory limit)
---

When working on [Node.js](Nodejs) projects, you may encounter the error that start with `<--- Last few GCs --->` and then followed by _“FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory.”_ This is a sign that the Node.js process is running out of memory. The default memory limit is 1.5GB, which is not enough for some projects.

To increase the memory limit, you can use the `--max-old-space-size` flag. One way to set this flag is to add it to the `NODE_OPTIONS` environment variable:

```sh
export NODE_OPTIONS="--max-old-space-size=4096"
```

```
<--- Last few GCs --->

[2740:0x650ced0]    90003 ms: Mark-sweep (reduce) 997.1 (1009.8) -> 996.9 (1009.8) MB, 2093.6 / 0.0 ms  (average mu = 0.146, current mu = 0.003) last resort GC in old space requested
[2740:0x650ced0]    92058 ms: Mark-sweep (reduce) 996.9 (1008.8) -> 996.9 (1009.8) MB, 2054.6 / 0.0 ms  (average mu = 0.084, current mu = 0.000) last resort GC in old space requested


<--- JS stacktrace --->

FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory
 1: 0xa3ac10 node::Abort() [node]
 2: 0x970199 node::FatalError(char const*, char const*) [node]
 3: 0xbba58e v8::Utils::ReportOOMFailure(v8::internal::Isolate*, char const*, bool) [node]
 4: 0xbba907 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, bool) [node]
 5: 0xd76b25  [node]
 6: 0xd89141 v8::internal::Heap::AllocateRawWithRetryOrFailSlowPath(int, v8::internal::AllocationType, v8::internal::AllocationOrigin, v8::internal::AllocationAlignment) [node]
 7: 0xd4e87d v8::internal::Factory::AllocateRaw(int, v8::internal::AllocationType, v8::internal::AllocationAlignment) [node]
 8: 0xd48704 v8::internal::FactoryBase<v8::internal::Factory>::AllocateRawWithImmortalMap(int, v8::internal::AllocationType, v8::internal::Map, v8::internal::AllocationAlignment) [node]
 9: 0xd4a710 v8::internal::FactoryBase<v8::internal::Factory>::NewRawOneByteString(int, v8::internal::AllocationType) [node]
10: 0xe6b2fd v8::internal::JsonParser<unsigned char>::MakeString(v8::internal::JsonString const&, v8::internal::Handle<v8::internal::String>) [node]
11: 0xe6d87d v8::internal::JsonParser<unsigned char>::ParseJsonValue() [node]
12: 0xe6e06f v8::internal::JsonParser<unsigned char>::ParseJson() [node]
13: 0xc66478  [node]
14: 0xc66a26 v8::internal::Builtin_JsonParse(int, unsigned long*, v8::internal::Isolate*) [node]
15: 0x1449039  [node]
Aborted (core dumped)
error Command failed with exit code 134.
```
