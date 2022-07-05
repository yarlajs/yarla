//! Copyright (C) 2022 by WU HU. All Rights Reserved.
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Yarla = {}));
})(this, (function (exports) { 'use strict';

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

    var _isReference = skrinkSerializer(
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

    var _isInstanceOf = skrinkSerializer(
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

    var _isNumber = skrinkSerializer(
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

    var _isString = skrinkSerializer(
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

    var _isDate = skrinkSerializer(
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

    var message = {
        /** @type {"Invalid URL"} */
        INVALID_URL: "Invalid URL",
        /** @type {"Invalid module"} */
        INVALID_MODULE: "Invalid module",
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
        /** @type {"Not implemented"} */
        NOT_IMPLEMENTED: "Not implemented",
        /** @type {"Not supported"} */
        NOT_SUPPORTED: "Not supported",
    };

    var globalThis = (
        // eslint-disable-next-line no-undef
        typeof global !== "undefined" ? global :
            // eslint-disable-next-line no-undef
            typeof window !== "undefined" ? window :
                // eslint-disable-next-line no-undef
                self
    );

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
                    return constructor.apply(this, arguments);
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

    var btoa = globalThis.btoa || function (
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
        return btoa(decodeLATIN1(argc));
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

    var _isArrayBuffer = skrinkSerializer(
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
            return _isInstanceOf(argc, globalThis.ArrayBuffer) || _isInstanceOf(argc, globalThis.SharedArrayBuffer);
        }
    );

    var _isArray = skrinkSerializer(
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

    var _isUndefined = skrinkSerializer(
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

    var _isNull = skrinkSerializer(
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

    var _isNullOrUndefined = skrinkSerializer(
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

    var _isFinite = skrinkSerializer(
        // eslint-disable-next-line es/no-number-isfinite
        Number.isFinite || function (
            /**
             * @type {number}
             */
            argc
        ) {
            return _isNumber(argc) && globalThis.isFinite(argc);
        }
    );

    var _isValid = skrinkSerializer(
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

    var _flat = skrinkSerializer(
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

    function NOOP () { /** DO NOTHING */ }

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

    var _has = skrinkSerializer(
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
                s = _isString(expr) ? divideExpression(expr) : expr,
                l = s.length;
                i < l;
                i++
            ) {
                if (!_isReference(t) ||
                    !hasOwnProperty(t, s[i])) {
                    return false;
                }
                t = t[s[i]];
            }
            return true;
        }
    );

    var _get$1 = skrinkSerializer(
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
                s = _isString(expr) ? divideExpression(expr) : expr,
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

    var _isObject = skrinkSerializer(
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
            return strict ? className(argc) === "Object" : !_isNull(argc) && typeof argc === "object";
        }
    );

    var _set = skrinkSerializer(
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
                s = _isString(expr) ? divideExpression(expr) : expr,
                l = s.length;
                i < l;
                i++
            ) {
                var n = s[i];
                if (_isNumber(n)) {
                    if (!_isArray(m)) {
                        if (i === 0) {
                            throw new Error(message.TARGET_MUST_BE_AN_ARRAY);
                        } else {
                            // @ts-ignore
                            m = t[p] = [];
                        }
                    }
                } else {
                    if (!_isObject(m)) {
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
            return _isNullOrUndefined(p) ? value : t[p] = value;
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
                        return Reflect ? Reflect.construct(getPrototypeOf(constructor), arguments, constructor) : getPrototypeOf(constructor).apply(this, arguments);
                    }
                );
            }(target.constructor)).apply(target, _flat(arguments, 1));
        }
        var maps = new WeakMap();
        var expr = {
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
            has: skrinkSerializer(_has$1),
            get: skrinkSerializer(_get),
            set: skrinkSerializer(_set$1),
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

    var Uint8Array = (function (Uint8Array) {
        return Uint8Array = Uint8Array || generateClass(
            /**
             * 
             * @this {Uint8Array}
             * @param {number | number[]} [argc] 
             */
            function (argc) {
                if (_isArray(argc)) {
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
                        data: _flat(this),
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
                    if (_isInstanceOf(sources, Uint8Array)) {
                        bytes = sources.slice(0);
                    } else if (_isArrayBuffer(sources)) {
                        bytes = new Uint8Array(sources, Number(byteOffsetEncoding) || 0, length);
                    } else if (_isString(sources)) {
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
                    return _isInstanceOf(argc, Buffer);
                }
            ),
        });
    }(globalThis.Buffer));

    var _atob = skrinkSerializer(
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
            return urlSafeEncoding ? Buffer.from(bitConvert(decodeBase(argc), 62, 256)).toString(definition.UTF8) : Buffer.from(argc, definition.BASE64).toString(definition.UTF8);
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
            r.push(ATOB[argc.charCodeAt(i)]);
        }
        return r;
    }

    var _btoa = skrinkSerializer(
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

    var cookies = {
        parse: skrinkSerializer(
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
                        _atob(k, true)
                    ] = _atob(v, true);
                }
                return r;
            }
        ),
        serialize: skrinkSerializer(
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
                    var k = _btoa(String(name), true);
                    var v = _btoa(String(value), true);
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
                        if (PROTOCOL === definition.HTTP) {
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

    var decodeURIComponent = globalThis.decodeURIComponent;

    var encodeURIComponent = globalThis.encodeURIComponent;

    var _isBoolean = skrinkSerializer(
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

    var _isBigInt = skrinkSerializer(
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

    var _isSymbol = skrinkSerializer(
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
                    if (_isNullOrUndefined(r)) {
                        r = _isNumber(k[0]) ? [] : {};
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
                    _set(r, k, v);
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
                                r.push(encodeURIComponent(k) + "=" + "null");
                            } else if (_isDate(n)) {
                                r.push(encodeURIComponent(k) + "=" + encodeURIComponent(n.toJSON()));
                            } else if (_isNumber(n) || _isString(n) || _isBoolean(n) || _isBigInt(n) || _isSymbol(n)) {
                                r.push(encodeURIComponent(k) + "=" + encodeURIComponent(n.toString()));
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

    var setTimeout$1 = globalThis.setTimeout;

    var setImmediate$1 = globalThis.setImmediate || globalThis.requestAnimationFrame || function ( /** @type {any} */ argc) { return setTimeout$1(argc, 1000 / 60); };

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
            useRef: skrinkSerializer(
                function () {
                    throw new Error(message.ONLY_USED_IN_COMPONENTS);
                }
            ),
            useMemo: skrinkSerializer(
                function () {
                    throw new Error(message.ONLY_USED_IN_COMPONENTS);
                }
            ),
            useState: skrinkSerializer(
                function () {
                    throw new Error(message.ONLY_USED_IN_COMPONENTS);
                }
            ),
            useTarget: skrinkSerializer(
                function () {
                    throw new Error(message.ONLY_USED_IN_COMPONENTS);
                }
            ),
            useEffect: skrinkSerializer(
                function () {
                    throw new Error(message.ONLY_USED_IN_COMPONENTS);
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
            mount: skrinkSerializer(
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
                            forceUpdate: skrinkSerializer(
                                function () {
                                    return application.forceUpdate();
                                }
                            ),
                            unmount: skrinkSerializer(
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
            scope: skrinkSerializer(
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
            nextTick: skrinkSerializer(
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
                        cancel: skrinkSerializer(
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
            forceUpdate: skrinkSerializer(
                function () {
                    if (idle) {
                        idle = false;
                        setImmediate$1(function () {
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

    var _isFunction = skrinkSerializer(
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
                } else if (_isInstanceOf(value, Promise)) {
                    if (Reflect.get(value, Reflect.expr.STATE) === definition.PENDING) {
                        return void value.then(
                            fixed(target, definition.RESOLVED),
                            fixed(target, definition.REJECTED)
                        );
                    }
                    Reflect.set(value, Reflect.expr.THROW, false);
                    state = Reflect.get(value, Reflect.expr.STATE);
                    value = Reflect.get(value, Reflect.expr.VALUE);
                } else if (_isObject(value) && _isFunction(value.then)) {
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
                    setImmediate$1(function () {
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

    var formats = {
        json: skrinkSerializer(
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
        attr: skrinkSerializer(
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
                if (_isInstanceOf(argc, Promise$1)) {
                    if (Reflect.has(argc, Reflect.expr.STATE) &&
                        Reflect.has(argc, Reflect.expr.VALUE)) {
                        switch (Reflect.get(argc, Reflect.expr.STATE)) {
                            case definition.RESOLVED:
                                return _get$1(Reflect.get(argc, Reflect.expr.VALUE), expr || []);
                            case definition.REJECTED:
                                return void 0;
                        }
                    }
                    return void argc.then(
                        function (value) {
                            Reflect.set(argc, Reflect.expr.STATE, definition.RESOLVED);
                            Reflect.set(argc, Reflect.expr.VALUE, value);
                            zone.forceUpdate();
                        },
                        function (error) {
                            Reflect.set(argc, Reflect.expr.STATE, definition.REJECTED);
                            Reflect.set(argc, Reflect.expr.VALUE, error);
                            zone.forceUpdate();
                            throw error;
                        }
                    );
                }
                return _get$1(argc, expr || []);
            }
        ),
        date: skrinkSerializer(
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
        digit: skrinkSerializer(
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
        lower: skrinkSerializer(
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
        upper: skrinkSerializer(
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
    function compareIgnoreCase (
        arg1,
        arg2
    ) {
        return arg1.length === arg2.length && arg1.toLowerCase() === arg2.toLowerCase();
    }

    var _isIterable = skrinkSerializer(
        /**
         * 
         * @param {any} argc 
         * @returns {argc is Iterable<any>}
         */
        function (
            argc
        ) {
            return _isSymbol(Symbol.iterator) && _isFunction(_get$1(argc, [Symbol.iterator]));
        }
    );

    var _entries = skrinkSerializer(
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
            var r = [];
            for (var n in argc) {
                if (inherit || hasOwnProperty(argc, n)) {
                    r.push([n, argc[n]]);
                }
            }
            // @ts-ignore
            return r;
        }
    );

    var _values = skrinkSerializer(
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

    var _keys = skrinkSerializer(
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
            if (_isInstanceOf(source, globalThis.Headers)) {
                Reflect.defineInternal(this, !!ignoreCase, "ignoreCase");
                source.forEach(
                    /**
                     * 
                     * @this {Yarla.KVPair}
                     * @param {string} value 
                     * @param {string} key 
                     */
                    function (value, key) {
                        this.set(key, value);
                    },
                    this
                );
            } else if (_isIterable(source)) {
                Reflect.defineInternal(this, !!ignoreCase, "ignoreCase");
                for (var
                    i = 0,
                    // eslint-disable-next-line es/no-array-from
                    s = Array.from(source),
                    l = s.length;
                    i < l;
                    i++
                ) {
                    var n = s[i];
                    if (_isArray(n) && n.length === 2) {
                        this.set(n[0], n[1]);
                    }
                }
            } else if (_isObject(source)) {
                Reflect.defineInternal(this, !!ignoreCase, "ignoreCase");
                for (var name in source) {
                    this.set(name, source[name]);
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
                    return _keys(Reflect.getInternal(this).source);
                }
            ),
            values: generateMethodDescriptor(
                /**
                 * @this {Yarla.KVPair}
                 */
                function () {
                    return _values(Reflect.getInternal(this).source);
                }
            ),
            entries: generateMethodDescriptor(
                /**
                 * @this {Yarla.KVPair}
                 */
                function () {
                    return _entries(Reflect.getInternal(this).source);
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

    var Fragment = skrinkSerializer(
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
            return Reflect.defineInternal(Reflect.callSuper(this, "[" + status + "] " + (message || httpStatus[status] || "Unknown")), status, "status");
        },
        {
            name: generateNormalDescriptor("HttpError"),
            status: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 * @returns {number}
                 */
                function () {
                    return Reflect.getInternal(this).status;
                }
            ),
        },
        Error,
        "HttpError"
    );

    var RefObject = defineProperties(generateClass(Reflect.BASE, {
        target: generateGetterDescriptor(
            /**
             * 
             * @this {Yarla.RefObject<T>}
             * @returns {T}
             * @template T
             */
            function () {
                return Reflect.getInternal(this).target;
            }
        ),
    }, NOOP, "RefObject"), {
        init: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.Proto<Yarla.RefObject<T>>}
             * @param {T} [target] 
             * @template T
             */
            function (target) {
                return Reflect.construct(this, { target: target });
            }
        ),
    });

    var VMElement = (function () {
        return defineProperties(generateClass(Reflect.BASE, {
            key: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 * @returns {string | number | null | undefined}
                 */
                function () {
                    return Reflect.getInternal(this).key;
                }
            ),
            ref: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 * @returns {Yarla.RefObject<any> | null | undefined}
                 */
                function () {
                    return Reflect.getInternal(this).ref;
                }
            ),
            cmd: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 * @returns {ReadonlyArray<Yarla.Directive> | null | undefined}
                 */
                function () {
                    return Reflect.getInternal(this).cmd;
                }
            ),
            props: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 * @returns {any}
                 */
                function () {
                    return Reflect.getInternal(this).props;
                }
            ),
            owner: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 * @returns {any}
                 */
                function () {
                    return Reflect.getInternal(this).owner;
                }
            ),
            type: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 * @returns {string | Yarla.Component}
                 */
                function () {
                    return Reflect.getInternal(this).type;
                }
            ),
        }, NOOP, "VMElement"), {
            init: generateMethodDescriptor(
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
                                defineProperty(properties, i, generateNormalDescriptor(v));
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
                    return Reflect.construct(this, {
                        type: type,
                        owner: zone.currentTarget,
                        props: Object.freeze(defineProperties(properties, {
                            children: generateNormalDescriptor(_flat([m, n], 0, Infinity, true)),
                        })),
                        cmd: _isNullOrUndefined(c) ? null : _flat([c], 0, Infinity, true),
                        key: _isString(k) || _isNumber(k) ? k : null,
                        ref: _isInstanceOf(r, RefObject) ? r : null,
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

    var forceUpdate = zone.forceUpdate;

    var createElement$1 = skrinkSerializer(
        function () {
            // @ts-ignore
            return VMElement.init.apply(VMElement, arguments);
        }
    );

    var clearTimeout = globalThis.clearTimeout;

    var clearImmediate = globalThis.clearImmediate || globalThis.cancelAnimationFrame || function ( /** @type {any} */ argc) { return clearTimeout(argc); };

    var setImmediate = skrinkSerializer(
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
            var hwnd = setImmediate$1(function () {
                task.apply(self, argv);
                zone.forceUpdate();
            });
            return {
                cancel: skrinkSerializer(
                    function () {
                        clearImmediate(hwnd);
                    }
                ),
            };
        }
    );

    var setInterval$1 = globalThis.setInterval;

    var clearInterval = globalThis.clearInterval;

    var setInterval = skrinkSerializer(
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
                zone.forceUpdate();
            }, wait);
            return {
                cancel: skrinkSerializer(
                    function () {
                        clearInterval(hwnd);
                    }
                ),
            };
        }
    );

    var setTimeout = skrinkSerializer(
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
            var hwnd = setTimeout$1(function () {
                task.apply(self, argv);
                zone.forceUpdate();
            }, wait);
            return {
                cancel: skrinkSerializer(
                    function () {
                        clearTimeout(hwnd);
                    }
                ),
            };
        }
    );

    var nextTick = zone.nextTick;

    var debounce = skrinkSerializer(
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
            return defineProperties(skrinkSerializer(
                /**
                 * @this {any}
                 */
                function () {
                    var self = this;
                    var argv = _flat(arguments);
                    if (hwnd) {
                        clearTimeout(hwnd);
                    }
                    var anon = immediate && !hwnd;
                    hwnd = setTimeout$1(function () {
                        hwnd = null;
                        if (!immediate) {
                            data = task.apply(self, argv);
                        }
                        zone.forceUpdate();
                    }, wait);
                    if (anon) {
                        data = task.apply(self, argv);
                    }
                    return data;
                }
            ), {
                cancel: generateMethodDescriptor(
                    function () {
                        if (hwnd) {
                            clearTimeout(hwnd);
                            hwnd = null;
                        }
                    }
                ),
            });
        }
    );

    var throttle = skrinkSerializer(
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
            return defineProperties(skrinkSerializer(
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
                            clearTimeout(hwnd);
                            hwnd = null;
                        }
                        previous = time;
                        data = task.apply(self, argv);
                    } else if (!hwnd && trailing !== false) {
                        hwnd = setTimeout$1(function () {
                            hwnd = null;
                            if (leading === false) {
                                previous = 0;
                            } else {
                                previous = Date.now();
                            }
                            data = task.apply(self, argv);
                            zone.forceUpdate();
                        }, remaining);
                    }
                    return data;
                }
            ), {
                cancel: generateMethodDescriptor(
                    function () {
                        if (hwnd) {
                            clearTimeout(hwnd);
                            hwnd = null;
                        }
                    }
                ),
            });
        }
    );

    var useEffect = skrinkSerializer(
        /**
         * 
         * @param {Yarla.Effection} effection
         * @param {ReadonlyArray<any>} [dependencies] 
         */
        function (
            effection,
            dependencies
        ) {
            return zone.target.useEffect(effection, dependencies);
        }
    );

    var useTarget = skrinkSerializer(
        /**
         * 
         * @param {any} [patulous] 
         */
        function (
            patulous
        ) {
            return zone.target.useTarget(patulous);
        }
    );

    var useState = skrinkSerializer(
        /**
         * 
         * @param {unknown} [state] 
         */
        function (
            state
        ) {
            return zone.target.useState(state);
        }
    );

    var useMemo = skrinkSerializer(
        /**
         * 
         * @param {() => any} factory
         * @param {ReadonlyArray<any>} [dependencies] 
         */
        function (
            factory,
            dependencies
        ) {
            return zone.target.useMemo(factory, dependencies);
        }
    );

    var useRef = skrinkSerializer(
        /**
         * 
         * @param {unknown} [target] 
         */
        function (
            target
        ) {
            return zone.target.useRef(target);
        }
    );

    var shadow = skrinkSerializer(
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
                Reflect.defineMetadata(component, true, "shadowRoot"),
                Reflect.defineMetadata(component, tagName, "tagName"));
        }
    );

    var memo = skrinkSerializer(
        /**
         * 
         * @param {Yarla.Component} component 
         */
        function (
            component
        ) {
            return Reflect.defineMetadata(component, true, "ignoreUpdate");
        }
    );

    var _delete$1 = skrinkSerializer(
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
                s = _isString(expr) ? divideExpression(expr) : expr,
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

    var _salt = skrinkSerializer(
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

    var _uuid = skrinkSerializer(
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
                r += i === 2 || i === 4 || i === 6 || i === 8 ? pure ? "" : "-" : pseudoRandomString(4, 16);
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

    var _hash$1 = skrinkSerializer(
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

    var _isNullOrEmptyString = skrinkSerializer(
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

    var _glob = skrinkSerializer(
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

    var _uniq = skrinkSerializer(
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

    var _omit = skrinkSerializer(
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

    var _pick = skrinkSerializer(
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

    var _trampoline = skrinkSerializer(
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

    var _merge = skrinkSerializer(
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

    var _clone = skrinkSerializer(
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

    var _defaults$1 = skrinkSerializer(
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

    var _concatUrl = (function () {
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

    var _isClass = skrinkSerializer(
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
            return _isFunction(argc) && !hasOwnProperty(argc, "arguments");
        }
    );

    var _isRegExp = skrinkSerializer(
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

    var _isNullOrEmptyObject = skrinkSerializer(
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

    var _isBasic = skrinkSerializer(
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

    var _isNaN = skrinkSerializer(
        // eslint-disable-next-line es/no-number-isnan
        Number.isNaN || function (
            /**
             * @type {number}
             */
            argc
        ) {
            return _isNumber(argc) && globalThis.isNaN(argc);
        }
    );

    var _isEqual = skrinkSerializer(
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

    var _isInteger = skrinkSerializer(
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

    var _isSafeInteger = skrinkSerializer(
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

    var _isJsonContent = skrinkSerializer(
        /**
         * 
         * @param {string | Headers | null | undefined} argc 
         */
        function (
            argc
        ) {
            return (function (argc) { return argc ? startsWith(argc.toLowerCase(), httpContent.JSON) : false; }(_isInstanceOf(argc, globalThis.Headers) ? argc.get(httpHeader.CONTENT_TYPE) : argc));
        }
    );

    var _isTextContent = skrinkSerializer(
        /**
         * 
         * @param {string | Headers | null | undefined} argc 
         */
        function (
            argc
        ) {
            return (function (argc) { return argc ? startsWith(argc.toLowerCase(), httpContent.TEXT) : false; }(_isInstanceOf(argc, globalThis.Headers) ? argc.get(httpHeader.CONTENT_TYPE) : argc));
        }
    );

    var _isURLSearchParams = skrinkSerializer(
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
            return _isInstanceOf(argc, globalThis.URLSearchParams);
        }
    );

    var _isArrayBufferView = skrinkSerializer(
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
                if (_isFunction(ArrayBuffer.isView)) {
                    return ArrayBuffer.isView(argc);
                }
            }
            return _isInstanceOf(argc, globalThis.Int8Array)
                || _isInstanceOf(argc, globalThis.Uint8Array)
                || _isInstanceOf(argc, globalThis.Uint8ClampedArray)
                || _isInstanceOf(argc, globalThis.Int16Array)
                || _isInstanceOf(argc, globalThis.Uint16Array)
                || _isInstanceOf(argc, globalThis.Int32Array)
                || _isInstanceOf(argc, globalThis.Uint32Array)
                || _isInstanceOf(argc, globalThis.Float32Array)
                || _isInstanceOf(argc, globalThis.Float64Array)
                || _isInstanceOf(argc, globalThis.BigInt64Array)
                || _isInstanceOf(argc, globalThis.BigUint64Array)
                || _isInstanceOf(argc, globalThis.DataView);
        }
    );

    var _isFormData = skrinkSerializer(
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
            return _isInstanceOf(argc, globalThis.FormData);
        }
    );

    var _isBlob = skrinkSerializer(
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
            return _isInstanceOf(argc, globalThis.Blob);
        }
    );

    var document = globalThis.document || null;

    var VMTokenList = defineProperties(generateClass(Reflect.BASE, {
        value: generateGetterDescriptor(
            /**
             * 
             * @this {Yarla.dom.VMTokenList}
             * @returns {string}
             */
            function () {
                return Reflect.getInternal(this).element.className;
            }
        ),
        add: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.dom.VMTokenList}
             */
            function () {
                var u = false,
                    /** @type {{ readonly element: Element; readonly classes: string[]; }} */
                    o = Reflect.getInternal(this),
                    e = o.element,
                    r = o.classes;
                for (var
                    i = 0,
                    s = _flat(arguments, 0, Infinity, true),
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
        contains: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.dom.VMTokenList}
             * @param {string} token 
             * @returns {boolean}
             */
            function (
                token
            ) {
                return Reflect.getInternal(this).classes.indexOf(token) !== -1;
            }
        ),
        remove: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.dom.VMTokenList}
             */
            function () {
                var u = false,
                    /** @type {{ readonly element: Element; readonly classes: string[]; }} */
                    o = Reflect.getInternal(this),
                    e = o.element,
                    r = o.classes;
                for (var
                    i = 0,
                    s = _flat(arguments, 0, Infinity, true),
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
        replace: generateMethodDescriptor(
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
                    o = Reflect.getInternal(this),
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
        toggle: generateMethodDescriptor(
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
                var o = Reflect.getInternal(this),
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
    }, NOOP, "VMTokenList"), {
        init: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.Proto<Yarla.dom.VMTokenList>}
             * @param {Element} element 
             */
            function (
                element
            ) {
                return Reflect.construct(this, {
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

    var contains = skrinkSerializer(
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

    var isConnected = skrinkSerializer(
        /**
         * 
         * @param {Node} node 
         */
        function (
            node
        ) {
            var isConnected = node.isConnected;
            if (_isBoolean(isConnected)) {
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
            if (_isInstanceOf(argc, Originator)) {
                return argc;
            }
            if (_isInstanceOf(argc, globalThis.Event)) {
                return make(argc, behaviours, behaviours.Event);
            }
            if (_isInstanceOf(argc, globalThis.EventTarget)) {
                return make(argc, interfaces, interfaces.EventTarget);
            }
            if (_isInstanceOf(argc, globalThis.XMLHttpRequest)) {
                return make(argc, interfaces, interfaces.XMLHttpRequest);
            }
            if (_isInstanceOf(argc, globalThis.Document)) {
                return make(argc, interfaces, interfaces.Document);
            }
            if (_isInstanceOf(argc, globalThis.Element)) {
                return make(argc, interfaces, interfaces.Element);
            }
            if (_isInstanceOf(argc, globalThis.Window)) {
                return make(argc, interfaces, interfaces.Window);
            }
            if (_isInstanceOf(argc, globalThis.Node)) {
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
            return _isInstanceOf(argc, Originator) ? Reflect.get(argc, Reflect.expr.INSTANCE) : argc;
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
            if (_isNullOrUndefined(argc)) {
                // @ts-ignore
                return null;
            }
            if (Reflect.has(argc, Reflect.expr.INSTANCE)) {
                return Reflect.get(argc, Reflect.expr.INSTANCE);
            }
            var name = argc.constructor.name || className(argc);
            if (name in classes) {
                constructor = classes[name];
            } else {
                for (name in classes) {
                    if (_isInstanceOf(argc, globalThis[name])) {
                        constructor = classes[name];
                        break;
                    }
                }
            }
            var item = createInstance(constructor);
            Reflect.set(item, Reflect.expr.INSTANCE, argc);
            Reflect.set(argc, Reflect.expr.INSTANCE, item);
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
            if (_isNullOrUndefined(item)) {
                return;
            }
            if (Reflect.has(event, Reflect.expr.STOP_AFTERWARD)) {
                return;
            }
            var expr;
            if (capture) {
                expr = Reflect.expr.EVENT_CAPTURE.concat(type);
            } else {
                expr = Reflect.expr.EVENT_GENERAL.concat(type);
            }
            var lump;
            if (Reflect.has(item, expr)) {
                lump = Reflect.get(item, expr);
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
                if (_isFunction(listener)) {
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
                if (Reflect.has(event, Reflect.expr.STOP_IMMEDIATE)) {
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
            if (_isObject(opts)) {
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
                expr = Reflect.expr.EVENT_CAPTURE.concat(type);
            } else {
                expr = Reflect.expr.EVENT_GENERAL.concat(type);
            }
            var lump;
            if (Reflect.has(argc, expr)) {
                lump = Reflect.get(argc, expr);
            } else {
                lump = Reflect.set(argc, expr, { live: [], once: [] });
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
            if (_isObject(opts)) {
                capture = !!opts.capture;
            } else {
                capture = !!opts;
            }
            var expr;
            if (capture) {
                expr = Reflect.expr.EVENT_CAPTURE.concat(type);
            } else {
                expr = Reflect.expr.EVENT_GENERAL.concat(type);
            }
            var lump;
            if (Reflect.has(argc, expr)) {
                lump = Reflect.get(argc, expr);
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
            if (Reflect.has(argc, Reflect.expr.EVENT_OBSERVE)) {
                lump = Reflect.get(argc, Reflect.expr.EVENT_OBSERVE);
            } else {
                lump = Reflect.set(argc, Reflect.expr.EVENT_OBSERVE, []);
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
            if (_isObject(opts)) {
                capture = !!opts.capture;
            } else {
                capture = !!opts;
            }
            var expr;
            if (capture) {
                expr = Reflect.expr.EVENT_CAPTURE.concat(type);
            } else {
                expr = Reflect.expr.EVENT_GENERAL.concat(type);
            }
            var lump;
            if (Reflect.has(argc, expr)) {
                lump = Reflect.get(argc, expr);
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
                handleEvent(defineProperties(event, {
                    eventPhase: generateGetterDescriptor(
                        function () {
                            return Event.AT_TARGET;
                        }
                    ),
                    currentTarget: generateGetterDescriptor(
                        function () {
                            return argc;
                        }
                    ),
                    target: generateGetterDescriptor(
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
                if (Reflect.has(argc, Reflect.expr.EVENT_CAPTURE)) {
                    for (type in Reflect.get(argc, Reflect.expr.EVENT_CAPTURE)) {
                        argc.removeEventListener(type, handleEvent, true);
                    }
                }
                if (Reflect.has(argc, Reflect.expr.EVENT_GENERAL)) {
                    for (type in Reflect.get(argc, Reflect.expr.EVENT_GENERAL)) {
                        argc.removeEventListener(type, handleEvent, false);
                    }
                }
            }
            if (Reflect.has(argc, Reflect.expr.EVENT_OBSERVE)) {
                for (var
                    i = 0,
                    s = Reflect.get(argc, Reflect.expr.EVENT_OBSERVE).slice(0),
                    l = s.length;
                    i < l;
                    i++
                ) {
                    s[i].call(argc);
                }
            }
            Reflect.delete(argc);
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
            if (Reflect.has(event, Reflect.expr.TICK_PREVENTED)) {
                return;
            }
            zone.forceUpdate();
        }
        var Originator = generateClass(Reflect.BASE, {}, NOOP);
        var behaviours = (function () {
            var Event = generateClass(Reflect.BASE, {
                type: generateGetterDescriptor(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).type;
                    }
                ),
                bubbles: generateGetterDescriptor(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).bubbles;
                    }
                ),
                cancelable: generateGetterDescriptor(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).cancelable;
                    }
                ),
                composed: generateGetterDescriptor(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).composed;
                    }
                ),
                isTrusted: generateGetterDescriptor(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).isTrusted;
                    }
                ),
                defaultPrevented: generateGetterDescriptor(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).defaultPrevented;
                    }
                ),
                eventPhase: generateGetterDescriptor(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).eventPhase;
                    }
                ),
                timeStamp: generateGetterDescriptor(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).timeStamp;
                    }
                ),
                target: generateGetterDescriptor(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return wrap(real(this).target);
                    }
                ),
                currentTarget: generateGetterDescriptor(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return wrap(real(this).currentTarget);
                    }
                ),
                stopImmediatePropagation: generateMethodDescriptor(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        var item = real(this);
                        Reflect.set(item, Reflect.expr.STOP_AFTERWARD, true);
                        Reflect.set(item, Reflect.expr.STOP_IMMEDIATE, true);
                        item.stopImmediatePropagation();
                    }
                ),
                stopPropagation: generateMethodDescriptor(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        var item = real(this);
                        Reflect.set(item, Reflect.expr.STOP_AFTERWARD, true);
                        item.stopPropagation();
                    }
                ),
                preventDefault: generateMethodDescriptor(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        real(this).preventDefault();
                    }
                ),
                ignoreUpdate: generateMethodDescriptor(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        Reflect.set(real(this), Reflect.expr.TICK_PREVENTED, true);
                    }
                ),
            }, Originator, "Event");
            var UIEvent = generateClass(Reflect.BASE, {
                detail: generateGetterDescriptor(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).detail;
                    }
                ),
                view: generateGetterDescriptor(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return wrap(real(this).view);
                    }
                ),
            }, Event, "UIEvent");
            var MouseEvent = generateClass(Reflect.BASE, {
                altKey: generateGetterDescriptor(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).altKey;
                    }
                ),
                button: generateGetterDescriptor(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).button;
                    }
                ),
                buttons: generateGetterDescriptor(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).buttons;
                    }
                ),
                clientX: generateGetterDescriptor(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).clientX;
                    }
                ),
                clientY: generateGetterDescriptor(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).clientY;
                    }
                ),
                ctrlKey: generateGetterDescriptor(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).ctrlKey;
                    }
                ),
                metaKey: generateGetterDescriptor(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).metaKey;
                    }
                ),
                movementX: generateGetterDescriptor(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).movementX;
                    }
                ),
                movementY: generateGetterDescriptor(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).movementY;
                    }
                ),
                offsetX: generateGetterDescriptor(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).offsetX;
                    }
                ),
                offsetY: generateGetterDescriptor(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).offsetY;
                    }
                ),
                pageX: generateGetterDescriptor(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).pageX;
                    }
                ),
                pageY: generateGetterDescriptor(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).pageY;
                    }
                ),
                relatedTarget: generateGetterDescriptor(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return wrap(real(this).relatedTarget);
                    }
                ),
                screenX: generateGetterDescriptor(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).screenX;
                    }
                ),
                screenY: generateGetterDescriptor(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).screenY;
                    }
                ),
                shiftKey: generateGetterDescriptor(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).shiftKey;
                    }
                ),
                x: generateGetterDescriptor(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).x;
                    }
                ),
                y: generateGetterDescriptor(
                    /**
                     * 
                     * @this {any}
                     */
                    function () {
                        return real(this).y;
                    }
                ),
                getModifierState: generateMethodDescriptor(
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
            var AnimationEvent = generateClass(Reflect.BASE, {
                animationName: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).animationName;
                    }
                ),
                elapsedTime: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).elapsedTime;
                    }
                ),
                pseudoElement: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).pseudoElement;
                    }
                ),
            }, Event, "AnimationEvent");
            var BeforeUnloadEvent = generateClass(Reflect.BASE, {
            }, Event, "BeforeUnloadEvent");
            var ClipboardEvent = generateClass(Reflect.BASE, {
                clipboardData: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).clipboardData;
                    }
                ),
            }, Event, "ClipboardEvent");
            var CompositionEvent = generateClass(Reflect.BASE, {
                data: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).data;
                    }
                ),
            }, Event, "CompositionEvent");
            var CustomEvent = generateClass(Reflect.BASE, {
                detail: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).detail;
                    }
                ),
            }, Event, "CustomEvent");
            var DeviceMotionEvent = generateClass(Reflect.BASE, {
                acceleration: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).acceleration;
                    }
                ),
                accelerationIncludingGravity: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).accelerationIncludingGravity;
                    }
                ),
                interval: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).interval;
                    }
                ),
                rotationRate: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).rotationRate;
                    }
                ),
            }, Event, "DeviceMotionEvent");
            var DeviceOrientationEvent = generateClass(Reflect.BASE, {
                absolute: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).absolute;
                    }
                ),
                alpha: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).alpha;
                    }
                ),
                beta: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).beta;
                    }
                ),
                gamma: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).gamma;
                    }
                ),
            }, Event, "DeviceOrientationEvent");
            var DragEvent = generateClass(Reflect.BASE, {
                dataTransfer: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).dataTransfer;
                    }
                ),
            }, Event, "DragEvent");
            var ErrorEvent = generateClass(Reflect.BASE, {
                colno: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).colno;
                    }
                ),
                error: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).error;
                    }
                ),
                filename: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).filename;
                    }
                ),
                lineno: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).lineno;
                    }
                ),
                message: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).message;
                    }
                ),
            }, Event, "ErrorEvent");
            var FocusEvent = generateClass(Reflect.BASE, {
                relatedTarget: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return wrap(real(this).relatedTarget);
                    }
                ),
            }, UIEvent, "FocusEvent");
            var GamepadEvent = generateClass(Reflect.BASE, {
                gamepad: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).gamepad;
                    }
                ),
            }, Event, "GamepadEvent");
            var HashChangeEvent = generateClass(Reflect.BASE, {
            }, Event, "HashChangeEvent");
            var InputEvent = generateClass(Reflect.BASE, {
                data: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).data;
                    }
                ),
                inputType: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).inputType;
                    }
                ),
                isComposing: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).isComposing;
                    }
                ),
            }, UIEvent, "InputEvent");
            var KeyboardEvent = generateClass(Reflect.BASE, {
                key: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).key;
                    }
                ),
                code: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).code;
                    }
                ),
                altKey: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).altKey;
                    }
                ),
                ctrlKey: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).ctrlKey;
                    }
                ),
                metaKey: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).metaKey;
                    }
                ),
                shiftKey: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).shiftKey;
                    }
                ),
                isComposing: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).isComposing;
                    }
                ),
                location: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).location;
                    }
                ),
                repeat: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).repeat;
                    }
                ),
                getModifierState: generateMethodDescriptor(
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
            var MessageEvent = generateClass(Reflect.BASE, {
                data: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).data;
                    }
                ),
                lastEventId: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).lastEventId;
                    }
                ),
                origin: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).origin;
                    }
                ),
                ports: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).ports;
                    }
                ),
                source: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).source;
                    }
                ),
            }, Event, "MessageEvent");
            var PageTransitionEvent = generateClass(Reflect.BASE, {
                persisted: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).persisted;
                    }
                ),
            }, Event, "PageTransitionEvent");
            var PointerEvent = generateClass(Reflect.BASE, {
                height: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).height;
                    }
                ),
                isPrimary: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).isPrimary;
                    }
                ),
                pointerId: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).pointerId;
                    }
                ),
                pointerType: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).pointerType;
                    }
                ),
                pressure: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).pressure;
                    }
                ),
                tangentialPressure: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).tangentialPressure;
                    }
                ),
                tiltX: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).tiltX;
                    }
                ),
                tiltY: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).tiltY;
                    }
                ),
                twist: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).twist;
                    }
                ),
                width: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).width;
                    }
                ),
            }, MouseEvent, "PointerEvent");
            var PopStateEvent = generateClass(Reflect.BASE, {
                state: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).state;
                    }
                ),
            }, Event, "PopStateEvent");
            var ProgressEvent = generateClass(Reflect.BASE, {
                lengthComputable: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).lengthComputable;
                    }
                ),
                loaded: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).loaded;
                    }
                ),
                total: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).total;
                    }
                ),
            }, Event, "ProgressEvent");
            var PromiseRejectionEvent = generateClass(Reflect.BASE, {
                reason: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).reason;
                    }
                ),
            }, Event, "PromiseRejectionEvent");
            var SecurityPolicyViolationEvent = generateClass(Reflect.BASE, {
                blockedURI: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).blockedURI;
                    }
                ),
                columnNumber: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).columnNumber;
                    }
                ),
                documentURI: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).documentURI;
                    }
                ),
                effectiveDirective: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).effectiveDirective;
                    }
                ),
                lineNumber: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).lineNumber;
                    }
                ),
                originalPolicy: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).originalPolicy;
                    }
                ),
                referrer: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).referrer;
                    }
                ),
                sourceFile: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).sourceFile;
                    }
                ),
                statusCode: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).statusCode;
                    }
                ),
                violatedDirective: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).violatedDirective;
                    }
                ),
            }, Event, "SecurityPolicyViolationEvent");
            var StorageEvent = generateClass(Reflect.BASE, {
                key: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).key;
                    }
                ),
                newValue: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).newValue;
                    }
                ),
                oldValue: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).oldValue;
                    }
                ),
                storageArea: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).storageArea;
                    }
                ),
                url: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).url;
                    }
                ),
            }, Event, "StorageEvent");
            var TouchEvent = generateClass(Reflect.BASE, {
                altKey: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).altKey;
                    }
                ),
                changedTouches: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).changedTouches;
                    }
                ),
                ctrlKey: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).ctrlKey;
                    }
                ),
                metaKey: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).metaKey;
                    }
                ),
                shiftKey: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).shiftKey;
                    }
                ),
                targetTouches: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).targetTouches;
                    }
                ),
                touches: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).touches;
                    }
                ),
            }, UIEvent, "TouchEvent");
            var TransitionEvent = generateClass(Reflect.BASE, {
                elapsedTime: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).elapsedTime;
                    }
                ),
                propertyName: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).propertyName;
                    }
                ),
                pseudoElement: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).pseudoElement;
                    }
                ),
            }, Event, "TransitionEvent");
            var WheelEvent = generateClass(Reflect.BASE, {
                deltaMode: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).deltaMode;
                    }
                ),
                deltaX: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).deltaX;
                    }
                ),
                deltaY: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).deltaY;
                    }
                ),
                deltaZ: generateGetterDescriptor(
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
            var EventTarget = generateClass(Reflect.BASE, {
                listen: generateMethodDescriptor(
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
                            cancel: skrinkSerializer(
                                function () {
                                    detach(item, type, listener, opts);
                                }
                            ),
                        };
                    }
                ),
                dispatch: generateMethodDescriptor(
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
            var XMLHttpRequest = generateClass(Reflect.BASE, {
            }, EventTarget, "XMLHttpRequest");
            var Window = generateClass(Reflect.BASE, {
            }, EventTarget, "Window");
            var Node = generateClass(Reflect.BASE, {
                nodeName: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).nodeName;
                    }
                ),
                nodeType: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).nodeType;
                    }
                ),
                textContent: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).textContent;
                    }
                ),
                isConnected: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return isConnected(real(this));
                    }
                ),
                listenTo: generateMethodDescriptor(
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
                        var view = meta.defaultView || globalThis;
                        attach(view, type, listener, opts);
                        return {
                            cancel: skrinkSerializer(
                                jacket(item, function () {
                                    detach(view, type, listener, opts);
                                })
                            ),
                        };
                    }
                ),
                contains: generateMethodDescriptor(
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
            var Document = generateClass(Reflect.BASE, {
                isDefaultNamespace: generateMethodDescriptor(
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
            var Element = generateClass(Reflect.BASE, {
                innerHTML: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).innerHTML;
                    }
                ),
                outerHTML: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).outerHTML;
                    }
                ),
                className: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).className;
                    }
                ),
                classList: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return Reflect.once(this, Reflect.expr.CLASS_MANAGER, function () {
                            return VMTokenList.init(real(this));
                        });
                    }
                ),
                clientHeight: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).clientHeight;
                    }
                ),
                clientLeft: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).clientLeft;
                    }
                ),
                clientTop: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).clientTop;
                    }
                ),
                clientWidth: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).clientWidth;
                    }
                ),
                scrollHeight: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).scrollHeight;
                    }
                ),
                scrollLeft: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).scrollLeft;
                    }
                ),
                scrollTop: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).scrollTop;
                    }
                ),
                scrollWidth: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).scrollWidth;
                    }
                ),
                getBoundingClientRect: generateMethodDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).getBoundingClientRect();
                    }
                ),
                scrollTo: generateMethodDescriptor(
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
                matches: generateMethodDescriptor(
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
            var HTMLElement = generateClass(Reflect.BASE, {
            }, Element, "HTMLElement");
            var HTMLMediaElement = generateClass(Reflect.BASE, {
                buffered: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).buffered;
                    }
                ),
                currentSrc: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).currentSrc;
                    }
                ),
                duration: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).duration;
                    }
                ),
                ended: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).ended;
                    }
                ),
                error: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).error;
                    }
                ),
                networkState: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).networkState;
                    }
                ),
                paused: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).paused;
                    }
                ),
                played: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).played;
                    }
                ),
                readyState: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).readyState;
                    }
                ),
                seekable: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).seekable;
                    }
                ),
                seeking: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).seeking;
                    }
                ),
                load: generateMethodDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).load();
                    }
                ),
                pause: generateMethodDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).pause();
                    }
                ),
                play: generateMethodDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return Promise$1.resolve(real(this).play());
                    }
                ),
            }, HTMLElement, "HTMLMediaElement");
            var HTMLAnchorElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLAnchorElement");
            var HTMLAreaElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLAreaElement");
            var HTMLAudioElement = generateClass(Reflect.BASE, {
            }, HTMLMediaElement, "HTMLAudioElement");
            var HTMLBRElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLBRElement");
            var HTMLBaseElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLBaseElement");
            var HTMLBodyElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLBodyElement");
            var HTMLButtonElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLButtonElement");
            var HTMLCanvasElement = generateClass(Reflect.BASE, {
                getContext: generateMethodDescriptor(
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
                toDataURL: generateMethodDescriptor(
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
            var HTMLDListElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLDListElement");
            var HTMLDataElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLDataElement");
            var HTMLDataListElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLDataListElement");
            var HTMLDetailsElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLDetailsElement");
            var HTMLDialogElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLDialogElement");
            var HTMLDivElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLDivElement");
            var HTMLEmbedElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLEmbedElement");
            var HTMLFieldSetElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLFieldSetElement");
            var HTMLFormElement = generateClass(Reflect.BASE, {
                reset: generateMethodDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).reset();
                    }
                ),
                submit: generateMethodDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).submit();
                    }
                ),
            }, HTMLElement, "HTMLFormElement");
            var HTMLHRElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLHRElement");
            var HTMLHeadElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLHeadElement");
            var HTMLHeadingElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLHeadingElement");
            var HTMLHtmlElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLHtmlElement");
            var HTMLIFrameElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLIFrameElement");
            var HTMLImageElement = generateClass(Reflect.BASE, {
                complete: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).complete;
                    }
                ),
                currentSrc: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).currentSrc;
                    }
                ),
                naturalHeight: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).naturalHeight;
                    }
                ),
                naturalWidth: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).naturalWidth;
                    }
                ),
            }, HTMLElement, "HTMLImageElement");
            var HTMLInputElement = generateClass(Reflect.BASE, {
                name: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).name;
                    }
                ),
                value: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).value;
                    }
                ),
                checked: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).checked;
                    }
                ),
                selectionEnd: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).selectionEnd;
                    }
                ),
                selectionStart: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).selectionStart;
                    }
                ),
                files: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).files;
                    }
                ),
                select: generateMethodDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).select();
                    }
                ),
            }, HTMLElement, "HTMLInputElement");
            var HTMLLIElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLLIElement");
            var HTMLLabelElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLLabelElement");
            var HTMLLegendElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLLegendElement");
            var HTMLLinkElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLLinkElement");
            var HTMLMenuElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLMenuElement");
            var HTMLMetaElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLMetaElement");
            var HTMLMeterElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLMeterElement");
            var HTMLModElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLModElement");
            var HTMLOListElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLOListElement");
            var HTMLObjectElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLObjectElement");
            var HTMLOptGroupElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLOptGroupElement");
            var HTMLOptionElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLOptionElement");
            var HTMLOutputElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLOutputElement");
            var HTMLParagraphElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLParagraphElement");
            var HTMLParamElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLParamElement");
            var HTMLPictureElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLPictureElement");
            var HTMLPortalElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLPortalElement");
            var HTMLPreElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLPreElement");
            var HTMLProgressElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLProgressElement");
            var HTMLQuoteElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLQuoteElement");
            var HTMLScriptElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLScriptElement");
            var HTMLSelectElement = generateClass(Reflect.BASE, {
                name: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).name;
                    }
                ),
                value: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).value;
                    }
                ),
                selectedIndex: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).selectedIndex;
                    }
                ),
            }, HTMLElement, "HTMLSelectElement");
            var HTMLSlotElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLSlotElement");
            var HTMLSourceElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLSourceElement");
            var HTMLSpanElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLSpanElement");
            var HTMLStyleElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLStyleElement");
            var HTMLTableCaptionElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLTableCaptionElement");
            var HTMLTableCellElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLTableCellElement");
            var HTMLTableColElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLTableColElement");
            var HTMLTableElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLTableElement");
            var HTMLTableRowElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLTableRowElement");
            var HTMLTableSectionElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLTableSectionElement");
            var HTMLTemplateElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLTemplateElement");
            var HTMLTextAreaElement = generateClass(Reflect.BASE, {
                name: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).name;
                    }
                ),
                value: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).value;
                    }
                ),
                selectionEnd: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).selectionEnd;
                    }
                ),
                selectionStart: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).selectionStart;
                    }
                ),
                select: generateMethodDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).select();
                    }
                ),
            }, HTMLElement, "HTMLTextAreaElement");
            var HTMLTimeElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLTimeElement");
            var HTMLTitleElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLTitleElement");
            var HTMLTrackElement = generateClass(Reflect.BASE, {
                readyState: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).readyState;
                    }
                ),
            }, HTMLElement, "HTMLTrackElement");
            var HTMLUListElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLUListElement");
            var HTMLUnknownElement = generateClass(Reflect.BASE, {
            }, HTMLElement, "HTMLUnknownElement");
            var HTMLVideoElement = generateClass(Reflect.BASE, {
                videoHeight: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).videoHeight;
                    }
                ),
                videoWidth: generateGetterDescriptor(
                    /**
                     *
                     * @this {any}
                     */
                    function () {
                        return real(this).videoWidth;
                    }
                ),
            }, HTMLMediaElement, "HTMLVideoElement");
            var MathMLElement = generateClass(Reflect.BASE, {
            }, Element, "MathMLElement");
            var SVGElement = generateClass(Reflect.BASE, {
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
            detach: skrinkSerializer(detach),
            attach: skrinkSerializer(attach),
            replace: skrinkSerializer(replace),
            trigger: skrinkSerializer(trigger),
            destroy: skrinkSerializer(destroy),
            wrap: skrinkSerializer(wrap),
            real: skrinkSerializer(real),
            behaviours: behaviours,
            interfaces: interfaces,
        };
    }());

    var _getComputedStyle = skrinkSerializer(
        /**
         * 
         * @param {Yarla.Element} element 
         * @param {string | null} pseudoElement 
         */
        function (
            element,
            pseudoElement
        ) {
            return globalThis.getComputedStyle(bean.real(element), pseudoElement);
        }
    );

    var _requestFullscreen = skrinkSerializer(
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
            return new Promise$1(function (resolve) {
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
                throw new Error(message.NOT_SUPPORTED);
            });
        }
    );

    var _exitFullscreen = skrinkSerializer(
        /**
         * 
         * @returns {Promise<void>}
         */
        function () {
            return new Promise$1(function (resolve) {
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

    var _scrollTo = skrinkSerializer(
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
                globalThis.scrollTo({
                    behavior: behavior,
                    left: x,
                    top: y,
                });
            } else {
                globalThis.scrollTo(x, y);
            }
        }
    );

    var history = globalThis.history || null;

    var location = globalThis.location || null;

    var Location = generateClass(Reflect.BASE, {
        protocol: generateGetterDescriptor(
            function () {
                throw new Error(message.ILLEGAL_INVOCATION);
            }
        ),
        host: generateGetterDescriptor(
            function () {
                throw new Error(message.ILLEGAL_INVOCATION);
            }
        ),
        hostname: generateGetterDescriptor(
            function () {
                throw new Error(message.ILLEGAL_INVOCATION);
            }
        ),
        port: generateGetterDescriptor(
            function () {
                throw new Error(message.ILLEGAL_INVOCATION);
            }
        ),
        pathname: generateGetterDescriptor(
            function () {
                throw new Error(message.ILLEGAL_INVOCATION);
            }
        ),
        search: generateGetterDescriptor(
            function () {
                throw new Error(message.ILLEGAL_INVOCATION);
            }
        ),
        hash: generateGetterDescriptor(
            function () {
                throw new Error(message.ILLEGAL_INVOCATION);
            }
        ),
        href: generateGetterDescriptor(
            function () {
                throw new Error(message.ILLEGAL_INVOCATION);
            }
        ),
        toString: generateMethodDescriptor(
            /**
             * 
             * @this {any}
             */
            function () {
                return this.href;
            }
        ),
    }, NOOP, "Location");

    var History = generateClass(Reflect.BASE, {
        location: generateGetterDescriptor(
            function () {
                throw new Error(message.ILLEGAL_INVOCATION);
            }
        ),
        length: generateGetterDescriptor(
            function () {
                throw new Error(message.ILLEGAL_INVOCATION);
            }
        ),
        state: generateGetterDescriptor(
            function () {
                throw new Error(message.ILLEGAL_INVOCATION);
            }
        ),
        back: generateMethodDescriptor(
            function () {
                throw new Error(message.ILLEGAL_INVOCATION);
            }
        ),
        forward: generateMethodDescriptor(
            function () {
                throw new Error(message.ILLEGAL_INVOCATION);
            }
        ),
        go: generateMethodDescriptor(
            function () {
                throw new Error(message.ILLEGAL_INVOCATION);
            }
        ),
        navigate: generateMethodDescriptor(
            function () {
                throw new Error(message.ILLEGAL_INVOCATION);
            }
        ),
        redirect: generateMethodDescriptor(
            function () {
                throw new Error(message.ILLEGAL_INVOCATION);
            }
        ),
        listen: generateMethodDescriptor(
            function () {
                throw new Error(message.ILLEGAL_INVOCATION);
            }
        ),
    }, NOOP, "History");

    var _history = createInstance(History, {
        location: generateNormalDescriptor(
            createInstance(Location, {
                protocol: generateGetterDescriptor(
                    function () {
                        return location.protocol;
                    }
                ),
                host: generateGetterDescriptor(
                    function () {
                        return location.host;
                    }
                ),
                hostname: generateGetterDescriptor(
                    function () {
                        return location.hostname;
                    }
                ),
                port: generateGetterDescriptor(
                    function () {
                        return location.port;
                    }
                ),
                pathname: generateGetterDescriptor(
                    function () {
                        return location.pathname;
                    }
                ),
                search: generateGetterDescriptor(
                    function () {
                        return location.search;
                    }
                ),
                hash: generateGetterDescriptor(
                    function () {
                        return location.hash;
                    }
                ),
                href: generateGetterDescriptor(
                    function () {
                        return location.href;
                    }
                ),
            })
        ),
        length: generateGetterDescriptor(
            function () {
                return history.length;
            }
        ),
        state: generateGetterDescriptor(
            function () {
                return history.state;
            }
        ),
        back: generateMethodDescriptor(
            function () {
                history.back();
            }
        ),
        forward: generateMethodDescriptor(
            function () {
                history.forward();
            }
        ),
        go: generateMethodDescriptor(
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
        navigate: generateMethodDescriptor(
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
                    location.assign(url);
                    // @ts-ignore
                    history.state = state;
                }
            }
        ),
        redirect: generateMethodDescriptor(
            function (
                url,
                state
            ) {
                if (history.replaceState) {
                    history.replaceState(state, "", url);
                } else {
                    location.replace(url);
                    // @ts-ignore
                    history.state = state;
                }
            }
        ),
        listen: generateMethodDescriptor(
            /**
             * 
             * @param {Yarla.EventListenerOrEventListenerObject} listener 
             * @param {Yarla.AddEventListenerOptions} [opts] 
             */
            function (
                listener,
                opts
            ) {
                return bean.wrap(globalThis).listen("popstate", listener, opts);
            }
        ),
    });

    var Defer = defineProperties(generateClass(Reflect.BASE, {
        push: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.dom.Defer}
             * @param {Yarla.NOOP} fiber 
             */
            function (
                fiber
            ) {
                Reflect.getInternal(this).push(fiber);
            }
        ),
        digest: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.dom.Defer}
             */
            function () {
                Reflect.getInternal(this).splice(0).forEach(function (i) {
                    i.call(null);
                });
            }
        ),
    }, NOOP, "Defer"), {
        init: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.Proto<Yarla.dom.Defer>}
             */
            function () {
                return Reflect.construct(this, []);
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

    var EffectionCollection = defineProperties(generateClass(Reflect.BASE, {
        reset: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.dom.EffectionCollection}
             */
            function () {
                return Reflect.getInternal(this).index = 0, this;
            }
        ),
        push: generateMethodDescriptor(
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
                var x = Reflect.getInternal(this);
                var r = {
                    f: effection,
                    d: dependencies,
                    b: _isNullOrUndefined(dependencies),
                    v: null,
                };
                x.value.push(r);
                return skrinkSerializer(
                    function () {
                        r.v = r.f.call(null);
                    }
                );
            }
        ),
        next: generateMethodDescriptor(
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
                var x = Reflect.getInternal(this);
                if (x.index >= x.value.length) {
                    throw new Error(message.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                }
                var r = x.value[x.index++];
                if (r.b || compareDifferList(r.d, dependencies)) {
                    r.f = effection;
                    r.d = dependencies;
                    if (_isFunction(r.v)) {
                        r.v.call(null);
                    } else if (r.v) {
                        r.v.cancel();
                    }
                    return skrinkSerializer(
                        function () {
                            r.v = r.f.call(null);
                        }
                    );
                }
                return NOOP;
            }
        ),
        destroy: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.dom.EffectionCollection}
             */
            function () {
                Reflect.getInternal(this).value.splice(0).forEach(function (i) {
                    if (_isFunction(i.v)) {
                        i.v.call(null);
                    } else if (i.v) {
                        i.v.cancel();
                    }
                });
            }
        ),
    }, NOOP, "EffectionCollection"), {
        init: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.Proto<Yarla.dom.EffectionCollection>}
             */
            function (
            ) {
                return Reflect.construct(this, { index: 0, value: [] });
            }
        ),
    });

    var MemorableCollection = defineProperties(generateClass(Reflect.BASE, {
        reset: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.dom.MemorableCollection}
             */
            function () {
                return Reflect.getInternal(this).index = 0, this;
            }
        ),
        push: generateMethodDescriptor(
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
                var x = Reflect.getInternal(this);
                var r = {
                    d: dependencies,
                    b: _isNullOrUndefined(dependencies),
                    v: factory.call(null),
                };
                x.value.push(r);
                return r.v;
            }
        ),
        next: generateMethodDescriptor(
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
                var x = Reflect.getInternal(this);
                if (x.index >= x.value.length) {
                    throw new Error(message.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                }
                var r = x.value[x.index++];
                if (r.b || compareDifferList(r.d, dependencies)) {
                    r.v = factory.call(null);
                    r.d = dependencies;
                }
                return r.v;
            }
        ),
        destroy: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.dom.MemorableCollection}
             */
            function () {
                Reflect.getInternal(this).value.splice(0);
            }
        ),
    }, NOOP, "MemorableCollection"), {
        init: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.Proto<Yarla.dom.MemorableCollection>}
             */
            function (
            ) {
                return Reflect.construct(this, { index: 0, value: [] });
            }
        ),
    });

    var ReferenceCollection = defineProperties(generateClass(Reflect.BASE, {
        reset: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.dom.ReferenceCollection}
             */
            function () {
                return Reflect.getInternal(this).index = 0, this;
            }
        ),
        push: generateMethodDescriptor(
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
                var x = Reflect.getInternal(this);
                var r = RefObject.init(target);
                x.value.push(r);
                return r;
            }
        ),
        next: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.dom.ReferenceCollection}
             * @returns {Yarla.RefObject<any>}
             */
            function () {
                var x = Reflect.getInternal(this);
                if (x.index >= x.value.length) {
                    throw new Error(message.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                }
                var r = x.value[x.index++];
                return r;
            }
        ),
        destroy: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.dom.ReferenceCollection}
             */
            function () {
                Reflect.getInternal(this).value.splice(0).forEach(function (i) {
                    Reflect.getInternal(i).target = void 0;
                });
            }
        ),
    }, NOOP, "ReferenceCollection"), {
        init: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.Proto<Yarla.dom.ReferenceCollection>}
             */
            function () {
                return Reflect.construct(this, { index: 0, value: [] });
            }
        ),
    });

    var SituationCollection = defineProperties(generateClass(Reflect.BASE, {
        reset: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.dom.SituationCollection}
             */
            function () {
                return Reflect.getInternal(this).index = 0, this;
            }
        ),
        push: generateMethodDescriptor(
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
                var x = Reflect.getInternal(this);
                var r = {
                    get v() {
                        return state;
                    },
                    f: skrinkSerializer(
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
        next: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.dom.SituationCollection}
             * @returns {Yarla.Situation<any>}
             */
            function () {
                var x = Reflect.getInternal(this);
                if (x.index >= x.value.length) {
                    throw new Error(message.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                }
                var r = x.value[x.index++];
                return [
                    r.v,
                    r.f,
                ];
            }
        ),
        destroy: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.dom.SituationCollection}
             */
            function () {
                Reflect.getInternal(this).value.splice(0);
            }
        ),
    }, NOOP, "SituationCollection"), {
        init: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.Proto<Yarla.dom.SituationCollection>}
             */
            function () {
                return Reflect.construct(this, { index: 0, value: [] });
            }
        ),
    });

    var isDrearyComponent = skrinkSerializer(
        /**
         * 
         * @param {Yarla.Component} component 
         */
        function (
            component
        ) {
            return Reflect.hasMetadata(component) ? !!Reflect.getMetadata(component).ignoreUpdate : false;
        }
    );

    var isShadowComponent = skrinkSerializer(
        /**
         * 
         * @param {Yarla.Component} component 
         */
        function (
            component
        ) {
            return Reflect.hasMetadata(component) ? !!Reflect.getMetadata(component).shadowRoot : false;
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

    var getAttrMapping = skrinkSerializer(
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

    var getAttrSpecial = skrinkSerializer(
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

    var removeAttribute = skrinkSerializer(
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

    var getSelfClosing = skrinkSerializer(
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

    var getTypeSimilar = skrinkSerializer(
        /**
         * 
         * @param {string} [inputType] 
         */
        function (
            inputType
        ) {
            return _isNullOrUndefined(inputType) || HTML_TYPE_SIMILAR[inputType] || false;
        }
    );

    var judgmentRedraw = skrinkSerializer(
        /**
         * 
         * @param {Yarla.VMElement} VMNode1 
         * @param {Yarla.VMElement} VMNode2 
         */
        function (
            VMNode1,
            VMNode2
        ) {
            var i1 = _isInstanceOf(VMNode1, VMElement);
            var i2 = _isInstanceOf(VMNode2, VMElement);
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

    var createTextNode = skrinkSerializer(
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

    var remove = skrinkSerializer(
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

    var VMFragment = defineProperties(generateClass(Reflect.BASE, {
        nodeName: generateGetterDescriptor(
            /**
             * 
             * @this {Yarla.dom.VMFragment}
             */
            function () {
                return Reflect.getInternal(this).nodeName;
            }
        ),
        nodeType: generateGetterDescriptor(
            /**
             * 
             * @this {Yarla.dom.VMFragment}
             */
            function () {
                return Reflect.getInternal(this).nodeType;
            }
        ),
        childNodes: generateGetterDescriptor(
            /**
             * 
             * @this {Yarla.dom.VMFragment}
             */
            function () {
                return Reflect.getInternal(this).childNodes;
            }
        ),
        isConnected: generateGetterDescriptor(
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
        nextSibling: generateGetterDescriptor(
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
        previousSibling: generateGetterDescriptor(
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
        addEventListener: generateMethodDescriptor(
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
        removeEventListener: generateMethodDescriptor(
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
        dispatchEvent: generateMethodDescriptor(
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
        insertBefore: generateMethodDescriptor(
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
                        throw new Error(message.FAILED_TO_EXECUTE_INSERT);
                    }
                    n.splice(l, 0, node);
                } else {
                    n.push(node);
                }
                return node;
            }
        ),
        removeChild: generateMethodDescriptor(
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
                    throw new Error(message.FAILED_TO_EXECUTE_REMOVE);
                }
                return n.splice(l, 1).forEach(remove), node;
            }
        ),
        contains: generateMethodDescriptor(
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
        remove: generateMethodDescriptor(
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
            get: skrinkSerializer(
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
            set: skrinkSerializer(
                function () {
                    throw new Error(message.NOT_SUPPORTED);
                }
            ),
        },
    }, globalThis.Node || NOOP, "VMFragment"), {
        init: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.Proto<Yarla.dom.VMFragment>}
             */
            function () {
                return Reflect.construct(this, {
                    childNodes: [],
                    nodeName: "VMFragment",
                    nodeType: -1,
                });
            }
        ),
    });

    var createFragment = skrinkSerializer(
        function () {
            return VMFragment.init();
        }
    );

    var createElement = skrinkSerializer(
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

    var judgmentEvent = skrinkSerializer(
        /**
         * 
         * @param {string} attributeName 
         */
        function (
            attributeName
        ) {
            if (startsWith(attributeName, "on")) {
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

    var setAttribute = skrinkSerializer(
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

    var insertBefore = skrinkSerializer(
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

    var compare = skrinkSerializer(
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
                    } else if (!_isEqual(properties1[name], properties2[name])) {
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
            return skrinkSerializer(
                /**
                 * @this {Yarla.dom.VMRenderer}
                 */
                function () {
                    /** @type {Yarla.Writable<Yarla.dom.VMRenderer>} */
                    var instance = Reflect.getInternal(this);
                    instance.effections.reset();
                    instance.references.reset();
                    instance.situations.reset();
                    try {
                        return instance.phase = phase, zone.scope(this, function () {
                            // @ts-ignore
                            return processor.apply(this, arguments);
                            //
                        }, _flat(arguments));
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
            return generateNormalDescriptor(generate(Renderer.PHASE_CREATING, processor));
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
            return generateNormalDescriptor(generate(Renderer.PHASE_UPDATING, processor));
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
                oldTokenIndex = _isInstanceOf(newRenderer.VMNode, VMElement) && !_isNullOrUndefined(newRenderer.VMNode.key) ? oldTokenPairs[newRenderer.VMNode.key] : VMModFindIndexByIterator(newRenderer, start, end);
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
                    if (_isInstanceOf(VMNode, VMElement) && !_isNullOrUndefined(VMNode.key)) {
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
                if (_isNumber(oldTokenIndex)) {
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
                if (_isNullOrUndefined(oldStartVMsgr)) {
                    oldStartVMsgr = oldRenderers[++oldStartIndex];
                } else if (_isNullOrUndefined(oldEndedVMsgr)) {
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
            Reflect.getInternal(instance).children = newCollection;
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
                Reflect.getInternal(ref).target = renderer.target;
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
        var Renderer = defineProperties(generateClass(Reflect.BASE, {
            defer: generateGetterDescriptor(
                /**
                 * 
                 * @this {Yarla.dom.VMRenderer}
                 * @returns {Yarla.dom.Defer}
                 */
                function () {
                    return Reflect.getInternal(this).defer;
                }
            ),
            phase: generateGetterDescriptor(
                /**
                 * 
                 * @this {Yarla.dom.VMRenderer}
                 * @returns {number}
                 */
                function () {
                    return Reflect.getInternal(this).phase;
                }
            ),
            parent: generateGetterDescriptor(
                /**
                 * 
                 * @this {Yarla.dom.VMRenderer}
                 * @returns {Yarla.dom.VMRenderer | null}
                 */
                function () {
                    return Reflect.getInternal(this).parent;
                }
            ),
            target: generateGetterDescriptor(
                /**
                 * 
                 * @this {Yarla.dom.VMRenderer}
                 * @returns {Node}
                 */
                function () {
                    var target = Reflect.getInternal(this).target;
                    Reflect.set(target, Reflect.expr.RENDERER, this);
                    return target;
                }
            ),
            VMNode: generateGetterDescriptor(
                /**
                 * 
                 * @this {Yarla.dom.VMRenderer}
                 * @returns {Yarla.VMNode}
                 */
                function () {
                    return Reflect.getInternal(this).VMNode;
                }
            ),
            children: generateGetterDescriptor(
                /**
                 * 
                 * @this {Yarla.dom.VMRenderer}
                 * @returns {Array<Yarla.dom.VMRenderer>}
                 */
                function () {
                    return Reflect.getInternal(this).children;
                }
            ),
            effections: generateGetterDescriptor(
                /**
                 * 
                 * @this {Yarla.dom.VMRenderer}
                 * @returns {Yarla.dom.EffectionCollection}
                 */
                function () {
                    return Reflect.getInternal(this).effections;
                }
            ),
            memorables: generateGetterDescriptor(
                /**
                 * 
                 * @this {Yarla.dom.VMRenderer}
                 * @returns {Yarla.dom.MemorableCollection}
                 */
                function () {
                    return Reflect.getInternal(this).effections;
                }
            ),
            references: generateGetterDescriptor(
                /**
                 * 
                 * @this {Yarla.dom.VMRenderer}
                 * @returns {Yarla.dom.ReferenceCollection}
                 */
                function () {
                    return Reflect.getInternal(this).references;
                }
            ),
            situations: generateGetterDescriptor(
                /**
                 * 
                 * @this {Yarla.dom.VMRenderer}
                 * @returns {Yarla.dom.SituationCollection}
                 */
                function () {
                    return Reflect.getInternal(this).situations;
                }
            ),
            useRef: generateMethodDescriptor(
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
                    throw new Error(message.ILLEGAL_INVOCATION);
                }
            ),
            useMemo: generateMethodDescriptor(
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
                    throw new Error(message.ILLEGAL_INVOCATION);
                }
            ),
            useState: generateMethodDescriptor(
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
                    throw new Error(message.ILLEGAL_INVOCATION);
                }
            ),
            useTarget: generateMethodDescriptor(
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
                    return defineProperties(bean.wrap(this.target), getOwnPropertyDescriptors(patulous || {}));
                }
            ),
            useEffect: generateMethodDescriptor(
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
                    throw new Error(message.ILLEGAL_INVOCATION);
                }
            ),
            create: generateMethodDescriptor(
                function () {
                    throw new Error(message.NOT_IMPLEMENTED);
                }
            ),
            update: generateMethodDescriptor(
                function () {
                    throw new Error(message.NOT_IMPLEMENTED);
                }
            ),
            remove: generateMethodDescriptor(
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
        }, NOOP, "Renderer"), {
            NONE: generateNormalDescriptor(0, true, true),
            PHASE_CREATING: generateNormalDescriptor(1, true, true),
            PHASE_UPDATING: generateNormalDescriptor(2, true, true),
            init: generateMethodDescriptor(
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
                    return Reflect.construct((function () {
                        if (_isInstanceOf(VMNode, VMElement)) {
                            if (_isFunction(VMNode.type)) {
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
        var VirtualRenderer = generateClass(Reflect.BASE, {
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
                    var instance = Reflect.getInternal(this);
                    instance.target = createFragment(VMNode.type, document);
                    applyChildrenCreate(this, _flat([VMNode.type.call(null, VMNode.props, context)], 0, Infinity, true), document, namespaceURI, context);
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
                    var instance = Reflect.getInternal(this);
                    if (isDrearyComponent(VMNode.type)) {
                        instance.VMNode = VMNode;
                        return instance.target;
                    }
                    applyChildrenUpdate(this, _flat([VMNode.type.call(null, VMNode.props, context)], 0, Infinity, true), document, namespaceURI, context);
                    applyNodeDirectives(VMNode, context);
                    applyNodeReferences(VMNode, this);
                    instance.VMNode = VMNode;
                    return instance.target;
                }
            ),
        }, Renderer, "VirtualRenderer");
        var GalleryRenderer = generateClass(Reflect.BASE, {
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
                    var instance = Reflect.getInternal(this);
                    instance.target = createElement(Reflect.getMetadata(VMNode.type).tagName || "yarla-component", document, namespaceURI);
                    if (instance.target.attachShadow) {
                        instance.target.attachShadow({ mode: "open" });
                    }
                    applyChildrenCreate(this, _flat([VMNode.type.call(null, VMNode.props, context)], 0, Infinity, true), document, namespaceURI, context);
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
                    var instance = Reflect.getInternal(this);
                    if (isDrearyComponent(VMNode.type)) {
                        instance.VMNode = VMNode;
                        return instance.target;
                    }
                    applyChildrenUpdate(this, _flat([VMNode.type.call(null, VMNode.props, context)], 0, Infinity, true), document, namespaceURI, context);
                    applyNodeDirectives(VMNode, context);
                    applyNodeReferences(VMNode, this);
                    instance.VMNode = VMNode;
                    return instance.target;
                }
            ),
        }, Renderer, "GalleryRenderer");
        var ElementRenderer = generateClass(Reflect.BASE, {
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
                    var instance = Reflect.getInternal(this);
                    instance.target = createElement(VMNode.type, document, namespaceURI);
                    defineElementProperties(instance.target, VMNode.props);
                    if (getSelfClosing(VMNode.type)) {
                        if (VMNode.props.children.length > 0) {
                            throw new Error(message.SELF_CLOSING_ELEMENTS_CANNOT_CONTAIN_CHILD_NODES + ": " + VMNode.type);
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
                    var instance = Reflect.getInternal(this);
                    updateElementProperties(instance.target, compare(instance.VMNode.props, VMNode.props));
                    applyChildrenUpdate(this, VMNode.props.children, document, namespaceURI, context);
                    applyNodeDirectives(VMNode, context);
                    applyNodeReferences(VMNode, this);
                    instance.VMNode = VMNode;
                    return instance.target;
                }
            ),
        }, Renderer, "ElementRenderer");
        var ContentRenderer = generateClass(Reflect.BASE, {
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
                    var instance = Reflect.getInternal(this);
                    instance.target = createTextNode(_isNullOrUndefined(VMNode) ? "" : String(VMNode), document);
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
                    var instance = Reflect.getInternal(this);
                    if (instance.VMNode !== VMNode) {
                        instance.target.textContent = _isNullOrUndefined(VMNode) ? "" : String(VMNode);
                        instance.VMNode = VMNode;
                    }
                    return instance.target;
                }
            ),
        }, Renderer, "ContentRenderer");
        return Renderer;
    }());

    var clear = skrinkSerializer(
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

    var _render = skrinkSerializer(
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
            var popstate = _history.listen(skrinkSerializer(NOOP));
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
                forceUpdate: skrinkSerializer(
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
                unmount: skrinkSerializer(
                    function () {
                        popstate.cancel();
                        renderer.remove();
                    }
                ),
            }, ignoreUpdate);
        }
    );

    var _Router = defineProperties(skrinkSerializer(
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
        Redirect: generateMethodDescriptor(
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
        Link: generateMethodDescriptor(
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
        View: generateMethodDescriptor(
            /**
             *
             * @param {any} props
             * @returns {any}
             */
            function (
                props
            ) {
                return _glob(props.path).test(_history.location.pathname) ? VMElement.init(props.component, { history: _history }, props.children) : null;
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

    var _PureResult = generateClass(
        /**
         * 
         * @this {any}
         * @param {(req: import("http").IncomingMessage, res: import("http").ServerResponse) => void | Promise<void>} processor 
         */
        function (
            processor
        ) {
            return Reflect.defineInternal(this, processor, "processor");
        },
        {
            invoke: generateMethodDescriptor(
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
                    return Promise$1.resolve(Reflect.getInternal(this).processor.call(null, req, res));
                }
            ),
        },
        NOOP,
        "PureResult"
    );

    var _DataResult = generateClass(
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
                Reflect.defineInternal(this, data, "data"),
                Reflect.defineInternal(this, filename, "filename"),
                Reflect.defineInternal(this, mimetype, "mimetype"),
                Reflect.defineInternal(this, modified, "modified"));
        },
        {
            data: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 * @returns {Blob | Buffer | import("stream").Readable}
                 */
                function () {
                    return Reflect.getInternal(this).data;
                }
            ),
            filename: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 * @returns {string | undefined}
                 */
                function () {
                    return Reflect.getInternal(this).filename;
                }
            ),
            mimetype: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 * @returns {string | undefined}
                 */
                function () {
                    return Reflect.getInternal(this).mimetype;
                }
            ),
            modified: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 * @returns {{ readonly match?: string; readonly mtime?: number; } | undefined}
                 */
                function () {
                    return Reflect.getInternal(this).modified;
                }
            ),
        },
        NOOP,
        "DataResult"
    );

    var _FileResult = generateClass(
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
                Reflect.defineInternal(this, path, "path"),
                Reflect.defineInternal(this, filename, "filename"),
                Reflect.defineInternal(this, mimetype, "mimetype"));
        },
        {
            path: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 * @returns {string}
                 */
                function () {
                    return Reflect.getInternal(this).path;
                }
            ),
            filename: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 * @returns {string | undefined}
                 */
                function () {
                    return Reflect.getInternal(this).filename;
                }
            ),
            mimetype: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 * @returns {string | undefined}
                 */
                function () {
                    return Reflect.getInternal(this).mimetype;
                }
            ),
        },
        NOOP,
        "FileResult"
    );

    var _JsonResult = generateClass(
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
                Reflect.defineInternal(this, data, "data"),
                Reflect.defineInternal(this, code, "code"),
                Reflect.defineInternal(this, message, "message"));
        },
        {
            data: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 * @returns {any}
                 */
                function () {
                    return Reflect.getInternal(this).data;
                }
            ),
            code: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 * @returns {number | undefined}
                 */
                function () {
                    return Reflect.getInternal(this).code;
                }
            ),
            message: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 * @returns {string | undefined}
                 */
                function () {
                    return Reflect.getInternal(this).message;
                }
            ),
        },
        NOOP,
        "JsonResult"
    );

    var _NoneResult = generateClass(
        /**
         * 
         * @this {any}
         * @param {number} status 
         */
        function (
            status
        ) {
            return Reflect.defineInternal(this, status, "status");
        },
        {
            status: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 * @returns {number}
                 */
                function () {
                    return Reflect.getInternal(this).status;
                }
            ),
        },
        NOOP,
        "NoneResult"
    );

    var _EmptyResult = generateClass(
        /**
         * 
         * @this {any}
         */
        function () {
            return Reflect.callSuper(this, 204);
        },
        {

        },
        _NoneResult,
        "EmptyResult"
    );

    var _ResetResult = generateClass(
        /**
         * 
         * @this {any}
         */
        function () {
            return Reflect.callSuper(this, 205);
        },
        {

        },
        _NoneResult,
        "ResetResult"
    );

    var _RedirectResult = generateClass(
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
            return Reflect.defineInternal(Reflect.callSuper(this, status || 302), location, "location");
        },
        {
            location: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 * @returns {string}
                 */
                function () {
                    return Reflect.getInternal(this).location;
                }
            ),
        },
        _NoneResult,
        "RedirectResult"
    );

    var _NotFoundResult = generateClass(
        /**
         * 
         * @this {any}
         */
        function () {
            return Reflect.callSuper(this, 404);
        },
        {

        },
        _NoneResult,
        "NotFoundResult"
    );

    var _ForbiddenResult = generateClass(
        /**
         * 
         * @this {any}
         */
        function () {
            return Reflect.callSuper(this, 403);
        },
        {

        },
        _NoneResult,
        "ForbiddenResult"
    );

    var _UnauthorizedResult = generateClass(
        /**
         * 
         * @this {any}
         * @param {string} realm 
         */
        function (
            realm
        ) {
            return Reflect.defineInternal(Reflect.callSuper(this, 401), realm, "realm");
        },
        {
            realm: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 * @returns {string}
                 */
                function () {
                    return Reflect.getInternal(this).realm;
                }
            ),
        },
        _NoneResult,
        "UnauthorizedResult"
    );

    var SessionStorage = defineProperties(generateClass(Reflect.BASE, {
        count: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.koa.SessionStorage}
             * @returns {Promise<number>}
             */
            function () {
                return Promise$1.resolve(_keys(Reflect.getInternal(this).data).length);
            }
        ),
        tokens: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.koa.SessionStorage}
             * @returns {Promise<ReadonlyArray<string>>}
             */
            function () {
                return Promise$1.resolve(_keys(Reflect.getInternal(this).data));
            }
        ),
        delete: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.koa.SessionStorage}
             * @param {string} token
             * @returns {Promise<boolean>}
             */
            function (
                token
            ) {
                var o = Reflect.getInternal(this);
                var k = [String(token)];
                var d = o.data;
                var t = o.time;
                var h = _get$1(t, k);
                if (h) {
                    clearTimeout(h);
                }
                var x = _delete$1(d, k);
                var y = _delete$1(t, k);
                return Promise$1.resolve(x || y);
            }
        ),
        has: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.koa.SessionStorage}
             * @param {string} token 
             * @returns {Promise<boolean>}
             */
            function (
                token
            ) {
                return Promise$1.resolve(_has(Reflect.getInternal(this).data, [String(token)]));
            }
        ),
        get: generateMethodDescriptor(
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
                return Promise$1.resolve(_get$1(Reflect.getInternal(this).data, [String(token), String(key)]));
            }
        ),
        set: generateMethodDescriptor(
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
                return Promise$1.resolve(_set(Reflect.getInternal(this).data, [String(token), String(key)], value));
            }
        ),
        heartbeat: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.koa.SessionStorage}
             * @param {string} token 
             * @returns {Promise<void>}
             */
            function (
                token
            ) {
                var o = Reflect.getInternal(this);
                var k = [String(token)];
                var s = o.opts.expire;
                var d = o.data;
                var t = o.time;
                var h = _get$1(t, k);
                if (h) {
                    clearTimeout(h);
                }
                if (s > 0) {
                    var r = _set(t, k, setTimeout$1(function () {
                        _delete$1(d, k);
                        _delete$1(t, k);
                    }, s * 60 * 1000));
                    if (_isObject(r)) {
                        r.unref();
                    }
                } else {
                    _delete$1(t, k);
                }
                return Promise$1.resolve();
            }
        ),
    }, NOOP, "SessionStorage"), {
        init: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.Proto<Yarla.koa.SessionStorage>}
             * @param {Yarla.koa.SessionStorageInitializationOptions} opts 
             */
            function (
                opts
            ) {
                return Reflect.construct(this, {
                    opts: opts,
                    time: {},
                    data: {},
                });
            }
        ),
    });

    var _createSessionStorage = skrinkSerializer(
        /**
         * 
         * @param {Yarla.koa.SessionStorageInitializationOptions} [opts] 
         */
        function (
            opts
        ) {
            return SessionStorage.init(_defaults$1({ expire: 20 }, opts));
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
        return typeof require !== "undefined" ? require( /* webpackIgnore: true */ id) : null;
    };

    var crypto = nodeRequire("crypto");

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
        var m = crypto.createHmac(definition.SHA256, h).update(arg1, definition.UTF8).digest();
        var n = crypto.createHmac(definition.SHA256, h).update(arg2, definition.UTF8).digest();
        var q = crypto.timingSafeEqual(m, n);
        return q && arg1 === arg2;
    }

    var TokenGenerator = (function () {
        return defineProperties(generateClass(Reflect.BASE, {
            generate: generateMethodDescriptor(
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
                    var ARGCS = Reflect.getInternal(this).opts.secret;
                    var TOKEN = context.getRequestCookie("X-HTTP-ID");
                    if (!validate(TOKEN, ARGCS)) {
                        context.setResponseCookie("X-HTTP-ID", TOKEN = generate(_salt(64), ARGCS), { httpOnly: true });
                    }
                    return Promise$1.resolve(TOKEN);
                }
            )
        }, NOOP, "TokenGenerator"), {
            init: generateMethodDescriptor(
                /**
                 * 
                 * @this {Yarla.Proto<Yarla.koa.TokenGenerator>}
                 * @param {Yarla.koa.TokenGeneratorInitializationOptions} opts 
                 */
                function (
                    opts
                ) {
                    return Reflect.construct(this, {
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
            return _btoa(crypto.createHash(definition.SHA256).update([sect.slice(8), argc, sect.slice(0, 8)].join("-")).digest(definition.HEX), true) + "." + argc;
        }
    }());

    var _createTokenGenerator = skrinkSerializer(
        /**
         * 
         * @param {Yarla.koa.TokenGeneratorInitializationOptions} [opts]
         */
        function (
            opts
        ) {
            return TokenGenerator.init(_defaults$1({ secret: _salt(128) }, opts));
        }
    );

    var url = nodeRequire("url");

    var VisitValidator = (function () {
        return defineProperties(generateClass(Reflect.BASE, {
            validate: generateMethodDescriptor(
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
                    var ARGCX = context.getRequestHeader(httpHeader.X_REQUESTED_WITH);
                    var ARGCO = complete(context.origin || context.referer);
                    var ARGCH = complete(context.host);
                    /** @type {Yarla.SameSite | ReadonlyArray<string>} */
                    var ARGCS = Reflect.getInternal(this).opts.origin;
                    var ACCESS_CONTROL_ALLOW_HEADERS = [
                        httpHeader.ORIGIN,
                        httpHeader.REFERER,
                        httpHeader.AUTHORIZATION,
                        httpHeader.X_REQUESTED_WITH,
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
                    if (ARGCM === "OPTIONS" || ARGCX === "XMLHttpRequest") {
                        if (ARGCS === "Strict") {
                            if (ARGCH && ARGCO && ARGCH.host === ARGCO.host) {
                                return Promise$1.resolve(true); // Not Response Headers
                            }
                            return Promise$1.resolve(false);
                        }
                        if (ARGCS === "Lax") {
                            if (ARGCH && ARGCO && ARGCH.hostname === ARGCO.hostname) {
                                context.setResponseHeader(httpHeader.ACCESS_CONTROL_MAX_AGE, "600");
                                context.setResponseHeader(httpHeader.ACCESS_CONTROL_ALLOW_CREDENTIALS, "true");
                                context.setResponseHeader(httpHeader.ACCESS_CONTROL_ALLOW_HEADERS, ACCESS_CONTROL_ALLOW_HEADERS);
                                context.setResponseHeader(httpHeader.ACCESS_CONTROL_ALLOW_METHODS, ACCESS_CONTROL_ALLOW_METHODS);
                                context.setResponseHeader(httpHeader.ACCESS_CONTROL_ALLOW_ORIGIN, context.origin || "*");
                                return Promise$1.resolve(true);
                            }
                            return Promise$1.resolve(false);
                        }
                        if (ARGCS === "None" || ARGCS.includes("*")) {
                            context.setResponseHeader(httpHeader.ACCESS_CONTROL_MAX_AGE, "600");
                            context.setResponseHeader(httpHeader.ACCESS_CONTROL_ALLOW_CREDENTIALS, "true");
                            context.setResponseHeader(httpHeader.ACCESS_CONTROL_ALLOW_HEADERS, ACCESS_CONTROL_ALLOW_HEADERS);
                            context.setResponseHeader(httpHeader.ACCESS_CONTROL_ALLOW_METHODS, ACCESS_CONTROL_ALLOW_METHODS);
                            context.setResponseHeader(httpHeader.ACCESS_CONTROL_ALLOW_ORIGIN, context.origin || "*");
                            return Promise$1.resolve(true);
                        }
                        if (ARGCO) {
                            for (var
                                i = 0,
                                l = ARGCS.length;
                                i < l;
                                i++
                            ) {
                                if (_glob(ARGCS[i]).test(ARGCO.host)) {
                                    return Promise$1.resolve(true);
                                }
                            }
                        }
                        return Promise$1.resolve(false);
                    }
                    return Promise$1.resolve(R);
                }
            ),
        }, NOOP, "VisitValidator"), {
            init: generateMethodDescriptor(
                /**
                 * 
                 * @this {Yarla.Proto<Yarla.koa.VisitValidator>}
                 * @param {Yarla.koa.VisitValidatorInitializationOptions} opts 
                 */
                function (
                    opts
                ) {
                    return Reflect.construct(this, {
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
            return host ? new url.URL(/^\w+:\/\//.test(host) ? host : "yarla:" + (startsWith(host, "//") ? "" : "//") + host) : null;
        }
    }());

    var _createVisitValidator = skrinkSerializer(
        /**
         * 
         * @param {Yarla.koa.VisitValidatorInitializationOptions} [opts] 
         */
        function (
            opts
        ) {
            return VisitValidator.init(_defaults$1({ origin: "Strict" }, opts));
        }
    );

    var fs = nodeRequire("fs");

    var path = nodeRequire("path");

    var zlib = nodeRequire("zlib");

    var stream = nodeRequire("stream");

    var process = nodeRequire("process");

    var env$1 = {
        DEVELOPMENT: process ? process.env.NODE_ENV === definition.DEVELOPMENT : false,
    };

    var Session = defineProperties(generateClass(Reflect.BASE, {
        id: generateGetterDescriptor(
            /**
             * 
             * @this {Yarla.koa.Session}
             * @returns {string}
             */
            function () {
                return Reflect.getInternal(this).id;
            },
            true
        ),
        get: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.koa.Session}
             * @param {string} key 
             * @returns {Promise<any>}
             */
            function (key) {
                return Reflect.getInternal(this).os.get(this.id, key);
            }
        ),
        set: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.koa.Session}
             * @param {string} key
             * @param {any} value 
             * @returns {Promise<any>}
             */
            function (key, value) {
                return Reflect.getInternal(this).os.get(this.id, key, value);
            }
        ),
    }, NOOP, "Session"), {
        init: generateMethodDescriptor(
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
                return Reflect.construct(this, {
                    os: storage,
                    id: id,
                });
            }
        ),
    });

    var readline = nodeRequire("readline");

    var read = skrinkSerializer(
        /**
         * 
         * @param {import("stream").Readable} readable 
         * @param {number} [maximum] 
         */
        function (
            readable,
            maximum
        ) {
            var l = Math.pow(2, 30) - 1;
            var m = Math.min(maximum || l, l);
            return new Promise$1(function (resolve, reject) {
                /** @type {Buffer[]} */
                var r = [], t = false;
                readable.on("close", function () {
                    if (t || readable.readableEnded) {
                        return;
                    }
                    reject(new Error(message.STREAM_CLOSED_BEFORE_ENDING));
                });
                readable.on("error", function (reason) {
                    t = true, reject(reason);
                });
                readable.on("end", function () {
                    resolve(Buffer.concat(r));
                });
                readable.on("readable", function () {
                    /** @type {Buffer} */
                    var i;
                    while (i = readable.read()) {
                        var l = r.reduce(function (v, i) { return v + i.length; }, i.length);
                        if (l > m) {
                            readable.destroy(new HttpError(413));
                            break;
                        }
                        r.push(i);
                    }
                });
            });
        }
    );

    var Context = (function () {
        return defineProperties(generateClass(Reflect.BASE, {
            IP: generateGetterDescriptor(
                /**
                 * 
                 * @this {Yarla.koa.Context}
                 * @returns {string} 
                 */
                function () {
                    return Reflect.once(this, Reflect.expr.IP, function () {
                        /** @type {string} */
                        var http;
                        http = this.getRequestHeader(httpHeader.X_REAL_IP)
                            || this.getRequestHeader(httpHeader.X_FORWARDED_FOR)
                            || Reflect.getInternal(this).request.socket.remoteAddress
                            || "";
                        var loc = http.indexOf(",");
                        if (loc !== -1) {
                            http = http.slice(0, loc);
                        }
                        return http;
                    });
                }
            ),
            UA: generateGetterDescriptor(
                /**
                 * 
                 * @this {Yarla.koa.Context} 
                 * @returns {string} 
                 */
                function () {
                    return Reflect.once(this, Reflect.expr.UA, function () {
                        return this.getRequestHeader(httpHeader.USER_AGENT);
                    });
                }
            ),
            host: generateGetterDescriptor(
                /**
                 * 
                 * @this {Yarla.koa.Context} 
                 * @returns {string} 
                 */
                function () {
                    return Reflect.once(this, Reflect.expr.HOST, function () {
                        /** @type {string} */
                        var http;
                        http = this.getRequestHeader(httpHeader.X_REAL_HOST)
                            || this.getRequestHeader(httpHeader.X_FORWARDED_HOST)
                            || this.getRequestHeader(httpHeader.HOST);
                        var loc = http.indexOf(",");
                        if (loc !== -1) {
                            http = http.slice(0, loc);
                        }
                        return http;
                    });
                }
            ),
            search: generateGetterDescriptor(
                /**
                 * 
                 * @this {Yarla.koa.Context} 
                 * @returns {any} 
                 */
                function () {
                    return Reflect.once(this, Reflect.expr.SEARCH, function () {
                        /** @type {import("http").IncomingMessage} */
                        var req = Reflect.getInternal(this).request;
                        var res = req.url || "/";
                        var loc = res.indexOf("?");
                        if (loc !== -1) {
                            res = res.slice(loc);
                        } else {
                            res = "";
                        }
                        return queries.parse(res);
                    });
                }
            ),
            method: generateGetterDescriptor(
                /**
                 * 
                 * @this {Yarla.koa.Context} 
                 * @returns {string} 
                 */
                function () {
                    return Reflect.once(this, Reflect.expr.METHOD, function () {
                        /** @type {import("http").IncomingMessage} */
                        var req = Reflect.getInternal(this).request;
                        var res = req.method || "GET";
                        return res.toUpperCase();
                    });
                }
            ),
            length: generateGetterDescriptor(
                /**
                 * 
                 * @this {Yarla.koa.Context} 
                 * @returns {number} 
                 */
                function () {
                    return Reflect.once(this, Reflect.expr.LENGTH, function () {
                        return parseInt(this.getRequestHeader(httpHeader.CONTENT_LENGTH));
                    });
                }
            ),
            origin: generateGetterDescriptor(
                /**
                 * 
                 * @this {Yarla.koa.Context} 
                 * @returns {string} 
                 */
                function () {
                    return Reflect.once(this, Reflect.expr.ORIGIN, function () {
                        return this.getRequestHeader(httpHeader.ORIGIN);
                    });
                }
            ),
            referer: generateGetterDescriptor(
                /**
                 * 
                 * @this {Yarla.koa.Context} 
                 * @returns {string} 
                 */
                function () {
                    return Reflect.once(this, Reflect.expr.REFERER, function () {
                        return this.getRequestHeader(httpHeader.REFERER);
                    });
                }
            ),
            version: generateGetterDescriptor(
                /**
                 * 
                 * @this {Yarla.koa.Context} 
                 * @returns {string} 
                 */
                function () {
                    return Reflect.once(this, Reflect.expr.VERSION, function () {
                        /** @type {import("http").IncomingMessage} */
                        var req = Reflect.getInternal(this).request;
                        var res = req.httpVersion;
                        return res;
                    });
                }
            ),
            protocol: generateGetterDescriptor(
                /**
                 * 
                 * @this {Yarla.koa.Context} 
                 * @returns {string} 
                 */
                function () {
                    return Reflect.once(this, Reflect.expr.PROTOCOL, function () {
                        /** @type {string} */
                        var http;
                        http = this.getRequestHeader(httpHeader.X_REAL_PROTO)
                            || this.getRequestHeader(httpHeader.X_FORWARDED_PROTO)
                            || (Reflect.getInternal(this).request.socket.encrypted ? definition.HTTPS : definition.HTTP);
                        var loc = http.indexOf(",");
                        if (loc !== -1) {
                            http = http.slice(0, loc);
                        }
                        return http;
                    });
                }
            ),
            pathname: generateGetterDescriptor(
                /**
                 * 
                 * @this {Yarla.koa.Context} 
                 * @returns {string} 
                 */
                function () {
                    return Reflect.once(this, Reflect.expr.PATHNAME, function () {
                        /** @type {import("http").IncomingMessage} */
                        var req = Reflect.getInternal(this).request;
                        var res = req.url || "/";
                        var loc = res.indexOf("?");
                        if (loc !== -1) {
                            res = res.slice(0, loc);
                        }
                        return "/" + separate(res).join("/");
                    });
                }
            ),
            mimetype: generateGetterDescriptor(
                /**
                 * 
                 * @this {Yarla.koa.Context} 
                 * @returns {string} 
                 */
                function () {
                    return Reflect.once(this, Reflect.expr.MIMETYPE, function () {
                        return solveSemicolon(this.getRequestHeader(httpHeader.CONTENT_TYPE));
                    });
                }
            ),
            boundary: generateGetterDescriptor(
                /**
                 * 
                 * @this {Yarla.koa.Context} 
                 * @returns {string} 
                 */
                function () {
                    return Reflect.once(this, Reflect.expr.BOUNDARY, function () {
                        return solveDelimiter(this.getRequestHeader(httpHeader.CONTENT_TYPE));
                    });
                }
            ),
            encoding: generateGetterDescriptor(
                /**
                 * 
                 * @this {Yarla.koa.Context} 
                 * @returns {ReadonlyArray<string>} 
                 */
                function () {
                    return Reflect.once(this, Reflect.expr.ENCODING, function () {
                        return this.getRequestHeader(httpHeader.ACCEPT_ENCODING).split(",").map(solveSemicolon);
                    });
                }
            ),
            language: generateGetterDescriptor(
                /**
                 * 
                 * @this {Yarla.koa.Context} 
                 * @returns {ReadonlyArray<string>} 
                 */
                function () {
                    return Reflect.once(this, Reflect.expr.LANGUAGE, function () {
                        return this.getRequestHeader(httpHeader.ACCEPT_LANGUAGE).split(",").map(solveSemicolon);
                    });
                }
            ),
            range: generateGetterDescriptor(
                /**
                 * 
                 * @this {Yarla.koa.Context} 
                 * @returns {ReadonlyArray<number>} 
                 */
                function () {
                    return Reflect.once(this, Reflect.expr.RANGE, function () {
                        return this.getRequestHeader(httpHeader.RANGE).split(/bytes=([0-9]*)-([0-9]*)/i).slice(1, 3).map(function (i) { return parseInt(i); });
                    });
                }
            ),
            getRequestCookie: generateMethodDescriptor(
                /**
                 * 
                 * @this {Yarla.koa.Context} 
                 * @param {string} name 
                 */
                function (
                    name
                ) {
                    return String(Reflect.once(this, Reflect.expr.COOKIES, function () {
                        return new KVPair(cookies.parse(this.getRequestHeader(httpHeader.COOKIE)), true);
                    }).get(name) || "");
                }
            ),
            getRequestHeader: generateMethodDescriptor(
                /**
                 * 
                 * @this {Yarla.koa.Context} 
                 * @param {string} name 
                 */
                function (
                    name
                ) {
                    return String(Reflect.once(this, Reflect.expr.HEADERS, function () {
                        return new KVPair(Reflect.getInternal(this).request.headers, true);
                    }).get(name) || "");
                }
            ),
            setResponseCookie: generateMethodDescriptor(
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
                    Reflect.getInternal(this).cookies.set(name, cookies.serialize(name, value, _defaults$1({ path: "/", UA: this.UA, protocol: this.protocol, sameSite: Reflect.getInternal(this).opts.accessCookieAllowOrigin || "Lax" }, opts)));
                }
            ),
            setResponseHeader: generateMethodDescriptor(
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
                    Reflect.getInternal(this).headers.set(name, value);
                }
            ),
            deleteResponseCookie: generateMethodDescriptor(
                /**
                 * 
                 * @this {Yarla.koa.Context} 
                 * @param {string} name 
                 */
                function (
                    name
                ) {
                    return Reflect.getInternal(this).cookies.delete(name);
                }
            ),
            deleteResponseHeader: generateMethodDescriptor(
                /**
                 * 
                 * @this {Yarla.koa.Context} 
                 * @param {string} name 
                 */
                function (
                    name
                ) {
                    return Reflect.getInternal(this).headers.delete(name);
                }
            ),
            pipe: generateMethodDescriptor(
                /**
                 * 
                 * @this {Yarla.koa.Context}
                 * @param {Yarla.Object<T, NodeJS.WritableStream>} writable 
                 * @returns {T}
                 * @template T
                 */
                function (
                    writable
                ) {
                    return Reflect.getInternal(this).request.pipe(writable);
                }
            ),
            readline: generateMethodDescriptor(
                /**
                 * 
                 * @this {Yarla.koa.Context}
                 * @returns {AsyncIterable<string>}
                 */
                function () {
                    return readline.createInterface({ input: Reflect.getInternal(this).request, crlfDelay: Infinity });
                }
            ),
            read: generateMethodDescriptor(
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
                    return Reflect.once(this, Reflect.expr.BODY, function () {
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
                                    return Promise$1.reject(new HttpError(413));
                                }
                                return read(context.request, maximum);
                            }(Reflect.getInternal(this))
                        );
                    }).then(function (res) {
                        if (original) {
                            return res;
                        }
                        if (mimetype === httpContent.FORM) {
                            return queries.parse(res.toString(definition.UTF8).trim());
                        }
                        if (mimetype === httpContent.JSON) {
                            return JSON.parse(res.toString(definition.UTF8).trim() || "{}");
                        }
                        if (mimetype !== httpContent.MULT) {
                            throw new HttpError(415);
                        }
                        if (!boundary) {
                            throw new HttpError(400);
                        }
                        var sep = Buffer.from("--" + boundary, definition.UTF8);
                        var end = Buffer.from("\r\n\r\n", definition.UTF8);
                        var ln1 = res.length;
                        var ln2 = sep.length;
                        if (ln1 <= ln2 + 4) {
                            throw new HttpError(400);
                        }
                        var i = 0;
                        var j = 0;
                        var k = res.indexOf(sep);
                        if (k === -1) {
                            throw new HttpError(400);
                        }
                        var r = {};
                        while (true) {
                            i = k + ln2 + 2;
                            j = res.indexOf(end, i);
                            if (j === -1) { break; }
                            k = res.indexOf(sep, j + 4);
                            if (k === -1) { break; }
                            var m = solveMultipart(res.subarray(i, j).toString(definition.UTF8));
                            var n = m.formname;
                            var f = m.filename;
                            var e = m.encoding;
                            if (n) {
                                var d = res.subarray(j + 4, k - 2);
                                if (e === definition.BASE64) {
                                    d = Buffer.from(d.toString(definition.ASCII), definition.BASE64);
                                }
                                if (f) {
                                    r[n] = {
                                        buffer: d,
                                        filename: f ? path.basename(f) : f,
                                        encoding: e,
                                    };
                                } else {
                                    r[n] = d.toString(definition.UTF8);
                                }
                            }
                        }
                        return r;
                    });
                }
            ),
        }, NOOP, "Context"), {
            init: generateMethodDescriptor(
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
                    return Reflect.construct(this, {
                        cookies: new KVPair(true),
                        headers: new KVPair(true),
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

    var module = nodeRequire("module");

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
                return context.getRequestHeader(httpHeader.X_REQUESTED_WITH) !== "XMLHttpRequest";
            },
        },
        {
            dist: "src"
        },
    ] : [];

    var acornCore = nodeRequire("acorn");

    var acornWalk = nodeRequire("acorn-walk");

    var typescript = nodeRequire("typescript");

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
                compilerOptions = _merge(compilerOptions, _omit(
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
            if (_isString(name) && name.length > 0) {
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
            if (_isArray(node)) {
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
            rename = _clone(_rename);
            define = _clone(_define);
            rename["this"] = null;
            argv.forEach(function (node) {
                if (_isString(node)) {
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
                    inScope(_flat([node.params, node.id], 0, 1, true), function () {
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

    var console = globalThis.console || {
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

    var _statSync = skrinkSerializer(
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

    var _readFileSync = skrinkSerializer(
        /**
         * 
         * @param {string} filename 
         * @param {number} [maximum] 
         */
        function (
            filename,
            maximum
        ) {
            var l = Math.pow(2, 30) - 1;
            var m = Math.min(maximum || l, l);
            if (_statSync(filename).size > m) {
                throw new HttpError(413);
            }
            return fs.readFileSync(filename);
        }
    );

    var _statInfo = skrinkSerializer(
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
                hash: crypto.createHash(definition.MD5).update([filename, s.mtime.toJSON(), s.size].join("-")).digest(definition.HEX),
                atime: s.atime,
                ctime: s.ctime,
                mtime: s.mtime,
                size: s.size,
            };
        }
    );

    var _exists = skrinkSerializer(
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

    var _isFile = skrinkSerializer(
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

    var _isDirectory = skrinkSerializer(
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

    var _resolve$1 = skrinkSerializer(
        function () {
            return path.resolve.apply(path, _flat(arguments));
        }
    );

    var _find = (function () {
        return skrinkSerializer(
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
                var info = JSON.parse(_readFileSync(position).toString(definition.UTF8));
                var main = info.main;
                if (_isString(main)) {
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
        return skrinkSerializer(
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
                    return skrinkSerializer(
                        function (req, res) {
                            return (function (ctx) {
                                var AGENT = ctx.UA;
                                var ARGCR = ctx.range;
                                var ARGCM = ctx.method;
                                var ARGCP = ctx.pathname;
                                var ARGCE = ctx.encoding;
                                var MATCH = ctx.getRequestHeader(httpHeader.IF_NONE_MATCH);
                                var SINCE = ctx.getRequestHeader(httpHeader.IF_MODIFIED_SINCE);
                                var EMPTY = ARGCM === "OPTIONS" || ARGCM === "HEAD";
                                var GZLIB = [];
                                if (ARGCE.includes(definition.BR)) {
                                    GZLIB.push(definition.BR, {
                                        params: defineProperty({}, zlib.constants.BROTLI_PARAM_QUALITY, generateNormalDescriptor(compressLevel, true)),
                                    });
                                } else if (ARGCE.includes(definition.GZIP)) {
                                    GZLIB.push(definition.GZIP, {
                                        level: compressLevel,
                                    });
                                } else if (ARGCE.includes(definition.DEFLATE)) {
                                    GZLIB.push(definition.DEFLATE, {
                                        level: compressLevel,
                                    });
                                }
                                if (ctx.getRequestHeader(httpHeader.X_REQUESTED_WITH) === "XMLHttpRequest") {
                                    ctx.setResponseHeader(httpHeader.X_RESPONSED_URL, req.url || "/");
                                }
                                customHeaders.forEach(function (value, name) {
                                    ctx.setResponseHeader(name, value);
                                });
                                return visitValidator.validate(ctx).then(function (VISITABLE) {
                                    return tokenGenerator.generate(ctx).then(function (TOKEN) {
                                        if (VISITABLE) {
                                            for (var
                                                i = 0,
                                                l = ACTION.length;
                                                i < l;
                                                i++
                                            ) {
                                                if (contain(ARGCM, ACTION[i].method) && _glob(ACTION[i].path).test(ARGCP)) {
                                                    return ACTION[i].listen(ctx, Session.init(TOKEN, sessionStorage));
                                                }
                                            }
                                            if (ARGCM === "GET" ||
                                                ARGCM === "HEAD" ||
                                                ARGCM === "OPTIONS") {
                                                var pathname;
                                                if (compareIgnoreCase(ARGCP, "/")) {
                                                    pathname = normalize("index.html");
                                                    if (_isFile(pathname)) {
                                                        return new _RedirectResult("/index.html");
                                                    }
                                                }
                                                if (compareIgnoreCase(ARGCP, "/index.html")) {
                                                    pathname = normalize("index.html");
                                                    if (_isFile(pathname)) {
                                                        return new _FileResult(pathname);
                                                    }
                                                }
                                                if (compareIgnoreCase(ARGCP, "/favicon.ico")) {
                                                    pathname = normalize(FAVICON);
                                                    if (_isFile(pathname)) {
                                                        return new _FileResult(pathname);
                                                    }
                                                }
                                                if (compareIgnoreCase(ARGCP, "/sitemap.xml")) {
                                                    pathname = normalize(SITEMAP);
                                                    if (_isFile(pathname)) {
                                                        return new _FileResult(pathname);
                                                    }
                                                }
                                                if (compareIgnoreCase(ARGCP, "/robots.txt")) {
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
                                                    var MODED = MODULE[i].dist;
                                                    var MODEI = MODULE[i].ignore;
                                                    var MODES = MODULE[i].static;
                                                    var MODEE = MODULE[i].extnames;
                                                    var MODEC = MODULE[i].compiler;
                                                    if (cognate(ARGCP, MODED)) {
                                                        if (_isFunction(MODEI)) {
                                                            if (MODEI.call(MODULE[i], ARGCP, ctx)) {
                                                                return insurance(ARGCP);
                                                            }
                                                        }
                                                        pathname = normalize(ARGCP);
                                                        var name = _find(pathname, MODEE || HTTP_EXTNAMES);
                                                        if (name) {
                                                            if (compareIgnoreCase(pathname, name)) {
                                                                if (_isFunction(MODES)) {
                                                                    if (MODES.call(MODULE[i], ARGCP, ctx)) {
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
                                }).then(function (result) {
                                    var PATH;
                                    var NAME;
                                    var TYPE;
                                    var DATA;
                                    var INFO;
                                    var SIZE;
                                    var DATE;
                                    var NEED;
                                    var MSIE = /\b(?:Trident|MSIE|Edge)\b/i.test(AGENT);
                                    var NOCACHE = "no-cache";
                                    var CACHING = "max-age=0";
                                    serialize(ctx).forEach(
                                        function (val, key) {
                                            if (val && val.length > 0) {
                                                res.setHeader(key, val);
                                            }
                                        }
                                    );
                                    if (_isInstanceOf(result, _PureResult)) {
                                        return Promise$1.resolve(result.invoke(req, res)).then(function () { res.end(); });
                                    }
                                    if (_isInstanceOf(result, _UnauthorizedResult)) {
                                        res.statusCode = result.status;
                                        res.setHeader(httpHeader.WWW_AUTHENTICATE, "Basic realm=" + JSON.stringify(result.realm));
                                        res.setHeader(httpHeader.CACHE_CONTROL, NOCACHE);
                                        res.setHeader(httpHeader.PRAGMA, NOCACHE);
                                        res.end();
                                        return;
                                    }
                                    if (_isInstanceOf(result, _ForbiddenResult)) {
                                        res.statusCode = result.status;
                                        res.setHeader(httpHeader.CACHE_CONTROL, NOCACHE);
                                        res.setHeader(httpHeader.PRAGMA, NOCACHE);
                                        res.end();
                                        return;
                                    }
                                    if (_isInstanceOf(result, _NotFoundResult)) {
                                        res.statusCode = result.status;
                                        res.setHeader(httpHeader.CACHE_CONTROL, NOCACHE);
                                        res.setHeader(httpHeader.PRAGMA, NOCACHE);
                                        res.end();
                                        return;
                                    }
                                    if (_isInstanceOf(result, _RedirectResult)) {
                                        res.statusCode = result.status;
                                        res.setHeader(httpHeader.LOCATION, result.location);
                                        res.setHeader(httpHeader.CACHE_CONTROL, NOCACHE);
                                        res.setHeader(httpHeader.PRAGMA, NOCACHE);
                                        res.end();
                                        return;
                                    }
                                    if (_isInstanceOf(result, _EmptyResult)) {
                                        res.statusCode = result.status;
                                        res.setHeader(httpHeader.CACHE_CONTROL, NOCACHE);
                                        res.setHeader(httpHeader.PRAGMA, NOCACHE);
                                        res.end();
                                        return;
                                    }
                                    if (_isInstanceOf(result, _ResetResult)) {
                                        res.statusCode = result.status;
                                        res.setHeader(httpHeader.CACHE_CONTROL, NOCACHE);
                                        res.setHeader(httpHeader.PRAGMA, NOCACHE);
                                        res.end();
                                        return;
                                    }
                                    if (_isInstanceOf(result, _NoneResult)) {
                                        res.statusCode = result.status;
                                        res.setHeader(httpHeader.CACHE_CONTROL, NOCACHE);
                                        res.setHeader(httpHeader.PRAGMA, NOCACHE);
                                        res.end();
                                        return;
                                    }
                                    if (_isInstanceOf(result, _JsonResult)) {
                                        TYPE = MIMETYPE.json || HTTP_MIMETYPE.json;
                                        DATA = Buffer.from(JSON.stringify({
                                            message: result.message,
                                            data: result.data,
                                            code: result.code,
                                        }), definition.UTF8);
                                        SIZE = DATA.length;
                                    }
                                    if (_isInstanceOf(result, _DataResult)) {
                                        NAME = result.filename;
                                        TYPE = result.mimetype || mimetype(MSIE, NAME);
                                        INFO = result.modified;
                                        DATA = result.data;
                                        if (INFO) {
                                            var NO_MODIFIED = false;
                                            var SINCE_VALUE = INFO.since;
                                            var MATCH_VALUE = INFO.match;
                                            res.setHeader(httpHeader.CACHE_CONTROL, CACHING);
                                            res.setHeader(httpHeader.EXPIRES, new Date((Date.parse(SINCE_VALUE) || latest) + expire).toUTCString());
                                            if (SINCE_VALUE) {
                                                NO_MODIFIED = NO_MODIFIED || SINCE_VALUE === SINCE;
                                                res.setHeader(httpHeader.LAST_MODIFIED, SINCE_VALUE);
                                            }
                                            if (MATCH_VALUE) {
                                                NO_MODIFIED = NO_MODIFIED || MATCH_VALUE === MATCH;
                                                res.setHeader(httpHeader.ETAG, MATCH_VALUE);
                                            }
                                            if (NO_MODIFIED) {
                                                res.statusCode = 304;
                                                res.end();
                                                return;
                                            }
                                        }
                                        if (Buffer.isBuffer(DATA)) {
                                            SIZE = DATA.length;
                                        }
                                        if (SIZE === 0 || EMPTY) {
                                            res.statusCode = EMPTY ? 204 : 200;
                                            res.setHeader(httpHeader.CONTENT_LENGTH, SIZE || 0);
                                            res.end();
                                            return;
                                        }
                                    }
                                    if (_isInstanceOf(result, _FileResult)) {
                                        PATH = result.path;
                                        NAME = result.filename;
                                        TYPE = result.mimetype || mimetype(MSIE, NAME || PATH);
                                        INFO = _statInfo(PATH);
                                        DATE = INFO.mtime;
                                        SIZE = INFO.size;
                                        if (SIZE === 0 || EMPTY) {
                                            res.statusCode = EMPTY ? 204 : 200;
                                            res.setHeader(httpHeader.ACCEPT_RANGES, "bytes");
                                            res.setHeader(httpHeader.CONTENT_LENGTH, SIZE);
                                            res.end();
                                            return;
                                        }
                                        if (ARGCR.length === 2) {
                                            var TOP_LOC = ARGCR[0];
                                            var END_LOC = ARGCR[1];
                                            if (_isNaN(TOP_LOC) &&
                                                _isNaN(END_LOC)) {
                                                TOP_LOC = 0;
                                                END_LOC = SIZE - 1;
                                            } else if (_isNaN(TOP_LOC)) {
                                                TOP_LOC = SIZE - END_LOC;
                                                END_LOC = SIZE - 1;
                                            } else if (_isNaN(END_LOC)) {
                                                END_LOC = SIZE - 1;
                                            }
                                            if ((TOP_LOC >= SIZE) ||
                                                (END_LOC >= SIZE) ||
                                                (TOP_LOC > END_LOC)) {
                                                res.statusCode = 416;
                                                res.setHeader(httpHeader.CONTENT_RANGE, "bytes */" + SIZE);
                                                res.end();
                                                return;
                                            }
                                            END_LOC = Math.min(END_LOC, TOP_LOC + 0xFFFF);
                                            DATA = fs.createReadStream(PATH, {
                                                start: TOP_LOC,
                                                end: END_LOC,
                                            });
                                            res.statusCode = 206;
                                            res.setHeader(httpHeader.ACCEPT_RANGES, "bytes");
                                            res.setHeader(httpHeader.CONTENT_RANGE, "bytes " + TOP_LOC + "-" + END_LOC + "/" + SIZE);
                                        } else {
                                            res.setHeader(httpHeader.CACHE_CONTROL, CACHING);
                                            res.setHeader(httpHeader.LAST_MODIFIED, DATE.toUTCString());
                                            res.setHeader(httpHeader.EXPIRES, new Date(DATE.getTime() + expire).toUTCString());
                                            res.setHeader(httpHeader.ETAG, INFO.hash);
                                            if (INFO.hash === MATCH || DATE.toUTCString() === SINCE) {
                                                res.statusCode = 304;
                                                res.end();
                                                return;
                                            }
                                            DATA = fs.createReadStream(PATH);
                                        }
                                    }
                                    if (EMPTY) {
                                        if (_isInstanceOf(DATA, stream.Readable)) {
                                            DATA.destroy();
                                        }
                                        res.statusCode = EMPTY ? 204 : 200;
                                        res.end();
                                        return;
                                    } else {
                                        NEED = compress(TYPE) && (_isNullOrUndefined(SIZE) || SIZE >= compressLeast);
                                    }
                                    if (TYPE) {
                                        res.setHeader(httpHeader.CONTENT_TYPE, TYPE);
                                    }
                                    if (NAME) {
                                        res.setHeader(httpHeader.CONTENT_DISPOSITION, [
                                            "attachment",
                                            "filename=" + (MSIE ? encodeURIComponent(NAME) : Buffer.from(NAME, definition.UTF8).toString(definition.LATIN1)),
                                            "filename*=UTF-8''" + encodeURIComponent(NAME),
                                        ].join("; "));
                                    }
                                    if (Buffer.isBuffer(DATA)) {
                                        if (NEED) {
                                            var k = GZLIB[0];
                                            var v = GZLIB[1];
                                            if (k) {
                                                res.setHeader(httpHeader.CONTENT_ENCODING, k);
                                            }
                                            if (k === definition.BR) {
                                                return new Promise$1(function (resolve, reject) {
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
                                            if (k === definition.GZIP) {
                                                return new Promise$1(function (resolve, reject) {
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
                                            if (k === definition.DEFLATE) {
                                                return new Promise$1(function (resolve, reject) {
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
                                    if (_isInstanceOf(DATA, stream.Readable)) {
                                        if (NEED) {
                                            var k = GZLIB[0];
                                            var v = GZLIB[1];
                                            if (k) {
                                                res.setHeader(httpHeader.CONTENT_ENCODING, k);
                                            }
                                            if (k === definition.BR) {
                                                DATA.pipe(zlib.createBrotliCompress(v)).pipe(res);
                                                return;
                                            }
                                            if (k === definition.GZIP) {
                                                DATA.pipe(zlib.createGzip(v)).pipe(res);
                                                return;
                                            }
                                            if (k === definition.DEFLATE) {
                                                DATA.pipe(zlib.createDeflate(v)).pipe(res);
                                                return;
                                            }
                                        }
                                        DATA.pipe(res);
                                        return;
                                    }
                                    throw new Error(message.INVALID_RESULT_DATA);
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
                                        res.setHeader(httpHeader.CONTENT_TYPE, HTTP_MIMETYPE.txt);
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
                        return _isString(mimetype) && (compressTypes.includes(mimetype) || HTTP_COMPRESS.includes(mimetype));
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
                        if (_isString(filename)) {
                            name = path.extname(filename).slice(1).toLowerCase();
                            type = MIMETYPE[name] || HTTP_MIMETYPE[name];
                        }
                        if (msie) {
                            return type || httpContent.X_MSDOWNLOAD;
                        } else {
                            return type || httpContent.OCTET_STREAM;
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
                        var v = Promise$1.resolve(
                            filename
                        ).then(
                            function (v) {
                                return _readFileSync(v).toString(definition.UTF8);
                            }
                        ).then(
                            function (v) {
                                return _isFunction(compiler) ? compiler.call(null, v, filename, skrinkSerializer(HTTP_COMPILER)) : HTTP_COMPILER(v, filename);
                            }
                        ).then(
                            function (v) {
                                return new _DataResult(Buffer.from(v, definition.UTF8), void 0, MIMETYPE.js || HTTP_MIMETYPE.js, { match: s.hash, since: s.mtime.toUTCString() });
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
                        var v = Promise$1.resolve(
                            Buffer.from("define(function(){console&&console.warn(\"Module \\\"" + filename + "\\\" has been ignored.\");});", definition.UTF8)
                        ).then(
                            function (v) {
                                return new _DataResult(v, void 0, MIMETYPE.js || HTTP_MIMETYPE.js, { match: crypto.createHash(definition.MD5).update(v).digest(definition.HEX), since: new Date(latest + expire).toUTCString() });
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
                    opts && opts.maxRequestContentLength || Math.pow(2, 30) - 1,
                    opts && opts.sessionStorage || _createSessionStorage(),
                    opts && opts.tokenGenerator || _createTokenGenerator(),
                    opts && opts.visitValidator || _createVisitValidator(),
                    opts && opts.compressTypes || [],
                    opts && opts.compressLeast || 1024,
                    opts && opts.compressLevel || 5,
                    opts && opts.customHeaders || new Headers(),
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
            return _isArray(arg2) ? arg2.length === 0 || arg2.includes(arg1) : _isNullOrUndefined(arg2) || arg1 === arg2;
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
            var a = _isArray(arg1) ? arg1 : separate(arg1);
            var b = _isArray(arg2) ? arg2 : separate(arg2);
            return a.length >= b.length && b.every(function (n, i) {
                return compareIgnoreCase(n, a[i]);
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
            return "/" + path.relative(process.cwd(), argc).replace(/[\\/]+/g, "/");
        }
        /**
         * 
         * @param {string} argc A path.
         * @returns {string}
         */
        function normalize(
            argc
        ) {
            return path.resolve(separate(argc).join(path.sep));
        }
        /**
         * 
         * @param {Yarla.koa.Context} argc A context.
         */
        function serialize(
            argc
        ) {
            var context = Reflect.getInternal(argc);
            /** @type {Yarla.KVPair<string>} */
            var cookies = context.cookies;
            /** @type {Yarla.KVPair<string | ReadonlyArray<string>>} */
            var headers = context.headers;
            return new KVPair(_defaults$1({}, headers.toJSON(), {
                "Set-Cookie": _values(cookies.toJSON()),
            }), true);
        }
    }());

    var http = nodeRequire("http");

    var _createServer = skrinkSerializer(
        /**
         * 
         * @param {Yarla.koa.Options} [opts] 
         */
        function (
            opts
        ) {
            return http.createServer(_createListener(opts));
        }
    );

    var _unlinkSync = skrinkSerializer(
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

    var _mkdirSync = skrinkSerializer(
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

    var _readFile = skrinkSerializer(
        /**
         * 
         * @param {string} filename 
         * @param {number} [maximum]
         */
        function (
            filename,
            maximum
        ) {
            var l = Math.pow(2, 30) - 1;
            var m = Math.min(maximum || l, l);
            return new Promise$1(function (resolve, reject) {
                if (_statSync(filename).size > m) {
                    reject(new HttpError(413));
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

    var _hash = skrinkSerializer(
        /**
         * 
         * @param {Buffer | import("stream").Readable} argc 
         */
        function (
            argc
        ) {
            return new Promise$1(function (resolve, reject) {
                var md5 = crypto.createHash(definition.MD5);
                if (Buffer.isBuffer(argc)) {
                    resolve(md5.update(argc).digest(definition.HEX));
                } else {
                    argc.on("end", function () {
                        resolve(md5.digest(definition.HEX));
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
    };

    var _defaults = {};

    var env = {
        BASE_URI: location ? location.protocol + "//" + location.host : url.pathToFileURL(process.cwd()),
    };

    var _resolve = skrinkSerializer(
        function () {
            return _concatUrl.apply(null, [env.BASE_URI].concat(_flat(arguments)));
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
                            Reflect.defineInternal(this, 0, "readyState"),
                            Reflect.defineInternal(this, "", "statusText"),
                            Reflect.defineInternal(this, "", "responseType"),
                            Reflect.defineInternal(this, null, "controller"),
                            Reflect.defineInternal(this, null, "response"),
                            Reflect.defineInternal(this, null, "username"),
                            Reflect.defineInternal(this, null, "password"),
                            Reflect.defineInternal(this, new KVPair(true), "reqHeaders"),
                            Reflect.defineInternal(this, new KVPair(true), "resHeaders"));
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
                        return Reflect.getInternal(this).url || "";
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
                     * @param {any} [reason]
                     */
                    function (reason) {
                        var xhr = Reflect.getInternal(this);
                        if (xhr.controller) {
                            xhr.controller.abort(reason);
                            xhr.controller = null;
                        }
                    }
                ),
                open: generateMethodDescriptor(
                    /**
                     * 
                     * @this {XMLHttpRequest}
                     * @param {string} method 
                     * @param {string | URL} url 
                     * @param {boolean} [async] 
                     * @param {string | null} [username] 
                     * @param {string | null} [password] 
                     */
                    function (
                        method,
                        url,
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
                        xhr.url = String(url);
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
                        var xhr = Reflect.getInternal(own);
                        var controller = new AbortController();
                        /** @type {"" | "arraybuffer" | "blob" | "json" | "text"} */
                        var responseType = xhr.responseType;
                        /** @type {Yarla.KVPair} */
                        var reqHeaders = xhr.reqHeaders;
                        /** @type {string | null} */
                        var username = xhr.username;
                        /** @type {string | null} */
                        var password = xhr.password;
                        /** @type {number} */
                        var timeout = xhr.timeout;
                        /** @type {string} */
                        var method = xhr.method;
                        if (_isNullOrUndefined(username)) {
                            username = "";
                        }
                        if (_isNullOrUndefined(password)) {
                            password = "";
                        }
                        if (username) {
                            reqHeaders.set(httpHeader.AUTHORIZATION, "Basic " + _btoa(username + ":" + password));
                        }
                        xhr.controller = controller;
                        xhr.readyState = XMLHttpRequest.LOADING;
                        var process;
                        if (timeout > 0) {
                            process = setTimeout$1(function () {
                                controller.abort(new HttpError(408));
                            }, timeout);
                        }
                        globalThis.fetch(xhr.url, {
                            signal: controller.signal,
                            headers: reqHeaders.toJSON(),
                            method: method,
                            body: body,
                        }).then(
                            function (response) {
                                if (process) {
                                    clearTimeout(process);
                                }
                                xhr.url = response.url;
                                xhr.status = response.status;
                                xhr.statusText = response.statusText;
                                xhr.resHeaders = new KVPair(response.headers);
                                xhr.readyState = XMLHttpRequest.HEADERS_RECEIVED;
                                if (response.ok) {
                                    if (responseType === "arraybuffer") {
                                        return response.arrayBuffer();
                                    }
                                    if (responseType === "blob") {
                                        return response.blob();
                                    }
                                    if (responseType === "json") {
                                        return response.json();
                                    }
                                    if (responseType === "text") {
                                        return response.text();
                                    }
                                    return response.body;
                                }
                                throw new HttpError(response.status, response.statusText);
                            }
                        ).then(
                            function (value) {
                                xhr.response = value;
                                xhr.readyState = XMLHttpRequest.DONE;
                                own.dispatchEvent(new Event("load"));
                            },
                            function (error) {
                                xhr.response = error;
                                xhr.readyState = XMLHttpRequest.DONE;
                                if (_isInstanceOf(error, HttpError)) {
                                    if (error.status === 408) {
                                        own.dispatchEvent(new Event("timeout"));
                                        return;
                                    }
                                }
                                own.dispatchEvent(new Event("error"));
                            }
                        );
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
    }(globalThis.XMLHttpRequest));

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
                    responseURL: generateNormalDescriptor(xhr.responseURL || _concatUrl(baseURI, xhr.getResponseHeader(httpHeader.X_RESPONSED_URL) || ""), true, true),
                    response: generateNormalDescriptor((function () {
                        try {
                            if ("response" in xhr) {
                                return xhr.response;
                            }
                            if (responseType === "text") {
                                return xhr.responseText;
                            }
                            if (responseType === "json") {
                                return xhr.responseText ? JSON.parse(xhr.responseText) : null;
                            }
                            if (_isJsonContent(xhr.getResponseHeader(httpHeader.CONTENT_TYPE))) {
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
                                if (_isArray(n)) {
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
                        var SEP, RES, TYPE, N;
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
                            url = _concatUrl(env.BASE_URI, BASEURI || "", url);
                            if (isSerializable(data)) {
                                data = JSON.stringify(data);
                                TYPE = httpContent.JSON;
                            }
                            xhr = own.xhr = new XMLHttpRequest();
                            xhr.open(mod, url, true, USERNAME, PASSWORD);
                            xhr.addEventListener("load", function () {
                                var status = xhr.status || 200;
                                if (status < 200 || status >= 300) {
                                    reject(new HttpError(status, xhr.responseText));
                                } else {
                                    resolve(Response.init(xhr, url, RESPONSE_TYPE));
                                }
                                if (_isFunction(ON_FINISHED)) {
                                    ON_FINISHED.call(xhr);
                                }
                            });
                            xhr.addEventListener("abort", function () {
                                reject(new HttpError(500.1, _isInstanceOf(xhr.response, Error) ? xhr.response.message : xhr.statusText));
                                if (_isFunction(ON_FINISHED)) {
                                    ON_FINISHED.call(xhr);
                                }
                            });
                            xhr.addEventListener("error", function () {
                                reject(new HttpError(500.2, _isInstanceOf(xhr.response, Error) ? xhr.response.message : xhr.statusText));
                                if (_isFunction(ON_FINISHED)) {
                                    ON_FINISHED.call(xhr);
                                }
                            });
                            xhr.addEventListener("timeout", function () {
                                reject(new HttpError(500.3, _isInstanceOf(xhr.response, Error) ? xhr.response.message : xhr.statusText));
                                if (_isFunction(ON_FINISHED)) {
                                    ON_FINISHED.call(xhr);
                                }
                            });
                            if (xhr.upload) {
                                xhr.upload.addEventListener("progress", function (event) {
                                    if (_isFunction(ON_PROGRESS)) {
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
                                if (_isInstanceOf(HEADERS, globalThis.Headers)) {
                                    HEADERS.forEach(function (value, name) {
                                        xhr.setRequestHeader(name, String(value));
                                    });
                                } else {
                                    for (var name in HEADERS) {
                                        if (N = HEADERS[name]) {
                                            xhr.setRequestHeader(name, String(N));
                                        }
                                    }
                                }
                            }
                            if (_isNumber(TIMEOUT)) {
                                xhr.timeout = TIMEOUT;
                            }
                            if (_isString(RESPONSE_TYPE)) {
                                xhr.responseType = RESPONSE_TYPE;
                            }
                            if (_isBoolean(CREDENTIALS)) {
                                xhr.withCredentials = CREDENTIALS;
                            }
                            if (_isFunction(ON_STARTING)) {
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
                }(_defaults$1({}, own.opts, opts)));
                /**
                 * 
                 * @param {any} argc 
                 */
                function isSerializable(
                    argc
                ) {
                    if (_isBlob(argc) ||
                        _isFormData(argc) ||
                        _isArrayBuffer(argc) ||
                        _isArrayBufferView(argc) ||
                        _isURLSearchParams(argc) ||
                        _isBasic(argc)) {
                        return false;
                    }
                    return true;
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
                    return "exports" in provide ? provide.exports : _isFunction(provide.func) ? provide.exports = (
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
                                return _isUndefined(exports) ? module.exports : exports;
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
            if (esModules.indexOf(modname) !== -1) {
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
                if (_isJsonContent(datatype ? String(datatype) : null)) {
                    return {
                        exports: response ? JSON.parse(response) : null,
                    };
                }
                var instance;
                new Function("define", [
                    inlineSourceMap(response, 2),
                    "//# sourceURL=" + filename + "!translate",
                ].join("\n")).call(null, defineProperties(skrinkSerializer(function () {
                    var argv = _flat(arguments);
                    var func = argv.pop();
                    var deps = argv.pop() || [];
                    instance = Promise$1.resolve({
                        path: _resolve(filename, ".."),
                        deps: deps,
                        func: func,
                    });
                }), {
                    amd: generateNormalDescriptor(true),
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
        pattern: pattern,
        cookies: cookies,
        queries: queries,
        formats: formats,
        KVPair: KVPair,
        Buffer: Buffer,
        Promise: Promise$1,
        WeakMap: WeakMap,
        Fragment: Fragment,
        HttpError: HttpError,
        forceUpdate: forceUpdate,
        createElement: createElement$1,
        setImmediate: setImmediate,
        setInterval: setInterval,
        setTimeout: setTimeout,
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
        isBlob: _isBlob,
        atob: _atob,
        btoa: _btoa,
    };

    exports.Buffer = Buffer;
    exports.Fragment = Fragment;
    exports.HttpError = HttpError;
    exports.KVPair = KVPair;
    exports.Promise = Promise$1;
    exports.WeakMap = WeakMap;
    exports.atob = _atob;
    exports.btoa = _btoa;
    exports.clone = _clone;
    exports.concatUrl = _concatUrl;
    exports.cookies = cookies;
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
    exports.isInstanceOf = _isInstanceOf;
    exports.isInteger = _isInteger;
    exports.isIterable = _isIterable;
    exports.isJsonContent = _isJsonContent;
    exports.isNaN = _isNaN;
    exports.isNull = _isNull;
    exports.isNullOrEmptyObject = _isNullOrEmptyObject;
    exports.isNullOrEmptyString = _isNullOrEmptyString;
    exports.isNullOrUndefined = _isNullOrUndefined;
    exports.isNumber = _isNumber;
    exports.isObject = _isObject;
    exports.isReference = _isReference;
    exports.isRegExp = _isRegExp;
    exports.isSafeInteger = _isSafeInteger;
    exports.isString = _isString;
    exports.isSymbol = _isSymbol;
    exports.isTextContent = _isTextContent;
    exports.isURLSearchParams = _isURLSearchParams;
    exports.isUndefined = _isUndefined;
    exports.isValid = _isValid;
    exports.keys = _keys;
    exports.koa = koa;
    exports.memo = memo;
    exports.merge = _merge;
    exports.nextTick = nextTick;
    exports.omit = _omit;
    exports.pattern = pattern;
    exports.pick = _pick;
    exports.queries = queries;
    exports.salt = _salt;
    exports.set = _set;
    exports.setImmediate = setImmediate;
    exports.setInterval = setInterval;
    exports.setTimeout = setTimeout;
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
