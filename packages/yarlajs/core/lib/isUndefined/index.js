import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";

export default skrinkSerializer(
    /**
     * 
     * Determines if the input parameter is undefined.
     * 
     * @param {any} argc Any object.
     * @returns {argc is undefined}
     */
    function (
        argc
    ) {
        return argc === void 0;
    }
);
