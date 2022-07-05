/**
 * 
 * Returns a normal property descriptor.
 * 
 * @param {T} argc The value of the property descriptor.
 * @param {boolean} [enumerable] Indicates whether the property is enumerable. 
 * @param {boolean} [readonly] Indicates whether the property is readonly. 
 * @returns {Yarla.NormalPropertyDescriptor<T>}
 * @template T
 */
export default function (
    argc,
    enumerable,
    readonly
) {
    return {
        configurable: true,
        enumerable: !!enumerable,
        writable: !readonly,
        value: argc,
    };
}
