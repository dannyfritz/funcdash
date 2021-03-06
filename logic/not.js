'use strict';

/**
 * Logical NOT. Returns the inverse of the truthiness of a value.
 *
 * @static
 * @memberOf _
 * @category Logic
 * @param {*} value The value to NOT
 * @returns {Boolean} Returns the result of a logical NOT.
 * @example
 *
 * _.not(true);
 * // => false
 *
 * _.not(false);
 * // => true
 */
function not (value) {
	return !value;
}
module.exports = not;
