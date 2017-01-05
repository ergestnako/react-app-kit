# [React App Kit](https://reactappkit.herokuapp.com)

Ground zero for your next React app.

  - Sass is transpiled, autoprefixed, and minified
  - ES6 and JSX are transpiled and uglified
  - Production files are updated on save and the browser will refresh automagically
  - All required/imported modules are concatenated and minified into a single file
  - Ran on an Express server that is deployable to Heroku

## Getting started

  - clone the repo
  - `npm install`
  - `npm run dev`
  - Live [http://localhost:3000](http://localhost:3000)

## Available commands

  - `npm run build` compile all src to dist
  - `npm run dev` start server, watch files, and auto refresh
  - `npm run prod` wipe out dist, recompile all src to dist, and uglify JavaScript
  - `npm run clean` wipe out dist entirely

## Publishing

  - Disconnect your local repo from this one with `git remote remove origin`
  - `hub create`
  - add, commit, and push

## Deploying

With Heroku command line tools installed, simply run:

  - `heroku create`
  - `git push heroku master`

## Sass organization

  The Sass is organized following [SMACSS](https://smacss.com) (Scalable & Modular Architecture for CSS) conventions.

## Credits
  - [React](https://creativecommons.org/licenses/by/3.0/) logo modified with removal of background color
  - [magentanova](https://github.com/magentanova) `server.js`
  - [DevTips Starter Kit](https://github.com/DevTips/DevTips-Starter-Kit) visual design heavily influenced the React App Kit visual design

## Misc:

  - Follow Bucky: [Twitter](https://twitter.com/BuckyMaler), [GitHub](https://github.com/BuckyMaler)
