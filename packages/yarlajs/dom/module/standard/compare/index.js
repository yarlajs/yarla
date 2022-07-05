import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";
import isEqual from "@yarlajs/core/lib/isEqual/index.js";

export default skrinkSerializer(
    /**
     * 
     * @param {Readonly<Record<string, any>>} properties1 
     * @param {Readonly<Record<string, any>>} properties2 
     */
    function (
        properties1,
        properties2
    ) {
        var r = {
            added: {},
            deleted: {},
            updated: {},
        };
        if (properties1 !== properties2) {
            for (var name in properties1) {
                if (!(name in properties2)) {
                    r.deleted[name] = properties1[name];
                } else if (!isEqual(properties1[name], properties2[name])) {
                    r.updated[name] = [properties1[name], properties2[name]];
                }
            }
            for (var name in properties2) {
                if (!(name in properties1)) {
                    r.added[name] = properties2[name];
                }
            }
        }
        return r;
    }
);
