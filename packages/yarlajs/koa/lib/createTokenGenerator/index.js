import salt from "@yarlajs/core/lib/salt/index.js";
import defaults from "@yarlajs/core/lib/defaults/index.js";
import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";
import TokenGenerator from "../../module/standard/TokenGenerator/index.js";

export default skrinkSerializer(
    /**
     * 
     * @param {Yarla.koa.TokenGeneratorInitializationOptions} [opts]
     */
    function (
        opts
    ) {
        return TokenGenerator.init(defaults({ secret: salt(128) }, opts));
    }
);
