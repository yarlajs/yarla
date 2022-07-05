import path from "@yarlajs/core/module/internal/path/index.js";
import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";
import flat from "@yarlajs/core/lib/flat/index.js";

export default skrinkSerializer(
    function () {
        return path.resolve.apply(path, flat(arguments));
    }
);
