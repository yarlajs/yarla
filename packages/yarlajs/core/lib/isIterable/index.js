import Symbol from "../../module/standard/Symbol/index.js";
import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import isFunction from "../isFunction/index.js";
import isSymbol from "../isSymbol/index.js";
import get from "../get/index.js";

export default skrinkSerializer(
    /**
     * 
     * @param {any} argc 
     * @returns {argc is Iterable<any>}
     */
    function (
        argc
    ) {
        return isSymbol(Symbol.iterator) && isFunction(get(argc, [Symbol.iterator]));
    }
);
