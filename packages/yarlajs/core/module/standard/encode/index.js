import definition from "../../constant/definition/index.js";
import encodeHEX from "./hex/index.js";
import encodeASCII from "./ascii/index.js";
import encodeBASE64 from "./base64/index.js";
import encodeLATIN1 from "./latin1/index.js";
import encodeUTF8 from "./utf8/index.js";

/**
 * 
 * @param {string} argc 
 * @param {"hex" | "ascii" | "base64" | "latin1" | "utf8"} [encoding] 
 * @returns {ReadonlyArray<number>}
 */
export default function (
    argc,
    encoding
) {
    if (encoding === definition.HEX) {
        return encodeHEX(argc);
    }
    if (encoding === definition.ASCII) {
        return encodeASCII(argc);
    }
    if (encoding === definition.BASE64) {
        return encodeBASE64(argc);
    }
    if (encoding === definition.LATIN1) {
        return encodeLATIN1(argc);
    }
    return encodeUTF8(argc);
}
