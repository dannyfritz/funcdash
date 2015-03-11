var reArg = require('lodash-compat/function/rearg');
var curry = require('lodash-compat/function/curry');
var cloneDeep = require('lodash-compat/lang/cloneDeep');
var curried = cloneDeep(require('./'));

var aryMethodMap = {
	1: ['not', 'product'],
	2: ['and', 'or', 'apply', 'multiply']
}

var aryReargMap = {
	1: [0],
	2: [1, 0]
}

function convert (func, aryReargMap) {
	return curry(reArg(func, aryReargMap), aryReargMap.length);
}

var ary, i, methods, methodName;

for (ary in aryMethodMap) {
	if (!aryMethodMap.hasOwnProperty(ary)) {
		continue;
	}
	methods = aryMethodMap[ary];
	for (var i = 0; i < methods.length; i++) {
		methodName = methods[i];
		curried[methodName] = convert(curried[methodName], aryReargMap[ary])
	}
}

module.exports = curried;
