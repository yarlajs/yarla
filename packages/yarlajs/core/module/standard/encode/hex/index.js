/**
 * 
 * Encodes a hex string to bytes.
 * 
 * @param {string} argc A hex string.
 * @returns {ReadonlyArray<number>}
 */
export default function (
    argc
) {
    var r = [];
    for (var
        i = 0,
        l = argc.length;
        i < l;
        i += 2
    ) {
        var n = parseInt(argc.slice(i, i + 2), 16);
        if (n > 0) {
            r.push(n);
        }
    }
    return r;
}
