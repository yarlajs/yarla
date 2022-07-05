import globalThis from "../../module/internal/globalThis/index.js";
import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import isInstanceOf from "../isInstanceOf/index.js";
import isFunction from "../isFunction/index.js";

export default skrinkSerializer(
    /**
     * 
     * Determines if the input parameter is a ArrayBufferView.
     * 
     * @param {any} argc Any object.
     * @returns {argc is ArrayBufferView}
     */
    function (
        argc
    ) {
        var ArrayBuffer = globalThis.ArrayBuffer;
        if (ArrayBuffer) {
            if (isFunction(ArrayBuffer.isView)) {
                return ArrayBuffer.isView(argc);
            }
        }
        return isInstanceOf(argc, globalThis.Int8Array)
            || isInstanceOf(argc, globalThis.Uint8Array)
            || isInstanceOf(argc, globalThis.Uint8ClampedArray)
            || isInstanceOf(argc, globalThis.Int16Array)
            || isInstanceOf(argc, globalThis.Uint16Array)
            || isInstanceOf(argc, globalThis.Int32Array)
            || isInstanceOf(argc, globalThis.Uint32Array)
            || isInstanceOf(argc, globalThis.Float32Array)
            || isInstanceOf(argc, globalThis.Float64Array)
            || isInstanceOf(argc, globalThis.BigInt64Array)
            || isInstanceOf(argc, globalThis.BigUint64Array)
            || isInstanceOf(argc, globalThis.DataView);
    }
);
