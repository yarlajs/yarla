/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

export default SessionStorage;

declare const SessionStorage: SessionStorageConstructor;

declare interface SessionStorageConstructor extends Yarla.Proto<Yarla.koa.SessionStorage> {
    init(opts: Yarla.koa.SessionStorageInitializationOptions): Yarla.koa.SessionStorage;
}
