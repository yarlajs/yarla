import message from "@yarlajs/core/module/constant/message/index.js";
import globalThis from "@yarlajs/core/module/internal/globalThis/index.js";
import generateGetterDescriptor from "@yarlajs/core/module/standard/generateGetterDescriptor/index.js";
import generateMethodDescriptor from "@yarlajs/core/module/standard/generateMethodDescriptor/index.js";
import generateClass from "@yarlajs/core/module/standard/generateClass/index.js";
import NOOP from "@yarlajs/core/module/constant/NOOP/index.js";

export default (function (Blob) {
    return Blob = Blob || generateClass(function () {
        throw new Error(message.NOT_SUPPORTED);
    }, {
        type: generateGetterDescriptor(
            function () {
                throw new Error(message.NOT_SUPPORTED);
            }
        ),
        size: generateGetterDescriptor(
            function () {
                throw new Error(message.NOT_SUPPORTED);
            }
        ),
        slice: generateMethodDescriptor(
            function () {
                throw new Error(message.NOT_SUPPORTED);
            }
        ),
        stream: generateMethodDescriptor(
            function () {
                throw new Error(message.NOT_SUPPORTED);
            }
        ),
        arrayBuffer: generateMethodDescriptor(
            function () {
                throw new Error(message.NOT_SUPPORTED);
            }
        ),
        text: generateMethodDescriptor(
            function () {
                throw new Error(message.NOT_SUPPORTED);
            }
        ),
    }, NOOP, "Blob");
}(globalThis.Blob));
