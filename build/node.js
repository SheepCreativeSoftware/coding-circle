"use strict";
/**
 * @module TrieNode
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrieNode = void 0;
class TrieNode {
    end;
    children;
    constructor() {
        this.children = {};
        this.end = false;
    }
    addNew(char) {
        this.children[char] = new TrieNode();
    }
    containsKey(char) {
        return typeof this.children[char] !== 'undefined';
    }
    getNode(char) {
        return this.children[char];
    }
    setEnd() {
        this.end = true;
    }
    getWords(word) {
        const results = [];
        if (this.end)
            results.push(word);
        for (const [char, childNode] of Object.entries(this.children)) {
            // ...
            results.push(...childNode.getWords(word + char));
        }
        return results;
    }
}
exports.TrieNode = TrieNode;
