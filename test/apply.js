var test = require('tape');
var _ = require('lodash');
var apply = require('../lib/apply.js');

test('apply', function (t) {
	t.equal(apply(_.add, [1, 2]), 3);
	t.end();
});
