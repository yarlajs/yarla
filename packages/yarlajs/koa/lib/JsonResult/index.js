import NOOP from "@yarlajs/core/module/constant/NOOP/index.js";
import generateGetterDescriptor from "@yarlajs/core/module/standard/generateGetterDescriptor/index.js";
import generateClass from "@yarlajs/core/module/standard/generateClass/index.js";
import Reflect from "@yarlajs/core/lib/Reflect/index.js";

export default generateClass(
    /**
     * 
     * @this {any}
     * @param {any} data 
     * @param {number} [code] 
     * @param {string} [message] 
     */
    function (
        data,
        code,
        message
    ) {
        return (
            Reflect.defineInternal(this, data, "data"),
            Reflect.defineInternal(this, code, "code"),
            Reflect.defineInternal(this, message, "message"));
    },
    {
        data: generateGetterDescriptor(
            /**
             * 
             * @this {any}
             * @returns {any}
             */
            function () {
                return Reflect.getInternal(this).data;
            }
        ),
        code: generateGetterDescriptor(
            /**
             * 
             * @this {any}
             * @returns {number | undefined}
             */
            function () {
                return Reflect.getInternal(this).code;
            }
        ),
        message: generateGetterDescriptor(
            /**
             * 
             * @this {any}
             * @returns {string | undefined}
             */
            function () {
                return Reflect.getInternal(this).message;
            }
        ),
    },
    NOOP,
    "JsonResult"
);
