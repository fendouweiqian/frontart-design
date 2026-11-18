const visualProfiles = {
  "signal-feed": {layout:"左侧固定主导航、中间约 600px 的连续时间线、右侧搜索与趋势组成三栏首页；中间保留推荐/关注切换和发帖入口。",palette:"白色画布、近黑色正文、浅灰分隔线与少量蓝色选中态；动态连续排列，不堆叠独立卡片。",type:"无衬线文字优先；动态正文保持易读，作者和时间作为次级信息，不以极小字号呈现。",interaction:"发布动态、切换推荐/关注、点赞、收藏与进入动态详情均有可见反馈。"},
  "forum-lounge": {layout:"顶部紧凑导航、居中标题与搜索、公告、横向视图与密集话题表构成论坛目录；话题行展示分类、参与者、回复、浏览与活动。",palette:"白色页面、浅灰细分隔线、蓝色链接与选中态；暖橙色用于回复和浏览统计。",type:"清晰的无衬线标题与正文；主题标题、分类、回复和活动各自有稳定层级，正文不使用过小字号。",interaction:"目录支持搜索、类别筛选和视图切换；主题进入二级讨论页，可关注、回复并返回。"},
  "topic-board": {layout:"顶部放搜索与发帖入口；左侧列出常逛主题；中间按帖子连续阅读；右侧显示热聊和热门主题。窄屏收起两侧栏，帖子流占满主区。",palette:"白色内容面、浅灰页面底色和蓝色操作强调；边框与活跃态保持轻量，避免大面积装饰色块。",type:"使用易扫读的黑体层级；帖子身份、主题、时间、标题、正文和回应动作顺序稳定。",interaction:"搜索、主题筛选、推荐/最新/关注、加入主题和发布讨论可操作；账号、推荐算法与服务端功能精简。"},
  "field-journal": {layout:"以一张完整图像建立主视觉，再用地点、日期和章节注释延展叙事。",palette:"从照片主体取色，深浅层级服务图像阅读，不叠加无关装饰色。",type:"较有编辑感的标题搭配克制说明文字，图注保持安静。",interaction:"旅程目录进入影像故事，地点与图注辅助阅读，并可返回继续浏览。"},
  "longform-review": {layout:"长文采用窄栏阅读，章节索引与边注作为并行辅助信息。",palette:"纸张色、墨色与单一提示色建立刊物式阅读层次。",type:"衬线标题与适合长读的正文搭配，注释和图注保持独立层级。",interaction:"示例展示文章入口和目录关系；完整出版、评论功能不实现。"},
  "swiss-index": {layout:"稳定网格、编号目录与明确对齐线组织大量资料。",palette:"黑白灰搭配少量高对比提示色，颜色用于定位而不是铺满模块。",type:"中性无衬线标题搭配等宽编号，依靠字号和留白建立层级。",interaction:"索引支持搜索；每条资料可进入独立内容详情，并可返回目录。"},
  "astra-studio": {layout:"品牌立场、服务、案例与信任信息依决策顺序组成模块化首页。",palette:"不复刻 Astra 演示的品牌色；使用低饱和底色和可替换品牌强调色表达模块关系。",type:"清晰的品牌标题、服务说明和案例标题构成一致层级。",interaction:"导航到服务和案例作为示意；表单、主题构建器和商业插件不实现。"},
  "blocksy-commerce": {layout:"商品分类、编辑内容和商品橱窗并列；比较和购买入口靠近商品。",palette:"采用高明度商品展示底色，让商品图与价格成为视觉主角。",type:"品牌标题克制，商品名称、规格和价格保持容易扫描。",interaction:"可按商品分类筛选，进入对应商品详情、选择数量并加入演示购物袋；不提供真实结算。"},
  "generatepress-journal": {layout:"目录导航、文章列表、正文和关联阅读按阅读顺序排列。",palette:"控制颜色数量，减少装饰干扰，让正文和链接承担主要层级。",type:"正文可读性优先，标题层级稳定，日期与分类用轻量标注。",interaction:"文章列表支持搜索与阅读详情；可返回目录，发布系统不实现。"},
  "object-campaign": {layout:"产品影像占据主要画面，材料、使用情境与咨询动作围绕产品展开。",palette:"由产品实物和场景影像决定配色，不预设通用品牌色。",type:"简短品牌标题配合清楚的产品信息和交易入口。",interaction:"产品详情和咨询动作作为页面示意，真实下单不实现。"},
  "neobrutal-tool": {layout:"强标题建立记忆，输入、结果和主次动作仍落在清晰工作区。",palette:"少数高对比实色形成清楚分区；不以颜色替代操作层级。",type:"直接的粗体标题对比简洁工具说明，结果保持高可读。",interaction:"突出一个主要操作并呈现结果状态；完整工具逻辑按真实需求实现。"},
  "pocket-catalog": {layout:"窄屏内容、搜索、分类与收藏形成单手可达的纵向路径，底部导航固定。",palette:"参考轻内容产品的浅色画布和自然绿色状态色。",type:"手机标题清晰而紧凑，列表标题、元信息和动作使用稳定层级。",interaction:"搜索、分类、收藏和底部导航有可见状态；不依赖 iOS 或 Android 专属控件。"}
};

const sourceLinks = {
  "signal-feed": ["X / Twitter · 信息流结构", "https://x.com/"],
  "forum-lounge": ["Linux.do · 话题讨论结构", "https://linux.do/"],
  "topic-board": ["百度贴吧 · 兴趣分区结构", "https://tieba.baidu.com/"],
  "astra-studio": ["Astra · WordPress.org 主题目录", "https://wordpress.org/themes/astra/"],
  "blocksy-commerce": ["Blocksy · WordPress.org 主题目录", "https://wordpress.org/themes/blocksy/"],
  "generatepress-journal": ["GeneratePress · WordPress.org 主题目录", "https://wordpress.org/themes/generatepress/"]
};

const params = new URLSearchParams(location.search);
const id = params.get("style");
const recipe = window.FRONTART_RECIPES?.find((item) => item.id === id);
const profile = visualProfiles[id];
const main = document.querySelector("#detail-main");

if (!recipe || !profile) {
  main.innerHTML = `<section class="detail-missing"><p class="section-index">RECIPE NOT FOUND</p><h1>没有找到这张配方。</h1><a class="catalog-link" href="../recipes.html">返回配方库 ↗</a></section>`;
} else {
  const index = window.FRONTART_RECIPES.indexOf(recipe) + 1;
  const sharedPrototype = !["signal-feed", "forum-lounge", "topic-board", "pocket-catalog"].includes(id);
  const source = sourceLinks[id];
  document.title = `${recipe.name} / 设计配方 — FrontArt`;
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.append(canonical); }
  canonical.href = `https://frontart.fendouweiqian.top/recipes/demo.html?style=${encodeURIComponent(id)}`;
  document.querySelector('meta[name="description"]').content = `${recipe.name}：${recipe.summary} 查看参考视觉规律、原创 Demo 和可复制的 FrontArt Design 提示词。`;
  document.querySelector("#detail-category").textContent = recipe.type;
  document.querySelector("#detail-index").textContent = `FRONTART RECIPE / ${String(index).padStart(2, "0")}`;
  document.querySelector("#detail-name").textContent = recipe.name;
  document.querySelector("#detail-summary").textContent = recipe.summary;
  document.querySelector("#detail-tags").innerHTML = recipe.tags.map((tag) => `<span>${tag}</span>`).join("");
  document.querySelector("#preview-kind").textContent = recipe.category === "mobile" ? "CLICKABLE MOBILE PROTOTYPE" : "CLICKABLE WEBSITE PROTOTYPE";
  document.querySelector("#preview-title").textContent = recipe.name;
  document.querySelector("#preview-size").textContent = recipe.category === "mobile" ? "GENERAL MOBILE PROTOTYPE" : "WEB / RESPONSIVE PREVIEW";
  document.querySelector("#preview-flow").textContent = `操作路径：${window.FRONTART_RECIPE_FLOWS[id]}`;
  document.querySelector("#preview-caption").textContent = "这是依据公开页面结构制作的原创可点击样例，帖子和账号均为虚构内容，账号、支付与服务端数据等功能按展示目的简化。桌面端可从右下角、手机端可从顶栏打开提示词面板并复制完整配方。";
  document.querySelector("#detail-principle-summary").textContent = recipe.summary;
  document.querySelector("#detail-principles").innerHTML = [["布局", profile.layout], ["配色", profile.palette], ["文字", profile.type], ["功能范围", profile.interaction]].map(([term, value]) => `<div><dt>${term}</dt><dd>${value}</dd></div>`).join("");
  const sourceNode = document.querySelector("#detail-source");
  sourceNode.textContent = source?.[0] || recipe.source;
  if (source) sourceNode.href = source[1];
  else { sourceNode.removeAttribute("href"); sourceNode.removeAttribute("target"); }
  document.querySelector("#detail-evidence").textContent = `来源记录：${recipe.source}。依据可访问的公开信息提炼设计规律，不代表获得来源方认可。`;
  document.querySelector("#prompt-recipe-id").textContent = id.toUpperCase();
  document.querySelector("#detail-prompt").textContent = window.FRONTART_MAKE_PROMPT(recipe);
  const demoUrl = sharedPrototype ? `../demos/visual-recipe.html?style=${id}&v=20261104-3` : `../${recipe.demo}?style=${id}&v=20261104-3`;
  document.querySelector("#preview-open").href = demoUrl;
  document.querySelector("#detail-demo-open").href = demoUrl;

  async function copyPrompt(event) {
    const button = event.currentTarget;
    const prompt = window.FRONTART_MAKE_PROMPT(recipe);
    try {
      await navigator.clipboard.writeText(prompt);
    } catch {
      const area = document.createElement("textarea");
      area.value = prompt;
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.append(area);
      area.select();
      document.execCommand("copy");
      area.remove();
    }
    button.textContent = "已复制调用示例";
    window.setTimeout(() => { button.innerHTML = "复制调用示例"; }, 1800);
  }
  document.querySelector("#copy-prompt").addEventListener("click", copyPrompt);
  document.querySelector("#detail-copy-prompt").addEventListener("click", copyPrompt);
}
