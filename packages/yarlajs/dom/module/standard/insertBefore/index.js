import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";

export default skrinkSerializer(
    /**
     * 
     * @param {Element} parentNode 
     * @param {Node} insertNode 
     * @param {Node | null} [previous] 
     */
    function insertBefore(
        parentNode,
        insertNode,
        previous
    ) {
        if (parentNode.nodeType === -1) {
            return parentNode.insertBefore(insertNode, previous || null);
        }
        if (insertNode.nodeType === -1) {
            return insertNode.childNodes.forEach(function (insertNode) {
                insertBefore(parentNode, insertNode, previous || null);
            }), insertNode;
        }
        if (parentNode.shadowRoot) {
            return parentNode.shadowRoot.insertBefore(insertNode, previous || null);
        }
        return parentNode.insertBefore(insertNode, previous || null);
    }
);
