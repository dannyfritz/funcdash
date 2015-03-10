var test = require('tape');
var product = require('../lib/product.js');

test('product array', function (t) {
	t.equal(product([1, 1]), 1);
	t.equal(product([1, 2]), 2);
	t.equal(product([1, 2, 3]), 6);
	t.equal(product([1, 2, 3, -1]), -6);
	t.equal(product([1, 2, 3, -1, 0]), 0);
	t.equal(product([]), 0);
	t.end();
});

test('product object', function (t) {
	t.equal(product({}), 0);
	t.equal(product({a: 1}), 1);
	t.equal(product({a: 1, b: 2}), 2);
	t.equal(product({a: 1, b: 2, c: 3}), 6);
	t.equal(product({a: 1, b: 2, c: 3, d: -1}), -6);
	t.equal(product({a: 1, b: 2, c: 3, d: -1, e: 0}), 0);
	t.end();
});

test('product', function (t) {
	t.equal(product(), 0);
	t.end();
});
