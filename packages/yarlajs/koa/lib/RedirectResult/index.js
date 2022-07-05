import generateGetterDescriptor from "@yarlajs/core/module/standard/generateGetterDescriptor/index.js";
import generateClass from "@yarlajs/core/module/standard/generateClass/index.js";
import Reflect from "@yarlajs/core/lib/Reflect/index.js";
import NoneResult from "../NoneResult/index.js";

export default generateClass(
    /**
     * 
     * @this {any}
     * @param {string} location
     * @param {301 | 302 | 303 | 307 | 308} [status]
     */
    function (
        location,
        status
    ) {
        return Reflect.defineInternal(Reflect.callSuper(this, status || 302), location, "location");
    },
    {
        location: generateGetterDescriptor(
            /**
             * 
             * @this {any}
             * @returns {string}
             */
            function () {
                return Reflect.getInternal(this).location;
            }
        ),
    },
    NoneResult,
    "RedirectResult"
);
