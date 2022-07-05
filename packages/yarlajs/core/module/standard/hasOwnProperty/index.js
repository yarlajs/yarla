/**
 * Determines whether an object has a property with the specified name.
 * 
 * @param {any} argc An object.
 * @param {PropertyKey} property A property name.
 * @returns {boolean}
 */
export default function (
    argc,
    property
) {
    return Object.prototype.hasOwnProperty.call(argc, property);
}
