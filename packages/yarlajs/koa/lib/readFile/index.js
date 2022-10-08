import fs from "@yarlajs/core/module/internal/fs/index.js";
import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";
import HttpError from "@yarlajs/core/lib/HttpError/index.js";
import Promise from "@yarlajs/core/lib/Promise/index.js";
import statSync from "../statSync/index.js";

export default skrinkSerializer(
    /**
     * 
     * @param {string} filename 
     * @param {number} [maximum]
     */
    function (
        filename,
        maximum
    ) {
        var l = Math.pow(2, 30) * 4 - 1;
        var m = Math.min(maximum || l, l);
        return new Promise(function (resolve, reject) {
            if (statSync(filename).size > m) {
                reject(new HttpError(413));
            } else {
                fs.readFile(filename, function (error, data) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
            }
        });
    }
);
