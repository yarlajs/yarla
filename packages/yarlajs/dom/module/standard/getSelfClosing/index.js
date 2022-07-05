import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";
import HTML_SELF_CLOSING from "../../constant/HTML_SELF_CLOSING/index.js";

export default skrinkSerializer(
    /**
     * 
     * @param {string} tagName 
     */
    function (
        tagName
    ) {
        return HTML_SELF_CLOSING[tagName] || false;
    }
);
