/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

export default MemorableCollection;

declare const MemorableCollection: MemorableCollectionConstructor;

declare interface MemorableCollectionConstructor extends Yarla.Proto<Yarla.dom.MemorableCollection> {
    init(): Yarla.dom.MemorableCollection;
}
