/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

export default RefObject;

declare const RefObject: RefObjectConstructor;

declare interface RefObjectConstructor extends Yarla.Proto<Yarla.RefObject<any>> {
    init<T>(target?: T): Yarla.RefObject<T>;
}
