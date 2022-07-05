import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import zone from "../zone/index.js";

export default skrinkSerializer(
    /**
     * 
     * @param {unknown} [state] 
     */
    function (
        state
    ) {
        return zone.target.useState(state);
    }
);
