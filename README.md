# FrontArt Design

FrontArt 是一套帮助 AI 编写有辨识度、有依据且可实际操作的前端界面的 Skill，以及公开可搜索的视觉设计配方库。

项目覆盖桌面网站、Web 产品和平台中立的通用手机原型。设计配方从公开网站、设计主题和视觉传统中提炼规律；不复制品牌标识、页面文案、专属图片或未公开实现。

官网：<https://frontart.fendouweiqian.top/>。可在线浏览配方库、复制一句话调用示例，并打开交互 Demo。

## 本地预览

纯静态 HTML/CSS/JavaScript，无需安装依赖。可直接打开 `index.html`，也可在 PowerShell 中运行：

```powershell
python -m http.server 4173
```

然后访问 `http://localhost:4173/`。也可直接打开 `index.html`，无需启动服务器。

## 当前目录

- `index.html`：官网首页，介绍设计方法并展示 6 条精选配方。
- `recipes.html`：完整配方目录页，集中承载搜索、分类和不断扩展的配方列表。
- `recipes/demo.html?style=forum-lounge`：单条配方详情页，展示来源规律、Demo 和一句话调用示例。
- `styles.css`、`catalog.css`、`app.js`：官网与配方库的共用视觉和数据渲染。
- `demos/`：12 条配方对应的可点击网站或 H5 原型；每条至少包含首页/列表与一层内容详情或操作页。
- `skill/SKILL.md`：Agent Skill 定义。
- `skill/agents/openai.yaml`：ChatGPT/Codex 中显示的 Skill 名称和默认调用文案。
- `skill/references/recipes/index.md`：可读配方索引。
- `skill/references/recipes/catalog.json`：结构化配方资料。
- `skill/references/recipe-template.md`：新增配方的证据和字段要求。

配方库当前包含 12 条配方：首页只展示 6 条精选，其余配方进入完整目录页搜索。每条详情页使用稳定的配方 ID 加载对应 Demo、来源规律和提示词。Demo 覆盖“首页或列表 → 二级内容或操作页 → 返回”，并给出一条可操作的核心流程。参考网站 Demo 以已核验的公开内容为依据；仍无法访问的特定演示页，不宣称逐页还原。

## 运行与修改

- 从首页点击“浏览全部配方”进入 `recipes.html`；搜索覆盖名称、分类、来源、标签和说明，`/` 聚焦搜索框。
- 配方卡提供两个入口：点击“体验 Demo”直接打开完整可操作页面；点击“查看配方”进入三级详情页，查看来源规律、视觉拆解和提示词。
- 详情页首屏可直接“立即体验 Demo”或“复制调用示例”；页面下方展示安装 Skill 后可直接发送的一句话调用。Demo 桌面端右下角、手机端顶栏提供可收起的调用示例面板，浏览时可查看和复制。
- 提示词包含对应 Demo 的页面路径，要求 Skill 为客户产品交付同类网站或 H5 原型。页面结构和视觉规律可复用；内容、素材和具体效果会随产品事实改变。
- 外部字体与示例照片使用远程公开资源。上线后仍需检查服务可用性、素材许可和本地固化需求。

## Skill 使用

GitHub 仓库：<https://github.com/fendouweiqian/frontart-design>。

安装后可直接使用 `$frontart-design` 调用，例如：`用 $frontart-design，按「社区论坛目录」风格，为摄影爱好者设计并实现一个可交互的社区网站，核心任务是浏览主题并回复。`。

Codex 用户可在新对话中输入 `$skill-installer`，再说明“从 GitHub 仓库 `fendouweiqian/frontart-design` 安装 `skill/`”；也可以使用安装脚本：

```powershell
python <CODEX_HOME>/skills/.system/skill-installer/scripts/install-skill-from-github.py --repo fendouweiqian/frontart-design --path skill --name frontart-design
```

安装后若 Skill 列表没有立即更新，重启 Codex 或新开对话。安装后的用户不需要复制完整设计规范，直接用一句话指定 `$frontart-design`、配方名称和产品任务即可。

仓库已发布到 GitHub：<https://github.com/fendouweiqian/frontart-design>，默认分支为 `main`。项目代码采用 MIT License，第三方素材仍遵循各自许可；官网部署在阿里云中国香港 OSS，并通过 HTTPS 访问。

安装脚本按 `--path` 的目录名决定本地文件夹名，因此从 `skill/` 安装时目录可能叫 `skill`；Skill 的调用名以 `skill/SKILL.md` 的 `name: frontart-design` 为准。需要目录名与调用名一致时可使用：

```powershell
python <CODEX_HOME>/skills/.system/skill-installer/scripts/install-skill-from-github.py --repo fendouweiqian/frontart-design --path skill --name frontart-design
```

## 验收范围

当前 MVP 应检查首页精选入口、目录分类筛选与搜索、三级详情路由、提示词复制、Demo 的一级到二级导航与返回、核心动作反馈，以及来源证据范围。
