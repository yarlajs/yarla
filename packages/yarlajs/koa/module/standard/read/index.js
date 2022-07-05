import message from "@yarlajs/core/module/constant/message/index.js";
import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";
import HttpError from "@yarlajs/core/lib/HttpError/index.js";
import Promise from "@yarlajs/core/lib/Promise/index.js";
import Buffer from "@yarlajs/core/lib/Buffer/index.js";

export default skrinkSerializer(
    /**
     * 
     * @param {import("stream").Readable} readable 
     * @param {number} [maximum] 
     */
    function (
        readable,
        maximum
    ) {
        var l = Math.pow(2, 30) - 1;
        var m = Math.min(maximum || l, l);
        return new Promise(function (resolve, reject) {
            /** @type {Buffer[]} */
            var r = [], t = false;
            readable.on("close", function () {
                if (t || readable.readableEnded) {
                    return;
                }
                reject(new Error(message.STREAM_CLOSED_BEFORE_ENDING));
            });
            readable.on("error", function (reason) {
                t = true, reject(reason);
            });
            readable.on("end", function () {
                resolve(Buffer.concat(r));
            });
            readable.on("readable", function () {
                /** @type {Buffer} */
                var i;
                while (i = readable.read()) {
                    var l = r.reduce(function (v, i) { return v + i.length; }, i.length);
                    if (l > m) {
                        readable.destroy(new HttpError(413));
                        break;
                    }
                    r.push(i);
                }
            });
        });
    }
);
