/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

import stream from "stream";

export default function (argc: Buffer | stream.Readable): Promise<string>;
