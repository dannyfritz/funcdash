var test = require('tape');
var _ = require('lodash-compat');
var mapInvoke = require('../function/mapInvoke.js');

test('mapInvoke', function (t) {
	t.deepEqual(mapInvoke(_.add, _.isNumber)(1, 2), [3, true]);
	t.end();
});
