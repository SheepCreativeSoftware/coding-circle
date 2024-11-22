/* eslint-disable no-magic-numbers, no-console, id-length */
import { validateBrackets } from './bracket-validation';
import { validateBrackets as validateBracketsSinglePass } from './bracket-validation-single-pass';

const brackets = '(())(())(((()))()()()())()'.repeat(100_000);
const bracketsWithStars = '(())((*))(*((()))()***()()(**))((*)))'.repeat(100_000);

console.log('-------[MULTI-PASS]--------');
console.time('Normal');
for (let i = 0; i < 1000; i++) console.log(validateBrackets(brackets));
console.timeEnd('Normal');
console.time('Stars');
for (let i = 0; i < 1000; i++) console.log(validateBrackets(bracketsWithStars));
console.timeEnd('Stars');
console.log('-------[SINGLE-PASS]-------');
console.time('Normal');
for (let i = 0; i < 1000; i++) validateBracketsSinglePass(brackets);
console.timeEnd('Normal');
console.time('Stars');
for (let i = 0; i < 1000; i++) validateBracketsSinglePass(bracketsWithStars);
console.timeEnd('Stars');
console.log('-----------[END]-----------');
