import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import isNullOrUndefined from "../isNullOrUndefined/index.js";
import trampoline from "../trampoline/index.js";
import isObject from "../isObject/index.js";
import isArray from "../isArray/index.js";
import isValid from "../isValid/index.js";

export default skrinkSerializer(
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
