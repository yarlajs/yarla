import http from "@yarlajs/core/module/internal/http/index.js";
import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";
import createListener from "../createListener/index.js";

export default skrinkSerializer(
    /**
     * 
     * @param {Yarla.koa.Options} [opts] 
     */
    function (
        opts
    ) {
        return http.createServer(createListener(opts));
    }
);
