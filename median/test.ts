
import * as assert from 'assert';
import { calcMedian, calcMedianOfList } from './median';

/* eslint-disable no-magic-numbers */
const listOfTransactions = [
	17, 2, 8, 27, 12, 9,
];
const listOfTheFinalMedian = [
	17, 9.5, 8, 12.5, 12, 10.5,
];
/* eslint-enable no-magic-numbers */
const expectedMedian = 10.5;

describe('#Test Median', () => {
	it('Should return the median of the list', () => {
		const median = calcMedian(listOfTransactions);
		assert.deepEqual(median, expectedMedian);
	});
	it('Should return the median of each of the elements', () => {
		const median = calcMedianOfList(listOfTransactions);
		assert.deepEqual(median, listOfTheFinalMedian);
	});
});
