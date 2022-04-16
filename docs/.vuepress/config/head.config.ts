/*****************************************************************************************
 *                                 配置head
 ******************************************************************************************/

import {
  siteKeywords,
  siteThemeColor,
  siteIconFont,
  siteBase,
} from "./site.config";

export default [
  ["link", { rel: "icon", href: `/img/favicon.ico` }],
  ["meta", { name: "referrer", content: "no-referrer-when-downgrade" }],
  ["meta", { name: "keywords", content: siteKeywords }],
  // ["meta", { name: "baidu-site-verification", content: "7F55weZDDc" }], // 百度统计的站长验证（你可以去掉）
  ["meta", { name: "theme-color", content: siteThemeColor }], // 移动浏览器主题颜色
  [
    "link",
    {
      rel: "stylesheet",
      href: siteIconFont,
    },
  ],
];
