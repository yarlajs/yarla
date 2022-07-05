import NOOP from "@yarlajs/core/module/constant/NOOP/index.js";
import generateMethodDescriptor from "@yarlajs/core/module/standard/generateMethodDescriptor/index.js";
import generateClass from "@yarlajs/core/module/standard/generateClass/index.js";
import Promise from "@yarlajs/core/lib/Promise/index.js";
import Reflect from "@yarlajs/core/lib/Reflect/index.js";

export default generateClass(
    /**
     * 
     * @this {any}
     * @param {(req: import("http").IncomingMessage, res: import("http").ServerResponse) => void | Promise<void>} processor 
     */
    function (
        processor
    ) {
        return Reflect.defineInternal(this, processor, "processor");
    },
    {
        invoke: generateMethodDescriptor(
            /**
             * 
             * @this {any}
             * @param {import("http").IncomingMessage} req 
             * @param {import("http").ServerResponse} res 
             */
            function (
                req,
                res
            ) {
                return Promise.resolve(Reflect.getInternal(this).processor.call(null, req, res));
            }
        ),
    },
    NOOP,
    "PureResult"
);
