
import * as assert from 'assert';
import { Trie } from './trie';


describe('#Test Trie', () => {
	it('Should return the same words', () => {
		const tree = new Trie();

		tree.addWord('go');
		tree.addWord('golo');
		tree.addWord('golang');
		tree.addWord('goroutine');

		let result = tree.searchWord('go');
		assert.deepEqual([
			'go', 'golo', 'golang', 'goroutine',
		], result);
		result = tree.searchWord('gol');
		assert.deepEqual(['golo', 'golang'], result);
		result = tree.searchWord('gola');
		assert.deepEqual(['golang'], result);
		result = tree.searchWord('gor');
		assert.deepEqual(['goroutine'], result);
		result = tree.searchWord('gorr');
		assert.deepEqual([], result);
	});
});
