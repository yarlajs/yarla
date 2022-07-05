/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

export default function (filename: string): StatInformation;

declare interface StatInformation {
    readonly path: string;
    readonly name: string;
    readonly hash: string;
    readonly size: number;
    readonly atime: Date;
    readonly ctime: Date;
    readonly mtime: Date;
}
