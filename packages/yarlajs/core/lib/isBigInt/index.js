import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import className from "../../module/standard/className/index.js";

export default skrinkSerializer(
    /**
     * 
     * Determines if the input parameter is a bigint.
     * 
     * @param {any} argc Any object.
     * @returns {argc is bigint}
     */
    function (
        argc
    ) {
        return typeof argc === "bigint" || className(argc) === "BigInt";
    }
);
