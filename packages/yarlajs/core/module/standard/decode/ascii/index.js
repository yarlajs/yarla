import fromCharCode from "../../fromCharCode/index.js";

/**
 * 
 * Decodes a bytes to ascii string.
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
        r.push(argc[i] & 0x7F);
    }
    return fromCharCode(r);
}
