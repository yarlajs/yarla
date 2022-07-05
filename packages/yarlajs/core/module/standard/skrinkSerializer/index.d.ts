/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

/**
 * Hide function internal implementation.
 * 
 * @param constructor The function.
 */
export default function <T extends (...argv: any[]) => any>(constructor: T): T;
