import ATOB from "../../constant/ATOB/index.js";
import globalThis from "../../internal/globalThis/index.js";
import fromCharCode from "../fromCharCode/index.js";

export default globalThis.atob || function (
    /**
     * @type {string}
     */
    argc
) {
    var r = [];
    for (var
        i = 0,
        l = argc.length;
        i < l;
    ) {
        var e1 = ATOB[argc.charCodeAt(i++)];
        var e2 = ATOB[argc.charCodeAt(i++)];
        var e3 = ATOB[argc.charCodeAt(i++)];
        var e4 = ATOB[argc.charCodeAt(i++)];
        var n1 = (e1 & 0xFF) << 2 | e2 >> 4;
        var n2 = (e2 & 0x0F) << 4 | e3 >> 2;
        var n3 = (e3 & 0x03) << 6 | e4 >> 0;
        r.push(n1);
        if (e4 < 64) {
            r.push(n2);
        }
        if (e4 < 64) {
            r.push(n3);
        }
    }
    return fromCharCode(r);
};
