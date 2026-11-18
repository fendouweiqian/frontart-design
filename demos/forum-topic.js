const topics = {
  tool: {
    category:"开发实践",
    title:"一个小工具的结果区，应该放在哪里？",
    name:"周末造物",
    author:"周末造物 · 发布于 22 分钟前 · 4 分钟阅读",
    first:"我在做一个小工具，用户输入内容后，结果会出现在另一块区域。现在每次生成都要重新找结果，操作不够顺手。",
    second:"把结果放在主动作附近后，流程顺了很多。生成和复制分别保留为两个动作，反馈也就更清楚。",
    quote:"操作区、结果区和下一步动作应该形成一条可预测的路径。",
    replies:["我会把结果紧挨着主按钮，让用户不用重新找。","复制当前结果应该是独立动作，状态也要明确。"]
  },
  photo: {
    category:"设计与前端",
    title:"真实图片会改变页面的阅读顺序吗？",
    name:"鹭",
    author:"鹭 · 发布于 1 小时前 · 5 分钟阅读",
    first:"我在整理几张有明确主体的照片。同一张照片放在不同位置，读者先看到的信息也会不同。",
    second:"照片不只是背景。它可以承担产品说明、地点线索和内容节奏，然后让文字补充画面没有说出的部分。",
    quote:"先看图片主体与光线，再决定标题和主动作的位置。",
    replies:["照片承担了内容，标题只需补充关键线索。","如果图片与主题无关，反而会让阅读变慢。"]
  },
  portfolio: {
    category:"作品反馈",
    title:"把作品集首页的内容顺序重新排了一遍",
    name:"代码山",
    author:"代码山 · 发布于 2 小时前 · 5 分钟阅读",
    first:"我把首页从按年份排列改成先展示最近的三个项目，再补充工作方法和完整档案。第一次访问时，访客更容易看出我做什么。",
    second:"接下来会给每个案例补上目标、限制和结果，让图片承担展示，文字说明决策。",
    quote:"先说明作品解决了什么，再展示它长什么样。",
    replies:["项目顺序按目标客户最关心的问题来排，会比只按年份清楚。","案例详情里的过程和取舍，能帮助别人判断你是否适合这个项目。"]
  }
};
const params = new URLSearchParams(location.search);
let topic = topics[params.get("topic")];
if (!topic && params.get("topic") === "created") {
  try {
    topic = JSON.parse(sessionStorage.getItem("forum-topic-" + params.get("id")) || "null");
  } catch {
    topic = null;
  }
}
if (topic) {
  document.title = `${topic.title} / 社区论坛目录`;
  document.querySelector("#topic-category-crumb").textContent = topic.category;
  document.querySelector("#topic-category-label").textContent = topic.category;
  document.querySelector("#topic-category-title")?.replaceChildren(document.createTextNode(topic.category));
  document.querySelector("#topic h1").textContent = topic.title;
  if (topic.name) {
    document.querySelector(".topic-author b").textContent = topic.name;
    document.querySelector(".topic-avatar").textContent = topic.name.slice(0, 1);
  }
  document.querySelector(".topic-head small").textContent = topic.author;
  const body = document.querySelector(".topic-body");
  const paragraphs = [...body.querySelectorAll(":scope > p")];
  paragraphs[0].textContent = topic.first;
  if (topic.second) paragraphs[1].textContent = topic.second;
  else if (paragraphs[1]) paragraphs[1].hidden = true;
  body.querySelector("blockquote").textContent = topic.quote;
  const replies = [...document.querySelectorAll(".replies article p")];
  topic.replies?.forEach((reply, index) => {
    if (replies[index]) replies[index].textContent = reply;
  });
  if (params.get("topic") === "created") {
    document.querySelector(".replies").replaceChildren();
    document.querySelector(".topic-timeline span b").textContent = "0";
  }
}
