/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

export default function <T extends Yarla.BasicFunc>(task: T, wait: number, opts?: Options): T & Yarla.Cancelable;

declare interface Options {
    readonly leading?: false;
    readonly trailing?: false;
}
