import defineProperties from "@yarlajs/core/module/standard/defineProperties/index.js";
import generateNormalDescriptor from "@yarlajs/core/module/standard/generateNormalDescriptor/index.js";
import generateClass from "@yarlajs/core/module/standard/generateClass/index.js";
import HttpError from "@yarlajs/core/lib/HttpError/index.js";
import Reflect from "@yarlajs/core/lib/Reflect/index.js";

export default generateClass(
    /**
     * 
     * @this {any}
     * @param {object} init 
     * @param {string} init.url 
     * @param {XMLHttpRequest} init.xhr 
     * @param {Yarla.AnyObject<string | ReadonlyArray<string>>} init.headers 
     * @param {Yarla.xhr.ResponseType} init.responseType 
     * @param {any} init.body 
     * @param {number} status 
     * @param {string} [message] 
     */
    function (
        init,
        status,
        message
    ) {
        return defineProperties(Reflect.callSuper(this, status, message), {
            url: generateNormalDescriptor(init.url, true, true),
            xhr: generateNormalDescriptor(init.xhr, true, true),
            headers: generateNormalDescriptor(init.headers, true, true),
            responseType: generateNormalDescriptor(init.responseType, true, true),
            body: generateNormalDescriptor(init.body, true, true),
        });
    },
    {
        name: generateNormalDescriptor("ResponseError", true, true),
    },
    HttpError,
    "ResponseError"
);
