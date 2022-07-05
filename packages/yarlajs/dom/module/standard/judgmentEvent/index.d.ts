/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

export default function (attributeName: string): EventInformation | null | undefined;

declare interface EventInformation {
    readonly opts: Yarla.AddEventListenerOptions;
    readonly type: string;
}
