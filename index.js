'use strict';

const postcss = require('postcss');
const prefixer = require('autoprefixer');

const browsers = [
	'ie >= 10',
	'ie_mob >= 10',
	'ff >= 30',
	'chrome >= 34',
	'safari >= 7',
	'opera >= 23',
	'ios >= 7',
	'android >= 4.4',
	'bb >= 10'
];

module.exports = {
	name: 'autoprefixer'
	* func(file, opts) {
		opts = Object.assign({browsers: browsers}, opts);
		// process with postcss + prefixer
		const data = yield postcss([prefixer(opts)]).process(file.data);
		// update file's content
		file.data = data.css;
	}
};
