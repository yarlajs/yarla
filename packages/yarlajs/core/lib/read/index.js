import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import ReadableStream from "../ReadableStream/index.js";
import isReadable from "../isReadable/index.js";
import HttpError from "../HttpError/index.js";
import Promise from "../Promise/index.js";
import Buffer from "../Buffer/index.js";

export default skrinkSerializer(
    /**
     * 
     * @param {import("stream").Readable | ReadableStream} readable 
     * @param {number} [maximum] 
     */
    function (
        readable,
        maximum
    ) {
        var l = Math.pow(2, 30) * 4 - 1;
        var m = Math.min(maximum || l, l);
        return new Promise(function (resolve, reject) {
            function large() {
                return b.reduce(function (v, i) { return v + i.length; }, 0) > m;
            }
            /** @type {Array<Uint8Array>} */
            var b = [];
            var s = isReadable(readable) ? ReadableStream.from(readable) : readable;
            var r = s.getReader();
            r.closed.then(function () {
                if (large()) {
                    throw new HttpError(413);
                }
                return Buffer.concat(b);
            }).then(resolve, reject);
            r.read().then(function process(v) {
                if (v.done) {
                    return;
                }
                b.push(v.value);
                if (large()) {
                    return r.cancel();
                }
                return r.read().then(process);
            }).catch(reject);
        });
    }
);
