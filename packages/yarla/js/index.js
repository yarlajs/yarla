//! Copyright (C) 2022 by WU HU. All Rights Reserved.
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Yarla = {}));
})(this, (function (exports) { 'use strict';

    var pattern$2 = {
        URL: /^[A-Za-z][A-Za-z0-9]*:\/\/[^\s]*$/,
        DATE: /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/,
        TIME: /^(?:[01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/,
        IPV4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
        IPV6: /^(?:(?:[0-9A-Fa-f]{1,4}:){7}(?:[0-9A-Fa-f]{1,4}|:)|(?:[0-9A-Fa-f]{1,4}:){6}(?:(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])|:[0-9A-Fa-f]{1,4}|:)|(?:[0-9A-Fa-f]{1,4}:){5}(?::(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])|(?::[0-9A-Fa-f]{1,4}){1,2}|:)|(?:[0-9A-Fa-f]{1,4}:){4}(?:(?::[0-9A-Fa-f]{1,4}){0,1}:(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])|(?::[0-9A-Fa-f]{1,4}){1,3}|:)|(?:[0-9A-Fa-f]{1,4}:){3}(?:(?::[0-9A-Fa-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])|(?::[0-9A-Fa-f]{1,4}){1,4}|:)|(?:[0-9A-Fa-f]{1,4}:){2}(?:(?::[0-9A-Fa-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])|(?::[0-9A-Fa-f]{1,4}){1,5}|:)|(?:[0-9A-Fa-f]{1,4}:){1}(?:(?::[0-9A-Fa-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])|(?::[0-9A-Fa-f]{1,4}){1,6}|:)|(?::(?:(?::[0-9A-Fa-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])|(?::[0-9A-Fa-f]{1,4}){1,7}|:)))(?:%[0-9A-Za-z]{1,20})?$/,
        BLANK: /^\s*$/,
        EMAIL: /^\w+(?:[-+.]\w+)*@\w+(?:[-.]\w+)*\.\w+(?:[-.]\w+)*$/,
        PHONE: /^1[3-9][0-9]{9}$/,
        DIGIT: /^[-]?(?:(?:0|[1-9][0-9]{0,9})(?:\.[0-9]*)?|\.[0-9]+)$/,
        ENGLISH: /^[A-Za-z]+$/,
        CHINESE: /^[\u4e00-\u9fa5]+$/,
        USERNAME: /^[A-Za-z][\w]*$/,
        PASSWORD: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
        DATETIME: /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)T(?:[01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]\.[0-9]{3}Z$/,
    };

    var definition$3 = {
        /** @type {"br"} */
        BR: "br",
        /** @type {"hex"} */
        HEX: "hex",
        /** @type {"md5"} */
        MD5: "md5",
        /** @type {"gzip"} */
        GZIP: "gzip",
        /** @type {"utf8"} */
        UTF8: "utf8",
        /** @type {"ascii"} */
        ASCII: "ascii",
        /** @type {"base64"} */
        BASE64: "base64",
        /** @type {"latin1"} */
        LATIN1: "latin1",
        /** @type {"sha256"} */
        SHA256: "sha256",
        /** @type {"deflate"} */
        DEFLATE: "deflate",
        /** @type {"pending"} */
        PENDING: "pending",
        /** @type {"rejected"} */
        REJECTED: "rejected",
        /** @type {"fulfilled"} */
        RESOLVED: "fulfilled",
        /** @type {"development"} */
        DEVELOPMENT: "development",
        /** @type {"https:"} */
        HTTPS: "https:",
        /** @type {"http:"} */
        HTTP: "http:",
    };

    /**
     * Hide function internal implementation.
     * 
     * @param {Yarla.Object<T, Yarla.BasicFunc>} constructor The function.
     * @returns {T}
     * @template T
     */
    function skrinkSerializer$3 (
        constructor
    ) {
        // @ts-ignore
        return function () { return constructor.apply(this, arguments); };
    }

    var _isReference = skrinkSerializer$3(
        /**
         * Determines if the input parameter is reference type.
         * 
         * @param {any} argc Any object.
         * @returns {boolean}
         */
        function (
            argc
        ) {
            return Object(argc) === argc;
        }
    );

    var _isInstanceOf = skrinkSerializer$3(
        /**
         * 
         * Determines if the input parameter is an instance of the specified class.
         * 
         * @param {any} argc Any object.
         * @param {Yarla.Proto<T>} constructor The class.
         * @returns {argc is T}
         * @template T
         */
        function (
            argc,
            constructor
        ) {
            return _isReference(constructor) && argc instanceof constructor;
        }
    );

    var _isNumber = skrinkSerializer$3(
        /**
         * 
         * Determines if the input parameter is a number.
         * 
         * @param {any} argc Any object.
         * @returns {argc is number}
         */
        function (
            argc
        ) {
            return typeof argc === "number" || _isInstanceOf(argc, Number);
        }
    );

    var _isString = skrinkSerializer$3(
        /**
         * 
         * Determines if the input parameter is a string.
         * 
         * @param {any} argc Any object.
         * @returns {argc is string}
         */
        function (
            argc
        ) {
            return typeof argc === "string" || _isInstanceOf(argc, String);
        }
    );

    var _isDate = skrinkSerializer$3(
        /**
         * 
         * Determines if the input parameter is a Date.
         * 
         * @param {any} argc Any object.
         * @returns {argc is Date}
         */
        function (
            argc
        ) {
            return _isInstanceOf(argc, Date);
        }
    );

    var cookies$1 = {
        parse: skrinkSerializer$3(
            /**
             * 
             * @param {string} argc 
             * @returns {any}
             */
            function (
                argc
            ) {
                var r = {};
                for (var
                    i = 0,
                    s = argc.split(/;\s*/),
                    l = s.length;
                    i < l;
                    i++
                ) {
                    var n = s[i];
                    var d = n.indexOf("=");
                    if (d === -1) {
                        continue;
                    }
                    var k = n.slice(0, d).trim();
                    var v = n.slice(d + 1).trim();
                    var j = v.length - 1;
                    if (v.charAt(0) === "\"" &&
                        v.charAt(j) === "\"") {
                        v = v.slice(1, -1);
                    }
                    r[
                        k
                    ] = v;
                }
                return r;
            }
        ),
        serialize: skrinkSerializer$3(
            /**
             * 
             * @param {string} name 
             * @param {string} value 
             * @param {Yarla.CookieSerializationOptions} [opts] 
             * @returns {string}
             */
            function (
                name,
                value,
                opts
            ) {
                return (function (
                    UA,
                    PROTOCOL,
                    PATH,
                    DOMAIN,
                    MAXAGE,
                    EXPIRES,
                    SAMESITE,
                    HTTPONLY,
                    SECURE
                ) {
                    var k = String(name);
                    var v = String(value);
                    if (SAMESITE === "None" && _isString(UA)) {
                        if (
                            (
                                UA.indexOf("CPU iPhone OS 12") !== -1 ||
                                UA.indexOf("iPad; CPU OS 12") !== -1
                            ) || (
                                UA.indexOf("Macintosh; Intel Mac OS X 10_14") !== -1 &&
                                UA.indexOf("Version/") !== -1 &&
                                UA.indexOf("Safari") !== -1
                            ) || (
                                UA.indexOf("Chrome/5") !== -1 ||
                                UA.indexOf("Chrome/6") !== -1
                            )
                        ) {
                            SAMESITE = void 0;
                        }
                    }
                    if (SAMESITE === "None" && _isString(PROTOCOL)) {
                        if (PROTOCOL === definition$3.HTTP) {
                            SAMESITE = void 0;
                        }
                    }
                    if (_isString(PATH)) {
                        v += "; Path=" + PATH;
                    }
                    if (_isString(DOMAIN)) {
                        v += "; Domain=" + DOMAIN;
                    }
                    if (_isNumber(MAXAGE)) {
                        v += "; Max-Age=" + MAXAGE;
                    }
                    if (_isDate(EXPIRES)) {
                        v += "; Expires=" + EXPIRES.toUTCString();
                    }
                    if (SAMESITE) {
                        v += "; SameSite=" + SAMESITE;
                    }
                    if (HTTPONLY) {
                        v += "; HttpOnly";
                    }
                    if (SAMESITE === "None" || SECURE) {
                        v += "; Secure";
                    }
                    return k + "=" + v;
                }(
                    opts && opts.UA,
                    opts && opts.protocol,
                    opts && opts.path,
                    opts && opts.domain,
                    opts && opts.maxAge,
                    opts && opts.expires,
                    opts && opts.sameSite,
                    opts && opts.httpOnly,
                    opts && opts.secure
                ));
            }
        ),
    };

    var globalThis$3 = (
        // eslint-disable-next-line no-undef
        typeof global !== "undefined" ? global :
            // eslint-disable-next-line no-undef
            typeof window !== "undefined" ? window :
                // eslint-disable-next-line no-undef
                self
    );

    var decodeURIComponent$2 = globalThis$3.decodeURIComponent;

    var encodeURIComponent$2 = globalThis$3.encodeURIComponent;

    var message$3 = {
        /** @type {"Invalid URL"} */
        INVALID_URL: "Invalid URL",
        /** @type {"Invalid module"} */
        INVALID_MODULE: "Invalid module",
        /** @type {"Invalid protocol"} */
        INVALID_PROTOCOL: "Invalid protocol",
        /** @type {"Invalid formatter"} */
        INVALID_FORMATTER: "Invalid formatter",
        /** @type {"Invalid result data"} */
        INVALID_RESULT_DATA: "Invalid result data",
        /** @type {"Illegal invocation"} */
        ILLEGAL_INVOCATION: "Illegal invocation",
        /** @type {"Illegal constructor"} */
        ILLEGAL_CONSTRUCTOR: "Illegal constructor",
        /** @type {"Target must be an array"} */
        TARGET_MUST_BE_AN_ARRAY: "Target must be an array",
        /** @type {"Target must be an object"} */
        TARGET_MUST_BE_AN_OBJECT: "Target must be an object",
        /** @type {"Only async is supported"} */
        ONLY_ASYNC_IS_SUPPORTED: "Only async is supported",
        /** @type {"Only used in components"} */
        ONLY_USED_IN_COMPONENTS: "Only used in components",
        /** @type {"Only numbers could inside []"} */
        ONLY_NUMBERS_COULD_INSIDE_SQUARE: "Only numbers could inside []",
        /** @type {"Only be called when state is OPEN"} */
        ONLY_BE_CALLED_WHEN_STATE_IS_OPEN: "Only be called when state is OPEN",
        /** @type {"Only be called when state is UNSENT"} */
        ONLY_BE_CALLED_WHEN_STATE_IS_UNSENT: "Only be called when state is UNSENT",
        /** @type {"Character is outside the bounds of ascii"} */
        CHARACTER_IS_OUTSIDE_THE_BOUNDS_OF_ASCII: "Character is outside the bounds of ascii",
        /** @type {"Character is outside the bounds of latin1"} */
        CHARACTER_IS_OUTSIDE_THE_BOUNDS_OF_LATIN1: "Character is outside the bounds of latin1",
        /** @type {"Self-closing elements cannot contain child nodes"} */
        SELF_CLOSING_ELEMENTS_CANNOT_CONTAIN_CHILD_NODES: "Self-closing elements cannot contain child nodes",
        /** @type {"The node to be removed is not a child of this node"} */
        FAILED_TO_EXECUTE_REMOVE: "The node to be removed is not a child of this node",
        /** @type {"The node before which the new node is to be inserted is not a child of this node"} */
        FAILED_TO_EXECUTE_INSERT: "The node before which the new node is to be inserted is not a child of this node",
        /** @type {"Please use the 'new' operator, this constructor cannot be called as a function"} */
        FAILED_TO_CONSTRUCT_INSPANCE: "Please use the 'new' operator, this constructor cannot be called as a function",
        /** @type {"Promise resolved with itself"} */
        PROMISE_RESOLVED_WITH_ITSELF: "Promise resolved with itself",
        /** @type {"Offset is outside the bounds"} */
        OFFSET_IS_OUTSIDE_THE_BOUNDS: "Offset is outside the bounds",
        /** @type {"Stream closed before ending"} */
        STREAM_CLOSED_BEFORE_ENDING: "Stream closed before ending",
        /** @type {"Expression can not be empty"} */
        EXPRESSION_CAN_NOT_BE_EMPTY: "Expression can not be empty",
        /** @type {"Must have number in []"} */
        MUST_HAVE_NUMBER_IN_SQUARE: "Must have number in []",
        /** @type {"Redirect exceeds maximum"} */
        REDIRECT_EXCEEDS_MAXIMUM: "Redirect exceeds maximum",
        /** @type {"Not implemented"} */
        NOT_IMPLEMENTED: "Not implemented",
        /** @type {"Not supported"} */
        NOT_SUPPORTED: "Not supported",
        /** @type {"Timeout"} */
        TIMEOUT: "Timeout",
        /** @type {"Abort"} */
        ABORT: "Abort",
    };

    /**
     * 
     * Resolve a property expression. Returns the property array.
     * 
     * @param {string} argc A property expression.
     * @returns {Array<string | number>}
     */
    function divideExpression$3 (
        argc
    ) {
        var t = "";
        var r = [];
        for (var
            i = 0,
            e = 0,
            o = 0,
            a = 48,
            b = 57,
            inSquare = false,
            isNumber = false,
            l = argc.length;
            i < l;
            i++
        ) {
            var c = argc.charAt(i);
            if (c === "\\") {
                if (i + 1 < l && (
                    argc.charAt(i + 1) === "." ||
                    argc.charAt(i + 1) === "[" ||
                    argc.charAt(i + 1) === "]")
                ) {
                    t += argc.charAt(++i);
                } else {
                    t += c;
                }
            } else if (c === ".") {
                if (t) {
                    r.push(t);
                    t = "";
                }
            } else if (c === "[") {
                if (t) {
                    r.push(t);
                    t = "";
                }
                inSquare = true;
                isNumber = false;
            } else if (c === "]") {
                if (!isNumber) {
                    throw new Error(message$3.MUST_HAVE_NUMBER_IN_SQUARE + ": " + argc);
                }
                inSquare = false;
                r.push(o);
                o = 0;
            } else if (inSquare) {
                e = c.charCodeAt(0);
                if (e < a || e > b) {
                    throw new Error(message$3.ONLY_NUMBERS_COULD_INSIDE_SQUARE + ": " + argc);
                }
                isNumber = true;
                o = 10 * o + e - a;
            } else {
                t += c;
            }
        }
        if (t) {
            r.push(t);
        }
        if (r.length === 0) {
            throw new Error(message$3.EXPRESSION_CAN_NOT_BE_EMPTY);
        }
        return r;
    }

    var _isUndefined = skrinkSerializer$3(
        /**
         * 
         * Determines if the input parameter is undefined.
         * 
         * @param {any} argc Any object.
         * @returns {argc is undefined}
         */
        function (
            argc
        ) {
            return argc === void 0;
        }
    );

    var _isNull = skrinkSerializer$3(
        /**
         * 
         * Determines if the input parameter is null.
         * 
         * @param {any} argc Any object.
         * @returns {argc is null}
         */
        function (
            argc
        ) {
            return argc === null;
        }
    );

    var _isNullOrUndefined = skrinkSerializer$3(
        /**
         * 
         * Determines if the input parameter is null or undefined.
         * 
         * @param {any} argc Any object.
         * @returns {argc is null | undefined}
         */
        function (
            argc
        ) {
            return _isNull(argc) || _isUndefined(argc);
        }
    );

    var _isBoolean = skrinkSerializer$3(
        /**
         * 
         * Determines if the input parameter is a boolean.
         * 
         * @param {any} argc Any object.
         * @returns {argc is boolean}
         */
        function (
            argc
        ) {
            return typeof argc === "boolean" || _isInstanceOf(argc, Boolean);
        }
    );

    /**
     * 
     * Returns the class name of the specified object.
     * 
     * @param {any} argc The object whose class name needs to be queried.
     * @returns {string}
     */
    function className$3 (
        argc
    ) {
        return Object.prototype.toString.call(argc).slice(8, -1);
    }

    var _isBigInt = skrinkSerializer$3(
        /**
         * 
         * Determines if the input parameter is a bigint.
         * 
         * @param {any} argc Any object.
         * @returns {argc is bigint}
         */
        function (
            argc
        ) {
            return typeof argc === "bigint" || className$3(argc) === "BigInt";
        }
    );

    var _isSymbol = skrinkSerializer$3(
        /**
         * 
         * Determines if the input parameter is a symbol.
         * 
         * @param {any} argc Any object.
         * @returns {argc is symbol}
         */
        function (
            argc
        ) {
            return typeof argc === "symbol" || className$3(argc) === "Symbol";
        }
    );

    var _isObject = skrinkSerializer$3(
        /**
         * 
         * Determines if the input parameter is an object, exclude null.
         * 
         * @param {any} argc Any object.
         * @param {boolean} [strict] Indicates if it is a strict object. 
         * @returns {argc is object}
         */
        function (
            argc,
            strict
        ) {
            return strict ? className$3(argc) === "Object" : !_isNull(argc) && typeof argc === "object";
        }
    );

    var _isArray = skrinkSerializer$3(
        /**
         * 
         * Determines if the input parameter is an array.
         * 
         * @param {any} argc Any object.
         * @returns {argc is any[]}
         */
        function (
            argc
        ) {
            return Array.isArray(argc);
        }
    );

    var _set = skrinkSerializer$3(
        /**
         * 
         * Sets the value of a specified property of an object.
         * 
         * @param {any} argc An object.
         * @param {Yarla.PropertyExpr} expr The property expression.
         * @param {T} value The value of the specified property of an object.
         * @returns {T}
         * @template T
         */
        function (
            argc,
            expr,
            value
        ) {
            var t = argc, p;
            for (var
                i = 0,
                m = argc,
                s = _isString(expr) ? divideExpression$3(expr) : expr,
                l = s.length;
                i < l;
                i++
            ) {
                var n = s[i];
                if (_isNumber(n)) {
                    if (!_isArray(m)) {
                        if (i === 0) {
                            throw new Error(message$3.TARGET_MUST_BE_AN_ARRAY);
                        } else {
                            // @ts-ignore
                            m = t[p] = [];
                        }
                    }
                } else {
                    if (!_isObject(m)) {
                        if (i === 0) {
                            throw new Error(message$3.TARGET_MUST_BE_AN_OBJECT);
                        } else {
                            // @ts-ignore
                            m = t[p] = {};
                        }
                    }
                }
                p = n;
                t = m;
                m = t[p];
            }
            return _isNullOrUndefined(p) ? value : t[p] = value;
        }
    );

    var queries$2 = {
        parse: skrinkSerializer$3(
            /**
             * 
             * @param {string} argc 
             * @returns {any}
             */
            function (
                argc
            ) {
                var r;
                for (var
                    i = 0,
                    s = argc.replace(/^[#?]+/, "").split("&"),
                    l = s.length;
                    i < l;
                    i++
                ) {
                    var n = s[i];
                    var d = n.indexOf("=");
                    if (d === -1) {
                        continue;
                    }
                    var k = divideExpression$3(decodeURIComponent$2(n.slice(0, d)));
                    /** @type {any} */
                    var v = decodeURIComponent$2(n.slice(d + 1));
                    if (_isNullOrUndefined(r)) {
                        r = _isNumber(k[0]) ? [] : {};
                    }
                    if (v === "null") {
                        v = null;
                    } else if (v === "true") {
                        v = true;
                    } else if (v === "false") {
                        v = false;
                    } else if (pattern$2.DIGIT.test(v)) {
                        v = Number(v);
                    } else if (pattern$2.DATETIME.test(v)) {
                        v = new Date(v);
                    }
                    _set(r, k, v);
                }
                return r || {};
            }
        ),
        serialize: skrinkSerializer$3(
            /**
             * 
             * @param {any} argc 
             * @returns {string}
             */
            function serialize(
                argc
            ) {
                return (function serialize(prefix, argc) {
                    var r = [], k, n;
                    var a = _isArray(argc);
                    if (a || _isObject(argc)) {
                        for (var p in argc) {
                            if (a) {
                                k = prefix + "[" + p + "]";
                            } else if (prefix.length === 0 || prefix.slice(-1) === "]") {
                                k = prefix + p;
                            } else {
                                k = prefix + "." + p;
                            }
                            n = argc[p];
                            if (_isUndefined(n)) {
                                continue;
                            }
                            if (_isNull(n)) {
                                r.push(encodeURIComponent$2(k) + "=" + "null");
                            } else if (_isDate(n)) {
                                r.push(encodeURIComponent$2(k) + "=" + encodeURIComponent$2(n.toJSON()));
                            } else if (_isNumber(n) || _isString(n) || _isBoolean(n) || _isBigInt(n) || _isSymbol(n)) {
                                r.push(encodeURIComponent$2(k) + "=" + encodeURIComponent$2(n.toString()));
                            } else if (_isObject(n)) {
                                r = r.concat(serialize(k, n));
                            }
                        }
                    }
                    return r;
                }("", argc)).join("&");
            }
        ),
    };

    var _isFinite = skrinkSerializer$3(
        // eslint-disable-next-line es/no-number-isfinite
        Number.isFinite || function (
            /**
             * @type {number}
             */
            argc
        ) {
            return _isNumber(argc) && globalThis$3.isFinite(argc);
        }
    );

    var _isValid = skrinkSerializer$3(
        /**
         * 
         * Determines if the input parameter is valid.
         * 
         * @param {any} argc An object.
         * @returns {boolean}
         */
        function (
            argc
        ) {
            return _isNumber(argc) ? _isFinite(argc) : _isDate(argc) ? _isFinite(argc.getTime()) : !_isNullOrUndefined(argc);
        }
    );

    var setTimeout$4 = globalThis$3.setTimeout;

    var setImmediate$4 = globalThis$3.setImmediate || globalThis$3.requestAnimationFrame || function ( /** @type {any} */ argc) { return setTimeout$4(argc, 1000 / 60); };

    var _flat = skrinkSerializer$3(
        /**
         * 
         * Convert an array from an array-like.
         * 
         * @param {ArrayLike<T>} argc A array-like.
         * @param {number} [start] The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.
         * @param {number} [depth] Indicates whether to flatten the multidimensional array.
         * @param {boolean} [valid] Indicates whether to remove invalid items from the array.
         * @returns {FlatArray<NonNullable<T>[], 20>[]}
         * @template T
         */
        function (
            argc,
            start,
            depth,
            valid
        ) {
            var r = Array.prototype.slice.call(argc, start || 0);
            if (depth) {
                r = (function flat(argc, d) {
                    var r = [];
                    for (var
                        i = 0,
                        l = argc.length;
                        i < l;
                        i++
                    ) {
                        var n = argc[i];
                        if (d < depth && _isArray(n)) {
                            r = r.concat(flat(n, d + 1));
                        } else {
                            r.push(n);
                        }
                    }
                    return r;
                }(r, 0));
            }
            if (valid) {
                r = r.filter(_isValid);
            }
            return r;
        }
    );

    var zone$1 = (function () {
        /** @type {Array<readonly [boolean, Yarla.Application]>} */
        var apps = [];
        /** @type {Array<readonly [Yarla.NoReturnsFunc, any[]]>} */
        var jobs = [];
        /** @type {boolean} */
        var idle = true;
        /** @type {Yarla.Hook | null} */
        var currentTarget = null;
        /** @type {Yarla.Hook} */
        var hook = {
            useRef: skrinkSerializer$3(
                function () {
                    throw new Error(message$3.ONLY_USED_IN_COMPONENTS);
                }
            ),
            useMemo: skrinkSerializer$3(
                function () {
                    throw new Error(message$3.ONLY_USED_IN_COMPONENTS);
                }
            ),
            useState: skrinkSerializer$3(
                function () {
                    throw new Error(message$3.ONLY_USED_IN_COMPONENTS);
                }
            ),
            useTarget: skrinkSerializer$3(
                function () {
                    throw new Error(message$3.ONLY_USED_IN_COMPONENTS);
                }
            ),
            useEffect: skrinkSerializer$3(
                function () {
                    throw new Error(message$3.ONLY_USED_IN_COMPONENTS);
                }
            ),
        };
        return {
            get target() {
                return currentTarget || hook;
            },
            get currentTarget() {
                return currentTarget;
            },
            mount: skrinkSerializer$3(
                /**
                 * 
                 * @param {Yarla.Application} application 
                 * @param {boolean} [ignoreUpdate] 
                 * @returns {Yarla.Application}
                 */
                function (
                    application,
                    ignoreUpdate
                ) {
                    /**
                     * @type {[boolean, Yarla.Application]}
                     */
                    var r = [
                        !!ignoreUpdate,
                        {
                            forceUpdate: skrinkSerializer$3(
                                function () {
                                    return application.forceUpdate();
                                }
                            ),
                            unmount: skrinkSerializer$3(
                                function () {
                                    var loc = apps.indexOf(r);
                                    if (loc !== -1) {
                                        apps.splice(loc, 1);
                                    }
                                    return application.unmount();
                                }
                            ),
                        }
                    ];
                    apps.push(r);
                    return r[1];
                }
            ),
            scope: skrinkSerializer$3(
                /**
                 * 
                 * @param {Parameters<typeof import(".").default.scope>[0]} hook 
                 * @param {Parameters<typeof import(".").default.scope>[1]} processor 
                 * @param {any[]} argv
                 */
                function (
                    hook,
                    processor,
                    argv
                ) {
                    var previousTarget = currentTarget;
                    try {
                        return processor.apply(currentTarget = hook, argv);
                    } finally {
                        currentTarget = previousTarget;
                    }
                }
            ),
            nextTick: skrinkSerializer$3(
                /**
                 * 
                 * @param {Yarla.NoReturnsFunc} task 
                 * @returns {Yarla.Cancelable}
                 */
                function (
                    task
                ) {
                    /** @type {readonly [Yarla.NoReturnsFunc, any[]]} */
                    var r = [
                        task,
                        _flat(arguments, 1),
                    ];
                    jobs.push(r);
                    return {
                        cancel: skrinkSerializer$3(
                            function () {
                                var loc = jobs.indexOf(r);
                                if (loc !== -1) {
                                    jobs.splice(loc, 1);
                                }
                            }
                        ),
                    };
                }
            ),
            forceUpdate: skrinkSerializer$3(
                function () {
                    if (idle) {
                        idle = false;
                        setImmediate$4(function () {
                            try {
                                apps.slice(0).forEach(
                                    function (i) {
                                        i[0] || i[1].forceUpdate();
                                    }
                                );
                                jobs.splice(0).forEach(
                                    function (i) {
                                        i[0].apply(null, i[1]);
                                    }
                                );
                            } finally {
                                idle = true;
                            }
                        });
                    }
                }
            ),
        };
    }());

    var _get$1 = skrinkSerializer$3(
        /**
         * 
         * Returns the value of a specified property of an object.
         *  
         * @param {any} argc An object.
         * @param {Yarla.PropertyExpr} expr The property expression.
         * @param {T} [defaultValue] The default value when the value is null or undefined. 
         * @returns {T}
         * @template T
         */
        function (
            argc,
            expr,
            defaultValue
        ) {
            var t = argc;
            for (var
                i = 0,
                s = _isString(expr) ? divideExpression$3(expr) : expr,
                l = s.length;
                i < l;
                i++
            ) {
                if (_isNullOrUndefined(t)) {
                    t = void 0;
                    break;
                }
                t = t[s[i]];
            }
            if (_isNullOrUndefined(t) && arguments.length > 2) {
                t = defaultValue;
            }
            return t;
        }
    );

    function NOOP$3 () { /** DO NOTHING */ }

    /**
     * Adds one or more properties to an object, and/or modifies attributes of existing properties.
     * 
     * @param {T} argc Object on which to add or modify the properties. This can be a native JavaScript object or a DOM object.
     * @param {Yarla.Object<P, PropertyDescriptorMap>} properties JavaScript object that contains one or more descriptor objects. Each descriptor object describes a data property or an accessor property.
     * @returns {Yarla.NonAny<T> & Yarla.PropertyDescriptorMapReturns<P>}
     * @template T, P
     */
    function defineProperties$3 (
        argc,
        properties
    ) {
        return /** @type {any} */ (Object.defineProperties(argc, properties));
    }

    /**
     * 
     * Returns a normal property descriptor.
     * 
     * @param {T} argc The value of the property descriptor.
     * @param {boolean} [enumerable] Indicates whether the property is enumerable. 
     * @param {boolean} [readonly] Indicates whether the property is readonly. 
     * @returns {Yarla.NormalPropertyDescriptor<T>}
     * @template T
     */
    function generateNormalDescriptor$3 (
        argc,
        enumerable,
        readonly
    ) {
        return {
            configurable: true,
            enumerable: !!enumerable,
            writable: !readonly,
            value: argc,
        };
    }

    /**
     * 
     * Returns a method property descriptor.
     * 
     * @param {Yarla.Object<T, Yarla.BasicFunc>} argc A function. 
     * @param {boolean} [enumerable] Indicates whether the property is enumerable.
     * @returns {Yarla.NormalPropertyDescriptor<Yarla.Object<T, Yarla.BasicFunc>>}
     * @template T
     */
    function generateMethodDescriptor$3 (
        argc,
        enumerable
    ) {
        return generateNormalDescriptor$3(skrinkSerializer$3(argc), enumerable);
    }

    /**
     * 
     * @param {Yarla.BasicFunc} argc 
     * @param {Yarla.Proto<any>} constructor 
     * @returns {Yarla.BasicFunc}
     */
    function legalSerializer$3 (
        argc,
        constructor
    ) {
        return skrinkSerializer$3(
            /**
             * @this {any}
             */
            function () {
                if (this instanceof constructor) {
                    return argc.apply(this, arguments);
                }
                throw new TypeError(message$3.ILLEGAL_INVOCATION);
            }
        );
    }

    /**
     * 
     * @param {PropertyDescriptorMap} argc 
     * @param {Yarla.Proto<any>} constructor 
     * @returns {PropertyDescriptorMap}
     */
    function legalDescriptors$3 (
        argc,
        constructor
    ) {
        /** @type {PropertyDescriptorMap} */
        var descriptors = {};
        for (var i in argc) {
            /** @type {PropertyDescriptor} */
            var os = {};
            var sn = argc[i];
            var get = sn.get;
            var set = sn.set;
            var value = sn.value;
            var writable = sn.writable;
            var enumerable = sn.enumerable;
            var configurable = sn.configurable;
            if (typeof writable === "boolean") {
                os.writable = writable;
            }
            if (typeof enumerable === "boolean") {
                os.enumerable = enumerable;
            }
            if (typeof configurable === "boolean") {
                os.configurable = configurable;
            }
            if (typeof get === "function") {
                os.get = legalSerializer$3(get, constructor);
            }
            if (typeof set === "function") {
                os.set = legalSerializer$3(set, constructor);
            }
            if ("value" in sn) {
                os.value = typeof value === "function" ? legalSerializer$3(value, constructor) : value;
            }
            descriptors[i] = os;
        }
        return descriptors;
    }

    /**
     * Adds a property to an object, or modifies attributes of an existing property.
     * 
     * @param {T} argc Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object.
     * @param {Yarla.Object<N, PropertyKey>} property The property name.
     * @param {Yarla.Object<P, PropertyDescriptor>} descriptor Descriptor for the property. It can be for a data property or an accessor property.
     * @returns {Yarla.NonAny<T> & { readonly [K in N]: Yarla.PropertyDescriptorReturns<P>; }}
     * @template T, N, P
     */
    function defineProperty$3 (
        argc,
        property,
        descriptor
    ) {
        // @ts-ignore
        return Object.defineProperty(argc, property, descriptor);
    }

    /**
     * 
     * Instantiate the specified class, and that optionally contains specified properties.
     * 
     * @param {Yarla.Proto<Yarla.Object<T>>} argc Class to be instantiated.
     * @param {Yarla.Object<P, PropertyDescriptorMap>} [properties] JavaScript object that contains one or more property descriptors.
     * @returns {Yarla.NonAny<T> & Yarla.PropertyDescriptorMapReturns<P>}
     * @template T, P
     */
    function createInstance$3 (
        argc,
        properties
    ) {
        return Object.create(argc.prototype, properties || {});
    }

    /**
     * Sets the prototype of a specified object.
     * 
     * @param {any} argc The object to change its prototype.
     * @param {object | null} proto The value of the new prototype or null.
     * @returns {any}
     */
    function setPrototypeOf$3 (
        argc,
        proto
    ) {
        // @ts-ignore
        // eslint-disable-next-line es/no-object-setprototypeof
        if (Object.setPrototypeOf) {
            // @ts-ignore
            // eslint-disable-next-line es/no-object-setprototypeof
            return Object.setPrototypeOf(argc, proto);
        }
        return defineProperty$3(argc, "__proto__", generateNormalDescriptor$3(proto));
    }

    /**
     * 
     * Returns a pseudorandom string.
     * 
     * @param {number} length The length of string.
     * @param {number} radix The system of numeration.
     * @returns {string}
     */
    function pseudoRandomString$3 (
        length,
        radix
    ) {
        return Math.floor((1 + Math.random()) * Math.pow(radix, length)).toString(radix).slice(1);
    }

    var Symbol$3 = (function (Symbol, exports) {
        return defineProperties$3(Symbol, {
            for: generateNormalDescriptor$3(
                Symbol.for || skrinkSerializer$3(
                    /**
                     * 
                     * @param {string} key 
                     * @returns {symbol}
                     */
                    function (
                        key
                    ) {
                        return exports[key] = exports[key] || Symbol(key);
                    }
                )
            ),
        });
    }(globalThis$3.Symbol || skrinkSerializer$3(
        /**
         * 
         * @param {string | number} [description] 
         * @returns {any}
         */
        function (
            description
        ) {
            return "[[" + description + ":" + pseudoRandomString$3(6, 36) + "]]";
        }
    ), {}));

    /**
     * 
     * Create a class.
     * 
     * @param {Yarla.Object<T, Yarla.BasicFunc>} constructor The class constructor.
     * @param {Yarla.Object<P, PropertyDescriptorMap>} properties JavaScript object that contains one or more descriptor objects. Each descriptor object describes a data property or an accessor property.
     * @param {Yarla.Object<S, Yarla.Proto>} superClass The super class of the class.
     * @param {string} [name] The class name.
     * @returns {Yarla.ClassFunc<Yarla.Parameters<T>, Yarla.InstanceType<T> & Yarla.PropertyDescriptorMapReturns<P> & Yarla.InstanceType<S>>}
     * @template T, P, S
     */
    function generateClass$3 (
        constructor,
        properties,
        superClass,
        name
    ) {
        /** @type {Yarla.Proto<any>} */
        var WrapConstructor = skrinkSerializer$3(
            /**
             * @this {any}
             */
            function () {
                if (this instanceof WrapConstructor) {
                    return constructor.apply(defineProperty$3(this, Symbol$3.for("Yarla.Super.constructor"), generateNormalDescriptor$3(WrapConstructor)), arguments);
                }
                throw new Error(message$3.FAILED_TO_CONSTRUCT_INSPANCE);
            }
        );
        // @ts-ignore
        WrapConstructor.prototype = defineProperties$3(createInstance$3(superClass, {
            constructor: generateNormalDescriptor$3(WrapConstructor),
        }), legalDescriptors$3(properties, WrapConstructor));
        if (name) {
            defineProperty$3(WrapConstructor, "name", generateNormalDescriptor$3(name, false, true));
            if (Symbol$3.toStringTag) {
                defineProperty$3(WrapConstructor.prototype, Symbol$3.toStringTag, generateNormalDescriptor$3(name, false, true));
            }
        }
        // @ts-ignore
        return setPrototypeOf$3(WrapConstructor, superClass);
    }

    var _isFunction = skrinkSerializer$3(
        /**
         * 
         * Determines if the input parameter is a function.
         * 
         * @param {any} argc Any object.
         * @returns {argc is Kylin.BasicFunc}
         */
        function (
            argc
        ) {
            return typeof argc === "function";
        }
    );

    /**
     * Returns the prototype of an object.
     * 
     * @param {any} argc The object that references the prototype.
     * @returns {any}
     */
    function getPrototypeOf$3 (
        argc
    ) {
        // @ts-ignore
        // eslint-disable-next-line es/no-object-setprototypeof
        if (Object.setPrototypeOf) {
            // @ts-ignore
            return Object.getPrototypeOf(argc);
        }
        return argc.__proto__ || Object.getPrototypeOf(argc);
    }

    /**
     * Determines whether an object has a property with the specified name.
     * 
     * @param {any} argc An object.
     * @param {PropertyKey} property A property name.
     * @returns {boolean}
     */
    function hasOwnProperty$3 (
        argc,
        property
    ) {
        return Object.prototype.hasOwnProperty.call(argc, property);
    }

    var _has = skrinkSerializer$3(
        /**
         * 
         * Determines whether an object contains the specified property.
         * 
         * @param {any} argc An object.
         * @param {Yarla.PropertyExpr} expr The property expression.
         * @returns {boolean}
         */
        function (
            argc,
            expr
        ) {
            var t = argc;
            for (var
                i = 0,
                s = _isString(expr) ? divideExpression$3(expr) : expr,
                l = s.length;
                i < l;
                i++
            ) {
                if (!_isReference(t) ||
                    !hasOwnProperty$3(t, s[i])) {
                    return false;
                }
                t = t[s[i]];
            }
            return true;
        }
    );

    var WeakMap$3 = (function (WeakMap) {
        return WeakMap = WeakMap || generateClass$3(
            /**
             * 
             * @this {WeakMap}
             * @param {ReadonlyArray<[object, any]>} [entries]
             */
            function (entries) {
                defineProperty$3(this, "k", generateNormalDescriptor$3(Symbol$3("WeakMap")));
                if (entries) {
                    for (var
                        i = 0,
                        l = entries.length;
                        i < l;
                        i++
                    ) {
                        this.set(entries[i][0], entries[i][1]);
                    }
                }
                return this;
            },
            {
                delete: generateMethodDescriptor$3(
                    /**
                     *
                     * @this {any}
                     * @param {object} key
                     * @returns {boolean}
                     */
                    function (key) {
                        return hasOwnProperty$3(key, this.k) ? delete key[this.k] : false;
                    }
                ),
                has: generateMethodDescriptor$3(
                    /**
                     *
                     * @this {any}
                     * @param {object} key
                     * @returns {boolean}
                     */
                    function (key) {
                        return hasOwnProperty$3(key, this.k);
                    }
                ),
                get: generateMethodDescriptor$3(
                    /**
                     *
                     * @this {any}
                     * @param {object} key
                     * @returns {any}
                     */
                    function (key) {
                        return hasOwnProperty$3(key, this.k) ? key[this.k] : void 0;
                    }
                ),
                set: generateMethodDescriptor$3(
                    /**
                     *
                     * @this {any}
                     * @param {object} key
                     * @param {any} value
                     * @returns {WeakMap}
                     */
                    function (key, value) {
                        return defineProperty$3(key, this.k, generateNormalDescriptor$3(value)), this;
                    }
                ),
            },
            NOOP$3
        );
    }(globalThis$3.WeakMap));

    var Reflect$3 = (function () {
        /**
         *
         * @param {any} target
         * @param {Yarla.PropertyExpr} expr
         * @returns {boolean}
         */
        function _has$1(
            target,
            expr
        ) {
            return maps.has(target) ? _has(maps.get(target), expr) : false;
        }
        /**
         *
         * @param {any} argc
         * @param {Yarla.PropertyExpr} expr
         * @returns {any}
         */
        function _get(
            argc,
            expr
        ) {
            if (maps.has(argc)) {
                return _get$1(maps.get(argc), expr);
            }
            throw new Error(message$3.ILLEGAL_INVOCATION);
        }
        /**
         *
         * @param {any} target
         * @param {Yarla.PropertyExpr} expr
         * @param {T} value
         * @returns {T}
         * @template T
         */
        function _set$1(
            target,
            expr,
            value
        ) {
            var item;
            if (maps.has(target)) {
                item = maps.get(target);
            } else {
                maps.set(target, item = {});
            }
            return _set(item, expr, value);
        }
        /**
         *
         * @param {any} target
         * @returns {boolean}
         */
        function _delete(
            target
        ) {
            return maps.delete(target);
        }
        /**
         * 
         * @param {any} target
         * @param {PropertyKey} [propertyKey]
         * @returns {any}
         */
        function _getInternal(
            target,
            propertyKey
        ) {
            return _get(target, expr.INTERNAL.concat(_isNullOrUndefined(propertyKey) ? [] : [propertyKey]));
        }
        /**
         * 
         * @param {any} target
         * @param {PropertyKey} [propertyKey]
         * @returns {boolean}
         */
        function _hasInternal(
            target,
            propertyKey
        ) {
            return _has$1(target, expr.INTERNAL.concat(_isNullOrUndefined(propertyKey) ? [] : [propertyKey]));
        }
        /**
         *
         * @param {T} target
         * @param {any} value
         * @param {PropertyKey} [propertyKey]
         * @returns {T}
         * @template T
         */
        function _defineInternal(
            target,
            value,
            propertyKey
        ) {
            return _set$1(target, expr.INTERNAL.concat(_isNullOrUndefined(propertyKey) ? [] : [propertyKey]), value), target;
        }
        /**
         * 
         * @param {any} target
         * @param {PropertyKey} [metadataKey]
         * @returns {any}
         */
        function _getMetadata(
            target,
            metadataKey
        ) {
            return _get(target, expr.METADATA.concat(_isNullOrUndefined(metadataKey) ? [] : [metadataKey]));
        }
        /**
         * 
         * @param {any} target
         * @param {PropertyKey} [metadataKey]
         * @returns {boolean}
         */
        function _hasMetadata(
            target,
            metadataKey
        ) {
            return _has$1(target, expr.METADATA.concat(_isNullOrUndefined(metadataKey) ? [] : [metadataKey]));
        }
        /**
         *
         * @param {T} target
         * @param {any} value
         * @param {PropertyKey} [metadataKey]
         * @returns {T}
         * @template T
         */
        function _defineMetadata(
            target,
            value,
            metadataKey
        ) {
            return _set$1(target, expr.METADATA.concat(_isNullOrUndefined(metadataKey) ? [] : [metadataKey]), value), target;
        }
        /**
         *
         * @param {Yarla.Object<T>} argc
         * @param {Yarla.PropertyExpr} expr
         * @param {(this: Yarla.Object<T>) => R} initialize
         * @returns {R}
         * @template T, R
         */
        function _once(
            argc,
            expr,
            initialize
        ) {
            var item;
            if (maps.has(argc)) {
                item = maps.get(argc);
            } else {
                maps.set(argc, item = {});
            }
            if (_has(item, expr)) {
                return _get$1(item, expr);
            }
            return _set(item, expr, initialize.call(argc));
        }
        /**
         * 
         * @param {Yarla.Proto} constructor 
         * @param {any} internalValue 
         * @returns {any}
         */
        function _construct(
            constructor,
            internalValue
        ) {
            return _defineInternal(createInstance$3(constructor), internalValue);
        }
        /**
         * 
         * @param {Yarla.Object<T, ArrayLike<number>>} target 
         * @param {number} [bit] 
         * @returns {T}
         * @template T
         */
        function _initTyped(
            target,
            bit
        ) {
            for (var
                i = 0,
                l = target.length;
                i < l;
                i++
            ) {
                defineProperty$3(target, i, function (i) {
                    return {
                        enumerable: true,
                        get: skrinkSerializer$3(
                            /**
                             * @this {any}
                             */
                            function () {
                                return _getInternal(this)[i] & (bit || 0xFF);
                            }
                        ),
                        set: skrinkSerializer$3(
                            /**
                             * @this {any}
                             */
                            function (v) {
                                return _getInternal(this)[i] = (bit || 0xFF) & v;
                            }
                        ),
                    };
                }(i));
            }
            // @ts-ignore
            return Object.seal(target);
        }
        /**
         * 
         * @param {any} target 
         * @returns {any}
         */
        function _callSuper(
            target
        ) {
            return (function (constructor) {
                return skrinkSerializer$3(
                    /**
                     * @this {any}
                     */
                    function () {
                        return Reflect ? Reflect.construct(constructor, arguments, getPrototypeOf$3(this).constructor) : constructor.apply(this, arguments);
                    }
                );
            }(getPrototypeOf$3(_get$1(target, [Symbol$3.for("Yarla.Super.constructor")])))).apply(target, _flat(arguments, 1));
        }
        var maps = new WeakMap$3();
        var expr = {
            /** @type {ReadonlyArray<PropertyKey>} */
            IE: [Symbol$3.for("Yarla.IE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            IP: [Symbol$3.for("Yarla.IP")],
            /** @type {ReadonlyArray<PropertyKey>} */
            UA: [Symbol$3.for("Yarla.UA")],
            /** @type {ReadonlyArray<PropertyKey>} */
            BODY: [Symbol$3.for("Yarla.BODY")],
            /** @type {ReadonlyArray<PropertyKey>} */
            HOST: [Symbol$3.for("Yarla.HOST")],
            /** @type {ReadonlyArray<PropertyKey>} */
            QUEUE: [Symbol$3.for("Yarla.QUEUE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            RANGE: [Symbol$3.for("Yarla.RANGE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            STATE: [Symbol$3.for("Yarla.STATE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            THROW: [Symbol$3.for("Yarla.THROW")],
            /** @type {ReadonlyArray<PropertyKey>} */
            VALUE: [Symbol$3.for("Yarla.VALUE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            LENGTH: [Symbol$3.for("Yarla.LENGTH")],
            /** @type {ReadonlyArray<PropertyKey>} */
            METHOD: [Symbol$3.for("Yarla.METHOD")],
            /** @type {ReadonlyArray<PropertyKey>} */
            ORIGIN: [Symbol$3.for("Yarla.ORIGIN")],
            /** @type {ReadonlyArray<PropertyKey>} */
            SEARCH: [Symbol$3.for("Yarla.SEARCH")],
            /** @type {ReadonlyArray<PropertyKey>} */
            COOKIES: [Symbol$3.for("Yarla.COOKIES")],
            /** @type {ReadonlyArray<PropertyKey>} */
            HEADERS: [Symbol$3.for("Yarla.HEADERS")],
            /** @type {ReadonlyArray<PropertyKey>} */
            REFERER: [Symbol$3.for("Yarla.REFERER")],
            /** @type {ReadonlyArray<PropertyKey>} */
            VERSION: [Symbol$3.for("Yarla.VERSION")],
            /** @type {ReadonlyArray<PropertyKey>} */
            BOUNDARY: [Symbol$3.for("Yarla.BOUNDARY")],
            /** @type {ReadonlyArray<PropertyKey>} */
            METADATA: [Symbol$3.for("Yarla.METADATA")],
            /** @type {ReadonlyArray<PropertyKey>} */
            MIMETYPE: [Symbol$3.for("Yarla.MIMETYPE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            PATHNAME: [Symbol$3.for("Yarla.PATHNAME")],
            /** @type {ReadonlyArray<PropertyKey>} */
            PROTOCOL: [Symbol$3.for("Yarla.PROTOCOL")],
            /** @type {ReadonlyArray<PropertyKey>} */
            ENCODING: [Symbol$3.for("Yarla.ENCODING")],
            /** @type {ReadonlyArray<PropertyKey>} */
            LANGUAGE: [Symbol$3.for("Yarla.LANGUAGE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            INTERNAL: [Symbol$3.for("Yarla.INTERNAL")],
            /** @type {ReadonlyArray<PropertyKey>} */
            INSTANCE: [Symbol$3.for("Yarla.INSTANCE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            RENDERER: [Symbol$3.for("Yarla.RENDERER")],
            /** @type {ReadonlyArray<PropertyKey>} */
            VALIDATE: [Symbol$3.for("Yarla.VALIDATE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            CLASS_MANAGER: [Symbol$3.for("Yarla.CLASS.MANAGER")],
            /** @type {ReadonlyArray<PropertyKey>} */
            EVENT_CAPTURE: [Symbol$3.for("Yarla.EVENT.CAPTURE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            EVENT_GENERAL: [Symbol$3.for("Yarla.EVENT.GENERAL")],
            /** @type {ReadonlyArray<PropertyKey>} */
            EVENT_OBSERVE: [Symbol$3.for("Yarla.EVENT.OBSERVE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            STOP_AFTERWARD: [Symbol$3.for("Yarla.STOP.AFTERWARD")],
            /** @type {ReadonlyArray<PropertyKey>} */
            STOP_IMMEDIATE: [Symbol$3.for("Yarla.STOP.IMMEDIATE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            TICK_PREVENTED: [Symbol$3.for("Yarla.TICK.PREVENTED")],
        };
        var Reflect = globalThis$3.Reflect;
        return {
            get expr() {
                return expr;
            },
            has: skrinkSerializer$3(_has$1),
            get: skrinkSerializer$3(_get),
            set: skrinkSerializer$3(_set$1),
            delete: skrinkSerializer$3(_delete),
            getInternal: skrinkSerializer$3(_getInternal),
            hasInternal: skrinkSerializer$3(_hasInternal),
            defineInternal: skrinkSerializer$3(_defineInternal),
            getMetadata: skrinkSerializer$3(_getMetadata),
            hasMetadata: skrinkSerializer$3(_hasMetadata),
            defineMetadata: skrinkSerializer$3(_defineMetadata),
            once: skrinkSerializer$3(_once),
            construct: skrinkSerializer$3(_construct),
            initTyped: skrinkSerializer$3(_initTyped),
            callSuper: skrinkSerializer$3(_callSuper),
            BASE: skrinkSerializer$3(
                function () {
                    throw new Error(message$3.ILLEGAL_CONSTRUCTOR);
                }
            ),
        };
    }());

    var Promise$4 = (function (Promise) {
        return Promise = Promise || defineProperties$3(generateClass$3(
            /**
             * 
             * @this {any}
             * @param {Yarla.BasicFunc} processor 
             */
            function (processor) {
                Reflect$3.set(this, Reflect$3.expr.STATE, definition$3.PENDING);
                Reflect$3.set(this, Reflect$3.expr.VALUE, void 0);
                Reflect$3.set(this, Reflect$3.expr.THROW, true);
                Reflect$3.set(this, Reflect$3.expr.QUEUE, []);
                try {
                    processor(
                        fixed(this, definition$3.RESOLVED),
                        fixed(this, definition$3.REJECTED));
                } catch (error) {
                    solve(this, definition$3.REJECTED, error);
                }
                return this;
            },
            {
                finally: generateMethodDescriptor$3(
                    /**
                     * 
                     * @this {PromiseLike<any>}
                     * @param {Yarla.BasicFunc} onfinally 
                     */
                    function (onfinally) {
                        return this.then(
                            function (value) { return Promise.resolve(onfinally()).then(function () { return value; }); },
                            function (error) { return Promise.resolve(onfinally()).then(function () { throw error; }); });
                    }
                ),
                catch: generateMethodDescriptor$3(
                    /**
                     * 
                     * @this {PromiseLike<any>}
                     * @param {Yarla.BasicFunc} onrejected 
                     */
                    function (onrejected) {
                        return this.then(null, onrejected);
                    }
                ),
                then: generateMethodDescriptor$3(
                    /**
                     * 
                     * @this {any}
                     * @param {Yarla.BasicFunc} onresolved 
                     * @param {Yarla.BasicFunc} onrejected 
                     */
                    function (onresolved, onrejected) {
                        var item = new Promise(NOOP$3);
                        var done = onresolved || function (value) { return value; };
                        var fail = onrejected || function (error) { throw error; };
                        Reflect$3.set(this, Reflect$3.expr.THROW, false);
                        switch (Reflect$3.get(this, Reflect$3.expr.STATE)) {
                            case definition$3.PENDING:
                                Reflect$3.get(this, Reflect$3.expr.QUEUE).push(item, done, fail);
                                break;
                            case definition$3.RESOLVED:
                                track(item, Reflect$3.get(this, Reflect$3.expr.VALUE), done);
                                break;
                            case definition$3.REJECTED:
                                track(item, Reflect$3.get(this, Reflect$3.expr.VALUE), fail);
                                break;
                        }
                        return item;
                    }
                ),
            },
            NOOP$3
        ), {
            resolve: generateMethodDescriptor$3(
                /**
                 * 
                 * @param {any} value 
                 */
                function (value) {
                    return new Promise(function (resolve) { resolve(value); });
                }
            ),
            reject: generateMethodDescriptor$3(
                /**
                 * 
                 * @param {any} error 
                 */
                function (error) {
                    return new Promise(function (_, reject) { reject(error); });
                }
            ),
            race: generateMethodDescriptor$3(
                /**
                 * 
                 * @param {ReadonlyArray<any>} tasks 
                 */
                function (tasks) {
                    return new Promise(function (resolve, reject) {
                        if (tasks.length > 0) {
                            tasks.forEach(function (value) {
                                Promise.resolve(value).then(resolve, reject);
                            });
                        } else {
                            resolve(void 0);
                        }
                    });
                }
            ),
            all: generateMethodDescriptor$3(
                /**
                 * 
                 * @param {ReadonlyArray<any>} tasks 
                 */
                function (tasks) {
                    return new Promise(function (resolve, reject) {
                        if (tasks.length > 0) {
                            var n = 0;
                            var l = tasks.length;
                            var r = new Array(l);
                            tasks.forEach(function (value, i) {
                                Promise.resolve(value).then(function (value) {
                                    r[i] = value;
                                    if (++n === l) {
                                        resolve(r);
                                    }
                                }, reject);
                            });
                        } else {
                            resolve([]);
                        }
                    });
                }
            ),
        });
        /**
         *
         * @param {PromiseLike<any>} target
         * @param {"pending" | "rejected" | "fulfilled"} state
         */
        function fixed(target, state) {
            return skrinkSerializer$3(function (value) {
                solve(target, state, value);
            });
        }
        /**
         *
         * @param {PromiseLike<any>} target
         * @param {"pending" | "rejected" | "fulfilled"} state
         * @param {any} value
         */
        function solve(target, state, value) {
            if (Reflect$3.get(target, Reflect$3.expr.STATE) === definition$3.PENDING) {
                if (target === value) {
                    state = definition$3.REJECTED;
                    value = new Error(message$3.PROMISE_RESOLVED_WITH_ITSELF);
                } else if (_isInstanceOf(value, Promise)) {
                    if (Reflect$3.get(value, Reflect$3.expr.STATE) === definition$3.PENDING) {
                        return void value.then(
                            fixed(target, definition$3.RESOLVED),
                            fixed(target, definition$3.REJECTED)
                        );
                    }
                    Reflect$3.set(value, Reflect$3.expr.THROW, false);
                    state = Reflect$3.get(value, Reflect$3.expr.STATE);
                    value = Reflect$3.get(value, Reflect$3.expr.VALUE);
                } else if (_isObject(value) && _isFunction(value.then)) {
                    if (!(Reflect$3.has(value, Reflect$3.expr.STATE)) ||
                        !(Reflect$3.has(value, Reflect$3.expr.VALUE)) ||
                        !(Reflect$3.get(value, Reflect$3.expr.STATE) !== definition$3.PENDING)) {
                        return void value.then(
                            fixed(target, definition$3.RESOLVED),
                            fixed(target, definition$3.REJECTED)
                        );
                    }
                    state = Reflect$3.get(value, Reflect$3.expr.STATE);
                    value = Reflect$3.get(value, Reflect$3.expr.VALUE);
                }
                Reflect$3.set(target, Reflect$3.expr.STATE, state);
                Reflect$3.set(target, Reflect$3.expr.VALUE, value);
                var m = Reflect$3.get(target, Reflect$3.expr.QUEUE);
                var l = m.length;
                while (m.length > 0) {
                    var item = m.shift();
                    var done = m.shift();
                    var fail = m.shift();
                    switch (state) {
                        case definition$3.RESOLVED:
                            track(item, value, done);
                            break;
                        case definition$3.REJECTED:
                            track(item, value, fail);
                            break;
                    }
                }
                if (l === 0 && state === definition$3.REJECTED) {
                    setImmediate$4(function () {
                        if (Reflect$3.get(target, Reflect$3.expr.THROW)) {
                            throw Reflect$3.get(target, Reflect$3.expr.VALUE);
                        }
                    });
                }
            }
        }
        /**
         *
         * @param {PromiseLike<any>} target
         * @param {any} value
         * @param {Yarla.BasicFunc} apply
         */
        function track(target, value, apply) {
            try {
                solve(target, definition$3.RESOLVED, apply.call(null, value));
            } catch (error) {
                solve(target, definition$3.REJECTED, error);
            }
        }
    }(globalThis$3.Promise));

    var formats = {
        json: skrinkSerializer$3(
            /**
             * 
             * @param {any} argc 
             * @param {boolean} [pretty] 
             * @returns {string | null | undefined}
             */
            function (
                argc,
                pretty
            ) {
                return _isNullOrUndefined(argc) ? argc : JSON.stringify(argc, null, pretty ? 4 : 0);
            }
        ),
        attr: skrinkSerializer$3(
            /**
             * 
             * @param {any} argc 
             * @param {Yarla.PropertyExpr} [expr] 
             * @returns {string | null | undefined}
             */
            function (
                argc,
                expr
            ) {
                if (_isInstanceOf(argc, Promise$4)) {
                    if (Reflect$3.has(argc, Reflect$3.expr.STATE) &&
                        Reflect$3.has(argc, Reflect$3.expr.VALUE)) {
                        switch (Reflect$3.get(argc, Reflect$3.expr.STATE)) {
                            case definition$3.RESOLVED:
                                return _get$1(Reflect$3.get(argc, Reflect$3.expr.VALUE), expr || []);
                            case definition$3.REJECTED:
                                return void 0;
                        }
                    }
                    return void argc.then(
                        function (value) {
                            Reflect$3.set(argc, Reflect$3.expr.STATE, definition$3.RESOLVED);
                            Reflect$3.set(argc, Reflect$3.expr.VALUE, value);
                            zone$1.forceUpdate();
                        },
                        function (error) {
                            Reflect$3.set(argc, Reflect$3.expr.STATE, definition$3.REJECTED);
                            Reflect$3.set(argc, Reflect$3.expr.VALUE, error);
                            zone$1.forceUpdate();
                            throw error;
                        }
                    );
                }
                return _get$1(argc, expr || []);
            }
        ),
        date: skrinkSerializer$3(
            /**
             * 
             * @param {Date | number | string} argc 
             * @param {string} [pattern] 
             * @returns {string | null | undefined}
             */
            function (
                argc,
                pattern
            ) {
                return _isNullOrUndefined(argc) ? argc : (function (argc, pattern) {
                    return _isValid(argc) ? pattern.replace(/(?:Y+|M+|D+|H+|m+|s+)/g, function (i) {
                        var v = 0;
                        switch (i.charAt(0)) {
                            case "Y":
                                v = argc.getFullYear();
                                break;
                            case "M":
                                v = argc.getMonth() + 1;
                                break;
                            case "D":
                                v = argc.getDate();
                                break;
                            case "H":
                                v = argc.getHours();
                                break;
                            case "m":
                                v = argc.getMinutes();
                                break;
                            case "s":
                                v = argc.getSeconds();
                                break;
                        }
                        return String(i.length > 1 && v < 10 ? "0" + v : v);
                    }) : argc.toString();
                }(_isDate(argc) ? argc : new Date(argc), pattern || "YYYY-MM-DD HH:mm:ss"));
            }
        ),
        digit: skrinkSerializer$3(
            /**
             * 
             * @param {number} argc 
             * @param {number} [digit] 
             * @returns {string | null | undefined}
             */
            function (
                argc,
                digit
            ) {
                return _isNullOrUndefined(argc) ? argc : Number(argc).toFixed(digit || 0).replace(Number(digit) > 0 ? /(\d)(?=(?:\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g, "$1,");
            }
        ),
        lower: skrinkSerializer$3(
            /**
             * 
             * @param {string} argc 
             * @returns {string | null | undefined}
             */
            function (
                argc
            ) {
                return _isNullOrUndefined(argc) ? argc : String(argc).toLowerCase();
            }
        ),
        upper: skrinkSerializer$3(
            /**
             * 
             * @param {string} argc 
             * @returns {string | null | undefined}
             */
            function (
                argc
            ) {
                return _isNullOrUndefined(argc) ? argc : String(argc).toUpperCase();
            }
        ),
    };

    /**
     * 
     * Compare strings ignoring case.
     * 
     * @param {string} arg1 One string.
     * @param {string} arg2 Two string.
     * @returns {boolean}
     */
    function compareIgnoreCase$2 (
        arg1,
        arg2
    ) {
        return arg1.length === arg2.length && arg1.toLowerCase() === arg2.toLowerCase();
    }

    var _isIterable = skrinkSerializer$3(
        /**
         * 
         * @param {any} argc 
         * @returns {argc is Iterable<any>}
         */
        function (
            argc
        ) {
            return _isSymbol(Symbol$3.iterator) && _isFunction(_get$1(argc, [Symbol$3.iterator]));
        }
    );

    var _entries = skrinkSerializer$3(
        /**
         * 
         * Returns an array of key/value of the enumerable properties of an object.
         * 
         * @param {any} argc Object that contains the properties and methods.
         * @param {boolean} [inherit] Indicates whether to return the key/values of the inherited properties and methods.
         * @returns {ReadonlyArray<readonly [string, any]>}
         */
        function (
            argc,
            inherit
        ) {
            var r = [], n;
            if (_isIterable(argc)) {
                for (var
                    i = 0,
                    // eslint-disable-next-line es/no-array-from
                    s = Array.from(argc),
                    l = s.length;
                    i < l;
                    i++
                ) {
                    n = s[i];
                    if (_isArray(n)) {
                        r.push(n);
                    }
                }
            } else if (_isObject(argc) && _isFunction(argc.forEach)) {
                argc.forEach(function (v, k) {
                    r.push([k, v]);
                });
            } else {
                for (n in argc) {
                    if (inherit || hasOwnProperty$3(argc, n)) {
                        r.push([n, argc[n]]);
                    }
                }
            }
            // @ts-ignore
            return r;
        }
    );

    var _values = skrinkSerializer$3(
        /**
         * 
         * Returns an array of values of the enumerable properties of an object.
         * 
         * @param {any} argc Object that contains the properties and methods.
         * @param {boolean} [inherit] Indicates whether to return the values of the inherited properties and methods.
         * @returns {ReadonlyArray<any>}
         */
        function (
            argc,
            inherit
        ) {
            var r = [];
            for (var n in argc) {
                if (inherit || hasOwnProperty$3(argc, n)) {
                    r.push(argc[n]);
                }
            }
            return r;
        }
    );

    var _keys = skrinkSerializer$3(
        /**
         * 
         * Returns the names of the enumerable string properties and methods of an object.
         * 
         * @param {any} argc Object that contains the properties and methods.
         * @param {boolean} [inherit] Indicates whether to return the names of the inherited properties and methods.
         * @returns {ReadonlyArray<string>}
         */
        function (
            argc,
            inherit
        ) {
            var r = [];
            for (var n in argc) {
                if (inherit || hasOwnProperty$3(argc, n)) {
                    r.push(n);
                }
            }
            return r;
        }
    );

    var KVPair$2 = generateClass$3(
        /**
         * 
         * @this {Yarla.KVPair}
         * @param {Readonly<Yarla.AnyObject<T>> | boolean} [source] 
         * @param {boolean} [ignoreCase] 
         * @template T
         */
        function (
            source,
            ignoreCase
        ) {
            Reflect$3.defineInternal(this, {}, "source");
            if (_isObject(source)) {
                Reflect$3.defineInternal(this, !!ignoreCase, "ignoreCase");
                for (var
                    i = 0,
                    s = _entries(source),
                    l = s.length;
                    i < l;
                    i++
                ) {
                    this.set(s[i][0], s[i][1]);
                }
            } else {
                Reflect$3.defineInternal(this, !!source, "ignoreCase");
            }
        },
        {
            clear: generateMethodDescriptor$3(
                /**
                 * 
                 * @this {Yarla.KVPair}
                 */
                function () {
                    Reflect$3.getInternal(this).source = {};
                }
            ),
            delete: generateMethodDescriptor$3(
                /**
                 * 
                 * @this {Yarla.KVPair}
                 * @param {string} key 
                 */
                function (
                    key
                ) {
                    /**
                     * @type {{ readonly ignoreCase: boolean; readonly source: Yarla.AnyObject; }}
                     */
                    var own = Reflect$3.getInternal(this);
                    if (hasOwnProperty$3(own.source, key)) {
                        return delete own.source[key];
                    }
                    if (own.ignoreCase) {
                        for (var name in own.source) {
                            if (compareIgnoreCase$2(name, key)) {
                                return delete own.source[name];
                            }
                        }
                    }
                    return false;
                }
            ),
            get: generateMethodDescriptor$3(
                /**
                 * 
                 * @this {Yarla.KVPair}
                 * @param {string} key 
                 */
                function (
                    key
                ) {
                    /**
                     * @type {{ readonly ignoreCase: boolean; readonly source: Yarla.AnyObject; }}
                     */
                    var own = Reflect$3.getInternal(this);
                    if (hasOwnProperty$3(own.source, key)) {
                        return own.source[key];
                    }
                    if (own.ignoreCase) {
                        for (var name in own.source) {
                            if (compareIgnoreCase$2(name, key)) {
                                return own.source[name];
                            }
                        }
                    }
                }
            ),
            set: generateMethodDescriptor$3(
                /**
                 * 
                 * @this {Yarla.KVPair}
                 * @param {string} key 
                 * @param {any} value 
                 */
                function (
                    key,
                    value
                ) {
                    /**
                     * @type {{ readonly ignoreCase: boolean; readonly source: Yarla.AnyObject; }}
                     */
                    var own = Reflect$3.getInternal(this);
                    if (hasOwnProperty$3(own.source, key)) {
                        return own.source[key] = value, this;
                    }
                    if (own.ignoreCase) {
                        for (var name in own.source) {
                            if (compareIgnoreCase$2(name, key)) {
                                return own.source[name] = value, this;
                            }
                        }
                    }
                    return own.source[key] = value, this;
                }
            ),
            has: generateMethodDescriptor$3(
                /**
                 * 
                 * @this {Yarla.KVPair}
                 * @param {string} key 
                 */
                function (
                    key
                ) {
                    /**
                     * @type {{ readonly ignoreCase: boolean; readonly source: Yarla.AnyObject; }}
                     */
                    var own = Reflect$3.getInternal(this);
                    if (hasOwnProperty$3(own.source, key)) {
                        return true;
                    }
                    if (own.ignoreCase) {
                        for (var name in own.source) {
                            if (compareIgnoreCase$2(name, key)) {
                                return true;
                            }
                        }
                    }
                    return false;
                }
            ),
            keys: generateMethodDescriptor$3(
                /**
                 * @this {Yarla.KVPair}
                 */
                function () {
                    return _keys(Reflect$3.getInternal(this).source);
                }
            ),
            values: generateMethodDescriptor$3(
                /**
                 * @this {Yarla.KVPair}
                 */
                function () {
                    return _values(Reflect$3.getInternal(this).source);
                }
            ),
            entries: generateMethodDescriptor$3(
                /**
                 * @this {Yarla.KVPair}
                 */
                function () {
                    return _entries(Reflect$3.getInternal(this).source);
                }
            ),
            forEach: generateMethodDescriptor$3(
                /**
                 * @this {Yarla.KVPair}
                 * @param {(value: any, key: string) => void} callback 
                 * @param {any} thisArg 
                 */
                function (
                    callback,
                    thisArg
                ) {
                    /**
                     * @type {{ readonly ignoreCase: boolean; readonly source: Yarla.AnyObject; }}
                     */
                    var own = Reflect$3.getInternal(this);
                    for (var name in own.source) {
                        callback.call(thisArg || this, own.source[name], name);
                    }
                }
            ),
            toJSON: generateMethodDescriptor$3(
                /**
                 * @this {Yarla.KVPair}
                 */
                function () {
                    return Reflect$3.getInternal(this).source;
                }
            ),
        },
        NOOP$3,
        "KVPair"
    );

    /**
     * 
     * Returns a getter property descriptor.
     * 
     * @param {() => T} argc The getter of the property descriptor.
     * @param {boolean} [enumerable] Indicates whether the property is enumerable.
     * @returns {Yarla.GetterPropertyDescriptor<T>}
     * @template T
     */
    function generateGetterDescriptor$3 (
        argc,
        enumerable
    ) {
        return {
            configurable: true,
            enumerable: !!enumerable,
            get: skrinkSerializer$3(argc),
        };
    }

    /**
     * 
     * Decodes a bytes to hex string.
     * 
     * @param {ArrayLike<number>} argc A bytes.
     * @returns {string}
     */
    function decodeHEX$2 (
        argc
    ) {
        var r = [];
        for (var
            i = 0,
            l = argc.length;
            i < l;
            i++
        ) {
            var n = argc[i] & 0xFF;
            if (n < 0x10) {
                r.push("0" + n.toString(16));
            } else {
                r.push(n.toString(16));
            }
        }
        return r.join("");
    }

    /**
     * 
     * Returns a character created by using the specified code point.
     * 
     * @param {ArrayLike<number>} argc A code point array.
     * @returns {string}
     */
    function fromCharCode$2 (
        argc
    ) {
        var r = "";
        for (var
            i = 0,
            l = argc.length;
            i < l;
            i++
        ) {
            var n = argc[i];
            if (n <= 0xFFFF) {
                r += String.fromCharCode(n);
            } else {
                r += String.fromCharCode(((n - 0x10000) >> 10) + 0xD800, ((n - 0x10000) % 0x400) + 0xDC00);
            }
        }
        return r;
    }

    /**
     * 
     * Decodes a bytes to ascii string.
     * 
     * @param {ArrayLike<number>} argc A bytes.
     * @returns {string}
     */
    function decodeASCII$2 (
        argc
    ) {
        var r = [];
        for (var
            i = 0,
            l = argc.length;
            i < l;
            i++
        ) {
            r.push(argc[i] & 0x7F);
        }
        return fromCharCode$2(r);
    }

    /** 
     * Defines base64 to ascii mapping table.
     * 
     * @type {Readonly<Record<number | string, number>>}
     */
    var BTOA$2 = {
        0: 65,
        1: 66,
        2: 67,
        3: 68,
        4: 69,
        5: 70,
        6: 71,
        7: 72,
        8: 73,
        9: 74,
        10: 75,
        11: 76,
        12: 77,
        13: 78,
        14: 79,
        15: 80,
        16: 81,
        17: 82,
        18: 83,
        19: 84,
        20: 85,
        21: 86,
        22: 87,
        23: 88,
        24: 89,
        25: 90,
        26: 97,
        27: 98,
        28: 99,
        29: 100,
        30: 101,
        31: 102,
        32: 103,
        33: 104,
        34: 105,
        35: 106,
        36: 107,
        37: 108,
        38: 109,
        39: 110,
        40: 111,
        41: 112,
        42: 113,
        43: 114,
        44: 115,
        45: 116,
        46: 117,
        47: 118,
        48: 119,
        49: 120,
        50: 121,
        51: 122,
        52: 48,
        53: 49,
        54: 50,
        55: 51,
        56: 52,
        57: 53,
        58: 54,
        59: 55,
        60: 56,
        61: 57,
        62: 43,
        63: 47,
        64: 61,
    };

    var btoa$4 = globalThis$3.btoa || function (
        /**
         * @type {string}
         */
        argc
    ) {
        var r = [];
        for (var
            i = 0,
            l = argc.length;
            i < l;
        ) {
            var n1 = argc.charCodeAt(i++);
            var n2 = argc.charCodeAt(i++);
            var n3 = argc.charCodeAt(i++);
            var e1 = (n1 & 0xFF) >> 2;
            var e2 = (n1 & 0x03) << 4 | n2 >> 4;
            var e3 = (n2 & 0x0F) << 2 | n3 >> 6;
            var e4 = (n3 & 0x3F) << 0;
            if (globalThis$3.isNaN(n2)) {
                e3 = 64;
            }
            if (globalThis$3.isNaN(n3)) {
                e4 = 64;
            }
            r.push(BTOA$2[e1]);
            r.push(BTOA$2[e2]);
            r.push(BTOA$2[e3]);
            r.push(BTOA$2[e4]);
        }
        return fromCharCode$2(r);
    };

    /**
     * 
     * Decodes a bytes to latin1 string.
     * 
     * @param {ArrayLike<number>} argc A bytes.
     * @returns {string}
     */
    function decodeLATIN1$2 (
        argc
    ) {
        var r = [];
        for (var
            i = 0,
            l = argc.length;
            i < l;
            i++
        ) {
            r.push(argc[i] & 0xFF);
        }
        return fromCharCode$2(r);
    }

    /**
     * 
     * Decodes a bytes to base64 string.
     * 
     * @param {ArrayLike<number>} argc A bytes.
     * @returns {string}
     */
    function decodeBASE64$2 (
        argc
    ) {
        return btoa$4(decodeLATIN1$2(argc));
    }

    /**
     * 
     * Decodes a utf8 bytes to sting.
     * 
     * @param {ArrayLike<number>} argc A utf8 bytes.
     * @returns {string}
     */
    function decodeUTF8$2 (
        argc
    ) {
        var r = [];
        for (var
            i = 0,
            l = argc.length;
            i < l;
        ) {
            var n = argc[i];
            if (n <= 0x7F) {
                r.push(
                    ((argc[i++] & 0x7F) << (0 * 6)));
            } else if (n >= 0xC0 && n <= 0xDF) {
                r.push(
                    ((argc[i++] & 0x1F) << (1 * 6)) |
                    ((argc[i++] & 0x3F) << (0 * 6)));
            } else if (n >= 0xE0 && n <= 0xEF) {
                r.push(
                    ((argc[i++] & 0x0F) << (2 * 6)) |
                    ((argc[i++] & 0x3F) << (1 * 6)) |
                    ((argc[i++] & 0x3F) << (0 * 6)));
            } else if (n >= 0xF0 && n <= 0xF7) {
                r.push(
                    ((argc[i++] & 0x07) << (3 * 6)) |
                    ((argc[i++] & 0x3F) << (2 * 6)) |
                    ((argc[i++] & 0x3F) << (1 * 6)) |
                    ((argc[i++] & 0x3F) << (0 * 6)));
            } else if (n >= 0xF8 && n <= 0xFB) {
                r.push(
                    ((argc[i++] & 0x03) << (4 * 6)) |
                    ((argc[i++] & 0x3F) << (3 * 6)) |
                    ((argc[i++] & 0x3F) << (2 * 6)) |
                    ((argc[i++] & 0x3F) << (1 * 6)) |
                    ((argc[i++] & 0x3F) << (0 * 6)));
            } else if (n >= 0xFC) {
                r.push(
                    ((argc[i++] & 0x01) << (5 * 6)) |
                    ((argc[i++] & 0x3F) << (4 * 6)) |
                    ((argc[i++] & 0x3F) << (3 * 6)) |
                    ((argc[i++] & 0x3F) << (2 * 6)) |
                    ((argc[i++] & 0x3F) << (1 * 6)) |
                    ((argc[i++] & 0x3F) << (0 * 6)));
            } else {
                i++;
            }
        }
        return fromCharCode$2(r);
    }

    /**
     * 
     * @param {ArrayLike<number>} argc 
     * @param {"hex" | "ascii" | "base64" | "latin1" | "utf8"} [encoding] 
     * @returns {string}
     */
    function decode$2 (
        argc,
        encoding
    ) {
        if (encoding === definition$3.HEX) {
            return decodeHEX$2(argc);
        }
        if (encoding === definition$3.ASCII) {
            return decodeASCII$2(argc);
        }
        if (encoding === definition$3.BASE64) {
            return decodeBASE64$2(argc);
        }
        if (encoding === definition$3.LATIN1) {
            return decodeLATIN1$2(argc);
        }
        return decodeUTF8$2(argc);
    }

    /**
     * 
     * Encodes a hex string to bytes.
     * 
     * @param {string} argc A hex string.
     * @returns {ReadonlyArray<number>}
     */
    function encodeHEX$2 (
        argc
    ) {
        var r = [];
        for (var
            i = 0,
            l = argc.length;
            i < l;
            i += 2
        ) {
            var n = parseInt(argc.slice(i, i + 2), 16);
            if (n > 0) {
                r.push(n);
            }
        }
        return r;
    }

    /**
     * 
     * Encodes a ascii string to bytes.
     * 
     * @param {string} argc A ascii string.
     * @returns {ReadonlyArray<number>}
     */
    function encodeASCII$2 (
        argc
    ) {
        var r = [];
        for (var
            i = 0,
            l = argc.length;
            i < l;
            i++
        ) {
            var n = argc.charCodeAt(i);
            if (n > 0x7F) {
                throw new Error(message$3.CHARACTER_IS_OUTSIDE_THE_BOUNDS_OF_ASCII);
            }
            r.push(n);
        }
        return r;
    }

    /** 
     * Defines ascii to base64 mapping table.
     * 
     * @type {Readonly<Record<number | string, number>>}
     */
     var ATOB$2 = {
        43: 62,
        47: 63,
        48: 52,
        49: 53,
        50: 54,
        51: 55,
        52: 56,
        53: 57,
        54: 58,
        55: 59,
        56: 60,
        57: 61,
        61: 64,
        65: 0,
        66: 1,
        67: 2,
        68: 3,
        69: 4,
        70: 5,
        71: 6,
        72: 7,
        73: 8,
        74: 9,
        75: 10,
        76: 11,
        77: 12,
        78: 13,
        79: 14,
        80: 15,
        81: 16,
        82: 17,
        83: 18,
        84: 19,
        85: 20,
        86: 21,
        87: 22,
        88: 23,
        89: 24,
        90: 25,
        97: 26,
        98: 27,
        99: 28,
        100: 29,
        101: 30,
        102: 31,
        103: 32,
        104: 33,
        105: 34,
        106: 35,
        107: 36,
        108: 37,
        109: 38,
        110: 39,
        111: 40,
        112: 41,
        113: 42,
        114: 43,
        115: 44,
        116: 45,
        117: 46,
        118: 47,
        119: 48,
        120: 49,
        121: 50,
        122: 51,
    };

    var atob$2 = globalThis$3.atob || function (
        /**
         * @type {string}
         */
        argc
    ) {
        var r = [];
        for (var
            i = 0,
            l = argc.length;
            i < l;
        ) {
            var e1 = ATOB$2[argc.charCodeAt(i++)];
            var e2 = ATOB$2[argc.charCodeAt(i++)];
            var e3 = ATOB$2[argc.charCodeAt(i++)];
            var e4 = ATOB$2[argc.charCodeAt(i++)];
            var n1 = (e1 & 0xFF) << 2 | e2 >> 4;
            var n2 = (e2 & 0x0F) << 4 | e3 >> 2;
            var n3 = (e3 & 0x03) << 6 | e4 >> 0;
            r.push(n1);
            if (e4 < 64) {
                r.push(n2);
            }
            if (e4 < 64) {
                r.push(n3);
            }
        }
        return fromCharCode$2(r);
    };

    /**
     * 
     * Encodes a latin1 string to bytes.
     * 
     * @param {string} argc A latin1 string.
     * @returns {ReadonlyArray<number>}
     */
    function encodeLATIN1$2 (
        argc
    ) {
        var r = [];
        for (var
            i = 0,
            l = argc.length;
            i < l;
            i++
        ) {
            var n = argc.charCodeAt(i);
            if (n > 0xFF) {
                throw new Error(message$3.CHARACTER_IS_OUTSIDE_THE_BOUNDS_OF_LATIN1);
            }
            r.push(n);
        }
        return r;
    }

    /**
     * 
     * Encodes a base64 string to bytes.
     * 
     * @param {string} argc A base64 string.
     * @returns {ReadonlyArray<number>}
     */
    function encodeBASE64$2 (
        argc
    ) {
        return encodeLATIN1$2(atob$2(argc));
    }

    /**
     * 
     * Encodes a string to utf8 bytes.
     * 
     * @param {string} argc A string.
     * @returns {ReadonlyArray<number>}
     */
    function encodeUTF8$2 (
        argc
    ) {
        var r = [];
        for (var
            i = 0,
            l = argc.length;
            i < l;
        ) {
            var n = argc.charCodeAt(i++);
            if (n >= 0xD800 &&
                n <= 0xDBFF) {
                if (i < l) {
                    n = ((n - 0xD800) * 0x400) + (argc.charCodeAt(i++) - 0xDC00) + 0x10000;
                }
            }
            if (n <= 0x0000007F) {
                r.push(n & 0x7F);
            } else if (n >= 0x00000080 && n <= 0x000007FF) {
                r.push(((n >> (1 * 6)) & 0x1F) | 0xC0);
                r.push(((n >> (0 * 6)) & 0x3F) | 0x80);
            } else if (n >= 0x00000800 && n <= 0x0000FFFF) {
                r.push(((n >> (2 * 6)) & 0x0F) | 0xE0);
                r.push(((n >> (1 * 6)) & 0x3F) | 0x80);
                r.push(((n >> (0 * 6)) & 0x3F) | 0x80);
            } else if (n >= 0x00010000 && n <= 0x001FFFFF) {
                r.push(((n >> (3 * 6)) & 0x07) | 0xF0);
                r.push(((n >> (2 * 6)) & 0x3F) | 0x80);
                r.push(((n >> (1 * 6)) & 0x3F) | 0x80);
                r.push(((n >> (0 * 6)) & 0x3F) | 0x80);
            } else if (n >= 0x00200000 && n <= 0x03FFFFFF) {
                r.push(((n >> (4 * 6)) & 0x03) | 0xF8);
                r.push(((n >> (3 * 6)) & 0x3F) | 0x80);
                r.push(((n >> (2 * 6)) & 0x3F) | 0x80);
                r.push(((n >> (1 * 6)) & 0x3F) | 0x80);
                r.push(((n >> (0 * 6)) & 0x3F) | 0x80);
            } else if (n >= 0x04000000 && n <= 0x7FFFFFFF) {
                r.push(((n >> (5 * 6)) & 0x01) | 0xFC);
                r.push(((n >> (4 * 6)) & 0x3F) | 0x80);
                r.push(((n >> (3 * 6)) & 0x3F) | 0x80);
                r.push(((n >> (2 * 6)) & 0x3F) | 0x80);
                r.push(((n >> (1 * 6)) & 0x3F) | 0x80);
                r.push(((n >> (0 * 6)) & 0x3F) | 0x80);
            }
        }
        return r;
    }

    /**
     * 
     * @param {string} argc 
     * @param {"hex" | "ascii" | "base64" | "latin1" | "utf8"} [encoding] 
     * @returns {ReadonlyArray<number>}
     */
    function encode$2 (
        argc,
        encoding
    ) {
        if (encoding === definition$3.HEX) {
            return encodeHEX$2(argc);
        }
        if (encoding === definition$3.ASCII) {
            return encodeASCII$2(argc);
        }
        if (encoding === definition$3.BASE64) {
            return encodeBASE64$2(argc);
        }
        if (encoding === definition$3.LATIN1) {
            return encodeLATIN1$2(argc);
        }
        return encodeUTF8$2(argc);
    }

    var _isArrayBuffer = skrinkSerializer$3(
        /**
         * 
         * Determines if the input parameter is a ArrayBufferLike.
         * 
         * @param {any} argc Any object.
         * @returns {argc is ArrayBufferLike}
         */
        function (
            argc
        ) {
            return _isInstanceOf(argc, globalThis$3.ArrayBuffer) || _isInstanceOf(argc, globalThis$3.SharedArrayBuffer);
        }
    );

    var Uint8Array$2 = (function (Uint8Array) {
        return Uint8Array = Uint8Array || generateClass$3(
            /**
             * 
             * @this {Uint8Array}
             * @param {number | number[]} [argc] 
             */
            function (argc) {
                if (_isArray(argc)) {
                    Reflect$3.defineInternal(this, Object.seal(Array.apply(null, new Array(argc.length)).map(function (_, i) { return argc[i] & 0xFF; })));
                } else {
                    Reflect$3.defineInternal(this, Object.seal(Array.apply(null, new Array(Math.floor(argc || 0))).map(function () { return 0 & 0xFF; })));
                }
                return Reflect$3.initTyped(this);
            },
            {
                buffer: generateGetterDescriptor$3(
                    /**
                     * 
                     * @this {Uint8Array}
                     */
                    function () {
                        throw new Error(message$3.NOT_SUPPORTED);
                    }
                ),
                byteOffset: generateGetterDescriptor$3(
                    /**
                     * 
                     * @this {Uint8Array}
                     */
                    function () {
                        throw new Error(message$3.NOT_SUPPORTED);
                    }
                ),
                byteLength: generateGetterDescriptor$3(
                    /**
                     * 
                     * @this {Uint8Array}
                     */
                    function () {
                        throw new Error(message$3.NOT_SUPPORTED);
                    }
                ),
                length: generateGetterDescriptor$3(
                    /**
                     * 
                     * @this {Uint8Array}
                     */
                    function () {
                        return Reflect$3.getInternal(this).length;
                    }
                ),
                some: generateMethodDescriptor$3(
                    /**
                     * 
                     * @this {Uint8Array}
                     * @param {(v: number, i: number) => unknown} callback 
                     * @param {any} [context]
                     */
                    function (
                        callback,
                        context
                    ) {
                        return Reflect$3.getInternal(this).some(callback, context || this);
                    }
                ),
                every: generateMethodDescriptor$3(
                    /**
                     * 
                     * @this {Uint8Array}
                     * @param {(v: number, i: number) => unknown} callback 
                     * @param {any} [context]
                     */
                    function (
                        callback,
                        context
                    ) {
                        return Reflect$3.getInternal(this).every(callback, context || this);
                    }
                ),
                filter: generateMethodDescriptor$3(
                    /**
                     * 
                     * @this {Uint8Array}
                     * @param {(v: number, i: number) => number} callback 
                     * @param {any} [context]
                     */
                    function (
                        callback,
                        context
                    ) {
                        return new Uint8Array(Reflect$3.getInternal(this).filter(callback, context || this));
                    }
                ),
                map: generateMethodDescriptor$3(
                    /**
                     * 
                     * @this {Uint8Array}
                     * @param {(v: number, i: number) => number} callback 
                     * @param {any} [context]
                     */
                    function (
                        callback,
                        context
                    ) {
                        return new Uint8Array(Reflect$3.getInternal(this).map(callback, context || this));
                    }
                ),
                subarray: generateMethodDescriptor$3(
                    /**
                     * 
                     * @this {Uint8Array}
                     * @param {number} [start] 
                     * @param {number} [end] 
                     */
                    function (
                        start,
                        end
                    ) {
                        return new Uint8Array(Reflect$3.getInternal(this).slice(start, end));
                    }
                ),
                join: generateMethodDescriptor$3(
                    /**
                     * 
                     * @this {Uint8Array}
                     * @param {string} [separator] 
                     */
                    function (separator) {
                        return Reflect$3.getInternal(this).join(separator);
                    }
                ),
            },
            NOOP$3
        );
    }(globalThis$3.Uint8Array));

    var Buffer$2 = (function (Buffer) {
        return Buffer = Buffer || defineProperties$3(generateClass$3(Reflect$3.BASE, {
            buffer: generateGetterDescriptor$3(
                /**
                 * 
                 * @this {Buffer}
                 */
                function () {
                    return Reflect$3.getInternal(this).buffer;
                }
            ),
            byteOffset: generateGetterDescriptor$3(
                /**
                 * 
                 * @this {Buffer}
                 */
                function () {
                    return Reflect$3.getInternal(this).byteOffset;
                }
            ),
            byteLength: generateGetterDescriptor$3(
                /**
                 * 
                 * @this {Buffer}
                 */
                function () {
                    return Reflect$3.getInternal(this).byteLength;
                }
            ),
            length: generateGetterDescriptor$3(
                /**
                 * 
                 * @this {Buffer}
                 */
                function () {
                    return Reflect$3.getInternal(this).length;
                }
            ),
            some: generateMethodDescriptor$3(
                /**
                 * 
                 * @this {Buffer}
                 * @param {(v: number, i: number) => unknown} callback 
                 * @param {any} [context]
                 */
                function (
                    callback,
                    context
                ) {
                    return Reflect$3.getInternal(this).some(callback, context || this);
                }
            ),
            every: generateMethodDescriptor$3(
                /**
                 * 
                 * @this {Buffer}
                 * @param {(v: number, i: number) => unknown} callback 
                 * @param {any} [context]
                 */
                function (
                    callback,
                    context
                ) {
                    return Reflect$3.getInternal(this).every(callback, context || this);
                }
            ),
            filter: generateMethodDescriptor$3(
                /**
                 * 
                 * @this {Buffer}
                 * @param {(v: number, i: number) => number} callback 
                 * @param {any} [context]
                 */
                function (
                    callback,
                    context
                ) {
                    return Buffer.from(Reflect$3.getInternal(this).filter(callback, context || this));
                }
            ),
            map: generateMethodDescriptor$3(
                /**
                 * 
                 * @this {Buffer}
                 * @param {(v: number, i: number) => number} callback 
                 * @param {any} [context]
                 */
                function (
                    callback,
                    context
                ) {
                    return Buffer.from(Reflect$3.getInternal(this).map(callback, context || this));
                }
            ),
            subarray: generateMethodDescriptor$3(
                /**
                 * 
                 * @this {Buffer}
                 * @param {number} [start] 
                 * @param {number} [end] 
                 */
                function (
                    start,
                    end
                ) {
                    return Buffer.from(Reflect$3.getInternal(this).subarray(start, end));
                }
            ),
            join: generateMethodDescriptor$3(
                /**
                 * 
                 * @this {Buffer}
                 * @param {string} [separator] 
                 */
                function (
                    separator
                ) {
                    return Reflect$3.getInternal(this).join(separator);
                }
            ),
            readUInt8: generateMethodDescriptor$3(
                /**
                 * 
                 * @this {Buffer}
                 * @param {number} [offset] 
                 */
                function (
                    offset
                ) {
                    var sn = offset || 0;
                    var mn = this.length;
                    if (sn > mn - 1) {
                        throw new Error(message$3.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                    }
                    return this[sn];
                }
            ),
            readUInt16BE: generateMethodDescriptor$3(
                /**
                 * 
                 * @this {Buffer}
                 * @param {number} [offset] 
                 */
                function (
                    offset
                ) {
                    var sn = offset || 0;
                    var mn = this.length;
                    if (sn > mn - 2) {
                        throw new Error(message$3.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                    }
                    var b1 = this[sn + 0] << 0x08;
                    var b2 = this[sn + 1] << 0x00;
                    return (b1 | b2) >>> 0;
                }
            ),
            readUInt16LE: generateMethodDescriptor$3(
                /**
                 * 
                 * @this {Buffer}
                 * @param {number} [offset] 
                 */
                function (
                    offset
                ) {
                    var sn = offset || 0;
                    var mn = this.length;
                    if (sn > mn - 2) {
                        throw new Error(message$3.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                    }
                    var b1 = this[sn + 0] << 0x00;
                    var b2 = this[sn + 1] << 0x08;
                    return (b1 | b2) >>> 0;
                }
            ),
            readUInt32BE: generateMethodDescriptor$3(
                /**
                 * 
                 * @this {Buffer}
                 * @param {number} [offset] 
                 */
                function (
                    offset
                ) {
                    var sn = offset || 0;
                    var mn = this.length;
                    if (sn > mn - 4) {
                        throw new Error(message$3.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                    }
                    var b1 = this[sn + 0] << 0x18;
                    var b2 = this[sn + 1] << 0x10;
                    var b3 = this[sn + 2] << 0x08;
                    var b4 = this[sn + 3] << 0x00;
                    return (b1 | b2 | b3 | b4) >>> 0;
                }
            ),
            readUInt32LE: generateMethodDescriptor$3(
                /**
                 * 
                 * @this {Buffer}
                 * @param {number} [offset] 
                 */
                function (
                    offset
                ) {
                    var sn = offset || 0;
                    var mn = this.length;
                    if (sn > mn - 4) {
                        throw new Error(message$3.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                    }
                    var b1 = this[sn + 0] << 0x00;
                    var b2 = this[sn + 1] << 0x08;
                    var b3 = this[sn + 2] << 0x10;
                    var b4 = this[sn + 3] << 0x18;
                    return (b1 | b2 | b3 | b4) >>> 0;
                }
            ),
            writeUInt8: generateMethodDescriptor$3(
                /**
                 * 
                 * @this {Buffer}
                 * @param {number} value 
                 * @param {number} [offset]
                 */
                function (
                    value,
                    offset
                ) {
                    var sn = offset || 0;
                    var mn = this.length;
                    if (sn > mn - 1) {
                        throw new Error(message$3.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                    }
                    this[sn] = value >> 0x00 & 0xFF;
                    return sn + 1;
                }
            ),
            writeUInt16BE: generateMethodDescriptor$3(
                /**
                 * 
                 * @this {Buffer}
                 * @param {number} value 
                 * @param {number} [offset]
                 */
                function (
                    value,
                    offset
                ) {
                    var sn = offset || 0;
                    var mn = this.length;
                    if (sn > mn - 2) {
                        throw new Error(message$3.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                    }
                    this[sn + 0] = value >> 0x08 & 0xFF;
                    this[sn + 1] = value >> 0x00 & 0xFF;
                    return sn + 2;
                }
            ),
            writeUInt16LE: generateMethodDescriptor$3(
                /**
                 * 
                 * @this {Buffer}
                 * @param {number} value 
                 * @param {number} [offset]
                 */
                function (
                    value,
                    offset
                ) {
                    var sn = offset || 0;
                    var mn = this.length;
                    if (sn > mn - 2) {
                        throw new Error(message$3.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                    }
                    this[sn + 0] = value >> 0x00 & 0xFF;
                    this[sn + 1] = value >> 0x08 & 0xFF;
                    return sn + 2;
                }
            ),
            writeUInt32BE: generateMethodDescriptor$3(
                /**
                 * 
                 * @this {Buffer}
                 * @param {number} value 
                 * @param {number} [offset]
                 */
                function (
                    value,
                    offset
                ) {
                    var sn = offset || 0;
                    var mn = this.length;
                    if (sn > mn - 4) {
                        throw new Error(message$3.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                    }
                    this[sn + 0] = value >> 0x18 & 0xFF;
                    this[sn + 1] = value >> 0x10 & 0xFF;
                    this[sn + 2] = value >> 0x08 & 0xFF;
                    this[sn + 3] = value >> 0x00 & 0xFF;
                    return sn + 4;
                }
            ),
            writeUInt32LE: generateMethodDescriptor$3(
                /**
                 * 
                 * @this {Buffer}
                 * @param {number} value 
                 * @param {number} [offset]
                 */
                function (
                    value,
                    offset
                ) {
                    var sn = offset || 0;
                    var mn = this.length;
                    if (sn > mn - 4) {
                        throw new Error(message$3.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                    }
                    this[sn + 0] = value >> 0x00 & 0xFF;
                    this[sn + 1] = value >> 0x08 & 0xFF;
                    this[sn + 2] = value >> 0x10 & 0xFF;
                    this[sn + 3] = value >> 0x18 & 0xFF;
                    return sn + 4;
                }
            ),
            toString: generateMethodDescriptor$3(
                /**
                 * 
                 * @this {ArrayLike<number>}
                 * @param {"hex" | "ascii" | "base64" | "latin1" | "utf8"} [encoding] 
                 */
                function (
                    encoding
                ) {
                    return decode$2(this, encoding);
                }
            ),
            toJSON: generateMethodDescriptor$3(
                /**
                 * 
                 * @this {ArrayLike<number>}
                 */
                function () {
                    return {
                        type: "Buffer",
                        data: _flat(this),
                    };
                }
            ),
            valueOf: generateMethodDescriptor$3(
                /**
                 * 
                 * @this {ArrayLike<number>}
                 */
                function () {
                    return Reflect$3.getInternal(this);
                }
            ),
        }, Uint8Array$2, "Buffer"), {
            alloc: generateMethodDescriptor$3(
                /**
                 * 
                 * @param {number} length 
                 */
                function (
                    length
                ) {
                    return Reflect$3.initTyped(Reflect$3.construct(Buffer, new Uint8Array$2(length)));
                }
            ),
            from: generateMethodDescriptor$3(
                /**
                 * 
                 * @param {ArrayBufferLike | Uint8Array | ArrayLike<number> | string} sources 
                 * @param {any} [byteOffsetEncoding]
                 * @param {number} [length]
                 */
                function (
                    sources,
                    byteOffsetEncoding,
                    length
                ) {
                    var bytes;
                    if (_isInstanceOf(sources, Uint8Array$2)) {
                        bytes = sources.slice(0);
                    } else if (_isArrayBuffer(sources)) {
                        bytes = new Uint8Array$2(sources, Number(byteOffsetEncoding) || 0, length);
                    } else if (_isString(sources)) {
                        bytes = new Uint8Array$2(encode$2(sources, byteOffsetEncoding));
                    } else {
                        bytes = new Uint8Array$2(sources);
                    }
                    return Reflect$3.initTyped(Reflect$3.construct(Buffer, bytes));
                }
            ),
            concat: generateMethodDescriptor$3(
                /**
                 * 
                 * @param {ReadonlyArray<Uint8Array>} sources 
                 */
                function (
                    sources
                ) {
                    var r = [];
                    for (var
                        i = 0,
                        l = sources.length;
                        i < l;
                        i++
                    ) {
                        var t = sources[i];
                        for (var
                            j = 0,
                            m = t.length;
                            j < m;
                            j++
                        ) {
                            r.push(t[j]);
                        }
                    }
                    return Buffer.from(r);
                }
            ),
            compare: generateMethodDescriptor$3(
                /**
                 * 
                 * @param {ArrayLike<number>} buf1 
                 * @param {ArrayLike<number>} buf2 
                 */
                function (
                    buf1,
                    buf2
                ) {
                    var m = buf1.length;
                    var n = buf2.length;
                    var t;
                    for (var
                        i = 0,
                        l = Math.min(m, n);
                        i < l;
                        i++
                    ) {
                        if (t = buf1[i] - buf2[i]) {
                            return t > 0 ? 1 : -1;
                        }
                    }
                    if (t = m - n) {
                        return t > 0 ? 1 : -1;
                    }
                    return 0;
                }
            ),
            isBuffer: generateMethodDescriptor$3(
                /**
                 * 
                 * @param {any} argc 
                 */
                function (
                    argc
                ) {
                    return _isInstanceOf(argc, Buffer);
                }
            ),
        });
    }(globalThis$3.Buffer));

    var Fragment = skrinkSerializer$3(
        /**
         * 
         * @param {Yarla.ChildrenAttributes} props 
         */
        function (
            props
        ) {
            return props.children;
        }
    );

    var httpStatus$2 = {
        100: "Continue",
        101: "Switching Protocols",
        102: "Processing",
        103: "Early Hints",
        200: "OK",
        201: "Created",
        202: "Accepted",
        203: "Non-Authoritative Information",
        204: "No Content",
        205: "Reset Content",
        206: "Partial Content",
        207: "Multi-Status",
        208: "Already Reported",
        226: "IM Used",
        300: "Multiple Choices",
        301: "Moved Permanently",
        302: "Found",
        303: "See Other",
        304: "Not Modified",
        305: "Use Proxy",
        307: "Temporary Redirect",
        308: "Permanent Redirect",
        400: "Bad Request",
        401: "Unauthorized",
        402: "Payment Required",
        403: "Forbidden",
        404: "Not Found",
        405: "Method Not Allowed",
        406: "Not Acceptable",
        407: "Proxy Authentication Required",
        408: "Request Timeout",
        409: "Conflict",
        410: "Gone",
        411: "Length Required",
        412: "Precondition Failed",
        413: "Payload Too Large",
        414: "URI Too Long",
        415: "Unsupported Media Type",
        416: "Range Not Satisfiable",
        417: "Expectation Failed",
        418: "I'm a Teapot",
        421: "Misdirected Request",
        422: "Unprocessable Entity",
        423: "Locked",
        424: "Failed Dependency",
        425: "Too Early",
        426: "Upgrade Required",
        428: "Precondition Required",
        429: "Too Many Requests",
        431: "Request Header Fields Too Large",
        451: "Unavailable For Legal Reasons",
        500: "Internal Server Error",
        501: "Not Implemented",
        502: "Bad Gateway",
        503: "Service Unavailable",
        504: "Gateway Timeout",
        505: "HTTP Version Not Supported",
        506: "Variant Also Negotiates",
        507: "Insufficient Storage",
        508: "Loop Detected",
        509: "Bandwidth Limit Exceeded",
        510: "Not Extended",
        511: "Network Authentication Required",
    };

    var HttpError$2 = generateClass$3(
        /**
         * 
         * @this {any}
         * @param {number} status 
         * @param {string} [message] 
         */
        function (
            status,
            message
        ) {
            return defineProperties$3(Reflect$3.callSuper(this, message || httpStatus$2[status] || "Unknown"), {
                status: generateNormalDescriptor$3(status, true, true),
            });
        },
        {
            name: generateNormalDescriptor$3("HttpError", true, true),
        },
        Error,
        "HttpError"
    );

    var RefObject$1 = defineProperties$3(generateClass$3(Reflect$3.BASE, {
        target: generateGetterDescriptor$3(
            /**
             * 
             * @this {Yarla.RefObject<T>}
             * @returns {T}
             * @template T
             */
            function () {
                return Reflect$3.getInternal(this).target;
            }
        ),
    }, NOOP$3, "RefObject"), {
        init: generateMethodDescriptor$3(
            /**
             * 
             * @this {Yarla.Proto<Yarla.RefObject<T>>}
             * @param {T} [target] 
             * @template T
             */
            function (target) {
                return Reflect$3.construct(this, { target: target });
            }
        ),
    });

    var VMElement$1 = (function () {
        return defineProperties$3(generateClass$3(Reflect$3.BASE, {
            key: generateGetterDescriptor$3(
                /**
                 * 
                 * @this {any}
                 * @returns {string | number | null | undefined}
                 */
                function () {
                    return Reflect$3.getInternal(this).key;
                }
            ),
            ref: generateGetterDescriptor$3(
                /**
                 * 
                 * @this {any}
                 * @returns {Yarla.RefObject<any> | null | undefined}
                 */
                function () {
                    return Reflect$3.getInternal(this).ref;
                }
            ),
            cmd: generateGetterDescriptor$3(
                /**
                 * 
                 * @this {any}
                 * @returns {ReadonlyArray<Yarla.Directive> | null | undefined}
                 */
                function () {
                    return Reflect$3.getInternal(this).cmd;
                }
            ),
            props: generateGetterDescriptor$3(
                /**
                 * 
                 * @this {any}
                 * @returns {any}
                 */
                function () {
                    return Reflect$3.getInternal(this).props;
                }
            ),
            owner: generateGetterDescriptor$3(
                /**
                 * 
                 * @this {any}
                 * @returns {any}
                 */
                function () {
                    return Reflect$3.getInternal(this).owner;
                }
            ),
            type: generateGetterDescriptor$3(
                /**
                 * 
                 * @this {any}
                 * @returns {string | Yarla.Component}
                 */
                function () {
                    return Reflect$3.getInternal(this).type;
                }
            ),
        }, NOOP$3, "VMElement"), {
            init: generateMethodDescriptor$3(
                /**
                 * 
                 * @this {Yarla.Proto<Yarla.VMElement<T>>}
                 * @param {T} type 
                 * @param {any} props
                 * @returns {Yarla.VMElement<T>} 
                 * @template T
                 */
                function (type, props) {
                    var properties = {};
                    var intrinsics = _isString(type);
                    for (var i in props) {
                        var v = props[i];
                        if (_isNullOrUndefined(v)) {
                            continue;
                        }
                        if (i === "cmd" ||
                            i === "key" ||
                            i === "ref" ||
                            i === "children") {
                            continue;
                        }
                        if (intrinsics) {
                            if (i === "class") {
                                properties[i] = flatClassAttribute(v);
                                continue;
                            }
                            if (i === "style") {
                                properties[i] = flatStyleAttribute(v);
                                continue;
                            }
                            if (isFormElementsExtraAttribute(i, type)) {
                                defineProperty$3(properties, i, generateNormalDescriptor$3(v));
                                continue;
                            }
                        }
                        properties[i] = v;
                    }
                    var c = props ? props.cmd : null;
                    var k = props ? props.key : null;
                    var r = props ? props.ref : null;
                    var m = props ? props.children : null;
                    var n = _flat(arguments, 2);
                    return Reflect$3.construct(this, {
                        type: type,
                        owner: zone$1.currentTarget,
                        props: Object.freeze(defineProperties$3(properties, {
                            children: generateNormalDescriptor$3(_flat([m, n], 0, Infinity, true)),
                        })),
                        cmd: _isNullOrUndefined(c) ? null : _flat([c], 0, Infinity, true),
                        key: _isString(k) || _isNumber(k) ? k : null,
                        ref: _isInstanceOf(r, RefObject$1) ? r : null,
                    });
                }
            ),
        });
        /**
         * 
         * @param {any} argc 
         * @returns {string}
         */
        function flatClassAttribute(
            argc
        ) {
            if (_isObject(argc)) {
                var r = [];
                for (var i in argc) {
                    if (argc[i]) {
                        r.push(i);
                    }
                }
                return r.join(" ");
            }
            return String(argc);
        }
        /**
         * 
         * @param {any} argc 
         * @returns {string}
         */
        function flatStyleAttribute(
            argc
        ) {
            if (_isObject(argc)) {
                var r = [];
                for (var i in argc) {
                    if (_isValid(argc[i])) {
                        r.push(i.replace(/[A-Z]/g, function (i) {
                            return "-" + i.toUpperCase();
                        }) + ":" + argc[i]);
                    }
                }
                return r.join(";");
            }
            return String(argc);
        }
        /**
         * 
         * @param {string} attributeName 
         * @param {any} nodeName 
         * @returns {boolean}
         */
        function isFormElementsExtraAttribute(
            attributeName,
            nodeName
        ) {
            return (attributeName === "normalize" || attributeName === "validator") && (nodeName === "input" || nodeName === "select" || nodeName === "textarea");
        }
    }());

    var ReadableStream$2 = (function (ReadableStream) {
        return defineProperties$3(ReadableStream, {
            from: generateMethodDescriptor$3(
                /**
                 * 
                 * @param {import("stream").Readable} nodeStream 
                 * @param {"bytes"} [type]
                 */
                function (
                    nodeStream,
                    type
                ) {
                    return new ReadableStream({
                        // @ts-ignore
                        type: type,
                        cancel: function (reason) {
                            nodeStream.destroy(reason);
                        },
                        start: function (controller) {
                            nodeStream.on("close", function () {
                                if (!nodeStream.readableEnded) {
                                    controller.error(new Error(message$3.STREAM_CLOSED_BEFORE_ENDING));
                                }
                            });
                            nodeStream.on("error", function (reason) {
                                controller.error(reason);
                            });
                            nodeStream.on("data", function (chunk) {
                                controller.enqueue(chunk);
                                nodeStream.pause();
                            });
                            nodeStream.on("end", function () {
                                controller.close();
                            });
                        },
                        pull: function () {
                            nodeStream.resume();
                        },
                    });
                }
            ),
        });
    }(globalThis$3.ReadableStream || generateClass$3(function () {
        throw new Error(message$3.NOT_SUPPORTED);
    }, {
        locked: generateGetterDescriptor$3(
            function () {
                throw new Error(message$3.NOT_SUPPORTED);
            }
        ),
        cancel: generateMethodDescriptor$3(
            function () {
                throw new Error(message$3.NOT_SUPPORTED);
            }
        ),
        getReader: generateMethodDescriptor$3(
            function () {
                throw new Error(message$3.NOT_SUPPORTED);
            }
        ),
        pipeThrough: generateMethodDescriptor$3(
            function () {
                throw new Error(message$3.NOT_SUPPORTED);
            }
        ),
        pipeTo: generateMethodDescriptor$3(
            function () {
                throw new Error(message$3.NOT_SUPPORTED);
            }
        ),
        tee: generateMethodDescriptor$3(
            function () {
                throw new Error(message$3.NOT_SUPPORTED);
            }
        ),
    }, NOOP$3, "ReadableStream")));

    var createElement$1 = skrinkSerializer$3(
        function () {
            // @ts-ignore
            return VMElement$1.init.apply(VMElement$1, arguments);
        }
    );

    var clearTimeout$1 = globalThis$3.clearTimeout;

    var clearImmediate = globalThis$3.clearImmediate || globalThis$3.cancelAnimationFrame || function ( /** @type {any} */ argc) { return clearTimeout$1(argc); };

    var setImmediate$3 = skrinkSerializer$3(
        /**
         * 
         * @this {any}
         * @param {Yarla.NoReturnsFunc} task 
         * @returns {Yarla.Cancelable}
         */
        function (
            task
        ) {
            var self = this;
            var argv = _flat(arguments, 1);
            var hwnd = setImmediate$4(function () {
                task.apply(self, argv);
                zone$1.forceUpdate();
            });
            return {
                cancel: skrinkSerializer$3(
                    function () {
                        clearImmediate(hwnd);
                    }
                ),
            };
        }
    );

    var setInterval$1 = globalThis$3.setInterval;

    var clearInterval = globalThis$3.clearInterval;

    var setInterval = skrinkSerializer$3(
        /**
         * 
         * @this {any}
         * @param {Yarla.NoReturnsFunc} task 
         * @param {number} [wait] 
         * @returns {Yarla.Cancelable}
         */
        function (
            task,
            wait
        ) {
            var self = this;
            var argv = _flat(arguments, 2);
            var hwnd = setInterval$1(function () {
                task.apply(self, argv);
                zone$1.forceUpdate();
            }, wait);
            return {
                cancel: skrinkSerializer$3(
                    function () {
                        clearInterval(hwnd);
                    }
                ),
            };
        }
    );

    var setTimeout$3 = skrinkSerializer$3(
        /**
         * 
         * @this {any}
         * @param {Yarla.NoReturnsFunc} task 
         * @param {number} [wait] 
         * @returns {Yarla.Cancelable}
         */
        function (
            task,
            wait
        ) {
            var self = this;
            var argv = _flat(arguments, 2);
            var hwnd = setTimeout$4(function () {
                task.apply(self, argv);
                zone$1.forceUpdate();
            }, wait);
            return {
                cancel: skrinkSerializer$3(
                    function () {
                        clearTimeout$1(hwnd);
                    }
                ),
            };
        }
    );

    var nextTick = zone$1.nextTick;

    var debounce = skrinkSerializer$3(
        /**
         * 
         * @param {Yarla.Object<T, Yarla.BasicFunc>} task 
         * @param {number} wait 
         * @param {boolean} [immediate] 
         * @returns {T & Yarla.Cancelable}
         * @template T
         */
        function (
            task,
            wait,
            immediate
        ) {
            var hwnd, data;
            // @ts-ignore
            return defineProperties$3(skrinkSerializer$3(
                /**
                 * @this {any}
                 */
                function () {
                    var self = this;
                    var argv = _flat(arguments);
                    if (hwnd) {
                        clearTimeout$1(hwnd);
                    }
                    var anon = immediate && !hwnd;
                    hwnd = setTimeout$4(function () {
                        hwnd = null;
                        if (!immediate) {
                            data = task.apply(self, argv);
                        }
                        zone$1.forceUpdate();
                    }, wait);
                    if (anon) {
                        data = task.apply(self, argv);
                    }
                    return data;
                }
            ), {
                cancel: generateMethodDescriptor$3(
                    function () {
                        if (hwnd) {
                            clearTimeout$1(hwnd);
                            hwnd = null;
                        }
                    }
                ),
            });
        }
    );

    var throttle = skrinkSerializer$3(
        /**
         * 
         * @param {Yarla.Object<T, Yarla.BasicFunc>} task 
         * @param {number} wait 
         * @param {object} [opts]
         * @param {false} [opts.leading]
         * @param {false} [opts.trailing]
         * @returns {T & Yarla.Cancelable}
         * @template T 
         */
        function (
            task,
            wait,
            opts
        ) {
            var hwnd, data;
            var leading = opts ? opts.leading : null;
            var trailing = opts ? opts.trailing : null;
            var previous = 0;
            // @ts-ignore
            return defineProperties$3(skrinkSerializer$3(
                /**
                 * 
                 * @this {any}
                 */
                function () {
                    var self = this;
                    var argv = _flat(arguments);
                    var time = Date.now();
                    if (previous === 0 && leading === false) {
                        previous = time;
                    }
                    var remaining = wait - (time - previous);
                    if (remaining <= 0 || remaining > wait) {
                        if (hwnd) {
                            clearTimeout$1(hwnd);
                            hwnd = null;
                        }
                        previous = time;
                        data = task.apply(self, argv);
                    } else if (!hwnd && trailing !== false) {
                        hwnd = setTimeout$4(function () {
                            hwnd = null;
                            if (leading === false) {
                                previous = 0;
                            } else {
                                previous = Date.now();
                            }
                            data = task.apply(self, argv);
                            zone$1.forceUpdate();
                        }, remaining);
                    }
                    return data;
                }
            ), {
                cancel: generateMethodDescriptor$3(
                    function () {
                        if (hwnd) {
                            clearTimeout$1(hwnd);
                            hwnd = null;
                        }
                    }
                ),
            });
        }
    );

    var forceUpdate = zone$1.forceUpdate;

    var useEffect = skrinkSerializer$3(
        /**
         * 
         * @param {Yarla.Effection} effection
         * @param {ReadonlyArray<any>} [dependencies] 
         */
        function (
            effection,
            dependencies
        ) {
            return zone$1.target.useEffect(effection, dependencies);
        }
    );

    var useTarget = skrinkSerializer$3(
        /**
         * 
         * @param {any} [patulous] 
         */
        function (
            patulous
        ) {
            return zone$1.target.useTarget(patulous);
        }
    );

    var useState = skrinkSerializer$3(
        /**
         * 
         * @param {unknown} [state] 
         */
        function (
            state
        ) {
            return zone$1.target.useState(state);
        }
    );

    var useMemo = skrinkSerializer$3(
        /**
         * 
         * @param {() => any} factory
         * @param {ReadonlyArray<any>} [dependencies] 
         */
        function (
            factory,
            dependencies
        ) {
            return zone$1.target.useMemo(factory, dependencies);
        }
    );

    var useRef = skrinkSerializer$3(
        /**
         * 
         * @param {unknown} [target] 
         */
        function (
            target
        ) {
            return zone$1.target.useRef(target);
        }
    );

    var shadow = skrinkSerializer$3(
        /**
         * 
         * @param {Yarla.Component} component 
         * @param {string} [tagName]
         */
        function (
            component,
            tagName
        ) {
            return (
                Reflect$3.defineMetadata(component, true, "shadowRoot"),
                Reflect$3.defineMetadata(component, tagName, "tagName"));
        }
    );

    var memo = skrinkSerializer$3(
        /**
         * 
         * @param {Yarla.Component} component 
         */
        function (
            component
        ) {
            return Reflect$3.defineMetadata(component, true, "ignoreUpdate");
        }
    );

    var _isNullOrEmptyString = skrinkSerializer$3(
        /**
         * 
         * Determines if the input parameter is null or undefined or an empty string.
         * 
         * @param {any} argc Any object.
         * @returns {argc is null | undefined | ""}
         */
        function (
            argc
        ) {
            return _isNullOrUndefined(argc) || argc === "";
        }
    );

    var _non = skrinkSerializer$3(
        /**
         * 
         * Returns the unique values in the specified array.
         * 
         * @param {any[]} argc An array.
         */
        function (
            argc
        ) {
            return argc.filter(function (i) {
                return !_isNullOrEmptyString(i);
            });
        }
    );

    var _delete$1 = skrinkSerializer$3(
        /**
         * 
         * Delete a property from the specified object. Returns true if the property was deleted successfully, otherwise returns false.
         * 
         * @param {any} argc An object.
         * @param {Yarla.PropertyExpr} expr The property expression.
         * @returns {boolean}
         */
        function (
            argc,
            expr
        ) {
            var t = argc, p;
            for (var
                i = 0,
                m = argc,
                s = _isString(expr) ? divideExpression$3(expr) : expr,
                l = s.length;
                i < l;
                i++
            ) {
                t = m;
                p = s[i];
                m = t[p];
            }
            return _isNullOrUndefined(p) ? false : delete t[p];
        }
    );

    var _salt = skrinkSerializer$3(
        /**
         * 
         * Returns a URL-safe random string.
         * 
         * @param {number} [size] The length of the string, default 8.
         * @returns {string}
         */
        function (
            size
        ) {
            var r = [];
            for (var
                i = 0,
                l = size || 8;
                i < l;
                i++
            ) {
                r.push(BTOA$2[Math.random() * 62 | 0]);
            }
            return fromCharCode$2(r);
        }
    );

    var _uuid = skrinkSerializer$3(
        /**
         * 
         * Returns a pseudo uuid.
         * 
         * @param {boolean} [pure] Indicates whether to return a pure uuid, if true does not contain the separator.
         * @returns {string}
         */
        function (
            pure
        ) {
            var r = "";
            for (var
                i = 0;
                i < 12;
                i++
            ) {
                r += i === 2 || i === 4 || i === 6 || i === 8 ? pure ? "" : "-" : pseudoRandomString$3(4, 16);
            }
            return r;
        }
    );

    // eslint-disable-next-line es/no-math-imul
    var imul = Math.imul || function (
        a,
        b
    ) {
        return (a * (b >>> 16) << 16) + a * (b & 0xFFFF) | 0;
    };

    /**
     * 
     * rotl32.
     * 
     * @param {number} a First number.
     * @param {number} b Second number.
     * @returns {number}
     */
    function rotl (
        a,
        b
    ) {
        return (a << b) | (a >>> (32 - b));
    }

    var _hash$1 = skrinkSerializer$3(
        /**
         * 
         * MurmurHash3.
         * 
         * @param {string} argc A utf8 string.
         * @param {number} [seed] Seed of hash.
         * @returns {number}
         */
        function (
            argc,
            seed
        ) {
            var l = argc.length;
            var m = l % 4;
            var n = l - m;
            var c1 = 0xCC9E2D51;
            var c2 = 0x1B873593;
            var h1 = seed || 0;
            var k1 = 0;
            for (var
                i = 0;
                i < n;
            ) {
                var e1 = (argc.charCodeAt(i++) & 0xFF);
                var e2 = (argc.charCodeAt(i++) & 0xFF) << 8;
                var e3 = (argc.charCodeAt(i++) & 0xFF) << 16;
                var e4 = (argc.charCodeAt(i++) & 0xFF) << 24;
                k1 = e1 | e2 | e3 | e4;
                k1 = imul(k1, c1);
                k1 = rotl(k1, 15);
                k1 = imul(k1, c2);

                h1 ^= k1;
                h1 = rotl(h1, 13);
                h1 = imul(h1, 5) + 0xE6546B64;
            }
            k1 = 0;
            switch (m) {
                case 3:
                    k1 ^= (argc.charCodeAt(i + 2) & 0xFF) << 16;
                case 2:
                    k1 ^= (argc.charCodeAt(i + 1) & 0xFF) << 8;
                case 1:
                    k1 ^= (argc.charCodeAt(i) & 0xFF);
                    k1 = imul(k1, c1);
                    k1 = rotl(k1, 15);
                    k1 = imul(k1, c2);
                    h1 ^= k1;
            }
            h1 ^= l;
            h1 ^= h1 >>> 16;
            h1 = imul(h1, 0x85EBCA6B);
            h1 ^= h1 >>> 13;
            h1 = imul(h1, 0xC2B2AE35);
            h1 ^= h1 >>> 16;
            return h1 >>> 0;
        }
    );

    var _glob = skrinkSerializer$3(
        /**
         * 
         * Create a regexp from the specified glob string.
         * 
         * @param {string} argc An glob string.
         * @returns {RegExp}
         */
        function (
            argc
        ) {
            var r = "";
            for (var
                i = 0,
                c = 0,
                p = "",
                n = "",
                g = false,
                l = argc.length;
                i < l;
                i++
            ) {
                var t = argc.charAt(i);
                switch (t) {
                    case "/":
                    case "$":
                    case "^":
                    case ".":
                    case "(":
                    case ")":
                    case "=":
                    case "!":
                    case "|":
                        r += "\\" + t;
                        break;
                    case "?":
                        r += ".";
                        break;
                    case "[":
                    case "]":
                        r += t;
                        break;
                    case "{":
                        g = true;
                        r += "(";
                        break;
                    case "}":
                        g = false;
                        r += ")";
                        break;
                    case ",":
                        if (g) {
                            r += "|";
                        } else {
                            r += "\\" + t;
                        }
                        break;
                    case "*":
                        c = 1;
                        p = argc.charAt(i - 1);
                        while (argc.charAt(i + 1) === "*") {
                            c++;
                            i++;
                        }
                        n = argc.charAt(i + 1);
                        if (c > 1
                            && (p === "/" || _isNullOrEmptyString(p))
                            && (n === "/" || _isNullOrEmptyString(n))) {
                            r += "((?:[^/]*(?:/|$))*)";
                            i++;
                        } else {
                            r += "([^/]*)";
                        }
                        break;
                    default:
                        r += t;
                        break;
                }
            }
            return new RegExp("^" + r + "$", "i");
        }
    );

    var _uniq = skrinkSerializer$3(
        /**
         * 
         * Returns the unique values in the specified array.
         * 
         * @param {Yarla.Object<T, ReadonlyArray<any>>} argc An array.
         * @returns {T}
         * @template T
         */
        function (
            argc
        ) {
            var r = [];
            for (var
                i = 0,
                l = argc.length;
                i < l;
                i++
            ) {
                var n = argc[i];
                if (r.indexOf(n) === -1) {
                    r.push(n);
                }
            }
            // @ts-ignore
            return r;
        }
    );

    var _omit = skrinkSerializer$3(
        /**
         * 
         * Returns a new object excluding the specified properties.
         * 
         * @param {any} argc An object.
         * @returns {any}
         */
        function (
            argc
        ) {
            var r = {};
            var p = _flat(arguments, 1, Infinity);
            for (var n in argc) {
                if (p.indexOf(n) === -1) {
                    r[n] = argc[n];
                }
            }
            return r;
        }
    );

    var _pick = skrinkSerializer$3(
        /**
         * 
         * Returns a new object including the specified properties.
         * 
         * @param {any} argc An object.
         * @returns {any}
         */
        function (
            argc
        ) {
            var r = {};
            var p = _flat(arguments, 1, Infinity);
            for (var n in argc) {
                if (p.indexOf(n) !== -1) {
                    r[n] = argc[n];
                }
            }
            return r;
        }
    );

    var _trampoline = skrinkSerializer$3(
        /**
         * 
         * Returns a trampoline function that resolves recursive functions exceeding the maximum call stack size.
         * 
         * @param {Yarla.Object<T, Yarla.BasicFunc>} argc A recursive function.
         * @returns {T}
         * @template T
         */
        function (argc) {
            var r;
            var ended = true;
            var accumulated = [];
            return /** @type {any} */ (skrinkSerializer$3(
                /**
                 * 
                 * @this {any}
                 */
                function () {
                    accumulated.push(_flat(arguments));
                    if (ended) {
                        ended = false;
                        while (accumulated.length > 0) {
                            r = argc.apply(this, accumulated.shift());
                        }
                        ended = true;
                        return r;
                    }
                }
            ));
        }
    );

    var _merge = skrinkSerializer$3(
        /**
         * 
         * Add or modify properties from the specified object.
         * 
         * @param {T} arg1 The target object.
         * @param {U} arg2 The source object.
         * @param {boolean} [deep] Indicates whether to deeply traverse the object.
         * @param {boolean} [onlyValid] Indicates whether to add or modify only valid properties.
         * @returns {T & U}
         * @template T, U
         */
        function (
            arg1,
            arg2,
            deep,
            onlyValid
        ) {
            var f = _trampoline(
                function (p, k, v) {
                    var s = p;
                    if (!_isNullOrUndefined(k)) {
                        if (!_isObject(p[k])) {
                            p[k] = _isArray(v) ? [] : {};
                        }
                        s = p[k];
                    }
                    for (var n in v) {
                        var d = v[n];
                        if (deep && _isObject(d)) {
                            f(s, n, d);
                        } else if (!onlyValid || _isValid(d)) {
                            s[n] = d;
                        }
                    }
                }
            );
            f(arg1, null, arg2);
            // @ts-ignore
            return arg1;
        }
    );

    var _clone = skrinkSerializer$3(
        /**
         * 
         * Clone the specified object.
         * 
         * @param {T} argc An object.
         * @param {boolean} [deep] Indicates whether to deep clone the object.
         * @param {boolean} [onlyValid] Indicates whether to clone only the valid properties of the object.
         * @returns {T}
         * @template T
         */
        function (
            argc,
            deep,
            onlyValid
        ) {
            return _merge(_isArray(argc) ? [] : {}, argc, deep, onlyValid);
        }
    );

    var _defaults$1 = skrinkSerializer$3(
        /**
         * 
         * Add non-existing properties to object from the queues object.
         * 
         * @param {any} argc The target object.
         * @returns {any}
         */
        function (
            argc
        ) {
            for (var
                i = 0,
                s = _flat(arguments, 1, Infinity, true),
                l = s.length;
                i < l;
                i++
            ) {
                _merge(argc, s[i], false, true);
            }
            return argc;
        }
    );

    /**
     * 
     * @param {string} pathname 
     * @param {boolean} [allowAboveRoot] 
     * @returns {ReadonlyArray<string>}
     */
    function separate$2 (
        pathname,
        allowAboveRoot
    ) {
        var up = 0;
        var parts = pathname.split(/[\\/]+/);
        for (var
            i = parts.length - 1;
            i >= 0;
            i--
        ) {
            var last = parts[i];
            if (last === "" ||
                last === ".") {
                parts.splice(i, 1);
            } else if (last === "..") {
                parts.splice(i, 1);
                up++;
            } else if (up) {
                parts.splice(i, 1);
                up--;
            }
        }
        if (allowAboveRoot) {
            while (up--) {
                parts.unshift("..");
            }
        }
        return parts;
    }

    var _concatUrl = (function () {
        return skrinkSerializer$3(
            function () {
                var protocol = "";
                var host = "";
                var pathname = "";
                var search = "";
                var hash = "";
                var hasRoot = false;
                var once = true;
                for (var
                    s = _flat(arguments, 0, Infinity, true),
                    l = s.length - 1,
                    i = l;
                    i >= -1;
                    i--
                ) {
                    var url;
                    if (i >= 0) {
                        url = String(s[i]);
                    } else {
                        url = "/";
                    }
                    if (url.length === 0) {
                        continue;
                    }
                    var loc = parse(url);
                    if (once) {
                        search = loc.search;
                        hash = loc.hash;
                        once = false;
                    }
                    protocol = loc.protocol;
                    host = loc.host;
                    if (!hasRoot) {
                        pathname = loc.pathname + "/" + pathname;
                    }
                    if (!protocol) {
                        hasRoot = hasRoot || url.charAt(0) === "/";
                    } else {
                        hasRoot = true;
                        break;
                    }
                }
                if (!protocol) {
                    throw new Error(message$3.INVALID_URL);
                }
                pathname = "/" + separate$2(pathname).join("/");
                return protocol + "//" + host + pathname + search + hash;
            }
        );
        /**
         * 
         * @param {string} url 
         */
        function parse(
            url
        ) {
            var match;
            var index = -1;
            var protocol = "";
            var host = "";
            var pathname = "";
            var search = "";
            var hash = "";
            if ((index = url.indexOf("#")) >= 0) {
                hash = url.slice(index);
                url = url.slice(0, index);
            }
            if ((index = url.indexOf("?")) >= 0) {
                search = url.slice(index);
                url = url.slice(0, index);
            }
            if ((match = url.match(/^([A-Za-z]+:)?\/\/([^/]*)/))) {
                protocol = match[1] || "";
                host = match[2] || "";
                pathname = url.slice(match[0].length) || "/";
            } else {
                pathname = url;
            }
            if (protocol) {
                pathname = "/" + separate$2(pathname).join("/");
            } else {
                pathname = separate$2(pathname, true).join("/");
            }
            return {
                protocol: protocol,
                host: host,
                pathname: pathname,
                search: search,
                hash: hash,
            };
        }
    }());

    var _isClass = skrinkSerializer$3(
        /**
         * 
         * Determines if the input parameter is a class.
         * 
         * @param {any} argc Any object.
         * @returns {argc is Kylin.ClassFunc}
         */
        function (
            argc
        ) {
            return _isFunction(argc) && !hasOwnProperty$3(argc, "arguments");
        }
    );

    var _isRegExp = skrinkSerializer$3(
        /**
         * 
         * Determines if the input parameter is a RegExp.
         * 
         * @param {any} argc Any object.
         * @returns {argc is RegExp}
         */
        function (
            argc
        ) {
            return _isInstanceOf(argc, RegExp);
        }
    );

    var _isNullOrEmptyArray = skrinkSerializer$3(
        /**
         * 
         * Determines if the input parameter is null or undefined or an empty array.
         * 
         * @param {any} argc Any object.
         * @returns {argc is null | undefined | ""}
         */
        function (
            argc
        ) {
            return _isNullOrUndefined(argc) || _isArray(argc) && argc.length === 0;
        }
    );

    var _isNullOrEmptyObject = skrinkSerializer$3(
        /**
         * 
         * Determines if the input parameter is null or undefined or an empty object.
         * 
         * @param {any} argc Any object.
         * @returns {argc is null | undefined | Kylin.NilObject}
         */
        function (
            argc
        ) {
            return _isNullOrUndefined(argc) || _keys(argc, true).length === 0;
        }
    );

    var _isBasic = skrinkSerializer$3(
        /**
         * 
         * Determines if the input parameter is basic type.
         * 
         * @param {any} argc Any object.
         * @returns {argc is number | string | boolean | bigint | symbol | null | undefined}
         */
        function (
            argc
        ) {
            return !_isReference(argc);
        }
    );

    var _isNaN = skrinkSerializer$3(
        // eslint-disable-next-line es/no-number-isnan
        Number.isNaN || function (
            /**
             * @type {number}
             */
            argc
        ) {
            return _isNumber(argc) && globalThis$3.isNaN(argc);
        }
    );

    var _isEqual = skrinkSerializer$3(
        /**
         * 
         * Compares two objects for equality.
         * 
         * @param {any} arg1 First object.
         * @param {any} arg2 Second object.
         * @returns {boolean}
         */
        function isEqual(
            arg1,
            arg2
        ) {
            if (arg1 === arg2) {
                return true;
            }
            if (_isNumber(arg1) && _isNumber(arg2)) {
                return (_isNaN(arg1) && _isNaN(arg2)) || arg1.valueOf() === arg2.valueOf();
            }
            if (_isString(arg1) && _isString(arg2)) {
                return arg1.valueOf() === arg2.valueOf();
            }
            if (_isBigInt(arg1) && _isBigInt(arg2)) {
                return arg1.valueOf() === arg2.valueOf();
            }
            if (_isSymbol(arg1) && _isSymbol(arg2)) {
                return arg1.valueOf() === arg2.valueOf();
            }
            if (_isBoolean(arg1) && _isBoolean(arg2)) {
                return arg1.valueOf() === arg2.valueOf();
            }
            if (_isDate(arg1) && _isDate(arg2)) {
                return arg1.valueOf() === arg2.valueOf();
            }
            if (_isRegExp(arg1) && _isRegExp(arg2)) {
                return arg1.source === arg2.source && arg1.flags === arg2.flags;
            }
            if (_isArray(arg1) && _isArray(arg2)) {
                return arg1.length === arg2.length && arg1.every(function (v, i) { return isEqual(v, arg2[i]); });
            }
            if (_isObject(arg1) && _isObject(arg2)) {
                return (function (key1, key2) { return key1.length === key2.length && key1.every(function (i) { return key2.indexOf(i) !== -1; }) && key1.every(function (i) { return isEqual(arg1[i], arg2[i]); }); }(_keys(arg1), _keys(arg2)));
            }
            return false;
        }
    );

    var _isInteger = skrinkSerializer$3(
        // eslint-disable-next-line es/no-number-isinteger
        Number.isInteger || function (
            /**
             * @type {number}
             */
            argc
        ) {
            return _isFinite(argc) && Math.floor(argc) === argc;
        }
    );

    var _isSafeInteger = skrinkSerializer$3(
        // eslint-disable-next-line es/no-number-issafeinteger
        Number.isSafeInteger || function (
            /**
             * @type {number}
             */
            argc
        ) {
            return _isInteger(argc) && Math.abs(argc) <= 0x1FFFFFFFFFFFFF;
        }
    );

    var httpHeader$2 = {
        /** @type {"Etag"} */
        ETAG: "Etag",
        /** @type {"Host"} */
        HOST: "Host",
        /** @type {"Range"} */
        RANGE: "Range",
        /** @type {"Cookie"} */
        COOKIE: "Cookie",
        /** @type {"Origin"} */
        ORIGIN: "Origin",
        /** @type {"Pragma"} */
        PRAGMA: "Pragma",
        /** @type {"Referer"} */
        REFERER: "Referer",
        /** @type {"Expires"} */
        EXPIRES: "Expires",
        /** @type {"Location"} */
        LOCATION: "Location",
        /** @type {"Authorization"} */
        AUTHORIZATION: "Authorization",
        /** @type {"Accept-Ranges"} */
        ACCEPT_RANGES: "Accept-Ranges",
        /** @type {"Accept-Encoding"} */
        ACCEPT_ENCODING: "Accept-Encoding",
        /** @type {"Accept-Language"} */
        ACCEPT_LANGUAGE: "Accept-Language",
        /** @type {"Access-Control-Allow-Credentials"} */
        ACCESS_CONTROL_ALLOW_CREDENTIALS: "Access-Control-Allow-Credentials",
        /** @type {"Access-Control-Allow-Headers"} */
        ACCESS_CONTROL_ALLOW_HEADERS: "Access-Control-Allow-Headers",
        /** @type {"Access-Control-Allow-Methods"} */
        ACCESS_CONTROL_ALLOW_METHODS: "Access-Control-Allow-Methods",
        /** @type {"Access-Control-Allow-Origin"} */
        ACCESS_CONTROL_ALLOW_ORIGIN: "Access-Control-Allow-Origin",
        /** @type {"Access-Control-Max-Age"} */
        ACCESS_CONTROL_MAX_AGE: "Access-Control-Max-Age",
        /** @type {"Content-Transfer-Encoding"} */
        CONTENT_TRANSFER_ENCODING: "Content-Transfer-Encoding",
        /** @type {"Content-Disposition"} */
        CONTENT_DISPOSITION: "Content-Disposition",
        /** @type {"Content-Encoding"} */
        CONTENT_ENCODING: "Content-Encoding",
        /** @type {"Content-Length"} */
        CONTENT_LENGTH: "Content-Length",
        /** @type {"Content-Range"} */
        CONTENT_RANGE: "Content-Range",
        /** @type {"Content-Type"} */
        CONTENT_TYPE: "Content-Type",
        /** @type {"User-Agent"} */
        USER_AGENT: "User-Agent",
        /** @type {"Cache-Control"} */
        CACHE_CONTROL: "Cache-Control",
        /** @type {"Last-Modified"} */
        LAST_MODIFIED: "Last-Modified",
        /** @type {"If-None-Match"} */
        IF_NONE_MATCH: "If-None-Match",
        /** @type {"If-Modified-Since"} */
        IF_MODIFIED_SINCE: "If-Modified-Since",
        /** @type {"WWW-Authenticate"} */
        WWW_AUTHENTICATE: "WWW-Authenticate",
        /** @type {"X-Requested-With"} */
        X_REQUESTED_WITH: "X-Requested-With",
        /** @type {"X-Responsed-Url"} */
        X_RESPONSED_URL: "X-Responsed-Url",
        /** @type {"X-Real-IP"} */
        X_REAL_IP: "X-Real-IP",
        /** @type {"X-Real-Host"} */
        X_REAL_HOST: "X-Real-Host",
        /** @type {"X-Real-Proto"} */
        X_REAL_PROTO: "X-Real-Proto",
        /** @type {"X-Forwarded-For"} */
        X_FORWARDED_FOR: "X-Forwarded-For",
        /** @type {"X-Forwarded-Host"} */
        X_FORWARDED_HOST: "X-Forwarded-Host",
        /** @type {"X-Forwarded-Proto"} */
        X_FORWARDED_PROTO: "X-Forwarded-Proto",
    };

    var httpContent$2 = {
        /** @type {"application/octet-stream"} */
        OCTET_STREAM: "application/octet-stream",
        /** @type {"application/x-msdownload"} */
        X_MSDOWNLOAD: "application/x-msdownload",
        /** @type {"application/x-www-form-urlencoded"} */
        FORM: "application/x-www-form-urlencoded",
        /** @type {"application/json"} */
        JSON: "application/json",
        /** @type {"multipart/form-data"} */
        MULT: "multipart/form-data",
        /** @type {"text/plain"} */
        TEXT: "text/plain",
    };

    /**
     * Returns true if the sequence of elements of searchString converted to a String is the
     * same as the corresponding elements of this object (converted to a String) starting at
     * position. Otherwise returns false.
     * 
     * @param {string} argc Base string.
     * @param {string} value String to search for.
     * @param {number} [position] Search starting position.
     * @returns {boolean}
     */
    function startsWith$3 (
        argc,
        value,
        position
    ) {
        for (var
            i = 0,
            p = position || 0,
            l = value.length;
            i < l;
            i++
        ) {
            if (value.charAt(i) !== argc.charAt(p + i)) {
                return false;
            }
        }
        return true;
    }

    var _isHeaders = skrinkSerializer$3(
        /**
         * 
         * Determines if the input parameter is a Headers.
         * 
         * @param {any} argc Any object.
         * @returns {argc is Headers}
         */
        function (
            argc
        ) {
            return _isInstanceOf(argc, globalThis$3.Headers);
        }
    );

    var _isJsonContent = skrinkSerializer$3(
        /**
         * 
         * @param {string | Headers | null | undefined} argc 
         */
        function (
            argc
        ) {
            return (function (argc) { return argc ? startsWith$3(argc.toLowerCase(), httpContent$2.JSON) : false; }(_isHeaders(argc) ? argc.get(httpHeader$2.CONTENT_TYPE) : argc));
        }
    );

    var _isTextContent = skrinkSerializer$3(
        /**
         * 
         * @param {string | Headers | null | undefined} argc 
         */
        function (
            argc
        ) {
            return (function (argc) { return argc ? startsWith$3(argc.toLowerCase(), httpContent$2.TEXT) : false; }(_isHeaders(argc) ? argc.get(httpHeader$2.CONTENT_TYPE) : argc));
        }
    );

    var _isURLSearchParams = skrinkSerializer$3(
        /**
         * 
         * Determines if the input parameter is a URLSearchParams.
         * 
         * @param {any} argc Any object.
         * @returns {argc is URLSearchParams}
         */
        function (
            argc
        ) {
            return _isInstanceOf(argc, globalThis$3.URLSearchParams);
        }
    );

    var _isArrayBufferView = skrinkSerializer$3(
        /**
         * 
         * Determines if the input parameter is a ArrayBufferView.
         * 
         * @param {any} argc Any object.
         * @returns {argc is ArrayBufferView}
         */
        function (
            argc
        ) {
            var ArrayBuffer = globalThis$3.ArrayBuffer;
            if (ArrayBuffer) {
                if (_isFunction(ArrayBuffer.isView)) {
                    return ArrayBuffer.isView(argc);
                }
            }
            return _isInstanceOf(argc, globalThis$3.Int8Array)
                || _isInstanceOf(argc, globalThis$3.Uint8Array)
                || _isInstanceOf(argc, globalThis$3.Uint8ClampedArray)
                || _isInstanceOf(argc, globalThis$3.Int16Array)
                || _isInstanceOf(argc, globalThis$3.Uint16Array)
                || _isInstanceOf(argc, globalThis$3.Int32Array)
                || _isInstanceOf(argc, globalThis$3.Uint32Array)
                || _isInstanceOf(argc, globalThis$3.Float32Array)
                || _isInstanceOf(argc, globalThis$3.Float64Array)
                || _isInstanceOf(argc, globalThis$3.BigInt64Array)
                || _isInstanceOf(argc, globalThis$3.BigUint64Array)
                || _isInstanceOf(argc, globalThis$3.DataView);
        }
    );

    var _isFormData = skrinkSerializer$3(
        /**
         * 
         * Determines if the input parameter is a FormData.
         * 
         * @param {any} argc Any object.
         * @returns {argc is FormData}
         */
        function (
            argc
        ) {
            return _isInstanceOf(argc, globalThis$3.FormData);
        }
    );

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
    var nodeRequire$2 = function (
        id
    ) {
        try {
            return typeof require !== "undefined" ? require( /* webpackIgnore: true */ id) : null;
        } catch (_) {
            // @ts-ignore
            return null;
        }
    };

    var stream$2 = nodeRequire$2("stream");

    var _isReadable = skrinkSerializer$3(
        /**
         * 
         * Determines if the input parameter is a stream.Readable.
         * 
         * @param {any} argc Any object.
         * @returns {argc is Headers}
         */
        function (
            argc
        ) {
            return stream$2 ? _isInstanceOf(argc, stream$2.Readable) : false;
        }
    );

    var _isWritable = skrinkSerializer$3(
        /**
         * 
         * Determines if the input parameter is a stream.Writable.
         * 
         * @param {any} argc Any object.
         * @returns {argc is Headers}
         */
        function (
            argc
        ) {
            return stream$2 ? _isInstanceOf(argc, stream$2.Writable) : false;
        }
    );

    var _isBlob = skrinkSerializer$3(
        /**
         * 
         * Determines if the input parameter is a Blob.
         * 
         * @param {any} argc Any object.
         * @returns {argc is Blob}
         */
        function (
            argc
        ) {
            return _isInstanceOf(argc, globalThis$3.Blob);
        }
    );

    /**
     * 
     * Convert the specified bytes to the specified bit.
     * 
     * @param {ArrayLike<number>} argc A bytes.
     * @param {number} sourceBit Source bit of the bytes.
     * @param {number} targetBit Target bit of the bytes.
     * @returns {ReadonlyArray<number>}
     */
    function bitConvert$2 (
        argc,
        sourceBit,
        targetBit
    ) {
        var r = [];
        var z = 0;
        var l = argc.length;
        for (var
            i = 0;
            i < l;
            i++
        ) {
            if (argc[i] !== 0) {
                break;
            }
            z++;
        }
        z = Math.min(z, l - 1);
        while ((l = argc.length) > 0) {
            var quotient = [];
            var remainder = 0;
            for (var
                i = 0;
                i < l;
                i++
            ) {
                var total = argc[i] + remainder * sourceBit;
                var digit = Math.floor(total / targetBit);
                remainder = Math.floor(total % targetBit);
                if (digit > 0 || quotient.length > 0) {
                    quotient.push(digit);
                }
            }
            r.push(remainder);
            argc = quotient;
        }
        for (var
            i = 0;
            i < z;
            i++
        ) {
            r.push(0);
        }
        return r.reverse();
    }

    var _atob = skrinkSerializer$3(
        /**
         * 
         * Decodes a utf8 string from the specified base-encoded string.
         * 
         * @param {string} argc The base-encoded string.
         * @param {boolean} [urlSafeEncoding] Indicates whether it is a URL-safe string.
         * @returns {string}
         */
        function (
            argc,
            urlSafeEncoding
        ) {
            return urlSafeEncoding ? Buffer$2.from(bitConvert$2(decodeBase(argc), 62, 256)).toString(definition$3.UTF8) : Buffer$2.from(argc, definition$3.BASE64).toString(definition$3.UTF8);
        }
    );

    /**
     * 
     * @param {string} argc
     * @returns {ReadonlyArray<number>} 
     */
    function decodeBase(
        argc
    ) {
        var r = [];
        for (var
            i = 0,
            l = argc.length;
            i < l;
            i++
        ) {
            r.push(ATOB$2[argc.charCodeAt(i)]);
        }
        return r;
    }

    var _btoa = skrinkSerializer$3(
        /**
         * 
         * Encodes a base-encoded string from the specified utf8 string.
         * 
         * @param {string} argc The utf8 string.
         * @param {boolean} [urlSafeEncoding] Indicates whether it is a URL-safe string.
         * @returns {string}
         */
        function (
            argc,
            urlSafeEncoding
        ) {
            return urlSafeEncoding ? encodeBase$2(bitConvert$2(Buffer$2.from(argc, definition$3.UTF8), 256, 62)) : Buffer$2.from(argc, definition$3.UTF8).toString(definition$3.BASE64);
        }
    );

    /**
     * 
     * @param {ReadonlyArray<number>} argc 
     * @returns {string}
     */
    function encodeBase$2(
        argc
    ) {
        var r = [];
        for (var
            i = 0,
            l = argc.length;
            i < l;
            i++
        ) {
            r.push(BTOA$2[argc[i]]);
        }
        return fromCharCode$2(r);
    }

    var _read$1 = skrinkSerializer$3(
        /**
         * 
         * @param {import("stream").Readable | ReadableStream} readable 
         * @param {number} [maximum] 
         */
        function (
            readable,
            maximum
        ) {
            var l = Math.pow(2, 30) * 4 - 1;
            var m = Math.min(maximum || l, l);
            return new Promise$4(function (resolve, reject) {
                function large() {
                    return b.reduce(function (v, i) { return v + i.length; }, 0) > m;
                }
                /** @type {Array<Uint8Array>} */
                var b = [];
                var s = _isReadable(readable) ? ReadableStream$2.from(readable) : readable;
                var r = s.getReader();
                r.closed.then(function () {
                    if (large()) {
                        throw new HttpError$2(413);
                    }
                    return Buffer$2.concat(b);
                }).then(resolve, reject);
                r.read().then(function process(v) {
                    if (v.done) {
                        return;
                    }
                    b.push(v.value);
                    if (large()) {
                        return r.cancel();
                    }
                    return r.read().then(process);
                }).catch(reject);
            });
        }
    );

    var globalThis$2 = (
        // eslint-disable-next-line no-undef
        typeof global !== "undefined" ? global :
            // eslint-disable-next-line no-undef
            typeof window !== "undefined" ? window :
                // eslint-disable-next-line no-undef
                self
    );

    /**
     * Hide function internal implementation.
     * 
     * @param {Yarla.Object<T, Yarla.BasicFunc>} constructor The function.
     * @returns {T}
     * @template T
     */
    function skrinkSerializer$2 (
        constructor
    ) {
        // @ts-ignore
        return function () { return constructor.apply(this, arguments); };
    }

    function NOOP$2 () { /** DO NOTHING */ }

    var document = globalThis$2.document || null;

    /**
     * 
     * Instantiate the specified class, and that optionally contains specified properties.
     * 
     * @param {Yarla.Proto<Yarla.Object<T>>} argc Class to be instantiated.
     * @param {Yarla.Object<P, PropertyDescriptorMap>} [properties] JavaScript object that contains one or more property descriptors.
     * @returns {Yarla.NonAny<T> & Yarla.PropertyDescriptorMapReturns<P>}
     * @template T, P
     */
    function createInstance$2 (
        argc,
        properties
    ) {
        return Object.create(argc.prototype, properties || {});
    }

    /**
     * Adds one or more properties to an object, and/or modifies attributes of existing properties.
     * 
     * @param {T} argc Object on which to add or modify the properties. This can be a native JavaScript object or a DOM object.
     * @param {Yarla.Object<P, PropertyDescriptorMap>} properties JavaScript object that contains one or more descriptor objects. Each descriptor object describes a data property or an accessor property.
     * @returns {Yarla.NonAny<T> & Yarla.PropertyDescriptorMapReturns<P>}
     * @template T, P
     */
    function defineProperties$2 (
        argc,
        properties
    ) {
        return /** @type {any} */ (Object.defineProperties(argc, properties));
    }

    /**
     * 
     * Returns a getter property descriptor.
     * 
     * @param {() => T} argc The getter of the property descriptor.
     * @param {boolean} [enumerable] Indicates whether the property is enumerable.
     * @returns {Yarla.GetterPropertyDescriptor<T>}
     * @template T
     */
    function generateGetterDescriptor$2 (
        argc,
        enumerable
    ) {
        return {
            configurable: true,
            enumerable: !!enumerable,
            get: skrinkSerializer$2(argc),
        };
    }

    /**
     * 
     * Returns a normal property descriptor.
     * 
     * @param {T} argc The value of the property descriptor.
     * @param {boolean} [enumerable] Indicates whether the property is enumerable. 
     * @param {boolean} [readonly] Indicates whether the property is readonly. 
     * @returns {Yarla.NormalPropertyDescriptor<T>}
     * @template T
     */
    function generateNormalDescriptor$2 (
        argc,
        enumerable,
        readonly
    ) {
        return {
            configurable: true,
            enumerable: !!enumerable,
            writable: !readonly,
            value: argc,
        };
    }

    /**
     * 
     * Returns a method property descriptor.
     * 
     * @param {Yarla.Object<T, Yarla.BasicFunc>} argc A function. 
     * @param {boolean} [enumerable] Indicates whether the property is enumerable.
     * @returns {Yarla.NormalPropertyDescriptor<Yarla.Object<T, Yarla.BasicFunc>>}
     * @template T
     */
    function generateMethodDescriptor$2 (
        argc,
        enumerable
    ) {
        return generateNormalDescriptor$2(skrinkSerializer$2(argc), enumerable);
    }

    var message$2 = {
        /** @type {"Invalid URL"} */
        INVALID_URL: "Invalid URL",
        /** @type {"Invalid module"} */
        INVALID_MODULE: "Invalid module",
        /** @type {"Invalid protocol"} */
        INVALID_PROTOCOL: "Invalid protocol",
        /** @type {"Invalid formatter"} */
        INVALID_FORMATTER: "Invalid formatter",
        /** @type {"Invalid result data"} */
        INVALID_RESULT_DATA: "Invalid result data",
        /** @type {"Illegal invocation"} */
        ILLEGAL_INVOCATION: "Illegal invocation",
        /** @type {"Illegal constructor"} */
        ILLEGAL_CONSTRUCTOR: "Illegal constructor",
        /** @type {"Target must be an array"} */
        TARGET_MUST_BE_AN_ARRAY: "Target must be an array",
        /** @type {"Target must be an object"} */
        TARGET_MUST_BE_AN_OBJECT: "Target must be an object",
        /** @type {"Only async is supported"} */
        ONLY_ASYNC_IS_SUPPORTED: "Only async is supported",
        /** @type {"Only used in components"} */
        ONLY_USED_IN_COMPONENTS: "Only used in components",
        /** @type {"Only numbers could inside []"} */
        ONLY_NUMBERS_COULD_INSIDE_SQUARE: "Only numbers could inside []",
        /** @type {"Only be called when state is OPEN"} */
        ONLY_BE_CALLED_WHEN_STATE_IS_OPEN: "Only be called when state is OPEN",
        /** @type {"Only be called when state is UNSENT"} */
        ONLY_BE_CALLED_WHEN_STATE_IS_UNSENT: "Only be called when state is UNSENT",
        /** @type {"Character is outside the bounds of ascii"} */
        CHARACTER_IS_OUTSIDE_THE_BOUNDS_OF_ASCII: "Character is outside the bounds of ascii",
        /** @type {"Character is outside the bounds of latin1"} */
        CHARACTER_IS_OUTSIDE_THE_BOUNDS_OF_LATIN1: "Character is outside the bounds of latin1",
        /** @type {"Self-closing elements cannot contain child nodes"} */
        SELF_CLOSING_ELEMENTS_CANNOT_CONTAIN_CHILD_NODES: "Self-closing elements cannot contain child nodes",
        /** @type {"The node to be removed is not a child of this node"} */
        FAILED_TO_EXECUTE_REMOVE: "The node to be removed is not a child of this node",
        /** @type {"The node before which the new node is to be inserted is not a child of this node"} */
        FAILED_TO_EXECUTE_INSERT: "The node before which the new node is to be inserted is not a child of this node",
        /** @type {"Please use the 'new' operator, this constructor cannot be called as a function"} */
        FAILED_TO_CONSTRUCT_INSPANCE: "Please use the 'new' operator, this constructor cannot be called as a function",
        /** @type {"Promise resolved with itself"} */
        PROMISE_RESOLVED_WITH_ITSELF: "Promise resolved with itself",
        /** @type {"Offset is outside the bounds"} */
        OFFSET_IS_OUTSIDE_THE_BOUNDS: "Offset is outside the bounds",
        /** @type {"Stream closed before ending"} */
        STREAM_CLOSED_BEFORE_ENDING: "Stream closed before ending",
        /** @type {"Expression can not be empty"} */
        EXPRESSION_CAN_NOT_BE_EMPTY: "Expression can not be empty",
        /** @type {"Must have number in []"} */
        MUST_HAVE_NUMBER_IN_SQUARE: "Must have number in []",
        /** @type {"Redirect exceeds maximum"} */
        REDIRECT_EXCEEDS_MAXIMUM: "Redirect exceeds maximum",
        /** @type {"Not implemented"} */
        NOT_IMPLEMENTED: "Not implemented",
        /** @type {"Not supported"} */
        NOT_SUPPORTED: "Not supported",
        /** @type {"Timeout"} */
        TIMEOUT: "Timeout",
        /** @type {"Abort"} */
        ABORT: "Abort",
    };

    /**
     * 
     * @param {Yarla.BasicFunc} argc 
     * @param {Yarla.Proto<any>} constructor 
     * @returns {Yarla.BasicFunc}
     */
    function legalSerializer$2 (
        argc,
        constructor
    ) {
        return skrinkSerializer$2(
            /**
             * @this {any}
             */
            function () {
                if (this instanceof constructor) {
                    return argc.apply(this, arguments);
                }
                throw new TypeError(message$2.ILLEGAL_INVOCATION);
            }
        );
    }

    /**
     * 
     * @param {PropertyDescriptorMap} argc 
     * @param {Yarla.Proto<any>} constructor 
     * @returns {PropertyDescriptorMap}
     */
    function legalDescriptors$2 (
        argc,
        constructor
    ) {
        /** @type {PropertyDescriptorMap} */
        var descriptors = {};
        for (var i in argc) {
            /** @type {PropertyDescriptor} */
            var os = {};
            var sn = argc[i];
            var get = sn.get;
            var set = sn.set;
            var value = sn.value;
            var writable = sn.writable;
            var enumerable = sn.enumerable;
            var configurable = sn.configurable;
            if (typeof writable === "boolean") {
                os.writable = writable;
            }
            if (typeof enumerable === "boolean") {
                os.enumerable = enumerable;
            }
            if (typeof configurable === "boolean") {
                os.configurable = configurable;
            }
            if (typeof get === "function") {
                os.get = legalSerializer$2(get, constructor);
            }
            if (typeof set === "function") {
                os.set = legalSerializer$2(set, constructor);
            }
            if ("value" in sn) {
                os.value = typeof value === "function" ? legalSerializer$2(value, constructor) : value;
            }
            descriptors[i] = os;
        }
        return descriptors;
    }

    /**
     * Adds a property to an object, or modifies attributes of an existing property.
     * 
     * @param {T} argc Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object.
     * @param {Yarla.Object<N, PropertyKey>} property The property name.
     * @param {Yarla.Object<P, PropertyDescriptor>} descriptor Descriptor for the property. It can be for a data property or an accessor property.
     * @returns {Yarla.NonAny<T> & { readonly [K in N]: Yarla.PropertyDescriptorReturns<P>; }}
     * @template T, N, P
     */
    function defineProperty$2 (
        argc,
        property,
        descriptor
    ) {
        // @ts-ignore
        return Object.defineProperty(argc, property, descriptor);
    }

    /**
     * Sets the prototype of a specified object.
     * 
     * @param {any} argc The object to change its prototype.
     * @param {object | null} proto The value of the new prototype or null.
     * @returns {any}
     */
    function setPrototypeOf$2 (
        argc,
        proto
    ) {
        // @ts-ignore
        // eslint-disable-next-line es/no-object-setprototypeof
        if (Object.setPrototypeOf) {
            // @ts-ignore
            // eslint-disable-next-line es/no-object-setprototypeof
            return Object.setPrototypeOf(argc, proto);
        }
        return defineProperty$2(argc, "__proto__", generateNormalDescriptor$2(proto));
    }

    /**
     * 
     * Returns a pseudorandom string.
     * 
     * @param {number} length The length of string.
     * @param {number} radix The system of numeration.
     * @returns {string}
     */
    function pseudoRandomString$2 (
        length,
        radix
    ) {
        return Math.floor((1 + Math.random()) * Math.pow(radix, length)).toString(radix).slice(1);
    }

    var Symbol$2 = (function (Symbol, exports) {
        return defineProperties$2(Symbol, {
            for: generateNormalDescriptor$2(
                Symbol.for || skrinkSerializer$2(
                    /**
                     * 
                     * @param {string} key 
                     * @returns {symbol}
                     */
                    function (
                        key
                    ) {
                        return exports[key] = exports[key] || Symbol(key);
                    }
                )
            ),
        });
    }(globalThis$2.Symbol || skrinkSerializer$2(
        /**
         * 
         * @param {string | number} [description] 
         * @returns {any}
         */
        function (
            description
        ) {
            return "[[" + description + ":" + pseudoRandomString$2(6, 36) + "]]";
        }
    ), {}));

    /**
     * 
     * Create a class.
     * 
     * @param {Yarla.Object<T, Yarla.BasicFunc>} constructor The class constructor.
     * @param {Yarla.Object<P, PropertyDescriptorMap>} properties JavaScript object that contains one or more descriptor objects. Each descriptor object describes a data property or an accessor property.
     * @param {Yarla.Object<S, Yarla.Proto>} superClass The super class of the class.
     * @param {string} [name] The class name.
     * @returns {Yarla.ClassFunc<Yarla.Parameters<T>, Yarla.InstanceType<T> & Yarla.PropertyDescriptorMapReturns<P> & Yarla.InstanceType<S>>}
     * @template T, P, S
     */
    function generateClass$2 (
        constructor,
        properties,
        superClass,
        name
    ) {
        /** @type {Yarla.Proto<any>} */
        var WrapConstructor = skrinkSerializer$2(
            /**
             * @this {any}
             */
            function () {
                if (this instanceof WrapConstructor) {
                    return constructor.apply(defineProperty$2(this, Symbol$2.for("Yarla.Super.constructor"), generateNormalDescriptor$2(WrapConstructor)), arguments);
                }
                throw new Error(message$2.FAILED_TO_CONSTRUCT_INSPANCE);
            }
        );
        // @ts-ignore
        WrapConstructor.prototype = defineProperties$2(createInstance$2(superClass, {
            constructor: generateNormalDescriptor$2(WrapConstructor),
        }), legalDescriptors$2(properties, WrapConstructor));
        if (name) {
            defineProperty$2(WrapConstructor, "name", generateNormalDescriptor$2(name, false, true));
            if (Symbol$2.toStringTag) {
                defineProperty$2(WrapConstructor.prototype, Symbol$2.toStringTag, generateNormalDescriptor$2(name, false, true));
            }
        }
        // @ts-ignore
        return setPrototypeOf$2(WrapConstructor, superClass);
    }

    /**
     * 
     * Returns the class name of the specified object.
     * 
     * @param {any} argc The object whose class name needs to be queried.
     * @returns {string}
     */
    function className$2 (
        argc
    ) {
        return Object.prototype.toString.call(argc).slice(8, -1);
    }

    var isUndefined$2 = skrinkSerializer$2(
        /**
         * 
         * Determines if the input parameter is undefined.
         * 
         * @param {any} argc Any object.
         * @returns {argc is undefined}
         */
        function (
            argc
        ) {
            return argc === void 0;
        }
    );

    var isNull$2 = skrinkSerializer$2(
        /**
         * 
         * Determines if the input parameter is null.
         * 
         * @param {any} argc Any object.
         * @returns {argc is null}
         */
        function (
            argc
        ) {
            return argc === null;
        }
    );

    var isNullOrUndefined$2 = skrinkSerializer$2(
        /**
         * 
         * Determines if the input parameter is null or undefined.
         * 
         * @param {any} argc Any object.
         * @returns {argc is null | undefined}
         */
        function (
            argc
        ) {
            return isNull$2(argc) || isUndefined$2(argc);
        }
    );

    var isReference$2 = skrinkSerializer$2(
        /**
         * Determines if the input parameter is reference type.
         * 
         * @param {any} argc Any object.
         * @returns {boolean}
         */
        function (
            argc
        ) {
            return Object(argc) === argc;
        }
    );

    var isInstanceOf$2 = skrinkSerializer$2(
        /**
         * 
         * Determines if the input parameter is an instance of the specified class.
         * 
         * @param {any} argc Any object.
         * @param {Yarla.Proto<T>} constructor The class.
         * @returns {argc is T}
         * @template T
         */
        function (
            argc,
            constructor
        ) {
            return isReference$2(constructor) && argc instanceof constructor;
        }
    );

    var isFunction$2 = skrinkSerializer$2(
        /**
         * 
         * Determines if the input parameter is a function.
         * 
         * @param {any} argc Any object.
         * @returns {argc is Kylin.BasicFunc}
         */
        function (
            argc
        ) {
            return typeof argc === "function";
        }
    );

    var isObject$2 = skrinkSerializer$2(
        /**
         * 
         * Determines if the input parameter is an object, exclude null.
         * 
         * @param {any} argc Any object.
         * @param {boolean} [strict] Indicates if it is a strict object. 
         * @returns {argc is object}
         */
        function (
            argc,
            strict
        ) {
            return strict ? className$2(argc) === "Object" : !isNull$2(argc) && typeof argc === "object";
        }
    );

    var definition$2 = {
        /** @type {"br"} */
        BR: "br",
        /** @type {"hex"} */
        HEX: "hex",
        /** @type {"md5"} */
        MD5: "md5",
        /** @type {"gzip"} */
        GZIP: "gzip",
        /** @type {"utf8"} */
        UTF8: "utf8",
        /** @type {"ascii"} */
        ASCII: "ascii",
        /** @type {"base64"} */
        BASE64: "base64",
        /** @type {"latin1"} */
        LATIN1: "latin1",
        /** @type {"sha256"} */
        SHA256: "sha256",
        /** @type {"deflate"} */
        DEFLATE: "deflate",
        /** @type {"pending"} */
        PENDING: "pending",
        /** @type {"rejected"} */
        REJECTED: "rejected",
        /** @type {"fulfilled"} */
        RESOLVED: "fulfilled",
        /** @type {"development"} */
        DEVELOPMENT: "development",
        /** @type {"https:"} */
        HTTPS: "https:",
        /** @type {"http:"} */
        HTTP: "http:",
    };

    var setTimeout$2 = globalThis$2.setTimeout;

    var setImmediate$2 = globalThis$2.setImmediate || globalThis$2.requestAnimationFrame || function ( /** @type {any} */ argc) { return setTimeout$2(argc, 1000 / 60); };

    /**
     * Returns the prototype of an object.
     * 
     * @param {any} argc The object that references the prototype.
     * @returns {any}
     */
    function getPrototypeOf$2 (
        argc
    ) {
        // @ts-ignore
        // eslint-disable-next-line es/no-object-setprototypeof
        if (Object.setPrototypeOf) {
            // @ts-ignore
            return Object.getPrototypeOf(argc);
        }
        return argc.__proto__ || Object.getPrototypeOf(argc);
    }

    var isArray$2 = skrinkSerializer$2(
        /**
         * 
         * Determines if the input parameter is an array.
         * 
         * @param {any} argc Any object.
         * @returns {argc is any[]}
         */
        function (
            argc
        ) {
            return Array.isArray(argc);
        }
    );

    var isNumber$2 = skrinkSerializer$2(
        /**
         * 
         * Determines if the input parameter is a number.
         * 
         * @param {any} argc Any object.
         * @returns {argc is number}
         */
        function (
            argc
        ) {
            return typeof argc === "number" || isInstanceOf$2(argc, Number);
        }
    );

    var isFinite$2 = skrinkSerializer$2(
        // eslint-disable-next-line es/no-number-isfinite
        Number.isFinite || function (
            /**
             * @type {number}
             */
            argc
        ) {
            return isNumber$2(argc) && globalThis$2.isFinite(argc);
        }
    );

    var isDate$2 = skrinkSerializer$2(
        /**
         * 
         * Determines if the input parameter is a Date.
         * 
         * @param {any} argc Any object.
         * @returns {argc is Date}
         */
        function (
            argc
        ) {
            return isInstanceOf$2(argc, Date);
        }
    );

    var isValid$2 = skrinkSerializer$2(
        /**
         * 
         * Determines if the input parameter is valid.
         * 
         * @param {any} argc An object.
         * @returns {boolean}
         */
        function (
            argc
        ) {
            return isNumber$2(argc) ? isFinite$2(argc) : isDate$2(argc) ? isFinite$2(argc.getTime()) : !isNullOrUndefined$2(argc);
        }
    );

    var flat$2 = skrinkSerializer$2(
        /**
         * 
         * Convert an array from an array-like.
         * 
         * @param {ArrayLike<T>} argc A array-like.
         * @param {number} [start] The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.
         * @param {number} [depth] Indicates whether to flatten the multidimensional array.
         * @param {boolean} [valid] Indicates whether to remove invalid items from the array.
         * @returns {FlatArray<NonNullable<T>[], 20>[]}
         * @template T
         */
        function (
            argc,
            start,
            depth,
            valid
        ) {
            var r = Array.prototype.slice.call(argc, start || 0);
            if (depth) {
                r = (function flat(argc, d) {
                    var r = [];
                    for (var
                        i = 0,
                        l = argc.length;
                        i < l;
                        i++
                    ) {
                        var n = argc[i];
                        if (d < depth && isArray$2(n)) {
                            r = r.concat(flat(n, d + 1));
                        } else {
                            r.push(n);
                        }
                    }
                    return r;
                }(r, 0));
            }
            if (valid) {
                r = r.filter(isValid$2);
            }
            return r;
        }
    );

    /**
     * 
     * Resolve a property expression. Returns the property array.
     * 
     * @param {string} argc A property expression.
     * @returns {Array<string | number>}
     */
    function divideExpression$2 (
        argc
    ) {
        var t = "";
        var r = [];
        for (var
            i = 0,
            e = 0,
            o = 0,
            a = 48,
            b = 57,
            inSquare = false,
            isNumber = false,
            l = argc.length;
            i < l;
            i++
        ) {
            var c = argc.charAt(i);
            if (c === "\\") {
                if (i + 1 < l && (
                    argc.charAt(i + 1) === "." ||
                    argc.charAt(i + 1) === "[" ||
                    argc.charAt(i + 1) === "]")
                ) {
                    t += argc.charAt(++i);
                } else {
                    t += c;
                }
            } else if (c === ".") {
                if (t) {
                    r.push(t);
                    t = "";
                }
            } else if (c === "[") {
                if (t) {
                    r.push(t);
                    t = "";
                }
                inSquare = true;
                isNumber = false;
            } else if (c === "]") {
                if (!isNumber) {
                    throw new Error(message$2.MUST_HAVE_NUMBER_IN_SQUARE + ": " + argc);
                }
                inSquare = false;
                r.push(o);
                o = 0;
            } else if (inSquare) {
                e = c.charCodeAt(0);
                if (e < a || e > b) {
                    throw new Error(message$2.ONLY_NUMBERS_COULD_INSIDE_SQUARE + ": " + argc);
                }
                isNumber = true;
                o = 10 * o + e - a;
            } else {
                t += c;
            }
        }
        if (t) {
            r.push(t);
        }
        if (r.length === 0) {
            throw new Error(message$2.EXPRESSION_CAN_NOT_BE_EMPTY);
        }
        return r;
    }

    /**
     * Determines whether an object has a property with the specified name.
     * 
     * @param {any} argc An object.
     * @param {PropertyKey} property A property name.
     * @returns {boolean}
     */
    function hasOwnProperty$2 (
        argc,
        property
    ) {
        return Object.prototype.hasOwnProperty.call(argc, property);
    }

    var isString$2 = skrinkSerializer$2(
        /**
         * 
         * Determines if the input parameter is a string.
         * 
         * @param {any} argc Any object.
         * @returns {argc is string}
         */
        function (
            argc
        ) {
            return typeof argc === "string" || isInstanceOf$2(argc, String);
        }
    );

    var has$2 = skrinkSerializer$2(
        /**
         * 
         * Determines whether an object contains the specified property.
         * 
         * @param {any} argc An object.
         * @param {Yarla.PropertyExpr} expr The property expression.
         * @returns {boolean}
         */
        function (
            argc,
            expr
        ) {
            var t = argc;
            for (var
                i = 0,
                s = isString$2(expr) ? divideExpression$2(expr) : expr,
                l = s.length;
                i < l;
                i++
            ) {
                if (!isReference$2(t) ||
                    !hasOwnProperty$2(t, s[i])) {
                    return false;
                }
                t = t[s[i]];
            }
            return true;
        }
    );

    var get$2 = skrinkSerializer$2(
        /**
         * 
         * Returns the value of a specified property of an object.
         *  
         * @param {any} argc An object.
         * @param {Yarla.PropertyExpr} expr The property expression.
         * @param {T} [defaultValue] The default value when the value is null or undefined. 
         * @returns {T}
         * @template T
         */
        function (
            argc,
            expr,
            defaultValue
        ) {
            var t = argc;
            for (var
                i = 0,
                s = isString$2(expr) ? divideExpression$2(expr) : expr,
                l = s.length;
                i < l;
                i++
            ) {
                if (isNullOrUndefined$2(t)) {
                    t = void 0;
                    break;
                }
                t = t[s[i]];
            }
            if (isNullOrUndefined$2(t) && arguments.length > 2) {
                t = defaultValue;
            }
            return t;
        }
    );

    var set$2 = skrinkSerializer$2(
        /**
         * 
         * Sets the value of a specified property of an object.
         * 
         * @param {any} argc An object.
         * @param {Yarla.PropertyExpr} expr The property expression.
         * @param {T} value The value of the specified property of an object.
         * @returns {T}
         * @template T
         */
        function (
            argc,
            expr,
            value
        ) {
            var t = argc, p;
            for (var
                i = 0,
                m = argc,
                s = isString$2(expr) ? divideExpression$2(expr) : expr,
                l = s.length;
                i < l;
                i++
            ) {
                var n = s[i];
                if (isNumber$2(n)) {
                    if (!isArray$2(m)) {
                        if (i === 0) {
                            throw new Error(message$2.TARGET_MUST_BE_AN_ARRAY);
                        } else {
                            // @ts-ignore
                            m = t[p] = [];
                        }
                    }
                } else {
                    if (!isObject$2(m)) {
                        if (i === 0) {
                            throw new Error(message$2.TARGET_MUST_BE_AN_OBJECT);
                        } else {
                            // @ts-ignore
                            m = t[p] = {};
                        }
                    }
                }
                p = n;
                t = m;
                m = t[p];
            }
            return isNullOrUndefined$2(p) ? value : t[p] = value;
        }
    );

    var WeakMap$2 = (function (WeakMap) {
        return WeakMap = WeakMap || generateClass$2(
            /**
             * 
             * @this {WeakMap}
             * @param {ReadonlyArray<[object, any]>} [entries]
             */
            function (entries) {
                defineProperty$2(this, "k", generateNormalDescriptor$2(Symbol$2("WeakMap")));
                if (entries) {
                    for (var
                        i = 0,
                        l = entries.length;
                        i < l;
                        i++
                    ) {
                        this.set(entries[i][0], entries[i][1]);
                    }
                }
                return this;
            },
            {
                delete: generateMethodDescriptor$2(
                    /**
                     *
                     * @this {any}
                     * @param {object} key
                     * @returns {boolean}
                     */
                    function (key) {
                        return hasOwnProperty$2(key, this.k) ? delete key[this.k] : false;
                    }
                ),
                has: generateMethodDescriptor$2(
                    /**
                     *
                     * @this {any}
                     * @param {object} key
                     * @returns {boolean}
                     */
                    function (key) {
                        return hasOwnProperty$2(key, this.k);
                    }
                ),
                get: generateMethodDescriptor$2(
                    /**
                     *
                     * @this {any}
                     * @param {object} key
                     * @returns {any}
                     */
                    function (key) {
                        return hasOwnProperty$2(key, this.k) ? key[this.k] : void 0;
                    }
                ),
                set: generateMethodDescriptor$2(
                    /**
                     *
                     * @this {any}
                     * @param {object} key
                     * @param {any} value
                     * @returns {WeakMap}
                     */
                    function (key, value) {
                        return defineProperty$2(key, this.k, generateNormalDescriptor$2(value)), this;
                    }
                ),
            },
            NOOP$2
        );
    }(globalThis$2.WeakMap));

    var Reflect$2 = (function () {
        /**
         *
         * @param {any} target
         * @param {Yarla.PropertyExpr} expr
         * @returns {boolean}
         */
        function _has(
            target,
            expr
        ) {
            return maps.has(target) ? has$2(maps.get(target), expr) : false;
        }
        /**
         *
         * @param {any} argc
         * @param {Yarla.PropertyExpr} expr
         * @returns {any}
         */
        function _get(
            argc,
            expr
        ) {
            if (maps.has(argc)) {
                return get$2(maps.get(argc), expr);
            }
            throw new Error(message$2.ILLEGAL_INVOCATION);
        }
        /**
         *
         * @param {any} target
         * @param {Yarla.PropertyExpr} expr
         * @param {T} value
         * @returns {T}
         * @template T
         */
        function _set(
            target,
            expr,
            value
        ) {
            var item;
            if (maps.has(target)) {
                item = maps.get(target);
            } else {
                maps.set(target, item = {});
            }
            return set$2(item, expr, value);
        }
        /**
         *
         * @param {any} target
         * @returns {boolean}
         */
        function _delete(
            target
        ) {
            return maps.delete(target);
        }
        /**
         * 
         * @param {any} target
         * @param {PropertyKey} [propertyKey]
         * @returns {any}
         */
        function _getInternal(
            target,
            propertyKey
        ) {
            return _get(target, expr.INTERNAL.concat(isNullOrUndefined$2(propertyKey) ? [] : [propertyKey]));
        }
        /**
         * 
         * @param {any} target
         * @param {PropertyKey} [propertyKey]
         * @returns {boolean}
         */
        function _hasInternal(
            target,
            propertyKey
        ) {
            return _has(target, expr.INTERNAL.concat(isNullOrUndefined$2(propertyKey) ? [] : [propertyKey]));
        }
        /**
         *
         * @param {T} target
         * @param {any} value
         * @param {PropertyKey} [propertyKey]
         * @returns {T}
         * @template T
         */
        function _defineInternal(
            target,
            value,
            propertyKey
        ) {
            return _set(target, expr.INTERNAL.concat(isNullOrUndefined$2(propertyKey) ? [] : [propertyKey]), value), target;
        }
        /**
         * 
         * @param {any} target
         * @param {PropertyKey} [metadataKey]
         * @returns {any}
         */
        function _getMetadata(
            target,
            metadataKey
        ) {
            return _get(target, expr.METADATA.concat(isNullOrUndefined$2(metadataKey) ? [] : [metadataKey]));
        }
        /**
         * 
         * @param {any} target
         * @param {PropertyKey} [metadataKey]
         * @returns {boolean}
         */
        function _hasMetadata(
            target,
            metadataKey
        ) {
            return _has(target, expr.METADATA.concat(isNullOrUndefined$2(metadataKey) ? [] : [metadataKey]));
        }
        /**
         *
         * @param {T} target
         * @param {any} value
         * @param {PropertyKey} [metadataKey]
         * @returns {T}
         * @template T
         */
        function _defineMetadata(
            target,
            value,
            metadataKey
        ) {
            return _set(target, expr.METADATA.concat(isNullOrUndefined$2(metadataKey) ? [] : [metadataKey]), value), target;
        }
        /**
         *
         * @param {Yarla.Object<T>} argc
         * @param {Yarla.PropertyExpr} expr
         * @param {(this: Yarla.Object<T>) => R} initialize
         * @returns {R}
         * @template T, R
         */
        function _once(
            argc,
            expr,
            initialize
        ) {
            var item;
            if (maps.has(argc)) {
                item = maps.get(argc);
            } else {
                maps.set(argc, item = {});
            }
            if (has$2(item, expr)) {
                return get$2(item, expr);
            }
            return set$2(item, expr, initialize.call(argc));
        }
        /**
         * 
         * @param {Yarla.Proto} constructor 
         * @param {any} internalValue 
         * @returns {any}
         */
        function _construct(
            constructor,
            internalValue
        ) {
            return _defineInternal(createInstance$2(constructor), internalValue);
        }
        /**
         * 
         * @param {Yarla.Object<T, ArrayLike<number>>} target 
         * @param {number} [bit] 
         * @returns {T}
         * @template T
         */
        function _initTyped(
            target,
            bit
        ) {
            for (var
                i = 0,
                l = target.length;
                i < l;
                i++
            ) {
                defineProperty$2(target, i, function (i) {
                    return {
                        enumerable: true,
                        get: skrinkSerializer$2(
                            /**
                             * @this {any}
                             */
                            function () {
                                return _getInternal(this)[i] & (bit || 0xFF);
                            }
                        ),
                        set: skrinkSerializer$2(
                            /**
                             * @this {any}
                             */
                            function (v) {
                                return _getInternal(this)[i] = (bit || 0xFF) & v;
                            }
                        ),
                    };
                }(i));
            }
            // @ts-ignore
            return Object.seal(target);
        }
        /**
         * 
         * @param {any} target 
         * @returns {any}
         */
        function _callSuper(
            target
        ) {
            return (function (constructor) {
                return skrinkSerializer$2(
                    /**
                     * @this {any}
                     */
                    function () {
                        return Reflect ? Reflect.construct(constructor, arguments, getPrototypeOf$2(this).constructor) : constructor.apply(this, arguments);
                    }
                );
            }(getPrototypeOf$2(get$2(target, [Symbol$2.for("Yarla.Super.constructor")])))).apply(target, flat$2(arguments, 1));
        }
        var maps = new WeakMap$2();
        var expr = {
            /** @type {ReadonlyArray<PropertyKey>} */
            IE: [Symbol$2.for("Yarla.IE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            IP: [Symbol$2.for("Yarla.IP")],
            /** @type {ReadonlyArray<PropertyKey>} */
            UA: [Symbol$2.for("Yarla.UA")],
            /** @type {ReadonlyArray<PropertyKey>} */
            BODY: [Symbol$2.for("Yarla.BODY")],
            /** @type {ReadonlyArray<PropertyKey>} */
            HOST: [Symbol$2.for("Yarla.HOST")],
            /** @type {ReadonlyArray<PropertyKey>} */
            QUEUE: [Symbol$2.for("Yarla.QUEUE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            RANGE: [Symbol$2.for("Yarla.RANGE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            STATE: [Symbol$2.for("Yarla.STATE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            THROW: [Symbol$2.for("Yarla.THROW")],
            /** @type {ReadonlyArray<PropertyKey>} */
            VALUE: [Symbol$2.for("Yarla.VALUE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            LENGTH: [Symbol$2.for("Yarla.LENGTH")],
            /** @type {ReadonlyArray<PropertyKey>} */
            METHOD: [Symbol$2.for("Yarla.METHOD")],
            /** @type {ReadonlyArray<PropertyKey>} */
            ORIGIN: [Symbol$2.for("Yarla.ORIGIN")],
            /** @type {ReadonlyArray<PropertyKey>} */
            SEARCH: [Symbol$2.for("Yarla.SEARCH")],
            /** @type {ReadonlyArray<PropertyKey>} */
            COOKIES: [Symbol$2.for("Yarla.COOKIES")],
            /** @type {ReadonlyArray<PropertyKey>} */
            HEADERS: [Symbol$2.for("Yarla.HEADERS")],
            /** @type {ReadonlyArray<PropertyKey>} */
            REFERER: [Symbol$2.for("Yarla.REFERER")],
            /** @type {ReadonlyArray<PropertyKey>} */
            VERSION: [Symbol$2.for("Yarla.VERSION")],
            /** @type {ReadonlyArray<PropertyKey>} */
            BOUNDARY: [Symbol$2.for("Yarla.BOUNDARY")],
            /** @type {ReadonlyArray<PropertyKey>} */
            METADATA: [Symbol$2.for("Yarla.METADATA")],
            /** @type {ReadonlyArray<PropertyKey>} */
            MIMETYPE: [Symbol$2.for("Yarla.MIMETYPE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            PATHNAME: [Symbol$2.for("Yarla.PATHNAME")],
            /** @type {ReadonlyArray<PropertyKey>} */
            PROTOCOL: [Symbol$2.for("Yarla.PROTOCOL")],
            /** @type {ReadonlyArray<PropertyKey>} */
            ENCODING: [Symbol$2.for("Yarla.ENCODING")],
            /** @type {ReadonlyArray<PropertyKey>} */
            LANGUAGE: [Symbol$2.for("Yarla.LANGUAGE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            INTERNAL: [Symbol$2.for("Yarla.INTERNAL")],
            /** @type {ReadonlyArray<PropertyKey>} */
            INSTANCE: [Symbol$2.for("Yarla.INSTANCE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            RENDERER: [Symbol$2.for("Yarla.RENDERER")],
            /** @type {ReadonlyArray<PropertyKey>} */
            VALIDATE: [Symbol$2.for("Yarla.VALIDATE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            CLASS_MANAGER: [Symbol$2.for("Yarla.CLASS.MANAGER")],
            /** @type {ReadonlyArray<PropertyKey>} */
            EVENT_CAPTURE: [Symbol$2.for("Yarla.EVENT.CAPTURE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            EVENT_GENERAL: [Symbol$2.for("Yarla.EVENT.GENERAL")],
            /** @type {ReadonlyArray<PropertyKey>} */
            EVENT_OBSERVE: [Symbol$2.for("Yarla.EVENT.OBSERVE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            STOP_AFTERWARD: [Symbol$2.for("Yarla.STOP.AFTERWARD")],
            /** @type {ReadonlyArray<PropertyKey>} */
            STOP_IMMEDIATE: [Symbol$2.for("Yarla.STOP.IMMEDIATE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            TICK_PREVENTED: [Symbol$2.for("Yarla.TICK.PREVENTED")],
        };
        var Reflect = globalThis$2.Reflect;
        return {
            get expr() {
                return expr;
            },
            has: skrinkSerializer$2(_has),
            get: skrinkSerializer$2(_get),
            set: skrinkSerializer$2(_set),
            delete: skrinkSerializer$2(_delete),
            getInternal: skrinkSerializer$2(_getInternal),
            hasInternal: skrinkSerializer$2(_hasInternal),
            defineInternal: skrinkSerializer$2(_defineInternal),
            getMetadata: skrinkSerializer$2(_getMetadata),
            hasMetadata: skrinkSerializer$2(_hasMetadata),
            defineMetadata: skrinkSerializer$2(_defineMetadata),
            once: skrinkSerializer$2(_once),
            construct: skrinkSerializer$2(_construct),
            initTyped: skrinkSerializer$2(_initTyped),
            callSuper: skrinkSerializer$2(_callSuper),
            BASE: skrinkSerializer$2(
                function () {
                    throw new Error(message$2.ILLEGAL_CONSTRUCTOR);
                }
            ),
        };
    }());

    var Promise$3 = (function (Promise) {
        return Promise = Promise || defineProperties$2(generateClass$2(
            /**
             * 
             * @this {any}
             * @param {Yarla.BasicFunc} processor 
             */
            function (processor) {
                Reflect$2.set(this, Reflect$2.expr.STATE, definition$2.PENDING);
                Reflect$2.set(this, Reflect$2.expr.VALUE, void 0);
                Reflect$2.set(this, Reflect$2.expr.THROW, true);
                Reflect$2.set(this, Reflect$2.expr.QUEUE, []);
                try {
                    processor(
                        fixed(this, definition$2.RESOLVED),
                        fixed(this, definition$2.REJECTED));
                } catch (error) {
                    solve(this, definition$2.REJECTED, error);
                }
                return this;
            },
            {
                finally: generateMethodDescriptor$2(
                    /**
                     * 
                     * @this {PromiseLike<any>}
                     * @param {Yarla.BasicFunc} onfinally 
                     */
                    function (onfinally) {
                        return this.then(
                            function (value) { return Promise.resolve(onfinally()).then(function () { return value; }); },
                            function (error) { return Promise.resolve(onfinally()).then(function () { throw error; }); });
                    }
                ),
                catch: generateMethodDescriptor$2(
                    /**
                     * 
                     * @this {PromiseLike<any>}
                     * @param {Yarla.BasicFunc} onrejected 
                     */
                    function (onrejected) {
                        return this.then(null, onrejected);
                    }
                ),
                then: generateMethodDescriptor$2(
                    /**
                     * 
                     * @this {any}
                     * @param {Yarla.BasicFunc} onresolved 
                     * @param {Yarla.BasicFunc} onrejected 
                     */
                    function (onresolved, onrejected) {
                        var item = new Promise(NOOP$2);
                        var done = onresolved || function (value) { return value; };
                        var fail = onrejected || function (error) { throw error; };
                        Reflect$2.set(this, Reflect$2.expr.THROW, false);
                        switch (Reflect$2.get(this, Reflect$2.expr.STATE)) {
                            case definition$2.PENDING:
                                Reflect$2.get(this, Reflect$2.expr.QUEUE).push(item, done, fail);
                                break;
                            case definition$2.RESOLVED:
                                track(item, Reflect$2.get(this, Reflect$2.expr.VALUE), done);
                                break;
                            case definition$2.REJECTED:
                                track(item, Reflect$2.get(this, Reflect$2.expr.VALUE), fail);
                                break;
                        }
                        return item;
                    }
                ),
            },
            NOOP$2
        ), {
            resolve: generateMethodDescriptor$2(
                /**
                 * 
                 * @param {any} value 
                 */
                function (value) {
                    return new Promise(function (resolve) { resolve(value); });
                }
            ),
            reject: generateMethodDescriptor$2(
                /**
                 * 
                 * @param {any} error 
                 */
                function (error) {
                    return new Promise(function (_, reject) { reject(error); });
                }
            ),
            race: generateMethodDescriptor$2(
                /**
                 * 
                 * @param {ReadonlyArray<any>} tasks 
                 */
                function (tasks) {
                    return new Promise(function (resolve, reject) {
                        if (tasks.length > 0) {
                            tasks.forEach(function (value) {
                                Promise.resolve(value).then(resolve, reject);
                            });
                        } else {
                            resolve(void 0);
                        }
                    });
                }
            ),
            all: generateMethodDescriptor$2(
                /**
                 * 
                 * @param {ReadonlyArray<any>} tasks 
                 */
                function (tasks) {
                    return new Promise(function (resolve, reject) {
                        if (tasks.length > 0) {
                            var n = 0;
                            var l = tasks.length;
                            var r = new Array(l);
                            tasks.forEach(function (value, i) {
                                Promise.resolve(value).then(function (value) {
                                    r[i] = value;
                                    if (++n === l) {
                                        resolve(r);
                                    }
                                }, reject);
                            });
                        } else {
                            resolve([]);
                        }
                    });
                }
            ),
        });
        /**
         *
         * @param {PromiseLike<any>} target
         * @param {"pending" | "rejected" | "fulfilled"} state
         */
        function fixed(target, state) {
            return skrinkSerializer$2(function (value) {
                solve(target, state, value);
            });
        }
        /**
         *
         * @param {PromiseLike<any>} target
         * @param {"pending" | "rejected" | "fulfilled"} state
         * @param {any} value
         */
        function solve(target, state, value) {
            if (Reflect$2.get(target, Reflect$2.expr.STATE) === definition$2.PENDING) {
                if (target === value) {
                    state = definition$2.REJECTED;
                    value = new Error(message$2.PROMISE_RESOLVED_WITH_ITSELF);
                } else if (isInstanceOf$2(value, Promise)) {
                    if (Reflect$2.get(value, Reflect$2.expr.STATE) === definition$2.PENDING) {
                        return void value.then(
                            fixed(target, definition$2.RESOLVED),
                            fixed(target, definition$2.REJECTED)
                        );
                    }
                    Reflect$2.set(value, Reflect$2.expr.THROW, false);
                    state = Reflect$2.get(value, Reflect$2.expr.STATE);
                    value = Reflect$2.get(value, Reflect$2.expr.VALUE);
                } else if (isObject$2(value) && isFunction$2(value.then)) {
                    if (!(Reflect$2.has(value, Reflect$2.expr.STATE)) ||
                        !(Reflect$2.has(value, Reflect$2.expr.VALUE)) ||
                        !(Reflect$2.get(value, Reflect$2.expr.STATE) !== definition$2.PENDING)) {
                        return void value.then(
                            fixed(target, definition$2.RESOLVED),
                            fixed(target, definition$2.REJECTED)
                        );
                    }
                    state = Reflect$2.get(value, Reflect$2.expr.STATE);
                    value = Reflect$2.get(value, Reflect$2.expr.VALUE);
                }
                Reflect$2.set(target, Reflect$2.expr.STATE, state);
                Reflect$2.set(target, Reflect$2.expr.VALUE, value);
                var m = Reflect$2.get(target, Reflect$2.expr.QUEUE);
                var l = m.length;
                while (m.length > 0) {
                    var item = m.shift();
                    var done = m.shift();
                    var fail = m.shift();
                    switch (state) {
                        case definition$2.RESOLVED:
                            track(item, value, done);
                            break;
                        case definition$2.REJECTED:
                            track(item, value, fail);
                            break;
                    }
                }
                if (l === 0 && state === definition$2.REJECTED) {
                    setImmediate$2(function () {
                        if (Reflect$2.get(target, Reflect$2.expr.THROW)) {
                            throw Reflect$2.get(target, Reflect$2.expr.VALUE);
                        }
                    });
                }
            }
        }
        /**
         *
         * @param {PromiseLike<any>} target
         * @param {any} value
         * @param {Yarla.BasicFunc} apply
         */
        function track(target, value, apply) {
            try {
                solve(target, definition$2.RESOLVED, apply.call(null, value));
            } catch (error) {
                solve(target, definition$2.REJECTED, error);
            }
        }
    }(globalThis$2.Promise));

    var zone = (function () {
        /** @type {Array<readonly [boolean, Yarla.Application]>} */
        var apps = [];
        /** @type {Array<readonly [Yarla.NoReturnsFunc, any[]]>} */
        var jobs = [];
        /** @type {boolean} */
        var idle = true;
        /** @type {Yarla.Hook | null} */
        var currentTarget = null;
        /** @type {Yarla.Hook} */
        var hook = {
            useRef: skrinkSerializer$2(
                function () {
                    throw new Error(message$2.ONLY_USED_IN_COMPONENTS);
                }
            ),
            useMemo: skrinkSerializer$2(
                function () {
                    throw new Error(message$2.ONLY_USED_IN_COMPONENTS);
                }
            ),
            useState: skrinkSerializer$2(
                function () {
                    throw new Error(message$2.ONLY_USED_IN_COMPONENTS);
                }
            ),
            useTarget: skrinkSerializer$2(
                function () {
                    throw new Error(message$2.ONLY_USED_IN_COMPONENTS);
                }
            ),
            useEffect: skrinkSerializer$2(
                function () {
                    throw new Error(message$2.ONLY_USED_IN_COMPONENTS);
                }
            ),
        };
        return {
            get target() {
                return currentTarget || hook;
            },
            get currentTarget() {
                return currentTarget;
            },
            mount: skrinkSerializer$2(
                /**
                 * 
                 * @param {Yarla.Application} application 
                 * @param {boolean} [ignoreUpdate] 
                 * @returns {Yarla.Application}
                 */
                function (
                    application,
                    ignoreUpdate
                ) {
                    /**
                     * @type {[boolean, Yarla.Application]}
                     */
                    var r = [
                        !!ignoreUpdate,
                        {
                            forceUpdate: skrinkSerializer$2(
                                function () {
                                    return application.forceUpdate();
                                }
                            ),
                            unmount: skrinkSerializer$2(
                                function () {
                                    var loc = apps.indexOf(r);
                                    if (loc !== -1) {
                                        apps.splice(loc, 1);
                                    }
                                    return application.unmount();
                                }
                            ),
                        }
                    ];
                    apps.push(r);
                    return r[1];
                }
            ),
            scope: skrinkSerializer$2(
                /**
                 * 
                 * @param {Parameters<typeof import(".").default.scope>[0]} hook 
                 * @param {Parameters<typeof import(".").default.scope>[1]} processor 
                 * @param {any[]} argv
                 */
                function (
                    hook,
                    processor,
                    argv
                ) {
                    var previousTarget = currentTarget;
                    try {
                        return processor.apply(currentTarget = hook, argv);
                    } finally {
                        currentTarget = previousTarget;
                    }
                }
            ),
            nextTick: skrinkSerializer$2(
                /**
                 * 
                 * @param {Yarla.NoReturnsFunc} task 
                 * @returns {Yarla.Cancelable}
                 */
                function (
                    task
                ) {
                    /** @type {readonly [Yarla.NoReturnsFunc, any[]]} */
                    var r = [
                        task,
                        flat$2(arguments, 1),
                    ];
                    jobs.push(r);
                    return {
                        cancel: skrinkSerializer$2(
                            function () {
                                var loc = jobs.indexOf(r);
                                if (loc !== -1) {
                                    jobs.splice(loc, 1);
                                }
                            }
                        ),
                    };
                }
            ),
            forceUpdate: skrinkSerializer$2(
                function () {
                    if (idle) {
                        idle = false;
                        setImmediate$2(function () {
                            try {
                                apps.slice(0).forEach(
                                    function (i) {
                                        i[0] || i[1].forceUpdate();
                                    }
                                );
                                jobs.splice(0).forEach(
                                    function (i) {
                                        i[0].apply(null, i[1]);
                                    }
                                );
                            } finally {
                                idle = true;
                            }
                        });
                    }
                }
            ),
        };
    }());

    var VMTokenList = defineProperties$2(generateClass$2(Reflect$2.BASE, {
        value: generateGetterDescriptor$2(
            /**
             * 
             * @this {Yarla.dom.VMTokenList}
             * @returns {string}
             */
            function () {
                return Reflect$2.getInternal(this).element.className;
            }
        ),
        add: generateMethodDescriptor$2(
            /**
             * 
             * @this {Yarla.dom.VMTokenList}
             */
            function () {
                var u = false,
                    /** @type {{ readonly element: Element; readonly classes: string[]; }} */
                    o = Reflect$2.getInternal(this),
                    e = o.element,
                    r = o.classes;
                for (var
                    i = 0,
                    s = flat$2(arguments, 0, Infinity, true),
                    l = s.length;
                    i < l;
                    i++
                ) {
                    var n = s[i];
                    var j = r.indexOf(n);
                    if (j === -1) {
                        r.push(n);
                        u = true;
                    }
                }
                if (u) {
                    e.className = r.join(" ");
                }
            }
        ),
        contains: generateMethodDescriptor$2(
            /**
             * 
             * @this {Yarla.dom.VMTokenList}
             * @param {string} token 
             * @returns {boolean}
             */
            function (
                token
            ) {
                return Reflect$2.getInternal(this).classes.indexOf(token) !== -1;
            }
        ),
        remove: generateMethodDescriptor$2(
            /**
             * 
             * @this {Yarla.dom.VMTokenList}
             */
            function () {
                var u = false,
                    /** @type {{ readonly element: Element; readonly classes: string[]; }} */
                    o = Reflect$2.getInternal(this),
                    e = o.element,
                    r = o.classes;
                for (var
                    i = 0,
                    s = flat$2(arguments, 0, Infinity, true),
                    l = s.length;
                    i < l;
                    i++
                ) {
                    var n = s[i];
                    var j = r.indexOf(n);
                    if (j !== -1) {
                        r.splice(j, 1);
                        u = true;
                    }
                }
                if (u) {
                    e.className = r.join(" ");
                }
            }
        ),
        replace: generateMethodDescriptor$2(
            /**
             * 
             * @this {Yarla.dom.VMTokenList}
             * @param {string} previous 
             * @param {string} token 
             */
            function (
                previous,
                token
            ) {
                var u = false,
                    /** @type {{ readonly element: Element; readonly classes: string[]; }} */
                    o = Reflect$2.getInternal(this),
                    e = o.element,
                    r = o.classes,
                    i = r.indexOf(previous),
                    j = r.indexOf(token);
                if (i !== -1) {
                    if (j === -1) {
                        r.splice(i, 1, token);
                    } else {
                        r.splice(i, 1);
                    }
                    u = true;
                }
                if (u) {
                    e.className = r.join(" ");
                }
            }
        ),
        toggle: generateMethodDescriptor$2(
            /**
             * 
             * @this {Yarla.dom.VMTokenList}
             * @param {string} token 
             * @returns {boolean}
             */
            function (
                token
            ) {
                /** @type {{ readonly element: Element; readonly classes: string[]; }} */
                var o = Reflect$2.getInternal(this),
                    e = o.element,
                    r = o.classes,
                    i = r.indexOf(token),
                    b = i !== -1;
                if (b) {
                    r.splice(i, 1);
                } else {
                    r.push(token);
                }
                e.className = r.join(" ");
                return b;
            }
        ),
    }, NOOP$2, "VMTokenList"), {
        init: generateMethodDescriptor$2(
            /**
             * 
             * @this {Yarla.Proto<Yarla.dom.VMTokenList>}
             * @param {Element} element 
             */
            function (
                element
            ) {
                return Reflect$2.construct(this, {
                    get element() {
                        return element;
                    },
                    get classes() {
                        return element.className.split(/\s+/).filter(function (i) { return i.length > 0; });
                    },
                });
            }
        ),
    });

    var isBoolean$2 = skrinkSerializer$2(
        /**
         * 
         * Determines if the input parameter is a boolean.
         * 
         * @param {any} argc Any object.
         * @returns {argc is boolean}
         */
        function (
            argc
        ) {
            return typeof argc === "boolean" || isInstanceOf$2(argc, Boolean);
        }
    );

    var contains = skrinkSerializer$2(
        /**
         * 
         * @param {Node} parentNode 
         * @param {Node | null} other 
         */
        function (
            parentNode,
            other
        ) {
            if (parentNode.contains) {
                return parentNode.contains(other);
            }
            while (other) {
                other = other.parentNode;
                if (other === parentNode) {
                    return true;
                }
            }
            return false;
        }
    );

    var isConnected = skrinkSerializer$2(
        /**
         * 
         * @param {Node} node 
         */
        function (
            node
        ) {
            var isConnected = node.isConnected;
            if (isBoolean$2(isConnected)) {
                return isConnected;
            }
            var ownerDocument = node.ownerDocument;
            if (ownerDocument) {
                return contains(ownerDocument.documentElement || ownerDocument, node);

            }
            return false;
        }
    );

    var env$2 = {
        BEHAVIOR: document ? "scrollBehavior" in document.documentElement.style : false,
        PASSIVED: document ? (function (PASSIVE) { return document.addEventListener("passive", function () { }, { get passive() { return PASSIVE = true; } }), PASSIVE; }(false)) : false,
        namespaceURI: {
            SVG: "http://www.w3.org/2000/svg",
            MathML: "http://www.w3.org/1998/Math/MathML",
        },
    };

    var bean = (function () {
        /**
         * 
         * @param {Event | EventTarget | null | undefined} argc 
         * @returns {any}
         */
        function wrap(
            argc
        ) {
            if (isInstanceOf$2(argc, Originator)) {
                return argc;
            }
            if (isInstanceOf$2(argc, globalThis$2.Event)) {
                return make(argc, behaviours, behaviours.Event);
            }
            if (isInstanceOf$2(argc, globalThis$2.EventTarget)) {
                return make(argc, interfaces, interfaces.EventTarget);
            }
            if (isInstanceOf$2(argc, globalThis$2.XMLHttpRequest)) {
                return make(argc, interfaces, interfaces.XMLHttpRequest);
            }
            if (isInstanceOf$2(argc, globalThis$2.Document)) {
                return make(argc, interfaces, interfaces.Document);
            }
            if (isInstanceOf$2(argc, globalThis$2.Element)) {
                return make(argc, interfaces, interfaces.Element);
            }
            if (isInstanceOf$2(argc, globalThis$2.Window)) {
                return make(argc, interfaces, interfaces.Window);
            }
            if (isInstanceOf$2(argc, globalThis$2.Node)) {
                return make(argc, interfaces, interfaces.Node);
            }
            return null;
        }
        /**
         * 
         * @param {Yarla.Event | Yarla.EventTarget} argc 
         * @returns {AnimationEvent & ClipboardEvent & CompositionEvent & DeviceMotionEvent & DeviceOrientationEvent & DragEvent & ErrorEvent & GamepadEvent & InputEvent & KeyboardEvent & MessageEvent & PageTransitionEvent & PointerEvent & PopStateEvent & ProgressEvent & PromiseRejectionEvent & SecurityPolicyViolationEvent & StorageEvent & TouchEvent & TransitionEvent & WheelEvent & MouseEvent & FocusEvent & UIEvent & CustomEvent & Event & HTMLCanvasElement & HTMLFormElement & HTMLImageElement & HTMLInputElement & HTMLSelectElement & HTMLTextAreaElement & HTMLTrackElement & HTMLVideoElement & HTMLMediaElement & Element & Window & EventTarget}
         */
        function real(
            argc
        ) {
            return isInstanceOf$2(argc, Originator) ? Reflect$2.get(argc, Reflect$2.expr.INSTANCE) : argc;
        }
        /**
         * 
         * @param {any} argc 
         * @param {Readonly<Record<string, Yarla.Proto<T>>>} classes 
         * @param {Yarla.Proto<T>} constructor 
         * @returns {Yarla.NonAny<T>}
         * @template T
         */
        function make(
            argc,
            classes,
            constructor
        ) {
            if (isNullOrUndefined$2(argc)) {
                // @ts-ignore
                return null;
            }
            if (Reflect$2.has(argc, Reflect$2.expr.INSTANCE)) {
                return Reflect$2.get(argc, Reflect$2.expr.INSTANCE);
            }
            var name = argc.constructor.name || className$2(argc);
            if (name in classes) {
                constructor = classes[name];
            } else {
                for (name in classes) {
                    if (isInstanceOf$2(argc, globalThis$2[name])) {
                        constructor = classes[name];
                        break;
                    }
                }
            }
            var item = createInstance$2(constructor);
            Reflect$2.set(item, Reflect$2.expr.INSTANCE, argc);
            Reflect$2.set(argc, Reflect$2.expr.INSTANCE, item);
            return item;
        }
        /**
         * 
         * @param {Event} event 
         * @param {boolean} capture 
         */
        function allot(
            event,
            capture
        ) {
            var type = event.type;
            var item = event.currentTarget;
            if (isNullOrUndefined$2(item)) {
                return;
            }
            if (Reflect$2.has(event, Reflect$2.expr.STOP_AFTERWARD)) {
                return;
            }
            var expr;
            if (capture) {
                expr = Reflect$2.expr.EVENT_CAPTURE.concat(type);
            } else {
                expr = Reflect$2.expr.EVENT_GENERAL.concat(type);
            }
            var lump;
            if (Reflect$2.has(item, expr)) {
                lump = Reflect$2.get(item, expr);
            } else {
                return;
            }
            /** @type {ReadonlyArray<Yarla.EventListenerOrEventListenerObject>} */
            var live = lump.live.slice(0);
            /** @type {ReadonlyArray<Yarla.EventListenerOrEventListenerObject>} */
            var once = lump.once.slice(0);
            //
            for (var
                i = 0,
                l = live.length;
                i < l;
                i++
            ) {
                var listener = live[i];
                if (isFunction$2(listener)) {
                    listener.call(wrap(item), wrap(event));
                } else {
                    listener.handleEvent(wrap(event));
                }
                if (once.indexOf(listener) !== -1) {
                    if (exclude(lump.live, listener)) {
                        if (item.removeEventListener) {
                            item.removeEventListener(type, handleEvent, capture);
                        }
                    }
                    exclude(lump.once, listener);
                }
                if (Reflect$2.has(event, Reflect$2.expr.STOP_IMMEDIATE)) {
                    break;
                }
            }
        }
        /**
         * 
         * @param {EventTarget} argc 
         * @param {string} type 
         * @param {Yarla.EventListenerOrEventListenerObject} listener 
         * @param {Yarla.AddEventListenerOptions} [opts] 
         */
        function attach(
            argc,
            type,
            listener,
            opts
        ) {
            var once;
            var passive;
            var capture;
            if (isObject$2(opts)) {
                once = !!opts.once;
                passive = !!opts.passive;
                capture = !!opts.capture;
            } else {
                once = false;
                passive = false;
                capture = !!opts;
            }
            var expr;
            if (capture) {
                expr = Reflect$2.expr.EVENT_CAPTURE.concat(type);
            } else {
                expr = Reflect$2.expr.EVENT_GENERAL.concat(type);
            }
            var lump;
            if (Reflect$2.has(argc, expr)) {
                lump = Reflect$2.get(argc, expr);
            } else {
                lump = Reflect$2.set(argc, expr, { live: [], once: [] });
            }
            if (include(lump.live, listener)) {
                if (argc.addEventListener) {
                    argc.addEventListener(type, handleEvent, env$2.PASSIVED ? {
                        capture: capture,
                        passive: passive,
                    } : capture);
                }
            }
            if (once) {
                include(lump.once, listener);
            }
        }
        /**
         * 
         * @param {EventTarget} argc 
         * @param {string} type 
         * @param {Yarla.EventListenerOrEventListenerObject} listener 
         * @param {Yarla.EventListenerOptions} [opts] 
         */
        function detach(
            argc,
            type,
            listener,
            opts
        ) {
            var capture;
            if (isObject$2(opts)) {
                capture = !!opts.capture;
            } else {
                capture = !!opts;
            }
            var expr;
            if (capture) {
                expr = Reflect$2.expr.EVENT_CAPTURE.concat(type);
            } else {
                expr = Reflect$2.expr.EVENT_GENERAL.concat(type);
            }
            var lump;
            if (Reflect$2.has(argc, expr)) {
                lump = Reflect$2.get(argc, expr);
            } else {
                return;
            }
            if (exclude(lump.live, listener)) {
                if (argc.removeEventListener) {
                    argc.removeEventListener(type, handleEvent, capture);
                }
            }
        }
        /**
         * 
         * @param {EventTarget} argc 
         * @param {Yarla.NOOP} listener 
         */
        function jacket(
            argc,
            listener
        ) {
            var lump;
            if (Reflect$2.has(argc, Reflect$2.expr.EVENT_OBSERVE)) {
                lump = Reflect$2.get(argc, Reflect$2.expr.EVENT_OBSERVE);
            } else {
                lump = Reflect$2.set(argc, Reflect$2.expr.EVENT_OBSERVE, []);
            }
            include(lump, listener);
            return function () {
                return exclude(lump, listener), listener.call(argc);
            };
        }
        /**
         * 
         * @param {EventTarget} argc 
         * @param {string} type 
         * @param {Yarla.EventListenerOrEventListenerObject[]} pairs 
         * @param {Yarla.EventListenerOptions} [opts] 
         */
        function replace(
            argc,
            type,
            pairs,
            opts
        ) {
            var capture;
            if (isObject$2(opts)) {
                capture = !!opts.capture;
            } else {
                capture = !!opts;
            }
            var expr;
            if (capture) {
                expr = Reflect$2.expr.EVENT_CAPTURE.concat(type);
            } else {
                expr = Reflect$2.expr.EVENT_GENERAL.concat(type);
            }
            var lump;
            if (Reflect$2.has(argc, expr)) {
                lump = Reflect$2.get(argc, expr);
            } else {
                return;
            }
            var loc;
            if ((loc = lump.live.indexOf(pairs[0])) !== -1) {
                lump.live[loc] = pairs[1];
            }
            if ((loc = lump.once.indexOf(pairs[0])) !== -1) {
                lump.once[loc] = pairs[1];
            }
        }
        /**
         * 
         * @param {EventTarget} argc 
         * @param {Event} event 
         */
        function trigger(
            argc,
            event
        ) {
            if (argc.dispatchEvent) {
                argc.dispatchEvent(event);
            } else {
                handleEvent(defineProperties$2(event, {
                    eventPhase: generateGetterDescriptor$2(
                        function () {
                            return Event.AT_TARGET;
                        }
                    ),
                    currentTarget: generateGetterDescriptor$2(
                        function () {
                            return argc;
                        }
                    ),
                    target: generateGetterDescriptor$2(
                        function () {
                            return argc;
                        }
                    ),
                }));
            }
            return event.defaultPrevented;
        }
        /**
         * 
         * @param {EventTarget} argc 
         */
        function destroy(
            argc
        ) {
            var type;
            if (argc.removeEventListener) {
                if (Reflect$2.has(argc, Reflect$2.expr.EVENT_CAPTURE)) {
                    for (type in Reflect$2.get(argc, Reflect$2.expr.EVENT_CAPTURE)) {
                        argc.removeEventListener(type, handleEvent, true);
                    }
                }
                if (Reflect$2.has(argc, Reflect$2.expr.EVENT_GENERAL)) {
                    for (type in Reflect$2.get(argc, Reflect$2.expr.EVENT_GENERAL)) {
                        argc.removeEventListener(type, handleEvent, false);
                    }
                }
            }
            if (Reflect$2.has(argc, Reflect$2.expr.EVENT_OBSERVE)) {
                for (var
                    i = 0,
                    s = Reflect$2.get(argc, Reflect$2.expr.EVENT_OBSERVE).slice(0),
                    l = s.length;
                    i < l;
                    i++
                ) {
                    s[i].call(argc);
                }
            }
            Reflect$2.delete(argc);
        }
        /**
         * 
         * @param {Array<T>} container 
         * @param {T} item
         * @returns {boolean}
         * @template T
         */
        function include(
            container,
            item
        ) {
            var loc = container.indexOf(item);
            if (loc === -1) {
                return container.push(item) === 1;
            }
            return false;
        }
        /**
         * 
         * @param {Array<T>} container 
         * @param {T} item
         * @returns {boolean}
         * @template T
         */
        function exclude(
            container,
            item
        ) {
            var loc = container.indexOf(item);
            if (loc !== -1) {
                container.splice(loc, 1);
                return !container.length;
            }
            return false;
        }
        /**
         * 
         * @param {Event} event 
         */
        function handleEvent(
            event
        ) {
            var eventPhase = event.eventPhase;
            if (eventPhase === Event.CAPTURING_PHASE ||
                eventPhase === Event.AT_TARGET) {
                allot(event, true);
            }
            if (eventPhase === Event.BUBBLING_PHASE ||
                eventPhase === Event.AT_TARGET) {
                allot(event, false);
            }
            if (Reflect$2.has(event, Reflect$2.expr.TICK_PREVENTED)) {
                return;
            }
            zone.forceUpdate();
        }
        var Originator = generateClass$2(Reflect$2.BASE, {}, NOOP$2);
        var behaviours = (function () {
            var Event = generateClass$2(Reflect$2.BASE, {
                type: generateGetterDescriptor$2(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).type;
                    }
                ),
                bubbles: generateGetterDescriptor$2(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).bubbles;
                    }
                ),
                cancelable: generateGetterDescriptor$2(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).cancelable;
                    }
                ),
                composed: generateGetterDescriptor$2(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).composed;
                    }
                ),
                isTrusted: generateGetterDescriptor$2(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).isTrusted;
                    }
                ),
                defaultPrevented: generateGetterDescriptor$2(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).defaultPrevented;
                    }
                ),
                eventPhase: generateGetterDescriptor$2(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).eventPhase;
                    }
                ),
                timeStamp: generateGetterDescriptor$2(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).timeStamp;
                    }
                ),
                target: generateGetterDescriptor$2(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return wrap(real(this).target);
                    }
                ),
                currentTarget: generateGetterDescriptor$2(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return wrap(real(this).currentTarget);
                    }
                ),
                stopImmediatePropagation: generateMethodDescriptor$2(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        var item = real(this);
                        Reflect$2.set(item, Reflect$2.expr.STOP_AFTERWARD, true);
                        Reflect$2.set(item, Reflect$2.expr.STOP_IMMEDIATE, true);
                        item.stopImmediatePropagation();
                    }
                ),
                stopPropagation: generateMethodDescriptor$2(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        var item = real(this);
                        Reflect$2.set(item, Reflect$2.expr.STOP_AFTERWARD, true);
                        item.stopPropagation();
                    }
                ),
                preventDefault: generateMethodDescriptor$2(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        real(this).preventDefault();
                    }
                ),
                ignoreUpdate: generateMethodDescriptor$2(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        Reflect$2.set(real(this), Reflect$2.expr.TICK_PREVENTED, true);
                    }
                ),
            }, Originator, "Event");
            var UIEvent = generateClass$2(Reflect$2.BASE, {
                detail: generateGetterDescriptor$2(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).detail;
                    }
                ),
                view: generateGetterDescriptor$2(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return wrap(real(this).view);
                    }
                ),
            }, Event, "UIEvent");
            var MouseEvent = generateClass$2(Reflect$2.BASE, {
                altKey: generateGetterDescriptor$2(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).altKey;
                    }
                ),
                button: generateGetterDescriptor$2(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).button;
                    }
                ),
                buttons: generateGetterDescriptor$2(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).buttons;
                    }
                ),
                clientX: generateGetterDescriptor$2(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).clientX;
                    }
                ),
                clientY: generateGetterDescriptor$2(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).clientY;
                    }
                ),
                ctrlKey: generateGetterDescriptor$2(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).ctrlKey;
                    }
                ),
                metaKey: generateGetterDescriptor$2(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).metaKey;
                    }
                ),
                movementX: generateGetterDescriptor$2(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).movementX;
                    }
                ),
                movementY: generateGetterDescriptor$2(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).movementY;
                    }
                ),
                offsetX: generateGetterDescriptor$2(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).offsetX;
                    }
                ),
                offsetY: generateGetterDescriptor$2(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).offsetY;
                    }
                ),
                pageX: generateGetterDescriptor$2(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).pageX;
                    }
                ),
                pageY: generateGetterDescriptor$2(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).pageY;
                    }
                ),
                relatedTarget: generateGetterDescriptor$2(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return wrap(real(this).relatedTarget);
                    }
                ),
                screenX: generateGetterDescriptor$2(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).screenX;
                    }
                ),
                screenY: generateGetterDescriptor$2(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).screenY;
                    }
                ),
                shiftKey: generateGetterDescriptor$2(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).shiftKey;
                    }
                ),
                x: generateGetterDescriptor$2(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).x;
                    }
                ),
                y: generateGetterDescriptor$2(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).y;
                    }
                ),
                getModifierState: generateMethodDescriptor$2(
                    /**
                     * 
                     * @this {any}
                     * @param {string} keyArg 
                     */
                    function (
                        keyArg
                    ) {
                        return real(this).getModifierState(keyArg);
                    }
                ),
            }, UIEvent, "MouseEvent");
            var AnimationEvent = generateClass$2(Reflect$2.BASE, {
                animationName: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).animationName;
                    }
                ),
                elapsedTime: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).elapsedTime;
                    }
                ),
                pseudoElement: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).pseudoElement;
                    }
                ),
            }, Event, "AnimationEvent");
            var BeforeUnloadEvent = generateClass$2(Reflect$2.BASE, {
            }, Event, "BeforeUnloadEvent");
            var ClipboardEvent = generateClass$2(Reflect$2.BASE, {
                clipboardData: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).clipboardData;
                    }
                ),
            }, Event, "ClipboardEvent");
            var CompositionEvent = generateClass$2(Reflect$2.BASE, {
                data: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).data;
                    }
                ),
            }, Event, "CompositionEvent");
            var CustomEvent = generateClass$2(Reflect$2.BASE, {
                detail: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).detail;
                    }
                ),
            }, Event, "CustomEvent");
            var DeviceMotionEvent = generateClass$2(Reflect$2.BASE, {
                acceleration: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).acceleration;
                    }
                ),
                accelerationIncludingGravity: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).accelerationIncludingGravity;
                    }
                ),
                interval: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).interval;
                    }
                ),
                rotationRate: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).rotationRate;
                    }
                ),
            }, Event, "DeviceMotionEvent");
            var DeviceOrientationEvent = generateClass$2(Reflect$2.BASE, {
                absolute: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).absolute;
                    }
                ),
                alpha: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).alpha;
                    }
                ),
                beta: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).beta;
                    }
                ),
                gamma: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).gamma;
                    }
                ),
            }, Event, "DeviceOrientationEvent");
            var DragEvent = generateClass$2(Reflect$2.BASE, {
                dataTransfer: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).dataTransfer;
                    }
                ),
            }, Event, "DragEvent");
            var ErrorEvent = generateClass$2(Reflect$2.BASE, {
                colno: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).colno;
                    }
                ),
                error: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).error;
                    }
                ),
                filename: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).filename;
                    }
                ),
                lineno: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).lineno;
                    }
                ),
                message: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).message;
                    }
                ),
            }, Event, "ErrorEvent");
            var FocusEvent = generateClass$2(Reflect$2.BASE, {
                relatedTarget: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return wrap(real(this).relatedTarget);
                    }
                ),
            }, UIEvent, "FocusEvent");
            var GamepadEvent = generateClass$2(Reflect$2.BASE, {
                gamepad: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).gamepad;
                    }
                ),
            }, Event, "GamepadEvent");
            var HashChangeEvent = generateClass$2(Reflect$2.BASE, {
            }, Event, "HashChangeEvent");
            var InputEvent = generateClass$2(Reflect$2.BASE, {
                data: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).data;
                    }
                ),
                inputType: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).inputType;
                    }
                ),
                isComposing: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).isComposing;
                    }
                ),
            }, UIEvent, "InputEvent");
            var KeyboardEvent = generateClass$2(Reflect$2.BASE, {
                key: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).key;
                    }
                ),
                code: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).code;
                    }
                ),
                altKey: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).altKey;
                    }
                ),
                ctrlKey: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).ctrlKey;
                    }
                ),
                metaKey: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).metaKey;
                    }
                ),
                shiftKey: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).shiftKey;
                    }
                ),
                isComposing: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).isComposing;
                    }
                ),
                location: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).location;
                    }
                ),
                repeat: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).repeat;
                    }
                ),
                getModifierState: generateMethodDescriptor$2(
                    /**
                     * 
                     * @this {any}
                     * @param {string} keyArg 
                     */
                    function (
                        keyArg
                    ) {
                        return real(this).getModifierState(keyArg);
                    }
                ),
            }, UIEvent, "KeyboardEvent");
            var MessageEvent = generateClass$2(Reflect$2.BASE, {
                data: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).data;
                    }
                ),
                lastEventId: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).lastEventId;
                    }
                ),
                origin: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).origin;
                    }
                ),
                ports: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).ports;
                    }
                ),
                source: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).source;
                    }
                ),
            }, Event, "MessageEvent");
            var PageTransitionEvent = generateClass$2(Reflect$2.BASE, {
                persisted: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).persisted;
                    }
                ),
            }, Event, "PageTransitionEvent");
            var PointerEvent = generateClass$2(Reflect$2.BASE, {
                height: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).height;
                    }
                ),
                isPrimary: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).isPrimary;
                    }
                ),
                pointerId: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).pointerId;
                    }
                ),
                pointerType: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).pointerType;
                    }
                ),
                pressure: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).pressure;
                    }
                ),
                tangentialPressure: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).tangentialPressure;
                    }
                ),
                tiltX: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).tiltX;
                    }
                ),
                tiltY: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).tiltY;
                    }
                ),
                twist: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).twist;
                    }
                ),
                width: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).width;
                    }
                ),
            }, MouseEvent, "PointerEvent");
            var PopStateEvent = generateClass$2(Reflect$2.BASE, {
                state: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).state;
                    }
                ),
            }, Event, "PopStateEvent");
            var ProgressEvent = generateClass$2(Reflect$2.BASE, {
                lengthComputable: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).lengthComputable;
                    }
                ),
                loaded: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).loaded;
                    }
                ),
                total: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).total;
                    }
                ),
            }, Event, "ProgressEvent");
            var PromiseRejectionEvent = generateClass$2(Reflect$2.BASE, {
                reason: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).reason;
                    }
                ),
            }, Event, "PromiseRejectionEvent");
            var SecurityPolicyViolationEvent = generateClass$2(Reflect$2.BASE, {
                blockedURI: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).blockedURI;
                    }
                ),
                columnNumber: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).columnNumber;
                    }
                ),
                documentURI: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).documentURI;
                    }
                ),
                effectiveDirective: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).effectiveDirective;
                    }
                ),
                lineNumber: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).lineNumber;
                    }
                ),
                originalPolicy: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).originalPolicy;
                    }
                ),
                referrer: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).referrer;
                    }
                ),
                sourceFile: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).sourceFile;
                    }
                ),
                statusCode: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).statusCode;
                    }
                ),
                violatedDirective: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).violatedDirective;
                    }
                ),
            }, Event, "SecurityPolicyViolationEvent");
            var StorageEvent = generateClass$2(Reflect$2.BASE, {
                key: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).key;
                    }
                ),
                newValue: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).newValue;
                    }
                ),
                oldValue: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).oldValue;
                    }
                ),
                storageArea: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).storageArea;
                    }
                ),
                url: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).url;
                    }
                ),
            }, Event, "StorageEvent");
            var TouchEvent = generateClass$2(Reflect$2.BASE, {
                altKey: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).altKey;
                    }
                ),
                changedTouches: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).changedTouches;
                    }
                ),
                ctrlKey: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).ctrlKey;
                    }
                ),
                metaKey: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).metaKey;
                    }
                ),
                shiftKey: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).shiftKey;
                    }
                ),
                targetTouches: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).targetTouches;
                    }
                ),
                touches: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).touches;
                    }
                ),
            }, UIEvent, "TouchEvent");
            var TransitionEvent = generateClass$2(Reflect$2.BASE, {
                elapsedTime: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).elapsedTime;
                    }
                ),
                propertyName: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).propertyName;
                    }
                ),
                pseudoElement: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).pseudoElement;
                    }
                ),
            }, Event, "TransitionEvent");
            var WheelEvent = generateClass$2(Reflect$2.BASE, {
                deltaMode: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).deltaMode;
                    }
                ),
                deltaX: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).deltaX;
                    }
                ),
                deltaY: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).deltaY;
                    }
                ),
                deltaZ: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).deltaZ;
                    }
                ),
            }, MouseEvent, "WheelEvent");
            /**
             * 
             */
            return {
                AnimationEvent: AnimationEvent,
                BeforeUnloadEvent: BeforeUnloadEvent,
                ClipboardEvent: ClipboardEvent,
                CompositionEvent: CompositionEvent,
                CustomEvent: CustomEvent,
                DeviceMotionEvent: DeviceMotionEvent,
                DeviceOrientationEvent: DeviceOrientationEvent,
                DragEvent: DragEvent,
                ErrorEvent: ErrorEvent,
                FocusEvent: FocusEvent,
                GamepadEvent: GamepadEvent,
                HashChangeEvent: HashChangeEvent,
                InputEvent: InputEvent,
                KeyboardEvent: KeyboardEvent,
                MessageEvent: MessageEvent,
                PageTransitionEvent: PageTransitionEvent,
                PointerEvent: PointerEvent,
                PopStateEvent: PopStateEvent,
                ProgressEvent: ProgressEvent,
                PromiseRejectionEvent: PromiseRejectionEvent,
                SecurityPolicyViolationEvent: SecurityPolicyViolationEvent,
                StorageEvent: StorageEvent,
                TouchEvent: TouchEvent,
                TransitionEvent: TransitionEvent,
                WheelEvent: WheelEvent,
                MouseEvent: MouseEvent,
                UIEvent: UIEvent,
                Event: Event,
            };
        }());
        var interfaces = (function () {
            var EventTarget = generateClass$2(Reflect$2.BASE, {
                listen: generateMethodDescriptor$2(
                    /**
                     * 
                     * @this {any}
                     * @param {string} type 
                     * @param {Yarla.EventListenerOrEventListenerObject} listener 
                     * @param {Yarla.AddEventListenerOptions} [opts] 
                     */
                    function (
                        type,
                        listener,
                        opts
                    ) {
                        var item = real(this);
                        attach(item, type, listener, opts);
                        return {
                            cancel: skrinkSerializer$2(
                                function () {
                                    detach(item, type, listener, opts);
                                }
                            ),
                        };
                    }
                ),
                dispatch: generateMethodDescriptor$2(
                    /**
                     * 
                     * @this {any}
                     * @param {string} type 
                     * @param {any=} detail 
                     * @param {boolean=} bubbles 
                     * @param {boolean=} cancelable 
                     */
                    function (
                        type,
                        detail,
                        bubbles,
                        cancelable
                    ) {
                        var item = real(this);
                        var meta;
                        var data;
                        try {
                            data = new CustomEvent(type, {
                                cancelable: !!cancelable,
                                bubbles: !!bubbles,
                                detail: detail,
                            });
                        } catch (_) {
                            meta = item.ownerDocument || document;
                            data = meta.createEvent("CustomEvent");
                            data.initCustomEvent(type, !!bubbles, !!cancelable, detail);
                        }
                        return trigger(item, data);
                    }
                ),
            }, Originator, "EventTarget");
            var XMLHttpRequest = generateClass$2(Reflect$2.BASE, {
            }, EventTarget, "XMLHttpRequest");
            var Window = generateClass$2(Reflect$2.BASE, {
            }, EventTarget, "Window");
            var Node = generateClass$2(Reflect$2.BASE, {
                nodeName: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).nodeName;
                    }
                ),
                nodeType: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).nodeType;
                    }
                ),
                textContent: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).textContent;
                    }
                ),
                isConnected: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return isConnected(real(this));
                    }
                ),
                listenTo: generateMethodDescriptor$2(
                    /**
                     * 
                     * @this {any}
                     * @param {string} type 
                     * @param {Yarla.EventListenerOrEventListenerObject} listener 
                     * @param {Yarla.AddEventListenerOptions} [opts] 
                     */
                    function (
                        type,
                        listener,
                        opts
                    ) {
                        var item = real(this);
                        var meta = item.ownerDocument || document;
                        var view = meta.defaultView || globalThis$2;
                        attach(view, type, listener, opts);
                        return {
                            cancel: skrinkSerializer$2(
                                jacket(item, function () {
                                    detach(view, type, listener, opts);
                                })
                            ),
                        };
                    }
                ),
                contains: generateMethodDescriptor$2(
                    /**
                     * 
                     * @this {any}
                     * @param {Yarla.Node} element
                     */
                    function (
                        element
                    ) {
                        return contains(real(this), real(element));
                    }
                ),
            }, EventTarget, "Node");
            var Document = generateClass$2(Reflect$2.BASE, {
                isDefaultNamespace: generateMethodDescriptor$2(
                    /**
                     * 
                     * @this {any}
                     * @param {string | null} namespace
                     */
                    function (namespace) {
                        return real(this).isDefaultNamespace(namespace);
                    }
                ),
            }, Node, "Document");
            var Element = generateClass$2(Reflect$2.BASE, {
                innerHTML: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).innerHTML;
                    }
                ),
                outerHTML: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).outerHTML;
                    }
                ),
                className: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).className;
                    }
                ),
                classList: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return Reflect$2.once(this, Reflect$2.expr.CLASS_MANAGER, function () {
                            return VMTokenList.init(real(this));
                        });
                    }
                ),
                clientHeight: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).clientHeight;
                    }
                ),
                clientLeft: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).clientLeft;
                    }
                ),
                clientTop: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).clientTop;
                    }
                ),
                clientWidth: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).clientWidth;
                    }
                ),
                scrollHeight: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).scrollHeight;
                    }
                ),
                scrollLeft: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).scrollLeft;
                    }
                ),
                scrollTop: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).scrollTop;
                    }
                ),
                scrollWidth: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).scrollWidth;
                    }
                ),
                getBoundingClientRect: generateMethodDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).getBoundingClientRect();
                    }
                ),
                scrollTo: generateMethodDescriptor$2(
                    /**
                     * 
                     * @this {any}
                     * @param {number} x
                     * @param {number} y
                     * @param {ScrollBehavior=} behavior
                     */
                    function (
                        x,
                        y,
                        behavior
                    ) {
                        var item = real(this);
                        if (item.scrollTo) {
                            if (env$2.BEHAVIOR) {
                                item.scrollTo({
                                    behavior: behavior,
                                    left: x,
                                    top: y,
                                });
                            } else {
                                item.scrollTo(x, y);
                            }
                        } else {
                            item.scrollLeft = x;
                            item.scrollTop = y;
                        }
                    }
                ),
                matches: generateMethodDescriptor$2(
                    /**
                     * 
                     * @this {any}
                     * @param {string} selectors 
                     */
                    function (
                        selectors
                    ) {
                        var item = real(this);
                        if (item.matches) {
                            return item.matches(selectors);
                        }
                        if (item.matchesSelector) {
                            return item.matchesSelector(selectors);
                        }
                        if (item.webkitMatchesSelector) {
                            return item.webkitMatchesSelector(selectors);
                        }
                        if (item.mozMatchesSelector) {
                            return item.mozMatchesSelector(selectors);
                        }
                        if (item.msMatchesSelector) {
                            return item.msMatchesSelector(selectors);
                        }
                        if (item.oMatchesSelector) {
                            return item.oMatchesSelector(selectors);
                        }
                        var meta = item.ownerDocument || document;
                        for (var
                            i = 0,
                            n = meta.querySelectorAll(selectors),
                            l = n.length;
                            i < l;
                            i++
                        ) {
                            if (item === n[i]) {
                                return true;
                            }
                        }
                        return false;
                    }
                ),
            }, Node, "Element");
            var HTMLElement = generateClass$2(Reflect$2.BASE, {
            }, Element, "HTMLElement");
            var HTMLMediaElement = generateClass$2(Reflect$2.BASE, {
                buffered: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).buffered;
                    }
                ),
                currentSrc: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).currentSrc;
                    }
                ),
                duration: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).duration;
                    }
                ),
                ended: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).ended;
                    }
                ),
                error: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).error;
                    }
                ),
                networkState: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).networkState;
                    }
                ),
                paused: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).paused;
                    }
                ),
                played: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).played;
                    }
                ),
                readyState: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).readyState;
                    }
                ),
                seekable: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).seekable;
                    }
                ),
                seeking: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).seeking;
                    }
                ),
                load: generateMethodDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).load();
                    }
                ),
                pause: generateMethodDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).pause();
                    }
                ),
                play: generateMethodDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return Promise$3.resolve(real(this).play());
                    }
                ),
            }, HTMLElement, "HTMLMediaElement");
            var HTMLAnchorElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLAnchorElement");
            var HTMLAreaElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLAreaElement");
            var HTMLAudioElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLMediaElement, "HTMLAudioElement");
            var HTMLBRElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLBRElement");
            var HTMLBaseElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLBaseElement");
            var HTMLBodyElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLBodyElement");
            var HTMLButtonElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLButtonElement");
            var HTMLCanvasElement = generateClass$2(Reflect$2.BASE, {
                getContext: generateMethodDescriptor$2(
                    /**
                     * 
                     * @this {any}
                     * @param {string} contextId 
                     * @param {CanvasRenderingContext2DSettings} [opts] 
                     */
                    function (
                        contextId,
                        opts
                    ) {
                        return real(this).getContext(contextId, opts);
                    }
                ),
                toDataURL: generateMethodDescriptor$2(
                    /**
                     * 
                     * @this {any}
                     * @param {string} type 
                     * @param {number} [quality] 
                     */
                    function (
                        type,
                        quality
                    ) {
                        return real(this).toDataURL(type, quality);
                    }
                ),
            }, HTMLElement, "HTMLCanvasElement");
            var HTMLDListElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLDListElement");
            var HTMLDataElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLDataElement");
            var HTMLDataListElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLDataListElement");
            var HTMLDetailsElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLDetailsElement");
            var HTMLDialogElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLDialogElement");
            var HTMLDivElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLDivElement");
            var HTMLEmbedElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLEmbedElement");
            var HTMLFieldSetElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLFieldSetElement");
            var HTMLFormElement = generateClass$2(Reflect$2.BASE, {
                reset: generateMethodDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).reset();
                    }
                ),
                submit: generateMethodDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).submit();
                    }
                ),
            }, HTMLElement, "HTMLFormElement");
            var HTMLHRElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLHRElement");
            var HTMLHeadElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLHeadElement");
            var HTMLHeadingElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLHeadingElement");
            var HTMLHtmlElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLHtmlElement");
            var HTMLIFrameElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLIFrameElement");
            var HTMLImageElement = generateClass$2(Reflect$2.BASE, {
                complete: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).complete;
                    }
                ),
                currentSrc: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).currentSrc;
                    }
                ),
                naturalHeight: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).naturalHeight;
                    }
                ),
                naturalWidth: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).naturalWidth;
                    }
                ),
            }, HTMLElement, "HTMLImageElement");
            var HTMLInputElement = generateClass$2(Reflect$2.BASE, {
                name: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).name;
                    }
                ),
                value: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).value;
                    }
                ),
                checked: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).checked;
                    }
                ),
                selectionEnd: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).selectionEnd;
                    }
                ),
                selectionStart: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).selectionStart;
                    }
                ),
                files: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).files;
                    }
                ),
                select: generateMethodDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).select();
                    }
                ),
            }, HTMLElement, "HTMLInputElement");
            var HTMLLIElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLLIElement");
            var HTMLLabelElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLLabelElement");
            var HTMLLegendElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLLegendElement");
            var HTMLLinkElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLLinkElement");
            var HTMLMenuElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLMenuElement");
            var HTMLMetaElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLMetaElement");
            var HTMLMeterElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLMeterElement");
            var HTMLModElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLModElement");
            var HTMLOListElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLOListElement");
            var HTMLObjectElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLObjectElement");
            var HTMLOptGroupElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLOptGroupElement");
            var HTMLOptionElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLOptionElement");
            var HTMLOutputElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLOutputElement");
            var HTMLParagraphElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLParagraphElement");
            var HTMLParamElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLParamElement");
            var HTMLPictureElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLPictureElement");
            var HTMLPortalElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLPortalElement");
            var HTMLPreElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLPreElement");
            var HTMLProgressElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLProgressElement");
            var HTMLQuoteElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLQuoteElement");
            var HTMLScriptElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLScriptElement");
            var HTMLSelectElement = generateClass$2(Reflect$2.BASE, {
                name: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).name;
                    }
                ),
                value: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).value;
                    }
                ),
                selectedIndex: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).selectedIndex;
                    }
                ),
            }, HTMLElement, "HTMLSelectElement");
            var HTMLSlotElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLSlotElement");
            var HTMLSourceElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLSourceElement");
            var HTMLSpanElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLSpanElement");
            var HTMLStyleElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLStyleElement");
            var HTMLTableCaptionElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLTableCaptionElement");
            var HTMLTableCellElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLTableCellElement");
            var HTMLTableColElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLTableColElement");
            var HTMLTableElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLTableElement");
            var HTMLTableRowElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLTableRowElement");
            var HTMLTableSectionElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLTableSectionElement");
            var HTMLTemplateElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLTemplateElement");
            var HTMLTextAreaElement = generateClass$2(Reflect$2.BASE, {
                name: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).name;
                    }
                ),
                value: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).value;
                    }
                ),
                selectionEnd: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).selectionEnd;
                    }
                ),
                selectionStart: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).selectionStart;
                    }
                ),
                select: generateMethodDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).select();
                    }
                ),
            }, HTMLElement, "HTMLTextAreaElement");
            var HTMLTimeElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLTimeElement");
            var HTMLTitleElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLTitleElement");
            var HTMLTrackElement = generateClass$2(Reflect$2.BASE, {
                readyState: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).readyState;
                    }
                ),
            }, HTMLElement, "HTMLTrackElement");
            var HTMLUListElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLUListElement");
            var HTMLUnknownElement = generateClass$2(Reflect$2.BASE, {
            }, HTMLElement, "HTMLUnknownElement");
            var HTMLVideoElement = generateClass$2(Reflect$2.BASE, {
                videoHeight: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).videoHeight;
                    }
                ),
                videoWidth: generateGetterDescriptor$2(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).videoWidth;
                    }
                ),
            }, HTMLMediaElement, "HTMLVideoElement");
            var MathMLElement = generateClass$2(Reflect$2.BASE, {
            }, Element, "MathMLElement");
            var SVGElement = generateClass$2(Reflect$2.BASE, {
            }, Element, "SVGElement");
            /**
             * 
             */
            return {
                HTMLAnchorElement: HTMLAnchorElement,
                HTMLAreaElement: HTMLAreaElement,
                HTMLAudioElement: HTMLAudioElement,
                HTMLBRElement: HTMLBRElement,
                HTMLBaseElement: HTMLBaseElement,
                HTMLBodyElement: HTMLBodyElement,
                HTMLButtonElement: HTMLButtonElement,
                HTMLCanvasElement: HTMLCanvasElement,
                HTMLDListElement: HTMLDListElement,
                HTMLDataElement: HTMLDataElement,
                HTMLDataListElement: HTMLDataListElement,
                HTMLDetailsElement: HTMLDetailsElement,
                HTMLDialogElement: HTMLDialogElement,
                HTMLDivElement: HTMLDivElement,
                HTMLEmbedElement: HTMLEmbedElement,
                HTMLFieldSetElement: HTMLFieldSetElement,
                HTMLFormElement: HTMLFormElement,
                HTMLHRElement: HTMLHRElement,
                HTMLHeadElement: HTMLHeadElement,
                HTMLHeadingElement: HTMLHeadingElement,
                HTMLHtmlElement: HTMLHtmlElement,
                HTMLIFrameElement: HTMLIFrameElement,
                HTMLImageElement: HTMLImageElement,
                HTMLInputElement: HTMLInputElement,
                HTMLLIElement: HTMLLIElement,
                HTMLLabelElement: HTMLLabelElement,
                HTMLLegendElement: HTMLLegendElement,
                HTMLLinkElement: HTMLLinkElement,
                HTMLMenuElement: HTMLMenuElement,
                HTMLMetaElement: HTMLMetaElement,
                HTMLMeterElement: HTMLMeterElement,
                HTMLModElement: HTMLModElement,
                HTMLOListElement: HTMLOListElement,
                HTMLObjectElement: HTMLObjectElement,
                HTMLOptGroupElement: HTMLOptGroupElement,
                HTMLOptionElement: HTMLOptionElement,
                HTMLOutputElement: HTMLOutputElement,
                HTMLParagraphElement: HTMLParagraphElement,
                HTMLParamElement: HTMLParamElement,
                HTMLPictureElement: HTMLPictureElement,
                HTMLPortalElement: HTMLPortalElement,
                HTMLPreElement: HTMLPreElement,
                HTMLProgressElement: HTMLProgressElement,
                HTMLQuoteElement: HTMLQuoteElement,
                HTMLScriptElement: HTMLScriptElement,
                HTMLSelectElement: HTMLSelectElement,
                HTMLSlotElement: HTMLSlotElement,
                HTMLSourceElement: HTMLSourceElement,
                HTMLSpanElement: HTMLSpanElement,
                HTMLStyleElement: HTMLStyleElement,
                HTMLTableCaptionElement: HTMLTableCaptionElement,
                HTMLTableCellElement: HTMLTableCellElement,
                HTMLTableColElement: HTMLTableColElement,
                HTMLTableElement: HTMLTableElement,
                HTMLTableRowElement: HTMLTableRowElement,
                HTMLTableSectionElement: HTMLTableSectionElement,
                HTMLTemplateElement: HTMLTemplateElement,
                HTMLTextAreaElement: HTMLTextAreaElement,
                HTMLTimeElement: HTMLTimeElement,
                HTMLTitleElement: HTMLTitleElement,
                HTMLTrackElement: HTMLTrackElement,
                HTMLUListElement: HTMLUListElement,
                HTMLUnknownElement: HTMLUnknownElement,
                HTMLVideoElement: HTMLVideoElement,
                HTMLMediaElement: HTMLMediaElement,
                HTMLElement: HTMLElement,
                MathMLElement: MathMLElement,
                SVGElement: SVGElement,
                Document: Document,
                Element: Element,
                Node: Node,
                Window: Window,
                XMLHttpRequest: XMLHttpRequest,
                EventTarget: EventTarget,
            };
        }());
        return {
            detach: skrinkSerializer$2(detach),
            attach: skrinkSerializer$2(attach),
            replace: skrinkSerializer$2(replace),
            trigger: skrinkSerializer$2(trigger),
            destroy: skrinkSerializer$2(destroy),
            wrap: skrinkSerializer$2(wrap),
            real: skrinkSerializer$2(real),
            behaviours: behaviours,
            interfaces: interfaces,
        };
    }());

    var _getComputedStyle = skrinkSerializer$2(
        /**
         * 
         * @param {Yarla.Element} element 
         * @param {string | null} pseudoElement 
         */
        function (
            element,
            pseudoElement
        ) {
            return globalThis$2.getComputedStyle(bean.real(element), pseudoElement);
        }
    );

    var _requestFullscreen = skrinkSerializer$2(
        /**
         * 
         * @param {Yarla.Element} element 
         * @param {FullscreenOptions} [opts] 
         * @returns {Promise<void>}
         */
        function (
            element,
            opts
        ) {
            return new Promise$3(function (resolve) {
                var instance = bean.real(element);
                if (instance.requestFullscreen) {
                    return resolve(instance.requestFullscreen(opts));
                }
                // @ts-ignore
                if (instance.msRequestFullscreen) {
                    // @ts-ignore
                    return resolve(instance.msRequestFullscreen(opts));
                }
                // @ts-ignore
                if (instance.mozRequestFullScreen) {
                    // @ts-ignore
                    return resolve(instance.mozRequestFullScreen(opts));
                }
                // @ts-ignore
                if (instance.webkitRequestFullScreen) {
                    // @ts-ignore
                    return resolve(instance.webkitRequestFullScreen(opts));
                }
                throw new Error(message$2.NOT_SUPPORTED);
            });
        }
    );

    var _exitFullscreen = skrinkSerializer$2(
        /**
         * 
         * @returns {Promise<void>}
         */
        function () {
            return new Promise$3(function (resolve) {
                if (document.exitFullscreen) {
                    return resolve(document.exitFullscreen());
                }
                // @ts-ignore
                if (document.msExitFullscreen) {
                    // @ts-ignore
                    return resolve(document.msExitFullscreen());
                }
                // @ts-ignore
                if (document.mozCancelFullScreen) {
                    // @ts-ignore
                    return resolve(document.mozCancelFullScreen());
                }
                // @ts-ignore
                if (document.webkitExitFullscreen) {
                    // @ts-ignore
                    return resolve(document.webkitExitFullscreen());
                }
                resolve();
            });
        }
    );

    var _scrollTo = skrinkSerializer$2(
        /**
         * 
         * @param {number} x 
         * @param {number} y 
         * @param {ScrollBehavior} [behavior] 
         */
        function (
            x,
            y,
            behavior
        ) {
            if (env$2.BEHAVIOR) {
                globalThis$2.scrollTo({
                    behavior: behavior,
                    left: x,
                    top: y,
                });
            } else {
                globalThis$2.scrollTo(x, y);
            }
        }
    );

    var history = globalThis$2.history || null;

    var location$1 = globalThis$2.location || null;

    var Location = generateClass$2(Reflect$2.BASE, {
        protocol: generateGetterDescriptor$2(
            function () {
                throw new Error(message$2.ILLEGAL_INVOCATION);
            }
        ),
        host: generateGetterDescriptor$2(
            function () {
                throw new Error(message$2.ILLEGAL_INVOCATION);
            }
        ),
        hostname: generateGetterDescriptor$2(
            function () {
                throw new Error(message$2.ILLEGAL_INVOCATION);
            }
        ),
        port: generateGetterDescriptor$2(
            function () {
                throw new Error(message$2.ILLEGAL_INVOCATION);
            }
        ),
        pathname: generateGetterDescriptor$2(
            function () {
                throw new Error(message$2.ILLEGAL_INVOCATION);
            }
        ),
        search: generateGetterDescriptor$2(
            function () {
                throw new Error(message$2.ILLEGAL_INVOCATION);
            }
        ),
        hash: generateGetterDescriptor$2(
            function () {
                throw new Error(message$2.ILLEGAL_INVOCATION);
            }
        ),
        href: generateGetterDescriptor$2(
            function () {
                throw new Error(message$2.ILLEGAL_INVOCATION);
            }
        ),
        toString: generateMethodDescriptor$2(
            /**
             * 
             * @this {any}
             */
            function () {
                return this.href;
            }
        ),
    }, NOOP$2, "Location");

    var History = generateClass$2(Reflect$2.BASE, {
        location: generateGetterDescriptor$2(
            function () {
                throw new Error(message$2.ILLEGAL_INVOCATION);
            }
        ),
        length: generateGetterDescriptor$2(
            function () {
                throw new Error(message$2.ILLEGAL_INVOCATION);
            }
        ),
        state: generateGetterDescriptor$2(
            function () {
                throw new Error(message$2.ILLEGAL_INVOCATION);
            }
        ),
        back: generateMethodDescriptor$2(
            function () {
                throw new Error(message$2.ILLEGAL_INVOCATION);
            }
        ),
        forward: generateMethodDescriptor$2(
            function () {
                throw new Error(message$2.ILLEGAL_INVOCATION);
            }
        ),
        go: generateMethodDescriptor$2(
            function () {
                throw new Error(message$2.ILLEGAL_INVOCATION);
            }
        ),
        navigate: generateMethodDescriptor$2(
            function () {
                throw new Error(message$2.ILLEGAL_INVOCATION);
            }
        ),
        redirect: generateMethodDescriptor$2(
            function () {
                throw new Error(message$2.ILLEGAL_INVOCATION);
            }
        ),
        listen: generateMethodDescriptor$2(
            function () {
                throw new Error(message$2.ILLEGAL_INVOCATION);
            }
        ),
    }, NOOP$2, "History");

    var _history = createInstance$2(History, {
        location: generateNormalDescriptor$2(
            createInstance$2(Location, {
                protocol: generateGetterDescriptor$2(
                    function () {
                        return location$1.protocol;
                    }
                ),
                host: generateGetterDescriptor$2(
                    function () {
                        return location$1.host;
                    }
                ),
                hostname: generateGetterDescriptor$2(
                    function () {
                        return location$1.hostname;
                    }
                ),
                port: generateGetterDescriptor$2(
                    function () {
                        return location$1.port;
                    }
                ),
                pathname: generateGetterDescriptor$2(
                    function () {
                        return location$1.pathname;
                    }
                ),
                search: generateGetterDescriptor$2(
                    function () {
                        return location$1.search;
                    }
                ),
                hash: generateGetterDescriptor$2(
                    function () {
                        return location$1.hash;
                    }
                ),
                href: generateGetterDescriptor$2(
                    function () {
                        return location$1.href;
                    }
                ),
            })
        ),
        length: generateGetterDescriptor$2(
            function () {
                return history.length;
            }
        ),
        state: generateGetterDescriptor$2(
            function () {
                return history.state;
            }
        ),
        back: generateMethodDescriptor$2(
            function () {
                history.back();
            }
        ),
        forward: generateMethodDescriptor$2(
            function () {
                history.forward();
            }
        ),
        go: generateMethodDescriptor$2(
            /**
             * 
             * @param {number} [delta] 
             */
            function (
                delta
            ) {
                history.go(delta);
            }
        ),
        navigate: generateMethodDescriptor$2(
            /**
             * 
             * @param {string} url 
             * @param {any} [state] 
             */
            function (
                url,
                state
            ) {
                if (history.pushState) {
                    history.pushState(state, "", url);
                } else {
                    location$1.assign(url);
                    // @ts-ignore
                    history.state = state;
                }
            }
        ),
        redirect: generateMethodDescriptor$2(
            function (
                url,
                state
            ) {
                if (history.replaceState) {
                    history.replaceState(state, "", url);
                } else {
                    location$1.replace(url);
                    // @ts-ignore
                    history.state = state;
                }
            }
        ),
        listen: generateMethodDescriptor$2(
            /**
             * 
             * @param {Yarla.EventListenerOrEventListenerObject} listener 
             * @param {Yarla.AddEventListenerOptions} [opts] 
             */
            function (
                listener,
                opts
            ) {
                return bean.wrap(globalThis$2).listen("popstate", listener, opts);
            }
        ),
    });

    var Defer = defineProperties$2(generateClass$2(Reflect$2.BASE, {
        push: generateMethodDescriptor$2(
            /**
             * 
             * @this {Yarla.dom.Defer}
             * @param {Yarla.NOOP} fiber 
             */
            function (
                fiber
            ) {
                Reflect$2.getInternal(this).push(fiber);
            }
        ),
        digest: generateMethodDescriptor$2(
            /**
             * 
             * @this {Yarla.dom.Defer}
             */
            function () {
                Reflect$2.getInternal(this).splice(0).forEach(function (i) {
                    i.call(null);
                });
            }
        ),
    }, NOOP$2, "Defer"), {
        init: generateMethodDescriptor$2(
            /**
             * 
             * @this {Yarla.Proto<Yarla.dom.Defer>}
             */
            function () {
                return Reflect$2.construct(this, []);
            }
        ),
    });

    function getOwnPropertyDescriptors (
        argc
    ) {
        // eslint-disable-next-line es/no-object-getownpropertydescriptors
        if (Object.getOwnPropertyDescriptors) {
            // eslint-disable-next-line es/no-object-getownpropertydescriptors
            return Object.getOwnPropertyDescriptors(argc);
        }
        return Object.getOwnPropertyNames(argc).reduce(
            function (v, i) {
                return v[i] = Object.getOwnPropertyDescriptor(argc, i), v;
            },
            Object.create(null));
    }

    var RefObject = defineProperties$2(generateClass$2(Reflect$2.BASE, {
        target: generateGetterDescriptor$2(
            /**
             * 
             * @this {Yarla.RefObject<T>}
             * @returns {T}
             * @template T
             */
            function () {
                return Reflect$2.getInternal(this).target;
            }
        ),
    }, NOOP$2, "RefObject"), {
        init: generateMethodDescriptor$2(
            /**
             * 
             * @this {Yarla.Proto<Yarla.RefObject<T>>}
             * @param {T} [target] 
             * @template T
             */
            function (target) {
                return Reflect$2.construct(this, { target: target });
            }
        ),
    });

    var VMElement = (function () {
        return defineProperties$2(generateClass$2(Reflect$2.BASE, {
            key: generateGetterDescriptor$2(
                /**
                 * 
                 * @this {any}
                 * @returns {string | number | null | undefined}
                 */
                function () {
                    return Reflect$2.getInternal(this).key;
                }
            ),
            ref: generateGetterDescriptor$2(
                /**
                 * 
                 * @this {any}
                 * @returns {Yarla.RefObject<any> | null | undefined}
                 */
                function () {
                    return Reflect$2.getInternal(this).ref;
                }
            ),
            cmd: generateGetterDescriptor$2(
                /**
                 * 
                 * @this {any}
                 * @returns {ReadonlyArray<Yarla.Directive> | null | undefined}
                 */
                function () {
                    return Reflect$2.getInternal(this).cmd;
                }
            ),
            props: generateGetterDescriptor$2(
                /**
                 * 
                 * @this {any}
                 * @returns {any}
                 */
                function () {
                    return Reflect$2.getInternal(this).props;
                }
            ),
            owner: generateGetterDescriptor$2(
                /**
                 * 
                 * @this {any}
                 * @returns {any}
                 */
                function () {
                    return Reflect$2.getInternal(this).owner;
                }
            ),
            type: generateGetterDescriptor$2(
                /**
                 * 
                 * @this {any}
                 * @returns {string | Yarla.Component}
                 */
                function () {
                    return Reflect$2.getInternal(this).type;
                }
            ),
        }, NOOP$2, "VMElement"), {
            init: generateMethodDescriptor$2(
                /**
                 * 
                 * @this {Yarla.Proto<Yarla.VMElement<T>>}
                 * @param {T} type 
                 * @param {any} props
                 * @returns {Yarla.VMElement<T>} 
                 * @template T
                 */
                function (type, props) {
                    var properties = {};
                    var intrinsics = isString$2(type);
                    for (var i in props) {
                        var v = props[i];
                        if (isNullOrUndefined$2(v)) {
                            continue;
                        }
                        if (i === "cmd" ||
                            i === "key" ||
                            i === "ref" ||
                            i === "children") {
                            continue;
                        }
                        if (intrinsics) {
                            if (i === "class") {
                                properties[i] = flatClassAttribute(v);
                                continue;
                            }
                            if (i === "style") {
                                properties[i] = flatStyleAttribute(v);
                                continue;
                            }
                            if (isFormElementsExtraAttribute(i, type)) {
                                defineProperty$2(properties, i, generateNormalDescriptor$2(v));
                                continue;
                            }
                        }
                        properties[i] = v;
                    }
                    var c = props ? props.cmd : null;
                    var k = props ? props.key : null;
                    var r = props ? props.ref : null;
                    var m = props ? props.children : null;
                    var n = flat$2(arguments, 2);
                    return Reflect$2.construct(this, {
                        type: type,
                        owner: zone.currentTarget,
                        props: Object.freeze(defineProperties$2(properties, {
                            children: generateNormalDescriptor$2(flat$2([m, n], 0, Infinity, true)),
                        })),
                        cmd: isNullOrUndefined$2(c) ? null : flat$2([c], 0, Infinity, true),
                        key: isString$2(k) || isNumber$2(k) ? k : null,
                        ref: isInstanceOf$2(r, RefObject) ? r : null,
                    });
                }
            ),
        });
        /**
         * 
         * @param {any} argc 
         * @returns {string}
         */
        function flatClassAttribute(
            argc
        ) {
            if (isObject$2(argc)) {
                var r = [];
                for (var i in argc) {
                    if (argc[i]) {
                        r.push(i);
                    }
                }
                return r.join(" ");
            }
            return String(argc);
        }
        /**
         * 
         * @param {any} argc 
         * @returns {string}
         */
        function flatStyleAttribute(
            argc
        ) {
            if (isObject$2(argc)) {
                var r = [];
                for (var i in argc) {
                    if (isValid$2(argc[i])) {
                        r.push(i.replace(/[A-Z]/g, function (i) {
                            return "-" + i.toUpperCase();
                        }) + ":" + argc[i]);
                    }
                }
                return r.join(";");
            }
            return String(argc);
        }
        /**
         * 
         * @param {string} attributeName 
         * @param {any} nodeName 
         * @returns {boolean}
         */
        function isFormElementsExtraAttribute(
            attributeName,
            nodeName
        ) {
            return (attributeName === "normalize" || attributeName === "validator") && (nodeName === "input" || nodeName === "select" || nodeName === "textarea");
        }
    }());

    /**
     * 
     * @param {ReadonlyArray<any> | null | undefined} dependence1 
     * @param {ReadonlyArray<any> | null | undefined} dependence2 
     */
    function compareDifferList (
        dependence1,
        dependence2
    ) {
        return !dependence1
            || !dependence2
            || dependence1.length !== dependence2.length
            || dependence1.some(function (v, i) { return v !== dependence2[i]; });
    }

    var EffectionCollection = defineProperties$2(generateClass$2(Reflect$2.BASE, {
        reset: generateMethodDescriptor$2(
            /**
             * 
             * @this {Yarla.dom.EffectionCollection}
             */
            function () {
                return Reflect$2.getInternal(this).index = 0, this;
            }
        ),
        push: generateMethodDescriptor$2(
            /**
             * 
             * @this {Yarla.dom.EffectionCollection}
             * @param {Yarla.Effection} effection 
             * @param {ReadonlyArray<any>} [dependencies] 
             * @returns {Yarla.NOOP}
             */
            function (
                effection,
                dependencies
            ) {
                var x = Reflect$2.getInternal(this);
                var r = {
                    f: effection,
                    d: dependencies,
                    b: isNullOrUndefined$2(dependencies),
                    v: null,
                };
                x.value.push(r);
                return skrinkSerializer$2(
                    function () {
                        r.v = r.f.call(null);
                    }
                );
            }
        ),
        next: generateMethodDescriptor$2(
            /**
             * 
             * @this {Yarla.dom.EffectionCollection}
             * @param {Yarla.Effection} effection 
             * @param {ReadonlyArray<any>} [dependencies] 
             * @returns {Yarla.NOOP}
             */
            function (
                effection,
                dependencies
            ) {
                var x = Reflect$2.getInternal(this);
                if (x.index >= x.value.length) {
                    throw new Error(message$2.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                }
                var r = x.value[x.index++];
                if (r.b || compareDifferList(r.d, dependencies)) {
                    r.f = effection;
                    r.d = dependencies;
                    if (isFunction$2(r.v)) {
                        r.v.call(null);
                    } else if (r.v) {
                        r.v.cancel();
                    }
                    return skrinkSerializer$2(
                        function () {
                            r.v = r.f.call(null);
                        }
                    );
                }
                return NOOP$2;
            }
        ),
        destroy: generateMethodDescriptor$2(
            /**
             * 
             * @this {Yarla.dom.EffectionCollection}
             */
            function () {
                Reflect$2.getInternal(this).value.splice(0).forEach(function (i) {
                    if (isFunction$2(i.v)) {
                        i.v.call(null);
                    } else if (i.v) {
                        i.v.cancel();
                    }
                });
            }
        ),
    }, NOOP$2, "EffectionCollection"), {
        init: generateMethodDescriptor$2(
            /**
             * 
             * @this {Yarla.Proto<Yarla.dom.EffectionCollection>}
             */
            function (
            ) {
                return Reflect$2.construct(this, { index: 0, value: [] });
            }
        ),
    });

    var MemorableCollection = defineProperties$2(generateClass$2(Reflect$2.BASE, {
        reset: generateMethodDescriptor$2(
            /**
             * 
             * @this {Yarla.dom.MemorableCollection}
             */
            function () {
                return Reflect$2.getInternal(this).index = 0, this;
            }
        ),
        push: generateMethodDescriptor$2(
            /**
             * 
             * @this {Yarla.dom.MemorableCollection}
             * @param {() => T} factory 
             * @param {ReadonlyArray<any>} [dependencies] 
             * @returns {T}
             * @template T
             */
            function (
                factory,
                dependencies
            ) {
                var x = Reflect$2.getInternal(this);
                var r = {
                    d: dependencies,
                    b: isNullOrUndefined$2(dependencies),
                    v: factory.call(null),
                };
                x.value.push(r);
                return r.v;
            }
        ),
        next: generateMethodDescriptor$2(
            /**
             * 
             * @this {Yarla.dom.MemorableCollection}
             * @param {() => T} factory 
             * @param {ReadonlyArray<any>} [dependencies] 
             * @returns {T}
             * @template T
             */
            function (
                factory,
                dependencies
            ) {
                var x = Reflect$2.getInternal(this);
                if (x.index >= x.value.length) {
                    throw new Error(message$2.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                }
                var r = x.value[x.index++];
                if (r.b || compareDifferList(r.d, dependencies)) {
                    r.v = factory.call(null);
                    r.d = dependencies;
                }
                return r.v;
            }
        ),
        destroy: generateMethodDescriptor$2(
            /**
             * 
             * @this {Yarla.dom.MemorableCollection}
             */
            function () {
                Reflect$2.getInternal(this).value.splice(0);
            }
        ),
    }, NOOP$2, "MemorableCollection"), {
        init: generateMethodDescriptor$2(
            /**
             * 
             * @this {Yarla.Proto<Yarla.dom.MemorableCollection>}
             */
            function (
            ) {
                return Reflect$2.construct(this, { index: 0, value: [] });
            }
        ),
    });

    var ReferenceCollection = defineProperties$2(generateClass$2(Reflect$2.BASE, {
        reset: generateMethodDescriptor$2(
            /**
             * 
             * @this {Yarla.dom.ReferenceCollection}
             */
            function () {
                return Reflect$2.getInternal(this).index = 0, this;
            }
        ),
        push: generateMethodDescriptor$2(
            /**
             * 
             * @this {Yarla.dom.ReferenceCollection}
             * @param {T} target 
             * @returns {Yarla.RefObject<T>}
             * @template T
             */
            function (
                target
            ) {
                var x = Reflect$2.getInternal(this);
                var r = RefObject.init(target);
                x.value.push(r);
                return r;
            }
        ),
        next: generateMethodDescriptor$2(
            /**
             * 
             * @this {Yarla.dom.ReferenceCollection}
             * @returns {Yarla.RefObject<any>}
             */
            function () {
                var x = Reflect$2.getInternal(this);
                if (x.index >= x.value.length) {
                    throw new Error(message$2.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                }
                var r = x.value[x.index++];
                return r;
            }
        ),
        destroy: generateMethodDescriptor$2(
            /**
             * 
             * @this {Yarla.dom.ReferenceCollection}
             */
            function () {
                Reflect$2.getInternal(this).value.splice(0).forEach(function (i) {
                    Reflect$2.getInternal(i).target = void 0;
                });
            }
        ),
    }, NOOP$2, "ReferenceCollection"), {
        init: generateMethodDescriptor$2(
            /**
             * 
             * @this {Yarla.Proto<Yarla.dom.ReferenceCollection>}
             */
            function () {
                return Reflect$2.construct(this, { index: 0, value: [] });
            }
        ),
    });

    var SituationCollection = defineProperties$2(generateClass$2(Reflect$2.BASE, {
        reset: generateMethodDescriptor$2(
            /**
             * 
             * @this {Yarla.dom.SituationCollection}
             */
            function () {
                return Reflect$2.getInternal(this).index = 0, this;
            }
        ),
        push: generateMethodDescriptor$2(
            /**
             * 
             * @this {Yarla.dom.SituationCollection}
             * @param {T} state
             * @returns {Yarla.Situation<T>}
             * @template T 
             */
            function (
                state
            ) {
                var x = Reflect$2.getInternal(this);
                var r = {
                    get v() {
                        return state;
                    },
                    f: skrinkSerializer$2(
                        function (v, ignoreUpdate) {
                            if (state !== v) {
                                state = v;
                                if (ignoreUpdate) {
                                    return;
                                }
                                zone.forceUpdate();
                            }
                        }
                    ),
                };
                x.value.push(r);
                return [
                    r.v,
                    r.f,
                ];
            }
        ),
        next: generateMethodDescriptor$2(
            /**
             * 
             * @this {Yarla.dom.SituationCollection}
             * @returns {Yarla.Situation<any>}
             */
            function () {
                var x = Reflect$2.getInternal(this);
                if (x.index >= x.value.length) {
                    throw new Error(message$2.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                }
                var r = x.value[x.index++];
                return [
                    r.v,
                    r.f,
                ];
            }
        ),
        destroy: generateMethodDescriptor$2(
            /**
             * 
             * @this {Yarla.dom.SituationCollection}
             */
            function () {
                Reflect$2.getInternal(this).value.splice(0);
            }
        ),
    }, NOOP$2, "SituationCollection"), {
        init: generateMethodDescriptor$2(
            /**
             * 
             * @this {Yarla.Proto<Yarla.dom.SituationCollection>}
             */
            function () {
                return Reflect$2.construct(this, { index: 0, value: [] });
            }
        ),
    });

    var isDrearyComponent = skrinkSerializer$2(
        /**
         * 
         * @param {Yarla.Component} component 
         */
        function (
            component
        ) {
            return Reflect$2.hasMetadata(component) ? !!Reflect$2.getMetadata(component).ignoreUpdate : false;
        }
    );

    var isShadowComponent = skrinkSerializer$2(
        /**
         * 
         * @param {Yarla.Component} component 
         */
        function (
            component
        ) {
            return Reflect$2.hasMetadata(component) ? !!Reflect$2.getMetadata(component).shadowRoot : false;
        }
    );

    var HTML_ATTR_MAPPING = {
        autoFocus: "autofocus",
        autoPlay: "autoplay",
        class: "className",
        for: "htmlFor",
        novalidate: "noValidate",
        formnovalidate: "formNoValidate",
        readonly: "readOnly",
        accentHeight: "accent-height",
        acceptCharset: "accept-charset",
        alignmentBaseline: "alignment-baseline",
        altimgHeight: "altimg-height",
        altimgValign: "altimg-valign",
        altimgWidth: "altimg-width",
        arabicForm: "arabic-form",
        baselineShift: "baseline-shift",
        capHeight: "cap-height",
        clipPath: "clip-path",
        clipRule: "clip-rule",
        colorInterpolation: "color-interpolation",
        colorInterpolationFilters: "color-interpolation-filters",
        colorProfile: "color-profile",
        colorRendering: "color-rendering",
        dominantBaseline: "dominant-baseline",
        enableBackground: "enable-background",
        fillOpacity: "fill-opacity",
        fillRule: "fill-rule",
        floodColor: "flood-color",
        floodOpacity: "flood-opacity",
        fontFamily: "font-family",
        fontSize: "font-size",
        fontSizeAdjust: "font-size-adjust",
        fontStretch: "font-stretch",
        fontStyle: "font-style",
        fontVariant: "font-variant",
        fontWeight: "font-weight",
        glyphName: "glyph-name",
        glyphOrientationHorizontal: "glyph-orientation-horizontal",
        glyphOrientationVertical: "glyph-orientation-vertical",
        horizAdvX: "horiz-adv-x",
        horizOriginX: "horiz-origin-x",
        httpEquiv: "http-equiv",
        imageRendering: "image-rendering",
        letterSpacing: "letter-spacing",
        lightingColor: "lighting-color",
        markerEnd: "marker-end",
        markerMid: "marker-mid",
        markerStart: "marker-start",
        overlinePosition: "overline-position",
        overlineThickness: "overline-thickness",
        paintOrder: "paint-order",
        panose1: "panose-1",
        pointerEvents: "pointer-events",
        renderingIntent: "rendering-intent",
        shapeRendering: "shape-rendering",
        stopColor: "stop-color",
        stopOpacity: "stop-opacity",
        strikethroughPosition: "strikethrough-position",
        strikethroughThickness: "strikethrough-thickness",
        strokeDasharray: "stroke-dasharray",
        strokeDashoffset: "stroke-dashoffset",
        strokeLinecap: "stroke-linecap",
        strokeLinejoin: "stroke-linejoin",
        strokeMiterlimit: "stroke-miterlimit",
        strokeOpacity: "stroke-opacity",
        strokeWidth: "stroke-width",
        textAnchor: "text-anchor",
        textDecoration: "text-decoration",
        textRendering: "text-rendering",
        underlinePosition: "underline-position",
        underlineThickness: "underline-thickness",
        unicodeBidi: "unicode-bidi",
        unicodeRange: "unicode-range",
        unitsPerEm: "units-per-em",
        vAlphabetic: "v-alphabetic",
        vHanging: "v-hanging",
        vIdeographic: "v-ideographic",
        vMathematical: "v-mathematical",
        vertAdvY: "vert-adv-y",
        vertOriginX: "vert-origin-x",
        vertOriginY: "vert-origin-y",
        wordSpacing: "word-spacing",
        writingMode: "writing-mode",
        xHeight: "x-height",
        xlinkActuate: "xlink:actuate",
        xlinkArcrole: "xlink:arcrole",
        xlinkHref: "xlink:href",
        xlinkRole: "xlink:role",
        xlinkShow: "xlink:show",
        xlinkTitle: "xlink:title",
        xlinkType: "xlink:type",
        xmlBase: "xml:base",
        xmlSpace: "xml:space",
    };

    var getAttrMapping = skrinkSerializer$2(
        /**
         * 
         * @param {string} attributeName 
         */
        function (
            attributeName
        ) {
            return HTML_ATTR_MAPPING[attributeName] || attributeName;
        }
    );

    var HTML_ATTR_SPECIAL = {
        async: 1,
        autofocus: 1,
        autoplay: 1,
        checked: 1,
        className: 4,
        controls: 1,
        default: 1,
        defaultValue: 2,
        defaultChecked: 1,
        defer: 1,
        disabled: 1,
        hidden: 1,
        htmlFor: 2,
        innerHTML: 2,
        innerText: 2,
        textContent: 2,
        loop: 1,
        multiple: 1,
        muted: 1,
        noValidate: 1,
        formNoValidate: 1,
        open: 1,
        readOnly: 1,
        required: 1,
        reversed: 1,
        scoped: 1,
        selected: 1,
        style: 3,
        value: 2,
        children: -1,
        normalize: -1,
        validator: -1,
    };

    var getAttrSpecial = skrinkSerializer$2(
        /**
         * 
         * @param {string} attributeName 
         */
        function (
            attributeName
        ) {
            return HTML_ATTR_SPECIAL[attributeName] || 0;
        }
    );

    var removeAttribute = skrinkSerializer$2(
        /**
         * 
         * @param {HTMLElement} element 
         * @param {string} attributeName 
         */
        function (
            element,
            attributeName
        ) {
            switch (getAttrSpecial(attributeName = getAttrMapping(attributeName))) {
                case 0:
                    element.removeAttribute(attributeName);
                    break;
                case 1:
                    element[attributeName] = false;
                    break;
                case 2:
                    element[attributeName] = "";
                    break;
                case 3:
                    element.style.cssText = "";
                    break;
                case 4:
                    element.className = "";
                    break;
            }
        }
    );

    var HTML_SELF_CLOSING = {
        area: true,
        base: true,
        br: true,
        col: true,
        embed: true,
        hr: true,
        img: true,
        input: true,
        keygen: true,
        link: true,
        menuitem: true,
        meta: true,
        param: true,
        source: true,
        track: true,
        wbr: true,
    };

    var getSelfClosing = skrinkSerializer$2(
        /**
         * 
         * @param {string} tagName 
         */
        function (
            tagName
        ) {
            return HTML_SELF_CLOSING[tagName] || false;
        }
    );

    var HTML_TYPE_SIMILAR = {
        email: true,
        number: true,
        password: true,
        search: true,
        text: true,
        tel: true,
        url: true,
    };

    var getTypeSimilar = skrinkSerializer$2(
        /**
         * 
         * @param {string} [inputType] 
         */
        function (
            inputType
        ) {
            return isNullOrUndefined$2(inputType) || HTML_TYPE_SIMILAR[inputType] || false;
        }
    );

    var judgmentRedraw = skrinkSerializer$2(
        /**
         * 
         * @param {Yarla.VMElement} VMNode1 
         * @param {Yarla.VMElement} VMNode2 
         */
        function (
            VMNode1,
            VMNode2
        ) {
            var i1 = isInstanceOf$2(VMNode1, VMElement);
            var i2 = isInstanceOf$2(VMNode2, VMElement);
            if (i1 !== i2) {
                return true;
            }
            if (i1) {
                var k1 = VMNode1.key;
                var k2 = VMNode2.key;
                if (k1 !== k2) {
                    return true;
                }
                var t1 = VMNode1.type;
                var t2 = VMNode2.type;
                if (t1 !== t2) {
                    return true;
                }
                if (t1 === "input") {
                    var p1 = VMNode1.props.type;
                    var p2 = VMNode2.props.type;
                    if (p1 !== p2) {
                        return getTypeSimilar(p1) !== getTypeSimilar(p2);
                    }
                }
            }
            return false;
        }
    );

    var createTextNode = skrinkSerializer$2(
        /**
         * 
         * @param {string} textContent 
         * @param {Document} document 
         */
        function (
            textContent,
            document
        ) {
            return document.createTextNode(textContent);
        }
    );

    var remove = skrinkSerializer$2(
        /**
         * 
         * @param {Yarla.Object<T, Text | Element>} node 
         * @returns {T}
         * @template T
         */
        function (
            node
        ) {
            if (node.remove) {
                node.remove();
            } else if (node.parentNode) {
                node.parentNode.removeChild(node);
            }
            // @ts-ignore
            return node;
        }
    );

    var VMFragment = defineProperties$2(generateClass$2(Reflect$2.BASE, {
        nodeName: generateGetterDescriptor$2(
            /**
             * 
             * @this {Yarla.dom.VMFragment}
             */
            function () {
                return Reflect$2.getInternal(this).nodeName;
            }
        ),
        nodeType: generateGetterDescriptor$2(
            /**
             * 
             * @this {Yarla.dom.VMFragment}
             */
            function () {
                return Reflect$2.getInternal(this).nodeType;
            }
        ),
        childNodes: generateGetterDescriptor$2(
            /**
             * 
             * @this {Yarla.dom.VMFragment}
             */
            function () {
                return Reflect$2.getInternal(this).childNodes;
            }
        ),
        isConnected: generateGetterDescriptor$2(
            /**
             * 
             * @this {Yarla.dom.VMFragment}
             */
            function () {
                for (var
                    i = 0,
                    n = this.childNodes,
                    l = n.length;
                    i < l;
                    i++
                ) {
                    if (!isConnected(n[i])) {
                        return false;
                    }
                }
                return this.childNodes.length > 0;
            }
        ),
        nextSibling: generateGetterDescriptor$2(
            /**
             * 
             * @this {Yarla.dom.VMFragment}
             */
            function () {
                var n = this.childNodes;
                var l = n.length;
                if (l > 0) {
                    return n[l - 1].nextSibling;
                }
                return null;
            }
        ),
        previousSibling: generateGetterDescriptor$2(
            /**
             * 
             * @this {Yarla.dom.VMFragment}
             * @returns {Node | null}
             */
            function () {
                var n = this.childNodes;
                var l = n.length;
                if (l > 0) {
                    return n[0].previousSibling;
                }
                return null;
            }
        ),
        addEventListener: generateMethodDescriptor$2(
            /**
             * 
             * @this {Yarla.dom.VMFragment}
             * @param {string} type 
             * @param {EventListenerOrEventListenerObject} listener 
             * @param {AddEventListenerOptions} [opts] 
             */
            function (
                type,
                listener,
                opts
            ) {
                for (var
                    i = 0,
                    n = this.childNodes,
                    l = n.length;
                    i < l;
                    i++
                ) {
                    n[i].addEventListener(type, listener, opts);
                }
            }
        ),
        removeEventListener: generateMethodDescriptor$2(
            /**
             * 
             * @this {Yarla.dom.VMFragment}
             * @param {string} type 
             * @param {EventListenerOrEventListenerObject} listener 
             * @param {EventListenerOptions} [opts] 
             */
            function (
                type,
                listener,
                opts
            ) {
                for (var
                    i = 0,
                    n = this.childNodes,
                    l = n.length;
                    i < l;
                    i++
                ) {
                    n[i].removeEventListener(type, listener, opts);
                }
            }
        ),
        dispatchEvent: generateMethodDescriptor$2(
            /**
             * 
             * @this {Yarla.dom.VMFragment}
             * @param {Event} event 
             */
            function (
                event
            ) {
                for (var
                    i = 0,
                    n = this.childNodes,
                    l = n.length;
                    i < l;
                    i++
                ) {
                    n[i].dispatchEvent(event);
                }
                return event.defaultPrevented;
            }
        ),
        insertBefore: generateMethodDescriptor$2(
            /**
             * 
             * @this {Yarla.dom.VMFragment}
             * @param {ChildNode} node 
             * @param {ChildNode | null} previous 
             * @returns {Node}
             */
            function (
                node,
                previous
            ) {
                var n = this.childNodes;
                if (previous) {
                    var l = n.indexOf(previous);
                    if (l === -1) {
                        throw new Error(message$2.FAILED_TO_EXECUTE_INSERT);
                    }
                    n.splice(l, 0, node);
                } else {
                    n.push(node);
                }
                return node;
            }
        ),
        removeChild: generateMethodDescriptor$2(
            /**
             * 
             * @this {Yarla.dom.VMFragment}
             * @param {ChildNode} node 
             * @returns {Node}
             */
            function (
                node
            ) {
                var n = this.childNodes;
                var l = n.indexOf(node);
                if (l === -1) {
                    throw new Error(message$2.FAILED_TO_EXECUTE_REMOVE);
                }
                return n.splice(l, 1).forEach(remove), node;
            }
        ),
        contains: generateMethodDescriptor$2(
            /**
             * 
             * @this {Yarla.dom.VMFragment}
             * @param {Node} node 
             * @returns {boolean}
             */
            function (
                node
            ) {
                for (var
                    i = 0,
                    n = this.childNodes,
                    l = n.length;
                    i < l;
                    i++
                ) {
                    if (n[i] === node || contains(n[i], node)) {
                        return true;
                    }
                }
                return false;
            }
        ),
        remove: generateMethodDescriptor$2(
            /**
             * 
             * @this {Yarla.dom.VMFragment}
             */
            function () {
                this.childNodes.forEach(remove);
            }
        ),
        textContent: {
            configurable: true,
            get: skrinkSerializer$2(
                /**
                 * 
                 * @this {Node}
                 */
                function () {
                    var r = [];
                    for (var
                        i = 0,
                        n = this.childNodes,
                        l = n.length;
                        i < l;
                        i++
                    ) {
                        r.push(n[i].textContent);
                    }
                    return r.join("");
                }
            ),
            set: skrinkSerializer$2(
                function () {
                    throw new Error(message$2.NOT_SUPPORTED);
                }
            ),
        },
    }, globalThis$2.Node || NOOP$2, "VMFragment"), {
        init: generateMethodDescriptor$2(
            /**
             * 
             * @this {Yarla.Proto<Yarla.dom.VMFragment>}
             */
            function () {
                return Reflect$2.construct(this, {
                    childNodes: [],
                    nodeName: "VMFragment",
                    nodeType: -1,
                });
            }
        ),
    });

    var createFragment = skrinkSerializer$2(
        function () {
            return VMFragment.init();
        }
    );

    var createElement = skrinkSerializer$2(
        /**
         * 
         * @param {string} tagName 
         * @param {Document} document 
         * @param {string | null} namespaceURI 
         */
        function (
            tagName,
            document,
            namespaceURI
        ) {
            return namespaceURI ? document.createElementNS(namespaceURI, tagName) : document.createElement(tagName);
        }
    );

    /**
     * Returns true if the sequence of elements of searchString converted to a String is the
     * same as the corresponding elements of this object (converted to a String) starting at
     * position. Otherwise returns false.
     * 
     * @param {string} argc Base string.
     * @param {string} value String to search for.
     * @param {number} [position] Search starting position.
     * @returns {boolean}
     */
    function startsWith$2 (
        argc,
        value,
        position
    ) {
        for (var
            i = 0,
            p = position || 0,
            l = value.length;
            i < l;
            i++
        ) {
            if (value.charAt(i) !== argc.charAt(p + i)) {
                return false;
            }
        }
        return true;
    }

    var judgmentEvent = skrinkSerializer$2(
        /**
         * 
         * @param {string} attributeName 
         */
        function (
            attributeName
        ) {
            if (startsWith$2(attributeName, "on")) {
                var t,
                    /** @type {AddEventListenerOptions} */
                    o = {};
                var i = attributeName.indexOf(":");
                if (i === -1) {
                    t = attributeName.slice(2);
                } else {
                    t = attributeName.slice(2, i);
                    switch (attributeName.slice(i + 1)) {
                        case "all":
                            o.capture = true;
                            o.passive = false;
                            break;
                        case "capture":
                            o.capture = true;
                            break;
                        case "passive":
                            o.passive = false;
                            break;
                    }
                }
                return {
                    type: t,
                    opts: o,
                };
            }
        }
    );

    var setAttribute = skrinkSerializer$2(
        /**
         * 
         * @param {HTMLElement} element 
         * @param {string} attributeName 
         * @param {any} value
         */
        function (
            element,
            attributeName,
            value
        ) {
            switch (getAttrSpecial(attributeName = getAttrMapping(attributeName))) {
                case 0:
                    element.setAttribute(attributeName, String(value));
                    break;
                case 1:
                    element[attributeName] = Boolean(value);
                    break;
                case 2:
                    element[attributeName] = String(value);
                    break;
                case 3:
                    element.style.cssText = value;
                    break;
                case 4:
                    element.className = value;
                    break;
            }
        }
    );

    var insertBefore = skrinkSerializer$2(
        /**
         * 
         * @param {Element} parentNode 
         * @param {Node} insertNode 
         * @param {Node | null} [previous] 
         */
        function insertBefore(
            parentNode,
            insertNode,
            previous
        ) {
            if (parentNode.nodeType === -1) {
                return parentNode.insertBefore(insertNode, previous || null);
            }
            if (insertNode.nodeType === -1) {
                return insertNode.childNodes.forEach(function (insertNode) {
                    insertBefore(parentNode, insertNode, previous || null);
                }), insertNode;
            }
            if (parentNode.shadowRoot) {
                return parentNode.shadowRoot.insertBefore(insertNode, previous || null);
            }
            return parentNode.insertBefore(insertNode, previous || null);
        }
    );

    var isBigInt$2 = skrinkSerializer$2(
        /**
         * 
         * Determines if the input parameter is a bigint.
         * 
         * @param {any} argc Any object.
         * @returns {argc is bigint}
         */
        function (
            argc
        ) {
            return typeof argc === "bigint" || className$2(argc) === "BigInt";
        }
    );

    var isSymbol$2 = skrinkSerializer$2(
        /**
         * 
         * Determines if the input parameter is a symbol.
         * 
         * @param {any} argc Any object.
         * @returns {argc is symbol}
         */
        function (
            argc
        ) {
            return typeof argc === "symbol" || className$2(argc) === "Symbol";
        }
    );

    var isRegExp = skrinkSerializer$2(
        /**
         * 
         * Determines if the input parameter is a RegExp.
         * 
         * @param {any} argc Any object.
         * @returns {argc is RegExp}
         */
        function (
            argc
        ) {
            return isInstanceOf$2(argc, RegExp);
        }
    );

    var isNaN$1 = skrinkSerializer$2(
        // eslint-disable-next-line es/no-number-isnan
        Number.isNaN || function (
            /**
             * @type {number}
             */
            argc
        ) {
            return isNumber$2(argc) && globalThis$2.isNaN(argc);
        }
    );

    var keys$2 = skrinkSerializer$2(
        /**
         * 
         * Returns the names of the enumerable string properties and methods of an object.
         * 
         * @param {any} argc Object that contains the properties and methods.
         * @param {boolean} [inherit] Indicates whether to return the names of the inherited properties and methods.
         * @returns {ReadonlyArray<string>}
         */
        function (
            argc,
            inherit
        ) {
            var r = [];
            for (var n in argc) {
                if (inherit || hasOwnProperty$2(argc, n)) {
                    r.push(n);
                }
            }
            return r;
        }
    );

    var isEqual = skrinkSerializer$2(
        /**
         * 
         * Compares two objects for equality.
         * 
         * @param {any} arg1 First object.
         * @param {any} arg2 Second object.
         * @returns {boolean}
         */
        function isEqual(
            arg1,
            arg2
        ) {
            if (arg1 === arg2) {
                return true;
            }
            if (isNumber$2(arg1) && isNumber$2(arg2)) {
                return (isNaN$1(arg1) && isNaN$1(arg2)) || arg1.valueOf() === arg2.valueOf();
            }
            if (isString$2(arg1) && isString$2(arg2)) {
                return arg1.valueOf() === arg2.valueOf();
            }
            if (isBigInt$2(arg1) && isBigInt$2(arg2)) {
                return arg1.valueOf() === arg2.valueOf();
            }
            if (isSymbol$2(arg1) && isSymbol$2(arg2)) {
                return arg1.valueOf() === arg2.valueOf();
            }
            if (isBoolean$2(arg1) && isBoolean$2(arg2)) {
                return arg1.valueOf() === arg2.valueOf();
            }
            if (isDate$2(arg1) && isDate$2(arg2)) {
                return arg1.valueOf() === arg2.valueOf();
            }
            if (isRegExp(arg1) && isRegExp(arg2)) {
                return arg1.source === arg2.source && arg1.flags === arg2.flags;
            }
            if (isArray$2(arg1) && isArray$2(arg2)) {
                return arg1.length === arg2.length && arg1.every(function (v, i) { return isEqual(v, arg2[i]); });
            }
            if (isObject$2(arg1) && isObject$2(arg2)) {
                return (function (key1, key2) { return key1.length === key2.length && key1.every(function (i) { return key2.indexOf(i) !== -1; }) && key1.every(function (i) { return isEqual(arg1[i], arg2[i]); }); }(keys$2(arg1), keys$2(arg2)));
            }
            return false;
        }
    );

    var compare = skrinkSerializer$2(
        /**
         * 
         * @param {Readonly<Record<string, any>>} properties1 
         * @param {Readonly<Record<string, any>>} properties2 
         */
        function (
            properties1,
            properties2
        ) {
            var r = {
                added: {},
                deleted: {},
                updated: {},
            };
            if (properties1 !== properties2) {
                for (var name in properties1) {
                    if (!(name in properties2)) {
                        r.deleted[name] = properties1[name];
                    } else if (!isEqual(properties1[name], properties2[name])) {
                        r.updated[name] = [properties1[name], properties2[name]];
                    }
                }
                for (var name in properties2) {
                    if (!(name in properties1)) {
                        r.added[name] = properties2[name];
                    }
                }
            }
            return r;
        }
    );

    var VMRenderer = (function () {
        /**
         * 
         * @param {number} phase
         * @param {Yarla.Object<T, (this: Yarla.dom.VMRenderer, ...argv: any[]) => any>} processor
         * @returns {T}
         * @template T 
         */
        function generate(
            phase,
            processor
        ) {
            // @ts-ignore
            return skrinkSerializer$2(
                /**
                 * @this {Yarla.dom.VMRenderer}
                 */
                function () {
                    /** @type {Yarla.Writable<Yarla.dom.VMRenderer>} */
                    var instance = Reflect$2.getInternal(this);
                    instance.effections.reset();
                    instance.references.reset();
                    instance.situations.reset();
                    try {
                        return instance.phase = phase, zone.scope(this, function () {
                            // @ts-ignore
                            return processor.apply(this, arguments);
                            //
                        }, flat$2(arguments));
                    } finally {
                        instance.phase = Renderer.NONE;
                    }
                }
            );
        }
        /**
         * 
         * @param {Yarla.Object<T, (this: Yarla.dom.VMRenderer, ...argv: any[]) => any>} processor
         * @returns {Yarla.NormalPropertyDescriptor<T>}
         * @template T 
         */
        function generateCreateDescriptor(
            processor
        ) {
            return generateNormalDescriptor$2(generate(Renderer.PHASE_CREATING, processor));
        }
        /**
         * 
         * @param {Yarla.Object<T, (this: Yarla.dom.VMRenderer, ...argv: any[]) => any>} processor
         * @returns {Yarla.NormalPropertyDescriptor<T>}
         * @template T 
         */
        function generateUpdateDescriptor(
            processor
        ) {
            return generateNormalDescriptor$2(generate(Renderer.PHASE_UPDATING, processor));
        }
        /**
         * 
         * @param {Yarla.dom.VMRenderer} instance 
         * @param {ReadonlyArray<any>} children 
         * @param {Document} document 
         * @param {string | null} namespaceURI 
         * @param {any} context 
         */
        function applyChildrenCreate(
            instance,
            children,
            document,
            namespaceURI,
            context
        ) {
            for (var
                i = 0,
                l = children.length;
                i < l;
                i++
            ) {
                var r = Renderer.init(instance, children[i], instance.defer);
                var n = r.create(children[i], document, namespaceURI, context);
                insertBefore(instance.target, n);
                instance.children.push(r);
            }
        }
        /**
         * 
         * @param {Yarla.dom.VMRenderer} instance 
         * @param {ReadonlyArray<Yarla.VMNode>} children 
         * @param {Document} document 
         * @param {string | null} namespaceURI 
         * @param {any} context 
         */
        function applyChildrenUpdate(
            instance,
            children,
            document,
            namespaceURI,
            context
        ) {
            /**
             * 
             * @param {object} oldRenderer 
             * @param {Yarla.VMNode} oldRenderer.VMNode
             * @param {object} newRenderer 
             * @param {Yarla.VMNode} newRenderer.VMNode
             * @returns {boolean}
             */
            function VMModCompareWithElements(
                oldRenderer,
                newRenderer
            ) {
                return !judgmentRedraw(oldRenderer.VMNode, newRenderer.VMNode);
            }
            /**
             * 
             * @param {Node | null} previous 
             * @param {Node} node 
             * @param {boolean} [need] 
             */
            function VMModMoveOrInsertElement(
                previous,
                node,
                need
            ) {
                if (need || !isConnected(node)) {
                    insertBefore(instance.target, node, previous);
                }
            }
            /**
             * 
             * @param {object} oldRenderer 
             * @param {Node} oldRenderer.target
             */
            function VMModGetOldRenderElement(
                oldRenderer
            ) {
                return oldRenderer.target;
            }
            /**
             * 
             * @param {object} newRenderer 
             * @param {Node | null} newRenderer.target
             */
            function VMModGetNewRenderElement(
                newRenderer
            ) {
                return newRenderer ? newRenderer.target : null;
            }
            /**
             * 
             * @param {Yarla.dom.VMRenderer} oldRenderer 
             * @param {object} newRenderer 
             * @param {Yarla.VMNode} newRenderer.VMNode
             * @param {Node | null} newRenderer.target
             * @param {number} index
             */
            function VMModInvokeUpdateElement(
                oldRenderer,
                newRenderer,
                index
            ) {
                newRenderer.target = oldRenderer.update(newRenderer.VMNode, document, namespaceURI, context);
                newCollection[index] = oldRenderer;
                return newRenderer.target;
            }
            /**
             * 
             * @param {object} newRenderer 
             * @param {Yarla.VMNode} newRenderer.VMNode
             * @param {Node | null} newRenderer.target
             * @param {number} start 
             * @param {number} end 
             */
            function VMModGetIndexFromMembers(
                newRenderer,
                start,
                end
            ) {
                oldTokenPairs = oldTokenPairs || VMModCreateIndexMapByKey(start, end);
                oldTokenIndex = isInstanceOf$2(newRenderer.VMNode, VMElement) && !isNullOrUndefined$2(newRenderer.VMNode.key) ? oldTokenPairs[newRenderer.VMNode.key] : VMModFindIndexByIterator(newRenderer, start, end);
            }
            /**
             * 
             * @param {number} start 
             * @param {number} end 
             * @returns {Readonly<Record<string, number | undefined>>}
             */
            function VMModCreateIndexMapByKey(
                start,
                end
            ) {
                /** @type {Record<string, number | undefined>} */
                var r = {};
                for (var
                    i = start;
                    i < end + 1;
                    i++
                ) {
                    var VMNode = oldRenderers[i].VMNode;
                    if (isInstanceOf$2(VMNode, VMElement) && !isNullOrUndefined$2(VMNode.key)) {
                        r[VMNode.key] = i;
                    }
                }
                return r;
            }
            /**
             * 
             * @param {object} newRenderer 
             * @param {Yarla.VMNode} newRenderer.VMNode
             * @param {Node | null} newRenderer.target
             * @param {number} start 
             * @param {number} end 
             */
            function VMModFindIndexByIterator(
                newRenderer,
                start,
                end
            ) {
                for (var
                    i = start;
                    i < end + 1;
                    i++
                ) {
                    if (oldRenderers[i] && VMModCompareWithElements(oldRenderers[i], newRenderer)) {
                        return i;
                    }
                }
            }
            /**
             * 
             * @param {object} newRenderer 
             * @param {Yarla.VMNode} newRenderer.VMNode
             * @param {Node | null} newRenderer.target
             * @param {number} index 
             */
            function VMModCreateOrUpdateVMsgr(
                newRenderer,
                index
            ) {
                if (isNumber$2(oldTokenIndex)) {
                    var oldRenderer = oldRenderers[oldTokenIndex];
                    if (VMModCompareWithElements(oldRenderer, newRenderer)) {
                        // @ts-ignore
                        oldRenderers[oldTokenIndex] = null;
                        return VMModInvokeUpdateElement(oldRenderer, newRenderer, index);
                    }
                }
                return VMModCreateSingleElement(newRenderer, index);
            }
            /**
             * 
             * @param {object} newRenderer 
             * @param {Yarla.VMNode} newRenderer.VMNode
             * @param {Node | null} newRenderer.target
             * @param {number} index 
             */
            function VMModCreateSingleElement(
                newRenderer,
                index
            ) {
                var r = Renderer.init(instance, newRenderer.VMNode, instance.defer);
                newRenderer.target = r.create(newRenderer.VMNode, document, namespaceURI, context);
                newCollection[index] = r;
                return newRenderer.target;
            }
            /**
             * 
             * @param {Node | null} previous 
             * @param {number} start
             * @param {number} end
             */
            function VMModBatchCreateElements(
                previous,
                start,
                end
            ) {
                for (var
                    i = start;
                    i < end + 1;
                    i++
                ) {
                    VMModMoveOrInsertElement(
                        previous,
                        VMModCreateSingleElement(newRenderers[i], i),
                        true
                    );
                }
            }
            /**
             * 
             * @param {number} start
             * @param {number} end
             */
            function VMModBatchRemoveElements(
                start,
                end
            ) {
                for (var
                    i = start;
                    i < end + 1;
                    i++
                ) {
                    var n = oldRenderers[i];
                    if (n) {
                        n.remove();
                    }
                }
            }
            var oldRenderers = instance.children;
            var newRenderers = children.map(function (i) {
                return {
                    VMNode: i,
                    target: null,
                };
            });
            /** @type {number | undefined} */
            var oldTokenIndex;
            /** @type {Readonly<Record<string, number | undefined>>} */
            var oldTokenPairs;
            var oldStartIndex = 0;
            var newStartIndex = 0;
            var oldEndedIndex = oldRenderers.length - 1;
            var oldStartVMsgr = oldRenderers[0];
            var oldEndedVMsgr = oldRenderers[oldEndedIndex];
            var newEndedIndex = newRenderers.length - 1;
            var newStartVMsgr = newRenderers[0];
            var newEndedVMsgr = newRenderers[newEndedIndex];
            var newCollection = new Array(children.length);
            while (oldStartIndex <= oldEndedIndex && newStartIndex <= newEndedIndex) {
                if (isNullOrUndefined$2(oldStartVMsgr)) {
                    oldStartVMsgr = oldRenderers[++oldStartIndex];
                } else if (isNullOrUndefined$2(oldEndedVMsgr)) {
                    oldEndedVMsgr = oldRenderers[--oldEndedIndex];
                } else if (VMModCompareWithElements(oldStartVMsgr, newStartVMsgr)) {
                    VMModMoveOrInsertElement(
                        VMModGetOldRenderElement(oldStartVMsgr).nextSibling,
                        VMModInvokeUpdateElement(oldStartVMsgr, newStartVMsgr, newStartIndex)
                    );
                    oldStartVMsgr = oldRenderers[++oldStartIndex];
                    newStartVMsgr = newRenderers[++newStartIndex];
                } else if (VMModCompareWithElements(oldEndedVMsgr, newEndedVMsgr)) {
                    VMModMoveOrInsertElement(
                        VMModGetOldRenderElement(oldEndedVMsgr).nextSibling,
                        VMModInvokeUpdateElement(oldEndedVMsgr, newEndedVMsgr, newEndedIndex)
                    );
                    oldEndedVMsgr = oldRenderers[--oldEndedIndex];
                    newEndedVMsgr = newRenderers[--newEndedIndex];
                } else if (VMModCompareWithElements(oldStartVMsgr, newEndedVMsgr)) {
                    VMModMoveOrInsertElement(
                        VMModGetOldRenderElement(oldEndedVMsgr).nextSibling,
                        VMModInvokeUpdateElement(oldStartVMsgr, newEndedVMsgr, newEndedIndex),
                        true
                    );
                    oldStartVMsgr = oldRenderers[++oldStartIndex];
                    newEndedVMsgr = newRenderers[--newEndedIndex];
                } else if (VMModCompareWithElements(oldEndedVMsgr, newStartVMsgr)) {
                    VMModMoveOrInsertElement(
                        VMModGetOldRenderElement(oldStartVMsgr),
                        VMModInvokeUpdateElement(oldEndedVMsgr, newStartVMsgr, newStartIndex),
                        true
                    );
                    oldEndedVMsgr = oldRenderers[--oldEndedIndex];
                    newStartVMsgr = newRenderers[++newStartIndex];
                } else {
                    VMModGetIndexFromMembers(newStartVMsgr, oldStartIndex, oldEndedIndex);
                    VMModMoveOrInsertElement(
                        VMModGetOldRenderElement(oldStartVMsgr),
                        VMModCreateOrUpdateVMsgr(newStartVMsgr, newStartIndex),
                        true
                    );
                    newStartVMsgr = newRenderers[++newStartIndex];
                }
            }
            if (oldStartIndex > oldEndedIndex) {
                VMModBatchCreateElements(
                    VMModGetNewRenderElement(newRenderers[newEndedIndex + 1]), newStartIndex, newEndedIndex);
            } else if (newStartIndex > newEndedIndex) {
                VMModBatchRemoveElements(oldStartIndex, oldEndedIndex);
            }
            Reflect$2.getInternal(instance).children = newCollection;
        }
        /**
         * 
         * @param {Yarla.VMElement} VMElement 
         * @param {any} context 
         */
        function applyNodeDirectives(
            VMElement,
            context
        ) {
            var cmd = VMElement.cmd;
            if (cmd) {
                for (var
                    i = 0,
                    l = cmd.length;
                    i < l;
                    i++
                ) {
                    cmd[i].call(null, VMElement.props, context);
                }
            }
        }
        /**
         * 
         * @param {Yarla.VMElement} VMElement 
         * @param {Yarla.dom.VMRenderer} renderer 
         */
        function applyNodeReferences(
            VMElement,
            renderer
        ) {
            var ref = VMElement.ref;
            if (ref) {
                Reflect$2.getInternal(ref).target = renderer.target;
            }
        }
        /**
         * 
         * @param {Element} element 
         * @param {Readonly<Record<string, any>>} properties 
         */
        function defineElementProperties(
            element,
            properties
        ) {
            for (var name in properties) {
                var event;
                if (event = judgmentEvent(name)) {
                    bean.attach(element, event.type, properties[name], event.opts);
                } else {
                    setAttribute(element, name, properties[name]);
                }
            }
        }
        /**
         * 
         * @param {Element} element 
         * @param {Readonly<Record<string, any>>} properties 
         */
        function deleteElementProperties(
            element,
            properties
        ) {
            for (var name in properties) {
                var event;
                if (event = judgmentEvent(name)) {
                    bean.detach(element, event.type, properties[name], event.opts);
                } else {
                    removeAttribute(element, name);
                }
            }
        }
        /**
         * 
         * @param {Element} element 
         * @param {object} properties
         * @param {Readonly<Readonly<Record<string, any>>>} properties.added
         * @param {Readonly<Readonly<Record<string, any>>>} properties.deleted
         * @param {Readonly<Record<string, readonly [any, any]>>} properties.updated
         */
        function updateElementProperties(
            element,
            properties
        ) {
            defineElementProperties(element, properties.added);
            deleteElementProperties(element, properties.deleted);
            for (var name in properties.updated) {
                var event;
                if (event = judgmentEvent(name)) {
                    bean.replace(element, event.type, properties.updated[name], event.opts);
                } else {
                    setAttribute(element, name, properties.updated[name][1]);
                }
            }
        }
        var Renderer = defineProperties$2(generateClass$2(Reflect$2.BASE, {
            defer: generateGetterDescriptor$2(
                /**
                 * 
                 * @this {Yarla.dom.VMRenderer}
                 * @returns {Yarla.dom.Defer}
                 */
                function () {
                    return Reflect$2.getInternal(this).defer;
                }
            ),
            phase: generateGetterDescriptor$2(
                /**
                 * 
                 * @this {Yarla.dom.VMRenderer}
                 * @returns {number}
                 */
                function () {
                    return Reflect$2.getInternal(this).phase;
                }
            ),
            parent: generateGetterDescriptor$2(
                /**
                 * 
                 * @this {Yarla.dom.VMRenderer}
                 * @returns {Yarla.dom.VMRenderer | null}
                 */
                function () {
                    return Reflect$2.getInternal(this).parent;
                }
            ),
            target: generateGetterDescriptor$2(
                /**
                 * 
                 * @this {Yarla.dom.VMRenderer}
                 * @returns {Node}
                 */
                function () {
                    var target = Reflect$2.getInternal(this).target;
                    Reflect$2.set(target, Reflect$2.expr.RENDERER, this);
                    return target;
                }
            ),
            VMNode: generateGetterDescriptor$2(
                /**
                 * 
                 * @this {Yarla.dom.VMRenderer}
                 * @returns {Yarla.VMNode}
                 */
                function () {
                    return Reflect$2.getInternal(this).VMNode;
                }
            ),
            children: generateGetterDescriptor$2(
                /**
                 * 
                 * @this {Yarla.dom.VMRenderer}
                 * @returns {Array<Yarla.dom.VMRenderer>}
                 */
                function () {
                    return Reflect$2.getInternal(this).children;
                }
            ),
            effections: generateGetterDescriptor$2(
                /**
                 * 
                 * @this {Yarla.dom.VMRenderer}
                 * @returns {Yarla.dom.EffectionCollection}
                 */
                function () {
                    return Reflect$2.getInternal(this).effections;
                }
            ),
            memorables: generateGetterDescriptor$2(
                /**
                 * 
                 * @this {Yarla.dom.VMRenderer}
                 * @returns {Yarla.dom.MemorableCollection}
                 */
                function () {
                    return Reflect$2.getInternal(this).effections;
                }
            ),
            references: generateGetterDescriptor$2(
                /**
                 * 
                 * @this {Yarla.dom.VMRenderer}
                 * @returns {Yarla.dom.ReferenceCollection}
                 */
                function () {
                    return Reflect$2.getInternal(this).references;
                }
            ),
            situations: generateGetterDescriptor$2(
                /**
                 * 
                 * @this {Yarla.dom.VMRenderer}
                 * @returns {Yarla.dom.SituationCollection}
                 */
                function () {
                    return Reflect$2.getInternal(this).situations;
                }
            ),
            useRef: generateMethodDescriptor$2(
                /**
                 * 
                 * @this {Yarla.dom.VMRenderer}
                 * @param {T} [target] 
                 * @returns {Yarla.RefObject<T>}
                 * @template T
                 */
                function (
                    target
                ) {
                    if (this.phase === Renderer.PHASE_CREATING) {
                        return this.references.push(target);
                    }
                    if (this.phase === Renderer.PHASE_UPDATING) {
                        return this.references.next(target);
                    }
                    throw new Error(message$2.ILLEGAL_INVOCATION);
                }
            ),
            useMemo: generateMethodDescriptor$2(
                /**
                 * 
                 * @this {Yarla.dom.VMRenderer}
                 * @param {() => T} factory 
                 * @param {ReadonlyArray<any>} [dependencies] 
                 * @returns {T}
                 * @template T
                 */
                function (
                    factory,
                    dependencies
                ) {
                    if (this.phase === Renderer.PHASE_CREATING) {
                        return this.memorables.push(factory, dependencies);
                    }
                    if (this.phase === Renderer.PHASE_UPDATING) {
                        return this.memorables.next(factory, dependencies);
                    }
                    throw new Error(message$2.ILLEGAL_INVOCATION);
                }
            ),
            useState: generateMethodDescriptor$2(
                /**
                 * 
                 * @this {Yarla.dom.VMRenderer}
                 * @param {T} [state] 
                 * @returns {Yarla.Situation<T>}
                 * @template T
                 */
                function (
                    state
                ) {
                    if (this.phase === Renderer.PHASE_CREATING) {
                        return this.situations.push(state);
                    }
                    if (this.phase === Renderer.PHASE_UPDATING) {
                        return this.situations.next(state);
                    }
                    throw new Error(message$2.ILLEGAL_INVOCATION);
                }
            ),
            useTarget: generateMethodDescriptor$2(
                /**
                 * 
                 * @this {Yarla.dom.VMRenderer}
                 * @param {T & ThisType<T & Yarla.Node>} [patulous] 
                 * @returns {T & Yarla.Node}
                 * @template T
                 */
                function (
                    patulous
                ) {
                    // @ts-ignore
                    return defineProperties$2(bean.wrap(this.target), getOwnPropertyDescriptors(patulous || {}));
                }
            ),
            useEffect: generateMethodDescriptor$2(
                /**
                 * 
                 * @this {Yarla.dom.VMRenderer}
                 * @param {Yarla.Effection} effection 
                 * @param {ReadonlyArray<any>} [dependencies] 
                 */
                function (
                    effection,
                    dependencies
                ) {
                    if (this.phase === Renderer.PHASE_CREATING) {
                        return this.defer.push(this.effections.push(effection, dependencies));
                    }
                    if (this.phase === Renderer.PHASE_UPDATING) {
                        return this.defer.push(this.effections.next(effection, dependencies));
                    }
                    throw new Error(message$2.ILLEGAL_INVOCATION);
                }
            ),
            create: generateMethodDescriptor$2(
                function () {
                    throw new Error(message$2.NOT_IMPLEMENTED);
                }
            ),
            update: generateMethodDescriptor$2(
                function () {
                    throw new Error(message$2.NOT_IMPLEMENTED);
                }
            ),
            remove: generateMethodDescriptor$2(
                /**
                 * 
                 * @this {Yarla.dom.VMRenderer}
                 * @returns {void}
                 */
                function () {
                    this.children.forEach(
                        function (i) {
                            i.remove();
                        }
                    );
                    this.effections.destroy();
                    this.references.destroy();
                    this.situations.destroy();
                    bean.destroy(this.target);
                    remove(this.target);
                }
            ),
        }, NOOP$2, "Renderer"), {
            NONE: generateNormalDescriptor$2(0, true, true),
            PHASE_CREATING: generateNormalDescriptor$2(1, true, true),
            PHASE_UPDATING: generateNormalDescriptor$2(2, true, true),
            init: generateMethodDescriptor$2(
                /**
                 * 
                 * @param {Yarla.dom.VMRenderer | null} parent
                 * @param {Yarla.VMNode} VMNode 
                 * @param {Yarla.dom.Defer} defer 
                 * @returns {Yarla.dom.VMRenderer}
                 */
                function (
                    parent,
                    VMNode,
                    defer
                ) {
                    return Reflect$2.construct((function () {
                        if (isInstanceOf$2(VMNode, VMElement)) {
                            if (isFunction$2(VMNode.type)) {
                                if (isShadowComponent(VMNode.type)) {
                                    return GalleryRenderer;
                                }
                                return VirtualRenderer;
                            }
                            return ElementRenderer;
                        }
                        return ContentRenderer;
                    }()), {
                        defer: defer,
                        phase: Renderer.NONE,
                        target: null,
                        parent: parent || null,
                        VMNode: VMNode,
                        children: [],
                        effections: EffectionCollection.init(),
                        memorables: MemorableCollection.init(),
                        references: ReferenceCollection.init(),
                        situations: SituationCollection.init(),
                    });
                }
            ),
        });
        var VirtualRenderer = generateClass$2(Reflect$2.BASE, {
            create: generateCreateDescriptor(
                /**
                 *
                 * @this {Yarla.dom.VMRenderer}
                 * @param {Yarla.VMElement<Yarla.Component<any>>} VMNode
                 * @param {Document} document
                 * @param {string | null} namespaceURI
                 * @param {any} context
                 * @returns {Node}
                 */
                function (
                    VMNode,
                    document,
                    namespaceURI,
                    context
                ) {
                    /** @type {Yarla.Writable<Yarla.dom.VMRenderer<Node, Yarla.VMElement>>} */
                    var instance = Reflect$2.getInternal(this);
                    instance.target = createFragment(VMNode.type, document);
                    applyChildrenCreate(this, flat$2([VMNode.type.call(null, VMNode.props, context)], 0, Infinity, true), document, namespaceURI, context);
                    applyNodeDirectives(VMNode, context);
                    applyNodeReferences(VMNode, this);
                    instance.VMNode = VMNode;
                    return instance.target;
                }
            ),
            update: generateUpdateDescriptor(
                /**
                 *
                 * @this {Yarla.dom.VMRenderer}
                 * @param {Yarla.VMElement<Yarla.Component<any>>} VMNode
                 * @param {Document} document
                 * @param {string | null} namespaceURI
                 * @param {any} context
                 * @returns {Node}
                 */
                function (
                    VMNode,
                    document,
                    namespaceURI,
                    context
                ) {
                    /** @type {Yarla.Writable<Yarla.dom.VMRenderer<Node, Yarla.VMElement>>} */
                    var instance = Reflect$2.getInternal(this);
                    if (isDrearyComponent(VMNode.type)) {
                        instance.VMNode = VMNode;
                        return instance.target;
                    }
                    applyChildrenUpdate(this, flat$2([VMNode.type.call(null, VMNode.props, context)], 0, Infinity, true), document, namespaceURI, context);
                    applyNodeDirectives(VMNode, context);
                    applyNodeReferences(VMNode, this);
                    instance.VMNode = VMNode;
                    return instance.target;
                }
            ),
        }, Renderer, "VirtualRenderer");
        var GalleryRenderer = generateClass$2(Reflect$2.BASE, {
            create: generateCreateDescriptor(
                /**
                 *
                 * @this {Yarla.dom.VMRenderer}
                 * @param {Yarla.VMElement<Yarla.Component<any>>} VMNode
                 * @param {Document} document
                 * @param {string | null} namespaceURI
                 * @param {any} context
                 * @returns {Element}
                 */
                function (
                    VMNode,
                    document,
                    namespaceURI,
                    context
                ) {
                    /** @type {Yarla.Writable<Yarla.dom.VMRenderer<Element, Yarla.VMElement>>} */
                    var instance = Reflect$2.getInternal(this);
                    instance.target = createElement(Reflect$2.getMetadata(VMNode.type).tagName || "yarla-component", document, namespaceURI);
                    if (instance.target.attachShadow) {
                        instance.target.attachShadow({ mode: "open" });
                    }
                    applyChildrenCreate(this, flat$2([VMNode.type.call(null, VMNode.props, context)], 0, Infinity, true), document, namespaceURI, context);
                    applyNodeDirectives(VMNode, context);
                    applyNodeReferences(VMNode, this);
                    instance.VMNode = VMNode;
                    return instance.target;
                }
            ),
            update: generateUpdateDescriptor(
                /**
                 *
                 * @this {Yarla.dom.VMRenderer}
                 * @param {Yarla.VMElement<Yarla.Component<any>>} VMNode
                 * @param {Document} document
                 * @param {string | null} namespaceURI
                 * @param {any} context
                 * @returns {Element}
                 */
                function (
                    VMNode,
                    document,
                    namespaceURI,
                    context
                ) {
                    /** @type {Yarla.Writable<Yarla.dom.VMRenderer<Element, Yarla.VMElement>>} */
                    var instance = Reflect$2.getInternal(this);
                    if (isDrearyComponent(VMNode.type)) {
                        instance.VMNode = VMNode;
                        return instance.target;
                    }
                    applyChildrenUpdate(this, flat$2([VMNode.type.call(null, VMNode.props, context)], 0, Infinity, true), document, namespaceURI, context);
                    applyNodeDirectives(VMNode, context);
                    applyNodeReferences(VMNode, this);
                    instance.VMNode = VMNode;
                    return instance.target;
                }
            ),
        }, Renderer, "GalleryRenderer");
        var ElementRenderer = generateClass$2(Reflect$2.BASE, {
            create: generateCreateDescriptor(
                /**
                 *
                 * @this {Yarla.dom.VMRenderer}
                 * @param {Yarla.VMElement<string>} VMNode
                 * @param {Document} document
                 * @param {string | null} namespaceURI
                 * @param {any} context
                 * @returns {Element}
                 */
                function (
                    VMNode,
                    document,
                    namespaceURI,
                    context
                ) {
                    if (VMNode.type === "svg") {
                        namespaceURI = env$2.namespaceURI.SVG;
                    }
                    if (VMNode.type === "math") {
                        namespaceURI = env$2.namespaceURI.MathML;
                    }
                    /** @type {Yarla.Writable<Yarla.dom.VMRenderer<Element, Yarla.VMElement>>} */
                    var instance = Reflect$2.getInternal(this);
                    instance.target = createElement(VMNode.type, document, namespaceURI);
                    defineElementProperties(instance.target, VMNode.props);
                    if (getSelfClosing(VMNode.type)) {
                        if (VMNode.props.children.length > 0) {
                            throw new Error(message$2.SELF_CLOSING_ELEMENTS_CANNOT_CONTAIN_CHILD_NODES + ": " + VMNode.type);
                        }
                    }
                    applyChildrenCreate(this, VMNode.props.children, document, namespaceURI, context);
                    applyNodeDirectives(VMNode, context);
                    applyNodeReferences(VMNode, this);
                    instance.VMNode = VMNode;
                    return instance.target;
                }
            ),
            update: generateUpdateDescriptor(
                /**
                 *
                 * @this {Yarla.dom.VMRenderer}
                 * @param {Yarla.VMElement<string>} VMNode
                 * @param {Document} document
                 * @param {string | null} namespaceURI
                 * @param {any} context
                 * @returns {Element}
                 */
                function (
                    VMNode,
                    document,
                    namespaceURI,
                    context
                ) {
                    if (VMNode.type === "svg") {
                        namespaceURI = env$2.namespaceURI.SVG;
                    }
                    if (VMNode.type === "math") {
                        namespaceURI = env$2.namespaceURI.MathML;
                    }
                    /** @type {Yarla.Writable<Yarla.dom.VMRenderer<Element, Yarla.VMElement>>} */
                    var instance = Reflect$2.getInternal(this);
                    updateElementProperties(instance.target, compare(instance.VMNode.props, VMNode.props));
                    applyChildrenUpdate(this, VMNode.props.children, document, namespaceURI, context);
                    applyNodeDirectives(VMNode, context);
                    applyNodeReferences(VMNode, this);
                    instance.VMNode = VMNode;
                    return instance.target;
                }
            ),
        }, Renderer, "ElementRenderer");
        var ContentRenderer = generateClass$2(Reflect$2.BASE, {
            create: generateCreateDescriptor(
                /**
                 * 
                 * @this {Yarla.dom.VMRenderer}
                 * @param {Yarla.Text} VMNode 
                 * @param {Document} document 
                 * @returns {Text}
                 */
                function (
                    VMNode,
                    document
                ) {
                    /** @type {Yarla.Writable<Yarla.dom.VMRenderer<Text>>} */
                    var instance = Reflect$2.getInternal(this);
                    instance.target = createTextNode(isNullOrUndefined$2(VMNode) ? "" : String(VMNode), document);
                    instance.VMNode = VMNode;
                    return instance.target;
                }
            ),
            update: generateUpdateDescriptor(
                /**
                 * 
                 * @this {Yarla.dom.VMRenderer}
                 * @param {Yarla.Text} VMNode 
                 * @returns {Text}
                 */
                function (
                    VMNode
                ) {
                    /** @type {Yarla.Writable<Yarla.dom.VMRenderer<Text>>} */
                    var instance = Reflect$2.getInternal(this);
                    if (instance.VMNode !== VMNode) {
                        instance.target.textContent = isNullOrUndefined$2(VMNode) ? "" : String(VMNode);
                        instance.VMNode = VMNode;
                    }
                    return instance.target;
                }
            ),
        }, Renderer, "ContentRenderer");
        return Renderer;
    }());

    var clear = skrinkSerializer$2(
        /**
         * 
         * @param {Yarla.Object<T, Node>} node
         * @returns {T}
         * @template T 
         */
        function (
            node
        ) {
            while (node.firstChild) {
                node.removeChild(node.firstChild);
            }
            // @ts-ignore
            return node;
        }
    );

    var _render = skrinkSerializer$2(
        /**
         * 
         * @param {Yarla.VMNode} VMNode 
         * @param {HTMLElement | SVGElement | MathMLElement} container 
         * @param {any} [context] 
         * @param {boolean} [ignoreUpdate] 
         */
        function (
            VMNode,
            container,
            context,
            ignoreUpdate
        ) {
            var defer = Defer.init();
            var renderer = VMRenderer.init(null, VMNode, defer);
            var popstate = _history.listen(skrinkSerializer$2(NOOP$2));
            var document = container.ownerDocument;
            var namespaceURI = container.namespaceURI;
            if (document.isDefaultNamespace(namespaceURI)) {
                namespaceURI = null;
            }
            var element = renderer.create(VMNode, document, namespaceURI, context);
            clear(container);
            insertBefore(container, element);
            defer.digest();
            return zone.mount({
                forceUpdate: skrinkSerializer$2(
                    function () {
                        var element = renderer.update(VMNode, document, namespaceURI, context);
                        if (isConnected(element)) {
                            defer.digest();
                            return;
                        }
                        clear(container);
                        insertBefore(container, element);
                        defer.digest();
                    }
                ),
                unmount: skrinkSerializer$2(
                    function () {
                        popstate.cancel();
                        renderer.remove();
                    }
                ),
            }, ignoreUpdate);
        }
    );

    var isNullOrEmptyString$2 = skrinkSerializer$2(
        /**
         * 
         * Determines if the input parameter is null or undefined or an empty string.
         * 
         * @param {any} argc Any object.
         * @returns {argc is null | undefined | ""}
         */
        function (
            argc
        ) {
            return isNullOrUndefined$2(argc) || argc === "";
        }
    );

    var glob$1 = skrinkSerializer$2(
        /**
         * 
         * Create a regexp from the specified glob string.
         * 
         * @param {string} argc An glob string.
         * @returns {RegExp}
         */
        function (
            argc
        ) {
            var r = "";
            for (var
                i = 0,
                c = 0,
                p = "",
                n = "",
                g = false,
                l = argc.length;
                i < l;
                i++
            ) {
                var t = argc.charAt(i);
                switch (t) {
                    case "/":
                    case "$":
                    case "^":
                    case ".":
                    case "(":
                    case ")":
                    case "=":
                    case "!":
                    case "|":
                        r += "\\" + t;
                        break;
                    case "?":
                        r += ".";
                        break;
                    case "[":
                    case "]":
                        r += t;
                        break;
                    case "{":
                        g = true;
                        r += "(";
                        break;
                    case "}":
                        g = false;
                        r += ")";
                        break;
                    case ",":
                        if (g) {
                            r += "|";
                        } else {
                            r += "\\" + t;
                        }
                        break;
                    case "*":
                        c = 1;
                        p = argc.charAt(i - 1);
                        while (argc.charAt(i + 1) === "*") {
                            c++;
                            i++;
                        }
                        n = argc.charAt(i + 1);
                        if (c > 1
                            && (p === "/" || isNullOrEmptyString$2(p))
                            && (n === "/" || isNullOrEmptyString$2(n))) {
                            r += "((?:[^/]*(?:/|$))*)";
                            i++;
                        } else {
                            r += "([^/]*)";
                        }
                        break;
                    default:
                        r += t;
                        break;
                }
            }
            return new RegExp("^" + r + "$", "i");
        }
    );

    var _Router = defineProperties$2(skrinkSerializer$2(
        /**
         * 
         * @param {Yarla.ChildrenAttributes} props 
         * @returns {any}
         */
        function (
            props
        ) {
            return props.children;
        }
    ), {
        Redirect: generateMethodDescriptor$2(
            /**
             * 
             * @param {any} props 
             * @returns {any}
             */
            function (
                props
            ) {
                return _history.redirect(props.to, props.state), null;
            }
        ),
        Link: generateMethodDescriptor$2(
            /**
             *
             * @param {any} props
             * @returns {any}
             */
            function (
                props
            ) {
                return VMElement.init("a", {
                    href: props.to,
                    class: props.class,
                    style: props.style,
                    onclick: function (event) {
                        event.preventDefault();
                        event.stopImmediatePropagation();
                        _history.navigate(props.to, props.state);
                    }
                }, props.children);
            }
        ),
        View: generateMethodDescriptor$2(
            /**
             *
             * @param {any} props
             * @returns {any}
             */
            function (
                props
            ) {
                return glob$1(props.path).test(_history.location.pathname) ? VMElement.init(props.component, { history: _history }, props.children) : null;
            }
        ),
    });

    var dom = {
        getComputedStyle: _getComputedStyle,
        requestFullscreen: _requestFullscreen,
        exitFullscreen: _exitFullscreen,
        scrollTo: _scrollTo,
        history: _history,
        render: _render,
        Router: _Router,
    };

    function NOOP$1 () { /** DO NOTHING */ }

    /**
     * 
     * Returns a normal property descriptor.
     * 
     * @param {T} argc The value of the property descriptor.
     * @param {boolean} [enumerable] Indicates whether the property is enumerable. 
     * @param {boolean} [readonly] Indicates whether the property is readonly. 
     * @returns {Yarla.NormalPropertyDescriptor<T>}
     * @template T
     */
    function generateNormalDescriptor$1 (
        argc,
        enumerable,
        readonly
    ) {
        return {
            configurable: true,
            enumerable: !!enumerable,
            writable: !readonly,
            value: argc,
        };
    }

    /**
     * Hide function internal implementation.
     * 
     * @param {Yarla.Object<T, Yarla.BasicFunc>} constructor The function.
     * @returns {T}
     * @template T
     */
    function skrinkSerializer$1 (
        constructor
    ) {
        // @ts-ignore
        return function () { return constructor.apply(this, arguments); };
    }

    /**
     * 
     * Returns a method property descriptor.
     * 
     * @param {Yarla.Object<T, Yarla.BasicFunc>} argc A function. 
     * @param {boolean} [enumerable] Indicates whether the property is enumerable.
     * @returns {Yarla.NormalPropertyDescriptor<Yarla.Object<T, Yarla.BasicFunc>>}
     * @template T
     */
    function generateMethodDescriptor$1 (
        argc,
        enumerable
    ) {
        return generateNormalDescriptor$1(skrinkSerializer$1(argc), enumerable);
    }

    var message$1 = {
        /** @type {"Invalid URL"} */
        INVALID_URL: "Invalid URL",
        /** @type {"Invalid module"} */
        INVALID_MODULE: "Invalid module",
        /** @type {"Invalid protocol"} */
        INVALID_PROTOCOL: "Invalid protocol",
        /** @type {"Invalid formatter"} */
        INVALID_FORMATTER: "Invalid formatter",
        /** @type {"Invalid result data"} */
        INVALID_RESULT_DATA: "Invalid result data",
        /** @type {"Illegal invocation"} */
        ILLEGAL_INVOCATION: "Illegal invocation",
        /** @type {"Illegal constructor"} */
        ILLEGAL_CONSTRUCTOR: "Illegal constructor",
        /** @type {"Target must be an array"} */
        TARGET_MUST_BE_AN_ARRAY: "Target must be an array",
        /** @type {"Target must be an object"} */
        TARGET_MUST_BE_AN_OBJECT: "Target must be an object",
        /** @type {"Only async is supported"} */
        ONLY_ASYNC_IS_SUPPORTED: "Only async is supported",
        /** @type {"Only used in components"} */
        ONLY_USED_IN_COMPONENTS: "Only used in components",
        /** @type {"Only numbers could inside []"} */
        ONLY_NUMBERS_COULD_INSIDE_SQUARE: "Only numbers could inside []",
        /** @type {"Only be called when state is OPEN"} */
        ONLY_BE_CALLED_WHEN_STATE_IS_OPEN: "Only be called when state is OPEN",
        /** @type {"Only be called when state is UNSENT"} */
        ONLY_BE_CALLED_WHEN_STATE_IS_UNSENT: "Only be called when state is UNSENT",
        /** @type {"Character is outside the bounds of ascii"} */
        CHARACTER_IS_OUTSIDE_THE_BOUNDS_OF_ASCII: "Character is outside the bounds of ascii",
        /** @type {"Character is outside the bounds of latin1"} */
        CHARACTER_IS_OUTSIDE_THE_BOUNDS_OF_LATIN1: "Character is outside the bounds of latin1",
        /** @type {"Self-closing elements cannot contain child nodes"} */
        SELF_CLOSING_ELEMENTS_CANNOT_CONTAIN_CHILD_NODES: "Self-closing elements cannot contain child nodes",
        /** @type {"The node to be removed is not a child of this node"} */
        FAILED_TO_EXECUTE_REMOVE: "The node to be removed is not a child of this node",
        /** @type {"The node before which the new node is to be inserted is not a child of this node"} */
        FAILED_TO_EXECUTE_INSERT: "The node before which the new node is to be inserted is not a child of this node",
        /** @type {"Please use the 'new' operator, this constructor cannot be called as a function"} */
        FAILED_TO_CONSTRUCT_INSPANCE: "Please use the 'new' operator, this constructor cannot be called as a function",
        /** @type {"Promise resolved with itself"} */
        PROMISE_RESOLVED_WITH_ITSELF: "Promise resolved with itself",
        /** @type {"Offset is outside the bounds"} */
        OFFSET_IS_OUTSIDE_THE_BOUNDS: "Offset is outside the bounds",
        /** @type {"Stream closed before ending"} */
        STREAM_CLOSED_BEFORE_ENDING: "Stream closed before ending",
        /** @type {"Expression can not be empty"} */
        EXPRESSION_CAN_NOT_BE_EMPTY: "Expression can not be empty",
        /** @type {"Must have number in []"} */
        MUST_HAVE_NUMBER_IN_SQUARE: "Must have number in []",
        /** @type {"Redirect exceeds maximum"} */
        REDIRECT_EXCEEDS_MAXIMUM: "Redirect exceeds maximum",
        /** @type {"Not implemented"} */
        NOT_IMPLEMENTED: "Not implemented",
        /** @type {"Not supported"} */
        NOT_SUPPORTED: "Not supported",
        /** @type {"Timeout"} */
        TIMEOUT: "Timeout",
        /** @type {"Abort"} */
        ABORT: "Abort",
    };

    /**
     * 
     * @param {Yarla.BasicFunc} argc 
     * @param {Yarla.Proto<any>} constructor 
     * @returns {Yarla.BasicFunc}
     */
    function legalSerializer$1 (
        argc,
        constructor
    ) {
        return skrinkSerializer$1(
            /**
             * @this {any}
             */
            function () {
                if (this instanceof constructor) {
                    return argc.apply(this, arguments);
                }
                throw new TypeError(message$1.ILLEGAL_INVOCATION);
            }
        );
    }

    /**
     * 
     * @param {PropertyDescriptorMap} argc 
     * @param {Yarla.Proto<any>} constructor 
     * @returns {PropertyDescriptorMap}
     */
    function legalDescriptors$1 (
        argc,
        constructor
    ) {
        /** @type {PropertyDescriptorMap} */
        var descriptors = {};
        for (var i in argc) {
            /** @type {PropertyDescriptor} */
            var os = {};
            var sn = argc[i];
            var get = sn.get;
            var set = sn.set;
            var value = sn.value;
            var writable = sn.writable;
            var enumerable = sn.enumerable;
            var configurable = sn.configurable;
            if (typeof writable === "boolean") {
                os.writable = writable;
            }
            if (typeof enumerable === "boolean") {
                os.enumerable = enumerable;
            }
            if (typeof configurable === "boolean") {
                os.configurable = configurable;
            }
            if (typeof get === "function") {
                os.get = legalSerializer$1(get, constructor);
            }
            if (typeof set === "function") {
                os.set = legalSerializer$1(set, constructor);
            }
            if ("value" in sn) {
                os.value = typeof value === "function" ? legalSerializer$1(value, constructor) : value;
            }
            descriptors[i] = os;
        }
        return descriptors;
    }

    /**
     * Adds one or more properties to an object, and/or modifies attributes of existing properties.
     * 
     * @param {T} argc Object on which to add or modify the properties. This can be a native JavaScript object or a DOM object.
     * @param {Yarla.Object<P, PropertyDescriptorMap>} properties JavaScript object that contains one or more descriptor objects. Each descriptor object describes a data property or an accessor property.
     * @returns {Yarla.NonAny<T> & Yarla.PropertyDescriptorMapReturns<P>}
     * @template T, P
     */
    function defineProperties$1 (
        argc,
        properties
    ) {
        return /** @type {any} */ (Object.defineProperties(argc, properties));
    }

    /**
     * Adds a property to an object, or modifies attributes of an existing property.
     * 
     * @param {T} argc Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object.
     * @param {Yarla.Object<N, PropertyKey>} property The property name.
     * @param {Yarla.Object<P, PropertyDescriptor>} descriptor Descriptor for the property. It can be for a data property or an accessor property.
     * @returns {Yarla.NonAny<T> & { readonly [K in N]: Yarla.PropertyDescriptorReturns<P>; }}
     * @template T, N, P
     */
    function defineProperty$1 (
        argc,
        property,
        descriptor
    ) {
        // @ts-ignore
        return Object.defineProperty(argc, property, descriptor);
    }

    /**
     * 
     * Instantiate the specified class, and that optionally contains specified properties.
     * 
     * @param {Yarla.Proto<Yarla.Object<T>>} argc Class to be instantiated.
     * @param {Yarla.Object<P, PropertyDescriptorMap>} [properties] JavaScript object that contains one or more property descriptors.
     * @returns {Yarla.NonAny<T> & Yarla.PropertyDescriptorMapReturns<P>}
     * @template T, P
     */
    function createInstance$1 (
        argc,
        properties
    ) {
        return Object.create(argc.prototype, properties || {});
    }

    /**
     * Sets the prototype of a specified object.
     * 
     * @param {any} argc The object to change its prototype.
     * @param {object | null} proto The value of the new prototype or null.
     * @returns {any}
     */
    function setPrototypeOf$1 (
        argc,
        proto
    ) {
        // @ts-ignore
        // eslint-disable-next-line es/no-object-setprototypeof
        if (Object.setPrototypeOf) {
            // @ts-ignore
            // eslint-disable-next-line es/no-object-setprototypeof
            return Object.setPrototypeOf(argc, proto);
        }
        return defineProperty$1(argc, "__proto__", generateNormalDescriptor$1(proto));
    }

    var globalThis$1 = (
        // eslint-disable-next-line no-undef
        typeof global !== "undefined" ? global :
            // eslint-disable-next-line no-undef
            typeof window !== "undefined" ? window :
                // eslint-disable-next-line no-undef
                self
    );

    /**
     * 
     * Returns a pseudorandom string.
     * 
     * @param {number} length The length of string.
     * @param {number} radix The system of numeration.
     * @returns {string}
     */
    function pseudoRandomString$1 (
        length,
        radix
    ) {
        return Math.floor((1 + Math.random()) * Math.pow(radix, length)).toString(radix).slice(1);
    }

    var Symbol$1 = (function (Symbol, exports) {
        return defineProperties$1(Symbol, {
            for: generateNormalDescriptor$1(
                Symbol.for || skrinkSerializer$1(
                    /**
                     * 
                     * @param {string} key 
                     * @returns {symbol}
                     */
                    function (
                        key
                    ) {
                        return exports[key] = exports[key] || Symbol(key);
                    }
                )
            ),
        });
    }(globalThis$1.Symbol || skrinkSerializer$1(
        /**
         * 
         * @param {string | number} [description] 
         * @returns {any}
         */
        function (
            description
        ) {
            return "[[" + description + ":" + pseudoRandomString$1(6, 36) + "]]";
        }
    ), {}));

    /**
     * 
     * Create a class.
     * 
     * @param {Yarla.Object<T, Yarla.BasicFunc>} constructor The class constructor.
     * @param {Yarla.Object<P, PropertyDescriptorMap>} properties JavaScript object that contains one or more descriptor objects. Each descriptor object describes a data property or an accessor property.
     * @param {Yarla.Object<S, Yarla.Proto>} superClass The super class of the class.
     * @param {string} [name] The class name.
     * @returns {Yarla.ClassFunc<Yarla.Parameters<T>, Yarla.InstanceType<T> & Yarla.PropertyDescriptorMapReturns<P> & Yarla.InstanceType<S>>}
     * @template T, P, S
     */
    function generateClass$1 (
        constructor,
        properties,
        superClass,
        name
    ) {
        /** @type {Yarla.Proto<any>} */
        var WrapConstructor = skrinkSerializer$1(
            /**
             * @this {any}
             */
            function () {
                if (this instanceof WrapConstructor) {
                    return constructor.apply(defineProperty$1(this, Symbol$1.for("Yarla.Super.constructor"), generateNormalDescriptor$1(WrapConstructor)), arguments);
                }
                throw new Error(message$1.FAILED_TO_CONSTRUCT_INSPANCE);
            }
        );
        // @ts-ignore
        WrapConstructor.prototype = defineProperties$1(createInstance$1(superClass, {
            constructor: generateNormalDescriptor$1(WrapConstructor),
        }), legalDescriptors$1(properties, WrapConstructor));
        if (name) {
            defineProperty$1(WrapConstructor, "name", generateNormalDescriptor$1(name, false, true));
            if (Symbol$1.toStringTag) {
                defineProperty$1(WrapConstructor.prototype, Symbol$1.toStringTag, generateNormalDescriptor$1(name, false, true));
            }
        }
        // @ts-ignore
        return setPrototypeOf$1(WrapConstructor, superClass);
    }

    var definition$1 = {
        /** @type {"br"} */
        BR: "br",
        /** @type {"hex"} */
        HEX: "hex",
        /** @type {"md5"} */
        MD5: "md5",
        /** @type {"gzip"} */
        GZIP: "gzip",
        /** @type {"utf8"} */
        UTF8: "utf8",
        /** @type {"ascii"} */
        ASCII: "ascii",
        /** @type {"base64"} */
        BASE64: "base64",
        /** @type {"latin1"} */
        LATIN1: "latin1",
        /** @type {"sha256"} */
        SHA256: "sha256",
        /** @type {"deflate"} */
        DEFLATE: "deflate",
        /** @type {"pending"} */
        PENDING: "pending",
        /** @type {"rejected"} */
        REJECTED: "rejected",
        /** @type {"fulfilled"} */
        RESOLVED: "fulfilled",
        /** @type {"development"} */
        DEVELOPMENT: "development",
        /** @type {"https:"} */
        HTTPS: "https:",
        /** @type {"http:"} */
        HTTP: "http:",
    };

    var setTimeout$1 = globalThis$1.setTimeout;

    var setImmediate$1 = globalThis$1.setImmediate || globalThis$1.requestAnimationFrame || function ( /** @type {any} */ argc) { return setTimeout$1(argc, 1000 / 60); };

    var isReference$1 = skrinkSerializer$1(
        /**
         * Determines if the input parameter is reference type.
         * 
         * @param {any} argc Any object.
         * @returns {boolean}
         */
        function (
            argc
        ) {
            return Object(argc) === argc;
        }
    );

    var isInstanceOf$1 = skrinkSerializer$1(
        /**
         * 
         * Determines if the input parameter is an instance of the specified class.
         * 
         * @param {any} argc Any object.
         * @param {Yarla.Proto<T>} constructor The class.
         * @returns {argc is T}
         * @template T
         */
        function (
            argc,
            constructor
        ) {
            return isReference$1(constructor) && argc instanceof constructor;
        }
    );

    var isFunction$1 = skrinkSerializer$1(
        /**
         * 
         * Determines if the input parameter is a function.
         * 
         * @param {any} argc Any object.
         * @returns {argc is Kylin.BasicFunc}
         */
        function (
            argc
        ) {
            return typeof argc === "function";
        }
    );

    /**
     * 
     * Returns the class name of the specified object.
     * 
     * @param {any} argc The object whose class name needs to be queried.
     * @returns {string}
     */
    function className$1 (
        argc
    ) {
        return Object.prototype.toString.call(argc).slice(8, -1);
    }

    var isNull$1 = skrinkSerializer$1(
        /**
         * 
         * Determines if the input parameter is null.
         * 
         * @param {any} argc Any object.
         * @returns {argc is null}
         */
        function (
            argc
        ) {
            return argc === null;
        }
    );

    var isObject$1 = skrinkSerializer$1(
        /**
         * 
         * Determines if the input parameter is an object, exclude null.
         * 
         * @param {any} argc Any object.
         * @param {boolean} [strict] Indicates if it is a strict object. 
         * @returns {argc is object}
         */
        function (
            argc,
            strict
        ) {
            return strict ? className$1(argc) === "Object" : !isNull$1(argc) && typeof argc === "object";
        }
    );

    /**
     * Returns the prototype of an object.
     * 
     * @param {any} argc The object that references the prototype.
     * @returns {any}
     */
    function getPrototypeOf$1 (
        argc
    ) {
        // @ts-ignore
        // eslint-disable-next-line es/no-object-setprototypeof
        if (Object.setPrototypeOf) {
            // @ts-ignore
            return Object.getPrototypeOf(argc);
        }
        return argc.__proto__ || Object.getPrototypeOf(argc);
    }

    var isUndefined$1 = skrinkSerializer$1(
        /**
         * 
         * Determines if the input parameter is undefined.
         * 
         * @param {any} argc Any object.
         * @returns {argc is undefined}
         */
        function (
            argc
        ) {
            return argc === void 0;
        }
    );

    var isNullOrUndefined$1 = skrinkSerializer$1(
        /**
         * 
         * Determines if the input parameter is null or undefined.
         * 
         * @param {any} argc Any object.
         * @returns {argc is null | undefined}
         */
        function (
            argc
        ) {
            return isNull$1(argc) || isUndefined$1(argc);
        }
    );

    var isArray$1 = skrinkSerializer$1(
        /**
         * 
         * Determines if the input parameter is an array.
         * 
         * @param {any} argc Any object.
         * @returns {argc is any[]}
         */
        function (
            argc
        ) {
            return Array.isArray(argc);
        }
    );

    var isNumber$1 = skrinkSerializer$1(
        /**
         * 
         * Determines if the input parameter is a number.
         * 
         * @param {any} argc Any object.
         * @returns {argc is number}
         */
        function (
            argc
        ) {
            return typeof argc === "number" || isInstanceOf$1(argc, Number);
        }
    );

    var isFinite$1 = skrinkSerializer$1(
        // eslint-disable-next-line es/no-number-isfinite
        Number.isFinite || function (
            /**
             * @type {number}
             */
            argc
        ) {
            return isNumber$1(argc) && globalThis$1.isFinite(argc);
        }
    );

    var isDate$1 = skrinkSerializer$1(
        /**
         * 
         * Determines if the input parameter is a Date.
         * 
         * @param {any} argc Any object.
         * @returns {argc is Date}
         */
        function (
            argc
        ) {
            return isInstanceOf$1(argc, Date);
        }
    );

    var isValid$1 = skrinkSerializer$1(
        /**
         * 
         * Determines if the input parameter is valid.
         * 
         * @param {any} argc An object.
         * @returns {boolean}
         */
        function (
            argc
        ) {
            return isNumber$1(argc) ? isFinite$1(argc) : isDate$1(argc) ? isFinite$1(argc.getTime()) : !isNullOrUndefined$1(argc);
        }
    );

    var flat$1 = skrinkSerializer$1(
        /**
         * 
         * Convert an array from an array-like.
         * 
         * @param {ArrayLike<T>} argc A array-like.
         * @param {number} [start] The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.
         * @param {number} [depth] Indicates whether to flatten the multidimensional array.
         * @param {boolean} [valid] Indicates whether to remove invalid items from the array.
         * @returns {FlatArray<NonNullable<T>[], 20>[]}
         * @template T
         */
        function (
            argc,
            start,
            depth,
            valid
        ) {
            var r = Array.prototype.slice.call(argc, start || 0);
            if (depth) {
                r = (function flat(argc, d) {
                    var r = [];
                    for (var
                        i = 0,
                        l = argc.length;
                        i < l;
                        i++
                    ) {
                        var n = argc[i];
                        if (d < depth && isArray$1(n)) {
                            r = r.concat(flat(n, d + 1));
                        } else {
                            r.push(n);
                        }
                    }
                    return r;
                }(r, 0));
            }
            if (valid) {
                r = r.filter(isValid$1);
            }
            return r;
        }
    );

    /**
     * 
     * Resolve a property expression. Returns the property array.
     * 
     * @param {string} argc A property expression.
     * @returns {Array<string | number>}
     */
    function divideExpression$1 (
        argc
    ) {
        var t = "";
        var r = [];
        for (var
            i = 0,
            e = 0,
            o = 0,
            a = 48,
            b = 57,
            inSquare = false,
            isNumber = false,
            l = argc.length;
            i < l;
            i++
        ) {
            var c = argc.charAt(i);
            if (c === "\\") {
                if (i + 1 < l && (
                    argc.charAt(i + 1) === "." ||
                    argc.charAt(i + 1) === "[" ||
                    argc.charAt(i + 1) === "]")
                ) {
                    t += argc.charAt(++i);
                } else {
                    t += c;
                }
            } else if (c === ".") {
                if (t) {
                    r.push(t);
                    t = "";
                }
            } else if (c === "[") {
                if (t) {
                    r.push(t);
                    t = "";
                }
                inSquare = true;
                isNumber = false;
            } else if (c === "]") {
                if (!isNumber) {
                    throw new Error(message$1.MUST_HAVE_NUMBER_IN_SQUARE + ": " + argc);
                }
                inSquare = false;
                r.push(o);
                o = 0;
            } else if (inSquare) {
                e = c.charCodeAt(0);
                if (e < a || e > b) {
                    throw new Error(message$1.ONLY_NUMBERS_COULD_INSIDE_SQUARE + ": " + argc);
                }
                isNumber = true;
                o = 10 * o + e - a;
            } else {
                t += c;
            }
        }
        if (t) {
            r.push(t);
        }
        if (r.length === 0) {
            throw new Error(message$1.EXPRESSION_CAN_NOT_BE_EMPTY);
        }
        return r;
    }

    /**
     * Determines whether an object has a property with the specified name.
     * 
     * @param {any} argc An object.
     * @param {PropertyKey} property A property name.
     * @returns {boolean}
     */
    function hasOwnProperty$1 (
        argc,
        property
    ) {
        return Object.prototype.hasOwnProperty.call(argc, property);
    }

    var isString$1 = skrinkSerializer$1(
        /**
         * 
         * Determines if the input parameter is a string.
         * 
         * @param {any} argc Any object.
         * @returns {argc is string}
         */
        function (
            argc
        ) {
            return typeof argc === "string" || isInstanceOf$1(argc, String);
        }
    );

    var has$1 = skrinkSerializer$1(
        /**
         * 
         * Determines whether an object contains the specified property.
         * 
         * @param {any} argc An object.
         * @param {Yarla.PropertyExpr} expr The property expression.
         * @returns {boolean}
         */
        function (
            argc,
            expr
        ) {
            var t = argc;
            for (var
                i = 0,
                s = isString$1(expr) ? divideExpression$1(expr) : expr,
                l = s.length;
                i < l;
                i++
            ) {
                if (!isReference$1(t) ||
                    !hasOwnProperty$1(t, s[i])) {
                    return false;
                }
                t = t[s[i]];
            }
            return true;
        }
    );

    var get$1 = skrinkSerializer$1(
        /**
         * 
         * Returns the value of a specified property of an object.
         *  
         * @param {any} argc An object.
         * @param {Yarla.PropertyExpr} expr The property expression.
         * @param {T} [defaultValue] The default value when the value is null or undefined. 
         * @returns {T}
         * @template T
         */
        function (
            argc,
            expr,
            defaultValue
        ) {
            var t = argc;
            for (var
                i = 0,
                s = isString$1(expr) ? divideExpression$1(expr) : expr,
                l = s.length;
                i < l;
                i++
            ) {
                if (isNullOrUndefined$1(t)) {
                    t = void 0;
                    break;
                }
                t = t[s[i]];
            }
            if (isNullOrUndefined$1(t) && arguments.length > 2) {
                t = defaultValue;
            }
            return t;
        }
    );

    var set$1 = skrinkSerializer$1(
        /**
         * 
         * Sets the value of a specified property of an object.
         * 
         * @param {any} argc An object.
         * @param {Yarla.PropertyExpr} expr The property expression.
         * @param {T} value The value of the specified property of an object.
         * @returns {T}
         * @template T
         */
        function (
            argc,
            expr,
            value
        ) {
            var t = argc, p;
            for (var
                i = 0,
                m = argc,
                s = isString$1(expr) ? divideExpression$1(expr) : expr,
                l = s.length;
                i < l;
                i++
            ) {
                var n = s[i];
                if (isNumber$1(n)) {
                    if (!isArray$1(m)) {
                        if (i === 0) {
                            throw new Error(message$1.TARGET_MUST_BE_AN_ARRAY);
                        } else {
                            // @ts-ignore
                            m = t[p] = [];
                        }
                    }
                } else {
                    if (!isObject$1(m)) {
                        if (i === 0) {
                            throw new Error(message$1.TARGET_MUST_BE_AN_OBJECT);
                        } else {
                            // @ts-ignore
                            m = t[p] = {};
                        }
                    }
                }
                p = n;
                t = m;
                m = t[p];
            }
            return isNullOrUndefined$1(p) ? value : t[p] = value;
        }
    );

    var WeakMap$1 = (function (WeakMap) {
        return WeakMap = WeakMap || generateClass$1(
            /**
             * 
             * @this {WeakMap}
             * @param {ReadonlyArray<[object, any]>} [entries]
             */
            function (entries) {
                defineProperty$1(this, "k", generateNormalDescriptor$1(Symbol$1("WeakMap")));
                if (entries) {
                    for (var
                        i = 0,
                        l = entries.length;
                        i < l;
                        i++
                    ) {
                        this.set(entries[i][0], entries[i][1]);
                    }
                }
                return this;
            },
            {
                delete: generateMethodDescriptor$1(
                    /**
                     *
                     * @this {any}
                     * @param {object} key
                     * @returns {boolean}
                     */
                    function (key) {
                        return hasOwnProperty$1(key, this.k) ? delete key[this.k] : false;
                    }
                ),
                has: generateMethodDescriptor$1(
                    /**
                     *
                     * @this {any}
                     * @param {object} key
                     * @returns {boolean}
                     */
                    function (key) {
                        return hasOwnProperty$1(key, this.k);
                    }
                ),
                get: generateMethodDescriptor$1(
                    /**
                     *
                     * @this {any}
                     * @param {object} key
                     * @returns {any}
                     */
                    function (key) {
                        return hasOwnProperty$1(key, this.k) ? key[this.k] : void 0;
                    }
                ),
                set: generateMethodDescriptor$1(
                    /**
                     *
                     * @this {any}
                     * @param {object} key
                     * @param {any} value
                     * @returns {WeakMap}
                     */
                    function (key, value) {
                        return defineProperty$1(key, this.k, generateNormalDescriptor$1(value)), this;
                    }
                ),
            },
            NOOP$1
        );
    }(globalThis$1.WeakMap));

    var Reflect$1 = (function () {
        /**
         *
         * @param {any} target
         * @param {Yarla.PropertyExpr} expr
         * @returns {boolean}
         */
        function _has(
            target,
            expr
        ) {
            return maps.has(target) ? has$1(maps.get(target), expr) : false;
        }
        /**
         *
         * @param {any} argc
         * @param {Yarla.PropertyExpr} expr
         * @returns {any}
         */
        function _get(
            argc,
            expr
        ) {
            if (maps.has(argc)) {
                return get$1(maps.get(argc), expr);
            }
            throw new Error(message$1.ILLEGAL_INVOCATION);
        }
        /**
         *
         * @param {any} target
         * @param {Yarla.PropertyExpr} expr
         * @param {T} value
         * @returns {T}
         * @template T
         */
        function _set(
            target,
            expr,
            value
        ) {
            var item;
            if (maps.has(target)) {
                item = maps.get(target);
            } else {
                maps.set(target, item = {});
            }
            return set$1(item, expr, value);
        }
        /**
         *
         * @param {any} target
         * @returns {boolean}
         */
        function _delete(
            target
        ) {
            return maps.delete(target);
        }
        /**
         * 
         * @param {any} target
         * @param {PropertyKey} [propertyKey]
         * @returns {any}
         */
        function _getInternal(
            target,
            propertyKey
        ) {
            return _get(target, expr.INTERNAL.concat(isNullOrUndefined$1(propertyKey) ? [] : [propertyKey]));
        }
        /**
         * 
         * @param {any} target
         * @param {PropertyKey} [propertyKey]
         * @returns {boolean}
         */
        function _hasInternal(
            target,
            propertyKey
        ) {
            return _has(target, expr.INTERNAL.concat(isNullOrUndefined$1(propertyKey) ? [] : [propertyKey]));
        }
        /**
         *
         * @param {T} target
         * @param {any} value
         * @param {PropertyKey} [propertyKey]
         * @returns {T}
         * @template T
         */
        function _defineInternal(
            target,
            value,
            propertyKey
        ) {
            return _set(target, expr.INTERNAL.concat(isNullOrUndefined$1(propertyKey) ? [] : [propertyKey]), value), target;
        }
        /**
         * 
         * @param {any} target
         * @param {PropertyKey} [metadataKey]
         * @returns {any}
         */
        function _getMetadata(
            target,
            metadataKey
        ) {
            return _get(target, expr.METADATA.concat(isNullOrUndefined$1(metadataKey) ? [] : [metadataKey]));
        }
        /**
         * 
         * @param {any} target
         * @param {PropertyKey} [metadataKey]
         * @returns {boolean}
         */
        function _hasMetadata(
            target,
            metadataKey
        ) {
            return _has(target, expr.METADATA.concat(isNullOrUndefined$1(metadataKey) ? [] : [metadataKey]));
        }
        /**
         *
         * @param {T} target
         * @param {any} value
         * @param {PropertyKey} [metadataKey]
         * @returns {T}
         * @template T
         */
        function _defineMetadata(
            target,
            value,
            metadataKey
        ) {
            return _set(target, expr.METADATA.concat(isNullOrUndefined$1(metadataKey) ? [] : [metadataKey]), value), target;
        }
        /**
         *
         * @param {Yarla.Object<T>} argc
         * @param {Yarla.PropertyExpr} expr
         * @param {(this: Yarla.Object<T>) => R} initialize
         * @returns {R}
         * @template T, R
         */
        function _once(
            argc,
            expr,
            initialize
        ) {
            var item;
            if (maps.has(argc)) {
                item = maps.get(argc);
            } else {
                maps.set(argc, item = {});
            }
            if (has$1(item, expr)) {
                return get$1(item, expr);
            }
            return set$1(item, expr, initialize.call(argc));
        }
        /**
         * 
         * @param {Yarla.Proto} constructor 
         * @param {any} internalValue 
         * @returns {any}
         */
        function _construct(
            constructor,
            internalValue
        ) {
            return _defineInternal(createInstance$1(constructor), internalValue);
        }
        /**
         * 
         * @param {Yarla.Object<T, ArrayLike<number>>} target 
         * @param {number} [bit] 
         * @returns {T}
         * @template T
         */
        function _initTyped(
            target,
            bit
        ) {
            for (var
                i = 0,
                l = target.length;
                i < l;
                i++
            ) {
                defineProperty$1(target, i, function (i) {
                    return {
                        enumerable: true,
                        get: skrinkSerializer$1(
                            /**
                             * @this {any}
                             */
                            function () {
                                return _getInternal(this)[i] & (bit || 0xFF);
                            }
                        ),
                        set: skrinkSerializer$1(
                            /**
                             * @this {any}
                             */
                            function (v) {
                                return _getInternal(this)[i] = (bit || 0xFF) & v;
                            }
                        ),
                    };
                }(i));
            }
            // @ts-ignore
            return Object.seal(target);
        }
        /**
         * 
         * @param {any} target 
         * @returns {any}
         */
        function _callSuper(
            target
        ) {
            return (function (constructor) {
                return skrinkSerializer$1(
                    /**
                     * @this {any}
                     */
                    function () {
                        return Reflect ? Reflect.construct(constructor, arguments, getPrototypeOf$1(this).constructor) : constructor.apply(this, arguments);
                    }
                );
            }(getPrototypeOf$1(get$1(target, [Symbol$1.for("Yarla.Super.constructor")])))).apply(target, flat$1(arguments, 1));
        }
        var maps = new WeakMap$1();
        var expr = {
            /** @type {ReadonlyArray<PropertyKey>} */
            IE: [Symbol$1.for("Yarla.IE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            IP: [Symbol$1.for("Yarla.IP")],
            /** @type {ReadonlyArray<PropertyKey>} */
            UA: [Symbol$1.for("Yarla.UA")],
            /** @type {ReadonlyArray<PropertyKey>} */
            BODY: [Symbol$1.for("Yarla.BODY")],
            /** @type {ReadonlyArray<PropertyKey>} */
            HOST: [Symbol$1.for("Yarla.HOST")],
            /** @type {ReadonlyArray<PropertyKey>} */
            QUEUE: [Symbol$1.for("Yarla.QUEUE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            RANGE: [Symbol$1.for("Yarla.RANGE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            STATE: [Symbol$1.for("Yarla.STATE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            THROW: [Symbol$1.for("Yarla.THROW")],
            /** @type {ReadonlyArray<PropertyKey>} */
            VALUE: [Symbol$1.for("Yarla.VALUE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            LENGTH: [Symbol$1.for("Yarla.LENGTH")],
            /** @type {ReadonlyArray<PropertyKey>} */
            METHOD: [Symbol$1.for("Yarla.METHOD")],
            /** @type {ReadonlyArray<PropertyKey>} */
            ORIGIN: [Symbol$1.for("Yarla.ORIGIN")],
            /** @type {ReadonlyArray<PropertyKey>} */
            SEARCH: [Symbol$1.for("Yarla.SEARCH")],
            /** @type {ReadonlyArray<PropertyKey>} */
            COOKIES: [Symbol$1.for("Yarla.COOKIES")],
            /** @type {ReadonlyArray<PropertyKey>} */
            HEADERS: [Symbol$1.for("Yarla.HEADERS")],
            /** @type {ReadonlyArray<PropertyKey>} */
            REFERER: [Symbol$1.for("Yarla.REFERER")],
            /** @type {ReadonlyArray<PropertyKey>} */
            VERSION: [Symbol$1.for("Yarla.VERSION")],
            /** @type {ReadonlyArray<PropertyKey>} */
            BOUNDARY: [Symbol$1.for("Yarla.BOUNDARY")],
            /** @type {ReadonlyArray<PropertyKey>} */
            METADATA: [Symbol$1.for("Yarla.METADATA")],
            /** @type {ReadonlyArray<PropertyKey>} */
            MIMETYPE: [Symbol$1.for("Yarla.MIMETYPE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            PATHNAME: [Symbol$1.for("Yarla.PATHNAME")],
            /** @type {ReadonlyArray<PropertyKey>} */
            PROTOCOL: [Symbol$1.for("Yarla.PROTOCOL")],
            /** @type {ReadonlyArray<PropertyKey>} */
            ENCODING: [Symbol$1.for("Yarla.ENCODING")],
            /** @type {ReadonlyArray<PropertyKey>} */
            LANGUAGE: [Symbol$1.for("Yarla.LANGUAGE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            INTERNAL: [Symbol$1.for("Yarla.INTERNAL")],
            /** @type {ReadonlyArray<PropertyKey>} */
            INSTANCE: [Symbol$1.for("Yarla.INSTANCE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            RENDERER: [Symbol$1.for("Yarla.RENDERER")],
            /** @type {ReadonlyArray<PropertyKey>} */
            VALIDATE: [Symbol$1.for("Yarla.VALIDATE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            CLASS_MANAGER: [Symbol$1.for("Yarla.CLASS.MANAGER")],
            /** @type {ReadonlyArray<PropertyKey>} */
            EVENT_CAPTURE: [Symbol$1.for("Yarla.EVENT.CAPTURE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            EVENT_GENERAL: [Symbol$1.for("Yarla.EVENT.GENERAL")],
            /** @type {ReadonlyArray<PropertyKey>} */
            EVENT_OBSERVE: [Symbol$1.for("Yarla.EVENT.OBSERVE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            STOP_AFTERWARD: [Symbol$1.for("Yarla.STOP.AFTERWARD")],
            /** @type {ReadonlyArray<PropertyKey>} */
            STOP_IMMEDIATE: [Symbol$1.for("Yarla.STOP.IMMEDIATE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            TICK_PREVENTED: [Symbol$1.for("Yarla.TICK.PREVENTED")],
        };
        var Reflect = globalThis$1.Reflect;
        return {
            get expr() {
                return expr;
            },
            has: skrinkSerializer$1(_has),
            get: skrinkSerializer$1(_get),
            set: skrinkSerializer$1(_set),
            delete: skrinkSerializer$1(_delete),
            getInternal: skrinkSerializer$1(_getInternal),
            hasInternal: skrinkSerializer$1(_hasInternal),
            defineInternal: skrinkSerializer$1(_defineInternal),
            getMetadata: skrinkSerializer$1(_getMetadata),
            hasMetadata: skrinkSerializer$1(_hasMetadata),
            defineMetadata: skrinkSerializer$1(_defineMetadata),
            once: skrinkSerializer$1(_once),
            construct: skrinkSerializer$1(_construct),
            initTyped: skrinkSerializer$1(_initTyped),
            callSuper: skrinkSerializer$1(_callSuper),
            BASE: skrinkSerializer$1(
                function () {
                    throw new Error(message$1.ILLEGAL_CONSTRUCTOR);
                }
            ),
        };
    }());

    var Promise$2 = (function (Promise) {
        return Promise = Promise || defineProperties$1(generateClass$1(
            /**
             * 
             * @this {any}
             * @param {Yarla.BasicFunc} processor 
             */
            function (processor) {
                Reflect$1.set(this, Reflect$1.expr.STATE, definition$1.PENDING);
                Reflect$1.set(this, Reflect$1.expr.VALUE, void 0);
                Reflect$1.set(this, Reflect$1.expr.THROW, true);
                Reflect$1.set(this, Reflect$1.expr.QUEUE, []);
                try {
                    processor(
                        fixed(this, definition$1.RESOLVED),
                        fixed(this, definition$1.REJECTED));
                } catch (error) {
                    solve(this, definition$1.REJECTED, error);
                }
                return this;
            },
            {
                finally: generateMethodDescriptor$1(
                    /**
                     * 
                     * @this {PromiseLike<any>}
                     * @param {Yarla.BasicFunc} onfinally 
                     */
                    function (onfinally) {
                        return this.then(
                            function (value) { return Promise.resolve(onfinally()).then(function () { return value; }); },
                            function (error) { return Promise.resolve(onfinally()).then(function () { throw error; }); });
                    }
                ),
                catch: generateMethodDescriptor$1(
                    /**
                     * 
                     * @this {PromiseLike<any>}
                     * @param {Yarla.BasicFunc} onrejected 
                     */
                    function (onrejected) {
                        return this.then(null, onrejected);
                    }
                ),
                then: generateMethodDescriptor$1(
                    /**
                     * 
                     * @this {any}
                     * @param {Yarla.BasicFunc} onresolved 
                     * @param {Yarla.BasicFunc} onrejected 
                     */
                    function (onresolved, onrejected) {
                        var item = new Promise(NOOP$1);
                        var done = onresolved || function (value) { return value; };
                        var fail = onrejected || function (error) { throw error; };
                        Reflect$1.set(this, Reflect$1.expr.THROW, false);
                        switch (Reflect$1.get(this, Reflect$1.expr.STATE)) {
                            case definition$1.PENDING:
                                Reflect$1.get(this, Reflect$1.expr.QUEUE).push(item, done, fail);
                                break;
                            case definition$1.RESOLVED:
                                track(item, Reflect$1.get(this, Reflect$1.expr.VALUE), done);
                                break;
                            case definition$1.REJECTED:
                                track(item, Reflect$1.get(this, Reflect$1.expr.VALUE), fail);
                                break;
                        }
                        return item;
                    }
                ),
            },
            NOOP$1
        ), {
            resolve: generateMethodDescriptor$1(
                /**
                 * 
                 * @param {any} value 
                 */
                function (value) {
                    return new Promise(function (resolve) { resolve(value); });
                }
            ),
            reject: generateMethodDescriptor$1(
                /**
                 * 
                 * @param {any} error 
                 */
                function (error) {
                    return new Promise(function (_, reject) { reject(error); });
                }
            ),
            race: generateMethodDescriptor$1(
                /**
                 * 
                 * @param {ReadonlyArray<any>} tasks 
                 */
                function (tasks) {
                    return new Promise(function (resolve, reject) {
                        if (tasks.length > 0) {
                            tasks.forEach(function (value) {
                                Promise.resolve(value).then(resolve, reject);
                            });
                        } else {
                            resolve(void 0);
                        }
                    });
                }
            ),
            all: generateMethodDescriptor$1(
                /**
                 * 
                 * @param {ReadonlyArray<any>} tasks 
                 */
                function (tasks) {
                    return new Promise(function (resolve, reject) {
                        if (tasks.length > 0) {
                            var n = 0;
                            var l = tasks.length;
                            var r = new Array(l);
                            tasks.forEach(function (value, i) {
                                Promise.resolve(value).then(function (value) {
                                    r[i] = value;
                                    if (++n === l) {
                                        resolve(r);
                                    }
                                }, reject);
                            });
                        } else {
                            resolve([]);
                        }
                    });
                }
            ),
        });
        /**
         *
         * @param {PromiseLike<any>} target
         * @param {"pending" | "rejected" | "fulfilled"} state
         */
        function fixed(target, state) {
            return skrinkSerializer$1(function (value) {
                solve(target, state, value);
            });
        }
        /**
         *
         * @param {PromiseLike<any>} target
         * @param {"pending" | "rejected" | "fulfilled"} state
         * @param {any} value
         */
        function solve(target, state, value) {
            if (Reflect$1.get(target, Reflect$1.expr.STATE) === definition$1.PENDING) {
                if (target === value) {
                    state = definition$1.REJECTED;
                    value = new Error(message$1.PROMISE_RESOLVED_WITH_ITSELF);
                } else if (isInstanceOf$1(value, Promise)) {
                    if (Reflect$1.get(value, Reflect$1.expr.STATE) === definition$1.PENDING) {
                        return void value.then(
                            fixed(target, definition$1.RESOLVED),
                            fixed(target, definition$1.REJECTED)
                        );
                    }
                    Reflect$1.set(value, Reflect$1.expr.THROW, false);
                    state = Reflect$1.get(value, Reflect$1.expr.STATE);
                    value = Reflect$1.get(value, Reflect$1.expr.VALUE);
                } else if (isObject$1(value) && isFunction$1(value.then)) {
                    if (!(Reflect$1.has(value, Reflect$1.expr.STATE)) ||
                        !(Reflect$1.has(value, Reflect$1.expr.VALUE)) ||
                        !(Reflect$1.get(value, Reflect$1.expr.STATE) !== definition$1.PENDING)) {
                        return void value.then(
                            fixed(target, definition$1.RESOLVED),
                            fixed(target, definition$1.REJECTED)
                        );
                    }
                    state = Reflect$1.get(value, Reflect$1.expr.STATE);
                    value = Reflect$1.get(value, Reflect$1.expr.VALUE);
                }
                Reflect$1.set(target, Reflect$1.expr.STATE, state);
                Reflect$1.set(target, Reflect$1.expr.VALUE, value);
                var m = Reflect$1.get(target, Reflect$1.expr.QUEUE);
                var l = m.length;
                while (m.length > 0) {
                    var item = m.shift();
                    var done = m.shift();
                    var fail = m.shift();
                    switch (state) {
                        case definition$1.RESOLVED:
                            track(item, value, done);
                            break;
                        case definition$1.REJECTED:
                            track(item, value, fail);
                            break;
                    }
                }
                if (l === 0 && state === definition$1.REJECTED) {
                    setImmediate$1(function () {
                        if (Reflect$1.get(target, Reflect$1.expr.THROW)) {
                            throw Reflect$1.get(target, Reflect$1.expr.VALUE);
                        }
                    });
                }
            }
        }
        /**
         *
         * @param {PromiseLike<any>} target
         * @param {any} value
         * @param {Yarla.BasicFunc} apply
         */
        function track(target, value, apply) {
            try {
                solve(target, definition$1.RESOLVED, apply.call(null, value));
            } catch (error) {
                solve(target, definition$1.REJECTED, error);
            }
        }
    }(globalThis$1.Promise));

    var _PureResult = generateClass$1(
        /**
         * 
         * @this {any}
         * @param {(req: import("http").IncomingMessage, res: import("http").ServerResponse) => void | Promise<void>} processor 
         */
        function (
            processor
        ) {
            return Reflect$1.defineInternal(this, processor, "processor");
        },
        {
            invoke: generateMethodDescriptor$1(
                /**
                 * 
                 * @this {any}
                 * @param {import("http").IncomingMessage} req 
                 * @param {import("http").ServerResponse} res 
                 */
                function (
                    req,
                    res
                ) {
                    return Promise$2.resolve(Reflect$1.getInternal(this).processor.call(null, req, res));
                }
            ),
        },
        NOOP$1,
        "PureResult"
    );

    /**
     * 
     * Returns a getter property descriptor.
     * 
     * @param {() => T} argc The getter of the property descriptor.
     * @param {boolean} [enumerable] Indicates whether the property is enumerable.
     * @returns {Yarla.GetterPropertyDescriptor<T>}
     * @template T
     */
    function generateGetterDescriptor$1 (
        argc,
        enumerable
    ) {
        return {
            configurable: true,
            enumerable: !!enumerable,
            get: skrinkSerializer$1(argc),
        };
    }

    var _DataResult = generateClass$1(
        /**
         * 
         * @this {any}
         * @param {Blob | Buffer | import("stream").Readable} data 
         * @param {string} [filename] 
         * @param {string} [mimetype] 
         * @param {object} [modified] 
         * @param {string} [modified.match] 
         * @param {number} [modified.mtime] 
         */
        function (
            data,
            filename,
            mimetype,
            modified
        ) {
            return (
                Reflect$1.defineInternal(this, data, "data"),
                Reflect$1.defineInternal(this, filename, "filename"),
                Reflect$1.defineInternal(this, mimetype, "mimetype"),
                Reflect$1.defineInternal(this, modified, "modified"));
        },
        {
            data: generateGetterDescriptor$1(
                /**
                 * 
                 * @this {any}
                 * @returns {Blob | Buffer | import("stream").Readable}
                 */
                function () {
                    return Reflect$1.getInternal(this).data;
                }
            ),
            filename: generateGetterDescriptor$1(
                /**
                 * 
                 * @this {any}
                 * @returns {string | undefined}
                 */
                function () {
                    return Reflect$1.getInternal(this).filename;
                }
            ),
            mimetype: generateGetterDescriptor$1(
                /**
                 * 
                 * @this {any}
                 * @returns {string | undefined}
                 */
                function () {
                    return Reflect$1.getInternal(this).mimetype;
                }
            ),
            modified: generateGetterDescriptor$1(
                /**
                 * 
                 * @this {any}
                 * @returns {{ readonly match?: string; readonly mtime?: number; } | undefined}
                 */
                function () {
                    return Reflect$1.getInternal(this).modified;
                }
            ),
        },
        NOOP$1,
        "DataResult"
    );

    var _FileResult = generateClass$1(
        /**
         * 
         * @this {any}
         * @param {string} path 
         * @param {string} [filename] 
         * @param {string} [mimetype] 
         */
        function (
            path,
            filename,
            mimetype
        ) {
            return (
                Reflect$1.defineInternal(this, path, "path"),
                Reflect$1.defineInternal(this, filename, "filename"),
                Reflect$1.defineInternal(this, mimetype, "mimetype"));
        },
        {
            path: generateGetterDescriptor$1(
                /**
                 * 
                 * @this {any}
                 * @returns {string}
                 */
                function () {
                    return Reflect$1.getInternal(this).path;
                }
            ),
            filename: generateGetterDescriptor$1(
                /**
                 * 
                 * @this {any}
                 * @returns {string | undefined}
                 */
                function () {
                    return Reflect$1.getInternal(this).filename;
                }
            ),
            mimetype: generateGetterDescriptor$1(
                /**
                 * 
                 * @this {any}
                 * @returns {string | undefined}
                 */
                function () {
                    return Reflect$1.getInternal(this).mimetype;
                }
            ),
        },
        NOOP$1,
        "FileResult"
    );

    var _JsonResult = generateClass$1(
        /**
         * 
         * @this {any}
         * @param {any} data 
         * @param {number} [code] 
         * @param {string} [message] 
         */
        function (
            data,
            code,
            message
        ) {
            return (
                Reflect$1.defineInternal(this, data, "data"),
                Reflect$1.defineInternal(this, code, "code"),
                Reflect$1.defineInternal(this, message, "message"));
        },
        {
            data: generateGetterDescriptor$1(
                /**
                 * 
                 * @this {any}
                 * @returns {any}
                 */
                function () {
                    return Reflect$1.getInternal(this).data;
                }
            ),
            code: generateGetterDescriptor$1(
                /**
                 * 
                 * @this {any}
                 * @returns {number | undefined}
                 */
                function () {
                    return Reflect$1.getInternal(this).code;
                }
            ),
            message: generateGetterDescriptor$1(
                /**
                 * 
                 * @this {any}
                 * @returns {string | undefined}
                 */
                function () {
                    return Reflect$1.getInternal(this).message;
                }
            ),
        },
        NOOP$1,
        "JsonResult"
    );

    var _NoneResult = generateClass$1(
        /**
         * 
         * @this {any}
         * @param {number} status 
         */
        function (
            status
        ) {
            return Reflect$1.defineInternal(this, status, "status");
        },
        {
            status: generateGetterDescriptor$1(
                /**
                 * 
                 * @this {any}
                 * @returns {number}
                 */
                function () {
                    return Reflect$1.getInternal(this).status;
                }
            ),
        },
        NOOP$1,
        "NoneResult"
    );

    var _EmptyResult = generateClass$1(
        /**
         * 
         * @this {any}
         */
        function () {
            return Reflect$1.callSuper(this, 204);
        },
        {

        },
        _NoneResult,
        "EmptyResult"
    );

    var _ResetResult = generateClass$1(
        /**
         * 
         * @this {any}
         */
        function () {
            return Reflect$1.callSuper(this, 205);
        },
        {

        },
        _NoneResult,
        "ResetResult"
    );

    var _RedirectResult = generateClass$1(
        /**
         * 
         * @this {any}
         * @param {string} location
         * @param {301 | 302 | 303 | 307 | 308} [status]
         */
        function (
            location,
            status
        ) {
            return Reflect$1.defineInternal(Reflect$1.callSuper(this, status || 302), location, "location");
        },
        {
            location: generateGetterDescriptor$1(
                /**
                 * 
                 * @this {any}
                 * @returns {string}
                 */
                function () {
                    return Reflect$1.getInternal(this).location;
                }
            ),
        },
        _NoneResult,
        "RedirectResult"
    );

    var _NotFoundResult = generateClass$1(
        /**
         * 
         * @this {any}
         */
        function () {
            return Reflect$1.callSuper(this, 404);
        },
        {

        },
        _NoneResult,
        "NotFoundResult"
    );

    var _ForbiddenResult = generateClass$1(
        /**
         * 
         * @this {any}
         */
        function () {
            return Reflect$1.callSuper(this, 403);
        },
        {

        },
        _NoneResult,
        "ForbiddenResult"
    );

    var _UnauthorizedResult = generateClass$1(
        /**
         * 
         * @this {any}
         * @param {string} realm 
         */
        function (
            realm
        ) {
            return Reflect$1.defineInternal(Reflect$1.callSuper(this, 401), realm, "realm");
        },
        {
            realm: generateGetterDescriptor$1(
                /**
                 * 
                 * @this {any}
                 * @returns {string}
                 */
                function () {
                    return Reflect$1.getInternal(this).realm;
                }
            ),
        },
        _NoneResult,
        "UnauthorizedResult"
    );

    var trampoline$1 = skrinkSerializer$1(
        /**
         * 
         * Returns a trampoline function that resolves recursive functions exceeding the maximum call stack size.
         * 
         * @param {Yarla.Object<T, Yarla.BasicFunc>} argc A recursive function.
         * @returns {T}
         * @template T
         */
        function (argc) {
            var r;
            var ended = true;
            var accumulated = [];
            return /** @type {any} */ (skrinkSerializer$1(
                /**
                 * 
                 * @this {any}
                 */
                function () {
                    accumulated.push(flat$1(arguments));
                    if (ended) {
                        ended = false;
                        while (accumulated.length > 0) {
                            r = argc.apply(this, accumulated.shift());
                        }
                        ended = true;
                        return r;
                    }
                }
            ));
        }
    );

    var merge$1 = skrinkSerializer$1(
        /**
         * 
         * Add or modify properties from the specified object.
         * 
         * @param {T} arg1 The target object.
         * @param {U} arg2 The source object.
         * @param {boolean} [deep] Indicates whether to deeply traverse the object.
         * @param {boolean} [onlyValid] Indicates whether to add or modify only valid properties.
         * @returns {T & U}
         * @template T, U
         */
        function (
            arg1,
            arg2,
            deep,
            onlyValid
        ) {
            var f = trampoline$1(
                function (p, k, v) {
                    var s = p;
                    if (!isNullOrUndefined$1(k)) {
                        if (!isObject$1(p[k])) {
                            p[k] = isArray$1(v) ? [] : {};
                        }
                        s = p[k];
                    }
                    for (var n in v) {
                        var d = v[n];
                        if (deep && isObject$1(d)) {
                            f(s, n, d);
                        } else if (!onlyValid || isValid$1(d)) {
                            s[n] = d;
                        }
                    }
                }
            );
            f(arg1, null, arg2);
            // @ts-ignore
            return arg1;
        }
    );

    var defaults$1 = skrinkSerializer$1(
        /**
         * 
         * Add non-existing properties to object from the queues object.
         * 
         * @param {any} argc The target object.
         * @returns {any}
         */
        function (
            argc
        ) {
            for (var
                i = 0,
                s = flat$1(arguments, 1, Infinity, true),
                l = s.length;
                i < l;
                i++
            ) {
                merge$1(argc, s[i], false, true);
            }
            return argc;
        }
    );

    var clearTimeout = globalThis$1.clearTimeout;

    var keys$1 = skrinkSerializer$1(
        /**
         * 
         * Returns the names of the enumerable string properties and methods of an object.
         * 
         * @param {any} argc Object that contains the properties and methods.
         * @param {boolean} [inherit] Indicates whether to return the names of the inherited properties and methods.
         * @returns {ReadonlyArray<string>}
         */
        function (
            argc,
            inherit
        ) {
            var r = [];
            for (var n in argc) {
                if (inherit || hasOwnProperty$1(argc, n)) {
                    r.push(n);
                }
            }
            return r;
        }
    );

    var del = skrinkSerializer$1(
        /**
         * 
         * Delete a property from the specified object. Returns true if the property was deleted successfully, otherwise returns false.
         * 
         * @param {any} argc An object.
         * @param {Yarla.PropertyExpr} expr The property expression.
         * @returns {boolean}
         */
        function (
            argc,
            expr
        ) {
            var t = argc, p;
            for (var
                i = 0,
                m = argc,
                s = isString$1(expr) ? divideExpression$1(expr) : expr,
                l = s.length;
                i < l;
                i++
            ) {
                t = m;
                p = s[i];
                m = t[p];
            }
            return isNullOrUndefined$1(p) ? false : delete t[p];
        }
    );

    var SessionStorage = defineProperties$1(generateClass$1(Reflect$1.BASE, {
        count: generateMethodDescriptor$1(
            /**
             * 
             * @this {Yarla.koa.SessionStorage}
             * @returns {Promise<number>}
             */
            function () {
                return Promise$2.resolve(keys$1(Reflect$1.getInternal(this).data).length);
            }
        ),
        tokens: generateMethodDescriptor$1(
            /**
             * 
             * @this {Yarla.koa.SessionStorage}
             * @returns {Promise<ReadonlyArray<string>>}
             */
            function () {
                return Promise$2.resolve(keys$1(Reflect$1.getInternal(this).data));
            }
        ),
        delete: generateMethodDescriptor$1(
            /**
             * 
             * @this {Yarla.koa.SessionStorage}
             * @param {string} token
             * @returns {Promise<boolean>}
             */
            function (
                token
            ) {
                var o = Reflect$1.getInternal(this);
                var k = [String(token)];
                var d = o.data;
                var t = o.time;
                var h = get$1(t, k);
                if (h) {
                    clearTimeout(h);
                }
                var x = del(d, k);
                var y = del(t, k);
                return Promise$2.resolve(x || y);
            }
        ),
        has: generateMethodDescriptor$1(
            /**
             * 
             * @this {Yarla.koa.SessionStorage}
             * @param {string} token 
             * @returns {Promise<boolean>}
             */
            function (
                token
            ) {
                return Promise$2.resolve(has$1(Reflect$1.getInternal(this).data, [String(token)]));
            }
        ),
        get: generateMethodDescriptor$1(
            /**
             * 
             * @this {Yarla.koa.SessionStorage}
             * @param {string} token 
             * @param {string} key
             * @returns {Promise<any>}
             */
            function (
                token,
                key
            ) {
                return Promise$2.resolve(get$1(Reflect$1.getInternal(this).data, [String(token), String(key)]));
            }
        ),
        set: generateMethodDescriptor$1(
            /**
             * 
             * @this {Yarla.koa.SessionStorage}
             * @param {string} token 
             * @param {string} key
             * @param {string} value
             * @returns {Promise<any>}
             */
            function (
                token,
                key,
                value
            ) {
                return Promise$2.resolve(set$1(Reflect$1.getInternal(this).data, [String(token), String(key)], value));
            }
        ),
        heartbeat: generateMethodDescriptor$1(
            /**
             * 
             * @this {Yarla.koa.SessionStorage}
             * @param {string} token 
             * @returns {Promise<void>}
             */
            function (
                token
            ) {
                var o = Reflect$1.getInternal(this);
                var k = [String(token)];
                var s = o.opts.expire;
                var d = o.data;
                var t = o.time;
                var h = get$1(t, k);
                if (h) {
                    clearTimeout(h);
                }
                if (s > 0) {
                    var r = set$1(t, k, setTimeout$1(function () {
                        del(d, k);
                        del(t, k);
                    }, s * 60 * 1000));
                    if (r.unref) {
                        r.unref();
                    }
                } else {
                    del(t, k);
                }
                return Promise$2.resolve();
            }
        ),
    }, NOOP$1, "SessionStorage"), {
        init: generateMethodDescriptor$1(
            /**
             * 
             * @this {Yarla.Proto<Yarla.koa.SessionStorage>}
             * @param {Yarla.koa.SessionStorageInitializationOptions} opts 
             */
            function (
                opts
            ) {
                return Reflect$1.construct(this, {
                    opts: opts,
                    time: {},
                    data: {},
                });
            }
        ),
    });

    var _createSessionStorage = skrinkSerializer$1(
        /**
         * 
         * @param {Yarla.koa.SessionStorageInitializationOptions} [opts] 
         */
        function (
            opts
        ) {
            return SessionStorage.init(defaults$1({ expire: 20 }, opts));
        }
    );

    /** 
     * Defines base64 to ascii mapping table.
     * 
     * @type {Readonly<Record<number | string, number>>}
     */
    var BTOA$1 = {
        0: 65,
        1: 66,
        2: 67,
        3: 68,
        4: 69,
        5: 70,
        6: 71,
        7: 72,
        8: 73,
        9: 74,
        10: 75,
        11: 76,
        12: 77,
        13: 78,
        14: 79,
        15: 80,
        16: 81,
        17: 82,
        18: 83,
        19: 84,
        20: 85,
        21: 86,
        22: 87,
        23: 88,
        24: 89,
        25: 90,
        26: 97,
        27: 98,
        28: 99,
        29: 100,
        30: 101,
        31: 102,
        32: 103,
        33: 104,
        34: 105,
        35: 106,
        36: 107,
        37: 108,
        38: 109,
        39: 110,
        40: 111,
        41: 112,
        42: 113,
        43: 114,
        44: 115,
        45: 116,
        46: 117,
        47: 118,
        48: 119,
        49: 120,
        50: 121,
        51: 122,
        52: 48,
        53: 49,
        54: 50,
        55: 51,
        56: 52,
        57: 53,
        58: 54,
        59: 55,
        60: 56,
        61: 57,
        62: 43,
        63: 47,
        64: 61,
    };

    /**
     * 
     * Returns a character created by using the specified code point.
     * 
     * @param {ArrayLike<number>} argc A code point array.
     * @returns {string}
     */
    function fromCharCode$1 (
        argc
    ) {
        var r = "";
        for (var
            i = 0,
            l = argc.length;
            i < l;
            i++
        ) {
            var n = argc[i];
            if (n <= 0xFFFF) {
                r += String.fromCharCode(n);
            } else {
                r += String.fromCharCode(((n - 0x10000) >> 10) + 0xD800, ((n - 0x10000) % 0x400) + 0xDC00);
            }
        }
        return r;
    }

    var salt$1 = skrinkSerializer$1(
        /**
         * 
         * Returns a URL-safe random string.
         * 
         * @param {number} [size] The length of the string, default 8.
         * @returns {string}
         */
        function (
            size
        ) {
            var r = [];
            for (var
                i = 0,
                l = size || 8;
                i < l;
                i++
            ) {
                r.push(BTOA$1[Math.random() * 62 | 0]);
            }
            return fromCharCode$1(r);
        }
    );

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
    var nodeRequire$1 = function (
        id
    ) {
        try {
            return typeof require !== "undefined" ? require( /* webpackIgnore: true */ id) : null;
        } catch (_) {
            // @ts-ignore
            return null;
        }
    };

    var crypto = nodeRequire$1("crypto");

    var httpHeader$1 = {
        /** @type {"Etag"} */
        ETAG: "Etag",
        /** @type {"Host"} */
        HOST: "Host",
        /** @type {"Range"} */
        RANGE: "Range",
        /** @type {"Cookie"} */
        COOKIE: "Cookie",
        /** @type {"Origin"} */
        ORIGIN: "Origin",
        /** @type {"Pragma"} */
        PRAGMA: "Pragma",
        /** @type {"Referer"} */
        REFERER: "Referer",
        /** @type {"Expires"} */
        EXPIRES: "Expires",
        /** @type {"Location"} */
        LOCATION: "Location",
        /** @type {"Authorization"} */
        AUTHORIZATION: "Authorization",
        /** @type {"Accept-Ranges"} */
        ACCEPT_RANGES: "Accept-Ranges",
        /** @type {"Accept-Encoding"} */
        ACCEPT_ENCODING: "Accept-Encoding",
        /** @type {"Accept-Language"} */
        ACCEPT_LANGUAGE: "Accept-Language",
        /** @type {"Access-Control-Allow-Credentials"} */
        ACCESS_CONTROL_ALLOW_CREDENTIALS: "Access-Control-Allow-Credentials",
        /** @type {"Access-Control-Allow-Headers"} */
        ACCESS_CONTROL_ALLOW_HEADERS: "Access-Control-Allow-Headers",
        /** @type {"Access-Control-Allow-Methods"} */
        ACCESS_CONTROL_ALLOW_METHODS: "Access-Control-Allow-Methods",
        /** @type {"Access-Control-Allow-Origin"} */
        ACCESS_CONTROL_ALLOW_ORIGIN: "Access-Control-Allow-Origin",
        /** @type {"Access-Control-Max-Age"} */
        ACCESS_CONTROL_MAX_AGE: "Access-Control-Max-Age",
        /** @type {"Content-Transfer-Encoding"} */
        CONTENT_TRANSFER_ENCODING: "Content-Transfer-Encoding",
        /** @type {"Content-Disposition"} */
        CONTENT_DISPOSITION: "Content-Disposition",
        /** @type {"Content-Encoding"} */
        CONTENT_ENCODING: "Content-Encoding",
        /** @type {"Content-Length"} */
        CONTENT_LENGTH: "Content-Length",
        /** @type {"Content-Range"} */
        CONTENT_RANGE: "Content-Range",
        /** @type {"Content-Type"} */
        CONTENT_TYPE: "Content-Type",
        /** @type {"User-Agent"} */
        USER_AGENT: "User-Agent",
        /** @type {"Cache-Control"} */
        CACHE_CONTROL: "Cache-Control",
        /** @type {"Last-Modified"} */
        LAST_MODIFIED: "Last-Modified",
        /** @type {"If-None-Match"} */
        IF_NONE_MATCH: "If-None-Match",
        /** @type {"If-Modified-Since"} */
        IF_MODIFIED_SINCE: "If-Modified-Since",
        /** @type {"WWW-Authenticate"} */
        WWW_AUTHENTICATE: "WWW-Authenticate",
        /** @type {"X-Requested-With"} */
        X_REQUESTED_WITH: "X-Requested-With",
        /** @type {"X-Responsed-Url"} */
        X_RESPONSED_URL: "X-Responsed-Url",
        /** @type {"X-Real-IP"} */
        X_REAL_IP: "X-Real-IP",
        /** @type {"X-Real-Host"} */
        X_REAL_HOST: "X-Real-Host",
        /** @type {"X-Real-Proto"} */
        X_REAL_PROTO: "X-Real-Proto",
        /** @type {"X-Forwarded-For"} */
        X_FORWARDED_FOR: "X-Forwarded-For",
        /** @type {"X-Forwarded-Host"} */
        X_FORWARDED_HOST: "X-Forwarded-Host",
        /** @type {"X-Forwarded-Proto"} */
        X_FORWARDED_PROTO: "X-Forwarded-Proto",
    };

    /**
     * 
     * Compare strings time-safely.
     * 
     * @param {string} arg1 One string.
     * @param {string} arg2 Two string.
     * @returns {boolean}
     */
    function compareTimingSafe (
        arg1,
        arg2
    ) {
        var h = crypto.pseudoRandomBytes(16);
        var m = crypto.createHmac(definition$1.SHA256, h).update(arg1, definition$1.UTF8).digest();
        var n = crypto.createHmac(definition$1.SHA256, h).update(arg2, definition$1.UTF8).digest();
        var q = crypto.timingSafeEqual(m, n);
        return q && arg1 === arg2;
    }

    /**
     * Returns true if the sequence of elements of searchString converted to a String is the
     * same as the corresponding elements of this object (converted to a String) starting at
     * position. Otherwise returns false.
     * 
     * @param {string} argc Base string.
     * @param {string} value String to search for.
     * @param {number} [position] Search starting position.
     * @returns {boolean}
     */
    function startsWith$1 (
        argc,
        value,
        position
    ) {
        for (var
            i = 0,
            p = position || 0,
            l = value.length;
            i < l;
            i++
        ) {
            if (value.charAt(i) !== argc.charAt(p + i)) {
                return false;
            }
        }
        return true;
    }

    /**
     * 
     * Convert the specified bytes to the specified bit.
     * 
     * @param {ArrayLike<number>} argc A bytes.
     * @param {number} sourceBit Source bit of the bytes.
     * @param {number} targetBit Target bit of the bytes.
     * @returns {ReadonlyArray<number>}
     */
    function bitConvert$1 (
        argc,
        sourceBit,
        targetBit
    ) {
        var r = [];
        var z = 0;
        var l = argc.length;
        for (var
            i = 0;
            i < l;
            i++
        ) {
            if (argc[i] !== 0) {
                break;
            }
            z++;
        }
        z = Math.min(z, l - 1);
        while ((l = argc.length) > 0) {
            var quotient = [];
            var remainder = 0;
            for (var
                i = 0;
                i < l;
                i++
            ) {
                var total = argc[i] + remainder * sourceBit;
                var digit = Math.floor(total / targetBit);
                remainder = Math.floor(total % targetBit);
                if (digit > 0 || quotient.length > 0) {
                    quotient.push(digit);
                }
            }
            r.push(remainder);
            argc = quotient;
        }
        for (var
            i = 0;
            i < z;
            i++
        ) {
            r.push(0);
        }
        return r.reverse();
    }

    /**
     * 
     * Decodes a bytes to hex string.
     * 
     * @param {ArrayLike<number>} argc A bytes.
     * @returns {string}
     */
    function decodeHEX$1 (
        argc
    ) {
        var r = [];
        for (var
            i = 0,
            l = argc.length;
            i < l;
            i++
        ) {
            var n = argc[i] & 0xFF;
            if (n < 0x10) {
                r.push("0" + n.toString(16));
            } else {
                r.push(n.toString(16));
            }
        }
        return r.join("");
    }

    /**
     * 
     * Decodes a bytes to ascii string.
     * 
     * @param {ArrayLike<number>} argc A bytes.
     * @returns {string}
     */
    function decodeASCII$1 (
        argc
    ) {
        var r = [];
        for (var
            i = 0,
            l = argc.length;
            i < l;
            i++
        ) {
            r.push(argc[i] & 0x7F);
        }
        return fromCharCode$1(r);
    }

    var btoa$3 = globalThis$1.btoa || function (
        /**
         * @type {string}
         */
        argc
    ) {
        var r = [];
        for (var
            i = 0,
            l = argc.length;
            i < l;
        ) {
            var n1 = argc.charCodeAt(i++);
            var n2 = argc.charCodeAt(i++);
            var n3 = argc.charCodeAt(i++);
            var e1 = (n1 & 0xFF) >> 2;
            var e2 = (n1 & 0x03) << 4 | n2 >> 4;
            var e3 = (n2 & 0x0F) << 2 | n3 >> 6;
            var e4 = (n3 & 0x3F) << 0;
            if (globalThis$1.isNaN(n2)) {
                e3 = 64;
            }
            if (globalThis$1.isNaN(n3)) {
                e4 = 64;
            }
            r.push(BTOA$1[e1]);
            r.push(BTOA$1[e2]);
            r.push(BTOA$1[e3]);
            r.push(BTOA$1[e4]);
        }
        return fromCharCode$1(r);
    };

    /**
     * 
     * Decodes a bytes to latin1 string.
     * 
     * @param {ArrayLike<number>} argc A bytes.
     * @returns {string}
     */
    function decodeLATIN1$1 (
        argc
    ) {
        var r = [];
        for (var
            i = 0,
            l = argc.length;
            i < l;
            i++
        ) {
            r.push(argc[i] & 0xFF);
        }
        return fromCharCode$1(r);
    }

    /**
     * 
     * Decodes a bytes to base64 string.
     * 
     * @param {ArrayLike<number>} argc A bytes.
     * @returns {string}
     */
    function decodeBASE64$1 (
        argc
    ) {
        return btoa$3(decodeLATIN1$1(argc));
    }

    /**
     * 
     * Decodes a utf8 bytes to sting.
     * 
     * @param {ArrayLike<number>} argc A utf8 bytes.
     * @returns {string}
     */
    function decodeUTF8$1 (
        argc
    ) {
        var r = [];
        for (var
            i = 0,
            l = argc.length;
            i < l;
        ) {
            var n = argc[i];
            if (n <= 0x7F) {
                r.push(
                    ((argc[i++] & 0x7F) << (0 * 6)));
            } else if (n >= 0xC0 && n <= 0xDF) {
                r.push(
                    ((argc[i++] & 0x1F) << (1 * 6)) |
                    ((argc[i++] & 0x3F) << (0 * 6)));
            } else if (n >= 0xE0 && n <= 0xEF) {
                r.push(
                    ((argc[i++] & 0x0F) << (2 * 6)) |
                    ((argc[i++] & 0x3F) << (1 * 6)) |
                    ((argc[i++] & 0x3F) << (0 * 6)));
            } else if (n >= 0xF0 && n <= 0xF7) {
                r.push(
                    ((argc[i++] & 0x07) << (3 * 6)) |
                    ((argc[i++] & 0x3F) << (2 * 6)) |
                    ((argc[i++] & 0x3F) << (1 * 6)) |
                    ((argc[i++] & 0x3F) << (0 * 6)));
            } else if (n >= 0xF8 && n <= 0xFB) {
                r.push(
                    ((argc[i++] & 0x03) << (4 * 6)) |
                    ((argc[i++] & 0x3F) << (3 * 6)) |
                    ((argc[i++] & 0x3F) << (2 * 6)) |
                    ((argc[i++] & 0x3F) << (1 * 6)) |
                    ((argc[i++] & 0x3F) << (0 * 6)));
            } else if (n >= 0xFC) {
                r.push(
                    ((argc[i++] & 0x01) << (5 * 6)) |
                    ((argc[i++] & 0x3F) << (4 * 6)) |
                    ((argc[i++] & 0x3F) << (3 * 6)) |
                    ((argc[i++] & 0x3F) << (2 * 6)) |
                    ((argc[i++] & 0x3F) << (1 * 6)) |
                    ((argc[i++] & 0x3F) << (0 * 6)));
            } else {
                i++;
            }
        }
        return fromCharCode$1(r);
    }

    /**
     * 
     * @param {ArrayLike<number>} argc 
     * @param {"hex" | "ascii" | "base64" | "latin1" | "utf8"} [encoding] 
     * @returns {string}
     */
    function decode$1 (
        argc,
        encoding
    ) {
        if (encoding === definition$1.HEX) {
            return decodeHEX$1(argc);
        }
        if (encoding === definition$1.ASCII) {
            return decodeASCII$1(argc);
        }
        if (encoding === definition$1.BASE64) {
            return decodeBASE64$1(argc);
        }
        if (encoding === definition$1.LATIN1) {
            return decodeLATIN1$1(argc);
        }
        return decodeUTF8$1(argc);
    }

    /**
     * 
     * Encodes a hex string to bytes.
     * 
     * @param {string} argc A hex string.
     * @returns {ReadonlyArray<number>}
     */
    function encodeHEX$1 (
        argc
    ) {
        var r = [];
        for (var
            i = 0,
            l = argc.length;
            i < l;
            i += 2
        ) {
            var n = parseInt(argc.slice(i, i + 2), 16);
            if (n > 0) {
                r.push(n);
            }
        }
        return r;
    }

    /**
     * 
     * Encodes a ascii string to bytes.
     * 
     * @param {string} argc A ascii string.
     * @returns {ReadonlyArray<number>}
     */
    function encodeASCII$1 (
        argc
    ) {
        var r = [];
        for (var
            i = 0,
            l = argc.length;
            i < l;
            i++
        ) {
            var n = argc.charCodeAt(i);
            if (n > 0x7F) {
                throw new Error(message$1.CHARACTER_IS_OUTSIDE_THE_BOUNDS_OF_ASCII);
            }
            r.push(n);
        }
        return r;
    }

    /** 
     * Defines ascii to base64 mapping table.
     * 
     * @type {Readonly<Record<number | string, number>>}
     */
     var ATOB$1 = {
        43: 62,
        47: 63,
        48: 52,
        49: 53,
        50: 54,
        51: 55,
        52: 56,
        53: 57,
        54: 58,
        55: 59,
        56: 60,
        57: 61,
        61: 64,
        65: 0,
        66: 1,
        67: 2,
        68: 3,
        69: 4,
        70: 5,
        71: 6,
        72: 7,
        73: 8,
        74: 9,
        75: 10,
        76: 11,
        77: 12,
        78: 13,
        79: 14,
        80: 15,
        81: 16,
        82: 17,
        83: 18,
        84: 19,
        85: 20,
        86: 21,
        87: 22,
        88: 23,
        89: 24,
        90: 25,
        97: 26,
        98: 27,
        99: 28,
        100: 29,
        101: 30,
        102: 31,
        103: 32,
        104: 33,
        105: 34,
        106: 35,
        107: 36,
        108: 37,
        109: 38,
        110: 39,
        111: 40,
        112: 41,
        113: 42,
        114: 43,
        115: 44,
        116: 45,
        117: 46,
        118: 47,
        119: 48,
        120: 49,
        121: 50,
        122: 51,
    };

    var atob$1 = globalThis$1.atob || function (
        /**
         * @type {string}
         */
        argc
    ) {
        var r = [];
        for (var
            i = 0,
            l = argc.length;
            i < l;
        ) {
            var e1 = ATOB$1[argc.charCodeAt(i++)];
            var e2 = ATOB$1[argc.charCodeAt(i++)];
            var e3 = ATOB$1[argc.charCodeAt(i++)];
            var e4 = ATOB$1[argc.charCodeAt(i++)];
            var n1 = (e1 & 0xFF) << 2 | e2 >> 4;
            var n2 = (e2 & 0x0F) << 4 | e3 >> 2;
            var n3 = (e3 & 0x03) << 6 | e4 >> 0;
            r.push(n1);
            if (e4 < 64) {
                r.push(n2);
            }
            if (e4 < 64) {
                r.push(n3);
            }
        }
        return fromCharCode$1(r);
    };

    /**
     * 
     * Encodes a latin1 string to bytes.
     * 
     * @param {string} argc A latin1 string.
     * @returns {ReadonlyArray<number>}
     */
    function encodeLATIN1$1 (
        argc
    ) {
        var r = [];
        for (var
            i = 0,
            l = argc.length;
            i < l;
            i++
        ) {
            var n = argc.charCodeAt(i);
            if (n > 0xFF) {
                throw new Error(message$1.CHARACTER_IS_OUTSIDE_THE_BOUNDS_OF_LATIN1);
            }
            r.push(n);
        }
        return r;
    }

    /**
     * 
     * Encodes a base64 string to bytes.
     * 
     * @param {string} argc A base64 string.
     * @returns {ReadonlyArray<number>}
     */
    function encodeBASE64$1 (
        argc
    ) {
        return encodeLATIN1$1(atob$1(argc));
    }

    /**
     * 
     * Encodes a string to utf8 bytes.
     * 
     * @param {string} argc A string.
     * @returns {ReadonlyArray<number>}
     */
    function encodeUTF8$1 (
        argc
    ) {
        var r = [];
        for (var
            i = 0,
            l = argc.length;
            i < l;
        ) {
            var n = argc.charCodeAt(i++);
            if (n >= 0xD800 &&
                n <= 0xDBFF) {
                if (i < l) {
                    n = ((n - 0xD800) * 0x400) + (argc.charCodeAt(i++) - 0xDC00) + 0x10000;
                }
            }
            if (n <= 0x0000007F) {
                r.push(n & 0x7F);
            } else if (n >= 0x00000080 && n <= 0x000007FF) {
                r.push(((n >> (1 * 6)) & 0x1F) | 0xC0);
                r.push(((n >> (0 * 6)) & 0x3F) | 0x80);
            } else if (n >= 0x00000800 && n <= 0x0000FFFF) {
                r.push(((n >> (2 * 6)) & 0x0F) | 0xE0);
                r.push(((n >> (1 * 6)) & 0x3F) | 0x80);
                r.push(((n >> (0 * 6)) & 0x3F) | 0x80);
            } else if (n >= 0x00010000 && n <= 0x001FFFFF) {
                r.push(((n >> (3 * 6)) & 0x07) | 0xF0);
                r.push(((n >> (2 * 6)) & 0x3F) | 0x80);
                r.push(((n >> (1 * 6)) & 0x3F) | 0x80);
                r.push(((n >> (0 * 6)) & 0x3F) | 0x80);
            } else if (n >= 0x00200000 && n <= 0x03FFFFFF) {
                r.push(((n >> (4 * 6)) & 0x03) | 0xF8);
                r.push(((n >> (3 * 6)) & 0x3F) | 0x80);
                r.push(((n >> (2 * 6)) & 0x3F) | 0x80);
                r.push(((n >> (1 * 6)) & 0x3F) | 0x80);
                r.push(((n >> (0 * 6)) & 0x3F) | 0x80);
            } else if (n >= 0x04000000 && n <= 0x7FFFFFFF) {
                r.push(((n >> (5 * 6)) & 0x01) | 0xFC);
                r.push(((n >> (4 * 6)) & 0x3F) | 0x80);
                r.push(((n >> (3 * 6)) & 0x3F) | 0x80);
                r.push(((n >> (2 * 6)) & 0x3F) | 0x80);
                r.push(((n >> (1 * 6)) & 0x3F) | 0x80);
                r.push(((n >> (0 * 6)) & 0x3F) | 0x80);
            }
        }
        return r;
    }

    /**
     * 
     * @param {string} argc 
     * @param {"hex" | "ascii" | "base64" | "latin1" | "utf8"} [encoding] 
     * @returns {ReadonlyArray<number>}
     */
    function encode$1 (
        argc,
        encoding
    ) {
        if (encoding === definition$1.HEX) {
            return encodeHEX$1(argc);
        }
        if (encoding === definition$1.ASCII) {
            return encodeASCII$1(argc);
        }
        if (encoding === definition$1.BASE64) {
            return encodeBASE64$1(argc);
        }
        if (encoding === definition$1.LATIN1) {
            return encodeLATIN1$1(argc);
        }
        return encodeUTF8$1(argc);
    }

    var isArrayBuffer$1 = skrinkSerializer$1(
        /**
         * 
         * Determines if the input parameter is a ArrayBufferLike.
         * 
         * @param {any} argc Any object.
         * @returns {argc is ArrayBufferLike}
         */
        function (
            argc
        ) {
            return isInstanceOf$1(argc, globalThis$1.ArrayBuffer) || isInstanceOf$1(argc, globalThis$1.SharedArrayBuffer);
        }
    );

    var Uint8Array$1 = (function (Uint8Array) {
        return Uint8Array = Uint8Array || generateClass$1(
            /**
             * 
             * @this {Uint8Array}
             * @param {number | number[]} [argc] 
             */
            function (argc) {
                if (isArray$1(argc)) {
                    Reflect$1.defineInternal(this, Object.seal(Array.apply(null, new Array(argc.length)).map(function (_, i) { return argc[i] & 0xFF; })));
                } else {
                    Reflect$1.defineInternal(this, Object.seal(Array.apply(null, new Array(Math.floor(argc || 0))).map(function () { return 0 & 0xFF; })));
                }
                return Reflect$1.initTyped(this);
            },
            {
                buffer: generateGetterDescriptor$1(
                    /**
                     * 
                     * @this {Uint8Array}
                     */
                    function () {
                        throw new Error(message$1.NOT_SUPPORTED);
                    }
                ),
                byteOffset: generateGetterDescriptor$1(
                    /**
                     * 
                     * @this {Uint8Array}
                     */
                    function () {
                        throw new Error(message$1.NOT_SUPPORTED);
                    }
                ),
                byteLength: generateGetterDescriptor$1(
                    /**
                     * 
                     * @this {Uint8Array}
                     */
                    function () {
                        throw new Error(message$1.NOT_SUPPORTED);
                    }
                ),
                length: generateGetterDescriptor$1(
                    /**
                     * 
                     * @this {Uint8Array}
                     */
                    function () {
                        return Reflect$1.getInternal(this).length;
                    }
                ),
                some: generateMethodDescriptor$1(
                    /**
                     * 
                     * @this {Uint8Array}
                     * @param {(v: number, i: number) => unknown} callback 
                     * @param {any} [context]
                     */
                    function (
                        callback,
                        context
                    ) {
                        return Reflect$1.getInternal(this).some(callback, context || this);
                    }
                ),
                every: generateMethodDescriptor$1(
                    /**
                     * 
                     * @this {Uint8Array}
                     * @param {(v: number, i: number) => unknown} callback 
                     * @param {any} [context]
                     */
                    function (
                        callback,
                        context
                    ) {
                        return Reflect$1.getInternal(this).every(callback, context || this);
                    }
                ),
                filter: generateMethodDescriptor$1(
                    /**
                     * 
                     * @this {Uint8Array}
                     * @param {(v: number, i: number) => number} callback 
                     * @param {any} [context]
                     */
                    function (
                        callback,
                        context
                    ) {
                        return new Uint8Array(Reflect$1.getInternal(this).filter(callback, context || this));
                    }
                ),
                map: generateMethodDescriptor$1(
                    /**
                     * 
                     * @this {Uint8Array}
                     * @param {(v: number, i: number) => number} callback 
                     * @param {any} [context]
                     */
                    function (
                        callback,
                        context
                    ) {
                        return new Uint8Array(Reflect$1.getInternal(this).map(callback, context || this));
                    }
                ),
                subarray: generateMethodDescriptor$1(
                    /**
                     * 
                     * @this {Uint8Array}
                     * @param {number} [start] 
                     * @param {number} [end] 
                     */
                    function (
                        start,
                        end
                    ) {
                        return new Uint8Array(Reflect$1.getInternal(this).slice(start, end));
                    }
                ),
                join: generateMethodDescriptor$1(
                    /**
                     * 
                     * @this {Uint8Array}
                     * @param {string} [separator] 
                     */
                    function (separator) {
                        return Reflect$1.getInternal(this).join(separator);
                    }
                ),
            },
            NOOP$1
        );
    }(globalThis$1.Uint8Array));

    var Buffer$1 = (function (Buffer) {
        return Buffer = Buffer || defineProperties$1(generateClass$1(Reflect$1.BASE, {
            buffer: generateGetterDescriptor$1(
                /**
                 * 
                 * @this {Buffer}
                 */
                function () {
                    return Reflect$1.getInternal(this).buffer;
                }
            ),
            byteOffset: generateGetterDescriptor$1(
                /**
                 * 
                 * @this {Buffer}
                 */
                function () {
                    return Reflect$1.getInternal(this).byteOffset;
                }
            ),
            byteLength: generateGetterDescriptor$1(
                /**
                 * 
                 * @this {Buffer}
                 */
                function () {
                    return Reflect$1.getInternal(this).byteLength;
                }
            ),
            length: generateGetterDescriptor$1(
                /**
                 * 
                 * @this {Buffer}
                 */
                function () {
                    return Reflect$1.getInternal(this).length;
                }
            ),
            some: generateMethodDescriptor$1(
                /**
                 * 
                 * @this {Buffer}
                 * @param {(v: number, i: number) => unknown} callback 
                 * @param {any} [context]
                 */
                function (
                    callback,
                    context
                ) {
                    return Reflect$1.getInternal(this).some(callback, context || this);
                }
            ),
            every: generateMethodDescriptor$1(
                /**
                 * 
                 * @this {Buffer}
                 * @param {(v: number, i: number) => unknown} callback 
                 * @param {any} [context]
                 */
                function (
                    callback,
                    context
                ) {
                    return Reflect$1.getInternal(this).every(callback, context || this);
                }
            ),
            filter: generateMethodDescriptor$1(
                /**
                 * 
                 * @this {Buffer}
                 * @param {(v: number, i: number) => number} callback 
                 * @param {any} [context]
                 */
                function (
                    callback,
                    context
                ) {
                    return Buffer.from(Reflect$1.getInternal(this).filter(callback, context || this));
                }
            ),
            map: generateMethodDescriptor$1(
                /**
                 * 
                 * @this {Buffer}
                 * @param {(v: number, i: number) => number} callback 
                 * @param {any} [context]
                 */
                function (
                    callback,
                    context
                ) {
                    return Buffer.from(Reflect$1.getInternal(this).map(callback, context || this));
                }
            ),
            subarray: generateMethodDescriptor$1(
                /**
                 * 
                 * @this {Buffer}
                 * @param {number} [start] 
                 * @param {number} [end] 
                 */
                function (
                    start,
                    end
                ) {
                    return Buffer.from(Reflect$1.getInternal(this).subarray(start, end));
                }
            ),
            join: generateMethodDescriptor$1(
                /**
                 * 
                 * @this {Buffer}
                 * @param {string} [separator] 
                 */
                function (
                    separator
                ) {
                    return Reflect$1.getInternal(this).join(separator);
                }
            ),
            readUInt8: generateMethodDescriptor$1(
                /**
                 * 
                 * @this {Buffer}
                 * @param {number} [offset] 
                 */
                function (
                    offset
                ) {
                    var sn = offset || 0;
                    var mn = this.length;
                    if (sn > mn - 1) {
                        throw new Error(message$1.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                    }
                    return this[sn];
                }
            ),
            readUInt16BE: generateMethodDescriptor$1(
                /**
                 * 
                 * @this {Buffer}
                 * @param {number} [offset] 
                 */
                function (
                    offset
                ) {
                    var sn = offset || 0;
                    var mn = this.length;
                    if (sn > mn - 2) {
                        throw new Error(message$1.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                    }
                    var b1 = this[sn + 0] << 0x08;
                    var b2 = this[sn + 1] << 0x00;
                    return (b1 | b2) >>> 0;
                }
            ),
            readUInt16LE: generateMethodDescriptor$1(
                /**
                 * 
                 * @this {Buffer}
                 * @param {number} [offset] 
                 */
                function (
                    offset
                ) {
                    var sn = offset || 0;
                    var mn = this.length;
                    if (sn > mn - 2) {
                        throw new Error(message$1.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                    }
                    var b1 = this[sn + 0] << 0x00;
                    var b2 = this[sn + 1] << 0x08;
                    return (b1 | b2) >>> 0;
                }
            ),
            readUInt32BE: generateMethodDescriptor$1(
                /**
                 * 
                 * @this {Buffer}
                 * @param {number} [offset] 
                 */
                function (
                    offset
                ) {
                    var sn = offset || 0;
                    var mn = this.length;
                    if (sn > mn - 4) {
                        throw new Error(message$1.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                    }
                    var b1 = this[sn + 0] << 0x18;
                    var b2 = this[sn + 1] << 0x10;
                    var b3 = this[sn + 2] << 0x08;
                    var b4 = this[sn + 3] << 0x00;
                    return (b1 | b2 | b3 | b4) >>> 0;
                }
            ),
            readUInt32LE: generateMethodDescriptor$1(
                /**
                 * 
                 * @this {Buffer}
                 * @param {number} [offset] 
                 */
                function (
                    offset
                ) {
                    var sn = offset || 0;
                    var mn = this.length;
                    if (sn > mn - 4) {
                        throw new Error(message$1.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                    }
                    var b1 = this[sn + 0] << 0x00;
                    var b2 = this[sn + 1] << 0x08;
                    var b3 = this[sn + 2] << 0x10;
                    var b4 = this[sn + 3] << 0x18;
                    return (b1 | b2 | b3 | b4) >>> 0;
                }
            ),
            writeUInt8: generateMethodDescriptor$1(
                /**
                 * 
                 * @this {Buffer}
                 * @param {number} value 
                 * @param {number} [offset]
                 */
                function (
                    value,
                    offset
                ) {
                    var sn = offset || 0;
                    var mn = this.length;
                    if (sn > mn - 1) {
                        throw new Error(message$1.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                    }
                    this[sn] = value >> 0x00 & 0xFF;
                    return sn + 1;
                }
            ),
            writeUInt16BE: generateMethodDescriptor$1(
                /**
                 * 
                 * @this {Buffer}
                 * @param {number} value 
                 * @param {number} [offset]
                 */
                function (
                    value,
                    offset
                ) {
                    var sn = offset || 0;
                    var mn = this.length;
                    if (sn > mn - 2) {
                        throw new Error(message$1.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                    }
                    this[sn + 0] = value >> 0x08 & 0xFF;
                    this[sn + 1] = value >> 0x00 & 0xFF;
                    return sn + 2;
                }
            ),
            writeUInt16LE: generateMethodDescriptor$1(
                /**
                 * 
                 * @this {Buffer}
                 * @param {number} value 
                 * @param {number} [offset]
                 */
                function (
                    value,
                    offset
                ) {
                    var sn = offset || 0;
                    var mn = this.length;
                    if (sn > mn - 2) {
                        throw new Error(message$1.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                    }
                    this[sn + 0] = value >> 0x00 & 0xFF;
                    this[sn + 1] = value >> 0x08 & 0xFF;
                    return sn + 2;
                }
            ),
            writeUInt32BE: generateMethodDescriptor$1(
                /**
                 * 
                 * @this {Buffer}
                 * @param {number} value 
                 * @param {number} [offset]
                 */
                function (
                    value,
                    offset
                ) {
                    var sn = offset || 0;
                    var mn = this.length;
                    if (sn > mn - 4) {
                        throw new Error(message$1.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                    }
                    this[sn + 0] = value >> 0x18 & 0xFF;
                    this[sn + 1] = value >> 0x10 & 0xFF;
                    this[sn + 2] = value >> 0x08 & 0xFF;
                    this[sn + 3] = value >> 0x00 & 0xFF;
                    return sn + 4;
                }
            ),
            writeUInt32LE: generateMethodDescriptor$1(
                /**
                 * 
                 * @this {Buffer}
                 * @param {number} value 
                 * @param {number} [offset]
                 */
                function (
                    value,
                    offset
                ) {
                    var sn = offset || 0;
                    var mn = this.length;
                    if (sn > mn - 4) {
                        throw new Error(message$1.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                    }
                    this[sn + 0] = value >> 0x00 & 0xFF;
                    this[sn + 1] = value >> 0x08 & 0xFF;
                    this[sn + 2] = value >> 0x10 & 0xFF;
                    this[sn + 3] = value >> 0x18 & 0xFF;
                    return sn + 4;
                }
            ),
            toString: generateMethodDescriptor$1(
                /**
                 * 
                 * @this {ArrayLike<number>}
                 * @param {"hex" | "ascii" | "base64" | "latin1" | "utf8"} [encoding] 
                 */
                function (
                    encoding
                ) {
                    return decode$1(this, encoding);
                }
            ),
            toJSON: generateMethodDescriptor$1(
                /**
                 * 
                 * @this {ArrayLike<number>}
                 */
                function () {
                    return {
                        type: "Buffer",
                        data: flat$1(this),
                    };
                }
            ),
            valueOf: generateMethodDescriptor$1(
                /**
                 * 
                 * @this {ArrayLike<number>}
                 */
                function () {
                    return Reflect$1.getInternal(this);
                }
            ),
        }, Uint8Array$1, "Buffer"), {
            alloc: generateMethodDescriptor$1(
                /**
                 * 
                 * @param {number} length 
                 */
                function (
                    length
                ) {
                    return Reflect$1.initTyped(Reflect$1.construct(Buffer, new Uint8Array$1(length)));
                }
            ),
            from: generateMethodDescriptor$1(
                /**
                 * 
                 * @param {ArrayBufferLike | Uint8Array | ArrayLike<number> | string} sources 
                 * @param {any} [byteOffsetEncoding]
                 * @param {number} [length]
                 */
                function (
                    sources,
                    byteOffsetEncoding,
                    length
                ) {
                    var bytes;
                    if (isInstanceOf$1(sources, Uint8Array$1)) {
                        bytes = sources.slice(0);
                    } else if (isArrayBuffer$1(sources)) {
                        bytes = new Uint8Array$1(sources, Number(byteOffsetEncoding) || 0, length);
                    } else if (isString$1(sources)) {
                        bytes = new Uint8Array$1(encode$1(sources, byteOffsetEncoding));
                    } else {
                        bytes = new Uint8Array$1(sources);
                    }
                    return Reflect$1.initTyped(Reflect$1.construct(Buffer, bytes));
                }
            ),
            concat: generateMethodDescriptor$1(
                /**
                 * 
                 * @param {ReadonlyArray<Uint8Array>} sources 
                 */
                function (
                    sources
                ) {
                    var r = [];
                    for (var
                        i = 0,
                        l = sources.length;
                        i < l;
                        i++
                    ) {
                        var t = sources[i];
                        for (var
                            j = 0,
                            m = t.length;
                            j < m;
                            j++
                        ) {
                            r.push(t[j]);
                        }
                    }
                    return Buffer.from(r);
                }
            ),
            compare: generateMethodDescriptor$1(
                /**
                 * 
                 * @param {ArrayLike<number>} buf1 
                 * @param {ArrayLike<number>} buf2 
                 */
                function (
                    buf1,
                    buf2
                ) {
                    var m = buf1.length;
                    var n = buf2.length;
                    var t;
                    for (var
                        i = 0,
                        l = Math.min(m, n);
                        i < l;
                        i++
                    ) {
                        if (t = buf1[i] - buf2[i]) {
                            return t > 0 ? 1 : -1;
                        }
                    }
                    if (t = m - n) {
                        return t > 0 ? 1 : -1;
                    }
                    return 0;
                }
            ),
            isBuffer: generateMethodDescriptor$1(
                /**
                 * 
                 * @param {any} argc 
                 */
                function (
                    argc
                ) {
                    return isInstanceOf$1(argc, Buffer);
                }
            ),
        });
    }(globalThis$1.Buffer));

    var btoa$2 = skrinkSerializer$1(
        /**
         * 
         * Encodes a base-encoded string from the specified utf8 string.
         * 
         * @param {string} argc The utf8 string.
         * @param {boolean} [urlSafeEncoding] Indicates whether it is a URL-safe string.
         * @returns {string}
         */
        function (
            argc,
            urlSafeEncoding
        ) {
            return urlSafeEncoding ? encodeBase$1(bitConvert$1(Buffer$1.from(argc, definition$1.UTF8), 256, 62)) : Buffer$1.from(argc, definition$1.UTF8).toString(definition$1.BASE64);
        }
    );

    /**
     * 
     * @param {ReadonlyArray<number>} argc 
     * @returns {string}
     */
    function encodeBase$1(
        argc
    ) {
        var r = [];
        for (var
            i = 0,
            l = argc.length;
            i < l;
            i++
        ) {
            r.push(BTOA$1[argc[i]]);
        }
        return fromCharCode$1(r);
    }

    var TokenGenerator = (function () {
        return defineProperties$1(generateClass$1(Reflect$1.BASE, {
            generate: generateMethodDescriptor$1(
                /**
                 * 
                 * @this {Yarla.koa.TokenGenerator}
                 * @param {Yarla.koa.Context} context 
                 * @returns {Promise<string>}
                 */
                function (
                    context
                ) {
                    /** @type {string} */
                    var ARGCS = Reflect$1.getInternal(this).opts.secret;
                    var OAUTH = context.getRequestHeader(httpHeader$1.AUTHORIZATION);
                    var TOKEN = startsWith$1(OAUTH, "Bearer ") ? OAUTH.slice(7) : context.getRequestCookie("X-HTTP-ID");
                    if (!validate(TOKEN, ARGCS)) {
                        context.setResponseCookie("X-HTTP-ID", TOKEN = generate(salt$1(64), ARGCS), { httpOnly: true });
                    }
                    return Promise$2.resolve(TOKEN);
                }
            ),
        }, NOOP$1, "TokenGenerator"), {
            init: generateMethodDescriptor$1(
                /**
                 * 
                 * @this {Yarla.Proto<Yarla.koa.TokenGenerator>}
                 * @param {Yarla.koa.TokenGeneratorInitializationOptions} opts 
                 */
                function (
                    opts
                ) {
                    return Reflect$1.construct(this, {
                        opts: opts,
                    });
                }
            ),
        });
        /**
         * 
         * @param {string} argc 
         * @param {string} sect 
         * @returns {boolean}
         */
        function validate(
            argc,
            sect
        ) {
            var loc = argc.lastIndexOf(".");
            if (loc !== -1) {
                return compareTimingSafe(argc, generate(argc.slice(loc + 1), sect));
            }
            return false;
        }
        /**
         * 
         * @param {string} argc 
         * @param {string} sect 
         * @returns {string}
         */
        function generate(
            argc,
            sect
        ) {
            return btoa$2(crypto.createHash(definition$1.SHA256).update([sect.slice(8), argc, sect.slice(0, 8)].join("-")).digest(definition$1.HEX), true) + "." + argc;
        }
    }());

    var _createTokenGenerator = skrinkSerializer$1(
        /**
         * 
         * @param {Yarla.koa.TokenGeneratorInitializationOptions} [opts]
         */
        function (
            opts
        ) {
            return TokenGenerator.init(defaults$1({ secret: salt$1(128) }, opts));
        }
    );

    var url$1 = nodeRequire$1("url");

    var isNullOrEmptyString$1 = skrinkSerializer$1(
        /**
         * 
         * Determines if the input parameter is null or undefined or an empty string.
         * 
         * @param {any} argc Any object.
         * @returns {argc is null | undefined | ""}
         */
        function (
            argc
        ) {
            return isNullOrUndefined$1(argc) || argc === "";
        }
    );

    var glob = skrinkSerializer$1(
        /**
         * 
         * Create a regexp from the specified glob string.
         * 
         * @param {string} argc An glob string.
         * @returns {RegExp}
         */
        function (
            argc
        ) {
            var r = "";
            for (var
                i = 0,
                c = 0,
                p = "",
                n = "",
                g = false,
                l = argc.length;
                i < l;
                i++
            ) {
                var t = argc.charAt(i);
                switch (t) {
                    case "/":
                    case "$":
                    case "^":
                    case ".":
                    case "(":
                    case ")":
                    case "=":
                    case "!":
                    case "|":
                        r += "\\" + t;
                        break;
                    case "?":
                        r += ".";
                        break;
                    case "[":
                    case "]":
                        r += t;
                        break;
                    case "{":
                        g = true;
                        r += "(";
                        break;
                    case "}":
                        g = false;
                        r += ")";
                        break;
                    case ",":
                        if (g) {
                            r += "|";
                        } else {
                            r += "\\" + t;
                        }
                        break;
                    case "*":
                        c = 1;
                        p = argc.charAt(i - 1);
                        while (argc.charAt(i + 1) === "*") {
                            c++;
                            i++;
                        }
                        n = argc.charAt(i + 1);
                        if (c > 1
                            && (p === "/" || isNullOrEmptyString$1(p))
                            && (n === "/" || isNullOrEmptyString$1(n))) {
                            r += "((?:[^/]*(?:/|$))*)";
                            i++;
                        } else {
                            r += "([^/]*)";
                        }
                        break;
                    default:
                        r += t;
                        break;
                }
            }
            return new RegExp("^" + r + "$", "i");
        }
    );

    var VisitValidator = (function () {
        return defineProperties$1(generateClass$1(Reflect$1.BASE, {
            validate: generateMethodDescriptor$1(
                /**
                 * 
                 * @this {Yarla.koa.VisitValidator}
                 * @param {Yarla.koa.Context} context 
                 * @returns {Promise<boolean>}
                 */
                function (
                    context
                ) {
                    var ARGCM = context.method;
                    var ARGCX = context.getRequestHeader(httpHeader$1.X_REQUESTED_WITH);
                    var ARGCO = complete(context.origin || context.referer);
                    var ARGCH = complete(context.host);
                    /** @type {Yarla.SameSite | ReadonlyArray<string>} */
                    var ARGCS = Reflect$1.getInternal(this).opts.origin;
                    var ACCESS_CONTROL_ALLOW_HEADERS = [
                        httpHeader$1.ORIGIN,
                        httpHeader$1.REFERER,
                        httpHeader$1.AUTHORIZATION,
                        httpHeader$1.X_REQUESTED_WITH,
                    ].join(", ");
                    var ACCESS_CONTROL_ALLOW_METHODS = [
                        "GET",
                        "PUT",
                        "POST",
                        "HEAD",
                        "DELETE",
                        "OPTIONS",
                        "PATCH",
                    ].join(", ");
                    var R = ARGCM === "GET" || ARGCM === "HEAD";
                    if (!ARGCH) { return Promise$2.resolve(R); }
                    if (!ARGCO) { return Promise$2.resolve(R); }
                    if (ARGCM === "OPTIONS" || ARGCX === "XMLHttpRequest") {
                        var ALLOW = false;
                        if (ARGCS === "None") {
                            ALLOW = true;
                        }
                        if (ARGCS === "Lax") {
                            ALLOW = ARGCH.hostname === ARGCO.hostname;
                        }
                        if (isArray$1(ARGCS)) {
                            ALLOW = ARGCS.includes("*") || (
                                function (host) {
                                    return ARGCS.some(function (i) {
                                        return glob(String(i)).test(host);
                                    });
                                }(ARGCO.host)
                            );
                        }
                        if (ALLOW) {
                            context.setResponseHeader(httpHeader$1.ACCESS_CONTROL_MAX_AGE, "600");
                            context.setResponseHeader(httpHeader$1.ACCESS_CONTROL_ALLOW_CREDENTIALS, "true");
                            context.setResponseHeader(httpHeader$1.ACCESS_CONTROL_ALLOW_HEADERS, ACCESS_CONTROL_ALLOW_HEADERS);
                            context.setResponseHeader(httpHeader$1.ACCESS_CONTROL_ALLOW_METHODS, ACCESS_CONTROL_ALLOW_METHODS);
                            context.setResponseHeader(httpHeader$1.ACCESS_CONTROL_ALLOW_ORIGIN, ARGCO.protocol + "//" + ARGCO.host || "*");
                        }
                        return Promise$2.resolve(ALLOW || ARGCH.host === ARGCO.host);
                    }
                    return Promise$2.resolve(R);
                }
            ),
        }, NOOP$1, "VisitValidator"), {
            init: generateMethodDescriptor$1(
                /**
                 * 
                 * @this {Yarla.Proto<Yarla.koa.VisitValidator>}
                 * @param {Yarla.koa.VisitValidatorInitializationOptions} opts 
                 */
                function (
                    opts
                ) {
                    return Reflect$1.construct(this, {
                        opts: opts,
                    });
                }
            ),
        });
        /**
         * 
         * @param {string} host 
         * @returns {URL | null}
         */
        function complete(
            host
        ) {
            return host ? new url$1.URL(/^\w+:\/\//.test(host) ? host : "yarla:" + (startsWith$1(host, "//") ? "" : "//") + host) : null;
        }
    }());

    var _createVisitValidator = skrinkSerializer$1(
        /**
         * 
         * @param {Yarla.koa.VisitValidatorInitializationOptions} [opts] 
         */
        function (
            opts
        ) {
            return VisitValidator.init(defaults$1({ origin: "Strict" }, opts));
        }
    );

    var fs = nodeRequire$1("fs");

    var path = nodeRequire$1("path");

    var zlib = nodeRequire$1("zlib");

    var stream$1 = nodeRequire$1("stream");

    var process$1 = nodeRequire$1("process");

    var httpContent$1 = {
        /** @type {"application/octet-stream"} */
        OCTET_STREAM: "application/octet-stream",
        /** @type {"application/x-msdownload"} */
        X_MSDOWNLOAD: "application/x-msdownload",
        /** @type {"application/x-www-form-urlencoded"} */
        FORM: "application/x-www-form-urlencoded",
        /** @type {"application/json"} */
        JSON: "application/json",
        /** @type {"multipart/form-data"} */
        MULT: "multipart/form-data",
        /** @type {"text/plain"} */
        TEXT: "text/plain",
    };

    var encodeURIComponent$1 = globalThis$1.encodeURIComponent;

    /**
     * 
     * @param {string} pathname 
     * @param {boolean} [allowAboveRoot] 
     * @returns {ReadonlyArray<string>}
     */
    function separate$1 (
        pathname,
        allowAboveRoot
    ) {
        var up = 0;
        var parts = pathname.split(/[\\/]+/);
        for (var
            i = parts.length - 1;
            i >= 0;
            i--
        ) {
            var last = parts[i];
            if (last === "" ||
                last === ".") {
                parts.splice(i, 1);
            } else if (last === "..") {
                parts.splice(i, 1);
                up++;
            } else if (up) {
                parts.splice(i, 1);
                up--;
            }
        }
        if (allowAboveRoot) {
            while (up--) {
                parts.unshift("..");
            }
        }
        return parts;
    }

    /**
     * 
     * Compare strings ignoring case.
     * 
     * @param {string} arg1 One string.
     * @param {string} arg2 Two string.
     * @returns {boolean}
     */
    function compareIgnoreCase$1 (
        arg1,
        arg2
    ) {
        return arg1.length === arg2.length && arg1.toLowerCase() === arg2.toLowerCase();
    }

    var isSymbol$1 = skrinkSerializer$1(
        /**
         * 
         * Determines if the input parameter is a symbol.
         * 
         * @param {any} argc Any object.
         * @returns {argc is symbol}
         */
        function (
            argc
        ) {
            return typeof argc === "symbol" || className$1(argc) === "Symbol";
        }
    );

    var isIterable$1 = skrinkSerializer$1(
        /**
         * 
         * @param {any} argc 
         * @returns {argc is Iterable<any>}
         */
        function (
            argc
        ) {
            return isSymbol$1(Symbol$1.iterator) && isFunction$1(get$1(argc, [Symbol$1.iterator]));
        }
    );

    var entries$1 = skrinkSerializer$1(
        /**
         * 
         * Returns an array of key/value of the enumerable properties of an object.
         * 
         * @param {any} argc Object that contains the properties and methods.
         * @param {boolean} [inherit] Indicates whether to return the key/values of the inherited properties and methods.
         * @returns {ReadonlyArray<readonly [string, any]>}
         */
        function (
            argc,
            inherit
        ) {
            var r = [], n;
            if (isIterable$1(argc)) {
                for (var
                    i = 0,
                    // eslint-disable-next-line es/no-array-from
                    s = Array.from(argc),
                    l = s.length;
                    i < l;
                    i++
                ) {
                    n = s[i];
                    if (isArray$1(n)) {
                        r.push(n);
                    }
                }
            } else if (isObject$1(argc) && isFunction$1(argc.forEach)) {
                argc.forEach(function (v, k) {
                    r.push([k, v]);
                });
            } else {
                for (n in argc) {
                    if (inherit || hasOwnProperty$1(argc, n)) {
                        r.push([n, argc[n]]);
                    }
                }
            }
            // @ts-ignore
            return r;
        }
    );

    var values$1 = skrinkSerializer$1(
        /**
         * 
         * Returns an array of values of the enumerable properties of an object.
         * 
         * @param {any} argc Object that contains the properties and methods.
         * @param {boolean} [inherit] Indicates whether to return the values of the inherited properties and methods.
         * @returns {ReadonlyArray<any>}
         */
        function (
            argc,
            inherit
        ) {
            var r = [];
            for (var n in argc) {
                if (inherit || hasOwnProperty$1(argc, n)) {
                    r.push(argc[n]);
                }
            }
            return r;
        }
    );

    var KVPair$1 = generateClass$1(
        /**
         * 
         * @this {Yarla.KVPair}
         * @param {Readonly<Yarla.AnyObject<T>> | boolean} [source] 
         * @param {boolean} [ignoreCase] 
         * @template T
         */
        function (
            source,
            ignoreCase
        ) {
            Reflect$1.defineInternal(this, {}, "source");
            if (isObject$1(source)) {
                Reflect$1.defineInternal(this, !!ignoreCase, "ignoreCase");
                for (var
                    i = 0,
                    s = entries$1(source),
                    l = s.length;
                    i < l;
                    i++
                ) {
                    this.set(s[i][0], s[i][1]);
                }
            } else {
                Reflect$1.defineInternal(this, !!source, "ignoreCase");
            }
        },
        {
            clear: generateMethodDescriptor$1(
                /**
                 * 
                 * @this {Yarla.KVPair}
                 */
                function () {
                    Reflect$1.getInternal(this).source = {};
                }
            ),
            delete: generateMethodDescriptor$1(
                /**
                 * 
                 * @this {Yarla.KVPair}
                 * @param {string} key 
                 */
                function (
                    key
                ) {
                    /**
                     * @type {{ readonly ignoreCase: boolean; readonly source: Yarla.AnyObject; }}
                     */
                    var own = Reflect$1.getInternal(this);
                    if (hasOwnProperty$1(own.source, key)) {
                        return delete own.source[key];
                    }
                    if (own.ignoreCase) {
                        for (var name in own.source) {
                            if (compareIgnoreCase$1(name, key)) {
                                return delete own.source[name];
                            }
                        }
                    }
                    return false;
                }
            ),
            get: generateMethodDescriptor$1(
                /**
                 * 
                 * @this {Yarla.KVPair}
                 * @param {string} key 
                 */
                function (
                    key
                ) {
                    /**
                     * @type {{ readonly ignoreCase: boolean; readonly source: Yarla.AnyObject; }}
                     */
                    var own = Reflect$1.getInternal(this);
                    if (hasOwnProperty$1(own.source, key)) {
                        return own.source[key];
                    }
                    if (own.ignoreCase) {
                        for (var name in own.source) {
                            if (compareIgnoreCase$1(name, key)) {
                                return own.source[name];
                            }
                        }
                    }
                }
            ),
            set: generateMethodDescriptor$1(
                /**
                 * 
                 * @this {Yarla.KVPair}
                 * @param {string} key 
                 * @param {any} value 
                 */
                function (
                    key,
                    value
                ) {
                    /**
                     * @type {{ readonly ignoreCase: boolean; readonly source: Yarla.AnyObject; }}
                     */
                    var own = Reflect$1.getInternal(this);
                    if (hasOwnProperty$1(own.source, key)) {
                        return own.source[key] = value, this;
                    }
                    if (own.ignoreCase) {
                        for (var name in own.source) {
                            if (compareIgnoreCase$1(name, key)) {
                                return own.source[name] = value, this;
                            }
                        }
                    }
                    return own.source[key] = value, this;
                }
            ),
            has: generateMethodDescriptor$1(
                /**
                 * 
                 * @this {Yarla.KVPair}
                 * @param {string} key 
                 */
                function (
                    key
                ) {
                    /**
                     * @type {{ readonly ignoreCase: boolean; readonly source: Yarla.AnyObject; }}
                     */
                    var own = Reflect$1.getInternal(this);
                    if (hasOwnProperty$1(own.source, key)) {
                        return true;
                    }
                    if (own.ignoreCase) {
                        for (var name in own.source) {
                            if (compareIgnoreCase$1(name, key)) {
                                return true;
                            }
                        }
                    }
                    return false;
                }
            ),
            keys: generateMethodDescriptor$1(
                /**
                 * @this {Yarla.KVPair}
                 */
                function () {
                    return keys$1(Reflect$1.getInternal(this).source);
                }
            ),
            values: generateMethodDescriptor$1(
                /**
                 * @this {Yarla.KVPair}
                 */
                function () {
                    return values$1(Reflect$1.getInternal(this).source);
                }
            ),
            entries: generateMethodDescriptor$1(
                /**
                 * @this {Yarla.KVPair}
                 */
                function () {
                    return entries$1(Reflect$1.getInternal(this).source);
                }
            ),
            forEach: generateMethodDescriptor$1(
                /**
                 * @this {Yarla.KVPair}
                 * @param {(value: any, key: string) => void} callback 
                 * @param {any} thisArg 
                 */
                function (
                    callback,
                    thisArg
                ) {
                    /**
                     * @type {{ readonly ignoreCase: boolean; readonly source: Yarla.AnyObject; }}
                     */
                    var own = Reflect$1.getInternal(this);
                    for (var name in own.source) {
                        callback.call(thisArg || this, own.source[name], name);
                    }
                }
            ),
            toJSON: generateMethodDescriptor$1(
                /**
                 * @this {Yarla.KVPair}
                 */
                function () {
                    return Reflect$1.getInternal(this).source;
                }
            ),
        },
        NOOP$1,
        "KVPair"
    );

    var isNaN = skrinkSerializer$1(
        // eslint-disable-next-line es/no-number-isnan
        Number.isNaN || function (
            /**
             * @type {number}
             */
            argc
        ) {
            return isNumber$1(argc) && globalThis$1.isNaN(argc);
        }
    );

    var env$1 = {
        DEVELOPMENT: process$1 ? process$1.env.NODE_ENV === definition$1.DEVELOPMENT : false,
    };

    var Session = defineProperties$1(generateClass$1(Reflect$1.BASE, {
        id: generateGetterDescriptor$1(
            /**
             * 
             * @this {Yarla.koa.Session}
             * @returns {string}
             */
            function () {
                return Reflect$1.getInternal(this).id;
            },
            true
        ),
        get: generateMethodDescriptor$1(
            /**
             * 
             * @this {Yarla.koa.Session}
             * @param {string} key 
             * @returns {Promise<any>}
             */
            function (key) {
                return Reflect$1.getInternal(this).os.get(this.id, key);
            }
        ),
        set: generateMethodDescriptor$1(
            /**
             * 
             * @this {Yarla.koa.Session}
             * @param {string} key
             * @param {any} value 
             * @returns {Promise<any>}
             */
            function (key, value) {
                return Reflect$1.getInternal(this).os.set(this.id, key, value);
            }
        ),
    }, NOOP$1, "Session"), {
        init: generateMethodDescriptor$1(
            /**
             * 
             * @this {Yarla.Proto<Yarla.koa.Session>}
             * @param {string} id 
             * @param {Yarla.koa.SessionStorage} storage 
             */
            function (
                id,
                storage
            ) {
                return Reflect$1.construct(this, {
                    os: storage,
                    id: id,
                });
            }
        ),
    });

    var readline = nodeRequire$1("readline");

    var httpStatus$1 = {
        100: "Continue",
        101: "Switching Protocols",
        102: "Processing",
        103: "Early Hints",
        200: "OK",
        201: "Created",
        202: "Accepted",
        203: "Non-Authoritative Information",
        204: "No Content",
        205: "Reset Content",
        206: "Partial Content",
        207: "Multi-Status",
        208: "Already Reported",
        226: "IM Used",
        300: "Multiple Choices",
        301: "Moved Permanently",
        302: "Found",
        303: "See Other",
        304: "Not Modified",
        305: "Use Proxy",
        307: "Temporary Redirect",
        308: "Permanent Redirect",
        400: "Bad Request",
        401: "Unauthorized",
        402: "Payment Required",
        403: "Forbidden",
        404: "Not Found",
        405: "Method Not Allowed",
        406: "Not Acceptable",
        407: "Proxy Authentication Required",
        408: "Request Timeout",
        409: "Conflict",
        410: "Gone",
        411: "Length Required",
        412: "Precondition Failed",
        413: "Payload Too Large",
        414: "URI Too Long",
        415: "Unsupported Media Type",
        416: "Range Not Satisfiable",
        417: "Expectation Failed",
        418: "I'm a Teapot",
        421: "Misdirected Request",
        422: "Unprocessable Entity",
        423: "Locked",
        424: "Failed Dependency",
        425: "Too Early",
        426: "Upgrade Required",
        428: "Precondition Required",
        429: "Too Many Requests",
        431: "Request Header Fields Too Large",
        451: "Unavailable For Legal Reasons",
        500: "Internal Server Error",
        501: "Not Implemented",
        502: "Bad Gateway",
        503: "Service Unavailable",
        504: "Gateway Timeout",
        505: "HTTP Version Not Supported",
        506: "Variant Also Negotiates",
        507: "Insufficient Storage",
        508: "Loop Detected",
        509: "Bandwidth Limit Exceeded",
        510: "Not Extended",
        511: "Network Authentication Required",
    };

    var HttpError$1 = generateClass$1(
        /**
         * 
         * @this {any}
         * @param {number} status 
         * @param {string} [message] 
         */
        function (
            status,
            message
        ) {
            return defineProperties$1(Reflect$1.callSuper(this, message || httpStatus$1[status] || "Unknown"), {
                status: generateNormalDescriptor$1(status, true, true),
            });
        },
        {
            name: generateNormalDescriptor$1("HttpError", true, true),
        },
        Error,
        "HttpError"
    );

    var cookies = {
        parse: skrinkSerializer$1(
            /**
             * 
             * @param {string} argc 
             * @returns {any}
             */
            function (
                argc
            ) {
                var r = {};
                for (var
                    i = 0,
                    s = argc.split(/;\s*/),
                    l = s.length;
                    i < l;
                    i++
                ) {
                    var n = s[i];
                    var d = n.indexOf("=");
                    if (d === -1) {
                        continue;
                    }
                    var k = n.slice(0, d).trim();
                    var v = n.slice(d + 1).trim();
                    var j = v.length - 1;
                    if (v.charAt(0) === "\"" &&
                        v.charAt(j) === "\"") {
                        v = v.slice(1, -1);
                    }
                    r[
                        k
                    ] = v;
                }
                return r;
            }
        ),
        serialize: skrinkSerializer$1(
            /**
             * 
             * @param {string} name 
             * @param {string} value 
             * @param {Yarla.CookieSerializationOptions} [opts] 
             * @returns {string}
             */
            function (
                name,
                value,
                opts
            ) {
                return (function (
                    UA,
                    PROTOCOL,
                    PATH,
                    DOMAIN,
                    MAXAGE,
                    EXPIRES,
                    SAMESITE,
                    HTTPONLY,
                    SECURE
                ) {
                    var k = String(name);
                    var v = String(value);
                    if (SAMESITE === "None" && isString$1(UA)) {
                        if (
                            (
                                UA.indexOf("CPU iPhone OS 12") !== -1 ||
                                UA.indexOf("iPad; CPU OS 12") !== -1
                            ) || (
                                UA.indexOf("Macintosh; Intel Mac OS X 10_14") !== -1 &&
                                UA.indexOf("Version/") !== -1 &&
                                UA.indexOf("Safari") !== -1
                            ) || (
                                UA.indexOf("Chrome/5") !== -1 ||
                                UA.indexOf("Chrome/6") !== -1
                            )
                        ) {
                            SAMESITE = void 0;
                        }
                    }
                    if (SAMESITE === "None" && isString$1(PROTOCOL)) {
                        if (PROTOCOL === definition$1.HTTP) {
                            SAMESITE = void 0;
                        }
                    }
                    if (isString$1(PATH)) {
                        v += "; Path=" + PATH;
                    }
                    if (isString$1(DOMAIN)) {
                        v += "; Domain=" + DOMAIN;
                    }
                    if (isNumber$1(MAXAGE)) {
                        v += "; Max-Age=" + MAXAGE;
                    }
                    if (isDate$1(EXPIRES)) {
                        v += "; Expires=" + EXPIRES.toUTCString();
                    }
                    if (SAMESITE) {
                        v += "; SameSite=" + SAMESITE;
                    }
                    if (HTTPONLY) {
                        v += "; HttpOnly";
                    }
                    if (SAMESITE === "None" || SECURE) {
                        v += "; Secure";
                    }
                    return k + "=" + v;
                }(
                    opts && opts.UA,
                    opts && opts.protocol,
                    opts && opts.path,
                    opts && opts.domain,
                    opts && opts.maxAge,
                    opts && opts.expires,
                    opts && opts.sameSite,
                    opts && opts.httpOnly,
                    opts && opts.secure
                ));
            }
        ),
    };

    var decodeURIComponent$1 = globalThis$1.decodeURIComponent;

    var isBoolean$1 = skrinkSerializer$1(
        /**
         * 
         * Determines if the input parameter is a boolean.
         * 
         * @param {any} argc Any object.
         * @returns {argc is boolean}
         */
        function (
            argc
        ) {
            return typeof argc === "boolean" || isInstanceOf$1(argc, Boolean);
        }
    );

    var isBigInt$1 = skrinkSerializer$1(
        /**
         * 
         * Determines if the input parameter is a bigint.
         * 
         * @param {any} argc Any object.
         * @returns {argc is bigint}
         */
        function (
            argc
        ) {
            return typeof argc === "bigint" || className$1(argc) === "BigInt";
        }
    );

    var pattern$1 = {
        URL: /^[A-Za-z][A-Za-z0-9]*:\/\/[^\s]*$/,
        DATE: /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/,
        TIME: /^(?:[01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/,
        IPV4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
        IPV6: /^(?:(?:[0-9A-Fa-f]{1,4}:){7}(?:[0-9A-Fa-f]{1,4}|:)|(?:[0-9A-Fa-f]{1,4}:){6}(?:(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])|:[0-9A-Fa-f]{1,4}|:)|(?:[0-9A-Fa-f]{1,4}:){5}(?::(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])|(?::[0-9A-Fa-f]{1,4}){1,2}|:)|(?:[0-9A-Fa-f]{1,4}:){4}(?:(?::[0-9A-Fa-f]{1,4}){0,1}:(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])|(?::[0-9A-Fa-f]{1,4}){1,3}|:)|(?:[0-9A-Fa-f]{1,4}:){3}(?:(?::[0-9A-Fa-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])|(?::[0-9A-Fa-f]{1,4}){1,4}|:)|(?:[0-9A-Fa-f]{1,4}:){2}(?:(?::[0-9A-Fa-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])|(?::[0-9A-Fa-f]{1,4}){1,5}|:)|(?:[0-9A-Fa-f]{1,4}:){1}(?:(?::[0-9A-Fa-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])|(?::[0-9A-Fa-f]{1,4}){1,6}|:)|(?::(?:(?::[0-9A-Fa-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])|(?::[0-9A-Fa-f]{1,4}){1,7}|:)))(?:%[0-9A-Za-z]{1,20})?$/,
        BLANK: /^\s*$/,
        EMAIL: /^\w+(?:[-+.]\w+)*@\w+(?:[-.]\w+)*\.\w+(?:[-.]\w+)*$/,
        PHONE: /^1[3-9][0-9]{9}$/,
        DIGIT: /^[-]?(?:(?:0|[1-9][0-9]{0,9})(?:\.[0-9]*)?|\.[0-9]+)$/,
        ENGLISH: /^[A-Za-z]+$/,
        CHINESE: /^[\u4e00-\u9fa5]+$/,
        USERNAME: /^[A-Za-z][\w]*$/,
        PASSWORD: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
        DATETIME: /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)T(?:[01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]\.[0-9]{3}Z$/,
    };

    var queries$1 = {
        parse: skrinkSerializer$1(
            /**
             * 
             * @param {string} argc 
             * @returns {any}
             */
            function (
                argc
            ) {
                var r;
                for (var
                    i = 0,
                    s = argc.replace(/^[#?]+/, "").split("&"),
                    l = s.length;
                    i < l;
                    i++
                ) {
                    var n = s[i];
                    var d = n.indexOf("=");
                    if (d === -1) {
                        continue;
                    }
                    var k = divideExpression$1(decodeURIComponent$1(n.slice(0, d)));
                    /** @type {any} */
                    var v = decodeURIComponent$1(n.slice(d + 1));
                    if (isNullOrUndefined$1(r)) {
                        r = isNumber$1(k[0]) ? [] : {};
                    }
                    if (v === "null") {
                        v = null;
                    } else if (v === "true") {
                        v = true;
                    } else if (v === "false") {
                        v = false;
                    } else if (pattern$1.DIGIT.test(v)) {
                        v = Number(v);
                    } else if (pattern$1.DATETIME.test(v)) {
                        v = new Date(v);
                    }
                    set$1(r, k, v);
                }
                return r || {};
            }
        ),
        serialize: skrinkSerializer$1(
            /**
             * 
             * @param {any} argc 
             * @returns {string}
             */
            function serialize(
                argc
            ) {
                return (function serialize(prefix, argc) {
                    var r = [], k, n;
                    var a = isArray$1(argc);
                    if (a || isObject$1(argc)) {
                        for (var p in argc) {
                            if (a) {
                                k = prefix + "[" + p + "]";
                            } else if (prefix.length === 0 || prefix.slice(-1) === "]") {
                                k = prefix + p;
                            } else {
                                k = prefix + "." + p;
                            }
                            n = argc[p];
                            if (isUndefined$1(n)) {
                                continue;
                            }
                            if (isNull$1(n)) {
                                r.push(encodeURIComponent$1(k) + "=" + "null");
                            } else if (isDate$1(n)) {
                                r.push(encodeURIComponent$1(k) + "=" + encodeURIComponent$1(n.toJSON()));
                            } else if (isNumber$1(n) || isString$1(n) || isBoolean$1(n) || isBigInt$1(n) || isSymbol$1(n)) {
                                r.push(encodeURIComponent$1(k) + "=" + encodeURIComponent$1(n.toString()));
                            } else if (isObject$1(n)) {
                                r = r.concat(serialize(k, n));
                            }
                        }
                    }
                    return r;
                }("", argc)).join("&");
            }
        ),
    };

    var ReadableStream$1 = (function (ReadableStream) {
        return defineProperties$1(ReadableStream, {
            from: generateMethodDescriptor$1(
                /**
                 * 
                 * @param {import("stream").Readable} nodeStream 
                 * @param {"bytes"} [type]
                 */
                function (
                    nodeStream,
                    type
                ) {
                    return new ReadableStream({
                        // @ts-ignore
                        type: type,
                        cancel: function (reason) {
                            nodeStream.destroy(reason);
                        },
                        start: function (controller) {
                            nodeStream.on("close", function () {
                                if (!nodeStream.readableEnded) {
                                    controller.error(new Error(message$1.STREAM_CLOSED_BEFORE_ENDING));
                                }
                            });
                            nodeStream.on("error", function (reason) {
                                controller.error(reason);
                            });
                            nodeStream.on("data", function (chunk) {
                                controller.enqueue(chunk);
                                nodeStream.pause();
                            });
                            nodeStream.on("end", function () {
                                controller.close();
                            });
                        },
                        pull: function () {
                            nodeStream.resume();
                        },
                    });
                }
            ),
        });
    }(globalThis$1.ReadableStream || generateClass$1(function () {
        throw new Error(message$1.NOT_SUPPORTED);
    }, {
        locked: generateGetterDescriptor$1(
            function () {
                throw new Error(message$1.NOT_SUPPORTED);
            }
        ),
        cancel: generateMethodDescriptor$1(
            function () {
                throw new Error(message$1.NOT_SUPPORTED);
            }
        ),
        getReader: generateMethodDescriptor$1(
            function () {
                throw new Error(message$1.NOT_SUPPORTED);
            }
        ),
        pipeThrough: generateMethodDescriptor$1(
            function () {
                throw new Error(message$1.NOT_SUPPORTED);
            }
        ),
        pipeTo: generateMethodDescriptor$1(
            function () {
                throw new Error(message$1.NOT_SUPPORTED);
            }
        ),
        tee: generateMethodDescriptor$1(
            function () {
                throw new Error(message$1.NOT_SUPPORTED);
            }
        ),
    }, NOOP$1, "ReadableStream")));

    var isReadable$1 = skrinkSerializer$1(
        /**
         * 
         * Determines if the input parameter is a stream.Readable.
         * 
         * @param {any} argc Any object.
         * @returns {argc is Headers}
         */
        function (
            argc
        ) {
            return stream$1 ? isInstanceOf$1(argc, stream$1.Readable) : false;
        }
    );

    var read$1 = skrinkSerializer$1(
        /**
         * 
         * @param {import("stream").Readable | ReadableStream} readable 
         * @param {number} [maximum] 
         */
        function (
            readable,
            maximum
        ) {
            var l = Math.pow(2, 30) * 4 - 1;
            var m = Math.min(maximum || l, l);
            return new Promise$2(function (resolve, reject) {
                function large() {
                    return b.reduce(function (v, i) { return v + i.length; }, 0) > m;
                }
                /** @type {Array<Uint8Array>} */
                var b = [];
                var s = isReadable$1(readable) ? ReadableStream$1.from(readable) : readable;
                var r = s.getReader();
                r.closed.then(function () {
                    if (large()) {
                        throw new HttpError$1(413);
                    }
                    return Buffer$1.concat(b);
                }).then(resolve, reject);
                r.read().then(function process(v) {
                    if (v.done) {
                        return;
                    }
                    b.push(v.value);
                    if (large()) {
                        return r.cancel();
                    }
                    return r.read().then(process);
                }).catch(reject);
            });
        }
    );

    var Context = (function () {
        return defineProperties$1(generateClass$1(Reflect$1.BASE, {
            IE: generateGetterDescriptor$1(
                /**
                 * 
                 * @this {Yarla.koa.Context}
                 * @returns {boolean} 
                 */
                function () {
                    return Reflect$1.once(this, Reflect$1.expr.IE, function () {
                        return /\b(?:Trident|MSIE|Edge)\b/i.test(this.UA);
                    });
                }
            ),
            IP: generateGetterDescriptor$1(
                /**
                 * 
                 * @this {Yarla.koa.Context}
                 * @returns {string} 
                 */
                function () {
                    return Reflect$1.once(this, Reflect$1.expr.IP, function () {
                        /** @type {string} */
                        var http;
                        http = this.getRequestHeader(httpHeader$1.X_REAL_IP)
                            || this.getRequestHeader(httpHeader$1.X_FORWARDED_FOR)
                            || Reflect$1.getInternal(this).request.socket.remoteAddress
                            || "";
                        var loc = http.indexOf(",");
                        if (loc !== -1) {
                            http = http.slice(0, loc);
                        }
                        return http;
                    });
                }
            ),
            UA: generateGetterDescriptor$1(
                /**
                 * 
                 * @this {Yarla.koa.Context} 
                 * @returns {string} 
                 */
                function () {
                    return Reflect$1.once(this, Reflect$1.expr.UA, function () {
                        return this.getRequestHeader(httpHeader$1.USER_AGENT);
                    });
                }
            ),
            host: generateGetterDescriptor$1(
                /**
                 * 
                 * @this {Yarla.koa.Context} 
                 * @returns {string} 
                 */
                function () {
                    return Reflect$1.once(this, Reflect$1.expr.HOST, function () {
                        /** @type {string} */
                        var http;
                        http = this.getRequestHeader(httpHeader$1.X_REAL_HOST)
                            || this.getRequestHeader(httpHeader$1.X_FORWARDED_HOST)
                            || this.getRequestHeader(httpHeader$1.HOST);
                        var loc = http.indexOf(",");
                        if (loc !== -1) {
                            http = http.slice(0, loc);
                        }
                        return http;
                    });
                }
            ),
            search: generateGetterDescriptor$1(
                /**
                 * 
                 * @this {Yarla.koa.Context} 
                 * @returns {any} 
                 */
                function () {
                    return Reflect$1.once(this, Reflect$1.expr.SEARCH, function () {
                        /** @type {import("http").IncomingMessage} */
                        var req = Reflect$1.getInternal(this).request;
                        var res = req.url || "/";
                        var loc = res.indexOf("?");
                        if (loc !== -1) {
                            res = res.slice(loc);
                        } else {
                            res = "";
                        }
                        return queries$1.parse(res);
                    });
                }
            ),
            method: generateGetterDescriptor$1(
                /**
                 * 
                 * @this {Yarla.koa.Context} 
                 * @returns {string} 
                 */
                function () {
                    return Reflect$1.once(this, Reflect$1.expr.METHOD, function () {
                        /** @type {import("http").IncomingMessage} */
                        var req = Reflect$1.getInternal(this).request;
                        var res = req.method || "GET";
                        return res.toUpperCase();
                    });
                }
            ),
            length: generateGetterDescriptor$1(
                /**
                 * 
                 * @this {Yarla.koa.Context} 
                 * @returns {number} 
                 */
                function () {
                    return Reflect$1.once(this, Reflect$1.expr.LENGTH, function () {
                        return parseInt(this.getRequestHeader(httpHeader$1.CONTENT_LENGTH));
                    });
                }
            ),
            origin: generateGetterDescriptor$1(
                /**
                 * 
                 * @this {Yarla.koa.Context} 
                 * @returns {string} 
                 */
                function () {
                    return Reflect$1.once(this, Reflect$1.expr.ORIGIN, function () {
                        return this.getRequestHeader(httpHeader$1.ORIGIN);
                    });
                }
            ),
            referer: generateGetterDescriptor$1(
                /**
                 * 
                 * @this {Yarla.koa.Context} 
                 * @returns {string} 
                 */
                function () {
                    return Reflect$1.once(this, Reflect$1.expr.REFERER, function () {
                        return this.getRequestHeader(httpHeader$1.REFERER);
                    });
                }
            ),
            version: generateGetterDescriptor$1(
                /**
                 * 
                 * @this {Yarla.koa.Context} 
                 * @returns {string} 
                 */
                function () {
                    return Reflect$1.once(this, Reflect$1.expr.VERSION, function () {
                        /** @type {import("http").IncomingMessage} */
                        var req = Reflect$1.getInternal(this).request;
                        var res = req.httpVersion;
                        return res;
                    });
                }
            ),
            protocol: generateGetterDescriptor$1(
                /**
                 * 
                 * @this {Yarla.koa.Context} 
                 * @returns {string} 
                 */
                function () {
                    return Reflect$1.once(this, Reflect$1.expr.PROTOCOL, function () {
                        /** @type {string} */
                        var http;
                        http = this.getRequestHeader(httpHeader$1.X_REAL_PROTO)
                            || this.getRequestHeader(httpHeader$1.X_FORWARDED_PROTO)
                            || (Reflect$1.getInternal(this).request.socket.encrypted ? definition$1.HTTPS : definition$1.HTTP);
                        var loc = http.indexOf(",");
                        if (loc !== -1) {
                            http = http.slice(0, loc);
                        }
                        if (http.toLowerCase().includes("https")) {
                            return definition$1.HTTPS;
                        }
                        return definition$1.HTTP;
                    });
                }
            ),
            pathname: generateGetterDescriptor$1(
                /**
                 * 
                 * @this {Yarla.koa.Context} 
                 * @returns {string} 
                 */
                function () {
                    return Reflect$1.once(this, Reflect$1.expr.PATHNAME, function () {
                        /** @type {import("http").IncomingMessage} */
                        var req = Reflect$1.getInternal(this).request;
                        var res = req.url || "/";
                        var loc = res.indexOf("?");
                        if (loc !== -1) {
                            res = res.slice(0, loc);
                        }
                        return "/" + separate$1(res).join("/");
                    });
                }
            ),
            mimetype: generateGetterDescriptor$1(
                /**
                 * 
                 * @this {Yarla.koa.Context} 
                 * @returns {string} 
                 */
                function () {
                    return Reflect$1.once(this, Reflect$1.expr.MIMETYPE, function () {
                        return solveSemicolon(this.getRequestHeader(httpHeader$1.CONTENT_TYPE));
                    });
                }
            ),
            boundary: generateGetterDescriptor$1(
                /**
                 * 
                 * @this {Yarla.koa.Context} 
                 * @returns {string} 
                 */
                function () {
                    return Reflect$1.once(this, Reflect$1.expr.BOUNDARY, function () {
                        return solveDelimiter(this.getRequestHeader(httpHeader$1.CONTENT_TYPE));
                    });
                }
            ),
            encoding: generateGetterDescriptor$1(
                /**
                 * 
                 * @this {Yarla.koa.Context} 
                 * @returns {ReadonlyArray<string>} 
                 */
                function () {
                    return Reflect$1.once(this, Reflect$1.expr.ENCODING, function () {
                        return this.getRequestHeader(httpHeader$1.ACCEPT_ENCODING).split(",").map(solveSemicolon);
                    });
                }
            ),
            language: generateGetterDescriptor$1(
                /**
                 * 
                 * @this {Yarla.koa.Context} 
                 * @returns {ReadonlyArray<string>} 
                 */
                function () {
                    return Reflect$1.once(this, Reflect$1.expr.LANGUAGE, function () {
                        return this.getRequestHeader(httpHeader$1.ACCEPT_LANGUAGE).split(",").map(solveSemicolon);
                    });
                }
            ),
            range: generateGetterDescriptor$1(
                /**
                 * 
                 * @this {Yarla.koa.Context} 
                 * @returns {ReadonlyArray<number>} 
                 */
                function () {
                    return Reflect$1.once(this, Reflect$1.expr.RANGE, function () {
                        return this.getRequestHeader(httpHeader$1.RANGE).split(/bytes=([0-9]*)-([0-9]*)/i).slice(1, 3).map(function (i) { return parseInt(i); });
                    });
                }
            ),
            getRequestCookie: generateMethodDescriptor$1(
                /**
                 * 
                 * @this {Yarla.koa.Context} 
                 * @param {string} name 
                 */
                function (
                    name
                ) {
                    return String(Reflect$1.once(this, Reflect$1.expr.COOKIES, function () {
                        return new KVPair$1(cookies.parse(this.getRequestHeader(httpHeader$1.COOKIE)), true);
                    }).get(name) || "");
                }
            ),
            getRequestHeader: generateMethodDescriptor$1(
                /**
                 * 
                 * @this {Yarla.koa.Context} 
                 * @param {string} name 
                 */
                function (
                    name
                ) {
                    return String(Reflect$1.once(this, Reflect$1.expr.HEADERS, function () {
                        return new KVPair$1(Reflect$1.getInternal(this).request.headers, true);
                    }).get(name) || "");
                }
            ),
            setResponseCookie: generateMethodDescriptor$1(
                /**
                 * 
                 * @this {Yarla.koa.Context} 
                 * @param {string} name 
                 * @param {string} value 
                 * @param {Yarla.CookieSerializationOptions} [opts] 
                 */
                function (
                    name,
                    value,
                    opts
                ) {
                    Reflect$1.getInternal(this).cookies.set(name, cookies.serialize(name, value, defaults$1({ path: "/", UA: this.UA, protocol: this.protocol, sameSite: Reflect$1.getInternal(this).opts.accessCookieAllowOrigin || "Lax" }, opts)));
                }
            ),
            setResponseHeader: generateMethodDescriptor$1(
                /**
                 * 
                 * @this {Yarla.koa.Context} 
                 * @param {string} name 
                 * @param {string | ReadonlyArray<string>} value 
                 */
                function (
                    name,
                    value
                ) {
                    Reflect$1.getInternal(this).headers.set(name, value);
                }
            ),
            deleteResponseCookie: generateMethodDescriptor$1(
                /**
                 * 
                 * @this {Yarla.koa.Context} 
                 * @param {string} name 
                 */
                function (
                    name
                ) {
                    return Reflect$1.getInternal(this).cookies.delete(name);
                }
            ),
            deleteResponseHeader: generateMethodDescriptor$1(
                /**
                 * 
                 * @this {Yarla.koa.Context} 
                 * @param {string} name 
                 */
                function (
                    name
                ) {
                    return Reflect$1.getInternal(this).headers.delete(name);
                }
            ),
            stream: generateMethodDescriptor$1(
                /**
                 * 
                 * @this {Yarla.koa.Context} 
                 * @returns {NodeJS.ReadableStream}
                 */
                function () {
                    return Reflect$1.getInternal(this).request;
                }
            ),
            readline: generateMethodDescriptor$1(
                /**
                 * 
                 * @this {Yarla.koa.Context}
                 * @returns {AsyncIterable<string>}
                 */
                function () {
                    return readline.createInterface({ input: Reflect$1.getInternal(this).request, crlfDelay: Infinity });
                }
            ),
            read: generateMethodDescriptor$1(
                /**
                 * 
                 * @this {Yarla.koa.Context}
                 * @param {boolean} [original]
                 * @returns {Promise<any>}
                 */
                function (original) {
                    var length = this.length;
                    var boundary = this.boundary;
                    var mimetype = this.mimetype;
                    return Reflect$1.once(this, Reflect$1.expr.BODY, function () {
                        return (
                            /**
                             * 
                             * @param {object} context 
                             * @param {object} context.opts
                             * @param {number} context.opts.maxRequestContentLength
                             * @param {import("http").IncomingMessage} context.request
                             * @returns {Promise<Buffer>}
                             */
                            function (context) {
                                var maximum = context.opts.maxRequestContentLength;
                                if (maximum < length) {
                                    return Promise$2.reject(new HttpError$1(413));
                                }
                                return read$1(context.request, maximum);
                            }(Reflect$1.getInternal(this))
                        );
                    }).then(function (res) {
                        if (original) {
                            return res;
                        }
                        if (mimetype === httpContent$1.FORM) {
                            return queries$1.parse(res.toString(definition$1.UTF8).trim());
                        }
                        if (mimetype === httpContent$1.JSON) {
                            return JSON.parse(res.toString(definition$1.UTF8).trim() || "{}");
                        }
                        if (mimetype !== httpContent$1.MULT) {
                            throw new HttpError$1(415);
                        }
                        if (!boundary) {
                            throw new HttpError$1(400);
                        }
                        var sep = Buffer$1.from("--" + boundary, definition$1.UTF8);
                        var end = Buffer$1.from("\r\n\r\n", definition$1.UTF8);
                        var ln1 = res.length;
                        var ln2 = sep.length;
                        if (ln1 <= ln2 + 4) {
                            throw new HttpError$1(400);
                        }
                        var i = 0;
                        var j = 0;
                        var k = res.indexOf(sep);
                        if (k === -1) {
                            throw new HttpError$1(400);
                        }
                        var r = {};
                        while (true) {
                            i = k + ln2 + 2;
                            j = res.indexOf(end, i);
                            if (j === -1) { break; }
                            k = res.indexOf(sep, j + 4);
                            if (k === -1) { break; }
                            var m = solveMultipart(res.subarray(i, j).toString(definition$1.UTF8));
                            var n = m.formname;
                            var f = m.filename;
                            var e = m.encoding;
                            if (n) {
                                var d = res.subarray(j + 4, k - 2);
                                if (e === definition$1.BASE64) {
                                    d = Buffer$1.from(d.toString(definition$1.ASCII), definition$1.BASE64);
                                }
                                if (f) {
                                    r[n] = {
                                        buffer: d,
                                        filename: f ? path.basename(f) : f,
                                        encoding: e,
                                    };
                                } else {
                                    r[n] = d.toString(definition$1.UTF8);
                                }
                            }
                        }
                        return r;
                    });
                }
            ),
        }, NOOP$1, "Context"), {
            init: generateMethodDescriptor$1(
                /**
                 * 
                 * @this {Yarla.Proto<Yarla.koa.Context>}
                 * @param {import("http").IncomingMessage} request 
                 * @param {object} opts 
                 * @param {Yarla.SameSite} [opts.accessCookieAllowOrigin] 
                 * @param {number} [opts.maxRequestContentLength] 
                 */
                function (
                    request,
                    opts
                ) {
                    return Reflect$1.construct(this, {
                        cookies: new KVPair$1(true),
                        headers: new KVPair$1(true),
                        request: request,
                        opts: opts,
                    });
                }
            ),
        });
        /**
         * 
         * @param {string} argc 
         */
        function solveDelimiter(
            argc
        ) {
            return argc ? (function (argc) { return argc ? argc[1] || argc[2] || argc[3] : ""; }(argc.match(/;\s*boundary\s*=\s*(?:"([^"]+)"|'([^']+)'|([^\s;]+))/i))) : "";
        }
        /**
         * 
         * @param {string} argc 
         */
        function solveSemicolon(
            argc
        ) {
            return argc ? (function (argc) { return argc ? argc[1] : ""; }(argc.match(/^\s*([^\s;]+)/))) : "";
        }
        /**
         * 
         * @param {string} argc 
         */
        function solveMultipart(
            argc
        ) {
            var r = {
                /** @type {string | undefined} */
                formname: void 0,
                /** @type {string | undefined} */
                filename: void 0,
                /** @type {string | undefined} */
                encoding: void 0,
            };
            var p = argc.split("\r\n");
            for (var
                i = 0,
                l = p.length;
                i < l;
                i++
            ) {
                var n = p[i];
                var c = n.indexOf(":");
                if (c === -1) { continue; }
                var k = n.slice(0, c).trim().toLowerCase();
                var v = n.slice(c + 1).trim();
                if (k === "content-disposition") {
                    var x = v.match(/\bname\s*=\s*(?:"([^"]+)"|'([^']+)'|([^\s;]+))/i);
                    var y = v.match(/\bfilename\s*=\s*(?:"([^"]+)"|'([^']+)'|([^\s;]+))/i);
                    r.formname = x ? x[1] || x[2] || x[3] : void 0;
                    r.filename = y ? y[1] || y[2] || y[3] : void 0;
                    continue;
                }
                if (k === "content-transfer-encoding") {
                    r.encoding = v.toLowerCase();
                    continue;
                }
            }
            return r;
        }
    }());

    var module = nodeRequire$1("module");

    var HTTP_ASSEMBLY = env$1.DEVELOPMENT ? [
        {
            dist: "node_modules",
            /**
             * 
             * @param {string} pathname 
             */
            ignore: function (
                pathname
            ) {
                return pathname.slice(14).startsWith("node:") || module.builtinModules.includes(pathname.slice(14));
            },
            /**
             * 
             * @param {string} pathname
             * @param {Yarla.koa.Context} context 
             */
            static: function (
                pathname,
                context
            ) {
                return context.getRequestHeader(httpHeader$1.X_REQUESTED_WITH) !== "XMLHttpRequest";
            },
        },
        {
            dist: "src"
        },
    ] : [];

    var acornCore = nodeRequire$1("acorn");

    var acornWalk = nodeRequire$1("acorn-walk");

    var typescript = nodeRequire$1("typescript");

    /**
     * Fix offset lines of sourcemap when compiling javascript dynamically.
     * 
     * @param {string} content The javascript content.
     * @param {number} offsetLines Offset lines of sourcemap.
     * @returns {string}
     */
    function inlineSourceMap$1 (
        content,
        offsetLines
    ) {
        var r = [];
        var k = "";
        var g = /(\/\/[@#]\s+sourceMappingURL[^,]*,)([^\n]*)/i;
        var c = content;
        for (var
            i = 0;
            i < offsetLines;
            i++
        ) {
            k += ";";
        }
        for (var
            h;
            h = c.match(g);
            c = c.slice((h.index || 0) + h[0].length)
        ) {
            var t = h[2];
            try {
                var n = JSON.parse(decodeUTF8$1(encodeBASE64$1(t)));
                var m = n.mappings;
                if (m) {
                    n.mappings = k + m;
                }
                t = decodeBASE64$1(encodeUTF8$1(JSON.stringify(n)));
            } catch (_) {
                // DO NOTHING
            }
            r.push(c.slice(0, h.index), h[1], t);
        }
        return r.push(c), r.join("");
    }

    var clone = skrinkSerializer$1(
        /**
         * 
         * Clone the specified object.
         * 
         * @param {T} argc An object.
         * @param {boolean} [deep] Indicates whether to deep clone the object.
         * @param {boolean} [onlyValid] Indicates whether to clone only the valid properties of the object.
         * @returns {T}
         * @template T
         */
        function (
            argc,
            deep,
            onlyValid
        ) {
            return merge$1(isArray$1(argc) ? [] : {}, argc, deep, onlyValid);
        }
    );

    var omit = skrinkSerializer$1(
        /**
         * 
         * Returns a new object excluding the specified properties.
         * 
         * @param {any} argc An object.
         * @returns {any}
         */
        function (
            argc
        ) {
            var r = {};
            var p = flat$1(arguments, 1, Infinity);
            for (var n in argc) {
                if (p.indexOf(n) === -1) {
                    r[n] = argc[n];
                }
            }
            return r;
        }
    );

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
    function HTTP_COMPILER (
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
                compilerOptions = merge$1(compilerOptions, omit(
                    typescript.convertCompilerOptionsFromJson(
                        JSON.parse(
                            fs.readFileSync(tsconfigResolve, definition$1.UTF8)
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
            if (isString$1(name) && name.length > 0) {
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
            if (isArray$1(node)) {
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
                if (isString$1(node)) {
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
                    inScope(flat$1([node.params, node.id], 0, 1, true), function () {
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
        return "define(" + JSON.stringify(["require", "exports", "module"].concat(cjs ? dependencies : [])) + ",function(require,exports,module){\n" + inlineSourceMap$1(content, 1) + "\n});";
    }

    var HTTP_MIMETYPE = {
        js: "text/javascript; charset=utf-8",
        cjs: "text/javascript; charset=utf-8",
        mjs: "text/javascript; charset=utf-8",
        ts: "text/typescript; charset=utf-8",
        tsx: "text/typescript; charset=utf-8",
        jsx: "text/typescript; charset=utf-8",
        md: "text/markdown; charset=utf-8",
        txt: "text/plain; charset=utf-8",
        map: "text/plain; charset=utf-8",
        css: "text/css; charset=utf-8",
        xml: "text/xml; charset=utf-8",
        html: "text/html; charset=utf-8",
        json: "application/json; charset=utf-8",
        svg: "image/svg+xml; charset=utf-8",
        bmp: "image/bmp",
        gif: "image/gif",
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        ico: "image/x-icon",
        png: "image/png",
        mp3: "audio/mpeg",
        mp4: "video/mp4",
        oga: "audio/ogg",
        ogv: "video/ogg",
        wav: "audio/x-wav",
        webp: "image/webp",
        webm: "video/webm",
        ogg: "application/ogg",
        pdf: "application/pdf",
        ttf: "application/x-font-ttf",
        woff: "application/x-font-woff",
        zip: "application/x-zip-compressed",
        rar: "application/x-rar-compressed",
        doc: "application/vnd.ms-word",
        xls: "application/vnd.ms-excel",
        wps: "application/vnd.ms-works",
        msg: "application/vnd.ms-outlook",
        ppt: "application/vnd.ms-powerpoint",
        exe: "application/vnd.microsoft.portable-executable",
        dll: "application/vnd.microsoft.portable-executable",
        docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        wasm: "application/wasm",
    };

    var HTTP_COMPRESS = [
        HTTP_MIMETYPE.js,
        HTTP_MIMETYPE.ts,
        HTTP_MIMETYPE.md,
        HTTP_MIMETYPE.txt,
        HTTP_MIMETYPE.css,
        HTTP_MIMETYPE.xml,
        HTTP_MIMETYPE.html,
        HTTP_MIMETYPE.json,
        HTTP_MIMETYPE.svg,
    ];

    var console = globalThis$1.console || {
        error: function () {},
        warn: function () {},
        info: function () {},
        log: function () {},
    };

    /**
     * 
     * @param {Error | null} error 
     * @param {object} detail 
     * @param {string} detail.url 
     * @param {string} detail.method 
     * @param {number} detail.status 
     */
    function HTTP_DEBUGGER (
        error,
        detail
    ) {
        var d = new Date();
        var h = d.getHours();
        var m = d.getMinutes();
        var s = d.getSeconds();
        var t = [
            h > 9 ? h : "0" + h,
            m > 9 ? m : "0" + m,
            s > 9 ? s : "0" + s,
        ].join(":");
        if (env$1.DEVELOPMENT) {
            console.log("\x1B[3" + (detail.status >= 500 ? "1" : detail.status >= 400 ? "3" : detail.status >= 300 ? "6" : "4") + "m[" + t + "] " + detail.status + " " + detail.method.padEnd(6, " ") + " " + detail.url + "\x1B[39m");
        }
        if (error) {
            console.log("[" + t + "] " + (error.stack || error.message));
        }
    }

    var HTTP_EXTNAMES = [
        "js", "cjs", "mjs",
        "ts", "tsx", "jsx",
    ];

    var HTTP_RESOURCE = env$1.DEVELOPMENT ? [
        "assets",
        "locale",
        "public",
        "static",
    ] : [];

    var _statSync = skrinkSerializer$1(
        /**
         * 
         * @param {string} filename 
         */
        function (
            filename
        ) {
            return fs.statSync(filename);
        }
    );

    var _readFileSync = skrinkSerializer$1(
        /**
         * 
         * @param {string} filename 
         * @param {number} [maximum] 
         */
        function (
            filename,
            maximum
        ) {
            var l = Math.pow(2, 30) * 4 - 1;
            var m = Math.min(maximum || l, l);
            if (_statSync(filename).size > m) {
                throw new HttpError$1(413);
            }
            return fs.readFileSync(filename);
        }
    );

    var _statInfo = skrinkSerializer$1(
        /**
         * 
         * @param {string} filename 
         */
        function (
            filename
        ) {
            var s = _statSync(filename);
            return {
                path: filename,
                name: path.basename(filename),
                hash: crypto.createHash(definition$1.MD5).update([filename, s.mtime.toJSON(), s.size].join("-")).digest(definition$1.HEX),
                atime: s.atime,
                ctime: s.ctime,
                mtime: s.mtime,
                size: s.size,
            };
        }
    );

    var _exists = skrinkSerializer$1(
        /**
         * 
         * @param {string} filename 
         */
        function (
            filename
        ) {
            return fs.existsSync(filename);
        }
    );

    var _isFile = skrinkSerializer$1(
        /**
         * 
         * @param {string} filename 
         */
        function (
            filename
        ) {
            return _exists(filename) && _statSync(filename).isFile();
        }
    );

    var _isDirectory = skrinkSerializer$1(
        /**
         * 
         * @param {string} filename 
         */
        function (
            filename
        ) {
            return _exists(filename) && _statSync(filename).isDirectory();
        }
    );

    var _resolve$1 = skrinkSerializer$1(
        function () {
            return path.resolve.apply(path, flat$1(arguments));
        }
    );

    var _find = (function () {
        return skrinkSerializer$1(
            /**
             * 
             * @param {string} filename 
             * @param {ReadonlyArray<string>} [extnames] 
             */
            function (
                filename,
                extnames
            ) {
                return loadAll(filename, extnames || ["js"]);
            }
        );
        /**
         * 
         * @param {string} filename 
         * @param {ReadonlyArray<string>} extnames 
         * @returns {string | undefined}
         */
        function loadAll(
            filename,
            extnames
        ) {
            return loadSrc(filename, extnames)
                || loadDir(filename, extnames);
        }
        /**
         * 
         * @param {string} filename 
         * @param {ReadonlyArray<string>} extnames 
         * @returns {string | undefined}
         */
        function loadSrc(
            filename,
            extnames
        ) {
            if (_isFile(filename)) {
                return filename;
            }
            for (var
                i = 0,
                l = extnames.length;
                i < l;
                i++
            ) {
                var n = extnames[i];
                if (n.charAt(0) === ".") {
                    n = filename + n;
                } else {
                    n = filename + "." + n;
                }
                if (_isFile(n)) {
                    return n;
                }
            }
        }
        /**
         * 
         * @param {string} filename 
         * @param {ReadonlyArray<string>} extnames 
         * @returns {string | undefined}
         */
        function loadDir(
            filename,
            extnames
        ) {
            if (_isDirectory(filename)) {
                return loadPkg(filename, extnames)
                    || loadIdx(filename, extnames);
            }
        }
        /**
         * 
         * @param {string} filename 
         * @param {ReadonlyArray<string>} extnames 
         * @returns {string | undefined}
         */
        function loadPkg(
            filename,
            extnames
        ) {
            var position = _resolve$1(filename, "package.json");
            if (_isFile(position)) {
                var info = JSON.parse(_readFileSync(position).toString(definition$1.UTF8));
                var main = info.module || info.main;
                if (isString$1(main)) {
                    return loadAll(_resolve$1(filename, main), extnames);
                }
            }
        }
        /**
         * 
         * @param {string} filename 
         * @param {ReadonlyArray<string>} extnames 
         * @returns {string | undefined}
         */
        function loadIdx(
            filename,
            extnames
        ) {
            return loadSrc(_resolve$1(filename, "index"), extnames);
        }
    }());

    var _createListener = (function () {
        var latest = Date.now();
        var expire = 10 * 365 * 24 * 60 * 60 * 1000;
        /** @type {Record<string, { v: Promise<Yarla.koa.Result>; h?: string; }>} */
        var module = {};
        return skrinkSerializer$1(
            /**
             * 
             * @param {Yarla.koa.Options} [opts] 
             * @returns {import("http").RequestListener}
             */
            function (
                opts
            ) {
                return (function (
                    ACTION,
                    MODULE,
                    PUBLIC,
                    accessCookieAllowOrigin,
                    maxRequestContentLength,
                    sessionStorage,
                    tokenGenerator,
                    visitValidator,
                    compressTypes,
                    compressLeast,
                    compressLevel,
                    customHeaders,
                    DEBUGGER,
                    MIMETYPE,
                    FAVICON,
                    SITEMAP,
                    ROBOTS
                ) {
                    return skrinkSerializer$1(
                        function (req, res) {
                            return (function (ctx) {
                                var OLDER = ctx.IE;
                                var ARGCR = ctx.range;
                                var ARGCM = ctx.method;
                                var ARGCP = ctx.pathname;
                                var ARGCE = ctx.encoding;
                                var MATCH = ctx.getRequestHeader(httpHeader$1.IF_NONE_MATCH);
                                var SINCE = ctx.getRequestHeader(httpHeader$1.IF_MODIFIED_SINCE);
                                var EMPTY = ARGCM === "OPTIONS" || ARGCM === "HEAD";
                                var GZLIB = [];
                                if (ARGCE.includes(definition$1.BR)) {
                                    GZLIB.push(definition$1.BR, {
                                        params: defineProperty$1({}, zlib.constants.BROTLI_PARAM_QUALITY, generateNormalDescriptor$1(compressLevel, true)),
                                    });
                                } else if (ARGCE.includes(definition$1.GZIP)) {
                                    GZLIB.push(definition$1.GZIP, {
                                        level: compressLevel,
                                    });
                                } else if (ARGCE.includes(definition$1.DEFLATE)) {
                                    GZLIB.push(definition$1.DEFLATE, {
                                        level: compressLevel,
                                    });
                                }
                                if (ctx.getRequestHeader(httpHeader$1.X_REQUESTED_WITH) === "XMLHttpRequest") {
                                    ctx.setResponseHeader(httpHeader$1.X_RESPONSED_URL, req.url || "/");
                                }
                                customHeaders.forEach(function (value, name) {
                                    ctx.setResponseHeader(name, value);
                                });
                                return visitValidator.validate(ctx).then(function (VISITABLE) {
                                    return tokenGenerator.generate(ctx).then(function (TOKEN) {
                                        return sessionStorage.heartbeat(TOKEN).then(function () {
                                            if (VISITABLE) {
                                                for (var
                                                    i = 0,
                                                    l = ACTION.length;
                                                    i < l;
                                                    i++
                                                ) {
                                                    if (contain(ARGCM, ACTION[i].method) && glob(ACTION[i].path).test(ARGCP)) {
                                                        return ACTION[i].listen(ctx, Session.init(TOKEN, sessionStorage));
                                                    }
                                                }
                                                if (ARGCM === "GET" ||
                                                    ARGCM === "HEAD" ||
                                                    ARGCM === "OPTIONS") {
                                                    var pathname;
                                                    if (compareIgnoreCase$1(ARGCP, "/")) {
                                                        pathname = normalize("index.html");
                                                        if (_isFile(pathname)) {
                                                            return new _RedirectResult("/index.html");
                                                        }
                                                    }
                                                    if (compareIgnoreCase$1(ARGCP, "/index.html")) {
                                                        pathname = normalize("index.html");
                                                        if (_isFile(pathname)) {
                                                            return new _FileResult(pathname);
                                                        }
                                                    }
                                                    if (compareIgnoreCase$1(ARGCP, "/favicon.ico")) {
                                                        pathname = normalize(FAVICON);
                                                        if (_isFile(pathname)) {
                                                            return new _FileResult(pathname);
                                                        }
                                                    }
                                                    if (compareIgnoreCase$1(ARGCP, "/sitemap.xml")) {
                                                        pathname = normalize(SITEMAP);
                                                        if (_isFile(pathname)) {
                                                            return new _FileResult(pathname);
                                                        }
                                                    }
                                                    if (compareIgnoreCase$1(ARGCP, "/robots.txt")) {
                                                        pathname = normalize(ROBOTS);
                                                        if (_isFile(pathname)) {
                                                            return new _FileResult(pathname);
                                                        }
                                                    }
                                                    for (var
                                                        i = 0,
                                                        l = MODULE.length;
                                                        i < l;
                                                        i++
                                                    ) {
                                                        var TRACK = ARGCP;
                                                        var MODED = MODULE[i].dist;
                                                        var MODEI = MODULE[i].ignore;
                                                        var MODES = MODULE[i].static;
                                                        var MODEE = MODULE[i].extnames;
                                                        var MODEC = MODULE[i].compiler;
                                                        var MODER = MODULE[i].resolver;
                                                        if (cognate(TRACK, MODED)) {
                                                            if (isFunction$1(MODER)) {
                                                                TRACK = MODER.call(MODULE[i], TRACK, ctx);
                                                            }
                                                            if (isFunction$1(MODEI)) {
                                                                if (MODEI.call(MODULE[i], TRACK, ctx)) {
                                                                    return insurance(TRACK);
                                                                }
                                                            }
                                                            pathname = normalize(TRACK);
                                                            var name = _find(pathname, MODEE || HTTP_EXTNAMES);
                                                            if (name) {
                                                                if (compareIgnoreCase$1(pathname, name)) {
                                                                    if (isFunction$1(MODES)) {
                                                                        if (MODES.call(MODULE[i], TRACK, ctx)) {
                                                                            return new _FileResult(name);
                                                                        }
                                                                    }
                                                                    return translate(name, MODEC);
                                                                }
                                                                return new _RedirectResult(
                                                                    relative(name)
                                                                );
                                                            }
                                                        }
                                                    }
                                                    for (var
                                                        i = 0,
                                                        l = PUBLIC.length;
                                                        i < l;
                                                        i++
                                                    ) {
                                                        if (cognate(ARGCP, PUBLIC[i])) {
                                                            pathname = normalize(ARGCP);
                                                            if (_isFile(pathname)) {
                                                                return new _FileResult(pathname);
                                                            }
                                                        }
                                                    }
                                                }
                                                if (EMPTY) {
                                                    return new _EmptyResult();
                                                }
                                                return new _NotFoundResult();
                                            }
                                            return new _ForbiddenResult();
                                        });
                                    });
                                }).then(function (result) {
                                    var PATH;
                                    var NAME;
                                    var TYPE;
                                    var DATA;
                                    var INFO;
                                    var SIZE;
                                    var DATE;
                                    var NEED;
                                    var NOCACHE = "no-cache";
                                    var CACHING = "max-age=0";
                                    serialize(ctx).forEach(
                                        function (val, key) {
                                            if (val && val.length > 0) {
                                                res.setHeader(key, val);
                                            }
                                        }
                                    );
                                    if (isInstanceOf$1(result, _PureResult)) {
                                        return Promise$2.resolve(result.invoke(req, res)).then(function () { res.end(); });
                                    }
                                    if (isInstanceOf$1(result, _UnauthorizedResult)) {
                                        res.statusCode = result.status;
                                        res.setHeader(httpHeader$1.WWW_AUTHENTICATE, "Basic realm=" + JSON.stringify(result.realm));
                                        res.setHeader(httpHeader$1.CACHE_CONTROL, NOCACHE);
                                        res.setHeader(httpHeader$1.PRAGMA, NOCACHE);
                                        res.end();
                                        return;
                                    }
                                    if (isInstanceOf$1(result, _ForbiddenResult)) {
                                        res.statusCode = result.status;
                                        res.setHeader(httpHeader$1.CACHE_CONTROL, NOCACHE);
                                        res.setHeader(httpHeader$1.PRAGMA, NOCACHE);
                                        res.end();
                                        return;
                                    }
                                    if (isInstanceOf$1(result, _NotFoundResult)) {
                                        res.statusCode = result.status;
                                        res.setHeader(httpHeader$1.CACHE_CONTROL, NOCACHE);
                                        res.setHeader(httpHeader$1.PRAGMA, NOCACHE);
                                        res.end();
                                        return;
                                    }
                                    if (isInstanceOf$1(result, _RedirectResult)) {
                                        res.statusCode = result.status;
                                        res.setHeader(httpHeader$1.LOCATION, result.location);
                                        res.setHeader(httpHeader$1.CACHE_CONTROL, NOCACHE);
                                        res.setHeader(httpHeader$1.PRAGMA, NOCACHE);
                                        res.end();
                                        return;
                                    }
                                    if (isInstanceOf$1(result, _EmptyResult)) {
                                        res.statusCode = result.status;
                                        res.setHeader(httpHeader$1.CACHE_CONTROL, NOCACHE);
                                        res.setHeader(httpHeader$1.PRAGMA, NOCACHE);
                                        res.end();
                                        return;
                                    }
                                    if (isInstanceOf$1(result, _ResetResult)) {
                                        res.statusCode = result.status;
                                        res.setHeader(httpHeader$1.CACHE_CONTROL, NOCACHE);
                                        res.setHeader(httpHeader$1.PRAGMA, NOCACHE);
                                        res.end();
                                        return;
                                    }
                                    if (isInstanceOf$1(result, _NoneResult)) {
                                        res.statusCode = result.status;
                                        res.setHeader(httpHeader$1.CACHE_CONTROL, NOCACHE);
                                        res.setHeader(httpHeader$1.PRAGMA, NOCACHE);
                                        res.end();
                                        return;
                                    }
                                    if (isInstanceOf$1(result, _JsonResult)) {
                                        TYPE = MIMETYPE.json || HTTP_MIMETYPE.json;
                                        DATA = Buffer$1.from(JSON.stringify({
                                            message: result.message,
                                            data: result.data,
                                            code: result.code,
                                        }), definition$1.UTF8);
                                        SIZE = DATA.length;
                                    }
                                    if (isInstanceOf$1(result, _DataResult)) {
                                        NAME = result.filename;
                                        TYPE = result.mimetype || mimetype(OLDER, NAME);
                                        INFO = result.modified;
                                        DATA = result.data;
                                        if (INFO) {
                                            var NO_MODIFIED = false;
                                            var SINCE_VALUE = INFO.since;
                                            var MATCH_VALUE = INFO.match;
                                            res.setHeader(httpHeader$1.CACHE_CONTROL, CACHING);
                                            res.setHeader(httpHeader$1.EXPIRES, new Date((Date.parse(SINCE_VALUE) || latest) + expire).toUTCString());
                                            if (SINCE_VALUE) {
                                                NO_MODIFIED = NO_MODIFIED || SINCE_VALUE === SINCE;
                                                res.setHeader(httpHeader$1.LAST_MODIFIED, SINCE_VALUE);
                                            }
                                            if (MATCH_VALUE) {
                                                NO_MODIFIED = NO_MODIFIED || MATCH_VALUE === MATCH;
                                                res.setHeader(httpHeader$1.ETAG, MATCH_VALUE);
                                            }
                                            if (NO_MODIFIED) {
                                                res.statusCode = 304;
                                                res.end();
                                                return;
                                            }
                                        }
                                        if (Buffer$1.isBuffer(DATA)) {
                                            SIZE = DATA.length;
                                        }
                                        if (SIZE === 0 || EMPTY) {
                                            res.statusCode = EMPTY ? 204 : 200;
                                            res.setHeader(httpHeader$1.CONTENT_LENGTH, SIZE || 0);
                                            res.end();
                                            return;
                                        }
                                    }
                                    if (isInstanceOf$1(result, _FileResult)) {
                                        PATH = result.path;
                                        NAME = result.filename;
                                        TYPE = result.mimetype || mimetype(OLDER, NAME || PATH);
                                        INFO = _statInfo(PATH);
                                        DATE = INFO.mtime;
                                        SIZE = INFO.size;
                                        if (SIZE === 0 || EMPTY) {
                                            res.statusCode = EMPTY ? 204 : 200;
                                            res.setHeader(httpHeader$1.ACCEPT_RANGES, "bytes");
                                            res.setHeader(httpHeader$1.CONTENT_LENGTH, SIZE);
                                            res.end();
                                            return;
                                        }
                                        if (ARGCR.length === 2) {
                                            var TOP_LOC = ARGCR[0];
                                            var END_LOC = ARGCR[1];
                                            if (isNaN(TOP_LOC) &&
                                                isNaN(END_LOC)) {
                                                TOP_LOC = 0;
                                                END_LOC = SIZE - 1;
                                            } else if (isNaN(TOP_LOC)) {
                                                TOP_LOC = SIZE - END_LOC;
                                                END_LOC = SIZE - 1;
                                            } else if (isNaN(END_LOC)) {
                                                END_LOC = SIZE - 1;
                                            }
                                            if ((TOP_LOC >= SIZE) ||
                                                (END_LOC >= SIZE) ||
                                                (TOP_LOC > END_LOC)) {
                                                res.statusCode = 416;
                                                res.setHeader(httpHeader$1.CONTENT_RANGE, "bytes */" + SIZE);
                                                res.end();
                                                return;
                                            }
                                            END_LOC = Math.min(END_LOC, TOP_LOC + 0xFFFF);
                                            DATA = fs.createReadStream(PATH, {
                                                start: TOP_LOC,
                                                end: END_LOC,
                                            });
                                            res.statusCode = 206;
                                            res.setHeader(httpHeader$1.ACCEPT_RANGES, "bytes");
                                            res.setHeader(httpHeader$1.CONTENT_RANGE, "bytes " + TOP_LOC + "-" + END_LOC + "/" + SIZE);
                                        } else {
                                            res.setHeader(httpHeader$1.CACHE_CONTROL, CACHING);
                                            res.setHeader(httpHeader$1.LAST_MODIFIED, DATE.toUTCString());
                                            res.setHeader(httpHeader$1.EXPIRES, new Date(DATE.getTime() + expire).toUTCString());
                                            res.setHeader(httpHeader$1.ETAG, INFO.hash);
                                            if (INFO.hash === MATCH || DATE.toUTCString() === SINCE) {
                                                res.statusCode = 304;
                                                res.end();
                                                return;
                                            }
                                            DATA = fs.createReadStream(PATH);
                                        }
                                    }
                                    if (EMPTY) {
                                        if (isInstanceOf$1(DATA, stream$1.Readable)) {
                                            DATA.destroy();
                                        }
                                        res.statusCode = EMPTY ? 204 : 200;
                                        res.end();
                                        return;
                                    } else {
                                        NEED = compress(TYPE) && (isNullOrUndefined$1(SIZE) || SIZE >= compressLeast);
                                    }
                                    if (TYPE) {
                                        res.setHeader(httpHeader$1.CONTENT_TYPE, TYPE);
                                    }
                                    if (NAME) {
                                        res.setHeader(httpHeader$1.CONTENT_TRANSFER_ENCODING, "binary");
                                        res.setHeader(httpHeader$1.CONTENT_DISPOSITION, [
                                            "attachment",
                                            "filename=" + (OLDER ? encodeURIComponent$1(NAME) : Buffer$1.from(NAME, definition$1.UTF8).toString(definition$1.LATIN1)),
                                            "filename*=UTF-8''" + encodeURIComponent$1(NAME),
                                        ].join("; "));
                                    }
                                    if (Buffer$1.isBuffer(DATA)) {
                                        if (NEED) {
                                            var k = GZLIB[0];
                                            var v = GZLIB[1];
                                            if (k) {
                                                res.setHeader(httpHeader$1.CONTENT_ENCODING, k);
                                            }
                                            if (k === definition$1.BR) {
                                                return new Promise$2(function (resolve, reject) {
                                                    zlib.brotliCompress(DATA, v, function (error, data) {
                                                        if (error) {
                                                            reject(error);
                                                        } else {
                                                            resolve(data);
                                                        }
                                                    });
                                                }).then(function (data) {
                                                    res.end(data);
                                                });
                                            }
                                            if (k === definition$1.GZIP) {
                                                return new Promise$2(function (resolve, reject) {
                                                    zlib.gzip(DATA, v, function (error, data) {
                                                        if (error) {
                                                            reject(error);
                                                        } else {
                                                            resolve(data);
                                                        }
                                                    });
                                                }).then(function (data) {
                                                    res.end(data);
                                                });
                                            }
                                            if (k === definition$1.DEFLATE) {
                                                return new Promise$2(function (resolve, reject) {
                                                    zlib.deflate(DATA, v, function (error, data) {
                                                        if (error) {
                                                            reject(error);
                                                        } else {
                                                            resolve(data);
                                                        }
                                                    });
                                                }).then(function (data) {
                                                    res.end(data);
                                                });
                                            }
                                        }
                                        res.end(DATA);
                                        return;
                                    }
                                    if (isInstanceOf$1(DATA, stream$1.Readable)) {
                                        if (NEED) {
                                            var k = GZLIB[0];
                                            var v = GZLIB[1];
                                            if (k) {
                                                res.setHeader(httpHeader$1.CONTENT_ENCODING, k);
                                            }
                                            if (k === definition$1.BR) {
                                                DATA.pipe(zlib.createBrotliCompress(v)).pipe(res);
                                                return;
                                            }
                                            if (k === definition$1.GZIP) {
                                                DATA.pipe(zlib.createGzip(v)).pipe(res);
                                                return;
                                            }
                                            if (k === definition$1.DEFLATE) {
                                                DATA.pipe(zlib.createDeflate(v)).pipe(res);
                                                return;
                                            }
                                        }
                                        DATA.pipe(res);
                                        return;
                                    }
                                    throw new Error(message$1.INVALID_RESULT_DATA);
                                }).then(function () {
                                    DEBUGGER(null, {
                                        url: req.url || "/",
                                        method: req.method || "GET",
                                        status: res.statusCode,
                                    });
                                }).catch(function (error) {
                                    var statusCode = 500;
                                    var statusText = "";
                                    if (error) {
                                        statusCode = Number(error.status || error.statusCode) || statusCode;
                                        statusText = String(error.stack || error.message || "") || statusText;
                                    }
                                    try {
                                        res.statusCode = statusCode;
                                        res.setHeader(httpHeader$1.CONTENT_TYPE, HTTP_MIMETYPE.txt);
                                        if (env$1.DEVELOPMENT) {
                                            res.end(statusText);
                                        } else {
                                            res.end();
                                        }
                                    } catch (_) {
                                        // DO NOTHING
                                    }
                                    DEBUGGER(error, {
                                        url: req.url || "/",
                                        method: req.method || "GET",
                                        status: res.statusCode,
                                    });
                                });
                            }(Context.init(req, {
                                accessCookieAllowOrigin: accessCookieAllowOrigin,
                                maxRequestContentLength: maxRequestContentLength,
                            })));
                        }
                    );
                    /**
                     * 
                     * @param {string} [mimetype] 
                     */
                    function compress(
                        mimetype
                    ) {
                        return isString$1(mimetype) && (compressTypes.includes(mimetype) || HTTP_COMPRESS.includes(mimetype));
                    }
                    /**
                     * 
                     * @param {boolean} msie 
                     * @param {string} [filename] 
                     */
                    function mimetype(
                        msie,
                        filename
                    ) {
                        var name, type;
                        if (isString$1(filename)) {
                            name = path.extname(filename).slice(1).toLowerCase();
                            type = MIMETYPE[name] || HTTP_MIMETYPE[name];
                        }
                        if (msie) {
                            return type || httpContent$1.X_MSDOWNLOAD;
                        } else {
                            return type || httpContent$1.OCTET_STREAM;
                        }
                    }
                    /**
                     * 
                     * @param {string} filename 
                     * @param {Yarla.koa.Compiler} [compiler] 
                     */
                    function translate(
                        filename,
                        compiler
                    ) {
                        var s = _statInfo(filename);
                        if (module[filename] &&
                            module[filename].h === s.hash) {
                            return module[filename].v;
                        }
                        var v = Promise$2.resolve(
                            filename
                        ).then(
                            function (v) {
                                return _readFileSync(v).toString(definition$1.UTF8);
                            }
                        ).then(
                            function (v) {
                                return isFunction$1(compiler) ? compiler.call(null, v, filename, skrinkSerializer$1(HTTP_COMPILER)) : HTTP_COMPILER(v, filename);
                            }
                        ).then(
                            function (v) {
                                return new _DataResult(Buffer$1.from(v, definition$1.UTF8), void 0, MIMETYPE.js || HTTP_MIMETYPE.js, { match: s.hash, since: s.mtime.toUTCString() });
                            }
                        );
                        module[filename] = {
                            h: s.hash,
                            v: v,
                        };
                        return v;
                    }
                    /**
                     * 
                     * @param {string} filename 
                     */
                    function insurance(
                        filename
                    ) {
                        if (module[filename]) {
                            return module[filename].v;
                        }
                        var v = Promise$2.resolve(
                            Buffer$1.from("define(function(){console&&console.warn(\"Module \\\"" + filename + "\\\" has been ignored.\");});", definition$1.UTF8)
                        ).then(
                            function (v) {
                                return new _DataResult(v, void 0, MIMETYPE.js || HTTP_MIMETYPE.js, { match: crypto.createHash(definition$1.MD5).update(v).digest(definition$1.HEX), since: new Date(latest + expire).toUTCString() });
                            }
                        );
                        module[filename] = {
                            v: v,
                        };
                        return v;
                    }
                }(
                    opts && opts.action || [],
                    opts && opts.module || HTTP_ASSEMBLY,
                    opts && opts.public || HTTP_RESOURCE,
                    opts && opts.accessCookieAllowOrigin || "Lax",
                    opts && opts.maxRequestContentLength || Math.pow(2, 30) * 2,
                    opts && opts.sessionStorage || _createSessionStorage(),
                    opts && opts.tokenGenerator || _createTokenGenerator(),
                    opts && opts.visitValidator || _createVisitValidator(),
                    opts && opts.compressTypes || [],
                    opts && opts.compressLeast || 1024,
                    opts && opts.compressLevel || 5,
                    opts && opts.customHeaders || new KVPair$1(),
                    opts && opts.debugger || HTTP_DEBUGGER,
                    opts && opts.mimetype || HTTP_MIMETYPE,
                    opts && opts.favicon || "favicon.ico",
                    opts && opts.sitemap || "sitemap.xml",
                    opts && opts.robots || "robots.txt"
                ));
            }
        );
        /**
         * 
         * @param {string} arg1 A string.
         * @param {string | ReadonlyArray<string> | null | undefined} arg2 Restricted range.
         * @returns {boolean}
         */
        function contain(
            arg1,
            arg2
        ) {
            return isArray$1(arg2) ? arg2.length === 0 || arg2.includes(arg1) : isNullOrUndefined$1(arg2) || arg1 === arg2;
        }
        /**
         * 
         * @param {string | string[]} arg1 One path.
         * @param {string | string[]} arg2 Two path.
         * @returns {boolean}
         */
        function cognate(
            arg1,
            arg2
        ) {
            var a = isArray$1(arg1) ? arg1 : separate$1(arg1);
            var b = isArray$1(arg2) ? arg2 : separate$1(arg2);
            return a.length >= b.length && b.every(function (n, i) {
                return compareIgnoreCase$1(n, a[i]);
            });
        }
        /**
         * 
         * @param {string} argc A path.
         * @returns {string}
         */
        function relative(
            argc
        ) {
            return "/" + path.relative(process$1.cwd(), argc).replace(/[\\/]+/g, "/");
        }
        /**
         * 
         * @param {string} argc A path.
         * @returns {string}
         */
        function normalize(
            argc
        ) {
            return path.resolve(separate$1(argc).join(path.sep));
        }
        /**
         * 
         * @param {Yarla.koa.Context} argc A context.
         */
        function serialize(
            argc
        ) {
            var context = Reflect$1.getInternal(argc);
            /** @type {Yarla.KVPair<string>} */
            var cookies = context.cookies;
            /** @type {Yarla.KVPair<string | ReadonlyArray<string>>} */
            var headers = context.headers;
            return new KVPair$1(defaults$1({}, headers.toJSON(), {
                "Set-Cookie": values$1(cookies.toJSON()),
            }), true);
        }
    }());

    var http$1 = nodeRequire$1("http");

    var _createServer = skrinkSerializer$1(
        /**
         * 
         * @param {Yarla.koa.Options} [opts] 
         */
        function (
            opts
        ) {
            return http$1.createServer(_createListener(opts));
        }
    );

    var _unlinkSync = skrinkSerializer$1(
        /**
         * 
         * @param {string} filename 
         */
        function (
            filename
        ) {
            if (_isFile(filename = _resolve$1(filename))) {
                fs.unlinkSync(filename);
            }
        }
    );

    var _mkdirSync = skrinkSerializer$1(
        /**
         * 
         * @param {string} dirname 
         */
        function (
            dirname
        ) {
            var sep = _resolve$1(dirname).split(/[\\/]+/);
            for (var
                i = 1,
                p = sep[0] || _resolve$1(path.sep),
                l = sep.length;
                i < l;
                i++
            ) {
                var n = _resolve$1(p, sep[i]);
                if (!_exists(n)) {
                    fs.mkdirSync(n);
                }
                p = n;
            }
        }
    );

    var _readFile = skrinkSerializer$1(
        /**
         * 
         * @param {string} filename 
         * @param {number} [maximum]
         */
        function (
            filename,
            maximum
        ) {
            var l = Math.pow(2, 30) * 4 - 1;
            var m = Math.min(maximum || l, l);
            return new Promise$2(function (resolve, reject) {
                if (_statSync(filename).size > m) {
                    reject(new HttpError$1(413));
                } else {
                    fs.readFile(filename, function (error, data) {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(data);
                        }
                    });
                }
            });
        }
    );

    var _hash = skrinkSerializer$1(
        /**
         * 
         * @param {Buffer | import("stream").Readable} argc 
         */
        function (
            argc
        ) {
            return new Promise$2(function (resolve, reject) {
                var md5 = crypto.createHash(definition$1.MD5);
                if (Buffer$1.isBuffer(argc)) {
                    resolve(md5.update(argc).digest(definition$1.HEX));
                } else {
                    argc.on("end", function () {
                        resolve(md5.digest(definition$1.HEX));
                    });
                    argc.on("error", function (error) {
                        reject(error);
                    });
                    argc.on("data", function (chunk) {
                        md5.update(chunk);
                    });
                }
            });
        }
    );

    var Blob = (function (Blob) {
        return Blob = Blob || generateClass$1(function () {
            throw new Error(message$1.NOT_SUPPORTED);
        }, {
            type: generateGetterDescriptor$1(
                function () {
                    throw new Error(message$1.NOT_SUPPORTED);
                }
            ),
            size: generateGetterDescriptor$1(
                function () {
                    throw new Error(message$1.NOT_SUPPORTED);
                }
            ),
            slice: generateMethodDescriptor$1(
                function () {
                    throw new Error(message$1.NOT_SUPPORTED);
                }
            ),
            stream: generateMethodDescriptor$1(
                function () {
                    throw new Error(message$1.NOT_SUPPORTED);
                }
            ),
            arrayBuffer: generateMethodDescriptor$1(
                function () {
                    throw new Error(message$1.NOT_SUPPORTED);
                }
            ),
            text: generateMethodDescriptor$1(
                function () {
                    throw new Error(message$1.NOT_SUPPORTED);
                }
            ),
        }, NOOP$1, "Blob");
    }(globalThis$1.Blob));

    var File = ( /** @param {typeof File} File */ function (File) {
        return File = File || generateClass$1(
            /**
             * 
             * @this {import(".").default}
             * @param {BlobPart[]} fileBits
             * @param {string} fileName 
             * @param {object} [options] 
             * @param {number} [options.lastModified] 
             * @param {number} [options.start] 
             * @param {number} [options.size] 
             * @param {string} [options.type] 
             */
            function (
                fileBits,
                fileName,
                options
            ) {
                var size = options ? options.size : void 0;
                var lastModified = options ? options.lastModified : void 0;
                var start = options ? options.start || 0 : 0;
                if (isUndefined$1(size) ||
                    isUndefined$1(lastModified)) {
                    var stat = fs.statSync(fileName);
                    if (isUndefined$1(size)) {
                        size = stat.size - start;
                    }
                    if (isUndefined$1(lastModified)) {
                        lastModified = stat.mtime.getTime();
                    }
                }
                return (
                    /**
                     * @this {any}
                     */
                    function () {
                        return (
                            Reflect$1.defineInternal(this, size, "size"),
                            Reflect$1.defineInternal(this, start, "start"),
                            Reflect$1.defineInternal(this, lastModified, "lastModified"),
                            Reflect$1.defineInternal(this, path.basename(fileName), "name"),
                            Reflect$1.defineInternal(this, fileName, "path"));
                    }
                ).call(Reflect$1.callSuper(this, fileBits, options));
            },
            {
                name: generateGetterDescriptor$1(
                    /**
                     * 
                     * @this {import(".").default}
                     * @returns {string}
                     */
                    function () {
                        return Reflect$1.getInternal(this).name;
                    }
                ),
                path: generateGetterDescriptor$1(
                    /**
                     * 
                     * @this {import(".").default}
                     * @returns {string}
                     */
                    function () {
                        return Reflect$1.getInternal(this).path;
                    }
                ),
                size: generateGetterDescriptor$1(
                    /**
                     * 
                     * @this {import(".").default}
                     * @returns {number}
                     */
                    function () {
                        return Reflect$1.getInternal(this).size;
                    }
                ),
                start: generateGetterDescriptor$1(
                    /**
                     * 
                     * @this {import(".").default}
                     * @returns {number}
                     */
                    function () {
                        return Reflect$1.getInternal(this).start;
                    }
                ),
                lastModified: generateGetterDescriptor$1(
                    /**
                     * 
                     * @this {import(".").default}
                     * @returns {number}
                     */
                    function () {
                        return Reflect$1.getInternal(this).lastModified;
                    }
                ),
                slice: generateMethodDescriptor$1(
                    /**
                     * 
                     * @this {import(".").default}
                     * @param {number} [start] 
                     * @param {number} [end] 
                     */
                    function (
                        start,
                        end
                    ) {
                        if (isUndefined$1(start)) {
                            start = this.start;
                        } else if (start >= 0) {
                            start = this.start + start;
                        } else {
                            start = this.size + start;
                        }
                        if (isUndefined$1(end)) {
                            end = this.size;
                        } else if (end >= 0) {
                            end = this.start + end;
                        } else {
                            end = this.size + end;
                        }
                        var size = end - start;
                        return new File([], this.path, {
                            type: this.type,
                            lastModified: this.lastModified,
                            // @ts-ignore
                            start: start,
                            // @ts-ignore
                            size: size,
                        });
                    }
                ),
                stream: generateMethodDescriptor$1(
                    /**
                     * 
                     * @this {import(".").default}
                     */
                    function () {
                        return ReadableStream$1.from(
                            fs.createReadStream(this.path, {
                                end: this.start + this.size - 1,
                                start: this.start,
                            })
                        );
                    }
                ),
                arrayBuffer: generateMethodDescriptor$1(
                    /**
                     * 
                     * @this {import(".").default}
                     * @returns {Promise<ArrayBuffer>}
                     */
                    function () {
                        return read$1(
                            stream$1.Readable.from(this.stream())
                        ).then(function (i) {
                            return new Uint8Array$1(i).buffer;
                        });
                    }
                ),
                text: generateMethodDescriptor$1(
                    /**
                     * 
                     * @this {import(".").default}
                     * @returns {Promise<string>}
                     */
                    function () {
                        return read$1(
                            stream$1.Readable.from(this.stream())
                        ).then(function (i) {
                            return i.toString(definition$1.UTF8);
                        });
                    }
                ),
            },
            Blob,
            "File"
        );
    }());

    var _read = skrinkSerializer$1(
        /**
         * 
         * @param {string} filename 
         * @param {string} [mimetype] 
         */
        function (
            filename,
            mimetype
        ) {
            return new File([], filename, {
                type: mimetype,
            });
        }
    );

    var koa = {
        PureResult: _PureResult,
        DataResult: _DataResult,
        FileResult: _FileResult,
        JsonResult: _JsonResult,
        NoneResult: _NoneResult,
        EmptyResult: _EmptyResult,
        ResetResult: _ResetResult,
        RedirectResult: _RedirectResult,
        NotFoundResult: _NotFoundResult,
        ForbiddenResult: _ForbiddenResult,
        UnauthorizedResult: _UnauthorizedResult,
        createSessionStorage: _createSessionStorage,
        createTokenGenerator: _createTokenGenerator,
        createVisitValidator: _createVisitValidator,
        createListener: _createListener,
        createServer: _createServer,
        readFileSync: _readFileSync,
        unlinkSync: _unlinkSync,
        mkdirSync: _mkdirSync,
        statSync: _statSync,
        statInfo: _statInfo,
        readFile: _readFile,
        isDirectory: _isDirectory,
        resolve: _resolve$1,
        isFile: _isFile,
        exists: _exists,
        hash: _hash,
        find: _find,
        read: _read,
    };

    var _defaults = {};

    /**
     * Hide function internal implementation.
     * 
     * @param {Yarla.Object<T, Yarla.BasicFunc>} constructor The function.
     * @returns {T}
     * @template T
     */
    function skrinkSerializer (
        constructor
    ) {
        // @ts-ignore
        return function () { return constructor.apply(this, arguments); };
    }

    var message = {
        /** @type {"Invalid URL"} */
        INVALID_URL: "Invalid URL",
        /** @type {"Invalid module"} */
        INVALID_MODULE: "Invalid module",
        /** @type {"Invalid protocol"} */
        INVALID_PROTOCOL: "Invalid protocol",
        /** @type {"Invalid formatter"} */
        INVALID_FORMATTER: "Invalid formatter",
        /** @type {"Invalid result data"} */
        INVALID_RESULT_DATA: "Invalid result data",
        /** @type {"Illegal invocation"} */
        ILLEGAL_INVOCATION: "Illegal invocation",
        /** @type {"Illegal constructor"} */
        ILLEGAL_CONSTRUCTOR: "Illegal constructor",
        /** @type {"Target must be an array"} */
        TARGET_MUST_BE_AN_ARRAY: "Target must be an array",
        /** @type {"Target must be an object"} */
        TARGET_MUST_BE_AN_OBJECT: "Target must be an object",
        /** @type {"Only async is supported"} */
        ONLY_ASYNC_IS_SUPPORTED: "Only async is supported",
        /** @type {"Only used in components"} */
        ONLY_USED_IN_COMPONENTS: "Only used in components",
        /** @type {"Only numbers could inside []"} */
        ONLY_NUMBERS_COULD_INSIDE_SQUARE: "Only numbers could inside []",
        /** @type {"Only be called when state is OPEN"} */
        ONLY_BE_CALLED_WHEN_STATE_IS_OPEN: "Only be called when state is OPEN",
        /** @type {"Only be called when state is UNSENT"} */
        ONLY_BE_CALLED_WHEN_STATE_IS_UNSENT: "Only be called when state is UNSENT",
        /** @type {"Character is outside the bounds of ascii"} */
        CHARACTER_IS_OUTSIDE_THE_BOUNDS_OF_ASCII: "Character is outside the bounds of ascii",
        /** @type {"Character is outside the bounds of latin1"} */
        CHARACTER_IS_OUTSIDE_THE_BOUNDS_OF_LATIN1: "Character is outside the bounds of latin1",
        /** @type {"Self-closing elements cannot contain child nodes"} */
        SELF_CLOSING_ELEMENTS_CANNOT_CONTAIN_CHILD_NODES: "Self-closing elements cannot contain child nodes",
        /** @type {"The node to be removed is not a child of this node"} */
        FAILED_TO_EXECUTE_REMOVE: "The node to be removed is not a child of this node",
        /** @type {"The node before which the new node is to be inserted is not a child of this node"} */
        FAILED_TO_EXECUTE_INSERT: "The node before which the new node is to be inserted is not a child of this node",
        /** @type {"Please use the 'new' operator, this constructor cannot be called as a function"} */
        FAILED_TO_CONSTRUCT_INSPANCE: "Please use the 'new' operator, this constructor cannot be called as a function",
        /** @type {"Promise resolved with itself"} */
        PROMISE_RESOLVED_WITH_ITSELF: "Promise resolved with itself",
        /** @type {"Offset is outside the bounds"} */
        OFFSET_IS_OUTSIDE_THE_BOUNDS: "Offset is outside the bounds",
        /** @type {"Stream closed before ending"} */
        STREAM_CLOSED_BEFORE_ENDING: "Stream closed before ending",
        /** @type {"Expression can not be empty"} */
        EXPRESSION_CAN_NOT_BE_EMPTY: "Expression can not be empty",
        /** @type {"Must have number in []"} */
        MUST_HAVE_NUMBER_IN_SQUARE: "Must have number in []",
        /** @type {"Redirect exceeds maximum"} */
        REDIRECT_EXCEEDS_MAXIMUM: "Redirect exceeds maximum",
        /** @type {"Not implemented"} */
        NOT_IMPLEMENTED: "Not implemented",
        /** @type {"Not supported"} */
        NOT_SUPPORTED: "Not supported",
        /** @type {"Timeout"} */
        TIMEOUT: "Timeout",
        /** @type {"Abort"} */
        ABORT: "Abort",
    };

    /**
     * 
     * @param {string} pathname 
     * @param {boolean} [allowAboveRoot] 
     * @returns {ReadonlyArray<string>}
     */
    function separate (
        pathname,
        allowAboveRoot
    ) {
        var up = 0;
        var parts = pathname.split(/[\\/]+/);
        for (var
            i = parts.length - 1;
            i >= 0;
            i--
        ) {
            var last = parts[i];
            if (last === "" ||
                last === ".") {
                parts.splice(i, 1);
            } else if (last === "..") {
                parts.splice(i, 1);
                up++;
            } else if (up) {
                parts.splice(i, 1);
                up--;
            }
        }
        if (allowAboveRoot) {
            while (up--) {
                parts.unshift("..");
            }
        }
        return parts;
    }

    var isArray = skrinkSerializer(
        /**
         * 
         * Determines if the input parameter is an array.
         * 
         * @param {any} argc Any object.
         * @returns {argc is any[]}
         */
        function (
            argc
        ) {
            return Array.isArray(argc);
        }
    );

    var isUndefined = skrinkSerializer(
        /**
         * 
         * Determines if the input parameter is undefined.
         * 
         * @param {any} argc Any object.
         * @returns {argc is undefined}
         */
        function (
            argc
        ) {
            return argc === void 0;
        }
    );

    var isNull = skrinkSerializer(
        /**
         * 
         * Determines if the input parameter is null.
         * 
         * @param {any} argc Any object.
         * @returns {argc is null}
         */
        function (
            argc
        ) {
            return argc === null;
        }
    );

    var isNullOrUndefined = skrinkSerializer(
        /**
         * 
         * Determines if the input parameter is null or undefined.
         * 
         * @param {any} argc Any object.
         * @returns {argc is null | undefined}
         */
        function (
            argc
        ) {
            return isNull(argc) || isUndefined(argc);
        }
    );

    var isReference = skrinkSerializer(
        /**
         * Determines if the input parameter is reference type.
         * 
         * @param {any} argc Any object.
         * @returns {boolean}
         */
        function (
            argc
        ) {
            return Object(argc) === argc;
        }
    );

    var isInstanceOf = skrinkSerializer(
        /**
         * 
         * Determines if the input parameter is an instance of the specified class.
         * 
         * @param {any} argc Any object.
         * @param {Yarla.Proto<T>} constructor The class.
         * @returns {argc is T}
         * @template T
         */
        function (
            argc,
            constructor
        ) {
            return isReference(constructor) && argc instanceof constructor;
        }
    );

    var isNumber = skrinkSerializer(
        /**
         * 
         * Determines if the input parameter is a number.
         * 
         * @param {any} argc Any object.
         * @returns {argc is number}
         */
        function (
            argc
        ) {
            return typeof argc === "number" || isInstanceOf(argc, Number);
        }
    );

    var globalThis = (
        // eslint-disable-next-line no-undef
        typeof global !== "undefined" ? global :
            // eslint-disable-next-line no-undef
            typeof window !== "undefined" ? window :
                // eslint-disable-next-line no-undef
                self
    );

    var isFinite = skrinkSerializer(
        // eslint-disable-next-line es/no-number-isfinite
        Number.isFinite || function (
            /**
             * @type {number}
             */
            argc
        ) {
            return isNumber(argc) && globalThis.isFinite(argc);
        }
    );

    var isDate = skrinkSerializer(
        /**
         * 
         * Determines if the input parameter is a Date.
         * 
         * @param {any} argc Any object.
         * @returns {argc is Date}
         */
        function (
            argc
        ) {
            return isInstanceOf(argc, Date);
        }
    );

    var isValid = skrinkSerializer(
        /**
         * 
         * Determines if the input parameter is valid.
         * 
         * @param {any} argc An object.
         * @returns {boolean}
         */
        function (
            argc
        ) {
            return isNumber(argc) ? isFinite(argc) : isDate(argc) ? isFinite(argc.getTime()) : !isNullOrUndefined(argc);
        }
    );

    var flat = skrinkSerializer(
        /**
         * 
         * Convert an array from an array-like.
         * 
         * @param {ArrayLike<T>} argc A array-like.
         * @param {number} [start] The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.
         * @param {number} [depth] Indicates whether to flatten the multidimensional array.
         * @param {boolean} [valid] Indicates whether to remove invalid items from the array.
         * @returns {FlatArray<NonNullable<T>[], 20>[]}
         * @template T
         */
        function (
            argc,
            start,
            depth,
            valid
        ) {
            var r = Array.prototype.slice.call(argc, start || 0);
            if (depth) {
                r = (function flat(argc, d) {
                    var r = [];
                    for (var
                        i = 0,
                        l = argc.length;
                        i < l;
                        i++
                    ) {
                        var n = argc[i];
                        if (d < depth && isArray(n)) {
                            r = r.concat(flat(n, d + 1));
                        } else {
                            r.push(n);
                        }
                    }
                    return r;
                }(r, 0));
            }
            if (valid) {
                r = r.filter(isValid);
            }
            return r;
        }
    );

    var concatUrl = (function () {
        return skrinkSerializer(
            function () {
                var protocol = "";
                var host = "";
                var pathname = "";
                var search = "";
                var hash = "";
                var hasRoot = false;
                var once = true;
                for (var
                    s = flat(arguments, 0, Infinity, true),
                    l = s.length - 1,
                    i = l;
                    i >= -1;
                    i--
                ) {
                    var url;
                    if (i >= 0) {
                        url = String(s[i]);
                    } else {
                        url = "/";
                    }
                    if (url.length === 0) {
                        continue;
                    }
                    var loc = parse(url);
                    if (once) {
                        search = loc.search;
                        hash = loc.hash;
                        once = false;
                    }
                    protocol = loc.protocol;
                    host = loc.host;
                    if (!hasRoot) {
                        pathname = loc.pathname + "/" + pathname;
                    }
                    if (!protocol) {
                        hasRoot = hasRoot || url.charAt(0) === "/";
                    } else {
                        hasRoot = true;
                        break;
                    }
                }
                if (!protocol) {
                    throw new Error(message.INVALID_URL);
                }
                pathname = "/" + separate(pathname).join("/");
                return protocol + "//" + host + pathname + search + hash;
            }
        );
        /**
         * 
         * @param {string} url 
         */
        function parse(
            url
        ) {
            var match;
            var index = -1;
            var protocol = "";
            var host = "";
            var pathname = "";
            var search = "";
            var hash = "";
            if ((index = url.indexOf("#")) >= 0) {
                hash = url.slice(index);
                url = url.slice(0, index);
            }
            if ((index = url.indexOf("?")) >= 0) {
                search = url.slice(index);
                url = url.slice(0, index);
            }
            if ((match = url.match(/^([A-Za-z]+:)?\/\/([^/]*)/))) {
                protocol = match[1] || "";
                host = match[2] || "";
                pathname = url.slice(match[0].length) || "/";
            } else {
                pathname = url;
            }
            if (protocol) {
                pathname = "/" + separate(pathname).join("/");
            } else {
                pathname = separate(pathname, true).join("/");
            }
            return {
                protocol: protocol,
                host: host,
                pathname: pathname,
                search: search,
                hash: hash,
            };
        }
    }());

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
    var nodeRequire = function (
        id
    ) {
        try {
            return typeof require !== "undefined" ? require( /* webpackIgnore: true */ id) : null;
        } catch (_) {
            // @ts-ignore
            return null;
        }
    };

    var url = nodeRequire("url");

    var process = nodeRequire("process");

    var location = globalThis.location || null;

    var env = {
        BASE_URI: location ? location.protocol + "//" + location.host : url.pathToFileURL(process.cwd()),
    };

    var _resolve = skrinkSerializer(
        function () {
            return concatUrl.apply(null, [env.BASE_URI].concat(flat(arguments)));
        }
    );

    var httpHeader = {
        /** @type {"Etag"} */
        ETAG: "Etag",
        /** @type {"Host"} */
        HOST: "Host",
        /** @type {"Range"} */
        RANGE: "Range",
        /** @type {"Cookie"} */
        COOKIE: "Cookie",
        /** @type {"Origin"} */
        ORIGIN: "Origin",
        /** @type {"Pragma"} */
        PRAGMA: "Pragma",
        /** @type {"Referer"} */
        REFERER: "Referer",
        /** @type {"Expires"} */
        EXPIRES: "Expires",
        /** @type {"Location"} */
        LOCATION: "Location",
        /** @type {"Authorization"} */
        AUTHORIZATION: "Authorization",
        /** @type {"Accept-Ranges"} */
        ACCEPT_RANGES: "Accept-Ranges",
        /** @type {"Accept-Encoding"} */
        ACCEPT_ENCODING: "Accept-Encoding",
        /** @type {"Accept-Language"} */
        ACCEPT_LANGUAGE: "Accept-Language",
        /** @type {"Access-Control-Allow-Credentials"} */
        ACCESS_CONTROL_ALLOW_CREDENTIALS: "Access-Control-Allow-Credentials",
        /** @type {"Access-Control-Allow-Headers"} */
        ACCESS_CONTROL_ALLOW_HEADERS: "Access-Control-Allow-Headers",
        /** @type {"Access-Control-Allow-Methods"} */
        ACCESS_CONTROL_ALLOW_METHODS: "Access-Control-Allow-Methods",
        /** @type {"Access-Control-Allow-Origin"} */
        ACCESS_CONTROL_ALLOW_ORIGIN: "Access-Control-Allow-Origin",
        /** @type {"Access-Control-Max-Age"} */
        ACCESS_CONTROL_MAX_AGE: "Access-Control-Max-Age",
        /** @type {"Content-Transfer-Encoding"} */
        CONTENT_TRANSFER_ENCODING: "Content-Transfer-Encoding",
        /** @type {"Content-Disposition"} */
        CONTENT_DISPOSITION: "Content-Disposition",
        /** @type {"Content-Encoding"} */
        CONTENT_ENCODING: "Content-Encoding",
        /** @type {"Content-Length"} */
        CONTENT_LENGTH: "Content-Length",
        /** @type {"Content-Range"} */
        CONTENT_RANGE: "Content-Range",
        /** @type {"Content-Type"} */
        CONTENT_TYPE: "Content-Type",
        /** @type {"User-Agent"} */
        USER_AGENT: "User-Agent",
        /** @type {"Cache-Control"} */
        CACHE_CONTROL: "Cache-Control",
        /** @type {"Last-Modified"} */
        LAST_MODIFIED: "Last-Modified",
        /** @type {"If-None-Match"} */
        IF_NONE_MATCH: "If-None-Match",
        /** @type {"If-Modified-Since"} */
        IF_MODIFIED_SINCE: "If-Modified-Since",
        /** @type {"WWW-Authenticate"} */
        WWW_AUTHENTICATE: "WWW-Authenticate",
        /** @type {"X-Requested-With"} */
        X_REQUESTED_WITH: "X-Requested-With",
        /** @type {"X-Responsed-Url"} */
        X_RESPONSED_URL: "X-Responsed-Url",
        /** @type {"X-Real-IP"} */
        X_REAL_IP: "X-Real-IP",
        /** @type {"X-Real-Host"} */
        X_REAL_HOST: "X-Real-Host",
        /** @type {"X-Real-Proto"} */
        X_REAL_PROTO: "X-Real-Proto",
        /** @type {"X-Forwarded-For"} */
        X_FORWARDED_FOR: "X-Forwarded-For",
        /** @type {"X-Forwarded-Host"} */
        X_FORWARDED_HOST: "X-Forwarded-Host",
        /** @type {"X-Forwarded-Proto"} */
        X_FORWARDED_PROTO: "X-Forwarded-Proto",
    };

    /**
     * Adds one or more properties to an object, and/or modifies attributes of existing properties.
     * 
     * @param {T} argc Object on which to add or modify the properties. This can be a native JavaScript object or a DOM object.
     * @param {Yarla.Object<P, PropertyDescriptorMap>} properties JavaScript object that contains one or more descriptor objects. Each descriptor object describes a data property or an accessor property.
     * @returns {Yarla.NonAny<T> & Yarla.PropertyDescriptorMapReturns<P>}
     * @template T, P
     */
    function defineProperties (
        argc,
        properties
    ) {
        return /** @type {any} */ (Object.defineProperties(argc, properties));
    }

    /**
     * 
     * Returns a normal property descriptor.
     * 
     * @param {T} argc The value of the property descriptor.
     * @param {boolean} [enumerable] Indicates whether the property is enumerable. 
     * @param {boolean} [readonly] Indicates whether the property is readonly. 
     * @returns {Yarla.NormalPropertyDescriptor<T>}
     * @template T
     */
    function generateNormalDescriptor (
        argc,
        enumerable,
        readonly
    ) {
        return {
            configurable: true,
            enumerable: !!enumerable,
            writable: !readonly,
            value: argc,
        };
    }

    /** 
     * Defines base64 to ascii mapping table.
     * 
     * @type {Readonly<Record<number | string, number>>}
     */
    var BTOA = {
        0: 65,
        1: 66,
        2: 67,
        3: 68,
        4: 69,
        5: 70,
        6: 71,
        7: 72,
        8: 73,
        9: 74,
        10: 75,
        11: 76,
        12: 77,
        13: 78,
        14: 79,
        15: 80,
        16: 81,
        17: 82,
        18: 83,
        19: 84,
        20: 85,
        21: 86,
        22: 87,
        23: 88,
        24: 89,
        25: 90,
        26: 97,
        27: 98,
        28: 99,
        29: 100,
        30: 101,
        31: 102,
        32: 103,
        33: 104,
        34: 105,
        35: 106,
        36: 107,
        37: 108,
        38: 109,
        39: 110,
        40: 111,
        41: 112,
        42: 113,
        43: 114,
        44: 115,
        45: 116,
        46: 117,
        47: 118,
        48: 119,
        49: 120,
        50: 121,
        51: 122,
        52: 48,
        53: 49,
        54: 50,
        55: 51,
        56: 52,
        57: 53,
        58: 54,
        59: 55,
        60: 56,
        61: 57,
        62: 43,
        63: 47,
        64: 61,
    };

    /**
     * 
     * Returns a character created by using the specified code point.
     * 
     * @param {ArrayLike<number>} argc A code point array.
     * @returns {string}
     */
    function fromCharCode (
        argc
    ) {
        var r = "";
        for (var
            i = 0,
            l = argc.length;
            i < l;
            i++
        ) {
            var n = argc[i];
            if (n <= 0xFFFF) {
                r += String.fromCharCode(n);
            } else {
                r += String.fromCharCode(((n - 0x10000) >> 10) + 0xD800, ((n - 0x10000) % 0x400) + 0xDC00);
            }
        }
        return r;
    }

    var btoa$1 = globalThis.btoa || function (
        /**
         * @type {string}
         */
        argc
    ) {
        var r = [];
        for (var
            i = 0,
            l = argc.length;
            i < l;
        ) {
            var n1 = argc.charCodeAt(i++);
            var n2 = argc.charCodeAt(i++);
            var n3 = argc.charCodeAt(i++);
            var e1 = (n1 & 0xFF) >> 2;
            var e2 = (n1 & 0x03) << 4 | n2 >> 4;
            var e3 = (n2 & 0x0F) << 2 | n3 >> 6;
            var e4 = (n3 & 0x3F) << 0;
            if (globalThis.isNaN(n2)) {
                e3 = 64;
            }
            if (globalThis.isNaN(n3)) {
                e4 = 64;
            }
            r.push(BTOA[e1]);
            r.push(BTOA[e2]);
            r.push(BTOA[e3]);
            r.push(BTOA[e4]);
        }
        return fromCharCode(r);
    };

    /**
     * 
     * Decodes a bytes to latin1 string.
     * 
     * @param {ArrayLike<number>} argc A bytes.
     * @returns {string}
     */
    function decodeLATIN1 (
        argc
    ) {
        var r = [];
        for (var
            i = 0,
            l = argc.length;
            i < l;
            i++
        ) {
            r.push(argc[i] & 0xFF);
        }
        return fromCharCode(r);
    }

    /**
     * 
     * Decodes a bytes to base64 string.
     * 
     * @param {ArrayLike<number>} argc A bytes.
     * @returns {string}
     */
    function decodeBASE64 (
        argc
    ) {
        return btoa$1(decodeLATIN1(argc));
    }

    /** 
     * Defines ascii to base64 mapping table.
     * 
     * @type {Readonly<Record<number | string, number>>}
     */
     var ATOB = {
        43: 62,
        47: 63,
        48: 52,
        49: 53,
        50: 54,
        51: 55,
        52: 56,
        53: 57,
        54: 58,
        55: 59,
        56: 60,
        57: 61,
        61: 64,
        65: 0,
        66: 1,
        67: 2,
        68: 3,
        69: 4,
        70: 5,
        71: 6,
        72: 7,
        73: 8,
        74: 9,
        75: 10,
        76: 11,
        77: 12,
        78: 13,
        79: 14,
        80: 15,
        81: 16,
        82: 17,
        83: 18,
        84: 19,
        85: 20,
        86: 21,
        87: 22,
        88: 23,
        89: 24,
        90: 25,
        97: 26,
        98: 27,
        99: 28,
        100: 29,
        101: 30,
        102: 31,
        103: 32,
        104: 33,
        105: 34,
        106: 35,
        107: 36,
        108: 37,
        109: 38,
        110: 39,
        111: 40,
        112: 41,
        113: 42,
        114: 43,
        115: 44,
        116: 45,
        117: 46,
        118: 47,
        119: 48,
        120: 49,
        121: 50,
        122: 51,
    };

    var atob = globalThis.atob || function (
        /**
         * @type {string}
         */
        argc
    ) {
        var r = [];
        for (var
            i = 0,
            l = argc.length;
            i < l;
        ) {
            var e1 = ATOB[argc.charCodeAt(i++)];
            var e2 = ATOB[argc.charCodeAt(i++)];
            var e3 = ATOB[argc.charCodeAt(i++)];
            var e4 = ATOB[argc.charCodeAt(i++)];
            var n1 = (e1 & 0xFF) << 2 | e2 >> 4;
            var n2 = (e2 & 0x0F) << 4 | e3 >> 2;
            var n3 = (e3 & 0x03) << 6 | e4 >> 0;
            r.push(n1);
            if (e4 < 64) {
                r.push(n2);
            }
            if (e4 < 64) {
                r.push(n3);
            }
        }
        return fromCharCode(r);
    };

    /**
     * 
     * Encodes a latin1 string to bytes.
     * 
     * @param {string} argc A latin1 string.
     * @returns {ReadonlyArray<number>}
     */
    function encodeLATIN1 (
        argc
    ) {
        var r = [];
        for (var
            i = 0,
            l = argc.length;
            i < l;
            i++
        ) {
            var n = argc.charCodeAt(i);
            if (n > 0xFF) {
                throw new Error(message.CHARACTER_IS_OUTSIDE_THE_BOUNDS_OF_LATIN1);
            }
            r.push(n);
        }
        return r;
    }

    /**
     * 
     * Encodes a base64 string to bytes.
     * 
     * @param {string} argc A base64 string.
     * @returns {ReadonlyArray<number>}
     */
    function encodeBASE64 (
        argc
    ) {
        return encodeLATIN1(atob(argc));
    }

    /**
     * 
     * Decodes a utf8 bytes to sting.
     * 
     * @param {ArrayLike<number>} argc A utf8 bytes.
     * @returns {string}
     */
    function decodeUTF8 (
        argc
    ) {
        var r = [];
        for (var
            i = 0,
            l = argc.length;
            i < l;
        ) {
            var n = argc[i];
            if (n <= 0x7F) {
                r.push(
                    ((argc[i++] & 0x7F) << (0 * 6)));
            } else if (n >= 0xC0 && n <= 0xDF) {
                r.push(
                    ((argc[i++] & 0x1F) << (1 * 6)) |
                    ((argc[i++] & 0x3F) << (0 * 6)));
            } else if (n >= 0xE0 && n <= 0xEF) {
                r.push(
                    ((argc[i++] & 0x0F) << (2 * 6)) |
                    ((argc[i++] & 0x3F) << (1 * 6)) |
                    ((argc[i++] & 0x3F) << (0 * 6)));
            } else if (n >= 0xF0 && n <= 0xF7) {
                r.push(
                    ((argc[i++] & 0x07) << (3 * 6)) |
                    ((argc[i++] & 0x3F) << (2 * 6)) |
                    ((argc[i++] & 0x3F) << (1 * 6)) |
                    ((argc[i++] & 0x3F) << (0 * 6)));
            } else if (n >= 0xF8 && n <= 0xFB) {
                r.push(
                    ((argc[i++] & 0x03) << (4 * 6)) |
                    ((argc[i++] & 0x3F) << (3 * 6)) |
                    ((argc[i++] & 0x3F) << (2 * 6)) |
                    ((argc[i++] & 0x3F) << (1 * 6)) |
                    ((argc[i++] & 0x3F) << (0 * 6)));
            } else if (n >= 0xFC) {
                r.push(
                    ((argc[i++] & 0x01) << (5 * 6)) |
                    ((argc[i++] & 0x3F) << (4 * 6)) |
                    ((argc[i++] & 0x3F) << (3 * 6)) |
                    ((argc[i++] & 0x3F) << (2 * 6)) |
                    ((argc[i++] & 0x3F) << (1 * 6)) |
                    ((argc[i++] & 0x3F) << (0 * 6)));
            } else {
                i++;
            }
        }
        return fromCharCode(r);
    }

    /**
     * 
     * Encodes a string to utf8 bytes.
     * 
     * @param {string} argc A string.
     * @returns {ReadonlyArray<number>}
     */
    function encodeUTF8 (
        argc
    ) {
        var r = [];
        for (var
            i = 0,
            l = argc.length;
            i < l;
        ) {
            var n = argc.charCodeAt(i++);
            if (n >= 0xD800 &&
                n <= 0xDBFF) {
                if (i < l) {
                    n = ((n - 0xD800) * 0x400) + (argc.charCodeAt(i++) - 0xDC00) + 0x10000;
                }
            }
            if (n <= 0x0000007F) {
                r.push(n & 0x7F);
            } else if (n >= 0x00000080 && n <= 0x000007FF) {
                r.push(((n >> (1 * 6)) & 0x1F) | 0xC0);
                r.push(((n >> (0 * 6)) & 0x3F) | 0x80);
            } else if (n >= 0x00000800 && n <= 0x0000FFFF) {
                r.push(((n >> (2 * 6)) & 0x0F) | 0xE0);
                r.push(((n >> (1 * 6)) & 0x3F) | 0x80);
                r.push(((n >> (0 * 6)) & 0x3F) | 0x80);
            } else if (n >= 0x00010000 && n <= 0x001FFFFF) {
                r.push(((n >> (3 * 6)) & 0x07) | 0xF0);
                r.push(((n >> (2 * 6)) & 0x3F) | 0x80);
                r.push(((n >> (1 * 6)) & 0x3F) | 0x80);
                r.push(((n >> (0 * 6)) & 0x3F) | 0x80);
            } else if (n >= 0x00200000 && n <= 0x03FFFFFF) {
                r.push(((n >> (4 * 6)) & 0x03) | 0xF8);
                r.push(((n >> (3 * 6)) & 0x3F) | 0x80);
                r.push(((n >> (2 * 6)) & 0x3F) | 0x80);
                r.push(((n >> (1 * 6)) & 0x3F) | 0x80);
                r.push(((n >> (0 * 6)) & 0x3F) | 0x80);
            } else if (n >= 0x04000000 && n <= 0x7FFFFFFF) {
                r.push(((n >> (5 * 6)) & 0x01) | 0xFC);
                r.push(((n >> (4 * 6)) & 0x3F) | 0x80);
                r.push(((n >> (3 * 6)) & 0x3F) | 0x80);
                r.push(((n >> (2 * 6)) & 0x3F) | 0x80);
                r.push(((n >> (1 * 6)) & 0x3F) | 0x80);
                r.push(((n >> (0 * 6)) & 0x3F) | 0x80);
            }
        }
        return r;
    }

    /**
     * Fix offset lines of sourcemap when compiling javascript dynamically.
     * 
     * @param {string} content The javascript content.
     * @param {number} offsetLines Offset lines of sourcemap.
     * @returns {string}
     */
    function inlineSourceMap (
        content,
        offsetLines
    ) {
        var r = [];
        var k = "";
        var g = /(\/\/[@#]\s+sourceMappingURL[^,]*,)([^\n]*)/i;
        var c = content;
        for (var
            i = 0;
            i < offsetLines;
            i++
        ) {
            k += ";";
        }
        for (var
            h;
            h = c.match(g);
            c = c.slice((h.index || 0) + h[0].length)
        ) {
            var t = h[2];
            try {
                var n = JSON.parse(decodeUTF8(encodeBASE64(t)));
                var m = n.mappings;
                if (m) {
                    n.mappings = k + m;
                }
                t = decodeBASE64(encodeUTF8(JSON.stringify(n)));
            } catch (_) {
                // DO NOTHING
            }
            r.push(c.slice(0, h.index), h[1], t);
        }
        return r.push(c), r.join("");
    }

    var httpContent = {
        /** @type {"application/octet-stream"} */
        OCTET_STREAM: "application/octet-stream",
        /** @type {"application/x-msdownload"} */
        X_MSDOWNLOAD: "application/x-msdownload",
        /** @type {"application/x-www-form-urlencoded"} */
        FORM: "application/x-www-form-urlencoded",
        /** @type {"application/json"} */
        JSON: "application/json",
        /** @type {"multipart/form-data"} */
        MULT: "multipart/form-data",
        /** @type {"text/plain"} */
        TEXT: "text/plain",
    };

    /**
     * Returns true if the sequence of elements of searchString converted to a String is the
     * same as the corresponding elements of this object (converted to a String) starting at
     * position. Otherwise returns false.
     * 
     * @param {string} argc Base string.
     * @param {string} value String to search for.
     * @param {number} [position] Search starting position.
     * @returns {boolean}
     */
    function startsWith (
        argc,
        value,
        position
    ) {
        for (var
            i = 0,
            p = position || 0,
            l = value.length;
            i < l;
            i++
        ) {
            if (value.charAt(i) !== argc.charAt(p + i)) {
                return false;
            }
        }
        return true;
    }

    var isHeaders = skrinkSerializer(
        /**
         * 
         * Determines if the input parameter is a Headers.
         * 
         * @param {any} argc Any object.
         * @returns {argc is Headers}
         */
        function (
            argc
        ) {
            return isInstanceOf(argc, globalThis.Headers);
        }
    );

    var isJsonContent = skrinkSerializer(
        /**
         * 
         * @param {string | Headers | null | undefined} argc 
         */
        function (
            argc
        ) {
            return (function (argc) { return argc ? startsWith(argc.toLowerCase(), httpContent.JSON) : false; }(isHeaders(argc) ? argc.get(httpHeader.CONTENT_TYPE) : argc));
        }
    );

    var isFunction = skrinkSerializer(
        /**
         * 
         * Determines if the input parameter is a function.
         * 
         * @param {any} argc Any object.
         * @returns {argc is Kylin.BasicFunc}
         */
        function (
            argc
        ) {
            return typeof argc === "function";
        }
    );

    /**
     * 
     * Returns the class name of the specified object.
     * 
     * @param {any} argc The object whose class name needs to be queried.
     * @returns {string}
     */
    function className (
        argc
    ) {
        return Object.prototype.toString.call(argc).slice(8, -1);
    }

    var isObject = skrinkSerializer(
        /**
         * 
         * Determines if the input parameter is an object, exclude null.
         * 
         * @param {any} argc Any object.
         * @param {boolean} [strict] Indicates if it is a strict object. 
         * @returns {argc is object}
         */
        function (
            argc,
            strict
        ) {
            return strict ? className(argc) === "Object" : !isNull(argc) && typeof argc === "object";
        }
    );

    function NOOP () { /** DO NOTHING */ }

    var definition = {
        /** @type {"br"} */
        BR: "br",
        /** @type {"hex"} */
        HEX: "hex",
        /** @type {"md5"} */
        MD5: "md5",
        /** @type {"gzip"} */
        GZIP: "gzip",
        /** @type {"utf8"} */
        UTF8: "utf8",
        /** @type {"ascii"} */
        ASCII: "ascii",
        /** @type {"base64"} */
        BASE64: "base64",
        /** @type {"latin1"} */
        LATIN1: "latin1",
        /** @type {"sha256"} */
        SHA256: "sha256",
        /** @type {"deflate"} */
        DEFLATE: "deflate",
        /** @type {"pending"} */
        PENDING: "pending",
        /** @type {"rejected"} */
        REJECTED: "rejected",
        /** @type {"fulfilled"} */
        RESOLVED: "fulfilled",
        /** @type {"development"} */
        DEVELOPMENT: "development",
        /** @type {"https:"} */
        HTTPS: "https:",
        /** @type {"http:"} */
        HTTP: "http:",
    };

    var setTimeout = globalThis.setTimeout;

    var setImmediate = globalThis.setImmediate || globalThis.requestAnimationFrame || function ( /** @type {any} */ argc) { return setTimeout(argc, 1000 / 60); };

    /**
     * 
     * Returns a method property descriptor.
     * 
     * @param {Yarla.Object<T, Yarla.BasicFunc>} argc A function. 
     * @param {boolean} [enumerable] Indicates whether the property is enumerable.
     * @returns {Yarla.NormalPropertyDescriptor<Yarla.Object<T, Yarla.BasicFunc>>}
     * @template T
     */
    function generateMethodDescriptor (
        argc,
        enumerable
    ) {
        return generateNormalDescriptor(skrinkSerializer(argc), enumerable);
    }

    /**
     * 
     * @param {Yarla.BasicFunc} argc 
     * @param {Yarla.Proto<any>} constructor 
     * @returns {Yarla.BasicFunc}
     */
    function legalSerializer (
        argc,
        constructor
    ) {
        return skrinkSerializer(
            /**
             * @this {any}
             */
            function () {
                if (this instanceof constructor) {
                    return argc.apply(this, arguments);
                }
                throw new TypeError(message.ILLEGAL_INVOCATION);
            }
        );
    }

    /**
     * 
     * @param {PropertyDescriptorMap} argc 
     * @param {Yarla.Proto<any>} constructor 
     * @returns {PropertyDescriptorMap}
     */
    function legalDescriptors (
        argc,
        constructor
    ) {
        /** @type {PropertyDescriptorMap} */
        var descriptors = {};
        for (var i in argc) {
            /** @type {PropertyDescriptor} */
            var os = {};
            var sn = argc[i];
            var get = sn.get;
            var set = sn.set;
            var value = sn.value;
            var writable = sn.writable;
            var enumerable = sn.enumerable;
            var configurable = sn.configurable;
            if (typeof writable === "boolean") {
                os.writable = writable;
            }
            if (typeof enumerable === "boolean") {
                os.enumerable = enumerable;
            }
            if (typeof configurable === "boolean") {
                os.configurable = configurable;
            }
            if (typeof get === "function") {
                os.get = legalSerializer(get, constructor);
            }
            if (typeof set === "function") {
                os.set = legalSerializer(set, constructor);
            }
            if ("value" in sn) {
                os.value = typeof value === "function" ? legalSerializer(value, constructor) : value;
            }
            descriptors[i] = os;
        }
        return descriptors;
    }

    /**
     * Adds a property to an object, or modifies attributes of an existing property.
     * 
     * @param {T} argc Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object.
     * @param {Yarla.Object<N, PropertyKey>} property The property name.
     * @param {Yarla.Object<P, PropertyDescriptor>} descriptor Descriptor for the property. It can be for a data property or an accessor property.
     * @returns {Yarla.NonAny<T> & { readonly [K in N]: Yarla.PropertyDescriptorReturns<P>; }}
     * @template T, N, P
     */
    function defineProperty (
        argc,
        property,
        descriptor
    ) {
        // @ts-ignore
        return Object.defineProperty(argc, property, descriptor);
    }

    /**
     * 
     * Instantiate the specified class, and that optionally contains specified properties.
     * 
     * @param {Yarla.Proto<Yarla.Object<T>>} argc Class to be instantiated.
     * @param {Yarla.Object<P, PropertyDescriptorMap>} [properties] JavaScript object that contains one or more property descriptors.
     * @returns {Yarla.NonAny<T> & Yarla.PropertyDescriptorMapReturns<P>}
     * @template T, P
     */
    function createInstance (
        argc,
        properties
    ) {
        return Object.create(argc.prototype, properties || {});
    }

    /**
     * Sets the prototype of a specified object.
     * 
     * @param {any} argc The object to change its prototype.
     * @param {object | null} proto The value of the new prototype or null.
     * @returns {any}
     */
    function setPrototypeOf (
        argc,
        proto
    ) {
        // @ts-ignore
        // eslint-disable-next-line es/no-object-setprototypeof
        if (Object.setPrototypeOf) {
            // @ts-ignore
            // eslint-disable-next-line es/no-object-setprototypeof
            return Object.setPrototypeOf(argc, proto);
        }
        return defineProperty(argc, "__proto__", generateNormalDescriptor(proto));
    }

    /**
     * 
     * Returns a pseudorandom string.
     * 
     * @param {number} length The length of string.
     * @param {number} radix The system of numeration.
     * @returns {string}
     */
    function pseudoRandomString (
        length,
        radix
    ) {
        return Math.floor((1 + Math.random()) * Math.pow(radix, length)).toString(radix).slice(1);
    }

    var Symbol = (function (Symbol, exports) {
        return defineProperties(Symbol, {
            for: generateNormalDescriptor(
                Symbol.for || skrinkSerializer(
                    /**
                     * 
                     * @param {string} key 
                     * @returns {symbol}
                     */
                    function (
                        key
                    ) {
                        return exports[key] = exports[key] || Symbol(key);
                    }
                )
            ),
        });
    }(globalThis.Symbol || skrinkSerializer(
        /**
         * 
         * @param {string | number} [description] 
         * @returns {any}
         */
        function (
            description
        ) {
            return "[[" + description + ":" + pseudoRandomString(6, 36) + "]]";
        }
    ), {}));

    /**
     * 
     * Create a class.
     * 
     * @param {Yarla.Object<T, Yarla.BasicFunc>} constructor The class constructor.
     * @param {Yarla.Object<P, PropertyDescriptorMap>} properties JavaScript object that contains one or more descriptor objects. Each descriptor object describes a data property or an accessor property.
     * @param {Yarla.Object<S, Yarla.Proto>} superClass The super class of the class.
     * @param {string} [name] The class name.
     * @returns {Yarla.ClassFunc<Yarla.Parameters<T>, Yarla.InstanceType<T> & Yarla.PropertyDescriptorMapReturns<P> & Yarla.InstanceType<S>>}
     * @template T, P, S
     */
    function generateClass (
        constructor,
        properties,
        superClass,
        name
    ) {
        /** @type {Yarla.Proto<any>} */
        var WrapConstructor = skrinkSerializer(
            /**
             * @this {any}
             */
            function () {
                if (this instanceof WrapConstructor) {
                    return constructor.apply(defineProperty(this, Symbol.for("Yarla.Super.constructor"), generateNormalDescriptor(WrapConstructor)), arguments);
                }
                throw new Error(message.FAILED_TO_CONSTRUCT_INSPANCE);
            }
        );
        // @ts-ignore
        WrapConstructor.prototype = defineProperties(createInstance(superClass, {
            constructor: generateNormalDescriptor(WrapConstructor),
        }), legalDescriptors(properties, WrapConstructor));
        if (name) {
            defineProperty(WrapConstructor, "name", generateNormalDescriptor(name, false, true));
            if (Symbol.toStringTag) {
                defineProperty(WrapConstructor.prototype, Symbol.toStringTag, generateNormalDescriptor(name, false, true));
            }
        }
        // @ts-ignore
        return setPrototypeOf(WrapConstructor, superClass);
    }

    /**
     * Returns the prototype of an object.
     * 
     * @param {any} argc The object that references the prototype.
     * @returns {any}
     */
    function getPrototypeOf (
        argc
    ) {
        // @ts-ignore
        // eslint-disable-next-line es/no-object-setprototypeof
        if (Object.setPrototypeOf) {
            // @ts-ignore
            return Object.getPrototypeOf(argc);
        }
        return argc.__proto__ || Object.getPrototypeOf(argc);
    }

    /**
     * 
     * Resolve a property expression. Returns the property array.
     * 
     * @param {string} argc A property expression.
     * @returns {Array<string | number>}
     */
    function divideExpression (
        argc
    ) {
        var t = "";
        var r = [];
        for (var
            i = 0,
            e = 0,
            o = 0,
            a = 48,
            b = 57,
            inSquare = false,
            isNumber = false,
            l = argc.length;
            i < l;
            i++
        ) {
            var c = argc.charAt(i);
            if (c === "\\") {
                if (i + 1 < l && (
                    argc.charAt(i + 1) === "." ||
                    argc.charAt(i + 1) === "[" ||
                    argc.charAt(i + 1) === "]")
                ) {
                    t += argc.charAt(++i);
                } else {
                    t += c;
                }
            } else if (c === ".") {
                if (t) {
                    r.push(t);
                    t = "";
                }
            } else if (c === "[") {
                if (t) {
                    r.push(t);
                    t = "";
                }
                inSquare = true;
                isNumber = false;
            } else if (c === "]") {
                if (!isNumber) {
                    throw new Error(message.MUST_HAVE_NUMBER_IN_SQUARE + ": " + argc);
                }
                inSquare = false;
                r.push(o);
                o = 0;
            } else if (inSquare) {
                e = c.charCodeAt(0);
                if (e < a || e > b) {
                    throw new Error(message.ONLY_NUMBERS_COULD_INSIDE_SQUARE + ": " + argc);
                }
                isNumber = true;
                o = 10 * o + e - a;
            } else {
                t += c;
            }
        }
        if (t) {
            r.push(t);
        }
        if (r.length === 0) {
            throw new Error(message.EXPRESSION_CAN_NOT_BE_EMPTY);
        }
        return r;
    }

    /**
     * Determines whether an object has a property with the specified name.
     * 
     * @param {any} argc An object.
     * @param {PropertyKey} property A property name.
     * @returns {boolean}
     */
    function hasOwnProperty (
        argc,
        property
    ) {
        return Object.prototype.hasOwnProperty.call(argc, property);
    }

    var isString = skrinkSerializer(
        /**
         * 
         * Determines if the input parameter is a string.
         * 
         * @param {any} argc Any object.
         * @returns {argc is string}
         */
        function (
            argc
        ) {
            return typeof argc === "string" || isInstanceOf(argc, String);
        }
    );

    var has = skrinkSerializer(
        /**
         * 
         * Determines whether an object contains the specified property.
         * 
         * @param {any} argc An object.
         * @param {Yarla.PropertyExpr} expr The property expression.
         * @returns {boolean}
         */
        function (
            argc,
            expr
        ) {
            var t = argc;
            for (var
                i = 0,
                s = isString(expr) ? divideExpression(expr) : expr,
                l = s.length;
                i < l;
                i++
            ) {
                if (!isReference(t) ||
                    !hasOwnProperty(t, s[i])) {
                    return false;
                }
                t = t[s[i]];
            }
            return true;
        }
    );

    var get = skrinkSerializer(
        /**
         * 
         * Returns the value of a specified property of an object.
         *  
         * @param {any} argc An object.
         * @param {Yarla.PropertyExpr} expr The property expression.
         * @param {T} [defaultValue] The default value when the value is null or undefined. 
         * @returns {T}
         * @template T
         */
        function (
            argc,
            expr,
            defaultValue
        ) {
            var t = argc;
            for (var
                i = 0,
                s = isString(expr) ? divideExpression(expr) : expr,
                l = s.length;
                i < l;
                i++
            ) {
                if (isNullOrUndefined(t)) {
                    t = void 0;
                    break;
                }
                t = t[s[i]];
            }
            if (isNullOrUndefined(t) && arguments.length > 2) {
                t = defaultValue;
            }
            return t;
        }
    );

    var set = skrinkSerializer(
        /**
         * 
         * Sets the value of a specified property of an object.
         * 
         * @param {any} argc An object.
         * @param {Yarla.PropertyExpr} expr The property expression.
         * @param {T} value The value of the specified property of an object.
         * @returns {T}
         * @template T
         */
        function (
            argc,
            expr,
            value
        ) {
            var t = argc, p;
            for (var
                i = 0,
                m = argc,
                s = isString(expr) ? divideExpression(expr) : expr,
                l = s.length;
                i < l;
                i++
            ) {
                var n = s[i];
                if (isNumber(n)) {
                    if (!isArray(m)) {
                        if (i === 0) {
                            throw new Error(message.TARGET_MUST_BE_AN_ARRAY);
                        } else {
                            // @ts-ignore
                            m = t[p] = [];
                        }
                    }
                } else {
                    if (!isObject(m)) {
                        if (i === 0) {
                            throw new Error(message.TARGET_MUST_BE_AN_OBJECT);
                        } else {
                            // @ts-ignore
                            m = t[p] = {};
                        }
                    }
                }
                p = n;
                t = m;
                m = t[p];
            }
            return isNullOrUndefined(p) ? value : t[p] = value;
        }
    );

    var WeakMap = (function (WeakMap) {
        return WeakMap = WeakMap || generateClass(
            /**
             * 
             * @this {WeakMap}
             * @param {ReadonlyArray<[object, any]>} [entries]
             */
            function (entries) {
                defineProperty(this, "k", generateNormalDescriptor(Symbol("WeakMap")));
                if (entries) {
                    for (var
                        i = 0,
                        l = entries.length;
                        i < l;
                        i++
                    ) {
                        this.set(entries[i][0], entries[i][1]);
                    }
                }
                return this;
            },
            {
                delete: generateMethodDescriptor(
                    /**
                     *
                     * @this {any}
                     * @param {object} key
                     * @returns {boolean}
                     */
                    function (key) {
                        return hasOwnProperty(key, this.k) ? delete key[this.k] : false;
                    }
                ),
                has: generateMethodDescriptor(
                    /**
                     *
                     * @this {any}
                     * @param {object} key
                     * @returns {boolean}
                     */
                    function (key) {
                        return hasOwnProperty(key, this.k);
                    }
                ),
                get: generateMethodDescriptor(
                    /**
                     *
                     * @this {any}
                     * @param {object} key
                     * @returns {any}
                     */
                    function (key) {
                        return hasOwnProperty(key, this.k) ? key[this.k] : void 0;
                    }
                ),
                set: generateMethodDescriptor(
                    /**
                     *
                     * @this {any}
                     * @param {object} key
                     * @param {any} value
                     * @returns {WeakMap}
                     */
                    function (key, value) {
                        return defineProperty(key, this.k, generateNormalDescriptor(value)), this;
                    }
                ),
            },
            NOOP
        );
    }(globalThis.WeakMap));

    var Reflect = (function () {
        /**
         *
         * @param {any} target
         * @param {Yarla.PropertyExpr} expr
         * @returns {boolean}
         */
        function _has(
            target,
            expr
        ) {
            return maps.has(target) ? has(maps.get(target), expr) : false;
        }
        /**
         *
         * @param {any} argc
         * @param {Yarla.PropertyExpr} expr
         * @returns {any}
         */
        function _get(
            argc,
            expr
        ) {
            if (maps.has(argc)) {
                return get(maps.get(argc), expr);
            }
            throw new Error(message.ILLEGAL_INVOCATION);
        }
        /**
         *
         * @param {any} target
         * @param {Yarla.PropertyExpr} expr
         * @param {T} value
         * @returns {T}
         * @template T
         */
        function _set(
            target,
            expr,
            value
        ) {
            var item;
            if (maps.has(target)) {
                item = maps.get(target);
            } else {
                maps.set(target, item = {});
            }
            return set(item, expr, value);
        }
        /**
         *
         * @param {any} target
         * @returns {boolean}
         */
        function _delete(
            target
        ) {
            return maps.delete(target);
        }
        /**
         * 
         * @param {any} target
         * @param {PropertyKey} [propertyKey]
         * @returns {any}
         */
        function _getInternal(
            target,
            propertyKey
        ) {
            return _get(target, expr.INTERNAL.concat(isNullOrUndefined(propertyKey) ? [] : [propertyKey]));
        }
        /**
         * 
         * @param {any} target
         * @param {PropertyKey} [propertyKey]
         * @returns {boolean}
         */
        function _hasInternal(
            target,
            propertyKey
        ) {
            return _has(target, expr.INTERNAL.concat(isNullOrUndefined(propertyKey) ? [] : [propertyKey]));
        }
        /**
         *
         * @param {T} target
         * @param {any} value
         * @param {PropertyKey} [propertyKey]
         * @returns {T}
         * @template T
         */
        function _defineInternal(
            target,
            value,
            propertyKey
        ) {
            return _set(target, expr.INTERNAL.concat(isNullOrUndefined(propertyKey) ? [] : [propertyKey]), value), target;
        }
        /**
         * 
         * @param {any} target
         * @param {PropertyKey} [metadataKey]
         * @returns {any}
         */
        function _getMetadata(
            target,
            metadataKey
        ) {
            return _get(target, expr.METADATA.concat(isNullOrUndefined(metadataKey) ? [] : [metadataKey]));
        }
        /**
         * 
         * @param {any} target
         * @param {PropertyKey} [metadataKey]
         * @returns {boolean}
         */
        function _hasMetadata(
            target,
            metadataKey
        ) {
            return _has(target, expr.METADATA.concat(isNullOrUndefined(metadataKey) ? [] : [metadataKey]));
        }
        /**
         *
         * @param {T} target
         * @param {any} value
         * @param {PropertyKey} [metadataKey]
         * @returns {T}
         * @template T
         */
        function _defineMetadata(
            target,
            value,
            metadataKey
        ) {
            return _set(target, expr.METADATA.concat(isNullOrUndefined(metadataKey) ? [] : [metadataKey]), value), target;
        }
        /**
         *
         * @param {Yarla.Object<T>} argc
         * @param {Yarla.PropertyExpr} expr
         * @param {(this: Yarla.Object<T>) => R} initialize
         * @returns {R}
         * @template T, R
         */
        function _once(
            argc,
            expr,
            initialize
        ) {
            var item;
            if (maps.has(argc)) {
                item = maps.get(argc);
            } else {
                maps.set(argc, item = {});
            }
            if (has(item, expr)) {
                return get(item, expr);
            }
            return set(item, expr, initialize.call(argc));
        }
        /**
         * 
         * @param {Yarla.Proto} constructor 
         * @param {any} internalValue 
         * @returns {any}
         */
        function _construct(
            constructor,
            internalValue
        ) {
            return _defineInternal(createInstance(constructor), internalValue);
        }
        /**
         * 
         * @param {Yarla.Object<T, ArrayLike<number>>} target 
         * @param {number} [bit] 
         * @returns {T}
         * @template T
         */
        function _initTyped(
            target,
            bit
        ) {
            for (var
                i = 0,
                l = target.length;
                i < l;
                i++
            ) {
                defineProperty(target, i, function (i) {
                    return {
                        enumerable: true,
                        get: skrinkSerializer(
                            /**
                             * @this {any}
                             */
                            function () {
                                return _getInternal(this)[i] & (bit || 0xFF);
                            }
                        ),
                        set: skrinkSerializer(
                            /**
                             * @this {any}
                             */
                            function (v) {
                                return _getInternal(this)[i] = (bit || 0xFF) & v;
                            }
                        ),
                    };
                }(i));
            }
            // @ts-ignore
            return Object.seal(target);
        }
        /**
         * 
         * @param {any} target 
         * @returns {any}
         */
        function _callSuper(
            target
        ) {
            return (function (constructor) {
                return skrinkSerializer(
                    /**
                     * @this {any}
                     */
                    function () {
                        return Reflect ? Reflect.construct(constructor, arguments, getPrototypeOf(this).constructor) : constructor.apply(this, arguments);
                    }
                );
            }(getPrototypeOf(get(target, [Symbol.for("Yarla.Super.constructor")])))).apply(target, flat(arguments, 1));
        }
        var maps = new WeakMap();
        var expr = {
            /** @type {ReadonlyArray<PropertyKey>} */
            IE: [Symbol.for("Yarla.IE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            IP: [Symbol.for("Yarla.IP")],
            /** @type {ReadonlyArray<PropertyKey>} */
            UA: [Symbol.for("Yarla.UA")],
            /** @type {ReadonlyArray<PropertyKey>} */
            BODY: [Symbol.for("Yarla.BODY")],
            /** @type {ReadonlyArray<PropertyKey>} */
            HOST: [Symbol.for("Yarla.HOST")],
            /** @type {ReadonlyArray<PropertyKey>} */
            QUEUE: [Symbol.for("Yarla.QUEUE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            RANGE: [Symbol.for("Yarla.RANGE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            STATE: [Symbol.for("Yarla.STATE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            THROW: [Symbol.for("Yarla.THROW")],
            /** @type {ReadonlyArray<PropertyKey>} */
            VALUE: [Symbol.for("Yarla.VALUE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            LENGTH: [Symbol.for("Yarla.LENGTH")],
            /** @type {ReadonlyArray<PropertyKey>} */
            METHOD: [Symbol.for("Yarla.METHOD")],
            /** @type {ReadonlyArray<PropertyKey>} */
            ORIGIN: [Symbol.for("Yarla.ORIGIN")],
            /** @type {ReadonlyArray<PropertyKey>} */
            SEARCH: [Symbol.for("Yarla.SEARCH")],
            /** @type {ReadonlyArray<PropertyKey>} */
            COOKIES: [Symbol.for("Yarla.COOKIES")],
            /** @type {ReadonlyArray<PropertyKey>} */
            HEADERS: [Symbol.for("Yarla.HEADERS")],
            /** @type {ReadonlyArray<PropertyKey>} */
            REFERER: [Symbol.for("Yarla.REFERER")],
            /** @type {ReadonlyArray<PropertyKey>} */
            VERSION: [Symbol.for("Yarla.VERSION")],
            /** @type {ReadonlyArray<PropertyKey>} */
            BOUNDARY: [Symbol.for("Yarla.BOUNDARY")],
            /** @type {ReadonlyArray<PropertyKey>} */
            METADATA: [Symbol.for("Yarla.METADATA")],
            /** @type {ReadonlyArray<PropertyKey>} */
            MIMETYPE: [Symbol.for("Yarla.MIMETYPE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            PATHNAME: [Symbol.for("Yarla.PATHNAME")],
            /** @type {ReadonlyArray<PropertyKey>} */
            PROTOCOL: [Symbol.for("Yarla.PROTOCOL")],
            /** @type {ReadonlyArray<PropertyKey>} */
            ENCODING: [Symbol.for("Yarla.ENCODING")],
            /** @type {ReadonlyArray<PropertyKey>} */
            LANGUAGE: [Symbol.for("Yarla.LANGUAGE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            INTERNAL: [Symbol.for("Yarla.INTERNAL")],
            /** @type {ReadonlyArray<PropertyKey>} */
            INSTANCE: [Symbol.for("Yarla.INSTANCE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            RENDERER: [Symbol.for("Yarla.RENDERER")],
            /** @type {ReadonlyArray<PropertyKey>} */
            VALIDATE: [Symbol.for("Yarla.VALIDATE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            CLASS_MANAGER: [Symbol.for("Yarla.CLASS.MANAGER")],
            /** @type {ReadonlyArray<PropertyKey>} */
            EVENT_CAPTURE: [Symbol.for("Yarla.EVENT.CAPTURE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            EVENT_GENERAL: [Symbol.for("Yarla.EVENT.GENERAL")],
            /** @type {ReadonlyArray<PropertyKey>} */
            EVENT_OBSERVE: [Symbol.for("Yarla.EVENT.OBSERVE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            STOP_AFTERWARD: [Symbol.for("Yarla.STOP.AFTERWARD")],
            /** @type {ReadonlyArray<PropertyKey>} */
            STOP_IMMEDIATE: [Symbol.for("Yarla.STOP.IMMEDIATE")],
            /** @type {ReadonlyArray<PropertyKey>} */
            TICK_PREVENTED: [Symbol.for("Yarla.TICK.PREVENTED")],
        };
        var Reflect = globalThis.Reflect;
        return {
            get expr() {
                return expr;
            },
            has: skrinkSerializer(_has),
            get: skrinkSerializer(_get),
            set: skrinkSerializer(_set),
            delete: skrinkSerializer(_delete),
            getInternal: skrinkSerializer(_getInternal),
            hasInternal: skrinkSerializer(_hasInternal),
            defineInternal: skrinkSerializer(_defineInternal),
            getMetadata: skrinkSerializer(_getMetadata),
            hasMetadata: skrinkSerializer(_hasMetadata),
            defineMetadata: skrinkSerializer(_defineMetadata),
            once: skrinkSerializer(_once),
            construct: skrinkSerializer(_construct),
            initTyped: skrinkSerializer(_initTyped),
            callSuper: skrinkSerializer(_callSuper),
            BASE: skrinkSerializer(
                function () {
                    throw new Error(message.ILLEGAL_CONSTRUCTOR);
                }
            ),
        };
    }());

    var Promise$1 = (function (Promise) {
        return Promise = Promise || defineProperties(generateClass(
            /**
             * 
             * @this {any}
             * @param {Yarla.BasicFunc} processor 
             */
            function (processor) {
                Reflect.set(this, Reflect.expr.STATE, definition.PENDING);
                Reflect.set(this, Reflect.expr.VALUE, void 0);
                Reflect.set(this, Reflect.expr.THROW, true);
                Reflect.set(this, Reflect.expr.QUEUE, []);
                try {
                    processor(
                        fixed(this, definition.RESOLVED),
                        fixed(this, definition.REJECTED));
                } catch (error) {
                    solve(this, definition.REJECTED, error);
                }
                return this;
            },
            {
                finally: generateMethodDescriptor(
                    /**
                     * 
                     * @this {PromiseLike<any>}
                     * @param {Yarla.BasicFunc} onfinally 
                     */
                    function (onfinally) {
                        return this.then(
                            function (value) { return Promise.resolve(onfinally()).then(function () { return value; }); },
                            function (error) { return Promise.resolve(onfinally()).then(function () { throw error; }); });
                    }
                ),
                catch: generateMethodDescriptor(
                    /**
                     * 
                     * @this {PromiseLike<any>}
                     * @param {Yarla.BasicFunc} onrejected 
                     */
                    function (onrejected) {
                        return this.then(null, onrejected);
                    }
                ),
                then: generateMethodDescriptor(
                    /**
                     * 
                     * @this {any}
                     * @param {Yarla.BasicFunc} onresolved 
                     * @param {Yarla.BasicFunc} onrejected 
                     */
                    function (onresolved, onrejected) {
                        var item = new Promise(NOOP);
                        var done = onresolved || function (value) { return value; };
                        var fail = onrejected || function (error) { throw error; };
                        Reflect.set(this, Reflect.expr.THROW, false);
                        switch (Reflect.get(this, Reflect.expr.STATE)) {
                            case definition.PENDING:
                                Reflect.get(this, Reflect.expr.QUEUE).push(item, done, fail);
                                break;
                            case definition.RESOLVED:
                                track(item, Reflect.get(this, Reflect.expr.VALUE), done);
                                break;
                            case definition.REJECTED:
                                track(item, Reflect.get(this, Reflect.expr.VALUE), fail);
                                break;
                        }
                        return item;
                    }
                ),
            },
            NOOP
        ), {
            resolve: generateMethodDescriptor(
                /**
                 * 
                 * @param {any} value 
                 */
                function (value) {
                    return new Promise(function (resolve) { resolve(value); });
                }
            ),
            reject: generateMethodDescriptor(
                /**
                 * 
                 * @param {any} error 
                 */
                function (error) {
                    return new Promise(function (_, reject) { reject(error); });
                }
            ),
            race: generateMethodDescriptor(
                /**
                 * 
                 * @param {ReadonlyArray<any>} tasks 
                 */
                function (tasks) {
                    return new Promise(function (resolve, reject) {
                        if (tasks.length > 0) {
                            tasks.forEach(function (value) {
                                Promise.resolve(value).then(resolve, reject);
                            });
                        } else {
                            resolve(void 0);
                        }
                    });
                }
            ),
            all: generateMethodDescriptor(
                /**
                 * 
                 * @param {ReadonlyArray<any>} tasks 
                 */
                function (tasks) {
                    return new Promise(function (resolve, reject) {
                        if (tasks.length > 0) {
                            var n = 0;
                            var l = tasks.length;
                            var r = new Array(l);
                            tasks.forEach(function (value, i) {
                                Promise.resolve(value).then(function (value) {
                                    r[i] = value;
                                    if (++n === l) {
                                        resolve(r);
                                    }
                                }, reject);
                            });
                        } else {
                            resolve([]);
                        }
                    });
                }
            ),
        });
        /**
         *
         * @param {PromiseLike<any>} target
         * @param {"pending" | "rejected" | "fulfilled"} state
         */
        function fixed(target, state) {
            return skrinkSerializer(function (value) {
                solve(target, state, value);
            });
        }
        /**
         *
         * @param {PromiseLike<any>} target
         * @param {"pending" | "rejected" | "fulfilled"} state
         * @param {any} value
         */
        function solve(target, state, value) {
            if (Reflect.get(target, Reflect.expr.STATE) === definition.PENDING) {
                if (target === value) {
                    state = definition.REJECTED;
                    value = new Error(message.PROMISE_RESOLVED_WITH_ITSELF);
                } else if (isInstanceOf(value, Promise)) {
                    if (Reflect.get(value, Reflect.expr.STATE) === definition.PENDING) {
                        return void value.then(
                            fixed(target, definition.RESOLVED),
                            fixed(target, definition.REJECTED)
                        );
                    }
                    Reflect.set(value, Reflect.expr.THROW, false);
                    state = Reflect.get(value, Reflect.expr.STATE);
                    value = Reflect.get(value, Reflect.expr.VALUE);
                } else if (isObject(value) && isFunction(value.then)) {
                    if (!(Reflect.has(value, Reflect.expr.STATE)) ||
                        !(Reflect.has(value, Reflect.expr.VALUE)) ||
                        !(Reflect.get(value, Reflect.expr.STATE) !== definition.PENDING)) {
                        return void value.then(
                            fixed(target, definition.RESOLVED),
                            fixed(target, definition.REJECTED)
                        );
                    }
                    state = Reflect.get(value, Reflect.expr.STATE);
                    value = Reflect.get(value, Reflect.expr.VALUE);
                }
                Reflect.set(target, Reflect.expr.STATE, state);
                Reflect.set(target, Reflect.expr.VALUE, value);
                var m = Reflect.get(target, Reflect.expr.QUEUE);
                var l = m.length;
                while (m.length > 0) {
                    var item = m.shift();
                    var done = m.shift();
                    var fail = m.shift();
                    switch (state) {
                        case definition.RESOLVED:
                            track(item, value, done);
                            break;
                        case definition.REJECTED:
                            track(item, value, fail);
                            break;
                    }
                }
                if (l === 0 && state === definition.REJECTED) {
                    setImmediate(function () {
                        if (Reflect.get(target, Reflect.expr.THROW)) {
                            throw Reflect.get(target, Reflect.expr.VALUE);
                        }
                    });
                }
            }
        }
        /**
         *
         * @param {PromiseLike<any>} target
         * @param {any} value
         * @param {Yarla.BasicFunc} apply
         */
        function track(target, value, apply) {
            try {
                solve(target, definition.RESOLVED, apply.call(null, value));
            } catch (error) {
                solve(target, definition.REJECTED, error);
            }
        }
    }(globalThis.Promise));

    var isNullOrEmptyString = skrinkSerializer(
        /**
         * 
         * Determines if the input parameter is null or undefined or an empty string.
         * 
         * @param {any} argc Any object.
         * @returns {argc is null | undefined | ""}
         */
        function (
            argc
        ) {
            return isNullOrUndefined(argc) || argc === "";
        }
    );

    var isNullOrEmptyArray = skrinkSerializer(
        /**
         * 
         * Determines if the input parameter is null or undefined or an empty array.
         * 
         * @param {any} argc Any object.
         * @returns {argc is null | undefined | ""}
         */
        function (
            argc
        ) {
            return isNullOrUndefined(argc) || isArray(argc) && argc.length === 0;
        }
    );

    var isURLSearchParams = skrinkSerializer(
        /**
         * 
         * Determines if the input parameter is a URLSearchParams.
         * 
         * @param {any} argc Any object.
         * @returns {argc is URLSearchParams}
         */
        function (
            argc
        ) {
            return isInstanceOf(argc, globalThis.URLSearchParams);
        }
    );

    var isArrayBufferView = skrinkSerializer(
        /**
         * 
         * Determines if the input parameter is a ArrayBufferView.
         * 
         * @param {any} argc Any object.
         * @returns {argc is ArrayBufferView}
         */
        function (
            argc
        ) {
            var ArrayBuffer = globalThis.ArrayBuffer;
            if (ArrayBuffer) {
                if (isFunction(ArrayBuffer.isView)) {
                    return ArrayBuffer.isView(argc);
                }
            }
            return isInstanceOf(argc, globalThis.Int8Array)
                || isInstanceOf(argc, globalThis.Uint8Array)
                || isInstanceOf(argc, globalThis.Uint8ClampedArray)
                || isInstanceOf(argc, globalThis.Int16Array)
                || isInstanceOf(argc, globalThis.Uint16Array)
                || isInstanceOf(argc, globalThis.Int32Array)
                || isInstanceOf(argc, globalThis.Uint32Array)
                || isInstanceOf(argc, globalThis.Float32Array)
                || isInstanceOf(argc, globalThis.Float64Array)
                || isInstanceOf(argc, globalThis.BigInt64Array)
                || isInstanceOf(argc, globalThis.BigUint64Array)
                || isInstanceOf(argc, globalThis.DataView);
        }
    );

    var isArrayBuffer = skrinkSerializer(
        /**
         * 
         * Determines if the input parameter is a ArrayBufferLike.
         * 
         * @param {any} argc Any object.
         * @returns {argc is ArrayBufferLike}
         */
        function (
            argc
        ) {
            return isInstanceOf(argc, globalThis.ArrayBuffer) || isInstanceOf(argc, globalThis.SharedArrayBuffer);
        }
    );

    var isFormData = skrinkSerializer(
        /**
         * 
         * Determines if the input parameter is a FormData.
         * 
         * @param {any} argc Any object.
         * @returns {argc is FormData}
         */
        function (
            argc
        ) {
            return isInstanceOf(argc, globalThis.FormData);
        }
    );

    var isBoolean = skrinkSerializer(
        /**
         * 
         * Determines if the input parameter is a boolean.
         * 
         * @param {any} argc Any object.
         * @returns {argc is boolean}
         */
        function (
            argc
        ) {
            return typeof argc === "boolean" || isInstanceOf(argc, Boolean);
        }
    );

    var trampoline = skrinkSerializer(
        /**
         * 
         * Returns a trampoline function that resolves recursive functions exceeding the maximum call stack size.
         * 
         * @param {Yarla.Object<T, Yarla.BasicFunc>} argc A recursive function.
         * @returns {T}
         * @template T
         */
        function (argc) {
            var r;
            var ended = true;
            var accumulated = [];
            return /** @type {any} */ (skrinkSerializer(
                /**
                 * 
                 * @this {any}
                 */
                function () {
                    accumulated.push(flat(arguments));
                    if (ended) {
                        ended = false;
                        while (accumulated.length > 0) {
                            r = argc.apply(this, accumulated.shift());
                        }
                        ended = true;
                        return r;
                    }
                }
            ));
        }
    );

    var merge = skrinkSerializer(
        /**
         * 
         * Add or modify properties from the specified object.
         * 
         * @param {T} arg1 The target object.
         * @param {U} arg2 The source object.
         * @param {boolean} [deep] Indicates whether to deeply traverse the object.
         * @param {boolean} [onlyValid] Indicates whether to add or modify only valid properties.
         * @returns {T & U}
         * @template T, U
         */
        function (
            arg1,
            arg2,
            deep,
            onlyValid
        ) {
            var f = trampoline(
                function (p, k, v) {
                    var s = p;
                    if (!isNullOrUndefined(k)) {
                        if (!isObject(p[k])) {
                            p[k] = isArray(v) ? [] : {};
                        }
                        s = p[k];
                    }
                    for (var n in v) {
                        var d = v[n];
                        if (deep && isObject(d)) {
                            f(s, n, d);
                        } else if (!onlyValid || isValid(d)) {
                            s[n] = d;
                        }
                    }
                }
            );
            f(arg1, null, arg2);
            // @ts-ignore
            return arg1;
        }
    );

    var defaults = skrinkSerializer(
        /**
         * 
         * Add non-existing properties to object from the queues object.
         * 
         * @param {any} argc The target object.
         * @returns {any}
         */
        function (
            argc
        ) {
            for (var
                i = 0,
                s = flat(arguments, 1, Infinity, true),
                l = s.length;
                i < l;
                i++
            ) {
                merge(argc, s[i], false, true);
            }
            return argc;
        }
    );

    var decodeURIComponent = globalThis.decodeURIComponent;

    var encodeURIComponent = globalThis.encodeURIComponent;

    var isBigInt = skrinkSerializer(
        /**
         * 
         * Determines if the input parameter is a bigint.
         * 
         * @param {any} argc Any object.
         * @returns {argc is bigint}
         */
        function (
            argc
        ) {
            return typeof argc === "bigint" || className(argc) === "BigInt";
        }
    );

    var isSymbol = skrinkSerializer(
        /**
         * 
         * Determines if the input parameter is a symbol.
         * 
         * @param {any} argc Any object.
         * @returns {argc is symbol}
         */
        function (
            argc
        ) {
            return typeof argc === "symbol" || className(argc) === "Symbol";
        }
    );

    var pattern = {
        URL: /^[A-Za-z][A-Za-z0-9]*:\/\/[^\s]*$/,
        DATE: /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/,
        TIME: /^(?:[01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/,
        IPV4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
        IPV6: /^(?:(?:[0-9A-Fa-f]{1,4}:){7}(?:[0-9A-Fa-f]{1,4}|:)|(?:[0-9A-Fa-f]{1,4}:){6}(?:(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])|:[0-9A-Fa-f]{1,4}|:)|(?:[0-9A-Fa-f]{1,4}:){5}(?::(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])|(?::[0-9A-Fa-f]{1,4}){1,2}|:)|(?:[0-9A-Fa-f]{1,4}:){4}(?:(?::[0-9A-Fa-f]{1,4}){0,1}:(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])|(?::[0-9A-Fa-f]{1,4}){1,3}|:)|(?:[0-9A-Fa-f]{1,4}:){3}(?:(?::[0-9A-Fa-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])|(?::[0-9A-Fa-f]{1,4}){1,4}|:)|(?:[0-9A-Fa-f]{1,4}:){2}(?:(?::[0-9A-Fa-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])|(?::[0-9A-Fa-f]{1,4}){1,5}|:)|(?:[0-9A-Fa-f]{1,4}:){1}(?:(?::[0-9A-Fa-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])|(?::[0-9A-Fa-f]{1,4}){1,6}|:)|(?::(?:(?::[0-9A-Fa-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])|(?::[0-9A-Fa-f]{1,4}){1,7}|:)))(?:%[0-9A-Za-z]{1,20})?$/,
        BLANK: /^\s*$/,
        EMAIL: /^\w+(?:[-+.]\w+)*@\w+(?:[-.]\w+)*\.\w+(?:[-.]\w+)*$/,
        PHONE: /^1[3-9][0-9]{9}$/,
        DIGIT: /^[-]?(?:(?:0|[1-9][0-9]{0,9})(?:\.[0-9]*)?|\.[0-9]+)$/,
        ENGLISH: /^[A-Za-z]+$/,
        CHINESE: /^[\u4e00-\u9fa5]+$/,
        USERNAME: /^[A-Za-z][\w]*$/,
        PASSWORD: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
        DATETIME: /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)T(?:[01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]\.[0-9]{3}Z$/,
    };

    var queries = {
        parse: skrinkSerializer(
            /**
             * 
             * @param {string} argc 
             * @returns {any}
             */
            function (
                argc
            ) {
                var r;
                for (var
                    i = 0,
                    s = argc.replace(/^[#?]+/, "").split("&"),
                    l = s.length;
                    i < l;
                    i++
                ) {
                    var n = s[i];
                    var d = n.indexOf("=");
                    if (d === -1) {
                        continue;
                    }
                    var k = divideExpression(decodeURIComponent(n.slice(0, d)));
                    /** @type {any} */
                    var v = decodeURIComponent(n.slice(d + 1));
                    if (isNullOrUndefined(r)) {
                        r = isNumber(k[0]) ? [] : {};
                    }
                    if (v === "null") {
                        v = null;
                    } else if (v === "true") {
                        v = true;
                    } else if (v === "false") {
                        v = false;
                    } else if (pattern.DIGIT.test(v)) {
                        v = Number(v);
                    } else if (pattern.DATETIME.test(v)) {
                        v = new Date(v);
                    }
                    set(r, k, v);
                }
                return r || {};
            }
        ),
        serialize: skrinkSerializer(
            /**
             * 
             * @param {any} argc 
             * @returns {string}
             */
            function serialize(
                argc
            ) {
                return (function serialize(prefix, argc) {
                    var r = [], k, n;
                    var a = isArray(argc);
                    if (a || isObject(argc)) {
                        for (var p in argc) {
                            if (a) {
                                k = prefix + "[" + p + "]";
                            } else if (prefix.length === 0 || prefix.slice(-1) === "]") {
                                k = prefix + p;
                            } else {
                                k = prefix + "." + p;
                            }
                            n = argc[p];
                            if (isUndefined(n)) {
                                continue;
                            }
                            if (isNull(n)) {
                                r.push(encodeURIComponent(k) + "=" + "null");
                            } else if (isDate(n)) {
                                r.push(encodeURIComponent(k) + "=" + encodeURIComponent(n.toJSON()));
                            } else if (isNumber(n) || isString(n) || isBoolean(n) || isBigInt(n) || isSymbol(n)) {
                                r.push(encodeURIComponent(k) + "=" + encodeURIComponent(n.toString()));
                            } else if (isObject(n)) {
                                r = r.concat(serialize(k, n));
                            }
                        }
                    }
                    return r;
                }("", argc)).join("&");
            }
        ),
    };

    var isBasic = skrinkSerializer(
        /**
         * 
         * Determines if the input parameter is basic type.
         * 
         * @param {any} argc Any object.
         * @returns {argc is number | string | boolean | bigint | symbol | null | undefined}
         */
        function (
            argc
        ) {
            return !isReference(argc);
        }
    );

    var isBlob = skrinkSerializer(
        /**
         * 
         * Determines if the input parameter is a Blob.
         * 
         * @param {any} argc Any object.
         * @returns {argc is Blob}
         */
        function (
            argc
        ) {
            return isInstanceOf(argc, globalThis.Blob);
        }
    );

    /**
     * 
     * Compare strings ignoring case.
     * 
     * @param {string} arg1 One string.
     * @param {string} arg2 Two string.
     * @returns {boolean}
     */
    function compareIgnoreCase (
        arg1,
        arg2
    ) {
        return arg1.length === arg2.length && arg1.toLowerCase() === arg2.toLowerCase();
    }

    var isIterable = skrinkSerializer(
        /**
         * 
         * @param {any} argc 
         * @returns {argc is Iterable<any>}
         */
        function (
            argc
        ) {
            return isSymbol(Symbol.iterator) && isFunction(get(argc, [Symbol.iterator]));
        }
    );

    var entries = skrinkSerializer(
        /**
         * 
         * Returns an array of key/value of the enumerable properties of an object.
         * 
         * @param {any} argc Object that contains the properties and methods.
         * @param {boolean} [inherit] Indicates whether to return the key/values of the inherited properties and methods.
         * @returns {ReadonlyArray<readonly [string, any]>}
         */
        function (
            argc,
            inherit
        ) {
            var r = [], n;
            if (isIterable(argc)) {
                for (var
                    i = 0,
                    // eslint-disable-next-line es/no-array-from
                    s = Array.from(argc),
                    l = s.length;
                    i < l;
                    i++
                ) {
                    n = s[i];
                    if (isArray(n)) {
                        r.push(n);
                    }
                }
            } else if (isObject(argc) && isFunction(argc.forEach)) {
                argc.forEach(function (v, k) {
                    r.push([k, v]);
                });
            } else {
                for (n in argc) {
                    if (inherit || hasOwnProperty(argc, n)) {
                        r.push([n, argc[n]]);
                    }
                }
            }
            // @ts-ignore
            return r;
        }
    );

    var values = skrinkSerializer(
        /**
         * 
         * Returns an array of values of the enumerable properties of an object.
         * 
         * @param {any} argc Object that contains the properties and methods.
         * @param {boolean} [inherit] Indicates whether to return the values of the inherited properties and methods.
         * @returns {ReadonlyArray<any>}
         */
        function (
            argc,
            inherit
        ) {
            var r = [];
            for (var n in argc) {
                if (inherit || hasOwnProperty(argc, n)) {
                    r.push(argc[n]);
                }
            }
            return r;
        }
    );

    var keys = skrinkSerializer(
        /**
         * 
         * Returns the names of the enumerable string properties and methods of an object.
         * 
         * @param {any} argc Object that contains the properties and methods.
         * @param {boolean} [inherit] Indicates whether to return the names of the inherited properties and methods.
         * @returns {ReadonlyArray<string>}
         */
        function (
            argc,
            inherit
        ) {
            var r = [];
            for (var n in argc) {
                if (inherit || hasOwnProperty(argc, n)) {
                    r.push(n);
                }
            }
            return r;
        }
    );

    var KVPair = generateClass(
        /**
         * 
         * @this {Yarla.KVPair}
         * @param {Readonly<Yarla.AnyObject<T>> | boolean} [source] 
         * @param {boolean} [ignoreCase] 
         * @template T
         */
        function (
            source,
            ignoreCase
        ) {
            Reflect.defineInternal(this, {}, "source");
            if (isObject(source)) {
                Reflect.defineInternal(this, !!ignoreCase, "ignoreCase");
                for (var
                    i = 0,
                    s = entries(source),
                    l = s.length;
                    i < l;
                    i++
                ) {
                    this.set(s[i][0], s[i][1]);
                }
            } else {
                Reflect.defineInternal(this, !!source, "ignoreCase");
            }
        },
        {
            clear: generateMethodDescriptor(
                /**
                 * 
                 * @this {Yarla.KVPair}
                 */
                function () {
                    Reflect.getInternal(this).source = {};
                }
            ),
            delete: generateMethodDescriptor(
                /**
                 * 
                 * @this {Yarla.KVPair}
                 * @param {string} key 
                 */
                function (
                    key
                ) {
                    /**
                     * @type {{ readonly ignoreCase: boolean; readonly source: Yarla.AnyObject; }}
                     */
                    var own = Reflect.getInternal(this);
                    if (hasOwnProperty(own.source, key)) {
                        return delete own.source[key];
                    }
                    if (own.ignoreCase) {
                        for (var name in own.source) {
                            if (compareIgnoreCase(name, key)) {
                                return delete own.source[name];
                            }
                        }
                    }
                    return false;
                }
            ),
            get: generateMethodDescriptor(
                /**
                 * 
                 * @this {Yarla.KVPair}
                 * @param {string} key 
                 */
                function (
                    key
                ) {
                    /**
                     * @type {{ readonly ignoreCase: boolean; readonly source: Yarla.AnyObject; }}
                     */
                    var own = Reflect.getInternal(this);
                    if (hasOwnProperty(own.source, key)) {
                        return own.source[key];
                    }
                    if (own.ignoreCase) {
                        for (var name in own.source) {
                            if (compareIgnoreCase(name, key)) {
                                return own.source[name];
                            }
                        }
                    }
                }
            ),
            set: generateMethodDescriptor(
                /**
                 * 
                 * @this {Yarla.KVPair}
                 * @param {string} key 
                 * @param {any} value 
                 */
                function (
                    key,
                    value
                ) {
                    /**
                     * @type {{ readonly ignoreCase: boolean; readonly source: Yarla.AnyObject; }}
                     */
                    var own = Reflect.getInternal(this);
                    if (hasOwnProperty(own.source, key)) {
                        return own.source[key] = value, this;
                    }
                    if (own.ignoreCase) {
                        for (var name in own.source) {
                            if (compareIgnoreCase(name, key)) {
                                return own.source[name] = value, this;
                            }
                        }
                    }
                    return own.source[key] = value, this;
                }
            ),
            has: generateMethodDescriptor(
                /**
                 * 
                 * @this {Yarla.KVPair}
                 * @param {string} key 
                 */
                function (
                    key
                ) {
                    /**
                     * @type {{ readonly ignoreCase: boolean; readonly source: Yarla.AnyObject; }}
                     */
                    var own = Reflect.getInternal(this);
                    if (hasOwnProperty(own.source, key)) {
                        return true;
                    }
                    if (own.ignoreCase) {
                        for (var name in own.source) {
                            if (compareIgnoreCase(name, key)) {
                                return true;
                            }
                        }
                    }
                    return false;
                }
            ),
            keys: generateMethodDescriptor(
                /**
                 * @this {Yarla.KVPair}
                 */
                function () {
                    return keys(Reflect.getInternal(this).source);
                }
            ),
            values: generateMethodDescriptor(
                /**
                 * @this {Yarla.KVPair}
                 */
                function () {
                    return values(Reflect.getInternal(this).source);
                }
            ),
            entries: generateMethodDescriptor(
                /**
                 * @this {Yarla.KVPair}
                 */
                function () {
                    return entries(Reflect.getInternal(this).source);
                }
            ),
            forEach: generateMethodDescriptor(
                /**
                 * @this {Yarla.KVPair}
                 * @param {(value: any, key: string) => void} callback 
                 * @param {any} thisArg 
                 */
                function (
                    callback,
                    thisArg
                ) {
                    /**
                     * @type {{ readonly ignoreCase: boolean; readonly source: Yarla.AnyObject; }}
                     */
                    var own = Reflect.getInternal(this);
                    for (var name in own.source) {
                        callback.call(thisArg || this, own.source[name], name);
                    }
                }
            ),
            toJSON: generateMethodDescriptor(
                /**
                 * @this {Yarla.KVPair}
                 */
                function () {
                    return Reflect.getInternal(this).source;
                }
            ),
        },
        NOOP,
        "KVPair"
    );

    var http = nodeRequire("http");

    var https = nodeRequire("https");

    var stream = nodeRequire("stream");

    /**
     * 
     * Returns a getter property descriptor.
     * 
     * @param {() => T} argc The getter of the property descriptor.
     * @param {boolean} [enumerable] Indicates whether the property is enumerable.
     * @returns {Yarla.GetterPropertyDescriptor<T>}
     * @template T
     */
    function generateGetterDescriptor (
        argc,
        enumerable
    ) {
        return {
            configurable: true,
            enumerable: !!enumerable,
            get: skrinkSerializer(argc),
        };
    }

    var ReadableStream = (function (ReadableStream) {
        return defineProperties(ReadableStream, {
            from: generateMethodDescriptor(
                /**
                 * 
                 * @param {import("stream").Readable} nodeStream 
                 * @param {"bytes"} [type]
                 */
                function (
                    nodeStream,
                    type
                ) {
                    return new ReadableStream({
                        // @ts-ignore
                        type: type,
                        cancel: function (reason) {
                            nodeStream.destroy(reason);
                        },
                        start: function (controller) {
                            nodeStream.on("close", function () {
                                if (!nodeStream.readableEnded) {
                                    controller.error(new Error(message.STREAM_CLOSED_BEFORE_ENDING));
                                }
                            });
                            nodeStream.on("error", function (reason) {
                                controller.error(reason);
                            });
                            nodeStream.on("data", function (chunk) {
                                controller.enqueue(chunk);
                                nodeStream.pause();
                            });
                            nodeStream.on("end", function () {
                                controller.close();
                            });
                        },
                        pull: function () {
                            nodeStream.resume();
                        },
                    });
                }
            ),
        });
    }(globalThis.ReadableStream || generateClass(function () {
        throw new Error(message.NOT_SUPPORTED);
    }, {
        locked: generateGetterDescriptor(
            function () {
                throw new Error(message.NOT_SUPPORTED);
            }
        ),
        cancel: generateMethodDescriptor(
            function () {
                throw new Error(message.NOT_SUPPORTED);
            }
        ),
        getReader: generateMethodDescriptor(
            function () {
                throw new Error(message.NOT_SUPPORTED);
            }
        ),
        pipeThrough: generateMethodDescriptor(
            function () {
                throw new Error(message.NOT_SUPPORTED);
            }
        ),
        pipeTo: generateMethodDescriptor(
            function () {
                throw new Error(message.NOT_SUPPORTED);
            }
        ),
        tee: generateMethodDescriptor(
            function () {
                throw new Error(message.NOT_SUPPORTED);
            }
        ),
    }, NOOP, "ReadableStream")));

    var isTextContent = skrinkSerializer(
        /**
         * 
         * @param {string | Headers | null | undefined} argc 
         */
        function (
            argc
        ) {
            return (function (argc) { return argc ? startsWith(argc.toLowerCase(), httpContent.TEXT) : false; }(isHeaders(argc) ? argc.get(httpHeader.CONTENT_TYPE) : argc));
        }
    );

    var salt = skrinkSerializer(
        /**
         * 
         * Returns a URL-safe random string.
         * 
         * @param {number} [size] The length of the string, default 8.
         * @returns {string}
         */
        function (
            size
        ) {
            var r = [];
            for (var
                i = 0,
                l = size || 8;
                i < l;
                i++
            ) {
                r.push(BTOA[Math.random() * 62 | 0]);
            }
            return fromCharCode(r);
        }
    );

    /**
     * 
     * Convert the specified bytes to the specified bit.
     * 
     * @param {ArrayLike<number>} argc A bytes.
     * @param {number} sourceBit Source bit of the bytes.
     * @param {number} targetBit Target bit of the bytes.
     * @returns {ReadonlyArray<number>}
     */
    function bitConvert (
        argc,
        sourceBit,
        targetBit
    ) {
        var r = [];
        var z = 0;
        var l = argc.length;
        for (var
            i = 0;
            i < l;
            i++
        ) {
            if (argc[i] !== 0) {
                break;
            }
            z++;
        }
        z = Math.min(z, l - 1);
        while ((l = argc.length) > 0) {
            var quotient = [];
            var remainder = 0;
            for (var
                i = 0;
                i < l;
                i++
            ) {
                var total = argc[i] + remainder * sourceBit;
                var digit = Math.floor(total / targetBit);
                remainder = Math.floor(total % targetBit);
                if (digit > 0 || quotient.length > 0) {
                    quotient.push(digit);
                }
            }
            r.push(remainder);
            argc = quotient;
        }
        for (var
            i = 0;
            i < z;
            i++
        ) {
            r.push(0);
        }
        return r.reverse();
    }

    /**
     * 
     * Decodes a bytes to hex string.
     * 
     * @param {ArrayLike<number>} argc A bytes.
     * @returns {string}
     */
    function decodeHEX (
        argc
    ) {
        var r = [];
        for (var
            i = 0,
            l = argc.length;
            i < l;
            i++
        ) {
            var n = argc[i] & 0xFF;
            if (n < 0x10) {
                r.push("0" + n.toString(16));
            } else {
                r.push(n.toString(16));
            }
        }
        return r.join("");
    }

    /**
     * 
     * Decodes a bytes to ascii string.
     * 
     * @param {ArrayLike<number>} argc A bytes.
     * @returns {string}
     */
    function decodeASCII (
        argc
    ) {
        var r = [];
        for (var
            i = 0,
            l = argc.length;
            i < l;
            i++
        ) {
            r.push(argc[i] & 0x7F);
        }
        return fromCharCode(r);
    }

    /**
     * 
     * @param {ArrayLike<number>} argc 
     * @param {"hex" | "ascii" | "base64" | "latin1" | "utf8"} [encoding] 
     * @returns {string}
     */
    function decode (
        argc,
        encoding
    ) {
        if (encoding === definition.HEX) {
            return decodeHEX(argc);
        }
        if (encoding === definition.ASCII) {
            return decodeASCII(argc);
        }
        if (encoding === definition.BASE64) {
            return decodeBASE64(argc);
        }
        if (encoding === definition.LATIN1) {
            return decodeLATIN1(argc);
        }
        return decodeUTF8(argc);
    }

    /**
     * 
     * Encodes a hex string to bytes.
     * 
     * @param {string} argc A hex string.
     * @returns {ReadonlyArray<number>}
     */
    function encodeHEX (
        argc
    ) {
        var r = [];
        for (var
            i = 0,
            l = argc.length;
            i < l;
            i += 2
        ) {
            var n = parseInt(argc.slice(i, i + 2), 16);
            if (n > 0) {
                r.push(n);
            }
        }
        return r;
    }

    /**
     * 
     * Encodes a ascii string to bytes.
     * 
     * @param {string} argc A ascii string.
     * @returns {ReadonlyArray<number>}
     */
    function encodeASCII (
        argc
    ) {
        var r = [];
        for (var
            i = 0,
            l = argc.length;
            i < l;
            i++
        ) {
            var n = argc.charCodeAt(i);
            if (n > 0x7F) {
                throw new Error(message.CHARACTER_IS_OUTSIDE_THE_BOUNDS_OF_ASCII);
            }
            r.push(n);
        }
        return r;
    }

    /**
     * 
     * @param {string} argc 
     * @param {"hex" | "ascii" | "base64" | "latin1" | "utf8"} [encoding] 
     * @returns {ReadonlyArray<number>}
     */
    function encode (
        argc,
        encoding
    ) {
        if (encoding === definition.HEX) {
            return encodeHEX(argc);
        }
        if (encoding === definition.ASCII) {
            return encodeASCII(argc);
        }
        if (encoding === definition.BASE64) {
            return encodeBASE64(argc);
        }
        if (encoding === definition.LATIN1) {
            return encodeLATIN1(argc);
        }
        return encodeUTF8(argc);
    }

    var Uint8Array = (function (Uint8Array) {
        return Uint8Array = Uint8Array || generateClass(
            /**
             * 
             * @this {Uint8Array}
             * @param {number | number[]} [argc] 
             */
            function (argc) {
                if (isArray(argc)) {
                    Reflect.defineInternal(this, Object.seal(Array.apply(null, new Array(argc.length)).map(function (_, i) { return argc[i] & 0xFF; })));
                } else {
                    Reflect.defineInternal(this, Object.seal(Array.apply(null, new Array(Math.floor(argc || 0))).map(function () { return 0 & 0xFF; })));
                }
                return Reflect.initTyped(this);
            },
            {
                buffer: generateGetterDescriptor(
                    /**
                     * 
                     * @this {Uint8Array}
                     */
                    function () {
                        throw new Error(message.NOT_SUPPORTED);
                    }
                ),
                byteOffset: generateGetterDescriptor(
                    /**
                     * 
                     * @this {Uint8Array}
                     */
                    function () {
                        throw new Error(message.NOT_SUPPORTED);
                    }
                ),
                byteLength: generateGetterDescriptor(
                    /**
                     * 
                     * @this {Uint8Array}
                     */
                    function () {
                        throw new Error(message.NOT_SUPPORTED);
                    }
                ),
                length: generateGetterDescriptor(
                    /**
                     * 
                     * @this {Uint8Array}
                     */
                    function () {
                        return Reflect.getInternal(this).length;
                    }
                ),
                some: generateMethodDescriptor(
                    /**
                     * 
                     * @this {Uint8Array}
                     * @param {(v: number, i: number) => unknown} callback 
                     * @param {any} [context]
                     */
                    function (
                        callback,
                        context
                    ) {
                        return Reflect.getInternal(this).some(callback, context || this);
                    }
                ),
                every: generateMethodDescriptor(
                    /**
                     * 
                     * @this {Uint8Array}
                     * @param {(v: number, i: number) => unknown} callback 
                     * @param {any} [context]
                     */
                    function (
                        callback,
                        context
                    ) {
                        return Reflect.getInternal(this).every(callback, context || this);
                    }
                ),
                filter: generateMethodDescriptor(
                    /**
                     * 
                     * @this {Uint8Array}
                     * @param {(v: number, i: number) => number} callback 
                     * @param {any} [context]
                     */
                    function (
                        callback,
                        context
                    ) {
                        return new Uint8Array(Reflect.getInternal(this).filter(callback, context || this));
                    }
                ),
                map: generateMethodDescriptor(
                    /**
                     * 
                     * @this {Uint8Array}
                     * @param {(v: number, i: number) => number} callback 
                     * @param {any} [context]
                     */
                    function (
                        callback,
                        context
                    ) {
                        return new Uint8Array(Reflect.getInternal(this).map(callback, context || this));
                    }
                ),
                subarray: generateMethodDescriptor(
                    /**
                     * 
                     * @this {Uint8Array}
                     * @param {number} [start] 
                     * @param {number} [end] 
                     */
                    function (
                        start,
                        end
                    ) {
                        return new Uint8Array(Reflect.getInternal(this).slice(start, end));
                    }
                ),
                join: generateMethodDescriptor(
                    /**
                     * 
                     * @this {Uint8Array}
                     * @param {string} [separator] 
                     */
                    function (separator) {
                        return Reflect.getInternal(this).join(separator);
                    }
                ),
            },
            NOOP
        );
    }(globalThis.Uint8Array));

    var Buffer = (function (Buffer) {
        return Buffer = Buffer || defineProperties(generateClass(Reflect.BASE, {
            buffer: generateGetterDescriptor(
                /**
                 * 
                 * @this {Buffer}
                 */
                function () {
                    return Reflect.getInternal(this).buffer;
                }
            ),
            byteOffset: generateGetterDescriptor(
                /**
                 * 
                 * @this {Buffer}
                 */
                function () {
                    return Reflect.getInternal(this).byteOffset;
                }
            ),
            byteLength: generateGetterDescriptor(
                /**
                 * 
                 * @this {Buffer}
                 */
                function () {
                    return Reflect.getInternal(this).byteLength;
                }
            ),
            length: generateGetterDescriptor(
                /**
                 * 
                 * @this {Buffer}
                 */
                function () {
                    return Reflect.getInternal(this).length;
                }
            ),
            some: generateMethodDescriptor(
                /**
                 * 
                 * @this {Buffer}
                 * @param {(v: number, i: number) => unknown} callback 
                 * @param {any} [context]
                 */
                function (
                    callback,
                    context
                ) {
                    return Reflect.getInternal(this).some(callback, context || this);
                }
            ),
            every: generateMethodDescriptor(
                /**
                 * 
                 * @this {Buffer}
                 * @param {(v: number, i: number) => unknown} callback 
                 * @param {any} [context]
                 */
                function (
                    callback,
                    context
                ) {
                    return Reflect.getInternal(this).every(callback, context || this);
                }
            ),
            filter: generateMethodDescriptor(
                /**
                 * 
                 * @this {Buffer}
                 * @param {(v: number, i: number) => number} callback 
                 * @param {any} [context]
                 */
                function (
                    callback,
                    context
                ) {
                    return Buffer.from(Reflect.getInternal(this).filter(callback, context || this));
                }
            ),
            map: generateMethodDescriptor(
                /**
                 * 
                 * @this {Buffer}
                 * @param {(v: number, i: number) => number} callback 
                 * @param {any} [context]
                 */
                function (
                    callback,
                    context
                ) {
                    return Buffer.from(Reflect.getInternal(this).map(callback, context || this));
                }
            ),
            subarray: generateMethodDescriptor(
                /**
                 * 
                 * @this {Buffer}
                 * @param {number} [start] 
                 * @param {number} [end] 
                 */
                function (
                    start,
                    end
                ) {
                    return Buffer.from(Reflect.getInternal(this).subarray(start, end));
                }
            ),
            join: generateMethodDescriptor(
                /**
                 * 
                 * @this {Buffer}
                 * @param {string} [separator] 
                 */
                function (
                    separator
                ) {
                    return Reflect.getInternal(this).join(separator);
                }
            ),
            readUInt8: generateMethodDescriptor(
                /**
                 * 
                 * @this {Buffer}
                 * @param {number} [offset] 
                 */
                function (
                    offset
                ) {
                    var sn = offset || 0;
                    var mn = this.length;
                    if (sn > mn - 1) {
                        throw new Error(message.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                    }
                    return this[sn];
                }
            ),
            readUInt16BE: generateMethodDescriptor(
                /**
                 * 
                 * @this {Buffer}
                 * @param {number} [offset] 
                 */
                function (
                    offset
                ) {
                    var sn = offset || 0;
                    var mn = this.length;
                    if (sn > mn - 2) {
                        throw new Error(message.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                    }
                    var b1 = this[sn + 0] << 0x08;
                    var b2 = this[sn + 1] << 0x00;
                    return (b1 | b2) >>> 0;
                }
            ),
            readUInt16LE: generateMethodDescriptor(
                /**
                 * 
                 * @this {Buffer}
                 * @param {number} [offset] 
                 */
                function (
                    offset
                ) {
                    var sn = offset || 0;
                    var mn = this.length;
                    if (sn > mn - 2) {
                        throw new Error(message.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                    }
                    var b1 = this[sn + 0] << 0x00;
                    var b2 = this[sn + 1] << 0x08;
                    return (b1 | b2) >>> 0;
                }
            ),
            readUInt32BE: generateMethodDescriptor(
                /**
                 * 
                 * @this {Buffer}
                 * @param {number} [offset] 
                 */
                function (
                    offset
                ) {
                    var sn = offset || 0;
                    var mn = this.length;
                    if (sn > mn - 4) {
                        throw new Error(message.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                    }
                    var b1 = this[sn + 0] << 0x18;
                    var b2 = this[sn + 1] << 0x10;
                    var b3 = this[sn + 2] << 0x08;
                    var b4 = this[sn + 3] << 0x00;
                    return (b1 | b2 | b3 | b4) >>> 0;
                }
            ),
            readUInt32LE: generateMethodDescriptor(
                /**
                 * 
                 * @this {Buffer}
                 * @param {number} [offset] 
                 */
                function (
                    offset
                ) {
                    var sn = offset || 0;
                    var mn = this.length;
                    if (sn > mn - 4) {
                        throw new Error(message.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                    }
                    var b1 = this[sn + 0] << 0x00;
                    var b2 = this[sn + 1] << 0x08;
                    var b3 = this[sn + 2] << 0x10;
                    var b4 = this[sn + 3] << 0x18;
                    return (b1 | b2 | b3 | b4) >>> 0;
                }
            ),
            writeUInt8: generateMethodDescriptor(
                /**
                 * 
                 * @this {Buffer}
                 * @param {number} value 
                 * @param {number} [offset]
                 */
                function (
                    value,
                    offset
                ) {
                    var sn = offset || 0;
                    var mn = this.length;
                    if (sn > mn - 1) {
                        throw new Error(message.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                    }
                    this[sn] = value >> 0x00 & 0xFF;
                    return sn + 1;
                }
            ),
            writeUInt16BE: generateMethodDescriptor(
                /**
                 * 
                 * @this {Buffer}
                 * @param {number} value 
                 * @param {number} [offset]
                 */
                function (
                    value,
                    offset
                ) {
                    var sn = offset || 0;
                    var mn = this.length;
                    if (sn > mn - 2) {
                        throw new Error(message.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                    }
                    this[sn + 0] = value >> 0x08 & 0xFF;
                    this[sn + 1] = value >> 0x00 & 0xFF;
                    return sn + 2;
                }
            ),
            writeUInt16LE: generateMethodDescriptor(
                /**
                 * 
                 * @this {Buffer}
                 * @param {number} value 
                 * @param {number} [offset]
                 */
                function (
                    value,
                    offset
                ) {
                    var sn = offset || 0;
                    var mn = this.length;
                    if (sn > mn - 2) {
                        throw new Error(message.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                    }
                    this[sn + 0] = value >> 0x00 & 0xFF;
                    this[sn + 1] = value >> 0x08 & 0xFF;
                    return sn + 2;
                }
            ),
            writeUInt32BE: generateMethodDescriptor(
                /**
                 * 
                 * @this {Buffer}
                 * @param {number} value 
                 * @param {number} [offset]
                 */
                function (
                    value,
                    offset
                ) {
                    var sn = offset || 0;
                    var mn = this.length;
                    if (sn > mn - 4) {
                        throw new Error(message.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                    }
                    this[sn + 0] = value >> 0x18 & 0xFF;
                    this[sn + 1] = value >> 0x10 & 0xFF;
                    this[sn + 2] = value >> 0x08 & 0xFF;
                    this[sn + 3] = value >> 0x00 & 0xFF;
                    return sn + 4;
                }
            ),
            writeUInt32LE: generateMethodDescriptor(
                /**
                 * 
                 * @this {Buffer}
                 * @param {number} value 
                 * @param {number} [offset]
                 */
                function (
                    value,
                    offset
                ) {
                    var sn = offset || 0;
                    var mn = this.length;
                    if (sn > mn - 4) {
                        throw new Error(message.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                    }
                    this[sn + 0] = value >> 0x00 & 0xFF;
                    this[sn + 1] = value >> 0x08 & 0xFF;
                    this[sn + 2] = value >> 0x10 & 0xFF;
                    this[sn + 3] = value >> 0x18 & 0xFF;
                    return sn + 4;
                }
            ),
            toString: generateMethodDescriptor(
                /**
                 * 
                 * @this {ArrayLike<number>}
                 * @param {"hex" | "ascii" | "base64" | "latin1" | "utf8"} [encoding] 
                 */
                function (
                    encoding
                ) {
                    return decode(this, encoding);
                }
            ),
            toJSON: generateMethodDescriptor(
                /**
                 * 
                 * @this {ArrayLike<number>}
                 */
                function () {
                    return {
                        type: "Buffer",
                        data: flat(this),
                    };
                }
            ),
            valueOf: generateMethodDescriptor(
                /**
                 * 
                 * @this {ArrayLike<number>}
                 */
                function () {
                    return Reflect.getInternal(this);
                }
            ),
        }, Uint8Array, "Buffer"), {
            alloc: generateMethodDescriptor(
                /**
                 * 
                 * @param {number} length 
                 */
                function (
                    length
                ) {
                    return Reflect.initTyped(Reflect.construct(Buffer, new Uint8Array(length)));
                }
            ),
            from: generateMethodDescriptor(
                /**
                 * 
                 * @param {ArrayBufferLike | Uint8Array | ArrayLike<number> | string} sources 
                 * @param {any} [byteOffsetEncoding]
                 * @param {number} [length]
                 */
                function (
                    sources,
                    byteOffsetEncoding,
                    length
                ) {
                    var bytes;
                    if (isInstanceOf(sources, Uint8Array)) {
                        bytes = sources.slice(0);
                    } else if (isArrayBuffer(sources)) {
                        bytes = new Uint8Array(sources, Number(byteOffsetEncoding) || 0, length);
                    } else if (isString(sources)) {
                        bytes = new Uint8Array(encode(sources, byteOffsetEncoding));
                    } else {
                        bytes = new Uint8Array(sources);
                    }
                    return Reflect.initTyped(Reflect.construct(Buffer, bytes));
                }
            ),
            concat: generateMethodDescriptor(
                /**
                 * 
                 * @param {ReadonlyArray<Uint8Array>} sources 
                 */
                function (
                    sources
                ) {
                    var r = [];
                    for (var
                        i = 0,
                        l = sources.length;
                        i < l;
                        i++
                    ) {
                        var t = sources[i];
                        for (var
                            j = 0,
                            m = t.length;
                            j < m;
                            j++
                        ) {
                            r.push(t[j]);
                        }
                    }
                    return Buffer.from(r);
                }
            ),
            compare: generateMethodDescriptor(
                /**
                 * 
                 * @param {ArrayLike<number>} buf1 
                 * @param {ArrayLike<number>} buf2 
                 */
                function (
                    buf1,
                    buf2
                ) {
                    var m = buf1.length;
                    var n = buf2.length;
                    var t;
                    for (var
                        i = 0,
                        l = Math.min(m, n);
                        i < l;
                        i++
                    ) {
                        if (t = buf1[i] - buf2[i]) {
                            return t > 0 ? 1 : -1;
                        }
                    }
                    if (t = m - n) {
                        return t > 0 ? 1 : -1;
                    }
                    return 0;
                }
            ),
            isBuffer: generateMethodDescriptor(
                /**
                 * 
                 * @param {any} argc 
                 */
                function (
                    argc
                ) {
                    return isInstanceOf(argc, Buffer);
                }
            ),
        });
    }(globalThis.Buffer));

    var btoa = skrinkSerializer(
        /**
         * 
         * Encodes a base-encoded string from the specified utf8 string.
         * 
         * @param {string} argc The utf8 string.
         * @param {boolean} [urlSafeEncoding] Indicates whether it is a URL-safe string.
         * @returns {string}
         */
        function (
            argc,
            urlSafeEncoding
        ) {
            return urlSafeEncoding ? encodeBase(bitConvert(Buffer.from(argc, definition.UTF8), 256, 62)) : Buffer.from(argc, definition.UTF8).toString(definition.BASE64);
        }
    );

    /**
     * 
     * @param {ReadonlyArray<number>} argc 
     * @returns {string}
     */
    function encodeBase(
        argc
    ) {
        var r = [];
        for (var
            i = 0,
            l = argc.length;
            i < l;
            i++
        ) {
            r.push(BTOA[argc[i]]);
        }
        return fromCharCode(r);
    }

    var isReadable = skrinkSerializer(
        /**
         * 
         * Determines if the input parameter is a stream.Readable.
         * 
         * @param {any} argc Any object.
         * @returns {argc is Headers}
         */
        function (
            argc
        ) {
            return stream ? isInstanceOf(argc, stream.Readable) : false;
        }
    );

    var httpStatus = {
        100: "Continue",
        101: "Switching Protocols",
        102: "Processing",
        103: "Early Hints",
        200: "OK",
        201: "Created",
        202: "Accepted",
        203: "Non-Authoritative Information",
        204: "No Content",
        205: "Reset Content",
        206: "Partial Content",
        207: "Multi-Status",
        208: "Already Reported",
        226: "IM Used",
        300: "Multiple Choices",
        301: "Moved Permanently",
        302: "Found",
        303: "See Other",
        304: "Not Modified",
        305: "Use Proxy",
        307: "Temporary Redirect",
        308: "Permanent Redirect",
        400: "Bad Request",
        401: "Unauthorized",
        402: "Payment Required",
        403: "Forbidden",
        404: "Not Found",
        405: "Method Not Allowed",
        406: "Not Acceptable",
        407: "Proxy Authentication Required",
        408: "Request Timeout",
        409: "Conflict",
        410: "Gone",
        411: "Length Required",
        412: "Precondition Failed",
        413: "Payload Too Large",
        414: "URI Too Long",
        415: "Unsupported Media Type",
        416: "Range Not Satisfiable",
        417: "Expectation Failed",
        418: "I'm a Teapot",
        421: "Misdirected Request",
        422: "Unprocessable Entity",
        423: "Locked",
        424: "Failed Dependency",
        425: "Too Early",
        426: "Upgrade Required",
        428: "Precondition Required",
        429: "Too Many Requests",
        431: "Request Header Fields Too Large",
        451: "Unavailable For Legal Reasons",
        500: "Internal Server Error",
        501: "Not Implemented",
        502: "Bad Gateway",
        503: "Service Unavailable",
        504: "Gateway Timeout",
        505: "HTTP Version Not Supported",
        506: "Variant Also Negotiates",
        507: "Insufficient Storage",
        508: "Loop Detected",
        509: "Bandwidth Limit Exceeded",
        510: "Not Extended",
        511: "Network Authentication Required",
    };

    var HttpError = generateClass(
        /**
         * 
         * @this {any}
         * @param {number} status 
         * @param {string} [message] 
         */
        function (
            status,
            message
        ) {
            return defineProperties(Reflect.callSuper(this, message || httpStatus[status] || "Unknown"), {
                status: generateNormalDescriptor(status, true, true),
            });
        },
        {
            name: generateNormalDescriptor("HttpError", true, true),
        },
        Error,
        "HttpError"
    );

    var read = skrinkSerializer(
        /**
         * 
         * @param {import("stream").Readable | ReadableStream} readable 
         * @param {number} [maximum] 
         */
        function (
            readable,
            maximum
        ) {
            var l = Math.pow(2, 30) * 4 - 1;
            var m = Math.min(maximum || l, l);
            return new Promise$1(function (resolve, reject) {
                function large() {
                    return b.reduce(function (v, i) { return v + i.length; }, 0) > m;
                }
                /** @type {Array<Uint8Array>} */
                var b = [];
                var s = isReadable(readable) ? ReadableStream.from(readable) : readable;
                var r = s.getReader();
                r.closed.then(function () {
                    if (large()) {
                        throw new HttpError(413);
                    }
                    return Buffer.concat(b);
                }).then(resolve, reject);
                r.read().then(function process(v) {
                    if (v.done) {
                        return;
                    }
                    b.push(v.value);
                    if (large()) {
                        return r.cancel();
                    }
                    return r.read().then(process);
                }).catch(reject);
            });
        }
    );

    var XMLHttpRequest = (function (XMLHttpRequest) {
        return XMLHttpRequest = XMLHttpRequest || defineProperties(generateClass(
            /**
             * 
             * @this {XMLHttpRequest}
             */
            function () {
                return (
                    /**
                     * 
                     * @this {XMLHttpRequest}
                     */
                    function () {
                        return (
                            Reflect.defineInternal(this, 0, "status"),
                            Reflect.defineInternal(this, 0, "timeout"),
                            Reflect.defineInternal(this, null, "req"),
                            Reflect.defineInternal(this, null, "res"),
                            Reflect.defineInternal(this, null, "method"),
                            Reflect.defineInternal(this, null, "username"),
                            Reflect.defineInternal(this, null, "password"),
                            Reflect.defineInternal(this, null, "response"),
                            Reflect.defineInternal(this, "", "statusText"),
                            Reflect.defineInternal(this, "", "responseURL"),
                            Reflect.defineInternal(this, "", "responseType"),
                            Reflect.defineInternal(this, new KVPair(true), "reqHeaders"),
                            Reflect.defineInternal(this, new KVPair(true), "resHeaders"),
                            Reflect.defineInternal(this, XMLHttpRequest.UNSENT, "readyState"));
                    }
                ).call(Reflect.callSuper(this));
            },
            {
                timeout: {
                    enumerable: true,
                    configurable: true,
                    get: skrinkSerializer(
                        /**
                         * 
                         * @this {XMLHttpRequest}
                         * @returns {number}
                         */
                        function () {
                            return Reflect.getInternal(this).timeout;
                        }
                    ),
                    set: skrinkSerializer(
                        /**
                         * 
                         * @this {XMLHttpRequest}
                         * @param {number} value
                         */
                        function (value) {
                            return Reflect.getInternal(this).timeout = value;
                        }
                    ),
                },
                responseType: {
                    enumerable: true,
                    configurable: true,
                    get: skrinkSerializer(
                        /**
                         * 
                         * @this {XMLHttpRequest}
                         * @returns {"" | "arraybuffer" | "blob" | "json" | "text"}
                         */
                        function () {
                            return Reflect.getInternal(this).responseType;
                        }
                    ),
                    set: skrinkSerializer(
                        /**
                         * 
                         * @this {XMLHttpRequest}
                         * @param {"" | "arraybuffer" | "blob" | "json" | "text"} value
                         */
                        function (value) {
                            return Reflect.getInternal(this).responseType = value;
                        }
                    ),
                },
                status: generateGetterDescriptor(
                    /**
                     * 
                     * @this {XMLHttpRequest}
                     * @returns {number}
                     */
                    function () {
                        return Reflect.getInternal(this).status;
                    }
                ),
                statusText: generateGetterDescriptor(
                    /**
                     * 
                     * @this {XMLHttpRequest}
                     * @returns {string}
                     */
                    function () {
                        return Reflect.getInternal(this).statusText;
                    }
                ),
                readyState: generateGetterDescriptor(
                    /**
                     * 
                     * @this {XMLHttpRequest}
                     * @returns {number}
                     */
                    function () {
                        return Reflect.getInternal(this).readyState;
                    }
                ),
                response: generateGetterDescriptor(
                    /**
                     * 
                     * @this {XMLHttpRequest}
                     * @returns {any}
                     */
                    function () {
                        return Reflect.getInternal(this).response;
                    }
                ),
                responseURL: generateGetterDescriptor(
                    /**
                     * 
                     * @this {XMLHttpRequest}
                     * @returns {string}
                     */
                    function () {
                        return Reflect.getInternal(this).responseURL;
                    }
                ),
                setRequestHeader: generateMethodDescriptor(
                    /**
                     * 
                     * @this {XMLHttpRequest}
                     * @param {string} name 
                     * @param {string} value 
                     */
                    function (
                        name,
                        value
                    ) {
                        if (this.readyState !== XMLHttpRequest.OPENED) {
                            throw new Error(message.ONLY_BE_CALLED_WHEN_STATE_IS_OPEN);
                        }
                        Reflect.getInternal(this).reqHeaders.set(name, value);
                    }
                ),
                getResponseHeader: generateMethodDescriptor(
                    /**
                     * 
                     * @this {XMLHttpRequest}
                     * @param {string} name 
                     * @returns {string | null}
                     */
                    function (
                        name
                    ) {
                        return Reflect.getInternal(this).resHeaders.get(name);
                    }
                ),
                getAllResponseHeaders: generateMethodDescriptor(
                    /**
                     * 
                     * @this {XMLHttpRequest} 
                     * @returns {string}
                     */
                    function () {
                        return Reflect.getInternal(this).resHeaders.entries().map(function (i) { return i[0] + ":" + String(i[1]); }).join("\r\n");
                    }
                ),
                abort: generateMethodDescriptor(
                    /**
                     * 
                     * @this {XMLHttpRequest} 
                     */
                    function () {
                        var own = this;
                        var xhr = Reflect.getInternal(own);
                        if (xhr.req) {
                            xhr.req.destroy();
                            xhr.req = null;
                        }
                        if (xhr.res) {
                            xhr.res.destroy();
                            xhr.res = null;
                        }
                        if (xhr.readyState === XMLHttpRequest.LOADING) {
                            xhr.readyState = XMLHttpRequest.DONE;
                            own.dispatchEvent(new Event("abort"));
                        }
                    }
                ),
                open: generateMethodDescriptor(
                    /**
                     * 
                     * @this {XMLHttpRequest}
                     * @param {string} method 
                     * @param {string | URL} href 
                     * @param {boolean} [async] 
                     * @param {string | null} [username] 
                     * @param {string | null} [password] 
                     */
                    function (
                        method,
                        href,
                        async,
                        username,
                        password
                    ) {
                        if (async === false) {
                            throw new Error(message.ONLY_ASYNC_IS_SUPPORTED);
                        }
                        if (this.readyState !== XMLHttpRequest.UNSENT) {
                            throw new Error(message.ONLY_BE_CALLED_WHEN_STATE_IS_UNSENT);
                        }
                        var xhr = Reflect.getInternal(this);
                        xhr.responseURL = new url.URL(href.toString()).href;
                        xhr.readyState = XMLHttpRequest.OPENED;
                        xhr.username = username;
                        xhr.password = password;
                        xhr.method = method;
                    }
                ),
                send: generateMethodDescriptor(
                    /**
                     * 
                     * @this {XMLHttpRequest} 
                     * @param {any} body
                     */
                    function (
                        body
                    ) {
                        var own = this;
                        if (own.readyState !== XMLHttpRequest.OPENED) {
                            throw new Error(message.ONLY_BE_CALLED_WHEN_STATE_IS_OPEN);
                        }
                        function finishTimeout() {
                            xhr.response = new Error(message.TIMEOUT);
                            xhr.readyState = XMLHttpRequest.DONE;
                            own.dispatchEvent(new Event("timeout"));
                        }
                        /**
                         * @param {Error} error 
                         */
                        function finishFailure(error) {
                            xhr.response = error;
                            xhr.readyState = XMLHttpRequest.DONE;
                            own.dispatchEvent(new Event("error"));
                        }
                        /**
                         * @param {any} value 
                         */
                        function finishSuccess(value) {
                            xhr.response = value;
                            xhr.readyState = XMLHttpRequest.DONE;
                            own.dispatchEvent(new Event("load"));
                        }
                        /**
                         * 
                         * @param {import("http").IncomingMessage} res 
                         * @param {string} method 
                         * @param {URL} responseURL 
                         * @param {number} counter 
                         */
                        function solveRedirect(
                            res,
                            method,
                            responseURL,
                            counter
                        ) {
                            var statusCode = res.statusCode;
                            if (statusCode === 301 ||
                                statusCode === 302 ||
                                statusCode === 303 ||
                                statusCode === 307 ||
                                statusCode === 308) {
                                solveDispatch(statusCode === 307 || statusCode === 308 ? method : "GET", new url.URL(res.headers.location || "", responseURL), counter + 1);
                            } else {
                                solveResponse(res, responseURL);
                            }
                        }
                        /**
                         * 
                         * @param {import("http").IncomingMessage} res 
                         * @param {URL} responseURL 
                         */
                        function solveResponse(
                            res,
                            responseURL
                        ) {
                            xhr.res = res;
                            xhr.status = res.statusCode || 200;
                            xhr.statusText = res.statusMessage || "OK";
                            xhr.resHeaders = new KVPair(res.headers, true);
                            xhr.responseURL = responseURL.href;
                            /** @type {Yarla.xhr.ResponseType} */
                            var type = xhr.responseType;
                            if (type === "blob") {
                                return void read(res).then(toBlob).then(finishSuccess, finishFailure);
                            }
                            if (type === "arraybuffer") {
                                return void read(res).then(toBlob).then(toArraybuffer).then(finishSuccess, finishFailure);
                            }
                            if (type === "json" || isJsonContent(res.headers["content-type"])) {
                                return void read(res).then(toText).then(toJson).then(finishSuccess, finishFailure);
                            }
                            if (type === "text" || isTextContent(res.headers["content-type"])) {
                                return void read(res).then(toText).then(finishSuccess, finishFailure);
                            }
                            return finishSuccess(ReadableStream.from(res));
                        }
                        /**
                         * 
                         * @param {string} method 
                         * @param {URL} responseURL 
                         * @param {number} counter 
                         */
                        function solveDispatch(
                            method,
                            responseURL,
                            counter
                        ) {
                            if (counter > 10) {
                                finishFailure(new Error(message.REDIRECT_EXCEEDS_MAXIMUM + ": " + 10));
                                return;
                            }
                            var req = null;
                            var ini = {
                                port: responseURL.port,
                                host: responseURL.hostname,
                                path: responseURL.pathname + responseURL.search,
                                rejectUnauthorized: false,
                                headers: headers.toJSON(),
                                timeout: timeout,
                                method: method,
                            };
                            switch (responseURL.protocol) {
                                case definition.HTTP:
                                    req = http.request(ini, function (res) {
                                        solveRedirect(res, method, responseURL, counter);
                                    });
                                    break;
                                case definition.HTTPS:
                                    req = https.request(ini, function (res) {
                                        solveRedirect(res, method, responseURL, counter);
                                    });
                                    break;
                                default:
                                    finishFailure(new Error(message.INVALID_PROTOCOL + ": " + responseURL.href));
                                    break;
                            }
                            if (req) {
                                req.useChunkedEncodingByDefault = true; //
                                req.once("timeout", finishTimeout);
                                req.once("error", finishFailure);
                                end(req, body, boundary);
                            }
                            xhr.req = req;
                        }
                        var xhr = Reflect.getInternal(own);
                        /** @type {string} */
                        var method = xhr.method || "GET";
                        /** @type {number} */
                        var timeout = xhr.timeout || 1e4;
                        /** @type {string} */
                        var username = xhr.username || "";
                        /** @type {string} */
                        var password = xhr.password || "";
                        /** @type {Yarla.KVPair} */
                        var headers = new KVPair(xhr.reqHeaders, true);
                        /** @type {string} */
                        var boundary = "----YarlaFormBoundary" + salt(16);
                        if (username) {
                            headers.set(httpHeader.AUTHORIZATION, "Basic " + btoa(username + ":" + password));
                        }
                        if (isFormData(body)) {
                            headers.set(httpHeader.CONTENT_TYPE, httpContent.MULT + "; boundary=" + boundary);
                        }
                        if (isURLSearchParams(body)) {
                            headers.set(httpHeader.CONTENT_TYPE, httpContent.FORM);
                        }
                        solveDispatch(method, new url.URL(xhr.responseURL), 0);
                    }
                ),
            },
            EventTarget,
            "XMLHttpRequest"
        ), {
            UNSENT: generateNormalDescriptor(0, true, true),
            OPENED: generateNormalDescriptor(1, true, true),
            HEADERS_RECEIVED: generateNormalDescriptor(2, true, true),
            LOADING: generateNormalDescriptor(3, true, true),
            DONE: generateNormalDescriptor(4, true, true),
        });
        /**
         * 
         * @param {Buffer} argc 
         */
        function toBlob(
            argc
        ) {
            return new globalThis.Blob([argc]);
        }
        /**
         * 
         * @param {Buffer} argc 
         */
        function toText(
            argc
        ) {
            return argc.toString(definition.UTF8);
        }
        /**
         * 
         * @param {string} argc 
         */
        function toJson(
            argc
        ) {
            return argc ? JSON.parse(argc) : null;
        }
        /**
         * 
         * @param {Blob} argc 
         */
        function toArraybuffer(
            argc
        ) {
            return argc.arrayBuffer();
        }
        /**
         * 
         * @param {any} argc 
         * @returns {argc is Blob | File}
         */
        function isChunk(
            argc
        ) {
            return isBlob(argc) || className(argc) === "Blob" || className(argc) === "File";
        }
        /**
         * 
         * @param {import("http").ClientRequest} argc 
         * @param {any} body 
         * @param {string} boundary 
         */
        function end(
            argc,
            body,
            boundary
        ) {
            if (isNullOrUndefined(body)) {
                argc.end();
            } else if (isURLSearchParams(body)) {
                argc.end(body.toString());
            } else if (isFormData(body)) {
                serial(argc, serialize(body, boundary));
            } else if (isBasic(body)) {
                argc.end(String(body));
            } else if (isChunk(body)) {
                body.stream().pipe(argc);
            } else {
                argc.end(body);
            }
        }
        /**
         * 
         * @param {FormData} argc 
         * @param {string} boundary 
         */
        function serialize(
            argc,
            boundary
        ) {
            return entries(argc).map(function (value) {
                var name = value[0];
                var data = value[1];
                var head = "Content-Disposition: form-data; name=\"" + encodeURIComponent(name) + "\"";
                if (isChunk(data)) {
                    if (data.name) {
                        head += "; filename=\"" + encodeURIComponent(data.name) + "\"";
                    }
                    if (data.type) {
                        head += "\r\nContent-Type: " + data.type;
                    } else {
                        head += "\r\nContent-Type: " + httpContent.OCTET_STREAM;
                    }
                }
                return [
                    "--" + boundary + "\r\n",
                    head + "\r\n\r\n",
                    data,
                    "\r\n",
                ];
            }).flat().concat(["--" + boundary + "--"]);
        }
        /**
         * 
         * @param {import("http").ClientRequest} argc 
         * @param {FormDataEntryValue[]} body 
         */
        function serial(
            argc,
            body
        ) {
            var item = body.shift();
            if (item) {
                if (isChunk(item)) {
                    stream.Readable.from(
                        item.stream()
                    ).on("end", function () {
                        process.nextTick(function () {
                            serial(argc, body);
                        });
                    }).on("error", function () {
                        argc.end();
                    }).pipe(argc, {
                        end: false,
                    });
                } else {
                    argc.write(item, function (error) {
                        if (error) {
                            argc.end();
                        } else {
                            process.nextTick(function () {
                                serial(argc, body);
                            });
                        }
                    });
                }
            } else {
                argc.end();
            }
        }
    }(globalThis.XMLHttpRequest));

    var ResponseError = generateClass(
        /**
         * 
         * @this {any}
         * @param {object} init 
         * @param {string} init.url 
         * @param {XMLHttpRequest} init.xhr 
         * @param {Yarla.AnyObject<string | ReadonlyArray<string>>} init.headers 
         * @param {Yarla.xhr.ResponseType} init.responseType 
         * @param {any} init.response 
         * @param {any} init.body 
         * @param {number} status 
         * @param {string} [message] 
         */
        function (
            init,
            status,
            message
        ) {
            return defineProperties(Reflect.callSuper(this, status, message), {
                url: generateNormalDescriptor(init.url, true, true),
                xhr: generateNormalDescriptor(init.xhr, true, true),
                headers: generateNormalDescriptor(init.headers, true, true),
                responseType: generateNormalDescriptor(init.responseType, true, true),
                response: generateNormalDescriptor(init.response, true, true),
                body: generateNormalDescriptor(init.body, true, true),
            });
        },
        {
            name: generateNormalDescriptor("ResponseError", true, true),
        },
        HttpError,
        "ResponseError"
    );

    var Response = defineProperties(generateClass(Reflect.BASE, {
        status: generateGetterDescriptor(
            /**
             * 
             * @this {Yarla.Response<any>}
             * @returns {number}
             */
            function () {
                throw new Error(message.ILLEGAL_INVOCATION);
            }
        ),
        headers: generateGetterDescriptor(
            /**
             * 
             * @this {Yarla.Response<any>}
             * @returns {Yarla.KVPair<string | ReadonlyArray<string>>}
             */
            function () {
                throw new Error(message.ILLEGAL_INVOCATION);
            }
        ),
        responseURL: generateGetterDescriptor(
            /**
             * 
             * @this {Yarla.Response<any>}
             * @returns {string}
             */
            function () {
                throw new Error(message.ILLEGAL_INVOCATION);
            }
        ),
        response: generateGetterDescriptor(
            /**
             * 
             * @this {Yarla.Response<any>}
             * @returns {any}
             */
            function () {
                throw new Error(message.ILLEGAL_INVOCATION);
            }
        ),
    }, NOOP, "Response"), {
        init: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.Proto<Yarla.xhr.Response<T>>}
             * @param {XMLHttpRequest} xhr 
             * @param {string} baseURI 
             * @param {Yarla.xhr.ResponseType} [responseType] 
             * @returns {Yarla.xhr.Response<T>}
             * @template T
             */
            function (
                xhr,
                baseURI,
                responseType
            ) {
                return createInstance(this, {
                    status: generateNormalDescriptor(xhr.status, true, true),
                    responseURL: generateNormalDescriptor(xhr.responseURL || concatUrl(baseURI, xhr.getResponseHeader(httpHeader.X_RESPONSED_URL) || ""), true, true),
                    response: generateNormalDescriptor((function () {
                        try {
                            if ("response" in xhr) {
                                if (responseType === "json") {
                                    if (isString(xhr.response)) {
                                        return xhr.response ? JSON.parse(xhr.response) : null;
                                    }
                                }
                                return xhr.response;
                            }
                            if (responseType === "text") {
                                return xhr.responseText;
                            }
                            if (responseType === "json") {
                                return xhr.responseText ? JSON.parse(xhr.responseText) : null;
                            }
                            if (isJsonContent(xhr.getResponseHeader(httpHeader.CONTENT_TYPE))) {
                                return xhr.responseText ? JSON.parse(xhr.responseText) : null;
                            }
                            return xhr.responseText;
                        } catch (_) {
                            return null;
                        }
                    }()), true, true),
                    headers: generateNormalDescriptor(new KVPair(xhr.getAllResponseHeaders().split(/[\r\n]+/).reduce(function (o, i) {
                        var l = i.indexOf(":");
                        if (l !== -1) {
                            var k = i.slice(0, l).trim().toLowerCase();
                            var v = i.slice(l + 1).trim();
                            if (hasOwnProperty(o, k)) {
                                var n = o[k];
                                if (isArray(n)) {
                                    n.push(v);
                                } else {
                                    o[k] = [n, v];
                                }
                            } else {
                                o[k] = v;
                            }
                        }
                        return o;
                    }, {}), true), true, true),
                });
            }
        ),
    });

    var Request = defineProperties(generateClass(Reflect.BASE, {
        cancel: generateMethodDescriptor(
            /**
             * @this {Yarla.xhr.Request}
             */
            function () {
                var own = Reflect.getInternal(this);
                if (own.xhr) {
                    own.xhr.abort();
                    own.xhr = null;
                }
            }
        ),
        send: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.xhr.Request}
             * @param {any} data 
             * @param {Yarla.xhr.Options} [opts] 
             */
            function (
                data,
                opts
            ) {
                var own = Reflect.getInternal(this);
                /** @type {XMLHttpRequest} */
                var xhr = own.xhr;
                /** @type {Yarla.xhr.API} */
                var api = own.api;
                var url = api.url;
                var mod = api.method;
                return (function (
                    /**
                     * @type {Yarla.xhr.Options}
                     */
                    opts
                ) {
                    return (function (
                        BODY,
                        BASEURI,
                        TIMEOUT,
                        HEADERS,
                        USERNAME,
                        PASSWORD,
                        CREDENTIALS,
                        RESPONSE_TYPE,
                        ON_STARTING,
                        ON_PROGRESS,
                        ON_FINISHED
                    ) {
                        var SEP, RES, TYPE;
                        return new Promise$1(function (resolve, reject) {
                            if (xhr) {
                                xhr.abort();
                            }
                            if (mod === "GET" ||
                                mod === "HEAD" ||
                                mod === "DELETE" ||
                                mod === "OPTIONS") {
                                SEP = url.indexOf("?") === -1 ? "&" : "?";
                                RES = queries.serialize(data);
                                if (RES) {
                                    url += SEP + RES;
                                }
                                data = null;
                            }
                            url = concatUrl(env.BASE_URI, BASEURI || "", url);
                            if (isSerializable(data)) {
                                data = JSON.stringify(data);
                                TYPE = httpContent.JSON;
                            }
                            xhr = own.xhr = new XMLHttpRequest();
                            xhr.open(mod, url, true, USERNAME, PASSWORD);
                            xhr.addEventListener("load", function () {
                                var status = xhr.status || 200;
                                if (status < 200 || status >= 300) {
                                    reject(serializeError(url, xhr, HEADERS || {}, RESPONSE_TYPE || "", data));
                                } else {
                                    resolve(Response.init(xhr, url, RESPONSE_TYPE));
                                }
                                if (isFunction(ON_FINISHED)) {
                                    ON_FINISHED.call(xhr);
                                }
                            });
                            xhr.addEventListener("abort", function () {
                                reject(serializeError(url, xhr, HEADERS || {}, RESPONSE_TYPE || "", data));
                                if (isFunction(ON_FINISHED)) {
                                    ON_FINISHED.call(xhr);
                                }
                            });
                            xhr.addEventListener("error", function () {
                                reject(serializeError(url, xhr, HEADERS || {}, RESPONSE_TYPE || "", data));
                                if (isFunction(ON_FINISHED)) {
                                    ON_FINISHED.call(xhr);
                                }
                            });
                            xhr.addEventListener("timeout", function () {
                                reject(serializeError(url, xhr, HEADERS || {}, RESPONSE_TYPE || "", data));
                                if (isFunction(ON_FINISHED)) {
                                    ON_FINISHED.call(xhr);
                                }
                            });
                            if (xhr.upload) {
                                xhr.upload.addEventListener("progress", function (event) {
                                    if (isFunction(ON_PROGRESS)) {
                                        ON_PROGRESS.call(xhr, {
                                            lengthComputable: event.lengthComputable,
                                            loaded: event.loaded,
                                            total: event.total,
                                        });
                                    }
                                });
                            }
                            xhr.setRequestHeader(httpHeader.X_REQUESTED_WITH, "XMLHttpRequest");
                            if (TYPE) {
                                xhr.setRequestHeader(httpHeader.CONTENT_TYPE, TYPE);
                            }
                            if (HEADERS) {
                                if (!isInstanceOf(HEADERS, KVPair)) {
                                    HEADERS = new KVPair(HEADERS, true);
                                }
                                HEADERS.forEach(function (value, name) {
                                    if (isValidHeaders(value)) {
                                        xhr.setRequestHeader(name, String(value));
                                    }
                                });
                            }
                            if (isNumber(TIMEOUT)) {
                                xhr.timeout = TIMEOUT;
                            }
                            if (isString(RESPONSE_TYPE)) {
                                xhr.responseType = RESPONSE_TYPE;
                            }
                            if (isBoolean(CREDENTIALS)) {
                                xhr.withCredentials = CREDENTIALS;
                            }
                            if (isFunction(ON_STARTING)) {
                                ON_STARTING.call(xhr);
                            }
                            xhr.send(data || BODY);
                        });
                    }(
                        opts.body,
                        opts.baseURI,
                        opts.timeout,
                        opts.headers,
                        opts.username,
                        opts.password,
                        opts.credentials,
                        opts.responseType,
                        opts.onStarting,
                        opts.onProgress,
                        opts.onFinished
                    ));
                }(defaults({}, own.opts, opts)));
                /**
                 * 
                 * @param {any} argc 
                 */
                function isValidHeaders(
                    argc
                ) {
                    return isNullOrEmptyString(argc)
                        || isNullOrEmptyArray(argc) ? false : true;
                }
                /**
                 * 
                 * @param {any} argc 
                 */
                function isSerializable(
                    argc
                ) {
                    return isBlob(argc)
                        || isFormData(argc)
                        || isArrayBuffer(argc)
                        || isArrayBufferView(argc)
                        || isURLSearchParams(argc)
                        || isBasic(argc) ? false : true;
                }
                /**
                 * 
                 * @param {string} url 
                 * @param {XMLHttpRequest} xhr 
                 * @param {Headers | Yarla.KVPair<string | ReadonlyArray<string>> | Yarla.AnyObject<string | ReadonlyArray<string>>} headers 
                 * @param {Yarla.xhr.ResponseType} responseType 
                 * @param {any} body 
                 */
                function serializeError(
                    url,
                    xhr,
                    headers,
                    responseType,
                    body
                ) {
                    if (isInstanceOf(xhr.response, ResponseError)) {
                        return xhr.response;
                    }
                    return new ResponseError({
                        url: url,
                        xhr: xhr,
                        body: body,
                        responseType: responseType,
                        response: xhr.response || xhr.responseText || null,
                        headers: isInstanceOf(headers, KVPair) ? headers.toJSON() : new KVPair(headers, true).toJSON(),
                    }, xhr.status, isInstanceOf(xhr.response, Error) ? xhr.response.message : xhr.statusText);
                }
            }
        ),
    }, NOOP, "Request"), {
        init: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.Proto<Yarla.xhr.Request<P, R>>}
             * @param {Yarla.xhr.API} api 
             * @param {Yarla.xhr.Options} [opts] 
             * @returns {Yarla.xhr.Request<P, R>}
             * @template P, R
             */
            function (
                api,
                opts
            ) {
                return Reflect.construct(this, {
                    opts: opts,
                    xhr: null,
                    api: api,
                });
            }
        ),
    });

    var _get = skrinkSerializer(
        /**
         * 
         * @param {string} url 
         * @returns {Yarla.xhr.Request<P, R>}
         * @template P, R
         */
        function (
            url
        ) {
            return Request.init({ url: url, method: "GET" }, _defaults);
        }
    );

    var _import = (function () {
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
                return definition(".", name, esModules || []);
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
                            return Promise$1.all(
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
                return Promise$1.resolve(module[modname]);
            }
            if (modname === "yarla") {
                if (isObject(globalThis.Yarla)) {
                    return Promise$1.resolve({ exports: globalThis.Yarla });
                }
            }
            if (modname === "yarla" || modname.indexOf("@yarlajs/") === 0 || esModules.indexOf(modname) !== -1) {
                try {
                    return Function("return import('" + modname + "').then(v=>({exports:v}))").call(null);
                } catch (_) {
                    // DO NOTHING
                }
            }
            if (modname.charAt(0) === ".") {
                modname = _resolve(dirname, modname);
            } else {
                modname = _resolve("/node_modules", modname);
            }
            if (modname in module) {
                return Promise$1.resolve(module[modname]);
            }
            return module[modname] = _get(modname).send(null, {
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
                    instance = Promise$1.resolve({
                        path: _resolve(filename, ".."),
                        deps: deps,
                        func: func,
                    });
                }), {
                    amd: generateNormalDescriptor({}),
                }));
                return instance || Promise$1.reject(new Error(message.INVALID_MODULE + ": " + filename));
            });
        }
    }());

    var _delete = skrinkSerializer(
        /**
         * 
         * @param {string} url 
         * @returns {Yarla.xhr.Request<P, R>}
         * @template P, R
         */
        function (
            url
        ) {
            return Request.init({ url: url, method: "DELETE" }, _defaults);
        }
    );

    var _patch = skrinkSerializer(
        /**
         * 
         * @param {string} url 
         * @returns {Yarla.xhr.Request<P, R>}
         * @template P, R
         */
        function (
            url
        ) {
            return Request.init({ url: url, method: "PATCH" }, _defaults);
        }
    );

    var _post = skrinkSerializer(
        /**
         * 
         * @param {string} url 
         * @returns {Yarla.xhr.Request<P, R>}
         * @template P, R
         */
        function (
            url
        ) {
            return Request.init({ url: url, method: "POST" }, _defaults);
        }
    );

    var _put = skrinkSerializer(
        /**
         * 
         * @param {string} url 
         * @returns {Yarla.xhr.Request<P, R>}
         * @template P, R
         */
        function (
            url
        ) {
            return Request.init({ url: url, method: "PUT" }, _defaults);
        }
    );

    var _xhr = defineProperties(skrinkSerializer(
        /**
         * 
         * @param {Yarla.xhr.API} api 
         */
        function (
            api
        ) {
            return Request.init(api, _defaults);
        }
    ), {
        defaults: generateGetterDescriptor(
            function () {
                return _defaults;
            }
        ),
        resolve: generateNormalDescriptor(_resolve),
        import: generateNormalDescriptor(_import),
        delete: generateNormalDescriptor(_delete),
        patch: generateNormalDescriptor(_patch),
        post: generateNormalDescriptor(_post),
        get: generateNormalDescriptor(_get),
        put: generateNormalDescriptor(_put),
    });

    var index = {
        dom: dom,
        koa: koa,
        xhr: _xhr,
        pattern: pattern$2,
        cookies: cookies$1,
        queries: queries$2,
        formats: formats,
        KVPair: KVPair$2,
        Buffer: Buffer$2,
        Promise: Promise$4,
        WeakMap: WeakMap$3,
        Fragment: Fragment,
        HttpError: HttpError$2,
        forceUpdate: forceUpdate,
        createElement: createElement$1,
        setImmediate: setImmediate$3,
        setInterval: setInterval,
        setTimeout: setTimeout$3,
        nextTick: nextTick,
        debounce: debounce,
        throttle: throttle,
        useEffect: useEffect,
        useTarget: useTarget,
        useState: useState,
        useMemo: useMemo,
        useRef: useRef,
        shadow: shadow,
        memo: memo,
        non: _non,
        has: _has,
        get: _get$1,
        set: _set,
        delete: _delete$1,
        keys: _keys,
        values: _values,
        entries: _entries,
        salt: _salt,
        uuid: _uuid,
        hash: _hash$1,
        glob: _glob,
        flat: _flat,
        uniq: _uniq,
        omit: _omit,
        pick: _pick,
        clone: _clone,
        merge: _merge,
        defaults: _defaults$1,
        trampoline: _trampoline,
        concatUrl: _concatUrl,
        isArray: _isArray,
        isClass: _isClass,
        isNumber: _isNumber,
        isString: _isString,
        isBoolean: _isBoolean,
        isFunction: _isFunction,
        isBigInt: _isBigInt,
        isSymbol: _isSymbol,
        isObject: _isObject,
        isIterable: _isIterable,
        isInstanceOf: _isInstanceOf,
        isRegExp: _isRegExp,
        isDate: _isDate,
        isNull: _isNull,
        isNullOrUndefined: _isNullOrUndefined,
        _isNullOrEmptyArray: _isNullOrEmptyArray,
        isNullOrEmptyString: _isNullOrEmptyString,
        isNullOrEmptyObject: _isNullOrEmptyObject,
        isUndefined: _isUndefined,
        isReference: _isReference,
        isBasic: _isBasic,
        isEqual: _isEqual,
        isValid: _isValid,
        isNaN: _isNaN,
        isFinite: _isFinite,
        isInteger: _isInteger,
        isSafeInteger: _isSafeInteger,
        isJsonContent: _isJsonContent,
        isTextContent: _isTextContent,
        isURLSearchParams: _isURLSearchParams,
        isArrayBufferView: _isArrayBufferView,
        isArrayBuffer: _isArrayBuffer,
        isFormData: _isFormData,
        isReadable: _isReadable,
        isWritable: _isWritable,
        isHeaders: _isHeaders,
        isBlob: _isBlob,
        atob: _atob,
        btoa: _btoa,
        read: _read$1,
    };

    exports.Buffer = Buffer$2;
    exports.Fragment = Fragment;
    exports.HttpError = HttpError$2;
    exports.KVPair = KVPair$2;
    exports.Promise = Promise$4;
    exports.WeakMap = WeakMap$3;
    exports.atob = _atob;
    exports.btoa = _btoa;
    exports.clone = _clone;
    exports.concatUrl = _concatUrl;
    exports.cookies = cookies$1;
    exports.createElement = createElement$1;
    exports.debounce = debounce;
    exports["default"] = index;
    exports.defaults = _defaults$1;
    exports["delete"] = _delete$1;
    exports.dom = dom;
    exports.entries = _entries;
    exports.flat = _flat;
    exports.forceUpdate = forceUpdate;
    exports.formats = formats;
    exports.get = _get$1;
    exports.glob = _glob;
    exports.has = _has;
    exports.hash = _hash$1;
    exports.isArray = _isArray;
    exports.isArrayBuffer = _isArrayBuffer;
    exports.isArrayBufferView = _isArrayBufferView;
    exports.isBasic = _isBasic;
    exports.isBigInt = _isBigInt;
    exports.isBlob = _isBlob;
    exports.isBoolean = _isBoolean;
    exports.isClass = _isClass;
    exports.isDate = _isDate;
    exports.isEqual = _isEqual;
    exports.isFinite = _isFinite;
    exports.isFormData = _isFormData;
    exports.isFunction = _isFunction;
    exports.isHeaders = _isHeaders;
    exports.isInstanceOf = _isInstanceOf;
    exports.isInteger = _isInteger;
    exports.isIterable = _isIterable;
    exports.isJsonContent = _isJsonContent;
    exports.isNaN = _isNaN;
    exports.isNull = _isNull;
    exports.isNullOrEmptyArray = _isNullOrEmptyArray;
    exports.isNullOrEmptyObject = _isNullOrEmptyObject;
    exports.isNullOrEmptyString = _isNullOrEmptyString;
    exports.isNullOrUndefined = _isNullOrUndefined;
    exports.isNumber = _isNumber;
    exports.isObject = _isObject;
    exports.isReadable = _isReadable;
    exports.isReference = _isReference;
    exports.isRegExp = _isRegExp;
    exports.isSafeInteger = _isSafeInteger;
    exports.isString = _isString;
    exports.isSymbol = _isSymbol;
    exports.isTextContent = _isTextContent;
    exports.isURLSearchParams = _isURLSearchParams;
    exports.isUndefined = _isUndefined;
    exports.isValid = _isValid;
    exports.isWritable = _isWritable;
    exports.keys = _keys;
    exports.koa = koa;
    exports.memo = memo;
    exports.merge = _merge;
    exports.nextTick = nextTick;
    exports.non = _non;
    exports.omit = _omit;
    exports.pattern = pattern$2;
    exports.pick = _pick;
    exports.queries = queries$2;
    exports.read = _read$1;
    exports.salt = _salt;
    exports.set = _set;
    exports.setImmediate = setImmediate$3;
    exports.setInterval = setInterval;
    exports.setTimeout = setTimeout$3;
    exports.shadow = shadow;
    exports.throttle = throttle;
    exports.trampoline = _trampoline;
    exports.uniq = _uniq;
    exports.useEffect = useEffect;
    exports.useMemo = useMemo;
    exports.useRef = useRef;
    exports.useState = useState;
    exports.useTarget = useTarget;
    exports.uuid = _uuid;
    exports.values = _values;
    exports.xhr = _xhr;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.js.map
