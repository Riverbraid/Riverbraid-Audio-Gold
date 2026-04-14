const crypto = require('crypto');
function preprocessAudioChunk(audioBuffer) {
    const hash = crypto.createHash('sha256').update(audioBuffer).digest('hex');
    return {
        source: 'Audio',
        value: { chunk_hash: hash, timestamp: Date.now() },
        trustWeight: 1.0,
        signature: `SIG:${hash}`
    };
}
module.exports = { preprocessAudioChunk };
