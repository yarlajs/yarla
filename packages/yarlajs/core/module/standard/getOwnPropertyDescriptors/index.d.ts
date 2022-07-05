/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

/**
 * Returns an object containing all own property descriptors of an object.
 * 
 * @param argc Object that contains the properties and methods.
 */
export default function <T>(argc: T): { [P in keyof T]: Yarla.TypedPropertyDescriptor<T[P]>; };
