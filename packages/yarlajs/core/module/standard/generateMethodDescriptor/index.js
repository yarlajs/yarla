import generateNormalDescriptor from "../generateNormalDescriptor/index.js";
import skrinkSerializer from "../skrinkSerializer/index.js";

/**
 * 
 * Returns a method property descriptor.
 * 
 * @param {Yarla.Object<T, Yarla.BasicFunc>} argc A function. 
 * @param {boolean} [enumerable] Indicates whether the property is enumerable.
 * @returns {Yarla.NormalPropertyDescriptor<Yarla.Object<T, Yarla.BasicFunc>>}
 * @template T
 */
export default function (
    argc,
    enumerable
) {
    return generateNormalDescriptor(skrinkSerializer(argc), enumerable);
}
