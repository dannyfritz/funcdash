'use strict';
var _ = require('lodash');

/**
 *	Call a function with the given arguments.
 *
 *	@static
 *	@memberOf _
 *	@category Function
 *	@param {Function} func The function to be called.
 *	@param {...*} The arguments of the function call.
 *	@returns {*} Returns the result of the function.
 *	@example
 *
 * _.call(_.add, 1, 2);
 * // => 3
 */
function call (func) {
	var args = _.tail(_.toArray(arguments));
	if (!_.isFunction(func)) {
		throw new Error('Expected a function');
	}
	return func.apply(null, args);
}
module.exports = call;
