/**
 * Adds one or more properties to an object, and/or modifies attributes of existing properties.
 * 
 * @param {T} argc Object on which to add or modify the properties. This can be a native JavaScript object or a DOM object.
 * @param {Yarla.Object<P, PropertyDescriptorMap>} properties JavaScript object that contains one or more descriptor objects. Each descriptor object describes a data property or an accessor property.
 * @returns {Yarla.NonAny<T> & Yarla.PropertyDescriptorMapReturns<P>}
 * @template T, P
 */
export default function (
    argc,
    properties
) {
    return /** @type {any} */ (Object.defineProperties(argc, properties));
}
