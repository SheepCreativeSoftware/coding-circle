/**
 * @module Track
 */


class Track {
	private trackNumber: number;
	private interpret: string;
	private trackName: string;
	nextTrack: Track | undefined;
	constructor(trackNumber: number, interpret: string, trackName: string) {
		this.trackNumber = trackNumber;
		this.trackName = trackName;
		this.interpret = interpret;
	}

	/** Adds a new Track that follows this track */
	addTrack(trackNumber: number, interpret: string, trackName: string) {
		this.nextTrack = new Track(trackNumber, interpret, trackName);
	}

	/** Outputs the current track number */
	getTrackNumber(): number {
		return this.trackNumber;
	}

	/** Outputs the next Track */
	setNextTrack(nextTrack: Track | undefined) {
		this.nextTrack = nextTrack;
	}
}

export { Track };
