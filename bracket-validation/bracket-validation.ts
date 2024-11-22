// eslint-disable-next-line complexity
const validateBrackets = (bracketString: string): boolean => {
	let nestingLevel = 0;
	let availableStars = 0;
	let possibleOpeningBracket = 0;
	for (let index = 0; index < bracketString.length; index++) {
		const char = bracketString[index];

		if (char === '(') nestingLevel++;
		else if (char === ')') nestingLevel--;
		else if (char === '*' && index === 0) possibleOpeningBracket++;
		else if (char === '*') availableStars++;

		// Bracket closed but was not open
		if (nestingLevel < 0) {
			if (availableStars > 0) {
				nestingLevel = 0;
				availableStars -= 1;
			} else if (possibleOpeningBracket > 0) {
				nestingLevel = 0;
				possibleOpeningBracket -= 1;
			}
		}

		// Nesting level could not be compensated with a star
		if (nestingLevel < 0) return false;
	}

	if (nestingLevel === 0) return true;

	// Star signs can compensate missing brackets if there at least as many available
	if (nestingLevel <= availableStars) return true;

	return false;
};

export { validateBrackets };
