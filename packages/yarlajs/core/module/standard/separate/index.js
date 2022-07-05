/**
 * 
 * @param {string} pathname 
 * @param {boolean} [allowAboveRoot] 
 * @returns {ReadonlyArray<string>}
 */
export default function (
    pathname,
    allowAboveRoot
) {
    var up = 0;
    var parts = pathname.split(/[\\/]+/);
    for (var
        i = parts.length - 1;
        i >= 0;
        i--
    ) {
        var last = parts[i];
        if (last === "" ||
            last === ".") {
            parts.splice(i, 1);
        } else if (last === "..") {
            parts.splice(i, 1);
            up++;
        } else if (up) {
            parts.splice(i, 1);
            up--;
        }
    }
    if (allowAboveRoot) {
        while (up--) {
            parts.unshift("..");
        }
    }
    return parts;
}
