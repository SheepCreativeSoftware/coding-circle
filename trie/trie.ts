/**
 * @module Trie
 */

import { TrieNode } from './node';


class Trie {
	private rootNode: TrieNode;
	constructor() {
		this.rootNode = new TrieNode();
	}

	/** Adds a word to the Trie */
	addWord(word: string) {
		let currentNode = this.rootNode;

		for(let index = 0; index < word.length; index++) {
			const currentChar = word.charAt(index);
			if(!currentNode.hasChild(currentChar)) currentNode.addNew(currentChar);
			currentNode = currentNode.getNode(currentChar);
		}
		currentNode.setEnd();
	}

	/** Searches for words that maches the given word prefix */
	searchWord(word: string): string[] {
		let currentNode = this.rootNode;

		for(let index = 0; index < word.length; index++) {
			const currentChar = word.charAt(index);
			if(!currentNode.hasChild(currentChar)) return [];
			currentNode = currentNode.getNode(currentChar);
		}
		return currentNode.getWords(word);
	}
}


export { Trie };
