/*****************************************************************************************
 *                                 配置head
 ******************************************************************************************/

export default [
  ["link", { rel: "icon", href: `/img/favicon32x32.ico` }],
  ["meta", { name: "referrer", content: "no-referrer-when-downgrade" }],
  ["meta", { name: "keywords", content: "机器学习,深度学习" }],
  // ["meta", { name: "baidu-site-verification", content: "7F55weZDDc" }], // 百度统计的站长验证（你可以去掉）
  ["meta", { name: "theme-color", content: "#A0CEC7" }], // 移动浏览器主题颜色
  [
    "link",
    {
      rel: "stylesheet",
      href: "//at.alicdn.com/t/font_3314748_9xij1pv3h4i.css",
    },
  ],

  // [
  //   'script',
  //   {
  //     'data-ad-client': 'ca-pub-7828333725993554',
  //     async: 'async',
  //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
  //   },
  // ], // 网站关联Google AdSense 与 html格式广告支持（你可以去掉）
];
