/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

/**
 * Returns a new object excluding the specified properties.
 * 
 * @param argc An object.
 * @param argv Properties to exclude.
 */
export default function <T, P extends keyof any>(argc: T, ...argv: P[]): Omit<T, P>;
