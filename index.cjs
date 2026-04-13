'use strict';
const { readFileSync } = require('fs');
const SIGNAL = 'ACOUSTIC_CHANNEL';
const ANCHOR = 'de2062';

function loadVectors() {
  const v = JSON.parse(readFileSync('./acoustic.vectors', 'utf8'));
  if (v.anchor !== ANCHOR || v.signal !== SIGNAL) {
    throw new Error('ANCHOR_OR_SIGNAL_MISMATCH');
  }
  return v;
}

exports.getStatus = () => ({
  petal: 'Audio-Gold',
  signal: SIGNAL,
  anchor: ANCHOR,
  status: 'STATIONARY'
});
exports.loadVectors = loadVectors;
