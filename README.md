K9 - a T9 nostalgia machine
===========================

Predictive text applications were very common on mobile phones before
the era of smartphones and virtual keyboards.

This project is an quick and partial implementation of a predictive text application
based loosely on [T9](https://en.wikipedia.org/wiki/T9_%28predictive_text%29).

In this schema, each digit from 2 to 9 is mapped to 3 or 4 letters, as follows:

| 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| - | - | - | - | - | - | - | - |
| A | D | G | J | M | P | T | W |
| B | E | H | K | N | Q | U | X |
| C | F | I | L | O | R | V | Y |
|   |   |   |   |   | S |   | Z |

As you type numbers, the client queries an API for a list of words composed of letter combinations that result from mapping each digit using the table above.

For example, 4663 would result in the following list: 'gone', 'good', 'goof', 'home', 'hone', 'hood', 'hoof'

Getting Started
---------------
1. Install the app:
```
yarn install
```
2. Test your setup
```
yarn test
```
3. Run the development server (http://localhost:3000)
```
yarn dev
```
4. Run the Storybook sandbox (http://localhost:6006). Note that the sandbox depends on the dev server for some static assets.
```
yarn storybook
```

Production
----------
1. Build your app
```
yarn run build
```
2. Test your production server
```
yarn start
```

API
---
#### `/k9/:numbers`
Returns all the possible character combinations for the digits in :numbers.

#### `/k9/:dictionary/:numbers`
Returns the character combinations for the digits in :numbers that are in the :dictionary word list.

Dictionaries
------------------------------
Dictionaries are text files in the `/dictionaries` directory. The filename designates the language and is the key used in the API route. For example, the API call `/k9/en-us/456` selects the word list at `/dictionaries/en-us.txt`.

### Adding / Changing Language
The word lists are in the [Hunspell dictionary](http://hunspell.github.io/) format.

The default word list is the 'en-us' dictionary. To use a different language, select another language from [this list](https://github.com/wooorm/dictionaries/tree/master/dictionaries), download the `index.dic` file and move it to `/dictionaries/[language-key].txt`.

Then, in `/content/config.json`, change *dictionary* to the language key of the new language.

For example, to switch to Spanish words, download https://github.com/wooorm/dictionaries/blob/master/dictionaries/es/index.dic, move it to `/dictionaries/es.txt` and change `/content/config.json` to:

```
{
  ...
  "dictionary": "es",
  ...
}
```
