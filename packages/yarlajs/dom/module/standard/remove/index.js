import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";

export default skrinkSerializer(
    /**
     * 
     * @param {Yarla.Object<T, Text | Element>} node 
     * @returns {T}
     * @template T
     */
    function (
        node
    ) {
        if (node.remove) {
            node.remove();
        } else if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
        // @ts-ignore
        return node;
    }
);
