import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import isReference from "../isReference/index.js";

export default skrinkSerializer(
    /**
     * 
     * Determines if the input parameter is an instance of the specified class.
     * 
     * @param {any} argc Any object.
     * @param {Yarla.Proto<T>} constructor The class.
     * @returns {argc is T}
     * @template T
     */
    function (
        argc,
        constructor
    ) {
        return isReference(constructor) && argc instanceof constructor;
    }
);
