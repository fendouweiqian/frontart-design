const item = new URLSearchParams(location.search).get("item");
if (item === "interface") {
  document.title = "慢下来的界面 / 口袋收藏册";
  document.querySelector("#pocket-cover").classList.add("interface");
  document.querySelector("#pocket-cover span").textContent = "INTERFACE NOTE / 02";
  document.querySelector("#pocket-cover strong").innerHTML = "慢下来的<br>界面";
  document.querySelector("#pocket-category").textContent = "交互观察 · 5 分钟阅读";
  document.querySelector("#pocket-title").textContent = "慢下来的界面";
  document.querySelector("#pocket-intro").textContent = "当内容很多，界面更需要知道什么该先出现。";
  document.querySelector("#pocket-body").textContent = "一条清楚的阅读路径，可以让人少做几个决定。标题、正文和收藏动作各有位置，读完之后仍能轻松返回目录。";
}
