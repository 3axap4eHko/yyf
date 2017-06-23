# privateScope

- [`function privateScope`](#function-privatescope)

<a id="function-privatescope"></a><h2>function privateScope</h2>
``` javascript
import privateScope from 'yyf/private-scope';
```
> Creates private scope based on context



``` javascript
import privateScope from 'yyf/private-scope';
const $p = privateScope();

class A {
 constructor(secureData) {
   $p(this, secureData);
 }
 get password() {
   return encrypt($(this).password);
 }
}

const a = new A({username: 'username', password: 'password'});
console.log(a.password);
```


``` javascript
function privateScope()
```
