/**
 * 
 * Encodes a string to utf8 bytes.
 * 
 * @param {string} argc A string.
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
    ) {
        var n = argc.charCodeAt(i++);
        if (n >= 0xD800 &&
            n <= 0xDBFF) {
            if (i < l) {
                n = ((n - 0xD800) * 0x400) + (argc.charCodeAt(i++) - 0xDC00) + 0x10000;
            }
        }
        if (n <= 0x0000007F) {
            r.push(n & 0x7F);
        } else if (n >= 0x00000080 && n <= 0x000007FF) {
            r.push(((n >> (1 * 6)) & 0x1F) | 0xC0);
            r.push(((n >> (0 * 6)) & 0x3F) | 0x80);
        } else if (n >= 0x00000800 && n <= 0x0000FFFF) {
            r.push(((n >> (2 * 6)) & 0x0F) | 0xE0);
            r.push(((n >> (1 * 6)) & 0x3F) | 0x80);
            r.push(((n >> (0 * 6)) & 0x3F) | 0x80);
        } else if (n >= 0x00010000 && n <= 0x001FFFFF) {
            r.push(((n >> (3 * 6)) & 0x07) | 0xF0);
            r.push(((n >> (2 * 6)) & 0x3F) | 0x80);
            r.push(((n >> (1 * 6)) & 0x3F) | 0x80);
            r.push(((n >> (0 * 6)) & 0x3F) | 0x80);
        } else if (n >= 0x00200000 && n <= 0x03FFFFFF) {
            r.push(((n >> (4 * 6)) & 0x03) | 0xF8);
            r.push(((n >> (3 * 6)) & 0x3F) | 0x80);
            r.push(((n >> (2 * 6)) & 0x3F) | 0x80);
            r.push(((n >> (1 * 6)) & 0x3F) | 0x80);
            r.push(((n >> (0 * 6)) & 0x3F) | 0x80);
        } else if (n >= 0x04000000 && n <= 0x7FFFFFFF) {
            r.push(((n >> (5 * 6)) & 0x01) | 0xFC);
            r.push(((n >> (4 * 6)) & 0x3F) | 0x80);
            r.push(((n >> (3 * 6)) & 0x3F) | 0x80);
            r.push(((n >> (2 * 6)) & 0x3F) | 0x80);
            r.push(((n >> (1 * 6)) & 0x3F) | 0x80);
            r.push(((n >> (0 * 6)) & 0x3F) | 0x80);
        }
    }
    return r;
}
