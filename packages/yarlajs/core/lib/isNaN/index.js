import globalThis from "../../module/internal/globalThis/index.js";
import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import isNumber from "../isNumber/index.js";

export default skrinkSerializer(
    // eslint-disable-next-line es/no-number-isnan
    Number.isNaN || function (
        /**
         * @type {number}
         */
        argc
    ) {
        return isNumber(argc) && globalThis.isNaN(argc);
    }
);
