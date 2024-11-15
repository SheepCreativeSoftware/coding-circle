/**
 * Write a Function to encode and decode
 * It should turn a string like:
 * ABBCCCDDDD into:
 * 1A2B3C4D
 *
 * Only chars from A to Z in Uppercase
 */

const zero = 0;
const next = 1;

const encode = (plainText: string) => {
	let currentCount = zero;
	let currentChar = '';
	let encodedText = '';

	for (const char of plainText) {
		if (currentChar === char) {
			currentCount++;
		} else {
			// If char is differrent and a count is set then store it
			if (currentCount !== zero) encodedText += `${currentCount}${currentChar}`;
			currentCount = next;
			currentChar = char;
		}
	}

	// Store last result as loop ends before storing the last values
	if (currentCount !== zero) encodedText += `${currentCount}${currentChar}`;
	return encodedText;
};

const multiplyChar = (char: string, count: number) => {
	let result = '';
	for (let index = 0; index < count; index++) result += char;
	return result;
};

const factor = 10;
const decode = (encodedText: string) => {
	let currentCount = zero;
	let currentChar = '';
	let decodedText = '';

	for (const char of encodedText) {
		// If number is bigger than
		if (currentCount > zero && !isNaN(Number(char))) {
			currentCount = currentCount * factor + Number(char);
			continue;
		}

		// String contains numbers and strings - separate them by checking for NaN
		if (isNaN(Number(char))) currentChar = char;
		else currentCount = Number(char);
		if (currentChar !== '' && currentCount > zero) {
			decodedText += multiplyChar(currentChar, currentCount);
			currentChar = '';
			currentCount = zero;
		}
	}
	return decodedText;
};

export { decode, encode };
