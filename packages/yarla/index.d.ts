// Type definitions for yarla 1.0.0
// Project: https://gitee.com/yarlajs/yarla
// Project mirror: https://github.com/yarlajs/yarla
// Definitions by: WU HU <https://gitee.com/yarlajs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.7

/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

import {
    pattern,
    cookies,
    queries,
    formats,
    KVPair,
    Buffer,
    Promise,
    WeakMap,
    Fragment,
    HttpError,
    forceUpdate,
    createElement,
    setImmediate,
    setInterval,
    setTimeout,
    nextTick,
    debounce,
    throttle,
    useEffect,
    useTarget,
    useState,
    useMemo,
    useRef,
    shadow,
    memo,
    non as _non,
    has as _has,
    get as _get,
    set as _set,
    delete as _delete,
    keys as _keys,
    values as _values,
    entries as _entries,
    salt as _salt,
    uuid as _uuid,
    hash as _hash,
    glob as _glob,
    flat as _flat,
    uniq as _uniq,
    omit as _omit,
    pick as _pick,
    clone as _clone,
    merge as _merge,
    defaults as _defaults,
    trampoline as _trampoline,
    concatUrl as _concatUrl,
    isArray as _isArray,
    isClass as _isClass,
    isNumber as _isNumber,
    isString as _isString,
    isBoolean as _isBoolean,
    isFunction as _isFunction,
    isBigInt as _isBigInt,
    isSymbol as _isSymbol,
    isObject as _isObject,
    isIterable as _isIterable,
    isInstanceOf as _isInstanceOf,
    isRegExp as _isRegExp,
    isDate as _isDate,
    isNull as _isNull,
    isNullOrUndefined as _isNullOrUndefined,
    isNullOrEmptyArray as _isNullOrEmptyArray,
    isNullOrEmptyString as _isNullOrEmptyString,
    isNullOrEmptyObject as _isNullOrEmptyObject,
    isUndefined as _isUndefined,
    isReference as _isReference,
    isBasic as _isBasic,
    isEqual as _isEqual,
    isValid as _isValid,
    isNaN as _isNaN,
    isFinite as _isFinite,
    isInteger as _isInteger,
    isSafeInteger as _isSafeInteger,
    isJsonContent as _isJsonContent,
    isTextContent as _isTextContent,
    isURLSearchParams as _isURLSearchParams,
    isArrayBufferView as _isArrayBufferView,
    isArrayBuffer as _isArrayBuffer,
    isFormData as _isFormData,
    isReadable as _isReadable,
    isWritable as _isWritable,
    isHeaders as _isHeaders,
    isBlob as _isBlob,
    atob as _atob,
    btoa as _btoa,
    read as _read,
} from "@yarlajs/core";
import dom from "@yarlajs/dom";
import koa from "@yarlajs/koa";
import xhr from "@yarlajs/xhr";

export = Yarla;

export as namespace Yarla;

declare namespace Yarla {
    export {
        dom,
        koa,
        xhr,
        pattern,
        cookies,
        queries,
        formats,
        KVPair,
        Buffer,
        Promise,
        WeakMap,
        Fragment,
        HttpError,
        forceUpdate,
        createElement,
        setImmediate,
        setInterval,
        setTimeout,
        nextTick,
        debounce,
        throttle,
        useEffect,
        useTarget,
        useState,
        useMemo,
        useRef,
        shadow,
        memo,
        _non as non,
        _has as has,
        _get as get,
        _set as set,
        _delete as delete,
        _keys as keys,
        _values as values,
        _entries as entries,
        _salt as salt,
        _uuid as uuid,
        _hash as hash,
        _glob as glob,
        _flat as flat,
        _uniq as uniq,
        _omit as omit,
        _pick as pick,
        _clone as clone,
        _merge as merge,
        _defaults as defaults,
        _trampoline as trampoline,
        _concatUrl as concatUrl,
        _isArray as isArray,
        _isClass as isClass,
        _isNumber as isNumber,
        _isString as isString,
        _isBoolean as isBoolean,
        _isFunction as isFunction,
        _isBigInt as isBigInt,
        _isSymbol as isSymbol,
        _isObject as isObject,
        _isIterable as isIterable,
        _isInstanceOf as isInstanceOf,
        _isRegExp as isRegExp,
        _isDate as isDate,
        _isNull as isNull,
        _isNullOrUndefined as isNullOrUndefined,
        _isNullOrEmptyArray as isNullOrEmptyArray,
        _isNullOrEmptyString as isNullOrEmptyString,
        _isNullOrEmptyObject as isNullOrEmptyObject,
        _isUndefined as isUndefined,
        _isReference as isReference,
        _isBasic as isBasic,
        _isEqual as isEqual,
        _isValid as isValid,
        _isNaN as isNaN,
        _isFinite as isFinite,
        _isInteger as isInteger,
        _isSafeInteger as isSafeInteger,
        _isJsonContent as isJsonContent,
        _isTextContent as isTextContent,
        _isURLSearchParams as isURLSearchParams,
        _isArrayBufferView as isArrayBufferView,
        _isArrayBuffer as isArrayBuffer,
        _isFormData as isFormData,
        _isReadable as isReadable,
        _isWritable as isWritable,
        _isHeaders as isHeaders,
        _isBlob as isBlob,
        _atob as atob,
        _btoa as btoa,
        _read as read,
    }
}

declare global {
    namespace JSX {
        type Element = Yarla.VMNode;
        type ElementClass = Yarla.Component<any>;
        interface ElementAttributesProperty {
            readonly props: Yarla.MixObject;
        }
        interface ElementChildrenAttribute {
            readonly children: Yarla.MixObject;
        }
        type IntrinsicAttributes = Yarla.Attributes;
        type IntrinsicClassAttributes<T extends Yarla.Element> = Yarla.ClassAttributes<T>;
        type IntrinsicElements =
            & { readonly [T in keyof Yarla.HTMLElementTagNameMap]: Yarla.HTMLElementProps<T> & Yarla.ElementChildrenProps<T>; }
            & { readonly [T in keyof Yarla.MathMLElementTagNameMap]: Yarla.MathMLElementProps<T> & Yarla.ElementChildrenProps<T>; }
            & { readonly [T in keyof Yarla.SVGElementTagNameMap]: Yarla.SVGElementProps<T> & Yarla.ElementChildrenProps<T>; };
    }
}
