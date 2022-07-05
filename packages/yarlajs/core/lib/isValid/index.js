import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import isNullOrUndefined from "../isNullOrUndefined/index.js";
import isNumber from "../isNumber/index.js";
import isFinite from "../isFinite/index.js";
import isDate from "../isDate/index.js";

export default skrinkSerializer(
    /**
     * 
     * Determines if the input parameter is valid.
     * 
     * @param {any} argc An object.
     * @returns {boolean}
     */
    function (
        argc
    ) {
        return isNumber(argc) ? isFinite(argc) : isDate(argc) ? isFinite(argc.getTime()) : !isNullOrUndefined(argc);
    }
);
