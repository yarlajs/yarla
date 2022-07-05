/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

/**
 * Instantiate the specified class, and that optionally contains specified properties.
 * 
 * @param argc Class to be instantiated.
 * @param properties JavaScript object that contains one or more property descriptors.
 */
export default function <T, P extends PropertyDescriptorMap = {}>(argc: Yarla.Proto<T>, properties?: PropertyDescriptorMap): Yarla.NonAny<T> & Yarla.PropertyDescriptorMapReturns<P>;
