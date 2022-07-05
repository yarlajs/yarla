import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import className from "../../module/standard/className/index.js";

export default skrinkSerializer(
    /**
     * 
     * Determines if the input parameter is a symbol.
     * 
     * @param {any} argc Any object.
     * @returns {argc is symbol}
     */
    function (
        argc
    ) {
        return typeof argc === "symbol" || className(argc) === "Symbol";
    }
);
