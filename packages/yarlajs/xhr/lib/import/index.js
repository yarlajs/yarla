import message from "@yarlajs/core/module/constant/message/index.js";
import httpHeader from "@yarlajs/core/module/constant/httpHeader/index.js";
import defineProperties from "@yarlajs/core/module/standard/defineProperties/index.js";
import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";
import generateNormalDescriptor from "@yarlajs/core/module/standard/generateNormalDescriptor/index.js";
import inlineSourceMap from "@yarlajs/core/module/standard/inlineSourceMap/index.js";
import isJsonContent from "@yarlajs/core/lib/isJsonContent/index.js";
import isUndefined from "@yarlajs/core/lib/isUndefined/index.js";
import isFunction from "@yarlajs/core/lib/isFunction/index.js";
import Promise from "@yarlajs/core/lib/Promise/index.js";
import flat from "@yarlajs/core/lib/flat/index.js";
import resolve from "../resolve/index.js";
import get from "../get/index.js";

export default (function () {
    var module = {};
    return skrinkSerializer(
        /**
         * 
         * AMD module resolution.
         * 
         * @param {string} name
         * @param {ReadonlyArray<string>} [esModules]
         * @returns {Promise<any>}
         */
        function (
            name,
            esModules
        ) {
            return definition(".", name, ["yarla"].concat(esModules || []));
        }
    );
    /**
     * 
     * @param {string} dirname 
     * @param {string} modname 
     * @param {ReadonlyArray<string>} esModules
     */
    function definition(
        dirname,
        modname,
        esModules
    ) {
        return resolution(dirname, modname, esModules).then(
            /**
             *
             * @param {object} provide
             * @param {any} [provide.exports]
             * @param {Yarla.BasicFunc | Yarla.AnyObject} provide.func
             * @param {ReadonlyArray<string>} provide.deps
             * @param {string} provide.path
             */
            function (provide) {
                return "exports" in provide ? provide.exports : isFunction(provide.func) ? provide.exports = (
                    function (require, module) {
                        return Promise.all(
                            provide.deps.map(function (i) {
                                switch (i) {
                                    case "module":
                                        return module;
                                    case "exports":
                                        return module.exports;
                                    case "require":
                                        return require;
                                }
                                return definition(provide.path, i, esModules);
                            })
                        ).then(function (dependencies) {
                            var exports = provide.func.apply(module.exports, dependencies.map(function (i) {
                                if (i === require) {
                                    return skrinkSerializer(
                                        function ( /** @type {string} */ i) {
                                            return dependencies[provide.deps.indexOf(i)];
                                        }
                                    );
                                }
                                return i;
                            }));
                            return isUndefined(exports) ? module.exports : exports;
                        });
                    }(
                        function () {
                            throw new Error(message.ILLEGAL_INVOCATION);
                        },
                        {
                            exports: {}
                        }
                    )
                ) : provide.exports = provide.func;
            }
        );
    }
    /**
     * 
     * @param {string} dirname 
     * @param {string} modname 
     * @param {ReadonlyArray<string>} esModules
     */
    function resolution(
        dirname,
        modname,
        esModules
    ) {
        if (modname in module) {
            return Promise.resolve(module[modname]);
        }
        if (esModules.indexOf(modname) !== -1) {
            try {
                return Function("return import('" + modname + "').then(v=>({exports:v}))").call(null);
            } catch (_) {
                // DO NOTHING
            }
        }
        if (modname.charAt(0) === ".") {
            modname = resolve(dirname, modname);
        } else {
            modname = resolve("/node_modules", modname);
        }
        if (modname in module) {
            return Promise.resolve(module[modname]);
        }
        return module[modname] = get(modname).send(null, {
            responseType: "text",
        }).then(function (value) {
            var response = value.response;
            var filename = value.responseURL || modname;
            var datatype = value.headers[httpHeader.CONTENT_TYPE.toLowerCase()];
            if (isJsonContent(datatype ? String(datatype) : null)) {
                return {
                    exports: response ? JSON.parse(response) : null,
                };
            }
            var instance;
            new Function("define", [
                inlineSourceMap(response, 2),
                "//# sourceURL=" + filename + "!translate",
            ].join("\n")).call(null, defineProperties(skrinkSerializer(function () {
                var argv = flat(arguments);
                var func = argv.pop();
                var deps = argv.pop() || [];
                instance = Promise.resolve({
                    path: resolve(filename, ".."),
                    deps: deps,
                    func: func,
                });
            }), {
                amd: generateNormalDescriptor(true),
            }));
            return instance || Promise.reject(new Error(message.INVALID_MODULE + ": " + filename));
        });
    }
}());
