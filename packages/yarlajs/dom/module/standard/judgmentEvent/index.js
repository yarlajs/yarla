import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";
import startsWith from "@yarlajs/core/module/standard/startsWith/index.js";

export default skrinkSerializer(
    /**
     * 
     * @param {string} attributeName 
     */
    function (
        attributeName
    ) {
        if (startsWith(attributeName, "on")) {
            var t,
                /** @type {AddEventListenerOptions} */
                o = {};
            var i = attributeName.indexOf(":");
            if (i === -1) {
                t = attributeName.slice(2);
            } else {
                t = attributeName.slice(2, i);
                switch (attributeName.slice(i + 1)) {
                    case "all":
                        o.capture = true;
                        o.passive = false;
                        break;
                    case "capture":
                        o.capture = true;
                        break;
                    case "passive":
                        o.passive = false;
                        break;
                }
            }
            return {
                type: t,
                opts: o,
            };
        }
    }
);
