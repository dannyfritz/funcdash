var test = require('tape');
var _ = require('lodash-compat');
var call = require('../function/call.js');

test('call', function (t) {
	t.equal(call(_.add, 1, 2), 3);
	t.end();
});
