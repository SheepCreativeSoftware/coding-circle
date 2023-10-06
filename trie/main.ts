/* eslint-disable no-console */
import { buntstift } from 'buntstift';
import { Trie } from './trie';

buntstift.header('Trie Search Engine');

const tree = new Trie();

tree.addWord('go');
tree.addWord('golo');
tree.addWord('golang');
tree.addWord('goroutine');

buntstift.info('Search for: go');
console.log(tree.searchWord('go'));
buntstift.line();
buntstift.info('Search for: gol');
console.log(tree.searchWord('gol'));
buntstift.line();
buntstift.info('Search for: golo');
console.log(tree.searchWord('golo'));
buntstift.line();
buntstift.info('Search for: gor');
console.log(tree.searchWord('gor'));
buntstift.line();
buntstift.info('Search for: gorr');
console.log(tree.searchWord('gorr'));
buntstift.line();

