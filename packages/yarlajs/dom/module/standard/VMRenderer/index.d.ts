/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

export default VMRenderer;

declare const VMRenderer: VMRendererConstructor;

declare interface VMRendererConstructor extends Yarla.Proto<Yarla.dom.VMRenderer> {
    readonly NONE: number;
    readonly PHASE_CREATING: number;
    readonly PHASE_UPDATING: number;
    init(parent: Yarla.dom.VMRenderer | null, VMNode: Yarla.VMNode, defer: Yarla.dom.Defer): Yarla.dom.VMRenderer;
}
