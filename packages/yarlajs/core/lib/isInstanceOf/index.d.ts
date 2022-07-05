/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

/**
 * Determines if the input parameter is an instance of the specified class.
 * 
 * @param argc Any object.
 * @param constructor The class.
 */
export default function <T>(argc: any, constructor: Yarla.Proto<T>): argc is T;
