'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "689053fb2211b3794c62fbf4492368a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "69d0adfd14cc598a59e614b648cc78ca",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "18770454f16ca5c47de75447ac2ea9ac",
".git/logs/refs/heads/main": "8bc89f7d1a0e485e5db76801c669e58b",
".git/logs/refs/remotes/origin/main": "00145ad6e244d4886592f17192928feb",
".git/objects/08/d59fd96a069eac23d7af591b2cc9942b611a0e": "2ac45da7458aa0e335517b4946d042f7",
".git/objects/12/948e1e7f8dc46f851f818732595406c075b397": "a81b68fcdae4b0044762b5b6f7686176",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/20/45f9afaa916a358cc4848f51a87aa4f6b8d35c": "1079874bb151e3be674cf471a430525d",
".git/objects/20/5f5b071b667af7e891e056084aa12cf1625bce": "40d6595890c4b2940da525b30c26032b",
".git/objects/28/0e2a16d235088ed2d8cca0d5b8b83d3baa9476": "ead85181bb8784af55a9ee1c0667c891",
".git/objects/2e/41c7c12f7215f2d1a48b7b13ab7b71bcec22b9": "4bb61c57b454329fd19611d0a569818b",
".git/objects/30/4d2b49b373494a4b7282823908a5919d05592a": "eb171a28a6705d2ec7d05f9608c16cd5",
".git/objects/41/2d0a71648feb61fe1b51a300f415cc64a7e80c": "aef3be45499f46ab9027f6d28121fc58",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/c0a888518c7e2c3f331186af46d4526e5fa98e": "86c2981c761038f4b99f64760c357354",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4c/5e3d4a0fa49022f6f9f6ae2d556caeb7874d62": "4a30046841cd1f2346a3acca4c355df4",
".git/objects/4c/70c99f61a59e32e1b3119777a4b6f7bbfb8c8e": "a0af0050bd248d335ebf1e58459d270f",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/55/05f5f1c84a0c76e5d6d00eacd31410e6d9ebe1": "b8f2c64a6793951c85b88d162c3dc2ff",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/74/2a131b014e6e4aee3200b2c254b9ad301f7efc": "811a4c25e4a91ff6ab7be0c0473989c8",
".git/objects/74/bdcdcf0cbacdc17ee650d4fef6305130431052": "5100793502be8b6df8c126c7161f6dee",
".git/objects/87/0c689fd59cd9f58becbfc9413458ef3dccd6c7": "e5bb3000d89acd364e6d211ba32d1600",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/90/6e958fffdd2d79f0c8d8c7962c0672f66e3b5b": "36b0836c96f83c70df73b236ed5a0da5",
".git/objects/9b/821fe20e55c3adda1460398b884a5964f3053a": "ef50154cf566bf06c8aa78d803d95713",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a8/c803e867a2a397a02b3c8253531ce4baafdf9d": "d4b07499c54c3484042d6f864516c786",
".git/objects/ae/a58177ef40f0674ee656b8a9f29520047728e6": "cba8b21cdcdd342b42e90447a6ad4b1c",
".git/objects/b3/0de58370ce003c6164e114d261b798fa870e29": "b7b7a9270426ec73b3b987c70ba791ec",
".git/objects/b5/adcea32ca18757f1be5aa37d29c5dc6125d66d": "5cf5d1e71c6315f3e1998d61bbfe160e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/a866942f4962967940d4a8c09b401d0b5b41b0": "fa20851980b9e6ce668c9307c87adc78",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/ba/cbe257b010672442e45f32eb690857db8bfa61": "7883959b6d3e02d0ca6a6588f2f11acf",
".git/objects/bc/03141ae43b85f30ab20c368fde0eb0eb73a10e": "75d14da837ad06bd8d68c9c5d4881873",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/e566785ea9032970b2acf778221d170c490726": "5b4f0a2b5ead4bbb02cdeb54fabfd56a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/cb78faf3e2d6db6f6b60b4bb7f3f58005074f1": "b61b8866f20d32dd42b085f301b4570e",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e4/bb269515dc4fb93ba875752c92cd882cc8f911": "ac22acc65a4b40f3bdee385db02a8747",
".git/objects/e7/2dff92309d4a810f0ae7ccc6eb3c6081303259": "aa9edd2bda7b715da4e84fae4752e8e1",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/91d4b9ab4fe90072f304ae6956342fd91712c2": "146acf5a77e32d68eaf2b6f40f2215a4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f8/074b3ea060b20e2a75d213c9ba28d06c9e76e2": "eb5dd14bb73575a24c333c80a754d9ed",
".git/objects/f9/8c6728fdd51551a0b86d5435d58d217c31cfbd": "82d2fd1e648fe6508462aa8393d8eb3a",
".git/objects/fb/964c962fc2a0ba19711fa49af3e08140699671": "a3efeaeb14537e7900c9a5faff93840e",
".git/objects/fd/b9ec08ecc2ddc70f757b72b587c296e52e0a76": "5c9753bd9542f35a98ad57adce90317e",
".git/objects/fd/dac1b3fbdd32bf8817b58dadd4a172a25404a2": "280d85318a70118723bf3d2c205b9101",
".git/objects/ff/77f32aa070af4c5dd3f0e0e0fe3f92340fb331": "d5e0a84b967af58f02bf1f333a28067b",
".git/refs/heads/main": "01a90e7ba82d748ca6d19e14a5f363b1",
".git/refs/remotes/origin/main": "01a90e7ba82d748ca6d19e14a5f363b1",
"assets/AssetManifest.bin": "7a8e51d772e11520d6067d93f2115ad9",
"assets/AssetManifest.bin.json": "a9ef6bc00c3fce13587bc02c803704c8",
"assets/AssetManifest.json": "ca48e1d217979c9d0a6e44e87ba4615d",
"assets/assets/default_proflie.png": "7b492df6877444ddd6caddc8a0f72e23",
"assets/assets/google.png": "7c66e124766e3b9c4efffcd0353afcad",
"assets/assets/imageloading.json": "2371d7f9b3086277ebbde993c47b3fde",
"assets/assets/loading.json": "6c4bdd2fb946c0825febfcf1717e6669",
"assets/assets/noitems.json": "7950069d56522679fa911a05cbe43e60",
"assets/assets/pizza.png": "d87c346be698078fe8c1e7f8c851f472",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d8c0068c22b0d4e6531d69d743d7adea",
"assets/NOTICES": "13f58dbe46eb4b9bfc58b6071e4cfe1c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_cashfree_pg_sdk/assets/amex.png": "99f1d408e289af3e6359feffc5abc003",
"assets/packages/flutter_cashfree_pg_sdk/assets/credit-card-default.png": "e987949373676bb7b9a6bb85c19dba1b",
"assets/packages/flutter_cashfree_pg_sdk/assets/diners.png": "6bc0a26fbe98312d2cde3ca06a9b9518",
"assets/packages/flutter_cashfree_pg_sdk/assets/discover.png": "8fb5c3dd58ffb198644a9aac0d0a5da2",
"assets/packages/flutter_cashfree_pg_sdk/assets/jcb.png": "903e2793c61fc15e48fed184d6eadbe7",
"assets/packages/flutter_cashfree_pg_sdk/assets/maestro.png": "49f3167896883d38eb9770f6527fa961",
"assets/packages/flutter_cashfree_pg_sdk/assets/mastercard.png": "64dd58b0f24ee7bf272d964f508660bb",
"assets/packages/flutter_cashfree_pg_sdk/assets/rupay.png": "b6c88a3273204df54bc46e374b633570",
"assets/packages/flutter_cashfree_pg_sdk/assets/visa.png": "3442819455f79b208c50094bae6843e8",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "5e2b0a8047fab1db2e926874623a09d5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9fcfa8bd6e88d79ef86e227048e5fa7f",
"/": "9fcfa8bd6e88d79ef86e227048e5fa7f",
"main.dart.js": "c1f5ffd7959505246164d6a107128cfd",
"manifest.json": "64719f56b051fdea6e5fcdd89df4ae35",
"version.json": "c99baac59c3b65e8be50807ef36e4fcc"};
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
