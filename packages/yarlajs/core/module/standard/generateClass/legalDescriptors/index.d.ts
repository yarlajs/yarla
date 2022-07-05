/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

/**
 * 
 * Returns a legitimate descriptors.
 * 
 * @param argc The descriptors.
 * @param constructor The constructor of context.
 */
export default function <T extends PropertyDescriptorMap>(argc: T, constructor: Yarla.Proto<any>): T;
