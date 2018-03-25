import test from 'ava';
import execa from 'execa';

test('main', async t => {
	const fixture = 'unicorn';
	const {stdout} = await execa('./cli.js', ['./fixture.js'], {input: fixture});
	t.is(stdout, fixture);
});
