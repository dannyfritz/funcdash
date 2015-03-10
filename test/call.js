var test = require('tape');
var _ = require('lodash');
var call = require('../lib/call.js');

test('call', function (t) {
	t.equal(call(_.add, 1, 2), 3);
	t.end();
});
