const threads = [
  {id:1,category:"创作",title:"阴天拍人像，怎样保留皮肤的层次？",summary:"最近几次拍摄都很灰，想让光线柔和但不失轮廓。",author:"林默",replies:18,views:246,last:"今天 09:42"},
  {id:2,category:"器材",title:"35mm 和 50mm，街拍新手先从哪支开始？",summary:"预算有限，主要拍城市日常和朋友肖像。",author:"白昼",replies:11,views:184,last:"昨天 22:16"},
  {id:3,category:"后期",title:"如何让一组照片的颜色看起来属于同一个地方？",summary:"不是套预设，而是想理解统一色彩的工作方法。",author:"九月",replies:26,views:512,last:"昨天 18:03"},
  {id:4,category:"创作",title:"你们会为一次拍摄提前写镜头清单吗？",summary:"我常常回家才发现遗漏了真正想拍的东西。",author:"阿野",replies:7,views:93,last:"周一 14:28"}
];
const app = document.querySelector("#app");
const list = document.querySelector("#threads");
const empty = document.querySelector("#empty");
const search = document.querySelector("#search");
let activeCategory = "all";
function renderList() {
  const keyword = search.value.trim().toLowerCase();
  const filtered = threads.filter((thread) => (activeCategory === "all" || thread.category === activeCategory) && (!keyword || `${thread.title} ${thread.summary} ${thread.category}`.toLowerCase().includes(keyword)));
  list.innerHTML = filtered.map((thread) => `<article class="thread" data-thread="${thread.id}"><div><h3><span class="pill">${thread.category}</span>${thread.title}</h3><p>${thread.summary} · ${thread.author}</p></div><span class="meta">${thread.replies}<br>回复</span><span class="meta">${thread.views}<br>浏览</span><span class="last">${thread.last}</span></article>`).join("");
  empty.hidden = filtered.length > 0;
  list.querySelectorAll("[data-thread]").forEach((node) => node.addEventListener("click", () => showDetail(Number(node.dataset.thread))));
}
function showDetail(id) {
  const thread = threads.find((item) => item.id === id);
  app.innerHTML = `<section class="detail"><a class="back" href="#home" id="back">← 返回主题目录</a><p class="eyebrow" style="margin-top:35px">${thread.category} / 社区讨论</p><h1>${thread.title}</h1><p class="meta">${thread.author} · 今天发布 · ${thread.replies} 条回复</p><article>${thread.summary}<br><br>我想听听大家在真实拍摄中的做法，尤其是如何判断光线已经足够。</article><form class="reply" id="reply"><label for="reply-text">回复这条主题</label><textarea id="reply-text" required placeholder="写下你的观察"></textarea><button type="submit">发布回复</button><span class="status" role="status"></span></form></section>`;
  document.querySelector("#back").addEventListener("click", (event) => { event.preventDefault(); location.hash = "home"; location.reload(); });
  document.querySelector("#reply").addEventListener("submit", (event) => { event.preventDefault(); event.currentTarget.querySelector(".status").textContent = "回复已加入讨论（演示反馈）"; event.currentTarget.querySelector("textarea").value = ""; });
}
document.querySelectorAll("[data-category]").forEach((button) => button.addEventListener("click", () => { activeCategory = button.dataset.category; document.querySelectorAll("[data-category]").forEach((item) => item.classList.toggle("is-active", item === button)); renderList(); }));
search.addEventListener("input", renderList);
document.querySelector("#new-topic").addEventListener("click", () => { search.focus(); search.placeholder = "先搜索相似主题，再发布新主题"; });
renderList();
