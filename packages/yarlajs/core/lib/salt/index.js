import BTOA from "../../module/constant/BTOA/index.js";
import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import fromCharCode from "../../module/standard/fromCharCode/index.js";

export default skrinkSerializer(
    /**
     * 
     * Returns a URL-safe random string.
     * 
     * @param {number} [size] The length of the string, default 8.
     * @returns {string}
     */
    function (
        size
    ) {
        var r = [];
        for (var
            i = 0,
            l = size || 8;
            i < l;
            i++
        ) {
            r.push(BTOA[Math.random() * 62 | 0]);
        }
        return fromCharCode(r);
    }
);
