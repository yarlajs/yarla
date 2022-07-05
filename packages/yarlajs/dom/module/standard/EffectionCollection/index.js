import NOOP from "@yarlajs/core/module/constant/NOOP/index.js";
import message from "@yarlajs/core/module/constant/message/index.js";
import generateMethodDescriptor from "@yarlajs/core/module/standard/generateMethodDescriptor/index.js";
import compareDifferList from "@yarlajs/core/module/standard/compareDifferList/index.js";
import defineProperties from "@yarlajs/core/module/standard/defineProperties/index.js";
import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";
import generateClass from "@yarlajs/core/module/standard/generateClass/index.js";
import isNullOrUndefined from "@yarlajs/core/lib/isNullOrUndefined/index.js";
import isFunction from "@yarlajs/core/lib/isFunction/index.js";
import Reflect from "@yarlajs/core/lib/Reflect/index.js";

export default defineProperties(generateClass(Reflect.BASE, {
    reset: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.dom.EffectionCollection}
         */
        function () {
            return Reflect.getInternal(this).index = 0, this;
        }
    ),
    push: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.dom.EffectionCollection}
         * @param {Yarla.Effection} effection 
         * @param {ReadonlyArray<any>} [dependencies] 
         * @returns {Yarla.NOOP}
         */
        function (
            effection,
            dependencies
        ) {
            var x = Reflect.getInternal(this);
            var r = {
                f: effection,
                d: dependencies,
                b: isNullOrUndefined(dependencies),
                v: null,
            };
            x.value.push(r);
            return skrinkSerializer(
                function () {
                    r.v = r.f.call(null);
                }
            );
        }
    ),
    next: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.dom.EffectionCollection}
         * @param {Yarla.Effection} effection 
         * @param {ReadonlyArray<any>} [dependencies] 
         * @returns {Yarla.NOOP}
         */
        function (
            effection,
            dependencies
        ) {
            var x = Reflect.getInternal(this);
            if (x.index >= x.value.length) {
                throw new Error(message.OFFSET_IS_OUTSIDE_THE_BOUNDS);
            }
            var r = x.value[x.index++];
            if (r.b || compareDifferList(r.d, dependencies)) {
                r.f = effection;
                r.d = dependencies;
                if (isFunction(r.v)) {
                    r.v.call(null);
                } else if (r.v) {
                    r.v.cancel();
                }
                return skrinkSerializer(
                    function () {
                        r.v = r.f.call(null);
                    }
                );
            }
            return NOOP;
        }
    ),
    destroy: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.dom.EffectionCollection}
         */
        function () {
            Reflect.getInternal(this).value.splice(0).forEach(function (i) {
                if (isFunction(i.v)) {
                    i.v.call(null);
                } else if (i.v) {
                    i.v.cancel();
                }
            });
        }
    ),
}, NOOP, "EffectionCollection"), {
    init: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.Proto<Yarla.dom.EffectionCollection>}
         */
        function (
        ) {
            return Reflect.construct(this, { index: 0, value: [] });
        }
    ),
});
