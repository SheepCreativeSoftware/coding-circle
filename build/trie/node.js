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
    /** Add a new character to the node tree */
    addNew(char) {
        this.children[char] = new TrieNode();
    }
    /**
     * Checks if a node has a child
     */
    hasChild(char) {
        return typeof this.children[char] !== 'undefined';
    }
    /** Returns the child of the node */
    getNode(char) {
        return this.children[char];
    }
    /** Sets this node as an end node */
    setEnd() {
        this.end = true;
    }
    /** Gets a list of words with the given search string */
    getWords(word) {
        const results = [];
        if (this.end)
            results.push(word);
        for (const [char, childNode] of Object.entries(this.children)) {
            // Search for more words with the given prefix
            results.push(...childNode.getWords(word + char));
        }
        return results;
    }
}
exports.TrieNode = TrieNode;
