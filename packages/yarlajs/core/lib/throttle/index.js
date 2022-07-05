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
     * @param {object} [opts]
     * @param {false} [opts.leading]
     * @param {false} [opts.trailing]
     * @returns {T & Yarla.Cancelable}
     * @template T 
     */
    function (
        task,
        wait,
        opts
    ) {
        var hwnd, data;
        var leading = opts ? opts.leading : null;
        var trailing = opts ? opts.trailing : null;
        var previous = 0;
        // @ts-ignore
        return defineProperties(skrinkSerializer(
            /**
             * 
             * @this {any}
             */
            function () {
                var self = this;
                var argv = flat(arguments);
                var time = Date.now();
                if (previous === 0 && leading === false) {
                    previous = time;
                }
                var remaining = wait - (time - previous);
                if (remaining <= 0 || remaining > wait) {
                    if (hwnd) {
                        clearTimeout(hwnd);
                        hwnd = null;
                    }
                    previous = time;
                    data = task.apply(self, argv);
                } else if (!hwnd && trailing !== false) {
                    hwnd = setTimeout(function () {
                        hwnd = null;
                        if (leading === false) {
                            previous = 0;
                        } else {
                            previous = Date.now();
                        }
                        data = task.apply(self, argv);
                        zone.forceUpdate();
                    }, remaining);
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
