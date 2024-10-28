'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d7942962a90e58f855c131a9bc5c297f",
"version.json": "85c151ddf57e6e3d7929177dd1a665c5",
"index.html": "495a85c76f9aad8a7d49da65ca6cf705",
"/": "495a85c76f9aad8a7d49da65ca6cf705",
"main.dart.js": "da8e834ef0901f098c9475477dd4ce20",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "92fe28b905a1c9989b5006500e7c7eff",
".git/config": "776ddb36bb1ab6c79181dca1d1139a1a",
".git/objects/0d/d2acd72458201b42d0fddcfd183df4cfb1ffca": "f0b44862a8f9b289daa993cf6592a914",
".git/objects/92/9dc88534ed31d10f690320a7e9fb02ae1d0c06": "dea83ad7a4ee3aa734b484cb55f46afc",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/57/3a5c02d861cb8ccdfc595f758753a760df4fe8": "f2d418ba9a94aa12a8b56ba9304031b5",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/56/feddb0c5675f3d696a17a14d6caf12d198d34f": "3c0f4f5cecd6ce9fe2a30edd378e5f10",
".git/objects/56/d16861e0470708f4973208477c5c6c162c0983": "d6f2ef66ef4d73e6559e77f015db43e9",
".git/objects/58/410468b9bd07c65647e34518d294682b3234d5": "083e150a64892d74fde408b44d787419",
".git/objects/0b/cd9fdec68a16a006fd5f78d0d14fa33fd6f1ee": "dd2b9f4ae5fc44a33ea718cb42faf0c2",
".git/objects/b2/32b7787dfc5b77e1276e2f862cb2ab8b20772f": "fdd46252acc3db976e038f12ebced358",
".git/objects/d9/f3fdeb44ae366811701cee683b5555f5a04e44": "52717bdfcddc7ae60a35dd3c928dcf60",
".git/objects/ac/95ec9cdcdc1e3a7fa96b2aaa2abadb3ee047f6": "69a681d437231d60dd329130abfa4f51",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/b4/0edc39a8fedcf6c65be94768f90a22a7870f08": "01f054e61325e941c52c27ac3597d781",
".git/objects/a2/1d52fe30b839a89a7071ef58a0ca1310734684": "93fad5a258f29cb0d6b44fa47e744047",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/79e003c271b08205ea10511041ad2911499b38": "50bc4f2ffdd6f45c50a30a5a29c842f3",
".git/objects/d8/247ce66de962841825085959846e873d9acdec": "13bdee73d421bb5010e4fa85fe61c9ec",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/c106f12e606fe69751cee0b70bcf544e3b4054": "55937169d68c45a088b774ddd507abcf",
".git/objects/ee/7b39f1c17f3cec6236060669c74a300048190a": "d6a719c1e07b214fb66d9f2ac5be197d",
".git/objects/c9/d9d67b1d1a5f7076bc851ed8d5b1c2678d25a5": "82393c24151f5e1d68e2bf1b96cdf676",
".git/objects/c9/81fedc9ac94ac959d3bcbfb36863f172fa3c88": "25c09e48b62bbf644336b69ab6736ea9",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/cf/9d1215a48bd7a6ef3a4500e8ac9cbd1c706c56": "f215ec830519844a77db29109531d3f6",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/18/81b696acbab7c2d3b493d1b156255209395574": "c44b258856f4d0be29598e37541c6639",
".git/objects/29/9c0c7edfb936d2aeb99963a7ef864bb679d3a9": "7dc492fef71414ae0471c5fcdf165e64",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/89/688ec548d224c383bba78788097b2550d2cd41": "ea53d3d1eff120b3ce229d1f1125ade7",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/d44efb002b08525e34be3e3e74054e9fa90334": "b6f529926b30a2f10a5cc467576610b6",
".git/objects/1a/ed05363668f341f3636dda07207c7eeb6a40f9": "7372ebfe3e492913325192c950efc380",
".git/objects/7b/bec40dee531a47dd0d5524fd3a81db6f62f1ae": "0482edfc2737a4140da1ffe43a22fa2d",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/0804a425f3c7b8c7fe415efcb77f997e64c8da": "61412b82972908b6ac60f707a9a820cf",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/2a/eb68f89fcf479b82f4bb3fa572c5303d863167": "1e222fcdea7088b8477bf913692f7851",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/048b89b4c3ee8246bbf6bffd87295da27e9e99": "aa3c39c5e69f42af25eae14c741b7790",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/00/93cbb5dc0c2a4972b6c5322584ae253856fc8e": "121efcf4f026ad02fad8bf8c54bfc1d6",
".git/objects/5c/3576a9e7c5ef5792e8ab215c59dc533d207cd3": "9a4db2932b9e0fb16c4e225e150062ac",
".git/objects/91/3c59633b243abdc34300776cba77cfdd562837": "f07b481c2dbd03df16ef78a75d572a4a",
".git/objects/65/80a5e6f9283028df28ec78015e88419a6e9b31": "9a66b8df1bd0e20200ddd7aba5b88ae5",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/01/d4f8e95bc282c8f335cde2679a91c53726eb58": "df218a926ec9be4340c572acd8626d8e",
".git/objects/55/7d9bce20c2f7eff71599bbcf2f759580ede34d": "bc08f4b089239c5475c37dede36395f3",
".git/objects/90/fb110dac6775e2981cf2cf3846ff98fd85381a": "e0e5230aeb32f73c0851d85a9cdb438f",
".git/objects/90/268395c1f5f1f3e7548f44c82064b4190ae274": "b8289ea9bf7fc6a6cef24b81f443c2fd",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/f41721150e99a2e3a845c2712c764b20881566": "1388d639f86004a66bab1d7d510ccbbc",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/5b8634d9768bba50999edb53a0688f5433c188": "bde892e69adc8254c803b6071e957d11",
".git/objects/dd/ab82fc8edda5971d6bfadbfca4a3483b15fc46": "07fc609e07332dc5010dc1e246fbb83f",
".git/objects/d2/36d746cd070b9132b7ac412bf74a5e212ca19a": "2850ad73656fe45a5d1228280062c6dc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ea/d2a3daf1337dcb2cb95696307608214b2c671b": "cdafa128b0a02080cf86171419cc7241",
".git/objects/f6/b2d52a92133fae6a1cfb5df3206000390a3b50": "dd069dd6b27e53fe356db4684e36fa3d",
".git/objects/cb/8b16df6d0439da375142f4b1d7ae5971b40fbe": "447295c53a26a7805d4604b82c8ead34",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/41/56cdf4c52e87887e617e38cf1b47a473d67fd7": "a8a9ba93a29d2e4c7b0258eb54fb9ba5",
".git/objects/48/fc23b74ad2658f57e8132cbacfc8f64c268500": "d0d6876021d4dcb5900cb98b32530e1a",
".git/objects/48/069fc4c82ac734928066969cb507c70ea7fa05": "69d26686370cba50f0283fcda30a4d11",
".git/objects/1e/dd828371050a667740f1558243fafb9499fdfe": "03fbf3db79b6cc340742177006c2fd4d",
".git/objects/1e/388e866ec1868d40ebbb3fe28b09f414f54426": "396bc9269be7819d38e51c4669f295da",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/24/2eb8395172619206cbb88aa49295327e5879ad": "16c63a3e80eed566b9d1afa8efafbde2",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/90d5df15addd343fca125b4bf0dcf269745543": "2ef59161d202fd2e5843f0f50d7d8cb8",
".git/objects/82/d91209a14fda28b3448620cb888ad3ab89a9b4": "f0684fc1bd23a05abcc1f624c7c1df5d",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/8b/e08e47590895d698426a0553795c3b4e99db78": "963d56470cf4e87afca5d2b3f7af3db5",
".git/objects/7a/608d3529794dbb25b40231b3bf5e7337445095": "bcf5806fae3864304c1d6b6734c12491",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2b343832f01e1fb9011bc65c22852811",
".git/logs/refs/heads/main": "2b343832f01e1fb9011bc65c22852811",
".git/logs/refs/remotes/origin/main": "12761f330dac66260f58cd35761efb8f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "b36fdd670092a157daca1a2162b1553e",
".git/refs/remotes/origin/main": "b36fdd670092a157daca1a2162b1553e",
".git/index": "25deee6db4d89a2f87ee32a35975d970",
".git/COMMIT_EDITMSG": "6211bb3b8e7328d378575846b037a60a",
".git/FETCH_HEAD": "2704d30fa841fe1effa829ba689d7b77",
"assets/AssetManifest.json": "083c917e5eff01c5d1b629e19396ee69",
"assets/NOTICES": "03c113d3341b7320af8f80d0f603a380",
"assets/FontManifest.json": "ad6eb569c2d3350529fe722b6d5773b3",
"assets/AssetManifest.bin.json": "3d2b56971d307c85b7fb9473eda09c88",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "b9e64de1e4cd4d06dc7442ff4b1e7505",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/img/ar_logo.webp": "215aed014d40e125870b79fb4dbd7c05",
"assets/assets/img/watch.webp": "190a323577f277a059aaa38f739c9294",
"assets/assets/img/ar_gif1.gif": "80537d7e0adc66301f76d19a8269ede5",
"assets/assets/img/Bhutanese_corner_design.svg.png": "294dc5cfdcbd42870a72fbc29814ddb2",
"assets/assets/img/platforms.png": "06e21187ed15368bb8447fa808c59686",
"assets/assets/img/exp1.png": "ce4f77b0c4a19d74a5160fa4d5af5f9e",
"assets/assets/img/easy_integration.png": "ef8709225a21c5112df462e0e4da8ece",
"assets/assets/fonts/zymyran/Zymyran-Extrabold.ttf": "ad8ac30a77b0cdf30a098d884b532f6a",
"assets/assets/fonts/zymyran/Zymyran-Medium.ttf": "b9a2a574131c1e02fe9b329b869655fe",
"assets/assets/fonts/zymyran/Zymyran-Bold.ttf": "103007e7e3727251ebf142fc4b03bb89",
"assets/assets/fonts/zymyran/Zymyran-Thin.ttf": "1db5ae5b1eb3b5c27d76f06c3a791ebf",
"assets/assets/fonts/zymyran/Zymyran-Light.ttf": "53b899b6b6a6d348ba5b6d3cf8529afb",
"assets/assets/fonts/zymyran/Zymyran-Regular.ttf": "a0d3b3bc3201331ec872a4954642f84c",
"assets/assets/fonts/zymyran/Zymyran-Black.ttf": "378cdf43bc2ec781cf13291a5b74a625",
"assets/assets/fonts/zymyran/Zymyran-UltraLight.ttf": "84b703fef426e2d4a86dadd8a6f053d8",
"assets/assets/fonts/zymyran/Zymyran-Semibold.ttf": "87b8c496b3bcbd235bf5e1b5ed013604",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
