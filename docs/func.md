# Functions

- [`function fnArgsExpand`](#function-fnargsexpand)
- [`function fnArgsPass`](#function-fnargspass)
- [`function fnArgsPromise`](#function-fnargspromise)
- [`function fnArgsRollup`](#function-fnargsrollup)
- [`function fnCompose`](#function-fncompose)
- [`function fnComposer`](#function-fncomposer)
- [`function fnCurry`](#function-fncurry)
- [`function fnCurryRight`](#function-fncurryright)
- [`function fnExceptor`](#function-fnexceptor)
- [`function fnFalse`](#function-fnfalse)
- [`function fnLog`](#function-fnlog)
- [`function fnPass`](#function-fnpass)
- [`function fnPromise`](#function-fnpromise)
- [`function fnPromises`](#function-fnpromises)
- [`function fnReturnValue`](#function-fnreturnvalue)
- [`function fnSequencer`](#function-fnsequencer)
- [`function fnTrue`](#function-fntrue)
- [`function fnTry`](#function-fntry)

<a id="function-fnargsexpand"></a><h2>function fnArgsExpand</h2>
``` javascript
import { fnArgsExpand } from 'yyf/func';
```
> Expands array argument as callback arguments

``` javascript
function fnArgsExpand(callback)
```
---

<a id="function-fnargspass"></a><h2>function fnArgsPass</h2>
``` javascript
import { fnArgsPass } from 'yyf/func';
```
> Set of useful functions

> Passes arguments to callback

``` javascript
function fnArgsPass(callback)
```
---

<a id="function-fnargspromise"></a><h2>function fnArgsPromise</h2>
``` javascript
import { fnArgsPromise } from 'yyf/func';
```
> Creates promise callback

``` javascript
function fnArgsPromise(callback)
```
---

<a id="function-fnargsrollup"></a><h2>function fnArgsRollup</h2>
``` javascript
import { fnArgsRollup } from 'yyf/func';
```
> Rollup argument to an array and transfer the array to callback

``` javascript
function fnArgsRollup(callback)
```
---

<a id="function-fncompose"></a><h2>function fnCompose</h2>
``` javascript
import { fnCompose } from 'yyf/func';
```
> Compose functions

``` javascript
function fnCompose(callbacks)
```
---

<a id="function-fncomposer"></a><h2>function fnComposer</h2>
``` javascript
import { fnComposer } from 'yyf/func';
```
> Compose and execute callbacks

``` javascript
function fnComposer(callbacks)
```
---

<a id="function-fncurry"></a><h2>function fnCurry</h2>
``` javascript
import { fnCurry } from 'yyf/func';
```
> Curry callback arguments

``` javascript
function fnCurry(callback, curryArgs)
```
---

<a id="function-fncurryright"></a><h2>function fnCurryRight</h2>
``` javascript
import { fnCurryRight } from 'yyf/func';
```
> Curry callback arguments from right to left

``` javascript
function fnCurryRight(callback, curryArgs)
```
---

<a id="function-fnexceptor"></a><h2>function fnExceptor</h2>
``` javascript
import { fnExceptor } from 'yyf/func';
```
> Sequenced iteration of callbacks till not rejected promise

``` javascript
function fnExceptor(callbacks)
```
---

<a id="function-fnfalse"></a><h2>function fnFalse</h2>
``` javascript
import { fnFalse } from 'yyf/func';
```
> Returns false

``` javascript
function fnFalse()
```
---

<a id="function-fnlog"></a><h2>function fnLog</h2>
``` javascript
import { fnLog } from 'yyf/func';
```
> Logs arguments

``` javascript
function fnLog(args)
```
---

<a id="function-fnpass"></a><h2>function fnPass</h2>
``` javascript
import { fnPass } from 'yyf/func';
```
> Pass argument

``` javascript
function fnPass(arg)
```
---

<a id="function-fnpromise"></a><h2>function fnPromise</h2>
``` javascript
import { fnPromise } from 'yyf/func';
```
> Put callback as promise executor

``` javascript
function fnPromise(callback)
```
---

<a id="function-fnpromises"></a><h2>function fnPromises</h2>
``` javascript
import { fnPromises } from 'yyf/func';
```
> Put callbacks as promise executors

``` javascript
function fnPromises(callbacks)
```
---

<a id="function-fnreturnvalue"></a><h2>function fnReturnValue</h2>
``` javascript
import { fnReturnValue } from 'yyf/func';
```
> Calls callback with value argument and returns value

``` javascript
function fnReturnValue(value, callback)
```
---

<a id="function-fnsequencer"></a><h2>function fnSequencer</h2>
``` javascript
import { fnSequencer } from 'yyf/func';
```
> Sequenced iteration of callbacks

``` javascript
function fnSequencer(callbacks)
```
---

<a id="function-fntrue"></a><h2>function fnTrue</h2>
``` javascript
import { fnTrue } from 'yyf/func';
```
> Returns true

``` javascript
function fnTrue()
```
---

<a id="function-fntry"></a><h2>function fnTry</h2>
``` javascript
import { fnTry } from 'yyf/func';
```
> Try to execute callback

``` javascript
function fnTry(callback, tryCount)
```
