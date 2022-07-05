import console from "@yarlajs/core/module/internal/console/index.js";
import env from "../env/index.js";

/**
 * 
 * @param {Error | null} error 
 * @param {object} detail 
 * @param {string} detail.url 
 * @param {string} detail.method 
 * @param {number} detail.status 
 */
export default function (
    error,
    detail
) {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var t = [
        h > 9 ? h : "0" + h,
        m > 9 ? m : "0" + m,
        s > 9 ? s : "0" + s,
    ].join(":");
    if (env.DEVELOPMENT) {
        console.log("\x1B[3" + (detail.status >= 500 ? "1" : detail.status >= 400 ? "3" : detail.status >= 300 ? "6" : "4") + "m[" + t + "] " + detail.status + " " + detail.method.padEnd(6, " ") + " " + detail.url + "\x1B[39m");
    }
    if (error) {
        console.log("[" + t + "] " + (error.stack || error.message));
    }
}
