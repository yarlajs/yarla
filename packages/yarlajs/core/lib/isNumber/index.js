import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import isInstanceOf from "../isInstanceOf/index.js";

export default skrinkSerializer(
    /**
     * 
     * Determines if the input parameter is a number.
     * 
     * @param {any} argc Any object.
     * @returns {argc is number}
     */
    function (
        argc
    ) {
        return typeof argc === "number" || isInstanceOf(argc, Number);
    }
);
