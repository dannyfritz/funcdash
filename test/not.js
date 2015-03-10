var test = require('tape');
var _ = require('lodash');
var not = require('../lib/not.js');

test('not', function (t) {
	t.equal(not(true), false);
	t.equal(not(false), true);
	t.equal(not(0), true);
	t.equal(not(1), false);
	t.end();
});
