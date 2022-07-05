/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

export default TokenGenerator;

declare const TokenGenerator: TokenGeneratorConstructor;

declare interface TokenGeneratorConstructor extends Yarla.Proto<Yarla.koa.TokenGenerator> {
    init(opts: Yarla.koa.TokenGeneratorInitializationOptions): Yarla.koa.TokenGenerator;
}
