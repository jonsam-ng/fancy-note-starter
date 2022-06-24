/*****************************************************************************************
 *                                 页面配置【建站自定义】
 ******************************************************************************************/

export const siteName = "Fancy Note Starter";

export const siteDesc =
  "A simple starter to create note site using vuepress and github pages.";

// 是否使用 github pages 的自定义域名
export const useCustomDomainName = false;
export const customDomainName = "template.jonsam.site";

export const siteKeywords = "笔记模板,静态站点";

// 同时修改 `docs/.vuepress/styles/palette.styl` 中 `$accentColor`
export const siteThemeColor = "#033643";

export const siteIconFont = "//at.alicdn.com/t/font_3314748_9xij1pv3h4i.css";

export const siteRepo = "fancy-note-starter";

export const siteLicense = "MIT";

export const personalLink = "https://www.jonsam.site";

export const siteAuthor = {
  name: "jonsam",
  link: "https://github.com/jonsam-ng",
};

export const siteBlogger = {
  avatar:
    "https://www.jonsam.site/wp-content/uploads/2019/10/c1fbc401c64937aaec6cb53359e7c57eabd8e477-e1570649725791.gif",
  name: "Jonsam NG",
  slogan: "让有意义的事变得有意思，让有意思的事变得有意义",
};

export const siteFooter = {
  createYear: 2022,
  copyrightInfo: `${siteName} | Template by <a href="https://jonsam-ng.github.io/fancy-note-starter/">Fancy Note Starter</a> | Made by <a href=${personalLink} target="_blank">${siteAuthor.name}</a> with ❤`,
};

export const siteBase = useCustomDomainName ? "/" : `/${siteRepo}/`;
export const siteHost = useCustomDomainName
  ? `https://${customDomainName}`
  : siteAuthor.link;
export const siteUrl = siteHost + siteBase;
