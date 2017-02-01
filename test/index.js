'use strict';

const {join} = require('path');
const test = require('tape');
const Fly = require('fly');

const dir = join(__dirname, 'fixtures');
const tmp = join(__dirname, 'tmp');

test('fly-autoprefixer', t => {
	t.plan(2);

	const fly = new Fly({
		plugins: [
			require('../'),
			require('fly-clear')
		],
		tasks: {
			* foo(f) {
				yield f.source(`${dir}/style.css`).autoprefixer().target(tmp);
				t.ok('autoprefixer' in fly.plugins, 'attach `autoprefixer()` plugin to fly');
				const str = yield f.$.read(`${tmp}/style.css`, 'utf8');
				t.true(/-webkit-/i.test(str), 'add appropriate vendor prefixes');
				yield f.clear(tmp);
			}
		}
	});

	fly.start('foo');
});
