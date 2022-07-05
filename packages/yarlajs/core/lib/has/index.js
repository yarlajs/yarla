import divideExpression from "../../module/standard/divideExpression/index.js";
import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import hasOwnProperty from "../../module/standard/hasOwnProperty/index.js";
import isReference from "../isReference/index.js";
import isString from "../isString/index.js";

export default skrinkSerializer(
    /**
     * 
     * Determines whether an object contains the specified property.
     * 
     * @param {any} argc An object.
     * @param {Yarla.PropertyExpr} expr The property expression.
     * @returns {boolean}
     */
    function (
        argc,
        expr
    ) {
        var t = argc;
        for (var
            i = 0,
            s = isString(expr) ? divideExpression(expr) : expr,
            l = s.length;
            i < l;
            i++
        ) {
            if (!isReference(t) ||
                !hasOwnProperty(t, s[i])) {
                return false;
            }
            t = t[s[i]];
        }
        return true;
    }
);
