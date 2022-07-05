import globalThis from "../../internal/globalThis/index.js";
import defineProperties from "../defineProperties/index.js";
import generateNormalDescriptor from "../generateNormalDescriptor/index.js";
import pseudoRandomString from "../pseudoRandomString/index.js";
import skrinkSerializer from "../skrinkSerializer/index.js";

export default (function (Symbol, exports) {
    return defineProperties(Symbol, {
        for: generateNormalDescriptor(
            Symbol.for || skrinkSerializer(
                /**
                 * 
                 * @param {string} key 
                 * @returns {symbol}
                 */
                function (
                    key
                ) {
                    return exports[key] = exports[key] || Symbol(key);
                }
            )
        ),
    });
}(globalThis.Symbol || skrinkSerializer(
    /**
     * 
     * @param {string | number} [description] 
     * @returns {any}
     */
    function (
        description
    ) {
        return "[[" + description + ":" + pseudoRandomString(6, 36) + "]]";
    }
), {}));
