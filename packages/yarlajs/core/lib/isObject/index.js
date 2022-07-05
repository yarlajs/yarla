import className from "../../module/standard/className/index.js";
import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import isNull from "../isNull/index.js";

export default skrinkSerializer(
    /**
     * 
     * Determines if the input parameter is an object, exclude null.
     * 
     * @param {any} argc Any object.
     * @param {boolean} [strict] Indicates if it is a strict object. 
     * @returns {argc is object}
     */
    function (
        argc,
        strict
    ) {
        return strict ? className(argc) === "Object" : !isNull(argc) && typeof argc === "object";
    }
);
