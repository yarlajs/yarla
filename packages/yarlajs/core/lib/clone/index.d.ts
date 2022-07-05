/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

/**
 * Clone the specified object.
 * 
 * @param argc An object.
 * @param deep Indicates whether to deep clone the object.
 * @param onlyValid Indicates whether to clone only the valid properties of the object.
 */
export default function <T>(argc: T, deep?: boolean, onlyValid?: boolean): T;
