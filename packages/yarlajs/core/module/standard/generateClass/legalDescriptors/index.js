import legalSerializer from "../legalSerializer/index.js";

/**
 * 
 * @param {PropertyDescriptorMap} argc 
 * @param {Yarla.Proto<any>} constructor 
 * @returns {PropertyDescriptorMap}
 */
export default function (
    argc,
    constructor
) {
    /** @type {PropertyDescriptorMap} */
    var descriptors = {};
    for (var i in argc) {
        /** @type {PropertyDescriptor} */
        var os = {};
        var sn = argc[i];
        var get = sn.get;
        var set = sn.set;
        var value = sn.value;
        var writable = sn.writable;
        var enumerable = sn.enumerable;
        var configurable = sn.configurable;
        if (typeof writable === "boolean") {
            os.writable = writable;
        }
        if (typeof enumerable === "boolean") {
            os.enumerable = enumerable;
        }
        if (typeof configurable === "boolean") {
            os.configurable = configurable;
        }
        if (typeof get === "function") {
            os.get = legalSerializer(get, constructor);
        }
        if (typeof set === "function") {
            os.set = legalSerializer(set, constructor);
        }
        if ("value" in sn) {
            os.value = typeof value === "function" ? legalSerializer(value, constructor) : value;
        }
        descriptors[i] = os;
    }
    return descriptors;
}
