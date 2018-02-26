// parses wordlists in the wooorm format
// (https://github.com/wooorm/dictionaries/tree/master/dictionaries)

import fs from 'fs'
import path from 'path'
import readline from 'readline'

// memoize
const dictionaries = {}

const loadDict = lang =>
  new Promise(resolve => {
    const dict = {}
    const lineReader = readline.createInterface({
      input: fs.createReadStream(
        path.join(process.cwd(), `/dictionaries/${lang}.txt`)
      ),
    })
    lineReader.on('line', line => {
      dict[line.toLowerCase().split('/')[0]] = 1
    })
    lineReader.on('close', () => resolve(dict))
  })

export default async lang => {
  if (!dictionaries[lang]) {
    dictionaries[lang] = await loadDict(lang)
  }
  return dictionaries[lang]
}
