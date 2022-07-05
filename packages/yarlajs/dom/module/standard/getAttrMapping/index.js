import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";
import HTML_ATTR_MAPPING from "../../constant/HTML_ATTR_MAPPING/index.js";

export default skrinkSerializer(
    /**
     * 
     * @param {string} attributeName 
     */
    function (
        attributeName
    ) {
        return HTML_ATTR_MAPPING[attributeName] || attributeName;
    }
);
