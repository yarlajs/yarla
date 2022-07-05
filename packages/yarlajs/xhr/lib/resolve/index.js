import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";
import concatUrl from "@yarlajs/core/lib/concatUrl/index.js";
import flat from "@yarlajs/core/lib/flat/index.js";
import env from "../../module/constant/env/index.js";

export default skrinkSerializer(
    function () {
        return concatUrl.apply(null, [env.BASE_URI].concat(flat(arguments)));
    }
);
