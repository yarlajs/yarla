/**
 * Returns the prototype of an object.
 * 
 * @param {any} argc The object that references the prototype.
 * @returns {any}
 */
export default function (
    argc
) {
    // @ts-ignore
    // eslint-disable-next-line es/no-object-setprototypeof
    if (Object.setPrototypeOf) {
        // @ts-ignore
        return Object.getPrototypeOf(argc);
    }
    return argc.__proto__ || Object.getPrototypeOf(argc);
}
