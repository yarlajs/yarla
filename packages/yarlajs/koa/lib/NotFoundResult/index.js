import generateClass from "@yarlajs/core/module/standard/generateClass/index.js";
import Reflect from "@yarlajs/core/lib/Reflect/index.js";
import NoneResult from "../NoneResult/index.js";

export default generateClass(
    /**
     * 
     * @this {any}
     */
    function () {
        return Reflect.callSuper(this, 404);
    },
    {

    },
    NoneResult,
    "NotFoundResult"
);
