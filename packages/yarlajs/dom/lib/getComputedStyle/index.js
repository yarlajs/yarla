import globalThis from "@yarlajs/core/module/internal/globalThis/index.js";
import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";
import bean from "../../module/standard/bean/index.js";

export default skrinkSerializer(
    /**
     * 
     * @param {Yarla.Element} element 
     * @param {string | null} pseudoElement 
     */
    function (
        element,
        pseudoElement
    ) {
        return globalThis.getComputedStyle(bean.real(element), pseudoElement);
    }
);
