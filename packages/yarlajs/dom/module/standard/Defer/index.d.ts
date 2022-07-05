/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

export default Defer;

declare const Defer: DeferConstructor;

declare interface DeferConstructor extends Yarla.Proto<Yarla.dom.Defer> {
    init(): Yarla.dom.Defer;
}
