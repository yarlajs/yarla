import NOOP from "@yarlajs/core/module/constant/NOOP/index.js";
import message from "@yarlajs/core/module/constant/message/index.js";
import generateGetterDescriptor from "@yarlajs/core/module/standard/generateGetterDescriptor/index.js";
import generateMethodDescriptor from "@yarlajs/core/module/standard/generateMethodDescriptor/index.js";
import generateClass from "@yarlajs/core/module/standard/generateClass/index.js";
import Reflect from "@yarlajs/core/lib/Reflect/index.js";

export default generateClass(Reflect.BASE, {
    location: generateGetterDescriptor(
        function () {
            throw new Error(message.ILLEGAL_INVOCATION);
        }
    ),
    length: generateGetterDescriptor(
        function () {
            throw new Error(message.ILLEGAL_INVOCATION);
        }
    ),
    state: generateGetterDescriptor(
        function () {
            throw new Error(message.ILLEGAL_INVOCATION);
        }
    ),
    back: generateMethodDescriptor(
        function () {
            throw new Error(message.ILLEGAL_INVOCATION);
        }
    ),
    forward: generateMethodDescriptor(
        function () {
            throw new Error(message.ILLEGAL_INVOCATION);
        }
    ),
    go: generateMethodDescriptor(
        function () {
            throw new Error(message.ILLEGAL_INVOCATION);
        }
    ),
    navigate: generateMethodDescriptor(
        function () {
            throw new Error(message.ILLEGAL_INVOCATION);
        }
    ),
    redirect: generateMethodDescriptor(
        function () {
            throw new Error(message.ILLEGAL_INVOCATION);
        }
    ),
    listen: generateMethodDescriptor(
        function () {
            throw new Error(message.ILLEGAL_INVOCATION);
        }
    ),
}, NOOP, "History");
