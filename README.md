K9 - a T9 nostalgia machine
===========================


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
yarn run dev
```
4. Run the Storybook sandbox (http://localhost:6006). Note that the sandbox depends on the dev server for some static assets.
```
yarn run storybook
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

Exercise
--------
Implement a number to word list converter as a Node backend and React/Redux fronted.
- The backend should provide a rest endpoint that converts a given numeric string
into a list of corresponding words in the style of [T9](https://en.wikipedia.org/wiki/T9_%28predictive_text%29)
or [Phonewords](https://en.wikipedia.org/wiki/Phoneword]) For example, given the input 23 the output should be: ad, ae, af, bd, be, bf, cd, ce, cf.

- The frontend should allow the user to enter a number, query the backend for the corresponding expansions, and display them.
