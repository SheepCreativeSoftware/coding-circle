import { createHash } from 'crypto';

// 32 bits in an integer
const NIBBLES_IN_INT = 8;

const createBloomFilter = (size: number, hashIterations: number) => {
	const bloomFilter = new Array(size).fill(false);

	const hashFunction = (value: string): number => {
		const hash = createHash('sha1');
		hash.update(value);
		const hashSlice = hash.digest('hex').slice(0, NIBBLES_IN_INT);
		return parseInt(hashSlice, 16);
	};


	return {
		add: (value: string) => {
			for (let iteration = 0; iteration < hashIterations; iteration++) {
				const index = hashFunction(value + iteration) % size;
				bloomFilter[index] = true;
			}
		},
		has: (value: string) => {
			for (let iteration = 0; iteration < hashIterations; iteration++) {
				const index = hashFunction(value + iteration) % size;
				if (!bloomFilter[index]) return false;
			}

			return true;
		},
	};
};

export { createBloomFilter };

