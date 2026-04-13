'use strict';
const PETAL = 'ACOUSTIC_CHANNEL';
const MERKLE_ROOT = 'de2062';
const SIGNAL = 'ACOUSTIC-CHANNEL';
const MAX_FRAME_BYTES = 4096;

function ingest(buffer) {
  if (!Buffer.isBuffer(buffer) && !ArrayBuffer.isView(buffer))
    throw new Error('ACOUSTIC_CHANNEL:REJECT — input must be a Buffer');
  if (buffer.length === 0 || buffer.length > MAX_FRAME_BYTES)
    throw new Error('ACOUSTIC_CHANNEL:REJECT — invalid buffer length');
  return { status: 'INGESTED', byte_count: buffer.length, merkle_root: MERKLE_ROOT };
}

function getStatus() {
  return { petal: PETAL, merkle_root: MERKLE_ROOT,
    invariant_status: `[Signal: ${SIGNAL} | Braid: CLOSED-LOOP]` };
}

module.exports = { ingest, getStatus, PETAL, MERKLE_ROOT };
