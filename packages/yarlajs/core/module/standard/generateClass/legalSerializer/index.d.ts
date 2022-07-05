/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

/**
 * 
 * Returns a legitimate function.
 * 
 * @param argc The function.
 * @param constructor The constructor of context.
 */
export default function <T extends Yarla.BasicFunc>(argc: T, constructor: Yarla.Proto<any>): T;
