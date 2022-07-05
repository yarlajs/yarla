import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";
import statSync from "../statSync/index.js";
import exists from "../exists/index.js";

export default skrinkSerializer(
    /**
     * 
     * @param {string} filename 
     */
    function (
        filename
    ) {
        return exists(filename) && statSync(filename).isDirectory();
    }
);
