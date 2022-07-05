import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";
import defineProperties from "@yarlajs/core/module/standard/defineProperties/index.js";
import generateGetterDescriptor from "@yarlajs/core/module/standard/generateGetterDescriptor/index.js";
import generateNormalDescriptor from "@yarlajs/core/module/standard/generateNormalDescriptor/index.js";
import Request from "../../module/standard/Request/index.js";
import _defaults from "../defaults/index.js";
import _resolve from "../resolve/index.js";
import _import from "../import/index.js";
import _delete from "../delete/index.js";
import _patch from "../patch/index.js";
import _post from "../post/index.js";
import _get from "../get/index.js";
import _put from "../put/index.js";

export default defineProperties(skrinkSerializer(
    /**
     * 
     * @param {Yarla.xhr.API} api 
     */
    function (
        api
    ) {
        return Request.init(api, _defaults);
    }
), {
    defaults: generateGetterDescriptor(
        function () {
            return _defaults;
        }
    ),
    resolve: generateNormalDescriptor(_resolve),
    import: generateNormalDescriptor(_import),
    delete: generateNormalDescriptor(_delete),
    patch: generateNormalDescriptor(_patch),
    post: generateNormalDescriptor(_post),
    get: generateNormalDescriptor(_get),
    put: generateNormalDescriptor(_put),
});
