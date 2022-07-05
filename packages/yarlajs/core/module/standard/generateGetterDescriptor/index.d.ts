/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

/**
 * Returns a getter property descriptor.
 * 
 * @param argc The getter of the property descriptor.
 * @param enumerable Indicates whether the property is enumerable.
 */
export default function <T>(argc: () => T, enumerable?: boolean): Yarla.GetterPropertyDescriptor<T>;
