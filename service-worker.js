if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,i,d)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map(s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}})).then(e=>{const s=d(...e);return a.default||(a.default=s),a})}))}}define("./service-worker.js",["./workbox-f8d4e228"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.01a3d473.css",revision:"a14cc5ce91cbdec3a28ef9a37a29188f"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/69.4ebf8f35.js",revision:"d035fc9abeb14501d8e80a52fac4f511"},{url:"assets/js/70.a20c78b4.js",revision:"5cff968dc86396f56eea8944a80e084e"},{url:"assets/js/app.afda87ea.js",revision:"dd8acc2abb39d65ff977d9af6c1a4705"},{url:"assets/js/layout-Blog.82dce7ad.js",revision:"4a37940a87e1bf3afe89dc4a06ed8db4"},{url:"assets/js/layout-Layout.2be11ea2.js",revision:"8a417b3ba71d3d56e844f20a7f4a55dd"},{url:"assets/js/layout-NotFound.409c3cda.js",revision:"bed1d2da53d3986ce5c5a8966ef8f6a5"},{url:"assets/js/layout-Slide.fbcce3e0.js",revision:"1f3ec4ce20babc832a87aeb16908ef4d"},{url:"assets/js/page--4c69b3e0.713cef80.js",revision:"0bfff176dd4bf98fa930ca02c48bce41"},{url:"assets/js/page--7024a1db.cfa3aa1c.js",revision:"f53c680f9179ab7b9dd060e71ac78c08"},{url:"assets/js/page--dff2a364.c3eeca77.js",revision:"59c3ad9f5d555553c748f2b90ca4d67f"},{url:"assets/js/page-AdvancedFront-EndFrameworks--e3bd767c.202a1fb5.js",revision:"28efc8ca8f39da0b0609445a787a569c"},{url:"assets/js/page-ApplicationArchitecture,MVCDesignPattern--7376447c.5d117219.js",revision:"6fbce8505530770fa139189441424d39"},{url:"assets/js/page-CFundamentals--41c6417c.fbfaf696.js",revision:"383e32a4e2aa5cbef4b52d0dfacf5502"},{url:"assets/js/page-Day10-Week3--585d73c4.5d925f33.js",revision:"ae1d9fa0436224d3d3309e5864bc4878"},{url:"assets/js/page-Day11-Week3--7e33c57c.f6d973a0.js",revision:"8f9b9003e8de6ea8e70877f61b8c2a59"},{url:"assets/js/page-Day12-Week3--296ec6c0.821c1acb.js",revision:"c534043ed2a37c71358d0a1f4b0e06f3"},{url:"assets/js/page-Day13-Week4--497b6e00.d1cd39e1.js",revision:"eb7861160f05680af6ad73d8c89fa5c6"},{url:"assets/js/page-Day14-Week4--9bf7d104.4d943d34.js",revision:"81336378fd297b13286e0bf1e7f8664f"},{url:"assets/js/page-Day15-Week4--1a8cc0fc.a74f4500.js",revision:"33803c386e29636cbc1e3b4a9432e7dd"},{url:"assets/js/page-Day16-Week4--f9d52b0c.618ddfb0.js",revision:"b842b8e0e254979abc2d5e1e1fd25379"},{url:"assets/js/page-Day16-Week5--0baabb38.1d5532c1.js",revision:"4396cc9be573aaab5e266a87362d6090"},{url:"assets/js/page-Day16-Week5--743364b6.3b08e162.js",revision:"9a11abb66fba078e43c2866e40a1dfad"},{url:"assets/js/page-Day16-Week5--b9bbdc8c.601401cf.js",revision:"f52269fe8c3281fbc5958bc48a59c992"},{url:"assets/js/page-Day2-Week1--11da44fa.fb2d13c8.js",revision:"422f39bd0969d8dd4e0534c4f4fc9816"},{url:"assets/js/page-Day20-Week5--6ff1f58a.5fc1945c.js",revision:"d56b74bcc8769106c5cc2cb170f7df53"},{url:"assets/js/page-Day21-Week6--e002c66c.c24b48ea.js",revision:"a2f405b3e7c1e941100cc9418d18f5df"},{url:"assets/js/page-Day22-Week6--0ef17370.708719ff.js",revision:"0a627530ea219b4aebc92afefefc4642"},{url:"assets/js/page-Day23-Week6--610fefc6.b64b16b9.js",revision:"f84d3c9db25e89f294b4a06c35f0e2d0"},{url:"assets/js/page-Day24-Week6--6ccecd78.5680527c.js",revision:"0fa5475e1625f5c5702fb1f0b29c4553"},{url:"assets/js/page-Day25-Week7--2cb57ef8.71b62d36.js",revision:"ff820f1db6b4da288136b5f98346e8e5"},{url:"assets/js/page-Day25-Week8--bdad8374.a97747c2.js",revision:"ee6986196277ab30c3e5c8173b2254f0"},{url:"assets/js/page-Day26-Week7--522dea02.99f08190.js",revision:"5929c1e85e0593288362501ac435e914"},{url:"assets/js/page-Day26-Week8--09b1e7c4.231a0513.js",revision:"ef43522031e30205ae9a1d9e8637a5b4"},{url:"assets/js/page-Day27-Week7--8a92d900.d48f276c.js",revision:"c7165e2a654d84a79e57f1c26c7a6a0c"},{url:"assets/js/page-Day27-Week8--4a798a80.fd2dc70e.js",revision:"d39f00d9bc9369c1bada60d4662b6382"},{url:"assets/js/page-Day27-Week8--723a9142.f48e9686.js",revision:"81899689d4086b89d6a048489fcc8be2"},{url:"assets/js/page-Day28-Week7--233f3cfe.c7757e3c.js",revision:"56e86b04808976407f96c3c0e856b899"},{url:"assets/js/page-Day29-Week9--0a603c00.d6426216.js",revision:"592c797574058dbcba448599351b971a"},{url:"assets/js/page-Day3-Week1--7a62ee78.37037565.js",revision:"cd49802c5779bbe539569ccc53d5f995"},{url:"assets/js/page-Day30-Week9--12e31a58.e0e90c90.js",revision:"176f7ccd36811ec15dc7485a6933d7ba"},{url:"assets/js/page-Day31-Week9--5f171c52.a25432b5.js",revision:"4db67ee3401b8c5b3d1562595f538abe"},{url:"assets/js/page-Day32-Week9--70c07460.94947a67.js",revision:"fdf40c2b1185cf0850e80791270c4fe3"},{url:"assets/js/page-Day33-Week10--2ee4a822.c9e3c05b.js",revision:"07bfb9022e3e2239dafe8d3e5c6f0eb2"},{url:"assets/js/page-Day34-Week10--36d5ecc2.31b16c90.js",revision:"0892b046800523fdeeedb15b0259e761"},{url:"assets/js/page-Day35-Week10--3ec73162.bb417133.js",revision:"c817c62cec26880f08da457c446cfa2a"},{url:"assets/js/page-Day36-Week10--46b87602.f87b7b4d.js",revision:"beb023d110dc729158772c508d526871"},{url:"assets/js/page-Day37-Week11--d76a9bfc.6e4d2b9b.js",revision:"f2156a61854eb662441988db8049a594"},{url:"assets/js/page-Day38-Week11--c78812bc.d5703b0b.js",revision:"a954c3f635defecb1f4e1c29a097b32e"},{url:"assets/js/page-Day39-Week11--b7a5897c.ec3d2536.js",revision:"807c3ed1df71bb8c6607efc3c074ed0b"},{url:"assets/js/page-Day4-Week1--3a28d014.7c577dac.js",revision:"02385188828f3788459d42b4872772e9"},{url:"assets/js/page-Day40-Week11--52e92102.6be94f5a.js",revision:"2cf0f84c78ec1a8b00d84cb7e782ed91"},{url:"assets/js/page-Day5-Week2--02f83f36.c2a3cd93.js",revision:"d91e259d0541e631ac290fccf3582106"},{url:"assets/js/page-Day6-Week2--6b80e8b4.8396bba0.js",revision:"f971160c609e0d478327c3feb024538b"},{url:"assets/js/page-Day7-Week2--57ecdb9c.8aa12414.js",revision:"ec8fd0a94d97de95d9e679f293b827fc"},{url:"assets/js/page-Day8-Week2--3c923bb0.932ba3fa.js",revision:"d0b41215794e60d45e334a74793d1677"},{url:"assets/js/page-Day9-Week3--5c9ee2f0.019fb98e.js",revision:"8873d38bee27470fe69ffec9456315e5"},{url:"assets/js/page-DeployingApplications--7fcf42fc.1a6b679e.js",revision:"82bfc3fd9db02dd4a70b3c6d10339477"},{url:"assets/js/page-FindMoreAboutmehere--0f690267.372df0b5.js",revision:"ed311c226c04f0414feacb58c45209b2"},{url:"assets/js/page-FirstDay--ad5cc908.e84bf7fc.js",revision:"d6177fc7afa9fbdd94553be3b9a88f9e"},{url:"assets/js/page-FoundationsofWebDevelopment--6256aa42.749fdcc9.js",revision:"b1d27b87ac094ea6c7e3eb992b836e55"},{url:"assets/js/page-IntrotoJavaScript--d76477fc.9db01127.js",revision:"82197c346d7b0a1257ea5b3bf1f7ecf3"},{url:"assets/js/page-IntrotoServersideconcernswithJavaScript--2a331142.7f4ac96b.js",revision:"0a89b10f51ad66b7488c0993b5417bd7"},{url:"assets/js/page-Mytesttitle--3ff2dc42.b2112b3d.js",revision:"477e8d90e1c9d459bb33f6018b25bb44"},{url:"assets/js/page-UnderStandingAsynchronousCode,andAPI's--0f8810fc.c39c646a.js",revision:"51912dd9bcea7e241eb6de5010af2b85"},{url:"assets/js/page-UnderstandingPersistentRelationalData--5c2a2b02.4ea5ef18.js",revision:"dc00d0668b41b8bfb4d8daa0efed1308"},{url:"assets/js/page-WorkinginaProfessionalEnvironment--1be10f7c.2cfc32d8.js",revision:"696c38ba3891fa3bd50bf1f35b495239"},{url:"assets/js/vendors~layout-Blog~layout-Layout.60a5b978.js",revision:"667943e234586fa90b70902cb04fc8d4"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.022dd1bd.js",revision:"4e78380c045460fc098c93f949d5619c"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.a6166c07.js",revision:"fbd3678b04a3945e66331259905922af"},{url:"assets/js/vendors~photo-swipe.cd6a3d40.js",revision:"021e37042cfd2bb0c1cb6c24f1520c27"},{url:"404.html",revision:"30aa8100f06031a5bf8608849a81f31f"},{url:"article/index.html",revision:"4f21d83c06a15cdc7aad8747002a4de8"},{url:"category/index.html",revision:"578c2d6c28c2466538b4d271c9609eb3"},{url:"encrypt/index.html",revision:"089b667f01566dfd6b7b23fd8d82ef71"},{url:"index.html",revision:"98c725a6ae56e5b81c7063e5fe2ebf1e"},{url:"reflections/index.html",revision:"88b59caf900e2d7b8faf37b1ddde37d1"},{url:"reflections/wk1/01-day/index.html",revision:"f644cf5e1823f56c5d1623ad3702f656"},{url:"reflections/wk1/02-day/index.html",revision:"7863fe9a3522751fcc895f0822ad0639"},{url:"reflections/wk1/03-day/index.html",revision:"833385f95fa55b1f320e480d64156280"},{url:"reflections/wk1/04-day/index.html",revision:"c7b9dd805dcb3af013eccebb37044185"},{url:"reflections/wk1/intro/index.html",revision:"a1d21c891d79e1f8c60826e818d29b43"},{url:"reflections/wk1/quiz1/index.html",revision:"c8ad32a0476150b0361c4b9dc522291a"},{url:"reflections/wk10/33-day/index.html",revision:"397a5ced9b6421c4776dc244c5e1dcb2"},{url:"reflections/wk10/34-day/index.html",revision:"7218f55b81f7951da8e4f48ae5fab6e6"},{url:"reflections/wk10/35-day/index.html",revision:"1bfb7249976e3ad677d2a1979a193b4e"},{url:"reflections/wk10/36-day/index.html",revision:"4f18a3f414e3db4b996a3bfa712d3864"},{url:"reflections/wk10/quiz10/index.html",revision:"8e01b6b552ddcc26e98e2d5bc43686e5"},{url:"reflections/wk11/37-day/index.html",revision:"f5c471e15f84e8a3a8a235d522ffbb9c"},{url:"reflections/wk11/38-day/index.html",revision:"b89e4aa253dfe392e19d0b3445f1e63e"},{url:"reflections/wk11/39-day/index.html",revision:"111ccb3b23c8d93438775a00ad97182e"},{url:"reflections/wk11/40-day/index.html",revision:"2952ccc8d99fb11ab5be4f4088a9e78f"},{url:"reflections/wk11/placeholder/index.html",revision:"c4d4ceb1e25ced6e86876a137e1fed0a"},{url:"reflections/wk12/placeholder/index.html",revision:"7f944b2d1b11f948309f15d66cc7f37e"},{url:"reflections/wk2/05-day/index.html",revision:"381a56bcf91a44fa2024ba5c99de56bc"},{url:"reflections/wk2/06-day/index.html",revision:"49a80f2e59ba7464694469775cc29a09"},{url:"reflections/wk2/07-day/index.html",revision:"2bb224f0b22a2874525bc2b56557e416"},{url:"reflections/wk2/08-day/index.html",revision:"ea3c070ec61c5cfa5959b8438ef3b507"},{url:"reflections/wk2/quiz2/index.html",revision:"8348438b41730e61e6abb914f13fb517"},{url:"reflections/wk3/09-day/index.html",revision:"2c44b8dfaa81131cfafd3535d5189ffe"},{url:"reflections/wk3/10-day/index.html",revision:"87f680684ee47b747750cd8b8bdd8d81"},{url:"reflections/wk3/11-day/index.html",revision:"6524172367e5be287f7591427aa932b1"},{url:"reflections/wk3/12-day/index.html",revision:"e6f6dd7e86317f0e6857661389e7d073"},{url:"reflections/wk3/quiz3/index.html",revision:"490f81b9e878b46dfc889a79ad79677c"},{url:"reflections/wk4/13-day/index.html",revision:"e8819f80f759c35dee8b50cfd48f169d"},{url:"reflections/wk4/14-day/index.html",revision:"a7033d6e12c90f22425d61c3bef7cb85"},{url:"reflections/wk4/15-day/index.html",revision:"50aad588b14d2fd122dcdfc47217253a"},{url:"reflections/wk4/16-day/index.html",revision:"107e2e26d8300aaf7bf3e95a3a82ff8a"},{url:"reflections/wk4/quiz4/index.html",revision:"b2c97fde8efd51886e447b3fd6e73e6f"},{url:"reflections/wk5/17-day/index.html",revision:"fba402d3f9aff18ce9027a0ded7298f5"},{url:"reflections/wk5/18-day/index.html",revision:"0aeb7849531f476aea153640e7635a61"},{url:"reflections/wk5/19-day/index.html",revision:"628030682487b8df7945449e07c37e7f"},{url:"reflections/wk5/20-day/index.html",revision:"143f0bf997144a4f82ee74284263df55"},{url:"reflections/wk5/quiz5/index.html",revision:"4494e4e7699794e8da2312ca0793947e"},{url:"reflections/wk6/21-day/index.html",revision:"df855f2c0e84aba585a80b2fc5ae7a81"},{url:"reflections/wk6/22-day/index.html",revision:"8d38a737c4a1d44e1bc7bea28fd20ecd"},{url:"reflections/wk6/23-day/index.html",revision:"69003e793e46caee98b4f1213864ef47"},{url:"reflections/wk6/24-day/index.html",revision:"241219a5b10b4b9e1ac1b8fc0f98c632"},{url:"reflections/wk6/quiz6/index.html",revision:"25477be97c8a83e0d91fb64800f94b53"},{url:"reflections/wk7/25-day/index.html",revision:"5d53711c0f6769436682e800007d8f45"},{url:"reflections/wk7/26-day/index.html",revision:"7e311c79b888654f0f1d67493ca168cd"},{url:"reflections/wk7/27-day/index.html",revision:"dcdd6d63e9869d51f3b50fc28be48015"},{url:"reflections/wk7/28-day/index.html",revision:"4768205d63ae3c69c36c4b8a8e59603b"},{url:"reflections/wk7/quiz7/index.html",revision:"775eb705db480ea19b643b60c126be01"},{url:"reflections/wk8/25-day/index.html",revision:"4ba5af84e9fc1bedde94d7dc6fa95167"},{url:"reflections/wk8/26-day/index.html",revision:"54f220d9c93ce8853ffaf15f8505cba6"},{url:"reflections/wk8/27-day/index.html",revision:"39ae2f83a37a6735ee9d34603d89a930"},{url:"reflections/wk8/28-day/index.html",revision:"47ad530155e43b8ab8d18e2fe9e2e22a"},{url:"reflections/wk8/quiz8/index.html",revision:"d3aa9dc2ae6faa2d9758a9d657518902"},{url:"reflections/wk9/29-day/index.html",revision:"d467ec89ce7650430bed24875a7eeb64"},{url:"reflections/wk9/30-day/index.html",revision:"88f78ccd776b8f2cc9915bf870f941dc"},{url:"reflections/wk9/31-day/index.html",revision:"43c4f7090b46b2866ecdfff7e5176937"},{url:"reflections/wk9/32-day/index.html",revision:"5323413dcfb93e5c9f5fd8d568513815"},{url:"reflections/wk9/quiz9/index.html",revision:"b70ff02c729776e7ddff61beb5fa2662"},{url:"slide/index.html",revision:"263aa0ab3b8f2cfea4b4ce4a5558da3d"},{url:"tag/index.html",revision:"a3f05a18bb12a6f35047f01839b31306"},{url:"timeline/index.html",revision:"ca6ffc1eacb2d7ed2dabbe41c3955b37"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
