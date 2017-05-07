# Reflection

- [`function clone`](#function-clone)
- [`function create`](#function-create)
- [`function defineGetter`](#function-definegetter)
- [`function defineGetterSetter`](#function-definegettersetter)
- [`function defineSetter`](#function-definesetter)
- [`function defineValue`](#function-definevalue)
- [`function factory`](#function-factory)
- [`function freeze`](#function-freeze)
- [`function merge`](#function-merge)
- [`function preventExtensions`](#function-preventextensions)
- [`function proxy`](#function-proxy)
- [`function walk`](#function-walk)

<a id="function-clone"></a><h2>function clone</h2>
``` javascript
import { clone } from 'yyf/reflection';
```
> Clone target

``` javascript
function clone(source)
```
---

<a id="function-create"></a><h2>function create</h2>
``` javascript
import { create } from 'yyf/reflection';
```
> Instantiate class by constructor and arguments

``` javascript
function create(Constructor, args)
```
---

<a id="function-definegetter"></a><h2>function defineGetter</h2>
``` javascript
import { defineGetter } from 'yyf/reflection';
```
> Define getter in object

``` javascript
function defineGetter()
```
---

<a id="function-definegettersetter"></a><h2>function defineGetterSetter</h2>
``` javascript
import { defineGetterSetter } from 'yyf/reflection';
```
> Define getter and setter in object

``` javascript
function defineGetterSetter()
```
---

<a id="function-definesetter"></a><h2>function defineSetter</h2>
``` javascript
import { defineSetter } from 'yyf/reflection';
```
> Define setter in object

``` javascript
function defineSetter()
```
---

<a id="function-definevalue"></a><h2>function defineValue</h2>
``` javascript
import { defineValue } from 'yyf/reflection';
```
> Define value in object

``` javascript
function defineValue()
```
---

<a id="function-factory"></a><h2>function factory</h2>
``` javascript
import { factory } from 'yyf/reflection';
```
> Returns class factory

``` javascript
function factory(Constructor)
```
---

<a id="function-freeze"></a><h2>function freeze</h2>
``` javascript
import { freeze } from 'yyf/reflection';
```
> Freeze target

``` javascript
function freeze(target)
```
---

<a id="function-merge"></a><h2>function merge</h2>
``` javascript
import { merge } from 'yyf/reflection';
```
> Merge a few sources properties to the target

``` javascript
function merge(target)
```
---

<a id="function-preventextensions"></a><h2>function preventExtensions</h2>
``` javascript
import { preventExtensions } from 'yyf/reflection';
```
> Prevent extension target

``` javascript
function preventExtensions(target)
```
---

<a id="function-proxy"></a><h2>function proxy</h2>
``` javascript
import { proxy } from 'yyf/reflection';
```
> Prevent extension target

``` javascript
function proxy(target, handler)
```
---

<a id="function-walk"></a><h2>function walk</h2>
``` javascript
import { walk } from 'yyf/reflection';
```
> Walk by target properties

``` javascript
function walk(target, walker)
```
