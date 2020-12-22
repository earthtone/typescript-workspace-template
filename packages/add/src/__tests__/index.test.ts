import test from 'ava'
import add from '../index'

test('adds two numbers', assert => {
  var result = add(2, 4)
  var expected = 2 + 4
  assert.is(result, expected)
})
