# Task

- [`function clear`](#function-clear)
- [`function push`](#function-push)
- [`function remove`](#function-remove)
- [`function wait`](#function-wait)

<a id="function-clear"></a><h2>function clear</h2>
``` javascript
import { clear } from 'yyf/task';
```
> Clears all context tasks

``` javascript
function clear(context, type)
```
---

<a id="function-push"></a><h2>function push</h2>
``` javascript
import { push } from 'yyf/task';
```
> Pushes the task(s) into context

``` javascript
function push(context, type, tasks)
```
---

<a id="function-remove"></a><h2>function remove</h2>
``` javascript
import { remove } from 'yyf/task';
```
> Deletes the task(s) from context

``` javascript
function remove(context, type, tasks)
```
---

<a id="function-wait"></a><h2>function wait</h2>
``` javascript
import { wait } from 'yyf/task';
```
> Waits for context tasks completion

``` javascript
function wait(context, type, size, args)
```
