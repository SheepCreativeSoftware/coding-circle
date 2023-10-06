/**
 * @module Trie
 */

import { TrieNode } from './node';


class Trie {
	private rootNode: TrieNode;
	constructor() {
		this.rootNode = new TrieNode();
	}

	addWord(word: string) {
		let currentNode = this.rootNode;

		for(let index = 0; index < word.length; index++) {
			const currentChar = word.charAt(index);
			if(!currentNode.containsKey(currentChar)) currentNode.addNew(currentChar);
			currentNode = currentNode.getNode(currentChar);
		}
		currentNode.setEnd();
	}

	searchWord(word: string): string[] {
		let currentNode = this.rootNode;

		for(let index = 0; index < word.length; index++) {
			const currentChar = word.charAt(index);
			if(!currentNode.containsKey(currentChar)) return [];
			currentNode = currentNode.getNode(currentChar);
		}
		return currentNode.getWords(word);
	}
}


export { Trie };
