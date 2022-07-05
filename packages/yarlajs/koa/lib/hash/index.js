import crypto from "@yarlajs/core/module/internal/crypto/index.js";
import definition from "@yarlajs/core/module/constant/definition/index.js";
import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";
import Promise from "@yarlajs/core/lib/Promise/index.js";
import Buffer from "@yarlajs/core/lib/Buffer/index.js";

export default skrinkSerializer(
    /**
     * 
     * @param {Buffer | import("stream").Readable} argc 
     */
    function (
        argc
    ) {
        return new Promise(function (resolve, reject) {
            var md5 = crypto.createHash(definition.MD5);
            if (Buffer.isBuffer(argc)) {
                resolve(md5.update(argc).digest(definition.HEX));
            } else {
                argc.on("end", function () {
                    resolve(md5.digest(definition.HEX));
                });
                argc.on("error", function (error) {
                    reject(error);
                });
                argc.on("data", function (chunk) {
                    md5.update(chunk);
                });
            }
        });
    }
);
