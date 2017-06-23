# pool

- [`function pool`](#function-pool)

<a id="function-pool"></a><h2>function pool</h2>
``` javascript
import pool from 'yyf/pool';
```
> Pools and executes tasks


> Multiply all values by 2 one by one


``` javascript
import pool from 'yyf/pool';

const testArray = [0,1,2,3,4,5,6,7,8,9];
const poolSize = 1;
pool(testArray, value => 2*value, poolSize)
 .then(result => console.log(result)); // [0,2,4,6,8,10,12,14,16,18]
```


``` javascript
function pool(target, handler, poolSize)
```
