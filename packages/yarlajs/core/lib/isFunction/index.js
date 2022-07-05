import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";

export default skrinkSerializer(
    /**
     * 
     * Determines if the input parameter is a function.
     * 
     * @param {any} argc Any object.
     * @returns {argc is Kylin.BasicFunc}
     */
    function (
        argc
    ) {
        return typeof argc === "function";
    }
);
