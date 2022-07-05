import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import VMElement from "../VMElement/index.js";

export default skrinkSerializer(
    function () {
        // @ts-ignore
        return VMElement.init.apply(VMElement, arguments);
    }
);
