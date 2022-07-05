import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import isInstanceOf from "../isInstanceOf/index.js";

export default skrinkSerializer(
    /**
     * 
     * Determines if the input parameter is a boolean.
     * 
     * @param {any} argc Any object.
     * @returns {argc is boolean}
     */
    function (
        argc
    ) {
        return typeof argc === "boolean" || isInstanceOf(argc, Boolean);
    }
);
