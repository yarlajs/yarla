import NOOP from "@yarlajs/core/module/constant/NOOP/index.js";
import generateGetterDescriptor from "@yarlajs/core/module/standard/generateGetterDescriptor/index.js";
import generateClass from "@yarlajs/core/module/standard/generateClass/index.js";
import Reflect from "@yarlajs/core/lib/Reflect/index.js";

export default generateClass(
    /**
     * 
     * @this {any}
     * @param {Blob | Buffer | import("stream").Readable} data 
     * @param {string} [filename] 
     * @param {string} [mimetype] 
     * @param {object} [modified] 
     * @param {string} [modified.match] 
     * @param {number} [modified.mtime] 
     */
    function (
        data,
        filename,
        mimetype,
        modified
    ) {
        return (
            Reflect.defineInternal(this, data, "data"),
            Reflect.defineInternal(this, filename, "filename"),
            Reflect.defineInternal(this, mimetype, "mimetype"),
            Reflect.defineInternal(this, modified, "modified"));
    },
    {
        data: generateGetterDescriptor(
            /**
             * 
             * @this {any}
             * @returns {Blob | Buffer | import("stream").Readable}
             */
            function () {
                return Reflect.getInternal(this).data;
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
        modified: generateGetterDescriptor(
            /**
             * 
             * @this {any}
             * @returns {{ readonly match?: string; readonly mtime?: number; } | undefined}
             */
            function () {
                return Reflect.getInternal(this).modified;
            }
        ),
    },
    NOOP,
    "DataResult"
);
