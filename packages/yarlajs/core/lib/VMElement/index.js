import NOOP from "../../module/constant/NOOP/index.js";
import defineProperty from "../../module/standard/defineProperty/index.js";
import defineProperties from "../../module/standard/defineProperties/index.js";
import generateGetterDescriptor from "../../module/standard/generateGetterDescriptor/index.js";
import generateMethodDescriptor from "../../module/standard/generateMethodDescriptor/index.js";
import generateNormalDescriptor from "../../module/standard/generateNormalDescriptor/index.js";
import generateClass from "../../module/standard/generateClass/index.js";
import isNullOrUndefined from "../isNullOrUndefined/index.js";
import isInstanceOf from "../isInstanceOf/index.js";
import isObject from "../isObject/index.js";
import isNumber from "../isNumber/index.js";
import isString from "../isString/index.js";
import isValid from "../isValid/index.js";
import flat from "../flat/index.js";
import zone from "../zone/index.js";
import RefObject from "../RefObject/index.js";
import Reflect from "../Reflect/index.js";

export default (function () {
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
                var intrinsics = isString(type);
                for (var i in props) {
                    var v = props[i];
                    if (isNullOrUndefined(v)) {
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
                var n = flat(arguments, 2);
                return Reflect.construct(this, {
                    type: type,
                    owner: zone.currentTarget,
                    props: Object.freeze(defineProperties(properties, {
                        children: generateNormalDescriptor(flat([m, n], 0, Infinity, true)),
                    })),
                    cmd: isNullOrUndefined(c) ? null : flat([c], 0, Infinity, true),
                    key: isString(k) || isNumber(k) ? k : null,
                    ref: isInstanceOf(r, RefObject) ? r : null,
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
        if (isObject(argc)) {
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
        if (isObject(argc)) {
            var r = [];
            for (var i in argc) {
                if (isValid(argc[i])) {
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
