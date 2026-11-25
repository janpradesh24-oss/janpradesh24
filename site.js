const form = document.getElementById("newsForm");
const status = document.getElementById("status");
const savedList = document.getElementById("savedList");

const STORAGE_KEY = "janpradesh24_news";

function getNews() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function saveNews(news) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(news));
}

function escapeHTML(value) {
  return String(value || "").replace(/[&<>"']/g, function(char) {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    }[char];
  });
}

function renderNews() {
  const news = getNews();

  if (!savedList) return;

  if (news.length === 0) {
    savedList.innerHTML = "<p>अभी कोई खबर सेव नहीं है।</p>";
    return;
  }

  savedList.innerHTML = news.map(function(item, index) {
    return `
      <div class="saved-item">
        <b>${escapeHTML(item.title)}</b>
        <p>${escapeHTML(item.category)} | ${escapeHTML(item.place)}</p>
        <small>${escapeHTML(item.date)}</small>
        <br>
        <button type="button" onclick="deleteNews(${index})">
          खबर हटाएँ
        </button>
      </div>
    `;
  }).join("");
}

function deleteNews(index) {
  const news = getNews();

  if (index < 0 || index >= news.length) return;

  news.splice(index, 1);
  saveNews(news);
  renderNews();

  if (status) {
    status.textContent = "खबर हटा दी गई है।";
  }
}

if (form) {
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("title").value.trim();
    const category = document.getElementById("category").value;
    const place = document.getElementById("place").value.trim();
    const body = document.getElementById("body").value.trim();
    const image = document.getElementById("image").value.trim();

    if (!title || !body) {
      status.textContent = "हेडलाइन और खबर का विवरण भरें।";
      return;
    }

    const news = getNews();

    news.unshift({
      title: title,
      category: category,
      place: place,
      body: body,
      image: image,
      date: new Date().toLocaleString("hi-IN")
    });

    saveNews(news);

    status.textContent = "खबर इस ब्राउज़र में सेव हो गई है।";

    form.reset();
    renderNews();
  });
}

renderNews();
