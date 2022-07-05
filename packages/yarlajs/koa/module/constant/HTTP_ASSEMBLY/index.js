import module from "@yarlajs/core/module/internal/module/index.js";
import httpHeader from "@yarlajs/core/module/constant/httpHeader/index.js";
import env from "../env/index.js";

export default env.DEVELOPMENT ? [
    {
        dist: "node_modules",
        /**
         * 
         * @param {string} pathname 
         */
        ignore: function (
            pathname
        ) {
            return pathname.slice(14).startsWith("node:") || module.builtinModules.includes(pathname.slice(14));
        },
        /**
         * 
         * @param {string} pathname
         * @param {Yarla.koa.Context} context 
         */
        static: function (
            pathname,
            context
        ) {
            return context.getRequestHeader(httpHeader.X_REQUESTED_WITH) !== "XMLHttpRequest";
        },
    },
    {
        dist: "src"
    },
] : [];
