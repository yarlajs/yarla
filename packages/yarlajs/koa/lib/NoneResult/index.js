import NOOP from "@yarlajs/core/module/constant/NOOP/index.js";
import generateGetterDescriptor from "@yarlajs/core/module/standard/generateGetterDescriptor/index.js";
import generateClass from "@yarlajs/core/module/standard/generateClass/index.js";
import Reflect from "@yarlajs/core/lib/Reflect/index.js";

export default generateClass(
    /**
     * 
     * @this {any}
     * @param {number} status 
     */
    function (
        status
    ) {
        return Reflect.defineInternal(this, status, "status");
    },
    {
        status: generateGetterDescriptor(
            /**
             * 
             * @this {any}
             * @returns {number}
             */
            function () {
                return Reflect.getInternal(this).status;
            }
        ),
    },
    NOOP,
    "NoneResult"
);
