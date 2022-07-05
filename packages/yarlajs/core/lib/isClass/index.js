import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import hasOwnProperty from "../../module/standard/hasOwnProperty/index.js";
import isFunction from "../isFunction/index.js";

export default skrinkSerializer(
    /**
     * 
     * Determines if the input parameter is a class.
     * 
     * @param {any} argc Any object.
     * @returns {argc is Kylin.ClassFunc}
     */
    function (
        argc
    ) {
        return isFunction(argc) && !hasOwnProperty(argc, "arguments");
    }
);
