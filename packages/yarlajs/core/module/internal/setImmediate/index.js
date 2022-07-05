import globalThis from "../globalThis/index.js";
import setTimeout from "../setTimeout/index.js";

export default globalThis.setImmediate || globalThis.requestAnimationFrame || function ( /** @type {any} */ argc) { return setTimeout(argc, 1000 / 60); };
