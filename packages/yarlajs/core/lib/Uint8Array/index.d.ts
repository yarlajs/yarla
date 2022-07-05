/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

export default Uint8Array;

/**
 * In a browser or nodejs that supports this object, return the native object,
 * otherwise return following implementation (IE9).
 * 
 * ```js
 * interface Uint8ArrayConstructor extends Yarla.Proto<Uint8Array> {
 *     new(iterator: ArrayLike<number>): Uint8Array;
 *     new(length: number): Uint8Array;
 *     new(): Uint8Array;
 * }
 * 
 * interface Uint8Array {
 *     readonly length: number;
 *     some(callback: (value: number, index: number, context: Uint8Array) => unknown, context?: any): boolean;
 *     every(callback: (value: number, index: number, context: Uint8Array) => unknown, context?: any): boolean;
 *     filter(callback: (value: number, index: number, context: Uint8Array) => any, context?: any): Uint8Array;
 *     map(callback: (value: number, index: number, context: Uint8Array) => number, context?: any): Uint8Array;
 *     subarray(start?: number, end?: number): Uint8Array;
 *     join(separator?: string): string;
 *     [index: number]: number;
 * }
 * ```
 */
declare const Uint8Array: Uint8ArrayConstructor;
