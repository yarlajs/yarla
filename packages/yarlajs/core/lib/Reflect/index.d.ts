/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

export default Reflect;

declare const Reflect: Reflect;

declare interface Reflect {
    readonly BASE: Yarla.NoParametersFunc<never>;
    readonly expr: PropertyExprMap;
    has(target: object, expr: Yarla.PropertyExpr): boolean;
    get(target: object, expr: Yarla.PropertyExpr): any;
    set<T>(target: object, expr: Yarla.PropertyExpr, value: T): T;
    delete(target: object): boolean;
    getInternal(target: object, propertyKey?: string | symbol | number): any;
    hasInternal(target: object, propertyKey?: string | symbol | number): boolean;
    defineInternal<T extends object>(target: T, value: any, propertyKey?: string | symbol | number): T;
    getMetadata(target: object, metadataKey?: string | symbol | number): any;
    hasMetadata(target: object, metadataKey?: string | symbol | number): boolean;
    defineMetadata<T extends object>(target: T, value: any, metadataKey?: string | symbol | number): T;
    once<T extends object, R>(target: T, expr: Yarla.PropertyExpr, initialize: (this: T) => R): R;
    construct<T>(constructor: Yarla.Proto<T>, internalValue: any): T;
    initTyped<T extends ArrayLike<any>>(target: T, bit?: number): T;
    callSuper<T extends object>(target: T, ...argv: any[]): T;
}

declare interface PropertyExprMap {
    readonly IE: ReadonlyArray<PropertyKey>;
    readonly IP: ReadonlyArray<PropertyKey>;
    readonly UA: ReadonlyArray<PropertyKey>;
    readonly BODY: ReadonlyArray<PropertyKey>;
    readonly HOST: ReadonlyArray<PropertyKey>;
    readonly QUEUE: ReadonlyArray<PropertyKey>;
    readonly RANGE: ReadonlyArray<PropertyKey>;
    readonly STATE: ReadonlyArray<PropertyKey>;
    readonly THROW: ReadonlyArray<PropertyKey>;
    readonly VALUE: ReadonlyArray<PropertyKey>;
    readonly LENGTH: ReadonlyArray<PropertyKey>;
    readonly METHOD: ReadonlyArray<PropertyKey>;
    readonly ORIGIN: ReadonlyArray<PropertyKey>;
    readonly SEARCH: ReadonlyArray<PropertyKey>;
    readonly COOKIES: ReadonlyArray<PropertyKey>;
    readonly HEADERS: ReadonlyArray<PropertyKey>;
    readonly REFERER: ReadonlyArray<PropertyKey>;
    readonly VERSION: ReadonlyArray<PropertyKey>;
    readonly BOUNDARY: ReadonlyArray<PropertyKey>;
    readonly METADATA: ReadonlyArray<PropertyKey>;
    readonly MIMETYPE: ReadonlyArray<PropertyKey>;
    readonly PATHNAME: ReadonlyArray<PropertyKey>;
    readonly PROTOCOL: ReadonlyArray<PropertyKey>;
    readonly ENCODING: ReadonlyArray<PropertyKey>;
    readonly LANGUAGE: ReadonlyArray<PropertyKey>;
    readonly INTERNAL: ReadonlyArray<PropertyKey>;
    readonly RENDERER: ReadonlyArray<PropertyKey>;
    readonly VALIDATE: ReadonlyArray<PropertyKey>;
    readonly INSTANCE: ReadonlyArray<PropertyKey>;
    readonly CLASS_MANAGER: ReadonlyArray<PropertyKey>;
    readonly EVENT_CAPTURE: ReadonlyArray<PropertyKey>;
    readonly EVENT_GENERAL: ReadonlyArray<PropertyKey>;
    readonly EVENT_OBSERVE: ReadonlyArray<PropertyKey>;
    readonly STOP_AFTERWARD: ReadonlyArray<PropertyKey>;
    readonly STOP_IMMEDIATE: ReadonlyArray<PropertyKey>;
    readonly TICK_PREVENTED: ReadonlyArray<PropertyKey>;
}
