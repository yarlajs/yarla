import fs from "@yarlajs/core/module/internal/fs/index.js";
import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";
import resolve from "../resolve/index.js";
import isFile from "../isFile/index.js";

export default skrinkSerializer(
    /**
     * 
     * @param {string} filename 
     */
    function (
        filename
    ) {
        if (isFile(filename = resolve(filename))) {
            fs.unlinkSync(filename);
        }
    }
);
