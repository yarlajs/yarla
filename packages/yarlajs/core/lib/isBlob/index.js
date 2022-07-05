import globalThis from "../../module/internal/globalThis/index.js";
import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import isInstanceOf from "../isInstanceOf/index.js";

export default skrinkSerializer(
    /**
     * 
     * Determines if the input parameter is a Blob.
     * 
     * @param {any} argc Any object.
     * @returns {argc is Blob}
     */
    function (
        argc
    ) {
        return isInstanceOf(argc, globalThis.Blob);
    }
);
