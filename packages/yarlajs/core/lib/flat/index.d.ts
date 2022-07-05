/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

/**
 * Convert an array from an array-like.
 * 
 * @param argc A array-like.
 * @param start The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.
 * @param depth Indicates whether to flatten the multidimensional array.
 * @param valid Indicates whether to remove invalid items from the array.
 */
export default function <T, D extends number>(argc: ArrayLike<T>, start: number, depth: D, valid: true): FlatArray<NonNullable<T>[], D>[];
export default function <T, D extends number>(argc: ArrayLike<T>, start: number, depth: D, valid?: boolean): FlatArray<T[], D>[];
export default function <T, D extends number>(argc: ArrayLike<T>, start?: number, depth?: D, valid?: boolean): Array<T>;
