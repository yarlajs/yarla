import fs from "@yarlajs/core/module/internal/fs/index.js";
import path from "@yarlajs/core/module/internal/path/index.js";
import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";
import resolve from "../resolve/index.js";
import exists from "../exists/index.js";

export default skrinkSerializer(
    /**
     * 
     * @param {string} dirname 
     */
    function (
        dirname
    ) {
        var sep = resolve(dirname).split(/[\\/]+/);
        for (var
            i = 1,
            p = sep[0] || resolve(path.sep),
            l = sep.length;
            i < l;
            i++
        ) {
            var n = resolve(p, sep[i]);
            if (!exists(n)) {
                fs.mkdirSync(n);
            }
            p = n;
        }
    }
);
