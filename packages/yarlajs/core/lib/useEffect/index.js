import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import zone from "../zone/index.js";

export default skrinkSerializer(
    /**
     * 
     * @param {Yarla.Effection} effection
     * @param {ReadonlyArray<any>} [dependencies] 
     */
    function (
        effection,
        dependencies
    ) {
        return zone.target.useEffect(effection, dependencies);
    }
);
