import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import zone from "../zone/index.js";

export default skrinkSerializer(
    /**
     * 
     * @param {any} [patulous] 
     */
    function (
        patulous
    ) {
        return zone.target.useTarget(patulous);
    }
);
