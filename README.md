<div align="center">
  <h1>📝 Alex Blog</h1>
  <p><strong>基于 Astro + Tailwind CSS 的静态个人博客模板 — 内容优先、阅读舒适、开箱即用</strong></p>
  <p>
    <img src="https://img.shields.io/badge/Astro-5.x-orange.svg" alt="Astro">
    <img src="https://img.shields.io/badge/Tailwind_CSS-3.x-blue.svg" alt="Tailwind CSS">
    <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6.svg" alt="TypeScript">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License">
    <br>
    <a href="https://github.com/yongganjack/PersonalBlog/actions"><img src="https://github.com/yongganjack/PersonalBlog/actions/workflows/ci.yml/badge.svg" alt="CI Status"></a>
    <img src="https://img.shields.io/github/last-commit/yongganjack/PersonalBlog" alt="Last Commit">
    <img src="https://img.shields.io/github/repo-size/yongganjack/PersonalBlog" alt="Repo Size">
  </p>
</div>

---

## 📖 项目简介

一个面向程序员、AI 工程师和独立开发者的静态个人博客模板。围绕「内容优先、阅读舒适、静态优先」的目标设计，内置深色模式、静态搜索、文章分类标签系统和响应式布局，帮助你把精力集中在写作上，而不是页面搭建。

🔗 **在线演示：**[https://personal-blog.jack1824871823.workers.dev/](https://personal-blog.jack1824871823.workers.dev/)

**核心理念：轻量、快速、好维护——让博客成为你长期写作的底座，而不是一次性展示页面。**

---

## 📑 目录

- [页面总览](#-页面总览)
- [快速开始](#-快速开始)
- [项目结构](#-项目结构)
- [核心特性](#-核心特性)
  - [深色模式](#1-深色模式)
  - [静态搜索](#2-静态搜索)
  - [内容数据层](#3-内容数据层)
  - [响应式布局系统](#4-响应式布局系统)
  - [可访问性](#5-可访问性)
- [自定义内容](#-自定义内容)
- [部署](#-部署)
- [文档](#-文档)
- [贡献指南](#-贡献指南)
- [路线图](#-路线图)

---

## 🖥️ 页面总览

| 页面 | 路由 | 说明 |
|------|------|------|
| **首页** | `/` | Hero 区、精选文章、最新文章、热门标签、精选项目、订阅 |
| **文章列表** | `/archive` | 分类侧栏 + 标签筛选 + 分页 |
| **文章详情** | `/post` | 封面、标签、正文排版、目录、上一篇/下一篇、相关文章 |
| **标签页** | `/tags` | 分类卡片 + 全部标签 |
| **项目展示** | `/projects` | 项目卡片网格（描述、技术栈、GitHub/Demo 链接） |
| **关于** | `/about` | 个人信息、技能标签、经历时间线 |
| **搜索** | `/search` | Command Palette 风格实时筛选，支持文章/分类/标签 |
| **404** | `/404` | 友好插画 + 返回首页引导 |

---

## 🚀 快速开始

### 环境要求

- **Node.js** 18+
- **npm** 9+

### 安装与运行

```bash
# 1. 克隆仓库
git clone https://github.com/yongganjack/PersonalBlog.git
cd PersonalBlog

# 2. 安装依赖
npm install

# 3. 启动开发服务器
npm run dev
```

开发服务器默认运行在 `http://127.0.0.1:4321/`。

### 可用脚本

```bash
npm run dev       # 启动本地开发服务器
npm run build     # 类型检查 + 构建静态产物到 dist/
npm run preview   # 本地预览构建结果
```

---

## 🏗️ 项目结构

```
PersonalBlog/
├── public/
│   └── images/                       # 本地 SVG 插画、封面、项目缩略图、头像
│
├── src/
│   ├── components/                   # 可复用 UI 组件
│   │   ├── ArticleCard.astro         #   文章卡片（标准/紧凑/横向 3 种布局）
│   │   ├── CodeBlock.astro           #   代码块展示
│   │   ├── Footer.astro              #   全站页脚
│   │   ├── Header.astro              #   固定导航栏 + 移动端菜单
│   │   ├── Icon.astro                #   SVG 图标集（16 枚内联图标）
│   │   ├── Pagination.astro          #   分页导航
│   │   ├── ProjectCard.astro         #   项目展示卡片
│   │   ├── SearchBox.astro           #   静态搜索筛选 UI
│   │   ├── TagPill.astro             #   标签胶囊
│   │   ├── ThemeToggle.astro         #   深色/浅色模式切换
│   │   └── Toc.astro                 #   文章目录
│   │
│   ├── data/                         # 站点内容数据层
│   │   ├── site.ts                   #   站点配置、文章、分类、标签、项目、时间线
│   │   └── format.ts                 #   日期格式化工具
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro          # 全局布局（HTML 头部、SEO meta、主题初始化脚本）
│   │
│   ├── pages/                        # Astro 文件路由页面
│   │   ├── index.astro               #   首页
│   │   ├── archive.astro             #   文章列表
│   │   ├── post.astro                #   文章详情（演示页）
│   │   ├── tags.astro                #   分类与标签
│   │   ├── projects.astro            #   项目展示
│   │   ├── about.astro               #   关于我
│   │   ├── search.astro              #   搜索页
│   │   └── 404.astro                 #   404 页面
│   │
│   ├── styles/
│   │   └── global.css                # CSS 变量、主题色彩、排版组件
│   │
│   └── env.d.ts                      # Astro 类型声明
│
├── .github/
│   ├── ISSUE_TEMPLATE/               # Issue 模板
│   ├── PULL_REQUEST_TEMPLATE.md      # PR 模板
│   └── workflows/
│       └── ci.yml                     # CI：PR 和 push 时构建检查
│
├── docs/                             # 项目文档
│   ├── ARCHITECTURE.md               #   架构说明
│   ├── CONTENT_GUIDE.md              #   内容维护指南
│   ├── DEPLOYMENT.md                 #   部署指南
│   └── ROADMAP.md                    #   路线图
│

├── astro.config.mjs                  # Astro 配置
├── tailwind.config.mjs               # Tailwind 配置（字体、阴影扩展）
├── tsconfig.json                     # TypeScript 配置（路径别名 @/）
└── package.json
```

---

## 🔑 核心特性

### 1. 深色模式

- 基于 Tailwind `class` 策略 + CSS 变量体系
- 15 个设计令牌（背景、表面、文本、主色、边框）覆盖浅色/深色两套主题
- 偏好记忆：`localStorage` 持久化，刷新不丢失
- 首次访问自动跟随系统 `prefers-color-scheme`
- 切换时同步更新 `<meta name="theme-color">`，影响浏览器标题栏颜色

### 2. 静态搜索

- 纯前端实时筛选，零网络请求
- 覆盖文章（标题、摘要、分类、标签）、分类描述、标签名称
- URL 查询参数同步（`?q=关键词`），支持分享搜索结果
- `⌘K` 快捷键视觉提示，空状态提示文案
- 无结果时显示友好引导

### 3. 内容数据层

所有示例内容集中在 [src/data/site.ts](src/data/site.ts)，页面只负责排版消费：

| 数据模块 | 内容 |
|----------|------|
| `siteConfig` | 站点名称、描述、作者、角色、社交链接 |
| `navItems` | 主导航项 |
| `articles` | 8 篇示例文章（标题、摘要、日期、分类、标签、封面、精选标记） |
| `categories` | 8 个分类（名称、文章数、描述） |
| `tags` | 18 个标签（名称、文章数） |
| `projects` | 6 个示例项目（描述、技术栈、GitHub/Demo 链接） |
| `timeline` | 3 条经历时间线 |

后续迁移到 MDX Content Collections 时，组件无需重写——只需替换数据来源。

### 4. 响应式布局系统

- 断点策略：移动端 → `md:` (768px) → `lg:` (1024px) → `xl:` (1280px)
- 首页 Hero 区：lg+ 双栏横排，否则单栏堆叠
- 文章列表：lg+ 侧栏布局，小屏侧栏隐藏
- 文章详情：xl+ 目录常驻右侧，否则正文优先
- 卡片网格：首页 3 列 / 文章列表 2 列 / 移动端 1 列
- 固定导航栏 + `backdrop-blur` 毛玻璃效果

### 5. 可访问性

- 「跳到主要内容」跳转链接（`.sr-only` + focus 可见）
- 所有交互控件有 `aria-label` 或可见文本
- 焦点态使用 `:focus-visible` + CSS 自定义 `--ring` 颜色
- 导航链接标记 `aria-current="page"`
- SVG 图标默认 `aria-hidden="true"`，装饰图片 `alt=""`
- `prefers-reduced-motion` 媒体查询关闭动画

---

## 🎨 自定义内容

### 修改站点信息

编辑 [src/data/site.ts](src/data/site.ts) 中的 `siteConfig`：

```ts
export const siteConfig = {
  name: "Alex Blog",           // → 你的博客名
  description: "...",          // → 站点描述
  author: "Alex",              // → 你的名字
  role: "...",                 // → 身份标签
  socials: {
    github: "https://github.com",  // → 你的 GitHub
    email: "mailto:...",           // → 你的邮箱
    rss: "/rss.xml",
    x: "https://x.com"             // → 你的 X/Twitter
  }
};
```

### 替换图片

图片资源位于 [public/images/](public/images/)。建议宽高比：

| 用途 | 推荐尺寸 | 格式 |
|------|---------|------|
| 文章封面 | 720×420 | SVG / WebP |
| 项目缩略图 | 640×400 | SVG / WebP |
| Hero 插画 | 900×720 | SVG |
| 头像 | 420×420 | SVG |
| 404 插画 | 760×520 | SVG |

### 添加文章

在 `articles` 数组中追加条目：

```ts
{
  title: "你的文章标题",
  slug: "your-article-slug",
  excerpt: "一句话摘要，出现在卡片和搜索结果中。",
  date: "2026-07-12",
  readTime: "6 分钟阅读",
  category: "开发",
  tags: ["Astro", "前端"],
  cover: "/images/your-cover.svg",
  featured: true   // 设为 true 则出现在首页精选区
}
```

---

## 🚢 部署

### Vercel / Netlify / Cloudflare Pages

| 平台 | Build Command | Output Directory |
|------|--------------|------------------|
| Vercel | `npm run build` | `dist` |
| Netlify | `npm run build` | `dist` |
| Cloudflare Pages | `npm run build` | `dist` |

---

## 📚 文档

- [架构说明](docs/ARCHITECTURE.md) — 运行时模型、数据流、组件边界、样式体系
- [内容维护指南](docs/CONTENT_GUIDE.md) — 如何修改站点信息、文章、项目、图片和文案
- [部署指南](docs/DEPLOYMENT.md) — Vercel / Netlify / Cloudflare Pages
- [路线图](docs/ROADMAP.md) — v0.1 → v0.2 → v0.3 → 远期规划
- [贡献指南](CONTRIBUTING.md) — 分支命名、Commit 规范、PR Checklist
- [安全策略](SECURITY.md)

---

## 🤝 贡献指南

欢迎提交改进！请先阅读 [CONTRIBUTING.md](CONTRIBUTING.md) 了解贡献流程和代码规范。

**设计原则：**
- 内容优先，视觉服务阅读——大留白、低噪声、稳定排版
- 优先使用本地静态资源，减少外部依赖
- 添加功能时先保持简单，再考虑扩展
- 交互控件必须有可访问名称

提交前请运行 `npm run build` 确保构建通过。

---

## 🗺️ 路线图

| 版本 | 计划内容 |
|------|----------|
| **v0.1** ✅ | Astro + Tailwind 基础页面、8 个路由、静态数据、SVG 素材、GitHub Actions |
| **v0.2** | MDX Content Collections、动态文章路由、RSS / Sitemap |
| **v0.3** | Pagefind 本地搜索、Giscus 评论、阅读进度条、OG 图片优化 |
| **Later** | 多语言支持、系列文章、轻量统计、专注阅读模式、PWA |

详见 [docs/ROADMAP.md](docs/ROADMAP.md)。

---

## 📄 License

MIT License — 详见 [LICENSE](LICENSE) 文件

---

<p align="center">
  <sub>Built with ❤️ for developers who love writing</sub>
</p>
