import setImmediate from "../../module/internal/setImmediate/index.js";
import clearImmediate from "../../module/internal/clearImmediate/index.js";
import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import flat from "../flat/index.js";
import zone from "../zone/index.js";

export default skrinkSerializer(
    /**
     * 
     * @this {any}
     * @param {Yarla.NoReturnsFunc} task 
     * @returns {Yarla.Cancelable}
     */
    function (
        task
    ) {
        var self = this;
        var argv = flat(arguments, 1);
        var hwnd = setImmediate(function () {
            task.apply(self, argv);
            zone.forceUpdate();
        });
        return {
            cancel: skrinkSerializer(
                function () {
                    clearImmediate(hwnd);
                }
            ),
        };
    }
);
