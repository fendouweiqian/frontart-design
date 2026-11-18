const photos = {
  lake: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=85",
  room: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85",
  books: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?auto=format&fit=crop&w=1400&q=85"
};

const articles = [
  {
    id: "mountain", category: "行走", number: "01", title: "山的另一面，留给慢一点的人", summary: "雨后的山谷没有催促。沿着湖边走，才看见云层如何把远处的轮廓一点点还回来。", image: photos.lake, alt: "山谷、湖泊与薄雾", date: "2026.11.08", minutes: "4 分钟", lead: "抵达之前，我们在湖边停了很久。", paragraphs: ["那天早上，天亮得很慢。雨刚停，山体还藏在一层薄雾里。我们把车停在路边，沿着水声往前走。", "路并不长，但每走一段，眼前的颜色就会变一次。浅灰的天空、深绿的树和水面上极轻的光，让人愿意把脚步放慢。", "后来我记下的，不是终点的名字，而是站在这里时的感觉：有些风景需要留出一点时间，才会慢慢显现。"]
  },
  {
    id: "room", category: "空间", number: "02", title: "光经过的房间", summary: "一间普通的工作室，因为上午的光，有了自己的节奏。", image: photos.room, alt: "日光照入一间工作室", date: "2026.10.27", minutes: "3 分钟", lead: "一扇窗，足以改变一整天的开始。", paragraphs: ["上午的工作室很安静。桌面还没有被文件占满，窗边的光先落在木地板上。", "我喜欢在这个时刻整理一天要做的事。空间不需要太多物件，留出能走动、能停下来的位置，思绪也会更清楚。", "下午光线移开以后，房间又变回它原来的样子。短暂的变化，恰好提醒我注意那些容易错过的日常。"]
  },
  {
    id: "reading", category: "阅读", number: "03", title: "把喜欢的句子留到下一次", summary: "读一本书时，不急着摘录全部。只留下那些还想再次遇见的句子。", image: photos.books, alt: "摊开的书页与阅读场景", date: "2026.10.12", minutes: "5 分钟", lead: "重读，是另一种形式的相遇。", paragraphs: ["有些书第一次读完，并不会马上记得它的全部。真正留下来的，可能只是一句话，或者一个下午的心情。", "我开始把摘录写得少一点。只记下那些在合上书以后，仍然会想起的段落，并写一句当时为什么停下来。", "等到下一次翻开，它们又会有新的意思。收藏并不是把内容放进一个永不打开的盒子，而是为重逢留一条路。"]
  }
];

const categories = ["全部", "行走", "空间", "阅读"];
const storageKey = "shiye-saved-v1";
let selectedCategory = "全部";
let query = "";
let saved = readSaved();
let toastTimer;

/** 读取本机收藏，只接受当前文章的标识，避免旧数据影响页面。 */
function readSaved() {
  try {
    const value = JSON.parse(localStorage.getItem(storageKey) || "[]");
    return Array.isArray(value) ? value.filter(id => articles.some(article => article.id === id)) : [];
  } catch {
    return [];
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function articleCard(article, featured = false) {
  return `<article class="article-card ${featured ? "featured-card" : ""}">
    <a class="article-link" href="#/article/${article.id}" aria-label="阅读${escapeHtml(article.title)}">
      <div class="article-image"><img src="${article.image}" alt="${escapeHtml(article.alt)}" loading="${featured ? "eager" : "lazy"}"><span class="image-index">SHIYE / ${article.number}</span></div>
      <div class="article-copy"><div class="article-meta"><span>${article.category}</span><span>${article.date} · ${article.minutes}</span></div><h3>${escapeHtml(article.title)}</h3><p>${escapeHtml(article.summary)}</p><span class="read-link">读这篇文章 <span aria-hidden="true">↗</span></span></div>
    </a>
    <button class="save-button ${saved.includes(article.id) ? "is-saved" : ""}" data-save="${article.id}" type="button" aria-label="${saved.includes(article.id) ? "取消收藏" : "收藏"}${escapeHtml(article.title)}" aria-pressed="${saved.includes(article.id)}" title="${saved.includes(article.id) ? "取消收藏" : "收藏"}">${saved.includes(article.id) ? "♥" : "♡"}</button>
  </article>`;
}

function filteredArticles(items) {
  const term = query.trim().toLocaleLowerCase();
  return items.filter(article => (selectedCategory === "全部" || article.category === selectedCategory) && (!term || `${article.title} ${article.summary} ${article.category}`.toLocaleLowerCase().includes(term)));
}

/** 搜索时仅刷新结果区域，避免重建输入框打断键盘输入。 */
function updateListingResults(isSaved) {
  const source = isSaved ? articles.filter(article => saved.includes(article.id)) : articles;
  const items = filteredArticles(source);
  document.querySelector(".section-top sup").textContent = items.length.toString().padStart(2, "0");
  document.querySelector(".article-grid").innerHTML = items.map((article, index) => articleCard(article, !isSaved && index === 0 && !query && selectedCategory === "全部")).join("");
  document.querySelector(".empty-state")?.remove();
  if (!items.length) {
    document.querySelector(".article-grid").insertAdjacentHTML("afterend", `<div class="empty-state"><span>○</span><h3>${isSaved && !source.length ? "还没有收藏的文章" : "没有找到文章"}</h3><p>${isSaved && !source.length ? "从发现页打开一篇文章，点收藏后就会出现在这里。" : "换个关键词或分类试试。"}</p><a href="#/discover">去发现文章 ↗</a></div>`);
  }
}

/** 渲染发现和收藏列表，保持搜索词及分类选择。 */
function renderListing(isSaved) {
  const main = document.querySelector("#main");
  const source = isSaved ? articles.filter(article => saved.includes(article.id)) : articles;
  const items = filteredArticles(source);
  const heading = isSaved ? "留给下一次，<br>再读一遍。" : "在日常里，<br>找到一点<span>野趣。</span>";
  main.innerHTML = `<div class="page-wrap listing-page">
    <section class="page-intro"><div class="intro-overline"><span>拾野 / 日常观察</span><span>VOL. 001</span></div><div class="intro-heading"><div><p class="section-label">${isSaved ? "YOUR READING SHELF" : "A JOURNAL OF SMALL MOMENTS"}</p><h1>${heading}</h1></div><p class="intro-description">${isSaved ? "想再次阅读的内容，都在这里。" : "写关于行走、空间和阅读。把那些值得停一停的瞬间，收进这一页。"}</p></div></section>
    <section class="content-section" aria-label="${isSaved ? "收藏文章" : "文章列表"}"><div class="section-top"><div><span class="section-kicker">${isSaved ? "SAVED STORIES" : "LATEST STORIES"}</span><h2>${isSaved ? "我的收藏" : "最近更新"}<sup>${items.length.toString().padStart(2, "0")}</sup></h2></div><span class="section-caption">${isSaved ? "随时回来继续读" : "一篇一篇，慢慢看"}</span></div>
    <div class="controls"><label class="search-field"><span aria-hidden="true">⌕</span><input type="search" id="article-search" placeholder="搜索标题、内容或分类" value="${escapeHtml(query)}" autocomplete="off"><span class="sr-only">搜索文章</span></label><div class="category-tabs" role="group" aria-label="文章分类">${categories.map(category => `<button type="button" data-category="${category}" class="${category === selectedCategory ? "active" : ""}" aria-pressed="${category === selectedCategory}">${category}</button>`).join("")}</div></div>
    <div class="article-grid">${items.map((article, index) => articleCard(article, !isSaved && index === 0 && !query && selectedCategory === "全部")).join("")}</div>
    ${items.length ? "" : `<div class="empty-state"><span>○</span><h3>${isSaved && !source.length ? "还没有收藏的文章" : "没有找到文章"}</h3><p>${isSaved && !source.length ? "从发现页打开一篇文章，点收藏后就会出现在这里。" : "换个关键词或分类试试。"}</p><a href="#/discover">去发现文章 ↗</a></div>`}</section></div>`;
  document.querySelector("#article-search").addEventListener("input", event => {
    query = event.target.value;
    updateListingResults(isSaved);
  });
  document.querySelectorAll("[data-category]").forEach(button => button.addEventListener("click", () => {
    selectedCategory = button.dataset.category;
    renderListing(isSaved);
  }));
}

function renderArticle(article) {
  document.querySelector("#main").innerHTML = `<div class="page-wrap article-page">
    <div class="article-toolbar"><a href="#/discover" class="back-link" id="back-to-list"><span aria-hidden="true">←</span> 返回发现</a><span>${article.category} / ${article.number}</span></div>
    <article><header class="article-header"><p class="section-label">SHIYE / FIELD NOTE ${article.number}</p><h1>${escapeHtml(article.title)}</h1><p class="article-deck">${escapeHtml(article.summary)}</p><div class="article-byline"><span>拾野 · 原创示例</span><span>${article.date} · ${article.minutes}阅读</span></div></header>
      <figure class="article-hero"><img src="${article.image}" alt="${escapeHtml(article.alt)}"><figcaption>${escapeHtml(article.alt)} / 图片来源：Unsplash</figcaption></figure>
      <div class="reading-layout"><aside><span>FIELD NOTE / ${article.number}</span><span>${article.category}</span></aside><div class="article-body"><p class="lead">${escapeHtml(article.lead)}</p>${article.paragraphs.map(paragraph => `<p>${escapeHtml(paragraph)}</p>`).join("")}<div class="article-end"><span>— 拾野</span><button class="save-button save-action ${saved.includes(article.id) ? "is-saved" : ""}" data-save="${article.id}" type="button" aria-pressed="${saved.includes(article.id)}">${saved.includes(article.id) ? "♥ 已收藏" : "♡ 收藏文章"}</button></div></div></div>
    </article><div class="next-reading"><span>继续阅读</span><a href="#/article/${articles[(articles.indexOf(article) + 1) % articles.length].id}">${escapeHtml(articles[(articles.indexOf(article) + 1) % articles.length].title)} <span aria-hidden="true">↗</span></a></div></div>`;
  if (sessionStorage.getItem("shiye-list-route") === "saved") document.querySelector("#back-to-list").textContent = "← 返回收藏";
  document.querySelector("#back-to-list").addEventListener("click", event => {
    const previous = sessionStorage.getItem("shiye-list-route");
    if (previous === "saved") { event.preventDefault(); location.hash = "#/saved"; }
  });
}

function renderAbout() {
  document.querySelector("#main").innerHTML = `<div class="page-wrap about-page"><p class="section-label">ABOUT SHIYE</p><h1>把细小的<br><span>日常，</span>留在纸上。</h1><div class="about-grid"><p>拾野是一份关于行走、空间与阅读的博客原型。这里的文章和日期是原创演示内容，展示如何轻松浏览、阅读和收藏。</p><div><span>01 / 行走</span><span>02 / 空间</span><span>03 / 阅读</span></div></div><a class="about-link" href="#/discover">去看最近的文章 ↗</a><p class="asset-note">示例图片来自 Unsplash，使用受 <a href="https://unsplash.com/license" target="_blank" rel="noopener noreferrer">Unsplash License</a> 约束。正式使用时应核对各图片页面和最新许可。</p></div>`;
}

/** 通过 URL hash 显示页面，使详情和返回路径可分享、可使用浏览器后退。 */
function route() {
  const path = location.hash.replace(/^#\/?/, "").split("/");
  const view = path[0] || "discover";
  const article = view === "article" ? articles.find(item => item.id === path[1]) : null;
  if (article) renderArticle(article);
  else if (view === "saved") renderListing(true);
  else if (view === "about") renderAbout();
  else renderListing(false);
  const navView = article ? sessionStorage.getItem("shiye-list-route") || "discover" : view;
  document.querySelectorAll("[data-route]").forEach(link => {
    const active = link.dataset.route === navView;
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  document.title = `${article ? article.title : view === "saved" ? "我的收藏" : view === "about" ? "关于" : "发现"} · 拾野`;
  window.scrollTo(0, 0);
  updateCount();
}

function updateCount() {
  const badge = document.querySelector("#saved-count");
  badge.hidden = saved.length === 0;
  badge.textContent = saved.length;
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 2400);
}

document.addEventListener("click", event => {
  const navigation = event.target.closest("a[data-route], .brand");
  if (navigation) {
    const destination = navigation.dataset.route || "discover";
    const current = location.hash.replace(/^#\/?/, "").split("/")[0];
    if (current !== destination) {
      selectedCategory = "全部";
      query = "";
    }
  }
  const saveButton = event.target.closest("[data-save]");
  if (saveButton) {
    const id = saveButton.dataset.save;
    const article = articles.find(item => item.id === id);
    if (!article) return;
    saved = saved.includes(id) ? saved.filter(item => item !== id) : [...saved, id];
    try { localStorage.setItem(storageKey, JSON.stringify(saved)); } catch { /* The current page still reflects this session's state. */ }
    const current = location.hash.replace(/^#\/?/, "").split("/")[0];
    if (current === "saved") renderListing(true);
    else if (current === "article") renderArticle(article);
    else renderListing(false);
    updateCount();
    showToast(saved.includes(id) ? "已加入收藏 · 可在收藏页查看" : "已取消收藏");
    return;
  }
  const articleLink = event.target.closest('a[href^="#/article/"]');
  if (articleLink) {
    const current = location.hash.replace(/^#\/?/, "").split("/")[0];
    if (current === "saved" || current === "discover") sessionStorage.setItem("shiye-list-route", current);
  }
});

window.addEventListener("hashchange", route);
route();
