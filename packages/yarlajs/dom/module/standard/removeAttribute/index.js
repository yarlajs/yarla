import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";
import getAttrMapping from "../getAttrMapping/index.js";
import getAttrSpecial from "../getAttrSpecial/index.js";

export default skrinkSerializer(
    /**
     * 
     * @param {HTMLElement} element 
     * @param {string} attributeName 
     */
    function (
        element,
        attributeName
    ) {
        switch (getAttrSpecial(attributeName = getAttrMapping(attributeName))) {
            case 0:
                element.removeAttribute(attributeName);
                break;
            case 1:
                element[attributeName] = false;
                break;
            case 2:
                element[attributeName] = "";
                break;
            case 3:
                element.style.cssText = "";
                break;
            case 4:
                element.className = "";
                break;
        }
    }
);
