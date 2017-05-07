# Event

- [`function go`](#function-go)
- [`function list`](#function-list)
- [`function on`](#function-on)
- [`function once`](#function-once)
- [`function un`](#function-un)

<a id="function-go"></a><h2>function go</h2>
``` javascript
import { go } from 'yyf/event';
```
> Fire event in context

``` javascript
function go(context, eventName, args)
```
---

<a id="function-list"></a><h2>function list</h2>
``` javascript
import { list } from 'yyf/event';
```
> Returns list of context events

``` javascript
function list(context)
```
---

<a id="function-on"></a><h2>function on</h2>
``` javascript
import { on } from 'yyf/event';
```
> Listen event in specified context

``` javascript
function on(context, eventName, callback, priority)
```
---

<a id="function-once"></a><h2>function once</h2>
``` javascript
import { once } from 'yyf/event';
```
> Listen event in specified context till the first fire

``` javascript
function once(context, eventName, callback, priority)
```
---

<a id="function-un"></a><h2>function un</h2>
``` javascript
import { un } from 'yyf/event';
```
> Delete event listeners from context

``` javascript
function un(context, eventName, callbacks)
```
