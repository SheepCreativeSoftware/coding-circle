import { BusStops, getMaximumLoad } from './getMaximumLoad';

const events: BusStops = [
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

console.log(getMaximumLoad(events));
