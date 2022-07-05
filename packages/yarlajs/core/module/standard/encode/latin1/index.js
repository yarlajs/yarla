import message from "../../../constant/message/index.js";

/**
 * 
 * Encodes a latin1 string to bytes.
 * 
 * @param {string} argc A latin1 string.
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
        if (n > 0xFF) {
            throw new Error(message.CHARACTER_IS_OUTSIDE_THE_BOUNDS_OF_LATIN1);
        }
        r.push(n);
    }
    return r;
}
