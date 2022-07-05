/**
 * Adds a property to an object, or modifies attributes of an existing property.
 * 
 * @param {T} argc Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object.
 * @param {Yarla.Object<N, PropertyKey>} property The property name.
 * @param {Yarla.Object<P, PropertyDescriptor>} descriptor Descriptor for the property. It can be for a data property or an accessor property.
 * @returns {Yarla.NonAny<T> & { readonly [K in N]: Yarla.PropertyDescriptorReturns<P>; }}
 * @template T, N, P
 */
export default function (
    argc,
    property,
    descriptor
) {
    // @ts-ignore
    return Object.defineProperty(argc, property, descriptor);
}
