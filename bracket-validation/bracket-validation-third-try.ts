const countAvailableStars = (array: number[]): number => {
	return array.reduce((previous, current, index) => {
		// Ignore first index as it only can be a opening bracket
		if (index !== 0 && current === 0) return previous + 1;
		return previous;
	}, 0);
};

const calcBalanceReducer = (previous: number, current: number, index: number, array: number[]): number => {
	const result = previous + current;

	// Missing opening bracket
	if (result < 0) {
		const firstStarPosition = array.indexOf(0);
		if (firstStarPosition !== -1 && firstStarPosition < index) {
			// Consider star as a opening bracket
			array[firstStarPosition] = 1;

			return 0;
		}
		throw new Error('Missing opening bracket');
	}

	// Missing closing bracket
	if (index === array.length - 1 && result > 0 && countAvailableStars(array) >= result) return 0;

	return result;
};

const validateBrackets = (bracketString: string): boolean => {
	const charMap: number[] = [];

	for (const char of bracketString) {
		if (char === '(') charMap.push(1);
		else if (char === ')') charMap.push(-1);
		else if (char === '*') charMap.push(0);
	}

	try {
		const balance = charMap.reduce(calcBalanceReducer, 0);

		return balance === 0;
	} catch {
		return false;
	}
};

export { validateBrackets };
