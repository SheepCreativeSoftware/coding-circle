"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcMedianOfList = exports.calcMedian = void 0;
const even_1 = require("./even");
const halfOfThat = 2;
const previousElement = 1;
/** Calculates the median of the given array */
const calcMedian = (numbers) => {
    const middle = Math.floor(numbers.length / halfOfThat);
    const sortedNumbers = [...numbers].sort((first, second) => first - second);
    if ((0, even_1.isEven)(numbers.length))
        return (sortedNumbers[middle - previousElement] + sortedNumbers[middle]) / halfOfThat;
    return sortedNumbers[middle];
};
exports.calcMedian = calcMedian;
const firstElement = 0;
/** Calculates the Median for each of the elements in the list */
const calcMedianOfList = (list) => {
    const median = [];
    for (let index = 1; index <= list.length; index++) {
        const currentList = list.slice(firstElement, index);
        median.push(calcMedian(currentList));
    }
    return median;
};
exports.calcMedianOfList = calcMedianOfList;
