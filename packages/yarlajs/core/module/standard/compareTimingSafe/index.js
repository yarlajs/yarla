import crypto from "../../internal/crypto/index.js";
import definition from "../../constant/definition/index.js";

/**
 * 
 * Compare strings time-safely.
 * 
 * @param {string} arg1 One string.
 * @param {string} arg2 Two string.
 * @returns {boolean}
 */
export default function (
    arg1,
    arg2
) {
    var h = crypto.pseudoRandomBytes(16);
    var m = crypto.createHmac(definition.SHA256, h).update(arg1, definition.UTF8).digest();
    var n = crypto.createHmac(definition.SHA256, h).update(arg2, definition.UTF8).digest();
    var q = crypto.timingSafeEqual(m, n);
    return q && arg1 === arg2;
}
