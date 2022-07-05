import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import Reflect from "../Reflect/index.js";

export default skrinkSerializer(
    /**
     * 
     * @param {Yarla.Component} component 
     */
    function (
        component
    ) {
        return Reflect.defineMetadata(component, true, "ignoreUpdate");
    }
);
