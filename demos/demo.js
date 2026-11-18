(function loadRecipePromptDock() {
  const pageRecipes = {"signal-feed":"signal-feed","signal-post":"signal-feed","forum-home":"forum-lounge","forum-lounge":"forum-lounge","topic-board":"topic-board","topic-detail":"topic-board","pocket-catalog":"pocket-catalog","pocket-detail":"pocket-catalog"};
  const pageName = location.pathname.split("/").pop().replace(/\.html$/, "");
  const recipeId = document.body.dataset.recipe || pageRecipes[pageName];
  if (!recipeId) return;
  document.body.dataset.recipe = recipeId;
  if (![...document.styleSheets].some((sheet) => sheet.href?.includes("prompt-dock.css"))) {
    const style = document.createElement("link"); style.rel = "stylesheet"; style.href = "prompt-dock.css"; document.head.append(style);
  }
  const load = (src) => new Promise((resolve, reject) => { const script = document.createElement("script"); script.src = src; script.onload = resolve; script.onerror = reject; document.head.append(script); });
  const start = async () => {
    if (!window.FRONTART_MAKE_PROMPT) await load("../app.js");
    await load("prompt-dock.js");
  };
  start().catch(() => {});
}());

const samplePosts = [
  {id:"1",avatar:"林",name:"林间风",handle:"@lin-design",time:"8 分钟前",text:"今天把一段工具流程从三步变成一步。界面没有多一个按钮，只是把最常用的动作放回了结果旁边。",likes:18,reposts:4,reply:4,views:"2.4k",following:true},
  {id:"2",avatar:"周",name:"周末造物",handle:"@weekend-build",time:"23 分钟前",text:"收集了一组独立杂志网站。最有用的不是字体，而是它们怎样让目录、正文和图片注释各司其职。",likes:32,reposts:7,reply:7,views:"1.8k",following:true,media:{eyebrow:"FIELD NOTES / 02",title:"把视觉层级交给内容",caption:"编辑设计观察 · 原创专题"}},
  {id:"3",avatar:"野",name:"野原",handle:"@field-notes",time:"1 小时前",text:"本周观察：页面有留白，不代表内容就需要塞进一张悬浮卡片。",likes:47,reposts:12,reply:12,views:"5.3k",following:false},
  {id:"4",avatar:"鹭",name:"鹭",handle:"@photo-notes",time:"2 小时前",text:"一张照片怎样决定标题的位置？先看主体、光线和留白，再排文案，页面会更像真实内容的延伸。",likes:21,reposts:3,reply:5,views:"864",following:true}
];
function escapeHtml(value){return String(value).replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]))}
let activeFeed="for-you";
/** 根据搜索词和时间线类型筛选当前可见的动态。 */
function filterFeed(){const query=document.querySelector("#feed-search")?.value.trim().toLocaleLowerCase()||"";document.querySelectorAll("#posts .post").forEach(post=>{const follows=activeFeed!=="following"||post.dataset.following==="true";post.hidden=!follows||!post.textContent.toLocaleLowerCase().includes(query)})}
/** 重新绘制原创动态示例，并为每条动态绑定本地点赞反馈。 */
function renderPosts(){
  const target=document.querySelector("#posts");
  if(!target)return;
  target.replaceChildren();
  samplePosts.forEach(post=>{
    const article=document.createElement("article");
    article.className="post";
    article.dataset.following=String(post.following!==false);
    const avatar=document.createElement("span");
    avatar.className="post-avatar";
    avatar.textContent=post.avatar;
    const content=document.createElement("div");
    const head=document.createElement("div");
    head.className="post-head";
    const name=document.createElement("b");
    name.textContent=post.name;
    const meta=document.createElement("small");
    meta.textContent=post.handle+" · "+post.time;
    head.append(name,meta);
    const message=document.createElement("a");
    message.className="post-link";
    message.href="signal-post.html?post="+encodeURIComponent(post.id);
    message.textContent=post.text;
    content.append(head,message);
    if(post.media){
      const media=document.createElement("div");
      media.className="feed-media";
      const eyebrow=document.createElement("small");
      eyebrow.textContent=post.media.eyebrow;
      const title=document.createElement("strong");
      title.textContent=post.media.title;
      const caption=document.createElement("span");
      caption.textContent=post.media.caption;
      const mark=document.createElement("i");
      mark.textContent="◌";
      mark.setAttribute("aria-hidden","true");
      const mediaCopy=document.createElement("div");
      mediaCopy.append(eyebrow,title,caption);
      media.append(mediaCopy,mark);
      content.append(media);
    }
    const actions=document.createElement("div");
    actions.className="post-actions";
    const reply=document.createElement("a");
    reply.href=message.href;
    reply.textContent="↩ "+post.reply;
    const repost=document.createElement("button");
    repost.type="button";
    repost.textContent="↻ "+(post.reposts||0);
    repost.addEventListener("click",()=>{const active=repost.dataset.active==="true";repost.dataset.active=String(!active);repost.textContent=active?"↻ "+(post.reposts||0):"✓ 已转发"});
    const like=document.createElement("button");
    like.type="button";
    like.className="like-count";
    like.dataset.count=String(post.likes);
    like.textContent="♡ "+post.likes;
    like.addEventListener("click",()=>{const active=like.dataset.active==="true";like.dataset.active=String(!active);const count=Number(like.dataset.count)+(active?-1:1);like.dataset.count=String(count);like.textContent=(active?"♡ ":"♥ ")+count});
    const views=document.createElement("span");
    views.textContent="⌁ "+(post.views||"0");
    const bookmark=document.createElement("button");
    bookmark.type="button";
    bookmark.textContent="♧";
    bookmark.setAttribute("aria-label","收藏动态");
    bookmark.addEventListener("click",()=>{const active=bookmark.dataset.active==="true";bookmark.dataset.active=String(!active);bookmark.textContent=active?"♧":"✓";bookmark.setAttribute("aria-label",active?"收藏动态":"已收藏动态")});
    const share=document.createElement("button");
    share.type="button";
    share.textContent="↗";
    share.setAttribute("aria-label","分享动态");
    share.addEventListener("click",()=>{const active=share.dataset.active==="true";share.dataset.active=String(!active);share.textContent=active?"↗":"✓"});
    actions.append(reply,repost,like,views,bookmark,share);
    content.append(actions);
    article.append(avatar,content);
    target.append(article);
  });
  filterFeed();
}
renderPosts();
document.querySelector("#refresh")?.addEventListener("click",()=>{samplePosts.reverse();renderPosts()});
document.querySelector("#compose")?.addEventListener("click",()=>{document.querySelector("#compose-form")?.removeAttribute("hidden");document.querySelector("#post-text")?.focus()});
document.querySelector("#open-composer")?.addEventListener("click",()=>{document.querySelector("#compose-form")?.removeAttribute("hidden");document.querySelector("#post-text")?.focus()});
document.querySelector("#composer-submit")?.addEventListener("click",()=>{document.querySelector("#compose-form")?.removeAttribute("hidden");document.querySelector("#post-text")?.focus()});
document.querySelector("#feed-search")?.addEventListener("input",filterFeed);
document.querySelectorAll("[data-feed]").forEach(button=>button.addEventListener("click",()=>{activeFeed=button.dataset.feed;document.querySelectorAll("[data-feed]").forEach(tab=>{const selected=tab===button;tab.classList.toggle("is-active",selected);tab.setAttribute("aria-selected",String(selected))});filterFeed()}));
document.querySelector("#compose-form")?.addEventListener("submit",e=>{e.preventDefault();const field=document.querySelector("#post-text");if(!field.value.trim())return;const post={id:String(Date.now()),avatar:"林",name:"林间风",handle:"@lin-design",time:"刚刚",text:field.value.trim(),likes:0,reposts:0,views:"1",reply:0,following:true};samplePosts.unshift(post);sessionStorage.setItem("signal-post-"+post.id,JSON.stringify(post));field.value="";renderPosts();});
document.querySelectorAll(".follow-item button").forEach(button=>button.addEventListener("click",()=>{const following=button.dataset.following==="true";button.dataset.following=String(!following);button.textContent=following?"关注":"正在关注"}));
const signalPostTarget=document.querySelector("#signal-post");
if(signalPostTarget){const postId=new URLSearchParams(location.search).get("post")||"1";let post=samplePosts.find(item=>item.id===postId);if(!post){try{post=JSON.parse(sessionStorage.getItem(`signal-post-${postId}`)||"null")}catch{post=null}}post=post||samplePosts[0];signalPostTarget.innerHTML=`<div class="signal-post-head"><span>${escapeHtml(post.avatar)}</span><div><b>${escapeHtml(post.name)}</b><small>${escapeHtml(post.handle)}</small></div></div><p></p><small>${escapeHtml(post.time)} · 原创示例动态</small><div class="signal-post-actions"><button id="signal-like" type="button">♡ ${post.likes} 喜欢</button><button id="signal-reply-button" type="button">↩ 回复</button></div>`;signalPostTarget.querySelector("p").textContent=post.text;document.querySelector("#signal-like").addEventListener("click",event=>{const button=event.currentTarget;const active=button.dataset.active==="true";button.dataset.active=String(!active);button.textContent=`${active?"♡":"♥"} ${post.likes+(active?0:1)} 喜欢`});document.querySelector("#signal-reply-button").addEventListener("click",()=>document.querySelector("#signal-reply-text").focus())}
document.querySelector("#signal-reply-form")?.addEventListener("submit",event=>{event.preventDefault();const field=document.querySelector("#signal-reply-text");if(!field.value.trim())return;const item=document.createElement("article");const author=document.createElement("b");author.textContent="你";const message=document.createElement("p");message.textContent=field.value.trim();item.append(author,message);document.querySelector("#post-replies").append(item);field.value=""});
document.querySelector("#watch")?.addEventListener("click",e=>{e.currentTarget.dataset.watching=e.currentTarget.dataset.watching!=="true";e.currentTarget.textContent=e.currentTarget.dataset.watching==="true"?"✓ 已关注":"☆ 关注主题"});
document.querySelector("#reply")?.addEventListener("click",()=>document.querySelector("#topic-reply")?.focus());
document.querySelector("#topic-like")?.addEventListener("click",event=>{const liked=event.currentTarget.dataset.liked==="true";event.currentTarget.dataset.liked=String(!liked);event.currentTarget.textContent=liked?"♡ 喜欢":"♥ 已喜欢"});
document.querySelector("#topic-share")?.addEventListener("click",event=>{event.currentTarget.textContent=event.currentTarget.dataset.shared==="true"?"↗ 分享":"✓ 已分享";event.currentTarget.dataset.shared=String(event.currentTarget.dataset.shared!=="true")});
document.querySelector("#send-reply")?.addEventListener("click",()=>{const field=document.querySelector("#topic-reply");if(!field?.value.trim())return;const item=document.createElement("article");const avatar=document.createElement("span");avatar.className="reply-avatar";avatar.textContent="你";const content=document.createElement("div");const head=document.createElement("div");head.className="reply-head";const author=document.createElement("b");author.textContent="你";const time=document.createElement("small");time.textContent="刚刚";const message=document.createElement("p");message.textContent=field.value.trim();head.append(author,time);content.append(head,message);item.append(avatar,content);document.querySelector(".replies")?.append(item);field.value=""});
const topicItems=[
  {id:"1",name:"林间风",topic:"设计与前端",time:"8 分钟前",title:"怎样让一个实用工具站也有自己的视觉语言？",text:"最近在整理几个常用工具。功能都很直接，但页面不应该因此只能长成一个样子。你会从用户任务、内容密度，还是品牌素材开始找方向？",comments:18,likes:32,tag:"创作"},
  {id:"2",name:"周末造物",topic:"字体观察",time:"23 分钟前",title:"最近发现的中文字体组合",text:"标题用有性格的衬线，正文回到清楚易读的黑体。整理了几组适合长文和工具产品的搭配，欢迎补充。",comments:12,likes:26,tag:"字体"},
  {id:"3",name:"鹭",topic:"摄影笔记",time:"1 小时前",title:"一张照片怎么把页面带进故事里？",text:"先看照片主体和光线，再决定文案放在哪里。背景图不只是铺满屏幕，它也能帮助读者理解空间和内容。",comments:9,likes:19,tag:"摄影",image:true},
  {id:"4",name:"代码山",topic:"界面观察",time:"2 小时前",title:"把侧项目重新做了一遍，终于能一眼看出重点",text:"删掉了不必要的功能入口，把当前结果和下一步操作放近了一点。使用起来少绕了一圈。",comments:7,likes:14,tag:"交互"}
];
const topicList=document.querySelector("#topic-list");
function escapeTopicText(value){return String(value).replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]))}
function renderTopics(items=topicItems){if(!topicList)return;topicList.innerHTML=items.map((item)=>`<article class="topic-row" data-tag="${escapeTopicText(item.tag)}"><span class="topic-author">${escapeTopicText(item.name.slice(0,1))}</span><div class="topic-copy"><div class="topic-meta"><b>${escapeTopicText(item.topic)}</b><span>·</span><span>${escapeTopicText(item.name)}</span><span>·</span><span>${escapeTopicText(item.time)}</span></div><h3><a href="topic-detail.html?post=${encodeURIComponent(item.id)}">${escapeTopicText(item.title)}</a></h3><p>${escapeTopicText(item.text)}</p>${item.image?'<div class="topic-image">原创摄影示意 / 光影与场景</div>':""}<div class="topic-actions"><a href="topic-detail.html?post=${encodeURIComponent(item.id)}">↩ ${item.comments} 条回复</a><span>♡ ${item.likes} 赞</span><span>↗ 分享</span></div></div></article>`).join("")}
renderTopics();
document.querySelector("#topic-search")?.addEventListener("input",event=>{const query=event.target.value.trim().toLocaleLowerCase();renderTopics(topicItems.filter(item=>`${item.topic} ${item.title} ${item.text} ${item.tag}`.toLocaleLowerCase().includes(query)))});
document.querySelectorAll("[data-topic-filter]").forEach(link=>link.addEventListener("click",()=>{const tag=link.dataset.topicFilter;renderTopics(tag==="all"?topicItems:topicItems.filter(item=>item.topic.includes(tag)||item.tag.includes(tag)))}));
document.querySelectorAll(".feed-tabs [data-sort]").forEach(button=>button.addEventListener("click",()=>{document.querySelectorAll(".feed-tabs [data-sort]").forEach(tab=>tab.classList.toggle("active",tab===button));renderTopics(button.dataset.sort==="newest"?[...topicItems].reverse():button.dataset.sort==="following"?topicItems.filter(item=>item.topic==="设计与前端"):topicItems)}));
document.querySelector("#start-topic")?.addEventListener("click",()=>{document.querySelector("#topic-compose")?.removeAttribute("hidden");document.querySelector("#topic-text")?.focus()});
document.querySelector("#my-space-link")?.addEventListener("click",()=>{document.querySelector("#topic-compose")?.removeAttribute("hidden");document.querySelector("#topic-text")?.focus()});
document.querySelector("#topic-compose")?.addEventListener("submit",event=>{event.preventDefault();const field=document.querySelector("#topic-text");const title=field.value.trim();if(!title)return;const item={id:String(Date.now()),name:"你",topic:"设计与前端",time:"刚刚",title,text:"新发起的讨论。",comments:0,likes:0,tag:"创作"};topicItems.unshift(item);sessionStorage.setItem(`topic-post-${item.id}`,JSON.stringify(item));field.value="";document.querySelector("#topic-compose").hidden=true;renderTopics()});
const detailTopicPost=document.querySelector("#detail-topic-post");
if(detailTopicPost){const postId=new URLSearchParams(location.search).get("post")||"1";let item=topicItems.find(post=>post.id===postId);if(!item){try{item=JSON.parse(sessionStorage.getItem(`topic-post-${postId}`)||"null")}catch{item=null}}item=item||topicItems[0];document.querySelector("#detail-topic-category").textContent=item.topic;detailTopicPost.innerHTML=`<span class="topic-category">${escapeTopicText(item.topic)}</span><h1>${escapeTopicText(item.title)}</h1><div class="topic-author-line">${escapeTopicText(item.name)} · ${escapeTopicText(item.time)} · ${escapeTopicText(item.tag)}</div><p></p><div class="topic-stat">↩ ${item.comments} 条回复　　♡ ${item.likes} 赞</div>`;detailTopicPost.querySelector("p").textContent=item.text}
document.querySelector("#detail-topic-reply")?.addEventListener("submit",event=>{event.preventDefault();const field=document.querySelector("#detail-topic-text");if(!field.value.trim())return;const article=document.createElement("article");const author=document.createElement("b");author.textContent="你";const message=document.createElement("p");message.textContent=field.value.trim();const time=document.createElement("small");time.textContent="刚刚";article.append(author,message,time);document.querySelector("#detail-topic-comments").append(article);field.value=""});
document.querySelector("#join-main")?.addEventListener("click",event=>{event.currentTarget.textContent=event.currentTarget.dataset.joined==="true"?"＋ 加入设计与前端":"✓ 已加入设计与前端";event.currentTarget.dataset.joined=event.currentTarget.dataset.joined!=="true"});
document.querySelector("#guide")?.addEventListener("click",event=>{event.currentTarget.textContent=event.currentTarget.dataset.open==="true"?"新手指南":"已展开：先读讨论，再友善发言";event.currentTarget.dataset.open=event.currentTarget.dataset.open!=="true"});
document.querySelector("#mobile-search")?.addEventListener("input",e=>{document.querySelectorAll(".saved-row").forEach(row=>row.hidden=!row.textContent.toLowerCase().includes(e.target.value.toLowerCase()))});
document.querySelectorAll(".phone-tabs button").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".phone-tabs button").forEach(x=>x.classList.toggle("active",x===b));document.querySelector(".collection-feature span").textContent=`${b.dataset.tab} / 每周收藏`}));
document.querySelectorAll(".save-toggle").forEach(b=>b.addEventListener("click",()=>{b.classList.toggle("is-saved");b.textContent=b.classList.contains("is-saved")?"♥":"♡";b.setAttribute("aria-label",b.classList.contains("is-saved")?"取消收藏":"收藏项目")}));
document.querySelectorAll(".phone-nav button[data-view]").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".phone-nav button").forEach(x=>x.classList.toggle("active",x===b));document.querySelector(".phone-date").textContent=`${b.dataset.view} / 今日灵感`}));
document.querySelector("#edit-profile")?.addEventListener("click",e=>{e.currentTarget.textContent=e.currentTarget.textContent==="个人"?"已打开":"个人"});
const forumSearch=document.querySelector("#forum-search");
let forumFilter="all";
let forumView="latest";
/** 按搜索、分类和所选论坛视图过滤并排序话题行。 */
function filterForum(){const query=forumSearch?.value.trim().toLocaleLowerCase()||"";const list=document.querySelector("#forum-topic-list");const rows=[...document.querySelectorAll("[data-forum-topic]")];const sortKey=forumView==="hot"||forumView==="leaderboard"?"replies":forumView==="new"?"new":"activity";rows.sort((a,b)=>Number(b.dataset[sortKey]||0)-Number(a.dataset[sortKey]||0)).forEach(row=>list?.append(row));rows.forEach(row=>{const textMatches=row.textContent.toLocaleLowerCase().includes(query);const categoryMatches=forumFilter==="all"||row.dataset.category===forumFilter||row.textContent.includes(forumFilter);const viewMatches=forumView==="unread"?row.dataset.unread==="true":forumView==="mine"?row.dataset.mine==="true":forumView==="new"?Number(row.dataset.new||0)>0:true;row.hidden=!(textMatches&&categoryMatches&&viewMatches)});const empty=document.querySelector("#forum-empty");if(empty)empty.hidden=rows.some(row=>!row.hidden)}
forumSearch?.addEventListener("input",filterForum);
document.querySelectorAll("[data-forum-filter]").forEach(button=>button.addEventListener("click",()=>{forumFilter=button.dataset.forumFilter;document.querySelectorAll("[data-forum-filter]").forEach(item=>item.classList.toggle("active",item.dataset.forumFilter===forumFilter));filterForum()}));
document.querySelectorAll("[data-forum-view]").forEach(button=>button.addEventListener("click",()=>{forumView=button.dataset.forumView;document.querySelectorAll("[data-forum-view]").forEach(item=>item.classList.toggle("active",item.dataset.forumView===forumView));filterForum()}));
const forumMenuToggle=document.querySelector("#forum-menu-toggle");
const forumMenu=document.querySelector("#forum-menu-panel");
forumMenuToggle?.addEventListener("click",()=>{const open=forumMenu?.hidden===true;forumMenu.hidden=!open;forumMenuToggle.setAttribute("aria-expanded",String(open))});
forumMenu?.querySelectorAll("[data-forum-view]").forEach(button=>button.addEventListener("click",()=>{forumMenu.hidden=true;forumMenuToggle?.setAttribute("aria-expanded","false")}));
document.addEventListener("click",event=>{if(forumMenu&&!forumMenu.hidden&&!forumMenu.contains(event.target)&&!forumMenuToggle?.contains(event.target)){forumMenu.hidden=true;forumMenuToggle?.setAttribute("aria-expanded","false")}});
document.querySelector("#forum-new-topic")?.addEventListener("click",()=>{document.querySelector("#forum-compose")?.removeAttribute("hidden");document.querySelector("#forum-compose-title")?.focus()});
document.querySelector("#forum-compose")?.addEventListener("submit",event=>{
  event.preventDefault();
  const title=document.querySelector("#forum-compose-title");
  const body=document.querySelector("#forum-compose-body");
  if(!title.value.trim())return;
  const id=String(Date.now());
  const bodyText=body.value.trim()||"由你刚刚发起的话题。";
  sessionStorage.setItem("forum-topic-"+id,JSON.stringify({category:"设计与前端",title:title.value.trim(),author:"你 · 发布于刚刚",first:bodyText,second:"",quote:"刚刚发起的讨论。",replies:[]}));
  const row=document.createElement("a");
  row.className="forum-list-row";
  row.href="forum-lounge.html?topic=created&id="+encodeURIComponent(id);
  row.dataset.forumTopic="";
  row.dataset.category="设计与前端";
  row.dataset.replies="0";
  row.dataset.unread="true";
  row.dataset.mine="true";
  row.dataset.new="1";
  row.dataset.activity=String(Date.now());
  const main=document.createElement("div");
  main.className="forum-topic-main";
  const category=document.createElement("small");
  category.innerHTML='<i class="category-dot dot-blue"></i>设计与前端 <span>·</span> 新话题';
  const heading=document.createElement("strong");
  heading.textContent=title.value.trim();
  const tags=document.createElement("div");
  tags.className="forum-topic-tags";
  tags.innerHTML="<span>新话题</span>";
  const time=document.createElement("span");
  time.className="forum-mobile-activity";
  time.textContent="你 · 刚刚发布";
  main.append(category,heading,tags,time);
  const participants=document.createElement("span");
  participants.className="forum-participants";
  participants.setAttribute("aria-label","参与讨论：你");
  const avatar=document.createElement("i");
  avatar.textContent="你";
  participants.append(avatar);
  const count=document.createElement("span");
  count.className="forum-reply-count";
  count.innerHTML="<b>0</b><small>回复</small>";
  const views=document.createElement("span");
  views.className="forum-view-count";
  views.textContent="1";
  const activity=document.createElement("span");
  activity.className="forum-activity";
  activity.textContent="刚刚";
  row.append(main,participants,count,views,activity);
  document.querySelector("#forum-topic-list")?.prepend(row);
  event.currentTarget.reset();
  event.currentTarget.hidden=true;
  filterForum();
});
