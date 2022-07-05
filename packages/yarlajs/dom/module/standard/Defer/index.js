import NOOP from "@yarlajs/core/module/constant/NOOP/index.js";
import generateMethodDescriptor from "@yarlajs/core/module/standard/generateMethodDescriptor/index.js";
import defineProperties from "@yarlajs/core/module/standard/defineProperties/index.js";
import generateClass from "@yarlajs/core/module/standard/generateClass/index.js";
import Reflect from "@yarlajs/core/lib/Reflect/index.js";

export default defineProperties(generateClass(Reflect.BASE, {
    push: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.dom.Defer}
         * @param {Yarla.NOOP} fiber 
         */
        function (
            fiber
        ) {
            Reflect.getInternal(this).push(fiber);
        }
    ),
    digest: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.dom.Defer}
         */
        function () {
            Reflect.getInternal(this).splice(0).forEach(function (i) {
                i.call(null);
            });
        }
    ),
}, NOOP, "Defer"), {
    init: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.Proto<Yarla.dom.Defer>}
         */
        function () {
            return Reflect.construct(this, []);
        }
    ),
});
