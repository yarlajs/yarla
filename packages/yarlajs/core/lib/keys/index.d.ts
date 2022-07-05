/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

/**
 * Returns the names of the enumerable string properties and methods of an object.
 * 
 * @param argc Object that contains the properties and methods.
 * @param inherit Indicates whether to return the names of the inherited properties and methods.
 */
export default function (argc: object, inherit?: boolean): ReadonlyArray<string>;
