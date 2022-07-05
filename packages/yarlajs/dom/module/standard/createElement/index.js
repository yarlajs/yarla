import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";

export default skrinkSerializer(
    /**
     * 
     * @param {string} tagName 
     * @param {Document} document 
     * @param {string | null} namespaceURI 
     */
    function (
        tagName,
        document,
        namespaceURI
    ) {
        return namespaceURI ? document.createElementNS(namespaceURI, tagName) : document.createElement(tagName);
    }
);
