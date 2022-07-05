import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import isInstanceOf from "../isInstanceOf/index.js";

export default skrinkSerializer(
    /**
     * 
     * Determines if the input parameter is a RegExp.
     * 
     * @param {any} argc Any object.
     * @returns {argc is RegExp}
     */
    function (
        argc
    ) {
        return isInstanceOf(argc, RegExp);
    }
);
