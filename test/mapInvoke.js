var test = require('tape');
var _ = require('lodash');
var mapInvoke = require('../lib/mapInvoke.js');

test('mapInvoke', function (t) {
	t.deepEqual(mapInvoke(_.add, _.isNumber)(1, 2), [3, true]);
	t.end();
});
