const postcss = require("postcss")
const autoprefixer = require("autoprefixer")
const assign = require("object-assign")

const browsers = ['last 5 versions']

module.exports = function () {
  this.filter('autoprefixer', (data, options) => {
    const opts = assign({browsers}, options);
    const prefixer = postcss([ autoprefixer( opts ) ]);

    return prefixer.process(data.toString())
  })
}
