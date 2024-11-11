type BusStopType = 'joined' | 'left';

type BusStop = {
	time: number,
	type: BusStopType,
	count: number,
}

type BusStops = BusStop[];

type MaximumLoad = {
	count: number,
	from: number,
	until: number,
}

const getCurrentLoad = (previousLoad: number, count: number, type: BusStopType) => {
	if (type === 'joined') return previousLoad + count;
	return previousLoad - count;
};

const getMaximumLoad = (events: BusStops): MaximumLoad => {
	let currentLoad = 0;
	const maximumLoad: MaximumLoad = {
		count: 0,
		from: 0,
		until: 0,
	};

	for (let index = 0; index < events.length; index++) {
		const event = events[index];
		currentLoad = getCurrentLoad(currentLoad, event.count, event.type);

		if (maximumLoad.count < currentLoad) {
			maximumLoad.count = currentLoad;
			maximumLoad.from = event.time;

			// If at the last entry then asume the same time for `from` and `until`
			if (events[index + 1]) maximumLoad.until = events[index + 1].time;
			else maximumLoad.until = event.time;
		}
	}

	return maximumLoad;
};

export { getMaximumLoad, BusStops };
