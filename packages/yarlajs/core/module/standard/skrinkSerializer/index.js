/**
 * Hide function internal implementation.
 * 
 * @param {Yarla.Object<T, Yarla.BasicFunc>} constructor The function.
 * @returns {T}
 * @template T
 */
export default function (
    constructor
) {
    // @ts-ignore
    return function () { return constructor.apply(this, arguments); };
}
