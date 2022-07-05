import globalThis from "../../module/internal/globalThis/index.js";
import httpHeader from "../../module/constant/httpHeader/index.js";
import httpContent from "../../module/constant/httpContent/index.js";
import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import startsWith from "../../module/standard/startsWith/index.js";
import isInstanceOf from "../isInstanceOf/index.js";

export default skrinkSerializer(
    /**
     * 
     * @param {string | Headers | null | undefined} argc 
     */
    function (
        argc
    ) {
        return (function (argc) { return argc ? startsWith(argc.toLowerCase(), httpContent.JSON) : false; }(isInstanceOf(argc, globalThis.Headers) ? argc.get(httpHeader.CONTENT_TYPE) : argc));
    }
);
