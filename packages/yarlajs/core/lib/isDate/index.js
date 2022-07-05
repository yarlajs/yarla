import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import isInstanceOf from "../isInstanceOf/index.js";

export default skrinkSerializer(
    /**
     * 
     * Determines if the input parameter is a Date.
     * 
     * @param {any} argc Any object.
     * @returns {argc is Date}
     */
    function (
        argc
    ) {
        return isInstanceOf(argc, Date);
    }
);
