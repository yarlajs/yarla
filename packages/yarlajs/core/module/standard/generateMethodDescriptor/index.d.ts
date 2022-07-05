/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

/**
 * Returns a method property descriptor.
 * 
 * @param argc A function. 
 * @param enumerable Indicates whether the property is enumerable.
 */
export default function <T extends (...argv: any[]) => any>(argc: T, enumerable?: boolean): Yarla.NormalPropertyDescriptor<T>;
