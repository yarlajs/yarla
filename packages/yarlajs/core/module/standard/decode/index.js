import definition from "../../constant/definition/index.js";
import decodeHEX from "./hex/index.js";
import decodeASCII from "./ascii/index.js";
import decodeBASE64 from "./base64/index.js";
import decodeLATIN1 from "./latin1/index.js";
import decodeUTF8 from "./utf8/index.js";

/**
 * 
 * @param {ArrayLike<number>} argc 
 * @param {"hex" | "ascii" | "base64" | "latin1" | "utf8"} [encoding] 
 * @returns {string}
 */
export default function (
    argc,
    encoding
) {
    if (encoding === definition.HEX) {
        return decodeHEX(argc);
    }
    if (encoding === definition.ASCII) {
        return decodeASCII(argc);
    }
    if (encoding === definition.BASE64) {
        return decodeBASE64(argc);
    }
    if (encoding === definition.LATIN1) {
        return decodeLATIN1(argc);
    }
    return decodeUTF8(argc);
}
