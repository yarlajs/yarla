import NOOP from "@yarlajs/core/module/constant/NOOP/index.js";
import httpHeader from "@yarlajs/core/module/constant/httpHeader/index.js";
import httpContent from "@yarlajs/core/module/constant/httpContent/index.js";
import generateClass from "@yarlajs/core/module/standard/generateClass/index.js";
import defineProperties from "@yarlajs/core/module/standard/defineProperties/index.js";
import generateMethodDescriptor from "@yarlajs/core/module/standard/generateMethodDescriptor/index.js";
import isNullOrEmptyString from "@yarlajs/core/lib/isNullOrEmptyString/index.js";
import isNullOrEmptyArray from "@yarlajs/core/lib/isNullOrEmptyArray/index.js";
import isURLSearchParams from "@yarlajs/core/lib/isURLSearchParams/index.js";
import isArrayBufferView from "@yarlajs/core/lib/isArrayBufferView/index.js";
import isArrayBuffer from "@yarlajs/core/lib/isArrayBuffer/index.js";
import isInstanceOf from "@yarlajs/core/lib/isInstanceOf/index.js";
import isFormData from "@yarlajs/core/lib/isFormData/index.js";
import isFunction from "@yarlajs/core/lib/isFunction/index.js";
import isBoolean from "@yarlajs/core/lib/isBoolean/index.js";
import concatUrl from "@yarlajs/core/lib/concatUrl/index.js";
import defaults from "@yarlajs/core/lib/defaults/index.js";
import isNumber from "@yarlajs/core/lib/isNumber/index.js";
import isString from "@yarlajs/core/lib/isString/index.js";
import Promise from "@yarlajs/core/lib/Promise/index.js";
import Reflect from "@yarlajs/core/lib/Reflect/index.js";
import queries from "@yarlajs/core/lib/queries/index.js";
import isBasic from "@yarlajs/core/lib/isBasic/index.js";
import isBlob from "@yarlajs/core/lib/isBlob/index.js";
import KVPair from "@yarlajs/core/lib/KVPair/index.js";
import XMLHttpRequest from "../XMLHttpRequest/index.js";
import ResponseError from "../ResponseError/index.js";
import Response from "../Response/index.js";
import env from "../../constant/env/index.js";

export default defineProperties(generateClass(Reflect.BASE, {
    cancel: generateMethodDescriptor(
        /**
         * @this {Yarla.xhr.Request}
         */
        function () {
            var own = Reflect.getInternal(this);
            if (own.xhr) {
                own.xhr.abort();
                own.xhr = null;
            }
        }
    ),
    send: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.xhr.Request}
         * @param {any} data 
         * @param {Yarla.xhr.Options} [opts] 
         */
        function (
            data,
            opts
        ) {
            var own = Reflect.getInternal(this);
            /** @type {XMLHttpRequest} */
            var xhr = own.xhr;
            /** @type {Yarla.xhr.API} */
            var api = own.api;
            var url = api.url;
            var mod = api.method;
            return (function (
                /**
                 * @type {Yarla.xhr.Options}
                 */
                opts
            ) {
                return (function (
                    BODY,
                    BASEURI,
                    TIMEOUT,
                    HEADERS,
                    USERNAME,
                    PASSWORD,
                    CREDENTIALS,
                    RESPONSE_TYPE,
                    ON_STARTING,
                    ON_PROGRESS,
                    ON_FINISHED
                ) {
                    var SEP, RES, TYPE;
                    return new Promise(function (resolve, reject) {
                        if (xhr) {
                            xhr.abort();
                        }
                        if (mod === "GET" ||
                            mod === "HEAD" ||
                            mod === "DELETE" ||
                            mod === "OPTIONS") {
                            SEP = url.indexOf("?") === -1 ? "&" : "?";
                            RES = queries.serialize(data);
                            if (RES) {
                                url += SEP + RES;
                            }
                            data = null;
                        }
                        url = concatUrl(env.BASE_URI, BASEURI || "", url);
                        if (isSerializable(data)) {
                            data = JSON.stringify(data);
                            TYPE = httpContent.JSON;
                        }
                        xhr = own.xhr = new XMLHttpRequest();
                        xhr.open(mod, url, true, USERNAME, PASSWORD);
                        xhr.addEventListener("load", function () {
                            var status = xhr.status || 200;
                            if (status < 200 || status >= 300) {
                                reject(serializeError(url, xhr, HEADERS || {}, RESPONSE_TYPE || "", data));
                            } else {
                                resolve(Response.init(xhr, url, RESPONSE_TYPE));
                            }
                            if (isFunction(ON_FINISHED)) {
                                ON_FINISHED.call(xhr);
                            }
                        });
                        xhr.addEventListener("abort", function () {
                            reject(serializeError(url, xhr, HEADERS || {}, RESPONSE_TYPE || "", data));
                            if (isFunction(ON_FINISHED)) {
                                ON_FINISHED.call(xhr);
                            }
                        });
                        xhr.addEventListener("error", function () {
                            reject(serializeError(url, xhr, HEADERS || {}, RESPONSE_TYPE || "", data));
                            if (isFunction(ON_FINISHED)) {
                                ON_FINISHED.call(xhr);
                            }
                        });
                        xhr.addEventListener("timeout", function () {
                            reject(serializeError(url, xhr, HEADERS || {}, RESPONSE_TYPE || "", data));
                            if (isFunction(ON_FINISHED)) {
                                ON_FINISHED.call(xhr);
                            }
                        });
                        if (xhr.upload) {
                            xhr.upload.addEventListener("progress", function (event) {
                                if (isFunction(ON_PROGRESS)) {
                                    ON_PROGRESS.call(xhr, {
                                        lengthComputable: event.lengthComputable,
                                        loaded: event.loaded,
                                        total: event.total,
                                    });
                                }
                            });
                        }
                        xhr.setRequestHeader(httpHeader.X_REQUESTED_WITH, "XMLHttpRequest");
                        if (TYPE) {
                            xhr.setRequestHeader(httpHeader.CONTENT_TYPE, TYPE);
                        }
                        if (HEADERS) {
                            if (!isInstanceOf(HEADERS, KVPair)) {
                                HEADERS = new KVPair(HEADERS, true);
                            }
                            HEADERS.forEach(function (value, name) {
                                if (isValidHeaders(value)) {
                                    xhr.setRequestHeader(name, String(value));
                                }
                            });
                        }
                        if (isNumber(TIMEOUT)) {
                            xhr.timeout = TIMEOUT;
                        }
                        if (isString(RESPONSE_TYPE)) {
                            xhr.responseType = RESPONSE_TYPE;
                        }
                        if (isBoolean(CREDENTIALS)) {
                            xhr.withCredentials = CREDENTIALS;
                        }
                        if (isFunction(ON_STARTING)) {
                            ON_STARTING.call(xhr);
                        }
                        xhr.send(data || BODY);
                    });
                }(
                    opts.body,
                    opts.baseURI,
                    opts.timeout,
                    opts.headers,
                    opts.username,
                    opts.password,
                    opts.credentials,
                    opts.responseType,
                    opts.onStarting,
                    opts.onProgress,
                    opts.onFinished
                ));
            }(defaults({}, own.opts, opts)));
            /**
             * 
             * @param {any} argc 
             */
            function isValidHeaders(
                argc
            ) {
                return isNullOrEmptyString(argc)
                    || isNullOrEmptyArray(argc) ? false : true;
            }
            /**
             * 
             * @param {any} argc 
             */
            function isSerializable(
                argc
            ) {
                return isBlob(argc)
                    || isFormData(argc)
                    || isArrayBuffer(argc)
                    || isArrayBufferView(argc)
                    || isURLSearchParams(argc)
                    || isBasic(argc) ? false : true;
            }
            /**
             * 
             * @param {string} url 
             * @param {XMLHttpRequest} xhr 
             * @param {Headers | Yarla.KVPair<string | ReadonlyArray<string>> | Yarla.AnyObject<string | ReadonlyArray<string>>} headers 
             * @param {Yarla.xhr.ResponseType} responseType 
             * @param {any} body 
             */
            function serializeError(
                url,
                xhr,
                headers,
                responseType,
                body
            ) {
                if (isInstanceOf(xhr.response, ResponseError)) {
                    return xhr.response;
                }
                return new ResponseError({
                    url: url,
                    xhr: xhr,
                    body: body,
                    responseType: responseType,
                    response: xhr.response || xhr.responseText || null,
                    headers: isInstanceOf(headers, KVPair) ? headers.toJSON() : new KVPair(headers, true).toJSON(),
                }, xhr.status, isInstanceOf(xhr.response, Error) ? xhr.response.message : xhr.statusText);
            }
        }
    ),
}, NOOP, "Request"), {
    init: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.Proto<Yarla.xhr.Request<P, R>>}
         * @param {Yarla.xhr.API} api 
         * @param {Yarla.xhr.Options} [opts] 
         * @returns {Yarla.xhr.Request<P, R>}
         * @template P, R
         */
        function (
            api,
            opts
        ) {
            return Reflect.construct(this, {
                opts: opts,
                xhr: null,
                api: api,
            });
        }
    ),
});
