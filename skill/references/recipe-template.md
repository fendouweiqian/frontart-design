# 设计配方录入模板

每条配方在进入公开目录前需满足：来源可访问或有归档证据、提炼规律清楚、与现有配方有明显差异、能写出适用/不适用场景、至少一个可运行 Demo 或明确的页面样例。

```yaml
id: stable-kebab-case
name: 中文配方名
category: community | editorial | wordpress | commerce | mobile
medium: web | mobile
source:
  name: 来源名称
  url: https://example.com
  accessed: YYYY-MM-DD
  evidence: 公开演示 / 公开文档 / 合法获取的主题包
  license: 素材或主题的适用许可；不清楚时写 unknown 并停止复用资产
fit:
  - 适用场景
avoid:
  - 不适用情形
principles:
  - 可复用的布局、层级、图像、字体或交互规律
prompt: 可直接复制且含产品事实占位的提示词
demo: 对应本项目内可运行页面
```

来源页面可支持的事实必须与推断分开写。主题下载量、评价数量、授权范围和版本需要以官方当前页面或可信公开数据核实，不能根据“知名”或搜索排序推断。
