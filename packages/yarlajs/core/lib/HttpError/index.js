import httpStatus from "../../module/constant/httpStatus/index.js";
import generateGetterDescriptor from "../../module/standard/generateGetterDescriptor/index.js";
import generateNormalDescriptor from "../../module/standard/generateNormalDescriptor/index.js";
import generateClass from "../../module/standard/generateClass/index.js";
import Reflect from "../Reflect/index.js";

export default generateClass(
    /**
     * 
     * @this {any}
     * @param {number} status 
     * @param {string} [message] 
     */
    function (
        status,
        message
    ) {
        return Reflect.defineInternal(Reflect.callSuper(this, "[" + status + "] " + (message || httpStatus[status] || "Unknown")), status, "status");
    },
    {
        name: generateNormalDescriptor("HttpError"),
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
    Error,
    "HttpError"
);
