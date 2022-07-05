import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import isArray from "../isArray/index.js";
import isValid from "../isValid/index.js";

export default skrinkSerializer(
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
