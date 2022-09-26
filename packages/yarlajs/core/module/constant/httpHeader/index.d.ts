/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

export default _;

declare const _: HTTPHeader;

declare interface HTTPHeader {
    readonly ETAG: "Etag";
    readonly HOST: "Host";
    readonly RANGE: "Range";
    readonly COOKIE: "Cookie";
    readonly ORIGIN: "Origin";
    readonly PRAGMA: "Pragma";
    readonly REFERER: "Referer";
    readonly EXPIRES: "Expires";
    readonly LOCATION: "Location";
    readonly AUTHORIZATION: "Authorization";
    readonly ACCEPT_RANGES: "Accept-Ranges";
    readonly ACCEPT_ENCODING: "Accept-Encoding";
    readonly ACCEPT_LANGUAGE: "Accept-Language";
    readonly ACCESS_CONTROL_ALLOW_CREDENTIALS: "Access-Control-Allow-Credentials";
    readonly ACCESS_CONTROL_ALLOW_HEADERS: "Access-Control-Allow-Headers";
    readonly ACCESS_CONTROL_ALLOW_METHODS: "Access-Control-Allow-Methods";
    readonly ACCESS_CONTROL_ALLOW_ORIGIN: "Access-Control-Allow-Origin";
    readonly ACCESS_CONTROL_MAX_AGE: "Access-Control-Max-Age";
    readonly CONTENT_TRANSFER_ENCODING: "Content-Transfer-Encoding";
    readonly CONTENT_DISPOSITION: "Content-Disposition";
    readonly CONTENT_ENCODING: "Content-Encoding";
    readonly CONTENT_LENGTH: "Content-Length";
    readonly CONTENT_RANGE: "Content-Range";
    readonly CONTENT_TYPE: "Content-Type";
    readonly USER_AGENT: "User-Agent";
    readonly CACHE_CONTROL: "Cache-Control";
    readonly LAST_MODIFIED: "Last-Modified";
    readonly IF_NONE_MATCH: "If-None-Match";
    readonly IF_MODIFIED_SINCE: "If-Modified-Since";
    readonly WWW_AUTHENTICATE: "WWW-Authenticate";
    readonly X_REQUESTED_WITH: "X-Requested-With";
    readonly X_RESPONSED_URL: "X-Responsed-Url";
    readonly X_REAL_IP: "X-Real-IP";
    readonly X_REAL_HOST: "X-Real-Host";
    readonly X_REAL_PROTO: "X-Real-Proto";
    readonly X_FORWARDED_FOR: "X-Forwarded-For";
    readonly X_FORWARDED_HOST: "X-Forwarded-Host";
    readonly X_FORWARDED_PROTO: "X-Forwarded-Proto";
}
