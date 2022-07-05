/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

/**
 * Add non-existing properties to object from the queues object.
 * 
 * @param argc The target object.
 * @param argv The source objects.
 */
export default function <T, U>(argc: T, ...argv: U[]): T & U;
