import message from "../../module/constant/message/index.js";
import globalThis from "../../module/internal/globalThis/index.js";
import defineProperties from "../../module/standard/defineProperties/index.js";
import generateGetterDescriptor from "../../module/standard/generateGetterDescriptor/index.js";
import generateMethodDescriptor from "../../module/standard/generateMethodDescriptor/index.js";
import generateClass from "../../module/standard/generateClass/index.js";
import NOOP from "../../module/constant/NOOP/index.js";

export default (function (ReadableStream) {
    return defineProperties(ReadableStream, {
        from: generateMethodDescriptor(
            /**
             * 
             * @param {import("stream").Readable} nodeStream 
             * @param {"bytes"} [type]
             */
            function (
                nodeStream,
                type
            ) {
                return new ReadableStream({
                    // @ts-ignore
                    type: type,
                    cancel: function (reason) {
                        nodeStream.destroy(reason);
                    },
                    start: function (controller) {
                        nodeStream.on("close", function () {
                            if (!nodeStream.readableEnded) {
                                controller.error(new Error(message.STREAM_CLOSED_BEFORE_ENDING));
                            }
                        });
                        nodeStream.on("error", function (reason) {
                            controller.error(reason);
                        });
                        nodeStream.on("data", function (chunk) {
                            controller.enqueue(chunk);
                            nodeStream.pause();
                        });
                        nodeStream.on("end", function () {
                            controller.close();
                        });
                    },
                    pull: function () {
                        nodeStream.resume();
                    },
                });
            }
        ),
    });
}(globalThis.ReadableStream || generateClass(function () {
    throw new Error(message.NOT_SUPPORTED);
}, {
    locked: generateGetterDescriptor(
        function () {
            throw new Error(message.NOT_SUPPORTED);
        }
    ),
    cancel: generateMethodDescriptor(
        function () {
            throw new Error(message.NOT_SUPPORTED);
        }
    ),
    getReader: generateMethodDescriptor(
        function () {
            throw new Error(message.NOT_SUPPORTED);
        }
    ),
    pipeThrough: generateMethodDescriptor(
        function () {
            throw new Error(message.NOT_SUPPORTED);
        }
    ),
    pipeTo: generateMethodDescriptor(
        function () {
            throw new Error(message.NOT_SUPPORTED);
        }
    ),
    tee: generateMethodDescriptor(
        function () {
            throw new Error(message.NOT_SUPPORTED);
        }
    ),
}, NOOP, "ReadableStream")));
