/* eslint-disable no-magic-numbers */
import { ChangeList, markov } from './markov';
import { describe, it } from 'node:test';
import assert from 'node:assert';

describe('markov', () => {
	it('calculates the frequency of states in a Markov chain with 10.000 iterations', () => {
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
		const startState = 0;
		const iterations = 10_000;

		const result = markov(startState, iterations, changeList);

		assert.ok(result.a > 6200 && result.a < 6300);
		assert.ok(result.b > 3000 && result.b < 3200);
		assert.ok(result.c > 600 && result.c < 700);
	});
});
