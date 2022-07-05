/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

/**
 * Determines if the input parameter is a Iterable.
 * 
 * @param argc Any object.
 */
export default function <T = any>(argc: any): argc is Iterable<T>;
