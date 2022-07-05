import NOOP from "@yarlajs/core/module/constant/NOOP/index.js";
import setTimeout from "@yarlajs/core/module/internal/setTimeout/index.js";
import clearTimeout from "@yarlajs/core/module/internal/clearTimeout/index.js";
import defineProperties from "@yarlajs/core/module/standard/defineProperties/index.js";
import generateMethodDescriptor from "@yarlajs/core/module/standard/generateMethodDescriptor/index.js";
import generateClass from "@yarlajs/core/module/standard/generateClass/index.js";
import isObject from "@yarlajs/core/lib/isObject/index.js";
import Promise from "@yarlajs/core/lib/Promise/index.js";
import Reflect from "@yarlajs/core/lib/Reflect/index.js";
import keys from "@yarlajs/core/lib/keys/index.js";
import del from "@yarlajs/core/lib/delete/index.js";
import get from "@yarlajs/core/lib/get/index.js";
import set from "@yarlajs/core/lib/set/index.js";
import has from "@yarlajs/core/lib/has/index.js";

export default defineProperties(generateClass(Reflect.BASE, {
    count: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.koa.SessionStorage}
         * @returns {Promise<number>}
         */
        function () {
            return Promise.resolve(keys(Reflect.getInternal(this).data).length);
        }
    ),
    tokens: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.koa.SessionStorage}
         * @returns {Promise<ReadonlyArray<string>>}
         */
        function () {
            return Promise.resolve(keys(Reflect.getInternal(this).data));
        }
    ),
    delete: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.koa.SessionStorage}
         * @param {string} token
         * @returns {Promise<boolean>}
         */
        function (
            token
        ) {
            var o = Reflect.getInternal(this);
            var k = [String(token)];
            var d = o.data;
            var t = o.time;
            var h = get(t, k);
            if (h) {
                clearTimeout(h);
            }
            var x = del(d, k);
            var y = del(t, k);
            return Promise.resolve(x || y);
        }
    ),
    has: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.koa.SessionStorage}
         * @param {string} token 
         * @returns {Promise<boolean>}
         */
        function (
            token
        ) {
            return Promise.resolve(has(Reflect.getInternal(this).data, [String(token)]));
        }
    ),
    get: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.koa.SessionStorage}
         * @param {string} token 
         * @param {string} key
         * @returns {Promise<any>}
         */
        function (
            token,
            key
        ) {
            return Promise.resolve(get(Reflect.getInternal(this).data, [String(token), String(key)]));
        }
    ),
    set: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.koa.SessionStorage}
         * @param {string} token 
         * @param {string} key
         * @param {string} value
         * @returns {Promise<any>}
         */
        function (
            token,
            key,
            value
        ) {
            return Promise.resolve(set(Reflect.getInternal(this).data, [String(token), String(key)], value));
        }
    ),
    heartbeat: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.koa.SessionStorage}
         * @param {string} token 
         * @returns {Promise<void>}
         */
        function (
            token
        ) {
            var o = Reflect.getInternal(this);
            var k = [String(token)];
            var s = o.opts.expire;
            var d = o.data;
            var t = o.time;
            var h = get(t, k);
            if (h) {
                clearTimeout(h);
            }
            if (s > 0) {
                var r = set(t, k, setTimeout(function () {
                    del(d, k);
                    del(t, k);
                }, s * 60 * 1000));
                if (isObject(r)) {
                    r.unref();
                }
            } else {
                del(t, k);
            }
            return Promise.resolve();
        }
    ),
}, NOOP, "SessionStorage"), {
    init: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.Proto<Yarla.koa.SessionStorage>}
         * @param {Yarla.koa.SessionStorageInitializationOptions} opts 
         */
        function (
            opts
        ) {
            return Reflect.construct(this, {
                opts: opts,
                time: {},
                data: {},
            });
        }
    ),
});
