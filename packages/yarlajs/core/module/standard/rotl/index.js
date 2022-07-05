/**
 * 
 * rotl32.
 * 
 * @param {number} a First number.
 * @param {number} b Second number.
 * @returns {number}
 */
export default function (
    a,
    b
) {
    return (a << b) | (a >>> (32 - b));
}