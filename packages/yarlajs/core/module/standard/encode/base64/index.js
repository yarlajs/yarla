import atob from "../../atob/index.js";
import encodeLATIN1 from "../latin1/index.js";

/**
 * 
 * Encodes a base64 string to bytes.
 * 
 * @param {string} argc A base64 string.
 * @returns {ReadonlyArray<number>}
 */
export default function (
    argc
) {
    return encodeLATIN1(atob(argc));
}
