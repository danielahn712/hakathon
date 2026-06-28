function findBestMatch(query) {
  const q = query.toLowerCase();
  let best = null;
  let bestScore = 0;

  for (const topic of KNOWLEDGE) {
    let score = 0;
    for (const kw of topic.keywords) {
      if (q.includes(kw)) score += kw.length;
    }
    if (score > bestScore) {
      bestScore = score;
      best = topic;
    }
  }

  return bestScore > 0 ? best : null;
}
