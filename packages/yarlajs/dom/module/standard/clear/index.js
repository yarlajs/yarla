import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";

export default skrinkSerializer(
    /**
     * 
     * @param {Yarla.Object<T, Node>} node
     * @returns {T}
     * @template T 
     */
    function (
        node
    ) {
        while (node.firstChild) {
            node.removeChild(node.firstChild);
        }
        // @ts-ignore
        return node;
    }
);
