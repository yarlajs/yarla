import message from "../../module/constant/message/index.js";
import divideExpression from "../../module/standard/divideExpression/index.js";
import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import isNullOrUndefined from "../isNullOrUndefined/index.js";
import isNumber from "../isNumber/index.js";
import isString from "../isString/index.js";
import isObject from "../isObject/index.js";
import isArray from "../isArray/index.js";

export default skrinkSerializer(
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
