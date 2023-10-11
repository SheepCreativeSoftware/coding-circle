import { isEven } from './even';

const halfOfThat = 2;
const previousElement = 1;

/** Calculates the median of the given array */
const calcMedian = (numbers: number[]): number => {
	const middle = Math.floor(numbers.length / halfOfThat);

	// Destructuring is needed to not change the original array and make a sorted copy
	const sortedNumbers = [...numbers].sort((first, second) => first - second);
	if(isEven(numbers.length)) return (sortedNumbers[middle - previousElement] + sortedNumbers[middle]) / halfOfThat;
	return sortedNumbers[middle];
};

const firstElement = 0;

/** Calculates the Median for each of the elements in the list */
const calcMedianOfList = (list: number[]): number[] => {
	const median = [];
	for(let index = 1; index <= list.length; index++) {
		const currentList = list.slice(firstElement, index);
		median.push(calcMedian(currentList));
	}
	return median;
};

export { calcMedian, calcMedianOfList };
