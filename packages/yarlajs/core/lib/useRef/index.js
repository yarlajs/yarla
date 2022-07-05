import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import zone from "../zone/index.js";

export default skrinkSerializer(
    /**
     * 
     * @param {unknown} [target] 
     */
    function (
        target
    ) {
        return zone.target.useRef(target);
    }
);
