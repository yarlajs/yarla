/**
 * 
 * Instantiate the specified class, and that optionally contains specified properties.
 * 
 * @param {Yarla.Proto<Yarla.Object<T>>} argc Class to be instantiated.
 * @param {Yarla.Object<P, PropertyDescriptorMap>} [properties] JavaScript object that contains one or more property descriptors.
 * @returns {Yarla.NonAny<T> & Yarla.PropertyDescriptorMapReturns<P>}
 * @template T, P
 */
export default function (
    argc,
    properties
) {
    return Object.create(argc.prototype, properties || {});
}
