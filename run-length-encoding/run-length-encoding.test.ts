/* eslint-disable no-magic-numbers */
import { decode, encode } from './run-length-encoding.js';
import { describe, it } from 'node:test';
import assert from 'node:assert';


describe('#Test Run length encoding', () => {
	it('Should encode a given string', () => {
		const testString = 'ABBCCCDDDD';
		const result = encode(testString);

		assert.strictEqual(result, '1A2B3C4D');
	});
	it('Should decode a given string', () => {
		const testString = '1A2B3C4D';
		const result = decode(testString);

		assert.strictEqual(result, 'ABBCCCDDDD');
	});
	it('Should decode and Encode all characters from A-Z', () => {
		const testString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		const encodedString = encode(testString);
		const result = decode(encodedString);

		assert.strictEqual(result, testString);
	});
	it('Should decode and Encode when there are more then 10 char of the same in a sequence', () => {
		const testString = 'ABCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCDDDDDD';
		const encodedString = encode(testString);
		const result = decode(encodedString);

		assert.strictEqual(result, testString);
	});
});
