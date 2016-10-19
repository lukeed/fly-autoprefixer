'use strict';

const join = require('path').join;
const test = require('tape').test;
const Fly = require('fly');

const dir = join(__dirname, 'fixtures');
const tmp = join(__dirname, 'tmp');

test('fly-autoprefixer', t => {
	t.plan(2);

	const fly = new Fly({
		plugins: [{
			func: require('../')
		}],
		tasks: {
			a: function * () {
				yield this.source(`${dir}/style.css`).autoprefixer().target(tmp);
				t.ok('autoprefixer' in fly, 'attach `autoprefixer()` plugin to fly');
				const str = yield this.$.read(`${tmp}/style.css`, 'utf8');
				t.true(/-webkit-/i.test(str), 'add appropriate vendor prefixes');
			}
		}
	});

	fly.start('a');
});
