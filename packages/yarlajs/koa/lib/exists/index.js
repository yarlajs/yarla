import fs from "@yarlajs/core/module/internal/fs/index.js";
import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";

export default skrinkSerializer(
    /**
     * 
     * @param {string} filename 
     */
    function (
        filename
    ) {
        return fs.existsSync(filename);
    }
);
