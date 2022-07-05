/**
 * 
 * Compare strings ignoring case.
 * 
 * @param {string} arg1 One string.
 * @param {string} arg2 Two string.
 * @returns {boolean}
 */
export default function (
    arg1,
    arg2
) {
    return arg1.length === arg2.length && arg1.toLowerCase() === arg2.toLowerCase();
}
