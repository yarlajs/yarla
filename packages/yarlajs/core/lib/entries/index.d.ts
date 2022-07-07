/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

/**
 * Returns an array of key/value of the enumerable properties of an object.
 * 
 * @param argc Object that contains the properties and methods.
 * @param inherit Indicates whether to return the key/values of the inherited properties and methods.
 */
export default function <K extends PropertyKey, V>(argc: Traversable<K, V>): ReadonlyArray<readonly [K, V]>;
export default function <K extends PropertyKey, V>(argc: Iterable<readonly [string, V]>): ReadonlyArray<readonly [K, V]>;
export default function <K extends PropertyKey, V>(argc: Record<K, V>, inherit?: boolean): ReadonlyArray<readonly [K, V]>;

declare interface Traversable<K extends PropertyKey, T> {
    forEach(callback: (value: T, key: K) => void, thisArg?: any): void;
}
