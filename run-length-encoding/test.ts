
import * as assert from 'assert';
import { decode, encode } from './main';


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
});
