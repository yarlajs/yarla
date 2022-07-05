import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import zone from "../zone/index.js";

export default skrinkSerializer(
    /**
     * 
     * @param {() => any} factory
     * @param {ReadonlyArray<any>} [dependencies] 
     */
    function (
        factory,
        dependencies
    ) {
        return zone.target.useMemo(factory, dependencies);
    }
);
