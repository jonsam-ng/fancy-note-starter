/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "457856c6ea6ec3502540ba77245fd3d2"
  },
  {
    "url": "about/index.html",
    "revision": "764fa40eedcab176c9081ee3d4c6960f"
  },
  {
    "url": "archives/index.html",
    "revision": "605ef268ff8193bb0fd93837815a15fc"
  },
  {
    "url": "assets/css/0.styles.5ba25498.css",
    "revision": "c4893a5e222ec9a10eea7cd8afc6055f"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.10824af7.woff",
    "revision": "10824af77e9961cfd548c8a458f10851"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.56573229.ttf",
    "revision": "56573229753fad48910bda2ea1a6dd54"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.66c67820.woff2",
    "revision": "66c678209ce93b6e2b583f02ce41529e"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Bold.497bf407.ttf",
    "revision": "497bf407c4c609c6cf1f1ad38f437f7f"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Regular.e6fb499f.ttf",
    "revision": "e6fb499fc8f9925eea3138cccba17fff"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.40934fc0.woff",
    "revision": "40934fc076960bb989d590db044fef62"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.796f3797.woff2",
    "revision": "796f3797cdf36fcaea18c3070a608378"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.b9d7c449.ttf",
    "revision": "b9d7c4497cab3702487214651ab03744"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.97a699d8.ttf",
    "revision": "97a699d83318e9334a0deaea6ae5eda2"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.e435cda5.woff",
    "revision": "e435cda5784e21b26ab2d03fbcb56a99"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.f9e6a99f.woff2",
    "revision": "f9e6a99f4a543b7d6cad1efb6cf1e4b1"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.4cdba646.woff",
    "revision": "4cdba6465ab9fac5d3833c6cdba7a8c3"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.8e431f7e.ttf",
    "revision": "8e431f7ece346b6282dae3d9d0e7a970"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.a9382e25.woff2",
    "revision": "a9382e25bcf75d856718fcef54d7acdb"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.52fb39b0.ttf",
    "revision": "52fb39b0434c463d5df32419608ab08a"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.5f875f98.woff",
    "revision": "5f875f986a9bce1264e8c42417b56f74"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.d8737343.woff2",
    "revision": "d873734390c716d6e18ff3f71ac6eb8b"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.39349e0a.ttf",
    "revision": "39349e0a2b366f38e2672b45aded2030"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.65297062.woff2",
    "revision": "652970624cde999882102fa2b6a8871f"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.8ffd28f6.woff",
    "revision": "8ffd28f6390231548ead99d7835887fa"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.818582da.ttf",
    "revision": "818582dae57e6fac46202cfd844afabb"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.f1cdb692.woff",
    "revision": "f1cdb692ee31c10b37262caffced5271"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.f8a7f19f.woff2",
    "revision": "f8a7f19f45060f7a177314855b8c7aa3"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.1320454d.woff2",
    "revision": "1320454d951ec809a7dbccb4f23fccf0"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.48155e43.woff",
    "revision": "48155e43d9a284b54753e50e4ba586dc"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.6589c4f1.ttf",
    "revision": "6589c4f1f587f73f0ad0af8ae35ccb53"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.d8b7a801.woff2",
    "revision": "d8b7a801bd87b324efcbae7394119c24"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.ed7aea12.woff",
    "revision": "ed7aea12d765f9e2d0f9bc7fa2be626c"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.fe5ed587.ttf",
    "revision": "fe5ed5875d95b18c98546cb4f47304ff"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.0e897d27.woff",
    "revision": "0e897d27f063facef504667290e408bd"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.ad546b47.woff2",
    "revision": "ad546b4719bcf690a3604944b90b7e42"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.f2ac7312.ttf",
    "revision": "f2ac73121357210d91e5c3eaa42f72ea"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.e934cbc8.woff2",
    "revision": "e934cbc86e2d59ceaf04102c43dc0b50"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.ef725de5.woff",
    "revision": "ef725de572b71381dccf53918e300744"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.f60b4a34.ttf",
    "revision": "f60b4a34842bb524b562df092917a542"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.1ac3ed6e.woff2",
    "revision": "1ac3ed6ebe34e473519ca1da86f7a384"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.3243452e.ttf",
    "revision": "3243452ee6817acd761c9757aef93c29"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.5f8637ee.woff",
    "revision": "5f8637ee731482c44a37789723f5e499"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.a189c37d.ttf",
    "revision": "a189c37d73ffce63464635dc12cbbc96"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.a82fa2a7.woff",
    "revision": "a82fa2a7e18b8c7a1a9f6069844ebfb9"
  },
  {
    "url": "assets/fonts/KaTeX_Size1-Regular.0d8d9204.ttf",
    "revision": "0d8d9204004bdf126342605f7bbdffe6"
  },
  {
    "url": "assets/fonts/KaTeX_Size2-Regular.1fdda0e5.ttf",
    "revision": "1fdda0e59ed35495ebac28badf210574"
  },
  {
    "url": "assets/fonts/KaTeX_Size4-Regular.27a23ee6.ttf",
    "revision": "27a23ee69999affa55491c7dab8e53bf"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.0e046058.woff",
    "revision": "0e0460587676d22eae09accd6dcfebc6"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.6bf42875.ttf",
    "revision": "6bf4287568e1d3004b54d5d60f9f08f9"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.b8b8393d.woff2",
    "revision": "b8b8393d2e65fcebda5fa99fa3264f41"
  },
  {
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/js/1.2068c1db.js",
    "revision": "c309840aca9fc995b70441dabb251d2b"
  },
  {
    "url": "assets/js/11.974da39c.js",
    "revision": "c9046fe4b11895e2d8a42a0c15b05b97"
  },
  {
    "url": "assets/js/12.a86359d8.js",
    "revision": "427420e7f57bbb9a91616f62a33e0d25"
  },
  {
    "url": "assets/js/13.fe95165e.js",
    "revision": "62039a8bbdd1c2d46cc1023d3f5eef18"
  },
  {
    "url": "assets/js/14.94871208.js",
    "revision": "d81596c5050bb1ebc335d492bc5e52d4"
  },
  {
    "url": "assets/js/15.f2139291.js",
    "revision": "3cbff224e054568b1b904412e6c440d8"
  },
  {
    "url": "assets/js/16.2ef6dce7.js",
    "revision": "3cc396639a4a93427ea49e4c5c37b027"
  },
  {
    "url": "assets/js/17.8c318acc.js",
    "revision": "f06cd6743d3653eb8b91abfbc2e08000"
  },
  {
    "url": "assets/js/18.7f4f6ced.js",
    "revision": "9203be0bf06247c695d16893d5a9c03a"
  },
  {
    "url": "assets/js/19.7a274e56.js",
    "revision": "349a452ce0b30e62e3fd88d8226388ab"
  },
  {
    "url": "assets/js/20.5bd7fdee.js",
    "revision": "deb2975269b9bda705653a258060f35b"
  },
  {
    "url": "assets/js/21.914ace49.js",
    "revision": "0c62f41098a4ce27ed3f44c1d9e02bf5"
  },
  {
    "url": "assets/js/22.8e03dbef.js",
    "revision": "013f701b8e956c3d80902e8ab3787e48"
  },
  {
    "url": "assets/js/23.ae5d7b1a.js",
    "revision": "591aefa1685b041eec61cc0fee4dab92"
  },
  {
    "url": "assets/js/24.a07e377d.js",
    "revision": "5e025b29dc29a6dd5d35ead67d9307d0"
  },
  {
    "url": "assets/js/25.2b6e5386.js",
    "revision": "37a2149c4b6417e094281234fd6b109e"
  },
  {
    "url": "assets/js/26.9f35b44a.js",
    "revision": "445429acb55d32f2e275602c220dde93"
  },
  {
    "url": "assets/js/27.d2388057.js",
    "revision": "41f70815ab948c56ab1285bcaf8a2559"
  },
  {
    "url": "assets/js/28.82900224.js",
    "revision": "4e71e56274b099afdb0f8d584e03d9d2"
  },
  {
    "url": "assets/js/29.90c0a291.js",
    "revision": "bbe9d4130b150d4ca92d03f74acc511c"
  },
  {
    "url": "assets/js/30.2628012a.js",
    "revision": "2a278c0086ac0cf3edb7b94b6885a5b4"
  },
  {
    "url": "assets/js/31.8986f1ab.js",
    "revision": "bf2d9b6500acdc3cf6320fdaca641fd0"
  },
  {
    "url": "assets/js/32.5e4e3eb5.js",
    "revision": "d0a007f9e794c2e649388b1bd914225f"
  },
  {
    "url": "assets/js/33.2302681c.js",
    "revision": "0642a7febe0042a2a2ccff167d57b65e"
  },
  {
    "url": "assets/js/34.3bdbbb96.js",
    "revision": "7e99a809446e60c15d07c3e5f8fc4769"
  },
  {
    "url": "assets/js/35.1613431e.js",
    "revision": "13c6fa2fda5b49fe38db46c429229cd7"
  },
  {
    "url": "assets/js/36.45d94982.js",
    "revision": "3152a45018119f1a9d7953eb5d448435"
  },
  {
    "url": "assets/js/37.4ed06bf2.js",
    "revision": "369adbd7670fa5e3968bd28617ef8b47"
  },
  {
    "url": "assets/js/38.56bb2765.js",
    "revision": "8afd426843b4435a3516bd2c252915c8"
  },
  {
    "url": "assets/js/39.24fa4af2.js",
    "revision": "3fa67ec20e1e0355ebe1e3fea2ad0a61"
  },
  {
    "url": "assets/js/40.500d7f9d.js",
    "revision": "478f0b90d7ec10c8a60f9bc1b7f51f3d"
  },
  {
    "url": "assets/js/41.d66d9b6b.js",
    "revision": "042536766db94f0dbae6f41d87bf246e"
  },
  {
    "url": "assets/js/42.0256d187.js",
    "revision": "3e5b13c4191fffe3626c94c41abd3502"
  },
  {
    "url": "assets/js/43.31624a08.js",
    "revision": "775ea4c2b0db9179eecdb585d2e64575"
  },
  {
    "url": "assets/js/app.adb1ce12.js",
    "revision": "4adef06ec5e4d710bda45b1c0111b55a"
  },
  {
    "url": "assets/js/vendors~aplayer.ef69e8c8.js",
    "revision": "ef7a1ae576befcc4b0d518af3587ffee"
  },
  {
    "url": "assets/js/vendors~artplayer.9f457d6b.js",
    "revision": "8b09a871621d6e86ef0b21ff0f09afb8"
  },
  {
    "url": "assets/js/vendors~dash.c779a1b8.js",
    "revision": "38305b0644b4b7388519bc43ccbd261f"
  },
  {
    "url": "assets/js/vendors~dplayer.008e957a.js",
    "revision": "eef59f5bdceda956eb6ced5c02b7fa6f"
  },
  {
    "url": "assets/js/vendors~hls.18d1f653.js",
    "revision": "d39adcf226d1be55d015ce3467416b3f"
  },
  {
    "url": "assets/js/vendors~mpegts.02ab45df.js",
    "revision": "431a95364c727fa65548c7b1fa68f828"
  },
  {
    "url": "assets/js/vendors~shaka-player.f723bd71.js",
    "revision": "abfac16fb3f19e00cf25a0accb0cede7"
  },
  {
    "url": "assets/js/vendors~webtorrent.271bb3b6.js",
    "revision": "5951a5a71a017945eea679d0cd4cf30e"
  },
  {
    "url": "categories/index.html",
    "revision": "0a9e93105c35abc4d001a406f2eb5f87"
  },
  {
    "url": "example/index.html",
    "revision": "820fe8cbfd9788597582e9f349513454"
  },
  {
    "url": "example/index/index.html",
    "revision": "b5c055afaf33044a485a0b98fec0f16d"
  },
  {
    "url": "example/plan/index.html",
    "revision": "4300f405658185dde7e2355ab8ff3a63"
  },
  {
    "url": "example/roadmap/index.html",
    "revision": "f5c2ebcc65022a4e919955d88bcd70f0"
  },
  {
    "url": "img/android-chrome-192x192.png",
    "revision": "bd6f0e4bb8517d7973e88cb52f3dbfc7"
  },
  {
    "url": "img/android-chrome-512x512.png",
    "revision": "8919609d8cf7741106ce947c22fc298e"
  },
  {
    "url": "img/apple-touch-icon.png",
    "revision": "2d9f5759e665b7c8a2a918a6b7c0d2d9"
  },
  {
    "url": "img/favicon-16x16.png",
    "revision": "067da187440419130e08e214ac5d4631"
  },
  {
    "url": "img/favicon-32x32.png",
    "revision": "ad5514686828d47e96aab51e6ce1bbb2"
  },
  {
    "url": "img/logo.png",
    "revision": "421d8a4fcd9c1c8833e3feaec84c39bd"
  },
  {
    "url": "index.html",
    "revision": "3d40f302681b5b630a93efeb313413de"
  },
  {
    "url": "tags/index.html",
    "revision": "fe39a04b2cea0567a9b3178b700aae89"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
