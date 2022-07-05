/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

export default SituationCollection;

declare const SituationCollection: SituationCollectionConstructor;

declare interface SituationCollectionConstructor extends Yarla.Proto<Yarla.dom.SituationCollection> {
    init(): Yarla.dom.SituationCollection;
}
