
/* eslint-disable no-magic-numbers */
import { calcMedian, calcMedianOfList } from './median';
import { describe, it } from 'node:test';
import assert from 'node:assert';

describe('#Test Median', () => {
	describe('calcMedian', () => {
		it('returns the median of the list', () => {
			const listOfTransactions = [
				17, 2, 8, 27, 12, 9,
			];

			const median = calcMedian(listOfTransactions);

			assert.deepEqual(median, 10.5);
		});
	});
	describe('calcMedianOfList', () => {
		it('returns the median of each of the elements', () => {
			const listOfTransactions = [
				17, 2, 8, 27, 12, 9,
			];
			const listOfTheFinalMedian = [
				17, 9.5, 8, 12.5, 12, 10.5,
			];

			const median = calcMedianOfList(listOfTransactions);

			assert.deepEqual(median, listOfTheFinalMedian);
		});
	});
});
