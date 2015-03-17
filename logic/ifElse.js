'use strict';
var isFunction = require('lodash-compat/lang/isFunction');
var notAFunctionErrorMessage = 'is not a function.';

/**
 * A functional branch similar to an if/else statement.
 * If the condition function is true,
 * call the onTrue function and return the result.
 * If the condition function if false,
 * call the onFalse function and return the result.
 *
 * @static
 * @memberOf _
 * @category Logic
 * @param {Function} condition The condition to determine the truthy value
 * @param {Function} onTrue The function to call if condition is true.
 * @param {Function} onFalse The function to call if condition is false.
 * @returns {*} Returns the result of onTrue or onFalse.
 * @example
 *
 * var add2 = _.ifElse(_.isNumber, _.partial(_.add, 2), _.constant(0));
 * add2()
 * // => 0
 * add2(3)
 * // => 5
 *
 */
function ifElse (condition, onTrue, onFalse) {
	if (!isFunction(condition)) {
		throw new Error('condition ' + notAFunctionErrorMessage);
	}
	if (!isFunction(onTrue)) {
		throw new Error('onTrue ' + notAFunctionErrorMessage);
	}
	if (!isFunction(onFalse)) {
		throw new Error('onFalse ' + notAFunctionErrorMessage);
	}
	return function () {
		if (condition.apply(null, arguments)) {
			return onTrue.apply(null, arguments);
		}
		return onFalse.apply(null, arguments);
	};
}
module.exports = ifElse;
