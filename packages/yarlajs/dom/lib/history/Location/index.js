import NOOP from "@yarlajs/core/module/constant/NOOP/index.js";
import message from "@yarlajs/core/module/constant/message/index.js";
import generateGetterDescriptor from "@yarlajs/core/module/standard/generateGetterDescriptor/index.js";
import generateMethodDescriptor from "@yarlajs/core/module/standard/generateMethodDescriptor/index.js";
import generateClass from "@yarlajs/core/module/standard/generateClass/index.js";
import Reflect from "@yarlajs/core/lib/Reflect/index.js";

export default generateClass(Reflect.BASE, {
    protocol: generateGetterDescriptor(
        function () {
            throw new Error(message.ILLEGAL_INVOCATION);
        }
    ),
    host: generateGetterDescriptor(
        function () {
            throw new Error(message.ILLEGAL_INVOCATION);
        }
    ),
    hostname: generateGetterDescriptor(
        function () {
            throw new Error(message.ILLEGAL_INVOCATION);
        }
    ),
    port: generateGetterDescriptor(
        function () {
            throw new Error(message.ILLEGAL_INVOCATION);
        }
    ),
    pathname: generateGetterDescriptor(
        function () {
            throw new Error(message.ILLEGAL_INVOCATION);
        }
    ),
    search: generateGetterDescriptor(
        function () {
            throw new Error(message.ILLEGAL_INVOCATION);
        }
    ),
    hash: generateGetterDescriptor(
        function () {
            throw new Error(message.ILLEGAL_INVOCATION);
        }
    ),
    href: generateGetterDescriptor(
        function () {
            throw new Error(message.ILLEGAL_INVOCATION);
        }
    ),
    toString: generateMethodDescriptor(
        /**
         * 
         * @this {any}
         */
        function () {
            return this.href;
        }
    ),
}, NOOP, "Location");
