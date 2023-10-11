"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
const buntstift_1 = require("buntstift");
const median_1 = require("./median");
/* eslint-disable no-magic-numbers */
const listOfTransactions = [
    17, 2, 8, 27, 12, 9,
];
/* eslint-enable no-magic-numbers */
buntstift_1.buntstift.header('Median challange');
console.log({ listOfTransactions });
buntstift_1.buntstift.line();
const median = (0, median_1.calcMedianOfList)(listOfTransactions);
console.log({ median });
