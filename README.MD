<p align="center"><a href="https://www.jonsam.site/" target="_blank" rel="noopener noreferrer"><img width="180" src="/docs/.vuepress/public/img/logo.png" alt="logo"></a></p>

<h2 align="center">Fancy Note Starter</h2>

## 介绍

A simple starter to create note site using vuepress and github pages.

使用 vuepress 和 github pages 快速建立笔记静态站点的模板。

## 快速上手

1. 安装依赖并启动项目

```bash
yarn
yarn dev
```

2. 修改 `docs/.vuepress/config/site.config.ts` 文件中站点配置。

3. 修改 logo 和 favicon，在 `docs/.vuepress/public/img/` 目录覆盖 `logo.png` 和 `favicon.ico`。

- 根据 logo 生成 favicon，使用：[Favicon Generator - Image to Favicon - favicon.io](https://favicon.io/favicon-converter/)。将解压后文件移动到此目录。
- 使用 PPDuck 压缩图片。

4. 修改 `docs/.vuepress/config/nav.config.ts`  文件配置顶部导航条。参见`示例`。

5. 修改 `docs/index.md` 配置首页。

6. 在 `.github/workflows/ci.yml` 中修改 GITHUB_TOKEN、CODING_TOKEN 为你的 GITHUB_TOKEN、CODING_TOKEN 变量名称。

7. 修改 `scripts/deploy.sh` 文件中 `user.name`、`user.email`、githubUrl 配置(如果需要自定义域名需要去除 `CNAME` 行注释，并修改 `CNAME` 为您的域名)。

8. 创建 github 仓库。初始化 git 并推送至 master 分支。

9. 等待 github actions 完成后，在 `Setting` → `Pages` -> `Source` 中将分支改为 `gh-pages`。如果没有此分支，请检查上一步 git action 是否完成或者是否报错。

10. [可选]如果需要自定义域名，在 `Setting` → `Pages` -> `Custom domain` 修改为自已的自定义域名，前提是您已经在域名解析服务商那里将域名解析到 `{{github_name}}.github.io`（配置 NS 记录）。建议勾选 `Enforce HTTPS`。

11. [可选]在 `scripts/baiduPush.sh` 配置百度推送。

12. [可选]在 `docs/.vuepress/config/baiduCode.ts` 配置百度统计。

13. 在 `package.json` 中修改 `name` 等配置。

14. 在 `docs/.vuepress/config/plugin.config.ts` 中修改 `vuepress-plugin-comment` 评论插件的配置。

## 其余配置

- vdoing 主题配置：[主题配置 | vuepress-theme-vdoing](https://doc.xugaoyi.com/pages/a20ce8/)
- vuepress 配置：[配置 | VuePress](https://v1.vuepress.vuejs.org/zh/config/)

## Vscode 使用

1. 安装插件 [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) 校验 markdown 格式。

2. 安装插件 [markdown-formatter](https://marketplace.visualstudio.com/items?itemName=mervin.markdown-formatter) 格式化 markdown 文档。

3. 安装插件 [Markdown Emoji](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-emoji) 支持 Emoji。

4. 安装插件 [vscode all markdown](https://marketplace.visualstudio.com/items?itemName=TobiasTao.vscode-md) 支持富文本、即时渲染模式等。

5. 安装插件 [Word Count CJK](https://marketplace.visualstudio.com/items?itemName=holmescn.vscode-wordcount-cjk) 支持即时显示文字字数。

6. 安装插件 [Markmap](https://marketplace.visualstudio.com/items?itemName=gera2ld.markmap-vscode) 以思维导图方式预览 markdown，生成思维导图。

7. 安装插件 [Draw.io Integration](https://marketplace.visualstudio.com/items?itemName=hediet.vscode-drawio) 实时作图，以 svg 引用文章。

## 示例

- [Fancy FE](https://source.jonsam.site/)
- [Fancy ML](https://ml.jonsam.site/)

## 许可证

[MIT](./LICENSE)
