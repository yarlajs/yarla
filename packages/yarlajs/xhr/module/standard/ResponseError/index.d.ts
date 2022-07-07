/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

export default ResponseError;

declare const ResponseError: ResponseErrorConstructor;

declare interface ResponseErrorConstructor extends Yarla.Proto<Yarla.xhr.ResponseError> {
    new(init: ResponseErrorInit, status: number, message?: string): Yarla.xhr.ResponseError;
}

declare interface ResponseErrorInit {
    readonly url: string;
    readonly xhr: XMLHttpRequest;
    readonly headers: Yarla.AnyObject<string | ReadonlyArray<string>>;
    readonly responseType: Yarla.xhr.ResponseType;
    readonly body: any;
}
