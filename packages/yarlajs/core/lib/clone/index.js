import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import isArray from "../isArray/index.js";
import merge from "../merge/index.js";

export default skrinkSerializer(
    /**
     * 
     * Clone the specified object.
     * 
     * @param {T} argc An object.
     * @param {boolean} [deep] Indicates whether to deep clone the object.
     * @param {boolean} [onlyValid] Indicates whether to clone only the valid properties of the object.
     * @returns {T}
     * @template T
     */
    function (
        argc,
        deep,
        onlyValid
    ) {
        return merge(isArray(argc) ? [] : {}, argc, deep, onlyValid);
    }
);
