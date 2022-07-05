import setTimeout from "../../module/internal/setTimeout/index.js";
import clearTimeout from "../../module/internal/clearTimeout/index.js";
import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import flat from "../flat/index.js";
import zone from "../zone/index.js";

export default skrinkSerializer(
    /**
     * 
     * @this {any}
     * @param {Yarla.NoReturnsFunc} task 
     * @param {number} [wait] 
     * @returns {Yarla.Cancelable}
     */
    function (
        task,
        wait
    ) {
        var self = this;
        var argv = flat(arguments, 2);
        var hwnd = setTimeout(function () {
            task.apply(self, argv);
            zone.forceUpdate();
        }, wait);
        return {
            cancel: skrinkSerializer(
                function () {
                    clearTimeout(hwnd);
                }
            ),
        };
    }
);
