/**
 * @module Playlist
 */

import { Track } from './track';

const firstTrackNumber = 1;
const incrementByOne = 1;
const jsonSpaceSize = 2;

/** Creates a empty Playlist */
class Playlist {
	private root: Track | undefined;
	constructor() {
		// eslint-disable-next-line no-undefined
		this.root = undefined;
	}

	/** Appends a new track to the list */
	addTrackToList(interpret: string, trackName: string): void {
		let currentTrack = this.root;
		if(typeof currentTrack === 'undefined') {
			this.root = new Track(firstTrackNumber, interpret, trackName);
			return;
		}

		// Loop though to get the last Track
		while(currentTrack?.hasNextTrack()) currentTrack = currentTrack?.getNextTrack();

		// Appends the Track to the last element
		if(!currentTrack?.hasNextTrack()) currentTrack?.addTrack(currentTrack.getTrackNumber() + incrementByOne, interpret, trackName);
	}

	/** Outputs the lsit as json stringified List */
	outputList(): string {
		return JSON.stringify(this.root, null, jsonSpaceSize);
	}

	/** Removes the next track and keep every following track */
	private removeOnlyNextTrack(thatTrack: Track | undefined) {
		if(typeof thatTrack === 'undefined') throw new Error('Cannot delete undefinded');
		thatTrack.setNextTrack(thatTrack.getNextTrack()?.getNextTrack());
	}

	removeTrackFromEnd(elementPosition: number) {
		let currentTrack = this.root;
		if(typeof currentTrack === 'undefined') throw new Error('Playlist has no track');

		// Loop through every the complete list
		while(currentTrack.hasNextTrack()) {
			currentTrack = currentTrack?.getNextTrack();
			let currentNextTrack = currentTrack;

			// Check whether the Track is followed by at least that many Track as we search for
			for(let index = 0; index <= elementPosition; index++) {
				if(index === elementPosition && !currentNextTrack?.hasNextTrack()) {
					// Found the last element if it has no next track
					this.removeOnlyNextTrack(currentTrack);
					return;
				}
				currentNextTrack = currentNextTrack?.getNextTrack();
			}
			if(typeof currentTrack === 'undefined') throw new Error('Element not found');
		}
	}
}

export { Playlist };
