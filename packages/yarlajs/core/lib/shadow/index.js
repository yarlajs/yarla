import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import Reflect from "../Reflect/index.js";

export default skrinkSerializer(
    /**
     * 
     * @param {Yarla.Component} component 
     * @param {string} [tagName]
     */
    function (
        component,
        tagName
    ) {
        return (
            Reflect.defineMetadata(component, true, "shadowRoot"),
            Reflect.defineMetadata(component, tagName, "tagName"));
    }
);
