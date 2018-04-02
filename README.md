# mocha

## Install

```bash
npm install --D mocha
```

## Usage

```bash
mkdir test
```

add.test.js
```js
const assert = require('assert')

function add(x, y) {
  return x + y
}

describe('add', () => {
  it('1+1=2', () => {
    assert.equal(add(1, 1), 2)
  })
})
```

package.json
```json
 "script": {
   "test": "mocha"
 }
```


## Watch

package.json
```json
 "script": {
   "watch": "mocha -w",
 }
```

## Report

package.json
```json
 "script": {
    "report": "mocha -R doc > test.html && mocha -R markdown > test.md"
 }
```