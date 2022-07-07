import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import isNullOrUndefined from "../isNullOrUndefined/index.js";
import isArray from "../isArray/index.js";

export default skrinkSerializer(
    /**
     * 
     * Determines if the input parameter is null or undefined or an empty array.
     * 
     * @param {any} argc Any object.
     * @returns {argc is null | undefined | ""}
     */
    function (
        argc
    ) {
        return isNullOrUndefined(argc) || isArray(argc) && argc.length === 0;
    }
);
