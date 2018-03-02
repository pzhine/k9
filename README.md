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

If no combinations match a word in the word list for the current language, the server performs a prefix search and returns the results.

For example, when using the French word list, 66674 would result in 'monsi' because it is a prefix of 'monsieur'.

The prefix indecies for each wordlist are built by the [js-search](https://github.com/bvaughn/js-search) package when the server starts.

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

### Adding a Language
The word lists are formatted for the [Hunspell spellchecker](http://hunspell.github.io/). However, you can use any word list file that separates words with linebreaks.

To add a new language, save your word list to `/dictionaries/[language-key].txt` and add an entry in `/dictionaries/index.js`. The new language will be available once you rebuild and restart the server.

The default language is configured in `/content/config.json` to be `en-us`.
