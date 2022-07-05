import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";
import HTML_ATTR_SPECIAL from "../../constant/HTML_ATTR_SPECIAL/index.js";

export default skrinkSerializer(
    /**
     * 
     * @param {string} attributeName 
     */
    function (
        attributeName
    ) {
        return HTML_ATTR_SPECIAL[attributeName] || 0;
    }
);
