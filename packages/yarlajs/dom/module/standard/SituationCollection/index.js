import NOOP from "@yarlajs/core/module/constant/NOOP/index.js";
import message from "@yarlajs/core/module/constant/message/index.js";
import generateMethodDescriptor from "@yarlajs/core/module/standard/generateMethodDescriptor/index.js";
import defineProperties from "@yarlajs/core/module/standard/defineProperties/index.js";
import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";
import generateClass from "@yarlajs/core/module/standard/generateClass/index.js";
import Reflect from "@yarlajs/core/lib/Reflect/index.js";
import zone from "@yarlajs/core/lib/zone/index.js";

export default defineProperties(generateClass(Reflect.BASE, {
    reset: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.dom.SituationCollection}
         */
        function () {
            return Reflect.getInternal(this).index = 0, this;
        }
    ),
    push: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.dom.SituationCollection}
         * @param {T} state
         * @returns {Yarla.Situation<T>}
         * @template T 
         */
        function (
            state
        ) {
            var x = Reflect.getInternal(this);
            var r = {
                get v() {
                    return state;
                },
                f: skrinkSerializer(
                    function (v, ignoreUpdate) {
                        if (state !== v) {
                            state = v;
                            if (ignoreUpdate) {
                                return;
                            }
                            zone.forceUpdate();
                        }
                    }
                ),
            };
            x.value.push(r);
            return [
                r.v,
                r.f,
            ];
        }
    ),
    next: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.dom.SituationCollection}
         * @returns {Yarla.Situation<any>}
         */
        function () {
            var x = Reflect.getInternal(this);
            if (x.index >= x.value.length) {
                throw new Error(message.OFFSET_IS_OUTSIDE_THE_BOUNDS);
            }
            var r = x.value[x.index++];
            return [
                r.v,
                r.f,
            ];
        }
    ),
    destroy: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.dom.SituationCollection}
         */
        function () {
            Reflect.getInternal(this).value.splice(0);
        }
    ),
}, NOOP, "SituationCollection"), {
    init: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.Proto<Yarla.dom.SituationCollection>}
         */
        function () {
            return Reflect.construct(this, { index: 0, value: [] });
        }
    ),
});
