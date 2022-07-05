import fromCharCode from "../../fromCharCode/index.js";

/**
 * 
 * Decodes a utf8 bytes to sting.
 * 
 * @param {ArrayLike<number>} argc A utf8 bytes.
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
    ) {
        var n = argc[i];
        if (n <= 0x7F) {
            r.push(
                ((argc[i++] & 0x7F) << (0 * 6)));
        } else if (n >= 0xC0 && n <= 0xDF) {
            r.push(
                ((argc[i++] & 0x1F) << (1 * 6)) |
                ((argc[i++] & 0x3F) << (0 * 6)));
        } else if (n >= 0xE0 && n <= 0xEF) {
            r.push(
                ((argc[i++] & 0x0F) << (2 * 6)) |
                ((argc[i++] & 0x3F) << (1 * 6)) |
                ((argc[i++] & 0x3F) << (0 * 6)));
        } else if (n >= 0xF0 && n <= 0xF7) {
            r.push(
                ((argc[i++] & 0x07) << (3 * 6)) |
                ((argc[i++] & 0x3F) << (2 * 6)) |
                ((argc[i++] & 0x3F) << (1 * 6)) |
                ((argc[i++] & 0x3F) << (0 * 6)));
        } else if (n >= 0xF8 && n <= 0xFB) {
            r.push(
                ((argc[i++] & 0x03) << (4 * 6)) |
                ((argc[i++] & 0x3F) << (3 * 6)) |
                ((argc[i++] & 0x3F) << (2 * 6)) |
                ((argc[i++] & 0x3F) << (1 * 6)) |
                ((argc[i++] & 0x3F) << (0 * 6)));
        } else if (n >= 0xFC) {
            r.push(
                ((argc[i++] & 0x01) << (5 * 6)) |
                ((argc[i++] & 0x3F) << (4 * 6)) |
                ((argc[i++] & 0x3F) << (3 * 6)) |
                ((argc[i++] & 0x3F) << (2 * 6)) |
                ((argc[i++] & 0x3F) << (1 * 6)) |
                ((argc[i++] & 0x3F) << (0 * 6)));
        } else {
            i++;
        }
    }
    return fromCharCode(r);
}
