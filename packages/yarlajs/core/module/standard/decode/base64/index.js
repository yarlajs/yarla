import btoa from "../../btoa/index.js";
import decodeLATIN1 from "../latin1/index.js";

/**
 * 
 * Decodes a bytes to base64 string.
 * 
 * @param {ArrayLike<number>} argc A bytes.
 * @returns {string}
 */
export default function (
    argc
) {
    return btoa(decodeLATIN1(argc));
}
