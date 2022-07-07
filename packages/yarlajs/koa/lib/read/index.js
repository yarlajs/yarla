import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";
import File from "../../module/standard/File/index.js";

export default skrinkSerializer(
    /**
     * 
     * @param {string} filename 
     * @param {string} [mimetype] 
     */
    function (
        filename,
        mimetype
    ) {
        return new File([], filename, {
            type: mimetype,
        });
    }
);
