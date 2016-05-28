# react-flux-boilerplate

This is a boilerplate for a react/redux app using grunt, sass, and webpack.

## Installation

1. Install [node.js](https://nodejs.org/en/).
2. Install the grunt-cli globally: `sudo npm install -g grunt-cli`
3. Install node dependencies: `npm install`

## Developing

* `grunt bundle` will add your minified JS and CSS files to the `dist` folder.
* `grunt` will watch for your JS and SCSS changes as you develop.
* `grunt lint` will lint your JS code.
* `grunt test` will run your mocha tests.

## Deploying to GitHub Pages

`npm run deploy`

## Resources

* React structure
  * [Facebook's Todo tutorial](https://facebook.github.io/flux/docs/todo-list.html)
  * [Facebook's Todo app on github](https://github.com/facebook/flux/tree/master/examples/flux-todomvc)

* Development environment
  * [Grunt-ify Your Front-End Development](https://www.youtube.com/watch?v=5PJZC71Pac0&index=41&list=PLSZHCj84JSDO3RvO639TxREnqiuD7WvQv)
  * [Setting up React for ES6 with Webpack and Babel](https://www.twilio.com/blog/2015/08/setting-up-react-for-es6-with-webpack-and-babel-2.html)
  * [Babel for ES6](https://babeljs.io/docs/setup/)
  * [How to structure a sass project](http://thesassway.com/beginner/how-to-structure-a-sass-project)
  * [Normalize scss](https://github.com/kristerkari/normalize.scss)

* Deployment
    * [Deploying a subfolder to GitHub Pages](https://gist.github.com/cobyism/4730490)