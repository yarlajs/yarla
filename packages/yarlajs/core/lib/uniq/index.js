import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";

export default skrinkSerializer(
    /**
     * 
     * Returns the unique values in the specified array.
     * 
     * @param {Yarla.Object<T, ReadonlyArray<any>>} argc An array.
     * @returns {T}
     * @template T
     */
    function (
        argc
    ) {
        var r = [];
        for (var
            i = 0,
            l = argc.length;
            i < l;
            i++
        ) {
            var n = argc[i];
            if (r.indexOf(n) === -1) {
                r.push(n);
            }
        }
        // @ts-ignore
        return r;
    }
);
