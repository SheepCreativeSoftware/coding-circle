/**
 * @module Playlist
 */

import { Track } from './track';

const firstTrackNumber = 1;
const incrementByOne = 1;

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
		if (typeof currentTrack === 'undefined') {
			this.root = new Track(firstTrackNumber, interpret, trackName);
			return;
		}

		// Loop though to get the last Track
		while (typeof currentTrack.nextTrack !== 'undefined') currentTrack = currentTrack.nextTrack;

		if (typeof currentTrack.nextTrack === 'undefined') {
			// Appends the Track to the last element
			currentTrack.addTrack(currentTrack.getTrackNumber() + incrementByOne, interpret, trackName);
		}
	}

	outputList(): Track | undefined {
		return JSON.parse(JSON.stringify(this.root));
	}

	/** Removes the next track and keep every following track */
	private removeOnlyNextTrack(thatTrack: Track) {
		if (thatTrack && thatTrack.nextTrack) thatTrack.setNextTrack(thatTrack.nextTrack.nextTrack);
		else throw new Error('Cannot delete undefinded');
	}

	/** Removes elements begining at the position from the end */
	removeTrackFromEnd(elementPosition: number) {
		let currentTrack = this.root;
		if (typeof currentTrack === 'undefined') throw new Error('Playlist has no track');

		// Loop through every the complete list
		while (typeof currentTrack.nextTrack !== 'undefined') {
			let currentNextTrack = currentTrack as Track | undefined;

			// Check whether the Track is followed by at least that many Track as we search for
			for (let index = 0; index <= elementPosition; index++) {
				if (typeof currentNextTrack === 'undefined') throw new Error('Tracklist shorter than search position');
				if (index === elementPosition && typeof currentNextTrack.nextTrack === 'undefined') {
					// Found the last element if it has no next track and is on the right position
					this.removeOnlyNextTrack(currentTrack);
					return;
				}
				currentNextTrack = currentNextTrack.nextTrack;
			}
			currentTrack = currentTrack.nextTrack;
		}
	}
}

export { Playlist };
