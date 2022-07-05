import path from "@yarlajs/core/module/internal/path/index.js";
import crypto from "@yarlajs/core/module/internal/crypto/index.js";
import definition from "@yarlajs/core/module/constant/definition/index.js";
import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";
import statSync from "../statSync/index.js";

export default skrinkSerializer(
    /**
     * 
     * @param {string} filename 
     */
    function (
        filename
    ) {
        var s = statSync(filename);
        return {
            path: filename,
            name: path.basename(filename),
            hash: crypto.createHash(definition.MD5).update([filename, s.mtime.toJSON(), s.size].join("-")).digest(definition.HEX),
            atime: s.atime,
            ctime: s.ctime,
            mtime: s.mtime,
            size: s.size,
        };
    }
);
