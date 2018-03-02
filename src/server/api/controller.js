import { numToChars, combine } from '../../lib/k9'
import dictionary from './dictionary'

export default (req, res) => {
  const all = req.params.numbers
    .split('')
    .reduce((combos, nextNumber) => combine(combos, numToChars(nextNumber)), [])

  if (req.params.dict) {
    return dictionary(req.params.dict).then(dict => {
      let results = all.filter(word => dict.dict[word])
      if (!results.length) {
        results = all.filter(word => dict.prefixSearch.search(word).length)
      }
      return res
        .status(200)
        .json({
          [req.params.dict]: results,
        })
        .end()
    })
  }

  return res.status(200).json({ all }).end()
}
