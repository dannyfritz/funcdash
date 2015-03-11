[![MIT](https://img.shields.io/npm/l/funcdash.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/npm/v/funcdash.svg?style=flat-square)](https://www.npmjs.com/package/funcdash)

# funcdash


Lodash mixins to fill some common functional programming gaps.

## Usage

### With [LoDash](https://github.com/lodash/lodash)

```bash
$ npm install lodash funcdash
```

Using LoDash's [_.mixin](https://lodash.com/docs#mixin) method.
```js
var _ = require('lodash').runInContext();
_.mixin(require('funcdash'));
```

### With [LoDash-fp](https://github.com/lodash/lodash-fp)

```bash
$ npm install lodash-fp funcdash
```

Using LoDash's [_.mixin](https://lodash.com/docs#mixin) method.
```js
var _ = require('lodash-fp').runInContext();
_.mixin(require('funcdash/curried'));
```

## Docs

### Logic

\_.and \_.or \_.not

### Function

\_.apply \_.call \_.mapInvoke

### Math

\_.multiply \_.product
