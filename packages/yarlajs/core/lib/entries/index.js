import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import hasOwnProperty from "../../module/standard/hasOwnProperty/index.js";
import isFunction from "../isFunction/index.js";
import isIterable from "../isIterable/index.js";
import isObject from "../isObject/index.js";
import isArray from "../isArray/index.js";

export default skrinkSerializer(
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
