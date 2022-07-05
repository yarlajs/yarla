/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

export default VMFragment;

declare const VMFragment: VMFragmentConstructor;

declare interface VMFragmentConstructor extends Yarla.Proto<Yarla.dom.VMFragment> {
    init(): Yarla.dom.VMFragment;
}
