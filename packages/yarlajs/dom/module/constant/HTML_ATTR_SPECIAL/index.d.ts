/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

export default _;

/**
 * - 0 Generic attributes.
 * - 1 Boolean properties.
 * - 2 String properties.
 * - 3 Support for object and string of style.
 * - 4 Support for object and string of className.
 * - Other values ignore the properties.
 */
declare const _: Readonly<Record<string, number | undefined>>;
