/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

/**
 * Add or modify properties from the specified object.
 * 
 * @param arg1 The target object.
 * @param arg2 The source object.
 * @param deep Indicates whether to deeply traverse the object.
 * @param onlyValid Indicates whether to add or modify only valid properties.
 */
export default function <T, U>(arg1: T, arg2: U, deep?: boolean, onlyValid?: boolean): T & U;
