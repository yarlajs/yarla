import NOOP from "@yarlajs/core/module/constant/NOOP/index.js";
import generateGetterDescriptor from "@yarlajs/core/module/standard/generateGetterDescriptor/index.js";
import generateClass from "@yarlajs/core/module/standard/generateClass/index.js";
import Reflect from "@yarlajs/core/lib/Reflect/index.js";

export default generateClass(
    /**
     * 
     * @this {any}
     * @param {string} path 
     * @param {string} [filename] 
     * @param {string} [mimetype] 
     */
    function (
        path,
        filename,
        mimetype
    ) {
        return (
            Reflect.defineInternal(this, path, "path"),
            Reflect.defineInternal(this, filename, "filename"),
            Reflect.defineInternal(this, mimetype, "mimetype"));
    },
    {
        path: generateGetterDescriptor(
            /**
             * 
             * @this {any}
             * @returns {string}
             */
            function () {
                return Reflect.getInternal(this).path;
            }
        ),
        filename: generateGetterDescriptor(
            /**
             * 
             * @this {any}
             * @returns {string | undefined}
             */
            function () {
                return Reflect.getInternal(this).filename;
            }
        ),
        mimetype: generateGetterDescriptor(
            /**
             * 
             * @this {any}
             * @returns {string | undefined}
             */
            function () {
                return Reflect.getInternal(this).mimetype;
            }
        ),
    },
    NOOP,
    "FileResult"
);
