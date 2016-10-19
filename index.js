'use strict';

const postcss = require('postcss');
const prefixer = require('autoprefixer');

const browsers = ['last 5 versions'];

module.exports = function () {
	this.plugin('autoprefixer', {}, function * (file, opts) {
		opts = Object.assign({browsers: browsers}, opts);
		// process with postcss + prefixer
		const data = yield postcss([prefixer(opts)]).process(file.data);
		// update file's content
		file.data = data.css;
	});
};
