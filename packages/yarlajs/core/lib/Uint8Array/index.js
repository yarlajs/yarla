import NOOP from "../../module/constant/NOOP/index.js";
import message from "../../module/constant/message/index.js";
import globalThis from "../../module/internal/globalThis/index.js";
import generateGetterDescriptor from "../../module/standard/generateGetterDescriptor/index.js";
import generateMethodDescriptor from "../../module/standard/generateMethodDescriptor/index.js";
import generateClass from "../../module/standard/generateClass/index.js";
import isArray from "../isArray/index.js";
import Reflect from "../Reflect/index.js";

export default (function (Uint8Array) {
    return Uint8Array = Uint8Array || generateClass(
        /**
         * 
         * @this {Uint8Array}
         * @param {number | number[]} [argc] 
         */
        function (argc) {
            if (isArray(argc)) {
                Reflect.defineInternal(this, Object.seal(Array.apply(null, new Array(argc.length)).map(function (_, i) { return argc[i] & 0xFF; })));
            } else {
                Reflect.defineInternal(this, Object.seal(Array.apply(null, new Array(Math.floor(argc || 0))).map(function () { return 0 & 0xFF; })));
            }
            return Reflect.initTyped(this);
        },
        {
            buffer: generateGetterDescriptor(
                /**
                 * 
                 * @this {Uint8Array}
                 */
                function () {
                    throw new Error(message.NOT_SUPPORTED);
                }
            ),
            byteOffset: generateGetterDescriptor(
                /**
                 * 
                 * @this {Uint8Array}
                 */
                function () {
                    throw new Error(message.NOT_SUPPORTED);
                }
            ),
            byteLength: generateGetterDescriptor(
                /**
                 * 
                 * @this {Uint8Array}
                 */
                function () {
                    throw new Error(message.NOT_SUPPORTED);
                }
            ),
            length: generateGetterDescriptor(
                /**
                 * 
                 * @this {Uint8Array}
                 */
                function () {
                    return Reflect.getInternal(this).length;
                }
            ),
            some: generateMethodDescriptor(
                /**
                 * 
                 * @this {Uint8Array}
                 * @param {(v: number, i: number) => unknown} callback 
                 * @param {any} [context]
                 */
                function (
                    callback,
                    context
                ) {
                    return Reflect.getInternal(this).some(callback, context || this);
                }
            ),
            every: generateMethodDescriptor(
                /**
                 * 
                 * @this {Uint8Array}
                 * @param {(v: number, i: number) => unknown} callback 
                 * @param {any} [context]
                 */
                function (
                    callback,
                    context
                ) {
                    return Reflect.getInternal(this).every(callback, context || this);
                }
            ),
            filter: generateMethodDescriptor(
                /**
                 * 
                 * @this {Uint8Array}
                 * @param {(v: number, i: number) => number} callback 
                 * @param {any} [context]
                 */
                function (
                    callback,
                    context
                ) {
                    return new Uint8Array(Reflect.getInternal(this).filter(callback, context || this));
                }
            ),
            map: generateMethodDescriptor(
                /**
                 * 
                 * @this {Uint8Array}
                 * @param {(v: number, i: number) => number} callback 
                 * @param {any} [context]
                 */
                function (
                    callback,
                    context
                ) {
                    return new Uint8Array(Reflect.getInternal(this).map(callback, context || this));
                }
            ),
            subarray: generateMethodDescriptor(
                /**
                 * 
                 * @this {Uint8Array}
                 * @param {number} [start] 
                 * @param {number} [end] 
                 */
                function (
                    start,
                    end
                ) {
                    return new Uint8Array(Reflect.getInternal(this).slice(start, end));
                }
            ),
            join: generateMethodDescriptor(
                /**
                 * 
                 * @this {Uint8Array}
                 * @param {string} [separator] 
                 */
                function (separator) {
                    return Reflect.getInternal(this).join(separator);
                }
            ),
        },
        NOOP
    );
}(globalThis.Uint8Array));
