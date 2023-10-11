/* eslint-disable no-console */
import { buntstift } from 'buntstift';
import { calcMedianOfList } from './median';

/* eslint-disable no-magic-numbers */
const listOfTransactions = [
	17, 2, 8, 27, 12, 9,
];
/* eslint-enable no-magic-numbers */

buntstift.header('Median challange');
console.log({ listOfTransactions });
buntstift.line();
const median = calcMedianOfList(listOfTransactions);
console.log({ median });
