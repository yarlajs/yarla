import pseudoRandomString from "../../module/standard/pseudoRandomString/index.js";
import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";

export default skrinkSerializer(
    /**
     * 
     * Returns a pseudo uuid.
     * 
     * @param {boolean} [pure] Indicates whether to return a pure uuid, if true does not contain the separator.
     * @returns {string}
     */
    function (
        pure
    ) {
        var r = "";
        for (var
            i = 0;
            i < 12;
            i++
        ) {
            r += i === 2 || i === 4 || i === 6 || i === 8 ? pure ? "" : "-" : pseudoRandomString(4, 16);
        }
        return r;
    }
);
