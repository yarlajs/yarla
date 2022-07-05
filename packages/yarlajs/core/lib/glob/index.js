import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import isNullOrEmptyString from "../isNullOrEmptyString/index.js";

export default skrinkSerializer(
    /**
     * 
     * Create a regexp from the specified glob string.
     * 
     * @param {string} argc An glob string.
     * @returns {RegExp}
     */
    function (
        argc
    ) {
        var r = "";
        for (var
            i = 0,
            c = 0,
            p = "",
            n = "",
            g = false,
            l = argc.length;
            i < l;
            i++
        ) {
            var t = argc.charAt(i);
            switch (t) {
                case "/":
                case "$":
                case "^":
                case ".":
                case "(":
                case ")":
                case "=":
                case "!":
                case "|":
                    r += "\\" + t;
                    break;
                case "?":
                    r += ".";
                    break;
                case "[":
                case "]":
                    r += t;
                    break;
                case "{":
                    g = true;
                    r += "(";
                    break;
                case "}":
                    g = false;
                    r += ")";
                    break;
                case ",":
                    if (g) {
                        r += "|";
                    } else {
                        r += "\\" + t;
                    }
                    break;
                case "*":
                    c = 1;
                    p = argc.charAt(i - 1);
                    while (argc.charAt(i + 1) === "*") {
                        c++;
                        i++;
                    }
                    n = argc.charAt(i + 1);
                    if (c > 1
                        && (p === "/" || isNullOrEmptyString(p))
                        && (n === "/" || isNullOrEmptyString(n))) {
                        r += "((?:[^/]*(?:/|$))*)";
                        i++;
                    } else {
                        r += "([^/]*)";
                    }
                    break;
                default:
                    r += t;
                    break;
            }
        }
        return new RegExp("^" + r + "$", "i");
    }
);
