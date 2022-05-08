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
  [
    "link",
    {
      rel: "stylesheet",
      href: siteIconFont,
    },
  ],
  // PWA
  ["link", { rel: "icon", href: "/img/favicon.ico", type: "image/x-icon" }],
  ["link", { rel: "manifest", href: "/img/manifest.json" }],
  ["meta", { name: "theme-color", content: siteThemeColor }], // 移动浏览器主题颜色
  ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
  ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
  [
    "link",
    { rel: "apple-touch-icon", href: "/img/android-chrome-192x192.png" },
  ],
  [
    "link",
    {
      rel: "mask-icon",
      href: "/icons/safari-pinned-tab.svg",
      color: "#3eaf7c",
    },
  ],
  [
    "meta",
    {
      name: "msapplication-TileImage",
      content: "/icons/msapplication-icon-144x144.png",
    },
  ],
  ["meta", { name: "msapplication-TileColor", content: "#000000" }],
];
