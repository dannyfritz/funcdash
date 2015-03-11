'use strict';
var isArray = require('lodash-compat/lang/isArray');
var isFunction = require('lodash-compat/lang/isFunction');

/**
 * Apply a function with the given array as arguments.
 *
 * @static
 * @memberOf _
 * @category Function
 * @param {Function} func The function to be applied.
 * @param {Array} args The Array to be used as arguments.
 * @returns {*} Returns the result of the function.
 * @example
 *
 * _.apply(_.add, [1, 2]);
 * // => 3
 */
function apply (func, args) {
	if (!isFunction(func)) {
		throw new Error('Expected a function');
	}
	if (!isArray(args)) {
		args = [];
	}
	return func.apply(null, args);
}
module.exports = apply;
