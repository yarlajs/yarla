/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

export default _;

declare const _: RequestConstructor;

declare interface RequestConstructor extends Yarla.Proto<Yarla.xhr.Request<any, any>> {
    init<P = any, R = any>(api: Yarla.xhr.API, settings?: Yarla.xhr.Options): Yarla.xhr.Request<P, R>;
}
