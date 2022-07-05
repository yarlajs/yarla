/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

export default Buffer;

/**
 * In a browser or nodejs that supports this object, return the native object,
 * otherwise return following implementation.
 * 
 * ```js
 * interface BufferConstructor extends Yarla.Proto<Buffer> {
 *     alloc(length: number): Buffer;
 *     from(sources: string, encoding?: Encoding): Buffer;
 *     from(sources: Uint8Array | ArrayLike<number>): Buffer;
 *     from(sources: ArrayBufferLike, byteOffset?: number, length?: number): Buffer;
 *     concat(array: ReadonlyArray<Uint8Array>): Buffer;
 *     compare(buf1: Uint8Array, buf2: Uint8Array): 0 | 1 | -1;
 *     isBuffer(obj: any): obj is Buffer;
 * }
 * 
 * interface Buffer extends Uint8Array {
 *     subarray(start?: number, end?: number): Buffer;
 *     readUInt8(offset?: number): number;
 *     readUInt16BE(offset?: number): number;
 *     readUInt16LE(offset?: number): number;
 *     readUInt32BE(offset?: number): number;
 *     readUInt32LE(offset?: number): number;
 *     writeUInt8(value: number, offset?: number): number;
 *     writeUInt16BE(value: number, offset?: number): number;
 *     writeUInt16LE(value: number, offset?: number): number;
 *     writeUInt32BE(value: number, offset?: number): number;
 *     writeUInt32LE(value: number, offset?: number): number;
 *     toString(encoding?: Encoding): string;
 *     toJSON(): {
 *         readonly type: "Buffer";
 *         readonly data: ReadonlyArray<number>;
 *     };
 *     valueOf(): Uint8Array;
 * }
 * 
 * type Encoding =
 *     | "utf8"
 *     | "ascii"
 *     | "latin1"
 *     | "base64"
 *     | "hex";
 * ```
 */
declare const Buffer: BufferConstructor;
