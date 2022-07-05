import message from "@yarlajs/core/module/constant/message/index.js";
import httpHeader from "@yarlajs/core/module/constant/httpHeader/index.js";
import globalThis from "@yarlajs/core/module/internal/globalThis/index.js";
import setTimeout from "@yarlajs/core/module/internal/setTimeout/index.js";
import clearTimeout from "@yarlajs/core/module/internal/clearTimeout/index.js";
import defineProperties from "@yarlajs/core/module/standard/defineProperties/index.js";
import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";
import generateGetterDescriptor from "@yarlajs/core/module/standard/generateGetterDescriptor/index.js";
import generateMethodDescriptor from "@yarlajs/core/module/standard/generateMethodDescriptor/index.js";
import generateNormalDescriptor from "@yarlajs/core/module/standard/generateNormalDescriptor/index.js";
import generateClass from "@yarlajs/core/module/standard/generateClass/index.js";
import isNullOrUndefined from "@yarlajs/core/lib/isNullOrUndefined/index.js";
import isInstanceOf from "@yarlajs/core/lib/isInstanceOf/index.js";
import HttpError from "@yarlajs/core/lib/HttpError/index.js";
import Reflect from "@yarlajs/core/lib/Reflect/index.js";
import KVPair from "@yarlajs/core/lib/KVPair/index.js";
import btoa from "@yarlajs/core/lib/btoa/index.js";

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
                        Reflect.defineInternal(this, 0, "readyState"),
                        Reflect.defineInternal(this, "", "statusText"),
                        Reflect.defineInternal(this, "", "responseType"),
                        Reflect.defineInternal(this, null, "controller"),
                        Reflect.defineInternal(this, null, "response"),
                        Reflect.defineInternal(this, null, "username"),
                        Reflect.defineInternal(this, null, "password"),
                        Reflect.defineInternal(this, new KVPair(true), "reqHeaders"),
                        Reflect.defineInternal(this, new KVPair(true), "resHeaders"));
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
                    return Reflect.getInternal(this).url || "";
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
                 * @param {any} [reason]
                 */
                function (reason) {
                    var xhr = Reflect.getInternal(this);
                    if (xhr.controller) {
                        xhr.controller.abort(reason);
                        xhr.controller = null;
                    }
                }
            ),
            open: generateMethodDescriptor(
                /**
                 * 
                 * @this {XMLHttpRequest}
                 * @param {string} method 
                 * @param {string | URL} url 
                 * @param {boolean} [async] 
                 * @param {string | null} [username] 
                 * @param {string | null} [password] 
                 */
                function (
                    method,
                    url,
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
                    xhr.url = String(url);
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
                    var xhr = Reflect.getInternal(own);
                    var controller = new AbortController();
                    /** @type {"" | "arraybuffer" | "blob" | "json" | "text"} */
                    var responseType = xhr.responseType;
                    /** @type {Yarla.KVPair} */
                    var reqHeaders = xhr.reqHeaders;
                    /** @type {string | null} */
                    var username = xhr.username;
                    /** @type {string | null} */
                    var password = xhr.password;
                    /** @type {number} */
                    var timeout = xhr.timeout;
                    /** @type {string} */
                    var method = xhr.method;
                    if (isNullOrUndefined(username)) {
                        username = "";
                    }
                    if (isNullOrUndefined(password)) {
                        password = "";
                    }
                    if (username) {
                        reqHeaders.set(httpHeader.AUTHORIZATION, "Basic " + btoa(username + ":" + password));
                    }
                    xhr.controller = controller;
                    xhr.readyState = XMLHttpRequest.LOADING;
                    var process;
                    if (timeout > 0) {
                        process = setTimeout(function () {
                            controller.abort(new HttpError(408));
                        }, timeout);
                    }
                    globalThis.fetch(xhr.url, {
                        signal: controller.signal,
                        headers: reqHeaders.toJSON(),
                        method: method,
                        body: body,
                    }).then(
                        function (response) {
                            if (process) {
                                clearTimeout(process);
                            }
                            xhr.url = response.url;
                            xhr.status = response.status;
                            xhr.statusText = response.statusText;
                            xhr.resHeaders = new KVPair(response.headers);
                            xhr.readyState = XMLHttpRequest.HEADERS_RECEIVED;
                            if (response.ok) {
                                if (responseType === "arraybuffer") {
                                    return response.arrayBuffer();
                                }
                                if (responseType === "blob") {
                                    return response.blob();
                                }
                                if (responseType === "json") {
                                    return response.json();
                                }
                                if (responseType === "text") {
                                    return response.text();
                                }
                                return response.body;
                            }
                            throw new HttpError(response.status, response.statusText);
                        }
                    ).then(
                        function (value) {
                            xhr.response = value;
                            xhr.readyState = XMLHttpRequest.DONE;
                            own.dispatchEvent(new Event("load"));
                        },
                        function (error) {
                            xhr.response = error;
                            xhr.readyState = XMLHttpRequest.DONE;
                            if (isInstanceOf(error, HttpError)) {
                                if (error.status === 408) {
                                    own.dispatchEvent(new Event("timeout"));
                                    return;
                                }
                            }
                            own.dispatchEvent(new Event("error"));
                        }
                    );
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
}(globalThis.XMLHttpRequest));
