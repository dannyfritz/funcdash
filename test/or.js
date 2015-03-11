var test = require('tape');
var or = require('../logic/or.js');

test('or', function (t) {
	t.equal(or(true, true), true);
	t.equal(or(false, true), true);
	t.equal(or(true, false), true);
	t.equal(or(false, false), false);
	t.equal(or(1, 1), true);
	t.equal(or(1, 0), true);
	t.equal(or(0, 0), false);
	t.end();
});
