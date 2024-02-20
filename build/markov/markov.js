"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.markov = void 0;
const calcState = (lastResults, stateList, iterations) => {
    let result = 0;
    for (let index = 0; index < stateList.length; index++) {
        const state = stateList[index];
        const lastResult = lastResults[index];
        result += state * lastResult;
    }
    return Math.round(result * iterations) / iterations;
};
const calcResults = (lastResults, changeList, iterations) => {
    const newResults = Array(lastResults.length).fill(0);
    for (let index = 0; index < changeList.length; index++) {
        const stateList = changeList[index];
        newResults[index] = calcState(lastResults, stateList, iterations);
    }
    return newResults;
};
const resultToObject = (results) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const object = {};
    for (const [index, value] of results.entries())
        object[alphabet[index]] = value;
    return object;
};
const markov = (startState, iterations, changeList) => {
    const currentResults = Array(changeList.length).fill(0);
    currentResults[startState] = 1;
    for (let index = 0; index < iterations; index++) {
        const newResults = calcResults(currentResults, changeList, iterations);
        //if(newResults[0] === currentResults[0]) break;
        // Copy new results in existing array
        currentResults.splice(0, currentResults.length, ...newResults);
    }
    return resultToObject(currentResults.map((value) => Math.round(value * iterations)));
};
exports.markov = markov;
