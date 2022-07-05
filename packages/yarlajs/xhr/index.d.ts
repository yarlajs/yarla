/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

export = xhr;

declare const xhr: xhr;

declare interface xhr {
    readonly defaults: Yarla.Writable<xhr.Options>;
    <P = any, R = any>(api: xhr.API): xhr.Request<P, R>;
    get<P = any, R = any>(url: string): xhr.Request<P, R>;
    post<P = any, R = any>(url: string): xhr.Request<P, R>;
    put<P = any, R = any>(url: string): xhr.Request<P, R>;
    delete<P = any, R = any>(url: string): xhr.Request<P, R>;
    patch<P = any, R = any>(url: string): xhr.Request<P, R>;
    resolve(...urls: Array<string | URL>): string;
    import(module: string, esModules?: ReadonlyArray<string>): Promise<any>;
}

declare namespace xhr {
    export interface Request<P = any, R = any> extends Yarla.Cancelable {
        send(data?: P, opts?: Options): Promise<Response<R>>;
    }
    export interface Response<T = any> {
        readonly status: number;
        readonly headers: Yarla.KVPair<string | ReadonlyArray<string>>;
        readonly responseURL: string;
        readonly response: T;
    }
    export interface Options {
        readonly body?: any;
        readonly baseURI?: string;
        readonly timeout?: number;
        readonly headers?: Headers | Yarla.AnyObject<string | ReadonlyArray<string>>;
        readonly username?: string;
        readonly password?: string;
        readonly credentials?: boolean;
        readonly responseType?: ResponseType;
        readonly onStarting?: () => void;
        readonly onProgress?: (progress: Progress) => void;
        readonly onFinished?: () => void;
    }
    export interface Progress {
        readonly lengthComputable: boolean;
        readonly loaded: number;
        readonly total: number;
    }
    export interface API {
        readonly url: string;
        readonly method: string;
    }
    export type ResponseType = Exclude<XMLHttpRequestResponseType, "document">;
}
