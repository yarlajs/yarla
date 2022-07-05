import globalThis from "../../module/internal/globalThis/index.js";
import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import isNumber from "../isNumber/index.js";

export default skrinkSerializer(
    // eslint-disable-next-line es/no-number-isfinite
    Number.isFinite || function (
        /**
         * @type {number}
         */
        argc
    ) {
        return isNumber(argc) && globalThis.isFinite(argc);
    }
);
