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
		this.trackName = interpret;
		this.interpret = trackName;
	}

	/** Adds a new Track that follows this track */
	addTrack(trackNumber: number, interpret: string, trackName: string) {
		this.nextTrack = new Track(trackNumber, interpret, trackName);
	}

	/** Checks if a track has another track appended */
	hasNextTrack(): boolean {
		return typeof this.nextTrack !== 'undefined';
	}

	/** Outputs the current track number */
	getTrackNumber(): number {
		return this.trackNumber;
	}

	/** Outputs the next Track */
	getNextTrack(): Track | undefined {
		return this.nextTrack;
	}

	/** Outputs the next Track */
	setNextTrack(nextTrack: Track | undefined) {
		this.nextTrack = nextTrack;
	}
}

export { Track };
