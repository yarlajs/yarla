import NOOP from "@yarlajs/core/module/constant/NOOP/index.js";
import defineProperties from "@yarlajs/core/module/standard/defineProperties/index.js";
import generateGetterDescriptor from "@yarlajs/core/module/standard/generateGetterDescriptor/index.js";
import generateMethodDescriptor from "@yarlajs/core/module/standard/generateMethodDescriptor/index.js";
import generateClass from "@yarlajs/core/module/standard/generateClass/index.js";
import Reflect from "@yarlajs/core/lib/Reflect/index.js";

export default defineProperties(generateClass(Reflect.BASE, {
    id: generateGetterDescriptor(
        /**
         * 
         * @this {Yarla.koa.Session}
         * @returns {string}
         */
        function () {
            return Reflect.getInternal(this).id;
        },
        true
    ),
    get: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.koa.Session}
         * @param {string} key 
         * @returns {Promise<any>}
         */
        function (key) {
            return Reflect.getInternal(this).os.get(this.id, key);
        }
    ),
    set: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.koa.Session}
         * @param {string} key
         * @param {any} value 
         * @returns {Promise<any>}
         */
        function (key, value) {
            return Reflect.getInternal(this).os.get(this.id, key, value);
        }
    ),
}, NOOP, "Session"), {
    init: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.Proto<Yarla.koa.Session>}
         * @param {string} id 
         * @param {Yarla.koa.SessionStorage} storage 
         */
        function (
            id,
            storage
        ) {
            return Reflect.construct(this, {
                os: storage,
                id: id,
            });
        }
    ),
});
