/**
 * @module TrieNode
 */


class TrieNode {
	private end: boolean;
	private children: {
		[key: string]: TrieNode,
	};
	constructor() {
		this.children = {};
		this.end = false;
	}

	addNew(char: string): void {
		this.children[char] = new TrieNode();
	}

	containsKey(char: string): boolean {
		return typeof this.children[char] !== 'undefined';
	}

	getNode(char: string): TrieNode {
		return this.children[char];
	}

	setEnd(): void {
		this.end = true;
	}

	getWords(word: string): string[] {
		const results = [] as string[];

		if(this.end) results.push(word);

		for(const [char, childNode] of Object.entries(this.children)) {
			// ...
			results.push(...childNode.getWords(word + char));
		}

		return results;
	}
}

export { TrieNode };
