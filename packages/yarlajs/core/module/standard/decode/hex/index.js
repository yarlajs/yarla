/**
 * 
 * Decodes a bytes to hex string.
 * 
 * @param {ArrayLike<number>} argc A bytes.
 * @returns {string}
 */
export default function (
    argc
) {
    var r = [];
    for (var
        i = 0,
        l = argc.length;
        i < l;
        i++
    ) {
        var n = argc[i] & 0xFF;
        if (n < 0x10) {
            r.push("0" + n.toString(16));
        } else {
            r.push(n.toString(16));
        }
    }
    return r.join("");
}
