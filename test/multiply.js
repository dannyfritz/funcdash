var test = require('tape');
var multiply = require('../lib/multiply.js');

test('multiply', function (t) {
	t.equal(multiply(1, 1), 1);
	t.equal(multiply(1, 0), 0);
	t.equal(multiply(100, 2), 200);
	t.equal(multiply(-3.1, 2), -6.2);
	t.end();
});
