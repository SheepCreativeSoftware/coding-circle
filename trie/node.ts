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

	/** Add a new character to the node tree */
	addNew(char: string): void {
		this.children[char] = new TrieNode();
	}

	/**
	 * Checks if a node has a child
	 */
	hasChild(char: string): boolean {
		return typeof this.children[char] !== 'undefined';
	}

	/** Returns the child of the node */
	getNode(char: string): TrieNode {
		return this.children[char];
	}

	/** Sets this node as an end node */
	setEnd(): void {
		this.end = true;
	}

	/** Gets a list of words with the given search string */
	getWords(word: string): string[] {
		const results = [] as string[];

		if(this.end) results.push(word);

		for(const [char, childNode] of Object.entries(this.children)) {
			// Search for more words with the given prefix
			results.push(...childNode.getWords(word + char));
		}

		return results;
	}
}

export { TrieNode };
