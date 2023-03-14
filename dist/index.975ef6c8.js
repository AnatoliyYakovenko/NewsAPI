// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"jC2qd":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
var _mobileMenu = require("./js/mobile-menu");
var _inputActions = require("./js/input-actions");
var _themeSwitch = require("./js/theme-switch");
var _calendar = require("./js/calendar");
var _byCategories = require("./js/fetchQueries/byCategories");
var _byPopular = require("./js/fetchQueries/byPopular");
var _byQuery = require("./js/fetchQueries/byQuery");
var _weather = require("./js/weather");
var _accordion = require("./js/accordion/accordion");
var _addToRead = require("./js/addToRead/addToRead");
var _navLogic = require("./js/navLogic/navLogic");
var _addToFavorites = require("./js/addToFavorites/addToFavorites");
var _pagination = require("./js/pagination/pagination");

},{"./js/mobile-menu":"gWx5g","./js/input-actions":"6L61R","./js/theme-switch":"dbhPz","./js/calendar":"fsVt9","./js/fetchQueries/byCategories":"i9zTq","./js/fetchQueries/byPopular":"at5e6","./js/fetchQueries/byQuery":"44uaB","./js/weather":"6kwvs","./js/accordion/accordion":"7ViTa","./js/addToRead/addToRead":"bpk84","./js/navLogic/navLogic":"cRQax","./js/addToFavorites/addToFavorites":"enlIi","./js/pagination/pagination":"gIUTo"}],"gWx5g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toggleMenu", ()=>toggleMenu);
const mobileMenu = document.querySelector(".js-menu-container");
const openMenuBtn = document.querySelector(".js-open-menu");
const closeMenuBtn = document.querySelector(".js-close-menu");
const toggleMenu = ()=>{
    const isMenuOpen = openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("is-open");
    const scrollLockMethod = !isMenuOpen ? "disableBodyScroll" : "enableBodyScroll";
    bodyScrollLock[scrollLockMethod](document.body);
};
openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);
// Close the mobile menu on wider screens if the device orientation changes
window.matchMedia("(min-width: 768px)").addEventListener("change", (e)=>{
    if (!e.matches) return;
    mobileMenu.classList.remove("is-open");
    openMenuBtn.setAttribute("aria-expanded", false);
    bodyScrollLock.enableBodyScroll(document.body);
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"6L61R":[function(require,module,exports) {
var _refs = require("./refs");
categoriesOnPageLoad();
(0, _refs.refs).buttonEL.addEventListener("click", onInputShow);
function onInputShow(evt) {
    (0, _refs.refs).inputEl.classList.add("form__input-show");
    (0, _refs.refs).svgEl.classList.add("search__icon-show");
    (0, _refs.refs).iconBtn.classList.add("icon__button-show");
    (0, _refs.refs).buttonEL.classList.add("search__button-hidden");
}
function categoriesOnPageLoad() {
    if (window.matchMedia("(min-width: 769.98px)").matches) {
        (0, _refs.refs).inputEl.classList.add("form__input-show");
        (0, _refs.refs).svgEl.classList.add("search__icon-show");
        (0, _refs.refs).iconBtn.classList.add("icon__button-show");
    }
}
window.addEventListener("resize", (e)=>{
    if (e.target.innerWidth >= 767.9) {
        (0, _refs.refs).inputEl.classList.add("form__input-show");
        (0, _refs.refs).svgEl.classList.add("search__icon-show");
        (0, _refs.refs).buttonEL.classList.add("search__button-hidden");
        (0, _refs.refs).iconBtn.classList.add("icon__button-show");
        return;
    }
});

},{"./refs":"2WoF2"}],"2WoF2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "refs", ()=>refs);
const refs = {
    gallery: document.querySelector(`.card__list`),
    weather: document.querySelector(`.weather`),
    filter: document.querySelector(`.search-form`),
    filterBtn: document.querySelector(`.js-button-search`),
    filterInput: document.querySelector(`.form__input-close`),
    calendar: document.querySelector(`.calendar`),
    calendarInput: document.querySelector(`.calendar__input`),
    FavBtn: document.querySelector(".js-favorite"),
    categoriesBtnMenu: document.querySelector(".categories__btn-menu"),
    categoriesBox: document.querySelector(".categories"),
    categoriesList: document.querySelector(".categories__list"),
    categoriesMenu: document.querySelector(".categories__menu"),
    categoriesContainer: document.querySelector(".filter-container"),
    menu: document.querySelector(".menu"),
    categoriesIconUp: document.querySelector(".categories__icon-up"),
    categoriesIconDown: document.querySelector(".categories__icon-down"),
    categoriesBtnList: document.querySelector(".categories__btn-list"),
    categoriesBtnMenuText: document.querySelector(".categories__btn-text"),
    notFoundEl: document.querySelector(".not-found"),
    buttonEL: document.querySelector(".js-button-search"),
    inputEl: document.querySelector(".form__input-close"),
    svgEl: document.querySelector(".search__icon-hidden"),
    iconBtn: document.querySelector(".icon__button-hidden"),
    mobileNavItem: document.querySelector(".mobile-menu-list"),
    //accordion
    accordion: document.querySelector(".accordion"),
    accordArrow: document.querySelector(".accord__arrow"),
    //Read more && Add
    readMore: document.querySelector(".info__link"),
    //nav main btn
    ReadBtn: document.querySelector('[data-value="Read"]'),
    FavBtn: document.querySelector('[data-value="Favorite"]'),
    HomeBtn: document.querySelector('[data-value="Home"]'),
    // nav mobile btn
    readBtnMob: document.querySelector(".js-read"),
    favBtnMob: document.querySelector(".js-favorite"),
    homeBtnMob: document.querySelector(".js-home"),
    nav: document.querySelector(".list-navigation"),
    navMobile: document.querySelector(".mobile-menu-list"),
    categContainer: document.querySelector(".filter-container"),
    loader: document.querySelector(".loader"),
    mobileMenu: document.querySelector(".js-menu-container"),
    //pagination 
    pageContainer: document.querySelector(".page-container"),
    pg: document.getElementById("pagination"),
    btnNextPg: document.querySelector("button.next-page"),
    btnPrevPg: document.querySelector("button.prev-page")
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dbhPz":[function(require,module,exports) {
var _const = require("./const");
var _storageLogic = require("./storageLogic");
var _navLogic = require("./navLogic/navLogic");
const inputSwitches = document.querySelectorAll("#theme-switch");
const themeTexts = document.querySelectorAll(".text-switch");
const themeIcons = document.querySelectorAll(".switch-icon");
inputSwitches.forEach((inputSwitch)=>{
    inputSwitch.addEventListener("change", onInputChange);
    getCurrentTheme(inputSwitch);
});
function onInputChange(e) {
    if (e.currentTarget.checked) {
        document.body.classList.add("darkMode");
        document.body.classList.remove("light");
        (0, _navLogic.clearCurrent)(themeTexts, "active");
        (0, _navLogic.clearCurrent)(themeIcons, "active");
        themeTexts.forEach((elem)=>{
            if (elem.matches(".dark")) elem.classList.add("active");
        });
        themeIcons.forEach((elem)=>{
            if (elem.matches(".dark")) elem.classList.add("active");
        });
        _storageLogic.saveToLocal(_const.KEY_THEME, "darkMode");
    } else {
        document.body.classList.add("light");
        document.body.classList.remove("darkMode");
        (0, _navLogic.clearCurrent)(themeTexts, "active");
        (0, _navLogic.clearCurrent)(themeIcons, "active");
        themeTexts.forEach((elem)=>{
            if (elem.matches(".light")) elem.classList.add("active");
        });
        themeIcons.forEach((elem)=>{
            if (elem.matches(".light")) elem.classList.add("active");
        });
        _storageLogic.saveToLocal(_const.KEY_THEME, "light");
    }
}
function getCurrentTheme(input) {
    const currentTheme = _storageLogic.loadFromLocal("theme") || "light";
    document.body.className = currentTheme;
    (0, _navLogic.clearCurrent)(themeTexts, "active");
    (0, _navLogic.clearCurrent)(themeIcons, "active");
    themeTexts.forEach((elem)=>{
        if (elem.matches(".light")) elem.classList.add("active");
    });
    themeIcons.forEach((elem)=>{
        if (elem.matches(".light")) elem.classList.add("active");
    });
    if (currentTheme === "darkMode") {
        input.checked = true;
        (0, _navLogic.clearCurrent)(themeTexts, "active");
        (0, _navLogic.clearCurrent)(themeIcons, "active");
        themeTexts.forEach((elem)=>{
            if (elem.matches(".dark")) elem.classList.add("active");
        });
        themeIcons.forEach((elem)=>{
            if (elem.matches(".dark")) elem.classList.add("active");
        });
    }
}

},{"./const":"jgw4B","./storageLogic":"cLxmJ","./navLogic/navLogic":"cRQax"}],"jgw4B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "KEY_THEME", ()=>KEY_THEME);
parcelHelpers.export(exports, "KEY_COLLECTION", ()=>KEY_COLLECTION);
parcelHelpers.export(exports, "KEY_FAVORITE", ()=>KEY_FAVORITE);
parcelHelpers.export(exports, "KEY_CURRENT_PAGE", ()=>KEY_CURRENT_PAGE);
parcelHelpers.export(exports, "KEY_READ", ()=>KEY_READ);
parcelHelpers.export(exports, "MAXLENGHT", ()=>MAXLENGHT);
parcelHelpers.export(exports, "CATEGOREIS", ()=>CATEGOREIS);
const KEY_THEME = "theme";
const KEY_COLLECTION = "collection";
const KEY_FAVORITE = "favorite";
const KEY_CURRENT_PAGE = "current";
const KEY_READ = "read";
const MAXLENGHT = 110;
const CATEGOREIS = "categories";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cLxmJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "saveToSession", ()=>saveToSession);
parcelHelpers.export(exports, "loadFromSession", ()=>loadFromSession);
parcelHelpers.export(exports, "saveToLocal", ()=>saveToLocal);
parcelHelpers.export(exports, "loadFromLocal", ()=>loadFromLocal);
const saveToLocal = (key, value)=>{
    try {
        const serializedState = JSON.stringify(value);
        localStorage.setItem(key, serializedState);
    } catch (error) {
        console.error("Set state error: ", error.message);
    }
};
const loadFromLocal = (key)=>{
    try {
        const serializedState = localStorage.getItem(key);
        return serializedState ? JSON.parse(serializedState) : [];
    } catch (error) {
        console.error("Get state error: ", error.message);
    }
};
const saveToSession = (key, value)=>{
    try {
        const serializedState = JSON.stringify(value);
        sessionStorage.setItem(key, serializedState);
    } catch (error) {
        console.error("Set state error: ", error.message);
    }
};
const loadFromSession = (key)=>{
    try {
        const serializedState = sessionStorage.getItem(key);
        return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
        console.error("Get state error: ", error.message);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cRQax":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clearCurrent", ()=>clearCurrent);
var _const = require("../const");
var _refs = require("../refs");
var _storageLogic = require("../storageLogic");
var _renderMarkup = require("../renderMarkup");
var _mobileMenu = require("../mobile-menu");
//DESK NAV LOGIC
(0, _refs.refs).nav.addEventListener("click", (e)=>{
    if (e.target.nodeName !== "SPAN") return;
    let curr = e.target.parentNode;
    let list = e.currentTarget.children;
    let currPage = e.target.textContent;
    clearCurrent(list, "current-list__item");
    curr.classList.add("current-list__item");
    _storageLogic.saveToLocal("currentPage", currPage);
    toHideCategories(currPage);
});
function clearCurrent(list, _class) {
    Array.from(list).forEach((elem)=>{
        if (elem.classList.contains(_class)) elem.classList.remove(_class);
    });
}
function toHideCategories(currentPage) {
    const navArray = [
        "Favorite",
        "Read"
    ];
    if (navArray.includes(currentPage)) (0, _refs.refs).categoriesContainer.classList.add("hidden-categories");
    else (0, _refs.refs).categoriesContainer.classList.remove("hidden-categories");
}
//  MOB NAV LOGIC
(0, _refs.refs).navMobile.addEventListener("click", (e)=>{
    let currPage = e.target.dataset.value;
    if (e.target.nodeName === "SPAN") {
        let list = e.target.parentNode.parentNode.children;
        clearCurrent(list, "menu-current__item");
        e.target.parentNode.classList.add("menu-current__item");
        _storageLogic.saveToLocal("currentPage", currPage);
        toHideCategories(currPage);
        (0, _mobileMenu.toggleMenu)();
    }
});

},{"../const":"jgw4B","../refs":"2WoF2","../storageLogic":"cLxmJ","../renderMarkup":"LPz2v","../mobile-menu":"gWx5g","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"LPz2v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderMarkup", ()=>renderMarkup);
parcelHelpers.export(exports, "renderWeather", ()=>renderWeather);
parcelHelpers.export(exports, "renderAccordion", ()=>renderAccordion);
parcelHelpers.export(exports, "clear", ()=>clear);
var _format = require("date-fns/format");
var _formatDefault = parcelHelpers.interopDefault(_format);
var _const = require("./const");
var _storageLogic = require("./storageLogic");
const favorites = _storageLogic.loadFromLocal(_const.KEY_FAVORITE);
const favoritesId = favorites.map(({ id  })=>id);
function renderMarkup({ imgUrl , title , text , date , url , id , categorie  }) {
    return `<li class="card__item"  id=${id}>
  <div class="thumb" style="background-image: url('${imgUrl}')">
    <span
      class="thumb__item" >${categorie}
    </span>
    <button type="button" class="favorite-btn">
       <span class="icon-span add-favorite">Add to favorite
       <svg class="icon add-favorite-icon" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4.66658 2C2.82592 2 1.33325 3.47733 1.33325 5.3C1.33325 6.77133 1.91659 10.2633 7.65859 13.7933C7.76144 13.8559 7.87952 13.889 7.99992 13.889C8.12032 13.889 8.2384 13.8559 8.34125 13.7933C14.0833 10.2633 14.6666 6.77133 14.6666 5.3C14.6666 3.47733 13.1739 2 11.3333 2C9.49259 2 7.99992 4 7.99992 4C7.99992 4 6.50725 2 4.66658 2Z"/>
   </svg></span>
       <span class="icon-span remove-favorite">Remove from favorite <svg class="icon remove-favorite-icon" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
       <path d="M4.66658 2C2.82592 2 1.33325 3.47733 1.33325 5.3C1.33325 6.77133 1.91659 10.2633 7.65859 13.7933C7.76144 13.8559 7.87952 13.889 7.99992 13.889C8.12032 13.889 8.2384 13.8559 8.34125 13.7933C14.0833 10.2633 14.6666 6.77133 14.6666 5.3C14.6666 3.47733 13.1739 2 11.3333 2C9.49259 2 7.99992 4 7.99992 4C7.99992 4 6.50725 2 4.66658 2Z"/>
   </svg></span>
           </button>
      <p class="read">Already read
      <svg class="tick" width="17" height="12" viewBox="0 0 16 12" fill="" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.1885 0.594133C15.0326 0.598778 14.8847 0.663925 14.776 0.775774L5.6002 9.95155L1.82442 6.17577C1.76913 6.11819 1.70291 6.07222 1.62963 6.04054C1.55635 6.00887 1.47749 5.99214 1.39767 5.99133C1.31784 5.99052 1.23866 6.00564 1.16475 6.03581C1.09085 6.06599 1.0237 6.11061 0.967257 6.16705C0.91081 6.2235 0.866193 6.29064 0.83602 6.36455C0.805846 6.43846 0.790723 6.51764 0.791535 6.59746C0.792347 6.67729 0.809079 6.75615 0.84075 6.82943C0.872421 6.9027 0.918394 6.96892 0.975978 7.02421L5.17598 11.2242C5.2885 11.3367 5.44109 11.3999 5.6002 11.3999C5.7593 11.3999 5.91189 11.3367 6.02442 11.2242L15.6244 1.62421C15.7111 1.53993 15.7703 1.43143 15.7943 1.31292C15.8183 1.19441 15.8059 1.07141 15.7588 0.960063C15.7117 0.848712 15.632 0.754194 15.5302 0.688897C15.4285 0.623599 15.3093 0.590569 15.1885 0.594133Z" fill="#00DD73"/>
      </svg>
</p>
  </div>
  <div class="info__helper">
      <h2 class="info__title">${text}</h2>
        <div class="info__helper">
          <p class="info__text">${formatText(text)}
          </p>
          <div class=info__meta>
            <p class="info__date">${date}
            </p>
            <a class="info__link" target="_blank" href="${url}">Read more
            </a>
          </div>
        </div>
  </div>
   
</li>`;
}
function renderWeather({ temp , icon , main , name  }) {
    return `<li class="card__item card__item__weather">
    <div class="weather__container">
      <div class="weather__info">
        <span class="weather__temp">${temp}°</span>
        <div class="weather__location">
          <p class="weather__desc">${main}</p>
          <div class="weather__city">
            <svg width="19" height="25" viewBox="0 0 19 25" fill="" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.50001 0.6875C7.03936 0.690403 4.68032 1.66918 2.94038 3.40912C1.20044 5.14906 0.221663 7.5081 0.21876 9.96875C0.215813 11.9796 0.87265 13.9359 2.08851 15.5375C2.08851 15.5375 2.34163 15.8708 2.38298 15.9189L9.50001 24.3125L16.6204 15.9147C16.6575 15.8699 16.9115 15.5375 16.9115 15.5375L16.9124 15.535C18.1276 13.934 18.7841 11.9787 18.7813 9.96875C18.7784 7.5081 17.7996 5.14906 16.0596 3.40912C14.3197 1.66918 11.9607 0.690403 9.50001 0.6875ZM9.50001 13.3438C8.8325 13.3438 8.17998 13.1458 7.62496 12.775C7.06994 12.4041 6.63736 11.877 6.38192 11.2603C6.12647 10.6436 6.05963 9.96501 6.18986 9.31032C6.32008 8.65563 6.64152 8.05427 7.11352 7.58226C7.58553 7.11026 8.18689 6.78882 8.84158 6.6586C9.49627 6.52837 10.1749 6.59521 10.7916 6.85066C11.4083 7.1061 11.9354 7.53868 12.3062 8.0937C12.6771 8.64872 12.875 9.30124 12.875 9.96875C12.8739 10.8635 12.518 11.7213 11.8853 12.354C11.2526 12.9867 10.3948 13.3426 9.50001 13.3438Z" fill="white"/>
            </svg>
            <span class="weather__city-name">${name}</span>
          </div>
        </div>
      </div>
      <img
        src="http://openweathermap.org/img/wn/${icon}@4x.png"
        alt="Weather Icon"
        class="weather__img"
      />
      <div class="weather__date">
        <p class="weather__day">${(0, _formatDefault.default)(new Date(), "eee")}</p>
        <p class="weather__year">${(0, _formatDefault.default)(new Date(), "dd LLL y")}</p>
      </div>
      <a
        href="https://www.accuweather.com/"
        class="weather__link"
        target="_blank"

        rel="noreferrer noopener"
        >weather for week</a>
    </div>
</li>`;
}
function renderAccordion(date) {
    return `<div class="accord__title"> 
  <div class="date__cont">
      <p class="date">${date}</p>
      <span class="accord__arrow">
          <svg class="arrow-js" width="15" height="9" viewBox="0 0 15 9" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.7625 9.53674e-07L0 1.71255L7.5 9L15 1.71255L13.2375 9.53674e-07L7.5 5.56275L1.7625 9.53674e-07Z" fill=""/>
          </svg>
        </span>
      
  </div>
  <span class="line"></span>
  `;
}
function formatText(text) {
    let result;
    // Change code below this line
    if (text.length > _const.MAXLENGHT) {
        text = text.slice(0, _const.MAXLENGHT);
        result = text + "...";
    } else result = text;
    return result;
}
function clear(item) {
    item.innerHTML = "";
}

},{"date-fns/format":"lnm6V","./const":"jgw4B","./storageLogic":"cLxmJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lnm6V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../isValid/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../subMilliseconds/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../toDate/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../_lib/format/formatters/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../_lib/format/longFormatters/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("../_lib/getTimezoneOffsetInMilliseconds/index.js");
var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs5);
var _indexJs6 = require("../_lib/protectedTokens/index.js");
var _indexJs7 = require("../_lib/toInteger/index.js");
var _indexJsDefault6 = parcelHelpers.interopDefault(_indexJs7);
var _indexJs8 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault7 = parcelHelpers.interopDefault(_indexJs8);
var _indexJs9 = require("../_lib/defaultOptions/index.js");
var _indexJs10 = require("../_lib/defaultLocale/index.js"); // This RegExp consists of three parts separated by `|`:
var _indexJsDefault8 = parcelHelpers.interopDefault(_indexJs10);
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function format(dirtyDate, dirtyFormatStr, options) {
    var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
    (0, _indexJsDefault7.default)(2, arguments);
    var formatStr = String(dirtyFormatStr);
    var defaultOptions = (0, _indexJs9.getDefaultOptions)();
    var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : (0, _indexJsDefault8.default);
    var firstWeekContainsDate = (0, _indexJsDefault6.default)((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var weekStartsOn = (0, _indexJsDefault6.default)((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if (!locale.localize) throw new RangeError("locale must contain localize property");
    if (!locale.formatLong) throw new RangeError("locale must contain formatLong property");
    var originalDate = (0, _indexJsDefault2.default)(dirtyDate);
    if (!(0, _indexJsDefault.default)(originalDate)) throw new RangeError("Invalid time value");
     // Convert the date in system timezone to the same date in UTC+00:00 timezone.
    // This ensures that when UTC functions will be implemented, locales will be compatible with them.
    // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
    var timezoneOffset = (0, _indexJsDefault5.default)(originalDate);
    var utcDate = (0, _indexJsDefault1.default)(originalDate, timezoneOffset);
    var formatterOptions = {
        firstWeekContainsDate: firstWeekContainsDate,
        weekStartsOn: weekStartsOn,
        locale: locale,
        _originalDate: originalDate
    };
    var result = formatStr.match(longFormattingTokensRegExp).map(function(substring) {
        var firstCharacter = substring[0];
        if (firstCharacter === "p" || firstCharacter === "P") {
            var longFormatter = (0, _indexJsDefault4.default)[firstCharacter];
            return longFormatter(substring, locale.formatLong);
        }
        return substring;
    }).join("").match(formattingTokensRegExp).map(function(substring) {
        // Replace two single quote characters with one single quote character
        if (substring === "''") return "'";
        var firstCharacter = substring[0];
        if (firstCharacter === "'") return cleanEscapedString(substring);
        var formatter = (0, _indexJsDefault3.default)[firstCharacter];
        if (formatter) {
            if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0, _indexJs6.isProtectedWeekYearToken)(substring)) (0, _indexJs6.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
            if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0, _indexJs6.isProtectedDayOfYearToken)(substring)) (0, _indexJs6.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
            return formatter(utcDate, substring, locale.localize, formatterOptions);
        }
        if (firstCharacter.match(unescapedLatinCharacterRegExp)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
        return substring;
    }).join("");
    return result;
}
exports.default = format;
function cleanEscapedString(input) {
    var matched = input.match(escapedStringRegExp);
    if (!matched) return input;
    return matched[1].replace(doubleQuoteRegExp, "'");
}

},{"../isValid/index.js":"eXoMl","../subMilliseconds/index.js":"lL2M9","../toDate/index.js":"fsust","../_lib/format/formatters/index.js":"3cYKM","../_lib/format/longFormatters/index.js":"1ztit","../_lib/getTimezoneOffsetInMilliseconds/index.js":"bc74C","../_lib/protectedTokens/index.js":"4R0Xq","../_lib/toInteger/index.js":"f7kKX","../_lib/requiredArgs/index.js":"9wUgQ","../_lib/defaultOptions/index.js":"dWs8l","../_lib/defaultLocale/index.js":"1rVeP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eXoMl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../isDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function isValid(dirtyDate) {
    (0, _indexJsDefault2.default)(1, arguments);
    if (!(0, _indexJsDefault.default)(dirtyDate) && typeof dirtyDate !== "number") return false;
    var date = (0, _indexJsDefault1.default)(dirtyDate);
    return !isNaN(Number(date));
}
exports.default = isValid;

},{"../isDate/index.js":"kqNhT","../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kqNhT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function isDate(value) {
    (0, _indexJsDefault.default)(1, arguments);
    return value instanceof Date || _typeof(value) === "object" && Object.prototype.toString.call(value) === "[object Date]";
}
exports.default = isDate;

},{"../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9wUgQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function requiredArgs(required, args) {
    if (args.length < required) throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
}
exports.default = requiredArgs;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fsust":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/requiredArgs/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function toDate(argument) {
    (0, _indexJsDefault.default)(1, arguments);
    var argStr = Object.prototype.toString.call(argument); // Clone the date
    if (argument instanceof Date || _typeof(argument) === "object" && argStr === "[object Date]") // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
    else if (typeof argument === "number" || argStr === "[object Number]") return new Date(argument);
    else {
        if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
            // eslint-disable-next-line no-console
            console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console
            console.warn(new Error().stack);
        }
        return new Date(NaN);
    }
}
exports.default = toDate;

},{"../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lL2M9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../addMilliseconds/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/toInteger/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function subMilliseconds(dirtyDate, dirtyAmount) {
    (0, _indexJsDefault1.default)(2, arguments);
    var amount = (0, _indexJsDefault2.default)(dirtyAmount);
    return (0, _indexJsDefault.default)(dirtyDate, -amount);
}
exports.default = subMilliseconds;

},{"../addMilliseconds/index.js":"7Tp9s","../_lib/requiredArgs/index.js":"9wUgQ","../_lib/toInteger/index.js":"f7kKX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Tp9s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../_lib/toInteger/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../toDate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../_lib/requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function addMilliseconds(dirtyDate, dirtyAmount) {
    (0, _indexJsDefault2.default)(2, arguments);
    var timestamp = (0, _indexJsDefault1.default)(dirtyDate).getTime();
    var amount = (0, _indexJsDefault.default)(dirtyAmount);
    return new Date(timestamp + amount);
}
exports.default = addMilliseconds;

},{"../_lib/toInteger/index.js":"f7kKX","../toDate/index.js":"fsust","../_lib/requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f7kKX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function toInteger(dirtyNumber) {
    if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) return NaN;
    var number = Number(dirtyNumber);
    if (isNaN(number)) return number;
    return number < 0 ? Math.ceil(number) : Math.floor(number);
}
exports.default = toInteger;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3cYKM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../../_lib/getUTCDayOfYear/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../../../_lib/getUTCISOWeek/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../../../_lib/getUTCISOWeekYear/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../../../_lib/getUTCWeek/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../../../_lib/getUTCWeekYear/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("../../addLeadingZeros/index.js");
var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs5);
var _indexJs6 = require("../lightFormatters/index.js");
var _indexJsDefault6 = parcelHelpers.interopDefault(_indexJs6);
var dayPeriodEnum = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */ var formatters = {
    // Era
    G: function G(date, token, localize) {
        var era = date.getUTCFullYear() > 0 ? 1 : 0;
        switch(token){
            // AD, BC
            case "G":
            case "GG":
            case "GGG":
                return localize.era(era, {
                    width: "abbreviated"
                });
            // A, B
            case "GGGGG":
                return localize.era(era, {
                    width: "narrow"
                });
            // Anno Domini, Before Christ
            case "GGGG":
            default:
                return localize.era(era, {
                    width: "wide"
                });
        }
    },
    // Year
    y: function y(date, token, localize) {
        // Ordinal number
        if (token === "yo") {
            var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)
            var year = signedYear > 0 ? signedYear : 1 - signedYear;
            return localize.ordinalNumber(year, {
                unit: "year"
            });
        }
        return (0, _indexJsDefault6.default).y(date, token);
    },
    // Local week-numbering year
    Y: function Y(date, token, localize, options) {
        var signedWeekYear = (0, _indexJsDefault4.default)(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)
        var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year
        if (token === "YY") {
            var twoDigitYear = weekYear % 100;
            return (0, _indexJsDefault5.default)(twoDigitYear, 2);
        } // Ordinal number
        if (token === "Yo") return localize.ordinalNumber(weekYear, {
            unit: "year"
        });
         // Padding
        return (0, _indexJsDefault5.default)(weekYear, token.length);
    },
    // ISO week-numbering year
    R: function R(date, token) {
        var isoWeekYear = (0, _indexJsDefault2.default)(date); // Padding
        return (0, _indexJsDefault5.default)(isoWeekYear, token.length);
    },
    // Extended year. This is a single number designating the year of this calendar system.
    // The main difference between `y` and `u` localizers are B.C. years:
    // | Year | `y` | `u` |
    // |------|-----|-----|
    // | AC 1 |   1 |   1 |
    // | BC 1 |   1 |   0 |
    // | BC 2 |   2 |  -1 |
    // Also `yy` always returns the last two digits of a year,
    // while `uu` pads single digit years to 2 characters and returns other years unchanged.
    u: function u(date, token) {
        var year = date.getUTCFullYear();
        return (0, _indexJsDefault5.default)(year, token.length);
    },
    // Quarter
    Q: function Q(date, token, localize) {
        var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
        switch(token){
            // 1, 2, 3, 4
            case "Q":
                return String(quarter);
            // 01, 02, 03, 04
            case "QQ":
                return (0, _indexJsDefault5.default)(quarter, 2);
            // 1st, 2nd, 3rd, 4th
            case "Qo":
                return localize.ordinalNumber(quarter, {
                    unit: "quarter"
                });
            // Q1, Q2, Q3, Q4
            case "QQQ":
                return localize.quarter(quarter, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case "QQQQQ":
                return localize.quarter(quarter, {
                    width: "narrow",
                    context: "formatting"
                });
            // 1st quarter, 2nd quarter, ...
            case "QQQQ":
            default:
                return localize.quarter(quarter, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone quarter
    q: function q(date, token, localize) {
        var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
        switch(token){
            // 1, 2, 3, 4
            case "q":
                return String(quarter);
            // 01, 02, 03, 04
            case "qq":
                return (0, _indexJsDefault5.default)(quarter, 2);
            // 1st, 2nd, 3rd, 4th
            case "qo":
                return localize.ordinalNumber(quarter, {
                    unit: "quarter"
                });
            // Q1, Q2, Q3, Q4
            case "qqq":
                return localize.quarter(quarter, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case "qqqqq":
                return localize.quarter(quarter, {
                    width: "narrow",
                    context: "standalone"
                });
            // 1st quarter, 2nd quarter, ...
            case "qqqq":
            default:
                return localize.quarter(quarter, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // Month
    M: function M(date, token, localize) {
        var month = date.getUTCMonth();
        switch(token){
            case "M":
            case "MM":
                return (0, _indexJsDefault6.default).M(date, token);
            // 1st, 2nd, ..., 12th
            case "Mo":
                return localize.ordinalNumber(month + 1, {
                    unit: "month"
                });
            // Jan, Feb, ..., Dec
            case "MMM":
                return localize.month(month, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // J, F, ..., D
            case "MMMMM":
                return localize.month(month, {
                    width: "narrow",
                    context: "formatting"
                });
            // January, February, ..., December
            case "MMMM":
            default:
                return localize.month(month, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone month
    L: function L(date, token, localize) {
        var month = date.getUTCMonth();
        switch(token){
            // 1, 2, ..., 12
            case "L":
                return String(month + 1);
            // 01, 02, ..., 12
            case "LL":
                return (0, _indexJsDefault5.default)(month + 1, 2);
            // 1st, 2nd, ..., 12th
            case "Lo":
                return localize.ordinalNumber(month + 1, {
                    unit: "month"
                });
            // Jan, Feb, ..., Dec
            case "LLL":
                return localize.month(month, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // J, F, ..., D
            case "LLLLL":
                return localize.month(month, {
                    width: "narrow",
                    context: "standalone"
                });
            // January, February, ..., December
            case "LLLL":
            default:
                return localize.month(month, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // Local week of year
    w: function w(date, token, localize, options) {
        var week = (0, _indexJsDefault3.default)(date, options);
        if (token === "wo") return localize.ordinalNumber(week, {
            unit: "week"
        });
        return (0, _indexJsDefault5.default)(week, token.length);
    },
    // ISO week of year
    I: function I(date, token, localize) {
        var isoWeek = (0, _indexJsDefault1.default)(date);
        if (token === "Io") return localize.ordinalNumber(isoWeek, {
            unit: "week"
        });
        return (0, _indexJsDefault5.default)(isoWeek, token.length);
    },
    // Day of the month
    d: function d(date, token, localize) {
        if (token === "do") return localize.ordinalNumber(date.getUTCDate(), {
            unit: "date"
        });
        return (0, _indexJsDefault6.default).d(date, token);
    },
    // Day of year
    D: function D(date, token, localize) {
        var dayOfYear = (0, _indexJsDefault.default)(date);
        if (token === "Do") return localize.ordinalNumber(dayOfYear, {
            unit: "dayOfYear"
        });
        return (0, _indexJsDefault5.default)(dayOfYear, token.length);
    },
    // Day of week
    E: function E(date, token, localize) {
        var dayOfWeek = date.getUTCDay();
        switch(token){
            // Tue
            case "E":
            case "EE":
            case "EEE":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "EEEEE":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "EEEEEE":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "EEEE":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Local day of week
    e: function e(date, token, localize, options) {
        var dayOfWeek = date.getUTCDay();
        var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch(token){
            // Numerical value (Nth day of week with current locale or weekStartsOn)
            case "e":
                return String(localDayOfWeek);
            // Padded numerical value
            case "ee":
                return (0, _indexJsDefault5.default)(localDayOfWeek, 2);
            // 1st, 2nd, ..., 7th
            case "eo":
                return localize.ordinalNumber(localDayOfWeek, {
                    unit: "day"
                });
            case "eee":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "eeeee":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "eeeeee":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "eeee":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone local day of week
    c: function c(date, token, localize, options) {
        var dayOfWeek = date.getUTCDay();
        var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch(token){
            // Numerical value (same as in `e`)
            case "c":
                return String(localDayOfWeek);
            // Padded numerical value
            case "cc":
                return (0, _indexJsDefault5.default)(localDayOfWeek, token.length);
            // 1st, 2nd, ..., 7th
            case "co":
                return localize.ordinalNumber(localDayOfWeek, {
                    unit: "day"
                });
            case "ccc":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // T
            case "ccccc":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "standalone"
                });
            // Tu
            case "cccccc":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "standalone"
                });
            // Tuesday
            case "cccc":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // ISO day of week
    i: function i(date, token, localize) {
        var dayOfWeek = date.getUTCDay();
        var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
        switch(token){
            // 2
            case "i":
                return String(isoDayOfWeek);
            // 02
            case "ii":
                return (0, _indexJsDefault5.default)(isoDayOfWeek, token.length);
            // 2nd
            case "io":
                return localize.ordinalNumber(isoDayOfWeek, {
                    unit: "day"
                });
            // Tue
            case "iii":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "iiiii":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "iiiiii":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "iiii":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // AM or PM
    a: function a(date, token, localize) {
        var hours = date.getUTCHours();
        var dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
        switch(token){
            case "a":
            case "aa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "aaa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                }).toLowerCase();
            case "aaaaa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "aaaa":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // AM, PM, midnight, noon
    b: function b(date, token, localize) {
        var hours = date.getUTCHours();
        var dayPeriodEnumValue;
        if (hours === 12) dayPeriodEnumValue = dayPeriodEnum.noon;
        else if (hours === 0) dayPeriodEnumValue = dayPeriodEnum.midnight;
        else dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
        switch(token){
            case "b":
            case "bb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "bbb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                }).toLowerCase();
            case "bbbbb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "bbbb":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // in the morning, in the afternoon, in the evening, at night
    B: function B(date, token, localize) {
        var hours = date.getUTCHours();
        var dayPeriodEnumValue;
        if (hours >= 17) dayPeriodEnumValue = dayPeriodEnum.evening;
        else if (hours >= 12) dayPeriodEnumValue = dayPeriodEnum.afternoon;
        else if (hours >= 4) dayPeriodEnumValue = dayPeriodEnum.morning;
        else dayPeriodEnumValue = dayPeriodEnum.night;
        switch(token){
            case "B":
            case "BB":
            case "BBB":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "BBBBB":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "BBBB":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Hour [1-12]
    h: function h(date, token, localize) {
        if (token === "ho") {
            var hours = date.getUTCHours() % 12;
            if (hours === 0) hours = 12;
            return localize.ordinalNumber(hours, {
                unit: "hour"
            });
        }
        return (0, _indexJsDefault6.default).h(date, token);
    },
    // Hour [0-23]
    H: function H(date, token, localize) {
        if (token === "Ho") return localize.ordinalNumber(date.getUTCHours(), {
            unit: "hour"
        });
        return (0, _indexJsDefault6.default).H(date, token);
    },
    // Hour [0-11]
    K: function K(date, token, localize) {
        var hours = date.getUTCHours() % 12;
        if (token === "Ko") return localize.ordinalNumber(hours, {
            unit: "hour"
        });
        return (0, _indexJsDefault5.default)(hours, token.length);
    },
    // Hour [1-24]
    k: function k(date, token, localize) {
        var hours = date.getUTCHours();
        if (hours === 0) hours = 24;
        if (token === "ko") return localize.ordinalNumber(hours, {
            unit: "hour"
        });
        return (0, _indexJsDefault5.default)(hours, token.length);
    },
    // Minute
    m: function m(date, token, localize) {
        if (token === "mo") return localize.ordinalNumber(date.getUTCMinutes(), {
            unit: "minute"
        });
        return (0, _indexJsDefault6.default).m(date, token);
    },
    // Second
    s: function s(date, token, localize) {
        if (token === "so") return localize.ordinalNumber(date.getUTCSeconds(), {
            unit: "second"
        });
        return (0, _indexJsDefault6.default).s(date, token);
    },
    // Fraction of second
    S: function S(date, token) {
        return (0, _indexJsDefault6.default).S(date, token);
    },
    // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
    X: function X(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        if (timezoneOffset === 0) return "Z";
        switch(token){
            // Hours and optional minutes
            case "X":
                return formatTimezoneWithOptionalMinutes(timezoneOffset);
            // Hours, minutes and optional seconds without `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `XX`
            case "XXXX":
            case "XX":
                // Hours and minutes without `:` delimiter
                return formatTimezone(timezoneOffset);
            // Hours, minutes and optional seconds with `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `XXX`
            case "XXXXX":
            case "XXX":
            default:
                return formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
    x: function x(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        switch(token){
            // Hours and optional minutes
            case "x":
                return formatTimezoneWithOptionalMinutes(timezoneOffset);
            // Hours, minutes and optional seconds without `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `xx`
            case "xxxx":
            case "xx":
                // Hours and minutes without `:` delimiter
                return formatTimezone(timezoneOffset);
            // Hours, minutes and optional seconds with `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `xxx`
            case "xxxxx":
            case "xxx":
            default:
                return formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (GMT)
    O: function O(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        switch(token){
            // Short
            case "O":
            case "OO":
            case "OOO":
                return "GMT" + formatTimezoneShort(timezoneOffset, ":");
            // Long
            case "OOOO":
            default:
                return "GMT" + formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (specific non-location)
    z: function z(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        switch(token){
            // Short
            case "z":
            case "zz":
            case "zzz":
                return "GMT" + formatTimezoneShort(timezoneOffset, ":");
            // Long
            case "zzzz":
            default:
                return "GMT" + formatTimezone(timezoneOffset, ":");
        }
    },
    // Seconds timestamp
    t: function t(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timestamp = Math.floor(originalDate.getTime() / 1000);
        return (0, _indexJsDefault5.default)(timestamp, token.length);
    },
    // Milliseconds timestamp
    T: function T(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timestamp = originalDate.getTime();
        return (0, _indexJsDefault5.default)(timestamp, token.length);
    }
};
function formatTimezoneShort(offset, dirtyDelimiter) {
    var sign = offset > 0 ? "-" : "+";
    var absOffset = Math.abs(offset);
    var hours = Math.floor(absOffset / 60);
    var minutes = absOffset % 60;
    if (minutes === 0) return sign + String(hours);
    var delimiter = dirtyDelimiter || "";
    return sign + String(hours) + delimiter + (0, _indexJsDefault5.default)(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
    if (offset % 60 === 0) {
        var sign = offset > 0 ? "-" : "+";
        return sign + (0, _indexJsDefault5.default)(Math.abs(offset) / 60, 2);
    }
    return formatTimezone(offset, dirtyDelimiter);
}
function formatTimezone(offset, dirtyDelimiter) {
    var delimiter = dirtyDelimiter || "";
    var sign = offset > 0 ? "-" : "+";
    var absOffset = Math.abs(offset);
    var hours = (0, _indexJsDefault5.default)(Math.floor(absOffset / 60), 2);
    var minutes = (0, _indexJsDefault5.default)(absOffset % 60, 2);
    return sign + hours + delimiter + minutes;
}
exports.default = formatters;

},{"../../../_lib/getUTCDayOfYear/index.js":"7wqIf","../../../_lib/getUTCISOWeek/index.js":"4nEkI","../../../_lib/getUTCISOWeekYear/index.js":"03QaQ","../../../_lib/getUTCWeek/index.js":"b7GgV","../../../_lib/getUTCWeekYear/index.js":"8i6st","../../addLeadingZeros/index.js":"6pP6x","../lightFormatters/index.js":"9oZiA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7wqIf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var timestamp = date.getTime();
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
    var startOfYearTimestamp = date.getTime();
    var difference = timestamp - startOfYearTimestamp;
    return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}
exports.default = getUTCDayOfYear;

},{"../../toDate/index.js":"fsust","../requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4nEkI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfUTCISOWeek/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../startOfUTCISOWeekYear/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var MILLISECONDS_IN_WEEK = 604800000;
function getUTCISOWeek(dirtyDate) {
    (0, _indexJsDefault3.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var diff = (0, _indexJsDefault1.default)(date).getTime() - (0, _indexJsDefault2.default)(date).getTime(); // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)
    return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}
exports.default = getUTCISOWeek;

},{"../../toDate/index.js":"fsust","../startOfUTCISOWeek/index.js":"3ta4C","../startOfUTCISOWeekYear/index.js":"4u8O6","../requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3ta4C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
function startOfUTCISOWeek(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var weekStartsOn = 1;
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var day = date.getUTCDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setUTCDate(date.getUTCDate() - diff);
    date.setUTCHours(0, 0, 0, 0);
    return date;
}
exports.default = startOfUTCISOWeek;

},{"../../toDate/index.js":"fsust","../requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4u8O6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../getUTCISOWeekYear/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfUTCISOWeek/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../requiredArgs/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function startOfUTCISOWeekYear(dirtyDate) {
    (0, _indexJsDefault2.default)(1, arguments);
    var year = (0, _indexJsDefault.default)(dirtyDate);
    var fourthOfJanuary = new Date(0);
    fourthOfJanuary.setUTCFullYear(year, 0, 4);
    fourthOfJanuary.setUTCHours(0, 0, 0, 0);
    var date = (0, _indexJsDefault1.default)(fourthOfJanuary);
    return date;
}
exports.default = startOfUTCISOWeekYear;

},{"../getUTCISOWeekYear/index.js":"03QaQ","../startOfUTCISOWeek/index.js":"3ta4C","../requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"03QaQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../startOfUTCISOWeek/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
function getUTCISOWeekYear(dirtyDate) {
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var year = date.getUTCFullYear();
    var fourthOfJanuaryOfNextYear = new Date(0);
    fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
    var startOfNextYear = (0, _indexJsDefault2.default)(fourthOfJanuaryOfNextYear);
    var fourthOfJanuaryOfThisYear = new Date(0);
    fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
    fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
    var startOfThisYear = (0, _indexJsDefault2.default)(fourthOfJanuaryOfThisYear);
    if (date.getTime() >= startOfNextYear.getTime()) return year + 1;
    else if (date.getTime() >= startOfThisYear.getTime()) return year;
    else return year - 1;
}
exports.default = getUTCISOWeekYear;

},{"../../toDate/index.js":"fsust","../requiredArgs/index.js":"9wUgQ","../startOfUTCISOWeek/index.js":"3ta4C","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b7GgV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../startOfUTCWeek/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../startOfUTCWeekYear/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../requiredArgs/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
    (0, _indexJsDefault3.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var diff = (0, _indexJsDefault1.default)(date, options).getTime() - (0, _indexJsDefault2.default)(date, options).getTime(); // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)
    return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}
exports.default = getUTCWeek;

},{"../../toDate/index.js":"fsust","../startOfUTCWeek/index.js":"dDZbE","../startOfUTCWeekYear/index.js":"bJAVl","../requiredArgs/index.js":"9wUgQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dDZbE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../toInteger/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../defaultOptions/index.js");
function startOfUTCWeek(dirtyDate, options) {
    var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    (0, _indexJsDefault1.default)(1, arguments);
    var defaultOptions = (0, _indexJs3.getDefaultOptions)();
    var weekStartsOn = (0, _indexJsDefault2.default)((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var day = date.getUTCDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setUTCDate(date.getUTCDate() - diff);
    date.setUTCHours(0, 0, 0, 0);
    return date;
}
exports.default = startOfUTCWeek;

},{"../../toDate/index.js":"fsust","../requiredArgs/index.js":"9wUgQ","../toInteger/index.js":"f7kKX","../defaultOptions/index.js":"dWs8l","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dWs8l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDefaultOptions", ()=>getDefaultOptions);
parcelHelpers.export(exports, "setDefaultOptions", ()=>setDefaultOptions);
var defaultOptions = {};
function getDefaultOptions() {
    return defaultOptions;
}
function setDefaultOptions(newOptions) {
    defaultOptions = newOptions;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bJAVl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../getUTCWeekYear/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../startOfUTCWeek/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../toInteger/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../defaultOptions/index.js");
function startOfUTCWeekYear(dirtyDate, options) {
    var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    (0, _indexJsDefault1.default)(1, arguments);
    var defaultOptions = (0, _indexJs4.getDefaultOptions)();
    var firstWeekContainsDate = (0, _indexJsDefault3.default)((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
    var year = (0, _indexJsDefault.default)(dirtyDate, options);
    var firstWeek = new Date(0);
    firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
    firstWeek.setUTCHours(0, 0, 0, 0);
    var date = (0, _indexJsDefault2.default)(firstWeek, options);
    return date;
}
exports.default = startOfUTCWeekYear;

},{"../getUTCWeekYear/index.js":"8i6st","../requiredArgs/index.js":"9wUgQ","../startOfUTCWeek/index.js":"dDZbE","../toInteger/index.js":"f7kKX","../defaultOptions/index.js":"dWs8l","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8i6st":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../toDate/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../requiredArgs/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("../startOfUTCWeek/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("../toInteger/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("../defaultOptions/index.js");
function getUTCWeekYear(dirtyDate, options) {
    var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    (0, _indexJsDefault1.default)(1, arguments);
    var date = (0, _indexJsDefault.default)(dirtyDate);
    var year = date.getUTCFullYear();
    var defaultOptions = (0, _indexJs4.getDefaultOptions)();
    var firstWeekContainsDate = (0, _indexJsDefault3.default)((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var firstWeekOfNextYear = new Date(0);
    firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
    firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
    var startOfNextYear = (0, _indexJsDefault2.default)(firstWeekOfNextYear, options);
    var firstWeekOfThisYear = new Date(0);
    firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
    firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
    var startOfThisYear = (0, _indexJsDefault2.default)(firstWeekOfThisYear, options);
    if (date.getTime() >= startOfNextYear.getTime()) return year + 1;
    else if (date.getTime() >= startOfThisYear.getTime()) return year;
    else return year - 1;
}
exports.default = getUTCWeekYear;

},{"../../toDate/index.js":"fsust","../requiredArgs/index.js":"9wUgQ","../startOfUTCWeek/index.js":"dDZbE","../toInteger/index.js":"f7kKX","../defaultOptions/index.js":"dWs8l","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6pP6x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function addLeadingZeros(number, targetLength) {
    var sign = number < 0 ? "-" : "";
    var output = Math.abs(number).toString();
    while(output.length < targetLength)output = "0" + output;
    return sign + output;
}
exports.default = addLeadingZeros;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9oZiA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../addLeadingZeros/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */ var formatters = {
    // Year
    y: function y(date, token) {
        // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
        // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
        // |----------|-------|----|-------|-------|-------|
        // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
        // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
        // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
        // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
        // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
        var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)
        var year = signedYear > 0 ? signedYear : 1 - signedYear;
        return (0, _indexJsDefault.default)(token === "yy" ? year % 100 : year, token.length);
    },
    // Month
    M: function M(date, token) {
        var month = date.getUTCMonth();
        return token === "M" ? String(month + 1) : (0, _indexJsDefault.default)(month + 1, 2);
    },
    // Day of the month
    d: function d(date, token) {
        return (0, _indexJsDefault.default)(date.getUTCDate(), token.length);
    },
    // AM or PM
    a: function a(date, token) {
        var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? "pm" : "am";
        switch(token){
            case "a":
            case "aa":
                return dayPeriodEnumValue.toUpperCase();
            case "aaa":
                return dayPeriodEnumValue;
            case "aaaaa":
                return dayPeriodEnumValue[0];
            case "aaaa":
            default:
                return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
        }
    },
    // Hour [1-12]
    h: function h(date, token) {
        return (0, _indexJsDefault.default)(date.getUTCHours() % 12 || 12, token.length);
    },
    // Hour [0-23]
    H: function H(date, token) {
        return (0, _indexJsDefault.default)(date.getUTCHours(), token.length);
    },
    // Minute
    m: function m(date, token) {
        return (0, _indexJsDefault.default)(date.getUTCMinutes(), token.length);
    },
    // Second
    s: function s(date, token) {
        return (0, _indexJsDefault.default)(date.getUTCSeconds(), token.length);
    },
    // Fraction of second
    S: function S(date, token) {
        var numberOfDigits = token.length;
        var milliseconds = date.getUTCMilliseconds();
        var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
        return (0, _indexJsDefault.default)(fractionalSeconds, token.length);
    }
};
exports.default = formatters;

},{"../../addLeadingZeros/index.js":"6pP6x","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1ztit":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var dateLongFormatter = function dateLongFormatter(pattern, formatLong) {
    switch(pattern){
        case "P":
            return formatLong.date({
                width: "short"
            });
        case "PP":
            return formatLong.date({
                width: "medium"
            });
        case "PPP":
            return formatLong.date({
                width: "long"
            });
        case "PPPP":
        default:
            return formatLong.date({
                width: "full"
            });
    }
};
var timeLongFormatter = function timeLongFormatter(pattern, formatLong) {
    switch(pattern){
        case "p":
            return formatLong.time({
                width: "short"
            });
        case "pp":
            return formatLong.time({
                width: "medium"
            });
        case "ppp":
            return formatLong.time({
                width: "long"
            });
        case "pppp":
        default:
            return formatLong.time({
                width: "full"
            });
    }
};
var dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {
    var matchResult = pattern.match(/(P+)(p+)?/) || [];
    var datePattern = matchResult[1];
    var timePattern = matchResult[2];
    if (!timePattern) return dateLongFormatter(pattern, formatLong);
    var dateTimeFormat;
    switch(datePattern){
        case "P":
            dateTimeFormat = formatLong.dateTime({
                width: "short"
            });
            break;
        case "PP":
            dateTimeFormat = formatLong.dateTime({
                width: "medium"
            });
            break;
        case "PPP":
            dateTimeFormat = formatLong.dateTime({
                width: "long"
            });
            break;
        case "PPPP":
        default:
            dateTimeFormat = formatLong.dateTime({
                width: "full"
            });
            break;
    }
    return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong)).replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};
var longFormatters = {
    p: timeLongFormatter,
    P: dateTimeLongFormatter
};
exports.default = longFormatters;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bc74C":[function(require,module,exports) {
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getTimezoneOffsetInMilliseconds(date) {
    var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
    utcDate.setUTCFullYear(date.getFullYear());
    return date.getTime() - utcDate.getTime();
}
exports.default = getTimezoneOffsetInMilliseconds;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4R0Xq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isProtectedDayOfYearToken", ()=>isProtectedDayOfYearToken);
parcelHelpers.export(exports, "isProtectedWeekYearToken", ()=>isProtectedWeekYearToken);
parcelHelpers.export(exports, "throwProtectedError", ()=>throwProtectedError);
var protectedDayOfYearTokens = [
    "D",
    "DD"
];
var protectedWeekYearTokens = [
    "YY",
    "YYYY"
];
function isProtectedDayOfYearToken(token) {
    return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
    return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
    if (token === "YYYY") throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    else if (token === "YY") throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    else if (token === "D") throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    else if (token === "DD") throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1rVeP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../locale/en-US/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
exports.default = (0, _indexJsDefault.default);

},{"../../locale/en-US/index.js":"8XKCq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8XKCq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./_lib/formatDistance/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("./_lib/formatLong/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("./_lib/formatRelative/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("./_lib/localize/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("./_lib/match/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */ var locale = {
    code: "en-US",
    formatDistance: (0, _indexJsDefault.default),
    formatLong: (0, _indexJsDefault1.default),
    formatRelative: (0, _indexJsDefault2.default),
    localize: (0, _indexJsDefault3.default),
    match: (0, _indexJsDefault4.default),
    options: {
        weekStartsOn: 0,
        firstWeekContainsDate: 1
    }
};
exports.default = locale;

},{"./_lib/formatDistance/index.js":"lLrcE","./_lib/formatLong/index.js":"cA6Xb","./_lib/formatRelative/index.js":"9QlMp","./_lib/localize/index.js":"jv1Fa","./_lib/match/index.js":"1wA2o","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lLrcE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds"
    },
    xSeconds: {
        one: "1 second",
        other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes"
    },
    xMinutes: {
        one: "1 minute",
        other: "{{count}} minutes"
    },
    aboutXHours: {
        one: "about 1 hour",
        other: "about {{count}} hours"
    },
    xHours: {
        one: "1 hour",
        other: "{{count}} hours"
    },
    xDays: {
        one: "1 day",
        other: "{{count}} days"
    },
    aboutXWeeks: {
        one: "about 1 week",
        other: "about {{count}} weeks"
    },
    xWeeks: {
        one: "1 week",
        other: "{{count}} weeks"
    },
    aboutXMonths: {
        one: "about 1 month",
        other: "about {{count}} months"
    },
    xMonths: {
        one: "1 month",
        other: "{{count}} months"
    },
    aboutXYears: {
        one: "about 1 year",
        other: "about {{count}} years"
    },
    xYears: {
        one: "1 year",
        other: "{{count}} years"
    },
    overXYears: {
        one: "over 1 year",
        other: "over {{count}} years"
    },
    almostXYears: {
        one: "almost 1 year",
        other: "almost {{count}} years"
    }
};
var formatDistance = function formatDistance(token, count, options) {
    var result;
    var tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === "string") result = tokenValue;
    else if (count === 1) result = tokenValue.one;
    else result = tokenValue.other.replace("{{count}}", count.toString());
    if (options !== null && options !== void 0 && options.addSuffix) {
        if (options.comparison && options.comparison > 0) return "in " + result;
        else return result + " ago";
    }
    return result;
};
exports.default = formatDistance;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cA6Xb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../../_lib/buildFormatLongFn/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var dateFormats = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
};
var timeFormats = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
};
var dateTimeFormats = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
};
var formatLong = {
    date: (0, _indexJsDefault.default)({
        formats: dateFormats,
        defaultWidth: "full"
    }),
    time: (0, _indexJsDefault.default)({
        formats: timeFormats,
        defaultWidth: "full"
    }),
    dateTime: (0, _indexJsDefault.default)({
        formats: dateTimeFormats,
        defaultWidth: "full"
    })
};
exports.default = formatLong;

},{"../../../_lib/buildFormatLongFn/index.js":"h1FGd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h1FGd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function buildFormatLongFn(args) {
    return function() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        // TODO: Remove String()
        var width = options.width ? String(options.width) : args.defaultWidth;
        var format = args.formats[width] || args.formats[args.defaultWidth];
        return format;
    };
}
exports.default = buildFormatLongFn;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9QlMp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var formatRelativeLocale = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
};
var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
exports.default = formatRelative;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jv1Fa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../../_lib/buildLocalizeFn/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var eraValues = {
    narrow: [
        "B",
        "A"
    ],
    abbreviated: [
        "BC",
        "AD"
    ],
    wide: [
        "Before Christ",
        "Anno Domini"
    ]
};
var quarterValues = {
    narrow: [
        "1",
        "2",
        "3",
        "4"
    ],
    abbreviated: [
        "Q1",
        "Q2",
        "Q3",
        "Q4"
    ],
    wide: [
        "1st quarter",
        "2nd quarter",
        "3rd quarter",
        "4th quarter"
    ]
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
    narrow: [
        "J",
        "F",
        "M",
        "A",
        "M",
        "J",
        "J",
        "A",
        "S",
        "O",
        "N",
        "D"
    ],
    abbreviated: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ],
    wide: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
};
var dayValues = {
    narrow: [
        "S",
        "M",
        "T",
        "W",
        "T",
        "F",
        "S"
    ],
    short: [
        "Su",
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa"
    ],
    abbreviated: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ],
    wide: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
};
var dayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
    var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
    // if they are different for different grammatical genders,
    // use `options.unit`.
    //
    // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
    // 'day', 'hour', 'minute', 'second'.
    var rem100 = number % 100;
    if (rem100 > 20 || rem100 < 10) switch(rem100 % 10){
        case 1:
            return number + "st";
        case 2:
            return number + "nd";
        case 3:
            return number + "rd";
    }
    return number + "th";
};
var localize = {
    ordinalNumber: ordinalNumber,
    era: (0, _indexJsDefault.default)({
        values: eraValues,
        defaultWidth: "wide"
    }),
    quarter: (0, _indexJsDefault.default)({
        values: quarterValues,
        defaultWidth: "wide",
        argumentCallback: function argumentCallback(quarter) {
            return quarter - 1;
        }
    }),
    month: (0, _indexJsDefault.default)({
        values: monthValues,
        defaultWidth: "wide"
    }),
    day: (0, _indexJsDefault.default)({
        values: dayValues,
        defaultWidth: "wide"
    }),
    dayPeriod: (0, _indexJsDefault.default)({
        values: dayPeriodValues,
        defaultWidth: "wide",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide"
    })
};
exports.default = localize;

},{"../../../_lib/buildLocalizeFn/index.js":"5l2rZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5l2rZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function buildLocalizeFn(args) {
    return function(dirtyIndex, options) {
        var context = options !== null && options !== void 0 && options.context ? String(options.context) : "standalone";
        var valuesArray;
        if (context === "formatting" && args.formattingValues) {
            var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
            var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
            valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
        } else {
            var _defaultWidth = args.defaultWidth;
            var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
            valuesArray = args.values[_width] || args.values[_defaultWidth];
        }
        var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
        return valuesArray[index];
    };
}
exports.default = buildLocalizeFn;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1wA2o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../../_lib/buildMatchFn/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("../../../_lib/buildMatchPatternFn/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
    any: [
        /^b/i,
        /^(a|c)/i
    ]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
    any: [
        /1/i,
        /2/i,
        /3/i,
        /4/i
    ]
};
var matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
    narrow: [
        /^j/i,
        /^f/i,
        /^m/i,
        /^a/i,
        /^m/i,
        /^j/i,
        /^j/i,
        /^a/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ],
    any: [
        /^ja/i,
        /^f/i,
        /^mar/i,
        /^ap/i,
        /^may/i,
        /^jun/i,
        /^jul/i,
        /^au/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ]
};
var matchDayPatterns = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
    narrow: [
        /^s/i,
        /^m/i,
        /^t/i,
        /^w/i,
        /^t/i,
        /^f/i,
        /^s/i
    ],
    any: [
        /^su/i,
        /^m/i,
        /^tu/i,
        /^w/i,
        /^th/i,
        /^f/i,
        /^sa/i
    ]
};
var matchDayPeriodPatterns = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i
    }
};
var match = {
    ordinalNumber: (0, _indexJsDefault1.default)({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: function valueCallback(value) {
            return parseInt(value, 10);
        }
    }),
    era: (0, _indexJsDefault.default)({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseEraPatterns,
        defaultParseWidth: "any"
    }),
    quarter: (0, _indexJsDefault.default)({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: "any",
        valueCallback: function valueCallback(index) {
            return index + 1;
        }
    }),
    month: (0, _indexJsDefault.default)({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: "any"
    }),
    day: (0, _indexJsDefault.default)({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPatterns,
        defaultParseWidth: "any"
    }),
    dayPeriod: (0, _indexJsDefault.default)({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: "any",
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: "any"
    })
};
exports.default = match;

},{"../../../_lib/buildMatchFn/index.js":"2nEf9","../../../_lib/buildMatchPatternFn/index.js":"4GjCS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2nEf9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function buildMatchFn(args) {
    return function(string) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var width = options.width;
        var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
        var matchResult = string.match(matchPattern);
        if (!matchResult) return null;
        var matchedString = matchResult[0];
        var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
        var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function(pattern) {
            return pattern.test(matchedString);
        }) : findKey(parsePatterns, function(pattern) {
            return pattern.test(matchedString);
        });
        var value;
        value = args.valueCallback ? args.valueCallback(key) : key;
        value = options.valueCallback ? options.valueCallback(value) : value;
        var rest = string.slice(matchedString.length);
        return {
            value: value,
            rest: rest
        };
    };
}
exports.default = buildMatchFn;
function findKey(object, predicate) {
    for(var key in object){
        if (object.hasOwnProperty(key) && predicate(object[key])) return key;
    }
    return undefined;
}
function findIndex(array, predicate) {
    for(var key = 0; key < array.length; key++){
        if (predicate(array[key])) return key;
    }
    return undefined;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4GjCS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function buildMatchPatternFn(args) {
    return function(string) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var matchResult = string.match(args.matchPattern);
        if (!matchResult) return null;
        var matchedString = matchResult[0];
        var parseResult = string.match(args.parsePattern);
        if (!parseResult) return null;
        var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
        value = options.valueCallback ? options.valueCallback(value) : value;
        var rest = string.slice(matchedString.length);
        return {
            value: value,
            rest: rest
        };
    };
}
exports.default = buildMatchPatternFn;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fsVt9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "selectedDate", ()=>selectedDate);
var _format = require("date-fns/format");
var _formatDefault = parcelHelpers.interopDefault(_format);
var _flatpickr = require("flatpickr");
var _flatpickrDefault = parcelHelpers.interopDefault(_flatpickr);
var _flatpickrMinCss = require("flatpickr/dist/flatpickr.min.css");
let selectedDate;
const options = {
    minuteIncrement: 1,
    dateFormat: "Y-m-d",
    onClose (selectedDates, dateStr, instance) {
        let deg = 0;
        if (!selectedDates[0]) {
            arrowToggle(deg);
            return;
        }
        selectedDate = (0, _formatDefault.default)(new Date(selectedDates[0]), "yyyyMMdd");
        console.log(selectedDate);
        arrowToggle(deg);
    },
    onOpen () {
        let deg = 180;
        arrowToggle(deg);
    }
};
const input = document.querySelector("#calendar");
(0, _flatpickrDefault.default)(input, options);
function arrowToggle(deg) {
    const arrow = document.querySelector(".calendar__arrow");
    arrow.style.transform = `rotate(${deg}deg)`;
}

},{"date-fns/format":"lnm6V","flatpickr":"llQu5","flatpickr/dist/flatpickr.min.css":"eVN6V","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"llQu5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _options = require("./types/options");
var _default = require("./l10n/default");
var _defaultDefault = parcelHelpers.interopDefault(_default);
var _utils = require("./utils");
var _dom = require("./utils/dom");
var _dates = require("./utils/dates");
var _formatting = require("./utils/formatting");
var _polyfills = require("./utils/polyfills");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = undefined && undefined.__spreadArrays || function() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
};
var DEBOUNCED_CHANGE_MS = 300;
function FlatpickrInstance(element, instanceConfig) {
    var self = {
        config: __assign(__assign({}, (0, _options.defaults)), flatpickr.defaultConfig),
        l10n: (0, _defaultDefault.default)
    };
    self.parseDate = (0, _dates.createDateParser)({
        config: self.config,
        l10n: self.l10n
    });
    self._handlers = [];
    self.pluginElements = [];
    self.loadedPlugins = [];
    self._bind = bind;
    self._setHoursFromDate = setHoursFromDate;
    self._positionCalendar = positionCalendar;
    self.changeMonth = changeMonth;
    self.changeYear = changeYear;
    self.clear = clear;
    self.close = close;
    self.onMouseOver = onMouseOver;
    self._createElement = (0, _dom.createElement);
    self.createDay = createDay;
    self.destroy = destroy;
    self.isEnabled = isEnabled;
    self.jumpToDate = jumpToDate;
    self.updateValue = updateValue;
    self.open = open;
    self.redraw = redraw;
    self.set = set;
    self.setDate = setDate;
    self.toggle = toggle;
    function setupHelperFunctions() {
        self.utils = {
            getDaysInMonth: function(month, yr) {
                if (month === void 0) month = self.currentMonth;
                if (yr === void 0) yr = self.currentYear;
                if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0)) return 29;
                return self.l10n.daysInMonth[month];
            }
        };
    }
    function init() {
        self.element = self.input = element;
        self.isOpen = false;
        parseConfig();
        setupLocale();
        setupInputs();
        setupDates();
        setupHelperFunctions();
        if (!self.isMobile) build();
        bindEvents();
        if (self.selectedDates.length || self.config.noCalendar) {
            if (self.config.enableTime) setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj : undefined);
            updateValue(false);
        }
        setCalendarWidth();
        var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        if (!self.isMobile && isSafari) positionCalendar();
        triggerEvent("onReady");
    }
    function getClosestActiveElement() {
        var _a;
        return ((_a = self.calendarContainer) === null || _a === void 0 ? void 0 : _a.getRootNode()).activeElement || document.activeElement;
    }
    function bindToInstance(fn) {
        return fn.bind(self);
    }
    function setCalendarWidth() {
        var config = self.config;
        if (config.weekNumbers === false && config.showMonths === 1) return;
        else if (config.noCalendar !== true) window.requestAnimationFrame(function() {
            if (self.calendarContainer !== undefined) {
                self.calendarContainer.style.visibility = "hidden";
                self.calendarContainer.style.display = "block";
            }
            if (self.daysContainer !== undefined) {
                var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
                self.daysContainer.style.width = daysWidth + "px";
                self.calendarContainer.style.width = daysWidth + (self.weekWrapper !== undefined ? self.weekWrapper.offsetWidth : 0) + "px";
                self.calendarContainer.style.removeProperty("visibility");
                self.calendarContainer.style.removeProperty("display");
            }
        });
    }
    function updateTime(e) {
        if (self.selectedDates.length === 0) {
            var defaultDate = self.config.minDate === undefined || (0, _dates.compareDates)(new Date(), self.config.minDate) >= 0 ? new Date() : new Date(self.config.minDate.getTime());
            var defaults = (0, _dates.getDefaultHours)(self.config);
            defaultDate.setHours(defaults.hours, defaults.minutes, defaults.seconds, defaultDate.getMilliseconds());
            self.selectedDates = [
                defaultDate
            ];
            self.latestSelectedDateObj = defaultDate;
        }
        if (e !== undefined && e.type !== "blur") timeWrapper(e);
        var prevValue = self._input.value;
        setHoursFromInputs();
        updateValue();
        if (self._input.value !== prevValue) self._debouncedChange();
    }
    function ampm2military(hour, amPM) {
        return hour % 12 + 12 * (0, _utils.int)(amPM === self.l10n.amPM[1]);
    }
    function military2ampm(hour) {
        switch(hour % 24){
            case 0:
            case 12:
                return 12;
            default:
                return hour % 12;
        }
    }
    function setHoursFromInputs() {
        if (self.hourElement === undefined || self.minuteElement === undefined) return;
        var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24, minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60, seconds = self.secondElement !== undefined ? (parseInt(self.secondElement.value, 10) || 0) % 60 : 0;
        if (self.amPM !== undefined) hours = ampm2military(hours, self.amPM.textContent);
        var limitMinHours = self.config.minTime !== undefined || self.config.minDate && self.minDateHasTime && self.latestSelectedDateObj && (0, _dates.compareDates)(self.latestSelectedDateObj, self.config.minDate, true) === 0;
        var limitMaxHours = self.config.maxTime !== undefined || self.config.maxDate && self.maxDateHasTime && self.latestSelectedDateObj && (0, _dates.compareDates)(self.latestSelectedDateObj, self.config.maxDate, true) === 0;
        if (self.config.maxTime !== undefined && self.config.minTime !== undefined && self.config.minTime > self.config.maxTime) {
            var minBound = (0, _dates.calculateSecondsSinceMidnight)(self.config.minTime.getHours(), self.config.minTime.getMinutes(), self.config.minTime.getSeconds());
            var maxBound = (0, _dates.calculateSecondsSinceMidnight)(self.config.maxTime.getHours(), self.config.maxTime.getMinutes(), self.config.maxTime.getSeconds());
            var currentTime = (0, _dates.calculateSecondsSinceMidnight)(hours, minutes, seconds);
            if (currentTime > maxBound && currentTime < minBound) {
                var result = (0, _dates.parseSeconds)(minBound);
                hours = result[0];
                minutes = result[1];
                seconds = result[2];
            }
        } else {
            if (limitMaxHours) {
                var maxTime = self.config.maxTime !== undefined ? self.config.maxTime : self.config.maxDate;
                hours = Math.min(hours, maxTime.getHours());
                if (hours === maxTime.getHours()) minutes = Math.min(minutes, maxTime.getMinutes());
                if (minutes === maxTime.getMinutes()) seconds = Math.min(seconds, maxTime.getSeconds());
            }
            if (limitMinHours) {
                var minTime = self.config.minTime !== undefined ? self.config.minTime : self.config.minDate;
                hours = Math.max(hours, minTime.getHours());
                if (hours === minTime.getHours() && minutes < minTime.getMinutes()) minutes = minTime.getMinutes();
                if (minutes === minTime.getMinutes()) seconds = Math.max(seconds, minTime.getSeconds());
            }
        }
        setHours(hours, minutes, seconds);
    }
    function setHoursFromDate(dateObj) {
        var date = dateObj || self.latestSelectedDateObj;
        if (date && date instanceof Date) setHours(date.getHours(), date.getMinutes(), date.getSeconds());
    }
    function setHours(hours, minutes, seconds) {
        if (self.latestSelectedDateObj !== undefined) self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
        if (!self.hourElement || !self.minuteElement || self.isMobile) return;
        self.hourElement.value = (0, _utils.pad)(!self.config.time_24hr ? (12 + hours) % 12 + 12 * (0, _utils.int)(hours % 12 === 0) : hours);
        self.minuteElement.value = (0, _utils.pad)(minutes);
        if (self.amPM !== undefined) self.amPM.textContent = self.l10n.amPM[(0, _utils.int)(hours >= 12)];
        if (self.secondElement !== undefined) self.secondElement.value = (0, _utils.pad)(seconds);
    }
    function onYearInput(event) {
        var eventTarget = (0, _dom.getEventTarget)(event);
        var year = parseInt(eventTarget.value) + (event.delta || 0);
        if (year / 1000 > 1 || event.key === "Enter" && !/[^\d]/.test(year.toString())) changeYear(year);
    }
    function bind(element, event, handler, options) {
        if (event instanceof Array) return event.forEach(function(ev) {
            return bind(element, ev, handler, options);
        });
        if (element instanceof Array) return element.forEach(function(el) {
            return bind(el, event, handler, options);
        });
        element.addEventListener(event, handler, options);
        self._handlers.push({
            remove: function() {
                return element.removeEventListener(event, handler, options);
            }
        });
    }
    function triggerChange() {
        triggerEvent("onChange");
    }
    function bindEvents() {
        if (self.config.wrap) [
            "open",
            "close",
            "toggle",
            "clear"
        ].forEach(function(evt) {
            Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function(el) {
                return bind(el, "click", self[evt]);
            });
        });
        if (self.isMobile) {
            setupMobile();
            return;
        }
        var debouncedResize = (0, _utils.debounce)(onResize, 50);
        self._debouncedChange = (0, _utils.debounce)(triggerChange, DEBOUNCED_CHANGE_MS);
        if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent)) bind(self.daysContainer, "mouseover", function(e) {
            if (self.config.mode === "range") onMouseOver((0, _dom.getEventTarget)(e));
        });
        bind(self._input, "keydown", onKeyDown);
        if (self.calendarContainer !== undefined) bind(self.calendarContainer, "keydown", onKeyDown);
        if (!self.config.inline && !self.config.static) bind(window, "resize", debouncedResize);
        if (window.ontouchstart !== undefined) bind(window.document, "touchstart", documentClick);
        else bind(window.document, "mousedown", documentClick);
        bind(window.document, "focus", documentClick, {
            capture: true
        });
        if (self.config.clickOpens === true) {
            bind(self._input, "focus", self.open);
            bind(self._input, "click", self.open);
        }
        if (self.daysContainer !== undefined) {
            bind(self.monthNav, "click", onMonthNavClick);
            bind(self.monthNav, [
                "keyup",
                "increment"
            ], onYearInput);
            bind(self.daysContainer, "click", selectDate);
        }
        if (self.timeContainer !== undefined && self.minuteElement !== undefined && self.hourElement !== undefined) {
            var selText = function(e) {
                return (0, _dom.getEventTarget)(e).select();
            };
            bind(self.timeContainer, [
                "increment"
            ], updateTime);
            bind(self.timeContainer, "blur", updateTime, {
                capture: true
            });
            bind(self.timeContainer, "click", timeIncrement);
            bind([
                self.hourElement,
                self.minuteElement
            ], [
                "focus",
                "click"
            ], selText);
            if (self.secondElement !== undefined) bind(self.secondElement, "focus", function() {
                return self.secondElement && self.secondElement.select();
            });
            if (self.amPM !== undefined) bind(self.amPM, "click", function(e) {
                updateTime(e);
            });
        }
        if (self.config.allowInput) bind(self._input, "blur", onBlur);
    }
    function jumpToDate(jumpDate, triggerChange) {
        var jumpTo = jumpDate !== undefined ? self.parseDate(jumpDate) : self.latestSelectedDateObj || (self.config.minDate && self.config.minDate > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate < self.now ? self.config.maxDate : self.now);
        var oldYear = self.currentYear;
        var oldMonth = self.currentMonth;
        try {
            if (jumpTo !== undefined) {
                self.currentYear = jumpTo.getFullYear();
                self.currentMonth = jumpTo.getMonth();
            }
        } catch (e) {
            e.message = "Invalid date supplied: " + jumpTo;
            self.config.errorHandler(e);
        }
        if (triggerChange && self.currentYear !== oldYear) {
            triggerEvent("onYearChange");
            buildMonthSwitch();
        }
        if (triggerChange && (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) triggerEvent("onMonthChange");
        self.redraw();
    }
    function timeIncrement(e) {
        var eventTarget = (0, _dom.getEventTarget)(e);
        if (~eventTarget.className.indexOf("arrow")) incrementNumInput(e, eventTarget.classList.contains("arrowUp") ? 1 : -1);
    }
    function incrementNumInput(e, delta, inputElem) {
        var target = e && (0, _dom.getEventTarget)(e);
        var input = inputElem || target && target.parentNode && target.parentNode.firstChild;
        var event = createEvent("increment");
        event.delta = delta;
        input && input.dispatchEvent(event);
    }
    function build() {
        var fragment = window.document.createDocumentFragment();
        self.calendarContainer = (0, _dom.createElement)("div", "flatpickr-calendar");
        self.calendarContainer.tabIndex = -1;
        if (!self.config.noCalendar) {
            fragment.appendChild(buildMonthNav());
            self.innerContainer = (0, _dom.createElement)("div", "flatpickr-innerContainer");
            if (self.config.weekNumbers) {
                var _a = buildWeeks(), weekWrapper = _a.weekWrapper, weekNumbers = _a.weekNumbers;
                self.innerContainer.appendChild(weekWrapper);
                self.weekNumbers = weekNumbers;
                self.weekWrapper = weekWrapper;
            }
            self.rContainer = (0, _dom.createElement)("div", "flatpickr-rContainer");
            self.rContainer.appendChild(buildWeekdays());
            if (!self.daysContainer) {
                self.daysContainer = (0, _dom.createElement)("div", "flatpickr-days");
                self.daysContainer.tabIndex = -1;
            }
            buildDays();
            self.rContainer.appendChild(self.daysContainer);
            self.innerContainer.appendChild(self.rContainer);
            fragment.appendChild(self.innerContainer);
        }
        if (self.config.enableTime) fragment.appendChild(buildTime());
        (0, _dom.toggleClass)(self.calendarContainer, "rangeMode", self.config.mode === "range");
        (0, _dom.toggleClass)(self.calendarContainer, "animate", self.config.animate === true);
        (0, _dom.toggleClass)(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
        self.calendarContainer.appendChild(fragment);
        var customAppend = self.config.appendTo !== undefined && self.config.appendTo.nodeType !== undefined;
        if (self.config.inline || self.config.static) {
            self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
            if (self.config.inline) {
                if (!customAppend && self.element.parentNode) self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);
                else if (self.config.appendTo !== undefined) self.config.appendTo.appendChild(self.calendarContainer);
            }
            if (self.config.static) {
                var wrapper = (0, _dom.createElement)("div", "flatpickr-wrapper");
                if (self.element.parentNode) self.element.parentNode.insertBefore(wrapper, self.element);
                wrapper.appendChild(self.element);
                if (self.altInput) wrapper.appendChild(self.altInput);
                wrapper.appendChild(self.calendarContainer);
            }
        }
        if (!self.config.static && !self.config.inline) (self.config.appendTo !== undefined ? self.config.appendTo : window.document.body).appendChild(self.calendarContainer);
    }
    function createDay(className, date, _dayNumber, i) {
        var dateIsEnabled = isEnabled(date, true), dayElement = (0, _dom.createElement)("span", className, date.getDate().toString());
        dayElement.dateObj = date;
        dayElement.$i = i;
        dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));
        if (className.indexOf("hidden") === -1 && (0, _dates.compareDates)(date, self.now) === 0) {
            self.todayDateElem = dayElement;
            dayElement.classList.add("today");
            dayElement.setAttribute("aria-current", "date");
        }
        if (dateIsEnabled) {
            dayElement.tabIndex = -1;
            if (isDateSelected(date)) {
                dayElement.classList.add("selected");
                self.selectedDateElem = dayElement;
                if (self.config.mode === "range") {
                    (0, _dom.toggleClass)(dayElement, "startRange", self.selectedDates[0] && (0, _dates.compareDates)(date, self.selectedDates[0], true) === 0);
                    (0, _dom.toggleClass)(dayElement, "endRange", self.selectedDates[1] && (0, _dates.compareDates)(date, self.selectedDates[1], true) === 0);
                    if (className === "nextMonthDay") dayElement.classList.add("inRange");
                }
            }
        } else dayElement.classList.add("flatpickr-disabled");
        if (self.config.mode === "range") {
            if (isDateInRange(date) && !isDateSelected(date)) dayElement.classList.add("inRange");
        }
        if (self.weekNumbers && self.config.showMonths === 1 && className !== "prevMonthDay" && i % 7 === 6) self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
        triggerEvent("onDayCreate", dayElement);
        return dayElement;
    }
    function focusOnDayElem(targetNode) {
        targetNode.focus();
        if (self.config.mode === "range") onMouseOver(targetNode);
    }
    function getFirstAvailableDay(delta) {
        var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
        var endMonth = delta > 0 ? self.config.showMonths : -1;
        for(var m = startMonth; m != endMonth; m += delta){
            var month = self.daysContainer.children[m];
            var startIndex = delta > 0 ? 0 : month.children.length - 1;
            var endIndex = delta > 0 ? month.children.length : -1;
            for(var i = startIndex; i != endIndex; i += delta){
                var c = month.children[i];
                if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj)) return c;
            }
        }
        return undefined;
    }
    function getNextAvailableDay(current, delta) {
        var givenMonth = current.className.indexOf("Month") === -1 ? current.dateObj.getMonth() : self.currentMonth;
        var endMonth = delta > 0 ? self.config.showMonths : -1;
        var loopDelta = delta > 0 ? 1 : -1;
        for(var m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta){
            var month = self.daysContainer.children[m];
            var startIndex = givenMonth - self.currentMonth === m ? current.$i + delta : delta < 0 ? month.children.length - 1 : 0;
            var numMonthDays = month.children.length;
            for(var i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta){
                var c = month.children[i];
                if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj) && Math.abs(current.$i - i) >= Math.abs(delta)) return focusOnDayElem(c);
            }
        }
        self.changeMonth(loopDelta);
        focusOnDay(getFirstAvailableDay(loopDelta), 0);
        return undefined;
    }
    function focusOnDay(current, offset) {
        var activeElement = getClosestActiveElement();
        var dayFocused = isInView(activeElement || document.body);
        var startElem = current !== undefined ? current : dayFocused ? activeElement : self.selectedDateElem !== undefined && isInView(self.selectedDateElem) ? self.selectedDateElem : self.todayDateElem !== undefined && isInView(self.todayDateElem) ? self.todayDateElem : getFirstAvailableDay(offset > 0 ? 1 : -1);
        if (startElem === undefined) self._input.focus();
        else if (!dayFocused) focusOnDayElem(startElem);
        else getNextAvailableDay(startElem, offset);
    }
    function buildMonthDays(year, month) {
        var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
        var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12, year);
        var daysInMonth = self.utils.getDaysInMonth(month, year), days = window.document.createDocumentFragment(), isMultiMonth = self.config.showMonths > 1, prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay", nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
        var dayNumber = prevMonthDays + 1 - firstOfMonth, dayIndex = 0;
        for(; dayNumber <= prevMonthDays; dayNumber++, dayIndex++)days.appendChild(createDay("flatpickr-day " + prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
        for(dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++)days.appendChild(createDay("flatpickr-day", new Date(year, month, dayNumber), dayNumber, dayIndex));
        for(var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth && (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++)days.appendChild(createDay("flatpickr-day " + nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
        var dayContainer = (0, _dom.createElement)("div", "dayContainer");
        dayContainer.appendChild(days);
        return dayContainer;
    }
    function buildDays() {
        if (self.daysContainer === undefined) return;
        (0, _dom.clearNode)(self.daysContainer);
        if (self.weekNumbers) (0, _dom.clearNode)(self.weekNumbers);
        var frag = document.createDocumentFragment();
        for(var i = 0; i < self.config.showMonths; i++){
            var d = new Date(self.currentYear, self.currentMonth, 1);
            d.setMonth(self.currentMonth + i);
            frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
        }
        self.daysContainer.appendChild(frag);
        self.days = self.daysContainer.firstChild;
        if (self.config.mode === "range" && self.selectedDates.length === 1) onMouseOver();
    }
    function buildMonthSwitch() {
        if (self.config.showMonths > 1 || self.config.monthSelectorType !== "dropdown") return;
        var shouldBuildMonth = function(month) {
            if (self.config.minDate !== undefined && self.currentYear === self.config.minDate.getFullYear() && month < self.config.minDate.getMonth()) return false;
            return !(self.config.maxDate !== undefined && self.currentYear === self.config.maxDate.getFullYear() && month > self.config.maxDate.getMonth());
        };
        self.monthsDropdownContainer.tabIndex = -1;
        self.monthsDropdownContainer.innerHTML = "";
        for(var i = 0; i < 12; i++){
            if (!shouldBuildMonth(i)) continue;
            var month = (0, _dom.createElement)("option", "flatpickr-monthDropdown-month");
            month.value = new Date(self.currentYear, i).getMonth().toString();
            month.textContent = (0, _formatting.monthToStr)(i, self.config.shorthandCurrentMonth, self.l10n);
            month.tabIndex = -1;
            if (self.currentMonth === i) month.selected = true;
            self.monthsDropdownContainer.appendChild(month);
        }
    }
    function buildMonth() {
        var container = (0, _dom.createElement)("div", "flatpickr-month");
        var monthNavFragment = window.document.createDocumentFragment();
        var monthElement;
        if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") monthElement = (0, _dom.createElement)("span", "cur-month");
        else {
            self.monthsDropdownContainer = (0, _dom.createElement)("select", "flatpickr-monthDropdown-months");
            self.monthsDropdownContainer.setAttribute("aria-label", self.l10n.monthAriaLabel);
            bind(self.monthsDropdownContainer, "change", function(e) {
                var target = (0, _dom.getEventTarget)(e);
                var selectedMonth = parseInt(target.value, 10);
                self.changeMonth(selectedMonth - self.currentMonth);
                triggerEvent("onMonthChange");
            });
            buildMonthSwitch();
            monthElement = self.monthsDropdownContainer;
        }
        var yearInput = (0, _dom.createNumberInput)("cur-year", {
            tabindex: "-1"
        });
        var yearElement = yearInput.getElementsByTagName("input")[0];
        yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);
        if (self.config.minDate) yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
        if (self.config.maxDate) {
            yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
            yearElement.disabled = !!self.config.minDate && self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
        }
        var currentMonth = (0, _dom.createElement)("div", "flatpickr-current-month");
        currentMonth.appendChild(monthElement);
        currentMonth.appendChild(yearInput);
        monthNavFragment.appendChild(currentMonth);
        container.appendChild(monthNavFragment);
        return {
            container: container,
            yearElement: yearElement,
            monthElement: monthElement
        };
    }
    function buildMonths() {
        (0, _dom.clearNode)(self.monthNav);
        self.monthNav.appendChild(self.prevMonthNav);
        if (self.config.showMonths) {
            self.yearElements = [];
            self.monthElements = [];
        }
        for(var m = self.config.showMonths; m--;){
            var month = buildMonth();
            self.yearElements.push(month.yearElement);
            self.monthElements.push(month.monthElement);
            self.monthNav.appendChild(month.container);
        }
        self.monthNav.appendChild(self.nextMonthNav);
    }
    function buildMonthNav() {
        self.monthNav = (0, _dom.createElement)("div", "flatpickr-months");
        self.yearElements = [];
        self.monthElements = [];
        self.prevMonthNav = (0, _dom.createElement)("span", "flatpickr-prev-month");
        self.prevMonthNav.innerHTML = self.config.prevArrow;
        self.nextMonthNav = (0, _dom.createElement)("span", "flatpickr-next-month");
        self.nextMonthNav.innerHTML = self.config.nextArrow;
        buildMonths();
        Object.defineProperty(self, "_hidePrevMonthArrow", {
            get: function() {
                return self.__hidePrevMonthArrow;
            },
            set: function(bool) {
                if (self.__hidePrevMonthArrow !== bool) {
                    (0, _dom.toggleClass)(self.prevMonthNav, "flatpickr-disabled", bool);
                    self.__hidePrevMonthArrow = bool;
                }
            }
        });
        Object.defineProperty(self, "_hideNextMonthArrow", {
            get: function() {
                return self.__hideNextMonthArrow;
            },
            set: function(bool) {
                if (self.__hideNextMonthArrow !== bool) {
                    (0, _dom.toggleClass)(self.nextMonthNav, "flatpickr-disabled", bool);
                    self.__hideNextMonthArrow = bool;
                }
            }
        });
        self.currentYearElement = self.yearElements[0];
        updateNavigationCurrentMonth();
        return self.monthNav;
    }
    function buildTime() {
        self.calendarContainer.classList.add("hasTime");
        if (self.config.noCalendar) self.calendarContainer.classList.add("noCalendar");
        var defaults = (0, _dates.getDefaultHours)(self.config);
        self.timeContainer = (0, _dom.createElement)("div", "flatpickr-time");
        self.timeContainer.tabIndex = -1;
        var separator = (0, _dom.createElement)("span", "flatpickr-time-separator", ":");
        var hourInput = (0, _dom.createNumberInput)("flatpickr-hour", {
            "aria-label": self.l10n.hourAriaLabel
        });
        self.hourElement = hourInput.getElementsByTagName("input")[0];
        var minuteInput = (0, _dom.createNumberInput)("flatpickr-minute", {
            "aria-label": self.l10n.minuteAriaLabel
        });
        self.minuteElement = minuteInput.getElementsByTagName("input")[0];
        self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
        self.hourElement.value = (0, _utils.pad)(self.latestSelectedDateObj ? self.latestSelectedDateObj.getHours() : self.config.time_24hr ? defaults.hours : military2ampm(defaults.hours));
        self.minuteElement.value = (0, _utils.pad)(self.latestSelectedDateObj ? self.latestSelectedDateObj.getMinutes() : defaults.minutes);
        self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
        self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
        self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
        self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
        self.hourElement.setAttribute("maxlength", "2");
        self.minuteElement.setAttribute("min", "0");
        self.minuteElement.setAttribute("max", "59");
        self.minuteElement.setAttribute("maxlength", "2");
        self.timeContainer.appendChild(hourInput);
        self.timeContainer.appendChild(separator);
        self.timeContainer.appendChild(minuteInput);
        if (self.config.time_24hr) self.timeContainer.classList.add("time24hr");
        if (self.config.enableSeconds) {
            self.timeContainer.classList.add("hasSeconds");
            var secondInput = (0, _dom.createNumberInput)("flatpickr-second");
            self.secondElement = secondInput.getElementsByTagName("input")[0];
            self.secondElement.value = (0, _utils.pad)(self.latestSelectedDateObj ? self.latestSelectedDateObj.getSeconds() : defaults.seconds);
            self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
            self.secondElement.setAttribute("min", "0");
            self.secondElement.setAttribute("max", "59");
            self.secondElement.setAttribute("maxlength", "2");
            self.timeContainer.appendChild((0, _dom.createElement)("span", "flatpickr-time-separator", ":"));
            self.timeContainer.appendChild(secondInput);
        }
        if (!self.config.time_24hr) {
            self.amPM = (0, _dom.createElement)("span", "flatpickr-am-pm", self.l10n.amPM[(0, _utils.int)((self.latestSelectedDateObj ? self.hourElement.value : self.config.defaultHour) > 11)]);
            self.amPM.title = self.l10n.toggleTitle;
            self.amPM.tabIndex = -1;
            self.timeContainer.appendChild(self.amPM);
        }
        return self.timeContainer;
    }
    function buildWeekdays() {
        if (!self.weekdayContainer) self.weekdayContainer = (0, _dom.createElement)("div", "flatpickr-weekdays");
        else (0, _dom.clearNode)(self.weekdayContainer);
        for(var i = self.config.showMonths; i--;){
            var container = (0, _dom.createElement)("div", "flatpickr-weekdaycontainer");
            self.weekdayContainer.appendChild(container);
        }
        updateWeekdays();
        return self.weekdayContainer;
    }
    function updateWeekdays() {
        if (!self.weekdayContainer) return;
        var firstDayOfWeek = self.l10n.firstDayOfWeek;
        var weekdays = __spreadArrays(self.l10n.weekdays.shorthand);
        if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) weekdays = __spreadArrays(weekdays.splice(firstDayOfWeek, weekdays.length), weekdays.splice(0, firstDayOfWeek));
        for(var i = self.config.showMonths; i--;)self.weekdayContainer.children[i].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + weekdays.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      ";
    }
    function buildWeeks() {
        self.calendarContainer.classList.add("hasWeeks");
        var weekWrapper = (0, _dom.createElement)("div", "flatpickr-weekwrapper");
        weekWrapper.appendChild((0, _dom.createElement)("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
        var weekNumbers = (0, _dom.createElement)("div", "flatpickr-weeks");
        weekWrapper.appendChild(weekNumbers);
        return {
            weekWrapper: weekWrapper,
            weekNumbers: weekNumbers
        };
    }
    function changeMonth(value, isOffset) {
        if (isOffset === void 0) isOffset = true;
        var delta = isOffset ? value : value - self.currentMonth;
        if (delta < 0 && self._hidePrevMonthArrow === true || delta > 0 && self._hideNextMonthArrow === true) return;
        self.currentMonth += delta;
        if (self.currentMonth < 0 || self.currentMonth > 11) {
            self.currentYear += self.currentMonth > 11 ? 1 : -1;
            self.currentMonth = (self.currentMonth + 12) % 12;
            triggerEvent("onYearChange");
            buildMonthSwitch();
        }
        buildDays();
        triggerEvent("onMonthChange");
        updateNavigationCurrentMonth();
    }
    function clear(triggerChangeEvent, toInitial) {
        if (triggerChangeEvent === void 0) triggerChangeEvent = true;
        if (toInitial === void 0) toInitial = true;
        self.input.value = "";
        if (self.altInput !== undefined) self.altInput.value = "";
        if (self.mobileInput !== undefined) self.mobileInput.value = "";
        self.selectedDates = [];
        self.latestSelectedDateObj = undefined;
        if (toInitial === true) {
            self.currentYear = self._initialDate.getFullYear();
            self.currentMonth = self._initialDate.getMonth();
        }
        if (self.config.enableTime === true) {
            var _a = (0, _dates.getDefaultHours)(self.config), hours = _a.hours, minutes = _a.minutes, seconds = _a.seconds;
            setHours(hours, minutes, seconds);
        }
        self.redraw();
        if (triggerChangeEvent) triggerEvent("onChange");
    }
    function close() {
        self.isOpen = false;
        if (!self.isMobile) {
            if (self.calendarContainer !== undefined) self.calendarContainer.classList.remove("open");
            if (self._input !== undefined) self._input.classList.remove("active");
        }
        triggerEvent("onClose");
    }
    function destroy() {
        if (self.config !== undefined) triggerEvent("onDestroy");
        for(var i = self._handlers.length; i--;)self._handlers[i].remove();
        self._handlers = [];
        if (self.mobileInput) {
            if (self.mobileInput.parentNode) self.mobileInput.parentNode.removeChild(self.mobileInput);
            self.mobileInput = undefined;
        } else if (self.calendarContainer && self.calendarContainer.parentNode) {
            if (self.config.static && self.calendarContainer.parentNode) {
                var wrapper = self.calendarContainer.parentNode;
                wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);
                if (wrapper.parentNode) {
                    while(wrapper.firstChild)wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
                    wrapper.parentNode.removeChild(wrapper);
                }
            } else self.calendarContainer.parentNode.removeChild(self.calendarContainer);
        }
        if (self.altInput) {
            self.input.type = "text";
            if (self.altInput.parentNode) self.altInput.parentNode.removeChild(self.altInput);
            delete self.altInput;
        }
        if (self.input) {
            self.input.type = self.input._type;
            self.input.classList.remove("flatpickr-input");
            self.input.removeAttribute("readonly");
        }
        [
            "_showTimeInput",
            "latestSelectedDateObj",
            "_hideNextMonthArrow",
            "_hidePrevMonthArrow",
            "__hideNextMonthArrow",
            "__hidePrevMonthArrow",
            "isMobile",
            "isOpen",
            "selectedDateElem",
            "minDateHasTime",
            "maxDateHasTime",
            "days",
            "daysContainer",
            "_input",
            "_positionElement",
            "innerContainer",
            "rContainer",
            "monthNav",
            "todayDateElem",
            "calendarContainer",
            "weekdayContainer",
            "prevMonthNav",
            "nextMonthNav",
            "monthsDropdownContainer",
            "currentMonthElement",
            "currentYearElement",
            "navigationCurrentMonth",
            "selectedDateElem",
            "config"
        ].forEach(function(k) {
            try {
                delete self[k];
            } catch (_) {}
        });
    }
    function isCalendarElem(elem) {
        return self.calendarContainer.contains(elem);
    }
    function documentClick(e) {
        if (self.isOpen && !self.config.inline) {
            var eventTarget_1 = (0, _dom.getEventTarget)(e);
            var isCalendarElement = isCalendarElem(eventTarget_1);
            var isInput = eventTarget_1 === self.input || eventTarget_1 === self.altInput || self.element.contains(eventTarget_1) || e.path && e.path.indexOf && (~e.path.indexOf(self.input) || ~e.path.indexOf(self.altInput));
            var lostFocus = !isInput && !isCalendarElement && !isCalendarElem(e.relatedTarget);
            var isIgnored = !self.config.ignoredFocusElements.some(function(elem) {
                return elem.contains(eventTarget_1);
            });
            if (lostFocus && isIgnored) {
                if (self.config.allowInput) self.setDate(self._input.value, false, self.config.altInput ? self.config.altFormat : self.config.dateFormat);
                if (self.timeContainer !== undefined && self.minuteElement !== undefined && self.hourElement !== undefined && self.input.value !== "" && self.input.value !== undefined) updateTime();
                self.close();
                if (self.config && self.config.mode === "range" && self.selectedDates.length === 1) self.clear(false);
            }
        }
    }
    function changeYear(newYear) {
        if (!newYear || self.config.minDate && newYear < self.config.minDate.getFullYear() || self.config.maxDate && newYear > self.config.maxDate.getFullYear()) return;
        var newYearNum = newYear, isNewYear = self.currentYear !== newYearNum;
        self.currentYear = newYearNum || self.currentYear;
        if (self.config.maxDate && self.currentYear === self.config.maxDate.getFullYear()) self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
        else if (self.config.minDate && self.currentYear === self.config.minDate.getFullYear()) self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
        if (isNewYear) {
            self.redraw();
            triggerEvent("onYearChange");
            buildMonthSwitch();
        }
    }
    function isEnabled(date, timeless) {
        var _a;
        if (timeless === void 0) timeless = true;
        var dateToCheck = self.parseDate(date, undefined, timeless);
        if (self.config.minDate && dateToCheck && (0, _dates.compareDates)(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0 || self.config.maxDate && dateToCheck && (0, _dates.compareDates)(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0) return false;
        if (!self.config.enable && self.config.disable.length === 0) return true;
        if (dateToCheck === undefined) return false;
        var bool = !!self.config.enable, array = (_a = self.config.enable) !== null && _a !== void 0 ? _a : self.config.disable;
        for(var i = 0, d = void 0; i < array.length; i++){
            d = array[i];
            if (typeof d === "function" && d(dateToCheck)) return bool;
            else if (d instanceof Date && dateToCheck !== undefined && d.getTime() === dateToCheck.getTime()) return bool;
            else if (typeof d === "string") {
                var parsed = self.parseDate(d, undefined, true);
                return parsed && parsed.getTime() === dateToCheck.getTime() ? bool : !bool;
            } else if (typeof d === "object" && dateToCheck !== undefined && d.from && d.to && dateToCheck.getTime() >= d.from.getTime() && dateToCheck.getTime() <= d.to.getTime()) return bool;
        }
        return !bool;
    }
    function isInView(elem) {
        if (self.daysContainer !== undefined) return elem.className.indexOf("hidden") === -1 && elem.className.indexOf("flatpickr-disabled") === -1 && self.daysContainer.contains(elem);
        return false;
    }
    function onBlur(e) {
        var isInput = e.target === self._input;
        var valueChanged = self._input.value.trimEnd() !== getDateStr();
        if (isInput && valueChanged && !(e.relatedTarget && isCalendarElem(e.relatedTarget))) self.setDate(self._input.value, true, e.target === self.altInput ? self.config.altFormat : self.config.dateFormat);
    }
    function onKeyDown(e) {
        var eventTarget = (0, _dom.getEventTarget)(e);
        var isInput = self.config.wrap ? element.contains(eventTarget) : eventTarget === self._input;
        var allowInput = self.config.allowInput;
        var allowKeydown = self.isOpen && (!allowInput || !isInput);
        var allowInlineKeydown = self.config.inline && isInput && !allowInput;
        if (e.keyCode === 13 && isInput) {
            if (allowInput) {
                self.setDate(self._input.value, true, eventTarget === self.altInput ? self.config.altFormat : self.config.dateFormat);
                self.close();
                return eventTarget.blur();
            } else self.open();
        } else if (isCalendarElem(eventTarget) || allowKeydown || allowInlineKeydown) {
            var isTimeObj = !!self.timeContainer && self.timeContainer.contains(eventTarget);
            switch(e.keyCode){
                case 13:
                    if (isTimeObj) {
                        e.preventDefault();
                        updateTime();
                        focusAndClose();
                    } else selectDate(e);
                    break;
                case 27:
                    e.preventDefault();
                    focusAndClose();
                    break;
                case 8:
                case 46:
                    if (isInput && !self.config.allowInput) {
                        e.preventDefault();
                        self.clear();
                    }
                    break;
                case 37:
                case 39:
                    if (!isTimeObj && !isInput) {
                        e.preventDefault();
                        var activeElement = getClosestActiveElement();
                        if (self.daysContainer !== undefined && (allowInput === false || activeElement && isInView(activeElement))) {
                            var delta_1 = e.keyCode === 39 ? 1 : -1;
                            if (!e.ctrlKey) focusOnDay(undefined, delta_1);
                            else {
                                e.stopPropagation();
                                changeMonth(delta_1);
                                focusOnDay(getFirstAvailableDay(1), 0);
                            }
                        }
                    } else if (self.hourElement) self.hourElement.focus();
                    break;
                case 38:
                case 40:
                    e.preventDefault();
                    var delta = e.keyCode === 40 ? 1 : -1;
                    if (self.daysContainer && eventTarget.$i !== undefined || eventTarget === self.input || eventTarget === self.altInput) {
                        if (e.ctrlKey) {
                            e.stopPropagation();
                            changeYear(self.currentYear - delta);
                            focusOnDay(getFirstAvailableDay(1), 0);
                        } else if (!isTimeObj) focusOnDay(undefined, delta * 7);
                    } else if (eventTarget === self.currentYearElement) changeYear(self.currentYear - delta);
                    else if (self.config.enableTime) {
                        if (!isTimeObj && self.hourElement) self.hourElement.focus();
                        updateTime(e);
                        self._debouncedChange();
                    }
                    break;
                case 9:
                    if (isTimeObj) {
                        var elems = [
                            self.hourElement,
                            self.minuteElement,
                            self.secondElement,
                            self.amPM
                        ].concat(self.pluginElements).filter(function(x) {
                            return x;
                        });
                        var i = elems.indexOf(eventTarget);
                        if (i !== -1) {
                            var target = elems[i + (e.shiftKey ? -1 : 1)];
                            e.preventDefault();
                            (target || self._input).focus();
                        }
                    } else if (!self.config.noCalendar && self.daysContainer && self.daysContainer.contains(eventTarget) && e.shiftKey) {
                        e.preventDefault();
                        self._input.focus();
                    }
                    break;
                default:
                    break;
            }
        }
        if (self.amPM !== undefined && eventTarget === self.amPM) switch(e.key){
            case self.l10n.amPM[0].charAt(0):
            case self.l10n.amPM[0].charAt(0).toLowerCase():
                self.amPM.textContent = self.l10n.amPM[0];
                setHoursFromInputs();
                updateValue();
                break;
            case self.l10n.amPM[1].charAt(0):
            case self.l10n.amPM[1].charAt(0).toLowerCase():
                self.amPM.textContent = self.l10n.amPM[1];
                setHoursFromInputs();
                updateValue();
                break;
        }
        if (isInput || isCalendarElem(eventTarget)) triggerEvent("onKeyDown", e);
    }
    function onMouseOver(elem, cellClass) {
        if (cellClass === void 0) cellClass = "flatpickr-day";
        if (self.selectedDates.length !== 1 || elem && (!elem.classList.contains(cellClass) || elem.classList.contains("flatpickr-disabled"))) return;
        var hoverDate = elem ? elem.dateObj.getTime() : self.days.firstElementChild.dateObj.getTime(), initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(), rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()), rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
        var containsDisabled = false;
        var minRange = 0, maxRange = 0;
        for(var t = rangeStartDate; t < rangeEndDate; t += (0, _dates.duration).DAY)if (!isEnabled(new Date(t), true)) {
            containsDisabled = containsDisabled || t > rangeStartDate && t < rangeEndDate;
            if (t < initialDate && (!minRange || t > minRange)) minRange = t;
            else if (t > initialDate && (!maxRange || t < maxRange)) maxRange = t;
        }
        var hoverableCells = Array.from(self.rContainer.querySelectorAll("*:nth-child(-n+" + self.config.showMonths + ") > ." + cellClass));
        hoverableCells.forEach(function(dayElem) {
            var date = dayElem.dateObj;
            var timestamp = date.getTime();
            var outOfRange = minRange > 0 && timestamp < minRange || maxRange > 0 && timestamp > maxRange;
            if (outOfRange) {
                dayElem.classList.add("notAllowed");
                [
                    "inRange",
                    "startRange",
                    "endRange"
                ].forEach(function(c) {
                    dayElem.classList.remove(c);
                });
                return;
            } else if (containsDisabled && !outOfRange) return;
            [
                "startRange",
                "inRange",
                "endRange",
                "notAllowed"
            ].forEach(function(c) {
                dayElem.classList.remove(c);
            });
            if (elem !== undefined) {
                elem.classList.add(hoverDate <= self.selectedDates[0].getTime() ? "startRange" : "endRange");
                if (initialDate < hoverDate && timestamp === initialDate) dayElem.classList.add("startRange");
                else if (initialDate > hoverDate && timestamp === initialDate) dayElem.classList.add("endRange");
                if (timestamp >= minRange && (maxRange === 0 || timestamp <= maxRange) && (0, _dates.isBetween)(timestamp, initialDate, hoverDate)) dayElem.classList.add("inRange");
            }
        });
    }
    function onResize() {
        if (self.isOpen && !self.config.static && !self.config.inline) positionCalendar();
    }
    function open(e, positionElement) {
        if (positionElement === void 0) positionElement = self._positionElement;
        if (self.isMobile === true) {
            if (e) {
                e.preventDefault();
                var eventTarget = (0, _dom.getEventTarget)(e);
                if (eventTarget) eventTarget.blur();
            }
            if (self.mobileInput !== undefined) {
                self.mobileInput.focus();
                self.mobileInput.click();
            }
            triggerEvent("onOpen");
            return;
        } else if (self._input.disabled || self.config.inline) return;
        var wasOpen = self.isOpen;
        self.isOpen = true;
        if (!wasOpen) {
            self.calendarContainer.classList.add("open");
            self._input.classList.add("active");
            triggerEvent("onOpen");
            positionCalendar(positionElement);
        }
        if (self.config.enableTime === true && self.config.noCalendar === true) {
            if (self.config.allowInput === false && (e === undefined || !self.timeContainer.contains(e.relatedTarget))) setTimeout(function() {
                return self.hourElement.select();
            }, 50);
        }
    }
    function minMaxDateSetter(type) {
        return function(date) {
            var dateObj = self.config["_" + type + "Date"] = self.parseDate(date, self.config.dateFormat);
            var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];
            if (dateObj !== undefined) self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] = dateObj.getHours() > 0 || dateObj.getMinutes() > 0 || dateObj.getSeconds() > 0;
            if (self.selectedDates) {
                self.selectedDates = self.selectedDates.filter(function(d) {
                    return isEnabled(d);
                });
                if (!self.selectedDates.length && type === "min") setHoursFromDate(dateObj);
                updateValue();
            }
            if (self.daysContainer) {
                redraw();
                if (dateObj !== undefined) self.currentYearElement[type] = dateObj.getFullYear().toString();
                else self.currentYearElement.removeAttribute(type);
                self.currentYearElement.disabled = !!inverseDateObj && dateObj !== undefined && inverseDateObj.getFullYear() === dateObj.getFullYear();
            }
        };
    }
    function parseConfig() {
        var boolOpts = [
            "wrap",
            "weekNumbers",
            "allowInput",
            "allowInvalidPreload",
            "clickOpens",
            "time_24hr",
            "enableTime",
            "noCalendar",
            "altInput",
            "shorthandCurrentMonth",
            "inline",
            "static",
            "enableSeconds",
            "disableMobile"
        ];
        var userConfig = __assign(__assign({}, JSON.parse(JSON.stringify(element.dataset || {}))), instanceConfig);
        var formats = {};
        self.config.parseDate = userConfig.parseDate;
        self.config.formatDate = userConfig.formatDate;
        Object.defineProperty(self.config, "enable", {
            get: function() {
                return self.config._enable;
            },
            set: function(dates) {
                self.config._enable = parseDateRules(dates);
            }
        });
        Object.defineProperty(self.config, "disable", {
            get: function() {
                return self.config._disable;
            },
            set: function(dates) {
                self.config._disable = parseDateRules(dates);
            }
        });
        var timeMode = userConfig.mode === "time";
        if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
            var defaultDateFormat = flatpickr.defaultConfig.dateFormat || (0, _options.defaults).dateFormat;
            formats.dateFormat = userConfig.noCalendar || timeMode ? "H:i" + (userConfig.enableSeconds ? ":S" : "") : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
        }
        if (userConfig.altInput && (userConfig.enableTime || timeMode) && !userConfig.altFormat) {
            var defaultAltFormat = flatpickr.defaultConfig.altFormat || (0, _options.defaults).altFormat;
            formats.altFormat = userConfig.noCalendar || timeMode ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K") : defaultAltFormat + (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
        }
        Object.defineProperty(self.config, "minDate", {
            get: function() {
                return self.config._minDate;
            },
            set: minMaxDateSetter("min")
        });
        Object.defineProperty(self.config, "maxDate", {
            get: function() {
                return self.config._maxDate;
            },
            set: minMaxDateSetter("max")
        });
        var minMaxTimeSetter = function(type) {
            return function(val) {
                self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
            };
        };
        Object.defineProperty(self.config, "minTime", {
            get: function() {
                return self.config._minTime;
            },
            set: minMaxTimeSetter("min")
        });
        Object.defineProperty(self.config, "maxTime", {
            get: function() {
                return self.config._maxTime;
            },
            set: minMaxTimeSetter("max")
        });
        if (userConfig.mode === "time") {
            self.config.noCalendar = true;
            self.config.enableTime = true;
        }
        Object.assign(self.config, formats, userConfig);
        for(var i = 0; i < boolOpts.length; i++)self.config[boolOpts[i]] = self.config[boolOpts[i]] === true || self.config[boolOpts[i]] === "true";
        (0, _options.HOOKS).filter(function(hook) {
            return self.config[hook] !== undefined;
        }).forEach(function(hook) {
            self.config[hook] = (0, _utils.arrayify)(self.config[hook] || []).map(bindToInstance);
        });
        self.isMobile = !self.config.disableMobile && !self.config.inline && self.config.mode === "single" && !self.config.disable.length && !self.config.enable && !self.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        for(var i = 0; i < self.config.plugins.length; i++){
            var pluginConf = self.config.plugins[i](self) || {};
            for(var key in pluginConf){
                if ((0, _options.HOOKS).indexOf(key) > -1) self.config[key] = (0, _utils.arrayify)(pluginConf[key]).map(bindToInstance).concat(self.config[key]);
                else if (typeof userConfig[key] === "undefined") self.config[key] = pluginConf[key];
            }
        }
        if (!userConfig.altInputClass) self.config.altInputClass = getInputElem().className + " " + self.config.altInputClass;
        triggerEvent("onParseConfig");
    }
    function getInputElem() {
        return self.config.wrap ? element.querySelector("[data-input]") : element;
    }
    function setupLocale() {
        if (typeof self.config.locale !== "object" && typeof flatpickr.l10ns[self.config.locale] === "undefined") self.config.errorHandler(new Error("flatpickr: invalid locale " + self.config.locale));
        self.l10n = __assign(__assign({}, flatpickr.l10ns.default), typeof self.config.locale === "object" ? self.config.locale : self.config.locale !== "default" ? flatpickr.l10ns[self.config.locale] : undefined);
        (0, _formatting.tokenRegex).D = "(" + self.l10n.weekdays.shorthand.join("|") + ")";
        (0, _formatting.tokenRegex).l = "(" + self.l10n.weekdays.longhand.join("|") + ")";
        (0, _formatting.tokenRegex).M = "(" + self.l10n.months.shorthand.join("|") + ")";
        (0, _formatting.tokenRegex).F = "(" + self.l10n.months.longhand.join("|") + ")";
        (0, _formatting.tokenRegex).K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";
        var userConfig = __assign(__assign({}, instanceConfig), JSON.parse(JSON.stringify(element.dataset || {})));
        if (userConfig.time_24hr === undefined && flatpickr.defaultConfig.time_24hr === undefined) self.config.time_24hr = self.l10n.time_24hr;
        self.formatDate = (0, _dates.createDateFormatter)(self);
        self.parseDate = (0, _dates.createDateParser)({
            config: self.config,
            l10n: self.l10n
        });
    }
    function positionCalendar(customPositionElement) {
        if (typeof self.config.position === "function") return void self.config.position(self, customPositionElement);
        if (self.calendarContainer === undefined) return;
        triggerEvent("onPreCalendarPosition");
        var positionElement = customPositionElement || self._positionElement;
        var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, function(acc, child) {
            return acc + child.offsetHeight;
        }, 0), calendarWidth = self.calendarContainer.offsetWidth, configPos = self.config.position.split(" "), configPosVertical = configPos[0], configPosHorizontal = configPos.length > 1 ? configPos[1] : null, inputBounds = positionElement.getBoundingClientRect(), distanceFromBottom = window.innerHeight - inputBounds.bottom, showOnTop = configPosVertical === "above" || configPosVertical !== "below" && distanceFromBottom < calendarHeight && inputBounds.top > calendarHeight;
        var top = window.pageYOffset + inputBounds.top + (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
        (0, _dom.toggleClass)(self.calendarContainer, "arrowTop", !showOnTop);
        (0, _dom.toggleClass)(self.calendarContainer, "arrowBottom", showOnTop);
        if (self.config.inline) return;
        var left = window.pageXOffset + inputBounds.left;
        var isCenter = false;
        var isRight = false;
        if (configPosHorizontal === "center") {
            left -= (calendarWidth - inputBounds.width) / 2;
            isCenter = true;
        } else if (configPosHorizontal === "right") {
            left -= calendarWidth - inputBounds.width;
            isRight = true;
        }
        (0, _dom.toggleClass)(self.calendarContainer, "arrowLeft", !isCenter && !isRight);
        (0, _dom.toggleClass)(self.calendarContainer, "arrowCenter", isCenter);
        (0, _dom.toggleClass)(self.calendarContainer, "arrowRight", isRight);
        var right = window.document.body.offsetWidth - (window.pageXOffset + inputBounds.right);
        var rightMost = left + calendarWidth > window.document.body.offsetWidth;
        var centerMost = right + calendarWidth > window.document.body.offsetWidth;
        (0, _dom.toggleClass)(self.calendarContainer, "rightMost", rightMost);
        if (self.config.static) return;
        self.calendarContainer.style.top = top + "px";
        if (!rightMost) {
            self.calendarContainer.style.left = left + "px";
            self.calendarContainer.style.right = "auto";
        } else if (!centerMost) {
            self.calendarContainer.style.left = "auto";
            self.calendarContainer.style.right = right + "px";
        } else {
            var doc = getDocumentStyleSheet();
            if (doc === undefined) return;
            var bodyWidth = window.document.body.offsetWidth;
            var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
            var centerBefore = ".flatpickr-calendar.centerMost:before";
            var centerAfter = ".flatpickr-calendar.centerMost:after";
            var centerIndex = doc.cssRules.length;
            var centerStyle = "{left:" + inputBounds.left + "px;right:auto;}";
            (0, _dom.toggleClass)(self.calendarContainer, "rightMost", false);
            (0, _dom.toggleClass)(self.calendarContainer, "centerMost", true);
            doc.insertRule(centerBefore + "," + centerAfter + centerStyle, centerIndex);
            self.calendarContainer.style.left = centerLeft + "px";
            self.calendarContainer.style.right = "auto";
        }
    }
    function getDocumentStyleSheet() {
        var editableSheet = null;
        for(var i = 0; i < document.styleSheets.length; i++){
            var sheet = document.styleSheets[i];
            if (!sheet.cssRules) continue;
            try {
                sheet.cssRules;
            } catch (err) {
                continue;
            }
            editableSheet = sheet;
            break;
        }
        return editableSheet != null ? editableSheet : createStyleSheet();
    }
    function createStyleSheet() {
        var style = document.createElement("style");
        document.head.appendChild(style);
        return style.sheet;
    }
    function redraw() {
        if (self.config.noCalendar || self.isMobile) return;
        buildMonthSwitch();
        updateNavigationCurrentMonth();
        buildDays();
    }
    function focusAndClose() {
        self._input.focus();
        if (window.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.msMaxTouchPoints !== undefined) setTimeout(self.close, 0);
        else self.close();
    }
    function selectDate(e) {
        e.preventDefault();
        e.stopPropagation();
        var isSelectable = function(day) {
            return day.classList && day.classList.contains("flatpickr-day") && !day.classList.contains("flatpickr-disabled") && !day.classList.contains("notAllowed");
        };
        var t = (0, _dom.findParent)((0, _dom.getEventTarget)(e), isSelectable);
        if (t === undefined) return;
        var target = t;
        var selectedDate = self.latestSelectedDateObj = new Date(target.dateObj.getTime());
        var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth || selectedDate.getMonth() > self.currentMonth + self.config.showMonths - 1) && self.config.mode !== "range";
        self.selectedDateElem = target;
        if (self.config.mode === "single") self.selectedDates = [
            selectedDate
        ];
        else if (self.config.mode === "multiple") {
            var selectedIndex = isDateSelected(selectedDate);
            if (selectedIndex) self.selectedDates.splice(parseInt(selectedIndex), 1);
            else self.selectedDates.push(selectedDate);
        } else if (self.config.mode === "range") {
            if (self.selectedDates.length === 2) self.clear(false, false);
            self.latestSelectedDateObj = selectedDate;
            self.selectedDates.push(selectedDate);
            if ((0, _dates.compareDates)(selectedDate, self.selectedDates[0], true) !== 0) self.selectedDates.sort(function(a, b) {
                return a.getTime() - b.getTime();
            });
        }
        setHoursFromInputs();
        if (shouldChangeMonth) {
            var isNewYear = self.currentYear !== selectedDate.getFullYear();
            self.currentYear = selectedDate.getFullYear();
            self.currentMonth = selectedDate.getMonth();
            if (isNewYear) {
                triggerEvent("onYearChange");
                buildMonthSwitch();
            }
            triggerEvent("onMonthChange");
        }
        updateNavigationCurrentMonth();
        buildDays();
        updateValue();
        if (!shouldChangeMonth && self.config.mode !== "range" && self.config.showMonths === 1) focusOnDayElem(target);
        else if (self.selectedDateElem !== undefined && self.hourElement === undefined) self.selectedDateElem && self.selectedDateElem.focus();
        if (self.hourElement !== undefined) self.hourElement !== undefined && self.hourElement.focus();
        if (self.config.closeOnSelect) {
            var single = self.config.mode === "single" && !self.config.enableTime;
            var range = self.config.mode === "range" && self.selectedDates.length === 2 && !self.config.enableTime;
            if (single || range) focusAndClose();
        }
        triggerChange();
    }
    var CALLBACKS = {
        locale: [
            setupLocale,
            updateWeekdays
        ],
        showMonths: [
            buildMonths,
            setCalendarWidth,
            buildWeekdays
        ],
        minDate: [
            jumpToDate
        ],
        maxDate: [
            jumpToDate
        ],
        positionElement: [
            updatePositionElement
        ],
        clickOpens: [
            function() {
                if (self.config.clickOpens === true) {
                    bind(self._input, "focus", self.open);
                    bind(self._input, "click", self.open);
                } else {
                    self._input.removeEventListener("focus", self.open);
                    self._input.removeEventListener("click", self.open);
                }
            }
        ]
    };
    function set(option, value) {
        if (option !== null && typeof option === "object") {
            Object.assign(self.config, option);
            for(var key in option)if (CALLBACKS[key] !== undefined) CALLBACKS[key].forEach(function(x) {
                return x();
            });
        } else {
            self.config[option] = value;
            if (CALLBACKS[option] !== undefined) CALLBACKS[option].forEach(function(x) {
                return x();
            });
            else if ((0, _options.HOOKS).indexOf(option) > -1) self.config[option] = (0, _utils.arrayify)(value);
        }
        self.redraw();
        updateValue(true);
    }
    function setSelectedDate(inputDate, format) {
        var dates = [];
        if (inputDate instanceof Array) dates = inputDate.map(function(d) {
            return self.parseDate(d, format);
        });
        else if (inputDate instanceof Date || typeof inputDate === "number") dates = [
            self.parseDate(inputDate, format)
        ];
        else if (typeof inputDate === "string") switch(self.config.mode){
            case "single":
            case "time":
                dates = [
                    self.parseDate(inputDate, format)
                ];
                break;
            case "multiple":
                dates = inputDate.split(self.config.conjunction).map(function(date) {
                    return self.parseDate(date, format);
                });
                break;
            case "range":
                dates = inputDate.split(self.l10n.rangeSeparator).map(function(date) {
                    return self.parseDate(date, format);
                });
                break;
            default:
                break;
        }
        else self.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
        self.selectedDates = self.config.allowInvalidPreload ? dates : dates.filter(function(d) {
            return d instanceof Date && isEnabled(d, false);
        });
        if (self.config.mode === "range") self.selectedDates.sort(function(a, b) {
            return a.getTime() - b.getTime();
        });
    }
    function setDate(date, triggerChange, format) {
        if (triggerChange === void 0) triggerChange = false;
        if (format === void 0) format = self.config.dateFormat;
        if (date !== 0 && !date || date instanceof Array && date.length === 0) return self.clear(triggerChange);
        setSelectedDate(date, format);
        self.latestSelectedDateObj = self.selectedDates[self.selectedDates.length - 1];
        self.redraw();
        jumpToDate(undefined, triggerChange);
        setHoursFromDate();
        if (self.selectedDates.length === 0) self.clear(false);
        updateValue(triggerChange);
        if (triggerChange) triggerEvent("onChange");
    }
    function parseDateRules(arr) {
        return arr.slice().map(function(rule) {
            if (typeof rule === "string" || typeof rule === "number" || rule instanceof Date) return self.parseDate(rule, undefined, true);
            else if (rule && typeof rule === "object" && rule.from && rule.to) return {
                from: self.parseDate(rule.from, undefined),
                to: self.parseDate(rule.to, undefined)
            };
            return rule;
        }).filter(function(x) {
            return x;
        });
    }
    function setupDates() {
        self.selectedDates = [];
        self.now = self.parseDate(self.config.now) || new Date();
        var preloadedDate = self.config.defaultDate || ((self.input.nodeName === "INPUT" || self.input.nodeName === "TEXTAREA") && self.input.placeholder && self.input.value === self.input.placeholder ? null : self.input.value);
        if (preloadedDate) setSelectedDate(preloadedDate, self.config.dateFormat);
        self._initialDate = self.selectedDates.length > 0 ? self.selectedDates[0] : self.config.minDate && self.config.minDate.getTime() > self.now.getTime() ? self.config.minDate : self.config.maxDate && self.config.maxDate.getTime() < self.now.getTime() ? self.config.maxDate : self.now;
        self.currentYear = self._initialDate.getFullYear();
        self.currentMonth = self._initialDate.getMonth();
        if (self.selectedDates.length > 0) self.latestSelectedDateObj = self.selectedDates[0];
        if (self.config.minTime !== undefined) self.config.minTime = self.parseDate(self.config.minTime, "H:i");
        if (self.config.maxTime !== undefined) self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
        self.minDateHasTime = !!self.config.minDate && (self.config.minDate.getHours() > 0 || self.config.minDate.getMinutes() > 0 || self.config.minDate.getSeconds() > 0);
        self.maxDateHasTime = !!self.config.maxDate && (self.config.maxDate.getHours() > 0 || self.config.maxDate.getMinutes() > 0 || self.config.maxDate.getSeconds() > 0);
    }
    function setupInputs() {
        self.input = getInputElem();
        if (!self.input) {
            self.config.errorHandler(new Error("Invalid input element specified"));
            return;
        }
        self.input._type = self.input.type;
        self.input.type = "text";
        self.input.classList.add("flatpickr-input");
        self._input = self.input;
        if (self.config.altInput) {
            self.altInput = (0, _dom.createElement)(self.input.nodeName, self.config.altInputClass);
            self._input = self.altInput;
            self.altInput.placeholder = self.input.placeholder;
            self.altInput.disabled = self.input.disabled;
            self.altInput.required = self.input.required;
            self.altInput.tabIndex = self.input.tabIndex;
            self.altInput.type = "text";
            self.input.setAttribute("type", "hidden");
            if (!self.config.static && self.input.parentNode) self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
        }
        if (!self.config.allowInput) self._input.setAttribute("readonly", "readonly");
        updatePositionElement();
    }
    function updatePositionElement() {
        self._positionElement = self.config.positionElement || self._input;
    }
    function setupMobile() {
        var inputType = self.config.enableTime ? self.config.noCalendar ? "time" : "datetime-local" : "date";
        self.mobileInput = (0, _dom.createElement)("input", self.input.className + " flatpickr-mobile");
        self.mobileInput.tabIndex = 1;
        self.mobileInput.type = inputType;
        self.mobileInput.disabled = self.input.disabled;
        self.mobileInput.required = self.input.required;
        self.mobileInput.placeholder = self.input.placeholder;
        self.mobileFormatStr = inputType === "datetime-local" ? "Y-m-d\\TH:i:S" : inputType === "date" ? "Y-m-d" : "H:i:S";
        if (self.selectedDates.length > 0) self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
        if (self.config.minDate) self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
        if (self.config.maxDate) self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
        if (self.input.getAttribute("step")) self.mobileInput.step = String(self.input.getAttribute("step"));
        self.input.type = "hidden";
        if (self.altInput !== undefined) self.altInput.type = "hidden";
        try {
            if (self.input.parentNode) self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
        } catch (_a) {}
        bind(self.mobileInput, "change", function(e) {
            self.setDate((0, _dom.getEventTarget)(e).value, false, self.mobileFormatStr);
            triggerEvent("onChange");
            triggerEvent("onClose");
        });
    }
    function toggle(e) {
        if (self.isOpen === true) return self.close();
        self.open(e);
    }
    function triggerEvent(event, data) {
        if (self.config === undefined) return;
        var hooks = self.config[event];
        if (hooks !== undefined && hooks.length > 0) for(var i = 0; hooks[i] && i < hooks.length; i++)hooks[i](self.selectedDates, self.input.value, self, data);
        if (event === "onChange") {
            self.input.dispatchEvent(createEvent("change"));
            self.input.dispatchEvent(createEvent("input"));
        }
    }
    function createEvent(name) {
        var e = document.createEvent("Event");
        e.initEvent(name, true, true);
        return e;
    }
    function isDateSelected(date) {
        for(var i = 0; i < self.selectedDates.length; i++){
            var selectedDate = self.selectedDates[i];
            if (selectedDate instanceof Date && (0, _dates.compareDates)(selectedDate, date) === 0) return "" + i;
        }
        return false;
    }
    function isDateInRange(date) {
        if (self.config.mode !== "range" || self.selectedDates.length < 2) return false;
        return (0, _dates.compareDates)(date, self.selectedDates[0]) >= 0 && (0, _dates.compareDates)(date, self.selectedDates[1]) <= 0;
    }
    function updateNavigationCurrentMonth() {
        if (self.config.noCalendar || self.isMobile || !self.monthNav) return;
        self.yearElements.forEach(function(yearElement, i) {
            var d = new Date(self.currentYear, self.currentMonth, 1);
            d.setMonth(self.currentMonth + i);
            if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") self.monthElements[i].textContent = (0, _formatting.monthToStr)(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
            else self.monthsDropdownContainer.value = d.getMonth().toString();
            yearElement.value = d.getFullYear().toString();
        });
        self._hidePrevMonthArrow = self.config.minDate !== undefined && (self.currentYear === self.config.minDate.getFullYear() ? self.currentMonth <= self.config.minDate.getMonth() : self.currentYear < self.config.minDate.getFullYear());
        self._hideNextMonthArrow = self.config.maxDate !== undefined && (self.currentYear === self.config.maxDate.getFullYear() ? self.currentMonth + 1 > self.config.maxDate.getMonth() : self.currentYear > self.config.maxDate.getFullYear());
    }
    function getDateStr(specificFormat) {
        var format = specificFormat || (self.config.altInput ? self.config.altFormat : self.config.dateFormat);
        return self.selectedDates.map(function(dObj) {
            return self.formatDate(dObj, format);
        }).filter(function(d, i, arr) {
            return self.config.mode !== "range" || self.config.enableTime || arr.indexOf(d) === i;
        }).join(self.config.mode !== "range" ? self.config.conjunction : self.l10n.rangeSeparator);
    }
    function updateValue(triggerChange) {
        if (triggerChange === void 0) triggerChange = true;
        if (self.mobileInput !== undefined && self.mobileFormatStr) self.mobileInput.value = self.latestSelectedDateObj !== undefined ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr) : "";
        self.input.value = getDateStr(self.config.dateFormat);
        if (self.altInput !== undefined) self.altInput.value = getDateStr(self.config.altFormat);
        if (triggerChange !== false) triggerEvent("onValueUpdate");
    }
    function onMonthNavClick(e) {
        var eventTarget = (0, _dom.getEventTarget)(e);
        var isPrevMonth = self.prevMonthNav.contains(eventTarget);
        var isNextMonth = self.nextMonthNav.contains(eventTarget);
        if (isPrevMonth || isNextMonth) changeMonth(isPrevMonth ? -1 : 1);
        else if (self.yearElements.indexOf(eventTarget) >= 0) eventTarget.select();
        else if (eventTarget.classList.contains("arrowUp")) self.changeYear(self.currentYear + 1);
        else if (eventTarget.classList.contains("arrowDown")) self.changeYear(self.currentYear - 1);
    }
    function timeWrapper(e) {
        e.preventDefault();
        var isKeyDown = e.type === "keydown", eventTarget = (0, _dom.getEventTarget)(e), input = eventTarget;
        if (self.amPM !== undefined && eventTarget === self.amPM) self.amPM.textContent = self.l10n.amPM[(0, _utils.int)(self.amPM.textContent === self.l10n.amPM[0])];
        var min = parseFloat(input.getAttribute("min")), max = parseFloat(input.getAttribute("max")), step = parseFloat(input.getAttribute("step")), curValue = parseInt(input.value, 10), delta = e.delta || (isKeyDown ? e.which === 38 ? 1 : -1 : 0);
        var newValue = curValue + step * delta;
        if (typeof input.value !== "undefined" && input.value.length === 2) {
            var isHourElem = input === self.hourElement, isMinuteElem = input === self.minuteElement;
            if (newValue < min) {
                newValue = max + newValue + (0, _utils.int)(!isHourElem) + ((0, _utils.int)(isHourElem) && (0, _utils.int)(!self.amPM));
                if (isMinuteElem) incrementNumInput(undefined, -1, self.hourElement);
            } else if (newValue > max) {
                newValue = input === self.hourElement ? newValue - max - (0, _utils.int)(!self.amPM) : min;
                if (isMinuteElem) incrementNumInput(undefined, 1, self.hourElement);
            }
            if (self.amPM && isHourElem && (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) self.amPM.textContent = self.l10n.amPM[(0, _utils.int)(self.amPM.textContent === self.l10n.amPM[0])];
            input.value = (0, _utils.pad)(newValue);
        }
    }
    init();
    return self;
}
function _flatpickr(nodeList, config) {
    var nodes = Array.prototype.slice.call(nodeList).filter(function(x) {
        return x instanceof HTMLElement;
    });
    var instances = [];
    for(var i = 0; i < nodes.length; i++){
        var node = nodes[i];
        try {
            if (node.getAttribute("data-fp-omit") !== null) continue;
            if (node._flatpickr !== undefined) {
                node._flatpickr.destroy();
                node._flatpickr = undefined;
            }
            node._flatpickr = FlatpickrInstance(node, config || {});
            instances.push(node._flatpickr);
        } catch (e) {
            console.error(e);
        }
    }
    return instances.length === 1 ? instances[0] : instances;
}
if (typeof HTMLElement !== "undefined" && typeof HTMLCollection !== "undefined" && typeof NodeList !== "undefined") {
    HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function(config) {
        return _flatpickr(this, config);
    };
    HTMLElement.prototype.flatpickr = function(config) {
        return _flatpickr([
            this
        ], config);
    };
}
var flatpickr = function(selector, config) {
    if (typeof selector === "string") return _flatpickr(window.document.querySelectorAll(selector), config);
    else if (selector instanceof Node) return _flatpickr([
        selector
    ], config);
    else return _flatpickr(selector, config);
};
flatpickr.defaultConfig = {};
flatpickr.l10ns = {
    en: __assign({}, (0, _defaultDefault.default)),
    default: __assign({}, (0, _defaultDefault.default))
};
flatpickr.localize = function(l10n) {
    flatpickr.l10ns.default = __assign(__assign({}, flatpickr.l10ns.default), l10n);
};
flatpickr.setDefaults = function(config) {
    flatpickr.defaultConfig = __assign(__assign({}, flatpickr.defaultConfig), config);
};
flatpickr.parseDate = (0, _dates.createDateParser)({});
flatpickr.formatDate = (0, _dates.createDateFormatter)({});
flatpickr.compareDates = (0, _dates.compareDates);
if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") jQuery.fn.flatpickr = function(config) {
    return _flatpickr(this, config);
};
Date.prototype.fp_incr = function(days) {
    return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
};
if (typeof window !== "undefined") window.flatpickr = flatpickr;
exports.default = flatpickr;

},{"./types/options":"bXtBt","./l10n/default":"fxflw","./utils":"tqkc0","./utils/dom":"eoD9c","./utils/dates":"hioKU","./utils/formatting":"i6nZP","./utils/polyfills":"2RVlY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bXtBt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HOOKS", ()=>HOOKS);
parcelHelpers.export(exports, "defaults", ()=>defaults);
var HOOKS = [
    "onChange",
    "onClose",
    "onDayCreate",
    "onDestroy",
    "onKeyDown",
    "onMonthChange",
    "onOpen",
    "onParseConfig",
    "onReady",
    "onValueUpdate",
    "onYearChange",
    "onPreCalendarPosition"
];
var defaults = {
    _disable: [],
    allowInput: false,
    allowInvalidPreload: false,
    altFormat: "F j, Y",
    altInput: false,
    altInputClass: "form-control input",
    animate: typeof window === "object" && window.navigator.userAgent.indexOf("MSIE") === -1,
    ariaDateFormat: "F j, Y",
    autoFillDefaultTime: true,
    clickOpens: true,
    closeOnSelect: true,
    conjunction: ", ",
    dateFormat: "Y-m-d",
    defaultHour: 12,
    defaultMinute: 0,
    defaultSeconds: 0,
    disable: [],
    disableMobile: false,
    enableSeconds: false,
    enableTime: false,
    errorHandler: function(err) {
        return typeof console !== "undefined" && console.warn(err);
    },
    getWeek: function(givenDate) {
        var date = new Date(givenDate.getTime());
        date.setHours(0, 0, 0, 0);
        date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
        var week1 = new Date(date.getFullYear(), 0, 4);
        return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
    },
    hourIncrement: 1,
    ignoredFocusElements: [],
    inline: false,
    locale: "default",
    minuteIncrement: 5,
    mode: "single",
    monthSelectorType: "dropdown",
    nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
    noCalendar: false,
    now: new Date(),
    onChange: [],
    onClose: [],
    onDayCreate: [],
    onDestroy: [],
    onKeyDown: [],
    onMonthChange: [],
    onOpen: [],
    onParseConfig: [],
    onReady: [],
    onValueUpdate: [],
    onYearChange: [],
    onPreCalendarPosition: [],
    plugins: [],
    position: "auto",
    positionElement: undefined,
    prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
    shorthandCurrentMonth: false,
    showMonths: 1,
    static: false,
    time_24hr: false,
    weekNumbers: false,
    wrap: false
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fxflw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "english", ()=>english);
var english = {
    weekdays: {
        shorthand: [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
        ],
        longhand: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ]
    },
    months: {
        shorthand: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ],
        longhand: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ]
    },
    daysInMonth: [
        31,
        28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ],
    firstDayOfWeek: 0,
    ordinal: function(nth) {
        var s = nth % 100;
        if (s > 3 && s < 21) return "th";
        switch(s % 10){
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    },
    rangeSeparator: " to ",
    weekAbbreviation: "Wk",
    scrollTitle: "Scroll to increment",
    toggleTitle: "Click to toggle",
    amPM: [
        "AM",
        "PM"
    ],
    yearAriaLabel: "Year",
    monthAriaLabel: "Month",
    hourAriaLabel: "Hour",
    minuteAriaLabel: "Minute",
    time_24hr: false
};
exports.default = english;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"tqkc0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pad", ()=>pad);
parcelHelpers.export(exports, "int", ()=>int);
parcelHelpers.export(exports, "debounce", ()=>debounce);
parcelHelpers.export(exports, "arrayify", ()=>arrayify);
var pad = function(number, length) {
    if (length === void 0) length = 2;
    return ("000" + number).slice(length * -1);
};
var int = function(bool) {
    return bool === true ? 1 : 0;
};
function debounce(fn, wait) {
    var t;
    return function() {
        var _this = this;
        var args = arguments;
        clearTimeout(t);
        t = setTimeout(function() {
            return fn.apply(_this, args);
        }, wait);
    };
}
var arrayify = function(obj) {
    return obj instanceof Array ? obj : [
        obj
    ];
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eoD9c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toggleClass", ()=>toggleClass);
parcelHelpers.export(exports, "createElement", ()=>createElement);
parcelHelpers.export(exports, "clearNode", ()=>clearNode);
parcelHelpers.export(exports, "findParent", ()=>findParent);
parcelHelpers.export(exports, "createNumberInput", ()=>createNumberInput);
parcelHelpers.export(exports, "getEventTarget", ()=>getEventTarget);
function toggleClass(elem, className, bool) {
    if (bool === true) return elem.classList.add(className);
    elem.classList.remove(className);
}
function createElement(tag, className, content) {
    var e = window.document.createElement(tag);
    className = className || "";
    content = content || "";
    e.className = className;
    if (content !== undefined) e.textContent = content;
    return e;
}
function clearNode(node) {
    while(node.firstChild)node.removeChild(node.firstChild);
}
function findParent(node, condition) {
    if (condition(node)) return node;
    else if (node.parentNode) return findParent(node.parentNode, condition);
    return undefined;
}
function createNumberInput(inputClassName, opts) {
    var wrapper = createElement("div", "numInputWrapper"), numInput = createElement("input", "numInput " + inputClassName), arrowUp = createElement("span", "arrowUp"), arrowDown = createElement("span", "arrowDown");
    if (navigator.userAgent.indexOf("MSIE 9.0") === -1) numInput.type = "number";
    else {
        numInput.type = "text";
        numInput.pattern = "\\d*";
    }
    if (opts !== undefined) for(var key in opts)numInput.setAttribute(key, opts[key]);
    wrapper.appendChild(numInput);
    wrapper.appendChild(arrowUp);
    wrapper.appendChild(arrowDown);
    return wrapper;
}
function getEventTarget(event) {
    try {
        if (typeof event.composedPath === "function") {
            var path = event.composedPath();
            return path[0];
        }
        return event.target;
    } catch (error) {
        return event.target;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hioKU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createDateFormatter", ()=>createDateFormatter);
parcelHelpers.export(exports, "createDateParser", ()=>createDateParser);
parcelHelpers.export(exports, "compareDates", ()=>compareDates);
parcelHelpers.export(exports, "compareTimes", ()=>compareTimes);
parcelHelpers.export(exports, "isBetween", ()=>isBetween);
parcelHelpers.export(exports, "calculateSecondsSinceMidnight", ()=>calculateSecondsSinceMidnight);
parcelHelpers.export(exports, "parseSeconds", ()=>parseSeconds);
parcelHelpers.export(exports, "duration", ()=>duration);
parcelHelpers.export(exports, "getDefaultHours", ()=>getDefaultHours);
var _formatting = require("./formatting");
var _options = require("../types/options");
var _default = require("../l10n/default");
var createDateFormatter = function(_a) {
    var _b = _a.config, config = _b === void 0 ? (0, _options.defaults) : _b, _c = _a.l10n, l10n = _c === void 0 ? (0, _default.english) : _c, _d = _a.isMobile, isMobile = _d === void 0 ? false : _d;
    return function(dateObj, frmt, overrideLocale) {
        var locale = overrideLocale || l10n;
        if (config.formatDate !== undefined && !isMobile) return config.formatDate(dateObj, frmt, locale);
        return frmt.split("").map(function(c, i, arr) {
            return (0, _formatting.formats)[c] && arr[i - 1] !== "\\" ? (0, _formatting.formats)[c](dateObj, locale, config) : c !== "\\" ? c : "";
        }).join("");
    };
};
var createDateParser = function(_a) {
    var _b = _a.config, config = _b === void 0 ? (0, _options.defaults) : _b, _c = _a.l10n, l10n = _c === void 0 ? (0, _default.english) : _c;
    return function(date, givenFormat, timeless, customLocale) {
        if (date !== 0 && !date) return undefined;
        var locale = customLocale || l10n;
        var parsedDate;
        var dateOrig = date;
        if (date instanceof Date) parsedDate = new Date(date.getTime());
        else if (typeof date !== "string" && date.toFixed !== undefined) parsedDate = new Date(date);
        else if (typeof date === "string") {
            var format = givenFormat || (config || (0, _options.defaults)).dateFormat;
            var datestr = String(date).trim();
            if (datestr === "today") {
                parsedDate = new Date();
                timeless = true;
            } else if (config && config.parseDate) parsedDate = config.parseDate(date, format);
            else if (/Z$/.test(datestr) || /GMT$/.test(datestr)) parsedDate = new Date(date);
            else {
                var matched = void 0, ops = [];
                for(var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++){
                    var token = format[i];
                    var isBackSlash = token === "\\";
                    var escaped = format[i - 1] === "\\" || isBackSlash;
                    if ((0, _formatting.tokenRegex)[token] && !escaped) {
                        regexStr += (0, _formatting.tokenRegex)[token];
                        var match = new RegExp(regexStr).exec(date);
                        if (match && (matched = true)) ops[token !== "Y" ? "push" : "unshift"]({
                            fn: (0, _formatting.revFormat)[token],
                            val: match[++matchIndex]
                        });
                    } else if (!isBackSlash) regexStr += ".";
                }
                parsedDate = !config || !config.noCalendar ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0) : new Date(new Date().setHours(0, 0, 0, 0));
                ops.forEach(function(_a) {
                    var fn = _a.fn, val = _a.val;
                    return parsedDate = fn(parsedDate, val, locale) || parsedDate;
                });
                parsedDate = matched ? parsedDate : undefined;
            }
        }
        if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
            config.errorHandler(new Error("Invalid date provided: " + dateOrig));
            return undefined;
        }
        if (timeless === true) parsedDate.setHours(0, 0, 0, 0);
        return parsedDate;
    };
};
function compareDates(date1, date2, timeless) {
    if (timeless === void 0) timeless = true;
    if (timeless !== false) return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
    return date1.getTime() - date2.getTime();
}
function compareTimes(date1, date2) {
    return 3600 * (date1.getHours() - date2.getHours()) + 60 * (date1.getMinutes() - date2.getMinutes()) + date1.getSeconds() - date2.getSeconds();
}
var isBetween = function(ts, ts1, ts2) {
    return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
};
var calculateSecondsSinceMidnight = function(hours, minutes, seconds) {
    return hours * 3600 + minutes * 60 + seconds;
};
var parseSeconds = function(secondsSinceMidnight) {
    var hours = Math.floor(secondsSinceMidnight / 3600), minutes = (secondsSinceMidnight - hours * 3600) / 60;
    return [
        hours,
        minutes,
        secondsSinceMidnight - hours * 3600 - minutes * 60
    ];
};
var duration = {
    DAY: 86400000
};
function getDefaultHours(config) {
    var hours = config.defaultHour;
    var minutes = config.defaultMinute;
    var seconds = config.defaultSeconds;
    if (config.minDate !== undefined) {
        var minHour = config.minDate.getHours();
        var minMinutes = config.minDate.getMinutes();
        var minSeconds = config.minDate.getSeconds();
        if (hours < minHour) hours = minHour;
        if (hours === minHour && minutes < minMinutes) minutes = minMinutes;
        if (hours === minHour && minutes === minMinutes && seconds < minSeconds) seconds = config.minDate.getSeconds();
    }
    if (config.maxDate !== undefined) {
        var maxHr = config.maxDate.getHours();
        var maxMinutes = config.maxDate.getMinutes();
        hours = Math.min(hours, maxHr);
        if (hours === maxHr) minutes = Math.min(maxMinutes, minutes);
        if (hours === maxHr && minutes === maxMinutes) seconds = config.maxDate.getSeconds();
    }
    return {
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}

},{"./formatting":"i6nZP","../types/options":"bXtBt","../l10n/default":"fxflw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i6nZP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "monthToStr", ()=>monthToStr);
parcelHelpers.export(exports, "revFormat", ()=>revFormat);
parcelHelpers.export(exports, "tokenRegex", ()=>tokenRegex);
parcelHelpers.export(exports, "formats", ()=>formats);
var _utils = require("../utils");
var doNothing = function() {
    return undefined;
};
var monthToStr = function(monthNumber, shorthand, locale) {
    return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];
};
var revFormat = {
    D: doNothing,
    F: function(dateObj, monthName, locale) {
        dateObj.setMonth(locale.months.longhand.indexOf(monthName));
    },
    G: function(dateObj, hour) {
        dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
    },
    H: function(dateObj, hour) {
        dateObj.setHours(parseFloat(hour));
    },
    J: function(dateObj, day) {
        dateObj.setDate(parseFloat(day));
    },
    K: function(dateObj, amPM, locale) {
        dateObj.setHours(dateObj.getHours() % 12 + 12 * (0, _utils.int)(new RegExp(locale.amPM[1], "i").test(amPM)));
    },
    M: function(dateObj, shortMonth, locale) {
        dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
    },
    S: function(dateObj, seconds) {
        dateObj.setSeconds(parseFloat(seconds));
    },
    U: function(_, unixSeconds) {
        return new Date(parseFloat(unixSeconds) * 1000);
    },
    W: function(dateObj, weekNum, locale) {
        var weekNumber = parseInt(weekNum);
        var date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
        date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
        return date;
    },
    Y: function(dateObj, year) {
        dateObj.setFullYear(parseFloat(year));
    },
    Z: function(_, ISODate) {
        return new Date(ISODate);
    },
    d: function(dateObj, day) {
        dateObj.setDate(parseFloat(day));
    },
    h: function(dateObj, hour) {
        dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
    },
    i: function(dateObj, minutes) {
        dateObj.setMinutes(parseFloat(minutes));
    },
    j: function(dateObj, day) {
        dateObj.setDate(parseFloat(day));
    },
    l: doNothing,
    m: function(dateObj, month) {
        dateObj.setMonth(parseFloat(month) - 1);
    },
    n: function(dateObj, month) {
        dateObj.setMonth(parseFloat(month) - 1);
    },
    s: function(dateObj, seconds) {
        dateObj.setSeconds(parseFloat(seconds));
    },
    u: function(_, unixMillSeconds) {
        return new Date(parseFloat(unixMillSeconds));
    },
    w: doNothing,
    y: function(dateObj, year) {
        dateObj.setFullYear(2000 + parseFloat(year));
    }
};
var tokenRegex = {
    D: "",
    F: "",
    G: "(\\d\\d|\\d)",
    H: "(\\d\\d|\\d)",
    J: "(\\d\\d|\\d)\\w+",
    K: "",
    M: "",
    S: "(\\d\\d|\\d)",
    U: "(.+)",
    W: "(\\d\\d|\\d)",
    Y: "(\\d{4})",
    Z: "(.+)",
    d: "(\\d\\d|\\d)",
    h: "(\\d\\d|\\d)",
    i: "(\\d\\d|\\d)",
    j: "(\\d\\d|\\d)",
    l: "",
    m: "(\\d\\d|\\d)",
    n: "(\\d\\d|\\d)",
    s: "(\\d\\d|\\d)",
    u: "(.+)",
    w: "(\\d\\d|\\d)",
    y: "(\\d{2})"
};
var formats = {
    Z: function(date) {
        return date.toISOString();
    },
    D: function(date, locale, options) {
        return locale.weekdays.shorthand[formats.w(date, locale, options)];
    },
    F: function(date, locale, options) {
        return monthToStr(formats.n(date, locale, options) - 1, false, locale);
    },
    G: function(date, locale, options) {
        return (0, _utils.pad)(formats.h(date, locale, options));
    },
    H: function(date) {
        return (0, _utils.pad)(date.getHours());
    },
    J: function(date, locale) {
        return locale.ordinal !== undefined ? date.getDate() + locale.ordinal(date.getDate()) : date.getDate();
    },
    K: function(date, locale) {
        return locale.amPM[(0, _utils.int)(date.getHours() > 11)];
    },
    M: function(date, locale) {
        return monthToStr(date.getMonth(), true, locale);
    },
    S: function(date) {
        return (0, _utils.pad)(date.getSeconds());
    },
    U: function(date) {
        return date.getTime() / 1000;
    },
    W: function(date, _, options) {
        return options.getWeek(date);
    },
    Y: function(date) {
        return (0, _utils.pad)(date.getFullYear(), 4);
    },
    d: function(date) {
        return (0, _utils.pad)(date.getDate());
    },
    h: function(date) {
        return date.getHours() % 12 ? date.getHours() % 12 : 12;
    },
    i: function(date) {
        return (0, _utils.pad)(date.getMinutes());
    },
    j: function(date) {
        return date.getDate();
    },
    l: function(date, locale) {
        return locale.weekdays.longhand[date.getDay()];
    },
    m: function(date) {
        return (0, _utils.pad)(date.getMonth() + 1);
    },
    n: function(date) {
        return date.getMonth() + 1;
    },
    s: function(date) {
        return date.getSeconds();
    },
    u: function(date) {
        return date.getTime();
    },
    w: function(date) {
        return date.getDay();
    },
    y: function(date) {
        return String(date.getFullYear()).substring(2);
    }
};

},{"../utils":"tqkc0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2RVlY":[function(require,module,exports) {
"use strict";
if (typeof Object.assign !== "function") Object.assign = function(target) {
    var args = [];
    for(var _i = 1; _i < arguments.length; _i++)args[_i - 1] = arguments[_i];
    if (!target) throw TypeError("Cannot convert undefined or null to object");
    var _loop_1 = function(source) {
        if (source) Object.keys(source).forEach(function(key) {
            return target[key] = source[key];
        });
    };
    for(var _a = 0, args_1 = args; _a < args_1.length; _a++){
        var source = args_1[_a];
        _loop_1(source);
    }
    return target;
};

},{}],"eVN6V":[function() {},{}],"i9zTq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "arrCategories", ()=>arrCategories);
var _fetchAPI = require("../API/fetchAPI");
var _refs = require("../refs");
var _renderMarkup = require("../renderMarkup");
var _storageLogic = require("../storageLogic");
var _const = require("../const");
var _addToRead = require("../addToRead/addToRead");
var _addToFavorites = require("../addToFavorites/addToFavorites");
var _paginationByCategories = require("../pagination/paginationByCategories");
var _removeListeners = require("./removeListeners");
var _loader = require("../loader/loader");
let arrCategories;
window.addEventListener("load", async ()=>{
    let results = await (0, _fetchAPI.ApiService).getCategories();
    _storageLogic.saveToLocal(_const.CATEGOREIS, results);
    arrCategories = _storageLogic.loadFromLocal(_const.CATEGOREIS);
    categoriesOnPageLoad();
});
(0, _refs.refs).menu.addEventListener("click", showCategoriesList);
function categoriesOnPageLoad() {
    clearCategories();
    if (window.matchMedia("(min-width: 1279.98px)").matches) markupDesktop();
    else if (window.matchMedia("(min-width: 767.98px)").matches) markupTablet();
    else markupMobile();
    (0, _refs.refs).categoriesBtnMenu.classList.remove("invisible");
}
function clearCategories() {
    (0, _refs.refs).categoriesBtnList.innerHTML = "";
    (0, _refs.refs).categoriesList.innerHTML = "";
}
function markupTablet() {
    (0, _refs.refs).categoriesBtnList.insertAdjacentHTML("afterbegin", markupCategoriesInBtn(arrCategories, 0, 4));
    (0, _refs.refs).categoriesList.insertAdjacentHTML("afterbegin", markupCategoriesInList(arrCategories, 4));
    (0, _refs.refs).categoriesBtnMenuText.textContent = "Others";
}
function markupDesktop() {
    (0, _refs.refs).categoriesBtnList.insertAdjacentHTML("afterbegin", markupCategoriesInBtn(arrCategories, 0, 6));
    (0, _refs.refs).categoriesList.insertAdjacentHTML("afterbegin", markupCategoriesInList(arrCategories, 6));
    (0, _refs.refs).categoriesBtnMenuText.textContent = "Others";
}
function markupMobile() {
    (0, _refs.refs).categoriesList.insertAdjacentHTML("afterbegin", markupCategoriesInList(arrCategories));
    (0, _refs.refs).categoriesBtnMenuText.textContent = "Categories";
}
function markupCategoriesInBtn(arrCategories, begin, end) {
    return arrCategories.slice(begin, end).map(({ section , display_name  })=>`<li> <button class="categories__btn" data-value="${section}">${display_name}
    </button> </li>`).join(" ");
}
function markupCategoriesInList(arrCategories, begin, end) {
    return arrCategories.slice(begin, end).map(({ section , display_name  })=>`<li class="categories__item" data-value="${section}">${display_name}</li>`).join(" ");
}
function showCategoriesList() {
    // refs.categoriesIconUp.classList.toggle('invisible');
    (0, _refs.refs).categoriesIconDown.classList.toggle("up");
    (0, _refs.refs).categoriesMenu.classList.toggle("invisible");
}
// ====================
// query by CATEGORIES btn click
//=====================
(0, _refs.refs).categoriesBox.addEventListener(`click`, (e)=>{
    (0, _removeListeners.removeEventListeners)();
    onCategoriesBtnClick(e);
    (0, _fetchAPI.ApiService).lastAction.action = onCategoriesBtnClick;
});
// ====================
// query by CATEGORIES
//=====================
async function onCategoriesBtnClick(e) {
    (0, _fetchAPI.ApiService).lastAction.searchBy = "category";
    if (!!e?.target?.dataset?.value && (0, _fetchAPI.ApiService).lastAction.query !== e.target.dataset.value) {
        (0, _fetchAPI.ApiService).resetOffset();
        (0, _fetchAPI.ApiService).category = e.target.dataset.value;
        (0, _fetchAPI.ApiService).lastAction.e = e;
        (0, _fetchAPI.ApiService).lastAction.query = e.target.dataset.value;
    }
    if (e.target.dataset.value !== undefined) (0, _loader.showLoader)();
    else return;
    const { results , num_results  } = await (0, _fetchAPI.ApiService).getNewsByCategories();
    let collectionByCategorie = [];
    collectionByCategorie = results.map((result)=>{
        const { abstract , published_date , uri , url , multimedia , section , title  } = result;
        let imgUrl;
        if (multimedia) imgUrl = multimedia[2]["url"];
        else imgUrl = imgUrl = "https://media4.giphy.com/media/h52OM8Rr5fLiZRqUBD/giphy.gif";
        const newDateFormat = corectDateInCategories(published_date);
        let obj = {
            imgUrl,
            title,
            text: abstract,
            date: newDateFormat,
            url,
            categorie: section,
            id: uri
        };
        return obj;
    });
    (0, _renderMarkup.clear)((0, _refs.refs).gallery);
    (0, _refs.refs).notFoundEl.classList.add("hidden");
    _storageLogic.saveToLocal(_const.KEY_COLLECTION, collectionByCategorie.slice(0, 9));
    if ((0, _fetchAPI.ApiService).offset === 0) (0, _paginationByCategories.paginationByCategory)(num_results);
    categoriesOnPageLoadGallery();
}
function categoriesOnPageLoadGallery() {
    let collection = _storageLogic.loadFromLocal(_const.KEY_COLLECTION);
    let collectionByPopular;
    if (window.matchMedia("(max-width: 768px)").matches) collection = collection.slice(0, 3);
    else if (window.matchMedia("(max-width: 1280px)").matches) collection = collection.slice(0, 7);
    else collection = collection.slice(0, 8);
    collectionByPopular = collection.map((0, _renderMarkup.renderMarkup)).join(``);
    renderGallery(collectionByPopular);
// weather.renderDefaultWeather();
}
function renderGallery(markup) {
    (0, _refs.refs).gallery.insertAdjacentHTML(`beforeend`, markup);
    (0, _addToRead.onloadToRead)();
    (0, _addToFavorites.onloadFavorite)();
    (0, _loader.hideLoader)();
    setTimeout(()=>{
        (0, _refs.refs).pageContainer.classList.add("show");
    }, 500);
}
function corectDateInCategories(date) {
    let newDateFormat = date.split("-");
    if (newDateFormat.length > 3) {
        newDateFormat[2] = newDateFormat[2].slice(0, 2);
        newDateFormat = newDateFormat.slice(0, 3);
        newDateFormat = newDateFormat.join("/");
    }
    return newDateFormat;
}

},{"../API/fetchAPI":"WCDdW","../refs":"2WoF2","../renderMarkup":"LPz2v","../storageLogic":"cLxmJ","../const":"jgw4B","../addToRead/addToRead":"bpk84","../addToFavorites/addToFavorites":"enlIi","../pagination/paginationByCategories":"aLYDH","./removeListeners":"8fMfG","../loader/loader":"74W1T","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"WCDdW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NewsAPI", ()=>NewsAPI);
parcelHelpers.export(exports, "ApiService", ()=>ApiService);
var _format = require("date-fns/format");
var _formatDefault = parcelHelpers.interopDefault(_format);
var _calendar = require("../calendar");
class NewsAPI {
    #BASE_URL = "https://api.nytimes.com/svc/";
    #API_KEY = "Y0rMFldQHIhCKPc5jiggZphSD4GPFMzb";
    #period;
    #query;
    #begin_date;
    #end_date;
    #page;
    #offset;
    #params = {
        "api-key": this.#API_KEY,
        q: this.#query,
        page: this.#page
    };
    constructor(){
        this.#period = 7;
        this.category = "all";
        this.#page = 1;
        this.#offset = 0;
        this.#begin_date = "";
        this.#end_date = "";
    }
    async getPopularNews() {
        const response = await fetch(this.#BASE_URL + `mostpopular/v2/viewed/${this.#period}.json?api-key=${this.#API_KEY}`);
        if (!response.ok) throw new Error(error);
        const { results  } = await response.json();
        return results;
    }
    async getNewsByQuery() {
        this.updateParams();
        const response = await fetch(this.#BASE_URL + "search/v2/articlesearch.json?" + new URLSearchParams(this.#params));
        if (!response.ok) throw new Error(error);
        const { response: { docs , meta  }  } = await response.json();
        // console.log(meta) // {hits: 29412, offset: 10, time: 30}
        return {
            docs,
            meta
        };
    }
    async getNewsByCategories() {
        const response = await fetch(this.#BASE_URL + `news/v3/content/nyt/${this.category}.json?` + new URLSearchParams({
            "api-key": this.#API_KEY,
            offset: this.#offset
        }));
        if (!response.ok) throw new Error(error);
        const { results , num_results  } = await response.json();
        return {
            results,
            num_results
        };
    }
    async getCategories() {
        const response = await fetch(this.#BASE_URL + `news/v3/content/section-list.json?api-key=${this.#API_KEY}`);
        if (!response.ok) throw new Error(error);
        const { results  } = await response.json();
        return results;
    }
    get query() {
        return this.#query;
    }
    set query(newQuery) {
        this.#query = newQuery;
    }
    resetPage() {
        this.#page = 1;
    }
    get page() {
        return this.#page;
    }
    set page(newPage) {
        this.#page = newPage;
    }
    get beginDate() {
        this.#begin_date;
    }
    set beginDate(newDate) {
        this.#begin_date = newDate;
    }
    get endDate() {
        this.#end_date;
    }
    set endDate(newDate) {
        this.#end_date = newDate;
    }
    get offset() {
        return this.#offset;
    }
    set offset(newOffset) {
        this.#offset = newOffset;
    }
    updateOffset() {
        this.#offset += 20;
    }
    resetOffset() {
        this.#offset = 0;
    }
    updateParams() {
        if (this.#begin_date !== "") Object.assign(this.#params, {
            q: this.#query,
            page: this.#page,
            begin_date: this.#begin_date
        });
        else Object.assign(this.#params, {
            q: this.#query,
            page: this.#page
        });
    }
    lastAction = {
        action: async ()=>null,
        query: null,
        e: null,
        searchBy: null
    };
}
const ApiService = new NewsAPI();

},{"date-fns/format":"lnm6V","../calendar":"fsVt9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bpk84":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//========================
// ADD TO READ
//========================
parcelHelpers.export(exports, "toggleToRead", ()=>toggleToRead);
//========================
// DURING ON LOAD TO READ , should be added after render markup call
//========================
parcelHelpers.export(exports, "onloadToRead", ()=>onloadToRead);
var _const = require("../const");
var _storageLogic = require("../storageLogic");
var _refs = require("../refs");
var _format = require("date-fns/format");
var _formatDefault = parcelHelpers.interopDefault(_format);
function toggleToRead(e) {
    if (!e.target.matches(".info__link")) return;
    let card = e.target.parentNode.parentNode.parentNode.parentNode;
    let id = card.id;
    let tickToRead = card.querySelector(".read");
    let readCollection = _storageLogic.loadFromLocal(_const.KEY_READ) || [];
    let date = (0, _formatDefault.default)(Date.now(), "MM/dd/yyyy");
    if (!tickToRead.classList.contains("show")) {
        let readCard = _storageLogic.loadFromLocal(_const.KEY_COLLECTION).find((obj)=>obj.id === id);
        if (readCollection.length !== 0) {
            for (let obj of readCollection)if (date === obj.date) {
                if (obj.collection.some((card)=>card.id === id)) return;
                obj.collection.push(readCard);
                _storageLogic.saveToLocal(_const.KEY_READ, readCollection.sort((objA, objB)=>new Date(objB.date) - new Date(objA.date)));
                tickToRead.classList.add("show");
                return;
            }
        }
        readCollection.push({
            date: date,
            collection: [
                readCard
            ]
        });
        _storageLogic.saveToLocal(_const.KEY_READ, readCollection.sort((objA, objB)=>new Date(objB.date) - new Date(objA.date)));
        tickToRead.classList.add("show");
    }
// check to delete
// let updatedCollection = [];
// for (let obj of readCollection) {
//   if (date in obj) {
//     console.log(obj[date]);
//     updatedCollection = obj[date].filter(objCard => objCard.id !== id);
//   }
// }
// storage.saveToLocal(key.KEY_READ, updatedCollection);
// tickToRead.classList.remove('show');
}
function onloadToRead() {
    let readCollection = _storageLogic.loadFromLocal(_const.KEY_READ) || [];
    if (readCollection.length === 0) return;
    readCollection.forEach((obj)=>{
        let values = obj.collection; // cause Object.values is ARRAY so need to add [0] as we have one key
        for (let value of values){
            if (!document.getElementById(`${value.id}`)) continue;
            let elem = document.getElementById(`${value.id}`);
            let tickToRead = elem.querySelector(".read");
            tickToRead.classList.add("show");
        }
    });
}

},{"../const":"jgw4B","../storageLogic":"cLxmJ","../refs":"2WoF2","date-fns/format":"lnm6V","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"enlIi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addToFavorite", ()=>addToFavorite);
// ON LOAD
parcelHelpers.export(exports, "onloadFavorite", ()=>onloadFavorite);
var _const = require("../const");
var _storageLogic = require("../storageLogic");
var _refs = require("../refs");
var _renderMarkup = require("../renderMarkup");
var _navLogic = require("../navLogic/navLogic");
var _addToRead = require("../addToRead/addToRead");
(0, _refs.refs).gallery.addEventListener("click", addToFavorite);
(0, _refs.refs).accordion.addEventListener("click", addToFavorite);
function addToFavorite(e) {
    const btnEl = e.target.closest(".favorite-btn");
    if (btnEl) {
        const cardId = btnEl.parentNode.parentNode.id;
        let collection = _storageLogic.loadFromLocal(_const.KEY_COLLECTION);
        let favCard = collection.find((obj)=>obj.id === cardId);
        const favorites = _storageLogic.loadFromLocal(_const.KEY_FAVORITE) || [];
        const currentPage = _storageLogic.loadFromLocal("currentPage") || "Home";
        console.log(currentPage);
        if (btnEl.classList.contains("hidden-span")) {
            const updatedFavorites = favorites.filter(({ id  })=>id !== cardId);
            _storageLogic.saveToLocal(_const.KEY_FAVORITE, updatedFavorites);
            btnEl.classList.remove("hidden-span");
            if (currentPage === "Favorite") {
                const cardItem = btnEl.closest(".card__item");
                cardItem.remove();
                if (updatedFavorites.length === 0) (0, _refs.refs).gallery.insertAdjacentHTML("beforeend", "<h2 class='fav-not-found'>Favorites are empty!</h2>");
            }
        } else {
            favorites.push(favCard);
            _storageLogic.saveToLocal(_const.KEY_FAVORITE, favorites);
            btnEl.classList.add("hidden-span");
        }
    }
}
(0, _refs.refs).FavBtn.addEventListener("click", createFavorite);
(0, _refs.refs).favBtnMob.addEventListener("click", createFavorite);
function createFavorite() {
    const favorites = _storageLogic.loadFromLocal(_const.KEY_FAVORITE);
    (0, _renderMarkup.clear)((0, _refs.refs).gallery);
    (0, _renderMarkup.clear)((0, _refs.refs).accordion);
    (0, _refs.refs).pageContainer.classList.remove("show");
    (0, _refs.refs).notFoundEl.classList.add("hidden");
    if (favorites.length === 0) {
        (0, _refs.refs).gallery.insertAdjacentHTML("beforeend", "<h2 class='fav-not-found'>You haven't added anything to favorite!</h2>");
        return;
    }
    let markup = favorites.map((0, _renderMarkup.renderMarkup)).join("");
    (0, _refs.refs).gallery.innerHTML = markup;
    (0, _addToRead.onloadToRead)();
    Array.from((0, _refs.refs).gallery.children).forEach((item)=>item.querySelector(".favorite-btn").classList.add("hidden-span"));
}
function onloadFavorite() {
    let favCollection = _storageLogic.loadFromLocal(_const.KEY_FAVORITE) || [];
    if (favCollection.length === 0) return;
    for (let obj of favCollection){
        if (!document.getElementById(`${obj.id}`)) continue;
        let elem = document.getElementById(`${obj.id}`);
        let favBtn = elem.querySelector(".favorite-btn");
        favBtn.classList.add("hidden-span");
    }
}

},{"../const":"jgw4B","../storageLogic":"cLxmJ","../refs":"2WoF2","../renderMarkup":"LPz2v","../navLogic/navLogic":"cRQax","../addToRead/addToRead":"bpk84","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aLYDH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "paginationByCategory", ()=>paginationByCategory);
parcelHelpers.export(exports, "categoryPageContainer", ()=>categoryPageContainer);
parcelHelpers.export(exports, "categoryPg", ()=>categoryPg);
var _fetchAPI = require("../API/fetchAPI");
var _refs = require("../refs");
var _renderMarkup = require("../renderMarkup");
var _pagination = require("./pagination");
var _throttleDebounce = require("throttle-debounce");
const pageLimit = 8;
const valuePage = {
    curPage: 1,
    numLinksTwoSide: 1,
    totalPages: null
};
function paginationByCategory(collection) {
    console.log((0, _fetchAPI.ApiService).lastAction.searchBy);
    if ((0, _fetchAPI.ApiService).lastAction.searchBy !== "category") return;
    if (collection > 1000) collection = 1000;
    (0, _refs.refs).btnPrevPg.disabled = true;
    valuePage.totalPages = Math.ceil(collection / pageLimit);
    valuePage.curPage = (0, _fetchAPI.ApiService).offset / 20 + 1;
    _pagination.pagination(valuePage);
    (0, _refs.refs).pageContainer.addEventListener("click", categoryPageContainer);
    (0, _refs.refs).pg.addEventListener("click", categoryPg);
}
function categoryPageContainer(e) {
    (0, _fetchAPI.ApiService).offset = (_pagination.handleButton(e.target, valuePage) - 1) * 20;
    (0, _refs.refs).pageContainer.classList.remove("show");
    _renderMarkup.clear((0, _refs.refs).gallery);
    (0, _fetchAPI.ApiService).lastAction.action((0, _fetchAPI.ApiService).lastAction.e);
}
function categoryPg(e) {
    const elem = e.target;
    if (elem.dataset.page) {
        const pageNumber = parseInt(e.target.dataset.page, 10);
        valuePage.curPage = pageNumber;
        (0, _fetchAPI.ApiService).offset = (pageNumber - 1) * 20;
        _pagination.pagination(valuePage);
        _pagination.handleButtonLeft(valuePage);
        _pagination.handleButtonRight(valuePage);
    }
}

},{"../API/fetchAPI":"WCDdW","../refs":"2WoF2","../renderMarkup":"LPz2v","./pagination":"gIUTo","throttle-debounce":"81w4t","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gIUTo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// DYNAMIC PAGINATION
parcelHelpers.export(exports, "pagination", ()=>pagination);
parcelHelpers.export(exports, "renderPage", ()=>renderPage);
parcelHelpers.export(exports, "handleButton", ()=>handleButton);
parcelHelpers.export(exports, "handleButtonLeft", ()=>handleButtonLeft);
parcelHelpers.export(exports, "handleButtonRight", ()=>handleButtonRight);
var _refs = require("../refs");
function pagination(valuePage) {
    const { totalPages , curPage , numLinksTwoSide: delta  } = valuePage;
    let range;
    if (window.matchMedia("(max-width: 480px)").matches) range = delta + 2;
    else range = delta + 4; // use for handle visible number of links left side
    let render = "";
    let renderTwoSide = "";
    let dot = `<li class="pg-item"><a class="pg-link">...</a></li>`;
    let countTruncate = 0; // use for ellipsis - truncate left side or right side
    // use for truncate two side
    const numberTruncateLeft = curPage - delta;
    const numberTruncateRight = curPage + delta;
    let active = "";
    for(let pos = 1; pos <= totalPages; pos++){
        active = pos === curPage ? "active" : "";
        // truncate
        if (totalPages >= 2 * range - 1) {
            if (numberTruncateLeft >= 2 && numberTruncateRight <= totalPages - 2 + 1) // truncate 2 side
            {
                if (pos >= numberTruncateLeft && pos <= numberTruncateRight) renderTwoSide += renderPage(pos, active);
            } else // truncate left side or right side
            if (curPage < range && pos <= range || curPage > totalPages - range && pos >= totalPages - range + 1 || pos === totalPages || pos === 1) render += renderPage(pos, active);
            else {
                countTruncate++;
                if (countTruncate === 1) render += dot;
            }
        } else // not truncate
        render += renderPage(pos, active);
    }
    if (renderTwoSide) {
        renderTwoSide = renderPage(1) + dot + renderTwoSide + dot + renderPage(totalPages);
        (0, _refs.refs).pg.innerHTML = renderTwoSide;
    } else (0, _refs.refs).pg.innerHTML = render;
}
function renderPage(index, active = "") {
    return ` <li class="pg-item ${active}" data-page="${index}">
        <a class="pg-link" href="#">${index}</a>
    </li>`;
}
function handleButton(element, valuePage) {
    if (element.classList.contains("prev-page")) {
        valuePage.curPage--;
        handleButtonLeft(valuePage);
        (0, _refs.refs).btnNextPg.disabled = false;
    } else if (element.classList.contains("next-page")) {
        valuePage.curPage++;
        handleButtonRight(valuePage);
        (0, _refs.refs).btnPrevPg.disabled = false;
    }
    // console.log(valuePage)
    pagination(valuePage);
    return valuePage.curPage;
}
function handleButtonLeft(valuePage) {
    if (valuePage.curPage === 1) (0, _refs.refs).btnPrevPg.disabled = true;
    else (0, _refs.refs).btnPrevPg.disabled = false;
}
function handleButtonRight(valuePage) {
    if (valuePage.curPage === valuePage.totalPages) (0, _refs.refs).btnNextPg.disabled = true;
    else (0, _refs.refs).btnNextPg.disabled = false;
}

},{"../refs":"2WoF2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"81w4t":[function(require,module,exports) {
/* eslint-disable no-undefined,no-param-reassign,no-shadow */ /**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param {number} delay -                  A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher)
 *                                            are most useful.
 * @param {Function} callback -               A function to be executed after delay milliseconds. The `this` context and all arguments are passed through,
 *                                            as-is, to `callback` when the throttled-function is executed.
 * @param {object} [options] -              An object to configure options.
 * @param {boolean} [options.noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds
 *                                            while the throttled-function is being called. If noTrailing is false or unspecified, callback will be executed
 *                                            one final time after the last throttled-function call. (After the throttled-function has not been called for
 *                                            `delay` milliseconds, the internal counter is reset).
 * @param {boolean} [options.noLeading] -   Optional, defaults to false. If noLeading is false, the first throttled-function call will execute callback
 *                                            immediately. If noLeading is true, the first the callback execution will be skipped. It should be noted that
 *                                            callback will never executed if both noLeading = true and noTrailing = true.
 * @param {boolean} [options.debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is
 *                                            false (at end), schedule `callback` to execute after `delay` ms.
 *
 * @returns {Function} A new, throttled, function.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "debounce", ()=>debounce);
parcelHelpers.export(exports, "throttle", ()=>throttle);
function throttle(delay, callback, options) {
    var _ref = options || {}, _ref$noTrailing = _ref.noTrailing, noTrailing = _ref$noTrailing === void 0 ? false : _ref$noTrailing, _ref$noLeading = _ref.noLeading, noLeading = _ref$noLeading === void 0 ? false : _ref$noLeading, _ref$debounceMode = _ref.debounceMode, debounceMode = _ref$debounceMode === void 0 ? undefined : _ref$debounceMode;
    /*
   * After wrapper has stopped being called, this timeout ensures that
   * `callback` is executed at the proper times in `throttle` and `end`
   * debounce modes.
   */ var timeoutID;
    var cancelled = false; // Keep track of the last time `callback` was executed.
    var lastExec = 0; // Function to clear existing timeout
    function clearExistingTimeout() {
        if (timeoutID) clearTimeout(timeoutID);
    } // Function to cancel next exec
    function cancel(options) {
        var _ref2 = options || {}, _ref2$upcomingOnly = _ref2.upcomingOnly, upcomingOnly = _ref2$upcomingOnly === void 0 ? false : _ref2$upcomingOnly;
        clearExistingTimeout();
        cancelled = !upcomingOnly;
    }
    /*
   * The `wrapper` function encapsulates all of the throttling / debouncing
   * functionality and when executed will limit the rate at which `callback`
   * is executed.
   */ function wrapper() {
        for(var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++)arguments_[_key] = arguments[_key];
        var self = this;
        var elapsed = Date.now() - lastExec;
        if (cancelled) return;
         // Execute `callback` and update the `lastExec` timestamp.
        function exec() {
            lastExec = Date.now();
            callback.apply(self, arguments_);
        }
        /*
     * If `debounceMode` is true (at begin) this is used to clear the flag
     * to allow future `callback` executions.
     */ function clear() {
            timeoutID = undefined;
        }
        if (!noLeading && debounceMode && !timeoutID) /*
       * Since `wrapper` is being called for the first time and
       * `debounceMode` is true (at begin), execute `callback`
       * and noLeading != true.
       */ exec();
        clearExistingTimeout();
        if (debounceMode === undefined && elapsed > delay) {
            if (noLeading) {
                /*
         * In throttle mode with noLeading, if `delay` time has
         * been exceeded, update `lastExec` and schedule `callback`
         * to execute after `delay` ms.
         */ lastExec = Date.now();
                if (!noTrailing) timeoutID = setTimeout(debounceMode ? clear : exec, delay);
            } else /*
         * In throttle mode without noLeading, if `delay` time has been exceeded, execute
         * `callback`.
         */ exec();
        } else if (noTrailing !== true) /*
       * In trailing throttle mode, since `delay` time has not been
       * exceeded, schedule `callback` to execute `delay` ms after most
       * recent execution.
       *
       * If `debounceMode` is true (at begin), schedule `clear` to execute
       * after `delay` ms.
       *
       * If `debounceMode` is false (at end), schedule `callback` to
       * execute after `delay` ms.
       */ timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
    }
    wrapper.cancel = cancel; // Return the wrapper function.
    return wrapper;
}
/* eslint-disable no-undefined */ /**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param {number} delay -               A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param {Function} callback -          A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                        to `callback` when the debounced-function is executed.
 * @param {object} [options] -           An object to configure options.
 * @param {boolean} [options.atBegin] -  Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
 *                                        after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
 *                                        (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
 *
 * @returns {Function} A new, debounced function.
 */ function debounce(delay, callback, options) {
    var _ref = options || {}, _ref$atBegin = _ref.atBegin, atBegin = _ref$atBegin === void 0 ? false : _ref$atBegin;
    return throttle(delay, callback, {
        debounceMode: atBegin !== false
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8fMfG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "removeEventListeners", ()=>removeEventListeners);
var _paginationByQuery = require("../pagination/paginationByQuery");
var _paginationByPopular = require("../pagination/paginationByPopular");
var _paginationByCategories = require("../pagination/paginationByCategories");
var _refs = require("../refs");
function removeEventListeners() {
    (0, _refs.refs).pageContainer.removeEventListener("click", (0, _paginationByPopular.popularPageContainer));
    (0, _refs.refs).pg.removeEventListener("click", (0, _paginationByPopular.popularPg));
    (0, _refs.refs).pg.removeEventListener("click", (0, _paginationByQuery.queryPg));
    (0, _refs.refs).pageContainer.removeEventListener("click", (0, _paginationByQuery.queryPageContainer));
    (0, _refs.refs).pageContainer.removeEventListener("click", (0, _paginationByCategories.categoryPageContainer));
    (0, _refs.refs).pg.removeEventListener("click", (0, _paginationByCategories.categoryPg));
}

},{"../pagination/paginationByQuery":"ibU4g","../pagination/paginationByPopular":"blOMt","../pagination/paginationByCategories":"aLYDH","../refs":"2WoF2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ibU4g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "paginationByQuery", ()=>paginationByQuery);
parcelHelpers.export(exports, "queryPageContainer", ()=>queryPageContainer);
parcelHelpers.export(exports, "queryPg", ()=>queryPg);
var _fetchAPI = require("../API/fetchAPI");
var _refs = require("../refs");
var _renderMarkup = require("../renderMarkup");
var _pagination = require("./pagination");
var _throttleDebounce = require("throttle-debounce");
const pageLimit = 8;
const valuePage = {
    curPage: 1,
    numLinksTwoSide: 1,
    totalPages: null
};
function paginationByQuery(collection) {
    if ((0, _fetchAPI.ApiService).lastAction.searchBy !== "query") return;
    if (collection > 1000) collection = 1000;
    (0, _refs.refs).btnPrevPg.disabled = true;
    valuePage.totalPages = Math.ceil(collection / pageLimit);
    valuePage.curPage = (0, _fetchAPI.ApiService).page;
    _pagination.pagination(valuePage);
    (0, _refs.refs).pageContainer.addEventListener("click", queryPageContainer);
    (0, _refs.refs).pg.addEventListener("click", queryPg);
}
function queryPageContainer(e) {
    (0, _fetchAPI.ApiService).page = _pagination.handleButton(e.target, valuePage);
    (0, _refs.refs).pageContainer.classList.remove("show");
    _renderMarkup.clear((0, _refs.refs).gallery);
    (0, _fetchAPI.ApiService).lastAction.action((0, _fetchAPI.ApiService).lastAction.e);
}
function queryPg(e) {
    const elem = e.target;
    if (elem.dataset.page) {
        const pageNumber = parseInt(e.target.dataset.page, 10);
        valuePage.curPage = pageNumber;
        (0, _fetchAPI.ApiService).page = pageNumber;
        _pagination.pagination(valuePage);
        _pagination.handleButtonLeft(valuePage);
        _pagination.handleButtonRight(valuePage);
    }
}

},{"../API/fetchAPI":"WCDdW","../refs":"2WoF2","../renderMarkup":"LPz2v","./pagination":"gIUTo","throttle-debounce":"81w4t","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"blOMt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "paginationByPopular", ()=>paginationByPopular);
parcelHelpers.export(exports, "popularPg", ()=>popularPg);
parcelHelpers.export(exports, "popularPageContainer", ()=>popularPageContainer);
var _storageLogic = require("../storageLogic");
var _refs = require("../refs");
var _const = require("../const");
var _pagination = require("./pagination");
var _renderMarkup = require("../renderMarkup");
var _byPopular = require("../fetchQueries/byPopular");
var _addToRead = require("../addToRead/addToRead");
var _addToFavorites = require("../addToFavorites/addToFavorites");
var _fetchAPI = require("../API/fetchAPI");
const pageLimit = 8;
const valuePage = {
    curPage: 1,
    numLinksTwoSide: 1,
    totalPages: null
};
function paginationByPopular(collection) {
    valuePage.totalPages = Math.ceil(collection / pageLimit);
    valuePage.curPage = 1;
    console.log((0, _fetchAPI.ApiService).lastAction.searchBy);
    if ((0, _fetchAPI.ApiService).lastAction.searchBy !== "popular") return;
    _pagination.pagination(valuePage);
    (0, _refs.refs).pageContainer.addEventListener("click", popularPageContainer);
    (0, _refs.refs).pg.addEventListener("click", popularPg);
}
function popularPg(e) {
    const elem = e.target;
    if (elem.dataset.page) {
        const pageNumber = parseInt(e.target.dataset.page, 10);
        (0, _refs.refs).btnPrevPg.disabled = true;
        valuePage.curPage = pageNumber;
        _pagination.pagination(valuePage);
        _pagination.handleButtonLeft(valuePage);
        _pagination.handleButtonRight(valuePage);
    }
}
function popularPageContainer(e) {
    let currPage = _pagination.handleButton(e.target, valuePage);
    let offest = (currPage - 1) * pageLimit;
    let nextPageCollect = _storageLogic.loadFromLocal(_const.KEY_COLLECTION).slice(offest, offest + pageLimit);
    _renderMarkup.clear((0, _refs.refs).gallery);
    (0, _refs.refs).pageContainer.classList.remove("show");
    let markup = nextPageCollect.map(_renderMarkup.renderMarkup).join("");
    (0, _byPopular.renderGallery)(markup);
    (0, _addToRead.onloadToRead)();
    (0, _addToFavorites.onloadFavorite)();
    (0, _refs.refs).pageContainer.classList.add("show");
}

},{"../storageLogic":"cLxmJ","../refs":"2WoF2","../const":"jgw4B","./pagination":"gIUTo","../renderMarkup":"LPz2v","../fetchQueries/byPopular":"at5e6","../addToRead/addToRead":"bpk84","../addToFavorites/addToFavorites":"enlIi","../API/fetchAPI":"WCDdW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"at5e6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "popularOnPageLoad", ()=>popularOnPageLoad);
parcelHelpers.export(exports, "renderGallery", ()=>renderGallery);
parcelHelpers.export(exports, "formatDate", ()=>formatDate);
var _fetchAPI = require("../API/fetchAPI");
var _refs = require("../refs");
var _renderMarkup = require("../renderMarkup");
var _const = require("../const");
var _storageLogic = require("../storageLogic");
var _addToRead = require("../addToRead/addToRead");
var _weather = require("../weather");
var _addToFavorites = require("../addToFavorites/addToFavorites");
var _loader = require("../loader/loader");
var _paginationByPopular = require("../pagination/paginationByPopular");
var _removeListeners = require("./removeListeners");
//render first page with popular news
window.addEventListener("load", ()=>{
    fetchByPopular();
    // remove listeners
    (0, _removeListeners.removeEventListeners)();
});
(0, _refs.refs).HomeBtn.addEventListener("click", ()=>{
    fetchByPopular();
    // remove listeners
    (0, _removeListeners.removeEventListeners)();
});
(0, _refs.refs).homeBtnMob.addEventListener("click", ()=>{
    fetchByPopular();
    (0, _removeListeners.removeEventListeners)();
});
//=============
// fecth by popular
//=============
async function fetchByPopular() {
    (0, _loader.showLoader)();
    // load popular news
    (0, _fetchAPI.ApiService).lastAction.searchBy = "popular";
    const docs = await (0, _fetchAPI.ApiService).getPopularNews();
    let collectionByPopular = [];
    collectionByPopular = docs.map((result)=>{
        const { uri , section , title , abstract , published_date , url , media  } = result;
        let imgUrl;
        if (result.media[0] !== undefined) imgUrl = result.media[0]["media-metadata"][2]["url"];
        else imgUrl = "https://media4.giphy.com/media/h52OM8Rr5fLiZRqUBD/giphy.gif";
        let newDateFormat = formatDate(published_date);
        let obj = {
            imgUrl,
            title,
            text: abstract,
            date: newDateFormat,
            url,
            categorie: section,
            id: uri
        };
        return obj;
    });
    _storageLogic.saveToLocal(_const.KEY_COLLECTION, collectionByPopular);
    (0, _renderMarkup.clear)((0, _refs.refs).gallery);
    (0, _renderMarkup.clear)((0, _refs.refs).accordion);
    (0, _refs.refs).notFoundEl.classList.add("hidden");
    popularOnPageLoad();
    (0, _paginationByPopular.paginationByPopular)(collectionByPopular.length);
    setTimeout(()=>{
        (0, _refs.refs).pageContainer.classList.add("show");
    }, 500);
}
function popularOnPageLoad() {
    let collection = _storageLogic.loadFromLocal(_const.KEY_COLLECTION);
    let collectionByPopular;
    if (window.matchMedia("(max-width: 768px)").matches) collection = collection.slice(0, 3);
    else if (window.matchMedia("(max-width: 1280px)").matches) collection = collection.slice(0, 7);
    else collection = collection.slice(0, 8);
    collectionByPopular = collection.map((0, _renderMarkup.renderMarkup)).join(``);
    renderGallery(collectionByPopular);
//weather.getGeoLocation();
}
async function renderGallery(markup) {
    let weatherMarkup = await _weather.renderDefaultWeather();
    (0, _loader.hideLoader)();
    (0, _refs.refs).gallery.insertAdjacentHTML(`beforeend`, weatherMarkup + markup);
    (0, _addToRead.onloadToRead)();
    (0, _addToFavorites.onloadFavorite)();
}
function formatDate(date) {
    let newDateFormat = date.split("-");
    let maxElement = {
        index: length
    };
    newDateFormat.forEach((el, index)=>{
        maxElement.index = index;
        maxElement.length = length;
    });
    newDateFormat[maxElement.index] = newDateFormat[maxElement.index].slice(0, 2);
    newDateFormat = newDateFormat.slice(0, 3);
    newDateFormat = newDateFormat.join("/");
    return newDateFormat;
}

},{"../API/fetchAPI":"WCDdW","../refs":"2WoF2","../renderMarkup":"LPz2v","../const":"jgw4B","../storageLogic":"cLxmJ","../addToRead/addToRead":"bpk84","../weather":"6kwvs","../addToFavorites/addToFavorites":"enlIi","../loader/loader":"74W1T","../pagination/paginationByPopular":"blOMt","./removeListeners":"8fMfG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6kwvs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderDefaultWeather", ()=>renderDefaultWeather);
parcelHelpers.export(exports, "getGeoLocation", ()=>getGeoLocation);
var _refs = require("./refs");
var _renderMarkup = require("./renderMarkup");
const WEATHER_KEY = "349c075d2985e4b8a1687be3ae218ac3";
const BASIC_URL = "https://api.openweathermap.org/data/2.5/weather?";
const fetchWeather = async (lat, lon)=>{
    const response = await fetch(`${BASIC_URL}lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_KEY}`);
    if (!response.ok) throw new Error(response.status);
    return await response.json();
};
const fetchDefaultWeather = async ()=>{
    const response = await fetch(`${BASIC_URL}q=Toronto&units=metric&appid=${WEATHER_KEY}`);
    if (!response.ok) throw new Error(response.status);
    return await response.json();
};
async function renderDefaultWeather() {
    try {
        const data = await fetchDefaultWeather();
        const { weather , main , name  } = data;
        let item = {
            icon: weather[0].icon,
            main: weather[0].main,
            temp: Math.ceil(main.temp),
            name
        };
        return (0, _renderMarkup.renderWeather)(item);
    } catch (error) {
        console.log(error.message);
    }
}
async function getGeoLocation() {
    if (navigator.geolocation) await navigator.geolocation.getCurrentPosition(({ coords: { latitude , longitude  }  })=>{
        fetchWeather(latitude, longitude).then(({ weather , main , name  })=>{
            let item = {
                icon: weather[0].icon,
                main: weather[0].main,
                temp: Math.ceil(main.temp),
                name
            };
            weatherRender(item);
        });
    });
}

},{"./refs":"2WoF2","./renderMarkup":"LPz2v","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"74W1T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hideLoader", ()=>hideLoader);
parcelHelpers.export(exports, "showLoader", ()=>showLoader);
var _refs = require("../refs");
const hideLoader = ()=>{
    (0, _refs.refs).loader.classList.remove("show");
};
const showLoader = ()=>{
    (0, _refs.refs).loader.classList.add("show");
};

},{"../refs":"2WoF2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"44uaB":[function(require,module,exports) {
var _fetchAPI = require("../API/fetchAPI");
var _refs = require("../refs");
var _renderMarkup = require("../renderMarkup");
var _byPopular = require("./byPopular");
var _weather = require("../weather");
var _const = require("../const");
var _storageLogic = require("../storageLogic");
var _addToFavorites = require("../addToFavorites/addToFavorites");
var _addToRead = require("../addToRead/addToRead");
var _navLogic = require("../navLogic/navLogic");
var _calendar = require("../calendar");
var _removeListeners = require("./removeListeners");
var _loader = require("../loader/loader");
var _paginationByQuery = require("../pagination/paginationByQuery");
(0, _refs.refs).filter.addEventListener(`submit`, (e)=>{
    e.preventDefault();
    (0, _fetchAPI.ApiService).lastAction.action = filterQuery;
    (0, _fetchAPI.ApiService).resetPage();
    //remove listeners
    filterQuery(e);
    (0, _removeListeners.removeEventListeners)();
});
async function filterQuery(e) {
    (0, _loader.showLoader)();
    let query = null;
    (0, _fetchAPI.ApiService).lastAction.searchBy = "query";
    if (!!e?.currentTarget?.elements?.query?.value && (0, _fetchAPI.ApiService).lastAction.query !== e.target.elements.query.value) {
        // mean new query
        (0, _fetchAPI.ApiService).lastAction.e = e;
        query = e.currentTarget.elements.query.value;
        (0, _fetchAPI.ApiService).lastAction.query = query;
    } else if ((0, _fetchAPI.ApiService).lastAction.query === e.target.elements.query.value) // old query(for pagination)
    query = (0, _fetchAPI.ApiService).lastAction.query;
    calendarCheck();
    (0, _fetchAPI.ApiService).query = query;
    const { docs , meta  } = await (0, _fetchAPI.ApiService).getNewsByQuery();
    // NOT FOUND PAGE
    if (docs.length === 0) {
        if ((0, _refs.refs).notFoundEl.classList.contains("hidden")) {
            (0, _refs.refs).notFoundEl.classList.remove("hidden");
            (0, _refs.refs).pageContainer.classList.remove("show");
        }
        (0, _renderMarkup.clear)((0, _refs.refs).gallery);
        (0, _loader.hideLoader)();
    } else {
        if (!(0, _refs.refs).notFoundEl.classList.contains("hidden")) (0, _refs.refs).notFoundEl.classList.add("hidden");
        let collectionByQuery = [];
        collectionByQuery = docs.map((result)=>{
            const { abstract , pub_date , uri , web_url , multimedia , section_name , headline  } = result;
            let imgUrl;
            if (multimedia.length !== 0) imgUrl = "https://www.nytimes.com/" + multimedia[2]["url"];
            else imgUrl = "https://media4.giphy.com/media/h52OM8Rr5fLiZRqUBD/giphy.gif";
            const newDateFormat = (0, _byPopular.formatDate)(pub_date);
            let obj = {
                imgUrl,
                title: headline.main,
                text: abstract,
                date: newDateFormat,
                url: web_url,
                categorie: section_name,
                id: uri
            };
            return obj;
        });
        _storageLogic.saveToLocal(_const.KEY_COLLECTION, collectionByQuery.slice(0, 9));
        if ((0, _fetchAPI.ApiService).page === 1) (0, _paginationByQuery.paginationByQuery)(meta.hits);
        queryOnPageLoadGallery();
    }
}
function queryOnPageLoadGallery() {
    let collection = _storageLogic.loadFromLocal(_const.KEY_COLLECTION);
    let collectionByQuery;
    if (window.matchMedia("(max-width: 768px)").matches) collection = collection.slice(0, 3);
    else if (window.matchMedia("(max-width: 1280px)").matches) collection = collection.slice(0, 7);
    else collection = collection.slice(0, 8);
    collectionByQuery = collection.map((0, _renderMarkup.renderMarkup)).join(``);
    (0, _renderMarkup.clear)((0, _refs.refs).gallery);
    (0, _renderMarkup.clear)((0, _refs.refs).accordion);
    (0, _refs.refs).notFoundEl.classList.add("hidden");
    renderGallery(collectionByQuery);
    (0, _navLogic.clearCurrent)((0, _refs.refs).nav.children, "current-list__item");
    (0, _navLogic.clearCurrent)((0, _refs.refs).navMobile.children, "menu-current__item");
    (0, _refs.refs).HomeBtn.parentNode.classList.add("current-list__item");
    (0, _refs.refs).homeBtnMob.classList.add("menu-current__item");
    (0, _addToRead.onloadToRead)();
    (0, _addToFavorites.onloadFavorite)();
    setTimeout(()=>{
        (0, _refs.refs).pageContainer.classList.add("show");
    }, 500);
}
async function renderGallery(markup) {
    let weatherMarkup = await _weather.renderDefaultWeather();
    (0, _refs.refs).categoriesContainer.classList.remove("hidden-categories"); // in case use filter from read/fav
    (0, _refs.refs).gallery.insertAdjacentHTML(`beforeend`, weatherMarkup + markup);
    (0, _refs.refs).gallery.addEventListener("click", (0, _addToFavorites.addToFavorite));
    (0, _loader.hideLoader)();
}
//=================
// IF CALENDAR INPUT WAS ENTERED
//==================
function calendarCheck() {
    if (!(0, _calendar.selectedDate)) return;
    else (0, _fetchAPI.ApiService).beginDate = (0, _calendar.selectedDate);
}

},{"../API/fetchAPI":"WCDdW","../refs":"2WoF2","../renderMarkup":"LPz2v","./byPopular":"at5e6","../weather":"6kwvs","../const":"jgw4B","../storageLogic":"cLxmJ","../addToFavorites/addToFavorites":"enlIi","../addToRead/addToRead":"bpk84","../navLogic/navLogic":"cRQax","../calendar":"fsVt9","./removeListeners":"8fMfG","../loader/loader":"74W1T","../pagination/paginationByQuery":"ibU4g"}],"7ViTa":[function(require,module,exports) {
var _const = require("../const");
var _addToRead = require("../addToRead/addToRead");
var _storageLogic = require("../storageLogic");
var _renderMarkup = require("../renderMarkup");
var _refs = require("../refs");
var _addToFavorites = require("../addToFavorites/addToFavorites");
(0, _refs.refs).gallery.addEventListener("click", (0, _addToRead.toggleToRead));
//========================
// ACCORDION  fold/unfold
//========================
(0, _refs.refs).accordion.addEventListener("click", (e)=>{
    if (!e.target.matches(".accord__arrow")) return;
    console.log(e.target.parentNode.parentNode.parentNode);
    let content = e.target.parentNode.parentNode.parentNode.querySelector(".accord__content");
    console.log(content);
    let arrow = e.target.firstElementChild;
    console.dir(arrow);
    arrow.classList.toggle("up");
    content.classList.toggle("slide");
});
//========================
// CREATE ACCORDION
//========================
(0, _refs.refs).ReadBtn.addEventListener("click", createAccord);
(0, _refs.refs).readBtnMob.addEventListener("click", createAccord);
function createAccord() {
    let readCollection = _storageLogic.loadFromLocal(_const.KEY_READ) || [];
    if (readCollection.length === 0) {
        _renderMarkup.clear((0, _refs.refs).gallery);
        _renderMarkup.clear((0, _refs.refs).accordion);
        (0, _refs.refs).notFoundEl.classList.add("hidden");
        (0, _refs.refs).pageContainer.classList.remove("show");
        (0, _refs.refs).accordion.insertAdjacentHTML("beforeend", "<h2 class='read-not-found' >You haven't read any article</h2>");
        return;
    }
    // //========================
    // //SORT BY DATE
    // //========================
    // let sortedCollection = readCollection.sort(
    //   (objA, objB) => Number(Object.keys(objB)[0]) - Number(Object.keys(objA)[0])
    // );
    let markup = [];
    readCollection.forEach((obj)=>{
        const { date , collection  } = obj;
        let accordMarkup = collection.map(_renderMarkup.renderMarkup).join("");
        markup.push(`<div class="accord__container">${_renderMarkup.renderAccordion(date)}<div class="accord__content">${accordMarkup}</div></div>`);
    });
    _renderMarkup.clear((0, _refs.refs).gallery);
    _renderMarkup.clear((0, _refs.refs).accordion);
    (0, _refs.refs).pageContainer.classList.remove("show");
    (0, _refs.refs).notFoundEl.classList.add("hidden");
    (0, _refs.refs).accordion.insertAdjacentHTML("beforeend", markup.join(""));
    (0, _addToFavorites.onloadFavorite)();
    (0, _addToRead.onloadToRead)();
}

},{"../const":"jgw4B","../addToRead/addToRead":"bpk84","../storageLogic":"cLxmJ","../renderMarkup":"LPz2v","../refs":"2WoF2","../addToFavorites/addToFavorites":"enlIi"}]},["jC2qd","8lqZg"], "8lqZg", "parcelRequired7c6")

//# sourceMappingURL=index.975ef6c8.js.map
