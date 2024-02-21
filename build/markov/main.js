"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
const markov_1 = require("./markov");
/* eslint-disable no-magic-numbers */
/**
 * Transistion Matrix
 * Must be squared and each column must have a sum that equals 1
 * Transisiton order from column to row
 */
const changeList = [
    [0.9, 0.15, 0.25],
    [0.075, 0.8, 0.25],
    [0.025, 0.05, 0.5],
];
/* eslint-enable no-magic-numbers */
const startState = 0;
const iterations = 10_000;
console.log((0, markov_1.markov)(startState, iterations, changeList));
