const replaceCharAtPosition = (str: string, replacement: string, position: number) => {
	return `${str.substring(0, position)}${replacement}${str.substring(position + replacement.length)}`;
};

const replaceStarSignAndTryAgain = (replaceLast: boolean, replacement: string) => {
	return (bracketString: string, missingBrackets: number) => {
		let newBracketString = bracketString;

		for (let index = 0; index < missingBrackets; index++) {
			let position = -1;
			if (replaceLast) position = newBracketString.lastIndexOf('*');
			else position = newBracketString.indexOf('*');

			if (position === -1) return false;

			newBracketString = replaceCharAtPosition(newBracketString, replacement, position);
		}

		return validateBrackets(newBracketString);
	};
};

const replaceFirstStarAndTryAgain = replaceStarSignAndTryAgain(false, '(');
const replaceLastStarAndTryAgain = replaceStarSignAndTryAgain(true, ')');

const sumOfArray = (array: number[]): number => {
	return array.reduce((previous, current) => previous + current);
};

const validateBrackets = (bracketString: string): boolean => {
	const charMap: number[] = [];
	let nestingLevel = 0;
	for (const char of bracketString) {
		if (char === '(') charMap.push(1);
		else if (char === ')') charMap.push(-1);
		else if (char === '*') charMap.push(0);

		nestingLevel = sumOfArray(charMap);

		// No stars to compensate missing opening bracket
		if (nestingLevel < 0 && !charMap.includes(0)) return false;
	}

	if (nestingLevel === 0) return true;

	// No stars to compensate missing brackets
	if (!bracketString.includes('*')) return false;

	// Missing closing bracket
	if (nestingLevel > 0) return replaceLastStarAndTryAgain(bracketString, nestingLevel);

	// Missing opening bracket
	return replaceFirstStarAndTryAgain(bracketString, Math.abs(nestingLevel));
};

export { validateBrackets };
