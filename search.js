const formEl = document.getElementById("search-form");
const inputEl = document.getElementById("search-input");
const chipsEl = document.getElementById("chips");

function goToResult(query) {
  window.location.href = "result.html?q=" + encodeURIComponent(query);
}

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = inputEl.value.trim();
  if (!query) return;
  goToResult(query);
});

function renderChips() {
  chipsEl.innerHTML = "";
  const sample = [...FALLBACK_TOPICS]
    .sort(() => Math.random() - 0.5)
    .slice(0, 8);
  sample.forEach((text) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip";
    chip.textContent = text;
    chip.addEventListener("click", () => goToResult(text));
    chipsEl.appendChild(chip);
  });
}

renderChips();
