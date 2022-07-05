/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

export default ReferenceCollection;

declare const ReferenceCollection: ReferenceCollectionConstructor;

declare interface ReferenceCollectionConstructor extends Yarla.Proto<Yarla.dom.ReferenceCollection> {
    init(): Yarla.dom.ReferenceCollection;
}
