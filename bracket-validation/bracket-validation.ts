
const validateBrackets = (bracketString: string): boolean => {
	let nestingLevel = 0;
	let availableStars = 0;
	for (const char of bracketString) {
		if (char === '(') nestingLevel++;
		else if (char === ')') nestingLevel--;
		else if (char === '*') availableStars++;

		// Bracket closed but was not open
		if (nestingLevel < 0 && availableStars > 0) {
			nestingLevel = 0;
			availableStars -= 1;
		}

		// Nesting level could not be compensated with a star
		if (nestingLevel < 0) return false;
	}

	if (nestingLevel === 0) return true;

	return false;
};

export { validateBrackets };
