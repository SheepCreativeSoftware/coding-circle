"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert = __importStar(require("assert"));
const trie_1 = require("./trie");
describe('#Test Trie', () => {
    it('Should return the same words', () => {
        const tree = new trie_1.Trie();
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
