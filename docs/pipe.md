# Pipe

- [`class Pipe`](#class-pipe)
  - [`static fromEventEmitter()`](#pipe-static-method-fromeventemitter)
  - [`static fromEventTarget()`](#pipe-static-method-fromeventtarget)
  - [`static fromInterval()`](#pipe-static-method-frominterval)
  - [`static fromYYFEvent()`](#pipe-static-method-fromyyfevent)
  - [`static merge()`](#pipe-static-method-merge)
  - [`static piping()`](#pipe-static-method-piping)
  - [`close()`](#pipe-method-close)
  - [`delay()`](#pipe-method-delay)
  - [`filter()`](#pipe-method-filter)
  - [`listen()`](#pipe-method-listen)
  - [`map()`](#pipe-method-map)
  - [`onClose()`](#pipe-method-onclose)
  - [`onError()`](#pipe-method-onerror)
  - [`push()`](#pipe-method-push)
  - [`reduce()`](#pipe-method-reduce)
  - [`split()`](#pipe-method-split)
  - [`throttle()`](#pipe-method-throttle)
  - [`throttleLast()`](#pipe-method-throttlelast)

<a id="class-pipe"></a><h2>class Pipe</h2>
``` javascript
import Pipe from 'yyf/pipe';
```
> Pipe class to pipe data as a stream

---

<h3>Methods</h3>

<a id="pipe-static-method-fromeventemitter"></a>

``` javascript
Pipe.fromEventEmitter(target: EventEmitter, eventName: string, onlyFirstArg: boolean)
```

> Creates a pipe from node EventEmitter

**Parameters:**

- `target`: `EventEmitter`
- `eventName`: `string`
- `onlyFirstArg`: `boolean`

**Returns:** `Pipe`


---

<a id="pipe-static-method-fromeventtarget"></a>

``` javascript
Pipe.fromEventTarget(eventTarget: EventTarget, eventName: string, onlyFirstArg: boolean)
```

> Creates a pipe from EventTarget event

**Parameters:**

- `eventTarget`: `EventTarget`
- `eventName`: `string`
- `onlyFirstArg`: `boolean`

**Returns:** `Pipe`


---

<a id="pipe-static-method-frominterval"></a>

``` javascript
Pipe.fromInterval(milliseconds: number)
```

> Creates a pipe from defined interval

**Parameters:**

- `milliseconds`: `number`

**Returns:** `Pipe`


---

<a id="pipe-static-method-fromyyfevent"></a>

``` javascript
Pipe.fromYYFEvent(context: Object, eventName: string, onlyFirstArg: boolean)
```

> Creates a pipe from YYF Event

**Parameters:**

- `context`: `Object`
- `eventName`: `string`
- `onlyFirstArg`: `boolean`

**Returns:** `Pipe`


---

<a id="pipe-static-method-merge"></a>

``` javascript
Pipe.merge(pipes: Array.<Pipe>)
```

> Merge pipes into one

**Parameters:**

- `pipes`: `Array.<Pipe>`

**Returns:** `Pipe`


---

<a id="pipe-static-method-piping"></a>

``` javascript
Pipe.piping(parentPipe: Pipe, pipingFunction: Function)
```

> Create child pipe

**Parameters:**

- `parentPipe`: `Pipe`
- `pipingFunction`: `Function`

**Returns:** `Pipe`


---

<a id="pipe-method-close"></a>

``` javascript
close()
```

> Closes pipe

**Returns:** `Pipe`


---

<a id="pipe-method-delay"></a>

``` javascript
delay(milliseconds: number)
```

> Delays pushing values to new pipe

**Parameters:**

- `milliseconds`: `number`

**Returns:** `Pipe`


---

<a id="pipe-method-filter"></a>

``` javascript
filter(filter: Function)
```

> Filters values to new pipe

**Parameters:**

- `filter`: `Function`

**Returns:** `Pipe`


---

<a id="pipe-method-listen"></a>

``` javascript
listen(listener: Function, onetime: boolean=)
```

> Listen pipe for value

**Parameters:**

- `listener`: `Function`
- `onetime`: `boolean=`

**Returns:** `Pipe`


---

<a id="pipe-method-map"></a>

``` javascript
map(mapper: (Function|*))
```

> Maps values to new pipe

**Parameters:**

- `mapper`: `(Function|*)`

**Returns:** `Pipe`


---

<a id="pipe-method-onclose"></a>

``` javascript
onClose(listener: Function)
```

> Listen pipe for closing

**Parameters:**

- `listener`: `Function`

**Returns:** `Pipe`


---

<a id="pipe-method-onerror"></a>

``` javascript
onError(listener: Function)
```

> Listen pipe for errors

**Parameters:**

- `listener`: `Function`

**Returns:** `Pipe`


---

<a id="pipe-method-push"></a>

``` javascript
push(value: *)
```

> Pushes value to the pipe

**Parameters:**

- `value`: `*`

**Returns:** `Pipe`


---

<a id="pipe-method-reduce"></a>

``` javascript
reduce(reducer: Function, init: *=)
```

> Reduces values to new pipe

**Parameters:**

- `reducer`: `Function`
- `init`: `*=`

**Returns:** `Pipe`


---

<a id="pipe-method-split"></a>

``` javascript
split(splitter: Function)
```

> Splits value to values for new pipe

**Parameters:**

- `splitter`: `Function`

**Returns:** `Pipe`


---

<a id="pipe-method-throttle"></a>

``` javascript
throttle(milliseconds: number)
```

> Throttles values for specified period to new pipe

**Parameters:**

- `milliseconds`: `number`

**Returns:** `Pipe`


---

<a id="pipe-method-throttlelast"></a>

``` javascript
throttleLast(milliseconds: number)
```

> Throttles values for specified period and pass only latest one to new pipe

**Parameters:**

- `milliseconds`: `number`

**Returns:** `Pipe`




