/**
 * 
 * @typedef {Object} BuildinModules
 * 
 * @property {typeof import("fs")} `fs`
 * @property {typeof import("url")} `url`
 * @property {typeof import("path")} `path`
 * @property {typeof import("zlib")} `zlib`
 * @property {typeof import("http")} `http`
 * @property {typeof import("https")} `https`
 * @property {typeof import("crypto")} `crypto`
 * @property {typeof import("module")} `module`
 * @property {typeof import("stream")} `stream`
 * @property {typeof import("process")} `process`
 * @property {typeof import("readline")} `readline`
 * @property {typeof import("typescript")} `typescript`
 * @property {typeof import("acorn-walk")} `acorn-walk`
 * @property {typeof import("acorn")} `acorn`
 * 
 */


/**
 * Use commonjs module dynamic import to avoid loading built-in modules in the browser.
 * This function can only be used in the nodejs.
 * Always returns null in browsers.
 * 
 * @param {Yarla.Object<T, keyof BuildinModules>} id The id of the module
 * @returns {BuildinModules[T]}
 * @template T
 */
export default function (
    id
) {
    return typeof require !== "undefined" ? require( /* webpackIgnore: true */ id) : null;
}
