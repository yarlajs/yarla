import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import isBoolean from "../isBoolean/index.js";
import isBigInt from "../isBigInt/index.js";
import isNumber from "../isNumber/index.js";
import isString from "../isString/index.js";
import isSymbol from "../isSymbol/index.js";
import isObject from "../isObject/index.js";
import isRegExp from "../isRegExp/index.js";
import isArray from "../isArray/index.js";
import isDate from "../isDate/index.js";
import isNaN from "../isNaN/index.js";
import keys from "../keys/index.js";

export default skrinkSerializer(
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
        if (isNumber(arg1) && isNumber(arg2)) {
            return (isNaN(arg1) && isNaN(arg2)) || arg1.valueOf() === arg2.valueOf();
        }
        if (isString(arg1) && isString(arg2)) {
            return arg1.valueOf() === arg2.valueOf();
        }
        if (isBigInt(arg1) && isBigInt(arg2)) {
            return arg1.valueOf() === arg2.valueOf();
        }
        if (isSymbol(arg1) && isSymbol(arg2)) {
            return arg1.valueOf() === arg2.valueOf();
        }
        if (isBoolean(arg1) && isBoolean(arg2)) {
            return arg1.valueOf() === arg2.valueOf();
        }
        if (isDate(arg1) && isDate(arg2)) {
            return arg1.valueOf() === arg2.valueOf();
        }
        if (isRegExp(arg1) && isRegExp(arg2)) {
            return arg1.source === arg2.source && arg1.flags === arg2.flags;
        }
        if (isArray(arg1) && isArray(arg2)) {
            return arg1.length === arg2.length && arg1.every(function (v, i) { return isEqual(v, arg2[i]); });
        }
        if (isObject(arg1) && isObject(arg2)) {
            return (function (key1, key2) { return key1.length === key2.length && key1.every(function (i) { return key2.indexOf(i) !== -1; }) && key1.every(function (i) { return isEqual(arg1[i], arg2[i]); }); }(keys(arg1), keys(arg2)));
        }
        return false;
    }
);
