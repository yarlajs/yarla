/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

export default EffectionCollection;

declare const EffectionCollection: EffectionCollectionConstructor;

declare interface EffectionCollectionConstructor extends Yarla.Proto<Yarla.dom.EffectionCollection> {
    init(): Yarla.dom.EffectionCollection;
}
