import history from "@yarlajs/core/module/internal/history/index.js";
import location from "@yarlajs/core/module/internal/location/index.js";
import globalThis from "@yarlajs/core/module/internal/globalThis/index.js";
import generateGetterDescriptor from "@yarlajs/core/module/standard/generateGetterDescriptor/index.js";
import generateMethodDescriptor from "@yarlajs/core/module/standard/generateMethodDescriptor/index.js";
import generateNormalDescriptor from "@yarlajs/core/module/standard/generateNormalDescriptor/index.js";
import createInstance from "@yarlajs/core/module/standard/createInstance/index.js";
import bean from "../../module/standard/bean/index.js";
import Location from "./Location/index.js";
import History from "./History/index.js";

export default createInstance(History, {
    location: generateNormalDescriptor(
        createInstance(Location, {
            protocol: generateGetterDescriptor(
                function () {
                    return location.protocol;
                }
            ),
            host: generateGetterDescriptor(
                function () {
                    return location.host;
                }
            ),
            hostname: generateGetterDescriptor(
                function () {
                    return location.hostname;
                }
            ),
            port: generateGetterDescriptor(
                function () {
                    return location.port;
                }
            ),
            pathname: generateGetterDescriptor(
                function () {
                    return location.pathname;
                }
            ),
            search: generateGetterDescriptor(
                function () {
                    return location.search;
                }
            ),
            hash: generateGetterDescriptor(
                function () {
                    return location.hash;
                }
            ),
            href: generateGetterDescriptor(
                function () {
                    return location.href;
                }
            ),
        })
    ),
    length: generateGetterDescriptor(
        function () {
            return history.length;
        }
    ),
    state: generateGetterDescriptor(
        function () {
            return history.state;
        }
    ),
    back: generateMethodDescriptor(
        function () {
            history.back();
        }
    ),
    forward: generateMethodDescriptor(
        function () {
            history.forward();
        }
    ),
    go: generateMethodDescriptor(
        /**
         * 
         * @param {number} [delta] 
         */
        function (
            delta
        ) {
            history.go(delta);
        }
    ),
    navigate: generateMethodDescriptor(
        /**
         * 
         * @param {string} url 
         * @param {any} [state] 
         */
        function (
            url,
            state
        ) {
            if (history.pushState) {
                history.pushState(state, "", url);
            } else {
                location.assign(url);
                // @ts-ignore
                history.state = state;
            }
        }
    ),
    redirect: generateMethodDescriptor(
        function (
            url,
            state
        ) {
            if (history.replaceState) {
                history.replaceState(state, "", url);
            } else {
                location.replace(url);
                // @ts-ignore
                history.state = state;
            }
        }
    ),
    listen: generateMethodDescriptor(
        /**
         * 
         * @param {Yarla.EventListenerOrEventListenerObject} listener 
         * @param {Yarla.AddEventListenerOptions} [opts] 
         */
        function (
            listener,
            opts
        ) {
            return bean.wrap(globalThis).listen("popstate", listener, opts);
        }
    ),
});
