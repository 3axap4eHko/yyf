/**
 * Creates private scope based on context
 * @module privateScope
 */
/**
 *
 * @returns {Function}
 * @example
 * import privateScope from 'yyf/private-scope';
 * const $p = privateScope();
 *
 * class A {
 *  constructor(secureData) {
 *    $p(this, secureData);
 *  }
 *  get password() {
 *    return encrypt($(this).password);
 *  }
 * }
 *
 * const a = new A({username: 'username', password: 'password'});
 * console.log(a.password);
 */
export default function privateScope() {
  const map = new WeakMap();
  return function (context, ...data) {
    if (arguments.length > 1) {
      return map.set(context, Object.assign(...data));
    } else if (arguments.length === 1) {
      return map.get(context);
    }
    throw new Error(`Private scope storage called with wrong count of arguments: ${arguments.length}`);
  };
}