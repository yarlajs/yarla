/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

export default Promise;

/**
 * In a browser or node that supports this object, return the native object,
 * otherwise return a sample implementation.
 */
declare const Promise: PromiseConstructor;
