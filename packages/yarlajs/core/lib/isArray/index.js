import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";

export default skrinkSerializer(
    /**
     * 
     * Determines if the input parameter is an array.
     * 
     * @param {any} argc Any object.
     * @returns {argc is any[]}
     */
    function (
        argc
    ) {
        return Array.isArray(argc);
    }
);
