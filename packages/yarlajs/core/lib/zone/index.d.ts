/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

export default _;

declare const _: Zone;

declare interface Zone {
    readonly target: Yarla.Hook;
    readonly currentTarget: Yarla.Hook | null;
    mount(application: Yarla.Application, ignoreUpdate?: boolean): Yarla.Application;
    scope<T extends Yarla.Hook, P extends any[], R>(hook: T, processor: (this: T, ...argv: P) => R, argv: P): R;
    nextTick<T extends Yarla.NoReturnsFunc>(task: T, ...argv: Yarla.Parameters<T>): Yarla.Cancelable;
    forceUpdate(): void;
}
