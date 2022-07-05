/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

export default _;

declare const _: Definition;

declare interface Definition {
    readonly BR: "br";
    readonly HEX: "hex";
    readonly MD5: "md5";
    readonly GZIP: "gzip";
    readonly UTF8: "utf8";
    readonly ASCII: "ascii";
    readonly BASE64: "base64";
    readonly LATIN1: "latin1";
    readonly SHA256: "sha256",
    readonly DEFLATE: "deflate";
    readonly PENDING: "pending";
    readonly REJECTED: "rejected";
    readonly RESOLVED: "fulfilled";
    readonly DEVELOPMENT: "development";
    readonly HTTPS: "https:";
    readonly HTTP: "http:";
}
