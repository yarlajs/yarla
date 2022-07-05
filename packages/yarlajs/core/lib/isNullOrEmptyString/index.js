import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import isNullOrUndefined from "../isNullOrUndefined/index.js";

export default skrinkSerializer(
    /**
     * 
     * Determines if the input parameter is null or undefined or an empty string.
     * 
     * @param {any} argc Any object.
     * @returns {argc is null | undefined | ""}
     */
    function (
        argc
    ) {
        return isNullOrUndefined(argc) || argc === "";
    }
);
