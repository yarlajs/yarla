import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";
import isBoolean from "@yarlajs/core/lib/isBoolean/index.js";
import contains from "../contains/index.js";

export default skrinkSerializer(
    /**
     * 
     * @param {Node} node 
     */
    function (
        node
    ) {
        var isConnected = node.isConnected;
        if (isBoolean(isConnected)) {
            return isConnected;
        }
        var ownerDocument = node.ownerDocument;
        if (ownerDocument) {
            return contains(ownerDocument.documentElement || ownerDocument, node);

        }
        return false;
    }
);
