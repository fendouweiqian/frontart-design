const recipes = [
  {id:"signal-feed",category:"community",type:"社区界面",name:"实时信号流",source:"X / Twitter · 信息流结构",tags:["高密度","时间流","轻交互"],summary:"让持续更新的内容有清晰的阅读节奏，强调作者、时间与轻量回应。",demo:"demos/signal-feed.html",visual:"style-social",label:"SIGNAL / LIVE",title:"有意思的事\n正在发生",caption:"A feed with a point of view.",mark:"＋"},
{id:"forum-lounge",category:"community",type:"社区界面",name:"社区论坛目录",source:"Linux.do · 话题讨论结构",tags:["话题目录","社区身份","明亮论坛"],summary:"用可扫读的主题目录和连续回复串联社区成员，适合开发者社区和产品支持论坛。",demo:"demos/forum-home.html",visual:"style-forum",label:"COMMUNITY / 08:42",title:"如何给一个项目\n找到自己的视觉语言？",caption:"23 replies · 6 min read",mark:"参与讨论",thread:"↳ 从用户任务出发，比先定配色更有效"},
  {id:"topic-board",category:"community",type:"社区界面",name:"兴趣主题广场",source:"百度贴吧 · 兴趣分区结构",tags:["兴趣分区","主题聚合","轻量内容"],summary:"围绕兴趣建立主题入口，让新手能找到讨论，让熟悉的人快速回到关注内容。",demo:"demos/topic-board.html",visual:"style-bbs",label:"兴趣社区 / 每日新帖 1,280",title:"把喜欢的事\n聊得更深一点",caption:"精选话题 · 新手指南 · 本周活动",mark:"进入设计讨论吧"},
  {id:"field-journal",category:"editorial",type:"编辑与内容",name:"影像田野笔记",source:"摄影作品集 · 图像叙事规律",tags:["沉浸摄影","章节叙事","大留白"],summary:"用全幅影像建立第一印象，再以短句、地点和章节构建个人叙事。",demo:"demos/field-journal.html",visual:"style-photo",label:"FIELD NOTES / 014",title:"山的另一面",caption:"祁连 · 6 月 18 日 · 雨后",mark:"01 / 06"},
  {id:"longform-review",category:"editorial",type:"编辑与内容",name:"纸上长文档案",source:"独立杂志 · 编辑式阅读",tags:["长文阅读","衬线字体","脚注"],summary:"窄栏正文配合宽边注和章节索引，让长篇内容读起来像一份编辑过的刊物。",demo:"#library",visual:"style-editorial",label:"THE REVIEW / ISSUE 08",title:"把复杂的问题\n写得值得读",caption:"一篇文章 · 8 分钟 · 含来源",mark:"✳"},
  {id:"swiss-index",category:"editorial",type:"编辑与内容",name:"瑞士信息索引",source:"瑞士国际主义平面设计 · 网格与层级",tags:["网格系统","强对齐","信息优先"],summary:"依靠严格网格、字号层级和高对比色建立秩序，适合资料库与内容导航。",demo:"#library",visual:"style-swiss",label:"INFORMATION / 04—26",title:"让复杂内容\n一眼可查",caption:"分类明确 · 层级清晰 · 可持续扩展",mark:"+"},
  {id:"astra-studio",category:"wordpress",type:"WordPress 主题研究",name:"模块化工作室首页",source:"Astra / WordPress.org · 模块化主题规律",tags:["品牌官网","模块组合","留白"],summary:"从高频商业主题的模块化布局中提炼服务入口、案例与信任信息的编排方式。",demo:"#library",visual:"style-theme",label:"STUDIO / CREATIVE PRACTICE",title:"做有方向的\n品牌体验",caption:"策略 · 设计 · 数字产品",mark:""},
  {id:"blocksy-commerce",category:"wordpress",type:"WordPress 主题研究",name:"独立商店橱窗",source:"Blocksy / WordPress.org · 商品发现与商店结构",tags:["独立电商","商品橱窗","编辑内容"],summary:"以清晰商品分类和编辑故事组织商店入口，保留快速浏览和购买路径。",demo:"#library",visual:"style-commerce",label:"OBJECTS / MADE TO LAST",title:"日常器物，\n慢慢挑选。",caption:"精选设计 · 新作上架 · 工艺故事",mark:"SHOP"},
  {id:"generatepress-journal",category:"wordpress",type:"WordPress 主题研究",name:"轻量出版物",source:"GeneratePress / WordPress.org · 内容结构研究",tags:["出版物","快速阅读","低干扰"],summary:"从轻量内容主题中提炼目录、正文和关联阅读的层级组织，避免装饰压过内容。",demo:"#library",visual:"style-terminal",label:"PUBLICATION / VOL. 26",title:"少一些干扰，\n多一些发现。",caption:"文章 · 访谈 · 观察",mark:"→"},
  {id:"object-campaign",category:"commerce",type:"品牌与商业",name:"物件品牌影像页",source:"独立品牌官网 · 产品摄影与叙事",tags:["产品摄影","全屏构图","品牌语气"],summary:"让真实产品影像承担主要视觉表达，用少量文案说明材质、使用场景和品牌态度。",demo:"#library",visual:"style-cinema",label:"OBJECT STUDY / Nº 04",title:"光落在\n日常之间",caption:"以真实产品和场景影像建立记忆。",mark:"STUDY 04"},
  {id:"neobrutal-tool",category:"commerce",type:"品牌与商业",name:"新粗野主义工具间",source:"当代海报与网页粗野主义 · 强对比语法",tags:["大胆排版","高对比","工具工作区"],summary:"用强烈色块和直接排版让工具入口有记忆点，同时把操作区保持为一套统一结构。",demo:"#library",visual:"style-brutal",label:"MAKE / BREAK / BUILD",title:"不必乖乖\n排成一列",caption:"一个明确主动作，其余信息各就其位。",mark:"✳"},
  {id:"pocket-catalog",category:"mobile",type:"通用手机原型",name:"口袋收藏册",source:"移动内容产品 · 通用手机交互范式",tags:["单手操作","可点击原型","内容收藏"],summary:"为窄屏设计的通用原型：聚焦当前内容、清楚的底部导航和可感知的收藏反馈。",demo:"demos/pocket-catalog.html",visual:"style-mobile",label:"MOBILE / PROTOTYPE",title:"今天想看\n哪一种？",caption:"个人收藏与灵感清单",mark:"◉",thread:"⌂　发现　　♡　收藏　　＋　记录"}
];

let activeFilter = "all";
let query = "";
const sourceUrls = {
  "signal-feed": "https://x.com/",
  "forum-lounge": "https://linux.do/",
  "topic-board": "https://tieba.baidu.com/",
  "astra-studio": "https://wordpress.org/themes/astra/",
  "blocksy-commerce": "https://wordpress.org/themes/blocksy/",
  "generatepress-journal": "https://wordpress.org/themes/generatepress/"
};
const recipeGuidance = {
  "signal-feed": "按已核验的 X 白底首页组织：左侧纵向主导航与发布入口，中间为推荐/关注切换、发帖入口和连续时间线，右侧放搜索、趋势话题与关注建议。主栏约 600px，动态以细分隔线连续排列；白色画布、近黑色正文、蓝色选中态与浅灰次级信息形成层级。作者、正文、媒体、时间、回复、转发、喜欢和收藏按稳定次序排列；进入动态详情后可回复并返回。窄屏改为顶部标题、底部导航与浮动发布入口。",
  "forum-lounge": "按已核验的 Linux.do 公开首页组织：极浅色全页、紧凑顶栏、居中的标题与搜索区，下面依次是公告、类别筛选、横向最新/新话题/未读/热门等视图和高密度话题表。话题行清楚呈现标题、分类标签、参与者头像组、回复、浏览和最近活动；避免把论坛目录改成左侧导航加右侧卡片的仪表盘。进入主题后按标题与作者、首帖、连续回复、回复框的顺序阅读。使用蓝色链接与选中态、暖橙色统计强调；手机端折叠次要列但保留标题、回复与活动。",
  "topic-board": "顶部搜索和发帖入口；左侧常逛主题导航；中间连续帖子流，依次呈现主题身份、作者、时间、正文与轻回应；右侧热门话题和主题榜单。以白底和浅灰分区作为信息画布，蓝色用于选中和主要操作。帖子标题使用易扫读的黑体，不使用首页 Hero 或大面积装饰色块。加入主题、筛选主题、搜索帖子有可见反馈。",
  "field-journal": "一张清晰有主体的真实风景或作品照片占据首屏，地点、时间和短句成为图像旁注；后续按章节展开。书卷感标题与克制的说明文字。随滚动揭示照片与章节关系。",
  "longform-review": "窄栏长文正文、宽边注、章标题和注释组成编辑系统；阅读进度、脚注和关联文章层级明确。正文使用适合长文的字体，标题可用衬线。图片像文章插图，不作为无关背景填充。",
  "swiss-index": "严格的列网格、编号索引、明显的对齐线和少量红色提示；标题、分类、日期和正文按可扫描层级排布。中性无衬线与等宽数字。搜索、排序与目录定位清楚可见。",
  "astra-studio": "立场、服务、案例、团队或信任信息按决策顺序组成可复用模块；同层级服务和案例采用一致骨架。字体与颜色以品牌资产为准。导航到真实案例，联系入口有明确下一步。",
  "blocksy-commerce": "商品分类、精选橱窗、商品详情与编辑故事分层组织；真实商品照片承载视觉，价格、规格和购买动作保持一眼可查。网格与筛选帮助比较，移动端保留清晰购物路径。",
  "generatepress-journal": "轻量目录、分类、文章正文和关联阅读形成连续出版结构；减少无关装饰和脚本。优先保证长文宽度、标题层级与文章间可辨的分隔。目录搜索、下一篇和回到分类可操作。",
  "object-campaign": "真实产品影像在首屏展示形态和材质，产品名称、材料、价格或咨询动作靠近图像；后续以工艺、使用场景和细节镜头延续叙事。艺术字体只用于品牌与物件气质，不遮盖交易信息。",
  "neobrutal-tool": "巨型直接标题、强边界与少数高对比色块形成视觉冲击；输入、结果和动作仍排列成一致可操作工作区。动效短促明确，生成和复制独立反馈。",
  "pocket-catalog": "单手可达的内容浏览区、明确的底部导航、快速搜索和收藏状态；一个屏幕只强调当前主要任务。用真实内容图或清晰缩略图。类别切换、收藏和返回路径实际可点。"
};
const recipeFlows = {
  "signal-feed": "动态列表 → 单条动态详情 → 回复并返回列表",
  "forum-lounge": "话题目录 → 分类或视图筛选 → 主题详情 → 关注或回复 → 返回目录",
  "topic-board": "兴趣广场 → 帖子详情 → 回复并返回广场",
  "field-journal": "旅程首页 → 影像故事正文 → 返回旅程目录",
  "longform-review": "本期目录 → 专题长文 → 章节定位与返回目录",
  "swiss-index": "资料索引 → 项目详情 → 返回索引；索引支持搜索",
  "astra-studio": "工作室首页 → 案例详情 → 合作意向反馈",
  "blocksy-commerce": "商店目录 → 商品详情 → 数量选择与加入购物袋",
  "generatepress-journal": "出版物首页 → 文章详情 → 返回文章目录",
  "object-campaign": "品牌首页 → 产品详情 → 咨询反馈",
  "neobrutal-tool": "工具首页 → 文字实验室 → 生成结果与复制文案",
  "pocket-catalog": "发现列表 → 内容详情 → 收藏并返回发现"
};
const grid = document.querySelector("#recipe-grid");
const search = document.querySelector("#search");
const resultsCount = document.querySelector("#results-count");
const emptyState = document.querySelector("#empty-state");
const filterRow = document.querySelector("#filters");
const categoryNames = {community:"社区",editorial:"编辑与内容",wordpress:"WordPress",commerce:"品牌与商业",mobile:"手机原型"};
const directDemoIds = new Set(["signal-feed", "forum-lounge", "topic-board", "pocket-catalog"]);
function getDemoUrl(recipe) {
  return directDemoIds.has(recipe.id)
    ? `${recipe.demo}?style=${encodeURIComponent(recipe.id)}`
    : `demos/visual-recipe.html?style=${encodeURIComponent(recipe.id)}`;
}
window.FRONTART_RECIPES = recipes;
window.FRONTART_MAKE_PROMPT = makePrompt;
window.FRONTART_RECIPE_FLOWS = recipeFlows;
window.FRONTART_GET_DEMO_URL = getDemoUrl;

function renderFilters() {
  if (!filterRow) return;
  const counts = recipes.reduce((result, recipe) => {
    result[recipe.category] = (result[recipe.category] || 0) + 1;
    return result;
  }, {});
  const entries = [["all", "全部", recipes.length], ...Object.entries(categoryNames).filter(([key]) => counts[key]).map(([key, name]) => [key, name, counts[key]])];
  filterRow.innerHTML = entries.map(([key, name, count], index) => `<button class="filter-chip${index === 0 ? " is-active" : ""}" type="button" data-filter="${key}" aria-pressed="${index === 0}">${name} <span>${count}</span></button>`).join("");
  filterRow.querySelectorAll(".filter-chip").forEach((button) => button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterRow.querySelectorAll(".filter-chip").forEach((item) => {
      const selected = item === button;
      item.classList.toggle("is-active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    renderRecipes();
  }));
}

function renderRecipes() {
  if (!grid) return;
  const normalized = query.trim().toLocaleLowerCase();
  const matches = recipes.filter((recipe) => {
    const matchesFilter = activeFilter === "all" || recipe.category === activeFilter;
    const searchable = [recipe.name, recipe.type, recipe.source, recipe.summary, ...recipe.tags].join(" ").toLocaleLowerCase();
    return matchesFilter && (!normalized || searchable.includes(normalized));
  });
  const featured = grid.dataset.mode === "featured";
  const featuredIds = ["signal-feed", "forum-lounge", "topic-board", "longform-review", "blocksy-commerce", "pocket-catalog"];
  const filtered = featured ? matches.filter((recipe) => featuredIds.includes(recipe.id)).slice(0, 6) : matches;
  grid.innerHTML = filtered.map((recipe, index) => `
    <article class="recipe-card">
      <div class="recipe-visual ${recipe.visual}" aria-hidden="true">
        <span class="visual-label">${recipe.label}</span>
        <span class="visual-title">${recipe.title.replace("\n", "<br>")}</span>
        <span class="visual-caption">${recipe.caption}</span>
        <span class="visual-mark">${recipe.mark}</span>
        ${recipe.thread ? `<span class="visual-thread">${recipe.thread}</span>` : ""}
      </div>
      <div class="recipe-body">
        <div class="recipe-topline"><span>${recipe.type}</span><span class="recipe-number">FA / ${String(index + 1).padStart(2, "0")}</span></div>
        <h3>${recipe.name}</h3>
        <p>${recipe.summary}</p>
        <div class="recipe-tags">${recipe.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        <div class="recipe-source">参考规律：${sourceUrls[recipe.id] ? `<a href="${sourceUrls[recipe.id]}" target="_blank" rel="noreferrer">${recipe.source} ↗</a>` : recipe.source}</div>
        <div class="recipe-actions"><a class="recipe-demo-link" href="${getDemoUrl(recipe)}" target="_blank" rel="noopener">体验 Demo <span aria-hidden="true">↗</span></a><a class="recipe-detail-link" href="recipes/demo.html?style=${encodeURIComponent(recipe.id)}">查看配方 <span aria-hidden="true">→</span></a></div>
      </div>
    </article>`).join("");
  if (resultsCount) resultsCount.textContent = featured ? `${filtered.length} 款精选` : `${filtered.length} / ${recipes.length} 款配方`;
  if (emptyState) emptyState.hidden = filtered.length > 0;
}

function makePrompt(recipe) {
  const target = recipe.category === "mobile" ? "通用手机原型或移动 H5" : "网站";
  return `用 $frontart-design，按「${recipe.name}」风格，为[产品名称]的[目标用户]设计并实现一个可交互的${target}，核心任务是[用户要完成的事]。`;
}

renderFilters();
search?.addEventListener("input", () => { query = search.value; renderRecipes(); });
document.addEventListener("keydown", (event) => {
  if (!search) return;
  if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    search.focus();
  }
});
renderRecipes();
const catalogTotal = document.querySelector("#catalog-total");
if (catalogTotal) catalogTotal.textContent = String(recipes.length);
