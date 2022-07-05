import defaults from "@yarlajs/core/lib/defaults/index.js";
import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";
import VisitValidator from "../../module/standard/VisitValidator/index.js";

export default skrinkSerializer(
    /**
     * 
     * @param {Yarla.koa.VisitValidatorInitializationOptions} [opts] 
     */
    function (
        opts
    ) {
        return VisitValidator.init(defaults({ origin: "Strict" }, opts));
    }
);
