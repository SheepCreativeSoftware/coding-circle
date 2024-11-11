import { buntstift } from 'buntstift';

/* eslint-disable no-magic-numbers */
const input = [
	27, 9, 12, 8, 17, 2,
];
/* eslint-enable no-magic-numbers */

const one = 1;
const minArraySize = 3;

const exceptForOne = (numbers: number[]): number[] => {
	const result = Array(numbers.length).fill(one);
	if (numbers.length < minArraySize) throw new Error('Array is to small');
	for (let indexA = 0; indexA < numbers.length; indexA++) {
		// ...
		for (let indexB = 0; indexB < numbers.length; indexB++) {
			// ...
			if (indexA !== indexB) result[indexA] *= numbers[indexB];
		}
	}
	return result;
};

buntstift.info(JSON.stringify(exceptForOne(input)));

export { exceptForOne };
