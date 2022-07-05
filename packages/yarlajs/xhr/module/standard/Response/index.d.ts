/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

export default _;

declare const _: ResponseConstructor;

declare interface ResponseConstructor extends Yarla.Proto<Yarla.xhr.Response<any>> {
    init<T>(xhr: XMLHttpRequest, baseURI: string, responseType?: Yarla.xhr.ResponseType): Yarla.xhr.Response<T>;
}
