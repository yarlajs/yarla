/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

import _pattern from "./lib/pattern/index.js";
import _cookies from "./lib/cookies/index.js";
import _queries from "./lib/queries/index.js";
import _formats from "./lib/formats/index.js";
import _KVPair from "./lib/KVPair/index.js";
import _Buffer from "./lib/Buffer/index.js";
import _Reflect from "./lib/Reflect/index.js";
import _Promise from "./lib/Promise/index.js";
import _WeakMap from "./lib/WeakMap/index.js";
import _Fragment from "./lib/Fragment/index.js";
import _HttpError from "./lib/HttpError/index.js";
import _RefObject from "./lib/RefObject/index.js";
import _VMElement from "./lib/VMElement/index.js";
import _Uint8Array from "./lib/Uint8Array/index.js";
import _ReadableStream from "./lib/ReadableStream/index.js";
import _createElement from "./lib/createElement/index.js";
import _setImmediate from "./lib/setImmediate/index.js";
import _setInterval from "./lib/setInterval/index.js";
import _setTimeout from "./lib/setTimeout/index.js";
import _nextTick from "./lib/nextTick/index.js";
import _debounce from "./lib/debounce/index.js";
import _throttle from "./lib/throttle/index.js";
import _forceUpdate from "./lib/forceUpdate/index.js";
import _useEffect from "./lib/useEffect/index.js";
import _useTarget from "./lib/useTarget/index.js";
import _useState from "./lib/useState/index.js";
import _useMemo from "./lib/useMemo/index.js";
import _useRef from "./lib/useRef/index.js";
import _shadow from "./lib/shadow/index.js";
import _memo from "./lib/memo/index.js";
import _zone from "./lib/zone/index.js";
import _has from "./lib/has/index.js";
import _get from "./lib/get/index.js";
import _set from "./lib/set/index.js";
import _delete from "./lib/delete/index.js";
import _keys from "./lib/keys/index.js";
import _values from "./lib/values/index.js";
import _entries from "./lib/entries/index.js";
import _salt from "./lib/salt/index.js";
import _uuid from "./lib/uuid/index.js";
import _hash from "./lib/hash/index.js";
import _glob from "./lib/glob/index.js";
import _flat from "./lib/flat/index.js";
import _uniq from "./lib/uniq/index.js";
import _omit from "./lib/omit/index.js";
import _pick from "./lib/pick/index.js";
import _clone from "./lib/clone/index.js";
import _merge from "./lib/merge/index.js";
import _defaults from "./lib/defaults/index.js";
import _trampoline from "./lib/trampoline/index.js";
import _concatUrl from "./lib/concatUrl/index.js";
import _isArray from "./lib/isArray/index.js";
import _isClass from "./lib/isClass/index.js";
import _isNumber from "./lib/isNumber/index.js";
import _isString from "./lib/isString/index.js";
import _isBoolean from "./lib/isBoolean/index.js";
import _isFunction from "./lib/isFunction/index.js";
import _isBigInt from "./lib/isBigInt/index.js";
import _isSymbol from "./lib/isSymbol/index.js";
import _isObject from "./lib/isObject/index.js";
import _isIterable from "./lib/isIterable/index.js";
import _isInstanceOf from "./lib/isInstanceOf/index.js";
import _isRegExp from "./lib/isRegExp/index.js";
import _isDate from "./lib/isDate/index.js";
import _isNull from "./lib/isNull/index.js";
import _isNullOrUndefined from "./lib/isNullOrUndefined/index.js";
import _isNullOrEmptyArray from "./lib/isNullOrEmptyArray/index.js";
import _isNullOrEmptyString from "./lib/isNullOrEmptyString/index.js";
import _isNullOrEmptyObject from "./lib/isNullOrEmptyObject/index.js";
import _isUndefined from "./lib/isUndefined/index.js";
import _isReference from "./lib/isReference/index.js";
import _isBasic from "./lib/isBasic/index.js";
import _isEqual from "./lib/isEqual/index.js";
import _isValid from "./lib/isValid/index.js";
import _isNaN from "./lib/isNaN/index.js";
import _isFinite from "./lib/isFinite/index.js";
import _isInteger from "./lib/isInteger/index.js";
import _isSafeInteger from "./lib/isSafeInteger/index.js";
import _isJsonContent from "./lib/isJsonContent/index.js";
import _isTextContent from "./lib/isTextContent/index.js";
import _isURLSearchParams from "./lib/isURLSearchParams/index.js";
import _isArrayBufferView from "./lib/isArrayBufferView/index.js";
import _isArrayBuffer from "./lib/isArrayBuffer/index.js";
import _isFormData from "./lib/isFormData/index.js";
import _isReadable from "./lib/isReadable/index.js";
import _isWritable from "./lib/isWritable/index.js";
import _isHeaders from "./lib/isHeaders/index.js";
import _isBlob from "./lib/isBlob/index.js";
import _atob from "./lib/atob/index.js";
import _btoa from "./lib/btoa/index.js";
import _read from "./lib/read/index.js";

export {
    _pattern as pattern,
    _cookies as cookies,
    _queries as queries,
    _formats as formats,
    _KVPair as KVPair,
    _Buffer as Buffer,
    _Reflect as Reflect,
    _Promise as Promise,
    _WeakMap as WeakMap,
    _Fragment as Fragment,
    _HttpError as HttpError,
    _RefObject as RefObject,
    _VMElement as VMElement,
    _Uint8Array as Uint8Array,
    _ReadableStream as ReadableStream,
    _createElement as createElement,
    _setImmediate as setImmediate,
    _setInterval as setInterval,
    _setTimeout as setTimeout,
    _nextTick as nextTick,
    _debounce as debounce,
    _throttle as throttle,
    _forceUpdate as forceUpdate,
    _useEffect as useEffect,
    _useTarget as useTarget,
    _useState as useState,
    _useMemo as useMemo,
    _useRef as useRef,
    _shadow as shadow,
    _memo as memo,
    _zone as zone,
    _has as has,
    _get as get,
    _set as set,
    _delete as delete,
    _keys as keys,
    _values as values,
    _entries as entries,
    _salt as salt,
    _uuid as uuid,
    _hash as hash,
    _glob as glob,
    _flat as flat,
    _uniq as uniq,
    _omit as omit,
    _pick as pick,
    _clone as clone,
    _merge as merge,
    _defaults as defaults,
    _trampoline as trampoline,
    _concatUrl as concatUrl,
    _isArray as isArray,
    _isClass as isClass,
    _isNumber as isNumber,
    _isString as isString,
    _isBoolean as isBoolean,
    _isFunction as isFunction,
    _isBigInt as isBigInt,
    _isSymbol as isSymbol,
    _isObject as isObject,
    _isIterable as isIterable,
    _isInstanceOf as isInstanceOf,
    _isRegExp as isRegExp,
    _isDate as isDate,
    _isNull as isNull,
    _isNullOrUndefined as isNullOrUndefined,
    _isNullOrEmptyArray as isNullOrEmptyArray,
    _isNullOrEmptyString as isNullOrEmptyString,
    _isNullOrEmptyObject as isNullOrEmptyObject,
    _isUndefined as isUndefined,
    _isReference as isReference,
    _isBasic as isBasic,
    _isEqual as isEqual,
    _isValid as isValid,
    _isNaN as isNaN,
    _isFinite as isFinite,
    _isInteger as isInteger,
    _isSafeInteger as isSafeInteger,
    _isJsonContent as isJsonContent,
    _isTextContent as isTextContent,
    _isURLSearchParams as isURLSearchParams,
    _isArrayBufferView as isArrayBufferView,
    _isArrayBuffer as isArrayBuffer,
    _isFormData as isFormData,
    _isReadable as isReadable,
    _isWritable as isWritable,
    _isHeaders as isHeaders,
    _isBlob as isBlob,
    _atob as atob,
    _btoa as btoa,
    _read as read,
}

declare global {
    namespace Yarla {
        interface Pattern {
            readonly URL: RegExp;
            readonly DATE: RegExp;
            readonly TIME: RegExp;
            readonly IPV4: RegExp;
            readonly IPV6: RegExp;
            readonly BLANK: RegExp;
            readonly DIGIT: RegExp;
            readonly EMAIL: RegExp;
            readonly PHONE: RegExp;
            readonly ENGLISH: RegExp;
            readonly CHINESE: RegExp;
            readonly USERNAME: RegExp;
            readonly PASSWORD: RegExp;
            readonly DATETIME: RegExp;
        }
        interface Cookies {
            parse(argc: string): AnyObject<string>;
            serialize(name: string, value: string, opts?: CookieSerializationOptions): string;
        }
        interface CookieSerializationOptions {
            readonly UA?: string;
            readonly protocol?: string;
            readonly path?: string;
            readonly domain?: string;
            readonly maxAge?: number;
            readonly expires?: Date;
            readonly sameSite?: SameSite;
            readonly httpOnly?: boolean;
            readonly secure?: boolean;
        }
        //
        // Note:
        //
        //  Some versions of WebKit/Blink/Chromium kernel browsers do not support `None`,
        //  but they support Lax and Strict, and SameSite should not be set at this time.
        //
        // Unsupported browsers:
        //
        //  Cover all iOS based browsers here. This includes:
        //      - Safari on iOS 12 for iPhone, iPod Touch, iPad
        //      - WkWebview on iOS 12 for iPhone, iPod Touch, iPad
        //      - Chrome on iOS 12 for iPhone, iPod Touch, iPad
        //      All of which are broken by SameSite=None, because they use the iOS networking stack.
        //  Code:
        //      UA.includes("CPU iPhone OS 12") || UA.includes("iPad; CPU OS 12");
        //
        //  Cover Mac OS X based browsers that use the Mac OS networking stack. This includes:
        //      - Safari on Mac OS X
        //      This does not include:
        //      - Chrome on Mac OS X
        //      Because they do not use the Mac OS networking stack.
        //  Code:
        //      UA.includes("Macintosh; Intel Mac OS X 10_14") && UA.includes("Version/") && UA.includes("Safari");
        //
        //  Cover Chrome 50-69, because some versions are broken by SameSite=None,
        //      and none in this range require it.
        //      Note: this covers some pre-Chromium Edge versions,
        //      but pre-Chromium Edge does not require SameSite=None.
        //  Code:
        //      UA.includes("Chrome/5") || UA.includes("Chrome/6");
        //
        type SameSite =
            | "Strict"
            | "Lax"
            | "None";
        interface Queries {
            parse(argc: string): any;
            serialize(argc: any): string;
        }
        interface Formats {
            json(argc: any, pretty?: boolean): string;
            attr(argc: any, expr?: PropertyExpr): any;
            date(argc: number | string | Date, pattern?: string): string;
            digit(argc: number, digit?: number): string;
            lower(argc: string): string;
            upper(argc: string): string;
        }
        interface KVPair<T = any> {
            clear(): void;
            delete(key: string): boolean;
            get(key: string): T | undefined;
            set(key: string, value: T): this;
            has(key: string): boolean;
            keys(): ReadonlyArray<string>;
            values(): ReadonlyArray<T>;
            entries(): ReadonlyArray<readonly [string, T]>;
            forEach(callback: (value: T, key: string) => void, thisArg?: any): void;
            toJSON(): Readonly<AnyObject<T>>;
        }
        interface KVPairConstructor extends Proto<KVPair<any>> {
            new <T>(source: Readonly<AnyObject<T>> | Iterable<readonly [string, T]> | Headers, ignoreCase?: boolean): KVPair<T>;
            new <T = any>(ignoreCase?: boolean): KVPair<T>;
        }
        interface HttpError extends Error {
            readonly name: string;
            readonly status: number;
            readonly message: string;
            readonly stack?: string;
        }
        interface HttpErrorConstructor extends Proto<HttpError> {
            new(status: number, message?: string): HttpError;
        }
        interface Fragment extends Node {

        }
        interface FragmentProperties extends ChildrenAttributes, ClassAttributes<Fragment> {

        }
        interface FragmentComponent extends Component<FragmentProperties> {

        }
        interface Hook {
            useRef<T = unknown>(target?: T): RefObject<T>;
            useState<T = unknown>(state?: T): Situation<T>;
            useTarget<T extends AnyObject>(patulous?: T & ThisType<T & Node>): T & Node;
            useEffect(effection: Effection, dependencies?: ReadonlyArray<any>): void;
            useMemo<T>(factory: () => T, dependencies?: ReadonlyArray<any>): T;
        }
        type Effection = NoParametersFunc<Cancelable | NOOP | void>;
        type Situation<T> = readonly [T, SituationSetter<T>];
        interface SituationSetter<T> {
            (state: T, ignoreUpdate?: boolean): void;
        }
        interface Application {
            forceUpdate(): void;
            unmount(): void;
        }
        type MixObject = {};
        type NilObject = AnyObject<never>;
        type AnyObject<T = any> = Record<string, T>;
        type Nullable<T> = {
            [K in keyof T]?: T[K] | null;
        };
        type Writable<T> = {
            -readonly [K in keyof T]-?: T[K];
        };
        type NonAny<T> = 0 extends (1 & T) ? MixObject : T;
        type Object<T, U = AnyObject> = T extends U ? T : U;
        type ArrayType<T> = T extends ArrayLike<infer P> ? P : never;
        interface Proto<T = any> extends Function {
            readonly prototype: T;
        }
        interface BasicFunc<P extends any[] = any[], T = any, R = any> extends Proto<T> {
            (this: T, ...argv: P): R;
        }
        interface ClassFunc<P extends any[] = any[], T = any> extends Proto<T> {
            new(...argv: P): T;
        }
        type UnionFunc<P extends any[] = any[], T = any> = BasicFunc<P, T> | ClassFunc<P, T>;
        type NoParametersFunc<R = any, T = any> = BasicFunc<[], T, R>;
        type NoReturnsFunc<P extends any[] = any[], T = any> = BasicFunc<P, T, void>;
        type Parameters<T extends UnionFunc> = T extends UnionFunc<infer P> ? P : never;
        type InstanceType<T extends Proto> = T extends Proto<infer P> ? NonAny<P> : never;
        type InstanceOwnPropertyDescriptorMap<T> = {
            readonly [K in keyof T]: NormalPropertyDescriptor<T[K]> | GetterPropertyDescriptor<T[K]>;
        };
        interface NormalPropertyDescriptor<T> extends PropertyDescriptor {
            readonly value: T;
        }
        interface GetterPropertyDescriptor<T> extends PropertyDescriptor {
            readonly get: NoParametersFunc<T>;
        }
        type TypedPropertyDescriptor<T> = NormalPropertyDescriptor<T> | GetterPropertyDescriptor<T>;
        type PropertyDescriptorReturns<T extends PropertyDescriptor> = T extends TypedPropertyDescriptor<infer P> ? P : never;
        type PropertyDescriptorMapReturns<T extends PropertyDescriptorMap> = {
            readonly [K in keyof T]: PropertyDescriptorReturns<T[K]>;
        };
        type PropertyExpr = string | ReadonlyArray<PropertyKey>;
        type NOOP = NoParametersFunc<void>;
        type Key = number | string;
        type Text = number | string | boolean | null | undefined;
        interface Component<P extends object = NilObject, C = unknown> {
            (props: P, context?: C): VMNode;
        }
        interface Directive<P extends object = NilObject, C = unknown> {
            (props: P, context?: C): void;
        }
        interface Transform {
            (argc: any, ...argv: any[]): any;
        }
        type VMChildren = VMNode | VMChildren[];
        type VMNode = Text | VMElement<any>;
        interface Cancelable {
            cancel(): void;
        }
        interface RefObject<T> {
            readonly target: T;
        }
        interface VMElement<T> {
            readonly key: Key | null | undefined;
            readonly ref: RefObject<Node> | null | undefined;
            readonly cmd: ReadonlyArray<Directive<any>> | null | undefined;
            readonly props: { readonly children: ReadonlyArray<any>; } & Readonly<AnyObject>;
            readonly owner: any;
            readonly type: T;
        }
        interface VMTokenList {
            readonly value: string;
            add(...tokens: string[]): void;
            contains(token: string): boolean;
            remove(...tokens: string[]): void;
            replace(previous: string, token: string): void;
            toggle(token: string): boolean;
        }
        interface Attributes {
            readonly key?: Key;
        }
        interface ClassAttributes<T extends Node = Node> extends Attributes {
            readonly cmd?: Directive<any> | ReadonlyArray<Directive<any, any>>;
            readonly ref?: RefObject<T>;
        }
        interface ChildrenAttributes {
            readonly children?: VMChildren;
        }
        interface ElementChildrenAttributes extends ChildrenAttributes {
            readonly textContent?: string;
            readonly innerHTML?: string;
            readonly innerText?: string;
        }
        interface EventListenerOptions {
            readonly capture?: boolean;
        }
        interface AddEventListenerOptions extends EventListenerOptions {
            readonly passive?: boolean;
            readonly once?: boolean;
        }
        interface Event<T extends EventTarget = EventTarget> {
            readonly type: string;
            readonly bubbles: boolean;
            readonly cancelable: boolean;
            readonly composed: boolean;
            readonly defaultPrevented: boolean;
            readonly isTrusted: boolean;
            readonly eventPhase: number;
            readonly timeStamp: number;
            readonly currentTarget: T;
            readonly target: EventTarget;
            stopImmediatePropagation(): void;
            stopPropagation(): void;
            preventDefault(): void;
            ignoreUpdate(): void;
        }
        interface AnimationEvent<T extends EventTarget = EventTarget> extends Event<T> {
            readonly animationName: string;
            readonly elapsedTime: number;
            readonly pseudoElement: string;
        }
        interface BeforeUnloadEvent<T extends EventTarget = EventTarget> extends Event<T> {

        }
        interface ClipboardEvent<T extends EventTarget = EventTarget> extends Event<T> {
            readonly clipboardData: DataTransfer | null;
        }
        interface CompositionEvent<T extends EventTarget = EventTarget> extends Event<T> {
            readonly data: string;
        }
        interface DeviceMotionEvent<T extends EventTarget = EventTarget> extends Event<T> {
            readonly acceleration: DeviceMotionEventAcceleration | null;
            readonly accelerationIncludingGravity: DeviceMotionEventAcceleration | null;
            readonly interval: number;
            readonly rotationRate: DeviceMotionEventRotationRate | null;
        }
        interface DeviceOrientationEvent<T extends EventTarget = EventTarget> extends Event<T> {
            readonly absolute: boolean;
            readonly alpha: number | null;
            readonly beta: number | null;
            readonly gamma: number | null;
        }
        interface DragEvent<T extends EventTarget = EventTarget> extends Event<T> {
            readonly dataTransfer: DataTransfer | null;
        }
        interface ErrorEvent<T extends EventTarget = EventTarget> extends Event<T> {
            readonly colno: number;
            readonly error: any;
            readonly filename: string;
            readonly lineno: number;
            readonly message: string;
        }
        interface FocusEvent<T extends EventTarget = EventTarget> extends UIEvent<T> {
            readonly relatedTarget: EventTarget | null;
        }
        interface GamepadEvent<T extends EventTarget = EventTarget> extends Event<T> {
            readonly gamepad: Gamepad;
        }
        interface HashChangeEvent<T extends EventTarget = EventTarget> extends Event<T> {

        }
        interface InputEvent<T extends EventTarget = EventTarget> extends UIEvent<T> {
            readonly data: string | null;
            readonly inputType: string;
            readonly isComposing: boolean;
        }
        interface KeyboardEvent<T extends EventTarget = EventTarget> extends UIEvent<T> {
            readonly key: string;
            readonly code: string;
            readonly altKey: boolean;
            readonly ctrlKey: boolean;
            readonly metaKey: boolean;
            readonly shiftKey: boolean;
            readonly isComposing: boolean;
            readonly location: number;
            readonly repeat: boolean;
            getModifierState(keyArg: string): boolean;
        }
        interface MessageEvent<T extends EventTarget = EventTarget> extends Event<T> {
            readonly data: any;
            readonly lastEventId: string;
            readonly origin: string;
            readonly ports: ReadonlyArray<MessagePort>;
            readonly source: EventTarget | null;
        }
        interface PageTransitionEvent<T extends EventTarget = EventTarget> extends Event<T> {
            readonly persisted: boolean;
        }
        interface PointerEvent<T extends EventTarget = EventTarget> extends MouseEvent<T> {
            readonly height: number;
            readonly isPrimary: boolean;
            readonly pointerId: number;
            readonly pointerType: string;
            readonly pressure: number;
            readonly tangentialPressure: number;
            readonly tiltX: number;
            readonly tiltY: number;
            readonly twist: number;
            readonly width: number;
        }
        interface PopStateEvent<T extends EventTarget = EventTarget> extends Event<T> {
            readonly state: any;
        }
        interface ProgressEvent<T extends EventTarget = EventTarget> extends Event<T> {
            readonly lengthComputable: boolean;
            readonly loaded: number;
            readonly total: number;
        }
        interface PromiseRejectionEvent<T extends EventTarget = EventTarget> extends Event<T> {
            readonly reason: any;
        }
        interface SecurityPolicyViolationEvent<T extends EventTarget = EventTarget> extends Event<T> {
            readonly blockedURI: string;
            readonly columnNumber: number;
            readonly documentURI: string;
            readonly effectiveDirective: string;
            readonly lineNumber: number;
            readonly originalPolicy: string;
            readonly referrer: string;
            readonly sourceFile: string;
            readonly statusCode: number;
            readonly violatedDirective: string;
        }
        interface StorageEvent<T extends EventTarget = EventTarget> extends Event<T> {
            readonly key: string | null;
            readonly newValue: string | null;
            readonly oldValue: string | null;
            readonly storageArea: Storage | null;
            readonly url: string;
        }
        interface TouchEvent<T extends EventTarget = EventTarget> extends UIEvent<T> {
            readonly altKey: boolean;
            readonly changedTouches: TouchList;
            readonly ctrlKey: boolean;
            readonly metaKey: boolean;
            readonly shiftKey: boolean;
            readonly targetTouches: TouchList;
            readonly touches: TouchList;
        }
        interface TransitionEvent<T extends EventTarget = EventTarget> extends Event<T> {
            readonly elapsedTime: number;
            readonly propertyName: string;
            readonly pseudoElement: string;
        }
        interface WheelEvent<T extends EventTarget = EventTarget> extends MouseEvent<T> {
            readonly deltaMode: number;
            readonly deltaX: number;
            readonly deltaY: number;
            readonly deltaZ: number;
        }
        interface MouseEvent<T extends EventTarget = EventTarget> extends UIEvent<T> {
            readonly altKey: boolean;
            readonly button: number;
            readonly buttons: number;
            readonly clientX: number;
            readonly clientY: number;
            readonly ctrlKey: boolean;
            readonly metaKey: boolean;
            readonly movementX: number;
            readonly movementY: number;
            readonly offsetX: number;
            readonly offsetY: number;
            readonly pageX: number;
            readonly pageY: number;
            readonly relatedTarget: EventTarget | null;
            readonly screenX: number;
            readonly screenY: number;
            readonly shiftKey: boolean;
            readonly x: number;
            readonly y: number;
            getModifierState(keyArg: string): boolean;
        }
        interface UIEvent<T extends EventTarget = EventTarget> extends Event<T> {
            readonly detail: number;
            readonly view: Window | null;
        }
        interface CustomEvent<D = any, T extends EventTarget = EventTarget> extends Event<T> {
            readonly detail: D;
        }
        interface EventTarget {
            listen(type: string, listener: EventListenerOrEventListenerObject<this>, opts?: boolean | AddEventListenerOptions): Cancelable;
            dispatch(type: string, detail?: any, bubbles?: boolean, cancelable?: boolean): boolean;
        }
        interface EventListener<T extends EventTarget = EventTarget, E extends Event<T> = Event<T>> {
            (this: T, event: E): void;
        }
        interface EventListenerObject<T extends EventTarget = EventTarget, E extends Event<T> = Event<T>> {
            handleEvent(event: E): void;
        }
        type EventListenerOrEventListenerObject<T extends EventTarget = EventTarget, E extends Event<T> = Event<T>> = EventListener<T, E> | EventListenerObject<T, E>;
        type EventHandlersNames<T extends string> =
            | `on${T}`
            | `on${T}:all`
            | `on${T}:capture`
            | `on${T}:passive`;
        interface Window extends EventTarget {
            listen<T extends keyof WindowEventHandlersEventMap<this>>(type: T, listener: EventListenerOrEventListenerObject<this, WindowEventHandlersEventMap<this>[T]>, opts?: boolean | AddEventListenerOptions): Cancelable;
        }
        interface Node extends EventTarget {
            readonly nodeName: string;
            readonly nodeType: number;
            readonly textContent: string;
            readonly isConnected: boolean;
            listenTo<T extends keyof WindowEventHandlersEventMap<Window>>(type: T, listener: EventListenerOrEventListenerObject<Window, WindowEventHandlersEventMap<Window>[T]>, opts?: boolean | AddEventListenerOptions): Cancelable;
            listenTo(type: string, listener: EventListenerOrEventListenerObject<Window>, opts?: boolean | AddEventListenerOptions): Cancelable;
            contains(node: Node): boolean;
        }
        interface Document extends Node {
            isDefaultNamespace(namespace: string | null): boolean;
            listen<T extends keyof DocumentEventHandlersEventMap<this>>(type: T, listener: EventListenerOrEventListenerObject<this, DocumentEventHandlersEventMap<this>[T]>, opts?: boolean | AddEventListenerOptions): Cancelable;
        }
        interface Element extends Node {
            readonly innerHTML: string;
            readonly outerHTML: string;
            readonly className: string;
            readonly classList: VMTokenList;
            readonly clientHeight: number;
            readonly clientLeft: number;
            readonly clientTop: number;
            readonly clientWidth: number;
            readonly scrollHeight: number;
            readonly scrollLeft: number;
            readonly scrollTop: number;
            readonly scrollWidth: number;
            getBoundingClientRect(): DOMRect;
            listen<T extends keyof ElementEventHandlersEventMap<this>>(type: T, listener: EventListenerOrEventListenerObject<this, ElementEventHandlersEventMap<this>[T]>, opts?: boolean | AddEventListenerOptions): Cancelable;
            scrollTo(x: number, y: number, behavior?: ScrollBehavior): void;
            matches(selectors: string): boolean;
        }
        interface HTMLElement extends Element {

        }
        interface MathMLElement extends Element {

        }
        interface SVGElement extends Element {

        }
        interface HTMLAnchorElement extends HTMLElement {

        }
        interface HTMLAreaElement extends HTMLElement {

        }
        interface HTMLAudioElement extends HTMLMediaElement {

        }
        interface HTMLBRElement extends HTMLElement {

        }
        interface HTMLBaseElement extends HTMLElement {

        }
        interface HTMLBodyElement extends HTMLElement {

        }
        interface HTMLButtonElement extends HTMLElement {

        }
        interface HTMLCanvasElement extends HTMLElement {
            getContext(contextId: "2d", options?: CanvasRenderingContext2DSettings): CanvasRenderingContext2D | null;
            getContext(contextId: "bitmaprenderer", options?: ImageBitmapRenderingContextSettings): ImageBitmapRenderingContext | null;
            getContext(contextId: "webgl", options?: WebGLContextAttributes): WebGLRenderingContext | null;
            getContext(contextId: "webgl2", options?: WebGLContextAttributes): WebGL2RenderingContext | null;
            getContext(contextId: string, options?: any): RenderingContext | null;
            toDataURL(type?: string, quality?: any): string;
        }
        interface HTMLDListElement extends HTMLElement {

        }
        interface HTMLDataElement extends HTMLElement {

        }
        interface HTMLDataListElement extends HTMLElement {

        }
        interface HTMLDetailsElement extends HTMLElement {

        }
        interface HTMLDialogElement extends HTMLElement {

        }
        interface HTMLDivElement extends HTMLElement {

        }
        interface HTMLEmbedElement extends HTMLElement {

        }
        interface HTMLFieldSetElement extends HTMLElement {

        }
        interface HTMLFormElement extends HTMLElement {
            reset(): void;
            submit(): void;
        }
        interface HTMLHRElement extends HTMLElement {

        }
        interface HTMLHeadElement extends HTMLElement {

        }
        interface HTMLHeadingElement extends HTMLElement {

        }
        interface HTMLHtmlElement extends HTMLElement {

        }
        interface HTMLIFrameElement extends HTMLElement {

        }
        interface HTMLImageElement extends HTMLElement {
            readonly complete: boolean;
            readonly currentSrc: string;
            readonly naturalHeight: number;
            readonly naturalWidth: number;
        }
        interface HTMLInputElement extends HTMLElement {
            readonly name: string;
            readonly value: string;
            readonly checked: boolean;
            readonly selectionEnd: number | null;
            readonly selectionStart: number | null;
            readonly files: FileList | null;
            setSelectionRange(start: number | null, end: number | null, direction?: DOMDirection): void;
            select(): void;
        }
        interface HTMLLIElement extends HTMLElement {

        }
        interface HTMLLabelElement extends HTMLElement {

        }
        interface HTMLLegendElement extends HTMLElement {

        }
        interface HTMLLinkElement extends HTMLElement {

        }
        interface HTMLMenuElement extends HTMLElement {

        }
        interface HTMLMetaElement extends HTMLElement {

        }
        interface HTMLMeterElement extends HTMLElement {

        }
        interface HTMLModElement extends HTMLElement {

        }
        interface HTMLOListElement extends HTMLElement {

        }
        interface HTMLObjectElement extends HTMLElement {

        }
        interface HTMLOptGroupElement extends HTMLElement {

        }
        interface HTMLOptionElement extends HTMLElement {

        }
        interface HTMLOutputElement extends HTMLElement {

        }
        interface HTMLParagraphElement extends HTMLElement {

        }
        interface HTMLParamElement extends HTMLElement {

        }
        interface HTMLPictureElement extends HTMLElement {

        }
        interface HTMLPortalElement extends HTMLElement {

        }
        interface HTMLPreElement extends HTMLElement {

        }
        interface HTMLProgressElement extends HTMLElement {

        }
        interface HTMLQuoteElement extends HTMLElement {

        }
        interface HTMLScriptElement extends HTMLElement {

        }
        interface HTMLSelectElement extends HTMLElement {
            readonly name: string;
            readonly value: string;
            readonly selectedIndex: number;
        }
        interface HTMLSlotElement extends HTMLElement {

        }
        interface HTMLSourceElement extends HTMLElement {

        }
        interface HTMLSpanElement extends HTMLElement {

        }
        interface HTMLStyleElement extends HTMLElement {

        }
        interface HTMLTableCaptionElement extends HTMLElement {

        }
        interface HTMLTableCellElement extends HTMLElement {

        }
        interface HTMLTableColElement extends HTMLElement {

        }
        interface HTMLTableElement extends HTMLElement {

        }
        interface HTMLTableRowElement extends HTMLElement {

        }
        interface HTMLTableSectionElement extends HTMLElement {

        }
        interface HTMLTemplateElement extends HTMLElement {

        }
        interface HTMLTextAreaElement extends HTMLElement {
            readonly name: string;
            readonly value: string;
            readonly selectionEnd: number | null;
            readonly selectionStart: number | null;
            setSelectionRange(start: number | null, end: number | null, direction?: DOMDirection): void;
            select(): void;
        }
        interface HTMLTimeElement extends HTMLElement {

        }
        interface HTMLTitleElement extends HTMLElement {

        }
        interface HTMLTrackElement extends HTMLElement {
            readonly readyState: number;
        }
        interface HTMLUListElement extends HTMLElement {

        }
        interface HTMLVideoElement extends HTMLMediaElement {
            readonly videoHeight: number;
            readonly videoWidth: number;
        }
        interface HTMLMediaElement extends HTMLElement {
            readonly buffered: TimeRanges;
            readonly currentSrc: string;
            readonly duration: number;
            readonly ended: boolean;
            readonly error: MediaError | null;
            readonly networkState: number;
            readonly paused: boolean;
            readonly played: TimeRanges;
            readonly readyState: number;
            readonly seekable: TimeRanges;
            readonly seeking: boolean;
            load(): void;
            pause(): void;
            play(): Promise<void>;
        }
        interface HTMLUnknownElement extends HTMLElement {

        }
        interface ElementAttributes<T extends Element = Element> extends ElementAriaAttributes, ElementEventAttributes<T>, ClassAttributes<T> {

        }
        interface ElementAriaAttributes {
            readonly "aria-atomic": DOMBoolean;
            readonly "aria-autocomplete": DOMAriaAutoComplete;
            readonly "aria-busy": DOMBoolean;
            readonly "aria-checked": DOMAriaChecked;
            readonly "aria-colcount": DOMNumber;
            readonly "aria-colindex": DOMNumber;
            readonly "aria-colspan": DOMNumber;
            readonly "aria-current": DOMAriaCurrent;
            readonly "aria-description": DOMString;
            readonly "aria-disabled": DOMBoolean;
            readonly "aria-expanded": DOMBoolean;
            readonly "aria-haspopup": DOMAriaHasPopup;
            readonly "aria-hidden": DOMBoolean;
            readonly "aria-keyshortcuts": DOMString;
            readonly "aria-label": DOMString;
            readonly "aria-level": DOMNumber;
            readonly "aria-live": DOMAriaLive;
            readonly "aria-modal": DOMBoolean;
            readonly "aria-multiline": DOMBoolean;
            readonly "aria-multiselectable": DOMBoolean;
            readonly "aria-orientation": DOMAriaOrientation;
            readonly "aria-placeholder": DOMString;
            readonly "aria-posinset": DOMNumber;
            readonly "aria-pressed": DOMAriaPressed;
            readonly "aria-readonly": DOMBoolean;
            readonly "aria-relevant": DOMAriaRelevant;
            readonly "aria-required": DOMBoolean;
            readonly "aria-roledescription": DOMString;
            readonly "aria-rowcount": DOMNumber;
            readonly "aria-rowindex": DOMNumber;
            readonly "aria-rowspan": DOMNumber;
            readonly "aria-selected": DOMBoolean;
            readonly "aria-setsize": DOMNumber;
            readonly "aria-sort": DOMAriaSort;
            readonly "aria-valuemax": DOMNumber;
            readonly "aria-valuemin": DOMNumber;
            readonly "aria-valuenow": DOMNumber;
            readonly "aria-valuetext": DOMString;
            readonly "role": DOMAriaRole;
        }
        type ElementEventAttributes<T extends Element = Element> = {
            readonly [K in ElementEventHandlersNames<T, keyof ElementEventHandlersEventMap<T>>]?: K extends ElementEventHandlersNames<T, infer P> ? EventListenerOrEventListenerObject<T, ElementEventHandlersEventMap<T>[P]> : never;
        };
        interface HTMLElementAttributes<T extends HTMLElement = HTMLElement> extends ElementAttributes<T> {
            readonly "accesskey": DOMString;
            readonly "autocapitalize": DOMAutoCapitalize;
            readonly "autofocus": DOMBoolean;
            readonly "class": DOMString | Readonly<AnyObject<boolean | null | undefined>>;
            readonly "contenteditable": DOMBooleanString;
            readonly "dir": DOMDir;
            readonly "draggable": DOMBooleanString;
            readonly "enterkeyhint": DOMString;
            readonly "exportparts": DOMString;
            readonly "hidden": DOMBoolean;
            readonly "lang": DOMString;
            readonly "id": DOMString;
            readonly "inputmode": DOMInputMode;
            readonly "is": DOMString;
            readonly "itemid": DOMString;
            readonly "itemprop": DOMString;
            readonly "itemref": DOMString;
            readonly "itemscope": DOMString;
            readonly "itemtype": DOMString;
            readonly "nonce": DOMString;
            readonly "part": DOMString;
            readonly "slot": DOMString;
            readonly "spellcheck": DOMBooleanString;
            readonly "style": DOMString | Nullable<CSSStyleDeclaration>;
            readonly "title": DOMString;
            readonly "translate": DOMTranslate;
            readonly "tabindex": DOMNumber;
        }
        interface HTMLAnchorElementAttributes<T extends HTMLAnchorElement = HTMLAnchorElement> extends HTMLElementAttributes<T> {
            readonly "download": DOMString;
            readonly "href": DOMString;
            readonly "hreflang": DOMString;
            readonly "ping": DOMString;
            readonly "referrerpolicy": DOMReferrerPolicy;
            readonly "rel": DOMRel;
            readonly "target": DOMTarget;
            readonly "type": DOMString;
        }
        interface HTMLAreaElementAttributes<T extends HTMLAreaElement = HTMLAreaElement> extends HTMLElementAttributes<T> {
            readonly "alt": DOMString;
            readonly "coords": DOMString;
            readonly "download": DOMString;
            readonly "href": DOMString;
            readonly "hreflang": DOMString;
            readonly "ping": DOMString;
            readonly "referrerpolicy": DOMReferrerPolicy;
            readonly "rel": DOMRel;
            readonly "shape": DOMShape;
            readonly "target": DOMTarget;
        }
        interface HTMLAudioElementAttributes<T extends HTMLAudioElement = HTMLAudioElement> extends HTMLMediaElementAttributes<T> {

        }
        interface HTMLBRElementAttributes<T extends HTMLBRElement = HTMLBRElement> extends HTMLElementAttributes<T> {

        }
        interface HTMLBaseElementAttributes<T extends HTMLBaseElement = HTMLBaseElement> extends HTMLElementAttributes<T> {
            readonly "href": DOMString;
            readonly "target": DOMTarget;
        }
        interface HTMLBodyElementAttributes<T extends HTMLBodyElement = HTMLBodyElement> extends HTMLElementAttributes<T> {

        }
        interface HTMLButtonElementAttributes<T extends HTMLButtonElement = HTMLButtonElement> extends HTMLElementAttributes<T> {
            readonly "disabled": DOMBoolean;
            readonly "form": DOMString;
            readonly "formaction": DOMString;
            readonly "formenctype": DOMEnctype;
            readonly "formmethod": DOMMethod;
            readonly "formnovalidate": DOMBoolean;
            readonly "formtarget": DOMTarget;
            readonly "name": DOMString;
            readonly "type": DOMButtonType;
            readonly "value": DOMString;
        }
        interface HTMLCanvasElementAttributes<T extends HTMLCanvasElement = HTMLCanvasElement> extends HTMLElementAttributes<T> {
            readonly "height": DOMNumber;
            readonly "width": DOMNumber;
        }
        interface HTMLDListElementAttributes<T extends HTMLDListElement = HTMLDListElement> extends HTMLElementAttributes<T> {

        }
        interface HTMLDataElementAttributes<T extends HTMLDataElement = HTMLDataElement> extends HTMLElementAttributes<T> {
            readonly "value": DOMString;
        }
        interface HTMLDataListElementAttributes<T extends HTMLDataListElement = HTMLDataListElement> extends HTMLElementAttributes<T> {

        }
        interface HTMLDetailsElementAttributes<T extends HTMLDetailsElement = HTMLDetailsElement> extends HTMLElementAttributes<T> {
            readonly "open": DOMBoolean;
        }
        interface HTMLDialogElementAttributes<T extends HTMLDialogElement = HTMLDialogElement> extends HTMLElementAttributes<T> {
            readonly "open": DOMBoolean;
        }
        interface HTMLDivElementAttributes<T extends HTMLDivElement = HTMLDivElement> extends HTMLElementAttributes<T> {

        }
        interface HTMLEmbedElementAttributes<T extends HTMLEmbedElement = HTMLEmbedElement> extends HTMLElementAttributes<T> {
            readonly "height": DOMNumber;
            readonly "src": DOMString;
            readonly "type": DOMString;
            readonly "width": DOMNumber;
        }
        interface HTMLFieldSetElementAttributes<T extends HTMLFieldSetElement = HTMLFieldSetElement> extends HTMLElementAttributes<T> {
            readonly "disabled": DOMBoolean;
            readonly "form": DOMString;
            readonly "name": DOMString;
        }
        interface HTMLFormElementAttributes<T extends HTMLFormElement = HTMLFormElement> extends HTMLElementAttributes<T> {
            readonly "accept-charset": DOMString;
            readonly "autocomplete": DOMAutoComplete;
            readonly "name": DOMString;
            readonly "rel": DOMRel;
            readonly "action": DOMString;
            readonly "enctype": DOMEnctype;
            readonly "method": DOMMethod;
            readonly "novalidate": DOMBoolean;
            readonly "target": DOMTarget;
        }
        interface HTMLHRElementAttributes<T extends HTMLHRElement = HTMLHRElement> extends HTMLElementAttributes<T> {

        }
        interface HTMLHeadElementAttributes<T extends HTMLHeadElement = HTMLHeadElement> extends HTMLElementAttributes<T> {

        }
        interface HTMLHeadingElementAttributes<T extends HTMLHeadingElement = HTMLHeadingElement> extends HTMLElementAttributes<T> {

        }
        interface HTMLHtmlElementAttributes<T extends HTMLHtmlElement = HTMLHtmlElement> extends HTMLElementAttributes<T> {
            readonly "xmlns": DOMString;
        }
        interface HTMLIFrameElementAttributes<T extends HTMLIFrameElement = HTMLIFrameElement> extends HTMLElementAttributes<T> {
            readonly "allow": DOMString;
            readonly "allowfullscreen": DOMBoolean;
            readonly "allowpaymentrequest": DOMBoolean;
            readonly "csp": DOMString;
            readonly "height": DOMNumber;
            readonly "loading": DOMLoading;
            readonly "name": DOMString;
            readonly "referrerpolicy": DOMReferrerPolicy;
            readonly "sandbox": DOMSandbox;
            readonly "src": DOMString;
            readonly "srcdoc": DOMString;
            readonly "width": DOMNumber;
        }
        interface HTMLImageElementAttributes<T extends HTMLImageElement = HTMLImageElement> extends HTMLElementAttributes<T> {
            readonly "alt": DOMString;
            readonly "crossorigin": DOMCrossOrigin;
            readonly "decoding": DOMDecoding;
            readonly "height": DOMNumber;
            readonly "ismap": DOMBoolean;
            readonly "loading": DOMLoading;
            readonly "referrerpolicy": DOMReferrerPolicy;
            readonly "sizes": DOMString;
            readonly "src": DOMString;
            readonly "srcset": DOMString;
            readonly "width": DOMNumber;
            readonly "usemap": DOMString;
        }
        interface HTMLInputElementAttributes<T extends HTMLInputElement = HTMLInputElement> extends HTMLElementAttributes<T>, FormElementExtraAttributes<T> {
            readonly "accept": DOMString;
            readonly "alt": DOMString;
            readonly "autocomplete": DOMAutoComplete;
            readonly "capture": DOMString;
            readonly "checked": DOMBoolean;
            readonly "dirname": DOMString;
            readonly "disabled": DOMBoolean;
            readonly "form": DOMString;
            readonly "formaction": DOMString;
            readonly "formenctype": DOMEnctype;
            readonly "formmethod": DOMMethod;
            readonly "formnovalidate": DOMBoolean;
            readonly "formtarget": DOMString;
            readonly "height": DOMNumber;
            readonly "id": DOMString;
            readonly "inputmode": DOMInputMode;
            readonly "list": DOMString;
            readonly "max": DOMNumber;
            readonly "maxlength": DOMNumber;
            readonly "min": DOMNumber;
            readonly "minlength": DOMNumber;
            readonly "multiple": DOMBoolean;
            readonly "name": DOMString;
            readonly "pattern": DOMString;
            readonly "placeholder": DOMString;
            readonly "readonly": DOMBoolean;
            readonly "required": DOMBoolean;
            readonly "size": DOMNumber;
            readonly "src": DOMString;
            readonly "step": DOMNumber;
            readonly "type": DOMInputType;
            readonly "value": DOMString;
            readonly "width": DOMNumber;
        }
        interface HTMLLIElementAttributes<T extends HTMLLIElement = HTMLLIElement> extends HTMLElementAttributes<T> {
            readonly "value": DOMNumber;
        }
        interface HTMLLabelElementAttributes<T extends HTMLLabelElement = HTMLLabelElement> extends HTMLElementAttributes<T> {
            readonly "for": DOMString;
        }
        interface HTMLLegendElementAttributes<T extends HTMLLegendElement = HTMLLegendElement> extends HTMLElementAttributes<T> {

        }
        interface HTMLLinkElementAttributes<T extends HTMLLinkElement = HTMLLinkElement> extends HTMLElementAttributes<T> {
            readonly "as": DOMAs;
            readonly "crossorigin": DOMCrossOrigin;
            readonly "disabled": DOMBoolean;
            readonly "href": DOMString;
            readonly "hreflang": DOMString;
            readonly "imagesizes": DOMString;
            readonly "imagesrcset": DOMString;
            readonly "integrity": DOMString;
            readonly "media": DOMMedia;
            readonly "prefetch": DOMString;
            readonly "referrerpolicy": DOMReferrerPolicy;
            readonly "rel": DOMRel;
            readonly "sizes": DOMString;
            readonly "title": DOMString;
            readonly "type": DOMString;
        }
        interface HTMLMenuElementAttributes<T extends HTMLMenuElement = HTMLMenuElement> extends HTMLElementAttributes<T> {

        }
        interface HTMLMetaElementAttributes<T extends HTMLMetaElement = HTMLMetaElement> extends HTMLElementAttributes<T> {
            readonly "charset": DOMString;
            readonly "content": DOMString;
            readonly "http-equiv": DOMHttpEquiv;
            readonly "name": DOMString;
        }
        interface HTMLMeterElementAttributes<T extends HTMLMeterElement = HTMLMeterElement> extends HTMLElementAttributes<T> {
            readonly "value": DOMNumber;
            readonly "min": DOMNumber;
            readonly "max": DOMNumber;
            readonly "low": DOMNumber;
            readonly "high": DOMNumber;
            readonly "optimum": DOMNumber;
            readonly "form": DOMString;
        }
        interface HTMLModElementAttributes<T extends HTMLModElement = HTMLModElement> extends HTMLElementAttributes<T> {
            readonly "cite": DOMString;
            readonly "datetime": DOMString;
        }
        interface HTMLOListElementAttributes<T extends HTMLOListElement = HTMLOListElement> extends HTMLElementAttributes<T> {
            readonly "reversed": DOMBoolean;
            readonly "start": DOMNumber;
            readonly "type": DOMOListType;
        }
        interface HTMLObjectElementAttributes<T extends HTMLObjectElement = HTMLObjectElement> extends HTMLElementAttributes<T> {
            readonly "data": DOMString;
            readonly "form": DOMString;
            readonly "height": DOMNumber;
            readonly "name": DOMString;
            readonly "type": DOMString;
            readonly "usemap": DOMString;
            readonly "width": DOMNumber;
        }
        interface HTMLOptGroupElementAttributes<T extends HTMLOptGroupElement = HTMLOptGroupElement> extends HTMLElementAttributes<T> {
            readonly "disabled": DOMBoolean;
            readonly "label": DOMString;
        }
        interface HTMLOptionElementAttributes<T extends HTMLOptionElement = HTMLOptionElement> extends HTMLElementAttributes<T> {
            readonly "disabled": DOMBoolean;
            readonly "label": DOMString;
            readonly "selected": DOMBoolean;
            readonly "value": DOMString;
        }
        interface HTMLOutputElementAttributes<T extends HTMLOutputElement = HTMLOutputElement> extends HTMLElementAttributes<T> {
            readonly "for": DOMString;
            readonly "form": DOMString;
            readonly "name": DOMString;
        }
        interface HTMLParagraphElementAttributes<T extends HTMLParagraphElement = HTMLParagraphElement> extends HTMLElementAttributes<T> {

        }
        interface HTMLParamElementAttributes<T extends HTMLParamElement = HTMLParamElement> extends HTMLElementAttributes<T> {
            readonly "name": DOMString;
            readonly "value": DOMString;
        }
        interface HTMLPictureElementAttributes<T extends HTMLPictureElement = HTMLPictureElement> extends HTMLElementAttributes<T> {

        }
        interface HTMLPortalElementAttributes<T extends HTMLPortalElement = HTMLPortalElement> extends HTMLElementAttributes<T> {
            readonly "referrerpolicy": DOMReferrerPolicy;
            readonly "src": DOMString;
        }
        interface HTMLPreElementAttributes<T extends HTMLPreElement = HTMLPreElement> extends HTMLElementAttributes<T> {

        }
        interface HTMLProgressElementAttributes<T extends HTMLProgressElement = HTMLProgressElement> extends HTMLElementAttributes<T> {
            readonly "max": DOMNumber;
            readonly "value": DOMNumber;
        }
        interface HTMLQuoteElementAttributes<T extends HTMLQuoteElement = HTMLQuoteElement> extends HTMLElementAttributes<T> {
            readonly "cite": DOMString;
        }
        interface HTMLScriptElementAttributes<T extends HTMLScriptElement = HTMLScriptElement> extends HTMLElementAttributes<T> {
            readonly "async": DOMBoolean;
            readonly "crossorigin": DOMCrossOrigin;
            readonly "defer": DOMBoolean;
            readonly "integrity": DOMString;
            readonly "nomodule": DOMBoolean;
            readonly "nonce": DOMString;
            readonly "referrerpolicy": DOMReferrerPolicy;
            readonly "src": DOMString;
            readonly "type": DOMScriptType;
        }
        interface HTMLSelectElementAttributes<T extends HTMLSelectElement = HTMLSelectElement> extends HTMLElementAttributes<T>, FormElementExtraAttributes<T> {
            readonly "autocomplete": DOMAutoComplete;
            readonly "disabled": DOMBoolean;
            readonly "form": DOMString;
            readonly "multiple": DOMBoolean;
            readonly "name": DOMString;
            readonly "required": DOMBoolean;
            readonly "size": DOMNumber;
        }
        interface HTMLSlotElementAttributes<T extends HTMLSlotElement = HTMLSlotElement> extends HTMLElementAttributes<T> {
            readonly "name": DOMString;
        }
        interface HTMLSourceElementAttributes<T extends HTMLSourceElement = HTMLSourceElement> extends HTMLElementAttributes<T> {
            readonly "media": DOMString;
            readonly "sizes": DOMString;
            readonly "src": DOMString;
            readonly "srcset": DOMString;
            readonly "type": DOMString;
        }
        interface HTMLSpanElementAttributes<T extends HTMLSpanElement = HTMLSpanElement> extends HTMLElementAttributes<T> {

        }
        interface HTMLStyleElementAttributes<T extends HTMLStyleElement = HTMLStyleElement> extends HTMLElementAttributes<T> {
            readonly "type": DOMString;
            readonly "media": DOMString;
            readonly "nonce": DOMString;
            readonly "title": DOMString;
        }
        interface HTMLTableCaptionElementAttributes<T extends HTMLTableCaptionElement = HTMLTableCaptionElement> extends HTMLElementAttributes<T> {

        }
        interface HTMLTableCellElementAttributes<T extends HTMLTableCellElement = HTMLTableCellElement> extends HTMLElementAttributes<T> {
            readonly "colspan": DOMNumber;
            readonly "headers": DOMString;
            readonly "rowspan": DOMNumber;
        }
        interface HTMLTableColElementAttributes<T extends HTMLTableColElement = HTMLTableColElement> extends HTMLElementAttributes<T> {
            readonly "span": DOMNumber;
        }
        interface HTMLTableElementAttributes<T extends HTMLTableElement = HTMLTableElement> extends HTMLElementAttributes<T> {

        }
        interface HTMLTableRowElementAttributes<T extends HTMLTableRowElement = HTMLTableRowElement> extends HTMLElementAttributes<T> {

        }
        interface HTMLTableSectionElementAttributes<T extends HTMLTableSectionElement = HTMLTableSectionElement> extends HTMLElementAttributes<T> {

        }
        interface HTMLTemplateElementAttributes<T extends HTMLTemplateElement = HTMLTemplateElement> extends HTMLElementAttributes<T> {

        }
        interface HTMLTextAreaElementAttributes<T extends HTMLTextAreaElement = HTMLTextAreaElement> extends HTMLElementAttributes<T>, FormElementExtraAttributes<T> {
            readonly "autocomplete": DOMAutoComplete;
            readonly "cols": DOMNumber;
            readonly "disabled": DOMBoolean;
            readonly "form": DOMString;
            readonly "maxlength": DOMNumber;
            readonly "minlength": DOMNumber;
            readonly "name": DOMString;
            readonly "placeholder": DOMString;
            readonly "readonly": DOMBoolean;
            readonly "required": DOMBoolean;
            readonly "rows": DOMNumber;
            readonly "spellcheck": DOMBooleanString;
            readonly "wrap": DOMWrap;
        }
        interface HTMLTimeElementAttributes<T extends HTMLTimeElement = HTMLTimeElement> extends HTMLElementAttributes<T> {
            readonly "datetime": DOMString;
        }
        interface HTMLTitleElementAttributes<T extends HTMLTitleElement = HTMLTitleElement> extends HTMLElementAttributes<T> {

        }
        interface HTMLTrackElementAttributes<T extends HTMLTrackElement = HTMLTrackElement> extends HTMLElementAttributes<T> {
            readonly "default": DOMBoolean;
            readonly "kind": DOMKind;
            readonly "label": DOMString;
            readonly "src": DOMString;
            readonly "srclang": DOMString;
        }
        interface HTMLUListElementAttributes<T extends HTMLUListElement = HTMLUListElement> extends HTMLElementAttributes<T> {

        }
        interface HTMLVideoElementAttributes<T extends HTMLVideoElement = HTMLVideoElement> extends HTMLMediaElementAttributes<T> {
            readonly "autopictureinpicture": DOMBoolean;
            readonly "controlslist": DOMControlsList;
            readonly "disablepictureinpicture": DOMBoolean;
            readonly "playsinline": DOMBoolean;
            readonly "poster": DOMString;
            readonly "height": DOMNumber;
            readonly "width": DOMNumber;
        }
        interface HTMLMediaElementAttributes<T extends HTMLMediaElement = HTMLMediaElement> extends HTMLElementAttributes<T> {
            readonly "autoplay": DOMBoolean;
            readonly "controls": DOMBoolean;
            readonly "crossorigin": DOMCrossOrigin;
            readonly "disableremoteplayback": DOMBoolean;
            readonly "loop": DOMBoolean;
            readonly "muted": DOMBoolean;
            readonly "preload": DOMPreload;
            readonly "src": DOMString;
        }
        interface HTMLUnknownElementAttributes<T extends HTMLUnknownElement = HTMLUnknownElement> extends HTMLElementAttributes<T> {

        }
        interface MathMLElementAttributes<T extends MathMLElement = MathMLElement> extends ElementAttributes<T> {
            readonly "accent": DOMString;
            readonly "accentunder": DOMString;
            readonly "actiontype": DOMString;
            readonly "altimg": DOMString;
            readonly "altimg-height": DOMString;
            readonly "altimg-valign": DOMString;
            readonly "altimg-width": DOMString;
            readonly "alttext": DOMString;
            readonly "charalign": DOMString;
            readonly "close": DOMString;
            readonly "columnalign": DOMString;
            readonly "columnlines": DOMString;
            readonly "columnspacing": DOMString;
            readonly "columnspan": DOMString;
            readonly "crossout": DOMString;
            readonly "depth": DOMString;
            readonly "dir": DOMString;
            readonly "display": DOMString;
            readonly "displaystyle": DOMString;
            readonly "edge": DOMString;
            readonly "fence": DOMString;
            readonly "frame": DOMString;
            readonly "framespacing": DOMString;
            readonly "groupalign": DOMString;
            readonly "height": DOMString;
            readonly "href": DOMString;
            readonly "id": DOMString;
            readonly "indentalign": DOMString;
            readonly "indentalignfirst": DOMString;
            readonly "indentalignlast": DOMString;
            readonly "indentshift": DOMString;
            readonly "indentshiftfirst": DOMString;
            readonly "indentshiftlast": DOMString;
            readonly "indenttarget": DOMString;
            readonly "infixlinebreakstyle": DOMString;
            readonly "length": DOMString;
            readonly "linebreak": DOMString;
            readonly "linebreakmultchar": DOMString;
            readonly "linebreakstyle": DOMString;
            readonly "lineleading": DOMString;
            readonly "linethickness": DOMString;
            readonly "location": DOMString;
            readonly "longdivstyle": DOMString;
            readonly "lquote": DOMString;
            readonly "lspace": DOMString;
            readonly "mathbackground": DOMString;
            readonly "mathcolor": DOMString;
            readonly "mathsize": DOMString;
            readonly "mathvariant": DOMString;
            readonly "maxsize": DOMString;
            readonly "minsize": DOMString;
            readonly "movablelimits": DOMString;
            readonly "notation": DOMString;
            readonly "open": DOMString;
            readonly "position": DOMString;
            readonly "rowalign": DOMString;
            readonly "rowlines": DOMString;
            readonly "rowspacing": DOMString;
            readonly "rowspan": DOMString;
            readonly "rquote": DOMString;
            readonly "rspace": DOMString;
            readonly "scriptlevel": DOMString;
            readonly "scriptminsize": DOMString;
            readonly "scriptsizemultiplier": DOMString;
            readonly "selection": DOMString;
            readonly "separator": DOMString;
            readonly "separators": DOMString;
            readonly "shift": DOMString;
            readonly "stackalign": DOMString;
            readonly "stretchy": DOMString;
            readonly "symmetric": DOMString;
            readonly "voffset": DOMString;
            readonly "width": DOMString;
            readonly "xmlns": DOMString;
        }
        interface SVGElementAttributes<T extends SVGElement = SVGElement> extends ElementAttributes<T> {
            readonly "accent-height": DOMString;
            readonly "accumulate": DOMString;
            readonly "additive": DOMString;
            readonly "alignment-baseline": DOMString;
            readonly "alphabetic": DOMString;
            readonly "amplitude": DOMString;
            readonly "arabic-form": DOMString;
            readonly "ascent": DOMString;
            readonly "attributeName": DOMString;
            readonly "attributeType": DOMString;
            readonly "azimuth": DOMString;
            readonly "baseFrequency": DOMString;
            readonly "baseProfile": DOMString;
            readonly "baseline-shift": DOMString;
            readonly "bbox": DOMString;
            readonly "begin": DOMString;
            readonly "bias": DOMString;
            readonly "by": DOMString;
            readonly "calcMode": DOMString;
            readonly "cap-height": DOMString;
            readonly "class": DOMString | Readonly<AnyObject<boolean | null | undefined>>;
            readonly "clip": DOMString;
            readonly "clip-path": DOMString;
            readonly "clip-rule": DOMString;
            readonly "clipPathUnits": DOMString;
            readonly "color": DOMString;
            readonly "color-interpolation": DOMString;
            readonly "color-interpolation-filters": DOMString;
            readonly "color-profile": DOMString;
            readonly "color-rendering": DOMString;
            readonly "contentScriptType": DOMString;
            readonly "contentStyleType": DOMString;
            readonly "crossorigin": DOMString;
            readonly "cursor": DOMString;
            readonly "cx": DOMString;
            readonly "cy": DOMString;
            readonly "d": DOMString;
            readonly "decelerate": DOMString;
            readonly "descent": DOMString;
            readonly "diffuseConstant": DOMString;
            readonly "direction": DOMString;
            readonly "display": DOMString;
            readonly "divisor": DOMString;
            readonly "dominant-baseline": DOMString;
            readonly "dur": DOMString;
            readonly "dx": DOMString;
            readonly "dy": DOMString;
            readonly "edgeMode": DOMString;
            readonly "elevation": DOMString;
            readonly "enable-background": DOMString;
            readonly "end": DOMString;
            readonly "exponent": DOMString;
            readonly "fill": DOMString;
            readonly "fill-opacity": DOMString;
            readonly "fill-rule": DOMString;
            readonly "filter": DOMString;
            readonly "filterRes": DOMString;
            readonly "filterUnits": DOMString;
            readonly "flood-color": DOMString;
            readonly "flood-opacity": DOMString;
            readonly "font-family": DOMString;
            readonly "font-size": DOMString;
            readonly "font-size-adjust": DOMString;
            readonly "font-stretch": DOMString;
            readonly "font-style": DOMString;
            readonly "font-variant": DOMString;
            readonly "font-weight": DOMString;
            readonly "format": DOMString;
            readonly "fr": DOMString;
            readonly "from": DOMString;
            readonly "fx": DOMString;
            readonly "fy": DOMString;
            readonly "g1": DOMString;
            readonly "g2": DOMString;
            readonly "glyph-name": DOMString;
            readonly "glyph-orientation-horizontal": DOMString;
            readonly "glyph-orientation-vertical": DOMString;
            readonly "glyphRef": DOMString;
            readonly "gradientTransform": DOMString;
            readonly "gradientUnits": DOMString;
            readonly "hanging": DOMString;
            readonly "height": DOMString;
            readonly "horiz-adv-x": DOMString;
            readonly "horiz-origin-x": DOMString;
            readonly "href": DOMString;
            readonly "hreflang": DOMString;
            readonly "id": DOMString;
            readonly "ideographic": DOMString;
            readonly "image-rendering": DOMString;
            readonly "in": DOMString;
            readonly "in2": DOMString;
            readonly "intercept": DOMString;
            readonly "k": DOMString;
            readonly "k1": DOMString;
            readonly "k2": DOMString;
            readonly "k3": DOMString;
            readonly "k4": DOMString;
            readonly "kernelMatrix": DOMString;
            readonly "kernelUnitLength": DOMString;
            readonly "kerning": DOMString;
            readonly "keyPoints": DOMString;
            readonly "keySplines": DOMString;
            readonly "keyTimes": DOMString;
            readonly "lang": DOMString;
            readonly "lengthAdjust": DOMString;
            readonly "letter-spacing": DOMString;
            readonly "lighting-color": DOMString;
            readonly "limitingConeAngle": DOMString;
            readonly "local": DOMString;
            readonly "marker-end": DOMString;
            readonly "marker-mid": DOMString;
            readonly "marker-start": DOMString;
            readonly "markerHeight": DOMString;
            readonly "markerUnits": DOMString;
            readonly "markerWidth": DOMString;
            readonly "mask": DOMString;
            readonly "maskContentUnits": DOMString;
            readonly "maskUnits": DOMString;
            readonly "mathematical": DOMString;
            readonly "max": DOMString;
            readonly "media": DOMString;
            readonly "method": DOMString;
            readonly "min": DOMString;
            readonly "mode": DOMString;
            readonly "name": DOMString;
            readonly "numOctaves": DOMString;
            readonly "offset": DOMString;
            readonly "opacity": DOMString;
            readonly "operator": DOMString;
            readonly "order": DOMString;
            readonly "orient": DOMString;
            readonly "orientation": DOMString;
            readonly "origin": DOMString;
            readonly "overflow": DOMString;
            readonly "overline-position": DOMString;
            readonly "overline-thickness": DOMString;
            readonly "paint-order": DOMString;
            readonly "panose-1": DOMString;
            readonly "path": DOMString;
            readonly "pathLength": DOMString;
            readonly "patternContentUnits": DOMString;
            readonly "patternTransform": DOMString;
            readonly "patternUnits": DOMString;
            readonly "ping": DOMString;
            readonly "pointer-events": DOMString;
            readonly "points": DOMString;
            readonly "pointsAtX": DOMString;
            readonly "pointsAtY": DOMString;
            readonly "pointsAtZ": DOMString;
            readonly "preserveAlpha": DOMString;
            readonly "preserveAspectRatio": DOMString;
            readonly "primitiveUnits": DOMString;
            readonly "r": DOMString;
            readonly "radius": DOMString;
            readonly "refX": DOMString;
            readonly "refY": DOMString;
            readonly "referrerPolicy": DOMString;
            readonly "rel": DOMString;
            readonly "rendering-intent": DOMString;
            readonly "repeatCount": DOMString;
            readonly "repeatDur": DOMString;
            readonly "requiredExtensions": DOMString;
            readonly "requiredFeatures": DOMString;
            readonly "restart": DOMString;
            readonly "result": DOMString;
            readonly "rotate": DOMString;
            readonly "rx": DOMString;
            readonly "ry": DOMString;
            readonly "scale": DOMString;
            readonly "seed": DOMString;
            readonly "shape-rendering": DOMString;
            readonly "slope": DOMString;
            readonly "spacing": DOMString;
            readonly "specularConstant": DOMString;
            readonly "specularExponent": DOMString;
            readonly "speed": DOMString;
            readonly "spreadMethod": DOMString;
            readonly "startOffset": DOMString;
            readonly "stdDeviation": DOMString;
            readonly "stemh": DOMString;
            readonly "stemv": DOMString;
            readonly "stitchTiles": DOMString;
            readonly "stop-color": DOMString;
            readonly "stop-opacity": DOMString;
            readonly "strikethrough-position": DOMString;
            readonly "strikethrough-thickness": DOMString;
            readonly "string": DOMString;
            readonly "stroke": DOMString;
            readonly "stroke-dasharray": DOMString;
            readonly "stroke-dashoffset": DOMString;
            readonly "stroke-linecap": DOMString;
            readonly "stroke-linejoin": DOMString;
            readonly "stroke-miterlimit": DOMString;
            readonly "stroke-opacity": DOMString;
            readonly "stroke-width": DOMString;
            readonly "style": DOMString | Nullable<CSSStyleDeclaration>;
            readonly "surfaceScale": DOMString;
            readonly "systemLanguage": DOMString;
            readonly "tabindex": DOMString;
            readonly "tableValues": DOMString;
            readonly "target": DOMString;
            readonly "targetX": DOMString;
            readonly "targetY": DOMString;
            readonly "text-anchor": DOMString;
            readonly "text-decoration": DOMString;
            readonly "text-rendering": DOMString;
            readonly "textLength": DOMString;
            readonly "to": DOMString;
            readonly "transform": DOMString;
            readonly "transform-origin": DOMString;
            readonly "type": DOMString;
            readonly "u1": DOMString;
            readonly "u2": DOMString;
            readonly "underline-position": DOMString;
            readonly "underline-thickness": DOMString;
            readonly "unicode": DOMString;
            readonly "unicode-bidi": DOMString;
            readonly "unicode-range": DOMString;
            readonly "units-per-em": DOMString;
            readonly "v-alphabetic": DOMString;
            readonly "v-hanging": DOMString;
            readonly "v-ideographic": DOMString;
            readonly "v-mathematical": DOMString;
            readonly "values": DOMString;
            readonly "vector-effect": DOMString;
            readonly "version": DOMString;
            readonly "vert-adv-y": DOMString;
            readonly "vert-origin-x": DOMString;
            readonly "vert-origin-y": DOMString;
            readonly "viewBox": DOMString;
            readonly "viewTarget": DOMString;
            readonly "visibility": DOMString;
            readonly "width": DOMString;
            readonly "widths": DOMString;
            readonly "word-spacing": DOMString;
            readonly "writing-mode": DOMString;
            readonly "x": DOMString;
            readonly "x-height": DOMString;
            readonly "x1": DOMString;
            readonly "x2": DOMString;
            readonly "xChannelSelector": DOMString;
            readonly "xlink:actuate": DOMString;
            readonly "xlink:arcrole": DOMString;
            readonly "xlink:href": DOMString;
            readonly "xlink:role": DOMString;
            readonly "xlink:show": DOMString;
            readonly "xlink:title": DOMString;
            readonly "xlink:type": DOMString;
            readonly "xml:base": DOMString;
            readonly "xml:lang": DOMString;
            readonly "xml:space": DOMString;
            readonly "xmlns": DOMString;
            readonly "y": DOMString;
            readonly "y1": DOMString;
            readonly "y2": DOMString;
            readonly "yChannelSelector": DOMString;
            readonly "z": DOMString;
            readonly "zoomAndPan": DOMString;
        }
        type FormElements =
            | HTMLInputElement
            | HTMLSelectElement
            | HTMLTextAreaElement;
        interface FormNormalize<T extends FormElements> {
            readonly parse?: (this: T, value: any, data: any) => string;
            readonly serialize?: (this: T, value: string, data: any) => any;
        }
        interface FormValidator<T extends FormElements> {
            readonly pattern: RegExp | ((this: T, value: any, data: any) => boolean | Promise<boolean>);
            readonly message: string;
        }
        interface FormElementExtraAttributes<T extends FormElements = FormElements> {
            readonly "normalize": FormNormalize<T>;
            readonly "validator": FormValidator<T> | ReadonlyArray<FormValidator<T>>;
        }
        interface GlobalEventHandlersEventMap<T extends EventTarget = EventTarget> {
            readonly "abort": UIEvent<T>;
            readonly "animationcancel": AnimationEvent<T>;
            readonly "animationend": AnimationEvent<T>;
            readonly "animationiteration": AnimationEvent<T>;
            readonly "animationstart": AnimationEvent<T>;
            readonly "auxclick": MouseEvent<T>;
            readonly "beforeinput": InputEvent<T>;
            readonly "blur": FocusEvent<T>;
            readonly "cancel": Event<T>;
            readonly "canplay": Event<T>;
            readonly "canplaythrough": Event<T>;
            readonly "change": Event<T>;
            readonly "click": MouseEvent<T>;
            readonly "close": Event<T>;
            readonly "compositionend": CompositionEvent<T>;
            readonly "compositionstart": CompositionEvent<T>;
            readonly "compositionupdate": CompositionEvent<T>;
            readonly "contextmenu": MouseEvent<T>;
            readonly "cuechange": Event<T>;
            readonly "dblclick": MouseEvent<T>;
            readonly "drag": DragEvent<T>;
            readonly "dragend": DragEvent<T>;
            readonly "dragenter": DragEvent<T>;
            readonly "dragexit": Event<T>;
            readonly "dragleave": DragEvent<T>;
            readonly "dragover": DragEvent<T>;
            readonly "dragstart": DragEvent<T>;
            readonly "drop": DragEvent<T>;
            readonly "durationchange": Event<T>;
            readonly "emptied": Event<T>;
            readonly "ended": Event<T>;
            readonly "error": ErrorEvent<T>;
            readonly "focus": FocusEvent<T>;
            readonly "focusin": FocusEvent<T>;
            readonly "focusout": FocusEvent<T>;
            readonly "gotpointercapture": PointerEvent<T>;
            readonly "input": InputEvent<T>;
            readonly "invalid": Event<T>;
            readonly "keydown": KeyboardEvent<T>;
            readonly "keypress": KeyboardEvent<T>;
            readonly "keyup": KeyboardEvent<T>;
            readonly "load": Event<T>;
            readonly "loadeddata": Event<T>;
            readonly "loadedmetadata": Event<T>;
            readonly "loadstart": Event<T>;
            readonly "lostpointercapture": PointerEvent<T>;
            readonly "mousedown": MouseEvent<T>;
            readonly "mouseenter": MouseEvent<T>;
            readonly "mouseleave": MouseEvent<T>;
            readonly "mousemove": MouseEvent<T>;
            readonly "mouseout": MouseEvent<T>;
            readonly "mouseover": MouseEvent<T>;
            readonly "mouseup": MouseEvent<T>;
            readonly "pause": Event<T>;
            readonly "play": Event<T>;
            readonly "playing": Event<T>;
            readonly "pointercancel": PointerEvent<T>;
            readonly "pointerdown": PointerEvent<T>;
            readonly "pointerenter": PointerEvent<T>;
            readonly "pointerleave": PointerEvent<T>;
            readonly "pointermove": PointerEvent<T>;
            readonly "pointerout": PointerEvent<T>;
            readonly "pointerover": PointerEvent<T>;
            readonly "pointerup": PointerEvent<T>;
            readonly "progress": ProgressEvent<T>;
            readonly "ratechange": Event<T>;
            readonly "reset": Event<T>;
            readonly "resize": UIEvent<T>;
            readonly "scroll": Event<T>;
            readonly "securitypolicyviolation": SecurityPolicyViolationEvent<T>;
            readonly "seeked": Event<T>;
            readonly "seeking": Event<T>;
            readonly "select": Event<T>;
            readonly "selectionchange": Event<T>;
            readonly "selectstart": Event<T>;
            readonly "stalled": Event<T>;
            readonly "submit": Event<T>;
            readonly "suspend": Event<T>;
            readonly "timeupdate": Event<T>;
            readonly "toggle": Event<T>;
            readonly "touchcancel": TouchEvent<T>;
            readonly "touchend": TouchEvent<T>;
            readonly "touchmove": TouchEvent<T>;
            readonly "touchstart": TouchEvent<T>;
            readonly "transitioncancel": TransitionEvent<T>;
            readonly "transitionend": TransitionEvent<T>;
            readonly "transitionrun": TransitionEvent<T>;
            readonly "transitionstart": TransitionEvent<T>;
            readonly "volumechange": Event<T>;
            readonly "waiting": Event<T>;
            readonly "wheel": WheelEvent<T>;
        }
        interface WindowEventHandlersEventMap<T extends Window = Window> extends GlobalEventHandlersEventMap<T> {
            readonly "afterprint": Event<T>;
            readonly "beforeprint": Event<T>;
            readonly "beforeunload": BeforeUnloadEvent<T>;
            readonly "compassneedscalibration": Event<T>;
            readonly "devicemotion": DeviceMotionEvent<T>;
            readonly "deviceorientation": DeviceOrientationEvent<T>;
            readonly "deviceorientationabsolute": DeviceOrientationEvent<T>;
            readonly "gamepadconnected": GamepadEvent<T>;
            readonly "gamepaddisconnected": GamepadEvent<T>;
            readonly "hashchange": HashChangeEvent<T>;
            readonly "languagechange": Event<T>;
            readonly "message": MessageEvent<T>;
            readonly "messageerror": MessageEvent<T>;
            readonly "orientationchange": Event<T>;
            readonly "offline": Event<T>;
            readonly "online": Event<T>;
            readonly "pagehide": PageTransitionEvent<T>;
            readonly "pageshow": PageTransitionEvent<T>;
            readonly "popstate": PopStateEvent<T>;
            readonly "rejectionhandled": PromiseRejectionEvent<T>;
            readonly "storage": StorageEvent<T>;
            readonly "unhandledrejection": PromiseRejectionEvent<T>;
            readonly "unload": Event<T>;
            readonly "vrdisplayactivate": Event<T>;
            readonly "vrdisplayblur": Event<T>;
            readonly "vrdisplayconnect": Event<T>;
            readonly "vrdisplaydeactivate": Event<T>;
            readonly "vrdisplaydisconnect": Event<T>;
            readonly "vrdisplaypresentchange": Event<T>;
        }
        interface DocumentAndElementEventHandlersEventMap<T extends Document | Element = Document | Element> extends GlobalEventHandlersEventMap<T> {
            readonly "copy": ClipboardEvent<T>;
            readonly "cut": ClipboardEvent<T>;
            readonly "paste": ClipboardEvent<T>;
            readonly "fullscreenchange": Event<T>;
            readonly "fullscreenerror": Event<T>;
        }
        interface DocumentEventHandlersEventMap<T extends Document = Document> extends DocumentAndElementEventHandlersEventMap<T> {
            readonly "pointerlockchange": Event<T>;
            readonly "pointerlockerror": Event<T>;
            readonly "readystatechange": Event<T>;
            readonly "visibilitychange": Event<T>;
        }
        interface ElementEventHandlersEventMap<T extends Element = Element> extends DocumentAndElementEventHandlersEventMap<T> {

        }
        type ElementEventHandlersNames<T extends Element, P extends keyof ElementEventHandlersEventMap<T>> = EventHandlersNames<P>;
        interface HTMLElementTagNameMap {
            // Main root
            readonly "html": HTMLHtmlElementAttributes;
            // Document metadata
            readonly "base": HTMLBaseElementAttributes;
            readonly "head": HTMLHeadElementAttributes;
            readonly "link": HTMLLinkElementAttributes;
            readonly "meta": HTMLMetaElementAttributes;
            readonly "style": HTMLStyleElementAttributes;
            readonly "title": HTMLTitleElementAttributes;
            // Sectioning root
            readonly "body": HTMLBodyElementAttributes;
            // Content sectioning
            readonly "address": HTMLElementAttributes;
            readonly "article": HTMLElementAttributes;
            readonly "aside": HTMLElementAttributes;
            readonly "footer": HTMLElementAttributes;
            readonly "header": HTMLElementAttributes;
            readonly "h1": HTMLHeadingElementAttributes;
            readonly "h2": HTMLHeadingElementAttributes;
            readonly "h3": HTMLHeadingElementAttributes;
            readonly "h4": HTMLHeadingElementAttributes;
            readonly "h5": HTMLHeadingElementAttributes;
            readonly "h6": HTMLHeadingElementAttributes;
            readonly "main": HTMLElementAttributes;
            readonly "nav": HTMLElementAttributes;
            readonly "section": HTMLElementAttributes;
            // Text content
            readonly "blockquote": HTMLQuoteElementAttributes;
            readonly "dd": HTMLElementAttributes;
            readonly "div": HTMLDivElementAttributes;
            readonly "dl": HTMLDListElementAttributes;
            readonly "dt": HTMLElementAttributes;
            readonly "figcaption": HTMLElementAttributes;
            readonly "figure": HTMLElementAttributes;
            readonly "hr": HTMLHRElementAttributes;
            readonly "li": HTMLLIElementAttributes;
            readonly "ol": HTMLOListElementAttributes;
            readonly "p": HTMLParagraphElementAttributes;
            readonly "pre": HTMLPreElementAttributes;
            readonly "ul": HTMLUListElementAttributes;
            // Inline text semantics
            readonly "a": HTMLAnchorElementAttributes;
            readonly "abbr": HTMLElementAttributes;
            readonly "b": HTMLElementAttributes;
            readonly "bdi": HTMLElementAttributes;
            readonly "bdo": HTMLElementAttributes;
            readonly "br": HTMLBRElementAttributes;
            readonly "cite": HTMLElementAttributes;
            readonly "code": HTMLElementAttributes;
            readonly "data": HTMLDataElementAttributes;
            readonly "dfn": HTMLElementAttributes;
            readonly "em": HTMLElementAttributes;
            readonly "i": HTMLElementAttributes;
            readonly "kbd": HTMLElementAttributes;
            readonly "mark": HTMLElementAttributes;
            readonly "q": HTMLQuoteElementAttributes;
            readonly "rp": HTMLElementAttributes;
            readonly "rt": HTMLElementAttributes;
            readonly "ruby": HTMLElementAttributes;
            readonly "s": HTMLElementAttributes;
            readonly "samp": HTMLElementAttributes;
            readonly "small": HTMLElementAttributes;
            readonly "span": HTMLSpanElementAttributes;
            readonly "strong": HTMLElementAttributes;
            readonly "sub": HTMLElementAttributes;
            readonly "sup": HTMLElementAttributes;
            readonly "time": HTMLTimeElementAttributes;
            readonly "u": HTMLElementAttributes;
            readonly "var": HTMLElementAttributes;
            readonly "wbr": HTMLElementAttributes;
            // Image and multimedia
            readonly "area": HTMLAreaElementAttributes;
            readonly "audio": HTMLAudioElementAttributes;
            readonly "img": HTMLImageElementAttributes;
            readonly "track": HTMLTrackElementAttributes;
            readonly "video": HTMLVideoElementAttributes;
            // Embedded content
            readonly "embed": HTMLEmbedElementAttributes;
            readonly "iframe": HTMLIFrameElementAttributes;
            readonly "object": HTMLObjectElementAttributes;
            readonly "param": HTMLParamElementAttributes;
            readonly "picture": HTMLPictureElementAttributes;
            readonly "portal": HTMLPortalElementAttributes;
            readonly "source": HTMLSourceElementAttributes;
            // Scripting
            readonly "canvas": HTMLCanvasElementAttributes;
            readonly "noscript": HTMLElementAttributes;
            readonly "script": HTMLScriptElementAttributes;
            // Demarcating edits
            readonly "del": HTMLModElementAttributes;
            readonly "ins": HTMLModElementAttributes;
            // Table content
            readonly "caption": HTMLTableCaptionElementAttributes;
            readonly "col": HTMLTableColElementAttributes;
            readonly "colgroup": HTMLTableColElementAttributes;
            readonly "table": HTMLTableElementAttributes;
            readonly "tbody": HTMLTableSectionElementAttributes;
            readonly "td": HTMLTableCellElementAttributes;
            readonly "tfoot": HTMLTableSectionElementAttributes;
            readonly "th": HTMLTableCellElementAttributes;
            readonly "thead": HTMLTableSectionElementAttributes;
            readonly "tr": HTMLTableRowElementAttributes;
            // Forms
            readonly "button": HTMLButtonElementAttributes;
            readonly "datalist": HTMLDataListElementAttributes;
            readonly "fieldset": HTMLFieldSetElementAttributes;
            readonly "form": HTMLFormElementAttributes;
            readonly "input": HTMLInputElementAttributes;
            readonly "label": HTMLLabelElementAttributes;
            readonly "legend": HTMLLegendElementAttributes;
            readonly "meter": HTMLMeterElementAttributes;
            readonly "optgroup": HTMLOptGroupElementAttributes;
            readonly "option": HTMLOptionElementAttributes;
            readonly "output": HTMLOutputElementAttributes;
            readonly "progress": HTMLProgressElementAttributes;
            readonly "select": HTMLSelectElementAttributes;
            readonly "textarea": HTMLTextAreaElementAttributes;
            // Interactive elements
            readonly "details": HTMLDetailsElementAttributes;
            readonly "dialog": HTMLDialogElementAttributes;
            readonly "menu": HTMLMenuElementAttributes;
            readonly "summary": HTMLElementAttributes;
            // Web Components
            readonly "slot": HTMLSlotElementAttributes;
            readonly "template": HTMLTemplateElementAttributes;
        }
        interface MathMLElementTagNameMap {
            readonly "annotation": MathMLElementAttributes;
            readonly "annotation-xml": MathMLElementAttributes;
            readonly "maction": MathMLElementAttributes;
            readonly "maligngroup": MathMLElementAttributes;
            readonly "malignmark": MathMLElementAttributes;
            readonly "math": MathMLElementAttributes;
            readonly "menclose": MathMLElementAttributes;
            readonly "merror": MathMLElementAttributes;
            readonly "mfrac": MathMLElementAttributes;
            readonly "mi": MathMLElementAttributes;
            readonly "mlongdiv": MathMLElementAttributes;
            readonly "mmultiscripts": MathMLElementAttributes;
            readonly "mn": MathMLElementAttributes;
            readonly "mo": MathMLElementAttributes;
            readonly "mover": MathMLElementAttributes;
            readonly "mpadded": MathMLElementAttributes;
            readonly "mphantom": MathMLElementAttributes;
            readonly "mprescripts": MathMLElementAttributes;
            readonly "mroot": MathMLElementAttributes;
            readonly "mrow": MathMLElementAttributes;
            readonly "ms": MathMLElementAttributes;
            readonly "mscarries": MathMLElementAttributes;
            readonly "mscarry": MathMLElementAttributes;
            readonly "msgroup": MathMLElementAttributes;
            readonly "msline": MathMLElementAttributes;
            readonly "mspace": MathMLElementAttributes;
            readonly "msqrt": MathMLElementAttributes;
            readonly "msrow": MathMLElementAttributes;
            readonly "mstack": MathMLElementAttributes;
            readonly "mstyle": MathMLElementAttributes;
            readonly "msub": MathMLElementAttributes;
            readonly "msubsup": MathMLElementAttributes;
            readonly "msup": MathMLElementAttributes;
            readonly "mtable": MathMLElementAttributes;
            readonly "mtd": MathMLElementAttributes;
            readonly "mtext": MathMLElementAttributes;
            readonly "mtr": MathMLElementAttributes;
            readonly "munder": MathMLElementAttributes;
            readonly "munderover": MathMLElementAttributes;
            readonly "none": MathMLElementAttributes;
            readonly "semantics": MathMLElementAttributes;
        }
        interface SVGElementTagNameMap {
            readonly "a": SVGElementAttributes;
            readonly "animate": SVGElementAttributes;
            readonly "animateMotion": SVGElementAttributes;
            readonly "animateTransform": SVGElementAttributes;
            readonly "circle": SVGElementAttributes;
            readonly "clipPath": SVGElementAttributes;
            readonly "defs": SVGElementAttributes;
            readonly "desc": SVGElementAttributes;
            readonly "discard": SVGElementAttributes;
            readonly "ellipse": SVGElementAttributes;
            readonly "feBlend": SVGElementAttributes;
            readonly "feColorMatrix": SVGElementAttributes;
            readonly "feComponentTransfer": SVGElementAttributes;
            readonly "feComposite": SVGElementAttributes;
            readonly "feConvolveMatrix": SVGElementAttributes;
            readonly "feDiffuseLighting": SVGElementAttributes;
            readonly "feDisplacementMap": SVGElementAttributes;
            readonly "feDistantLight": SVGElementAttributes;
            readonly "feDropShadow": SVGElementAttributes;
            readonly "feFlood": SVGElementAttributes;
            readonly "feFuncA": SVGElementAttributes;
            readonly "feFuncB": SVGElementAttributes;
            readonly "feFuncG": SVGElementAttributes;
            readonly "feFuncR": SVGElementAttributes;
            readonly "feGaussianBlur": SVGElementAttributes;
            readonly "feImage": SVGElementAttributes;
            readonly "feMerge": SVGElementAttributes;
            readonly "feMergeNode": SVGElementAttributes;
            readonly "feMorphology": SVGElementAttributes;
            readonly "feOffset": SVGElementAttributes;
            readonly "fePointLight": SVGElementAttributes;
            readonly "feSpecularLighting": SVGElementAttributes;
            readonly "feSpotLight": SVGElementAttributes;
            readonly "feTile": SVGElementAttributes;
            readonly "feTurbulence": SVGElementAttributes;
            readonly "filter": SVGElementAttributes;
            readonly "foreignObject": SVGElementAttributes;
            readonly "g": SVGElementAttributes;
            readonly "hatch": SVGElementAttributes;
            readonly "hatchpath": SVGElementAttributes;
            readonly "image": SVGElementAttributes;
            readonly "line": SVGElementAttributes;
            readonly "linearGradient": SVGElementAttributes;
            readonly "marker": SVGElementAttributes;
            readonly "mask": SVGElementAttributes;
            readonly "metadata": SVGElementAttributes;
            readonly "mpath": SVGElementAttributes;
            readonly "path": SVGElementAttributes;
            readonly "pattern": SVGElementAttributes;
            readonly "polygon": SVGElementAttributes;
            readonly "polyline": SVGElementAttributes;
            readonly "radialGradient": SVGElementAttributes;
            readonly "rect": SVGElementAttributes;
            readonly "script": SVGElementAttributes;
            readonly "set": SVGElementAttributes;
            readonly "stop": SVGElementAttributes;
            readonly "style": SVGElementAttributes;
            readonly "svg": SVGElementAttributes;
            readonly "switch": SVGElementAttributes;
            readonly "symbol": SVGElementAttributes;
            readonly "text": SVGElementAttributes;
            readonly "textPath": SVGElementAttributes;
            readonly "title": SVGElementAttributes;
            readonly "tspan": SVGElementAttributes;
            readonly "use": SVGElementAttributes;
            readonly "view": SVGElementAttributes;
        }
        type SelfClosingElementTagNames =
            | "area"
            | "base"
            | "br"
            | "col"
            | "embed"
            | "hr"
            | "img"
            | "input"
            | "link"
            | "meta"
            | "param"
            | "source"
            | "track"
            | "wbr";
        type ComponentProps<T extends Component<any>> = T extends Component<infer P> ? P : never;
        type HTMLElementProps<T extends keyof HTMLElementTagNameMap> = Nullable<HTMLElementTagNameMap[T]>;
        type MathMLElementProps<T extends keyof MathMLElementTagNameMap> = Nullable<MathMLElementTagNameMap[T]>;
        type SVGElementProps<T extends keyof SVGElementTagNameMap> = Nullable<SVGElementTagNameMap[T]>;
        type ElementChildrenProps<T extends string> = T extends SelfClosingElementTagNames ? MixObject : ElementChildrenAttributes;
        interface CSSStyleDeclaration {
            readonly "alignContent": DOMString;
            readonly "alignItems": DOMString;
            readonly "alignSelf": DOMString;
            readonly "all": DOMString;
            readonly "animation": DOMString;
            readonly "animationDelay": DOMString;
            readonly "animationDirection": DOMString;
            readonly "animationDuration": DOMString;
            readonly "animationFillMode": DOMString;
            readonly "animationIterationCount": DOMString;
            readonly "animationName": DOMString;
            readonly "animationPlayState": DOMString;
            readonly "animationTimingFunction": DOMString;
            readonly "backfaceVisibility": DOMString;
            readonly "background": DOMString;
            readonly "backgroundAttachment": DOMString;
            readonly "backgroundBlendMode": DOMString;
            readonly "backgroundClip": DOMString;
            readonly "backgroundColor": DOMString;
            readonly "backgroundImage": DOMString;
            readonly "backgroundOrigin": DOMString;
            readonly "backgroundPosition": DOMString;
            readonly "backgroundRepeat": DOMString;
            readonly "backgroundSize": DOMString;
            readonly "border": DOMString;
            readonly "borderBottom": DOMString;
            readonly "borderBottomColor": DOMString;
            readonly "borderBottomLeftRadius": DOMString;
            readonly "borderBottomRightRadius": DOMString;
            readonly "borderBottomStyle": DOMString;
            readonly "borderBottomWidth": DOMString;
            readonly "borderCollapse": DOMString;
            readonly "borderColor": DOMString;
            readonly "borderImage": DOMString;
            readonly "borderImageOutset": DOMString;
            readonly "borderImageRepeat": DOMString;
            readonly "borderImageSlice": DOMString;
            readonly "borderImageSource": DOMString;
            readonly "borderImageWidth": DOMString;
            readonly "borderLeft": DOMString;
            readonly "borderLeftColor": DOMString;
            readonly "borderLeftStyle": DOMString;
            readonly "borderLeftWidth": DOMString;
            readonly "borderRadius": DOMString;
            readonly "borderRight": DOMString;
            readonly "borderRightColor": DOMString;
            readonly "borderRightStyle": DOMString;
            readonly "borderRightWidth": DOMString;
            readonly "borderSpacing": DOMString;
            readonly "borderStyle": DOMString;
            readonly "borderTop": DOMString;
            readonly "borderTopColor": DOMString;
            readonly "borderTopLeftRadius": DOMString;
            readonly "borderTopRightRadius": DOMString;
            readonly "borderTopStyle": DOMString;
            readonly "borderTopWidth": DOMString;
            readonly "borderWidth": DOMString;
            readonly "bottom": DOMString;
            readonly "boxDecorationBreak": DOMString;
            readonly "boxShadow": DOMString;
            readonly "boxSizing": DOMString;
            readonly "breakAfter": DOMString;
            readonly "breakBefore": DOMString;
            readonly "breakInside": DOMString;
            readonly "captionSide": DOMString;
            readonly "caretColor": DOMString;
            readonly "clear": DOMString;
            readonly "clip": DOMString;
            readonly "clipPath": DOMString;
            readonly "color": DOMString;
            readonly "columnCount": DOMString;
            readonly "columnFill": DOMString;
            readonly "columnGap": DOMString;
            readonly "columnRule": DOMString;
            readonly "columnRuleColor": DOMString;
            readonly "columnRuleStyle": DOMString;
            readonly "columnRuleWidth": DOMString;
            readonly "columnSpan": DOMString;
            readonly "columnWidth": DOMString;
            readonly "columns": DOMString;
            readonly "content": DOMString;
            readonly "counterIncrement": DOMString;
            readonly "counterReset": DOMString;
            readonly "cursor": DOMString;
            readonly "direction": DOMString;
            readonly "display": DOMString;
            readonly "emptyCells": DOMString;
            readonly "filter": DOMString;
            readonly "flex": DOMString;
            readonly "flexBasis": DOMString;
            readonly "flexDirection": DOMString;
            readonly "flexFlow": DOMString;
            readonly "flexGrow": DOMString;
            readonly "flexShrink": DOMString;
            readonly "flexWrap": DOMString;
            readonly "float": DOMString;
            readonly "font": DOMString;
            readonly "fontFamily": DOMString;
            readonly "fontFeatureSettings": DOMString;
            readonly "fontKerning": DOMString;
            readonly "fontSize": DOMString;
            readonly "fontSizeAdjust": DOMString;
            readonly "fontStretch": DOMString;
            readonly "fontStyle": DOMString;
            readonly "fontVariant": DOMString;
            readonly "fontVariantCaps": DOMString;
            readonly "fontWeight": DOMString;
            readonly "grid": DOMString;
            readonly "gridArea": DOMString;
            readonly "gridAutoColumns": DOMString;
            readonly "gridAutoFlow": DOMString;
            readonly "gridAutoRows": DOMString;
            readonly "gridColumn": DOMString;
            readonly "gridColumnEnd": DOMString;
            readonly "gridColumnGap": DOMString;
            readonly "gridColumnStart": DOMString;
            readonly "gridGap": DOMString;
            readonly "gridRow": DOMString;
            readonly "gridRowEnd": DOMString;
            readonly "gridRowGap": DOMString;
            readonly "gridRowStart": DOMString;
            readonly "gridTemplate": DOMString;
            readonly "gridTemplateAreas": DOMString;
            readonly "gridTemplateColumns": DOMString;
            readonly "gridTemplateRows": DOMString;
            readonly "hangingPunctuation": DOMString;
            readonly "height": DOMString;
            readonly "hyphens": DOMString;
            readonly "isolation": DOMString;
            readonly "justifyContent": DOMString;
            readonly "left": DOMString;
            readonly "letterSpacing": DOMString;
            readonly "lineHeight": DOMString;
            readonly "listStyle": DOMString;
            readonly "listStyleImage": DOMString;
            readonly "listStylePosition": DOMString;
            readonly "listStyleType": DOMString;
            readonly "margin": DOMString;
            readonly "marginBottom": DOMString;
            readonly "marginLeft": DOMString;
            readonly "marginRight": DOMString;
            readonly "marginTop": DOMString;
            readonly "maxHeight": DOMString;
            readonly "maxWidth": DOMString;
            readonly "minHeight": DOMString;
            readonly "minWidth": DOMString;
            readonly "mixBlendMode": DOMString;
            readonly "objectFit": DOMString;
            readonly "objectPosition": DOMString;
            readonly "opacity": DOMString;
            readonly "order": DOMString;
            readonly "outline": DOMString;
            readonly "outlineColor": DOMString;
            readonly "outlineOffset": DOMString;
            readonly "outlineStyle": DOMString;
            readonly "outlineWidth": DOMString;
            readonly "overflow": DOMString;
            readonly "overflowX": DOMString;
            readonly "overflowY": DOMString;
            readonly "padding": DOMString;
            readonly "paddingBottom": DOMString;
            readonly "paddingLeft": DOMString;
            readonly "paddingRight": DOMString;
            readonly "paddingTop": DOMString;
            readonly "pageBreakAfter": DOMString;
            readonly "pageBreakBefore": DOMString;
            readonly "pageBreakInside": DOMString;
            readonly "perspective": DOMString;
            readonly "perspectiveOrigin": DOMString;
            readonly "pointerEvents": DOMString;
            readonly "position": DOMString;
            readonly "quotes": DOMString;
            readonly "resize": DOMString;
            readonly "right": DOMString;
            readonly "scrollBehavior": DOMString;
            readonly "tabSize": DOMString;
            readonly "tableLayout": DOMString;
            readonly "textAlign": DOMString;
            readonly "textAlignLast": DOMString;
            readonly "textDecoration": DOMString;
            readonly "textDecorationColor": DOMString;
            readonly "textDecorationLine": DOMString;
            readonly "textDecorationStyle": DOMString;
            readonly "textIndent": DOMString;
            readonly "textJustify": DOMString;
            readonly "textOverflow": DOMString;
            readonly "textShadow": DOMString;
            readonly "textTransform": DOMString;
            readonly "top": DOMString;
            readonly "transform": DOMString;
            readonly "transformOrigin": DOMString;
            readonly "transformStyle": DOMString;
            readonly "transition": DOMString;
            readonly "transitionDelay": DOMString;
            readonly "transitionDuration": DOMString;
            readonly "transitionProperty": DOMString;
            readonly "transitionTimingFunction": DOMString;
            readonly "unicodeBidi": DOMString;
            readonly "userSelect": DOMString;
            readonly "verticalAlign": DOMString;
            readonly "visibility": DOMString;
            readonly "whiteSpace": DOMString;
            readonly "width": DOMString;
            readonly "wordBreak": DOMString;
            readonly "wordSpacing": DOMString;
            readonly "wordWrap": DOMString;
            readonly "writingMode": DOMString;
            readonly "zIndex": DOMString;
        }
        interface DOMRect {
            readonly bottom: number;
            readonly height: number;
            readonly left: number;
            readonly right: number;
            readonly top: number;
            readonly width: number;
            readonly x: number;
            readonly y: number;
        }
        type DOMShape =
            | "default"
            | "rect"
            | "circle"
            | "poly";
        type DOMButtonType =
            | "button"
            | "submit"
            | "reset";
        type DOMTarget =
            | "_self"
            | "_blank"
            | "_parent"
            | "_top"
            | DOMString;
        type DOMSandbox =
            | "allow-downloads-without-user-activation"
            | "allow-downloads"
            | "allow-forms"
            | "allow-modals"
            | "allow-orientation-lock"
            | "allow-pointer-lock"
            | "allow-popups"
            | "allow-popups-to-escape-sandbox"
            | "allow-presentation"
            | "allow-same-origin"
            | "allow-scripts"
            | "allow-storage-access-by-user-activation"
            | "allow-top-navigation"
            | "allow-top-navigation-by-user-activation"
            | DOMString;
        type DOMLoading =
            | "eager"
            | "lazy";
        type DOMDecoding =
            | "sync"
            | "async"
            | "auto";
        type DOMMethod =
            | "get"
            | "post"
            | "dialog";
        type DOMEnctype =
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | "text/plain";
        type DOMInputType =
            | "button"
            | "checkbox"
            | "color"
            | "date"
            | "datetime-local"
            | "email"
            | "file"
            | "hidden"
            | "image"
            | "month"
            | "number"
            | "password"
            | "radio"
            | "range"
            | "reset"
            | "search"
            | "submit"
            | "tel"
            | "text"
            | "time"
            | "url"
            | "week";
        type DOMRel =
            | "alternate"
            | "author"
            | "bookmark"
            | "canonical"
            | "dns-prefetch"
            | "external"
            | "help"
            | "icon"
            | "import"
            | "license"
            | "manifest"
            | "modulepreload"
            | "next"
            | "nofollow"
            | "noopener"
            | "noreferrer"
            | "opener"
            | "pingback"
            | "preconnect"
            | "prefetch"
            | "preload"
            | "prerender"
            | "prev"
            | "search"
            | "shortlink"
            | "stylesheet"
            | "tag";
        type DOMMedia =
            | "print"
            | "screen"
            | "aural"
            | "braille"
            | DOMString;
        type DOMAs =
            | "audio"
            | "document"
            | "embed"
            | "fetch"
            | "font"
            | "image"
            | "object"
            | "script"
            | "style"
            | "track"
            | "video"
            | "worker";
        type DOMHttpEquiv =
            | "content-security-policy"
            | "content-type"
            | "default-style"
            | "x-ua-compatible"
            | "refresh";
        type DOMOListType =
            | 1
            | "a"
            | "A"
            | "i"
            | "I";
        type DOMScriptType =
            | "module"
            | "text/javascript"
            | DOMString;
        type DOMReferrerPolicy =
            | "no-referrer"
            | "no-referrer-when-downgrade"
            | "origin"
            | "origin-when-cross-origin"
            | "same-origin"
            | "strict-origin"
            | "strict-origin-when-cross-origin"
            | "unsafe-url";
        type DOMWrap =
            | "hard"
            | "soft";
        type DOMAutoComplete =
            | "off"
            | "on";
        type DOMKind =
            | "subtitles"
            | "captions"
            | "descriptions"
            | "chapters"
            | "metadata";
        type DOMPreload =
            | "none"
            | "metadata"
            | "auto";
        type DOMCrossOrigin =
            | "anonymous"
            | "use-credentials";
        type DOMControlsList =
            | "nodownload"
            | "nofullscreen"
            | "noremoteplayback";
        type DOMTranslate =
            | "yes"
            | "no";
        type DOMInputMode =
            | "none"
            | "text"
            | "decimal"
            | "numeric"
            | "tel"
            | "search"
            | "email"
            | "url";
        type DOMDir =
            | "auto"
            | "ltr"
            | "rtl";
        type DOMAutoCapitalize =
            | "none"
            | "sentences"
            | "words"
            | "characters";
        type DOMBooleanString =
            | "true"
            | "false"
            | DOMBoolean;
        type DOMDirection =
            | "forward"
            | "backward"
            | "none";
        type DOMAriaAutoComplete =
            | "none"
            | "inline"
            | "list"
            | "both";
        type DOMAriaChecked =
            | "mixed"
            | DOMBoolean;
        type DOMAriaCurrent =
            | "page"
            | "step"
            | "location"
            | "date"
            | "time"
            | DOMBoolean;
        type DOMAriaHasPopup =
            | "menu"
            | "listbox"
            | "tree"
            | "grid"
            | "dialog"
            | DOMBoolean;
        type DOMAriaLive =
            | "off"
            | "assertive"
            | "polite";
        type DOMAriaOrientation =
            | "horizontal"
            | "vertical";
        type DOMAriaPressed =
            | "mixed"
            | DOMBoolean;
        type DOMAriaRelevant =
            | "additions"
            | "additions removals"
            | "additions text"
            | "all"
            | "removals"
            | "removals additions"
            | "removals text"
            | "text"
            | "text additions"
            | "text removals";
        type DOMAriaSort =
            | "none"
            | "ascending"
            | "descending"
            | "other";
        type DOMAriaRole =
            | "alert"
            | "application"
            | "article"
            | "banner"
            | "button"
            | "cell"
            | "checkbox"
            | "comment"
            | "complementary"
            | "contentinfo"
            | "dialog"
            | "document"
            | "feed"
            | "figure"
            | "form"
            | "grid"
            | "gridcell"
            | "heading"
            | "img"
            | "list"
            | "listbox"
            | "listitem"
            | "main"
            | "mark"
            | "navigation"
            | "region"
            | "row"
            | "rowgroup"
            | "search"
            | "suggestion"
            | "switch"
            | "tab"
            | "table"
            | "tabpanel"
            | "textbox"
            | "timer";
        type DOMBoolean = boolean & MixObject;
        type DOMString = string & MixObject;
        type DOMNumber = number & MixObject;
    }
}
