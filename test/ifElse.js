var test = require('tape');
var ifElse = require('../logic/ifElse');
var isNumber = require('lodash-compat/lang/isNumber');
var constant = require('lodash-compat/utility/constant');
var partial = require('lodash-compat/function/partial');
var add = require('lodash-compat/math/add');

test('ifElse', function (t) {
	var add2 = ifElse(isNumber, partial(add, 2), constant(0));
	t.equal(add2(), 0);
	t.equal(add2(0), 2);
	t.equal(add2(1), 3);
	t.end();
});
