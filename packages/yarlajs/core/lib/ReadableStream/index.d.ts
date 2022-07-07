/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

import web from "stream/web";
import stream from "stream";

export default _;

declare const _: ReadableStreamController;

declare interface ReadableStreamController extends Yarla.Proto<web.ReadableStream<any>> {
    new(underlyingSource: web.UnderlyingByteSource, strategy?: web.QueuingStrategy<Uint8Array>): web.ReadableStream<Uint8Array>;
    new <R = any>(underlyingSource?: web.UnderlyingSource<R>, strategy?: web.QueuingStrategy<R>): web.ReadableStream<R>;
    from(nodeStream: stream.Readable, type: "bytes"): web.ReadableStream<Uint8Array>;
    from<R = any>(nodeStream: stream.Readable): web.ReadableStream<R>;
}
