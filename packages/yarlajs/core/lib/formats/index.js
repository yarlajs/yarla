import definition from "../../module/constant/definition/index.js";
import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import isNullOrUndefined from "../isNullOrUndefined/index.js";
import isInstanceOf from "../isInstanceOf/index.js";
import isValid from "../isValid/index.js";
import isDate from "../isDate/index.js";
import zone from "../zone/index.js";
import get from "../get/index.js";
import Promise from "../Promise/index.js";
import Reflect from "../Reflect/index.js";

export default {
    json: skrinkSerializer(
        /**
         * 
         * @param {any} argc 
         * @param {boolean} [pretty] 
         * @returns {string | null | undefined}
         */
        function (
            argc,
            pretty
        ) {
            return isNullOrUndefined(argc) ? argc : JSON.stringify(argc, null, pretty ? 4 : 0);
        }
    ),
    attr: skrinkSerializer(
        /**
         * 
         * @param {any} argc 
         * @param {Yarla.PropertyExpr} [expr] 
         * @returns {string | null | undefined}
         */
        function (
            argc,
            expr
        ) {
            if (isInstanceOf(argc, Promise)) {
                if (Reflect.has(argc, Reflect.expr.STATE) &&
                    Reflect.has(argc, Reflect.expr.VALUE)) {
                    switch (Reflect.get(argc, Reflect.expr.STATE)) {
                        case definition.RESOLVED:
                            return get(Reflect.get(argc, Reflect.expr.VALUE), expr || []);
                        case definition.REJECTED:
                            return void 0;
                    }
                }
                return void argc.then(
                    function (value) {
                        Reflect.set(argc, Reflect.expr.STATE, definition.RESOLVED);
                        Reflect.set(argc, Reflect.expr.VALUE, value);
                        zone.forceUpdate();
                    },
                    function (error) {
                        Reflect.set(argc, Reflect.expr.STATE, definition.REJECTED);
                        Reflect.set(argc, Reflect.expr.VALUE, error);
                        zone.forceUpdate();
                        throw error;
                    }
                );
            }
            return get(argc, expr || []);
        }
    ),
    date: skrinkSerializer(
        /**
         * 
         * @param {Date | number | string} argc 
         * @param {string} [pattern] 
         * @returns {string | null | undefined}
         */
        function (
            argc,
            pattern
        ) {
            return isNullOrUndefined(argc) ? argc : (function (argc, pattern) {
                return isValid(argc) ? pattern.replace(/(?:Y+|M+|D+|H+|m+|s+)/g, function (i) {
                    var v = 0;
                    switch (i.charAt(0)) {
                        case "Y":
                            v = argc.getFullYear();
                            break;
                        case "M":
                            v = argc.getMonth() + 1;
                            break;
                        case "D":
                            v = argc.getDate();
                            break;
                        case "H":
                            v = argc.getHours();
                            break;
                        case "m":
                            v = argc.getMinutes();
                            break;
                        case "s":
                            v = argc.getSeconds();
                            break;
                    }
                    return String(i.length > 1 && v < 10 ? "0" + v : v);
                }) : argc.toString();
            }(isDate(argc) ? argc : new Date(argc), pattern || "YYYY-MM-DD HH:mm:ss"));
        }
    ),
    digit: skrinkSerializer(
        /**
         * 
         * @param {number} argc 
         * @param {number} [digit] 
         * @returns {string | null | undefined}
         */
        function (
            argc,
            digit
        ) {
            return isNullOrUndefined(argc) ? argc : Number(argc).toFixed(digit || 0).replace(Number(digit) > 0 ? /(\d)(?=(?:\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g, "$1,");
        }
    ),
    lower: skrinkSerializer(
        /**
         * 
         * @param {string} argc 
         * @returns {string | null | undefined}
         */
        function (
            argc
        ) {
            return isNullOrUndefined(argc) ? argc : String(argc).toLowerCase();
        }
    ),
    upper: skrinkSerializer(
        /**
         * 
         * @param {string} argc 
         * @returns {string | null | undefined}
         */
        function (
            argc
        ) {
            return isNullOrUndefined(argc) ? argc : String(argc).toUpperCase();
        }
    ),
};
