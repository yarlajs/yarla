import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";

export default skrinkSerializer(
    /**
     * 
     * Determines if the input parameter is null.
     * 
     * @param {any} argc Any object.
     * @returns {argc is null}
     */
    function (
        argc
    ) {
        return argc === null;
    }
);
