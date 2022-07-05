import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";
import getAttrMapping from "../getAttrMapping/index.js";
import getAttrSpecial from "../getAttrSpecial/index.js";

export default skrinkSerializer(
    /**
     * 
     * @param {HTMLElement} element 
     * @param {string} attributeName 
     * @param {any} value
     */
    function (
        element,
        attributeName,
        value
    ) {
        switch (getAttrSpecial(attributeName = getAttrMapping(attributeName))) {
            case 0:
                element.setAttribute(attributeName, String(value));
                break;
            case 1:
                element[attributeName] = Boolean(value);
                break;
            case 2:
                element[attributeName] = String(value);
                break;
            case 3:
                element.style.cssText = value;
                break;
            case 4:
                element.className = value;
                break;
        }
    }
);
