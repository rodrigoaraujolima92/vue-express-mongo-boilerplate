# Vue, Express, MongoDB boilerplate

<img src="http://vuejs.org/images/logo.png" height="50"> <img src="https://coligo.io/images/express.svg" height="50"> <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/45/MongoDB-Logo.svg/527px-MongoDB-Logo.svg.png" height="50"> <img src="https://worldvectorlogo.com/logos/nodejs-icon.svg" height="50">

This is a boilerplate project with VueJS (Vue Router, Vuex) + ExpressJS + MongoDB.

*This is my personal boilerplate and it is still in development, so feel free to make some pull requests and give some feedback about this boilerplate*

## Features

**Server-side**
* [x] **[Node.JS](https://nodejs.org)**
* [x] **[Express](https://github.com/expressjs/express)** - REST API routes
* [x] [MongoDB](https://www.mongodb.com/)
* [x] [Mongoose](https://github.com/Automattic/mongoose) - Object modelling for the database fields
* [x] [Mongoose-Paginate](https://github.com/edwardhotchkiss/mongoose-paginate#readme) - Pagination for the REST API Calls

**Client-side**
* [x] **[VueJS 2.x](https://github.com/vuejs/vue)**
* [x] [Vuex](https://github.com/vuejs/vuex)
* [x] [Vue-router](https://github.com/vuejs/vue-router) - client routes
* [x] [Vue-good-table](https://xaksis.github.io/vue-good-table) - Table with server side pagination
* [x] [SCSS](http://sass-lang.com/)
* [x] [PostCSS](https://github.com/postcss/postcss) with precss and autoprefixer
* [x] [Babel](https://babeljs.io/)

## Usage

Install dependencies
```
$ npm install
```
or
```
yarn install
```

For development
```bash
$ yarn run dev
$ yarn run client:watch:all
```
<!--
Build web app scripts and styles:
```bash
$ npm run build
```

For production
```bash
$ npm start
```
-->