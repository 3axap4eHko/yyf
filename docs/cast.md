# Cast

- [`const ALPHABET`](#value-alphabet)
- [`function charRange`](#function-charrange)
- [`function decodeHash`](#function-decodehash)
- [`function encodeBytes`](#function-encodebytes)
- [`function fromArrayToUTF8`](#function-fromarraytoutf8)
- [`function fromBitsToByte`](#function-frombitstobyte)
- [`function fromBitsToBytes`](#function-frombitstobytes)
- [`function fromBitsToHex`](#function-frombitstohex)
- [`function fromByteToBits`](#function-frombytetobits)
- [`function fromByteToHex`](#function-frombytetohex)
- [`function fromByteToNibble`](#function-frombytetonibble)
- [`function fromByteToNibbles`](#function-frombytetonibbles)
- [`function fromBytesToBits`](#function-frombytestobits)
- [`function fromBytesToHex`](#function-frombytestohex)
- [`function fromBytesToInt`](#function-frombytestoint)
- [`function fromBytesToNibbles`](#function-frombytestonibbles)
- [`function fromHexToBits`](#function-fromhextobits)
- [`function fromHexToByte`](#function-fromhextobyte)
- [`function fromHexToBytes`](#function-fromhextobytes)
- [`function fromHexToNibble`](#function-fromhextonibble)
- [`function fromHexToNibbles`](#function-fromhextonibbles)
- [`function fromIntToBytes`](#function-frominttobytes)
- [`function fromNibbleToByte`](#function-fromnibbletobyte)
- [`function fromNibbleToHex`](#function-fromnibbletohex)
- [`function fromNibblesToByte`](#function-fromnibblestobyte)
- [`function fromNibblesToBytes`](#function-fromnibblestobytes)
- [`function fromNibblesToHex`](#function-fromnibblestohex)
- [`function fromStringToHex`](#function-fromstringtohex)
- [`function fromUTF8ToArray`](#function-fromutf8toarray)
- [`function toArray`](#function-toarray)
- [`function toArrayOf`](#function-toarrayof)
- [`function toBin`](#function-tobin)
- [`function toBinOrDefault`](#function-tobinordefault)
- [`function toCharCodes`](#function-tocharcodes)
- [`function toComplexArray`](#function-tocomplexarray)
- [`function toComplexArrayRight`](#function-tocomplexarrayright)
- [`function toFlatArray`](#function-toflatarray)
- [`function toFloat`](#function-tofloat)
- [`function toFloatOrDefault`](#function-tofloatordefault)
- [`function toHex`](#function-tohex)
- [`function toHexOrDefault`](#function-tohexordefault)
- [`function toInt`](#function-toint)
- [`function toIntOrDefault`](#function-tointordefault)
- [`function toJsonObject`](#function-tojsonobject)
- [`function toJsonString`](#function-tojsonstring)
- [`function toKeyValue`](#function-tokeyvalue)
- [`function toKeyValueOf`](#function-tokeyvalueof)
- [`function toOct`](#function-tooct)
- [`function toOctOrDefault`](#function-tooctordefault)
- [`function toString`](#function-tostring)

<a id="value-alphabet"></a><h2>const ALPHABET</h2>
``` javascript
import { ALPHABET } from 'yyf/cast';
```
> Default alphabet for encoding

``` javascript
const ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()[]{}<>+-=:;?_';
```
---

<a id="function-charrange"></a><h2>function charRange</h2>
``` javascript
import { charRange } from 'yyf/cast';
```
> Creates array of characters

``` javascript
function charRange(from, to)
```
---

<a id="function-decodehash"></a><h2>function decodeHash</h2>
``` javascript
import { decodeHash } from 'yyf/cast';
```
> Decode bytes to alphabet

``` javascript
function decodeHash(hash, alphabet)
```
---

<a id="function-encodebytes"></a><h2>function encodeBytes</h2>
``` javascript
import { encodeBytes } from 'yyf/cast';
```
> Encode bytes to alphabet

``` javascript
function encodeBytes(bytes, alphabet)
```
---

<a id="function-fromarraytoutf8"></a><h2>function fromArrayToUTF8</h2>
``` javascript
import { fromArrayToUTF8 } from 'yyf/cast';
```
> Casts array of bytes to utf8 string

``` javascript
function fromArrayToUTF8(bytes)
```
---

<a id="function-frombitstobyte"></a><h2>function fromBitsToByte</h2>
``` javascript
import { fromBitsToByte } from 'yyf/cast';
```
> Casts value as binary string to single byte

``` javascript
function fromBitsToByte(value)
```
---

<a id="function-frombitstobytes"></a><h2>function fromBitsToBytes</h2>
``` javascript
import { fromBitsToBytes } from 'yyf/cast';
```
> Casts value as array of binary strings to array of bytes

``` javascript
function fromBitsToBytes(value)
```
---

<a id="function-frombitstohex"></a><h2>function fromBitsToHex</h2>
``` javascript
import { fromBitsToHex } from 'yyf/cast';
```
> Casts value as binary string to hex string

``` javascript
function fromBitsToHex(value)
```
---

<a id="function-frombytetobits"></a><h2>function fromByteToBits</h2>
``` javascript
import { fromByteToBits } from 'yyf/cast';
```
> Casts value as single byte to binary string

``` javascript
function fromByteToBits(value)
```
---

<a id="function-frombytetohex"></a><h2>function fromByteToHex</h2>
``` javascript
import { fromByteToHex } from 'yyf/cast';
```
> Casts value as single byte to hex string with leading zero

``` javascript
function fromByteToHex(value)
```
---

<a id="function-frombytetonibble"></a><h2>function fromByteToNibble</h2>
``` javascript
import { fromByteToNibble } from 'yyf/cast';
```
> Casts value as single byte to single nibble binary string

``` javascript
function fromByteToNibble(value)
```
---

<a id="function-frombytetonibbles"></a><h2>function fromByteToNibbles</h2>
``` javascript
import { fromByteToNibbles } from 'yyf/cast';
```
> Casts byte to array of 2 nibble strings

``` javascript
function fromByteToNibbles(value)
```
---

<a id="function-frombytestobits"></a><h2>function fromBytesToBits</h2>
``` javascript
import { fromBytesToBits } from 'yyf/cast';
```
> Casts value as array of bytes to array of binary strings

``` javascript
function fromBytesToBits(value)
```
---

<a id="function-frombytestohex"></a><h2>function fromBytesToHex</h2>
``` javascript
import { fromBytesToHex } from 'yyf/cast';
```
> Casts value as array of bytes to hex string

``` javascript
function fromBytesToHex(value)
```
---

<a id="function-frombytestoint"></a><h2>function fromBytesToInt</h2>
``` javascript
import { fromBytesToInt } from 'yyf/cast';
```
> Casts value as array of bytes to int value

``` javascript
function fromBytesToInt(value)
```
---

<a id="function-frombytestonibbles"></a><h2>function fromBytesToNibbles</h2>
``` javascript
import { fromBytesToNibbles } from 'yyf/cast';
```
> Casts array of bytes to array of nibble strings

``` javascript
function fromBytesToNibbles(value)
```
---

<a id="function-fromhextobits"></a><h2>function fromHexToBits</h2>
``` javascript
import { fromHexToBits } from 'yyf/cast';
```
> Casts value as hex string to binary string

``` javascript
function fromHexToBits(value)
```
---

<a id="function-fromhextobyte"></a><h2>function fromHexToByte</h2>
``` javascript
import { fromHexToByte } from 'yyf/cast';
```
> Casts value as hex string to single byte

``` javascript
function fromHexToByte(value)
```
---

<a id="function-fromhextobytes"></a><h2>function fromHexToBytes</h2>
``` javascript
import { fromHexToBytes } from 'yyf/cast';
```
> Casts value as hex string to array of bytes

``` javascript
function fromHexToBytes(value)
```
---

<a id="function-fromhextonibble"></a><h2>function fromHexToNibble</h2>
``` javascript
import { fromHexToNibble } from 'yyf/cast';
```
> Casts value as hex string to single nibble binary string

``` javascript
function fromHexToNibble(value)
```
---

<a id="function-fromhextonibbles"></a><h2>function fromHexToNibbles</h2>
``` javascript
import { fromHexToNibbles } from 'yyf/cast';
```
> Casts value as hex string to array of nibble strings

``` javascript
function fromHexToNibbles(value)
```
---

<a id="function-frominttobytes"></a><h2>function fromIntToBytes</h2>
``` javascript
import { fromIntToBytes } from 'yyf/cast';
```
> Casts value as int to array of bytes

``` javascript
function fromIntToBytes(value)
```
---

<a id="function-fromnibbletobyte"></a><h2>function fromNibbleToByte</h2>
``` javascript
import { fromNibbleToByte } from 'yyf/cast';
```
> Casts value as single nibble binary string to single byte

``` javascript
function fromNibbleToByte(value)
```
---

<a id="function-fromnibbletohex"></a><h2>function fromNibbleToHex</h2>
``` javascript
import { fromNibbleToHex } from 'yyf/cast';
```
> Casts value as single nibble binary string to hex string

``` javascript
function fromNibbleToHex(value)
```
---

<a id="function-fromnibblestobyte"></a><h2>function fromNibblesToByte</h2>
``` javascript
import { fromNibblesToByte } from 'yyf/cast';
```
> Casts array of 2 nibble strings to byte

``` javascript
function fromNibblesToByte(value)
```
---

<a id="function-fromnibblestobytes"></a><h2>function fromNibblesToBytes</h2>
``` javascript
import { fromNibblesToBytes } from 'yyf/cast';
```
> Casts array of nibble strings to array of bytes

``` javascript
function fromNibblesToBytes(value)
```
---

<a id="function-fromnibblestohex"></a><h2>function fromNibblesToHex</h2>
``` javascript
import { fromNibblesToHex } from 'yyf/cast';
```
> Casts value as array of nibble strings to hex string

``` javascript
function fromNibblesToHex(value)
```
---

<a id="function-fromstringtohex"></a><h2>function fromStringToHex</h2>
``` javascript
import { fromStringToHex } from 'yyf/cast';
```
> Casts char codes of string or array of strings to hex string

``` javascript
function fromStringToHex(value)
```
---

<a id="function-fromutf8toarray"></a><h2>function fromUTF8ToArray</h2>
``` javascript
import { fromUTF8ToArray } from 'yyf/cast';
```
> Casts utf8 string to array of bytes

``` javascript
function fromUTF8ToArray(text)
```
---

<a id="function-toarray"></a><h2>function toArray</h2>
``` javascript
import { toArray } from 'yyf/cast';
```
> Casts value to array

``` javascript
function toArray(value)
```
---

<a id="function-toarrayof"></a><h2>function toArrayOf</h2>
``` javascript
import { toArrayOf } from 'yyf/cast';
```
> Creates an array from arguments

``` javascript
function toArrayOf(args)
```
---

<a id="function-tobin"></a><h2>function toBin</h2>
``` javascript
import { toBin } from 'yyf/cast';
```
> Casts value as int to bin String

``` javascript
function toBin(value)
```
---

<a id="function-tobinordefault"></a><h2>function toBinOrDefault</h2>
``` javascript
import { toBinOrDefault } from 'yyf/cast';
```
> Casts value as int or default value to bin String

``` javascript
function toBinOrDefault(value, def)
```
---

<a id="function-tocharcodes"></a><h2>function toCharCodes</h2>
``` javascript
import { toCharCodes } from 'yyf/cast';
```
> Casts value as string or array of chars to array of bytes

``` javascript
function toCharCodes(value)
```
---

<a id="function-tocomplexarray"></a><h2>function toComplexArray</h2>
``` javascript
import { toComplexArray } from 'yyf/cast';
```
> Casts values as array to 2 dim array from left to right

``` javascript
function toComplexArray(value, size)
```
---

<a id="function-tocomplexarrayright"></a><h2>function toComplexArrayRight</h2>
``` javascript
import { toComplexArrayRight } from 'yyf/cast';
```
> Casts values as array to 2 dim array from right to left

``` javascript
function toComplexArrayRight(value, size)
```
---

<a id="function-toflatarray"></a><h2>function toFlatArray</h2>
``` javascript
import { toFlatArray } from 'yyf/cast';
```
> Casts values as 2 dim array to flat array

``` javascript
function toFlatArray(value)
```
---

<a id="function-tofloat"></a><h2>function toFloat</h2>
``` javascript
import { toFloat } from 'yyf/cast';
```
> Casts value to float or returns 0.0



``` javascript
toFloat('10.1');    // 10.1
toFloat('10');      // 10.0
toFloat('not int'); // 0.0
```


``` javascript
function toFloat(value)
```
---

<a id="function-tofloatordefault"></a><h2>function toFloatOrDefault</h2>
``` javascript
import { toFloatOrDefault } from 'yyf/cast';
```
> Casts value to float or returns default value

``` javascript
function toFloatOrDefault(value, def)
```
---

<a id="function-tohex"></a><h2>function toHex</h2>
``` javascript
import { toHex } from 'yyf/cast';
```
> Casts value as int to hex

``` javascript
function toHex(value)
```
---

<a id="function-tohexordefault"></a><h2>function toHexOrDefault</h2>
``` javascript
import { toHexOrDefault } from 'yyf/cast';
```
> Casts value as int or default value to hex

``` javascript
function toHexOrDefault(value, def)
```
---

<a id="function-toint"></a><h2>function toInt</h2>
``` javascript
import { toInt } from 'yyf/cast';
```
> Casts value to int or returns 0



``` javascript
toInt('100');     // 100
toInt('100.0');   // 100
toInt('not int'); // 0
```


``` javascript
function toInt(value)
```
---

<a id="function-tointordefault"></a><h2>function toIntOrDefault</h2>
``` javascript
import { toIntOrDefault } from 'yyf/cast';
```
> Casts value to int or returns defaultValue



``` javascript
toIntOrDefault('100', 10);     // 100
toIntOrDefault('100.0', 10);   // 100
toIntOrDefault('not int', 10); // 10
```


``` javascript
function toIntOrDefault(value, def)
```
---

<a id="function-tojsonobject"></a><h2>function toJsonObject</h2>
``` javascript
import { toJsonObject } from 'yyf/cast';
```
> Casts value as JSON string

``` javascript
function toJsonObject(value)
```
---

<a id="function-tojsonstring"></a><h2>function toJsonString</h2>
``` javascript
import { toJsonString } from 'yyf/cast';
```
> Casts value to JSON string

``` javascript
function toJsonString(value)
```
---

<a id="function-tokeyvalue"></a><h2>function toKeyValue</h2>
``` javascript
import { toKeyValue } from 'yyf/cast';
```
> Casts key and value to {key, value} object

``` javascript
function toKeyValue(key, value)
```
---

<a id="function-tokeyvalueof"></a><h2>function toKeyValueOf</h2>
``` javascript
import { toKeyValueOf } from 'yyf/cast';
```
> Casts extracted value from target by key and key to {key, value} object

``` javascript
function toKeyValueOf(target, key)
```
---

<a id="function-tooct"></a><h2>function toOct</h2>
``` javascript
import { toOct } from 'yyf/cast';
```
> Casts value as int to oct String

``` javascript
function toOct(value)
```
---

<a id="function-tooctordefault"></a><h2>function toOctOrDefault</h2>
``` javascript
import { toOctOrDefault } from 'yyf/cast';
```
> Casts value as int or default value to oct String

``` javascript
function toOctOrDefault(value, def)
```
---

<a id="function-tostring"></a><h2>function toString</h2>
``` javascript
import { toString } from 'yyf/cast';
```
> Casts value to String

``` javascript
function toString(value)
```
