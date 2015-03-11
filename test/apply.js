var test = require('tape');
var _ = require('lodash-compat');
var apply = require('../function/apply.js');

test('apply', function (t) {
	t.equal(apply(_.add, [1, 2]), 3);
	t.end();
});
