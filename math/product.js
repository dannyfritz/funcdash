'use strict';
var isArray = require('lodash-compat/lang/isArray');
var toArray = require('lodash-compat/lang/toArray');

/**
 * Gets the product of the values in `collection`.
 *
 * @static
 * @memberOf _
 * @category Math
 * @param {Array|Object|string} collection The collection to iterate over.
 * @returns {number} Returns the product.
 * @example
 *
 * _.product([4, 6, 2]);
 * // => 48
 *
 * _.sum({ 'a': 4, 'b': 6, 'c': 2 });
 * // => 48
 */
function product (collection) {
	var length, result;
	if (!isArray(collection)) {
		collection = toArray(collection);
	}
	length = collection.length;
	if (length === 0) {
		return 0;
	}
	result = 1;
	while (length) {
		length = length - 1;
		result = result * collection[length];
	}
	return result;
}
module.exports = product;
