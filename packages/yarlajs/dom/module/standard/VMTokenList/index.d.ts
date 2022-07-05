/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

export default VMTokenList;

declare const VMTokenList: VMTokenListConstructor;

declare interface VMTokenListConstructor extends Yarla.Proto<Yarla.dom.VMTokenList> {
    init(element: Element): Yarla.dom.VMTokenList;
}
