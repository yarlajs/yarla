import message from "../../module/constant/message/index.js";
import globalThis from "../../module/internal/globalThis/index.js";
import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import createInstance from "../../module/standard/createInstance/index.js";
import defineProperty from "../../module/standard/defineProperty/index.js";
import getPrototypeOf from "../../module/standard/getPrototypeOf/index.js";
import Symbol from "../../module/standard/Symbol/index.js";
import isNullOrUndefined from "../isNullOrUndefined/index.js";
import flat from "../flat/index.js";
import has from "../has/index.js";
import get from "../get/index.js";
import set from "../set/index.js";
import WeakMap from "../WeakMap/index.js";

export default (function () {
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
                    return Reflect ? Reflect.construct(getPrototypeOf(constructor), arguments, constructor) : getPrototypeOf(constructor).apply(this, arguments);
                }
            );
        }(target.constructor)).apply(target, flat(arguments, 1));
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
