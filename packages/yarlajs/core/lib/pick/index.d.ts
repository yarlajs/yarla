/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

/**
 * Returns a new object including the specified properties.
 * 
 * @param argc An object.
 * @param argv Properties to include.
 */
export default function <T, P extends keyof T>(argc: T, ...argv: P[]): Pick<T, P>;
