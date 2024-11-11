type States = number[];
type ChangeList = States[];

/** Calculates the likelihood of for one state */
const calcState = (lastResults: number[], stateList: States, iterations: number) => {
	let result = 0;
	for (let index = 0; index < stateList.length; index++) {
		const state = stateList[index];
		const lastResult = lastResults[index];
		result += state * lastResult;
	}

	// Resulting number cannot get bigger than the number of iterations
	return Math.round(result * iterations) / iterations;
};

/** Calculates the likelihood of all states */
const calcResults = (lastResults: number[], changeList: ChangeList, iterations: number) => {
	const newResults = Array(lastResults.length).fill(0) as number[];
	for (let index = 0; index < changeList.length; index++) {
		const stateList = changeList[index];
		newResults[index] = calcState(lastResults, stateList, iterations);
	}
	return newResults;
};

type ResultObject = {
	[key: string]: number
}

/** Turns an array to an object with alphanumeric keys */
const resultToObject = (results: number[]) => {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	if (results.length > alphabet.length) throw new Error('To many transisitions');

	const object: ResultObject = {};
	for (const [index, value] of results.entries()) object[alphabet[index]] = value;
	return object;
};

/** Calculates the number of possible states in an iteration of state changes, based on transition vectors */
const markov = (startState: number, iterations: number, changeList: ChangeList) => {
	const currentResults = Array(changeList.length).fill(0) as number[];
	currentResults[startState] = 1;

	for (let index = 0; index < iterations; index++) {
		const newResults = calcResults(currentResults, changeList, iterations);

		// Stop when results are repeating (at a certain point they are stabilize; probably after <1% of the iterations have happened)
		if (newResults.every((value, indexArray) => value === currentResults[indexArray])) break;

		// Copy new results in existing array
		currentResults.splice(0, currentResults.length, ...newResults);
	}

	// Result is the percentage and therefore it must be multiplied the iterations
	return resultToObject(currentResults.map((value) => Math.round(value * iterations)));
};


export { ChangeList, markov };

