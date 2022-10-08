import fs from "@yarlajs/core/module/internal/fs/index.js";
import path from "@yarlajs/core/module/internal/path/index.js";
import zlib from "@yarlajs/core/module/internal/zlib/index.js";
import crypto from "@yarlajs/core/module/internal/crypto/index.js";
import stream from "@yarlajs/core/module/internal/stream/index.js";
import process from "@yarlajs/core/module/internal/process/index.js";
import message from "@yarlajs/core/module/constant/message/index.js";
import definition from "@yarlajs/core/module/constant/definition/index.js";
import httpHeader from "@yarlajs/core/module/constant/httpHeader/index.js";
import httpContent from "@yarlajs/core/module/constant/httpContent/index.js";
import encodeURIComponent from "@yarlajs/core/module/internal/encodeURIComponent/index.js";
import separate from "@yarlajs/core/module/standard/separate/index.js";
import defineProperty from "@yarlajs/core/module/standard/defineProperty/index.js";
import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";
import compareIgnoreCase from "@yarlajs/core/module/standard/compareIgnoreCase/index.js";
import generateNormalDescriptor from "@yarlajs/core/module/standard/generateNormalDescriptor/index.js";
import isNullOrUndefined from "@yarlajs/core/lib/isNullOrUndefined/index.js";
import isInstanceOf from "@yarlajs/core/lib/isInstanceOf/index.js";
import isFunction from "@yarlajs/core/lib/isFunction/index.js";
import defaults from "@yarlajs/core/lib/defaults/index.js";
import isString from "@yarlajs/core/lib/isString/index.js";
import isArray from "@yarlajs/core/lib/isArray/index.js";
import Promise from "@yarlajs/core/lib/Promise/index.js";
import Reflect from "@yarlajs/core/lib/Reflect/index.js";
import Buffer from "@yarlajs/core/lib/Buffer/index.js";
import KVPair from "@yarlajs/core/lib/KVPair/index.js";
import values from "@yarlajs/core/lib/values/index.js";
import isNaN from "@yarlajs/core/lib/isNaN/index.js";
import glob from "@yarlajs/core/lib/glob/index.js";
import env from "../../module/constant/env/index.js";
import Session from "../../module/standard/Session/index.js";
import Context from "../../module/standard/Context/index.js";
import HTTP_ASSEMBLY from "../../module/constant/HTTP_ASSEMBLY/index.js";
import HTTP_COMPILER from "../../module/constant/HTTP_COMPILER/index.js";
import HTTP_COMPRESS from "../../module/constant/HTTP_COMPRESS/index.js";
import HTTP_DEBUGGER from "../../module/constant/HTTP_DEBUGGER/index.js";
import HTTP_EXTNAMES from "../../module/constant/HTTP_EXTNAMES/index.js";
import HTTP_MIMETYPE from "../../module/constant/HTTP_MIMETYPE/index.js";
import HTTP_RESOURCE from "../../module/constant/HTTP_RESOURCE/index.js";
import createSessionStorage from "../createSessionStorage/index.js";
import createTokenGenerator from "../createTokenGenerator/index.js";
import createVisitValidator from "../createVisitValidator/index.js";
import UnauthorizedResult from "../UnauthorizedResult/index.js";
import ForbiddenResult from "../ForbiddenResult/index.js";
import NotFoundResult from "../NotFoundResult/index.js";
import RedirectResult from "../RedirectResult/index.js";
import EmptyResult from "../EmptyResult/index.js";
import ResetResult from "../ResetResult/index.js";
import DataResult from "../DataResult/index.js";
import FileResult from "../FileResult/index.js";
import JsonResult from "../JsonResult/index.js";
import NoneResult from "../NoneResult/index.js";
import PureResult from "../PureResult/index.js";
import readFileSync from "../readFileSync/index.js";
import statInfo from "../statInfo/index.js";
import isFile from "../isFile/index.js";
import find from "../find/index.js";

export default (function () {
    var latest = Date.now();
    var expire = 10 * 365 * 24 * 60 * 60 * 1000;
    /** @type {Record<string, { v: Promise<Yarla.koa.Result>; h?: string; }>} */
    var module = {};
    return skrinkSerializer(
        /**
         * 
         * @param {Yarla.koa.Options} [opts] 
         * @returns {import("http").RequestListener}
         */
        function (
            opts
        ) {
            return (function (
                ACTION,
                MODULE,
                PUBLIC,
                accessCookieAllowOrigin,
                maxRequestContentLength,
                sessionStorage,
                tokenGenerator,
                visitValidator,
                compressTypes,
                compressLeast,
                compressLevel,
                customHeaders,
                DEBUGGER,
                MIMETYPE,
                FAVICON,
                SITEMAP,
                ROBOTS
            ) {
                return skrinkSerializer(
                    function (req, res) {
                        return (function (ctx) {
                            var OLDER = ctx.IE;
                            var ARGCR = ctx.range;
                            var ARGCM = ctx.method;
                            var ARGCP = ctx.pathname;
                            var ARGCE = ctx.encoding;
                            var MATCH = ctx.getRequestHeader(httpHeader.IF_NONE_MATCH);
                            var SINCE = ctx.getRequestHeader(httpHeader.IF_MODIFIED_SINCE);
                            var EMPTY = ARGCM === "OPTIONS" || ARGCM === "HEAD";
                            var GZLIB = [];
                            if (ARGCE.includes(definition.BR)) {
                                GZLIB.push(definition.BR, {
                                    params: defineProperty({}, zlib.constants.BROTLI_PARAM_QUALITY, generateNormalDescriptor(compressLevel, true)),
                                });
                            } else if (ARGCE.includes(definition.GZIP)) {
                                GZLIB.push(definition.GZIP, {
                                    level: compressLevel,
                                });
                            } else if (ARGCE.includes(definition.DEFLATE)) {
                                GZLIB.push(definition.DEFLATE, {
                                    level: compressLevel,
                                });
                            }
                            if (ctx.getRequestHeader(httpHeader.X_REQUESTED_WITH) === "XMLHttpRequest") {
                                ctx.setResponseHeader(httpHeader.X_RESPONSED_URL, req.url || "/");
                            }
                            customHeaders.forEach(function (value, name) {
                                ctx.setResponseHeader(name, value);
                            });
                            return visitValidator.validate(ctx).then(function (VISITABLE) {
                                return tokenGenerator.generate(ctx).then(function (TOKEN) {
                                    return sessionStorage.heartbeat(TOKEN).then(function () {
                                        if (VISITABLE) {
                                            for (var
                                                i = 0,
                                                l = ACTION.length;
                                                i < l;
                                                i++
                                            ) {
                                                if (contain(ARGCM, ACTION[i].method) && glob(ACTION[i].path).test(ARGCP)) {
                                                    return ACTION[i].listen(ctx, Session.init(TOKEN, sessionStorage));
                                                }
                                            }
                                            if (ARGCM === "GET" ||
                                                ARGCM === "HEAD" ||
                                                ARGCM === "OPTIONS") {
                                                var pathname;
                                                if (compareIgnoreCase(ARGCP, "/")) {
                                                    pathname = normalize("index.html");
                                                    if (isFile(pathname)) {
                                                        return new RedirectResult("/index.html");
                                                    }
                                                }
                                                if (compareIgnoreCase(ARGCP, "/index.html")) {
                                                    pathname = normalize("index.html");
                                                    if (isFile(pathname)) {
                                                        return new FileResult(pathname);
                                                    }
                                                }
                                                if (compareIgnoreCase(ARGCP, "/favicon.ico")) {
                                                    pathname = normalize(FAVICON);
                                                    if (isFile(pathname)) {
                                                        return new FileResult(pathname);
                                                    }
                                                }
                                                if (compareIgnoreCase(ARGCP, "/sitemap.xml")) {
                                                    pathname = normalize(SITEMAP);
                                                    if (isFile(pathname)) {
                                                        return new FileResult(pathname);
                                                    }
                                                }
                                                if (compareIgnoreCase(ARGCP, "/robots.txt")) {
                                                    pathname = normalize(ROBOTS);
                                                    if (isFile(pathname)) {
                                                        return new FileResult(pathname);
                                                    }
                                                }
                                                for (var
                                                    i = 0,
                                                    l = MODULE.length;
                                                    i < l;
                                                    i++
                                                ) {
                                                    var TRACK = ARGCP;
                                                    var MODED = MODULE[i].dist;
                                                    var MODEI = MODULE[i].ignore;
                                                    var MODES = MODULE[i].static;
                                                    var MODEE = MODULE[i].extnames;
                                                    var MODEC = MODULE[i].compiler;
                                                    var MODER = MODULE[i].resolver;
                                                    if (cognate(TRACK, MODED)) {
                                                        if (isFunction(MODER)) {
                                                            TRACK = MODER.call(MODULE[i], TRACK, ctx);
                                                        }
                                                        if (isFunction(MODEI)) {
                                                            if (MODEI.call(MODULE[i], TRACK, ctx)) {
                                                                return insurance(TRACK);
                                                            }
                                                        }
                                                        pathname = normalize(TRACK);
                                                        var name = find(pathname, MODEE || HTTP_EXTNAMES);
                                                        if (name) {
                                                            if (compareIgnoreCase(pathname, name)) {
                                                                if (isFunction(MODES)) {
                                                                    if (MODES.call(MODULE[i], TRACK, ctx)) {
                                                                        return new FileResult(name);
                                                                    }
                                                                }
                                                                return translate(name, MODEC);
                                                            }
                                                            return new RedirectResult(
                                                                relative(name)
                                                            );
                                                        }
                                                    }
                                                }
                                                for (var
                                                    i = 0,
                                                    l = PUBLIC.length;
                                                    i < l;
                                                    i++
                                                ) {
                                                    if (cognate(ARGCP, PUBLIC[i])) {
                                                        pathname = normalize(ARGCP);
                                                        if (isFile(pathname)) {
                                                            return new FileResult(pathname);
                                                        }
                                                    }
                                                }
                                            }
                                            if (EMPTY) {
                                                return new EmptyResult();
                                            }
                                            return new NotFoundResult();
                                        }
                                        return new ForbiddenResult();
                                    });
                                });
                            }).then(function (result) {
                                var PATH;
                                var NAME;
                                var TYPE;
                                var DATA;
                                var INFO;
                                var SIZE;
                                var DATE;
                                var NEED;
                                var NOCACHE = "no-cache";
                                var CACHING = "max-age=0";
                                serialize(ctx).forEach(
                                    function (val, key) {
                                        if (val && val.length > 0) {
                                            res.setHeader(key, val);
                                        }
                                    }
                                );
                                if (isInstanceOf(result, PureResult)) {
                                    return Promise.resolve(result.invoke(req, res)).then(function () { res.end(); });
                                }
                                if (isInstanceOf(result, UnauthorizedResult)) {
                                    res.statusCode = result.status;
                                    res.setHeader(httpHeader.WWW_AUTHENTICATE, "Basic realm=" + JSON.stringify(result.realm));
                                    res.setHeader(httpHeader.CACHE_CONTROL, NOCACHE);
                                    res.setHeader(httpHeader.PRAGMA, NOCACHE);
                                    res.end();
                                    return;
                                }
                                if (isInstanceOf(result, ForbiddenResult)) {
                                    res.statusCode = result.status;
                                    res.setHeader(httpHeader.CACHE_CONTROL, NOCACHE);
                                    res.setHeader(httpHeader.PRAGMA, NOCACHE);
                                    res.end();
                                    return;
                                }
                                if (isInstanceOf(result, NotFoundResult)) {
                                    res.statusCode = result.status;
                                    res.setHeader(httpHeader.CACHE_CONTROL, NOCACHE);
                                    res.setHeader(httpHeader.PRAGMA, NOCACHE);
                                    res.end();
                                    return;
                                }
                                if (isInstanceOf(result, RedirectResult)) {
                                    res.statusCode = result.status;
                                    res.setHeader(httpHeader.LOCATION, result.location);
                                    res.setHeader(httpHeader.CACHE_CONTROL, NOCACHE);
                                    res.setHeader(httpHeader.PRAGMA, NOCACHE);
                                    res.end();
                                    return;
                                }
                                if (isInstanceOf(result, EmptyResult)) {
                                    res.statusCode = result.status;
                                    res.setHeader(httpHeader.CACHE_CONTROL, NOCACHE);
                                    res.setHeader(httpHeader.PRAGMA, NOCACHE);
                                    res.end();
                                    return;
                                }
                                if (isInstanceOf(result, ResetResult)) {
                                    res.statusCode = result.status;
                                    res.setHeader(httpHeader.CACHE_CONTROL, NOCACHE);
                                    res.setHeader(httpHeader.PRAGMA, NOCACHE);
                                    res.end();
                                    return;
                                }
                                if (isInstanceOf(result, NoneResult)) {
                                    res.statusCode = result.status;
                                    res.setHeader(httpHeader.CACHE_CONTROL, NOCACHE);
                                    res.setHeader(httpHeader.PRAGMA, NOCACHE);
                                    res.end();
                                    return;
                                }
                                if (isInstanceOf(result, JsonResult)) {
                                    TYPE = MIMETYPE.json || HTTP_MIMETYPE.json;
                                    DATA = Buffer.from(JSON.stringify({
                                        message: result.message,
                                        data: result.data,
                                        code: result.code,
                                    }), definition.UTF8);
                                    SIZE = DATA.length;
                                }
                                if (isInstanceOf(result, DataResult)) {
                                    NAME = result.filename;
                                    TYPE = result.mimetype || mimetype(OLDER, NAME);
                                    INFO = result.modified;
                                    DATA = result.data;
                                    if (INFO) {
                                        var NO_MODIFIED = false;
                                        var SINCE_VALUE = INFO.since;
                                        var MATCH_VALUE = INFO.match;
                                        res.setHeader(httpHeader.CACHE_CONTROL, CACHING);
                                        res.setHeader(httpHeader.EXPIRES, new Date((Date.parse(SINCE_VALUE) || latest) + expire).toUTCString());
                                        if (SINCE_VALUE) {
                                            NO_MODIFIED = NO_MODIFIED || SINCE_VALUE === SINCE;
                                            res.setHeader(httpHeader.LAST_MODIFIED, SINCE_VALUE);
                                        }
                                        if (MATCH_VALUE) {
                                            NO_MODIFIED = NO_MODIFIED || MATCH_VALUE === MATCH;
                                            res.setHeader(httpHeader.ETAG, MATCH_VALUE);
                                        }
                                        if (NO_MODIFIED) {
                                            res.statusCode = 304;
                                            res.end();
                                            return;
                                        }
                                    }
                                    if (Buffer.isBuffer(DATA)) {
                                        SIZE = DATA.length;
                                    }
                                    if (SIZE === 0 || EMPTY) {
                                        res.statusCode = EMPTY ? 204 : 200;
                                        res.setHeader(httpHeader.CONTENT_LENGTH, SIZE || 0);
                                        res.end();
                                        return;
                                    }
                                }
                                if (isInstanceOf(result, FileResult)) {
                                    PATH = result.path;
                                    NAME = result.filename;
                                    TYPE = result.mimetype || mimetype(OLDER, NAME || PATH);
                                    INFO = statInfo(PATH);
                                    DATE = INFO.mtime;
                                    SIZE = INFO.size;
                                    if (SIZE === 0 || EMPTY) {
                                        res.statusCode = EMPTY ? 204 : 200;
                                        res.setHeader(httpHeader.ACCEPT_RANGES, "bytes");
                                        res.setHeader(httpHeader.CONTENT_LENGTH, SIZE);
                                        res.end();
                                        return;
                                    }
                                    if (ARGCR.length === 2) {
                                        var TOP_LOC = ARGCR[0];
                                        var END_LOC = ARGCR[1];
                                        if (isNaN(TOP_LOC) &&
                                            isNaN(END_LOC)) {
                                            TOP_LOC = 0;
                                            END_LOC = SIZE - 1;
                                        } else if (isNaN(TOP_LOC)) {
                                            TOP_LOC = SIZE - END_LOC;
                                            END_LOC = SIZE - 1;
                                        } else if (isNaN(END_LOC)) {
                                            END_LOC = SIZE - 1;
                                        }
                                        if ((TOP_LOC >= SIZE) ||
                                            (END_LOC >= SIZE) ||
                                            (TOP_LOC > END_LOC)) {
                                            res.statusCode = 416;
                                            res.setHeader(httpHeader.CONTENT_RANGE, "bytes */" + SIZE);
                                            res.end();
                                            return;
                                        }
                                        END_LOC = Math.min(END_LOC, TOP_LOC + 0xFFFF);
                                        DATA = fs.createReadStream(PATH, {
                                            start: TOP_LOC,
                                            end: END_LOC,
                                        });
                                        res.statusCode = 206;
                                        res.setHeader(httpHeader.ACCEPT_RANGES, "bytes");
                                        res.setHeader(httpHeader.CONTENT_RANGE, "bytes " + TOP_LOC + "-" + END_LOC + "/" + SIZE);
                                    } else {
                                        res.setHeader(httpHeader.CACHE_CONTROL, CACHING);
                                        res.setHeader(httpHeader.LAST_MODIFIED, DATE.toUTCString());
                                        res.setHeader(httpHeader.EXPIRES, new Date(DATE.getTime() + expire).toUTCString());
                                        res.setHeader(httpHeader.ETAG, INFO.hash);
                                        if (INFO.hash === MATCH || DATE.toUTCString() === SINCE) {
                                            res.statusCode = 304;
                                            res.end();
                                            return;
                                        }
                                        DATA = fs.createReadStream(PATH);
                                    }
                                }
                                if (EMPTY) {
                                    if (isInstanceOf(DATA, stream.Readable)) {
                                        DATA.destroy();
                                    }
                                    res.statusCode = EMPTY ? 204 : 200;
                                    res.end();
                                    return;
                                } else {
                                    NEED = compress(TYPE) && (isNullOrUndefined(SIZE) || SIZE >= compressLeast);
                                }
                                if (TYPE) {
                                    res.setHeader(httpHeader.CONTENT_TYPE, TYPE);
                                }
                                if (NAME) {
                                    res.setHeader(httpHeader.CONTENT_TRANSFER_ENCODING, "binary");
                                    res.setHeader(httpHeader.CONTENT_DISPOSITION, [
                                        "attachment",
                                        "filename=" + (OLDER ? encodeURIComponent(NAME) : Buffer.from(NAME, definition.UTF8).toString(definition.LATIN1)),
                                        "filename*=UTF-8''" + encodeURIComponent(NAME),
                                    ].join("; "));
                                }
                                if (Buffer.isBuffer(DATA)) {
                                    if (NEED) {
                                        var k = GZLIB[0];
                                        var v = GZLIB[1];
                                        if (k) {
                                            res.setHeader(httpHeader.CONTENT_ENCODING, k);
                                        }
                                        if (k === definition.BR) {
                                            return new Promise(function (resolve, reject) {
                                                zlib.brotliCompress(DATA, v, function (error, data) {
                                                    if (error) {
                                                        reject(error);
                                                    } else {
                                                        resolve(data);
                                                    }
                                                });
                                            }).then(function (data) {
                                                res.end(data);
                                            });
                                        }
                                        if (k === definition.GZIP) {
                                            return new Promise(function (resolve, reject) {
                                                zlib.gzip(DATA, v, function (error, data) {
                                                    if (error) {
                                                        reject(error);
                                                    } else {
                                                        resolve(data);
                                                    }
                                                });
                                            }).then(function (data) {
                                                res.end(data);
                                            });
                                        }
                                        if (k === definition.DEFLATE) {
                                            return new Promise(function (resolve, reject) {
                                                zlib.deflate(DATA, v, function (error, data) {
                                                    if (error) {
                                                        reject(error);
                                                    } else {
                                                        resolve(data);
                                                    }
                                                });
                                            }).then(function (data) {
                                                res.end(data);
                                            });
                                        }
                                    }
                                    res.end(DATA);
                                    return;
                                }
                                if (isInstanceOf(DATA, stream.Readable)) {
                                    if (NEED) {
                                        var k = GZLIB[0];
                                        var v = GZLIB[1];
                                        if (k) {
                                            res.setHeader(httpHeader.CONTENT_ENCODING, k);
                                        }
                                        if (k === definition.BR) {
                                            DATA.pipe(zlib.createBrotliCompress(v)).pipe(res);
                                            return;
                                        }
                                        if (k === definition.GZIP) {
                                            DATA.pipe(zlib.createGzip(v)).pipe(res);
                                            return;
                                        }
                                        if (k === definition.DEFLATE) {
                                            DATA.pipe(zlib.createDeflate(v)).pipe(res);
                                            return;
                                        }
                                    }
                                    DATA.pipe(res);
                                    return;
                                }
                                throw new Error(message.INVALID_RESULT_DATA);
                            }).then(function () {
                                DEBUGGER(null, {
                                    url: req.url || "/",
                                    method: req.method || "GET",
                                    status: res.statusCode,
                                });
                            }).catch(function (error) {
                                var statusCode = 500;
                                var statusText = "";
                                if (error) {
                                    statusCode = Number(error.status || error.statusCode) || statusCode;
                                    statusText = String(error.stack || error.message || "") || statusText;
                                }
                                try {
                                    res.statusCode = statusCode;
                                    res.setHeader(httpHeader.CONTENT_TYPE, HTTP_MIMETYPE.txt);
                                    if (env.DEVELOPMENT) {
                                        res.end(statusText);
                                    } else {
                                        res.end();
                                    }
                                } catch (_) {
                                    // DO NOTHING
                                }
                                DEBUGGER(error, {
                                    url: req.url || "/",
                                    method: req.method || "GET",
                                    status: res.statusCode,
                                });
                            });
                        }(Context.init(req, {
                            accessCookieAllowOrigin: accessCookieAllowOrigin,
                            maxRequestContentLength: maxRequestContentLength,
                        })));
                    }
                );
                /**
                 * 
                 * @param {string} [mimetype] 
                 */
                function compress(
                    mimetype
                ) {
                    return isString(mimetype) && (compressTypes.includes(mimetype) || HTTP_COMPRESS.includes(mimetype));
                }
                /**
                 * 
                 * @param {boolean} msie 
                 * @param {string} [filename] 
                 */
                function mimetype(
                    msie,
                    filename
                ) {
                    var name, type;
                    if (isString(filename)) {
                        name = path.extname(filename).slice(1).toLowerCase();
                        type = MIMETYPE[name] || HTTP_MIMETYPE[name];
                    }
                    if (msie) {
                        return type || httpContent.X_MSDOWNLOAD;
                    } else {
                        return type || httpContent.OCTET_STREAM;
                    }
                }
                /**
                 * 
                 * @param {string} filename 
                 * @param {Yarla.koa.Compiler} [compiler] 
                 */
                function translate(
                    filename,
                    compiler
                ) {
                    var s = statInfo(filename);
                    if (module[filename] &&
                        module[filename].h === s.hash) {
                        return module[filename].v;
                    }
                    var v = Promise.resolve(
                        filename
                    ).then(
                        function (v) {
                            return readFileSync(v).toString(definition.UTF8);
                        }
                    ).then(
                        function (v) {
                            return isFunction(compiler) ? compiler.call(null, v, filename, skrinkSerializer(HTTP_COMPILER)) : HTTP_COMPILER(v, filename);
                        }
                    ).then(
                        function (v) {
                            return new DataResult(Buffer.from(v, definition.UTF8), void 0, MIMETYPE.js || HTTP_MIMETYPE.js, { match: s.hash, since: s.mtime.toUTCString() });
                        }
                    );
                    module[filename] = {
                        h: s.hash,
                        v: v,
                    };
                    return v;
                }
                /**
                 * 
                 * @param {string} filename 
                 */
                function insurance(
                    filename
                ) {
                    if (module[filename]) {
                        return module[filename].v;
                    }
                    var v = Promise.resolve(
                        Buffer.from("define(function(){console&&console.warn(\"Module \\\"" + filename + "\\\" has been ignored.\");});", definition.UTF8)
                    ).then(
                        function (v) {
                            return new DataResult(v, void 0, MIMETYPE.js || HTTP_MIMETYPE.js, { match: crypto.createHash(definition.MD5).update(v).digest(definition.HEX), since: new Date(latest + expire).toUTCString() });
                        }
                    );
                    module[filename] = {
                        v: v,
                    };
                    return v;
                }
            }(
                opts && opts.action || [],
                opts && opts.module || HTTP_ASSEMBLY,
                opts && opts.public || HTTP_RESOURCE,
                opts && opts.accessCookieAllowOrigin || "Lax",
                opts && opts.maxRequestContentLength || Math.pow(2, 30) * 2,
                opts && opts.sessionStorage || createSessionStorage(),
                opts && opts.tokenGenerator || createTokenGenerator(),
                opts && opts.visitValidator || createVisitValidator(),
                opts && opts.compressTypes || [],
                opts && opts.compressLeast || 1024,
                opts && opts.compressLevel || 5,
                opts && opts.customHeaders || new KVPair(),
                opts && opts.debugger || HTTP_DEBUGGER,
                opts && opts.mimetype || HTTP_MIMETYPE,
                opts && opts.favicon || "favicon.ico",
                opts && opts.sitemap || "sitemap.xml",
                opts && opts.robots || "robots.txt"
            ));
        }
    );
    /**
     * 
     * @param {string} arg1 A string.
     * @param {string | ReadonlyArray<string> | null | undefined} arg2 Restricted range.
     * @returns {boolean}
     */
    function contain(
        arg1,
        arg2
    ) {
        return isArray(arg2) ? arg2.length === 0 || arg2.includes(arg1) : isNullOrUndefined(arg2) || arg1 === arg2;
    }
    /**
     * 
     * @param {string | string[]} arg1 One path.
     * @param {string | string[]} arg2 Two path.
     * @returns {boolean}
     */
    function cognate(
        arg1,
        arg2
    ) {
        var a = isArray(arg1) ? arg1 : separate(arg1);
        var b = isArray(arg2) ? arg2 : separate(arg2);
        return a.length >= b.length && b.every(function (n, i) {
            return compareIgnoreCase(n, a[i]);
        });
    }
    /**
     * 
     * @param {string} argc A path.
     * @returns {string}
     */
    function relative(
        argc
    ) {
        return "/" + path.relative(process.cwd(), argc).replace(/[\\/]+/g, "/");
    }
    /**
     * 
     * @param {string} argc A path.
     * @returns {string}
     */
    function normalize(
        argc
    ) {
        return path.resolve(separate(argc).join(path.sep));
    }
    /**
     * 
     * @param {Yarla.koa.Context} argc A context.
     */
    function serialize(
        argc
    ) {
        var context = Reflect.getInternal(argc);
        /** @type {Yarla.KVPair<string>} */
        var cookies = context.cookies;
        /** @type {Yarla.KVPair<string | ReadonlyArray<string>>} */
        var headers = context.headers;
        return new KVPair(defaults({}, headers.toJSON(), {
            "Set-Cookie": values(cookies.toJSON()),
        }), true);
    }
}());
