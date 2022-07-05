import globalThis from "../globalThis/index.js";
import clearTimeout from "../clearTimeout/index.js";

export default globalThis.clearImmediate || globalThis.cancelAnimationFrame || function ( /** @type {any} */ argc) { return clearTimeout(argc); };
