'use strict';

/**
 * Logical AND. Returns true if both arguments are true.
 *
 * @static
 * @memberOf _
 * @category Logic
 * @param {*} left The left side of the AND
 * @param {*} right The right side of the AND
 * @returns {Boolean} Returns the result of a logical AND.
 * @example
 *
 *_.and(true, true);
 * // => true
 *
 * _.and(true, false);
 * // => false
 */
function and (left, right) {
	return !!(left && right);
}
module.exports = and;
