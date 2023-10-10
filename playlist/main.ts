/* eslint-disable no-console */
import { buntstift } from 'buntstift';
import { Playlist } from './playlist';

const playlist = new Playlist;

const secondLastElement = 2;

buntstift.header('Playlist challange');

playlist.addTrackToList('Magraina', 'The Song');
playlist.addTrackToList('Magraina', 'The Orchestra');
playlist.addTrackToList('Magraina', 'Last bit has left');
playlist.addTrackToList('Magraina', 'Funny moments');
playlist.addTrackToList('Magraina', 'The Final Song');
buntstift.info('Output full list');
console.log(playlist.outputList());
buntstift.line();

console.log(playlist.removeTrackFromEnd(secondLastElement));

buntstift.info('Output full list without the second to last element');
console.log(playlist.outputList());
buntstift.line();
