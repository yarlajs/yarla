/**
 * 
 * Returns the class name of the specified object.
 * 
 * @param {any} argc The object whose class name needs to be queried.
 * @returns {string}
 */
export default function (
    argc
) {
    return Object.prototype.toString.call(argc).slice(8, -1);
}
