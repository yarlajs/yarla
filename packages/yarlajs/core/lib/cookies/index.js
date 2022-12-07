import definition from "../../module/constant/definition/index.js";
import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import isNumber from "../isNumber/index.js";
import isString from "../isString/index.js";
import isDate from "../isDate/index.js";

export default {
    parse: skrinkSerializer(
        /**
         * 
         * @param {string} argc 
         * @returns {any}
         */
        function (
            argc
        ) {
            var r = {};
            for (var
                i = 0,
                s = argc.split(/;\s*/),
                l = s.length;
                i < l;
                i++
            ) {
                var n = s[i];
                var d = n.indexOf("=");
                if (d === -1) {
                    continue;
                }
                var k = n.slice(0, d).trim();
                var v = n.slice(d + 1).trim();
                var j = v.length - 1;
                if (v.charAt(0) === "\"" &&
                    v.charAt(j) === "\"") {
                    v = v.slice(1, -1);
                }
                r[
                    k
                ] = v;
            }
            return r;
        }
    ),
    serialize: skrinkSerializer(
        /**
         * 
         * @param {string} name 
         * @param {string} value 
         * @param {Yarla.CookieSerializationOptions} [opts] 
         * @returns {string}
         */
        function (
            name,
            value,
            opts
        ) {
            return (function (
                UA,
                PROTOCOL,
                PATH,
                DOMAIN,
                MAXAGE,
                EXPIRES,
                SAMESITE,
                HTTPONLY,
                SECURE
            ) {
                var k = String(name);
                var v = String(value);
                if (SAMESITE === "None" && isString(UA)) {
                    if (
                        (
                            UA.indexOf("CPU iPhone OS 12") !== -1 ||
                            UA.indexOf("iPad; CPU OS 12") !== -1
                        ) || (
                            UA.indexOf("Macintosh; Intel Mac OS X 10_14") !== -1 &&
                            UA.indexOf("Version/") !== -1 &&
                            UA.indexOf("Safari") !== -1
                        ) || (
                            UA.indexOf("Chrome/5") !== -1 ||
                            UA.indexOf("Chrome/6") !== -1
                        )
                    ) {
                        SAMESITE = void 0;
                    }
                }
                if (SAMESITE === "None" && isString(PROTOCOL)) {
                    if (PROTOCOL === definition.HTTP) {
                        SAMESITE = void 0;
                    }
                }
                if (isString(PATH)) {
                    v += "; Path=" + PATH;
                }
                if (isString(DOMAIN)) {
                    v += "; Domain=" + DOMAIN;
                }
                if (isNumber(MAXAGE)) {
                    v += "; Max-Age=" + MAXAGE;
                }
                if (isDate(EXPIRES)) {
                    v += "; Expires=" + EXPIRES.toUTCString();
                }
                if (SAMESITE) {
                    v += "; SameSite=" + SAMESITE;
                }
                if (HTTPONLY) {
                    v += "; HttpOnly";
                }
                if (SAMESITE === "None" || SECURE) {
                    v += "; Secure";
                }
                return k + "=" + v;
            }(
                opts && opts.UA,
                opts && opts.protocol,
                opts && opts.path,
                opts && opts.domain,
                opts && opts.maxAge,
                opts && opts.expires,
                opts && opts.sameSite,
                opts && opts.httpOnly,
                opts && opts.secure
            ));
        }
    ),
};
