import setTimeout from "../../module/internal/setTimeout/index.js";
import clearTimeout from "../../module/internal/clearTimeout/index.js";
import generateMethodDescriptor from "../../module/standard/generateMethodDescriptor/index.js";
import defineProperties from "../../module/standard/defineProperties/index.js";
import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import flat from "../flat/index.js";
import zone from "../zone/index.js";

export default skrinkSerializer(
    /**
     * 
     * @param {Yarla.Object<T, Yarla.BasicFunc>} task 
     * @param {number} wait 
     * @param {boolean} [immediate] 
     * @returns {T & Yarla.Cancelable}
     * @template T
     */
    function (
        task,
        wait,
        immediate
    ) {
        var hwnd, data;
        // @ts-ignore
        return defineProperties(skrinkSerializer(
            /**
             * @this {any}
             */
            function () {
                var self = this;
                var argv = flat(arguments);
                if (hwnd) {
                    clearTimeout(hwnd);
                }
                var anon = immediate && !hwnd;
                hwnd = setTimeout(function () {
                    hwnd = null;
                    if (!immediate) {
                        data = task.apply(self, argv);
                    }
                    zone.forceUpdate();
                }, wait);
                if (anon) {
                    data = task.apply(self, argv);
                }
                return data;
            }
        ), {
            cancel: generateMethodDescriptor(
                function () {
                    if (hwnd) {
                        clearTimeout(hwnd);
                        hwnd = null;
                    }
                }
            ),
        });
    }
);
