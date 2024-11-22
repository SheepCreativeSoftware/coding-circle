// eslint-disable-next-line complexity
const isBalanced = (bracketString: string, openChar: string, closeChar: string): boolean => {
	let nestingLevel = 0;
	let availableStars = 0;
	for (let index = 0; index < bracketString.length; index++) {
		const char = bracketString[index];

		if (char === openChar) {
			nestingLevel++;
		} else if (char === closeChar) {
			nestingLevel--;

			// Bracket closed but was not open - try to compensate with a star
			if (nestingLevel < 0) {
				if (availableStars > 0) {
					nestingLevel = 0;
					availableStars -= 1;
				} else {
					// Nesting level could not be compensated with a star
					return false;
				}
			}
		} else if (char === '*') {
			availableStars++;
		}
	}

	// Star signs can compensate missing brackets if there is at least the same amount available
	return nestingLevel === 0 || nestingLevel <= availableStars;
};

const reverseBracketString = (bracketString: string): string => {
	return bracketString.split('').reverse().join('');
};

const validateBrackets = (bracketString: string): boolean => {
	if (!isBalanced(bracketString, '(', ')')) return false;
	return isBalanced(reverseBracketString(bracketString), ')', '(');
};

export { validateBrackets };
