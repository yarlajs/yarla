/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

export default function <T extends Node>(parentNode: Node, insertNode: T, previous?: Node | null): T;
