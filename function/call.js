'use strict';
var isFunction = require('lodash-compat/lang/isFunction');
var tail = require('lodash-compat/array/tail');
var toArray = require('lodash-compat/lang/toArray');

/**
 * Call a function with the given arguments.
 *
 * @static
 * @memberOf _
 * @category Function
 * @param {function} func The function to be called.
 * @param {...*} args The arguments of the function call.
 * @returns {*} Returns the result of the function.
 * @example
 *
 * _.call(_.add, 1, 2);
 * // => 3
 */
function call (func) {
	var args = tail(toArray(arguments));
	if (!isFunction(func)) {
		throw new Error('Expected a function');
	}
	return func.apply(null, args);
}
module.exports = call;
