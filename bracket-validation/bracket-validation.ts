
const validateBrackets = (bracketString: string): boolean => {
	let bracketCount = 0;
	let starCount = 0;
	for (const char of bracketString) {
		if (char === '(') bracketCount++;
		else if (char === ')') bracketCount--;
		else if (char === '*') starCount++;

		// Negative count means a missing opening bracket
		if (bracketCount + starCount < 0) return false;
	}

	if (bracketCount === 0) return true;

	// Star signs can compensate missing brackets if there at least as many available
	if (starCount !== 0 && bracketCount <= starCount) return true;

	return false;
};

export { validateBrackets };
