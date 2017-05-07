# Random

- [`function GUID`](#function-guid)
- [`function argument`](#function-argument)
- [`function array`](#function-array)
- [`function bool`](#function-bool)
- [`function caseOf`](#function-caseof)
- [`function number`](#function-number)
- [`function shuffle`](#function-shuffle)
- [`function string`](#function-string)
- [`function stringAlphabet`](#function-stringalphabet)

<a id="function-guid"></a><h2>function GUID</h2>
``` javascript
import { GUID } from 'yyf/random';
```
> GUID string generator

``` javascript
function GUID()
```
---

<a id="function-argument"></a><h2>function argument</h2>
``` javascript
import { argument } from 'yyf/random';
```
> Return random argument

``` javascript
function argument(args)
```
---

<a id="function-array"></a><h2>function array</h2>
``` javascript
import { array } from 'yyf/random';
```
> Return random float array with defined size

``` javascript
function array(size)
```
---

<a id="function-bool"></a><h2>function bool</h2>
``` javascript
import { bool } from 'yyf/random';
```
> Return random boolean value

``` javascript
function bool()
```
---

<a id="function-caseof"></a><h2>function caseOf</h2>
``` javascript
import { caseOf } from 'yyf/random';
```
> Return index of defined probability values arguments

``` javascript
function caseOf(probabilityData)
```
---

<a id="function-number"></a><h2>function number</h2>
``` javascript
import { number } from 'yyf/random';
```
> Return random int value. If arguments not defined then return float value between 0 and 1

``` javascript
function number(min, max)
```
---

<a id="function-shuffle"></a><h2>function shuffle</h2>
``` javascript
import { shuffle } from 'yyf/random';
```
> Shuffle all values of the target

``` javascript
function shuffle(target)
```
---

<a id="function-string"></a><h2>function string</h2>
``` javascript
import { string } from 'yyf/random';
```
> Return random string [a-zA-Z] with defined size

``` javascript
function string(size)
```
---

<a id="function-stringalphabet"></a><h2>function stringAlphabet</h2>
``` javascript
import { stringAlphabet } from 'yyf/random';
```
> Return random string from provided alphabet with defined size

``` javascript
function stringAlphabet(size, alphabet)
```
