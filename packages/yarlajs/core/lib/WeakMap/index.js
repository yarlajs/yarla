import NOOP from "../../module/constant/NOOP/index.js";
import globalThis from "../../module/internal/globalThis/index.js";
import defineProperty from "../../module/standard/defineProperty/index.js";
import hasOwnProperty from "../../module/standard/hasOwnProperty/index.js";
import generateMethodDescriptor from "../../module/standard/generateMethodDescriptor/index.js";
import generateNormalDescriptor from "../../module/standard/generateNormalDescriptor/index.js";
import generateClass from "../../module/standard/generateClass/index.js";
import Symbol from "../../module/standard/Symbol/index.js";

export default (function (WeakMap) {
    return WeakMap = WeakMap || generateClass(
        /**
         * 
         * @this {WeakMap}
         * @param {ReadonlyArray<[object, any]>} [entries]
         */
        function (entries) {
            defineProperty(this, "k", generateNormalDescriptor(Symbol("WeakMap")));
            if (entries) {
                for (var
                    i = 0,
                    l = entries.length;
                    i < l;
                    i++
                ) {
                    this.set(entries[i][0], entries[i][1]);
                }
            }
            return this;
        },
        {
            delete: generateMethodDescriptor(
                /**
                 *
                 * @this {any}
                 * @param {object} key
                 * @returns {boolean}
                 */
                function (key) {
                    return hasOwnProperty(key, this.k) ? delete key[this.k] : false;
                }
            ),
            has: generateMethodDescriptor(
                /**
                 *
                 * @this {any}
                 * @param {object} key
                 * @returns {boolean}
                 */
                function (key) {
                    return hasOwnProperty(key, this.k);
                }
            ),
            get: generateMethodDescriptor(
                /**
                 *
                 * @this {any}
                 * @param {object} key
                 * @returns {any}
                 */
                function (key) {
                    return hasOwnProperty(key, this.k) ? key[this.k] : void 0;
                }
            ),
            set: generateMethodDescriptor(
                /**
                 *
                 * @this {any}
                 * @param {object} key
                 * @param {any} value
                 * @returns {WeakMap}
                 */
                function (key, value) {
                    return defineProperty(key, this.k, generateNormalDescriptor(value)), this;
                }
            ),
        },
        NOOP
    );
}(globalThis.WeakMap));
