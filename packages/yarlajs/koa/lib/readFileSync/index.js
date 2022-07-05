import fs from "@yarlajs/core/module/internal/fs/index.js";
import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";
import HttpError from "@yarlajs/core/lib/HttpError/index.js";
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
        var l = Math.pow(2, 30) - 1;
        var m = Math.min(maximum || l, l);
        if (statSync(filename).size > m) {
            throw new HttpError(413);
        }
        return fs.readFileSync(filename);
    }
);
