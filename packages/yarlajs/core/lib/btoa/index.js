import BTOA from "../../module/constant/BTOA/index.js";
import definition from "../../module/constant/definition/index.js";
import fromCharCode from "../../module/standard/fromCharCode/index.js";
import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import bitConvert from "../../module/standard/bitConvert/index.js";
import Buffer from "../Buffer/index.js";

export default skrinkSerializer(
    /**
     * 
     * Encodes a base-encoded string from the specified utf8 string.
     * 
     * @param {string} argc The utf8 string.
     * @param {boolean} [urlSafeEncoding] Indicates whether it is a URL-safe string.
     * @returns {string}
     */
    function (
        argc,
        urlSafeEncoding
    ) {
        return urlSafeEncoding ? encodeBase(bitConvert(Buffer.from(argc, definition.UTF8), 256, 62)) : Buffer.from(argc, definition.UTF8).toString(definition.BASE64);
    }
);

/**
 * 
 * @param {ReadonlyArray<number>} argc 
 * @returns {string}
 */
function encodeBase(
    argc
) {
    var r = [];
    for (var
        i = 0,
        l = argc.length;
        i < l;
        i++
    ) {
        r.push(BTOA[argc[i]]);
    }
    return fromCharCode(r);
}
