/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

import http from "http";
import stream from "stream";
import _PureResult from "./lib/PureResult/index.js";
import _DataResult from "./lib/DataResult/index.js";
import _FileResult from "./lib/FileResult/index.js";
import _JsonResult from "./lib/JsonResult/index.js";
import _NoneResult from "./lib/NoneResult/index.js";
import _EmptyResult from "./lib/EmptyResult/index.js";
import _ResetResult from "./lib/ResetResult/index.js";
import _RedirectResult from "./lib/RedirectResult/index.js";
import _NotFoundResult from "./lib/NotFoundResult/index.js";
import _ForbiddenResult from "./lib/ForbiddenResult/index.js";
import _UnauthorizedResult from "./lib/UnauthorizedResult/index.js";
import _createSessionStorage from "./lib/createSessionStorage/index.js";
import _createTokenGenerator from "./lib/createTokenGenerator/index.js";
import _createVisitValidator from "./lib/createVisitValidator/index.js";
import _createListener from "./lib/createListener/index.js";
import _createServer from "./lib/createServer/index.js";
import _readFileSync from "./lib/readFileSync/index.js";
import _unlinkSync from "./lib/unlinkSync/index.js";
import _mkdirSync from "./lib/mkdirSync/index.js";
import _statSync from "./lib/statSync/index.js";
import _statInfo from "./lib/statInfo/index.js";
import _readFile from "./lib/readFile/index.js";
import _isDirectory from "./lib/isDirectory/index.js";
import _resolve from "./lib/resolve/index.js";
import _isFile from "./lib/isFile/index.js";
import _exists from "./lib/exists/index.js";
import _hash from "./lib/hash/index.js";
import _find from "./lib/find/index.js";
import _read from "./lib/read/index.js";

export = koa;

declare namespace koa {
    export {
        _PureResult as PureResult,
        _DataResult as DataResult,
        _FileResult as FileResult,
        _JsonResult as JsonResult,
        _NoneResult as NoneResult,
        _EmptyResult as EmptyResult,
        _ResetResult as ResetResult,
        _RedirectResult as RedirectResult,
        _NotFoundResult as NotFoundResult,
        _ForbiddenResult as ForbiddenResult,
        _UnauthorizedResult as UnauthorizedResult,
        _createSessionStorage as createSessionStorage,
        _createTokenGenerator as createTokenGenerator,
        _createVisitValidator as createVisitValidator,
        _createListener as createListener,
        _createServer as createServer,
        _readFileSync as readFileSync,
        _unlinkSync as unlinkSync,
        _mkdirSync as mkdirSync,
        _statSync as statSync,
        _statInfo as statInfo,
        _readFile as readFile,
        _isDirectory as isDirectory,
        _resolve as resolve,
        _isFile as isFile,
        _exists as exists,
        _hash as hash,
        _find as find,
        _read as read,
    }
    export interface PureResult {
        invoke(req: http.IncomingMessage, res: http.ServerResponse): Promise<void>;
    }
    export interface PureResultConstructor extends Yarla.Proto<PureResult> {
        new(processor: (req: http.IncomingMessage, res: http.ServerResponse) => PromiseLike<void>): PureResult;
    }
    export interface DataResult {
        readonly data: Buffer | stream.Readable;
        readonly filename: string | undefined;
        readonly mimetype: string | undefined;
        readonly modified: Modified | undefined;
    }
    export interface DataResultConstructor extends Yarla.Proto<DataResult> {
        new(data: Buffer | stream.Readable, filename?: string, mimetype?: string, modified?: Modified): DataResult;
    }
    export interface FileResult {
        readonly path: string;
        readonly filename: string | undefined;
        readonly mimetype: string | undefined;
    }
    export interface FileResultConstructor extends Yarla.Proto<FileResult> {
        new(path: string, filename?: string, mimetype?: string): FileResult;
    }
    export interface JsonResult {
        readonly data: any;
        readonly code: number | undefined;
        readonly message: string | undefined;
    }
    export interface JsonResultConstructor extends Yarla.Proto<JsonResult> {
        new(data: any, code?: number, message?: string): JsonResult;
    }
    export interface NoneResult {
        readonly status: number;
    }
    export interface NoneResultConstructor extends Yarla.Proto<NoneResult> {
        new(status: number): NoneResult;
    }
    export interface EmptyResult extends NoneResult {
        readonly status: 204;
    }
    export interface EmptyResultConstructor extends Yarla.Proto<EmptyResult> {
        new(): EmptyResult;
    }
    export interface ResetResult extends NoneResult {
        readonly status: 205;
    }
    export interface ResetResultConstructor extends Yarla.Proto<ResetResult> {
        new(): ResetResult;
    }
    export interface RedirectResult extends NoneResult {
        readonly status: 301 | 302 | 303 | 307 | 308;
        readonly location: string;
    }
    export interface RedirectResultConstructor extends Yarla.Proto<RedirectResult> {
        new(location: string, status?: 301 | 302 | 303 | 307 | 308): RedirectResult;
    }
    export interface NotFoundResult extends NoneResult {
        readonly status: 404;
    }
    export interface NotFoundResultConstructor extends Yarla.Proto<NotFoundResult> {
        new(): NotFoundResult;
    }
    export interface ForbiddenResult extends NoneResult {
        readonly status: 404;
    }
    export interface ForbiddenResultConstructor extends Yarla.Proto<ForbiddenResult> {
        new(): ForbiddenResult;
    }
    export interface UnauthorizedResult extends NoneResult {
        readonly status: 401;
        readonly realm: string;
    }
    export interface UnauthorizedResultConstructor extends Yarla.Proto<UnauthorizedResult> {
        new(realm: string): UnauthorizedResult;
    }
    export interface SessionStorage {
        count(): Promise<number>;
        tokens(): Promise<ReadonlyArray<string>>;
        delete(token: string): Promise<boolean>;
        has(token: string): Promise<boolean>;
        get(token: string, key: string): Promise<any>;
        set<T>(token: string, key: string, value: T): Promise<T>;
        heartbeat(token: string): Promise<void>;
    }
    export interface SessionStorageInitializationOptions {
        readonly expires: number;
    }
    export interface TokenGenerator {
        generate(context: Context): Promise<string>;
    }
    export interface TokenGeneratorInitializationOptions {
        readonly secret: string;
    }
    export interface VisitValidator {
        validate(context: Context): Promise<boolean>;
    }
    export interface VisitValidatorInitializationOptions {
        readonly origin: Yarla.SameSite | ReadonlyArray<string>;
    }
    export interface Action {
        readonly path: string;
        readonly method?: string | ReadonlyArray<string>;
        readonly listen: (context: Context, session: Session) => Result | PromiseLike<Result>;
    }
    export interface Module {
        readonly dist: string;
        readonly compiler?: Compiler;
        readonly extnames?: ReadonlyArray<string>;
        readonly ignore?: (pathname: string, context: Context) => boolean;
        readonly static?: (pathname: string, context: Context) => boolean;
    }
    export interface Compiler {
        (content: string, filename: string, defaultCompiler: DefaultCompiler): string | PromiseLike<string>;
    }
    export interface DefaultCompiler {
        (content: string, filename: string): string;
    }
    export interface MimeType {
        readonly [extname: string]: string;
    }
    export interface Debugger {
        (error: Error | null, detail: Detail): void;
    }
    export interface Modified {
        readonly match: string;
        readonly since: string;
    }
    export interface Detail {
        readonly url: string;
        readonly method: string;
        readonly status: number;
    }
    export type Result =
        | PureResult
        | DataResult
        | FileResult
        | JsonResult
        | NoneResult
        | EmptyResult
        | ResetResult
        | RedirectResult
        | NotFoundResult
        | ForbiddenResult
        | UnauthorizedResult;
    export interface Context {
        readonly IE: boolean;
        readonly IP: string;
        readonly UA: string;
        readonly host: string;
        readonly search: any;
        readonly method: string;
        readonly length: number;
        readonly origin: string;
        readonly referer: string;
        readonly version: string;
        readonly protocol: string | null | undefined;
        readonly pathname: string;
        readonly mimetype: string;
        readonly boundary: string;
        readonly encoding: ReadonlyArray<string>;
        readonly language: ReadonlyArray<string>;
        readonly range: ReadonlyArray<number>;
        getRequestCookie(name: string): string;
        getRequestHeader(name: string): string;
        setResponseCookie(name: string, value: string, opts?: Yarla.CookieSerializationOptions): void;
        setResponseHeader(name: string, value: string | ReadonlyArray<string>): void;
        deleteResponseCookie(name: string): boolean;
        deleteResponseHeader(name: string): boolean;
        stream(): NodeJS.ReadableStream;
        readline(): AsyncIterable<string>;
        read(original: true): Promise<Buffer>;
        read(): Promise<Yarla.AnyObject>;
    }
    export interface Session {
        readonly id: string;
        get(key: string): Promise<any>;
        set<T>(key: string, value: T): Promise<T>;
    }
    export interface Options {
        readonly action?: ReadonlyArray<Action>;
        readonly module?: ReadonlyArray<Module>;
        readonly public?: ReadonlyArray<string>;
        readonly accessCookieAllowOrigin?: Yarla.SameSite;
        readonly maxRequestContentLength?: number;
        readonly sessionStorage?: SessionStorage;
        readonly tokenGenerator?: TokenGenerator;
        readonly visitValidator?: VisitValidator;
        readonly compressTypes?: ReadonlyArray<string>;
        readonly compressLeast?: number;
        readonly compressLevel?: number;
        readonly customHeaders?: Headers;
        readonly debugger?: Debugger;
        readonly mimetype?: MimeType;
        readonly favicon?: string;
        readonly sitemap?: string;
        readonly robots?: string;
    }
}
