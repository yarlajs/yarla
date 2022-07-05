import defaults from "@yarlajs/core/lib/defaults/index.js";
import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";
import SessionStorage from "../../module/standard/SessionStorage/index.js";

export default skrinkSerializer(
    /**
     * 
     * @param {Yarla.koa.SessionStorageInitializationOptions} [opts] 
     */
    function (
        opts
    ) {
        return SessionStorage.init(defaults({ expire: 20 }, opts));
    }
);
