import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import isNullOrUndefined from "../isNullOrUndefined/index.js";
import keys from "../keys/index.js";

export default skrinkSerializer(
    /**
     * 
     * Determines if the input parameter is null or undefined or an empty object.
     * 
     * @param {any} argc Any object.
     * @returns {argc is null | undefined | Kylin.NilObject}
     */
    function (
        argc
    ) {
        return isNullOrUndefined(argc) || keys(argc, true).length === 0;
    }
);
