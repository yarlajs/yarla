import url from "@yarlajs/core/module/internal/url/index.js";
import http from "@yarlajs/core/module/internal/http/index.js";
import https from "@yarlajs/core/module/internal/https/index.js";
import stream from "@yarlajs/core/module/internal/stream/index.js";
import message from "@yarlajs/core/module/constant/message/index.js";
import process from "@yarlajs/core/module/internal/process/index.js";
import globalThis from "@yarlajs/core/module/internal/globalThis/index.js";
import definition from "@yarlajs/core/module/constant/definition/index.js";
import httpHeader from "@yarlajs/core/module/constant/httpHeader/index.js";
import httpContent from "@yarlajs/core/module/constant/httpContent/index.js";
import encodeURIComponent from "@yarlajs/core/module/internal/encodeURIComponent/index.js";
import defineProperties from "@yarlajs/core/module/standard/defineProperties/index.js";
import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";
import generateGetterDescriptor from "@yarlajs/core/module/standard/generateGetterDescriptor/index.js";
import generateMethodDescriptor from "@yarlajs/core/module/standard/generateMethodDescriptor/index.js";
import generateNormalDescriptor from "@yarlajs/core/module/standard/generateNormalDescriptor/index.js";
import generateClass from "@yarlajs/core/module/standard/generateClass/index.js";
import className from "@yarlajs/core/module/standard/className/index.js";
import isNullOrUndefined from "@yarlajs/core/lib/isNullOrUndefined/index.js";
import isURLSearchParams from "@yarlajs/core/lib/isURLSearchParams/index.js";
import ReadableStream from "@yarlajs/core/lib/ReadableStream/index.js";
import isJsonContent from "@yarlajs/core/lib/isJsonContent/index.js";
import isTextContent from "@yarlajs/core/lib/isTextContent/index.js";
import isFormData from "@yarlajs/core/lib/isFormData/index.js";
import Reflect from "@yarlajs/core/lib/Reflect/index.js";
import entries from "@yarlajs/core/lib/entries/index.js";
import isBasic from "@yarlajs/core/lib/isBasic/index.js";
import isBlob from "@yarlajs/core/lib/isBlob/index.js";
import KVPair from "@yarlajs/core/lib/KVPair/index.js";
import salt from "@yarlajs/core/lib/salt/index.js";
import btoa from "@yarlajs/core/lib/btoa/index.js";
import read from "@yarlajs/core/lib/read/index.js";

export default (function (XMLHttpRequest) {
    return XMLHttpRequest = XMLHttpRequest || defineProperties(generateClass(
        /**
         * 
         * @this {XMLHttpRequest}
         */
        function () {
            return (
                /**
                 * 
                 * @this {XMLHttpRequest}
                 */
                function () {
                    return (
                        Reflect.defineInternal(this, 0, "status"),
                        Reflect.defineInternal(this, 0, "timeout"),
                        Reflect.defineInternal(this, null, "req"),
                        Reflect.defineInternal(this, null, "res"),
                        Reflect.defineInternal(this, null, "method"),
                        Reflect.defineInternal(this, null, "username"),
                        Reflect.defineInternal(this, null, "password"),
                        Reflect.defineInternal(this, null, "response"),
                        Reflect.defineInternal(this, "", "statusText"),
                        Reflect.defineInternal(this, "", "responseURL"),
                        Reflect.defineInternal(this, "", "responseType"),
                        Reflect.defineInternal(this, new KVPair(true), "reqHeaders"),
                        Reflect.defineInternal(this, new KVPair(true), "resHeaders"),
                        Reflect.defineInternal(this, XMLHttpRequest.UNSENT, "readyState"));
                }
            ).call(Reflect.callSuper(this));
        },
        {
            timeout: {
                enumerable: true,
                configurable: true,
                get: skrinkSerializer(
                    /**
                     * 
                     * @this {XMLHttpRequest}
                     * @returns {number}
                     */
                    function () {
                        return Reflect.getInternal(this).timeout;
                    }
                ),
                set: skrinkSerializer(
                    /**
                     * 
                     * @this {XMLHttpRequest}
                     * @param {number} value
                     */
                    function (value) {
                        return Reflect.getInternal(this).timeout = value;
                    }
                ),
            },
            responseType: {
                enumerable: true,
                configurable: true,
                get: skrinkSerializer(
                    /**
                     * 
                     * @this {XMLHttpRequest}
                     * @returns {"" | "arraybuffer" | "blob" | "json" | "text"}
                     */
                    function () {
                        return Reflect.getInternal(this).responseType;
                    }
                ),
                set: skrinkSerializer(
                    /**
                     * 
                     * @this {XMLHttpRequest}
                     * @param {"" | "arraybuffer" | "blob" | "json" | "text"} value
                     */
                    function (value) {
                        return Reflect.getInternal(this).responseType = value;
                    }
                ),
            },
            status: generateGetterDescriptor(
                /**
                 * 
                 * @this {XMLHttpRequest}
                 * @returns {number}
                 */
                function () {
                    return Reflect.getInternal(this).status;
                }
            ),
            statusText: generateGetterDescriptor(
                /**
                 * 
                 * @this {XMLHttpRequest}
                 * @returns {string}
                 */
                function () {
                    return Reflect.getInternal(this).statusText;
                }
            ),
            readyState: generateGetterDescriptor(
                /**
                 * 
                 * @this {XMLHttpRequest}
                 * @returns {number}
                 */
                function () {
                    return Reflect.getInternal(this).readyState;
                }
            ),
            response: generateGetterDescriptor(
                /**
                 * 
                 * @this {XMLHttpRequest}
                 * @returns {any}
                 */
                function () {
                    return Reflect.getInternal(this).response;
                }
            ),
            responseURL: generateGetterDescriptor(
                /**
                 * 
                 * @this {XMLHttpRequest}
                 * @returns {string}
                 */
                function () {
                    return Reflect.getInternal(this).responseURL;
                }
            ),
            setRequestHeader: generateMethodDescriptor(
                /**
                 * 
                 * @this {XMLHttpRequest}
                 * @param {string} name 
                 * @param {string} value 
                 */
                function (
                    name,
                    value
                ) {
                    if (this.readyState !== XMLHttpRequest.OPENED) {
                        throw new Error(message.ONLY_BE_CALLED_WHEN_STATE_IS_OPEN);
                    }
                    Reflect.getInternal(this).reqHeaders.set(name, value);
                }
            ),
            getResponseHeader: generateMethodDescriptor(
                /**
                 * 
                 * @this {XMLHttpRequest}
                 * @param {string} name 
                 * @returns {string | null}
                 */
                function (
                    name
                ) {
                    return Reflect.getInternal(this).resHeaders.get(name);
                }
            ),
            getAllResponseHeaders: generateMethodDescriptor(
                /**
                 * 
                 * @this {XMLHttpRequest} 
                 * @returns {string}
                 */
                function () {
                    return Reflect.getInternal(this).resHeaders.entries().map(function (i) { return i[0] + ":" + String(i[1]); }).join("\r\n");
                }
            ),
            abort: generateMethodDescriptor(
                /**
                 * 
                 * @this {XMLHttpRequest} 
                 */
                function () {
                    var own = this;
                    var xhr = Reflect.getInternal(own);
                    if (xhr.req) {
                        xhr.req.destroy();
                        xhr.req = null;
                    }
                    if (xhr.res) {
                        xhr.res.destroy();
                        xhr.res = null;
                    }
                    if (xhr.readyState === XMLHttpRequest.LOADING) {
                        xhr.readyState = XMLHttpRequest.DONE;
                        own.dispatchEvent(new Event("abort"));
                    }
                }
            ),
            open: generateMethodDescriptor(
                /**
                 * 
                 * @this {XMLHttpRequest}
                 * @param {string} method 
                 * @param {string | URL} href 
                 * @param {boolean} [async] 
                 * @param {string | null} [username] 
                 * @param {string | null} [password] 
                 */
                function (
                    method,
                    href,
                    async,
                    username,
                    password
                ) {
                    if (async === false) {
                        throw new Error(message.ONLY_ASYNC_IS_SUPPORTED);
                    }
                    if (this.readyState !== XMLHttpRequest.UNSENT) {
                        throw new Error(message.ONLY_BE_CALLED_WHEN_STATE_IS_UNSENT);
                    }
                    var xhr = Reflect.getInternal(this);
                    xhr.responseURL = new url.URL(href.toString()).href;
                    xhr.readyState = XMLHttpRequest.OPENED;
                    xhr.username = username;
                    xhr.password = password;
                    xhr.method = method;
                }
            ),
            send: generateMethodDescriptor(
                /**
                 * 
                 * @this {XMLHttpRequest} 
                 * @param {any} body
                 */
                function (
                    body
                ) {
                    var own = this;
                    if (own.readyState !== XMLHttpRequest.OPENED) {
                        throw new Error(message.ONLY_BE_CALLED_WHEN_STATE_IS_OPEN);
                    }
                    function finishTimeout() {
                        xhr.response = new Error(message.TIMEOUT);
                        xhr.readyState = XMLHttpRequest.DONE;
                        own.dispatchEvent(new Event("timeout"));
                    }
                    /**
                     * @param {Error} error 
                     */
                    function finishFailure(error) {
                        xhr.response = error;
                        xhr.readyState = XMLHttpRequest.DONE;
                        own.dispatchEvent(new Event("error"));
                    }
                    /**
                     * @param {any} value 
                     */
                    function finishSuccess(value) {
                        xhr.response = value;
                        xhr.readyState = XMLHttpRequest.DONE;
                        own.dispatchEvent(new Event("load"));
                    }
                    /**
                     * 
                     * @param {import("http").IncomingMessage} res 
                     * @param {string} method 
                     * @param {URL} responseURL 
                     * @param {number} counter 
                     */
                    function solveRedirect(
                        res,
                        method,
                        responseURL,
                        counter
                    ) {
                        var statusCode = res.statusCode;
                        if (statusCode === 301 ||
                            statusCode === 302 ||
                            statusCode === 303 ||
                            statusCode === 307 ||
                            statusCode === 308) {
                            solveDispatch(statusCode === 307 || statusCode === 308 ? method : "GET", new url.URL(res.headers.location || "", responseURL), counter + 1);
                        } else {
                            solveResponse(res, responseURL);
                        }
                    }
                    /**
                     * 
                     * @param {import("http").IncomingMessage} res 
                     * @param {URL} responseURL 
                     */
                    function solveResponse(
                        res,
                        responseURL
                    ) {
                        xhr.res = res;
                        xhr.status = res.statusCode || 200;
                        xhr.statusText = res.statusMessage || "OK";
                        xhr.resHeaders = new KVPair(res.headers, true);
                        xhr.responseURL = responseURL.href;
                        /** @type {Yarla.xhr.ResponseType} */
                        var type = xhr.responseType;
                        if (type === "blob") {
                            return void read(res).then(toBlob).then(finishSuccess, finishFailure);
                        }
                        if (type === "arraybuffer") {
                            return void read(res).then(toBlob).then(toArraybuffer).then(finishSuccess, finishFailure);
                        }
                        if (type === "json" || isJsonContent(res.headers["content-type"])) {
                            return void read(res).then(toText).then(toJson).then(finishSuccess, finishFailure);
                        }
                        if (type === "text" || isTextContent(res.headers["content-type"])) {
                            return void read(res).then(toText).then(finishSuccess, finishFailure);
                        }
                        return finishSuccess(ReadableStream.from(res));
                    }
                    /**
                     * 
                     * @param {string} method 
                     * @param {URL} responseURL 
                     * @param {number} counter 
                     */
                    function solveDispatch(
                        method,
                        responseURL,
                        counter
                    ) {
                        if (counter > 10) {
                            finishFailure(new Error(message.REDIRECT_EXCEEDS_MAXIMUM + ": " + 10));
                            return;
                        }
                        var req = null;
                        var ini = {
                            port: responseURL.port,
                            host: responseURL.hostname,
                            path: responseURL.pathname + responseURL.search,
                            rejectUnauthorized: false,
                            headers: headers.toJSON(),
                            timeout: timeout,
                            method: method,
                        };
                        switch (responseURL.protocol) {
                            case definition.HTTP:
                                req = http.request(ini, function (res) {
                                    solveRedirect(res, method, responseURL, counter);
                                });
                                break;
                            case definition.HTTPS:
                                req = https.request(ini, function (res) {
                                    solveRedirect(res, method, responseURL, counter);
                                });
                                break;
                            default:
                                finishFailure(new Error(message.INVALID_PROTOCOL + ": " + responseURL.href));
                                break;
                        }
                        if (req) {
                            req.useChunkedEncodingByDefault = true; //
                            req.once("timeout", finishTimeout);
                            req.once("error", finishFailure);
                            end(req, body, boundary);
                        }
                        xhr.req = req;
                    }
                    var xhr = Reflect.getInternal(own);
                    /** @type {string} */
                    var method = xhr.method || "GET";
                    /** @type {number} */
                    var timeout = xhr.timeout || 1e4;
                    /** @type {string} */
                    var username = xhr.username || "";
                    /** @type {string} */
                    var password = xhr.password || "";
                    /** @type {Yarla.KVPair} */
                    var headers = new KVPair(xhr.reqHeaders, true);
                    /** @type {string} */
                    var boundary = "----YarlaFormBoundary" + salt(16);
                    if (username) {
                        headers.set(httpHeader.AUTHORIZATION, "Basic " + btoa(username + ":" + password));
                    }
                    if (isFormData(body)) {
                        headers.set(httpHeader.CONTENT_TYPE, httpContent.MULT + "; boundary=" + boundary);
                    }
                    if (isURLSearchParams(body)) {
                        headers.set(httpHeader.CONTENT_TYPE, httpContent.FORM);
                    }
                    solveDispatch(method, new url.URL(xhr.responseURL), 0);
                }
            ),
        },
        EventTarget,
        "XMLHttpRequest"
    ), {
        UNSENT: generateNormalDescriptor(0, true, true),
        OPENED: generateNormalDescriptor(1, true, true),
        HEADERS_RECEIVED: generateNormalDescriptor(2, true, true),
        LOADING: generateNormalDescriptor(3, true, true),
        DONE: generateNormalDescriptor(4, true, true),
    });
    /**
     * 
     * @param {Buffer} argc 
     */
    function toBlob(
        argc
    ) {
        return new globalThis.Blob([argc]);
    }
    /**
     * 
     * @param {Buffer} argc 
     */
    function toText(
        argc
    ) {
        return argc.toString(definition.UTF8);
    }
    /**
     * 
     * @param {string} argc 
     */
    function toJson(
        argc
    ) {
        return argc ? JSON.parse(argc) : null;
    }
    /**
     * 
     * @param {Blob} argc 
     */
    function toArraybuffer(
        argc
    ) {
        return argc.arrayBuffer();
    }
    /**
     * 
     * @param {any} argc 
     * @returns {argc is Blob | File}
     */
    function isChunk(
        argc
    ) {
        return isBlob(argc) || className(argc) === "Blob" || className(argc) === "File";
    }
    /**
     * 
     * @param {import("http").ClientRequest} argc 
     * @param {any} body 
     * @param {string} boundary 
     */
    function end(
        argc,
        body,
        boundary
    ) {
        if (isNullOrUndefined(body)) {
            argc.end();
        } else if (isURLSearchParams(body)) {
            argc.end(body.toString());
        } else if (isFormData(body)) {
            serial(argc, serialize(body, boundary));
        } else if (isBasic(body)) {
            argc.end(String(body));
        } else if (isChunk(body)) {
            body.stream().pipe(argc);
        } else {
            argc.end(body);
        }
    }
    /**
     * 
     * @param {FormData} argc 
     * @param {string} boundary 
     */
    function serialize(
        argc,
        boundary
    ) {
        return entries(argc).map(function (value) {
            var name = value[0];
            var data = value[1];
            var head = "Content-Disposition: form-data; name=\"" + encodeURIComponent(name) + "\"";
            if (isChunk(data)) {
                if (data.name) {
                    head += "; filename=\"" + encodeURIComponent(data.name) + "\"";
                }
                if (data.type) {
                    head += "\r\nContent-Type: " + data.type;
                } else {
                    head += "\r\nContent-Type: " + httpContent.OCTET_STREAM;
                }
            }
            return [
                "--" + boundary + "\r\n",
                head + "\r\n\r\n",
                data,
                "\r\n",
            ];
        }).flat().concat(["--" + boundary + "--"]);
    }
    /**
     * 
     * @param {import("http").ClientRequest} argc 
     * @param {FormDataEntryValue[]} body 
     */
    function serial(
        argc,
        body
    ) {
        var item = body.shift();
        if (item) {
            if (isChunk(item)) {
                stream.Readable.from(
                    item.stream()
                ).on("end", function () {
                    process.nextTick(function () {
                        serial(argc, body);
                    });
                }).on("error", function () {
                    argc.end();
                }).pipe(argc, {
                    end: false,
                });
            } else {
                argc.write(item, function (error) {
                    if (error) {
                        argc.end();
                    } else {
                        process.nextTick(function () {
                            serial(argc, body);
                        });
                    }
                });
            }
        } else {
            argc.end();
        }
    }
}(globalThis.XMLHttpRequest));
