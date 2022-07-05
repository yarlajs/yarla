import globalThis from "@yarlajs/core/module/internal/globalThis/index.js";
import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";
import env from "../../module/constant/env/index.js";

export default skrinkSerializer(
    /**
     * 
     * @param {number} x 
     * @param {number} y 
     * @param {ScrollBehavior} [behavior] 
     */
    function (
        x,
        y,
        behavior
    ) {
        if (env.BEHAVIOR) {
            globalThis.scrollTo({
                behavior: behavior,
                left: x,
                top: y,
            });
        } else {
            globalThis.scrollTo(x, y);
        }
    }
);
