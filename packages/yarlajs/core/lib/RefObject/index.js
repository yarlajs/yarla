import NOOP from "../../module/constant/NOOP/index.js";
import defineProperties from "../../module/standard/defineProperties/index.js";
import generateGetterDescriptor from "../../module/standard/generateGetterDescriptor/index.js";
import generateMethodDescriptor from "../../module/standard/generateMethodDescriptor/index.js";
import generateClass from "../../module/standard/generateClass/index.js";
import Reflect from "../Reflect/index.js";

export default defineProperties(generateClass(Reflect.BASE, {
    target: generateGetterDescriptor(
        /**
         * 
         * @this {Yarla.RefObject<T>}
         * @returns {T}
         * @template T
         */
        function () {
            return Reflect.getInternal(this).target;
        }
    ),
}, NOOP, "RefObject"), {
    init: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.Proto<Yarla.RefObject<T>>}
         * @param {T} [target] 
         * @template T
         */
        function (target) {
            return Reflect.construct(this, { target: target });
        }
    ),
});
