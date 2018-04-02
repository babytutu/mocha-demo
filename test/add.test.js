const assert = require('assert')

function add(x, y) {
  return x + y
}

describe('add', () => {
  it('1+1=2', () => {
    assert.equal(add(1, 1), 2)
  })
})