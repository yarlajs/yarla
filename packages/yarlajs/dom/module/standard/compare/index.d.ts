/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

export default function (properties1: Readonly<Record<string, any>>, properties2: Readonly<Record<string, any>>): CompareInformation;

declare interface CompareInformation {
    readonly added: Readonly<Record<string, any>>;
    readonly deleted: Readonly<Record<string, any>>;
    readonly updated: Readonly<Record<string, readonly [any, any]>>;
}
