# Debug

- [`function $brk`](#function-$brk)
- [`function $dbg`](#function-$dbg)
- [`function $dbgOn`](#function-$dbgon)
- [`function $dmp`](#function-$dmp)
- [`function $dmpOn`](#function-$dmpon)
- [`function $expectEqual`](#function-$expectequal)
- [`function $expectSame`](#function-$expectsame)
- [`function $expectThrow`](#function-$expectthrow)
- [`function $expectTrue`](#function-$expecttrue)
- [`function $watch`](#function-$watch)

<a id="function-$brk"></a><h2>function $brk</h2>
``` javascript
import { $brk } from 'yyf/debug';
```
> Conditional breakpoint

``` javascript
function $brk(condition)
```
---

<a id="function-$dbg"></a><h2>function $dbg</h2>
``` javascript
import { $dbg } from 'yyf/debug';
```
> Logs all args

``` javascript
function $dbg(args)
```
---

<a id="function-$dbgon"></a><h2>function $dbgOn</h2>
``` javascript
import { $dbgOn } from 'yyf/debug';
```
> Logs all args if condition is true

``` javascript
function $dbgOn(condition, args)
```
---

<a id="function-$dmp"></a><h2>function $dmp</h2>
``` javascript
import { $dmp } from 'yyf/debug';
```
> Dump value with title and pass through

``` javascript
function $dmp(value, title)
```
---

<a id="function-$dmpon"></a><h2>function $dmpOn</h2>
``` javascript
import { $dmpOn } from 'yyf/debug';
```
> Conditional dumping value

``` javascript
function $dmpOn(condition, value, title)
```
---

<a id="function-$expectequal"></a><h2>function $expectEqual</h2>
``` javascript
import { $expectEqual } from 'yyf/debug';
```
> Expect equal assert



``` javascript
$expectSame('test','test') // not throw an error
$expectSame({},{}) // throw an error
$expectSame(/^$/,/^$/) // throw an error
```


``` javascript
function $expectEqual(value, expected, message)
```
---

<a id="function-$expectsame"></a><h2>function $expectSame</h2>
``` javascript
import { $expectSame } from 'yyf/debug';
```
> Expect same assert



``` javascript
$expectSame('test','test') // not throw an error
$expectSame({},{}) // not throw an error
$expectSame(/^$/,/^$/) // not throw an error
```


``` javascript
function $expectSame(value, expected, message)
```
---

<a id="function-$expectthrow"></a><h2>function $expectThrow</h2>
``` javascript
import { $expectThrow } from 'yyf/debug';
```
> Expect callback throws exception

``` javascript
function $expectThrow(callback, message)
```
---

<a id="function-$expecttrue"></a><h2>function $expectTrue</h2>
``` javascript
import { $expectTrue } from 'yyf/debug';
```
> Expect value is true

``` javascript
function $expectTrue(value, message)
```
---

<a id="function-$watch"></a><h2>function $watch</h2>
``` javascript
import { $watch } from 'yyf/debug';
```
> Measure execution time

``` javascript
function $watch(callback, timeout)
```
