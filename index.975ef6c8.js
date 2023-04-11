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
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _confettiJs = require("confetti-js");
var _confettiJsDefault = parcelHelpers.interopDefault(_confettiJs);
const confettiSettings = {
    target: "my-canvas"
};
const confetti = new (0, _confettiJsDefault.default)(confettiSettings);
const confettiId = document.querySelector("#my-canvas");
const gameIcon = document.querySelectorAll(".player-container .fa-solid");
const computerIcon = document.querySelectorAll(".player-computer .fa-solid");
const rockComputer = document.querySelector("#rockComp");
const paperComputer = document.querySelector("#paperComp");
const scissorsComputer = document.querySelector("#scissorsComp");
const lizardComputer = document.querySelector("#lizardComp");
const spockComputer = document.querySelector("#spockComp");
const markGamer = document.querySelector("#mark-gamer");
const markComputer = document.querySelector("#mark-computer");
let computerChoice;
const resultText = document.querySelector(".result-text");
function activeIcon(arrIcon, choiceIcon) {
    arrIcon.forEach((icon)=>icon.classList.remove("blue"));
    choiceIcon.classList.add("blue");
}
function countingPoints(mark) {
    let value = Number(mark.innerHTML);
    value++;
    mark.innerHTML = value;
}
function caseGame(choice) {
    switch(choice){
        case 1:
            activeIcon(computerIcon, rockComputer);
            choice = "rock";
            break;
        case 2:
            activeIcon(computerIcon, paperComputer);
            choice = "paper";
            break;
        case 3:
            activeIcon(computerIcon, scissorsComputer);
            choice = "scissors";
            break;
        case 4:
            activeIcon(computerIcon, lizardComputer);
            choice = "lizard";
            break;
        case 5:
            activeIcon(computerIcon, spockComputer);
            choice = "spock";
            break;
    }
    computerChoice = choice;
}
function randomChoice() {
    let randomNum = Math.ceil(Math.random() * 5);
    caseGame(randomNum);
}
function youDraw() {
    resultText.innerHTML = "Draw!";
    confettiId.classList.add("none");
}
function youWon() {
    resultText.innerHTML = "Won!";
    countingPoints(markGamer);
    confetti.render();
    confettiId.classList.remove("none");
}
function youLoss() {
    resultText.innerHTML = "Loss!";
    countingPoints(markComputer);
    confettiId.classList.add("none");
}
function determineWinner(gamer, computer) {
    console.log(gamer, computer);
    gamer === "rock" && computer === "scissors" || gamer === "paper" && computer === "rock" || gamer === "scissors" && computer === "paper" || gamer === "lizard" && computer === "spock" || gamer === "spock" && computer === "scissors" ? youWon() : youLoss();
}
function comparison(myChoice) {
    if (myChoice !== computerChoice) determineWinner(myChoice, computerChoice);
    if (myChoice === computerChoice) youDraw();
}
function choice() {
    activeIcon(gameIcon, this);
    randomChoice();
    comparison(this.id);
}
const rock = document.querySelector("#rock");
rock.addEventListener("click", choice);
const paper = document.querySelector("#paper");
paper.addEventListener("click", choice);
const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", choice);
const lizard = document.querySelector("#lizard");
lizard.addEventListener("click", choice);
const spock = document.querySelector("#spock");
spock.addEventListener("click", choice);
const contentLoaded = document.querySelector(".fa-rotate");
contentLoaded.addEventListener("click", ()=>document.location.reload());

},{"confetti-js":"jAzui","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jAzui":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function ConfettiGenerator(params) {
    //////////////
    // Defaults
    var appstate = {
        target: "confetti-holder",
        max: 80,
        size: 1,
        animate: true,
        respawn: true,
        props: [
            "circle",
            "square",
            "triangle",
            "line"
        ],
        colors: [
            [
                165,
                104,
                246
            ],
            [
                230,
                61,
                135
            ],
            [
                0,
                199,
                228
            ],
            [
                253,
                214,
                126
            ]
        ],
        clock: 25,
        interval: null,
        rotate: false,
        start_from_edge: false,
        width: window.innerWidth,
        height: window.innerHeight // canvas height (as int, in px)
    };
    //////////////
    // Setting parameters if received
    if (params) {
        if (params.target) appstate.target = params.target;
        if (params.max) appstate.max = params.max;
        if (params.size) appstate.size = params.size;
        if (params.animate !== undefined && params.animate !== null) appstate.animate = params.animate;
        if (params.respawn !== undefined && params.respawn !== null) appstate.respawn = params.respawn;
        if (params.props) appstate.props = params.props;
        if (params.colors) appstate.colors = params.colors;
        if (params.clock) appstate.clock = params.clock;
        if (params.start_from_edge !== undefined && params.start_from_edge !== null) appstate.start_from_edge = params.start_from_edge;
        if (params.width) appstate.width = params.width;
        if (params.height) appstate.height = params.height;
        if (params.rotate !== undefined && params.rotate !== null) appstate.rotate = params.rotate;
    }
    //////////////
    // Early exit if the target is not the correct type, or is null
    if (typeof appstate.target != "object" && typeof appstate.target != "string") throw new TypeError("The target parameter should be a node or string");
    if (typeof appstate.target == "object" && (appstate.target === null || !appstate.target instanceof HTMLCanvasElement) || typeof appstate.target == "string" && (document.getElementById(appstate.target) === null || !document.getElementById(appstate.target) instanceof HTMLCanvasElement)) throw new ReferenceError("The target element does not exist or is not a canvas element");
    //////////////
    // Properties
    var cv = typeof appstate.target == "object" ? appstate.target : document.getElementById(appstate.target);
    var ctx = cv.getContext("2d");
    var particles = [];
    //////////////
    // Random helper (to minimize typing)
    function rand(limit, floor) {
        if (!limit) limit = 1;
        var rand = Math.random() * limit;
        return !floor ? rand : Math.floor(rand);
    }
    var totalWeight = appstate.props.reduce(function(weight, prop) {
        return weight + (prop.weight || 1);
    }, 0);
    function selectProp() {
        var rand = Math.random() * totalWeight;
        for(var i = 0; i < appstate.props.length; ++i){
            var weight = appstate.props[i].weight || 1;
            if (rand < weight) return i;
            rand -= weight;
        }
    }
    //////////////
    // Confetti particle generator
    function particleFactory() {
        var prop = appstate.props[selectProp()];
        var p = {
            prop: prop.type ? prop.type : prop,
            x: rand(appstate.width),
            y: appstate.start_from_edge ? appstate.clock >= 0 ? -10 : parseFloat(appstate.height) + 10 : rand(appstate.height),
            src: prop.src,
            radius: rand(4) + 1,
            size: prop.size,
            rotate: appstate.rotate,
            line: Math.floor(rand(65) - 30),
            angles: [
                rand(10, true) + 2,
                rand(10, true) + 2,
                rand(10, true) + 2,
                rand(10, true) + 2
            ],
            color: appstate.colors[rand(appstate.colors.length, true)],
            rotation: rand(360, true) * Math.PI / 180,
            speed: rand(appstate.clock / 7) + appstate.clock / 30
        };
        return p;
    }
    //////////////
    // Confetti drawing on canvas
    function particleDraw(p) {
        if (!p) return;
        var op = p.radius <= 3 ? 0.4 : 0.8;
        ctx.fillStyle = ctx.strokeStyle = "rgba(" + p.color + ", " + op + ")";
        ctx.beginPath();
        switch(p.prop){
            case "circle":
                ctx.moveTo(p.x, p.y);
                ctx.arc(p.x, p.y, p.radius * appstate.size, 0, Math.PI * 2, true);
                ctx.fill();
                break;
            case "triangle":
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.x + p.angles[0] * appstate.size, p.y + p.angles[1] * appstate.size);
                ctx.lineTo(p.x + p.angles[2] * appstate.size, p.y + p.angles[3] * appstate.size);
                ctx.closePath();
                ctx.fill();
                break;
            case "line":
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.x + p.line * appstate.size, p.y + p.radius * 5);
                ctx.lineWidth = 2 * appstate.size;
                ctx.stroke();
                break;
            case "square":
                ctx.save();
                ctx.translate(p.x + 15, p.y + 5);
                ctx.rotate(p.rotation);
                ctx.fillRect(-15 * appstate.size, -5 * appstate.size, 15 * appstate.size, 5 * appstate.size);
                ctx.restore();
                break;
            case "svg":
                ctx.save();
                var image = new window.Image();
                image.src = p.src;
                var size = p.size || 15;
                ctx.translate(p.x + size / 2, p.y + size / 2);
                if (p.rotate) ctx.rotate(p.rotation);
                ctx.drawImage(image, -(size / 2) * appstate.size, -(size / 2) * appstate.size, size * appstate.size, size * appstate.size);
                ctx.restore();
                break;
        }
    }
    //////////////
    // Public itens
    //////////////
    //////////////
    // Clean actual state
    var _clear = function() {
        appstate.animate = false;
        clearInterval(appstate.interval);
        requestAnimationFrame(function() {
            ctx.clearRect(0, 0, cv.width, cv.height);
            var w = cv.width;
            cv.width = 1;
            cv.width = w;
        });
    };
    //////////////
    // Render confetti on canvas
    var _render = function() {
        cv.width = appstate.width;
        cv.height = appstate.height;
        particles = [];
        for(var i = 0; i < appstate.max; i++)particles.push(particleFactory());
        function draw() {
            ctx.clearRect(0, 0, appstate.width, appstate.height);
            for(var i in particles)particleDraw(particles[i]);
            update();
            if (appstate.animate) requestAnimationFrame(draw);
        }
        function update() {
            for(var i = 0; i < appstate.max; i++){
                var p = particles[i];
                if (p) {
                    if (appstate.animate) p.y += p.speed;
                    if (p.rotate) p.rotation += p.speed / 35;
                    if (p.speed >= 0 && p.y > appstate.height || p.speed < 0 && p.y < 0) {
                        if (appstate.respawn) {
                            particles[i] = p;
                            particles[i].x = rand(appstate.width, true);
                            particles[i].y = p.speed >= 0 ? -10 : parseFloat(appstate.height);
                        } else particles[i] = undefined;
                    }
                }
            }
            if (particles.every(function(p) {
                return p === undefined;
            })) _clear();
        }
        return requestAnimationFrame(draw);
    };
    return {
        render: _render,
        clear: _clear
    };
}
exports.default = ConfettiGenerator;

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

},{}]},["jC2qd","8lqZg"], "8lqZg", "parcelRequire1922")

//# sourceMappingURL=index.975ef6c8.js.map
