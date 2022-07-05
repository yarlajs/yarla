/**
 * 
 * Convert the specified bytes to the specified bit.
 * 
 * @param {ArrayLike<number>} argc A bytes.
 * @param {number} sourceBit Source bit of the bytes.
 * @param {number} targetBit Target bit of the bytes.
 * @returns {ReadonlyArray<number>}
 */
export default function (
    argc,
    sourceBit,
    targetBit
) {
    var r = [];
    var z = 0;
    var l = argc.length;
    for (var
        i = 0;
        i < l;
        i++
    ) {
        if (argc[i] !== 0) {
            break;
        }
        z++;
    }
    z = Math.min(z, l - 1);
    while ((l = argc.length) > 0) {
        var quotient = [];
        var remainder = 0;
        for (var
            i = 0;
            i < l;
            i++
        ) {
            var total = argc[i] + remainder * sourceBit;
            var digit = Math.floor(total / targetBit);
            remainder = Math.floor(total % targetBit);
            if (digit > 0 || quotient.length > 0) {
                quotient.push(digit);
            }
        }
        r.push(remainder);
        argc = quotient;
    }
    for (var
        i = 0;
        i < z;
        i++
    ) {
        r.push(0);
    }
    return r.reverse();
}
