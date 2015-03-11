var _ = require('lodash-compat').runInContext();
var test = require('tape');
_.mixin(require('..'));

test('mixin', function (t) {
	t.equal(_.and(true, true), true);
	t.equal(_.apply(_.add, [1, 2]), 3);
	t.equal(_.call(_.add, 1, 2), 3);
	t.deepEqual(_.mapInvoke(_.add, _.multiply)(1, 2), [3, 2]);
	t.equal(_.multiply(2, 3), 6);
	t.equal(_.not(false), true);
	t.equal(_.or(false, true), true);
	t.equal(_.product([1, 2, 3]), 6);
	t.end();
});
