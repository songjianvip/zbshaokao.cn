---
name: "zbshaokao-news"
description: "维护首页“新闻动态”板块的新闻列表（仅标题/外链/时间）。当用户要新增/修改/删除首页新闻，或调整新闻展示时调用。"
---

# 淄博烧烤站点：新闻维护

本技能用于维护首页“新闻动态”板块的数据源。该项目的新闻条目只有三个字段：

- 标题 `title`
- 外链 `url`（必须是外部链接，打开新窗口）
- 时间 `time`（建议使用 `YYYY-MM-DD`，用于排序与 `datetime`）

## 修改位置

在 [HomeView.vue](file:///f:/web/zbshaokao/src/views/HomeView.vue) 中维护 `newsItems` 数组：

- 位置：`const newsItems = ref<NewsItem[]>([])`
- 类型：`type NewsItem = { title: string; url: string; time: string }`

页面会自动按 `time` 倒序展示（最新在前），快讯滚动会自动使用同一份数据。

## 增加新闻（推荐格式）

把 `newsItems` 改成包含条目的数组，例如：

```ts
const newsItems = ref<NewsItem[]>([
  {
    time: '2026-03-31',
    title: '淄博烧烤城市活动专题页上线',
    url: 'https://example.com/news/zb-bbq'
  }
])
```

## 删除新闻

- 删除某一条：从数组中移除对应对象
- 清空全部：保持 `newsItems = []`（页面会显示“暂无新闻/暂无快讯”占位）

## 校验与自检

修改后在项目根目录执行：

- `npm run type-check`
- `npm run lint`

确保无 TypeScript 报错与 ESLint 报错。 
