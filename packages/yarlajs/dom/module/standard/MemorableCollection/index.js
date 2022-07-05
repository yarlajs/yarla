import NOOP from "@yarlajs/core/module/constant/NOOP/index.js";
import message from "@yarlajs/core/module/constant/message/index.js";
import generateMethodDescriptor from "@yarlajs/core/module/standard/generateMethodDescriptor/index.js";
import compareDifferList from "@yarlajs/core/module/standard/compareDifferList/index.js";
import defineProperties from "@yarlajs/core/module/standard/defineProperties/index.js";
import generateClass from "@yarlajs/core/module/standard/generateClass/index.js";
import isNullOrUndefined from "@yarlajs/core/lib/isNullOrUndefined/index.js";
import Reflect from "@yarlajs/core/lib/Reflect/index.js";

export default defineProperties(generateClass(Reflect.BASE, {
    reset: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.dom.MemorableCollection}
         */
        function () {
            return Reflect.getInternal(this).index = 0, this;
        }
    ),
    push: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.dom.MemorableCollection}
         * @param {() => T} factory 
         * @param {ReadonlyArray<any>} [dependencies] 
         * @returns {T}
         * @template T
         */
        function (
            factory,
            dependencies
        ) {
            var x = Reflect.getInternal(this);
            var r = {
                d: dependencies,
                b: isNullOrUndefined(dependencies),
                v: factory.call(null),
            };
            x.value.push(r);
            return r.v;
        }
    ),
    next: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.dom.MemorableCollection}
         * @param {() => T} factory 
         * @param {ReadonlyArray<any>} [dependencies] 
         * @returns {T}
         * @template T
         */
        function (
            factory,
            dependencies
        ) {
            var x = Reflect.getInternal(this);
            if (x.index >= x.value.length) {
                throw new Error(message.OFFSET_IS_OUTSIDE_THE_BOUNDS);
            }
            var r = x.value[x.index++];
            if (r.b || compareDifferList(r.d, dependencies)) {
                r.v = factory.call(null);
                r.d = dependencies;
            }
            return r.v;
        }
    ),
    destroy: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.dom.MemorableCollection}
         */
        function () {
            Reflect.getInternal(this).value.splice(0);
        }
    ),
}, NOOP, "MemorableCollection"), {
    init: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.Proto<Yarla.dom.MemorableCollection>}
         */
        function (
        ) {
            return Reflect.construct(this, { index: 0, value: [] });
        }
    ),
});
