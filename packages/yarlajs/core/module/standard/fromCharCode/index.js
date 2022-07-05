/**
 * 
 * Returns a character created by using the specified code point.
 * 
 * @param {ArrayLike<number>} argc A code point array.
 * @returns {string}
 */
export default function (
    argc
) {
    var r = "";
    for (var
        i = 0,
        l = argc.length;
        i < l;
        i++
    ) {
        var n = argc[i];
        if (n <= 0xFFFF) {
            r += String.fromCharCode(n);
        } else {
            r += String.fromCharCode(((n - 0x10000) >> 10) + 0xD800, ((n - 0x10000) % 0x400) + 0xDC00);
        }
    }
    return r;
}
