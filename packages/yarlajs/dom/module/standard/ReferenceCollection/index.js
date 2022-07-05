import NOOP from "@yarlajs/core/module/constant/NOOP/index.js";
import message from "@yarlajs/core/module/constant/message/index.js";
import generateMethodDescriptor from "@yarlajs/core/module/standard/generateMethodDescriptor/index.js";
import defineProperties from "@yarlajs/core/module/standard/defineProperties/index.js";
import generateClass from "@yarlajs/core/module/standard/generateClass/index.js";
import RefObject from "@yarlajs/core/lib/RefObject/index.js";
import Reflect from "@yarlajs/core/lib/Reflect/index.js";

export default defineProperties(generateClass(Reflect.BASE, {
    reset: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.dom.ReferenceCollection}
         */
        function () {
            return Reflect.getInternal(this).index = 0, this;
        }
    ),
    push: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.dom.ReferenceCollection}
         * @param {T} target 
         * @returns {Yarla.RefObject<T>}
         * @template T
         */
        function (
            target
        ) {
            var x = Reflect.getInternal(this);
            var r = RefObject.init(target);
            x.value.push(r);
            return r;
        }
    ),
    next: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.dom.ReferenceCollection}
         * @returns {Yarla.RefObject<any>}
         */
        function () {
            var x = Reflect.getInternal(this);
            if (x.index >= x.value.length) {
                throw new Error(message.OFFSET_IS_OUTSIDE_THE_BOUNDS);
            }
            var r = x.value[x.index++];
            return r;
        }
    ),
    destroy: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.dom.ReferenceCollection}
         */
        function () {
            Reflect.getInternal(this).value.splice(0).forEach(function (i) {
                Reflect.getInternal(i).target = void 0;
            });
        }
    ),
}, NOOP, "ReferenceCollection"), {
    init: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.Proto<Yarla.dom.ReferenceCollection>}
         */
        function () {
            return Reflect.construct(this, { index: 0, value: [] });
        }
    ),
});
