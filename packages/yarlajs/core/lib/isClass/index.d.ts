/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

/**
 * Determines if the input parameter is a class.
 * 
 * @param argc Any object.
 */
export default function <T>(argc: any): argc is Yarla.ClassFunc<any[], T>;
