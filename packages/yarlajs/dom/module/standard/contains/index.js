import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";

export default skrinkSerializer(
    /**
     * 
     * @param {Node} parentNode 
     * @param {Node | null} other 
     */
    function (
        parentNode,
        other
    ) {
        if (parentNode.contains) {
            return parentNode.contains(other);
        }
        while (other) {
            other = other.parentNode;
            if (other === parentNode) {
                return true;
            }
        }
        return false;
    }
);
