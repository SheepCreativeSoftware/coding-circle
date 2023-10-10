"use strict";
/**
 * @module Playlist
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Playlist = void 0;
const track_1 = require("./track");
const firstTrackNumber = 1;
const incrementByOne = 1;
const jsonSpaceSize = 2;
/** Creates a empty Playlist */
class Playlist {
    root;
    constructor() {
        // eslint-disable-next-line no-undefined
        this.root = undefined;
    }
    /** Appends a new track to the list */
    addTrackToList(interpret, trackName) {
        let currentTrack = this.root;
        if (typeof currentTrack === 'undefined') {
            this.root = new track_1.Track(firstTrackNumber, interpret, trackName);
            return;
        }
        // Loop though to get the last Track
        while (currentTrack?.hasNextTrack())
            currentTrack = currentTrack?.getNextTrack();
        // Appends the Track to the last element
        if (!currentTrack?.hasNextTrack())
            currentTrack?.addTrack(currentTrack.getTrackNumber() + incrementByOne, interpret, trackName);
    }
    /** Outputs the lsit as json stringified List */
    outputList() {
        return JSON.stringify(this.root, null, jsonSpaceSize);
    }
    /** Removes the next track and keep every following track */
    removeOnlyNextTrack(thatTrack) {
        if (typeof thatTrack === 'undefined')
            throw new Error('Cannot delete undefinded');
        thatTrack.setNextTrack(thatTrack.getNextTrack()?.getNextTrack());
    }
    removeTrackFromEnd(elementPosition) {
        let currentTrack = this.root;
        if (typeof currentTrack === 'undefined')
            throw new Error('Playlist has no track');
        // Loop through every the complete list
        while (currentTrack.hasNextTrack()) {
            currentTrack = currentTrack?.getNextTrack();
            let currentNextTrack = currentTrack;
            // Check whether the Track is followed by at least that many Track as we search for
            for (let index = 0; index <= elementPosition; index++) {
                if (index === elementPosition && !currentNextTrack?.hasNextTrack()) {
                    // Found the last element if it has no next track
                    this.removeOnlyNextTrack(currentTrack);
                    return;
                }
                currentNextTrack = currentNextTrack?.getNextTrack();
            }
            if (typeof currentTrack === 'undefined')
                throw new Error('Element not found');
        }
    }
}
exports.Playlist = Playlist;
