/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

export default function <T extends Yarla.BasicFunc>(task: T, wait: number, immediate?: boolean): T & Yarla.Cancelable;
