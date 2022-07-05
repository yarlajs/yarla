import divideExpression from "../../module/standard/divideExpression/index.js";
import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import isNullOrUndefined from "../isNullOrUndefined/index.js";
import isString from "../isString/index.js";

export default skrinkSerializer(
    /**
     * 
     * Delete a property from the specified object. Returns true if the property was deleted successfully, otherwise returns false.
     * 
     * @param {any} argc An object.
     * @param {Yarla.PropertyExpr} expr The property expression.
     * @returns {boolean}
     */
    function (
        argc,
        expr
    ) {
        var t = argc, p;
        for (var
            i = 0,
            m = argc,
            s = isString(expr) ? divideExpression(expr) : expr,
            l = s.length;
            i < l;
            i++
        ) {
            t = m;
            p = s[i];
            m = t[p];
        }
        return isNullOrUndefined(p) ? false : delete t[p];
    }
);
