import message from "../../module/constant/message/index.js";
import globalThis from "../../module/internal/globalThis/index.js";
import defineProperties from "../../module/standard/defineProperties/index.js";
import generateGetterDescriptor from "../../module/standard/generateGetterDescriptor/index.js";
import generateMethodDescriptor from "../../module/standard/generateMethodDescriptor/index.js";
import generateClass from "../../module/standard/generateClass/index.js";
import decode from "../../module/standard/decode/index.js";
import encode from "../../module/standard/encode/index.js";
import isArrayBuffer from "../isArrayBuffer/index.js";
import isInstanceOf from "../isInstanceOf/index.js";
import isString from "../isString/index.js";
import flat from "../flat/index.js";
import Uint8Array from "../Uint8Array/index.js";
import Reflect from "../Reflect/index.js";

export default (function (Buffer) {
    return Buffer = Buffer || defineProperties(generateClass(Reflect.BASE, {
        buffer: generateGetterDescriptor(
            /**
             * 
             * @this {Buffer}
             */
            function () {
                return Reflect.getInternal(this).buffer;
            }
        ),
        byteOffset: generateGetterDescriptor(
            /**
             * 
             * @this {Buffer}
             */
            function () {
                return Reflect.getInternal(this).byteOffset;
            }
        ),
        byteLength: generateGetterDescriptor(
            /**
             * 
             * @this {Buffer}
             */
            function () {
                return Reflect.getInternal(this).byteLength;
            }
        ),
        length: generateGetterDescriptor(
            /**
             * 
             * @this {Buffer}
             */
            function () {
                return Reflect.getInternal(this).length;
            }
        ),
        some: generateMethodDescriptor(
            /**
             * 
             * @this {Buffer}
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
             * @this {Buffer}
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
             * @this {Buffer}
             * @param {(v: number, i: number) => number} callback 
             * @param {any} [context]
             */
            function (
                callback,
                context
            ) {
                return Buffer.from(Reflect.getInternal(this).filter(callback, context || this));
            }
        ),
        map: generateMethodDescriptor(
            /**
             * 
             * @this {Buffer}
             * @param {(v: number, i: number) => number} callback 
             * @param {any} [context]
             */
            function (
                callback,
                context
            ) {
                return Buffer.from(Reflect.getInternal(this).map(callback, context || this));
            }
        ),
        subarray: generateMethodDescriptor(
            /**
             * 
             * @this {Buffer}
             * @param {number} [start] 
             * @param {number} [end] 
             */
            function (
                start,
                end
            ) {
                return Buffer.from(Reflect.getInternal(this).subarray(start, end));
            }
        ),
        join: generateMethodDescriptor(
            /**
             * 
             * @this {Buffer}
             * @param {string} [separator] 
             */
            function (
                separator
            ) {
                return Reflect.getInternal(this).join(separator);
            }
        ),
        readUInt8: generateMethodDescriptor(
            /**
             * 
             * @this {Buffer}
             * @param {number} [offset] 
             */
            function (
                offset
            ) {
                var sn = offset || 0;
                var mn = this.length;
                if (sn > mn - 1) {
                    throw new Error(message.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                }
                return this[sn];
            }
        ),
        readUInt16BE: generateMethodDescriptor(
            /**
             * 
             * @this {Buffer}
             * @param {number} [offset] 
             */
            function (
                offset
            ) {
                var sn = offset || 0;
                var mn = this.length;
                if (sn > mn - 2) {
                    throw new Error(message.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                }
                var b1 = this[sn + 0] << 0x08;
                var b2 = this[sn + 1] << 0x00;
                return (b1 | b2) >>> 0;
            }
        ),
        readUInt16LE: generateMethodDescriptor(
            /**
             * 
             * @this {Buffer}
             * @param {number} [offset] 
             */
            function (
                offset
            ) {
                var sn = offset || 0;
                var mn = this.length;
                if (sn > mn - 2) {
                    throw new Error(message.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                }
                var b1 = this[sn + 0] << 0x00;
                var b2 = this[sn + 1] << 0x08;
                return (b1 | b2) >>> 0;
            }
        ),
        readUInt32BE: generateMethodDescriptor(
            /**
             * 
             * @this {Buffer}
             * @param {number} [offset] 
             */
            function (
                offset
            ) {
                var sn = offset || 0;
                var mn = this.length;
                if (sn > mn - 4) {
                    throw new Error(message.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                }
                var b1 = this[sn + 0] << 0x18;
                var b2 = this[sn + 1] << 0x10;
                var b3 = this[sn + 2] << 0x08;
                var b4 = this[sn + 3] << 0x00;
                return (b1 | b2 | b3 | b4) >>> 0;
            }
        ),
        readUInt32LE: generateMethodDescriptor(
            /**
             * 
             * @this {Buffer}
             * @param {number} [offset] 
             */
            function (
                offset
            ) {
                var sn = offset || 0;
                var mn = this.length;
                if (sn > mn - 4) {
                    throw new Error(message.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                }
                var b1 = this[sn + 0] << 0x00;
                var b2 = this[sn + 1] << 0x08;
                var b3 = this[sn + 2] << 0x10;
                var b4 = this[sn + 3] << 0x18;
                return (b1 | b2 | b3 | b4) >>> 0;
            }
        ),
        writeUInt8: generateMethodDescriptor(
            /**
             * 
             * @this {Buffer}
             * @param {number} value 
             * @param {number} [offset]
             */
            function (
                value,
                offset
            ) {
                var sn = offset || 0;
                var mn = this.length;
                if (sn > mn - 1) {
                    throw new Error(message.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                }
                this[sn] = value >> 0x00 & 0xFF;
                return sn + 1;
            }
        ),
        writeUInt16BE: generateMethodDescriptor(
            /**
             * 
             * @this {Buffer}
             * @param {number} value 
             * @param {number} [offset]
             */
            function (
                value,
                offset
            ) {
                var sn = offset || 0;
                var mn = this.length;
                if (sn > mn - 2) {
                    throw new Error(message.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                }
                this[sn + 0] = value >> 0x08 & 0xFF;
                this[sn + 1] = value >> 0x00 & 0xFF;
                return sn + 2;
            }
        ),
        writeUInt16LE: generateMethodDescriptor(
            /**
             * 
             * @this {Buffer}
             * @param {number} value 
             * @param {number} [offset]
             */
            function (
                value,
                offset
            ) {
                var sn = offset || 0;
                var mn = this.length;
                if (sn > mn - 2) {
                    throw new Error(message.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                }
                this[sn + 0] = value >> 0x00 & 0xFF;
                this[sn + 1] = value >> 0x08 & 0xFF;
                return sn + 2;
            }
        ),
        writeUInt32BE: generateMethodDescriptor(
            /**
             * 
             * @this {Buffer}
             * @param {number} value 
             * @param {number} [offset]
             */
            function (
                value,
                offset
            ) {
                var sn = offset || 0;
                var mn = this.length;
                if (sn > mn - 4) {
                    throw new Error(message.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                }
                this[sn + 0] = value >> 0x18 & 0xFF;
                this[sn + 1] = value >> 0x10 & 0xFF;
                this[sn + 2] = value >> 0x08 & 0xFF;
                this[sn + 3] = value >> 0x00 & 0xFF;
                return sn + 4;
            }
        ),
        writeUInt32LE: generateMethodDescriptor(
            /**
             * 
             * @this {Buffer}
             * @param {number} value 
             * @param {number} [offset]
             */
            function (
                value,
                offset
            ) {
                var sn = offset || 0;
                var mn = this.length;
                if (sn > mn - 4) {
                    throw new Error(message.OFFSET_IS_OUTSIDE_THE_BOUNDS);
                }
                this[sn + 0] = value >> 0x00 & 0xFF;
                this[sn + 1] = value >> 0x08 & 0xFF;
                this[sn + 2] = value >> 0x10 & 0xFF;
                this[sn + 3] = value >> 0x18 & 0xFF;
                return sn + 4;
            }
        ),
        toString: generateMethodDescriptor(
            /**
             * 
             * @this {ArrayLike<number>}
             * @param {"hex" | "ascii" | "base64" | "latin1" | "utf8"} [encoding] 
             */
            function (
                encoding
            ) {
                return decode(this, encoding);
            }
        ),
        toJSON: generateMethodDescriptor(
            /**
             * 
             * @this {ArrayLike<number>}
             */
            function () {
                return {
                    type: "Buffer",
                    data: flat(this),
                };
            }
        ),
        valueOf: generateMethodDescriptor(
            /**
             * 
             * @this {ArrayLike<number>}
             */
            function () {
                return Reflect.getInternal(this);
            }
        ),
    }, Uint8Array, "Buffer"), {
        alloc: generateMethodDescriptor(
            /**
             * 
             * @param {number} length 
             */
            function (
                length
            ) {
                return Reflect.initTyped(Reflect.construct(Buffer, new Uint8Array(length)));
            }
        ),
        from: generateMethodDescriptor(
            /**
             * 
             * @param {ArrayBufferLike | Uint8Array | ArrayLike<number> | string} sources 
             * @param {any} [byteOffsetEncoding]
             * @param {number} [length]
             */
            function (
                sources,
                byteOffsetEncoding,
                length
            ) {
                var bytes;
                if (isInstanceOf(sources, Uint8Array)) {
                    bytes = sources.slice(0);
                } else if (isArrayBuffer(sources)) {
                    bytes = new Uint8Array(sources, Number(byteOffsetEncoding) || 0, length);
                } else if (isString(sources)) {
                    bytes = new Uint8Array(encode(sources, byteOffsetEncoding));
                } else {
                    bytes = new Uint8Array(sources);
                }
                return Reflect.initTyped(Reflect.construct(Buffer, bytes));
            }
        ),
        concat: generateMethodDescriptor(
            /**
             * 
             * @param {ReadonlyArray<Uint8Array>} sources 
             */
            function (
                sources
            ) {
                var r = [];
                for (var
                    i = 0,
                    l = sources.length;
                    i < l;
                    i++
                ) {
                    var t = sources[i];
                    for (var
                        j = 0,
                        m = t.length;
                        j < m;
                        j++
                    ) {
                        r.push(t[j]);
                    }
                }
                return Buffer.from(r);
            }
        ),
        compare: generateMethodDescriptor(
            /**
             * 
             * @param {ArrayLike<number>} buf1 
             * @param {ArrayLike<number>} buf2 
             */
            function (
                buf1,
                buf2
            ) {
                var m = buf1.length;
                var n = buf2.length;
                var t;
                for (var
                    i = 0,
                    l = Math.min(m, n);
                    i < l;
                    i++
                ) {
                    if (t = buf1[i] - buf2[i]) {
                        return t > 0 ? 1 : -1;
                    }
                }
                if (t = m - n) {
                    return t > 0 ? 1 : -1;
                }
                return 0;
            }
        ),
        isBuffer: generateMethodDescriptor(
            /**
             * 
             * @param {any} argc 
             */
            function (
                argc
            ) {
                return isInstanceOf(argc, Buffer);
            }
        ),
    });
}(globalThis.Buffer));
