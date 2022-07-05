import ATOB from "../../module/constant/ATOB/index.js";
import definition from "../../module/constant/definition/index.js";
import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import bitConvert from "../../module/standard/bitConvert/index.js";
import Buffer from "../Buffer/index.js";

export default skrinkSerializer(
    /**
     * 
     * Decodes a utf8 string from the specified base-encoded string.
     * 
     * @param {string} argc The base-encoded string.
     * @param {boolean} [urlSafeEncoding] Indicates whether it is a URL-safe string.
     * @returns {string}
     */
    function (
        argc,
        urlSafeEncoding
    ) {
        return urlSafeEncoding ? Buffer.from(bitConvert(decodeBase(argc), 62, 256)).toString(definition.UTF8) : Buffer.from(argc, definition.BASE64).toString(definition.UTF8);
    }
);

/**
 * 
 * @param {string} argc
 * @returns {ReadonlyArray<number>} 
 */
function decodeBase(
    argc
) {
    var r = [];
    for (var
        i = 0,
        l = argc.length;
        i < l;
        i++
    ) {
        r.push(ATOB[argc.charCodeAt(i)]);
    }
    return r;
}
