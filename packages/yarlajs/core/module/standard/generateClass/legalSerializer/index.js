import message from "../../../constant/message/index.js";
import skrinkSerializer from "../../skrinkSerializer/index.js";

/**
 * 
 * @param {Yarla.BasicFunc} argc 
 * @param {Yarla.Proto<any>} constructor 
 * @returns {Yarla.BasicFunc}
 */
export default function (
    argc,
    constructor
) {
    return skrinkSerializer(
        /**
         * @this {any}
         */
        function () {
            if (this instanceof constructor) {
                return argc.apply(this, arguments);
            }
            throw new TypeError(message.ILLEGAL_INVOCATION);
        }
    );
}
