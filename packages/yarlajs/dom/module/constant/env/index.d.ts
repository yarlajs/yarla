/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

export default _;

declare const _: Env;

declare interface Env {
    readonly BEHAVIOR: boolean;
    readonly PASSIVED: boolean;
    readonly namespaceURI: {
        readonly SVG: "http://www.w3.org/2000/svg";
        readonly MathML: "http://www.w3.org/1998/Math/MathML";
    };
}
