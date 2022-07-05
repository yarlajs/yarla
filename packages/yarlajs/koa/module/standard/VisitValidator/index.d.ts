/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

export default VisitValidator;

declare const VisitValidator: VisitValidatorConstructor;

declare interface VisitValidatorConstructor extends Yarla.Proto<Yarla.koa.VisitValidator> {
    init(opts: Yarla.koa.VisitValidatorInitializationOptions): Yarla.koa.VisitValidator;
}
