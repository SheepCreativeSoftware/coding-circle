/* eslint-disable no-magic-numbers */
import { describe, it } from 'node:test';
import assert from 'node:assert';
import { validateBrackets } from './bracket-validation.js';

describe('validateBrackets', () => {
	describe('without special star sign', () => {
		it('returns true when there are as many opening as well as closing brackets', () => {
			const brackets = '()';

			assert.ok(validateBrackets(brackets));
		});
		it('returns true when there are as many opening as well as closing brackets - with many brackets', () => {
			const brackets = '(())(())(((()))()()()())()';

			assert.ok(validateBrackets(brackets));
		});
		it('returns false when there are as many opening as well as closing brackets but reversed', () => {
			const brackets = ')(';

			assert.ok(!validateBrackets(brackets));
		});
		it('returns false when there is a closing bracket missing', () => {
			const brackets = '(()';

			assert.ok(!validateBrackets(brackets));
		});
		it('returns false when there is a opening bracket missing', () => {
			const brackets = '(()';

			assert.ok(!validateBrackets(brackets));
		});
	});
	describe('with special star sign', () => {
		it('returns true when there is a star sign that compensates the missing bracket', () => {
			const brackets = '(*))';

			assert.ok(validateBrackets(brackets));
		});
		it('returns true when multiple missing brackets can be compensated by star signs', () => {
			const brackets = '((*)*())';

			assert.ok(validateBrackets(brackets));
		});
		it('returns true when there is a star signs that does not compensate anything missing', () => {
			const brackets = '((*))';

			assert.ok(validateBrackets(brackets));
		});
		it('returns false when there are closing brackets missing but not enough star signs to compensate', () => {
			const brackets = '((*';

			assert.ok(!validateBrackets(brackets));
		});
		it('returns false when there are open brackets missing but not enough star signs to compensate', () => {
			const brackets = '*))';

			assert.ok(!validateBrackets(brackets));
		});
	});
});
