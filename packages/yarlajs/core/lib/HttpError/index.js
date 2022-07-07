import httpStatus from "../../module/constant/httpStatus/index.js";
import defineProperties from "../../module/standard/defineProperties/index.js";
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
        return defineProperties(Reflect.callSuper(this, message || httpStatus[status] || "Unknown"), {
            status: generateNormalDescriptor(status, true, true),
        });
    },
    {
        name: generateNormalDescriptor("HttpError", true, true),
    },
    Error,
    "HttpError"
);
