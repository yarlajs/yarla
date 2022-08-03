/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

/**
 * Returns the non-null values in the specified array.
 * 
 * @param argc Any array.
 */
export default function <T>(argc: Array<T>): Array<NonNullable<T>>;
export default function <T>(argc: ReadonlyArray<T>): ReadonlyArray<NonNullable<T>>;
