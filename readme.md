# fly-autoprefixer [![][travis-badge]][travis-link] [![npm package][npm-ver-link]][npm-ver-link]

> [Autoprefixer](https://github.com/lukeed/fly-autoprefixer) plugin for Fly.

<!-- <div align="center">
  <a href="http://github.com/flyjs/fly">
    <img width=200px  src="https://cloud.githubusercontent.com/assets/8317250/8733685/0be81080-2c40-11e5-98d2-c634f076ccd7.png">
  </a>
</div> -->

## Install

```a
npm install --save-dev fly-autoprefixer
```

## Usage

```js
exports.styles = function * () {
  yield this.source('src/styles/app.sass')
    .sass() // or less(), etc
    .autoprefixer({
      browsers: ['last 5 versions']
    })
    .target('dist/css');
}
```

## API

### .autoprefixer(options)

This plugin does not have any custom options. Please visit [`autoprefixer` options](https://github.com/postcss/autoprefixer#options) for a full list of available options.

## License

MIT © [Luke Edwards](https://lukeed.com)


[npm-pkg-link]: https://www.npmjs.org/package/fly-autoprefixer
[npm-ver-link]: https://img.shields.io/npm/v/fly-autoprefixer.svg?style=flat-square
[travis-link]:  https://travis-ci.org/lukeed/fly-autoprefixer
[travis-badge]: http://img.shields.io/travis/lukeed/fly-autoprefixer.svg?style=flat-square
