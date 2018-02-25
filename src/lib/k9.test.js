import { numToChars, combine } from './k9'

describe('numToChars', () => {
  it('should return an array with the correct k9 chars for a number', () =>
    expect(numToChars(2)).toEqual(['a', 'b', 'c']))
})

describe('combine', () => {
  it('should return just the arrayOfChars if arrayOfStrings is empty', () =>
    expect(combine([], ['a', 'b', 'c'])).toEqual(['a', 'b', 'c']))
  it('should return the correct combinations of the arguments', () =>
    expect(combine(['cat', 'dog'], ['a', 'b', 'c'])).toEqual([
      'cata',
      'catb',
      'catc',
      'doga',
      'dogb',
      'dogc',
    ]))
})
