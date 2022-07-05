import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import hasOwnProperty from "../../module/standard/hasOwnProperty/index.js";

export default skrinkSerializer(
    /**
     * 
     * Returns the names of the enumerable string properties and methods of an object.
     * 
     * @param {any} argc Object that contains the properties and methods.
     * @param {boolean} [inherit] Indicates whether to return the names of the inherited properties and methods.
     * @returns {ReadonlyArray<string>}
     */
    function (
        argc,
        inherit
    ) {
        var r = [];
        for (var n in argc) {
            if (inherit || hasOwnProperty(argc, n)) {
                r.push(n);
            }
        }
        return r;
    }
);
