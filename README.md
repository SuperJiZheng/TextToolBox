# TextToolBox / 文本工具盒

## Overview / 项目简介

TextToolBox is a static, browser-based text utility website focused on common copy-and-clean issues such as garbled text, extra blank lines, full-width to half-width conversion, and text comparison.

TextToolBox 是一个纯前端、基于浏览器的文本处理工具站，专注于常见复制文本问题，例如乱码清理、空白行去除、全角转半角和文本比对等。

This project is designed for users who often work with text copied from PDF files, webpages, chat apps, or document exports. It helps clean noisy characters, remove repeat line breaks, normalize spacing, and compare two versions of text quickly.

这个项目适合处理从 PDF、网页、微信聊天记录和文档导出内容中复制出来的杂乱文本。它能够帮助用户快速去除噪音字符、重复换行、隐藏空白和全角格式问题，并对比两段文本的差异。

## Features / 功能特点

- Clean garbled text / 清理乱码文本
- Remove extra blank lines / 去除多余空白行
- Convert full-width to half-width / 全角转半角
- Compare text differences / 文本比对
- Multilingual UI / 中英文双语界面
- No login required / 无需登录
- Pure static frontend / 纯前端静态站点

## Project structure / 项目结构

```text
.
├── index.html
├── tools/
│   ├── index.html
│   ├── clean-garbled.html
│   ├── remove-blank-lines.html
│   ├── fullwidth-halfwidth.html
│   └── text-diff.html
├── blog/
│   ├── index.html
│   └── ... article pages
├── assets/
│   ├── css/
│   ├── js/
│   ├── favicon.svg
│   └── images/
├── sitemap.xml
├── README.md
└── ...
```

## How to run / 如何启动

### Option 1: Python static server / 方式一：Python 静态服务器

From the project root directory, run:

```bash
cd "d:\小项目\字符文本处理小工具"
python -m http.server 8000
```

Then open in the browser:

```text
http://localhost:8000
```

在项目根目录执行：

```bash
cd "d:\小项目\字符文本处理小工具"
python -m http.server 8000
```

然后在浏览器中打开：

```text
http://localhost:8000
```

### Option 2: Use any static hosting service / 方式二：使用静态托管服务

You can also deploy the project on any static hosting provider such as:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- any static web server

也可以部署到任意静态托管服务，例如：

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- 任何静态 Web 服务器

## Recommended usage / 建议使用方式

1. Paste copied text into the relevant tool / 将复制的文本粘贴到对应工具中
2. Click the action button / 点击处理按钮
3. Review and copy the result / 检查并复制结果
4. If needed, continue with another tool / 如有需要，再继续使用下一个工具

## Common use cases / 常见使用场景

- PDF copied text with extra line breaks / PDF 复制文本出现多余换行
- Webpage text with hidden spaces / 网页复制文本含大量隐藏空格
- WeChat chat text with garbled characters / 微信聊天记录乱码
- Document cleanup before editing / 文档整理前的文本清洗
- Compare text versions before finalizing / 正式提交前对比文案差异

## Notes / 备注

This project is a static website and does not require a backend, database, or login system.

这个项目是纯静态网站，不需要后端、数据库或登录系统。

## License / 许可证

This project is for personal learning, demo, and local use unless specified otherwise.

除另有说明外，本项目适用于个人学习、演示和本地使用。

## Contact / 联系方式

If you want to continue improving the project, you can add more tools, expand the article library, or optimize the multilingual SEO structure.

如果你想继续完善项目，可以继续扩展更多工具、增加文章库、或进一步优化多语言 SEO 结构。
