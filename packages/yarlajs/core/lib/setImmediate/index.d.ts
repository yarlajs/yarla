/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

export default function <T extends Yarla.NoReturnsFunc>(task: T, ...argv: Yarla.Parameters<T>): Yarla.Cancelable;
