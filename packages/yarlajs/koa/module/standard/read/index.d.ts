/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

import stream from "stream";

export default function (readable: stream.Readable, maximum?: number): Promise<Buffer>;
