import message from "../../../constant/message/index.js";

/**
 * 
 * Encodes a ascii string to bytes.
 * 
 * @param {string} argc A ascii string.
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
        i++
    ) {
        var n = argc.charCodeAt(i);
        if (n > 0x7F) {
            throw new Error(message.CHARACTER_IS_OUTSIDE_THE_BOUNDS_OF_ASCII);
        }
        r.push(n);
    }
    return r;
}
