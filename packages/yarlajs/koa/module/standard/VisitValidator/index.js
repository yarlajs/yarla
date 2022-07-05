import url from "@yarlajs/core/module/internal/url/index.js";
import NOOP from "@yarlajs/core/module/constant/NOOP/index.js";
import httpHeader from "@yarlajs/core/module/constant/httpHeader/index.js";
import defineProperties from "@yarlajs/core/module/standard/defineProperties/index.js";
import generateMethodDescriptor from "@yarlajs/core/module/standard/generateMethodDescriptor/index.js";
import generateClass from "@yarlajs/core/module/standard/generateClass/index.js";
import startsWith from "@yarlajs/core/module/standard/startsWith/index.js";
import Reflect from "@yarlajs/core/lib/Reflect/index.js";
import Promise from "@yarlajs/core/lib/Promise/index.js";
import glob from "@yarlajs/core/lib/glob/index.js";

export default (function () {
    return defineProperties(generateClass(Reflect.BASE, {
        validate: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.koa.VisitValidator}
             * @param {Yarla.koa.Context} context 
             * @returns {Promise<boolean>}
             */
            function (
                context
            ) {
                var ARGCM = context.method;
                var ARGCX = context.getRequestHeader(httpHeader.X_REQUESTED_WITH);
                var ARGCO = complete(context.origin || context.referer);
                var ARGCH = complete(context.host);
                /** @type {Yarla.SameSite | ReadonlyArray<string>} */
                var ARGCS = Reflect.getInternal(this).opts.origin;
                var ACCESS_CONTROL_ALLOW_HEADERS = [
                    httpHeader.ORIGIN,
                    httpHeader.REFERER,
                    httpHeader.AUTHORIZATION,
                    httpHeader.X_REQUESTED_WITH,
                ].join(", ");
                var ACCESS_CONTROL_ALLOW_METHODS = [
                    "GET",
                    "PUT",
                    "POST",
                    "HEAD",
                    "DELETE",
                    "OPTIONS",
                    "PATCH",
                ].join(", ");
                var R = ARGCM === "GET" || ARGCM === "HEAD";
                if (ARGCM === "OPTIONS" || ARGCX === "XMLHttpRequest") {
                    if (ARGCS === "Strict") {
                        if (ARGCH && ARGCO && ARGCH.host === ARGCO.host) {
                            return Promise.resolve(true); // Not Response Headers
                        }
                        return Promise.resolve(false);
                    }
                    if (ARGCS === "Lax") {
                        if (ARGCH && ARGCO && ARGCH.hostname === ARGCO.hostname) {
                            context.setResponseHeader(httpHeader.ACCESS_CONTROL_MAX_AGE, "600");
                            context.setResponseHeader(httpHeader.ACCESS_CONTROL_ALLOW_CREDENTIALS, "true");
                            context.setResponseHeader(httpHeader.ACCESS_CONTROL_ALLOW_HEADERS, ACCESS_CONTROL_ALLOW_HEADERS);
                            context.setResponseHeader(httpHeader.ACCESS_CONTROL_ALLOW_METHODS, ACCESS_CONTROL_ALLOW_METHODS);
                            context.setResponseHeader(httpHeader.ACCESS_CONTROL_ALLOW_ORIGIN, context.origin || "*");
                            return Promise.resolve(true);
                        }
                        return Promise.resolve(false);
                    }
                    if (ARGCS === "None" || ARGCS.includes("*")) {
                        context.setResponseHeader(httpHeader.ACCESS_CONTROL_MAX_AGE, "600");
                        context.setResponseHeader(httpHeader.ACCESS_CONTROL_ALLOW_CREDENTIALS, "true");
                        context.setResponseHeader(httpHeader.ACCESS_CONTROL_ALLOW_HEADERS, ACCESS_CONTROL_ALLOW_HEADERS);
                        context.setResponseHeader(httpHeader.ACCESS_CONTROL_ALLOW_METHODS, ACCESS_CONTROL_ALLOW_METHODS);
                        context.setResponseHeader(httpHeader.ACCESS_CONTROL_ALLOW_ORIGIN, context.origin || "*");
                        return Promise.resolve(true);
                    }
                    if (ARGCO) {
                        for (var
                            i = 0,
                            l = ARGCS.length;
                            i < l;
                            i++
                        ) {
                            if (glob(ARGCS[i]).test(ARGCO.host)) {
                                return Promise.resolve(true);
                            }
                        }
                    }
                    return Promise.resolve(false);
                }
                return Promise.resolve(R);
            }
        ),
    }, NOOP, "VisitValidator"), {
        init: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.Proto<Yarla.koa.VisitValidator>}
             * @param {Yarla.koa.VisitValidatorInitializationOptions} opts 
             */
            function (
                opts
            ) {
                return Reflect.construct(this, {
                    opts: opts,
                });
            }
        ),
    });
    /**
     * 
     * @param {string} host 
     * @returns {URL | null}
     */
    function complete(
        host
    ) {
        return host ? new url.URL(/^\w+:\/\//.test(host) ? host : "yarla:" + (startsWith(host, "//") ? "" : "//") + host) : null;
    }
}());
