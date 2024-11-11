/* eslint-disable no-magic-numbers */
import { describe, it } from 'node:test';
import assert from 'node:assert';
import { exceptForOne } from './except-for-one.js';

describe('except for one', () => {
	it('calculates the product of all numbers except the one at the current index', () => {
		const input = [
			27, 9, 12, 8, 17, 2,
		];
		const expected = [
			29376, 88128, 66096, 99144, 46656, 396576,
		];

		const result = exceptForOne(input);

		assert.deepStrictEqual(result, expected);
	});
});
