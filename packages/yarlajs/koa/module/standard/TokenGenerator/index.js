import NOOP from "@yarlajs/core/module/constant/NOOP/index.js";
import crypto from "@yarlajs/core/module/internal/crypto/index.js";
import httpHeader from "@yarlajs/core/module/constant/httpHeader/index.js";
import definition from "@yarlajs/core/module/constant/definition/index.js";
import defineProperties from "@yarlajs/core/module/standard/defineProperties/index.js";
import compareTimingSafe from "@yarlajs/core/module/standard/compareTimingSafe/index.js";
import generateMethodDescriptor from "@yarlajs/core/module/standard/generateMethodDescriptor/index.js";
import generateClass from "@yarlajs/core/module/standard/generateClass/index.js";
import startsWith from "@yarlajs/core/module/standard/startsWith/index.js";
import Promise from "@yarlajs/core/lib/Promise/index.js";
import Reflect from "@yarlajs/core/lib/Reflect/index.js";
import salt from "@yarlajs/core/lib/salt/index.js";
import btoa from "@yarlajs/core/lib/btoa/index.js";

export default (function () {
    return defineProperties(generateClass(Reflect.BASE, {
        generate: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.koa.TokenGenerator}
             * @param {Yarla.koa.Context} context 
             * @returns {Promise<string>}
             */
            function (
                context
            ) {
                /** @type {string} */
                var ARGCS = Reflect.getInternal(this).opts.secret;
                var OAUTH = context.getRequestHeader(httpHeader.AUTHORIZATION);
                var TOKEN = startsWith(OAUTH, "Bearer ") ? OAUTH.slice(7) : context.getRequestCookie("X-HTTP-ID");
                if (!validate(TOKEN, ARGCS)) {
                    context.setResponseCookie("X-HTTP-ID", TOKEN = generate(salt(64), ARGCS), { httpOnly: true });
                }
                return Promise.resolve(TOKEN);
            }
        ),
    }, NOOP, "TokenGenerator"), {
        init: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.Proto<Yarla.koa.TokenGenerator>}
             * @param {Yarla.koa.TokenGeneratorInitializationOptions} opts 
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
     * @param {string} argc 
     * @param {string} sect 
     * @returns {boolean}
     */
    function validate(
        argc,
        sect
    ) {
        var loc = argc.lastIndexOf(".");
        if (loc !== -1) {
            return compareTimingSafe(argc, generate(argc.slice(loc + 1), sect));
        }
        return false;
    }
    /**
     * 
     * @param {string} argc 
     * @param {string} sect 
     * @returns {string}
     */
    function generate(
        argc,
        sect
    ) {
        return btoa(crypto.createHash(definition.SHA256).update([sect.slice(8), argc, sect.slice(0, 8)].join("-")).digest(definition.HEX), true) + "." + argc;
    }
}());
