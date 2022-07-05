/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

export default _;

declare const _: HTTPContent;

declare interface HTTPContent {
    readonly OCTET_STREAM: "application/octet-stream";
    readonly X_MSDOWNLOAD: "application/x-msdownload";
    readonly FORM: "application/x-www-form-urlencoded";
    readonly JSON: "application/json";
    readonly MULT: "multipart/form-data";
    readonly TEXT: "text/plain";
}
