---
title: 'An Easy to Understand Visual Guide for JavaScript- Promise.all,
  Promise.race, Promise.allSettled, Promise.any '
author: Yick Chan (Ian)
thumbnail: /assets/promise-pinkies.png
thumbnail_description: Keeping our Promises simple and easy to understand
date: 2021-03-13T15:00:08.104Z
edited_date: ''
description: JavaScript's Promise- Two more new methods .any(ES2021) and
  .allSettled(ES2020) had joined, let’s debunk their key features, and show how
  to use them.
categories:
  - JavaScript
tags:
  - Web development
  - JavaScript
  - Asynchronous
  - Promise
  - ES5
  - ES2020
  - ES2021
---

## Introduction

The advent of Promise to JavaScript in ES6 has bought significant benefits to developers, notably taking away the pain of handling [callback hells](https://www.freecodecamp.org/news/how-to-deal-with-nested-callbacks-and-avoid-callback-hell-1bc8dc4a2012/), and making [asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing) easier to use and reason about for new developers. Also, it came with two very handy methods `Promise.all` and `Promise.race` if you are trying to carry out multiple asynchronous actions at the same time.

And as the language evolves, two additional methods had been added `Promise.allSettled` (ES2020) and `Promise.any` (ES2021) for handling simultaneous multiple asynchronous actions under different conditions. They are compatible in many modern browsers [`Promise.all`](https://caniuse.com/mdn-javascript_builtins_promise_all), [`Promise.race`](https://caniuse.com/mdn-javascript_builtins_promise_race), [`Promise.allSettled`](https://caniuse.com/mdn-javascript_builtins_promise_allsettled), [`Promise.any`](https://caniuse.com/mdn-javascript_builtins_promise_any).

However, with so many variants now available, confusions may arise for many developers as to which one would be best for their applications. To alleviate these confusions, this article highlights the key features of these variants and discuss their differences, so as to help developers to make the right choice.

In aim of this the article is going to:

- Explain the key features and the differences between these four methods
- How to pick the right method for your situation

## TL;DR

**Settled** in the context of `Promise` means that it is **not** in the pending state and could be either `rejected` or `fulfilled`.

All four methods

- take an iterable of promises as an input
- return a single promise

However, the results are in slightly different form:

`Promise.all` (Short Circuit) -> an array of values from all resolved promises or (Short Circuited) one single value from the first rejected promise.

`Promise.race` (Short Circuit) -> (Short Circuited) a single value from the first resolved or reject promise.

`Promise.allSettled` (**No** Short Circuit) -> an array of objects with property status and reason(rejected) or value(resolved)

`Promise.any` (Short Circuit) -> (Short Circuited) a single value from the first resolved promise or AggregateError that contains an array of values from all rejected promises.

## The Differences

I expected readers reading this article already have a basic understanding of `Promise` but just to refresh your memories, I am going to briefly describe some basics of `Promise`.

A `Promise` can be in one of the three states, _pending_, _fulfilled_ and _rejected_: _pending_ is the initial state, _fulfilled_, a successfully completed operation and fulfilled with a value, _rejected_ a failed operation and with a reason.

Promise handlers such as `.then` and `.catch` can be attached to the `Promise` and will be called after the `Promise` has been fulfilled or rejected. These two handlers also return a `Promise`, allowing the chaining of multiple handlers.

On rejection, we can handle it with `.catch` or `.then(..., onRejection)`.

To illustrate and to compare how these variants works, scenarios with different input and expected output are used, as shown in the following tables.

Three promises with the following values and settle time are used in these scenarios:

Promise 1(P1) with value/ reason 1 settle in 1s

Promise 2(P2) with value/ reason 2 settle in 2s

Promise 3(P3) with value/ reason 3 settle in 3s

**Notes:**

- SC- short-circuited
- ❌- rejected
- ✅- fulfilled
- ❓- pending

### Scenario 1- All Promises Fulfilled Successfully

![promises all resolved](/assets/promise-all-resolved.png 'promises all resolved')

### Scenario 2- First Promise Rejected

![first promise rejected](/assets/promise-first-rejected.png 'first promise rejected')

### Scenario 3- Second Promise Rejected

![second promise rejected](/assets/promise-second-rejected.png 'second promise rejected')

### Scenario 4- All Promises Rejected

![promise all rejected](/assets/promise-all-rejected.png 'promise all rejected')

Some clear observations can be readily obtained from these tables:

- Short-Circuit

  - `.race` will always be short-circuited once the first promise **settled**.
  - the rest of the methods will wait for their own conditions to be fulfilled.

- Return Value(s)

  - `.allSettled` always return an array containing an object for each promise.
  - `.race` always return a single value.

- `.any` and `.all`

  - almost behaving opposite of each other, `.any` will short-circuit on the first **fulfilled** promise, while `.all` will short-circuit on the first **reject** promise.
  - if all **rejected**, `.any` will return an AggregateError containing all the rejected promises and if all **fulfilled**, `.all` would return an array of fulfilled promises.

## How to Use

**`.race`** - when you only want whatever the first outcome from the first settled promise.

**`.all`** - when you want to get back all the successfully fulfilled promises and stop the operation when there is a single rejection. Mostly used if these tasks are dependent on each other.

**`.allSettled`** - when you want to wait for all the promises to be settled and you want to handle it in your own way or apply any filtering from the outcome. Contrary to `.all` is mostly used for tasks which are not dependent on each other.

**`.any`** - when you only want the first successfully fulfilled promise or handle all the rejected promises AggregateError.

## References

[Promise- MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

[Properties of the Promise Constructor- ECMAScript](https://tc39.es/ecma262/#sec-properties-of-the-promise-constructor)
