import setInterval from "../../module/internal/setInterval/index.js";
import clearInterval from "../../module/internal/clearInterval/index.js";
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
        var hwnd = setInterval(function () {
            task.apply(self, argv);
            zone.forceUpdate();
        }, wait);
        return {
            cancel: skrinkSerializer(
                function () {
                    clearInterval(hwnd);
                }
            ),
        };
    }
);
