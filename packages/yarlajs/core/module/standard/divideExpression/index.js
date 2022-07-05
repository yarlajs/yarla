import message from "../../constant/message/index.js";

/**
 * 
 * Resolve a property expression. Returns the property array.
 * 
 * @param {string} argc A property expression.
 * @returns {Array<string | number>}
 */
export default function (
    argc
) {
    var t = "";
    var r = [];
    for (var
        i = 0,
        e = 0,
        o = 0,
        a = 48,
        b = 57,
        inSquare = false,
        isNumber = false,
        l = argc.length;
        i < l;
        i++
    ) {
        var c = argc.charAt(i);
        if (c === "\\") {
            if (i + 1 < l && (
                argc.charAt(i + 1) === "." ||
                argc.charAt(i + 1) === "[" ||
                argc.charAt(i + 1) === "]")
            ) {
                t += argc.charAt(++i);
            } else {
                t += c;
            }
        } else if (c === ".") {
            if (t) {
                r.push(t);
                t = "";
            }
        } else if (c === "[") {
            if (t) {
                r.push(t);
                t = "";
            }
            inSquare = true;
            isNumber = false;
        } else if (c === "]") {
            if (!isNumber) {
                throw new Error(message.MUST_HAVE_NUMBER_IN_SQUARE + ": " + argc);
            }
            inSquare = false;
            r.push(o);
            o = 0;
        } else if (inSquare) {
            e = c.charCodeAt(0);
            if (e < a || e > b) {
                throw new Error(message.ONLY_NUMBERS_COULD_INSIDE_SQUARE + ": " + argc);
            }
            isNumber = true;
            o = 10 * o + e - a;
        } else {
            t += c;
        }
    }
    if (t) {
        r.push(t);
    }
    if (r.length === 0) {
        throw new Error(message.EXPRESSION_CAN_NOT_BE_EMPTY);
    }
    return r;
}
