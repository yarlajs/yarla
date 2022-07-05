import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";
import Request from "../../module/standard/Request/index.js";
import defaults from "../defaults/index.js";

export default skrinkSerializer(
    /**
     * 
     * @param {string} url 
     * @returns {Yarla.xhr.Request<P, R>}
     * @template P, R
     */
    function (
        url
    ) {
        return Request.init({ url: url, method: "DELETE" }, defaults);
    }
);
