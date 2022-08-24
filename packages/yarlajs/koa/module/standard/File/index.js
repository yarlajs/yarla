import fs from "@yarlajs/core/module/internal/fs/index.js";
import path from "@yarlajs/core/module/internal/path/index.js";
import stream from "@yarlajs/core/module/internal/stream/index.js";
import definition from "@yarlajs/core/module/constant/definition/index.js";
import generateGetterDescriptor from "@yarlajs/core/module/standard/generateGetterDescriptor/index.js";
import generateMethodDescriptor from "@yarlajs/core/module/standard/generateMethodDescriptor/index.js";
import generateClass from "@yarlajs/core/module/standard/generateClass/index.js";
import ReadableStream from "@yarlajs/core/lib/ReadableStream/index.js";
import isUndefined from "@yarlajs/core/lib/isUndefined/index.js";
import Uint8Array from "@yarlajs/core/lib/Uint8Array/index.js";
import Reflect from "@yarlajs/core/lib/Reflect/index.js";
import read from "@yarlajs/core/lib/read/index.js";
import Blob from "../Blob/index.js";

export default ( /** @param {typeof File} File */ function (File) {
    return File = File || generateClass(
        /**
         * 
         * @this {import(".").default}
         * @param {BlobPart[]} fileBits
         * @param {string} fileName 
         * @param {object} [options] 
         * @param {number} [options.lastModified] 
         * @param {number} [options.start] 
         * @param {number} [options.size] 
         * @param {string} [options.type] 
         */
        function (
            fileBits,
            fileName,
            options
        ) {
            var size = options ? options.size : void 0;
            var lastModified = options ? options.lastModified : void 0;
            var start = options ? options.start || 0 : 0;
            if (isUndefined(size) ||
                isUndefined(lastModified)) {
                var stat = fs.statSync(fileName);
                if (isUndefined(size)) {
                    size = stat.size - start;
                }
                if (isUndefined(lastModified)) {
                    lastModified = stat.mtime.getTime();
                }
            }
            return (
                /**
                 * @this {any}
                 */
                function () {
                    return (
                        Reflect.defineInternal(this, size, "size"),
                        Reflect.defineInternal(this, start, "start"),
                        Reflect.defineInternal(this, lastModified, "lastModified"),
                        Reflect.defineInternal(this, path.basename(fileName), "name"),
                        Reflect.defineInternal(this, fileName, "path"));
                }
            ).call(Reflect.callSuper(this, fileBits, options));
        },
        {
            name: generateGetterDescriptor(
                /**
                 * 
                 * @this {import(".").default}
                 * @returns {string}
                 */
                function () {
                    return Reflect.getInternal(this).name;
                }
            ),
            path: generateGetterDescriptor(
                /**
                 * 
                 * @this {import(".").default}
                 * @returns {string}
                 */
                function () {
                    return Reflect.getInternal(this).path;
                }
            ),
            size: generateGetterDescriptor(
                /**
                 * 
                 * @this {import(".").default}
                 * @returns {number}
                 */
                function () {
                    return Reflect.getInternal(this).size;
                }
            ),
            start: generateGetterDescriptor(
                /**
                 * 
                 * @this {import(".").default}
                 * @returns {number}
                 */
                function () {
                    return Reflect.getInternal(this).start;
                }
            ),
            lastModified: generateGetterDescriptor(
                /**
                 * 
                 * @this {import(".").default}
                 * @returns {number}
                 */
                function () {
                    return Reflect.getInternal(this).lastModified;
                }
            ),
            slice: generateMethodDescriptor(
                /**
                 * 
                 * @this {import(".").default}
                 * @param {number} [start] 
                 * @param {number} [end] 
                 */
                function (
                    start,
                    end
                ) {
                    if (isUndefined(start)) {
                        start = this.start;
                    } else if (start >= 0) {
                        start = this.start + start;
                    } else {
                        start = this.size + start;
                    }
                    if (isUndefined(end)) {
                        end = this.size;
                    } else if (end >= 0) {
                        end = this.start + end;
                    } else {
                        end = this.size + end;
                    }
                    var size = end - start;
                    return new File([], this.path, {
                        type: this.type,
                        lastModified: this.lastModified,
                        // @ts-ignore
                        start: start,
                        // @ts-ignore
                        size: size,
                    });
                }
            ),
            stream: generateMethodDescriptor(
                /**
                 * 
                 * @this {import(".").default}
                 */
                function () {
                    return ReadableStream.from(
                        fs.createReadStream(this.path, {
                            end: this.start + this.size - 1,
                            start: this.start,
                        })
                    );
                }
            ),
            arrayBuffer: generateMethodDescriptor(
                /**
                 * 
                 * @this {import(".").default}
                 * @returns {Promise<ArrayBuffer>}
                 */
                function () {
                    return read(
                        stream.Readable.from(this.stream())
                    ).then(function (i) {
                        return new Uint8Array(i).buffer;
                    });
                }
            ),
            text: generateMethodDescriptor(
                /**
                 * 
                 * @this {import(".").default}
                 * @returns {Promise<string>}
                 */
                function () {
                    return read(
                        stream.Readable.from(this.stream())
                    ).then(function (i) {
                        return i.toString(definition.UTF8);
                    });
                }
            ),
        },
        Blob,
        "File"
    );
}());
