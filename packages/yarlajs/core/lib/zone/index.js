import message from "../../module/constant/message/index.js";
import setImmediate from "../../module/internal/setImmediate/index.js";
import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import flat from "../flat/index.js";

export default (function () {
    /** @type {Array<readonly [boolean, Yarla.Application]>} */
    var apps = [];
    /** @type {Array<readonly [Yarla.NoReturnsFunc, any[]]>} */
    var jobs = [];
    /** @type {boolean} */
    var idle = true;
    /** @type {Yarla.Hook | null} */
    var currentTarget = null;
    /** @type {Yarla.Hook} */
    var hook = {
        useRef: skrinkSerializer(
            function () {
                throw new Error(message.ONLY_USED_IN_COMPONENTS);
            }
        ),
        useMemo: skrinkSerializer(
            function () {
                throw new Error(message.ONLY_USED_IN_COMPONENTS);
            }
        ),
        useState: skrinkSerializer(
            function () {
                throw new Error(message.ONLY_USED_IN_COMPONENTS);
            }
        ),
        useTarget: skrinkSerializer(
            function () {
                throw new Error(message.ONLY_USED_IN_COMPONENTS);
            }
        ),
        useEffect: skrinkSerializer(
            function () {
                throw new Error(message.ONLY_USED_IN_COMPONENTS);
            }
        ),
    };
    return {
        get target() {
            return currentTarget || hook;
        },
        get currentTarget() {
            return currentTarget;
        },
        mount: skrinkSerializer(
            /**
             * 
             * @param {Yarla.Application} application 
             * @param {boolean} [ignoreUpdate] 
             * @returns {Yarla.Application}
             */
            function (
                application,
                ignoreUpdate
            ) {
                /**
                 * @type {[boolean, Yarla.Application]}
                 */
                var r = [
                    !!ignoreUpdate,
                    {
                        forceUpdate: skrinkSerializer(
                            function () {
                                return application.forceUpdate();
                            }
                        ),
                        unmount: skrinkSerializer(
                            function () {
                                var loc = apps.indexOf(r);
                                if (loc !== -1) {
                                    apps.splice(loc, 1);
                                }
                                return application.unmount();
                            }
                        ),
                    }
                ];
                apps.push(r);
                return r[1];
            }
        ),
        scope: skrinkSerializer(
            /**
             * 
             * @param {Parameters<typeof import(".").default.scope>[0]} hook 
             * @param {Parameters<typeof import(".").default.scope>[1]} processor 
             * @param {any[]} argv
             */
            function (
                hook,
                processor,
                argv
            ) {
                var previousTarget = currentTarget;
                try {
                    return processor.apply(currentTarget = hook, argv);
                } finally {
                    currentTarget = previousTarget;
                }
            }
        ),
        nextTick: skrinkSerializer(
            /**
             * 
             * @param {Yarla.NoReturnsFunc} task 
             * @returns {Yarla.Cancelable}
             */
            function (
                task
            ) {
                /** @type {readonly [Yarla.NoReturnsFunc, any[]]} */
                var r = [
                    task,
                    flat(arguments, 1),
                ];
                jobs.push(r);
                return {
                    cancel: skrinkSerializer(
                        function () {
                            var loc = jobs.indexOf(r);
                            if (loc !== -1) {
                                jobs.splice(loc, 1);
                            }
                        }
                    ),
                };
            }
        ),
        forceUpdate: skrinkSerializer(
            function () {
                if (idle) {
                    idle = false;
                    setImmediate(function () {
                        try {
                            apps.slice(0).forEach(
                                function (i) {
                                    i[0] || i[1].forceUpdate();
                                }
                            );
                            jobs.splice(0).forEach(
                                function (i) {
                                    i[0].apply(null, i[1]);
                                }
                            );
                        } finally {
                            idle = true;
                        }
                    });
                }
            }
        ),
    };
}());
