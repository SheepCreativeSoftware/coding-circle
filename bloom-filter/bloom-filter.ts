import { createHash } from 'crypto';

// 32 bits in an integer
const BYTES_INT32 = 4;

const createBloomFilter = (size: number, hashIterations: number) => {
	const bloomFilter = new Array(size).fill(false);

	const hashFunction = (value: string): number => {
		const firstBytes = createHash('sha1').update(value).digest();

		// Limit output to 32 bits
		return firstBytes.readUint32BE(0);
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

