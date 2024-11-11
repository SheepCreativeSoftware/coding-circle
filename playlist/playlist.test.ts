/* eslint-disable sort-keys */
/* eslint-disable no-magic-numbers */
import { describe, it } from 'node:test';
import assert from 'node:assert';
import { Playlist } from './playlist';

describe('Playlist', () => {
	it('should add a track to the list', () => {
		const expected = {
			interpret: 'Magraina',
			trackName: 'The Song',
			trackNumber: 1,
		};
		const playlist = new Playlist;
		playlist.addTrackToList('Magraina', 'The Song');

		const result = playlist.outputList();

		assert.deepStrictEqual(result, expected);
	});
	it('should remove the second to last element', () => {
		const expected = {
			interpret: 'Magraina',
			trackName: 'The Song',
			trackNumber: 1,
			nextTrack: {
				interpret: 'Magraina',
				trackName: 'The Orchestra',
				trackNumber: 2,
				nextTrack: {
					interpret: 'Magraina',
					trackName: 'Last bit has left',
					trackNumber: 3,
					nextTrack: {
						interpret: 'Magraina',
						trackName: 'The Final Song',
						trackNumber: 5,
					},
				},
			},
		};
		const playlist = new Playlist;
		playlist.addTrackToList('Magraina', 'The Song');
		playlist.addTrackToList('Magraina', 'The Orchestra');
		playlist.addTrackToList('Magraina', 'Last bit has left');
		playlist.addTrackToList('Magraina', 'Funny moments');
		playlist.addTrackToList('Magraina', 'The Final Song');

		playlist.removeTrackFromEnd(2);
		const result = playlist.outputList();

		assert.deepStrictEqual(result, expected);
	});
});
