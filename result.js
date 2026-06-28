const resultEl = document.getElementById("result");

const params = new URLSearchParams(window.location.search);
const query = (params.get("q") || "").trim();

function renderTopic(topic, query) {
  const queriedAs = document.createElement("p");
  queriedAs.className = "result-query";
  queriedAs.textContent = `Showing results for "${query}"`;
  resultEl.appendChild(queriedAs);

  const title = document.createElement("h2");
  title.className = "steps-title result-title";
  title.textContent = topic.title;
  resultEl.appendChild(title);

  const list = document.createElement("ol");
  list.className = "steps-list result-list";
  topic.steps.forEach((step) => {
    const li = document.createElement("li");
    li.textContent = step;
    list.appendChild(li);
  });
  resultEl.appendChild(list);

  const again = document.createElement("a");
  again.href = "search.html";
  again.className = "landing-cta result-cta";
  again.textContent = "Search Something Else";
  resultEl.appendChild(again);
}

function renderNoMatch(query) {
  const queriedAs = document.createElement("p");
  queriedAs.className = "result-query";
  queriedAs.textContent = `No exact match for "${query}"`;
  resultEl.appendChild(queriedAs);

  const sample = [...FALLBACK_TOPICS]
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);

  const msg = document.createElement("p");
  msg.className = "about-text result-fallback";
  msg.textContent = `I cover ${FALLBACK_TOPICS.length} essential skills. Try searching for: ${sample.join(", ")}.`;
  resultEl.appendChild(msg);

  const again = document.createElement("a");
  again.href = "search.html";
  again.className = "landing-cta result-cta";
  again.textContent = "Try Another Search";
  resultEl.appendChild(again);
}

if (!query) {
  renderNoMatch("(empty search)");
} else {
  const topic = findBestMatch(query);
  if (topic) {
    renderTopic(topic, query);
  } else {
    renderNoMatch(query);
  }
}
