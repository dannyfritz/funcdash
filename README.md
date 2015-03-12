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

Read the [documentation](https://dannyfritz.github.io/funcdash/docs/_.html).

### Function

[\_.apply](https://dannyfritz.github.io/funcdash/docs/_.html#apply)
[\_.call](https://dannyfritz.github.io/funcdash/docs/_.html#call)
[\_.mapInvoke](https://dannyfritz.github.io/funcdash/docs/_.html#mapInvoke)

### Logic

[\_.and](https://dannyfritz.github.io/funcdash/docs/_.html#and)
[\_.or](https://dannyfritz.github.io/funcdash/docs/_.html#or)
[\_.not](https://dannyfritz.github.io/funcdash/docs/_.html#not)

### Math

[\_.multiply](https://dannyfritz.github.io/funcdash/docs/_.html#multiply)
[\_.product](http://dannyfritz.github.io/funcdash/docs/_.html#product)
