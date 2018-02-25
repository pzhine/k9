Universal React Starter Kit
===========================

A starter kit built on [kyt](https://github.com/NYTimes/kyt) by [@pzhine](https://github.com/pzhine).

Includes the following:
- ES6 Stage 3
- Universal React App (server rendering)
- Redux
- React Router v4
- Style framework: SASS, CSS Modules
- Inline SVGs
- Webfonts
- Webpack with HMR
- Common app components: App, Nav, Menu
- Transition components: Fade
- Utility components: Raw, ScrollManager
- Higher order components
  - freezeProps: hold props until a specified condition
  - transitionProps: temporary state to hold before and after values of props
  - lockScroll: block scroll under specified condition - useful for modals
- Testing with Enzyme and Jest
- Storybook for prototyping

Development
-----------
1. Install the app:
```
yarn install
```
2. Configure the site in `/src/content/config.json` and add a custom favicon in `/src/public`
3. Add some menu items in `/src/content/menu.json`
4. Test your setup
```
yarn test
```
5. Run the development server (http://localhost:3000)
```
yarn run dev
```

6. Run the Storybook sandbox (http://localhost:6006). Note that the sandbox depends on the dev server for some static assets.
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

Questions/comments?
--------------------------
Happy to help: paul@hine.works
