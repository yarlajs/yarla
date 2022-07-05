import message from "@yarlajs/core/module/constant/message/index.js";
import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";
import Promise from "@yarlajs/core/lib/Promise/index.js";
import bean from "../../module/standard/bean/index.js";

export default skrinkSerializer(
    /**
     * 
     * @param {Yarla.Element} element 
     * @param {FullscreenOptions} [opts] 
     * @returns {Promise<void>}
     */
    function (
        element,
        opts
    ) {
        return new Promise(function (resolve) {
            var instance = bean.real(element);
            if (instance.requestFullscreen) {
                return resolve(instance.requestFullscreen(opts));
            }
            // @ts-ignore
            if (instance.msRequestFullscreen) {
                // @ts-ignore
                return resolve(instance.msRequestFullscreen(opts));
            }
            // @ts-ignore
            if (instance.mozRequestFullScreen) {
                // @ts-ignore
                return resolve(instance.mozRequestFullScreen(opts));
            }
            // @ts-ignore
            if (instance.webkitRequestFullScreen) {
                // @ts-ignore
                return resolve(instance.webkitRequestFullScreen(opts));
            }
            throw new Error(message.NOT_SUPPORTED);
        });
    }
);
