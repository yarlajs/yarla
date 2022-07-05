/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

export default Session;

declare const Session: SessionConstructor;

declare interface SessionConstructor extends Yarla.Proto<Yarla.koa.Session> {
    init(id: string, storage: Yarla.koa.SessionStorage): Yarla.koa.Session;
}
