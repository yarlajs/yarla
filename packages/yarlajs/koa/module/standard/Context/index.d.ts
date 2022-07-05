/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

import http from "http";

export default Context;

declare const Context: ContextConstructor;

declare interface ContextConstructor extends Yarla.Proto<Yarla.koa.Context> {
    init(request: http.IncomingMessage, opts: ContextInitializationOptions): Yarla.koa.Context;
}

declare interface ContextInitializationOptions {
    readonly accessCookieAllowOrigin?: Yarla.SameSite;
    readonly maxRequestContentLength?: number;
}
