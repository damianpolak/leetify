import test from 'ava';
import m from '.';

test('L33tify string', t => {
	t.is(m('This is Leet String!'), '7hi5 i5 1337 57rin6!');
});
