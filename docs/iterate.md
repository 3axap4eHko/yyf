# Iterate

- [`function aggregate`](#function-aggregate)
- [`function any`](#function-any)
- [`function compare`](#function-compare)
- [`function compareTake`](#function-comparetake)
- [`function countOf`](#function-countof)
- [`function createGenerator`](#function-creategenerator)
- [`function each`](#function-each)
- [`function every`](#function-every)
- [`function exclude`](#function-exclude)
- [`function extract`](#function-extract)
- [`function filter`](#function-filter)
- [`function first`](#function-first)
- [`function groupOf`](#function-groupof)
- [`function groupRightOf`](#function-grouprightof)
- [`function iterateGenerator`](#function-iterategenerator)
- [`function keys`](#function-keys)
- [`function last`](#function-last)
- [`function map`](#function-map)
- [`function pairs`](#function-pairs)
- [`function range`](#function-range)
- [`function rangeFactory`](#function-rangefactory)
- [`function reduce`](#function-reduce)
- [`function repeat`](#function-repeat)
- [`function repeatHandled`](#function-repeathandled)
- [`function repeatWhile`](#function-repeatwhile)
- [`function take`](#function-take)
- [`function values`](#function-values)

<a id="function-aggregate"></a><h2>function aggregate</h2>
``` javascript
import { aggregate } from 'yyf/iterate';
```
> Aggregates values of {target} through callback with array result

``` javascript
function aggregate(target, callback)
```
---

<a id="function-any"></a><h2>function any</h2>
``` javascript
import { any } from 'yyf/iterate';
```
> Iterates enumerable property in target and return true if any callback return true

``` javascript
function any(target, callback)
```
**Aliases**: `some`

---

<a id="function-compare"></a><h2>function compare</h2>
``` javascript
import { compare } from 'yyf/iterate';
```
> Returns last key-value pair from the target argument on truth callback result

``` javascript
function compare(target, callback)
```
---

<a id="function-comparetake"></a><h2>function compareTake</h2>
``` javascript
import { compareTake } from 'yyf/iterate';
```
> Returns first key-value pair and remove it from the target argument on truth callback result

``` javascript
function compareTake(target, callback)
```
---

<a id="function-countof"></a><h2>function countOf</h2>
``` javascript
import { countOf } from 'yyf/iterate';
```
> Counts of values

``` javascript
function countOf(target, callback)
```
---

<a id="function-creategenerator"></a><h2>function createGenerator</h2>
``` javascript
import { createGenerator } from 'yyf/iterate';
```
> Creates generator

``` javascript
function createGenerator(target)
```
---

<a id="function-each"></a><h2>function each</h2>
``` javascript
import { each } from 'yyf/iterate';
```
> Iterates each enumerable property in target

``` javascript
function each(target, callback)
```
---

<a id="function-every"></a><h2>function every</h2>
``` javascript
import { every } from 'yyf/iterate';
```
> Iterates each enumerable property in target and return true if no one callback return false

``` javascript
function every(target, callback)
```
---

<a id="function-exclude"></a><h2>function exclude</h2>
``` javascript
import { exclude } from 'yyf/iterate';
```
> Excludes values by keys from target

``` javascript
function exclude(target, keys)
```
---

<a id="function-extract"></a><h2>function extract</h2>
``` javascript
import { extract } from 'yyf/iterate';
```
> Extracts values by keys from target

``` javascript
function extract(target, keys)
```
---

<a id="function-filter"></a><h2>function filter</h2>
``` javascript
import { filter } from 'yyf/iterate';
```
> Filters values of target through callback

``` javascript
function filter(target, callback)
```
---

<a id="function-first"></a><h2>function first</h2>
``` javascript
import { first } from 'yyf/iterate';
```
> Returns first key-value pair from the target argument on truth callback result

``` javascript
function first(target, callback)
```
---

<a id="function-groupof"></a><h2>function groupOf</h2>
``` javascript
import { groupOf } from 'yyf/iterate';
```
``` javascript
function groupOf(target, size)
```
---

<a id="function-grouprightof"></a><h2>function groupRightOf</h2>
``` javascript
import { groupRightOf } from 'yyf/iterate';
```
> Groups target values by specified size from right to left

``` javascript
function groupRightOf(target, size)
```
---

<a id="function-iterategenerator"></a><h2>function iterateGenerator</h2>
``` javascript
import { iterateGenerator } from 'yyf/iterate';
```
> Iterates generator by callback

``` javascript
function iterateGenerator(generator, callback, done)
```
---

<a id="function-keys"></a><h2>function keys</h2>
``` javascript
import { keys } from 'yyf/iterate';
```
> Returns an array of the keys of a given target

``` javascript
function keys(target)
```
---

<a id="function-last"></a><h2>function last</h2>
``` javascript
import { last } from 'yyf/iterate';
```
> Returns last key-value pair from the target argument on truth callback result

``` javascript
function last(target, callback, defaultKey)
```
---

<a id="function-map"></a><h2>function map</h2>
``` javascript
import { map } from 'yyf/iterate';
```
> Maps values of {target} through {callback}

``` javascript
function map(target, callback)
```
---

<a id="function-pairs"></a><h2>function pairs</h2>
``` javascript
import { pairs } from 'yyf/iterate';
```
> Returns an array of the key-value pairs of a given target

``` javascript
function pairs(target)
```
---

<a id="function-range"></a><h2>function range</h2>
``` javascript
import { range } from 'yyf/iterate';
```
> Creates an array with defined length filled by values

``` javascript
function range(length)
```
---

<a id="function-rangefactory"></a><h2>function rangeFactory</h2>
``` javascript
import { rangeFactory } from 'yyf/iterate';
```
> Creates an array with defined length and map values

``` javascript
function rangeFactory(length, mapper)
```
---

<a id="function-reduce"></a><h2>function reduce</h2>
``` javascript
import { reduce } from 'yyf/iterate';
```
> Reduces values of {target} through callback

``` javascript
function reduce(target, callback, init)
```
---

<a id="function-repeat"></a><h2>function repeat</h2>
``` javascript
import { repeat } from 'yyf/iterate';
```
> Calls {callback} function {times} times

``` javascript
function repeat(times, callback)
```
---

<a id="function-repeathandled"></a><h2>function repeatHandled</h2>
``` javascript
import { repeatHandled } from 'yyf/iterate';
```
> Calls {callback} function {times} times and pass result to {handler}

``` javascript
function repeatHandled(times, callback, handler)
```
---

<a id="function-repeatwhile"></a><h2>function repeatWhile</h2>
``` javascript
import { repeatWhile } from 'yyf/iterate';
```
> Calls {callback} function {times} times and while callback result is not falsy

``` javascript
function repeatWhile(times, callback)
```
---

<a id="function-take"></a><h2>function take</h2>
``` javascript
import { take } from 'yyf/iterate';
```
> Returns first key-value pair and remove it from the target argument on truth callback result

``` javascript
function take(target, callback)
```
---

<a id="function-values"></a><h2>function values</h2>
``` javascript
import { values } from 'yyf/iterate';
```
> Returns an array of the values of a given target

``` javascript
function values(target)
```
