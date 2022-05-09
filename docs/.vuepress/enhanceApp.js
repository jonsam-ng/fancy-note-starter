import LastReadingPopup from "./components/LastReadingPopup.vue";
import QrCodeMixin from "./plugins/qrcode";
import LastReadingMixin from "./plugins/lastReading";
import VueCoreVideoPlayer from "vue-core-video-player";

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer, // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
  // window.Vue = vue // 使页面中可以使用Vue构造函数 （使页面中的vue demo生效）
  const { options: routerOptions } = router;

  Vue.component(LastReadingPopup.name, LastReadingPopup);
  Vue.mixin(LastReadingMixin);
  Vue.mixin(QrCodeMixin);
  Vue.use(VueCoreVideoPlayer, {
    lang: "zh-CN",
  });
};
