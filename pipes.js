'use strict';

const INNER_DIAMETER = 0.59;
const OUTER_DIAMETER = 0.625;
const INNER_RADIUS = diameterInchesToRadiusMeters(INNER_DIAMETER);
const OUTER_RADIUS = diameterInchesToRadiusMeters(OUTER_DIAMETER);
const K = Math.sqrt(INNER_RADIUS ** 2 + OUTER_RADIUS ** 2) / 2;
const SPEED_OF_SOUND_MATERIAL = 3650;

function diameterInchesToRadiusMeters(d) {
  const inR = d / 2;
  const mR = inR / 39.370;
  return mR;
}

function metersToInches(m) {
  return m * 39.37007874;
}

function lengthOfNote(freqOfNote) {
  return Math.sqrt((Math.PI * SPEED_OF_SOUND_MATERIAL * K * (3.0112 ** 2)) / (8 * freqOfNote));
}

const baseFreqs = [
  174.614,
  184.997,
  195.998,
  207.652,
  220,
  233.082,
  246.942,
  261.626,
  277.183,
  293.665,
  311.127,
  329.628,
  349.228,
  369.994,
  391.995,
  415.305,
  440,
  466.164,
  493.883,
  523.251,
  554.365,
  587.33,
  622.254,
  659.255,
  698.456,
  739.989,
  783.991,
  830.609,
  880,
  932.328,
  987.767,
  1046.502
];

const freqs = baseFreqs.slice(12).map(freq => freq * 4);

const lengthsOfNotes = freqs.map(freq => lengthOfNote(freq));

const lengthsInInches = lengthsOfNotes.map(length => metersToInches(length));

//console.log(lengthsOfNotes);
console.log(lengthsInInches);

const total = lengthsOfNotes.reduce(((sum, noteLength) => sum + noteLength));

console.log(metersToInches(total));
