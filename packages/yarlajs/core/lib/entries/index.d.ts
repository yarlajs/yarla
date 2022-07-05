/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

/**
 * Returns an array of key/value of the enumerable properties of an object.
 * 
 * @param argc Object that contains the properties and methods.
 * @param inherit Indicates whether to return the key/values of the inherited properties and methods.
 */
export default function (argc: object, inherit?: boolean): ReadonlyArray<readonly [string, any]>;
