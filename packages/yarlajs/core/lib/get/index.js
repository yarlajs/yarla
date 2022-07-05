import divideExpression from "../../module/standard/divideExpression/index.js";
import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import isNullOrUndefined from "../isNullOrUndefined/index.js";
import isString from "../isString/index.js";

export default skrinkSerializer(
    /**
     * 
     * Returns the value of a specified property of an object.
     *  
     * @param {any} argc An object.
     * @param {Yarla.PropertyExpr} expr The property expression.
     * @param {T} [defaultValue] The default value when the value is null or undefined. 
     * @returns {T}
     * @template T
     */
    function (
        argc,
        expr,
        defaultValue
    ) {
        var t = argc;
        for (var
            i = 0,
            s = isString(expr) ? divideExpression(expr) : expr,
            l = s.length;
            i < l;
            i++
        ) {
            if (isNullOrUndefined(t)) {
                t = void 0;
                break;
            }
            t = t[s[i]];
        }
        if (isNullOrUndefined(t) && arguments.length > 2) {
            t = defaultValue;
        }
        return t;
    }
);
