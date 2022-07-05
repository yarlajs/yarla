import generateGetterDescriptor from "@yarlajs/core/module/standard/generateGetterDescriptor/index.js";
import generateClass from "@yarlajs/core/module/standard/generateClass/index.js";
import Reflect from "@yarlajs/core/lib/Reflect/index.js";
import NoneResult from "../NoneResult/index.js";

export default generateClass(
    /**
     * 
     * @this {any}
     * @param {string} realm 
     */
    function (
        realm
    ) {
        return Reflect.defineInternal(Reflect.callSuper(this, 401), realm, "realm");
    },
    {
        realm: generateGetterDescriptor(
            /**
             * 
             * @this {any}
             * @returns {string}
             */
            function () {
                return Reflect.getInternal(this).realm;
            }
        ),
    },
    NoneResult,
    "UnauthorizedResult"
);
