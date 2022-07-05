import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import isReference from "../isReference/index.js";

export default skrinkSerializer(
    /**
     * 
     * Determines if the input parameter is basic type.
     * 
     * @param {any} argc Any object.
     * @returns {argc is number | string | boolean | bigint | symbol | null | undefined}
     */
    function (
        argc
    ) {
        return !isReference(argc);
    }
);
