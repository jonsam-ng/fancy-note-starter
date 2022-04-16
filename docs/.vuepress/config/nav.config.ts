/*****************************************************************************************
 *                                 配置顶部导航栏
 ******************************************************************************************/

export default [
  // ========== 基础 ========== //
  {
    text: "基础",
    link: "/basic/",
    items: [
      {
        text: "RoadMap",
        link: "/basic/roadmap/",
      },
      {
        text: "数理基础",
        items: [{ text: "开始上手", link: "/basic/math/index/" }],
      },
      {
        text: "Python",
        items: [{ text: "开始上手", link: "/basic/python/index/" }],
      },
    ],
  },
  // ========== 机器学习 ========== //
  {
    text: "机器学习",
    link: "/machine-learnning/",
    items: [],
  },
  // ========== 深度学习 ========== //
  {
    text: "深度学习",
    link: "/deep-learnning/",
    items: [],
  },
  {
    text: "更多",
    link: "/more/",
    items: [],
  },
  { text: "关于", link: "/about/" },
  {
    text: "索引",
    link: "/archives/",
    items: [
      { text: "分类", link: "/categories/" },
      { text: "标签", link: "/tags/" },
      { text: "归档", link: "/archives/" },
    ],
  },
  { text: "博客", link: "https://www.jonsam.site" },
];
