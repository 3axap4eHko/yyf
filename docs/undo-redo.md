# Undo-Redo

- [`function action`](#function-action)
- [`function clear`](#function-clear)
- [`const config`](#value-config)
- [`function hasRedo`](#function-hasredo)
- [`function hasUndo`](#function-hasundo)
- [`function redo`](#function-redo)
- [`function undo`](#function-undo)

<a id="function-action"></a><h2>function action</h2>
``` javascript
import { action } from 'yyf/undo-redo';
```
> Execute action

``` javascript
function action(context, data)
```
---

<a id="function-clear"></a><h2>function clear</h2>
``` javascript
import { clear } from 'yyf/undo-redo';
```
> Clear history

``` javascript
function clear(context)
```
---

<a id="value-config"></a><h2>const config</h2>
``` javascript
import { config } from 'yyf/undo-redo';
```
> Undo/Redo

> Default history config

``` javascript
const config = {
  historyMaxSize: 100,
};
```
---

<a id="function-hasredo"></a><h2>function hasRedo</h2>
``` javascript
import { hasRedo } from 'yyf/undo-redo';
```
> Checks if redo exists

``` javascript
function hasRedo(context)
```
---

<a id="function-hasundo"></a><h2>function hasUndo</h2>
``` javascript
import { hasUndo } from 'yyf/undo-redo';
```
> Checks if undo exists

``` javascript
function hasUndo(context)
```
---

<a id="function-redo"></a><h2>function redo</h2>
``` javascript
import { redo } from 'yyf/undo-redo';
```
> ReDo las action

``` javascript
function redo(context)
```
---

<a id="function-undo"></a><h2>function undo</h2>
``` javascript
import { undo } from 'yyf/undo-redo';
```
> Undo last action

``` javascript
function undo(context)
```
