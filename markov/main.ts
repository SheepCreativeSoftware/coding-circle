/* eslint-disable no-console */
import { ChangeList, markov } from './markov';

/* eslint-disable no-magic-numbers */
/**
 * Transistion Matrix
 * Must be squared and each column must have a sum that equals 1
 * Transisiton order from column to row
 */
const changeList: ChangeList = [
	[0.9, 0.15, 0.25],
	[0.075, 0.8, 0.25],
	[0.025, 0.05, 0.5],
];
/* eslint-enable no-magic-numbers */

const startState = 0;
const iterations = 10_000;
console.time('Time');
console.log(markov(startState, iterations, changeList));
console.timeEnd('Time');
