import defineProperty from "../defineProperty/index.js";
import generateNormalDescriptor from "../generateNormalDescriptor/index.js";

/**
 * Sets the prototype of a specified object.
 * 
 * @param {any} argc The object to change its prototype.
 * @param {object | null} proto The value of the new prototype or null.
 * @returns {any}
 */
export default function (
    argc,
    proto
) {
    // @ts-ignore
    // eslint-disable-next-line es/no-object-setprototypeof
    if (Object.setPrototypeOf) {
        // @ts-ignore
        // eslint-disable-next-line es/no-object-setprototypeof
        return Object.setPrototypeOf(argc, proto);
    }
    return defineProperty(argc, "__proto__", generateNormalDescriptor(proto));
}
