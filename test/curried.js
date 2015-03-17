var test = require('tape');
var _ = require('lodash-fp').runInContext();
var isNumber = require('lodash-compat/lang/isNumber');
var constant = require('lodash-compat/utility/constant');
var partial = require('lodash-compat/function/partial');
var add = require('lodash-compat/math/add');

_.mixin(require('../curried'));

test('curried', function (t) {
	t.equal(_.and(true)(true), true);
	t.equal(_.and(true)(true, false), true);
	t.equal(_.and(true, true), true);
	t.equal(_.apply([1, 2])(_.add), 3);
	t.equal(_.apply([3, 2], _.add), 5);
	t.equal(_.call(_.add, 1, 2), 3);
	t.deepEqual(_.mapInvoke(_.add, _.multiply)(1, 2), [3, 2]);
	t.equal(_.multiply(2)(3), 6);
	t.equal(_.multiply(2)(3, 5), 6);
	t.equal(_.multiply(2, 3), 6);
	t.equal(_.not(false), true);
	t.equal(_.not(false, true), true);
	t.equal(_.or(false)(true), true);
	t.equal(_.or(false)(true, false), true);
	t.equal(_.or(false, true), true);
	t.equal(_.product([1, 2, 3]), 6);
	t.equal(_.product([1, 2, 3], [2]), 6);
	var add2 = _.ifElse(isNumber, partial(add, 2), constant(0));
	t.equal(add2(), 0);
	t.equal(add2(0), 2);
	t.end();
});
