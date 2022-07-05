import defineProperties from "@yarlajs/core/module/standard/defineProperties/index.js";
import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";
import generateMethodDescriptor from "@yarlajs/core/module/standard/generateMethodDescriptor/index.js";
import VMElement from "@yarlajs/core/lib/VMElement/index.js";
import glob from "@yarlajs/core/lib/glob/index.js";
import history from "../history/index.js";

export default defineProperties(skrinkSerializer(
    /**
     * 
     * @param {Yarla.ChildrenAttributes} props 
     * @returns {any}
     */
    function (
        props
    ) {
        return props.children;
    }
), {
    Redirect: generateMethodDescriptor(
        /**
         * 
         * @param {any} props 
         * @returns {any}
         */
        function (
            props
        ) {
            return history.redirect(props.to, props.state), null;
        }
    ),
    Link: generateMethodDescriptor(
        /**
         *
         * @param {any} props
         * @returns {any}
         */
        function (
            props
        ) {
            return VMElement.init("a", {
                href: props.to,
                class: props.class,
                style: props.style,
                onclick: function (event) {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                    history.navigate(props.to, props.state);
                }
            }, props.children);
        }
    ),
    View: generateMethodDescriptor(
        /**
         *
         * @param {any} props
         * @returns {any}
         */
        function (
            props
        ) {
            return glob(props.path).test(history.location.pathname) ? VMElement.init(props.component, { history: history }, props.children) : null;
        }
    ),
});
