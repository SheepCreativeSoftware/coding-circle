const validateBrackets = (bracketString: string): boolean => {
	let counterMax = 0;
	let counterMin = 0;
	for (const char of bracketString) {
		if (char === '(') {
			counterMax++;
			counterMin++;
		} else if (char === ')') {
			counterMax--;
			counterMin = Math.max(0, counterMin - 1);
		} else if (char === '*') {
			counterMax++;
			counterMin = Math.max(0, counterMin - 1);
		}

		// Closing Bracket without opening or star before
		if (counterMax < 0) return false;
	}

	return counterMin === 0;
};

export { validateBrackets };
