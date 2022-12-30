import NOOP from "@yarlajs/core/module/constant/NOOP/index.js";
import path from "@yarlajs/core/module/internal/path/index.js";
import readline from "@yarlajs/core/module/internal/readline/index.js";
import definition from "@yarlajs/core/module/constant/definition/index.js";
import httpHeader from "@yarlajs/core/module/constant/httpHeader/index.js";
import httpContent from "@yarlajs/core/module/constant/httpContent/index.js";
import defineProperties from "@yarlajs/core/module/standard/defineProperties/index.js";
import generateGetterDescriptor from "@yarlajs/core/module/standard/generateGetterDescriptor/index.js";
import generateMethodDescriptor from "@yarlajs/core/module/standard/generateMethodDescriptor/index.js";
import generateClass from "@yarlajs/core/module/standard/generateClass/index.js";
import separate from "@yarlajs/core/module/standard/separate/index.js";
import HttpError from "@yarlajs/core/lib/HttpError/index.js";
import defaults from "@yarlajs/core/lib/defaults/index.js";
import cookies from "@yarlajs/core/lib/cookies/index.js";
import queries from "@yarlajs/core/lib/queries/index.js";
import Reflect from "@yarlajs/core/lib/Reflect/index.js";
import Promise from "@yarlajs/core/lib/Promise/index.js";
import Buffer from "@yarlajs/core/lib/Buffer/index.js";
import KVPair from "@yarlajs/core/lib/KVPair/index.js";
import read from "@yarlajs/core/lib/read/index.js";

export default (function () {
    return defineProperties(generateClass(Reflect.BASE, {
        IE: generateGetterDescriptor(
            /**
             * 
             * @this {Yarla.koa.Context}
             * @returns {boolean} 
             */
            function () {
                return Reflect.once(this, Reflect.expr.IE, function () {
                    return /\b(?:Trident|MSIE|Edge)\b/i.test(this.UA);
                });
            }
        ),
        IP: generateGetterDescriptor(
            /**
             * 
             * @this {Yarla.koa.Context}
             * @returns {string} 
             */
            function () {
                return Reflect.once(this, Reflect.expr.IP, function () {
                    /** @type {string} */
                    var http;
                    http = this.getRequestHeader(httpHeader.X_REAL_IP)
                        || this.getRequestHeader(httpHeader.X_FORWARDED_FOR)
                        || Reflect.getInternal(this).request.socket.remoteAddress
                        || "";
                    var loc = http.indexOf(",");
                    if (loc !== -1) {
                        http = http.slice(0, loc);
                    }
                    return http;
                });
            }
        ),
        UA: generateGetterDescriptor(
            /**
             * 
             * @this {Yarla.koa.Context} 
             * @returns {string} 
             */
            function () {
                return Reflect.once(this, Reflect.expr.UA, function () {
                    return this.getRequestHeader(httpHeader.USER_AGENT);
                });
            }
        ),
        host: generateGetterDescriptor(
            /**
             * 
             * @this {Yarla.koa.Context} 
             * @returns {string} 
             */
            function () {
                return Reflect.once(this, Reflect.expr.HOST, function () {
                    /** @type {string} */
                    var http;
                    http = this.getRequestHeader(httpHeader.X_REAL_HOST)
                        || this.getRequestHeader(httpHeader.X_FORWARDED_HOST)
                        || this.getRequestHeader(httpHeader.HOST);
                    var loc = http.indexOf(",");
                    if (loc !== -1) {
                        http = http.slice(0, loc);
                    }
                    return http;
                });
            }
        ),
        search: generateGetterDescriptor(
            /**
             * 
             * @this {Yarla.koa.Context} 
             * @returns {any} 
             */
            function () {
                return Reflect.once(this, Reflect.expr.SEARCH, function () {
                    /** @type {import("http").IncomingMessage} */
                    var req = Reflect.getInternal(this).request;
                    var res = req.url || "/";
                    var loc = res.indexOf("?");
                    if (loc !== -1) {
                        res = res.slice(loc);
                    } else {
                        res = "";
                    }
                    return queries.parse(res);
                });
            }
        ),
        method: generateGetterDescriptor(
            /**
             * 
             * @this {Yarla.koa.Context} 
             * @returns {string} 
             */
            function () {
                return Reflect.once(this, Reflect.expr.METHOD, function () {
                    /** @type {import("http").IncomingMessage} */
                    var req = Reflect.getInternal(this).request;
                    var res = req.method || "GET";
                    return res.toUpperCase();
                });
            }
        ),
        length: generateGetterDescriptor(
            /**
             * 
             * @this {Yarla.koa.Context} 
             * @returns {number} 
             */
            function () {
                return Reflect.once(this, Reflect.expr.LENGTH, function () {
                    return parseInt(this.getRequestHeader(httpHeader.CONTENT_LENGTH));
                });
            }
        ),
        origin: generateGetterDescriptor(
            /**
             * 
             * @this {Yarla.koa.Context} 
             * @returns {string} 
             */
            function () {
                return Reflect.once(this, Reflect.expr.ORIGIN, function () {
                    return this.getRequestHeader(httpHeader.ORIGIN);
                });
            }
        ),
        referer: generateGetterDescriptor(
            /**
             * 
             * @this {Yarla.koa.Context} 
             * @returns {string} 
             */
            function () {
                return Reflect.once(this, Reflect.expr.REFERER, function () {
                    return this.getRequestHeader(httpHeader.REFERER);
                });
            }
        ),
        version: generateGetterDescriptor(
            /**
             * 
             * @this {Yarla.koa.Context} 
             * @returns {string} 
             */
            function () {
                return Reflect.once(this, Reflect.expr.VERSION, function () {
                    /** @type {import("http").IncomingMessage} */
                    var req = Reflect.getInternal(this).request;
                    var res = req.httpVersion;
                    return res;
                });
            }
        ),
        protocol: generateGetterDescriptor(
            /**
             * 
             * @this {Yarla.koa.Context} 
             * @returns {string} 
             */
            function () {
                return Reflect.once(this, Reflect.expr.PROTOCOL, function () {
                    /** @type {string} */
                    var http;
                    http = this.getRequestHeader(httpHeader.X_REAL_PROTO)
                        || this.getRequestHeader(httpHeader.X_FORWARDED_PROTO)
                        || (Reflect.getInternal(this).request.socket.encrypted ? definition.HTTPS : definition.HTTP);
                    var loc = http.indexOf(",");
                    if (loc !== -1) {
                        http = http.slice(0, loc);
                    }
                    if (http.toLowerCase().includes("https")) {
                        return definition.HTTPS;
                    }
                    return definition.HTTP;
                });
            }
        ),
        pathname: generateGetterDescriptor(
            /**
             * 
             * @this {Yarla.koa.Context} 
             * @returns {string} 
             */
            function () {
                return Reflect.once(this, Reflect.expr.PATHNAME, function () {
                    /** @type {import("http").IncomingMessage} */
                    var req = Reflect.getInternal(this).request;
                    var res = req.url || "/";
                    var loc = res.indexOf("?");
                    if (loc !== -1) {
                        res = res.slice(0, loc);
                    }
                    return "/" + separate(res).join("/");
                });
            }
        ),
        mimetype: generateGetterDescriptor(
            /**
             * 
             * @this {Yarla.koa.Context} 
             * @returns {string} 
             */
            function () {
                return Reflect.once(this, Reflect.expr.MIMETYPE, function () {
                    return solveSemicolon(this.getRequestHeader(httpHeader.CONTENT_TYPE));
                });
            }
        ),
        boundary: generateGetterDescriptor(
            /**
             * 
             * @this {Yarla.koa.Context} 
             * @returns {string} 
             */
            function () {
                return Reflect.once(this, Reflect.expr.BOUNDARY, function () {
                    return solveDelimiter(this.getRequestHeader(httpHeader.CONTENT_TYPE));
                });
            }
        ),
        encoding: generateGetterDescriptor(
            /**
             * 
             * @this {Yarla.koa.Context} 
             * @returns {ReadonlyArray<string>} 
             */
            function () {
                return Reflect.once(this, Reflect.expr.ENCODING, function () {
                    return this.getRequestHeader(httpHeader.ACCEPT_ENCODING).split(",").map(solveSemicolon);
                });
            }
        ),
        language: generateGetterDescriptor(
            /**
             * 
             * @this {Yarla.koa.Context} 
             * @returns {ReadonlyArray<string>} 
             */
            function () {
                return Reflect.once(this, Reflect.expr.LANGUAGE, function () {
                    return this.getRequestHeader(httpHeader.ACCEPT_LANGUAGE).split(",").map(solveSemicolon);
                });
            }
        ),
        range: generateGetterDescriptor(
            /**
             * 
             * @this {Yarla.koa.Context} 
             * @returns {ReadonlyArray<number>} 
             */
            function () {
                return Reflect.once(this, Reflect.expr.RANGE, function () {
                    return this.getRequestHeader(httpHeader.RANGE).split(/bytes=([0-9]*)-([0-9]*)/i).slice(1, 3).map(function (i) { return parseInt(i); });
                });
            }
        ),
        getRequestCookie: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.koa.Context} 
             * @param {string} name 
             */
            function (
                name
            ) {
                return String(Reflect.once(this, Reflect.expr.COOKIES, function () {
                    return new KVPair(cookies.parse(this.getRequestHeader(httpHeader.COOKIE)), true);
                }).get(name) || "");
            }
        ),
        getRequestHeader: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.koa.Context} 
             * @param {string} name 
             */
            function (
                name
            ) {
                return String(Reflect.once(this, Reflect.expr.HEADERS, function () {
                    return new KVPair(Reflect.getInternal(this).request.headers, true);
                }).get(name) || "");
            }
        ),
        setResponseCookie: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.koa.Context} 
             * @param {string} name 
             * @param {string} value 
             * @param {Yarla.CookieSerializationOptions} [opts] 
             */
            function (
                name,
                value,
                opts
            ) {
                Reflect.getInternal(this).cookies.set(name, cookies.serialize(name, value, defaults({ path: "/", UA: this.UA, protocol: this.protocol, sameSite: Reflect.getInternal(this).opts.accessCookieAllowOrigin || "Lax" }, opts)));
            }
        ),
        setResponseHeader: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.koa.Context} 
             * @param {string} name 
             * @param {string | ReadonlyArray<string>} value 
             */
            function (
                name,
                value
            ) {
                Reflect.getInternal(this).headers.set(name, value);
            }
        ),
        deleteResponseCookie: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.koa.Context} 
             * @param {string} name 
             */
            function (
                name
            ) {
                return Reflect.getInternal(this).cookies.delete(name);
            }
        ),
        deleteResponseHeader: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.koa.Context} 
             * @param {string} name 
             */
            function (
                name
            ) {
                return Reflect.getInternal(this).headers.delete(name);
            }
        ),
        stream: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.koa.Context} 
             * @returns {NodeJS.ReadableStream}
             */
            function () {
                return Reflect.getInternal(this).request;
            }
        ),
        readline: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.koa.Context}
             * @returns {AsyncIterable<string>}
             */
            function () {
                return readline.createInterface({ input: Reflect.getInternal(this).request, crlfDelay: Infinity });
            }
        ),
        read: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.koa.Context}
             * @param {boolean} [original]
             * @returns {Promise<any>}
             */
            function (original) {
                var length = this.length;
                var boundary = this.boundary;
                var mimetype = this.mimetype;
                return Reflect.once(this, Reflect.expr.BODY, function () {
                    return (
                        /**
                         * 
                         * @param {object} context 
                         * @param {object} context.opts
                         * @param {number} context.opts.maxRequestContentLength
                         * @param {import("http").IncomingMessage} context.request
                         * @returns {Promise<Buffer>}
                         */
                        function (context) {
                            var maximum = context.opts.maxRequestContentLength;
                            if (maximum < length) {
                                return Promise.reject(new HttpError(413));
                            }
                            return read(context.request, maximum);
                        }(Reflect.getInternal(this))
                    );
                }).then(function (res) {
                    if (original) {
                        return res;
                    }
                    if (mimetype === httpContent.FORM) {
                        return queries.parse(res.toString(definition.UTF8).trim());
                    }
                    if (mimetype === httpContent.JSON) {
                        return JSON.parse(res.toString(definition.UTF8).trim() || "{}");
                    }
                    if (mimetype !== httpContent.MULT) {
                        throw new HttpError(415);
                    }
                    if (!boundary) {
                        throw new HttpError(400);
                    }
                    var sep = Buffer.from("--" + boundary, definition.UTF8);
                    var end = Buffer.from("\r\n\r\n", definition.UTF8);
                    var ln1 = res.length;
                    var ln2 = sep.length;
                    if (ln1 <= ln2 + 4) {
                        throw new HttpError(400);
                    }
                    var i = 0;
                    var j = 0;
                    var k = res.indexOf(sep);
                    if (k === -1) {
                        throw new HttpError(400);
                    }
                    var r = {};
                    while (true) {
                        i = k + ln2 + 2;
                        j = res.indexOf(end, i);
                        if (j === -1) { break; }
                        k = res.indexOf(sep, j + 4);
                        if (k === -1) { break; }
                        var m = solveMultipart(res.subarray(i, j).toString(definition.UTF8));
                        var n = m.formname;
                        var f = m.filename;
                        var e = m.encoding;
                        if (n) {
                            var d = res.subarray(j + 4, k - 2);
                            if (e === definition.BASE64) {
                                d = Buffer.from(d.toString(definition.ASCII), definition.BASE64);
                            }
                            if (f) {
                                r[n] = {
                                    buffer: d,
                                    filename: f ? path.basename(f) : f,
                                    encoding: e,
                                };
                            } else {
                                r[n] = d.toString(definition.UTF8);
                            }
                        }
                    }
                    return r;
                });
            }
        ),
    }, NOOP, "Context"), {
        init: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.Proto<Yarla.koa.Context>}
             * @param {import("http").IncomingMessage} request 
             * @param {object} opts 
             * @param {Yarla.SameSite} [opts.accessCookieAllowOrigin] 
             * @param {number} [opts.maxRequestContentLength] 
             */
            function (
                request,
                opts
            ) {
                return Reflect.construct(this, {
                    cookies: new KVPair(true),
                    headers: new KVPair(true),
                    request: request,
                    opts: opts,
                });
            }
        ),
    });
    /**
     * 
     * @param {string} argc 
     */
    function solveDelimiter(
        argc
    ) {
        return argc ? (function (argc) { return argc ? argc[1] || argc[2] || argc[3] : ""; }(argc.match(/;\s*boundary\s*=\s*(?:"([^"]+)"|'([^']+)'|([^\s;]+))/i))) : "";
    }
    /**
     * 
     * @param {string} argc 
     */
    function solveSemicolon(
        argc
    ) {
        return argc ? (function (argc) { return argc ? argc[1] : ""; }(argc.match(/^\s*([^\s;]+)/))) : "";
    }
    /**
     * 
     * @param {string} argc 
     */
    function solveMultipart(
        argc
    ) {
        var r = {
            /** @type {string | undefined} */
            formname: void 0,
            /** @type {string | undefined} */
            filename: void 0,
            /** @type {string | undefined} */
            encoding: void 0,
        };
        var p = argc.split("\r\n");
        for (var
            i = 0,
            l = p.length;
            i < l;
            i++
        ) {
            var n = p[i];
            var c = n.indexOf(":");
            if (c === -1) { continue; }
            var k = n.slice(0, c).trim().toLowerCase();
            var v = n.slice(c + 1).trim();
            if (k === "content-disposition") {
                var x = v.match(/\bname\s*=\s*(?:"([^"]+)"|'([^']+)'|([^\s;]+))/i);
                var y = v.match(/\bfilename\s*=\s*(?:"([^"]+)"|'([^']+)'|([^\s;]+))/i);
                r.formname = x ? x[1] || x[2] || x[3] : void 0;
                r.filename = y ? y[1] || y[2] || y[3] : void 0;
                continue;
            }
            if (k === "content-transfer-encoding") {
                r.encoding = v.toLowerCase();
                continue;
            }
        }
        return r;
    }
}());
