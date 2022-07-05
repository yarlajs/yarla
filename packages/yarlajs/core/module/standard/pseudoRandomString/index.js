/**
 * 
 * Returns a pseudorandom string.
 * 
 * @param {number} length The length of string.
 * @param {number} radix The system of numeration.
 * @returns {string}
 */
export default function (
    length,
    radix
) {
    return Math.floor((1 + Math.random()) * Math.pow(radix, length)).toString(radix).slice(1);
}
