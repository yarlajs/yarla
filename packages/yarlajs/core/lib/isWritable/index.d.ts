/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

import stream from "stream";

/**
 * Determines if the input parameter is a stream.Writable.
 * 
 * @param argc Any object.
 */
export default function (argc: any): argc is stream.Writable;
