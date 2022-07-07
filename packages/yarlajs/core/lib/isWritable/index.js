import stream from "../../module/internal/stream/index.js";
import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import isInstanceOf from "../isInstanceOf/index.js";

export default skrinkSerializer(
    /**
     * 
     * Determines if the input parameter is a stream.Writable.
     * 
     * @param {any} argc Any object.
     * @returns {argc is Headers}
     */
    function (
        argc
    ) {
        return stream ? isInstanceOf(argc, stream.Writable) : false;
    }
);
