import NOOP from "../../module/constant/NOOP/index.js";
import message from "../../module/constant/message/index.js";
import definition from "../../module/constant/definition/index.js";
import globalThis from "../../module/internal/globalThis/index.js";
import setImmediate from "../../module/internal/setImmediate/index.js";
import defineProperties from "../../module/standard/defineProperties/index.js";
import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import generateMethodDescriptor from "../../module/standard/generateMethodDescriptor/index.js";
import generateClass from "../../module/standard/generateClass/index.js";
import isInstanceOf from "../isInstanceOf/index.js";
import isFunction from "../isFunction/index.js";
import isObject from "../isObject/index.js";
import Reflect from "../Reflect/index.js";

export default (function (Promise) {
    return Promise = Promise || defineProperties(generateClass(
        /**
         * 
         * @this {any}
         * @param {Yarla.BasicFunc} processor 
         */
        function (processor) {
            Reflect.set(this, Reflect.expr.STATE, definition.PENDING);
            Reflect.set(this, Reflect.expr.VALUE, void 0);
            Reflect.set(this, Reflect.expr.THROW, true);
            Reflect.set(this, Reflect.expr.QUEUE, []);
            try {
                processor(
                    fixed(this, definition.RESOLVED),
                    fixed(this, definition.REJECTED));
            } catch (error) {
                solve(this, definition.REJECTED, error);
            }
            return this;
        },
        {
            finally: generateMethodDescriptor(
                /**
                 * 
                 * @this {PromiseLike<any>}
                 * @param {Yarla.BasicFunc} onfinally 
                 */
                function (onfinally) {
                    return this.then(
                        function (value) { return Promise.resolve(onfinally()).then(function () { return value; }); },
                        function (error) { return Promise.resolve(onfinally()).then(function () { throw error; }); });
                }
            ),
            catch: generateMethodDescriptor(
                /**
                 * 
                 * @this {PromiseLike<any>}
                 * @param {Yarla.BasicFunc} onrejected 
                 */
                function (onrejected) {
                    return this.then(null, onrejected);
                }
            ),
            then: generateMethodDescriptor(
                /**
                 * 
                 * @this {any}
                 * @param {Yarla.BasicFunc} onresolved 
                 * @param {Yarla.BasicFunc} onrejected 
                 */
                function (onresolved, onrejected) {
                    var item = new Promise(NOOP);
                    var done = onresolved || function (value) { return value; };
                    var fail = onrejected || function (error) { throw error; };
                    Reflect.set(this, Reflect.expr.THROW, false);
                    switch (Reflect.get(this, Reflect.expr.STATE)) {
                        case definition.PENDING:
                            Reflect.get(this, Reflect.expr.QUEUE).push(item, done, fail);
                            break;
                        case definition.RESOLVED:
                            track(item, Reflect.get(this, Reflect.expr.VALUE), done);
                            break;
                        case definition.REJECTED:
                            track(item, Reflect.get(this, Reflect.expr.VALUE), fail);
                            break;
                    }
                    return item;
                }
            ),
        },
        NOOP
    ), {
        resolve: generateMethodDescriptor(
            /**
             * 
             * @param {any} value 
             */
            function (value) {
                return new Promise(function (resolve) { resolve(value); });
            }
        ),
        reject: generateMethodDescriptor(
            /**
             * 
             * @param {any} error 
             */
            function (error) {
                return new Promise(function (_, reject) { reject(error); });
            }
        ),
        race: generateMethodDescriptor(
            /**
             * 
             * @param {ReadonlyArray<any>} tasks 
             */
            function (tasks) {
                return new Promise(function (resolve, reject) {
                    if (tasks.length > 0) {
                        tasks.forEach(function (value) {
                            Promise.resolve(value).then(resolve, reject);
                        });
                    } else {
                        resolve(void 0);
                    }
                });
            }
        ),
        all: generateMethodDescriptor(
            /**
             * 
             * @param {ReadonlyArray<any>} tasks 
             */
            function (tasks) {
                return new Promise(function (resolve, reject) {
                    if (tasks.length > 0) {
                        var n = 0;
                        var l = tasks.length;
                        var r = new Array(l);
                        tasks.forEach(function (value, i) {
                            Promise.resolve(value).then(function (value) {
                                r[i] = value;
                                if (++n === l) {
                                    resolve(r);
                                }
                            }, reject);
                        });
                    } else {
                        resolve([]);
                    }
                });
            }
        ),
    });
    /**
     *
     * @param {PromiseLike<any>} target
     * @param {"pending" | "rejected" | "fulfilled"} state
     */
    function fixed(target, state) {
        return skrinkSerializer(function (value) {
            solve(target, state, value);
        });
    }
    /**
     *
     * @param {PromiseLike<any>} target
     * @param {"pending" | "rejected" | "fulfilled"} state
     * @param {any} value
     */
    function solve(target, state, value) {
        if (Reflect.get(target, Reflect.expr.STATE) === definition.PENDING) {
            if (target === value) {
                state = definition.REJECTED;
                value = new Error(message.PROMISE_RESOLVED_WITH_ITSELF);
            } else if (isInstanceOf(value, Promise)) {
                if (Reflect.get(value, Reflect.expr.STATE) === definition.PENDING) {
                    return void value.then(
                        fixed(target, definition.RESOLVED),
                        fixed(target, definition.REJECTED)
                    );
                }
                Reflect.set(value, Reflect.expr.THROW, false);
                state = Reflect.get(value, Reflect.expr.STATE);
                value = Reflect.get(value, Reflect.expr.VALUE);
            } else if (isObject(value) && isFunction(value.then)) {
                if (!(Reflect.has(value, Reflect.expr.STATE)) ||
                    !(Reflect.has(value, Reflect.expr.VALUE)) ||
                    !(Reflect.get(value, Reflect.expr.STATE) !== definition.PENDING)) {
                    return void value.then(
                        fixed(target, definition.RESOLVED),
                        fixed(target, definition.REJECTED)
                    );
                }
                state = Reflect.get(value, Reflect.expr.STATE);
                value = Reflect.get(value, Reflect.expr.VALUE);
            }
            Reflect.set(target, Reflect.expr.STATE, state);
            Reflect.set(target, Reflect.expr.VALUE, value);
            var m = Reflect.get(target, Reflect.expr.QUEUE);
            var l = m.length;
            while (m.length > 0) {
                var item = m.shift();
                var done = m.shift();
                var fail = m.shift();
                switch (state) {
                    case definition.RESOLVED:
                        track(item, value, done);
                        break;
                    case definition.REJECTED:
                        track(item, value, fail);
                        break;
                }
            }
            if (l === 0 && state === definition.REJECTED) {
                setImmediate(function () {
                    if (Reflect.get(target, Reflect.expr.THROW)) {
                        throw Reflect.get(target, Reflect.expr.VALUE);
                    }
                });
            }
        }
    }
    /**
     *
     * @param {PromiseLike<any>} target
     * @param {any} value
     * @param {Yarla.BasicFunc} apply
     */
    function track(target, value, apply) {
        try {
            solve(target, definition.RESOLVED, apply.call(null, value));
        } catch (error) {
            solve(target, definition.REJECTED, error);
        }
    }
}(globalThis.Promise));
