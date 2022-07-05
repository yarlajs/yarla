/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

/**
 * Adds a property to an object, or modifies attributes of an existing property.
 * 
 * @param argc Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object.
 * @param name The property name.
 * @param descriptor Descriptor for the property. It can be for a data property or an accessor property.
 */
export default function <T extends object, N extends PropertyKey, P extends PropertyDescriptor>(argc: T, name: N, descriptor: P): Yarla.NonAny<T> & { readonly [K in N]: Yarla.PropertyDescriptorReturns<P>; };
