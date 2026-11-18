const params = new URLSearchParams(location.search);
const style = params.get("style") || "field-journal";
const view = params.get("view") || "home";
const link = (next, extra = "") => `?style=${encodeURIComponent(style)}&view=${next}${extra}`;
const photo = (id, width = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;
const landscape = photo("photo-1470770841072-f978cf4d019e", 1800);
const studio = photo("photo-1497366754035-f200968a6e72", 1500);
const chair = photo("photo-1503602642458-232111445657", 1300);
const camera = photo("photo-1526170375885-4d8ecf77b99f", 800);
const shoe = photo("photo-1542291026-7eec264c27ff", 800);
const editorialImage = photo("photo-1524578271613-d550eacf6090", 1200);
const shopProducts = {
  stool: {name:"原木高脚凳",photo:chair,alt:"原木高脚凳产品照片",price:"¥ 1,280",category:"FURNITURE / 001",description:"简单的木质结构适合放在工作台旁。照片用于展示商品详情结构。",material:"木材",size:"演示规格 · 高 75 cm"},
  camera: {name:"影像随身物",photo:camera,alt:"相机产品照片",price:"¥ 860",category:"ACCESSORY / 002",description:"一件随身携带的影像器物。此页展示商品信息与购买动作的组织方式。",material:"金属与复合材质",size:"演示规格"},
  shoe: {name:"步行系列",photo:shoe,alt:"红色鞋履产品照片",price:"¥ 690",category:"ACCESSORY / 003",description:"为日常步行准备的轻便鞋履。图片和价格均为原型示例。",material:"织物与橡胶",size:"演示规格"}
};
const shopProduct = shopProducts[params.get("item")] || shopProducts.stool;
const selectedItem = params.get("item") || "1";
const fieldStories = {
  "1": {title:"山的另一面",place:"山间湖畔",time:"雨后清晨",photo:landscape,alt:"山谷与湖泊的风景照片",intro:"天亮得很慢。云层让山体的轮廓只剩下几道清楚的线。",body:"我们把车停在一条没有名字的路边，沿着水声往前走。照片记录的是抵达之前的片刻：没有人声，只有被雨水洗过的地面。"},
  "2": {title:"光经过的房间",place:"城市工作室",time:"上午 09:42",photo:studio,alt:"日光照入室内的摄影照片",intro:"日光把一间普通的工作室，分成了明亮和安静的两半。",body:"桌面上的物件和窗外的光线构成了这段短故事。照片先说明空间，文字再记录人们在这里工作的节奏。"}
};
const fieldStory = fieldStories[selectedItem] || fieldStories["1"];
const indexEntries = {
  "1": {title:"材料与方法",type:"研究档案",year:"2026 / 06",topic:"界面系统",lead:"把观察整理成可以使用的资料。",body:"这个项目收集了界面中的结构、内容密度、信息层级和交互方式。每一项记录都回答同一个问题：它为什么这样安排？"},
  "2": {title:"城市观察",type:"影像记录",year:"2026 / 06",topic:"城市与空间",lead:"从街道和标识里寻找秩序。",body:"这份影像记录关注真实城市中的导航、信息密度和视觉提示。图像与简短注释组成一套可查询的观察资料。"},
  "3": {title:"界面索引",type:"设计系统",year:"2025 / 12",topic:"数字界面",lead:"让不同页面使用同一套清楚的规则。",body:"这份索引记录标题、间距、状态与交互反馈。每个条目都可以回到具体页面，查看规则怎样服务真实任务。"}
};
const indexEntry = indexEntries[selectedItem] || indexEntries["1"];
const journalArticles = {
  "1": {title:"海边的工作室，如何安排一天。",category:"访谈",date:"2026 年 6 月",intro:"关于工作节奏、空间和一张留给自己的桌子。",body:"工作室靠近海边，窗户朝向一条安静的街。早上第一件事不是打开邮箱，而是把当天要完成的事情写在纸上。"},
  "2": {title:"为什么我开始把内容放在第一位。",category:"观察",date:"2026 年 6 月",intro:"清楚的内容顺序，让页面真正有了方向。",body:"当一个页面需要传达的东西很多，我会先问读者要完成什么。主任务和次要信息有了顺序之后，布局才有可靠的依据。"},
  "3": {title:"一张桌子与两种工作节奏。",category:"手记",date:"2026 年 5 月",intro:"从一处日常工作空间开始的观察。",body:"同一张桌子，上午用来集中完成任务，傍晚用来整理想法。界面的节奏也需要适应不同的使用时刻。"}
};
const journalArticle = journalArticles[selectedItem] || journalArticles["1"];
const reviewArticles = {
  "1": {title:"把复杂的问题，写得值得读。",intro:"一份关于工具、内容与注意力的编辑笔记。",section:"从一个真正的问题开始",opening:"在一个页面上，内容总有先后。读者先需要知道这里能做什么，然后才会关心我们为何这样设计。版式要让这个顺序清楚可见。"},
  "2": {title:"谁决定了一个页面的节奏？",intro:"从标题、引文和图片的关系，重新看阅读的步伐。",section:"节奏来自内容的先后",opening:"阅读不是把每个模块排成同样的大小。有些信息需要停留，有些只需被扫过。标题、正文与注释的比例决定了读者的速度。"}
};
const reviewArticle = reviewArticles[selectedItem] || reviewArticles["1"];
const image = (src, alt, className = "") => `<img class="${className}" src="${src}" alt="${alt}" loading="lazy">`;
const returnLink = (label = "返回首页") => `<a class="return-link" href="${link("home")}">← ${label}</a>`;
const demoNote = `<div class="demo-note">原创虚构内容 · 可点击原型 <a href="../recipes.html" target="_top">返回配方库 ↗</a></div>`;

const sites = {
  "field-journal": {
    name: "影像田野笔记",
    render: () => `
      <div class="site field-site">
        <header class="site-header"><a class="brand" href="${link("home")}">北纬之间 <small>FIELD JOURNAL</small></a><nav><a href="${link("home")}">旅程</a><a href="${link("story")}">故事</a><a href="${link("story") }#notes">关于</a></nav><span class="header-index">06 / 2026</span></header>
        ${view === "story" ? `
          <main class="field-story">${returnLink("全部旅程")}<div class="field-story-cover">${image(fieldStory.photo,fieldStory.alt)}<div><small>FIELD NOTE 014 / ${fieldStory.place}</small><h1>${fieldStory.title}</h1><p>${fieldStory.time}的一段现场记录。</p></div></div><div class="field-story-grid"><aside><b>01 / 06</b><span>地点　${fieldStory.place}</span><span>时间　${fieldStory.time}</span><span>记录　影像与文字</span></aside><article><p class="lead">${fieldStory.intro}</p><p>${fieldStory.body}</p><h2 id="notes">现场笔记</h2><p>好的影像叙事不需要用每一句话解释画面。地点、时间和一段真实的观察，足以让读者走进这一刻。</p><a class="text-link" href="${link("home")}">继续看其他旅程 →</a></article></div></main>
        ` : `
          <main><section class="field-hero" style="--field-image:url('${landscape}')"><div class="field-hero-content"><span>FIELD NOTE / 014</span><h1>山的<br>另一面。</h1><p>山间湖畔，雨后清晨的一段短旅。</p><a href="${link("story","&item=1")}">读这段旅程 <span>↗</span></a></div><div class="field-hero-bottom"><span>FIELD JOURNAL · 014</span><span>向下浏览　↓</span></div></section><section class="field-chapters"><div><small>JOURNAL / RECENT</small><h2>把路上的细节<br>留给下一次出发。</h2></div><a class="field-chapter" href="${link("story","&item=1")}">${image(landscape,"山谷与湖泊的风景照片")}<span>01 / 山的另一面</span><b>山谷 · 雨后 · 清晨</b></a><a class="field-chapter" href="${link("story","&item=2")}">${image(studio,"日光照入室内的摄影照片")}<span>02 / 光经过的房间</span><b>城市 · 上午 · 09:42</b></a></section></main>
        `}<footer>北纬之间 / 记录正在发生的地方。${demoNote}</footer>
      </div>`
  },
  "longform-review": {
    name: "纸上长文档案",
    render: () => `
      <div class="site review-site"><header class="site-header"><a class="brand" href="${link("home")}">间距<span class="brand-dot">.</span></a><nav><a href="${link("home")}">首页</a><a href="${link("article")}">专题</a><a href="${link("article") }#related">档案</a></nav><span>ISSUE 08 · 2026</span></header>
${view === "article" ? `<main class="review-article">${returnLink("本期目录")}<div class="review-article-head"><span>专题 / 设计与日常</span><h1>${reviewArticle.title}</h1><p>${reviewArticle.intro}</p><small>文 / 陈木　·　阅读约 8 分钟</small></div><div class="review-body"><aside><span>本文目录</span><a href="#opening">01　问题</a><a href="#method">02　方法</a><a href="#related">03　继续阅读</a></aside><article><h2 id="opening">${reviewArticle.section}</h2><p>${reviewArticle.opening}</p><p>一个有效的长文页面，通常让正文保持稳定宽度。边注可以补充出处与细节，但不应打断主线。标题、引文和插图则给阅读提供节奏。</p><blockquote>留白的价值，在于把注意力还给内容。</blockquote><h2 id="method">让注释待在它该在的位置</h2><p>这篇原型使用窄栏正文、独立目录和简短旁注。读者可以顺着正文往下读，也能通过目录快速返回某一节。</p><p>真正发布时，图片、引文与来源还需要逐一核对。这里的内容只是说明阅读结构的原创示例。</p><section id="related"><span>接下来读</span><a href="${link("home")}">回到本期目录，发现下一篇 →</a></section></article><div class="margin-note">旁注 01<br>本文中的示例均为虚构内容，用于展示编辑结构。</div></div></main>` : `<main class="review-home"><section class="review-mast"><small>INDEPENDENT REVIEW / VOL. 08</small><h1>一些值得<br><em>慢下来</em>读的事。</h1><p>关于设计、工作与日常的独立观察。</p></section><section class="review-cover"><div class="review-cover-art"><span>08</span><strong>间距</strong><small>THE REVIEW / 2026</small></div><div><span>本期专题</span><h2>把复杂的问题，<br>写得值得读。</h2><p>工具和内容越来越多，清楚的编辑结构反而变得稀缺。</p><a href="${link("article")}">阅读专题 →</a></div></section><section class="review-index"><div><span>本期目录</span><b>ISSUE / 08</b></div><a href="${link("article")}"><i>01</i><strong>把复杂的问题，写得值得读。</strong><span>设计与日常　↗</span></a><a href="${link("article","&item=2")}"><i>02</i><strong>谁决定了一个页面的节奏？</strong><span>编辑观察　↗</span></a></section></main>`}<footer>间距 · 一份独立观察刊物${demoNote}</footer></div>`
  },
  "swiss-index": {
    name: "瑞士信息索引",
    render: () => `
      <div class="site index-site"><header class="site-header"><a class="brand" href="${link("home")}">IN / DEX <b>06</b></a><nav><a href="${link("home")}">目录</a><a href="${link("entry")}">项目</a><a href="${link("entry") }#method">方法</a></nav><span>资料索引　2026</span></header>
${view === "entry" ? `<main class="index-entry">${returnLink("项目索引")}<div class="index-entry-title"><span>${selectedItem.padStart(2,"0")} / FIELD RESEARCH</span><h1>${indexEntry.title}</h1><b>${selectedItem.padStart(2,"0")}</b></div><div class="index-entry-grid"><aside><span>类型　${indexEntry.type}</span><span>更新　${indexEntry.year}</span><span>主题　${indexEntry.topic}</span></aside><article><h2>${indexEntry.lead}</h2><p>${indexEntry.body}</p><div class="index-data"><span>01　来源</span><p>公开页面与可验证的设计资料</p><span>02　结构</span><p>编号、分类和可扫描的文本层级</p><span>03　应用</span><p>按任务挑选规律，再改写成自己的系统</p></div><h3 id="method">方法说明</h3><p>对齐线帮助查找，少量红色只用于标示当前选择。内容无需借助装饰卡片建立秩序。</p><a href="${link("home")}">返回完整目录 ↗</a></article></div></main>` : `<main class="index-home"><div class="index-head"><span>INDEX / 2026—06</span><h1>观察档案<span>®</span></h1><p>页面结构、视觉语言与真实使用方法的开放索引。</p></div><div class="index-controls"><label>查找资料 <input id="index-search" type="search" placeholder="输入关键词，例如 材料、网格"></label><span id="index-count">03 条记录</span></div><div class="index-table"><div class="index-row index-row-head"><span>编号</span><span>项目</span><span>类型</span><span>年份</span></div><a class="index-row" data-index-row href="${link("entry")}"><span>01</span><strong>材料与方法</strong><span>研究档案</span><span>2026　↗</span></a><a class="index-row" data-index-row href="${link("entry","&item=2")}"><span>02</span><strong>城市观察</strong><span>影像记录</span><span>2026　↗</span></a><a class="index-row" data-index-row href="${link("entry","&item=3")}"><span>03</span><strong>界面索引</strong><span>设计系统</span><span>2025　↗</span></a></div><p id="index-empty" hidden>没有匹配的记录。</p></main>`}<footer>IN / DEX — 以结构帮助查找${demoNote}</footer></div>`
  },
  "astra-studio": {
    name: "模块化工作室首页",
    render: () => `
      <div class="site studio-site"><header class="site-header"><a class="brand" href="${link("home")}">FORM <span>&</span> WORK</a><nav><a href="${link("home") }#services">服务</a><a href="${link("case")}">案例</a><a href="${link("case") }#contact">联系</a></nav><a class="header-action" href="${link("case") }#contact">开始合作 →</a></header>
      ${view === "case" ? `<main class="studio-case">${returnLink("工作室首页")}<div class="studio-case-head"><span>SELECTED WORK / 01</span><h1>让一间小工作室，<br>被准确地看见。</h1><p>品牌策略、网站和内容系统，为真实服务建立清楚入口。</p></div><div class="studio-case-image">${image(studio,"明亮的工作空间摄影照片")}</div><div class="studio-case-body"><div><small>项目概况</small><h2>从“我们做什么”<br>走到“客户怎么找到”。</h2></div><div><p>这个原创案例为一个独立创意团队整理服务、作品和合作信息。首页先表达立场，随后让服务模块与项目案例按决策顺序展开。</p><dl><div><dt>01 / 策略</dt><dd>明确受众与核心承诺</dd></div><div><dt>02 / 设计</dt><dd>建立清晰的页面骨架</dd></div><div><dt>03 / 交付</dt><dd>适配桌面与手机浏览</dd></div></dl></div></div><section id="contact" class="studio-contact"><h2>准备开始一个项目？</h2><p>留下联系方式，我们会整理下一步讨论内容。</p><form id="studio-contact-form"><label>邮箱 <input type="email" required placeholder="you@example.com"></label><button type="submit">发送合作意向 →</button><span role="status"></span></form></section></main>` : `<main><section class="studio-hero"><div><span>INDEPENDENT CREATIVE STUDIO</span><h1>做有方向的<br>品牌体验。</h1><p>从策略到网站，帮有想法的团队把价值说清楚。</p><a href="${link("case")}">看看我们的工作 <b>↗</b></a></div>${image(studio,"明亮的工作空间摄影照片")}</section><section class="studio-services" id="services"><div><small>WHAT WE DO / 01</small><h2>把想法变成<br>可用的表达。</h2></div><div class="studio-service-list"><a href="${link("case")}"><span>01</span><strong>品牌策略</strong><small>定位、语言和内容结构</small><b>↗</b></a><a href="${link("case")}"><span>02</span><strong>网站设计</strong><small>页面体系与互动体验</small><b>↗</b></a><a href="${link("case")}"><span>03</span><strong>数字产品</strong><small>从原型到可用界面</small><b>↗</b></a></div></section><section class="studio-feature"><span>SELECTED WORK / 01</span><h2>小工作室，大问题。</h2><p>把服务组织成客户找得到的路径。</p><a href="${link("case")}">查看完整案例 →</a></section></main>`}<footer>FORM & WORK · 独立创意工作室${demoNote}</footer></div>`
  },
  "blocksy-commerce": {
    name: "独立商店橱窗",
    render: () => `
      <div class="site shop-site"><header class="site-header"><a class="brand" href="${link("home")}">MORROW <small>OBJECTS</small></a><nav><a href="${link("home")}">全部商品</a><a href="${link("home") }#story">关于我们</a></nav><button class="shop-cart" id="cart-open" type="button">购物袋 <span id="cart-count">0</span></button></header><div class="shop-cart-panel" id="cart-panel" hidden><strong>演示购物袋</strong><p id="cart-message">购物袋为空，先选择一件商品。</p><button id="cart-close" type="button">关闭</button></div>
      ${view === "product" ? `<main class="shop-product">${returnLink("全部商品")}<div class="shop-product-grid"><div class="shop-product-gallery">${image(shopProduct.photo,shopProduct.alt)}</div><div class="shop-product-info"><span>${shopProduct.category}</span><h1>${shopProduct.name}</h1><p class="shop-price">${shopProduct.price}</p><p>${shopProduct.description}</p><dl><div><dt>材质</dt><dd>${shopProduct.material}</dd></div><div><dt>尺寸</dt><dd>${shopProduct.size}</dd></div><div><dt>配送</dt><dd>此页为交互原型，不提供真实下单</dd></div></dl><div class="shop-buy"><label>数量 <input id="product-quantity" type="number" min="1" max="9" value="1"></label><button id="add-cart" type="button">加入购物袋</button></div><p id="shop-feedback" role="status"></p></div></div><section class="shop-related"><span>YOU MAY ALSO LIKE</span><h2>继续浏览日常器物</h2><a href="${link("home")}">返回商店目录 →</a></section></main>` : `<main class="shop-home"><section class="shop-hero"><div><span>THE EVERYDAY EDIT / 2026</span><h1>让日常，<br>值得慢慢挑。</h1><p>为使用与陪伴而选的器物。</p><a href="#products">浏览精选商品 ↓</a></div>${image(chair,"原木高脚凳产品照片")}</section><section class="shop-products" id="products"><div class="shop-section-head"><div><small>SHOP / CURATED OBJECTS</small><h2>精选商品</h2></div><div class="shop-filters" aria-label="商品分类"><button class="active" data-product-filter="all">全部</button><button data-product-filter="furniture">家具</button><button data-product-filter="accessory">配件</button></div></div><div class="shop-grid"><a data-product-category="furniture" href="${link("product")}">${image(chair,"原木高脚凳产品照片")}<span>原木高脚凳 <b>¥ 1,280</b></span></a><a data-product-category="accessory" href="${link("product","&item=camera")}">${image(camera,"相机产品照片")}<span>影像随身物 <b>¥ 860</b></span></a><a data-product-category="accessory" href="${link("product","&item=shoe")}">${image(shoe,"红色鞋履产品照片")}<span>步行系列 <b>¥ 690</b></span></a></div></section><section class="shop-story" id="story"><span>OUR APPROACH</span><h2>有使用痕迹的物件，<br>才真正进入生活。</h2><a href="${link("product")}">看一件代表作品 →</a></section></main>`}<footer>MORROW OBJECTS · 为日常而选${demoNote}</footer></div>`
  },
  "generatepress-journal": {
    name: "轻量出版物",
    render: () => `
      <div class="site journal-site"><header class="site-header"><a class="brand" href="${link("home")}">边界记录</a><nav><a href="${link("home")}">首页</a><a href="${link("home") }#articles">文章</a><a href="${link("article")}">关于阅读</a></nav><span>FIELD / PUBLICATION</span></header>
${view === "article" ? `<main class="journal-article">${returnLink("全部文章")}<header><span>${journalArticle.category}　/　${journalArticle.date}</span><h1>${journalArticle.title}</h1><p>${journalArticle.intro}</p><small>阅读约 6 分钟</small></header><div class="journal-article-body"><article><p>${journalArticle.body}</p><h2>给每件事一个位置</h2><p>空间不大，因此常用的工具都有固定位置。网页也一样：清楚的标题、宽度合适的正文、容易找到的分类，比额外的视觉效果更能帮助阅读。</p><p>这篇示例文章展示一套轻量出版结构。没有复杂的动效，读者可以直接返回目录或继续浏览下一篇。</p><a href="${link("home") }#articles">返回文章目录 →</a></article><aside><span>文章信息</span><p>分类：${journalArticle.category}</p><p>长度：6 分钟</p><p>适合：安静阅读</p></aside></div></main>` : `<main class="journal-home"><section class="journal-intro"><span>FIELD NOTES / VOL. 26</span><h1>记录值得<br>继续看的事。</h1><p>关于空间、创作和日常工作的轻量出版物。</p></section><section class="journal-feature"><div><small>本期推荐 / 01</small><h2>海边的工作室，<br>如何安排一天。</h2><p>关于工作节奏、空间和一张留给自己的桌子。</p><a href="${link("article")}">阅读全文 →</a></div>${image(editorialImage,"书本与阅读场景摄影照片")}</section><section id="articles" class="journal-list"><div class="journal-list-head"><h2>近期文章</h2><label>查找文章 <input id="journal-search" type="search" placeholder="标题或分类"></label></div><a data-journal-row href="${link("article")}"><span>访谈 / 06.12</span><strong>海边的工作室，如何安排一天。</strong><b>↗</b></a><a data-journal-row href="${link("article","&item=2")}"><span>观察 / 06.08</span><strong>为什么我开始把内容放在第一位。</strong><b>↗</b></a><a data-journal-row href="${link("article","&item=3")}"><span>手记 / 05.24</span><strong>一张桌子与两种工作节奏。</strong><b>↗</b></a><p id="journal-empty" hidden>没有匹配的文章。</p></section></main>`}<footer>边界记录 · 独立内容出版物${demoNote}</footer></div>`
  },
  "object-campaign": {
    name: "物件品牌影像页",
    render: () => `
      <div class="site object-site"><header class="site-header"><a class="brand" href="${link("home")}">慢木 <small>STILLWOOD</small></a><nav><a href="${link("home")}">理念</a><a href="${link("product")}">作品</a><a href="${link("product") }#inquiry">咨询</a></nav><span>OBJECT STUDY / 04</span></header>
      ${view === "product" ? `<main class="object-product">${returnLink("品牌首页")}<div class="object-product-layout">${image(chair,"原木高脚凳产品照片")}<div><span>OBJECT / 04</span><h1>留白高凳</h1><p class="object-subtitle">留给日常的一段安静时间。</p><p>木材的纹理、平直的坐面与简洁的支撑结构，比多余的装饰更重要。这个产品页以实物照片和必要参数完成说明。</p><dl><div><dt>材质</dt><dd>木材</dd></div><div><dt>尺寸</dt><dd>演示规格 · 高 75 cm</dd></div><div><dt>参考价格</dt><dd>¥ 1,280</dd></div></dl><a href="#inquiry">咨询这件作品 ↓</a></div></div><section id="inquiry" class="object-inquiry"><h2>想了解这件作品？</h2><form id="object-form"><label>你的邮箱 <input required type="email" placeholder="you@example.com"></label><button type="submit">发送咨询</button><span role="status"></span></form></section></main>` : `<main><section class="object-hero" style="--object-image:url('${chair}')"><div><span>AN OBJECT FOR SLOWER DAYS</span><h1>光落在<br>日常之间。</h1><p>一张为日常停留而做的木凳。</p><a href="${link("product")}">认识这件作品 ↗</a></div></section><section class="object-story"><small>OBJECT STUDY / NO. 04</small><h2>一个好物件，应该经得起靠近看。</h2><p>从轮廓到材质，让照片呈现真实物件本身。故事只说必要的部分。</p><a href="${link("product")}">查看材料、尺寸与咨询方式 →</a></section></main>`}<footer>慢木 · 物件与日常${demoNote}</footer></div>`
  },
  "neobrutal-tool": {
    name: "新粗野主义工具间",
    render: () => `
      <div class="site brutal-site"><header class="site-header"><a class="brand" href="${link("home")}">SHAPE<br>LAB<span>✳</span></a><nav><a href="${link("home")}">首页</a><a href="${link("tool")}">文字实验室</a></nav><span>MAKE / BREAK / BUILD</span></header>
      ${view === "tool" ? `<main class="brutal-tool">${returnLink("工具首页")}<div class="brutal-tool-head"><span>TOOL ROOM / 01</span><h1>把一句话<br>做得有态度。</h1></div><div class="brutal-workspace"><form id="poster-form"><label for="poster-input">输入一句话</label><textarea id="poster-input" rows="3" maxlength="48">做点不一样的</textarea><fieldset><legend>选择底色</legend><label><input type="radio" name="poster-color" value="yellow" checked><span>荧光黄</span></label><label><input type="radio" name="poster-color" value="pink"><span>亮粉</span></label><label><input type="radio" name="poster-color" value="blue"><span>蓝色</span></label></fieldset><button type="submit">生成海报</button><button id="poster-copy" type="button">复制文案</button><p id="poster-feedback" role="status"></p></form><div id="poster-output" class="poster-output yellow"><small>SHAPE LAB / YOUR WORDS</small><strong>做点不一样的</strong><span>01 / LIVE PREVIEW</span></div></div></main>` : `<main class="brutal-home"><div class="brutal-hero"><span>NOT ANOTHER QUIET TOOL.</span><h1>不必乖乖<br>排成一列<span>✳</span></h1><p>一间可以动手试、马上看到结果的创作工具间。</p><a href="${link("tool")}">进入文字实验室 ↗</a></div><section class="brutal-strip"><span>01 / 输入</span><span>02 / 调整</span><span>03 / 生成</span><span>04 / 复制</span></section><section class="brutal-feature"><b>TOOL 01</b><h2>让一句话<br>站出来。</h2><a href="${link("tool")}">打开工具 →</a></section></main>`}<footer>SHAPE LAB / 一间大胆的工具间${demoNote}</footer></div>`
  }
};

const site = sites[style];
const app = document.querySelector("#prototype");
if (!site) {
  app.innerHTML = `<main class="missing"><h1>没有找到这个原型。</h1><a href="../recipes.html" target="_top">返回配方库</a></main>`;
} else {
  document.body.dataset.style = style;
  document.title = `${site.name} / 可点击网站原型`;
  app.innerHTML = site.render();
  document.querySelector("#index-search")?.addEventListener("input", (event) => {
    const value = event.target.value.trim().toLocaleLowerCase();
    const rows = [...document.querySelectorAll("[data-index-row]")];
    rows.forEach((row) => { row.hidden = !row.textContent.toLocaleLowerCase().includes(value); });
    const count = rows.filter((row) => !row.hidden).length;
    document.querySelector("#index-count").textContent = `${count} 条记录`;
    document.querySelector("#index-empty").hidden = count > 0;
  });
  document.querySelector("#journal-search")?.addEventListener("input", (event) => {
    const value = event.target.value.trim().toLocaleLowerCase();
    const rows = [...document.querySelectorAll("[data-journal-row]")];
    rows.forEach((row) => { row.hidden = !row.textContent.toLocaleLowerCase().includes(value); });
    document.querySelector("#journal-empty").hidden = rows.some((row) => !row.hidden);
  });
  document.querySelectorAll("[data-product-filter]").forEach((button) => button.addEventListener("click", () => {
    document.querySelectorAll("[data-product-filter]").forEach((item) => item.classList.toggle("active", item === button));
    document.querySelectorAll("[data-product-category]").forEach((item) => { item.hidden = button.dataset.productFilter !== "all" && item.dataset.productCategory !== button.dataset.productFilter; });
  }));
  let cart = {name:"",quantity:0};
  try { cart = JSON.parse(sessionStorage.getItem("frontart-shop-cart") || "null") || cart; } catch { cart = {name:"",quantity:0}; }
  const updateCart = () => {
    const count = document.querySelector("#cart-count");
    if (!count) return;
    count.textContent = String(cart.quantity);
    document.querySelector("#cart-message").textContent = cart.quantity ? `${cart.name} × ${cart.quantity} 件。此原型不提供真实结算。` : "购物袋为空，先选择一件商品。";
  };
  updateCart();
  document.querySelector("#cart-open")?.addEventListener("click", () => { document.querySelector("#cart-panel").hidden = !document.querySelector("#cart-panel").hidden; });
  document.querySelector("#cart-close")?.addEventListener("click", () => { document.querySelector("#cart-panel").hidden = true; });
  document.querySelector("#add-cart")?.addEventListener("click", () => {
    const quantity = Math.min(9, Math.max(1, Number(document.querySelector("#product-quantity").value) || 1));
    document.querySelector("#product-quantity").value = String(quantity);
    cart = {name:shopProduct.name,quantity};
    sessionStorage.setItem("frontart-shop-cart",JSON.stringify(cart));
    updateCart();
    document.querySelector("#shop-feedback").textContent = `已将 ${quantity} 件商品加入演示购物袋。`;
  });
  ["#studio-contact-form", "#object-form"].forEach((selector) => document.querySelector(selector)?.addEventListener("submit", (event) => {
    event.preventDefault();
    event.currentTarget.querySelector('[role="status"]').textContent = "已记录演示咨询，未发送到服务器。";
  }));
  document.querySelector("#poster-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = document.querySelector("#poster-input").value.trim();
    if (!message) { document.querySelector("#poster-feedback").textContent = "先输入一句话。"; return; }
    const output = document.querySelector("#poster-output");
    output.className = `poster-output ${document.querySelector('input[name="poster-color"]:checked').value}`;
    output.querySelector("strong").textContent = message;
    document.querySelector("#poster-feedback").textContent = "海报已更新。";
  });
  document.querySelector("#poster-copy")?.addEventListener("click", async () => {
    const message = document.querySelector("#poster-output strong").textContent;
    try { await navigator.clipboard.writeText(message); document.querySelector("#poster-feedback").textContent = "已复制当前海报文案。"; }
    catch { document.querySelector("#poster-feedback").textContent = "浏览器未开放剪贴板权限。"; }
  });
}
