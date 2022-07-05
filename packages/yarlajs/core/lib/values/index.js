import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import hasOwnProperty from "../../module/standard/hasOwnProperty/index.js";

export default skrinkSerializer(
    /**
     * 
     * Returns an array of values of the enumerable properties of an object.
     * 
     * @param {any} argc Object that contains the properties and methods.
     * @param {boolean} [inherit] Indicates whether to return the values of the inherited properties and methods.
     * @returns {ReadonlyArray<any>}
     */
    function (
        argc,
        inherit
    ) {
        var r = [];
        for (var n in argc) {
            if (inherit || hasOwnProperty(argc, n)) {
                r.push(argc[n]);
            }
        }
        return r;
    }
);
