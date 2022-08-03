import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import isNullOrEmptyString from "../isNullOrEmptyString/index.js";

export default skrinkSerializer(
    /**
     * 
     * Returns the unique values in the specified array.
     * 
     * @param {any[]} argc An array.
     */
    function (
        argc
    ) {
        return argc.filter(function (i) {
            return !isNullOrEmptyString(i);
        });
    }
);
