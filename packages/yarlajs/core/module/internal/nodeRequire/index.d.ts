/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

/**
 * Use commonjs module dynamic import to avoid loading built-in modules in the browser.
 * This function can only be used in the nodejs.
 * Always returns null in browsers.
 * 
 * This is commonjs module, it doesn't work in browser,
 * when the browser loads it with type="module", you can use `nodeRquire.mjs` instead to work.
 * 
 * ```html
 * <script type="importmap">
 *   {
 *     "imports": {
 *       "<path>/nodeRequire/index.js": "<path>/nodeRequire/index.mjs"
 *     }
 *   }
 * </script>
 * <script type="module">
 *   import Yarla from "<path>/yarla/index.js";
 * </script>
 * ```
 * 
 * @param id The id of the module.
 */
export default function <T extends keyof BuiltinModules>(id: T): BuiltinModules[T];

declare interface BuiltinModules {
    readonly "fs": typeof import("fs");
    readonly "url": typeof import("url");
    readonly "path": typeof import("path");
    readonly "zlib": typeof import("zlib");
    readonly "http": typeof import("http");
    readonly "https": typeof import("https");
    readonly "crypto": typeof import("crypto");
    readonly "module": typeof import("module");
    readonly "stream": typeof import("stream");
    readonly "process": typeof import("process");
    readonly "readline": typeof import("readline");
    readonly "typescript": typeof import("typescript");
    readonly "acorn-walk": typeof import("acorn-walk");
    readonly "acorn": typeof import("acorn");
}
