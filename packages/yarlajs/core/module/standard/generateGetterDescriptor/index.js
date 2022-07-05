import skrinkSerializer from "../skrinkSerializer/index.js";

/**
 * 
 * Returns a getter property descriptor.
 * 
 * @param {() => T} argc The getter of the property descriptor.
 * @param {boolean} [enumerable] Indicates whether the property is enumerable.
 * @returns {Yarla.GetterPropertyDescriptor<T>}
 * @template T
 */
export default function (
    argc,
    enumerable
) {
    return {
        configurable: true,
        enumerable: !!enumerable,
        get: skrinkSerializer(argc),
    };
}
