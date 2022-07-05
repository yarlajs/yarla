import decodeBASE64 from "../decode/base64/index.js";
import encodeBASE64 from "../encode/base64/index.js";
import decodeUTF8 from "../decode/utf8/index.js";
import encodeUTF8 from "../encode/utf8/index.js";

/**
 * Fix offset lines of sourcemap when compiling javascript dynamically.
 * 
 * @param {string} content The javascript content.
 * @param {number} offsetLines Offset lines of sourcemap.
 * @returns {string}
 */
export default function (
    content,
    offsetLines
) {
    var r = [];
    var k = "";
    var g = /(\/\/[@#]\s+sourceMappingURL[^,]*,)([^\n]*)/i;
    var c = content;
    for (var
        i = 0;
        i < offsetLines;
        i++
    ) {
        k += ";";
    }
    for (var
        h;
        h = c.match(g);
        c = c.slice((h.index || 0) + h[0].length)
    ) {
        var t = h[2];
        try {
            var n = JSON.parse(decodeUTF8(encodeBASE64(t)));
            var m = n.mappings;
            if (m) {
                n.mappings = k + m;
            }
            t = decodeBASE64(encodeUTF8(JSON.stringify(n)));
        } catch (_) {
            // DO NOTHING
        }
        r.push(c.slice(0, h.index), h[1], t);
    }
    return r.push(c), r.join("");
}
