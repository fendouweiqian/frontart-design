(function () {
  const recipeId = document.body.dataset.recipe || document.body.dataset.style || new URLSearchParams(location.search).get("style");
  if (!recipeId || !window.FRONTART_RECIPES || !window.FRONTART_MAKE_PROMPT) return;
  const recipe = window.FRONTART_RECIPES.find((item) => item.id === recipeId);
  if (!recipe) return;
  const prompt = window.FRONTART_MAKE_PROMPT(recipe);
  const dock = document.createElement("aside");
  dock.className = "prompt-dock";
  dock.innerHTML = `<button class="prompt-dock-toggle" type="button" aria-label="查看调用示例" title="查看并复制调用示例" aria-expanded="false" aria-controls="prompt-dock-panel"><span aria-hidden="true">✦</span><b>调用示例</b></button><div class="prompt-dock-panel" id="prompt-dock-panel" hidden><div class="prompt-dock-head"><div><small>FRONTART RECIPE / ONE-LINE CALL</small><h2>一句话调用这张配方。</h2></div><button class="prompt-dock-close" type="button" aria-label="收起调用示例">×</button></div><p>安装 Skill 后，把产品信息替换进这句话，Skill 会读取这张配方的布局、层级与交互规律。</p><pre></pre><button class="prompt-dock-copy" type="button">复制调用示例</button><a href="../recipes/demo.html?style=${encodeURIComponent(recipeId)}">回到配方说明页 →</a></div>`;
  dock.querySelector("pre").textContent = prompt;
  /** 手机上把提示词入口放进现有顶栏，避免浮动按钮盖住帖子与回复。 */
  const mobilePromptHost = document.querySelector(".forum-demo .forum-topbar-actions, .feed-demo .feed-mobile-head");
  const placeDock = () => {
    const target = window.matchMedia("(max-width: 700px)").matches && mobilePromptHost ? mobilePromptHost : document.body;
    if (dock.parentElement !== target) target.append(dock);
  };
  placeDock();
  window.addEventListener("resize", placeDock, { passive: true });
  const toggle = dock.querySelector(".prompt-dock-toggle");
  const panel = dock.querySelector(".prompt-dock-panel");
  const close = () => { panel.hidden = true; toggle.setAttribute("aria-expanded", "false"); dock.classList.remove("is-open"); };
  const open = () => { panel.hidden = false; toggle.setAttribute("aria-expanded", "true"); dock.classList.add("is-open"); };
  toggle.addEventListener("click", () => panel.hidden ? open() : close());
  dock.querySelector(".prompt-dock-close").addEventListener("click", close);
  dock.querySelector(".prompt-dock-copy").addEventListener("click", async (event) => {
    const button = event.currentTarget;
    try { await navigator.clipboard.writeText(prompt); } catch { const area = document.createElement("textarea"); area.value = prompt; area.style.position = "fixed"; area.style.opacity = "0"; document.body.append(area); area.select(); document.execCommand("copy"); area.remove(); }
    button.textContent = "已复制调用示例";
    window.setTimeout(() => { button.textContent = "复制调用示例"; }, 1800);
  });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") close(); });
}());
