import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";
import Reflect from "@yarlajs/core/lib/Reflect/index.js";

export default skrinkSerializer(
    /**
     * 
     * @param {Yarla.Component} component 
     */
    function (
        component
    ) {
        return Reflect.hasMetadata(component) ? !!Reflect.getMetadata(component).shadowRoot : false;
    }
);
