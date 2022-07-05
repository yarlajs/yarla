import decodeURIComponent from "../../module/internal/decodeURIComponent/index.js";
import encodeURIComponent from "../../module/internal/encodeURIComponent/index.js";
import divideExpression from "../../module/standard/divideExpression/index.js";
import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import isNullOrUndefined from "../isNullOrUndefined/index.js";
import isUndefined from "../isUndefined/index.js";
import isBoolean from "../isBoolean/index.js";
import isBigInt from "../isBigInt/index.js";
import isNumber from "../isNumber/index.js";
import isString from "../isString/index.js";
import isSymbol from "../isSymbol/index.js";
import isObject from "../isObject/index.js";
import isArray from "../isArray/index.js";
import isDate from "../isDate/index.js";
import isNull from "../isNull/index.js";
import set from "../set/index.js";
import pattern from "../pattern/index.js";

export default {
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
