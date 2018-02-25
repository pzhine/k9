export const numToChars = num =>
  ({
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  }[num.toString()])

/*
Takes an array of strings and returns a new array of strings
that is a combination of each string with each char in arrayOfChars.

Time complexity is N^2

For example,
'''
  chars = ['a', 'b', 'c']
  strings = ['cat', 'dog']
  permute(strings, chars)
  // returns ['cata', 'catb', 'catc', 'doga', 'dogb', 'dogc']
'''
*/
export const combine = (arrayOfStrings, arrayOfChars) => {
  if (!arrayOfStrings.length) {
    return arrayOfChars
  }
  return arrayOfStrings.reduce(
    (combos, nextString) =>
      combos.concat(arrayOfChars.map(c => nextString + c)),
    []
  )
}
