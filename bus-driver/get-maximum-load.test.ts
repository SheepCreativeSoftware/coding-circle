/* eslint-disable no-magic-numbers */
import { BusStops, getMaximumLoad } from './get-maximum-load.js';
import { describe, it } from 'node:test';
import assert from 'node:assert';

describe('bus driver', () => {
	it('returns the time frame with count where the bus had the maximum load', () => {
		const busStops: BusStops = [
			{
				count: 3,
				time: 1709474171278,
				type: 'joined',
			},
			{
				count: 2,
				time: 1709474189660,
				type: 'left',
			},
			{
				count: 4,
				time: 1709474208675,
				type: 'joined',
			},
			{
				count: 2,
				time: 1709474229660,
				type: 'left',
			},
			{
				count: 4,
				time: 1709474258675,
				type: 'joined',
			},
			{
				count: 4,
				time: 1709474288675,
				type: 'joined',
			},
			{
				count: 7,
				time: 1709474309660,
				type: 'left',
			},
		];

		const result = getMaximumLoad(busStops);

		assert.strictEqual(result.count, 11);
		assert.strictEqual(result.from, 1709474288675);
		assert.strictEqual(result.until, 1709474309660);
	});
});
