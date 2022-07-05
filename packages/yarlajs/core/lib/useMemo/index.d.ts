/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

export default function <T>(factory: () => T, dependencies?: ReadonlyArray<any>): T;
