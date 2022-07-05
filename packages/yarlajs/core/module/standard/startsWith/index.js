/**
 * Returns true if the sequence of elements of searchString converted to a String is the
 * same as the corresponding elements of this object (converted to a String) starting at
 * position. Otherwise returns false.
 * 
 * @param {string} argc Base string.
 * @param {string} value String to search for.
 * @param {number} [position] Search starting position.
 * @returns {boolean}
 */
export default function (
    argc,
    value,
    position
) {
    for (var
        i = 0,
        p = position || 0,
        l = value.length;
        i < l;
        i++
    ) {
        if (value.charAt(i) !== argc.charAt(p + i)) {
            return false;
        }
    }
    return true;
}
