import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import isUndefined from "../isUndefined/index.js";
import isNull from "../isNull/index.js";

export default skrinkSerializer(
    /**
     * 
     * Determines if the input parameter is null or undefined.
     * 
     * @param {any} argc Any object.
     * @returns {argc is null | undefined}
     */
    function (
        argc
    ) {
        return isNull(argc) || isUndefined(argc);
    }
);
