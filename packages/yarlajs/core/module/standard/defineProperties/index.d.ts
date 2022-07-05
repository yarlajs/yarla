/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

/**
 * Adds one or more properties to an object, and/or modifies attributes of existing properties.
 * 
 * @param argc Object on which to add or modify the properties. This can be a native JavaScript object or a DOM object.
 * @param properties JavaScript object that contains one or more descriptor objects. Each descriptor object describes a data property or an accessor property.
 */
export default function <T extends object, P extends PropertyDescriptorMap>(argc: T, properties: P): Yarla.NonAny<T> & Yarla.PropertyDescriptorMapReturns<P>;
