import fs from "@yarlajs/core/module/internal/fs/index.js";
import path from "@yarlajs/core/module/internal/path/index.js";
import acornCore from "@yarlajs/core/module/internal/acorn-core/index.js";
import acornWalk from "@yarlajs/core/module/internal/acorn-walk/index.js";
import typescript from "@yarlajs/core/module/internal/typescript/index.js";
import definition from "@yarlajs/core/module/constant/definition/index.js";
import inlineSourceMap from "@yarlajs/core/module/standard/inlineSourceMap/index.js";
import isString from "@yarlajs/core/lib/isString/index.js";
import isArray from "@yarlajs/core/lib/isArray/index.js";
import clone from "@yarlajs/core/lib/clone/index.js";
import merge from "@yarlajs/core/lib/merge/index.js";
import flat from "@yarlajs/core/lib/flat/index.js";
import omit from "@yarlajs/core/lib/omit/index.js";

/**
 * 
 * Default compiler.
 * Translated into AMD module, if it is already an AMD module, it will not be translated.
 * No look-ahead syntax translation unless tsconfig.json is configured.
 * Support typescript, commonjs modules and esm modules.
 *
 * @param {string} content Contents of file to be compiled.
 * @param {string} filename The name of the file that needs to be compiled.
 * @returns {string}
 */
export default function (
    content,
    filename
) {
    var name = path.extname(filename).slice(1).toLowerCase();
    if (name === "js" || name === "cjs" || name === "mjs") {
        return jsTranspile(content, filename);
    }
    if (name === "ts" || name === "tsx" || name === "jsx") {
        return tsTranspile(content, filename);
    }
    return content;
}

/**
 * 
 * Transpile to AMD module for typescript.
 * 
 * @param {string} content Contents of file to be compiled.
 * @param {string} filename The name of the file that needs to be compiled.
 * @returns {string}
 */
function tsTranspile(
    content,
    filename
) {
    var compilerOptions = {
        allowJs: true,
        inlineSources: true,
        inlineSourceMap: true,
        esModuleInterop: true,
        emitDecoratorMetadata: true,
        experimentalDecorators: true,
        allowSyntheticDefaultImports: true,
        jsxFragmentFactory: "Yarla.Fragment",
        jsxFactory: "Yarla.createElement",
        target: typescript.ScriptTarget.ESNext,
        module: typescript.ModuleKind.AMD,
        jsx: typescript.JsxEmit.React,
    };
    var tsconfigResolve = path.resolve("tsconfig.json");
    if (fs.statSync(tsconfigResolve) && fs.statSync(tsconfigResolve).isFile()) {
        try {
            compilerOptions = merge(compilerOptions, omit(
                typescript.convertCompilerOptionsFromJson(
                    JSON.parse(
                        fs.readFileSync(tsconfigResolve, definition.UTF8)
                    ).compilerOptions,
                    filename
                ).options,
                "module"
            ));
        } catch (_) {
            // DO NOTHING
        }
    }
    return typescript.transpile(content, compilerOptions, filename);
}

/**
 * 
 * Transpile to AMD module for javascript.
 * 
 * @param {string} content Contents of file to be compiled.
 * @param {string} filename The name of the file that needs to be compiled.
 * @returns {string}
 */
function jsTranspile(
    content,
    filename
) {
    /**
     * 
     * @param {any} name 
     */
    function addDependency(name) {
        if (isString(name) && name.length > 0) {
            if (dependencies.indexOf(name) === -1) {
                dependencies.push(name);
            }
        }
    }
    /**
     * 
     * @param {string} name 
     */
    function defineVariable(name) {
        rename[name] = null;
        if (define.indexOf(name) === -1) {
            define.push(name);
        }
    }
    /**
     * 
     * @param {string} name 
     * @param {string} argc
     */
    function deleteVariable(name, argc) {
        rename[name] = rename[argc] || argc;
        var location = define.indexOf(name);
        if (location !== -1) {
            define.splice(location, 1);
        }
    }
    /**
     * 
     * @param {import("estree").Node | Array<import("estree").Node> | null | undefined} node 
     * @param {Yarla.NoReturnsFunc<[import("estree").Node]>} callback 
     */
    function invokeCallback(node, callback) {
        if (isArray(node)) {
            node.forEach(function (node) {
                callback(node);
            });
        } else if (node) {
            callback(node);
        }
    }
    /**
     * 
     * @param {import("estree").Node} node 
     * @param {Yarla.NoReturnsFunc<[string]>} callback 
     */
    function resolvePattern(node, callback) {
        switch (node.type) {
            case "Identifier":
                callback(node.name);
                break;
            case "ArrayPattern":
                node.elements.forEach(function (node) {
                    if (node) {
                        resolvePattern(node, callback);
                    }
                });
                break;
            case "ObjectPattern":
                node.properties.forEach(function (node) {
                    if (node.type === "Property") {
                        resolvePattern(node.value, callback);
                    }
                    if (node.type === "RestElement") {
                        resolvePattern(node.argument, callback);
                    }
                });
                break;
            case "RestElement":
                resolvePattern(node.argument, callback);
                break;
            case "AssignmentPattern":
                resolvePattern(node.left, callback);
                break;
        }
    }
    /**
     * 
     * @param {import("estree").Node} node 
     */
    function getRenameIdentifier(node) {
        var name;
        switch (node.type) {
            case "Identifier":
                name = rename[node.name] || node.name;
                if (define.indexOf(node.name) === -1) {
                    return name;
                }
                break;
            case "ThisExpression":
                name = rename["this"];
                if (name) {
                    return name;
                }
                break;
            case "MemberExpression":
                name = getNameByExpression(node);
                if (name && name.free) {
                    return name.identifier;
                }
                break;
        }
    }
    /**
     * 
     * @param {import("estree").Node} node 
     */
    function getNameByExpression(node) {
        var list = [];
        var free = false;
        var name;
        while (node.type === "MemberExpression") {
            if (node.computed) {
                if (node.property.type === "Literal") {
                    list.push(node.property.value);
                } else {
                    break;
                }
            } else {
                if (node.property.type === "Identifier") {
                    list.push(node.property.name);
                } else {
                    break;
                }
            }
            node = node.object;
        }
        switch (node.type) {
            case "Identifier":
                name = node.name;
                free = define.indexOf(name) === -1;
                list.push(rename[name] || name);
                break;
            case "ThisExpression":
                if (name = rename["this"]) {
                    free = true;
                    list.push(name);
                } else {
                    free = false;
                    list.push("this");
                }
                break;
            default:
                return null;
        }
        var prefix = "";
        for (var
            i = list.length - 1;
            i > 0;
            i--
        ) {
            prefix += list[i] + ".";
        }
        return {
            free: free,
            expression: prefix + "*",
            identifier: prefix + list[0],
        };
    }
    /**
     * 
     * @param {ReadonlyArray<import("estree").Node | string>} argv 
     * @param {Yarla.NOOP} callback 
     */
    function inScope(argv, callback) {
        var _rename = rename;
        var _define = define;
        rename = clone(_rename);
        define = clone(_define);
        rename["this"] = null;
        argv.forEach(function (node) {
            if (isString(node)) {
                defineVariable(node);
            } else {
                resolvePattern(node, defineVariable);
            }
        });
        callback();
        rename = _rename;
        define = _define;
    }
    var amd = false,
        cjs = false,
        esm = false,
        rename = {},
        define = [],
        dependencies = [];
    acornWalk.recursive(
        acornCore.parse(content, {
            ecmaVersion: "latest",
            sourceType: "module",
            locations: false,
            ranges: false,
        }),
        null,
        {
            // @ts-ignore
            VariableDeclarator: function (
                /**
                 * @type {import("estree").VariableDeclarator}
                 */
                node,
                /**
                 * @type {null}
                 */
                _,
                /**
                 * @type {Yarla.NoReturnsFunc<[import("estree").Node]>}
                 */
                callback
            ) {
                if (esm || amd) {
                    return;
                }
                resolvePattern(node.id, defineVariable);
                if (node.init && node.id.type === "Identifier") {
                    var name = getRenameIdentifier(node.init);
                    if (name) {
                        deleteVariable(node.id.name, name);
                        return;
                    }
                }
                invokeCallback(node.id, callback);
                invokeCallback(node.init, callback);
            },
            // @ts-ignore
            AssignmentExpression: function (
                /**
                 * @type {import("estree").AssignmentExpression}
                 */
                node,
                /**
                 * @type {null}
                 */
                _,
                /**
                 * @type {Yarla.NoReturnsFunc<[import("estree").Node]>}
                 */
                callback
            ) {
                if (esm || amd) {
                    return;
                }
                var info = getNameByExpression(node.left);
                if (info && info.free && (
                    info.expression === "module.*" ||
                    info.expression === "module.exports.*" ||
                    info.expression === "exports.*"
                )) {
                    cjs = true;
                }
                var name = getRenameIdentifier(node.right);
                if (name && node.left.type === "Identifier") {
                    deleteVariable(node.left.name, name);
                } else if (node.left.type === "Identifier") {
                    invokeCallback(node.right, callback);
                    defineVariable(node.left.name);
                    invokeCallback(node.left, callback);
                } else {
                    invokeCallback(node.right, callback);
                    invokeCallback(node.left, callback);
                    resolvePattern(node.left, function (name) {
                        rename[name] = null;
                    });
                }
            },
            // @ts-ignore
            ImportExpression: function (
                /**
                 * @type {import("estree").ImportExpression}
                 */
                node,
                /**
                 * @type {null}
                 */
                _,
                /**
                 * @type {Yarla.NoReturnsFunc<[import("estree").Node]>}
                 */
                callback
            ) {
                if (esm || amd) {
                    return;
                }
                if (node.source.type === "Literal") {
                    addDependency(node.source.value);
                }
                invokeCallback(node.source, callback);
            },
            // @ts-ignore
            CallExpression: function (
                /**
                 * @type {import("estree").CallExpression}
                 */
                node,
                /**
                 * @type {null}
                 */
                _,
                /**
                 * @type {Yarla.NoReturnsFunc<[import("estree").Node]>}
                 */
                callback
            ) {
                if (esm || amd) {
                    return;
                }
                var name = getRenameIdentifier(node.callee);
                if (name === "define") {
                    amd = true;
                    return;
                }
                if (name === "require") {
                    cjs = true;
                    if (node.arguments.length === 1 &&
                        node.arguments[0].type === "Literal") {
                        addDependency(node.arguments[0].value);
                        return;
                    }
                }
                invokeCallback(node.callee, callback);
                invokeCallback(node.arguments, callback);
            },
            // @ts-ignore
            ClassDeclaration: function (
                /**
                 * @type {import("estree").ClassDeclaration}
                 */
                node,
                /**
                 * @type {null}
                 */
                _,
                /**
                 * @type {Yarla.NoReturnsFunc<[import("estree").Node]>}
                 */
                callback
            ) {
                if (esm || amd) {
                    return;
                }
                if (node.id) {
                    defineVariable(node.id.name);
                }
                invokeCallback(node.superClass, callback);
                invokeCallback(node.body, callback);
            },
            // @ts-ignore
            FunctionDeclaration: function (
                /**
                 * @type {import("estree").FunctionDeclaration}
                 */
                node,
                /**
                 * @type {null}
                 */
                _,
                /**
                 * @type {Yarla.NoReturnsFunc<[import("estree").Node]>}
                 */
                callback
            ) {
                if (esm || amd) {
                    return;
                }
                if (node.id) {
                    defineVariable(node.id.name);
                }
                invokeCallback(node.params, callback);
                inScope(flat([node.params, node.id], 0, 1, true), function () {
                    invokeCallback(node.body, callback);
                });
            },
            ExportDefaultDeclaration: function () { esm = true; },
            ExportNamedDeclaration: function () { esm = true; },
            ExportAllDeclaration: function () { esm = true; },
            ImportDeclaration: function () { esm = true; },
        }
    );
    if (amd) {
        return content;
    }
    if (esm) {
        return tsTranspile(content, filename);
    }
    if (cjs) {
        return "define(" + JSON.stringify(["require", "exports", "module"].concat(dependencies)) + ",function(require,exports,module){\n" + inlineSourceMap(content, 1) + "\n});";
    }
    return content;
}
