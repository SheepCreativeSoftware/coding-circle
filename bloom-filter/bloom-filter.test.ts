/* eslint-disable no-magic-numbers */
import { describe, it } from 'node:test';
import assert from 'node:assert';
import { createBloomFilter } from './bloom-filter.js';

describe('bloom filter', () => {
	it('identify evil domains', () => {
		const bloomFilter = createBloomFilter(500, 10);
		bloomFilter.add('evil.com');
		bloomFilter.add('malware.com');
		bloomFilter.add('phishing.com');

		assert.ok(bloomFilter.has('evil.com'));
		assert.ok(bloomFilter.has('malware.com'));
		assert.ok(bloomFilter.has('phishing.com'));
	});
	it('identify non-evil domains', () => {
		const bloomFilter = createBloomFilter(500, 10);
		bloomFilter.add('evil.com');
		bloomFilter.add('malware.com');
		bloomFilter.add('phishing.com');

		assert.ok(!bloomFilter.has('good.com'));
		assert.ok(!bloomFilter.has('example.com'));
		assert.ok(!bloomFilter.has('safe.com'));
	});
});
