/*****************************************************************************************
 *                                 配置顶部导航栏
 ******************************************************************************************/

export default [
	// ========== 示例 ========== //
	{
		text: "示例",
		link: "/example/",
	},
	{
		text: "索引",
		link: "/archives/",
		items: [
			{ text: "分类", link: "/categories/" },
			{ text: "标签", link: "/tags/" },
			{ text: "归档", link: "/archives/" },
		],
	},
	{
		text: "更多",
		items: [
			{ text: "关于", link: "/about/" },
			// generate by slidev
			{ text: "幻灯片", link: `/slides/#/1` },
		],
	},
	{ text: "博客", link: "https://www.jonsam.site" },
];
