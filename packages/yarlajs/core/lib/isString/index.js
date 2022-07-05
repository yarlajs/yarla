import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import isInstanceOf from "../isInstanceOf/index.js";

export default skrinkSerializer(
    /**
     * 
     * Determines if the input parameter is a string.
     * 
     * @param {any} argc Any object.
     * @returns {argc is string}
     */
    function (
        argc
    ) {
        return typeof argc === "string" || isInstanceOf(argc, String);
    }
);
