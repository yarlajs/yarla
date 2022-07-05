import BTOA from "../../constant/BTOA/index.js";
import globalThis from "../../internal/globalThis/index.js";
import fromCharCode from "../fromCharCode/index.js";

export default globalThis.btoa || function (
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
        var n1 = argc.charCodeAt(i++);
        var n2 = argc.charCodeAt(i++);
        var n3 = argc.charCodeAt(i++);
        var e1 = (n1 & 0xFF) >> 2;
        var e2 = (n1 & 0x03) << 4 | n2 >> 4;
        var e3 = (n2 & 0x0F) << 2 | n3 >> 6;
        var e4 = (n3 & 0x3F) << 0;
        if (globalThis.isNaN(n2)) {
            e3 = 64;
        }
        if (globalThis.isNaN(n3)) {
            e4 = 64;
        }
        r.push(BTOA[e1]);
        r.push(BTOA[e2]);
        r.push(BTOA[e3]);
        r.push(BTOA[e4]);
    }
    return fromCharCode(r);
};
