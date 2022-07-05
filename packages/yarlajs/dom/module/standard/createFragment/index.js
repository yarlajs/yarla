import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";
import VMFragment from "../VMFragment/index.js";

export default skrinkSerializer(
    function () {
        return VMFragment.init();
    }
);
