import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";

export default skrinkSerializer(
    /**
     * Determines if the input parameter is reference type.
     * 
     * @param {any} argc Any object.
     * @returns {boolean}
     */
    function (
        argc
    ) {
        return Object(argc) === argc;
    }
);
