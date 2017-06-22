# Check

- [`const TYPE_BOOL`](#value-type_bool)
- [`const TYPE_FUNCTION`](#value-type_function)
- [`const TYPE_NUMBER`](#value-type_number)
- [`const TYPE_OBJECT`](#value-type_object)
- [`const TYPE_STRING`](#value-type_string)
- [`const TYPE_SYMBOL`](#value-type_symbol)
- [`const TYPE_UNDEFINED`](#value-type_undefined)
- [`function areEqual`](#function-areequal)
- [`function classOf`](#function-classof)
- [`function is`](#function-is)
- [`function isArray`](#function-isarray)
- [`function isArrowFunction`](#function-isarrowfunction)
- [`function isBool`](#function-isbool)
- [`function isDefined`](#function-isdefined)
- [`function isEmptyArray`](#function-isemptyarray)
- [`function isEmptyString`](#function-isemptystring)
- [`function isFiniteNumber`](#function-isfinitenumber)
- [`function isFloat`](#function-isfloat)
- [`function isFunction`](#function-isfunction)
- [`function isGenerator`](#function-isgenerator)
- [`function isGeneratorFunction`](#function-isgeneratorfunction)
- [`function isInteger`](#function-isinteger)
- [`function isIterable`](#function-isiterable)
- [`function isIterator`](#function-isiterator)
- [`function isKeyValue`](#function-iskeyvalue)
- [`function isNotDefined`](#function-isnotdefined)
- [`function isNotEmptyArray`](#function-isnotemptyarray)
- [`function isNotEmptyString`](#function-isnotemptystring)
- [`function isNotNull`](#function-isnotnull)
- [`function isNotValue`](#function-isnotvalue)
- [`function isNull`](#function-isnull)
- [`function isNumber`](#function-isnumber)
- [`function isObject`](#function-isobject)
- [`function isString`](#function-isstring)
- [`function isStructure`](#function-isstructure)
- [`function isSymbol`](#function-issymbol)
- [`function isValue`](#function-isvalue)

<a id="value-type_bool"></a><h2>const TYPE_BOOL</h2>
``` javascript
import { TYPE_BOOL } from 'yyf/check';
```
> Boolean type string

``` javascript
const TYPE_BOOL = 'boolean';
```
---

<a id="value-type_function"></a><h2>const TYPE_FUNCTION</h2>
``` javascript
import { TYPE_FUNCTION } from 'yyf/check';
```
> Function type string

``` javascript
const TYPE_FUNCTION = 'function';
```
---

<a id="value-type_number"></a><h2>const TYPE_NUMBER</h2>
``` javascript
import { TYPE_NUMBER } from 'yyf/check';
```
> Number type string

``` javascript
const TYPE_NUMBER = 'number';
```
---

<a id="value-type_object"></a><h2>const TYPE_OBJECT</h2>
``` javascript
import { TYPE_OBJECT } from 'yyf/check';
```
> Object type string

``` javascript
const TYPE_OBJECT = 'object';
```
---

<a id="value-type_string"></a><h2>const TYPE_STRING</h2>
``` javascript
import { TYPE_STRING } from 'yyf/check';
```
> String type string

``` javascript
const TYPE_STRING = 'string';
```
---

<a id="value-type_symbol"></a><h2>const TYPE_SYMBOL</h2>
``` javascript
import { TYPE_SYMBOL } from 'yyf/check';
```
> Symbol type string

``` javascript
const TYPE_SYMBOL = 'symbol';
```
---

<a id="value-type_undefined"></a><h2>const TYPE_UNDEFINED</h2>
``` javascript
import { TYPE_UNDEFINED } from 'yyf/check';
```
> Checks data value and type.

> Undefined type string

``` javascript
const TYPE_UNDEFINED = 'undefined';
```
---

<a id="function-areequal"></a><h2>function areEqual</h2>
``` javascript
import { areEqual } from 'yyf/check';
```
> Checks if values are equal

``` javascript
function areEqual(x, y)
```
---

<a id="function-classof"></a><h2>function classOf</h2>
``` javascript
import { classOf } from 'yyf/check';
```
> Returns class name of value

``` javascript
function classOf(value)
```
---

<a id="function-is"></a><h2>function is</h2>
``` javascript
import { is } from 'yyf/check';
```
> Checks is value of specified class

``` javascript
function is(value, type)
```
---

<a id="function-isarray"></a><h2>function isArray</h2>
``` javascript
import { isArray } from 'yyf/check';
```
> Checks if value is array

``` javascript
function isArray(value)
```
---

<a id="function-isarrowfunction"></a><h2>function isArrowFunction</h2>
``` javascript
import { isArrowFunction } from 'yyf/check';
```
> Checks if value is arrow function

``` javascript
function isArrowFunction(value)
```
---

<a id="function-isbool"></a><h2>function isBool</h2>
``` javascript
import { isBool } from 'yyf/check';
```
> Checks if value is boolean

``` javascript
function isBool(value)
```
---

<a id="function-isdefined"></a><h2>function isDefined</h2>
``` javascript
import { isDefined } from 'yyf/check';
```
> Checks if value is defined

``` javascript
function isDefined(value)
```
---

<a id="function-isemptyarray"></a><h2>function isEmptyArray</h2>
``` javascript
import { isEmptyArray } from 'yyf/check';
```
> Checks if value is not empty array

``` javascript
function isEmptyArray(value)
```
---

<a id="function-isemptystring"></a><h2>function isEmptyString</h2>
``` javascript
import { isEmptyString } from 'yyf/check';
```
> Checks if value is empty string

``` javascript
function isEmptyString(value)
```
---

<a id="function-isfinitenumber"></a><h2>function isFiniteNumber</h2>
``` javascript
import { isFiniteNumber } from 'yyf/check';
```
> Checks if value is finite number

``` javascript
function isFiniteNumber(value)
```
---

<a id="function-isfloat"></a><h2>function isFloat</h2>
``` javascript
import { isFloat } from 'yyf/check';
```
> Checks if value is float

``` javascript
function isFloat(value)
```
---

<a id="function-isfunction"></a><h2>function isFunction</h2>
``` javascript
import { isFunction } from 'yyf/check';
```
> Checks if value is function

``` javascript
function isFunction(value)
```
---

<a id="function-isgenerator"></a><h2>function isGenerator</h2>
``` javascript
import { isGenerator } from 'yyf/check';
```
> Checks if value is generator

``` javascript
function isGenerator(value)
```
---

<a id="function-isgeneratorfunction"></a><h2>function isGeneratorFunction</h2>
``` javascript
import { isGeneratorFunction } from 'yyf/check';
```
> Checks if value is generator function

``` javascript
function isGeneratorFunction(value)
```
---

<a id="function-isinteger"></a><h2>function isInteger</h2>
``` javascript
import { isInteger } from 'yyf/check';
```
> Checks if value is integer

``` javascript
function isInteger(value)
```
---

<a id="function-isiterable"></a><h2>function isIterable</h2>
``` javascript
import { isIterable } from 'yyf/check';
```
> Checks if value can be iterated

``` javascript
function isIterable(value)
```
---

<a id="function-isiterator"></a><h2>function isIterator</h2>
``` javascript
import { isIterator } from 'yyf/check';
```
> Checks if value is iterator

``` javascript
function isIterator(value)
```
---

<a id="function-iskeyvalue"></a><h2>function isKeyValue</h2>
``` javascript
import { isKeyValue } from 'yyf/check';
```
> Checks if value is {key,value} pair object

``` javascript
function isKeyValue(value)
```
---

<a id="function-isnotdefined"></a><h2>function isNotDefined</h2>
``` javascript
import { isNotDefined } from 'yyf/check';
```
> Checks if value is not defined

``` javascript
function isNotDefined(value)
```
---

<a id="function-isnotemptyarray"></a><h2>function isNotEmptyArray</h2>
``` javascript
import { isNotEmptyArray } from 'yyf/check';
```
> Checks if value is not empty array

``` javascript
function isNotEmptyArray(value)
```
---

<a id="function-isnotemptystring"></a><h2>function isNotEmptyString</h2>
``` javascript
import { isNotEmptyString } from 'yyf/check';
```
> Checks if value is not empty string

``` javascript
function isNotEmptyString(value)
```
---

<a id="function-isnotnull"></a><h2>function isNotNull</h2>
``` javascript
import { isNotNull } from 'yyf/check';
```
> Check if value is not null

``` javascript
function isNotNull(value)
```
---

<a id="function-isnotvalue"></a><h2>function isNotValue</h2>
``` javascript
import { isNotValue } from 'yyf/check';
```
> Checks if value is defined and not null

``` javascript
function isNotValue(value)
```
---

<a id="function-isnull"></a><h2>function isNull</h2>
``` javascript
import { isNull } from 'yyf/check';
```
> Check if value is null

``` javascript
function isNull(value)
```
---

<a id="function-isnumber"></a><h2>function isNumber</h2>
``` javascript
import { isNumber } from 'yyf/check';
```
> Checks if value is number

``` javascript
function isNumber(value)
```
---

<a id="function-isobject"></a><h2>function isObject</h2>
``` javascript
import { isObject } from 'yyf/check';
```
> Checks if value is instance of Object

``` javascript
function isObject(value)
```
---

<a id="function-isstring"></a><h2>function isString</h2>
``` javascript
import { isString } from 'yyf/check';
```
> Checks if value is string

``` javascript
function isString(value)
```
---

<a id="function-isstructure"></a><h2>function isStructure</h2>
``` javascript
import { isStructure } from 'yyf/check';
```
> Checks if value is structure (may has keys)

``` javascript
function isStructure(value)
```
---

<a id="function-issymbol"></a><h2>function isSymbol</h2>
``` javascript
import { isSymbol } from 'yyf/check';
```
> Checks if value is Symbol

``` javascript
function isSymbol(value)
```
---

<a id="function-isvalue"></a><h2>function isValue</h2>
``` javascript
import { isValue } from 'yyf/check';
```
> Checks if value is defined and not null

``` javascript
function isValue(value)
```
