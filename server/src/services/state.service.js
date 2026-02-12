const activeTracks = new Map(); 
// key: track_id, value: last_seen timestamp

function isDuplicate(track_id) {
  const now = Date.now();

  if (activeTracks.has(track_id)) {
    const last = activeTracks.get(track_id);

    if (now - last < 10000) { 
      // 10 sec window
      return true;
    }
  }

  activeTracks.set(track_id, now);
  return false;
}

module.exports = { isDuplicate };