"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert = __importStar(require("assert"));
const median_1 = require("./median");
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
        const median = (0, median_1.calcMedian)(listOfTransactions);
        assert.deepEqual(median, expectedMedian);
    });
    it('Should return the median of each of the elements', () => {
        const median = (0, median_1.calcMedianOfList)(listOfTransactions);
        assert.deepEqual(median, listOfTheFinalMedian);
    });
});
