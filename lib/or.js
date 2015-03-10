'use strict';

/**
 *	Logical OR. Returns true if at least one argument is true.
 *
 *	@static
 *	@memberOf _
 *	@category Logic
 *	@param {*} left The left side of the OR
 *	@param {*} right The right side of the OR
 *	@returns {Boolean} Returns the result of a logical OR.
 *	@example
 *
 *	_.or(true, false);
 *	// => true
 *
 *	* _.or(false, false);
 *	// => false
 */
function or (left, right) {
	return !!(left || right);
}
module.exports = or;
