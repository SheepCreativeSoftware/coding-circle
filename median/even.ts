
const zero = 0;
const moduloByTwo = 2;

/** Returns true if the number is even */
const isEven = (number: number): boolean => {
	// The number is even if a division by two has no remainder
	return number % moduloByTwo === zero;
};

export { isEven };
