import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import isFinite from "../isFinite/index.js";

export default skrinkSerializer(
    // eslint-disable-next-line es/no-number-isinteger
    Number.isInteger || function (
        /**
         * @type {number}
         */
        argc
    ) {
        return isFinite(argc) && Math.floor(argc) === argc;
    }
);
