'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/Icon-192.png": "a8b6a0d3ec576e83d043cc7a01e96da1",
"icons/Icon-512.png": "5d44e6a065226082e2ac9747b1640c1d",
"icons/Icon-maskable-192.png": "a8b6a0d3ec576e83d043cc7a01e96da1",
"icons/Icon-maskable-512.png": "5d44e6a065226082e2ac9747b1640c1d",
"splash/style.css": "cffe3c558518a524cdf04998c0e94267",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/img/light-3x.png": "a113dcf3262360d06d8beafff32e8082",
"splash/img/dark-4x.png": "5d44e6a065226082e2ac9747b1640c1d",
"splash/img/light-4x.png": "5d44e6a065226082e2ac9747b1640c1d",
"splash/img/light-2x.png": "588c65d49447a3ef6bdac03f0fd243b1",
"splash/img/dark-3x.png": "a113dcf3262360d06d8beafff32e8082",
"splash/img/dark-2x.png": "588c65d49447a3ef6bdac03f0fd243b1",
"splash/img/dark-1x.png": "d3d90dd197fec9b162f55e5eb7722f68",
"splash/img/light-1x.png": "d3d90dd197fec9b162f55e5eb7722f68",
"manifest.json": "b0996c0d1abfedb37db730ad115e66d0",
"version.json": "88314b2998199fe94ff7ad95bfd5e3cc",
"favicon.png": "076a6a562c8416c11af28ed92c93b084",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"main.dart.js": "ef0bbdc6cf46e13acab808981bd4fcb5",
"index.html": "c3d0633ac71f8d18173c1fe5a0f07b60",
"/": "c3d0633ac71f8d18173c1fe5a0f07b60",
"assets/AssetManifest.json": "9f4d9debbcfd1a825b069087ac91cef4",
"assets/NOTICES": "c2064ac42f4d7cfda44b8a582e3ba61c",
"assets/assets/icons/payment-method.svg": "90b40d0d3e39e419fa2fdaa3e2ed8856",
"assets/assets/icons/folder.svg": "40a82e74e930ac73aa6ccb85d8c5a29c",
"assets/assets/icons/001-information-1.png": "98daa1a4bcf306eceb7d7af71ee82e9a",
"assets/assets/icons/media_file.svg": "2ac15c968f8a8cea571a0f3e9f238a66",
"assets/assets/icons/001-down-arrow.png": "390a351470349c7598ea5afa52551627",
"assets/assets/icons/shield.png": "86b99129e61f01a00a163a253f0d032c",
"assets/assets/icons/logo.svg": "b3af0c077a73709c992d7e075b76ce33",
"assets/assets/icons/pdf_file.svg": "ca854643eeee7bedba7a1d550e2ba94f",
"assets/assets/icons/004-playtime.svg": "9b7c63f70230b4837b1a56c20b749173",
"assets/assets/icons/001-sigma.svg": "4438fb7417c005b7e288d103daf5645a",
"assets/assets/icons/010-compliant.png": "9a2ceafd230bdcb01a1317e4ca17a3c6",
"assets/assets/icons/002-information.png": "3c4d2e158cb1043f824b299378442b7f",
"assets/assets/icons/google_drive.svg": "9a3005a58d47a11bfeffc11ddd3567c1",
"assets/assets/icons/005-time-is-money.png": "5a6be0dfbd97bb3c4920e587bd6e0e77",
"assets/assets/icons/001-profile.png": "055a91979264664a1ee12b9453610d82",
"assets/assets/icons/007-setting.png": "7d234ab14c9d2628bc25e6f648f68f40",
"assets/assets/icons/002-add-group.svg": "2c9cd6645ef6cd6663ac6f305b11df76",
"assets/assets/icons/006-gear.png": "97be0efe0b5f5dc42afc223b0fcd908a",
"assets/assets/icons/staff.svg": "5f9155cba1892c59f186f532e5c9192c",
"assets/assets/icons/drop_box.svg": "3295157e194179743d6093de9f1ff254",
"assets/assets/icons/008-overtime-2.svg": "172892d40d127e5857c1754116624c02",
"assets/assets/icons/001-lock.png": "ed24b97dfa4723997f7fbb50768a5c43",
"assets/assets/icons/006-overtime-1.svg": "3ff7868d32e62fbd24e2f51848b8fd1b",
"assets/assets/icons/002-hourglass.png": "d04ce305d93ca2dc8d31efb216a47d6b",
"assets/assets/icons/002-key.png": "2754ab61b32698e20ff4089f33ca4ed0",
"assets/assets/icons/menu_tran.svg": "6c95fa7ae6679737dc57efd2ccbb0e57",
"assets/assets/icons/menu_task.svg": "1a02d1c14f49a765da34487d23a3093b",
"assets/assets/icons/003-password.png": "f1eaef54e58a5f9c0075d7d0ed106e84",
"assets/assets/icons/006-report.png": "e108970cc84de6ef89adaa0fd1061130",
"assets/assets/icons/unknown.svg": "b2f3cdc507252d75dea079282f14614f",
"assets/assets/icons/menu_doc.svg": "09673c2879de2db9646345011dbaa7bb",
"assets/assets/icons/menu_notification.svg": "460268d6e4bdeab56538d7020cc4b326",
"assets/assets/icons/004-exchange-1.png": "670403879e6ff018817c7ee5c4d5a382",
"assets/assets/icons/sound_file.svg": "fe212d5edfddd0786319edf50601ec73",
"assets/assets/icons/008-system.png": "ed2c8bee4a3ea8030e66e626b654c501",
"assets/assets/icons/excle_file.svg": "dc91b258ecf87f5731fb2ab9ae15a3ec",
"assets/assets/icons/Figma_file.svg": "0ae328b79325e7615054aed3147c81f9",
"assets/assets/icons/guardian.svg": "8b360786fbd6df2f6f5bf8050428115c",
"assets/assets/icons/menu_profile.svg": "fe56f998a7c1b307809ea3653a1b62f9",
"assets/assets/icons/one_drive.svg": "aa908c0a29eb795606799385cdfc8592",
"assets/assets/icons/password-reset.svg": "a905e7559aa20501318a3fd15feb2d17",
"assets/assets/icons/pickup.png": "782f34d85b688de3413763345cbee950",
"assets/assets/icons/media.svg": "059dfe46bd2d92e30bf361c2f7055c3b",
"assets/assets/icons/student.svg": "0a90d038cb3c78a86b8c5404cbe7df31",
"assets/assets/icons/003-about.png": "c0b972b2692a2993e055e35221431f33",
"assets/assets/icons/004-password-1.png": "d05abc29fd24671ce4272f8b9817073f",
"assets/assets/icons/007-woman-1.svg": "6c15b83614de18e1a60f43dd57e57aba",
"assets/assets/icons/006-user.svg": "5655b4bd1c4d5a349e575538915132d5",
"assets/assets/icons/nothing-here-13.png": "94f05d5d606cea6198668706340a76d4",
"assets/assets/icons/005-app-development.png": "13a16b860814675a63949456a045090f",
"assets/assets/icons/Icon-01.png": "6013812733a1db95b60c0cd0a7842d85",
"assets/assets/icons/Documents.svg": "51896b51d35e28711cf4bd218bde185d",
"assets/assets/icons/xd_file.svg": "38913b108e39bcd55988050d2d80194c",
"assets/assets/icons/002-all.svg": "550b2c3a580c50d54319fd6fa44baf34",
"assets/assets/icons/menu_setting.svg": "d0e24d5d0956729e0e2ab09cb4327e32",
"assets/assets/icons/003-exchange.png": "b6174121b511bd544333039c808c1132",
"assets/assets/icons/menu_dashbord.svg": "b2cdf62e9ce9ca35f3fc72f1c1fcc7d4",
"assets/assets/icons/005-overtime.svg": "694e568aae8f3d00a208f72304299d2e",
"assets/assets/icons/007-time-is-money.svg": "653ce93bc8e5e16166576ce313d3101b",
"assets/assets/icons/Search.svg": "396d519c18918ed763d741f4ba90243a",
"assets/assets/icons/003-student.svg": "075a805c934985fccf268662f3a079d4",
"assets/assets/icons/009-system-1.png": "666aa707095ade07a86da1d2329e3f5d",
"assets/assets/icons/doc_file.svg": "552a02a5a3dbaee682de14573f0ca9f3",
"assets/assets/icons/menu_store.svg": "2fd4ae47fd0fca084e50a600dda008cd",
"assets/assets/icons/009-student.svg": "bb02e1c08238b5e0c9f7ad01f5527cb4",
"assets/assets/images/back2Skool.svg": "509594e527d2e165011a586f7170d686",
"assets/assets/images/malticard.png": "3ca15e73f2a3e367a0344f2e14830691",
"assets/assets/images/splash.png": "12e5d4b9a25f210565d9eadecd5e5621",
"assets/assets/images/logo.png": "5315be9d0a7602fb12a0ad4c2e3006e9",
"assets/assets/images/app_icon.png": "264602260918ffbe40b15015044b85d8",
"assets/assets/images/profile_pic.png": "5f56c3070f1c066ae15ecad12fb44f54",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/currency_picker/lib/src/res/no_flag.png": "3f454777dfe9b6aae5e9d8544f4fa6f6",
"assets/packages/currency_picker/lib/src/res/xof.png": "5843e487ecffd9d3dcd01c1070cc6c6a",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
