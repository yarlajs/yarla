import message from "../../constant/message/index.js";
import legalDescriptors from "./legalDescriptors/index.js";
import generateNormalDescriptor from "../generateNormalDescriptor/index.js";
import skrinkSerializer from "../skrinkSerializer/index.js";
import defineProperties from "../defineProperties/index.js";
import defineProperty from "../defineProperty/index.js";
import createInstance from "../createInstance/index.js";
import setPrototypeOf from "../setPrototypeOf/index.js";
import Symbol from "../Symbol/index.js";

/**
 * 
 * Create a class.
 * 
 * @param {Yarla.Object<T, Yarla.BasicFunc>} constructor The class constructor.
 * @param {Yarla.Object<P, PropertyDescriptorMap>} properties JavaScript object that contains one or more descriptor objects. Each descriptor object describes a data property or an accessor property.
 * @param {Yarla.Object<S, Yarla.Proto>} superClass The super class of the class.
 * @param {string} [name] The class name.
 * @returns {Yarla.ClassFunc<Yarla.Parameters<T>, Yarla.InstanceType<T> & Yarla.PropertyDescriptorMapReturns<P> & Yarla.InstanceType<S>>}
 * @template T, P, S
 */
export default function (
    constructor,
    properties,
    superClass,
    name
) {
    /** @type {Yarla.Proto<any>} */
    var WrapConstructor = skrinkSerializer(
        /**
         * @this {any}
         */
        function () {
            if (this instanceof WrapConstructor) {
                return constructor.apply(defineProperty(this, Symbol.for("Yarla.Super.constructor"), generateNormalDescriptor(WrapConstructor)), arguments);
            }
            throw new Error(message.FAILED_TO_CONSTRUCT_INSPANCE);
        }
    );
    // @ts-ignore
    WrapConstructor.prototype = defineProperties(createInstance(superClass, {
        constructor: generateNormalDescriptor(WrapConstructor),
    }), legalDescriptors(properties, WrapConstructor));
    if (name) {
        defineProperty(WrapConstructor, "name", generateNormalDescriptor(name, false, true));
        if (Symbol.toStringTag) {
            defineProperty(WrapConstructor.prototype, Symbol.toStringTag, generateNormalDescriptor(name, false, true));
        }
    }
    // @ts-ignore
    return setPrototypeOf(WrapConstructor, superClass);
}
