/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

/**
 * Determines if the input parameter is basic type.
 * 
 * @param argc Any object.
 */
export default function (argc: any): argc is number | string | boolean | bigint | symbol | null | undefined;
