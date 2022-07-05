import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import hasOwnProperty from "../../module/standard/hasOwnProperty/index.js";

export default skrinkSerializer(
    /**
     * 
     * Returns an array of key/value of the enumerable properties of an object.
     * 
     * @param {any} argc Object that contains the properties and methods.
     * @param {boolean} [inherit] Indicates whether to return the key/values of the inherited properties and methods.
     * @returns {ReadonlyArray<readonly [string, any]>}
     */
    function (
        argc,
        inherit
    ) {
        var r = [];
        for (var n in argc) {
            if (inherit || hasOwnProperty(argc, n)) {
                r.push([n, argc[n]]);
            }
        }
        // @ts-ignore
        return r;
    }
);
