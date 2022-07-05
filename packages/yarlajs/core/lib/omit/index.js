import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import flat from "../flat/index.js";

export default skrinkSerializer(
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
        var p = flat(arguments, 1, Infinity);
        for (var n in argc) {
            if (p.indexOf(n) === -1) {
                r[n] = argc[n];
            }
        }
        return r;
    }
);
