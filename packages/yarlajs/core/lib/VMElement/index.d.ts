/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

export default VMElement;

declare const VMElement: VMElementConstructor;

declare interface VMElementConstructor extends Yarla.Proto<Yarla.VMElement<any>> {
    init<T>(type: T, props?: any, ...children: any[]): Yarla.VMElement<T>;
}
