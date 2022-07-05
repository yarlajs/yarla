import NOOP from "@yarlajs/core/module/constant/NOOP/index.js";
import message from "@yarlajs/core/module/constant/message/index.js";
import httpHeader from "@yarlajs/core/module/constant/httpHeader/index.js";
import createInstance from "@yarlajs/core/module/standard/createInstance/index.js";
import hasOwnProperty from "@yarlajs/core/module/standard/hasOwnProperty/index.js";
import defineProperties from "@yarlajs/core/module/standard/defineProperties/index.js";
import generateGetterDescriptor from "@yarlajs/core/module/standard/generateGetterDescriptor/index.js";
import generateMethodDescriptor from "@yarlajs/core/module/standard/generateMethodDescriptor/index.js";
import generateNormalDescriptor from "@yarlajs/core/module/standard/generateNormalDescriptor/index.js";
import generateClass from "@yarlajs/core/module/standard/generateClass/index.js";
import isJsonContent from "@yarlajs/core/lib/isJsonContent/index.js";
import concatUrl from "@yarlajs/core/lib/concatUrl/index.js";
import isArray from "@yarlajs/core/lib/isArray/index.js";
import Reflect from "@yarlajs/core/lib/Reflect/index.js";
import KVPair from "@yarlajs/core/lib/KVPair/index.js";

export default defineProperties(generateClass(Reflect.BASE, {
    status: generateGetterDescriptor(
        /**
         * 
         * @this {Yarla.Response<any>}
         * @returns {number}
         */
        function () {
            throw new Error(message.ILLEGAL_INVOCATION);
        }
    ),
    headers: generateGetterDescriptor(
        /**
         * 
         * @this {Yarla.Response<any>}
         * @returns {Yarla.KVPair<string | ReadonlyArray<string>>}
         */
        function () {
            throw new Error(message.ILLEGAL_INVOCATION);
        }
    ),
    responseURL: generateGetterDescriptor(
        /**
         * 
         * @this {Yarla.Response<any>}
         * @returns {string}
         */
        function () {
            throw new Error(message.ILLEGAL_INVOCATION);
        }
    ),
    response: generateGetterDescriptor(
        /**
         * 
         * @this {Yarla.Response<any>}
         * @returns {any}
         */
        function () {
            throw new Error(message.ILLEGAL_INVOCATION);
        }
    ),
}, NOOP, "Response"), {
    init: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.Proto<Yarla.xhr.Response<T>>}
         * @param {XMLHttpRequest} xhr 
         * @param {string} baseURI 
         * @param {Yarla.xhr.ResponseType} [responseType] 
         * @returns {Yarla.xhr.Response<T>}
         * @template T
         */
        function (
            xhr,
            baseURI,
            responseType
        ) {
            return createInstance(this, {
                status: generateNormalDescriptor(xhr.status, true, true),
                responseURL: generateNormalDescriptor(xhr.responseURL || concatUrl(baseURI, xhr.getResponseHeader(httpHeader.X_RESPONSED_URL) || ""), true, true),
                response: generateNormalDescriptor((function () {
                    try {
                        if ("response" in xhr) {
                            return xhr.response;
                        }
                        if (responseType === "text") {
                            return xhr.responseText;
                        }
                        if (responseType === "json") {
                            return xhr.responseText ? JSON.parse(xhr.responseText) : null;
                        }
                        if (isJsonContent(xhr.getResponseHeader(httpHeader.CONTENT_TYPE))) {
                            return xhr.responseText ? JSON.parse(xhr.responseText) : null;
                        }
                        return xhr.responseText;
                    } catch (_) {
                        return null;
                    }
                }()), true, true),
                headers: generateNormalDescriptor(new KVPair(xhr.getAllResponseHeaders().split(/[\r\n]+/).reduce(function (o, i) {
                    var l = i.indexOf(":");
                    if (l !== -1) {
                        var k = i.slice(0, l).trim().toLowerCase();
                        var v = i.slice(l + 1).trim();
                        if (hasOwnProperty(o, k)) {
                            var n = o[k];
                            if (isArray(n)) {
                                n.push(v);
                            } else {
                                o[k] = [n, v];
                            }
                        } else {
                            o[k] = v;
                        }
                    }
                    return o;
                }, {}), true), true, true),
            });
        }
    ),
});
