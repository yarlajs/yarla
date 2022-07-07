import NOOP from "../../module/constant/NOOP/index.js";
import hasOwnProperty from "../../module/standard/hasOwnProperty/index.js";
import compareIgnoreCase from "../../module/standard/compareIgnoreCase/index.js";
import generateMethodDescriptor from "../../module/standard/generateMethodDescriptor/index.js";
import generateClass from "../../module/standard/generateClass/index.js";
import isObject from "../isObject/index.js";
import Reflect from "../Reflect/index.js";
import entries from "../entries/index.js";
import values from "../values/index.js";
import keys from "../keys/index.js";

export default generateClass(
    /**
     * 
     * @this {Yarla.KVPair}
     * @param {Readonly<Yarla.AnyObject<T>> | boolean} [source] 
     * @param {boolean} [ignoreCase] 
     * @template T
     */
    function (
        source,
        ignoreCase
    ) {
        Reflect.defineInternal(this, {}, "source");
        if (isObject(source)) {
            Reflect.defineInternal(this, !!ignoreCase, "ignoreCase");
            for (var
                i = 0,
                s = entries(source),
                l = s.length;
                i < l;
                i++
            ) {
                this.set(s[i][0], s[i][1]);
            }
        } else {
            Reflect.defineInternal(this, !!source, "ignoreCase");
        }
    },
    {
        clear: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.KVPair}
             */
            function () {
                Reflect.getInternal(this).source = {};
            }
        ),
        delete: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.KVPair}
             * @param {string} key 
             */
            function (
                key
            ) {
                /**
                 * @type {{ readonly ignoreCase: boolean; readonly source: Yarla.AnyObject; }}
                 */
                var own = Reflect.getInternal(this);
                if (hasOwnProperty(own.source, key)) {
                    return delete own.source[key];
                }
                if (own.ignoreCase) {
                    for (var name in own.source) {
                        if (compareIgnoreCase(name, key)) {
                            return delete own.source[name];
                        }
                    }
                }
                return false;
            }
        ),
        get: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.KVPair}
             * @param {string} key 
             */
            function (
                key
            ) {
                /**
                 * @type {{ readonly ignoreCase: boolean; readonly source: Yarla.AnyObject; }}
                 */
                var own = Reflect.getInternal(this);
                if (hasOwnProperty(own.source, key)) {
                    return own.source[key];
                }
                if (own.ignoreCase) {
                    for (var name in own.source) {
                        if (compareIgnoreCase(name, key)) {
                            return own.source[name];
                        }
                    }
                }
            }
        ),
        set: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.KVPair}
             * @param {string} key 
             * @param {any} value 
             */
            function (
                key,
                value
            ) {
                /**
                 * @type {{ readonly ignoreCase: boolean; readonly source: Yarla.AnyObject; }}
                 */
                var own = Reflect.getInternal(this);
                if (hasOwnProperty(own.source, key)) {
                    return own.source[key] = value, this;
                }
                if (own.ignoreCase) {
                    for (var name in own.source) {
                        if (compareIgnoreCase(name, key)) {
                            return own.source[name] = value, this;
                        }
                    }
                }
                return own.source[key] = value, this;
            }
        ),
        has: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.KVPair}
             * @param {string} key 
             */
            function (
                key
            ) {
                /**
                 * @type {{ readonly ignoreCase: boolean; readonly source: Yarla.AnyObject; }}
                 */
                var own = Reflect.getInternal(this);
                if (hasOwnProperty(own.source, key)) {
                    return true;
                }
                if (own.ignoreCase) {
                    for (var name in own.source) {
                        if (compareIgnoreCase(name, key)) {
                            return true;
                        }
                    }
                }
                return false;
            }
        ),
        keys: generateMethodDescriptor(
            /**
             * @this {Yarla.KVPair}
             */
            function () {
                return keys(Reflect.getInternal(this).source);
            }
        ),
        values: generateMethodDescriptor(
            /**
             * @this {Yarla.KVPair}
             */
            function () {
                return values(Reflect.getInternal(this).source);
            }
        ),
        entries: generateMethodDescriptor(
            /**
             * @this {Yarla.KVPair}
             */
            function () {
                return entries(Reflect.getInternal(this).source);
            }
        ),
        forEach: generateMethodDescriptor(
            /**
             * @this {Yarla.KVPair}
             * @param {(value: any, key: string) => void} callback 
             * @param {any} thisArg 
             */
            function (
                callback,
                thisArg
            ) {
                /**
                 * @type {{ readonly ignoreCase: boolean; readonly source: Yarla.AnyObject; }}
                 */
                var own = Reflect.getInternal(this);
                for (var name in own.source) {
                    callback.call(thisArg || this, own.source[name], name);
                }
            }
        ),
        toJSON: generateMethodDescriptor(
            /**
             * @this {Yarla.KVPair}
             */
            function () {
                return Reflect.getInternal(this).source;
            }
        ),
    },
    NOOP,
    "KVPair"
);
