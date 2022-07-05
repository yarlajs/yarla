import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";
import isNullOrUndefined from "@yarlajs/core/lib/isNullOrUndefined/index.js";
import HTML_TYPE_SIMILAR from "../../constant/HTML_TYPE_SIMILAR/index.js";

export default skrinkSerializer(
    /**
     * 
     * @param {string} [inputType] 
     */
    function (
        inputType
    ) {
        return isNullOrUndefined(inputType) || HTML_TYPE_SIMILAR[inputType] || false;
    }
);
