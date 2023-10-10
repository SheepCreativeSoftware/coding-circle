"use strict";
/**
 * @module Track
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Track = void 0;
class Track {
    trackNumber;
    interpret;
    trackName;
    nextTrack;
    constructor(trackNumber, interpret, trackName) {
        this.trackNumber = trackNumber;
        this.trackName = interpret;
        this.interpret = trackName;
    }
    /** Adds a new Track that follows this track */
    addTrack(trackNumber, interpret, trackName) {
        this.nextTrack = new Track(trackNumber, interpret, trackName);
    }
    /** Checks if a track has another track appended */
    hasNextTrack() {
        return typeof this.nextTrack !== 'undefined';
    }
    /** Outputs the current track number */
    getTrackNumber() {
        return this.trackNumber;
    }
    /** Outputs the next Track */
    getNextTrack() {
        return this.nextTrack;
    }
    /** Outputs the next Track */
    setNextTrack(nextTrack) {
        this.nextTrack = nextTrack;
    }
}
exports.Track = Track;
