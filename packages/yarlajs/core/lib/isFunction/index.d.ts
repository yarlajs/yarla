/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

/**
 * Determines if the input parameter is a function.
 * 
 * @param argc Any object.
 */
export default function (argc: any): argc is (...argv: any[]) => any;
