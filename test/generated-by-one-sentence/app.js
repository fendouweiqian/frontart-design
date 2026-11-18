const topics = [
  {
    id: 'blue-hour',
    title: '蓝调时刻怎么测光，才能保住街灯的层次？',
    category: '拍摄技巧',
    author: '林间小站',
    replies: 18,
    views: 426,
    activity: '12 分钟前',
    excerpt: '最近在河岸拍蓝调时刻，总会把灯牌拍成一团白。想听听大家的测光和后期习惯。',
    image: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=240&q=80',
    posts: [
      { user: '林间小站', time: '今天 18:42', avatar: '林', text: ['最近在河岸拍蓝调时刻，总会把灯牌拍成一团白。机身是 APS-C，通常用点测光对着天空测，但回看时建筑全黑。', '我想保住天空的蓝和灯牌细节，不太想依赖包围曝光。大家会怎么设定？'] },
      { user: '慢门练习生', time: '今天 19:06', avatar: '慢', text: ['我会先把高光警告打开，测光时让最亮的灯牌刚好不过曝，再用曝光补偿往右推一点。阴影部分留给后期拉回来。', '蓝调窗口很短，先锁定快门和光圈，比一直追着读数跑更稳。'] },
      { user: '柯达边角', time: '今天 19:21', avatar: '柯', text: ['可以试试两张曝光的思路，但先把机位和焦段固定住。城市夜景里“全都保住”通常会牺牲现场的明暗关系。'] }
    ]
  },
  {
    id: 'small-camera',
    title: '小相机进山一日：哪些焦段真的会被反复用到？',
    category: '器材讨论',
    author: '白露',
    replies: 31,
    views: 812,
    activity: '35 分钟前',
    excerpt: '下个月准备轻装走一条山线，只带一机一镜。想从真实使用频率出发做选择。',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=240&q=80',
    posts: [
      { user: '白露', time: '今天 17:30', avatar: '白', text: ['下个月准备轻装走一条山线，预计每天 15 公里，只带一机一镜。现在在 28mm 定焦和 24-70mm 之间犹豫。', '我拍风景也拍同行的人，希望选择是由真实使用频率决定，而不是参数表。'] },
      { user: '山口收音机', time: '今天 18:02', avatar: '山', text: ['如果同行的人是重点，我会选变焦。山里退一步和走近一步都不一定方便，焦段的弹性很值重量。'] }
    ]
  },
  {
    id: 'contact-sheet',
    title: '你们会保留失败的照片吗？我想做一份接触印相表',
    category: '作品交流',
    author: '拾光者',
    replies: 12,
    views: 267,
    activity: '1 小时前',
    excerpt: '不是为了发出来，而是想回看自己在不同阶段到底在找什么。',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=240&q=80',
    posts: [
      { user: '拾光者', time: '今天 16:48', avatar: '拾', text: ['最近整理硬盘，发现自己删掉了很多当时“不够好”的照片。现在想做一份接触印相表，把同一组里没选中的也留下来。', '大家会保留这些失败照片吗？有没有一套不让整理变成负担的方法？'] },
      { user: '纸上显影', time: '今天 17:15', avatar: '纸', text: ['会保留，但会放进“过程”文件夹，和成片分开。每隔几个月再看一次，常常能发现当时忽略的构图。'] }
    ]
  },
  {
    id: 'film-lab',
    title: '第一次自己冲黑白：温度和搅拌的记录怎么做？',
    category: '暗房与胶片',
    author: '余温',
    replies: 9,
    views: 194,
    activity: '昨天',
    excerpt: '想把过程记得细一点，下一卷不再靠猜。有没有简单好用的记录模板？',
    image: 'https://images.unsplash.com/photo-1500634245200-e5245c7574ef?auto=format&fit=crop&w=240&q=80',
    posts: [
      { user: '余温', time: '昨天 21:14', avatar: '余', text: ['第一次自己冲黑白，结果比预想中更有趣，但温度和搅拌的记录太零散了。下一卷想把过程写清楚。', '大家会记录哪些字段？有没有简单的纸笔模板？'] },
      { user: '显影液边缘', time: '昨天 21:40', avatar: '显', text: ['我只记四项：药液温度、开始时间、每次搅拌的节奏、最后的观察。字段少一点，才会真的坚持。'] }
    ]
  },
  {
    id: 'photo-walk',
    title: '周六城市漫游：一起走一段没有目的地的街区吗？',
    category: '线下活动',
    author: '不急着回家',
    replies: 24,
    views: 538,
    activity: '昨天',
    excerpt: '从旧车站出发，三小时，不设路线。欢迎带任何相机，也欢迎只带眼睛。',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=240&q=80',
    posts: [
      { user: '不急着回家', time: '昨天 14:08', avatar: '不', text: ['这周六下午想从旧车站出发，沿着河边走三小时，不设固定路线。欢迎带任何相机，也欢迎只带眼睛。', '集合点在南门咖啡店门口，迟到的人沿河走就能碰到。'] },
      { user: '路过的人', time: '昨天 14:32', avatar: '路', text: ['报名一个！我会带一台小数码，最近想练习不看屏幕拍摄。'] }
    ]
  }
];

const categories = ['全部主题', ...new Set(topics.map((topic) => topic.category))];
const state = { query: '', category: '全部主题' };
const app = document.querySelector('#app');
const toast = document.querySelector('#toast');
const aboutDialog = document.querySelector('#aboutDialog');
let toastTimer;
let searchTimer;

function escapeHTML(value) {
  return String(value).replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character]);
}

function filteredTopics() {
  const query = state.query.trim().toLowerCase();
  return topics.filter((topic) => {
    const matchesCategory = state.category === '全部主题' || topic.category === state.category;
    const searchable = `${topic.title} ${topic.excerpt} ${topic.author} ${topic.category}`.toLowerCase();
    return matchesCategory && (!query || searchable.includes(query));
  });
}

function renderDirectory() {
  const visibleTopics = filteredTopics();
  const rows = visibleTopics.length ? visibleTopics.map((topic) => `
    <a class="topic-row" href="#/topic/${topic.id}" data-topic-id="${topic.id}">
      <span class="topic-thumb"><img src="${topic.image}" alt="" loading="lazy" /></span>
      <span class="topic-copy">
        <strong class="topic-title">${escapeHTML(topic.title)}</strong>
        <span class="topic-excerpt">${escapeHTML(topic.excerpt)}</span>
      </span>
      <span class="topic-meta"><strong>${escapeHTML(topic.author)}</strong><span class="meta">${escapeHTML(topic.category)}</span></span>
      <span class="topic-activity"><strong>${topic.replies} 回复</strong>${escapeHTML(topic.activity)}</span>
    </a>`).join('') : '<div class="empty-state">没有找到相符主题，换个关键词试试。</div>';
  app.innerHTML = `
    <section class="directory" aria-labelledby="directoryTitle">
      <header class="directory-head">
        <p class="eyebrow">A QUIET PLACE FOR LOUD IDEAS</p>
        <h1 id="directoryTitle">把看到的，<br />拍下来再聊。</h1>
        <p class="lede">一个给摄影爱好者的慢速主题目录。先找到感兴趣的讨论，再把自己的经验放进去。</p>
        <label class="search-wrap">
          <span class="search-icon" aria-hidden="true">⌕</span>
          <span class="sr-only">搜索主题</span>
          <input class="search-input" id="topicSearch" type="search" placeholder="搜索主题、作者或类别" value="${escapeHTML(state.query)}" />
        </label>
      </header>
      <div class="directory-layout">
        <aside aria-label="主题类别">
          <p class="section-label">浏览类别</p>
          <div class="category-list">${categories.map((category) => `<button type="button" class="category-button ${state.category === category ? 'is-selected' : ''}" data-category="${escapeHTML(category)}"><span class="category-name">${escapeHTML(category)}</span><span class="category-count">${category === '全部主题' ? topics.length : topics.filter((topic) => topic.category === category).length}</span></button>`).join('')}</div>
        </aside>
        <section class="directory-main" aria-live="polite">
          <div class="notice"><span class="notice-tag">社区公告 01</span><p>欢迎把问题说具体，也欢迎把过程说完整。好回复不一定有结论，但一定有现场。</p></div>
          <div class="directory-toolbar"><p class="section-label">最近讨论</p><span class="result-count">${visibleTopics.length} / ${topics.length} 个主题</span></div>
          <div class="topic-list">${rows}</div>
        </section>
      </div>
    </section>`;
  document.querySelector('#topicSearch').addEventListener('input', (event) => {
    clearTimeout(searchTimer);
    const nextQuery = event.target.value;
    searchTimer = setTimeout(() => { state.query = nextQuery; renderDirectory(); focusSearch(); }, 120);
  });
  document.querySelectorAll('[data-category]').forEach((button) => button.addEventListener('click', () => { state.category = button.dataset.category; renderDirectory(); }));
}

function focusSearch() {
  const search = document.querySelector('#topicSearch');
  if (!search) return;
  search.focus();
  search.setSelectionRange(search.value.length, search.value.length);
}

function renderTopic(topic) {
  app.innerHTML = `
    <article class="topic-page">
      <nav class="breadcrumbs" aria-label="面包屑导航"><a href="#/">主题目录</a><span>/</span><span>${escapeHTML(topic.category)}</span></nav>
      <header class="topic-header">
        <p class="eyebrow">${escapeHTML(topic.category)} / 讨论串</p>
        <h1>${escapeHTML(topic.title)}</h1>
        <div class="topic-header-meta"><span>由 ${escapeHTML(topic.author)} 发起</span><span>${topic.replies} 条回复</span><span class="tag">开放讨论</span></div>
      </header>
      <section class="posts" aria-label="主题回复">${topic.posts.map((post, index) => `
        <article class="post">
          <aside class="post-side"><span class="avatar" aria-hidden="true">${escapeHTML(post.avatar)}</span><span><strong>${escapeHTML(post.user)}</strong><span class="meta">${escapeHTML(post.time)} · #${index + 1}</span></span></aside>
          <div class="post-body">${post.text.map((paragraph, paragraphIndex) => paragraphIndex === 1 && index === 1 ? `<p class="quote">${escapeHTML(paragraph)}</p>` : `<p>${escapeHTML(paragraph)}</p>`).join('')}</div>
        </article>`).join('')}</section>
      <section class="reply-box" aria-labelledby="replyTitle">
        <h2 id="replyTitle">加入这场讨论</h2>
        <p class="reply-hint">不需要写得完美，从你实际遇到的一个瞬间开始。</p>
        <form class="reply-form" id="replyForm">
          <label class="sr-only" for="replyText">你的回复</label>
          <textarea id="replyText" maxlength="600" placeholder="写下你的观察、经验或问题……" required></textarea>
          <div class="reply-form-footer"><span class="reply-error" id="replyError" aria-live="polite"></span><button class="button button-dark" type="submit">发布回复</button></div>
        </form>
      </section>
      <a class="back-link" href="#/">← 返回主题目录</a>
    </article>`;
  document.querySelector('#replyForm').addEventListener('submit', (event) => submitReply(event, topic));
}

function submitReply(event, topic) {
  event.preventDefault();
  const textarea = document.querySelector('#replyText');
  const error = document.querySelector('#replyError');
  const text = textarea.value.trim();
  if (!text) { error.textContent = '先写下一点想法，再发布回复。'; textarea.focus(); return; }
  const post = document.createElement('article');
  post.className = 'post';
  post.innerHTML = `<aside class="post-side"><span class="avatar" aria-hidden="true">我</span><span><strong>此刻的你</strong><span class="meta">刚刚 · #${topic.posts.length + 1}</span></span></aside><div class="post-body"><p>${escapeHTML(text)}</p></div>`;
  document.querySelector('.posts').append(post);
  topic.posts.push({ user: '此刻的你', time: '刚刚', avatar: '我', text: [text] });
  textarea.value = '';
  error.textContent = '';
  showToast('回复已发布，讨论继续。');
  post.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add('is-visible');
  toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 3200);
}

function renderRoute() {
  const hash = window.location.hash || '#/';
  const match = hash.match(/^#\/topic\/([^/]+)$/);
  if (match) {
    const topic = topics.find((item) => item.id === match[1]);
    if (topic) { renderTopic(topic); window.scrollTo(0, 0); return; }
  }
  renderDirectory();
  window.scrollTo(0, 0);
}

document.addEventListener('click', (event) => {
  if (event.target.id === 'aboutButton') aboutDialog.showModal();
  if (event.target.id === 'closeAbout' || event.target.id === 'dialogBack') aboutDialog.close();
});
window.addEventListener('hashchange', renderRoute);
renderRoute();
