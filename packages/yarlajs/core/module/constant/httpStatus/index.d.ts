/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

export default _;

declare const _: HTTPStatus;

declare interface HTTPStatus {
    readonly 100: "Continue";
    readonly 101: "Switching Protocols";
    readonly 102: "Processing";
    readonly 103: "Early Hints";
    readonly 200: "OK";
    readonly 201: "Created";
    readonly 202: "Accepted";
    readonly 203: "Non-Authoritative Information";
    readonly 204: "No Content";
    readonly 205: "Reset Content";
    readonly 206: "Partial Content";
    readonly 207: "Multi-Status";
    readonly 208: "Already Reported";
    readonly 226: "IM Used";
    readonly 300: "Multiple Choices";
    readonly 301: "Moved Permanently";
    readonly 302: "Found";
    readonly 303: "See Other";
    readonly 304: "Not Modified";
    readonly 305: "Use Proxy";
    readonly 307: "Temporary Redirect";
    readonly 308: "Permanent Redirect";
    readonly 400: "Bad Request";
    readonly 401: "Unauthorized";
    readonly 402: "Payment Required";
    readonly 403: "Forbidden";
    readonly 404: "Not Found";
    readonly 405: "Method Not Allowed";
    readonly 406: "Not Acceptable";
    readonly 407: "Proxy Authentication Required";
    readonly 408: "Request Timeout";
    readonly 409: "Conflict";
    readonly 410: "Gone";
    readonly 411: "Length Required";
    readonly 412: "Precondition Failed";
    readonly 413: "Payload Too Large";
    readonly 414: "URI Too Long";
    readonly 415: "Unsupported Media Type";
    readonly 416: "Range Not Satisfiable";
    readonly 417: "Expectation Failed";
    readonly 418: "I'm a Teapot";
    readonly 421: "Misdirected Request";
    readonly 422: "Unprocessable Entity";
    readonly 423: "Locked";
    readonly 424: "Failed Dependency";
    readonly 425: "Too Early";
    readonly 426: "Upgrade Required";
    readonly 428: "Precondition Required";
    readonly 429: "Too Many Requests";
    readonly 431: "Request Header Fields Too Large";
    readonly 451: "Unavailable For Legal Reasons";
    readonly 500: "Internal Server Error";
    readonly 501: "Not Implemented";
    readonly 502: "Bad Gateway";
    readonly 503: "Service Unavailable";
    readonly 504: "Gateway Timeout";
    readonly 505: "HTTP Version Not Supported";
    readonly 506: "Variant Also Negotiates";
    readonly 507: "Insufficient Storage";
    readonly 508: "Loop Detected";
    readonly 509: "Bandwidth Limit Exceeded";
    readonly 510: "Not Extended";
    readonly 511: "Network Authentication Required";
    readonly [status: number]: string | undefined;
    readonly [status: string]: string | undefined;
}
