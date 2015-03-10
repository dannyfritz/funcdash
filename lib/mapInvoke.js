'use strict';
var _ = require('lodash');

/**
 *	Creates a function that when called will return an array of results from
 *	invoking each argument function with arguments.
 *
 *	@static
 *	@memberOf _
 *	@category Function
 *	@param {...Function} [functions] The functions to be invoked.
 *	@returns {Function} Function that when called, returns an Array with each
 *	                    result of each function invoked with the given
 *	                    arguments.
 *	@example
 *
 *	var results = _.mapInvoke(_.add, _.multiply);
 *	results(3, 5);
 *	// => [8, 15]
 */
function mapInvoke () {
	var functions = _.toArray(arguments);
	if (!_.all(functions, _.isFunction)) {
		throw new Error('Expected a function');
	}
	return function () {
		var args = _.toArray(arguments);
		return _.map(functions, function (func) {
			return func.apply(null, args);
		});
	};
}
module.exports = mapInvoke;
