import { numToChars, combine } from '../../lib/k9'
import dictionary from './dictionary'

export default (req, res) => {
  const all = req.params.numbers
    .split('')
    .reduce((combos, nextNumber) => combine(combos, numToChars(nextNumber)), [])

  if (req.params.dict) {
    return dictionary(req.params.dict).then(dict =>
      res
        .status(200)
        .json({
          [req.params.dict]: all.filter(word => dict[word]),
        })
        .end()
    )
  }

  return res.status(200).json({ all }).end()
}
