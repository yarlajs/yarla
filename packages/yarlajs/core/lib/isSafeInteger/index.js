import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import isInteger from "../isInteger/index.js";

export default skrinkSerializer(
    // eslint-disable-next-line es/no-number-issafeinteger
    Number.isSafeInteger || function (
        /**
         * @type {number}
         */
        argc
    ) {
        return isInteger(argc) && Math.abs(argc) <= 0x1FFFFFFFFFFFFF;
    }
);
