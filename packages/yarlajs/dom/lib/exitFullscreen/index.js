import document from "@yarlajs/core/module/internal/document/index.js";
import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";
import Promise from "@yarlajs/core/lib/Promise/index.js";

export default skrinkSerializer(
    /**
     * 
     * @returns {Promise<void>}
     */
    function () {
        return new Promise(function (resolve) {
            if (document.exitFullscreen) {
                return resolve(document.exitFullscreen());
            }
            // @ts-ignore
            if (document.msExitFullscreen) {
                // @ts-ignore
                return resolve(document.msExitFullscreen());
            }
            // @ts-ignore
            if (document.mozCancelFullScreen) {
                // @ts-ignore
                return resolve(document.mozCancelFullScreen());
            }
            // @ts-ignore
            if (document.webkitExitFullscreen) {
                // @ts-ignore
                return resolve(document.webkitExitFullscreen());
            }
            resolve();
        });
    }
);
