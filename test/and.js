var test = require('tape');
var _ = require('lodash');
var and = require('../logic/and');

test('and', function (t) {
	t.equal(and(true, true), true);
	t.equal(and(true, false), false);
	t.equal(and(false, true), false);
	t.equal(and(false, false), false);
	t.equal(and(1, 1), true);
	t.equal(and(1, false), false);
	t.end();
});
