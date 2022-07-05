import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import flat from "../flat/index.js";

export default skrinkSerializer(
    /**
     * 
     * Returns a trampoline function that resolves recursive functions exceeding the maximum call stack size.
     * 
     * @param {Yarla.Object<T, Yarla.BasicFunc>} argc A recursive function.
     * @returns {T}
     * @template T
     */
    function (argc) {
        var r;
        var ended = true;
        var accumulated = [];
        return /** @type {any} */ (skrinkSerializer(
            /**
             * 
             * @this {any}
             */
            function () {
                accumulated.push(flat(arguments));
                if (ended) {
                    ended = false;
                    while (accumulated.length > 0) {
                        r = argc.apply(this, accumulated.shift());
                    }
                    ended = true;
                    return r;
                }
            }
        ));
    }
);
