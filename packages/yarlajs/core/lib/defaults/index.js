import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import merge from "../merge/index.js";
import flat from "../flat/index.js";

export default skrinkSerializer(
    /**
     * 
     * Add non-existing properties to object from the queues object.
     * 
     * @param {any} argc The target object.
     * @returns {any}
     */
    function (
        argc
    ) {
        for (var
            i = 0,
            s = flat(arguments, 1, Infinity, true),
            l = s.length;
            i < l;
            i++
        ) {
            merge(argc, s[i], false, true);
        }
        return argc;
    }
);
