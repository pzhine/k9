import { numToChars, combine } from '../../lib/k9'

export default (req, res) =>
  res
    .status(200)
    .json({
      all: req.params.numbers
        .split('')
        .reduce(
          (combos, nextNumber) => combine(combos, numToChars(nextNumber)),
          []
        ),
    })
    .end()
