import definition from "@yarlajs/core/module/constant/definition/index.js";
import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";
import isString from "@yarlajs/core/lib/isString/index.js";
import readFileSync from "../readFileSync/index.js";
import isDirectory from "../isDirectory/index.js";
import resolve from "../resolve/index.js";
import isFile from "../isFile/index.js";

export default (function () {
    return skrinkSerializer(
        /**
         * 
         * @param {string} filename 
         * @param {ReadonlyArray<string>} [extnames] 
         */
        function (
            filename,
            extnames
        ) {
            return loadAll(filename, extnames || ["js"]);
        }
    );
    /**
     * 
     * @param {string} filename 
     * @param {ReadonlyArray<string>} extnames 
     * @returns {string | undefined}
     */
    function loadAll(
        filename,
        extnames
    ) {
        return loadSrc(filename, extnames)
            || loadDir(filename, extnames);
    }
    /**
     * 
     * @param {string} filename 
     * @param {ReadonlyArray<string>} extnames 
     * @returns {string | undefined}
     */
    function loadSrc(
        filename,
        extnames
    ) {
        if (isFile(filename)) {
            return filename;
        }
        for (var
            i = 0,
            l = extnames.length;
            i < l;
            i++
        ) {
            var n = extnames[i];
            if (n.charAt(0) === ".") {
                n = filename + n;
            } else {
                n = filename + "." + n;
            }
            if (isFile(n)) {
                return n;
            }
        }
    }
    /**
     * 
     * @param {string} filename 
     * @param {ReadonlyArray<string>} extnames 
     * @returns {string | undefined}
     */
    function loadDir(
        filename,
        extnames
    ) {
        if (isDirectory(filename)) {
            return loadPkg(filename, extnames)
                || loadIdx(filename, extnames);
        }
    }
    /**
     * 
     * @param {string} filename 
     * @param {ReadonlyArray<string>} extnames 
     * @returns {string | undefined}
     */
    function loadPkg(
        filename,
        extnames
    ) {
        var position = resolve(filename, "package.json");
        if (isFile(position)) {
            var info = JSON.parse(readFileSync(position).toString(definition.UTF8));
            var main = info.main;
            if (isString(main)) {
                return loadAll(resolve(filename, main), extnames);
            }
        }
    }
    /**
     * 
     * @param {string} filename 
     * @param {ReadonlyArray<string>} extnames 
     * @returns {string | undefined}
     */
    function loadIdx(
        filename,
        extnames
    ) {
        return loadSrc(resolve(filename, "index"), extnames);
    }
}());
