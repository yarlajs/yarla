import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";

export default skrinkSerializer(
    /**
     * 
     * @param {string} textContent 
     * @param {Document} document 
     */
    function (
        textContent,
        document
    ) {
        return document.createTextNode(textContent);
    }
);
