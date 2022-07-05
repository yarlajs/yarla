/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

/**
 * Determines if the input parameter is null or undefined or an empty object.
 * 
 * @param argc Any object.
 */
export default function (argc: any): argc is null | undefined | Yarla.NilObject;
