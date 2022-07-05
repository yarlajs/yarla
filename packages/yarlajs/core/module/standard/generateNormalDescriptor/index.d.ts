/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

/**
 * Returns a normal property descriptor.
 * 
 * @param argc The value of the property descriptor.
 * @param enumerable Indicates whether the property is enumerable. 
 * @param readonly Indicates whether the property is readonly. 
 */
export default function <T>(argc: T, enumerable?: boolean, readonly?: boolean): Yarla.NormalPropertyDescriptor<T>;
