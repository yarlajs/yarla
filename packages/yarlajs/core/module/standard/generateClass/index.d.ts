/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

/**
 * Create a class.
 * 
 * @param constructor The class constructor.
 * @param properties JavaScript object that contains one or more descriptor objects. Each descriptor object describes a data property or an accessor property.
 * @param superClass The super class of the class.
 * @param name The class name.
 */
export default function <T extends (...argv: any[]) => any, P extends PropertyDescriptorMap, S extends Yarla.Proto>(constructor: T, properties: P, superClass: S, name?: string): Yarla.ClassFunc<Yarla.Parameters<T>, Yarla.InstanceType<T> & Yarla.PropertyDescriptorMapReturns<P> & Yarla.InstanceType<S>>;
