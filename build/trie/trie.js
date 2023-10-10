"use strict";
/**
 * @module Trie
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trie = void 0;
const node_1 = require("./node");
class Trie {
    rootNode;
    constructor() {
        this.rootNode = new node_1.TrieNode();
    }
    /** Adds a word to the Trie */
    addWord(word) {
        let currentNode = this.rootNode;
        for (let index = 0; index < word.length; index++) {
            const currentChar = word.charAt(index);
            if (!currentNode.hasChild(currentChar))
                currentNode.addNew(currentChar);
            currentNode = currentNode.getNode(currentChar);
        }
        currentNode.setEnd();
    }
    /** Searches for words that maches the given word prefix */
    searchWord(word) {
        let currentNode = this.rootNode;
        for (let index = 0; index < word.length; index++) {
            const currentChar = word.charAt(index);
            if (!currentNode.hasChild(currentChar))
                return [];
            currentNode = currentNode.getNode(currentChar);
        }
        return currentNode.getWords(word);
    }
}
exports.Trie = Trie;
